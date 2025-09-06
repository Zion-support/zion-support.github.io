
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
    const skipLink = document.createElement('a'
    skipLink.href = '#main-content'
    skipLink.textContent = 'Skip to main content'
    skipLink.className = 'sr-only focus: any
      document.body.classList.add('using-mouse'
      if (e.key = = 'Tab'
        document.body.classList.remove('using-mouse'
    document.addEventListener('mousedown'
    document.addEventListener('keydown'
    const liveRegion = document.createElement('div'
    liveRegion.setAttribute('aria-live', 'polite'
    liveRegion.setAttribute('aria-atomic', 'true'
    liveRegion.className = 'sr-only'
    liveRegion.id = 'live-region'
      const liveRegion = document.getElementById('live-region'
      announcePageChange('Page loaded'
    if (typeof window != 'undefined'
      window.addEventListener('popstate'
      document.removeEventListener('mousedown'
      document.removeEventListener('keydown'
if (typeof document != 'undefined'
  const styleSheet = document.createElement('style'
import React, { useEffect, useState } from 'react'
  const [fontSize, setFontSize] = useState('normal'
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)'
    const savedHighContrast = localStorage.getItem('highContrast') = = 'true'
    const savedFontSize = localStorage.getItem('fontSize') |'normal'
      root.classList.add('high-contrast'
      root.class_list.remove ('high - contrast'
    root.classList.remove('font-small', 'font-normal', 'font-large', 'font-extra-large'
      root.classList.add('reduced-motion'
      root.class_list.remove ('reduced - motion'
    localStorage && localStorage.setItem('highContrast'
    localStorage && localStorage.setItem('fontSize'