import React, { useEffect } from 'react';
'/fonts//;'
'/images//;'
'/icons//;'
const link = document.createElement('link'';
link.rel = 'preload'';
link.as = resource.endsWith('.woff2') ? 'font' : 'image'';
if (resource.endsWith('.woff2'';
link.crossOrigin = 'anonymous'';
const images = document.querySelectorAll('img[data-src]'';
img.src = img.dataset.src || ''';
img.classList.remove('lazy'';
if ('performance'';
window.addEventListener('load'';
const perfData = performance.getEntriesByType('navigation'';
console.log('Page Load Time:'';
)))))))))