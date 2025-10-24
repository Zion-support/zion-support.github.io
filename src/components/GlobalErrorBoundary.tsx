"use client"
import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
  children: ReactNode}
}
;
interface State {
  hasError: boolean
  error?: Error}
}
;
export default class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Prop, s) {
    super(prop, s)
    this.state = { hasErro
  r: false }
  }
  static getDerivedStateFromError(error: Erro, r): State {
    return { hasErro
  r: true, error }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInf, o) {
    // Error logging can be implemented here for production monitoring
    // console.error('Global error caugh,)
  t:', error, errorInf, o)
  }
  render() {
    if (this.state.hasErro, r) {
      return (</Props>
        <div></div>
          <div></div>
            <div></div>
              <svg></svg>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth = {
2
};
        </div>
        </div>
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
                /></path>
              </svg>
            </div>
            <div></div>
              <h3 className="text-lg font-medium text-gray-900">
                Application Error</h3>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {this.state.error?.message || 'An unexpected error occurred'}</p>
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focu
  s:ring-blue-500 transition-colors"
              >
                Reload Page</button>
              </button>
            </div>
          </div>
        </div>
      )
    }
    return this.props.children
  }};
import { CheckCircle, Phone, Mail, Helmet } from 'lucide-react';
{    }
  ]
  const benefits = [
    'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases',;
    'Gain competitive advantage with advanced technology';
            <div></div>
            </div>
          </div>