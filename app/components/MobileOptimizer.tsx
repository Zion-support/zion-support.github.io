import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

    // Prevent zoom on input focus for iOS
      const viewport = document.querySelector('meta[name="viewport"]')
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')

    // Add touch-friendly classes;
      const buttons = document.querySelectorAll('button, a, [role="button"]')
        if (!button.classList.contains('touch-manipulation')) {
          button.classList.add('touch-manipulation')
      })

    // Optimize images for mobile;
      const images = document.querySelectorAll('img')
        const imageElement = img as HTMLImageElement;
        if (!imageElement.loading) {
          imageElement.loading = 'lazy'
        if (!imageElement.decoding) {
          imageElement.decoding = 'async'
      })

    // Add mobile-specific event listeners;
      // Prevent double-tap zoom;
      let lastTouchEnd = 0;
        const now = new Date().getTime()
        if (now - lastTouchEnd;
          event.preventDefault()
        lastTouchEnd = now;
      }, false)

      // Add haptic feedback for supported devices;
          if ('vibrate' in navigator) {
            navigator.vibrate(10) // Short vibration;
        })

      const interactiveElements = document.querySelectorAll('button, a, [role="button"]')
      interactiveElements.forEach(addHapticFeedback)

    // Optimize scroll performance;
      let ticking = false;
        // Add scroll-based optimizations here;
        ticking = false;
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition)
          ticking = true;
      window.addEventListener('scroll', requestTick, { passive: true })

    // Initialize mobile optimizations;
    preventZoom()
    addTouchClasses()
    optimizeImagesForMobile()
    addMobileEventListeners()
    optimizeScrollPerformance()

    // Cleanup;
 {})
 {})
  }, [])

  return null

export default MobileOptimizer
  return null;
