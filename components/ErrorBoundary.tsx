const Component = () => {
import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
class ErrorBoundary extends Component<Props, State> {
  constructor() {

    super(props);
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);