'use client';
;
;
;
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Phone  } from 'lucide-react'
interface Props {
  children: ReactNode
  fallback?: ReactNode
}
interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state;

}

}

export default ErrorBoundary;