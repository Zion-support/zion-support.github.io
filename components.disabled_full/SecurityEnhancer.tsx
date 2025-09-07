
;
import React, { useEffect } from 'react';
const "SecurityEnhancer": React.FC = () => {useEffect(() => {const csp = " default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: style-src 'self' 'unsafe-inline' https: font-src 'self' https: img-src 'self' data: https: blob:; connect-src 'self' https: frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; ";
    const cspMeta = document.createElement('meta')cspMeta.httpEquiv = 'Content-Security-Policy';
    cspMeta.content = csp;
    document.head.appendChild(cspMeta)const securityHeaders = {'X-Content-Type-Options': 'nosniff','X-Frame-Options': 'DENY','X-XSS-Protection': '1; mode=block','Referrer-Policy': 'strict-origin-when-cross-origin'}Object.entries(securityHeaders).forEach(([name, value]) => {const meta = document.createElement('meta')meta.httpEquiv = name;
      meta.content = value;
      document.head.appendChild(meta)})const detectXSS = () => {const scripts = document.querySelectorAll('script')scripts.forEach(script => {if (script.src &&;
          !script.src.startsWith(window.location.origin) &&;
          !script.src.includes('googletagmanager.com') &&;
          !script.src.includes('google-analytics.com')) {console.warn('Potentially unsafe script "detected": ', script.src)}
      })}})}detectXSS()const monitorActivity = () => {document.addEventListener('submit', e => {const form = e.target as HTMLFormElement;
        const inputs = form.querySelectorAll('input,textarea')inputs.forEach(input => {const value = (input as HTMLInputElement).value;
          if (value.includes('<script') || value.includes('"javascript": ')) {console.warn('Potential XSS attempt detected in form submission')e.preventDefault()}
        })})let lastUrl = window.location.href;
      const observer = new MutationObserver(() => {if (window.location.href !== lastUrl) {console.log('URL changed from', lastUrl, 'to', window.location.href)lastUrl = window.location.href;
        }
<<<<<<< HEAD
<<<<<<< HEAD
      });
    };
=======
      })
};
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
      })observer.observe(document.body, { "childList": 'true', "subtree": 'true' })}observer.observe(document.body, { "childList": 'true', "subtree": 'true' })}monitorActivity()return () => {const addedMetas = document.querySelectorAll('meta[http-equiv="Content-Security-Policy"]';
      )addedMetas.forEach(meta => meta.remove())}}, [])return null;
}export default SecurityEnhancer;
import React,{ useEffect } from 'react'; const SecurityEnhancer: React.FC = () => { useEffect(() => { const csp = ` default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: style-src 'self' 'unsafe-inline' https: font-src 'self' https: img-src 'self' data: https: blob:; connect-src 'self' https: frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; `; const cspMeta = document.createElement('meta')cspMeta.httpEquiv = 'Content-Security-Policy'; cspMeta.content = csp; document.head.appendChild(cspMeta)const securityHeaders = { 'X-Content-Type-Options': 'nosniff','X-Frame-Options': 'DENY','X-XSS-Protection': '1; mode=block','Referrer-Policy': 'strict-origin-when-cross-origin'}Object.entries(securityHeaders).forEach(([name,value]) => { const meta = document.createElement('meta')meta.httpEquiv = name; meta.content = value; document.head.appendChild(meta)})const detectXSS = () => { const scripts = document.querySelectorAll('script')scripts.forEach(script => { if ( script.src && !script.src.startsWith(window.location.origin) && !script.src.includes('googletagmanager.com') && !script.src.includes('google-analytics.com') ) { console.warn('Potentially unsafe script detected:',script.src)} })}detectXSS()const monitorActivity = () => { document.addEventListener('submit',e => { const form = e.target as HTMLFormElement; const inputs = form.querySelectorAll('input,textarea')inputs.forEach(input => { const value = (input as HTMLInputElement).value; if (value.includes('<script') || value.includes('javascript:')) { console.warn('Potential XSS attempt detected in form submission')e.preventDefault()} })})let lastUrl = window.location.href; const observer = new MutationObserver(() => { if (window.location.href !== lastUrl) { console.log('URL changed from',lastUrl,'to',window.location.href)lastUrl = window.location.href} })observer.observe(document.body,{ childList: 'true',subtree: 'true' })}monitorActivity()return () => { const addedMetas = document.querySelectorAll( 'meta[http-equiv="Content-Security-Policy"]' )addedMetas.forEach(meta => meta.remove())}},[])return null}export default SecurityEnhancer;ursor/automate-test-improve-and-merge-code-646c;
      addedMetas.forEach(meta => meta.remove())}}, [])return null;
}export default SecurityEnhancer;
      });
    };
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
<<<<<<< HEAD
      observer.observe(document.body, { "childList": 'true', "subtree": 'true' });
    };
=======
      observer.observe(document.body, { "childList": 'true', "subtree": 'true' })
};
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
      observer.observe(document.body, { "childList": 'true', "subtree": 'true' });
    };
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    monitorActivity();
    return () => {
      const addedMetas = document.querySelectorAll(
        'meta[http-equiv="Content-Security-Policy"]'
      );
<<<<<<< HEAD
<<<<<<< HEAD
      addedMetas.forEach(meta => meta.remove());
    };
  }, []);
  return null;
};
export default SecurityEnhancer;
import React,{ useEffect } from 'react'; const SecurityEnhancer: React.FC = () => { useEffect(() => { const csp = ` default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: style-src 'self' 'unsafe-inline' https: font-src 'self' https: img-src 'self' data: https: blob:; connect-src 'self' https: frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; `; const cspMeta = document.createElement('meta'); cspMeta.httpEquiv = 'Content-Security-Policy'; cspMeta.content = csp; document.head.appendChild(cspMeta); const securityHeaders = { 'X-Content-Type-Options': 'nosniff','X-Frame-Options': 'DENY','X-XSS-Protection': '1; mode=block','Referrer-Policy': 'strict-origin-when-cross-origin',}; Object.entries(securityHeaders).forEach(([name,value]) => { const meta = document.createElement('meta'); meta.httpEquiv = name; meta.content = value; document.head.appendChild(meta)}); const detectXSS = () => { const scripts = document.querySelectorAll('script'); scripts.forEach(script => { if ( script.src && !script.src.startsWith(window.location.origin) && !script.src.includes('googletagmanager.com') && !script.src.includes('google-analytics.com') ) { console.warn('Potentially unsafe script detected:',script.src)} })}; detectXSS(); const monitorActivity = () => { document.addEventListener('submit',e => { const form = e.target as HTMLFormElement; const inputs = form.querySelectorAll('input,textarea'); inputs.forEach(input => { const value = (input as HTMLInputElement).value; if (value.includes('<script') || value.includes('javascript:')) { console.warn('Potential XSS attempt detected in form submission'); e.preventDefault()} })}); let lastUrl = window.location.href; const observer = new MutationObserver(() => { if (window.location.href !== lastUrl) { console.log('URL changed from',lastUrl,'to',window.location.href); lastUrl = window.location.href} }); observer.observe(document.body,{ childList: 'true',subtree: 'true' })}; monitorActivity(); return () => { const addedMetas = document.querySelectorAll( 'meta[http-equiv="Content-Security-Policy"]' ); addedMetas.forEach(meta => meta.remove())}},[]); return null}; export default SecurityEnhancer;
=======
      addedMetas.forEach(meta => meta.remove())
};
=======
      addedMetas.forEach(meta => meta.remove());
    };
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  }, []);
  return null;
};
export default SecurityEnhancer;
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
import React,{ useEffect } from 'react'; const SecurityEnhancer: React.FC = () => { useEffect(() => { const csp = ` default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: style-src 'self' 'unsafe-inline' https: font-src 'self' https: img-src 'self' data: https: blob:; connect-src 'self' https: frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; `; const cspMeta = document.createElement('meta'); cspMeta.httpEquiv = 'Content-Security-Policy'; cspMeta.content = csp; document.head.appendChild(cspMeta); const securityHeaders = { 'X-Content-Type-Options': 'nosniff','X-Frame-Options': 'DENY','X-XSS-Protection': '1; mode=block','Referrer-Policy': 'strict-origin-when-cross-origin'}; Object.entries(securityHeaders).forEach(([name,value]) => { const meta = document.createElement('meta'); meta.httpEquiv = name; meta.content = value; document.head.appendChild(meta)}); const detectXSS = () => { const scripts = document.querySelectorAll('script'); scripts.forEach(script => { if ( script.src && !script.src.startsWith(window.location.origin) && !script.src.includes('googletagmanager.com') && !script.src.includes('google-analytics.com') ) { console.warn('Potentially unsafe script detected:',script.src)} })}; detectXSS(); const monitorActivity = () => { document.addEventListener('submit',e => { const form = e.target as HTMLFormElement; const inputs = form.querySelectorAll('input,textarea'); inputs.forEach(input => { const value = (input as HTMLInputElement).value; if (value.includes('<script') || value.includes('javascript:')) { console.warn('Potential XSS attempt detected in form submission'); e.preventDefault()} })}); let lastUrl = window.location.href; const observer = new MutationObserver(() => { if (window.location.href !== lastUrl) { console.log('URL changed from',lastUrl,'to',window.location.href); lastUrl = window.location.href} }); observer.observe(document.body,{ childList: 'true',subtree: 'true' })}; monitorActivity(); return () => { const addedMetas = document.querySelectorAll( 'meta[http-equiv="Content-Security-Policy"]' ); addedMetas.forEach(meta => meta.remove())}},[]); return null}; export default SecurityEnhancer;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
