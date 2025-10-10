import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
        const errorData = {
    const errorDetails = {
    const subject = `Bug Report - Error ID: ${this.state.errorId}`;
    const body = `Error Details:\n\n${JSON.stringify(errorDetails, null, 2)}`;
      const { retryCount, error, errorId } = this.state;
      const _canRetry = retryCount < this.maxRetries;
export default EnhancedErrorBoundary;