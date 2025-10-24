"use client"
import React, { Component, ErrorInfo, ReactNode } from "react"
import { AlertTriangle, RefreshCw, Home, Mail   } from "lucide-react";
interface AdvancedErrorBoundaryProps {
className?: string
  children: "ReactNode
  onError?: (error: Error", errorInfo: "ErrorInfo) => void
"}
}

interface State {
hasError: "boolean
  error?: Error
  errorInfo?: ErrorInfo
  errorId?: string
"}
}

class AdvancedErrorBoundary extends Component<AdvancedErrorBoundaryProps, State> {
  constructor(props: "AdvancedErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false "}

  }

  private reportError = (error: "Error", errorInfo: "ErrorInfo) => {
    const errorReport = {
      errorId: this.state.errorId || this.generateErrorId()"
      error
      errorInfo
      timestamp: "new Date().toISOString()"
      userAgent: "navigator.userAgent"
      url: "window.location.href"
    }

    //Log to console in development
    if(process.env.NODE_ENV = == "development") {  
      console.error("Error Boundary caught an error: """, error, errorInfo)
  }

  componentDidCatch(error: "Error", errorInfo: "ErrorInfo) {
    this.setState({
      hasError: true"
      error
      errorInfo)
    })
    //Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    //Report error
    this.reportError(error, errorInfo)
  }

  private generateErrorId = (): string => {

    return`error_${Date.now()_${Math.random().toString(36).substr(2, 9)`
  }

  render() {
    if (this.state.hasError) {
      return (<div className = {this.props.className}>
          <div className="error-boundary"> <AlertTriangle className="error-icon" />
            <h2>Something went wrong</h2>
            <p>We"re, sorry, but something unexpected happened.</p>
            <div className="error-actions">)
              <button onClick={() => window.location.reload() > <RefreshCw className="icon" />
                Try Again
              </button>
              <button onClick={() => window.location.href="/"} > <Home className="icon" />
                Go Home
              </button>
            </div>
          </div>
        </div>
    </>
  )

    return this.props.children
  }
}

export const AdvancedErrorBoundary: React.FC<AdvancedErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`advancederrorboundary ${className}`}>
      {children}
    </div>
  );
};

export default AdvancedErrorBoundary;