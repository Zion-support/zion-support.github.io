import React, { Component, ErrorInfo, ReactNode} from "react";"
import { AlertTriangle, RefreshCw, Home} from "lucide-react";"
import { Link} from "react-router-dom";"
interface Props {children: ReactNode}
interface State {hasError: boolean;
import React, { Component, ErrorInfo, ReactNode} from "react";"
import { AlertTriangle, RefreshCw, Home} from "lucide-react";"
import { Link} from "react-router-dom";"
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void}
interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null}
  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)";"
    this.setState({
      error,
      errorInfo}
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">""
          <div className="sm:mx-auto sm:w-full sm:max-w-md">""
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">""
              <div className="text-center">""
                <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />""
                <h1 className="mt-4 text-3xl font-bold text-gray-900">""
    console.error("ErrorBoundary caught an error:", error, errorInfo);"
    this.setState({
      error,
      errorInfo});
    if (this.props.onError) {
      this.props.onError(error, errorInfo)}}
  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null})};
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback}
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">"
          <div className="max-w-md w-full bg-slate-800 rounded-lg shadow-xl p-8 text-center">"
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-500/20 rounded-full mb-6">"
              <AlertTriangle className="w-8 h-8 text-red-400" />"
            </div><//div></<//div>
            <h1 className="text-2xl font-bold text-white mb-4">"
              Oops! Something went wrong
            </h1><//h1></<//h1>
            <p className="text-gray-300 mb-6">"
              We"re sorry, but something unexpected happened. Our team has been notified and is working to fix the issue."
            </p><//p></<//p>
            {process.env.NODE_ENV === "development" && this.state.error && ("
              <details className="mb-6 text-left">"
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-white">"
                  Error Details (Development Only)
                </summary><//summary></<//summary>
                <div className="mt-2 p-4 bg-slate-900 rounded text-xs text-red-400 font-mono overflow-auto">"
                  <div className="mb-2">"
                    <strong>Error:</strong> {this.state.error.message}
                  </div><//div></<//div>
                  {this.state.errorInfo && (
                    <div></div></</div>
                      <strong>Stack Trace:</strong><//strong></<//strong>
                      <pre className="mt-1 whitespace-pre-wrap">"
import React, { Component, ReactNode} from "react";"
interface ErrorBoundaryProps {
  children: ReactNode}
interface ErrorBoundaryState {
  hasError: boolean}
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false}}
  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true}}
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)}"
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">"
          <div className="sm:mx-auto sm:w-full sm:max-w-md">"
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">"
              <div className="text-center">"
                <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />"
                <h1 className="mt-4 text-3xl font-bold text-gray-900">"
                  Something went wrong
                </h1><//h1></<//h1>
                <p className="mt-2 text-sm text-gray-600">""
                  We"re sorry, but something unexpected happened. Please try refreshing the page.""
                </p><//p></<//p>
                {process.env.NODE_ENV === "development" && this.state.error && (""
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">""
                    <h3 className="text-sm font-medium text-red-800">Error Details:</h3>""
                    <pre className="mt-2 text-xs text-red-700 overflow-auto">""
                      {this.state.error.toString()
                    </pre><//pre></<//pre>
                    {this.state.errorInfo && (
                      <pre className="mt-2 text-xs text-red-700 overflow-auto">""
                      <pre className="mt-2 text-xs text-red-700 overflow-auto">"
                        {this.state.errorInfo.componentStack}
                      </pre><//pre></<//pre>
                    )
                  </div><//div></<//div>
                )
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">""
                  <button
                    onClick={() => window.location.reload()
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500""
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />""
                    Refresh Page
                  </button><//button></<//button>
                  <Link
                    to="/""
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500""></Link
                    to="/""
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500""></</Link
                    to="/""
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"">
                    <Home className="w-4 h-4 mr-2" />""
                    Go Home
                  </Link></div><//div></details><//details></<//details>
            )}
            <div className="flex flex-col sm:flex-row gap-3">"
              <button
                onClick={this.handleReset}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300""></button
                onClick={this.handleReset}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300""></</button
                onClick={this.handleReset}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"">
                <RefreshCw className="w-4 h-4" />"
                Try Again
              </button><//button></<//button>
              <Link
                to="/""
                className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300""></Link
                to="/""
                className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300""></</Link
                to="/""
                className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"">
                <Home className="w-4 h-4" />"
                Go Home
              </Link></div><//div></<//div>
            <div className="mt-6 pt-6 border-t border-slate-700">"
              <p className="text-sm text-gray-400">"
                If this problem persists, please{" "}"
                <Link to="/contact" className="text-purple-400 hover:text-purple-300">"
                  contact our support team
                </Link></p><//p></div></div><//div></<//div>
          </div><//div></<//div>
        <div className="p-4">"
          <h2 className="text-xl font-semibold mb-2">Something went wrong.</h2>"
          <p>Please refresh the page and try again.</p></div><//div></<//div>
      )
    return this.props.children}

      )}
    return this.props.children}}


