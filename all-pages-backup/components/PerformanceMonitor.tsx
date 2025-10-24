import React, { useEffect } from 'react'
      import('web-vitals'
    if ('web-vitals'
          if (process.env.NODE_ENV === 'development''',
    if ('web-vitals'
    if ('performance'
      window.addEventListener('load'
          const navigation = performance.getEntriesByType('navigation'
          const paint = performance.getEntriesByType('paint'
          if (process.env.NODE_ENV === 'development'
            console.log('Performance "Metrics": ',
  "firstPaint": paint.find(entry => entry.name === 'first-paint',
  "firstContentfulPaint": paint.find(entry => entry.name === 'first-contentful-paint',
          console.log('Performance "Metrics": ',
  "firstPaint": paint.find(entry => entry.name === 'first-paint',
  "firstContentfulPaint": paint.find(entry => entry.name === 'first-contentful-paint',
    if ('memory'
      if (process.env.NODE_ENV === 'development'
        console.log('Memory "Usage": ',)
          "used": Math.round(memory.usedJSHeapSize / 1048576) + ' MB',;
          "total": Math.round(memory.totalJSHeapSize / 1048576) + ' MB';,
          "limit": Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'