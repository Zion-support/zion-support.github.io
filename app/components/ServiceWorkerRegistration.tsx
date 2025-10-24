import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const ServiceWorkerRegistration: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => { /* empty */ })
          .catch((registrationError) => { /* empty */ });
      });
    }
  }, []);

const ServiceWorkerRegistration = () => {
  return (
    <div>
      <h1>ServiceWorkerRegistration</h1>
      <p>This component is under construction.</p>
    </div>
  );
};

export default ServiceWorkerRegistration;