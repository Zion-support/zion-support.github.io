import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from "./layout/AppHeader";
import { ChatAssistant } from "./components/ChatAssistant";
// Lazy load all pages
const Home = lazy(() => import('./pages/Home.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
// Services pages
const ServicesPricingPage = lazy(() => import('./pages/ServicesPricingPage.tsx'));
// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan"></div>
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
              <Route path="/contact" element={<Contact />} />
              {/* Services routes */}
              <Route path="/services" element={<ServicesPricingPage />} />
              {/* Catch-all route for 404 */}
              <Route path="*" element={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-zion-cyan mb-4">404 - Page Not Found</h1>
                    <p className="text-zion-slate-light mb-6">The page you're looking for doesn't exist.</p>
                    <a href="/" className="bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors">
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </Suspense>
        </main>
        <ChatAssistant />
      </div>
    </Router>
  )}
export default App;
