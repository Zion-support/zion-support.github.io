import React from 'react';

<<<<<<< HEAD
export default function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
    </div>
  );
}
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom',
import { Header } from './components/Header';
import { Footer } from './components/layout/Footer';
import { Sidebar } from './components/layout/Sidebar';
import { ErrorBoundary } from './components/ErrorBoundary';
,
// Import pages,
import HomePage from '../pages/index';
import AboutPage from '../pages/about';
import ContactPage from '../pages/contact';
import ServicesPage from '../pages/services';

import PricingPage from '../pages/pricing';
,
export default function App() {,
  return (,
    <ErrorBoundary>,
      <Router>,
        <div className=&quot;min-h-screen bg-gray-50&quot;>,
          <Header />,
          <Sidebar />,
          <main className=&quot;flex-1 lg: ml-80&quot;>,
            <Routes>,
              <Route path=&quot;/&quot; element={<HomePage />} />,
              <Route path=&quot;/about&quot; element={<AboutPage />} />,
              <Route path=&quot;/contact&quot; element={<ContactPage />} />,
              <Route path=&quot;/services&quot; element={<ServicesPage />} />,
              <Route path=&quot;/pricing&quot; element={<PricingPage />} />,
            </Routes>,
          </main>,
          <Footer />,
        </div>,
      </Router>,

    </ErrorBoundary>)
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
