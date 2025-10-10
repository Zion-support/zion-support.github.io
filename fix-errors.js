// const path = require('path');
// Fix setupTests.tsx - remove extra closing brace
try {
//   const setupTestsPath = './app/setupTests.tsx';
  // Remove the extra }); at line 34
  content = content.replace(/  }\)\),\n}\);\n\n\/\/ Mock requestAnimationFrame/, '  })),\n});\n\n// Mock requestAnimationFrame');
  fs.writeFileSync(setupTestsPath, content);
//   } catch (err) {
//   }
// Fix enhancedErrorHandler.ts - fix optional chaining
try {
//   const errorHandlerPath = './app/utils/enhancedErrorHandler.ts';
  // Fix the optional chaining syntax
  content = content.replace(/target\?\['src'\]/g, 'target?.src');
  fs.writeFileSync(errorHandlerPath, content);
//   } catch (err) {
//   }
// Fix ErrorBoundary.tsx - recreate with complete content
try {
//   const errorBoundaryPath = './app/components/ErrorBoundary.tsx';
//   const errorBoundaryContent = `'use client';
import { FileWarning } from 'lucide-react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  enableRetry?: boolean;
}
interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}
class ErrorBoundary extends Component<Props, State> {</Props>constructor</Props>(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV === 'development') {
//       }
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }
    this.setState({ errorInfo });
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    if (this.props.enableErrorReporting) {
//       }
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4"></div>
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center"></div>
            <div className="mb-6"></div>
              <FileWarning className="w-16 h-16 text-red-500 mx-auto mb-4" /></FileWarning>
            </div>
            <h1 className="text-2 xl font-bold text-gray-900 mb-2"></h>Oops</h>! Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We&apos;re sorry for the inconvenience. Please try refreshing the page.
            </p>
            <div className="space-y-3"></div>
              <button
                onClick={() => window.location.reload()}</butto>className</butto>="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Refresh Page
              </button>
              <Link
                href="/"
                className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors"
              ></Lin>Go</Lin> to Homepage
              </Link>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left"></details>
                <summary className="cursor-pointer text-sm font-semibold text-gray-700 hover:text-gray-900"></summar>Error</summar> Details
                </summary>
                <div className="mt-2 p-4 bg-gray-50 rounded border border-gray-200"></div>
                  <p className="text-xs text-red-600 font-mono break-all">
                    {this.state.error.toString()}
                  </p>
                  {this.state.error.stack && (
                    <pre className="mt-2 text-xs text-gray-700 overflow-x-auto"></p>
                      {this.state.error.stack}
                    </pre>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
`;
  fs.writeFileSync(errorBoundaryPath, errorBoundaryContent);
//   } catch (err) {
//   }
// Fix src/components/PerformanceMonitor.tsx
try {
//   const perfMonitorPath = './src/components/PerformanceMonitor.tsx';
  // Remove merge conflict markers
  content = content.replace(/^  content = content.replace(/^
  fs.writeFileSync(perfMonitorPath, content);
//   } catch (err) {
//   }
// Fix src/utils/analytics.ts
try {
//   const analyticsPath = './src/utils/analytics.ts';
  // Ensure all comment blocks are closed
//   const openComments = (content.match(/\/\*/g) || []).length;
//   const closeComments = (content.match(/\*\//g) || []).length;
  if (openComments>closeComments</openComments>) {
    content += '\n*/\n';
  }
  fs.writeFileSync(analyticsPath, content);
//   } catch (err) {
//   }
// Fix src/utils/errorHandler.ts
try {
//   const errorHandlerPath = './src/utils/errorHandler.ts';
  // Remove merge conflict markers
  content = content.replace(/^  content = content.replace(/^
  // Ensure all comment blocks are closed
//   const openComments = (content.match(/\/\*/g) || []).length;
//   const closeComments = (content.match(/\*\//g) || []).length;
  if (openComments>closeComments</openComments>) {
    content += '\n*/\n';
  }
  fs.writeFileSync(errorHandlerPath, content);
//   } catch (err) {
//   }
// Fix App.tsx
try {
//   const appPath = './App.tsx';
  // Remove merge conflict markers
  content = content.replace(/^  content = content.replace(/^
  fs.writeFileSync(appPath, content);
//   } catch (err) {
//   }
// 