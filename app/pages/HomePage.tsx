import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions for businesses worldwide. Transform your business with cutting-edge technology." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Transform Your Business with AI
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Leading provider of advanced AI and IT solutions that help businesses innovate, 
              automate, and scale in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg font-semibold">
                Get Started Today
              </Link>
              <Link to="/demo" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 text-lg font-semibold">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition-colors">
              <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
              <p className="text-gray-300 mb-6">
                Machine learning, natural language processing, computer vision, and AI automation solutions.
              </p>
              <Link to="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition-colors">
              <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
              <p className="text-gray-300 mb-6">
                Infrastructure management, cybersecurity, technical support, and IT consulting services.
              </p>
              <Link to="/it-services" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition-colors">
              <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Solutions</h3>
              <p className="text-gray-300 mb-6">
                Cloud migration, multi-cloud management, and infrastructure optimization for scalable growth.
              </p>
              <Link to="/cloud-infrastructure" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition-colors">
              <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-6">
                Complete digital transformation services to modernize your business processes and systems.
              </p>
              <Link to="/digital-transformation" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
              <div className="text-gray-300">Client Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let our experts help you implement the right AI and IT solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg font-semibold">
              Get Started Today
            </Link>
            <Link to="/case-studies" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 text-lg font-semibold">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}