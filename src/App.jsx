import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.jsx';
// Lazy load only the pages we know work
const Home = lazy(() => import('./pages/Home.jsx'));
const LoadingSpinner = () => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center">
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-zion-purple border-t-transparent rounded-full animate-spin mx-auto mb-4" style={{ animationDelay: '-0.5s' }}></div>
      </div>
      <p className="text-zion-cyan text-lg font-medium">Loading Zion Tech Group...</p>
      <p className="text-zion-slate-light text-sm mt-2">Preparing your experience</p>
    </div>
  </div>
);
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        <AppHeader />
        <main className="flex-1 pt-16 lg:pt-20">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* 404 route */}
              <Route path="*" element={
                <div className="min-h-screen bg-futuristic flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-zion-cyan mb-4">404</h1>
                    <p className="text-xl text-zion-slate-light mb-8">Page not found</p>
                    <button
                      onClick={() => window.history.back()}
                      className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
                    >
                      Go Back
                    </button>
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
