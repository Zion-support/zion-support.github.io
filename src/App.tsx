import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { PageLoader } from "./components/ui/loading-spinner";
import { FloatingCTA } from "./components/FloatingCTA";
import { Footer } from "./components/Footer";

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const NewServices = React.lazy(() => import('./pages/NewServices'));
const InnovationLab = React.lazy(() => import('./pages/InnovationLab'));
const TechnologyShowcase = React.lazy(() => import('./pages/TechnologyShowcase'));

// Lazy load new content pages
const AIServicesGuide = React.lazy(() => import('../app/ai-services-comprehensive-guide-2026/page'));
const QuantumShowcase = React.lazy(() => import('../app/quantum-computing-solutions-showcase-2026/page'));
const RevolutionaryTechShowcase = React.lazy(() => import('../app/revolutionary-technology-showcase-2026/page'));

function App() {
  useScrollToTop();
  
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new-services" element={<NewServices />} />
              <Route path="/innovation-lab" element={<InnovationLab />} />
              <Route path="/technology-showcase" element={<TechnologyShowcase />} />
              
              {/* New Content Routes */}
              <Route path="/ai-services-comprehensive-guide-2026" element={<AIServicesGuide />} />
              <Route path="/quantum-computing-solutions-showcase-2026" element={<QuantumShowcase />} />
              <Route path="/revolutionary-technology-showcase-2026" element={<RevolutionaryTechShowcase />} />
            </Routes>
          </Suspense>
          <FloatingCTA />
          <Footer />
          <Toaster />
          <SonnerToaster />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;