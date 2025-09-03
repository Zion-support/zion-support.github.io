import React, { Component, ErrorInfo, ReactNode } from;
  'react' import { motion } from;
  'framer-motion' import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, Shield } from;
  'lucide-react'  interface Props {
   children: ReactNode;
   fallback?: ReactNode;
   onError?: (erro,
    r: Error, errorInfo: ErrorInfo) => void;
   showDetails?: boolean} interface State {
   hasError: boolean;
<<<<<<< HEAD
   error: Error | null
   errorInfo: ErrorInfo | null
   showDetails: boolean} export class ModernErrorBoundary extends Component<Props, State> { constructor(props: Props) { super(props) this.state = { hasError: false, error: null, errorInfo: null, showDetails: false } } static getDerivedStateFromError(error: Error): State { return { hasError: true, error, errorInfo: null, showDetails: false } } componentDidCatch(error: Error, errorInfo: ErrorInfo) { this.setState({ error, errorInfo })  if (this.props.onError) { this.props.onError(error, errorInfo) }'
=======
   error: Error | null;
   errorInf,
    o: ErrorInfo | null'
   showDetail,
    s: boolean} export class ModernErrorBoundary extends Component<Props, State> { constructor(props: Props) { super(props) this.state = { hasErro,
    r: false, error: null, errorInfo: null, showDetails: false } } static getDerivedStateFromError(error: Error): State { return { hasErro,
    r: true, error, errorInfo: null, showDetails: false } } componentDidCatch(error: Error, errorInfo: ErrorInfo) { this.setState({ error, errorInfo })  if (this.props.onError) { this.props.onError(error, errorInfo) }
>>>>>>> main
