import { useEffect } from 'react';

const SecurityHeaders: React.FC = () => {
  useEffect(() => {
    // Add security headers via meta tags
    const addSecurityMeta = () => {
      const metaTags = [
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
        { name: 'x-content-type-options', content: 'nosniff' },
        { name: 'x-frame-options', content: 'DENY' },
        { name: 'x-xss-protection', content: '1; mode=block' },
        { name: 'permissions-policy', content: 'camera=(), microphone=(), geolocation=()' },
        { name: 'content-security-policy', content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none';" }
      ];

      metaTags.forEach(tag => {
        if (!document.querySelector(`meta[name="${tag.name}"]`)) {
          const meta = document.createElement('meta');
          meta.name = tag.name;
          meta.content = tag.content;
          document.head.appendChild(meta);
        }
      });
    };

    addSecurityMeta();
  }, []);

  return null;
};

export default SecurityHeaders;