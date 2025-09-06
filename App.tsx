<<<<<<< HEAD


import React from 'react';
=======
import React, { Suspense, lazy } from 'react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
import React, { JSX } from 'react';

  return (

    <main>
      <h1>Hello App</h1>
    </main>

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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
// Lazy load pages for better performance
const Home = lazy(() => import('./src/pages/Home'));
const About = lazy(() => import('./src/pages/About'));
const Services = lazy(() => import('./src/pages/Services'));
const Pricing = lazy(() => import('./src/pages/Pricing'));
const Contact = lazy(() => import('./src/pages/Contact'));
const NotFound = lazy(() => import('./src/pages/NotFound'));

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <PerformanceMonitor />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<Loading fullScreen text="Loading page..." />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
