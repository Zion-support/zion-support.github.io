'use client';
import React from 'react';;

import { useEffect } from 'react';

export const useErrorMonitoring: React.FC = () => {
  useEffect(() => {
    const handleError: React.FC = (error: ErrorEvent) => {
      console.error('Error caught:', error)};

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError)}, [])};
