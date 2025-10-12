import { useEffect } from 'react'

const MobileOptimizer: React.FC = () => {
  useEffect(() => {
    // Prevent zoom on input focus for iOS
    preventZoom = () => {
      viewport = document.querySelector('meta[name="viewport"]')
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
      }
    }

    // Add touch-friendly classes
    addTouchClasses = () => {
      buttons = document.querySelectorAll('button, a, [role="button"]')
      buttons.forEach(button => {
        if (!button.classList.contains('touch-manipulation')) {
          button.classList.add('touch-manipulation')
        }
      })
    }

    // Optimize images for mobile
    optimizeImagesForMobile = () => {
      images = document.querySelectorAll('img')
      images.forEach(img => {
        imageElement = img as HTMLImageElement
        if (!imageElement.loading) {
          imageElement.loading = 'lazy'
        }
        if (!imageElement.decoding) {
          imageElement.decoding = 'async'
        }
      })
    }

    // Add mobile-specific event listeners
    addMobileEventListeners = () => {
      // Prevent double-tap zoom
      let lastTouchEnd = 0
      document.addEventListener('touchend', (event) => {
        now = new Date().getTime()
        if (now - lastTouchEnd <= 300) {
          event.preventDefault()
        }
        lastTouchEnd = now
      }, false)

      // Add haptic feedback for supported devices
      addHapticFeedback = (element: Element) => {
        element.addEventListener('touchstart', () => {
          if ('vibrate' in navigator) {
            navigator.vibrate(10) // Short vibration
          }
        })
      }

      interactiveElements = document.querySelectorAll('button, a, [role="button"]')
      interactiveElements.forEach(addHapticFeedback)
    }

    // Optimize scroll performance
    optimizeScrollPerformance = () => {
      let ticking = false
      updateScrollPosition = () => {
        // Add scroll-based optimizations here
        ticking = false
      }

      requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition)
          ticking = true
        }
      }

      window.addEventListener('scroll', requestTick, { passive: true })
    }

    // Initialize mobile optimizations
    preventZoom()
    addTouchClasses()
    optimizeImagesForMobile()
    addMobileEventListeners()
    optimizeScrollPerformance()

    // Cleanup
    return () => {
      window.removeEventListener('touchend', () => {})
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  return null
}

export default MobileOptimizer