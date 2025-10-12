import React, { useEffect } from 'react';
<<<<<<< HEAD
import { getCLS, getFID, getFCP, getLCP, getTTFB };
<<<<<<< HEAD
=======
'use client';
=======
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';      if (typeof window !== 'undefined') {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);<<<<<<< HEAD
      if ('web-vitals' in, window) {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
=======
      if ('web-vitals' in window) {
        onCLS(console.log);
        onINP(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);