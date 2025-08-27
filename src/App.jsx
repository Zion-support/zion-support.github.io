import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load all pages
const Home = React.lazy(() => import('./pages/Home.tsx'));
const About = React.lazy(() => import('./pages/About.tsx'));
const Contact = React.lazy(() => import('./pages/Contact.tsx'));
const Blog = React.lazy(() => import('./pages/Blog.tsx'));
const PartnersPage = React.lazy(() => import('./pages/Partners.tsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));
const FAQ = React.lazy(() => import('./pages/FAQ.tsx'));
const Careers = React.lazy(() => import('./pages/Careers.tsx'));
const Privacy = React.lazy(() => import('./pages/Privacy.tsx'));
const Terms = React.lazy(() => import('./pages/Terms.tsx'));
const Sitemap = React.lazy(() => import('./pages/Sitemap.tsx'));

// Enhanced loading component with better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan"></div>
  </div>
);

// Error boundary component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
    <div className="text-center max-w-md mx-auto p-8">
      <div className="text-6xl mb-4">⚠️</div>
      <h1 className="text-2xl font-bold text-zion-cyan mb-4">Something went wrong</h1>
      <p className="text-zinc-400 mb-6">
        We encountered an unexpected error. Please try refreshing the page.
      </p>
      <div className="space-y-3">
        <button
          onClick={resetErrorBoundary}
          className="bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors w-full"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-zion-slate text-white px-6 py-3 rounded-lg hover:bg-zion-slate-dark transition-colors w-full"
        >
          Go Home
        </button>
      </div>
      {process.env.NODE_ENV === 'development' && (
        <details className="mt-6 text-left">
          <summary className="cursor-pointer text-zinc-400">Error Details</summary>
          <pre className="mt-2 text-xs text-red-400 bg-zion-slate-dark p-3 rounded overflow-auto">
            {error.message}
          </pre>
        </details>
      )}
    </div>
  </div>
);

// 404 page component
const NotFound = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-zion-cyan mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-zinc-400 mb-4">Page Not Found</h2>
      <p className="text-zinc-400 mb-6 max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="space-y-3">
        <a 
          href="/" 
          className="inline-block bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors"
        >
          Go Home
        </a>
        <button 
          onClick={() => window.location.href = '/contact'}
          className="block mx-auto mt-3 bg-zion-slate text-white px-6 py-3 rounded-lg hover:bg-zion-slate-dark transition-colors"
        >
          Contact Support
        </button>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <AppHeader />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;
