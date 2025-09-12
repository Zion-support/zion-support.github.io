import React from 'react';';';import React, { Component, ErrorInfo, ReactNode } from 'react';
import { _Button } from './ui/button';
import { _AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  enableReporting?: boolean;