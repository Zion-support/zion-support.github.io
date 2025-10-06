import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';

// Import the main page component from the app directory
import HomePage from '../app/page';

// Lazy load other components
const About = lazy(() => import('../app/about/page'));
const Services = lazy(() => import('../app/services/page'));
const Blog = lazy(() => import('../app/blog/page'));
const Contact = lazy(() => import('../app/contact/page'));
const Team = lazy(() => import('../app/team/page'));
const Privacy = lazy(() => import('../app/privacy/page'));
const Terms = lazy(() => import('../app/terms/page'));

// Loading component for Suspense fallback
const LoadingFallback = ({ height = 'h-32' }: { height?: string }) => (
  <div className={`${height} bg-gray-200 animate-pulse rounded`}></div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense
          fallback={
            <div className='min-h-screen flex items-center justify-center bg-gray-50'>
              <div className='text-center'>
                <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto'></div>
                <p className='mt-4 text-gray-600'>Loading...</p>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<Suspense fallback={<LoadingFallback />}><About /></Suspense>} />
            <Route path='/services' element={<Suspense fallback={<LoadingFallback />}><Services /></Suspense>} />
            <Route path='/blog' element={<Suspense fallback={<LoadingFallback />}><Blog /></Suspense>} />
            <Route path='/contact' element={<Suspense fallback={<LoadingFallback />}><Contact /></Suspense>} />
            <Route path='/team' element={<Suspense fallback={<LoadingFallback />}><Team /></Suspense>} />
            <Route path='/privacy' element={<Suspense fallback={<LoadingFallback />}><Privacy /></Suspense>} />
            <Route path='/terms' element={<Suspense fallback={<LoadingFallback />}><Terms /></Suspense>} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

// Simple Error Boundary
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  override componentDidCatch() {
    // Error logged to monitoring service in production
  }

  override render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
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

export { ErrorBoundary };

export default App;
