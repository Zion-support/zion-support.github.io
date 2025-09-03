import React, { useEffect } from 'react';
import Head from 'next/head';

interface PerformanceOptimizerProps {
  preloadImages?: string[];
  preloadFonts?: string[];
  preloadScripts?: string[]}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  preloadImages = [],
  preloadFonts = [],
  preloadScripts = []
}) => {
  useEffect(() => {
    // Preload critical images
    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link)});

    // Preload critical fonts
    preloadFonts.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      document.head.appendChild(link)});

    // Preload critical scripts
    preloadScripts.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'script';
      link.href = src;
      document.head.appendChild(link)})}, [preloadImages, preloadFonts, preloadScripts]);

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  )};

export default PerformanceOptimizer;