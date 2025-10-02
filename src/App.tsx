import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

// Simple placeholder components for routes
const ServicesPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Services</h1>
      <p className="text-xl text-gray-600">Our comprehensive AI and IT services</p>
    </div>
  </div>
);

const CaseStudiesPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
      <p className="text-xl text-gray-600">Success stories from our clients</p>
    </div>
  </div>
);

const BlogPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
      <p className="text-xl text-gray-600">Latest insights and articles</p>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
      <p className="text-xl text-gray-600">Learn more about Zion Tech Group</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
      <p className="text-xl text-gray-600">Get in touch with us</p>
      <div className="mt-8 space-y-2">
        <p>Phone: +1 302 464 0950</p>
        <p>Email: kleber@ziontechgroup.com</p>
        <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  </div>
);

const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Leading provider of AI, micro SaaS, and IT solutions. Transform your business 
          with cutting-edge technology and innovative software solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/services" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore Services
          </a>
          <a 
            href="/contact" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Services Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Micro SaaS Solutions</h3>
          <p className="text-gray-600 mb-4">Focused, affordable software solutions for specific business needs.</p>
          <a href="/services/micro-saas-solutions" className="text-blue-600 hover:text-blue-700 font-semibold">
            Learn More →
          </a>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">AI Content Generation</h3>
          <p className="text-gray-600 mb-4">Revolutionary AI-powered content creation tools.</p>
          <a href="/services/ai-content-generation-suite" className="text-blue-600 hover:text-blue-700 font-semibold">
            Learn More →
          </a>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Solutions</h3>
          <p className="text-gray-600 mb-4">Complete healthcare management platform.</p>
          <a href="/services/healthcare-appointment-scheduler" className="text-blue-600 hover:text-blue-700 font-semibold">
            Learn More →
          </a>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
            <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700">
              +1 302 464 0950
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700">
              kleber@ziontechgroup.com
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// App Router Component
const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/services/micro-saas-solutions" element={<ServicesPage />} />
    <Route path="/services/ai-content-generation-suite" element={<ServicesPage />} />
    <Route path="/services/healthcare-appointment-scheduler" element={<ServicesPage />} />
    <Route path="/services/ai-recruiting-platform" element={<ServicesPage />} />
    <Route path="/services/quantum-computing-solutions" element={<ServicesPage />} />
    <Route path="/case-studies" element={<CaseStudiesPage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
);

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;