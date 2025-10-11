<<<<<<< HEAD
'use client';
import React from 'react';
'use client';
import React, {useEffect}from 'react';
interface SecurityEnhancerProps {children: React.ReactNode;,}}}
const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({children ,}) => {useEffect(() => {
    // Security enhancement logic;
    const enhanceSecurity = (;
      // Add security headers;
      const securityHeaders = {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',) => {
  return($3;)
  )}'Referrer-Policy': 'strict-origin-when-cross-origin';}
      }
// Add CSP meta tag;

      const cspMeta = document.createElement('meta');
      cspMeta.httpEquiv = 'Content-Security-Policy';
      cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';";
      document.head.appendChild(cspMeta);
// Disable right-click context menu;
      document.addEventListener('contextmenu', (e) => {e.preventDefault()}})
// Disable F12 and other dev tools shortcuts;
      document.addEventListener('keydown', (e) => {if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
          e.preventDefault()}}
      })
    }
enhanceSecurity();
  }, []);
return <React.Fragment>{children</React.Fragment>}</React.Fragment>
};

export default SecurityEnhancer;
=======
'use client'
import React from 'react'
'use client'
import React, { useEffect } from 'react'
interface SecurityEnhancerProps {
    children: React.ReactNode
  }
}
const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children }) => {
    useEffect(() => {
    // Security enhancement logic
    const enhanceSecurity = ()
        'X-XSS-Protection': '1; mode=block',) => {
  return ()
  )
  }
        'Referrer-Policy': 'strict-origin-when-cross-origin';}
      }
// Add CSP meta tag
      const cspMeta = document.createElement('meta')
      cspMeta.httpEquiv = 'Content-Security-Policy'
      cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
      document.head.appendChild(cspMeta)
// Disable right-click context menu
      document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  }
      })
// Disable F12 and other dev tools shortcuts
      document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
          e.preventDefault()
  }
        }
      })
    }
enhanceSecurity()
  }, [])
return </SecurityEnhancerProps><React.Fragment>{children}</React.Fragment></React.Fragment>
}
export default SecurityEnhancer
>>>>>>> origin/main
