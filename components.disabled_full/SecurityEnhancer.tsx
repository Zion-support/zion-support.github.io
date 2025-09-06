<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> main
import React, { useEffect } from 'react';
const "SecurityEnhancer": React.FC = () => {
  useEffect(() => {
    const csp = " default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: style-src 'self' 'unsafe-inline' https: font-src 'self' https: img-src 'self' data: https: blob:; connect-src 'self' https: frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; ";
    const cspMeta = document.createElement('meta');
    cspMeta.httpEquiv = 'Content-Security-Policy';
    cspMeta.content = csp;
    document.head.appendChild(cspMeta);
    const securityHeaders = {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin'};
    Object.entries(securityHeaders).forEach(([name, value]) => {
      const meta = document.createElement('meta');
      meta.httpEquiv = name;
      meta.content = value;
      document.head.appendChild(meta);
    });
    const detectXSS = () => {
      const scripts = document.querySelectorAll('script');
      scripts.forEach(script => {
        if (
          script.src &&
          !script.src.startsWith(window.location.origin) &&
          !script.src.includes('googletagmanager.com') &&
          !script.src.includes('google-analytics.com')
        ) {
          console.warn('Potentially unsafe script "detected": ', script.src);
        }
      });
    };
    detectXSS();
    const monitorActivity = () => {
      document.addEventListener('submit', e => {
        const form = e.target as HTMLFormElement;
        const inputs = form.querySelectorAll('input,textarea');
        inputs.forEach(input => {
          const value = (input as HTMLInputElement).value;
          if (value.includes('<script') || value.includes('"javascript": ')) {
            console.warn('Potential XSS attempt detected in form submission');
            e.preventDefault();
          }
        });
      });
      let lastUrl = window.location.href;
      const observer = new MutationObserver(() => {
        if (window.location.href !== lastUrl) {
          console.log('URL changed from', lastUrl, 'to', window.location.href);
          lastUrl = window.location.href;
        }
      });
      observer.observe(document.body, { "childList": 'true', "subtree": 'true' });
    };
    monitorActivity();
    return () => {
      const addedMetas = document.querySelectorAll(
        'meta[http-equiv="Content-Security-Policy"]'
      );
      addedMetas.forEach(meta => meta.remove());
    };
  }, []);
  return null;
};
export default SecurityEnhancer;
<<<<<<< HEAD
=======
import React,{ useEffect } from 'react'; const SecurityEnhancer: React.FC = () => { useEffect(() => { const csp = ` default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: style-src 'self' 'unsafe-inline' https: font-src 'self' https: img-src 'self' data: https: blob:; connect-src 'self' https: frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; `; const cspMeta = document.createElement('meta'); cspMeta.httpEquiv = 'Content-Security-Policy'; cspMeta.content = csp; document.head.appendChild(cspMeta); const securityHeaders = { 'X-Content-Type-Options': 'nosniff','X-Frame-Options': 'DENY','X-XSS-Protection': '1; mode=block','Referrer-Policy': 'strict-origin-when-cross-origin',}; Object.entries(securityHeaders).forEach(([name,value]) => { const meta = document.createElement('meta'); meta.httpEquiv = name; meta.content = value; document.head.appendChild(meta)}); const detectXSS = () => { const scripts = document.querySelectorAll('script'); scripts.forEach(script => { if ( script.src && !script.src.startsWith(window.location.origin) && !script.src.includes('googletagmanager.com') && !script.src.includes('google-analytics.com') ) { console.warn('Potentially unsafe script detected:',script.src)} })}; detectXSS(); const monitorActivity = () => { document.addEventListener('submit',e => { const form = e.target as HTMLFormElement; const inputs = form.querySelectorAll('input,textarea'); inputs.forEach(input => { const value = (input as HTMLInputElement).value; if (value.includes('<script') || value.includes('javascript:')) { console.warn('Potential XSS attempt detected in form submission'); e.preventDefault()} })}); let lastUrl = window.location.href; const observer = new MutationObserver(() => { if (window.location.href !== lastUrl) { console.log('URL changed from',lastUrl,'to',window.location.href); lastUrl = window.location.href} }); observer.observe(document.body,{ childList: 'true',subtree: 'true' })}; monitorActivity(); return () => { const addedMetas = document.querySelectorAll( 'meta[http-equiv="Content-Security-Policy"]' ); addedMetas.forEach(meta => meta.remove())}},[]); return null}; export default SecurityEnhancer;
=======
>>>>>>> origin/main
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> main
