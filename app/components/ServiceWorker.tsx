
'use client';
import React, { useEffect } from 'react';
import { useEffect } from 'react';

    if ('serviceWorker' in, navigator) {
      navigator.serviceWorker.register('/sw.js')
          console.log('SW registered: ', registration);
        })
          console.log('SW registration failed: ', registrationError);
        });
  }, []);

  return null;
};

export default ServiceWorker;
