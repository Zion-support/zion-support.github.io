import React from 'react';

interface EnhancedSEOProps {
  children: React.ReactNode;
}

export default function EnhancedSEO({ children }: EnhancedSEOProps) {
  return <>{children}</>;
}