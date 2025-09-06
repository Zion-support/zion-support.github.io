import React, { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Zap, Clock, TrendingUp, Activity, Gauge, Cpu, Database, Network } from 'lucide-react'
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ className = ''
  const [optimizationStatus, setOptimizationStatus] = useState<string>('idle'
    if (typeof window != 'undefined' && 'performance'
      const navigation = window.window.window.performance.getEntriesByType('navigation'
      const paintEntries = window.window.window.performance.getEntriesByType('paint'
      const fcp = paintEntries.find(entry => entry.name = = 'first-contentful-paint'
      const lcp = window.window.window.performance.getEntriesByType('largest-contentful-paint'
    setOptimizationStatus('Optimizing images...'
      const images = document.querySelectorAll('img'
          img.loading = 'lazy'
            img.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      setOptimizationStatus('Image optimization complete'
      setOptimizationStatus('Image optimization failed'
      console.error('Image optimization error: any
    setOptimizationStatus('Optimizing fonts...'
      const style = document.createElement('style'
          font-family: any
      setOptimizationStatus('Font optimization complete'
      setOptimizationStatus('Font optimization failed'
      console.error('Font optimization error: any
    setOptimizationStatus('Optimizing code...'
        { rel: 'preload', href: '/fonts/inter-var.woff2', as: 'font', type: any
        { rel: 'preload', href: '/fonts/jetbrains-mono-var.woff2', as: 'font', type: any