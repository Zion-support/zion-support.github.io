import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './src/index.css';

// Import only the essential components that exist
import UltimateContentShowcase2027 from './src/components/UltimateContentShowcase2027';
import RevolutionaryAdBanner2027 from './src/components/RevolutionaryAdBanner2027';

// Import only the pages that exist
import UltimateTechRevolution2027 from './src/pages/UltimateTechRevolution2027';
import InterdimensionalTechRevolution2027 from './src/pages/InterdimensionalTechRevolution2027';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              Revolutionary Technology Solutions for the Future
            </p>
          </div>

          {/* Revolutionary Ad Banner 2027 */}
          <RevolutionaryAdBanner2027 />

          {/* Ultimate Content Showcase 2027 */}
          <div className="mb-12">
            <UltimateContentShowcase2027 />
          </div>

        </main>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<div />} />
          <Route path="/pages/UltimateTechRevolution2027" element={<UltimateTechRevolution2027 />} />
          <Route path="/pages/InterdimensionalTechRevolution2027" element={<InterdimensionalTechRevolution2027 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;