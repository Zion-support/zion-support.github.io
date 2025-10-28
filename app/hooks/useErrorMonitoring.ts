'use client';
import { useEffect } from 'react';

export const useErrorMonitoring = _() => {
  useEffect_(() => {
    const handleError = (error: ErrorEvent) => {
      // Error caught and handled
    };

    window.addEventListener('error', handleError);
    return _() => window.removeEventListener('error', handleError)}, [])};