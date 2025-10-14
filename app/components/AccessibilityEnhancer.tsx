import React, { useEffect, useState } from 'react'
const AccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large' | 'extra-large'>('normal')
  useEffect(() => {
    const root = document.documentElement
    // High contrast mode
    if (isHighContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }
import React, { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    if (enableScreenReaderSupport) {
      // Add screenreaderannouncementsconstannounceToScreenReader= (message: string) => {
        const announcement= document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className='sr-only';
        announcement.text Content=message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      };

      // Announce pagechangesconstobserver= new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            const addedNode= mutation.addedNodes[0] as Element;
            if (addedNode && addedNode.nodeType === Node.ELEMENT_NODE) {
              const heading= addedNode.querySelector('h1, h2, h3, h4, h5, h6');
              if (heading) {
                announceToScreenReader(`pageUpdated: ${heading.textContent}`);
              }
            }
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => observer.disconnect();
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    if (enableFocusManagement) {
      // Focus managementformodalsanddropdownsconstmanageFocus= (event: FocusEvent) => {
        const target= event.target as Element;
        if (target && target.closest('[role="dialog"], [role="menu"], [role="listbox"]')) {
          const focusableElements= target.closest('[role="dialog"], [role="menu"], [role="listbox"]')?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          
          if (focusableElements && focusableElements.length > 0) {
            const firstElement= focusableElements[0] as HTMLElement;
            const lastElement= focusableElements[focusableElements.length - 1] as HTMLElement;
            
            if (event.key === 'Tab') {
              if (event.shiftKey && target=== firstElement) {
                event.preventDefault();
                lastElement.focus();
              } else if (!event.shiftKey && target=== lastElement) {
                event.preventDefault();
                firstElement.focus();
              }
            }
          }
        }
      };

      document.addEventListener('keydown', manageFocus);
      return () => document.removeEventListener('keydown', manageFocus);
    }
  }, [enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;
=======

    // Reduced motion mode
    if (isReducedMotion) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }

    // Font size adjustment
    root.style.setProperty('--font-size-multiplier', 
      fontSize === 'large' ? '1.2' : 
      fontSize === 'extra-large' ? '1.4' : 
      fontSize === 'small' ? '0.9' : '1'
    )
  }, [isHighContrast, isReducedMotion, fontSize])
  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        e.preventDefault()
        const main = document.querySelector('main')
        if (main) {
          (main as HTMLElement).focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])
  // Add ARIA landmarks
  useEffect(() => {
    const addAriaLandmarks = () => {
      const main = document.querySelector('main')
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main')
      }
      const nav = document.querySelector('nav')
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation')
      }
      const footer = document.querySelector('footer')
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo')
      }
    }
    addAriaLandmarks()
  }, [])
  // Add alt text to images without alt attributes
  useEffect(() => {
    const addAltText = () => {
      const images = document.querySelectorAll('img:not([alt])')
      images.forEach((img, index) => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', `Image ${index + 1}`)
        }
      })
    }
    addAltText()
  }, [])
  return (
    <div className="accessibility-controls fixed bottom-4 left-4 z-50 bg-slate-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-white font-semibold mb-3">Accessibility</h3>
      <div className="space-y-3">
        <label className="flex items-center space-x-2 text-white text-sm">
          <input
            type="checkbox"
            checked={isHighContrast}
            onChange={(e) => setIsHighContrast(e.target.checked)}
            className="rounded"
          />
          <span>High Contrast</span>
        </label>
        <label className="flex items-center space-x-2 text-white text-sm">
          <input
            type="checkbox"
            checked={isReducedMotion}
            onChange={(e) => setIsReducedMotion(e.target.checked)}
            className="rounded"
          />
          <span>Reduce Motion</span>
        </label>
        <div className="space-y-1">
          <label className="text-white text-sm">Font Size</label>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value as 'small' | 'normal' | 'large' | 'extra-large')}
            className="w-full bg-slate-700 text-white rounded px-2 py-1 text-sm"
          >
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityEnhancer
