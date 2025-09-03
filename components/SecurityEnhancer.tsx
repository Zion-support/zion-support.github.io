import React, { useEffect } from "react";

const SecurityEnhancer: React.FC = () => {
  useEffect(() => {
    // Content Security Policy
    const csp = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: https: blob:;
      connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com;
      frame-src 'none';
      object-src 'none';
      base-uri 'self';
      form-action 'self';
    `;

    // Add CSP meta tag
    const cspMeta = document.createElement("meta");
    cspMeta.httpEquiv = "Content-Security-Policy";
    cspMeta.content = csp;
    document.head.appendChild(cspMeta);

    // Additional security headers
    const securityHeaders = {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    };

    // Add security headers as meta tags
    Object.entries(securityHeaders).forEach(([name, value]) => {
      const meta = document.createElement("meta");
      meta.httpEquiv = name;
      meta.content = value;
      document.head.appendChild(meta);
    });

    // XSS Detection
    const detectXSS = () => {
      const scripts = document.querySelectorAll("script");
      scripts.forEach(script => {
        if (script.src && !script.src.startsWith(window.location.origin) &&
            !script.src.includes("googletagmanager.com") &&
            !script.src.includes("google-analytics.com")) {
          console.warn("Potentially unsafe script detected:", script.src);
        }
      });
    };

    // Run XSS detection
    detectXSS();

    // Monitor for suspicious activity
    const monitorActivity = () => {
      // Monitor for suspicious form submissions
      document.addEventListener("submit", (e) => {
        const form = e.target as HTMLFormElement;
        const inputs = form.querySelectorAll("input, textarea");
        
        inputs.forEach(input => {
          const value = (input as HTMLInputElement).value;
          // Basic XSS pattern detection
          if (value.includes("<script") || value.includes("javascript:")) {
            console.warn("Potential XSS attempt detected in form submission");
            e.preventDefault();
          }
        });
      });

      // Monitor for suspicious URL changes
      let lastUrl = window.location.href;
      const observer = new MutationObserver(() => {
        if (window.location.href !== lastUrl) {
          console.log("URL changed from", lastUrl, "to", window.location.href);
          lastUrl = window.location.href;
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });
    };

    // Start monitoring
    monitorActivity();

    // Cleanup function
    return () => {
      // Remove any added meta tags
      const addedMetas = document.querySelectorAll('meta[http-equiv="Content-Security-Policy"]');
      addedMetas.forEach(meta => meta.remove());
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SecurityEnhancer;