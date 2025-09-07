import React from 'react';
import { cn } from '@/lib/utils';

interface SpacingProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  direction?: 'vertical' | 'horizontal' | 'both';
  className?: string;
  children?: React.ReactNode;
}

const spacingClasses = {
  xs: {
    vertical: 'py-2',
    horizontal: 'px-2',
    both: 'p-2'
  },
  sm: {
    vertical: 'py-4',
    horizontal: 'px-4',
    both: 'p-4'
  },
  md: {
    vertical: 'py-6',
    horizontal: 'px-6',
    both: 'p-6'
  },
  lg: {
    vertical: 'py-8',
    horizontal: 'px-8',
    both: 'p-8'
  },
  xl: {
    vertical: 'py-12',
    horizontal: 'px-12',
    both: 'p-12'
  },
  '2xl': {
    vertical: 'py-16',
    horizontal: 'px-16',
    both: 'p-16'
  },
  '3xl': {
    vertical: 'py-20',
    horizontal: 'px-20',
    both: 'p-20'
  }
};

const Spacing: React.FC<SpacingProps> = ({
  size = 'md',
  direction = 'both',
  className = '',
  children
}) => {
  const spacingClass = spacingClasses[size][direction];

  return (
    <div className={cn(spacingClass, className)}>
      {children}
    </div>
  );
};

// Section spacing component for consistent page sections
interface SectionSpacingProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const SectionSpacing: React.FC<SectionSpacingProps> = ({
  children,
  className = '',
  size = 'lg'
}) => {
  const sizeClasses = {
    sm: 'py-12 sm:py-16',
    md: 'py-16 sm:py-20',
    lg: 'py-20 sm:py-24',
    xl: 'py-24 sm:py-32'
  };

  return (
    <section className={cn(sizeClasses[size], className)}>
      {children}
    </section>
  );
};

// Container spacing component for consistent content width
interface ContainerSpacingProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const ContainerSpacing: React.FC<ContainerSpacingProps> = ({
  children,
  className = '',
  size = 'lg'
}) => {
  const sizeClasses = {
    sm: 'max-w-2xl mx-auto px-4',
    md: 'max-w-4xl mx-auto px-4',
    lg: 'max-w-6xl mx-auto px-4',
    xl: 'max-w-7xl mx-auto px-4',
    full: 'w-full px-4'
  };

  return (
    <div className={cn(sizeClasses[size], className)}>
      {children}
    </div>
  );
};

// Grid spacing component for consistent grid layouts
interface GridSpacingProps {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
}

const GridSpacing: React.FC<GridSpacingProps> = ({
  children,
  className = '',
  cols = 3,
  gap = 'md',
  responsive = true
}) => {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  };

  const gridClasses = responsive
    ? `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols} ${gapClasses[gap]}`
    : `grid grid-cols-${cols} ${gapClasses[gap]}`;

  return (
    <div className={cn(gridClasses, className)}>
      {children}
    </div>
  );
};

export { Spacing, SectionSpacing, ContainerSpacing, GridSpacing };
export default Spacing;