import React, { useEffect } from 'react';
const PerformanceMonitor: React.FC = $2;
      if (navigation) {
        const loadTime = $2;
        console.log('Page load time:', loadTime)
      }
    },

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, []),

  return null, // This component doesn't render anything visible
},

export default PerformanceMonitor,