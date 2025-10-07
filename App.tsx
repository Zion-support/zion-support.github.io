import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './app/page';

// Memoized components for better performance
// Error Boundary and Loading components removed as they are not used
const App = () => {
  // Performance optimization: Preload critical resources
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href =
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
      // Preload critical images
      const preloadImages = [
        'https://ziontechgroup.com/og-image.jpg',
        'https://ziontechgroup.com/logo.png'
      ];
      preloadImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
      // Add performance monitoring
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (perfData) {
            console.log('Page Load Performance:', {
              domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
              loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
              totalTime: perfData.loadEventEnd - perfData.fetchStart
            });
          }
        });
      }
    }
  }, []);
  // Event handlers removed as they are not used
  return (
    <HelmetProvider>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </HelmetProvider>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export default App;
