import { JSX, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { PageLoader } from './components/LoadingSpinner';

// Simple Home component
const HomePage = () => (
  <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-8">Zion Tech Group</h1>
      <p className="text-xl text-gray-300 mb-8">Advanced AI and IT Solutions</p>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg">
        <p className="text-lg">🚀 Coming Soon - Revolutionary AI Solutions</p>
      </div>
    </div>
  </div>
);

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-slate-950">
          <Routes>
            <Route 
              path="/" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <HomePage />
                </Suspense>
              } 
            />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}