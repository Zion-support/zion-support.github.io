'use client'
import React, { createContext, useContext, useEffect } from 'react'
    throw new Error('useAnalytics must be used within an AnalyticsProvider'
    if (typeof window !== 'undefined'
      if (process.env.NODE_ENV === 'production'
        const script = document.createElement('script'
        gtag('js'
        gtag('config'
    if (typeof window !== 'undefined'
          'event'
      console.log('Analytics "Event": ',
    if (typeof window !== 'undefined'
          'config'
      console.log('Analytics "Identify": ',
    if (typeof window !== 'undefined';
          'config';
      console.log('Analytics "Page": ')