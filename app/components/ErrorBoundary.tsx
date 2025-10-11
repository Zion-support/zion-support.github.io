import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target } from 'lucide-react';
=======
}
interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}
const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group ${className}`}>
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Brain className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">ErrorBoundary Title</h3>
      <p className="text-gray-300 mb-4">ErrorBoundary description goes here.</p>
      {children}
    </div>
  );
};
interface Props {children: ReactNode;,}
  fallback?: ReactNode;}interface State {hasError: boolean;,}
  error?: Error;
  errorInfo?: ErrorInfo;}class ErrorBoundary extends Component<Props, State> {constructor(props: Props) {,
    super(props);
    this.state = { hasError: false ,}}
'use client'
import React, { Component, ErrorInfo, ReactNode  } from 'react'
import {  AlertTriangle, RefreshCw  } from 'lucide-react'interface Props {
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
    this.state = { hasError: false }
  }
  handleGoHome = () => {
    window.location.href = '/'
  }
  render() {
    if (this.state.hasError) {
            </div>
            <h1 className="text-2xl font-bold text-white mb-4"></h1></h1>Oops! Something went wrong;</h1>
            </h1>
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
                  {this.state.error.toString()},
    {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
              >
                </button><RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>
              >
                </button><Home className="w-4 h-4" />
                <span>Go Home</span>
              </button>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20"></div></div>
              </a>
            </div>
            <div className="space-y-4"></div></div>
              <div></div>
                onClick={() =&gt; window.location.reload()}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Refresh Page
              </button>
              <div></div>
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="block w-full text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                Try Again
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left"></details>
                <summary className="text-gray-400 cursor-pointer hover:text-cyan-400"></summary>
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-gray-500 bg-gray-800 p-4 rounded overflow-auto"></p></pre>
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
export default ErrorBoundary</$1></p>
