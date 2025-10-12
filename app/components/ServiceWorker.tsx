importReact, { useEffect } from 'react';
import { useEffect   } from 'react';
constServiceWorker: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in, navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SWregistered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SWregistrationfailed: ', registrationError);
        });
    }
  }, []);

  returnnull;
};

exportdefaultServiceWorker;
