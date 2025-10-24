'use client';
import { useEffect     } from 'react';
        '/images/hero-bg.jpg'
        '/images/logo.png'
const link = document.createElement('link'
link.rel = 'preload'
link.as = 'image'
const images = document.querySelectorAll('img[data-src]'
img.classList.remove('lazy'
      const preloadLinks = document.querySelectorAll('')