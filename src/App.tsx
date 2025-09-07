import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load essential pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Services = React.lazy(() => import('./pages/Services'));
const Team = React.lazy(() => import('./pages/Team'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Signup = React.lazy(() => import('./pages/Signup'));

// Enhanced loading component with skeleton
const LoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-zion-cyan text-lg font-medium">Loading Zion...</p>
      <p className="text-muted-foreground text-sm">Preparing your AI marketplace experience</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <AppHeader />
        <main className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-zion-cyan mb-4">404</h1>
                    <p className="text-xl text-muted-foreground mb-8">Page not found</p>
                    <a href="/" className="text-zion-cyan hover:underline">Go back home</a>
                  </div>
                </div>
              } />
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