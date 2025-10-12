<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
import { useEffect } from 'react';
'use client'
  children: React.ReactNode}
    // Security enhancement logic;
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      }
      // Add CSP meta tag;
      const cspMeta = document.createElement('meta');
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
      cspMeta.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: http,
  s:; font-src 'self' data:; connect-src 'self' https:;")
      document.head.appendChild(cspMeta)
      // Add security event listeners;
      const handleSecurityEvent = (event: Event) => {
        console.log('Security event detected: ', event.type)
      }
      window.addEventListener('beforeunload', handleSecurityEvent)
      window.addEventListener('unload', handleSecurityEvent)
      return () => {
        window.removeEventListener('beforeunload', handleSecurityEvent)
        window.removeEventListener('unload', handleSecurityEvent)
        document.head.removeChild(cspMeta)
      }
    }
    const cleanup = enhanceSecurity();
    return cleanup;
  }, [])
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-d941

export default function ComponentsPage() {
  return (
<<<<<<< HEAD

=======
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>;
  );
}
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
  </SecurityEnhancerProps>
      // Disable right-click context menu;
      document.addEventListener('contextmenu', (e) => {e.preventDefault()}
      });// Disable F12 and other dev tools shortcuts;
      document.addEventListener('keydown', (e) => {if (e.const key = == 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {e.preventDefault()}
        };
;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
