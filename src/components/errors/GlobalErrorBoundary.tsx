'use client'
import React { Component ErrorInfo ReactNode } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle,
RefreshCw
, Home,
Bug;
, Send,;
Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as Sentry from '@sentry/nextjs';
import { logErrorToProduction } from '@/utils/productionLogger';
interface ErrorBoundaryState {hasError: boolean,
error: Error | null,
errorInfo: ErrorInfo | null,
errorId: string | null,
retryCount: number,
userFeedback: string,
showDetails: boolean,
interface ErrorBoundaryProps {
  children: ReactNode,
fallback?: ReactNode,
onError?: (error: Error errorInfo: ErrorInfo) => void,
enableRetry?: boolean,
maxRetries?: number,
showReportButton?: boolean,
context?: string;  enableRetry?: boolean,
maxRetries?: number,
}
showReportButton?: boolean,}
context?: string}
export class GlobalErrorBoundary extends Component<
  ErrorBoundaryProps,
ErrorBoundaryState
> {
  private retryTimeouts: NodeJS.Timeout[] = []
  constructor(props: ErrorBoundaryProps) {
    super(props)
export class GlobalErrorBoundary extends Component<ErrorBoundaryProps ErrorBoundaryState> {
  private retryTimeouts: NodeJS.Timeout[] = []
  constructor(props: ErrorBoundaryProps) {
    super(props)
errorBoundaryProps?: Omit<ErrorBoundaryProps 'children'>
,) => {
  const WrappedComponent = (props: P;) => (
    <GlobalErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </GlobalErrorBoundary>
  )
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName |Component.name})`
  return WrappedComponent,
}
export default GlobalErrorBoundary,
WrappedComponent.displayName = `withErrorBoundary(${Component.displayName |Component.name})`
  return WrappedComponent,
}
export default GlobalErrorBoundary