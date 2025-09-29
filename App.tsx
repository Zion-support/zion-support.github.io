import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import pages
import Home from './src/pages/Home';
import About from './src/pages/About';
import Services from './src/pages/Services';
import AIMicroSAAS from './src/pages/AIMicroSAAS';
import Blog from './src/pages/Blog';
import Contact from './src/pages/Contact';
import Portfolio from './src/pages/Portfolio';
import CaseStudies from './src/pages/CaseStudies';
import Resources from './src/pages/Resources';
import Insights from './src/pages/Insights';
import Post from './src/pages/Post';

// Import service pages
import AIWorkflowAutomation from './src/pages/services/AIWorkflowAutomation';
import AIVirtualAssistant from './src/pages/services/AIVirtualAssistant';
import AIDataAnalytics from './src/pages/services/AIDataAnalytics';

// Import components
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import SEO from './src/components/SEO';
import ErrorBoundary from './src/components/ErrorBoundary';

export default function App(): JSX.Element {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEO />
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/ai-micro-saas" element={<AIMicroSAAS />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<Post />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
                <Route path="/services/ai-virtual-assistant" element={<AIVirtualAssistant />} />
                <Route path="/services/ai-data-analytics" element={<AIDataAnalytics />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
