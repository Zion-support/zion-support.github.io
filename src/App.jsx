import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load essential pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const ITOnsiteServices = React.lazy(() => import('./pages/ITOnsiteServices'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Signup = React.lazy(() => import('./pages/Signup'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Enhanced Service Pages
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027'));

// Simple loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan mx-auto mb-4"></div>
      <p className="text-zion-slate-light text-lg">Loading Zion Tech Group...</p>
    </div>
  </div>
);

// Error boundary component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
    <div className="text-center max-w-md mx-auto p-8">
      <div className="text-6xl mb-4">⚠️</div>
      <h1 className="text-2xl font-bold text-zion-cyan mb-4">Something went wrong</h1>
      <p className="text-zion-slate-light mb-6">
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
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <AppHeader />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Service Routes */}
              <Route path="/services/micro-saas" element={<MicroSAASServicesPage />} />
              <Route path="/services/ai" element={<AIServicesPage />} />
              <Route path="/services/it" element={<ITServicesPage />} />
              <Route path="/services/comprehensive" element={<ComprehensiveServicesOverview2027 />} />
              
              {/* Catch all route */}
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
