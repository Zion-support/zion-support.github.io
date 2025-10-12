import { use Effect } from 'react';

export const usePerformanceMonitor = () => {
  use Effect(() => {
    // Monitor page load performance
    const monitor Page Load = () => {
      if ('performance' in window) {
        window.add Event Listener('load', () => {
          set Timeout(() => {
            const navigation = performance.get Entries By Type('navigation')[0] as Performance Navigation Timing;
            const paint = performance.get Entries By Type('paint');
            
            // Log performance metrics
            console.log('Page Load Performance:', {
              dom Content Loaded: navigation.dom Content Loaded Event End - navigation.dom Content Loaded Event Start,
              load Complete: navigation.load Event End - navigation.load Event Start,
              first Paint: paint.find(entry => entry.name === 'first-paint')?.start Time,
              first Contentful Paint: paint.find(entry => entry.name === 'first-contentful-paint')?.start Time,
            });
          }, 0);
        });
      }
    };

    // Monitor resource loading
    const monitor Resource Loading = () => {
      if ('performance' in window) {
        const observer = new Performance Observer((list) => {
          list.get Entries().for Each((entry) => {
            if (entry.entry Type === 'resource') {
              console.log('Resource loaded:', {
                name: entry.name,
                duration: entry.duration,
                size: (entry as any).transfer Size,
              });
            }
          });
        });
        
        observer.observe({ entry Types: ['resource'] });
        
        return () => observer.disconnect();
      }
    };

    // Initialize monitoring
    monitor Page Load();
    const cleanup = monitor Resource Loading();

    // Cleanup
    return () => {
      cleanup?.();
    };
  }, []);
};