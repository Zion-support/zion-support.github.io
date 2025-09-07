import React from 'react'
}
import React, { Suspense, lazy } from 'react';
interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
  return (