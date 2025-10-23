'use client'
import React from 'react'
'use client'
import React, {useEffect} from 'react'
interface SecurityEnhancerProp s {children: React.ReactNode}
constSecurityEnhancer: React.FC<SecurityEnhancerProp s>= ({children}) => {useEffect(() => {
  
// Security enhancementlogicconstenhanceSecurity= () => {
  
// Add securityheadersconstsecurityHeaders= {
'X-Content-Type-Options': 'nosniff',
'X-Frame-Options': 'DENY',
'X-XSS-Protection': '1; mode=block',
'Referrer-Policy': 'strict-origin-when-cross-origin'}
// Add CSP metatagconstcspMeta= do cument.createElement('meta')
cspMeta.httpEquiv= 'Content-Security-Policy'
cspMeta.content= "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self''unsafe-inline';"
do cument.head.appendChild(cspMeta)
// Disable right-click context menu
do cument.addEventListener('contextmenu', (e) => {e.preventDefault()})
// Disable F12and other dev tools shortcuts
do cument.addEventListener('keydo wn', (e) => {if (e.key=== 'F1 2' || (e.ctrlKey && e.shiftKey && e.key=== 'I')) {
e.preventDefault()}
})
}
enhanceSecurity()
}, [])return<>{children}</>}
export defaultSecurityEnhancer</SecurityEnhancerProp>