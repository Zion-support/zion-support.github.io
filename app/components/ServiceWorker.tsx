import React, {useEffect} from 'react';
import {useEffect} from 'react';
'use client';

const Service Worker: React.FC = () => {
  use Effect(() => {
    if ('serviceWorker' in, navigator) {
      navigator.service Worker.register('/sw.js')
        .then((registration) => {
          console.log('SWregistered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SWregistrationfailed: ', registrationError);
        });
    }
  }, []);

  return null;
};

export default Service Worker;
