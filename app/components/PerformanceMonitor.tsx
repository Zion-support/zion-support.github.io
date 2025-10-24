'use client'

import React, { useEffect, useState } from 'react'

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<any>(null)

  useEffect(() => {
    // Performance monitoring logic
    console.log('Performance monitor initialized')
  }, [])

  return null
}

export default PerformanceMonitor
