'use client';
import { useEffect } from 'react';

export const useErrorMonitoring = () => {
  useEffect(_() => {
    const handleError = (error: ErrorEvent) => {
      console.error('Error caught:', error)};

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError)}, [])};