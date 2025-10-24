import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to provide cutting-edge AI and IT solutions for modern enterprises." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in artificial intelligence 
              and IT solutions that transform businesses and drive innovation.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive 
                  growth, efficiency, and innovation. We believe technology should be 
                  accessible, powerful, and transformative.
                </p>
                <p className="text-lg text-gray-300">
                  Our team of experts combines deep technical knowledge with business 
                  acumen to deliver solutions that not only meet today's needs but 
                  anticipate tomorrow's challenges.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Innovation and Excellence
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Client-Centric Approach
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Ethical AI Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Continuous Learning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Meet the experts behind our innovative solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AI</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Specialists</h3>
                <p className="text-gray-300">
                  Machine learning engineers and data scientists with expertise in 
                  cutting-edge AI technologies.
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">IT</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">IT Experts</h3>
                <p className="text-gray-300">
                  Cloud architects and cybersecurity specialists ensuring robust 
                  and secure infrastructure.
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">UX</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">UX Designers</h3>
                <p className="text-gray-300">
                  User experience designers creating intuitive and engaging 
                  interfaces for our solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our expertise can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                to="/services"
                className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;