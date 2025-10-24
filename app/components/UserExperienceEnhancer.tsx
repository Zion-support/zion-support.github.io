import React, { useEffect, useState } from 'react'

interface UserExperienceEnhancerProps {
  enableAccessibility?: boolean
  enableKeyboardNavigation?: boolean
  enableAnimations?: boolean
  enableHighContrast?: boolean
  enableReducedMotion?: boolean
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({
  enableAccessibility = true,
  enableKeyboardNavigation = true,
  enableAnimations = true,
  enableHighContrast = false,
  enableReducedMotion = false
}) => {
  const [isHighContrast, setIsHighContrast] = useState(enableHighContrast)
  const [isReducedMotion, setIsReducedMotion] = useState(enableReducedMotion)

  useEffect(() => {
    // Handle keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!enableKeyboardNavigation) return

      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey) {
        const skipLink = document.querySelector('.skip-link')
        if (skipLink) {
          (skipLink as HTMLElement).focus()
        }
      }
    }

    // Handle mouse interactions for accessibility
    const handleMouseDown = (event: MouseEvent) => {
      if (!enableAccessibility) return

      // Add focus indicators for mouse users
      const target = event.target as HTMLElement
      if (target && target.classList.contains('focusable')) {
        target.classList.add('mouse-focus')
      }
    }

    if (enableAccessibility || enableKeyboardNavigation) {
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('mousedown', handleMouseDown)

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('mousedown', handleMouseDown)
      }
    }
  }, [enableAccessibility, enableKeyboardNavigation, isHighContrast, isReducedMotion])

  // Add CSS classes for enhanced UX
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .ux-enhanced {
        ${enableAnimations && !isReducedMotion ? 'transition: all 0.3s ease;' : ''}
      }
      
      .ux-enhanced * {
        ${enableAnimations && !isReducedMotion ? 'transition: all 0.3s ease;' : ''}
      }
      
      .ux-enhanced .focusable:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      
      .ux-enhanced .mouse-focus:focus {
        outline: none;
      }
      
      .ux-enhanced .mouse-focus:hover {
        outline: 1px solid #3b82f6;
        outline-offset: 1px;
      }
      
      ${isHighContrast ? `
        .ux-enhanced {
          filter: contrast(1.2) brightness(1.1);
        }
      ` : ''}
      
      ${isReducedMotion ? `
        .ux-enhanced * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      ` : ''}
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [enableAnimations, isHighContrast, isReducedMotion])

  // Add accessibility attributes
  useEffect(() => {
    if (enableAccessibility) {
      document.documentElement.setAttribute('data-accessibility', 'enabled')
      document.body.classList.add('ux-enhanced')
    }

    return () => {
      document.documentElement.removeAttribute('data-accessibility')
      document.body.classList.remove('ux-enhanced')
    }
  }, [enableAccessibility])

  return null
}

export default UserExperienceEnhancer