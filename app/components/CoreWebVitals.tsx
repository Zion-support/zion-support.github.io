import React from 'react';

interface CoreWebVitalsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function CoreWebVitals({ className = '', children }: CoreWebVitalsProps) {
  return (
    <div className={`core-web-vitals ${className}`}>
      {children}
    </div>
  );
}
  }, []);

  useEffect(() => {
    // Measure Core Web Vitals
    onCLS(reportWebVitals);
    onINP(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
  }, [reportWebVitals]);

  return null;
};

export default CoreWebVitals;
