// Performance optimization utilities

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  // Preload critical CSS
  const criticalCSS = document.createElement('link');
  criticalCSS.rel = 'preload';
  criticalCSS.href = '/app/styles/futuristic.css';
  criticalCSS.as = 'style';
  document.head.appendChild(criticalCSS);

  // Preload critical fonts
  const fontPreload = document.createElement('link');
  fontPreload.rel = 'preload';
  fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
  fontPreload.as = 'style';
  fontPreload.crossOrigin = 'anonymous';
  document.head.appendChild(fontPreload);

  // Preload critical pages
  const criticalPages = ['/about', '/contact', '/services'];
  criticalPages.forEach(page => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = page;
    document.head.appendChild(link);
  });
};

// Optimize images
export const optimizeImageSrc = (src: string, width?: number, quality: number = 80) => {
  if (src.startsWith('http') || src.startsWith('data:')) {
    return src;
  }
  
  // Add WebP support and optimization parameters
  const baseSrc = src.replace(/\.(jpg|jpeg|png)$/i, '');
  const params = new URLSearchParams();
  
  if (width) params.set('w', width.toString());
  params.set('q', quality.toString());
  params.set('f', 'webp');
  
  return `${baseSrc}.webp?${params.toString()}`;
};

// Memory management
export const cleanupMemory = () => {
  if (typeof window === 'undefined') return;
  
  // Clear unused event listeners
  const elements = document.querySelectorAll('[data-cleanup]');
  elements.forEach(element => {
    element.removeAttribute('data-cleanup');
  });
  
  // Force garbage collection if available
  if ('gc' in window && typeof (window as any).gc === 'function') {
    (window as any).gc();
  }
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window === 'undefined' || !('performance' in window)) {
    fn();
    return;
  }
  
  const start = performance.now();
  fn();
  const end = performance.now();
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`${name} took ${end - start} milliseconds`);
  }
  
  return end - start;
};

// Bundle size optimization
export const loadChunk = async (chunkName: string) => {
  try {
    const chunk = await import(/* webpackChunkName: "[request]" */ `../${chunkName}`);
    return chunk;
  } catch (error) {
    console.warn(`Failed to load chunk ${chunkName}:`, error);
    return null;
  }
};

// Service Worker registration
export const registerServiceWorker = async () => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }
  
  try {
    const registration = await navigator.serviceWorker.register('/sw.js');
    
    if (process.env.NODE_ENV === 'development') {
      console.log('SW registered: ', registration);
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.log('SW registration failed: ', error);
    }
  }
};

// Critical CSS injection
export const injectCriticalCSS = (css: string) => {
  if (typeof document === 'undefined') return;
  
  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-critical', 'true');
  document.head.insertBefore(style, document.head.firstChild);
};

// Resource hints
export const addResourceHints = (urls: string[]) => {
  if (typeof document === 'undefined') return;
  
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Performance budget monitoring
export const checkPerformanceBudget = () => {
  if (typeof window === 'undefined' || !('performance' in window)) {
    return;
  }
  
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return;
  
  const loadTime = navigation.loadEventEnd - navigation.fetchStart;
  const budget = 3000; // 3 seconds
  
  if (loadTime > budget) {
    console.warn(`Performance budget exceeded: ${loadTime}ms > ${budget}ms`);
  }
  
  return {
    loadTime,
    withinBudget: loadTime <= budget,
    budget
  };
};