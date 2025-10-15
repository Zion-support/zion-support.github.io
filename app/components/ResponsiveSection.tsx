import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';

interface ResponsiveSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'none' | 'gradient' | 'dark' | 'light' | 'pattern';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  responsivePadding?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  centered?: boolean;
  responsive?: boolean;
}

const ResponsiveSection: React.FC<ResponsiveSectionProps> = ({
  children,
  className = '',
  background = 'none',
  padding = 'lg',
  responsivePadding,
  maxWidth = '7xl',
  centered = true,
  responsive = true
}) => {
  const baseClasses = [
    'w-full',
    'relative'
  ];

  const backgroundClasses = {
    none: '',
    gradient: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
    dark: 'bg-slate-900',
    light: 'bg-white/5',
    pattern: 'bg-gradient-to-r from-slate-800/50 to-purple-800/50'
  };

  const paddingClasses = {
    none: '',
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-20',
    xl: 'py-20 sm:py-24',
    '2xl': 'py-24 sm:py-32'
  };

  const responsivePaddingClasses = responsive && responsivePadding ? [
    responsivePadding.sm && `sm:${responsivePadding.sm}`,
    responsivePadding.md && `md:${responsivePadding.md}`,
    responsivePadding.lg && `lg:${responsivePadding.lg}`,
    responsivePadding.xl && `xl:${responsivePadding.xl}`
  ].filter(Boolean) : [];

  const sectionClasses = [
    ...baseClasses,
    backgroundClasses[background],
    responsive ? paddingClasses[padding] : paddingClasses[padding],
    ...responsivePaddingClasses,
    className
  ].filter(Boolean).join(' ');

  const content = centered ? (
    <ResponsiveContainer maxWidth={maxWidth}>
      {children}
    </ResponsiveContainer>
  ) : (
    children
  );

  return (
    <section className={sectionClasses}>
      {content}
    </section>
  );
};

export default ResponsiveSection;