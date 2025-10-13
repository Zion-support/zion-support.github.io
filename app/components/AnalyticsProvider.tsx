'use client';
import React from 'react';
import { AnalyticsProvider as AnalyticsProviderContext } from '../contexts/AnalyticsContext';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  return (
    <AnalyticsProviderContext>
      {children}
    </AnalyticsProviderContext>
  );
}