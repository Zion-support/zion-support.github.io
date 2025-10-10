'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Star, Users, Clock, Shield } from 'lucide-react';

const AppointmentSchedulerPage: React.FC = () => {
  const features = [
    { icon: CheckCircle, title: 'Advanced Technology', description: 'Cutting-edge solutions powered by the latest technology' },
    { icon: Users, title: 'Expert Team', description: 'Experienced professionals dedicated to your success' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock support and maintenance' },
    { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security and reliability' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Appointment Scheduler
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Smart scheduling and appointment management system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <a
              href="tel:+13024640950"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              (302) 464-0950
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <feature.icon className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Appointment Scheduler?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Increased efficiency and productivity
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Cost-effective solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Scalable and flexible
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Expert implementation and support
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">What We Offer</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <Star className="w-5 h-5 text-cyan-400 mr-3" />
                  Custom solutions tailored to your needs
                </li>
                <li className="flex items-center text-gray-300">
                  <Star className="w-5 h-5 text-cyan-400 mr-3" />
                  Comprehensive training and support
                </li>
                <li className="flex items-center text-gray-300">
                  <Star className="w-5 h-5 text-cyan-400 mr-3" />
                  Ongoing maintenance and updates
                </li>
                <li className="flex items-center text-gray-300">
                  <Star className="w-5 h-5 text-cyan-400 mr-3" />
                  Proven track record of success
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss how our Appointment Scheduler can benefit your business.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSchedulerPage;
