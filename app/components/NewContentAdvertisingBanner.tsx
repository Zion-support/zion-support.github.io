import React from 'react';

interface NewContentAdvertisingBannerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function NewContentAdvertisingBanner({ className = '', children }: NewContentAdvertisingBannerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
