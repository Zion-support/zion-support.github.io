import React, { Component, ErrorInfo, ReactNode } from &apos;react&apos; interface Props {
  children: ReactNode;
   fallback?: ReactNode;
   onError?: (erro,r: Error, errorInfo: ErrorInfo) => void} interface State {
  hasError: boolean;
   error: Error | null
   errorInf,o: ErrorInfo | null} class ComprehensiveErrorBoundary extends Component&apos; < Props, State> {} constructor (props: Props) { super (props) this.state = { hasErro,r: false, error: null, errorInfo: null } } static getDerivedStateFromError (error: Error) : State { return { hasErro,r: true, error, errorInfo: null } } componentDidCatch (error: Error, errorInfo: ErrorInfo) { this.setState ({ error, errorInfo }) ';
&apos;'