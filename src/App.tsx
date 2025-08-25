import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const AISolutions = lazy(() => import('./pages/AISolutions'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const MicroSaasServicesPage = lazy(() => import('./pages/MicroSaasServices'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
          <Header />
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          <main id="main-content" className="pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/ai-solutions" element={<AISolutions />} />
                <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;