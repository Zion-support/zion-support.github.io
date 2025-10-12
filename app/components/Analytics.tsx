'use client';
import { use Effect } from 'react';

interface Analytics Props {
  children: React.React Node;
}

  use Effect(() => {
    // Initialize analytics tracking
    const init Analytics = () => {
      // Google Analytics initialization
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G A_ ME AS UR EM EN T_ ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    init Analytics();
  }, []);

  return <R eact.Fragment />{children}</R eact.Fragment>;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
