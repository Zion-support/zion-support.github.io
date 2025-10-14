'use client';
import React from 'react';

interface NewContentAdvertisingBannerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function NewContentAdvertisingBanner({ children, className = '' }: NewContentAdvertisingBannerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}