'use client';

import { useEffect } from 'react';

export default function ErrorTracker() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/error-tracker.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // invisible
}
