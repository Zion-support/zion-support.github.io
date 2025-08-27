import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
<<<<<<< HEAD
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.jsx';

// Lazy load pages
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Blog = lazy(() => import('./pages/Blog.jsx'));
const PartnersPage = lazy(() => import('./pages/Partners.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const FAQ = lazy(() => import('./pages/FAQ.jsx'));
const Careers = lazy(() => import('./pages/Careers.jsx'));
const Privacy = lazy(() => import('./pages/Privacy.jsx'));
const Terms = lazy(() => import('./pages/Terms.jsx'));
const Sitemap = lazy(() => import('./pages/Sitemap.jsx'));
const GreenIT = lazy(() => import('./pages/GreenIT.jsx'));

// Enhanced loading component with better UX
=======
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load essential pages only
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const ITOnsiteServices = React.lazy(() => import('./pages/ITOnsiteServices'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
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
>>>>>>> f586d65b60879d2bb8f7439b01dc83f1e4614bf1
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan mx-auto mb-4"></div>
      <p className="text-zion-slate-light text-lg">Loading Zion Tech Group...</p>
    </div>
  </div>
);

<<<<<<< HEAD
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
      {process.env.NODE_ENV === 'development' && (
        <details className="mt-6 text-left">
          <summary className="cursor-pointer text-zion-slate-light">Error Details</summary>
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
      <h2 className="text-2xl font-semibold text-zion-slate-light mb-4">Page Not Found</h2>
      <p className="text-zion-slate-light mb-6 max-w-md mx-auto">
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
          onClick={() => window.history.back()}
          className="block mx-auto mt-3 bg-zion-slate text-white px-6 py-3 rounded-lg hover:bg-zion-slate-dark transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  </div>
);

=======
>>>>>>> f586d65b60879d2bb8f7439b01dc83f1e4614bf1
function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-zion-slate-dark">
        {/* App Header */}
        <AppHeader />
        
        {/* Main Content */}
<<<<<<< HEAD
        <main className="pt-24">
=======
        <main id="main-content" className="pt-24">
>>>>>>> f586d65b60879d2bb8f7439b01dc83f1e4614bf1
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
              <Route path="/blog" element={<Blog />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/green-it" element={<GreenIT />} />
=======
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Enhanced Service Routes */}
              <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/comprehensive-services-overview-2027" element={<ComprehensiveServicesOverview2027 />} />
              
              {/* Information Pages */}
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* User Pages */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/partners" element={<Partners />} />
>>>>>>> f586d65b60879d2bb8f7439b01dc83f1e4614bf1
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Chat Assistant */}
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;
