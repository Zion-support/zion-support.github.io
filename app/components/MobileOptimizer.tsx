import React, { useEffect, useCallback, useState } from 'react';

interface MobileOptimizerProps {
  children: React.ReactNode;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  // Detect mobile device
  const detectMobile = useCallback(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
    const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword));
    setIsMobile(isMobileDevice);
  }, []);

  // Detect touch capability
  const detectTouch = useCallback(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchDevice);
  }, []);

  // Handle orientation changes
  const handleOrientationChange = useCallback(() => {
    const currentOrientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    setOrientation(currentOrientation);
  }, []);

  // Optimize images for mobile
  const optimizeImagesForMobile = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img: HTMLImageElement) => {
      // Add responsive image attributes
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add srcset for responsive images
      if (!img.hasAttribute('srcset') && img.src) {
        const src = img.src;
        const baseSrc = src.replace(/\.(jpg|jpeg|png|webp)$/i, '');
        const extension = src.match(/\.(jpg|jpeg|png|webp)$/i)?.[0] || '.jpg';
        
        img.srcset = `
          ${baseSrc}-320w${extension} 320w,
          ${baseSrc}-640w${extension} 640w,
          ${baseSrc}-1024w${extension} 1024w,
          ${baseSrc}-1280w${extension} 1280w
        `;
        img.sizes = '(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 1024px) 1024px, 1280px';
      }
    });
  }, []);

  // Optimize fonts for mobile
  const optimizeFontsForMobile = useCallback(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Optimize font loading for mobile */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300 800;
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      
      /* Mobile-specific typography */
      @media (max-width: 768px) {
        body {
          font-size: 16px;
          line-height: 1.5;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        
        h1 { font-size: 2rem; }
        h2 { font-size: 1.75rem; }
        h3 { font-size: 1.5rem; }
        h4 { font-size: 1.25rem; }
        h5 { font-size: 1.125rem; }
        h6 { font-size: 1rem; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Optimize touch interactions
  const optimizeTouchInteractions = useCallback(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Touch-friendly button sizes */
      @media (max-width: 768px) {
        button, .btn, [role="button"] {
          min-height: 44px;
          min-width: 44px;
          padding: 12px 16px;
        }
        
        /* Improve touch targets */
        a, button, input, select, textarea {
          min-height: 44px;
          min-width: 44px;
        }
        
        /* Remove hover effects on touch devices */
        @media (hover: none) {
          .hover\\:scale-105:hover {
            transform: none;
          }
          
          .hover\\:shadow-lg:hover {
            box-shadow: none;
          }
        }
      }
      
      /* Prevent zoom on input focus */
      input[type="text"],
      input[type="email"],
      input[type="tel"],
      input[type="url"],
      input[type="password"],
      textarea,
      select {
        font-size: 16px;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Optimize viewport for mobile
  const optimizeViewport = useCallback(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover';
      document.head.appendChild(meta);
    }
  }, []);

  // Add mobile-specific meta tags
  const addMobileMetaTags = useCallback(() => {
    const metaTags = [
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-tap-highlight', content: 'no' }
    ];

    metaTags.forEach(tag => {
      if (!document.querySelector(`meta[name="${tag.name}"]`)) {
        const meta = document.createElement('meta');
        meta.name = tag.name;
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
  }, []);

  // Optimize scrolling for mobile
  const optimizeScrolling = useCallback(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Smooth scrolling for mobile */
      html {
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
      }
      
      /* Prevent horizontal scroll */
      body {
        overflow-x: hidden;
      }
      
      /* Optimize scroll performance */
      * {
        -webkit-overflow-scrolling: touch;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Add PWA manifest
  const addPWAManifest = useCallback(() => {
    if (!document.querySelector('link[rel="manifest"]')) {
      const manifest = {
        name: 'Zion Tech Group',
        short_name: 'Zion Tech',
        description: 'Advanced AI and IT Solutions',
        start_url: '/',
        display: 'standalone',
        background_color: '#0f172a',
        theme_color: '#06b6d4',
        icons: [
          {
            src: '/logo192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      };

      const manifestLink = document.createElement('link');
      manifestLink.rel = 'manifest';
      manifestLink.href = `data:application/json,${encodeURIComponent(JSON.stringify(manifest))}`;
      document.head.appendChild(manifestLink);
    }
  }, []);

  // Initialize mobile optimizations
  useEffect(() => {
    detectMobile();
    detectTouch();
    handleOrientationChange();
    optimizeImagesForMobile();
    optimizeFontsForMobile();
    optimizeTouchInteractions();
    optimizeViewport();
    addMobileMetaTags();
    optimizeScrolling();
    addPWAManifest();

    // Add event listeners
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    // Add mobile-specific classes
    if (isMobile) {
      document.documentElement.classList.add('mobile');
    }
    if (isTouch) {
      document.documentElement.classList.add('touch');
    }
    document.documentElement.classList.add(orientation);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, [
    detectMobile,
    detectTouch,
    handleOrientationChange,
    optimizeImagesForMobile,
    optimizeFontsForMobile,
    optimizeTouchInteractions,
    optimizeViewport,
    addMobileMetaTags,
    optimizeScrolling,
    addPWAManifest,
    isMobile,
    isTouch,
    orientation
  ]);

  return <>{children}</>;
};

export default MobileOptimizer;