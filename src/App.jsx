import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

// Core pages that exist
const Home = React.lazy(() => import('./pages/Home.tsx'));
const About = React.lazy(() => import('./pages/About.tsx'));
const PartnersPage = React.lazy(() => import('./pages/Partners.tsx'));
const Services = React.lazy(() => import('./pages/Services.tsx'));
const AIContentCreationSuite = React.lazy(() => import('./pages/services/ai-content-creation-suite.tsx'));
const MicroCRM = React.lazy(() => import('./pages/services/micro-crm.tsx'));
const Contact = React.lazy(() => import('./pages/Contact.tsx'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/ai-content-creation-suite" element={<AIContentCreationSuite />} />
              <Route path="/services/micro-crm" element={<MicroCRM />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;
