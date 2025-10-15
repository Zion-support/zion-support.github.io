import React, { ComponentType, lazy } from 'react';

// Lazy loading utility with better error handling and preloading
export const createLazyComponent = <T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  fallback?: ComponentType<any>
) => {
  return lazy(() =>
    importFn()
      .catch((error) => {
        console.warn('Failed to load component:', error);
        
        if (fallback) {
          return { default: fallback };
        }
        
        // Return a simple error component
        return {
          default: () => React.createElement('div', {
            className: 'min-h-screen flex items-center justify-center bg-slate-900'
          }, React.createElement('div', {
            className: 'text-center'
          }, [
            React.createElement('h2', {
              className: 'text-xl font-semibold text-white mb-2'
            }, 'Component Failed to Load'),
            React.createElement('p', {
              className: 'text-gray-400 mb-4'
            }, 'Please try refreshing the page'),
            React.createElement('button', {
              onClick: () => window.location.reload(),
              className: 'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
            }, 'Refresh')
          ]))
        };
      })
  );
};

// Preload components for better UX
export const preloadComponent = (importFn: () => Promise<any>) => {
  if (typeof window === 'undefined') return;
  
  // Use requestIdleCallback for better performance
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      importFn().catch(() => {
        // Silently fail preloading
      });
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      importFn().catch(() => {
        // Silently fail preloading
      });
    }, 100);
  }
};

// Preload critical pages
export const preloadCriticalPages = () => {
  if (typeof window === 'undefined') return;
  
  const criticalPages = [
    '/about',
    '/contact',
    '/services',
    '/ai-services'
  ];
  
  criticalPages.forEach(page => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = page;
    document.head.appendChild(link);
  });
};

// Intersection Observer for lazy loading images
export const createImageObserver = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  return new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.remove('lazy');
            img.classList.add('loaded');
          }
          
          // Unobserve after loading
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.1
    }
  );
};

// Lazy load images
export const lazyLoadImage = (img: HTMLImageElement, observer: IntersectionObserver | null) => {
  if (observer) {
    observer.observe(img);
  } else {
    // Fallback for browsers without IntersectionObserver
    const src = img.dataset.src;
    if (src) {
      img.src = src;
      img.removeAttribute('data-src');
    }
  }
};

// Resource hints for better performance
export const addResourceHints = () => {
  if (typeof document === 'undefined') return;
  
  const hints = [
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
  ];
  
  hints.forEach(hint => {
    const link = document.createElement('link');
    Object.assign(link, hint);
    document.head.appendChild(link);
  });
};

// Critical CSS injection
export const injectCriticalCSS = () => {
  if (typeof document === 'undefined') return;
  
  const criticalCSS = `
    .lazy { opacity: 0; transition: opacity 0.3s; }
    .loaded { opacity: 1; }
    .loading-spinner { 
      display: inline-block; 
      width: 20px; 
      height: 20px; 
      border: 3px solid #f3f3f3; 
      border-top: 3px solid #3498db; 
      border-radius: 50%; 
      animation: spin 1s linear infinite; 
    }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
  `;
  
  const style = document.createElement('style');
  style.textContent = criticalCSS;
  style.setAttribute('data-critical', 'true');
  document.head.insertBefore(style, document.head.firstChild);
};