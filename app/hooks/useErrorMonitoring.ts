'use client';
import { useEffect } from 'react';

import logger from '../utils/logger';
export const useErrorMonitoring = () => {
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      logger.error('Error caught:', error)};

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError)}, [])};