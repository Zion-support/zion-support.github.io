import React from 'react';
import { Helmet } from 'react-helmet-async';

const DocsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for all Zion Tech Group services. API docs, guides, and technical resources to help you succeed." />
        <meta name="keywords" content="documentation, API docs, technical guides, developer resources, integration guides" />
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive documentation for all our services. Find API references, 
              integration guides, and technical resources to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">API Documentation</h3>
              <p className="text-gray-300 mb-6">
                Complete API reference with endpoints, parameters, and examples. 
                Integrate our services into your applications seamlessly.
              </p>
              <a href="/api-docs" className="text-blue-400 hover:text-blue-300 font-semibold">
                View API Docs →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Integration Guides</h3>
              <p className="text-gray-300 mb-6">
                Step-by-step guides for integrating our services with popular platforms 
                and frameworks. Get up and running quickly.
              </p>
              <a href="#integration" className="text-blue-400 hover:text-blue-300 font-semibold">
                View Guides →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Services Guide</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive guide to our AI services including setup, configuration, 
                and best practices for optimal performance.
              </p>
              <a href="/ai-services" className="text-blue-400 hover:text-blue-300 font-semibold">
                Learn More →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Setup</h3>
              <p className="text-gray-300 mb-6">
                Detailed instructions for setting up cloud infrastructure, 
                deployment strategies, and monitoring solutions.
              </p>
              <a href="/cloud-infrastructure" className="text-blue-400 hover:text-blue-300 font-semibold">
                View Setup →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Security Guide</h3>
              <p className="text-gray-300 mb-6">
                Security best practices, authentication setup, and compliance 
                guidelines for secure application development.
              </p>
              <a href="/security-audit" className="text-blue-400 hover:text-blue-300 font-semibold">
                Security Docs →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">FAQ & Support</h3>
              <p className="text-gray-300 mb-6">
                Frequently asked questions, troubleshooting guides, and 
                support resources to help you resolve issues quickly.
              </p>
              <a href="/support" className="text-blue-400 hover:text-blue-300 font-semibold">
                Get Support →
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-12 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Start Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Getting Started</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="text-lg font-medium text-white">1. Account Setup</h4>
                    <p className="text-gray-300 text-sm">Create your account and verify your email address</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="text-lg font-medium text-white">2. Choose Your Plan</h4>
                    <p className="text-gray-300 text-sm">Select the service plan that fits your needs</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="text-lg font-medium text-white">3. API Key Generation</h4>
                    <p className="text-gray-300 text-sm">Generate your API keys for service integration</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="text-lg font-medium text-white">4. First Integration</h4>
                    <p className="text-gray-300 text-sm">Follow our quick start guide to make your first API call</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Popular Integrations</h3>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white">React Applications</h4>
                    <p className="text-gray-300 text-sm">Integrate our AI services into your React apps</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white">Node.js Backend</h4>
                    <p className="text-gray-300 text-sm">Add AI capabilities to your Node.js applications</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white">Python Scripts</h4>
                    <p className="text-gray-300 text-sm">Use our Python SDK for data analysis and AI tasks</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white">Mobile Apps</h4>
                    <p className="text-gray-300 text-sm">Integrate AI features into iOS and Android apps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Help with Documentation?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our technical team is here to help you understand our services and 
              integrate them successfully into your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="/api-docs" 
                className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                View API Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocsPage;