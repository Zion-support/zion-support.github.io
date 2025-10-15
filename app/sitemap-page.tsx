import React from 'react';

interface sitemap-pageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function sitemap-page({ className = '', children }: sitemap-pageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
