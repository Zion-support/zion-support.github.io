'use client';

import {_useEffect} from 'react';

export const useErrorMonitoring = () => {
  useEffect(() => {
    const handleError = (error: _ErrorEvent) => {
      console.error('Error caught:', error)};

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError)}, [])};