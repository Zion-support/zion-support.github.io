'use client';
import { useEffect } from 'react';

interface SecurityEnhancerProps {
  enableCSP?: boolean;
  enableHTTPSRedirect?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
  enableContentTypeSniffingProtection?: boolean;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  enableCSP = true,
  enableHTTPSRedirect = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true,
  enableContentTypeSniffingProtection = true
}) => {
  useEffect(() => {
    // HTTPS redirect
    if (enableHTTPSRedirect && typeof window !== 'undefined') {
      if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
        window.location.replace(`https:${window.location.href.substring(window.location.protocol.length)}`);
      }
    }

    // XSS Protection
    if (enableXSSProtection && typeof window !== 'undefined') {
      // Sanitize user input
      const sanitizeInput = (input: string): string => {
        return input
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;')
          .replace(/\//g, '&#x2F;');
      };

      // Override innerHTML setters to sanitize content
      const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
      if (originalInnerHTML) {
        Object.defineProperty(Element.prototype, 'innerHTML', {
          set: function(value: string) {
            const sanitized = sanitizeInput(value);
            originalInnerHTML.set?.call(this, sanitized);
          },
          get: originalInnerHTML.get,
          configurable: true
        });
      }
    }

    // Clickjacking protection
    if (enableClickjackingProtection && typeof window !== 'undefined') {
      // Check if the page is being framed
      if (window.top !== window.self) {
        // Redirect to the main page if being framed
        window.top.location = window.self.location;
      }

      // Add frame-busting script
      const frameBuster = document.createElement('script');
      frameBuster.textContent = `
        if (top !== self) {
          top.location = self.location;
        }
      `;
      document.head.appendChild(frameBuster);
    }

    // Content Type Sniffing Protection
    if (enableContentTypeSniffingProtection && typeof window !== 'undefined') {
      // Add meta tag to prevent MIME type sniffing
      const metaTag = document.createElement('meta');
      metaTag.setAttribute('http-equiv', 'X-Content-Type-Options');
      metaTag.setAttribute('content', 'nosniff');
      document.head.appendChild(metaTag);
    }

    // Additional security measures
    if (typeof window !== 'undefined') {
      // Disable right-click context menu (optional)
      const handleContextMenu = (e: MouseEvent) => {
        // Only disable on production
        if (process.env.NODE_ENV === 'production') {
          e.preventDefault();
        }
      };

      // Disable text selection (optional)
      const handleSelectStart = (e: Event) => {
        // Only disable on production
        if (process.env.NODE_ENV === 'production') {
          e.preventDefault();
        }
      };

      // Disable drag and drop (optional)
      const handleDragStart = (e: DragEvent) => {
        // Only disable on production
        if (process.env.NODE_ENV === 'production') {
          e.preventDefault();
        }
      };

      document.addEventListener('contextmenu', handleContextMenu);
      document.addEventListener('selectstart', handleSelectStart);
      document.addEventListener('dragstart', handleDragStart);

      return () => {
        document.removeEventListener('contextmenu', handleContextMenu);
        document.removeEventListener('selectstart', handleSelectStart);
        document.removeEventListener('dragstart', handleDragStart);
      };
    }
  }, [
    enableCSP,
    enableHTTPSRedirect,
    enableXSSProtection,
    enableClickjackingProtection,
    enableContentTypeSniffingProtection
  ]);

  return null;
};

export default SecurityEnhancer;