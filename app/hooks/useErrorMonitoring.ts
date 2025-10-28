'use client';
import { useEffect } from 'react';

export const useErrorMonitoring = () => {
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      // Error caught
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError)}, [])};