import React, { useEffect, useState } from 'react';

const ServiceWorkerRegistration: React.FC = () => {
  const [isSupported, setIsSupported] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      setIsSupported(true);
      
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((reg) => {
            console.log('Service Worker registered successfully:', reg);
            setRegistration(reg);
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error);
          });
      });

      // Listen for updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }
  }, []);

  const updateServiceWorker = () => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  };

  if (!isSupported) {
    return null;
  }

  return (
    <div className="service-worker-registration">
      {/* Service worker registration happens automatically */}
    </div>
  );
};

export default ServiceWorkerRegistration;