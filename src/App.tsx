

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <div className = $2;
          <Header />,
          <Sidebar />,
          <main className = $2;
            <Routes>,
              <Route path = $2;
              <Route path = $2;
              <Route path = $2;
              <Route path = $2;
              <Route path = $2;
            </Routes>,
          </main>,
          <Footer />,
        </div>,
      </Router>,
    </ErrorBoundary>)

},

