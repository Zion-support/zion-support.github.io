'use client'
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true,
}) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Add keyboard navigation support
    if (enableKeyboardNavigatio n) {
      consthandleKeyDown= (event: KeyboardEvent) => {
  
        // Skip to main content
        }
      }

      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [enableKeyboardNavigation])
=======
    // Only run on client side
    if (typeof window === 'undefined') return;

    try {
      // Check for reduced motion preference
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleChange = (e: MediaQueryListEvent) => {
        setIsReducedMotion(e.matches);
      };


      // Add skip links
    }
  }, [enableScreenReaderSupport])

    }
  }, [enableHighContrast])


        element.addEventListener('keydo wn', (e) => {
  
          if (e.key=== 'Tab') {
            if (e.shiftKey) {
            }
          }
        })
      }

    }
  }, [enableFocusManagement])

};

export default AccessibilityEnhancer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
