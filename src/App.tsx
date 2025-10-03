import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

// Simple Error Boundary
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {/* content */}
  constructor(props: any) {/* content */}
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {/* content */}
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {/* content */}
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {/* content */}
    if (this.state.hasError) {/* content */}
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50"></div>
          <div className="text-center"></div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {/* content */}
  return (
  <div></div>
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gray-50"></div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={/* content */}
                <div className="min-h-screen flex items-center justify-center"></div>
                  <div className="text-center"></div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                    <p className="text-gray-600 mb-8">Page not found</p>
                    <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"></a>
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;