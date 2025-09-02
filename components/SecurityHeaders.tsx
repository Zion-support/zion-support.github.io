import { useEffect } from 'react';

const SecurityHeaders: React.FC = () => {
  useEffect(() => {
    // Add security headers via meta tags
    const addSecurityHeaders = () => {
      const securityMetaTags = [
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
        { name: 'x-content-type-options', content: 'nosniff' },
        { name: 'x-frame-options', content: 'DENY' },
        { name: 'x-xss-protection', content: '1; mode=block' },
        { name: 'content-security-policy', content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self';" }
      ];

      securityMetaTags.forEach(tag => {
        const existingTag = document.querySelector(`meta[name="${tag.name}"]`);
        if (!existingTag) {
          const metaTag = document.createElement('meta');
          metaTag.setAttribute('name', tag.name);
          metaTag.setAttribute('content', tag.content);
          document.head.appendChild(metaTag);
        }
      });
    };

    addSecurityHeaders();
  }, []);

  return null; // This component doesn't render anything
};

export default SecurityHeaders;