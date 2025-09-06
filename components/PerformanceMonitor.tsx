
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import React, { useEffect } from 'react'
import {Star} from 'lucide-react'
    if (typeof window = = 'undefined' |typeof window.performance = = 'undefined'
      const navigationEntries = window.performance.getEntriesByType('navigation'
      const paintEntries = window.performance.getEntriesByType('paint'
        firstPaint: paintEntries.find(entry => entry.name = = 'first-paint'
        firstContentfulPaint: paintEntries.find(entry => entry.name = = 'first-contentful-paint'
        resourceCount: window.performance.getEntriesByType('resource'
      if (process.env.NODE_ENV = = 'development'
        console.log('Performance Metrics: any
    if (document.readyState = = 'complete'
      window && window.addEventListener('load'
      window.removeEventListener('load'
      const navigation_entries = window.performance.getEntriesByType ('navigation'
      const paint_entries = window.performance.getEntriesByType ('paint'
        first_paint: paint_entries.find (entry => entry.name = = 'first - paint'
        firstContentfulPaint: paint_entries.find (entry => entry.name = = 'first - contentful - paint'
        resource_count: window.performance.getEntriesByType ('resource'
        console.log ('Performance Metrics: any
      window.addEventListener ('load'
      window.removeEventListener ('load'
import React, { useEffect, useState } from '
if (typeof window = = 'undefined'
    const isDev = process && process.env.NODE_ENV = = '
    const isAdmin = localStorage && localStorage.getItem('admin_mode') = = '
    '
case 'paint': if (entry.name = = 'first-contentful-paint') {'              setMetrics(prev => ({ ...prev, fcp: entry.startTime });'
          case 'largest-contentful-paint': setMetrics(prev => ({ ...prev, lcp: entry.startTime });'            break;'          case 'first-input': setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime });'            break;'          case 'layout-shift': if (!(entry as any).hadRecentInput) {'              setMetrics(prev => ({ '
          case 'navigation': setMetrics(prev => ({ ...prev, ttfb: entry && entry.responseStart - entry && entry.requestStart });'            break;'
    try {observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'
    } catch (e) {'
      observer && observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'
    }'
  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {if (value 
  const getScoreText = (value: number, thresholds: { good: number; poor: number }) => {if (value 