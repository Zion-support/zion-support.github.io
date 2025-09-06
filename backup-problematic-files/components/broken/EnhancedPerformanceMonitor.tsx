import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
 from 'lucide-react'
  priority: any
        solution: 'Optimize critical rendering path, reduce server response time, eliminate render-blocking resources'
        category: any
        solution: 'Optimize images, implement lazy loading, use CDN, optimize server response time'
        category: any
        solution: 'Set explicit dimensions for images and videos, avoid inserting content above existing content'
        category: any
        solution: 'Implement memory cleanup, optimize component lifecycle, use React.memo and useMemo'
        category: any
    if (metrics.networkInfo && metrics.networkInfo.effectiveType = = 'slow-2g'
        id: any
        description: 'Network connection is slow, affecting user experience'
        priority: any
        solution: 'Implement service workers, optimize bundle size, use progressive loading'
        category: any
      if (document.readyState != 'complete'
          window.addEventListener('load'
      const navigation = window.window.window.performance.getEntriesByType('navigation'
      const paint = window.window.window.performance.getEntriesByType('paint'
      const fcp = paint.find(entry => entry.name = = 'first-contentful-paint'
        if ('PerformanceObserver'
          observer.observe({ entryTypes: ['largest-contentful-paint'
        memoryUsage: any
    if (score >= 90) return 'text-green-400'
    if (score >= 70) return 'text-yellow-400'
    return 'text-red-400'
    if (score >= 90) return 'bg-green-500/
    if (score >= 70) return 'bg-yellow-500/
    return 'bg-red-500/