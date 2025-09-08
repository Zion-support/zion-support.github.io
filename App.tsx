import React, { JSX } from 'react';
export default function App(): JSX.Element {
  return (
    <main>
      <h1>Welcome to Zion Tech Group</h1>
      <p>Leading the future of technology with AI, blockchain, and innovative solutions</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.icon} {service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
        
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">AI Solutions</h3>
                <p className="text-gray-600 text-center">
                  Cutting-edge AI integration for automation, analytics, and intelligent decision making.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Web Development</h3>
                <p className="text-gray-600 text-center">
                  Modern, responsive web applications built with the latest technologies.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Cloud Services</h3>
                <p className="text-gray-600 text-center">
                  Scalable cloud infrastructure and migration services for optimal performance.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Quick turnaround times without compromising quality</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🔒</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Secure</h3>
                <p className="text-gray-600">Enterprise-grade security and data protection</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Custom Solutions</h3>
                <p className="text-gray-600">Tailored solutions for your specific business needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📞</span>
                </div>
                <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help transform your business with technology.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
            <p className="text-gray-600">
              Scalable cloud infrastructure and deployment solutions.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value. Our team of experts is dedicated to helping you succeed in the digital age.
          </p>
        </div>
        </main>
        <Footer />
        <PerformanceMonitor />
      </div>
    </ErrorBoundary>
  );

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './src/components/ErrorBoundary';
import Header from './src/components/Header';
import Sidebar from './src/components/layout/Sidebar';
import Footer from './src/components/Footer';
import LandingPage from './src/pages/LandingPage';
import AboutPage from './src/pages/About';
import ContactPage from './src/pages/Contact';
import ServicesPage from './src/pages/Services';
import PricingPage from './src/pages/Pricing';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Sidebar />
          <main className="flex-1 lg:ml-80">
            <Routes>
              <Route path="/" element={<LandingPage />} />
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
  );
}