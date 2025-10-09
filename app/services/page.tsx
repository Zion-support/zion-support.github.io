import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services to transform your business operations." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>

          {/* AI Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">AI Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">AI Marketing</h3>
                <p className="text-gray-300 mb-4">AI-powered marketing automation and optimization</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Automated campaign management</li>
                  <li>• Predictive analytics</li>
                  <li>• Customer segmentation</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">AI Automation</h3>
                <p className="text-gray-300 mb-4">Intelligent process automation solutions</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Workflow automation</li>
                  <li>• Document processing</li>
                  <li>• Task optimization</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">AI Healthcare</h3>
                <p className="text-gray-300 mb-4">Medical AI solutions and diagnostics</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Medical image analysis</li>
                  <li>• Predictive diagnostics</li>
                  <li>• Treatment optimization</li>
                </ul>
              </div>
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">IT Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-4">Scalable and secure cloud solutions</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• AWS/Azure/GCP setup</li>
                  <li>• Cloud migration</li>
                  <li>• DevOps implementation</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Cybersecurity</h3>
                <p className="text-gray-300 mb-4">Comprehensive security solutions</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Security audits</li>
                  <li>• Threat detection</li>
                  <li>• Compliance management</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">IT Support</h3>
                <p className="text-gray-300 mb-4">24/7 comprehensive IT support</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Help desk services</li>
                  <li>• System maintenance</li>
                  <li>• Technical troubleshooting</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
