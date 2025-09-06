import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Services from './pages/Services';
import AICustomerInsights from './pages/services/AICustomerInsights';
import AutomatedWorkflowBuilder from './pages/services/AutomatedWorkflowBuilder';
import AIDocumentProcessor from './pages/services/AIDocumentProcessor';
import CybersecuritySuite from './pages/services/CybersecuritySuite';
import AIChatbotPlatform from './pages/services/AIChatbotPlatform';
import AIPredictiveAnalytics from './pages/services/AIPredictiveAnalytics';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800">
                Zion Tech
              </Link>
              <nav className="space-x-6">
                <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                <Link to="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              </nav>
            </div>
          </div>
        </header>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ai-customer-insights" element={<AICustomerInsights />} />
          <Route path="/services/automated-workflow-builder" element={<AutomatedWorkflowBuilder />} />
          <Route path="/services/ai-document-processor" element={<AIDocumentProcessor />} />
          <Route path="/services/cybersecurity-suite" element={<CybersecuritySuite />} />
          <Route path="/services/ai-chatbot-platform" element={<AIChatbotPlatform />} />
          <Route path="/services/ai-predictive-analytics" element={<AIPredictiveAnalytics />} />
        </Routes>
        
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 Zion Tech. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>
            </div>
            <p className="mt-2 text-sm text-gray-400">364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Welcome to Zion Tech</h2>
      <p className="text-lg text-center text-gray-600 mb-8">
        Your trusted partner for AI and IT solutions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
          <p className="text-gray-600">
            Cutting-edge artificial intelligence solutions for your business needs.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">IT Services</h3>
          <p className="text-gray-600">
            Comprehensive IT services and infrastructure management.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
          <p className="text-gray-600">
            Scalable cloud infrastructure and migration services.
          </p>
        </div>
      </div>
    </main>
  );
}
