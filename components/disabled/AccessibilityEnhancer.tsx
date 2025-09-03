import React { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)};

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange)}, []);

  useEffect(() => {
    // Add accessibility enhancements
    document.body.setAttribute('data-reduced-motion', isReducedMotion.toString());
    
    // Add skip link if it doesn't exist
    if (!document.getElementById('skip-link')) {
      const skipLink = document.createElement('a');
      skipLink.id = 'skip-link';
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild)}
  }, [isReducedMotion]);

  return <>{children}</>};

export default AccessibilityEnhancer;