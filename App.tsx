<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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
<<<<<<< HEAD
=======
=======
import React, { JSX } from 'react';
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a

<<<<<<< HEAD
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27

<<<<<<< HEAD
export default function App() {
=======
export default function App(): React.JSX.Element {
=======
import React, { JSX } from 'react',

export default function App(): JSX.Element {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
  return (
<<<<<<< HEAD
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Sidebar />
          <main className="flex-1 lg:ml-80">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
=======
    <main>
      <h1>Hello App</h1>
    </main>
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
}