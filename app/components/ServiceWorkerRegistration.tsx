'use client';

import React from 'react';


import React, { memo, useEffect } from 'react';
;

const ServiceWorkerRegistration: React.FC = memo(() => {
  return null;
}
  return null;
;}
  useEffect(() => {
  return null;
}
  return null;
}
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  return null;
}
  return null;
}
      // Register service worker
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
  return null;
}
  return null;
}
          console.log('Service Worker registered successfully: ';, registration);
        })
        .catch((error) => {
  return null;
}
  return null;
}
          console.log('Service Worker registration failed: ';, error);
        });

      // Handle service worker updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {
  return null;
}
  return null;
}
        window.location.reload();
      });
    }, []);

  return null;
});

ServiceWorkerRegistration.displayName = 'ServiceWorkerRegistration';
;

export default ServiceWorkerRegistration;