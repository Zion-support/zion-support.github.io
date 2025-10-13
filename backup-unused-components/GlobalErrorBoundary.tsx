import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props 
  children: ReactNode;

interface State 
  hasError: boolean;
  error?: Error;

class GlobalErrorBoundary extends Component<Props, State> 
  constructor(props: Props) 
    super(props);
    this.state = { hasError: false };

  static getDerivedStateFromError(error: Error): State 
    return { hasError: true, error };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) 
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') 

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') 
      // Here you would typically send the error to a logging service


  render() 
    if (this.state.hasError) 
      return (
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
//             >
//               Try Again
</button>
</div>
</div>
      );

    return this.props.children;


export default GlobalErrorBoundary;