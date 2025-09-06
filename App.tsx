import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './src/components/ErrorBoundary';
import Header from './src/components/Header';
import Sidebar from './src/components/layout/Sidebar';
import Footer from './src/components/Footer';
import HomePage from './src/pages/Home';
import AboutPage from './src/pages/About';
import ContactPage from './src/pages/Contact';
import ServicesPage from './src/pages/Services';
import PricingPage from './src/pages/Pricing';


import React, { JSX } from 'react',

export default function App(): JSX.Element {
  return (
    <main>
      <h1>Hello App</h1>
    </main>
export default function App() {;
  return (
    <ErrorBoundary>;
      <Router>;
        <div className="min-h-screen bg-gray-50">;
          <Header />;
          <Sidebar />;
          <main className="flex-1 lg:ml-80">;
            <Routes>;
              <Route path="/" element={<HomePage />} />;
              <Route path="/about" element={<AboutPage />} />;
              <Route path="/contact" element={<ContactPage />} />;
              <Route path="/services" element={<ServicesPage />} />;
              <Route path="/pricing" element={<PricingPage />} />;
            </Routes>;
          </main>;
          <Footer />;
        </div>;
      </Router>;
    </ErrorBoundary>;
  );
}
;
export default /**
 * App - Function description
 */
function App() {
  return (
    <main>;
      <h1 > Hello App</h1>;
    </main>);
}
