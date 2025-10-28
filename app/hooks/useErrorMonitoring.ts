'use client';
import { useEffect } from 'react';

export const useErrorMonitoring = () => {
  useEffect(() => {
    const handleError = (_error: ErrorEvent) => {
      
    console.error('Error caught:', _error)};

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError)}, [])};