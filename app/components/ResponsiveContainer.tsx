'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './Navigation';
import Footer from './Footer';

interface ResponsiveContainerProps {
  children?: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ 
  children, 
  className = '', 
  maxWidth = '7xl' 
}) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  };

  return (
    <>
      <Helmet>
        <title>ResponsiveContainer - Zion Tech Group</title>
        <meta name="description" content="Advanced ResponsiveContainer solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, ResponsiveContainer, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClasses[maxWidth]} ${className}`}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default ResponsiveContainer;