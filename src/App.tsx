import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Transform Your Business with 
          <span className="text-blue-600"> AI & IT Solutions</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Zion Tech Group delivers cutting-edge artificial intelligence, micro SaaS platforms, 
          and comprehensive IT services to accelerate your digital transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore Our Services
          </Link>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </div>

      {/* Services Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Zion Tech?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">AI Solutions</h3>
            <p className="text-gray-600 mb-4">
              Cutting-edge artificial intelligence solutions including chatbots, predictive analytics, 
              and machine learning platforms tailored to your business needs.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• AI Customer Insights</li>
              <li>• Predictive Analytics</li>
              <li>• Document Processing</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">IT Services</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive IT services including cloud migration, cybersecurity, 
              and infrastructure management to keep your business secure and scalable.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Cloud Migration</li>
              <li>• Cybersecurity Suite</li>
              <li>• DevOps & SRE</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Micro SaaS</h3>
            <p className="text-gray-600 mb-4">
              End-to-end micro SaaS development with billing, authentication, 
              and analytics to help you launch and scale your software business.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Workflow Automation</li>
              <li>• Business Automation</li>
              <li>• Custom Development</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how our AI and IT solutions can accelerate your digital transformation 
          and drive measurable business results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
        <div className="mt-6 text-gray-400">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </main>
  );
}
