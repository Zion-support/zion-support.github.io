<<<<<<< HEAD
import { useEffect } from 'react';
'use client'
  children: React.ReactNode}
    // Security enhancement logic

        'Referrer-Policy': 'strict-origin-when-cross-origin'

      // Add CSP meta tag
      const cspMeta = document.createElement('meta')
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
      cspMeta.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;")
      document.head.appendChild(cspMeta)

      // Add security event listeners

        console.log('Security event detected:', event.type)

      window.addEventListener('beforeunload', handleSecurityEvent)
      window.addEventListener('unload', handleSecurityEvent)

        window.removeEventListener('beforeunload', handleSecurityEvent)
        window.removeEventListener('unload', handleSecurityEvent)
        document.head.removeChild(cspMeta)

    const cleanup = enhanceSecurity()
    return cleanup
  }, [])
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918

export default function SecurityEnhancer() {
  return (
<<<<<<< HEAD

    <div className="{`security-enhanced" ${className}`}>{children}

  )

const SecurityEnhancer: React.FC<SecurityEnhancerProps >= ({ children }) => {useEffect(() => {// Security enhancement logic

    $3
  )}
        'Referrer-Policy': 'strict-origin-when-cross-origin'};
      };// Add CSP meta tag

      cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
      document.head.appendChild(cspMeta)
      // Disable right-click context menu
        e.preventDefault()})
      // Disable F12 and other dev tools shortcuts
          e.preventDefault()}
      })}
    enhanceSecurity()}, [])
  return </SecurityEnhancerProps ><React.Fragment >{children}</React.Fragment ></React.Fragment>}
export default SecurityEnhancer

      // Disable right-click context menu
 {e.preventDefault()}
      });// Disable F12 and other dev tools shortcuts

 {if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {e.preventDefault()}

;

=======
    <>
      <Helmet>
        <title>Security Enhancer - Zion Tech Group</title>
        <meta name="description" content="Professional security enhancer by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Security Enhancer</h1>
          <p className="text-lg text-gray-300 mb-8">Professional security enhancer coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
