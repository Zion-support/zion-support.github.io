import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import './App.css';
<<<<<<< HEAD
import Home from './pages/Home';

const ServicesPage: React.FC = () => {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
			<h2 className="text-3xl font-semibold mb-6">Our Services</h2>
			<ServicesOverview />
		</div>
	);
};

const App = () => {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Suspense>
=======

// Only import working components
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="text-cyan-500 text-lg font-semibold">Loading...</div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes here as we fix components */}
        </Routes>
      </Suspense>
    </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896
  );
}

export default App;