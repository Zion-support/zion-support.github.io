<<<<<<< HEAD
<<<<<<< HEAD
origin/main
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useEffect } from 'react';

const SecurityHeaders: React.FC = () => {
  useEffect(() => {
    // Add security headers via meta tags
    const addSecurityHeaders = () => {
      const securityMetaTags = [
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
        { name: 'x-content-type-options', content: 'nosniff' },
        { name: 'x-frame-options', content: 'DENY' },
        { name: 'x-xss-protection', content: '1 mode=block' },
        {
          name: 'permissions-policy',
          content:
            'camera=(), microphone=(), geolocation=(), interest-cohort=()',
        },
        {
          name: 'content-security-policy',
          content:
            "default-src 'self' script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://www.google-analytics.com style-src 'self' 'unsafe-inline' https://fonts.googleapis.com font-src 'self' https://fonts.gstatic.com img-src 'self' data: https: connect-src 'self' https://api.ziontechgroup.com frame-ancestors 'none'",
        },
      ];

      securityMetaTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.httpEquiv = tag.name;
        meta.content = tag.content;
        document.head.appendChild(meta);
      });
    };

    // Add Content Security Policy for inline styles
    const addCSPForInlineStyles = () => {
      const style = document.createElement('style');
      style.setAttribute(
        'nonce',
        'csp-nonce-' + Math.random().toString(36).substr(2, 9)
      );
      document.head.appendChild(style);
    };

    // Initialize security headers
    addSecurityHeaders();
    addCSPForInlineStyles();
  }, []);

  return null;
};

export default SecurityHeaders;
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
<<<<<<< HEAD
=======
>>>>>>> origin/main;
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229;
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
