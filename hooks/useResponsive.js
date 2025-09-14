import { useState, useEffect } from 'react';

// Hook for responsive breakpoints
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('sm');

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1536) setBreakpoint('2xl');
      else if (width >= 1280) setBreakpoint('xl');
      else if (width >= 1024) setBreakpoint('lg');
      else if (width >= 768) setBreakpoint('md');
      else setBreakpoint('sm');
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
}

// Hook for device detection
export function useDevice() {
  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent;
      
      if (width < 768) {
        setDevice('mobile');
      } else if (width < 1024) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    updateDevice();
    window.addEventListener('resize', updateDevice);
    return () => window.removeEventListener('resize', updateDevice);
  }, []);

  return device;
}

// Hook for viewport dimensions
export function useViewport() {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  return viewport;
}

// Responsive component wrapper
export function ResponsiveWrapper({ 
  children, 
  mobile, 
  tablet, 
  desktop,
  className 
}) {
  const device = useDevice();
  
  const getComponent = () => {
    switch (device) {
      case 'mobile':
        return mobile || children;
      case 'tablet':
        return tablet || mobile || children;
      case 'desktop':
        return desktop || tablet || mobile || children;
      default:
        return children;
    }
  };

  return (
    <div className={className}>
      {getComponent()}
    </div>
  );
}