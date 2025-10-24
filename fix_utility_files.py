#!/usr/bin/env python3
"""
Script to fix corrupted utility files that contain React component code
instead of proper utility functions.
"""

import os
import re
from pathlib import Path

def fix_utility_file(file_path):
    """Fix a single utility file by removing React component code and creating proper utility functions."""
    
    # Read the file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if it's a corrupted file (contains React component code)
    if "'use client'" in content and "React.FC" in content:
        print(f"Fixing corrupted file: {file_path}")
        
        # Extract the filename without extension
        filename = Path(file_path).stem
        
        # Create a proper utility file based on the filename
        if 'accessibility' in filename.lower():
            new_content = '''// Accessibility checker utility functions
export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info'
  message: string
  element?: string
  line?: number
  column?: number
}

export interface AccessibilityReport {
  issues: AccessibilityIssue[]
  score: number
  passed: boolean
}

export class AccessibilityChecker {
  private issues: AccessibilityIssue[] = []

  checkElement(element: HTMLElement): AccessibilityIssue[] {
    const issues: AccessibilityIssue[] = []
    
    // Check for missing alt text on images
    if (element.tagName === 'IMG' && !element.getAttribute('alt')) {
      issues.push({
        type: 'error',
        message: 'Image missing alt text',
        element: element.tagName
      })
    }

    // Check for missing labels on form inputs
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName)) {
      const id = element.getAttribute('id')
      const ariaLabel = element.getAttribute('aria-label')
      const ariaLabelledBy = element.getAttribute('aria-labelledby')
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        issues.push({
          type: 'error',
          message: 'Form element missing label or aria-label',
          element: element.tagName
        })
      }
    }

    return issues
  }

  checkDocument(): AccessibilityReport {
    this.issues = []
    
    const allElements = document.querySelectorAll('*')
    allElements.forEach((element) => {
      const elementIssues = this.checkElement(element as HTMLElement)
      this.issues.push(...elementIssues)
    })

    const errorCount = this.issues.filter(issue => issue.type === 'error').length
    const warningCount = this.issues.filter(issue => issue.type === 'warning').length
    
    const score = Math.max(0, 100 - (errorCount * 10) - (warningCount * 5))
    const passed = errorCount === 0

    return {
      issues: this.issues,
      score,
      passed
    }
  }
}

export default AccessibilityChecker
'''
        elif 'analytics' in filename.lower():
            new_content = '''// Analytics utility functions
export interface AnalyticsEvent {
  name: string
  properties?: Record<string, any>
  timestamp?: Date
}

export interface AnalyticsConfig {
  trackingId: string
  enabled: boolean
  debug?: boolean
}

export class AnalyticsTracker {
  private config: AnalyticsConfig
  private events: AnalyticsEvent[] = []

  constructor(config: AnalyticsConfig) {
    this.config = config
  }

  track(event: AnalyticsEvent): void {
    if (!this.config.enabled) return

    const eventWithTimestamp = {
      ...event,
      timestamp: event.timestamp || new Date()
    }

    this.events.push(eventWithTimestamp)

    if (this.config.debug) {
      console.log('Analytics event:', eventWithTimestamp)
    }
  }

  getEvents(): AnalyticsEvent[] {
    return [...this.events]
  }

  clearEvents(): void {
    this.events = []
  }
}

export default AnalyticsTracker
'''
        elif 'api' in filename.lower():
            new_content = '''// API client utility
export interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  headers?: Record<string, string>
  body?: any
  cache?: boolean
  cacheTTL?: number
}

export interface APIResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: Record<string, string>
}

export class APIClient {
  private baseURL: string
  private defaultHeaders: Record<string, string>

  constructor(baseURL: string, defaultHeaders: Record<string, string> = {}) {
    this.baseURL = baseURL
    this.defaultHeaders = defaultHeaders
  }

  async request<T>(endpoint: string, config: RequestConfig = {}): Promise<APIResponse<T>> {
    const url = `${this.baseURL}${endpoint}`
    const headers = { ...this.defaultHeaders, ...config.headers }

    try {
      const response = await fetch(url, {
        method: config.method || 'GET',
        headers,
        body: config.body ? JSON.stringify(config.body) : undefined
      })

      const data = await response.json()

      return {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries())
      }
    } catch (error) {
      throw new Error(`API request failed: ${error}`)
    }
  }

  get<T>(endpoint: string, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'GET' })
  }

  post<T>(endpoint: string, body: any, config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'POST', body })
  }

  put<T>(endpoint: string, body: any, config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PUT', body })
  }

  delete<T>(endpoint: string, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' })
  }
}

export default APIClient
'''
        else:
            # Generic utility file
            new_content = f'''// {filename} utility functions
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
        
        # Write the new content
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