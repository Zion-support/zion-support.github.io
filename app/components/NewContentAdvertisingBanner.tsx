import React from 'react';

interface NewcontentadvertisingbannerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Newcontentadvertisingbanner({ className = '', children }: NewcontentadvertisingbannerProps) {
  return (
    <div className={`NewContentAdvertisingBanner-component ${className}`}>
      {children}
    </div>
  );
}