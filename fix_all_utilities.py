#!/usr/bin/env python3
"""
Script to fix all remaining corrupted utility files.
"""

import os
import re
from pathlib import Path

def create_utility_content(filename):
    """Create appropriate utility content based on filename."""
    
    if 'logger' in filename.lower():
        return '''// Logger utility
export enum LogLevel {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error'
}

export interface LogEntry {
  level: LogLevel
  message: string
  timestamp: Date
  context?: Record<string, any>
}

export class Logger {
  private logs: LogEntry[] = []
  private minLevel: LogLevel = LogLevel.INFO

  constructor(minLevel: LogLevel = LogLevel.INFO) {
    this.minLevel = minLevel
  }

  private shouldLog(level: LogLevel): boolean {
    const levels = [LogLevel.DEBUG, LogLevel.INFO, LogLevel.WARN, LogLevel.ERROR]
    return levels.indexOf(level) >= levels.indexOf(this.minLevel)
  }

  debug(message: string, context?: Record<string, any>): void {
    this.log(LogLevel.DEBUG, message, context)
  }

  info(message: string, context?: Record<string, any>): void {
    this.log(LogLevel.INFO, message, context)
  }

  warn(message: string, context?: Record<string, any>): void {
    this.log(LogLevel.WARN, message, context)
  }

  error(message: string, context?: Record<string, any>): void {
    this.log(LogLevel.ERROR, message, context)
  }

  private log(level: LogLevel, message: string, context?: Record<string, any>): void {
    if (!this.shouldLog(level)) return

    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date(),
      context
    }

    this.logs.push(entry)
    console[level](`[${level.toUpperCase()}] ${message}`, context || '')
  }

  getLogs(): LogEntry[] {
    return [...this.logs]
  }

  clearLogs(): void {
    this.logs = []
  }
}

export default Logger
'''
    
    elif 'performance' in filename.lower():
        return '''// Performance monitoring utility
export interface PerformanceMetric {
  name: string
  value: number
  timestamp: Date
  unit?: string
}

export interface PerformanceConfig {
  enabled: boolean
  sampleRate: number
  maxMetrics: number
}

export class PerformanceMonitor {
  private config: PerformanceConfig
  private metrics: PerformanceMetric[] = []

  constructor(config: PerformanceConfig) {
    this.config = config
  }

  recordMetric(name: string, value: number, unit?: string): void {
    if (!this.config.enabled) return

    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: new Date(),
      unit
    }

    this.metrics.push(metric)

    // Keep only the most recent metrics
    if (this.metrics.length > this.config.maxMetrics) {
      this.metrics = this.metrics.slice(-this.config.maxMetrics)
    }
  }

  getMetrics(name?: string): PerformanceMetric[] {
    if (name) {
      return this.metrics.filter(m => m.name === name)
    }
    return [...this.metrics]
  }

  getAverageMetric(name: string): number | null {
    const metrics = this.getMetrics(name)
    if (metrics.length === 0) return null

    const sum = metrics.reduce((acc, metric) => acc + metric.value, 0)
    return sum / metrics.length
  }

  clearMetrics(): void {
    this.metrics = []
  }
}

export default PerformanceMonitor
'''
    
    elif 'error' in filename.lower():
        return '''// Error handling utility
export interface ErrorInfo {
  message: string
  stack?: string
  timestamp: Date
  context?: Record<string, any>
  severity: 'low' | 'medium' | 'high' | 'critical'
}

export interface ErrorHandlerConfig {
  enabled: boolean
  maxErrors: number
  reportToConsole: boolean
}

export class ErrorHandler {
  private config: ErrorHandlerConfig
  private errors: ErrorInfo[] = []

  constructor(config: ErrorHandlerConfig) {
    this.config = config
  }

  handleError(error: Error, context?: Record<string, any>, severity: 'low' | 'medium' | 'high' | 'critical' = 'medium'): void {
    if (!this.config.enabled) return

    const errorInfo: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date(),
      context,
      severity
    }

    this.errors.push(errorInfo)

    if (this.config.reportToConsole) {
      console.error('Error handled:', errorInfo)
    }

    // Keep only the most recent errors
    if (this.errors.length > this.config.maxErrors) {
      this.errors = this.errors.slice(-this.config.maxErrors)
    }
  }

  getErrors(): ErrorInfo[] {
    return [...this.errors]
  }

  getErrorsBySeverity(severity: ErrorInfo['severity']): ErrorInfo[] {
    return this.errors.filter(error => error.severity === severity)
  }

  clearErrors(): void {
    this.errors = []
  }
}

export default ErrorHandler
'''
    
    elif 'validation' in filename.lower() or 'validator' in filename.lower():
        return '''// Validation utility
export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: any) => boolean | string
}

export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

export class Validator {
  private rules: Record<string, ValidationRule[]> = {}

  addRule(field: string, rule: ValidationRule): void {
    if (!this.rules[field]) {
      this.rules[field] = []
    }
    this.rules[field].push(rule)
  }

  validate(data: Record<string, any>): ValidationResult {
    const errors: string[] = []

    for (const [field, value] of Object.entries(data)) {
      const fieldRules = this.rules[field] || []
      
      for (const rule of fieldRules) {
        const error = this.validateField(field, value, rule)
        if (error) {
          errors.push(error)
        }
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }

  private validateField(field: string, value: any, rule: ValidationRule): string | null {
    // Required validation
    if (rule.required && (value === undefined || value === null || value === '')) {
      return `${field} is required`
    }

    if (value === undefined || value === null || value === '') {
      return null // Skip other validations if value is empty and not required
    }

    // String length validation
    if (typeof value === 'string') {
      if (rule.minLength && value.length < rule.minLength) {
        return `${field} must be at least ${rule.minLength} characters long`
      }
      if (rule.maxLength && value.length > rule.maxLength) {
        return `${field} must be no more than ${rule.maxLength} characters long`
      }
    }

    // Pattern validation
    if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
      return `${field} format is invalid`
    }

    // Custom validation
    if (rule.custom) {
      const result = rule.custom(value)
      if (result !== true) {
        return typeof result === 'string' ? result : `${field} is invalid`
      }
    }

    return null
  }
}

export default Validator
'''
    
    elif 'security' in filename.lower():
        return '''// Security utility
export interface SecurityConfig {
  enabled: boolean
  maxAttempts: number
  lockoutDuration: number
}

export class SecurityManager {
  private config: SecurityConfig
  private attempts: Map<string, { count: number; lastAttempt: Date }> = new Map()

  constructor(config: SecurityConfig) {
    this.config = config
  }

  recordAttempt(identifier: string): boolean {
    if (!this.config.enabled) return true

    const now = new Date()
    const existing = this.attempts.get(identifier)

    if (!existing) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now })
      return true
    }

    // Check if lockout period has expired
    const timeSinceLastAttempt = now.getTime() - existing.lastAttempt.getTime()
    if (timeSinceLastAttempt > this.config.lockoutDuration) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now })
      return true
    }

    // Increment attempt count
    existing.count++
    existing.lastAttempt = now

    return existing.count <= this.config.maxAttempts
  }

  isLocked(identifier: string): boolean {
    const existing = this.attempts.get(identifier)
    if (!existing) return false

    const now = new Date()
    const timeSinceLastAttempt = now.getTime() - existing.lastAttempt.getTime()
    
    return existing.count >= this.config.maxAttempts && 
           timeSinceLastAttempt < this.config.lockoutDuration
  }

  resetAttempts(identifier: string): void {
    this.attempts.delete(identifier)
  }

  clearAllAttempts(): void {
    this.attempts.clear()
  }
}

export default SecurityManager
'''
    
    elif 'seo' in filename.lower():
        return '''// SEO utility
export interface SEOConfig {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
}

export class SEOEnhancer {
  private config: SEOConfig

  constructor(config: SEOConfig = {}) {
    this.config = config
  }

  generateMetaTags(config: SEOConfig = {}): Record<string, string> {
    const mergedConfig = { ...this.config, ...config }
    
    return {
      title: mergedConfig.title || 'Default Title',
      description: mergedConfig.description || 'Default Description',
      keywords: mergedConfig.keywords?.join(', ') || '',
      canonical: mergedConfig.canonical || '',
      'og:title': mergedConfig.title || 'Default Title',
      'og:description': mergedConfig.description || 'Default Description',
      'og:image': mergedConfig.ogImage || '',
      'og:url': mergedConfig.canonical || '',
      'twitter:card': 'summary_large_image',
      'twitter:title': mergedConfig.title || 'Default Title',
      'twitter:description': mergedConfig.description || 'Default Description',
      'twitter:image': mergedConfig.ogImage || ''
    }
  }

  updateDocumentTitle(title: string): void {
    if (typeof document !== 'undefined') {
      document.title = title
    }
  }

  updateMetaTag(name: string, content: string): void {
    if (typeof document !== 'undefined') {
      let meta = document.querySelector(`meta[name="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }
  }
}

export default SEOEnhancer
'''
    
    elif 'data' in filename.lower():
        return '''// Data transformation utility
export interface TransformConfig {
  fields?: string[]
  mappings?: Record<string, string>
  filters?: Record<string, any>
}

export class DataTransformer {
  private config: TransformConfig

  constructor(config: TransformConfig = {}) {
    this.config = config
  }

  transform<T>(data: T[], config: TransformConfig = {}): T[] {
    const mergedConfig = { ...this.config, ...config }
    let result = [...data]

    // Apply field filtering
    if (mergedConfig.fields) {
      result = result.map(item => {
        const filtered: any = {}
        mergedConfig.fields!.forEach(field => {
          if (field in item) {
            filtered[field] = (item as any)[field]
          }
        })
        return filtered as T
      })
    }

    // Apply field mappings
    if (mergedConfig.mappings) {
      result = result.map(item => {
        const mapped: any = { ...item }
        Object.entries(mergedConfig.mappings!).forEach(([from, to]) => {
          if (from in mapped) {
            mapped[to] = mapped[from]
            delete mapped[from]
          }
        })
        return mapped as T
      })
    }

    // Apply filters
    if (mergedConfig.filters) {
      result = result.filter(item => {
        return Object.entries(mergedConfig.filters!).every(([key, value]) => {
          return (item as any)[key] === value
        })
      })
    }

    return result
  }

  groupBy<T>(data: T[], key: keyof T): Record<string, T[]> {
    return data.reduce((groups, item) => {
      const groupKey = String(item[key])
      if (!groups[groupKey]) {
        groups[groupKey] = []
      }
      groups[groupKey].push(item)
      return groups
    }, {} as Record<string, T[]>)
  }

  sortBy<T>(data: T[], key: keyof T, direction: 'asc' | 'desc' = 'asc'): T[] {
    return [...data].sort((a, b) => {
      const aVal = a[key]
      const bVal = b[key]
      
      if (aVal < bVal) return direction === 'asc' ? -1 : 1
      if (aVal > bVal) return direction === 'asc' ? 1 : -1
      return 0
    })
  }
}

export default DataTransformer
'''
    
    elif 'monitoring' in filename.lower():
        return '''// Monitoring utility
export interface MonitoringConfig {
  enabled: boolean
  interval: number
  maxDataPoints: number
}

export interface MonitoringData {
  timestamp: Date
  value: number
  label: string
}

export class Monitoring {
  private config: MonitoringConfig
  private data: MonitoringData[] = []
  private intervalId?: NodeJS.Timeout

  constructor(config: MonitoringConfig) {
    this.config = config
  }

  start(): void {
    if (!this.config.enabled || this.intervalId) return

    this.intervalId = setInterval(() => {
      this.collectData()
    }, this.config.interval)
  }

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = undefined
    }
  }

  private collectData(): void {
    // Collect performance data
    const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0
    const timestamp = new Date()

    this.data.push({
      timestamp,
      value: memoryUsage,
      label: 'memory_usage'
    })

    // Keep only recent data points
    if (this.data.length > this.config.maxDataPoints) {
      this.data = this.data.slice(-this.config.maxDataPoints)
    }
  }

  getData(): MonitoringData[] {
    return [...this.data]
  }

  getAverageValue(label: string): number | null {
    const filteredData = this.data.filter(d => d.label === label)
    if (filteredData.length === 0) return null

    const sum = filteredData.reduce((acc, d) => acc + d.value, 0)
    return sum / filteredData.length
  }

  clearData(): void {
    this.data = []
  }
}

export default Monitoring
'''
    
    else:
        # Generic utility
        return f'''// {filename} utility
export interface {filename}Config {{
  enabled: boolean
  debug?: boolean
}}

export class {filename} {{
  private config: {filename}Config

  constructor(config: {filename}Config) {{
    this.config = config
  }}

  initialize(): void {{
    if (this.config.debug) {{
      console.log('{filename} initialized')
    }}
  }}

  cleanup(): void {{
    if (this.config.debug) {{
      console.log('{filename} cleaned up')
    }}
  }}
}}

export default {filename}
'''

def fix_utility_file(file_path):
    """Fix a single utility file."""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if it's a corrupted file
    if "'use client'" in content and "React.FC" in content:
        print(f"Fixing corrupted file: {file_path}")
        
        filename = Path(file_path).stem
        new_content = create_utility_content(filename)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
    
    return False

def main():
    """Main function to fix all corrupted utility files."""
    utils_dir = Path('/workspace/app/utils')
    
    if not utils_dir.exists():
        print("Utils directory not found")
        return
    
    fixed_count = 0
    total_count = 0
    
    for file_path in utils_dir.glob('*.ts'):
        total_count += 1
        if fix_utility_file(str(file_path)):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} out of {total_count} utility files")

if __name__ == '__main__':
    main()