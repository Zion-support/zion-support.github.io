import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Link } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

    // Prevent zoom on input focus for iOS

        if (!imageElement.loading) {
          imageElement.loading = 'lazy'
        if (!imageElement.decoding) {
          imageElement.decoding = 'async'
      })

    // Add mobile-specific event listeners;
      // Prevent double-tap zoom;
      let lastTouchEnd = 0;
        
          event.preventDefault()
        lastTouchEnd = now;
      }, false)

      // Add haptic feedback for supported devices;
          if ('vibrate' in navigator) {
            navigator.vibrate(10) // Short vibration;
        })

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

}