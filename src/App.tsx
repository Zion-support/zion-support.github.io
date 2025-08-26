import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { WhitelabelProvider } from './context/WhitelabelContext';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy load only the working components
const InnovativeServicesShowcase = React.lazy(() => import('./pages/InnovativeServicesShowcase'));

// Simple working App component
const App: React.FC = () => {
  return (
    <WhitelabelProvider>
      <ThemeProvider>
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<InnovativeServicesShowcase />} />
              <Route path="/innovative-services-2025" element={<InnovativeServicesShowcase />} />
              <Route path="*" element={<InnovativeServicesShowcase />} />
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;