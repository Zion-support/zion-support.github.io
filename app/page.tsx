import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  RocketLaunchIcon,
  ChartBarIcon,
  UsersIcon,
  GlobeAltIcon} from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & Technology Solutions</title>
        <meta name="description" content="Leading provider of AI, cloud, cybersecurity, and digital transformation solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-blue-600">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Leading provider of AI-powered enterprise solutions, quantum computing, 
              and digital transformation services for the modern business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                  <CpuChipIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Advanced artificial intelligence solutions for automation, machine learning, and intelligent decision making.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Machine Learning</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="bg-green-100 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                  <CloudIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cloud Services</h3>
                <p className="text-gray-600 mb-4">
                  Scalable cloud infrastructure and migration services to modernize your IT environment.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Cloud Migration</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Multi-cloud Strategy</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="bg-red-100 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                  <ShieldCheckIcon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive security solutions to protect your data and infrastructure from threats.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Security Assessment</li>
                  <li>• Threat Detection</li>
                  <li>• Compliance Management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Zion Tech Group?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <RocketLaunchIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Cutting-edge technology solutions</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <UsersIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">Experienced professionals</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <ChartBarIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Results</h3>
                <p className="text-gray-600">Proven track record</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <GlobeAltIcon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-gray-600">Worldwide presence</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our AI and IT solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/services"
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;