'use client'
import { useEffect } from 'react'
        '/images/hero-bg.jpg'
        '/images/logo.png'
        const link = document.createElement('link'
        link.rel = 'preload'
        link.as = 'image'
      const images = document.querySelectorAll('img[data-src]'
<<<<<<< HEAD
            img.src = img.dataset.src || '''
=======
            img.src = img.dataset.src || ''
>>>>>>> cursor/fix-errors-and-merge-to-main-d1ed;
            img.classList.remove('lazy';
      const preloadLinks = document.querySelectorAll('');