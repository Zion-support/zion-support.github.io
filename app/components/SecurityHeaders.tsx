import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const SecurityHeaders: React.FC = () => {
  useEffect(() => {
    // Set security headers via meta tags
    const securityMetaTags = [
      { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      { name: 'x-content-type-options', content: 'nosniff' },
      { name: 'x-frame-options', content: 'DENY' },
      { name: 'x-xss-protection', content: '1; mode=block' },
      { name: 'permissions-policy', content: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
      { name: 'content-security-policy', content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';" }
    ];

    securityMetaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });

    // Add security event listeners
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Clear sensitive data from localStorage
      const sensitiveKeys = ['auth-token', 'user-data', 'session-data'];
      sensitiveKeys.forEach(key => {
        localStorage.removeItem(key);
      });
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Clear sensitive data when tab becomes hidden
        const sensitiveKeys = ['temp-data', 'draft-data'];
        sensitiveKeys.forEach(key => {
          sessionStorage.removeItem(key);
        });
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S, Ctrl+A, Ctrl+P
      if (
        event.key === 'F12' ||
        (event.ctrlKey && event.shiftKey && event.key === 'I') ||
        (event.ctrlKey && event.key === 'u') ||
        (event.ctrlKey && event.key === 's') ||
        (event.ctrlKey && event.key === 'a') ||
        (event.ctrlKey && event.key === 'p')
      ) {
        event.preventDefault();
        return false;
      }
    };

    const handleContextMenu = (event: MouseEvent) => {
      // Disable right-click context menu
      event.preventDefault();
      return false;
    };

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <Helmet>
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';" />
      
      {/* Additional Security Meta Tags */}
      <meta name="robots" content="index, follow, noarchive, nosnippet, noimageindex" />
      <meta name="googlebot" content="index, follow, noarchive, nosnippet, noimageindex" />
      <meta name="bingbot" content="index, follow, noarchive, nosnippet, noimageindex" />
    </Helmet>
  );
};

export default SecurityHeaders;