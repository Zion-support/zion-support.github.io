import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { useScrollToTop } from './hooks/useScrollToTop';
import { WhitelabelProvider } from './context/WhitelabelContext';
import { Toaster as SonnerToaster } from './components/ui/sonner';
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import EnhancedSEO from './components/EnhancedSEO';
import EnhancedAccessibility from './components/EnhancedAccessibility';

// Basic pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Pricing = lazy(() => import('./pages/Pricing'));

const App: React.FC = () => {
  useScrollToTop();

  return (
    <EnhancedErrorBoundary>
      <EnhancedAccessibility />
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
              <Header />

              <main className='flex-1'>
                <Suspense
                  fallback={
                    <div className='flex items-center justify-center min-h-screen'>
                      <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-white'></div>
                    </div>
                  }
                >
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/pricing' element={<Pricing />} />
                  </Routes>
                </Suspense>
              </main>

              <Footer />

              {/* Enhanced SEO */}
              <EnhancedSEO />

              {/* Enhanced Accessibility Controls */}
              <EnhancedAccessibility position='bottom-right' />

              {/* Toast Notifications */}
              <SonnerToaster />
            </div>
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </EnhancedErrorBoundary>
  );
};

export default App;
