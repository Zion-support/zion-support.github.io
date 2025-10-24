import React, { Component, type ErrorInfo, type ReactNode } from 'react'
interface ErrorFallbackProps {
    error: Error,
  resetError: () => void
  }
function ErrorFallback({ error, resetError }: ErrorFallbackProps) {
  return ()
            onClick={() => window?.location.reload()}
            className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover: bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Reload page</span>
        </div>
      </div>
    </div>
  ),
}
interface AppErrorBoundaryProps {
    children: ReactNode
  }
interface AppErrorBoundaryState {
    hasError: boolean,
  error: Error | undefined
  }
export class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  constructor(props: AppErrorBoundaryProps) {
    super(props),
    this.state = { hasError: false, error: undefined };
  }
  static getDerivedStateFromError(error: Error): AppErrorBoundaryState {
    return { hasError: true, error }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env['NODE_ENV'] === 'development') {
      console.error('Error caught by boundary:', error, errorInfo)
  }
    // Here you could send error to monitoring service
  }
  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }
  render() {
    if (this.state.hasError && this.state.error) {
      return <ErrorFallback></ErrorFallback>
    }
    return this.props.children
  }
}</div></div></div></div></div></div></div></p></p></h3>