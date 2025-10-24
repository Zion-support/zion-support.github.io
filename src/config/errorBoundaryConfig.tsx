'use client';

import React from 'react';

interface ErrorBoundaryConfig {
  enableReporting: boolean;
  reportUrl?: string;
  enableRetry: boolean;
  maxRetries: number;
  retryDelay: number;
}

const errorBoundaryConfig: ErrorBoundaryConfig = {
  enableReporting: true,
  reportUrl: '/api/error-report',
  enableRetry: true,
  maxRetries: 3,
  retryDelay: 1000
};

export default errorBoundaryConfig;