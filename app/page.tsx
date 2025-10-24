import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development." />
        <meta name="keywords" content="AI, artificial intelligence, IT solutions, cloud computing, cybersecurity, software development" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions for modern enterprises." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI and IT solutions for modern enterprises." />
      </Helmet>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Advanced AI & IT Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence, 
                cloud infrastructure, and cybersecurity solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  Get Started
                </button>
                <button className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI and IT solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Services */}
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
                <p className="text-gray-200 mb-6">
                  Harness the power of artificial intelligence to automate processes, 
                  gain insights, and drive innovation.
                </p>
                <ul className="text-gray-200 space-y-2">
                  <li>• Machine Learning & Analytics</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </div>

              {/* Cloud Services */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-200 mb-6">
                  Scalable, secure, and reliable cloud solutions to power your digital transformation.
                </p>
                <ul className="text-gray-200 space-y-2">
                  <li>• Cloud Migration</li>
                  <li>• DevOps & CI/CD</li>
                  <li>• Container Orchestration</li>
                  <li>• Serverless Architecture</li>
                </ul>
              </div>

              {/* Cybersecurity */}
              <div className="bg-gradient-to-br from-red-600 to-pink-600 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
                <p className="text-gray-200 mb-6">
                  Protect your business with advanced security solutions and threat detection.
                </p>
                <ul className="text-gray-200 space-y-2">
                  <li>• Security Audits</li>
                  <li>• Threat Detection</li>
                  <li>• Compliance Management</li>
                  <li>• Incident Response</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI and IT solutions can drive your success.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;