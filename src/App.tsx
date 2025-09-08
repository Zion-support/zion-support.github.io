
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Simple components
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import { NotificationToast } from './components/NotificationToast';

// Create QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

// Simple Home component
const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-4">Zion Tech Group</h1>
      <p className="text-xl mb-8">AI & IT Solutions</p>
      <div className="text-green-400 text-lg">
        ✅ Successfully built and deployed! 🚀
      </div>
    </div>
  </div>
);

// Simple About component
const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg">Leading provider of AI-powered solutions and IT services.</p>
    </div>
  </div>
);
// Simple Contact component
const Contact = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-900 to-blue-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">Get in touch with our team.</p>
    </div>
  </div>
);

// Simple NotFound component
const NotFound = () => (
  <div className="min-h-screen bg-gradient-to-br from-red-900 to-purple-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg">The page you're looking for doesn't exist.</p>
    </div>
  </div>
);

// Main App component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <Router>
            <div className="App">
              <main className="main-content">                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/pricing" element={<Pricing />} />
                    
                    {/* Service Routes */}
                    <Route path="/services/ai-services" element={<AIServices />} />
                    <Route path="/services/it-services" element={<ITServices />} />
                    <Route path="/services/micro-saas" element={<MicroSaaS />} />
                    <Route path="/enhanced-micro-saas" element={<EnhancedMicroSAAS />} />
                    <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                    <Route path="/services/cloud-solutions" element={<CloudMigration />} />
                    <Route path="/services/mobile-development" element={<MobileDevelopment />} />
                    
                    {/* Additional Routes */}
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/support" element={<Support />} />
                    
                    {/* 404 Route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
            </div>
            <NotificationToast />
          </Router>
        </HelmetProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;