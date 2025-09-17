import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <ThemeProvider>
      <WhitelabelProvider>
        <Router>
          <div className="App min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
            <Navigation />
            
            {/* Main Content with enhanced Suspense */}
            <main className="pt-20 min-h-screen">
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div></div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<Home />} />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
          </div>
        </Router>
      </WhitelabelProvider>
    </ThemeProvider>
  );
}

export default App;
