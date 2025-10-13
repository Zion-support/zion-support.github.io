<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'.
>>>>>>> origin/main

interface CoreWebVitalsProps {
  className?: string.
  children?: React.ReactNode.
}

export default function CoreWebVitals({ className = '', children }: CoreWebVitalsProps) {
  return (
    <div className={`core-web-vitals ${className}`}>
      {children}
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
  );
=======
    </div>
  ).
  ).
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
}

    // Log in development
    if (process.env['NODE_ENV'] === 'development') {'
      }
>>>>>>> origin/main
