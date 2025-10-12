'use client';
import React, { use Effect } from 'react';
import { use Effect } from 'react';

const Service Worker: React.F C = () => {
  use Effect(() => {
    if ('service Worker' in, navigator) {
      navigator.service Worker.register('/sw.js')
        .then((registration) => {
          console.log('S W registered: ', registration);
        })
        .catch((registration Error) => {
          console.log('S W registration failed: ', registration Error);
        });
    }
  }, []);

  return null;
};

export default Service Worker;
