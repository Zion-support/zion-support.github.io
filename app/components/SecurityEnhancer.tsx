'use client'
import React from 'react'
'use client'
import React, { useEffect } from 'react'
  children: React.ReactNode}
    // Security enhancement logic
    
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      }
      // Add CSP meta tag

interface SecurityEnhancerProps {children: React.ReactNode}
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children }) => {useEffect(() => {// Security enhancement logic
    
    $3
  )}
        'Referrer-Policy': 'strict-origin-when-cross-origin'}
      };// Add CSP meta tag
      
      cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
      document.head.appendChild(cspMeta)
      // Disable right-click context menu
        e.preventDefault()})
      // Disable F12 and other dev tools shortcuts
          e.preventDefault()}
      })}
    enhanceSecurity()}, [])
  return <React.Fragment>{children}</React.Fragment>}
export default SecurityEnhancer
  </SecurityEnhancerProps>

      // Disable right-click context menu
      document.addEventListener('contextmenu', (e) => {e.preventDefault()}
      });// Disable F12 and other dev tools shortcuts
      document.addEventListener('keydown', (e) => {if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {e.preventDefault()}
        }
      })};enhanceSecurity()}, []);return <>{children}</>};export default SecurityEnhancer
