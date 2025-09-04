import React from 'react';
import Head from 'next/head';

interface Props {
  preloadImages?: string[];
  preloadFonts?: string[];
  criticalCSS?: string;
}

export default function PerformanceOptimizer({ preloadImages = [], preloadFonts = [], criticalCSS }: Props) {
  return (
    <Head>
      {criticalCSS ? <style dangerouslySetInnerHTML={{ __html: criticalCSS }} /> : null}
      {preloadImages.map((src, i) => (
        <link key={`img-${i}`} rel="preload" as="image" href={src} />
      ))}
      {preloadFonts.map((href, i) => (
        <link key={`font-${i}`} rel="preload" as="style" href={href} />
      ))}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
    </Head>
  );
}