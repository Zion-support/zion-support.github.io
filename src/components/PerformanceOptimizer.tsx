<<<<<<< HEAD
'use client';
import React, { useEffect, useState } from 'react';
interface PerformanceOptimizerProps {}
=======
'use client;

import React, { useEffect, useState } from react;

interface PerformanceOptimizerProps {
>>>>>>> origin/main
  enableImageOptimization?: boolean;

  enableLazyLoading?: boolean;

  enablePreloading?: boolean;

  enableCodeSplitting?: boolean;

  enableResourceHints?: boolean;

  enableServiceWorker?: boolean}

;
<<<<<<< HEAD
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({}
  enableImageOptimization="true,"
  enableLazyLoading="true,"
  enablePreloading="true,"
  enableCodeSplitting="true,"
  enableResourceHints="true,"
  enableServiceWorker="true;"
}) => {;
const [optimizationStatus, setOptimizationStatus] = useState({}
=======

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  enableResourceHints = true,
  enableServiceWorker = true
}) => {;

const [optimizationStatus, setOptimizationStatus] = useState({
>>>>>>> origin/main
    imagesOptimized: 0,
    lazyLoaded: 0,
    preloaded: 0,
    codeSplit: false,
    resourceHints: 0,
    serviceWorker: false;
  });
  useEffect(() => {}
    if (enableImageOptimization) {}
      optimizeImages()}
<<<<<<< HEAD
    if (enableLazyLoading) {}
      setupLazyLoading()}
    if (enablePreloading) {}
      preloadCriticalResources()}
    if (enableCodeSplitting) {}
      setupCodeSplitting()}
    if (enableResourceHints) {}
      addResourceHints()}
    if (enableServiceWorker) {}
=======

    if (enableLazyLoading) {
      setupLazyLoading()}

    if (enablePreloading) {
      preloadCriticalResources()}

    if (enableCodeSplitting) {
      setupCodeSplitting()}

    if (enableResourceHints) {
      addResourceHints()}

    if (enableServiceWorker) {
>>>>>>> origin/main
      registerServiceWorker()}

  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting, enableResourceHints, enableServiceWorker]);

;
<<<<<<< HEAD
const optimizeImages = () => {;
const images="document.querySelectorAll('img');"
    let optimized="0;"
    images.forEach((img) => {}
      // Add loading=""lazy" for images below the fold;"
      if (img.getBoundingClientRect().top > window.innerHeight) {}
        img.setAttribute('loading', 'lazy');
        optimized++}
      
      // Add decoding=""async" for better performance;"
      img.setAttribute('decoding', 'async');
      // Add fetchpriority=""high" for above-the-fold images;"
      if (img.getBoundingClientRect().top <= window.innerHeight) {}
        img.setAttribute('fetchpriority', 'high')}
      
      // Add proper alt text if missing;
      if (!img.getAttribute('alt')) {}
        img.setAttribute('alt', 'Zion Tech Group - AI and IT Solutions')}
    });
    setOptimizationStatus(prev = "> ({ ...prev, imagesOptimized: optimized }))};"
;
const setupLazyLoading = () => {}
    if ('IntersectionObserver' in window) {;
const observer = new IntersectionObserver((entries) => {}
        entries.forEach((entry) => {}
          if (entry.isIntersecting) {;
const img = "entry.target as HTMLImageElement;"
            if (img.dataset.src) {}
              img.src="img.dataset.src;"
              img.removeAttribute('data-src');
=======

const optimizeImages = () => {;;;

const images = document.querySelectorAll(img);;

    let optimized = 0;;

    images.forEach((img) => {
      // Add loading="lazy for images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.setAttribute('loading', lazy);

        optimized++}

      // Add decoding="async for better performance
      img.setAttribute('decoding', async);

      // Add fetchpriority="high for above-the-fold images
      if (img.getBoundingClientRect().top <= window.innerHeight) {
        img.setAttribute('fetchpriority', 'high)}

      // Add proper alt text if missing
      if (!img.getAttribute('alt)) {
        img.setAttribute('alt', 'Zion Tech Group - AI and IT Solutions)}

    });

    setOptimizationStatus(prev => ({ ...prev, imagesOptimized: optimized }))};

;

const setupLazyLoading = () => {;;

    if (IntersectionObserver in window) {;

const observer = new IntersectionObserver((entries) => {;;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {;

const img = entry.target as HTMLImageElement;;

            if (img.dataset.src) {
              img.src = img.dataset.src;

              img.removeAttribute(data-src);

>>>>>>> origin/main
              observer.unobserve(img)}

          }
<<<<<<< HEAD
        })}, {}
        rootMargin: '50px 0px',
        threshold: 0.1;
=======

        })}, {
        rootMargin: '50px 0px,
        threshold: 0.1
>>>>>>> origin/main
      });

      ;
<<<<<<< HEAD
const lazyImages="document.querySelectorAll('img[data-src]');"
      lazyImages.forEach((img) => observer.observe(img));
      setOptimizationStatus(prev = "> ({ ...prev, lazyLoaded: lazyImages.length }))}"
=======

const lazyImages = document.querySelectorAll(img[data-src]);;

      lazyImages.forEach((img) => observer.observe(img));

      setOptimizationStatus(prev => ({ ...prev, lazyLoaded: lazyImages.length }))}

>>>>>>> origin/main
  };

;
<<<<<<< HEAD
const preloadCriticalResources = () => {;
const criticalResources = []
      {}
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display="swap',"
        as: 'style',
        type: 'text/css'
      },
      {}
        href: '/styles/critical.css',
        as: 'style',
        type: 'text/css'
=======

const preloadCriticalResources = () => {;;

const criticalResources = [;;

      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap,
        as: 'style,
        type: text/css
      },
      {
        href: '/styles/critical.css,
        as: 'style,
        type: text/css
>>>>>>> origin/main
      }

    ];
    criticalResources.forEach((resource) => {;
<<<<<<< HEAD
const link="document.createElement('link');"
      link.rel="'preload';"
      link.href="resource.href;"
      link.as="resource.as;"
      if (resource.type) {}
        link.type="resource.type}"
      document.head.appendChild(link)});
    setOptimizationStatus(prev = "> ({ ...prev, preloaded: criticalResources.length }))};"
;
const setupCodeSplitting = () => {}
    // This would be handled by Next.js dynamic imports;
    setOptimizationStatus(prev = "> ({ ...prev, codeSplit: true }))};"
;
const addResourceHints = () => {;
const hints = []
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
=======

const link = document.createElement(link);;

      link.rel = preload;

      link.href = resource.href;

      link.as = resource.as;

      if (resource.type) {
        link.type = resource.type}

      document.head.appendChild(link)});

    setOptimizationStatus(prev => ({ ...prev, preloaded: criticalResources.length }))};

;

const setupCodeSplitting = () => {;;

    // This would be handled by Next.js dynamic imports
    setOptimizationStatus(prev => ({ ...prev, codeSplit: true }))};

;

const addResourceHints = () => {;;

const hints = [;;;

      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous }

>>>>>>> origin/main
    ];
    hints.forEach((hint) => {;
<<<<<<< HEAD
const link="document.createElement('link');"
      link.rel="hint.rel;"
      link.href="hint.href;"
      if (hint.crossorigin) {}
        link.crossOrigin="hint.crossorigin}"
      document.head.appendChild(link)});
    setOptimizationStatus(prev = "> ({ ...prev, resourceHints: hints.length }))};"
;
const registerServiceWorker = async () => {}
    if ('serviceWorker' in navigator) {}
      try {;
const registration = "await navigator.serviceWorker.register('/sw.js');"
        setOptimizationStatus(prev = "> ({ ...prev, serviceWorker: true }))} catch (error) {}"
          // Service Worker registration failed - handled silently in production;
=======

const link = document.createElement(link);;

      link.rel = hint.rel;

      link.href = hint.href;

      if (hint.crossorigin) {
        link.crossOrigin = hint.crossorigin}

      document.head.appendChild(link)});

    setOptimizationStatus(prev => ({ ...prev, resourceHints: hints.length }))};

;

const registerServiceWorker = async () => {;;

    if ('serviceWorker in navigator) {
      try {;

const registration = await navigator.serviceWorker.register(/sw.js);;

        setOptimizationStatus(prev => ({ ...prev, serviceWorker: true }))} catch (error) {
          // Service Worker registration failed - handled silently in production
>>>>>>> origin/main
        }

    }

  };
<<<<<<< HEAD
  // Performance monitoring;
  useEffect(() => {}
    if (typeof window !== 'undefined' && 'performance' in window) {;
const observer = new PerformanceObserver((list) => {}
        for (const entry of list.getEntries()) {}
          if (entry.entryType === 'largest-contentful-paint') {}
            // Track LCP;
            if (typeof window !== 'undefined' && 'gtag' in window) {}
              (window as any).gtag('event', 'web_vitals', {}
                name: 'LCP',
=======

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && performance in window) {;

const observer = new PerformanceObserver((list) => {;;

        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint) {
            // Track LCP
            if (typeof window !== 'undefined' && 'gtag in window) {
              (window as any).gtag('event', 'web_vitals, {
                name: 'LCP,
>>>>>>> origin/main
                value: Math.round(entry.startTime),
                event_category: Performance
              })}

          }

        }

      });
<<<<<<< HEAD
      observer.observe({ entryTypes: ['largest-contentful-paint'] })}
=======

      observer.observe({ entryTypes: ['largest-contentful-paint] })}

>>>>>>> origin/main
  }, []);
  return null};
<<<<<<< HEAD
export default PerformanceOptimizer;
=======

export default PerformanceOptimizer;
>>>>>>> origin/main
