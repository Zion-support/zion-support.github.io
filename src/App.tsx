import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import './App.css';
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
  );
};

export default App;