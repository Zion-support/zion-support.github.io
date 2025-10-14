'use client';

import React, { Suspense } from 'react';

interface DynamicImportProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function DynamicImport({ 
  children, 
  fallback = <div>Loading...</div> 
}: DynamicImportProps) {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
}
