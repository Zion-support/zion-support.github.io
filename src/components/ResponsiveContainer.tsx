import React, { useEffect, useState } from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  breakpoints?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
  };
  fallback?: React.ReactNode;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = '',
  breakpoints = {},
  fallback,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg' | 'xl' | '2xl'>('lg');

  const _isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isLargeDesktop = useMediaQuery({ minWidth: 1280 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    if (isLargeDesktop) {
      setScreenSize('2xl');
    } else if (isDesktop) {
      setScreenSize('xl');
    } else if (isTablet) {
      setScreenSize('md');
    } else {
      setScreenSize('sm');
    }
  }, [isClient, isMobile, isTablet, isDesktop, isLargeDesktop]);

  if (!isClient) {
    return fallback || <div className={className}>{children}</div>;
  }

  const getResponsiveClasses = () => {
    const baseClasses = className;
    const responsiveClasses = breakpoints[screenSize] || '';
    return `${baseClasses} ${responsiveClasses}`.trim();
  };

  return (
    <div className={getResponsiveClasses()}>
      {children}
    </div>
  );
};

// Hook for responsive values
export const useResponsiveValue = <T,>(values: {
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
  default?: T;
}): T => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isLargeDesktop = useMediaQuery({ minWidth: 1280 });

  if (isLargeDesktop && values['2xl'] !== undefined) {
    return values['2xl'];
  }
  if (isDesktop && values.xl !== undefined) {
    return values.xl;
  }
  if (isTablet && values.md !== undefined) {
    return values.md;
  }
  if (isMobile && values.sm !== undefined) {
    return values.sm;
  }
  return values.default || values.lg || values.md || values.sm || ({} as T);
};

// Hook for responsive breakpoints
export const useBreakpoint = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isLargeDesktop = useMediaQuery({ minWidth: 1280 });

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    current: isLargeDesktop ? '2xl' : isDesktop ? 'xl' : isTablet ? 'md' : 'sm',
  };
};

export default ResponsiveContainer;