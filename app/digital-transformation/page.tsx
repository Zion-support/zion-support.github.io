import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { RefreshCw, Target, Users, BarChart, ArrowRight, CheckCircle } from 'lucide-react';

export default function DigitalTransformationPage() {
  const phases = [
    {
      title: 'Assessment & Strategy',
      description: 'Analyze current state and develop transformation roadmap',
      icon: <Target className="w-8 h-8" />,
      features: ['Current State Analysis', 'Gap Assessment', 'Strategy Development', 'Roadmap Creation']
    },
    {
      title: 'Technology Implementation',
      description: 'Deploy modern technologies and systems',
      icon: <RefreshCw className="w-8 h-8" />,
      features: ['System Integration', 'Cloud Migration', 'Process Automation', 'Data Migration']
    },
    {
      title: 'Change Management',
      description: 'Train teams and manage organizational change',
      icon: <Users className="w-8 h-8" />,
      features: ['Team Training', 'Change Communication', 'Adoption Support', 'Performance Monitoring']
    },
    {
      title: 'Optimization & Growth',
      description: 'Continuous improvement and scaling',
      icon: <BarChart className="w-8 h-8" />,
      features: ['Performance Optimization', 'Scalability Planning', 'Innovation Integration', 'ROI Measurement']
    }
  ];

  const benefits = [
    'Increased operational efficiency',
    'Enhanced customer experience',
    'Improved data-driven decision making',
    'Reduced operational costs',
    'Faster time to market',
    'Better employee productivity'
  ];

  const industries = [
    'Manufacturing',
    'Healthcare',
    'Finance',
    'Retail',
    'Education',
    'Government'
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services to modernize your business processes, technology, and operations." />
        <meta name="keywords" content="digital transformation, business modernization, process automation, technology adoption" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Digital Transformation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with modern technology and processes. 
                Drive innovation, efficiency, and growth through comprehensive digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transformation Benefits
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Unlock the full potential of your business with digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Transformation Process
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                A systematic approach to digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {phases.map((phase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                  <div className="text-purple-400 mb-4 flex justify-center">
                    {phase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {phase.description}
                  </p>
                  <ul className="space-y-2 text-left">
                    {phase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Transform
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Specialized digital transformation solutions for various industries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Real results from our digital transformation projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-3">Manufacturing Company</h3>
                <p className="text-gray-300 mb-4">
                  Implemented IoT sensors and AI analytics to optimize production processes.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Efficiency Increase:</span>
                    <span className="text-green-400 font-semibold">35%</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Cost Reduction:</span>
                    <span className="text-green-400 font-semibold">25%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-3">Healthcare Provider</h3>
                <p className="text-gray-300 mb-4">
                  Digitized patient records and implemented telemedicine solutions.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Patient Satisfaction:</span>
                    <span className="text-green-400 font-semibold">+40%</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Processing Time:</span>
                    <span className="text-green-400 font-semibold">-50%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-3">Financial Services</h3>
                <p className="text-gray-300 mb-4">
                  Modernized core banking systems and implemented AI-powered fraud detection.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Transaction Speed:</span>
                    <span className="text-green-400 font-semibold">+60%</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Fraud Detection:</span>
                    <span className="text-green-400 font-semibold">+90%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let our digital transformation experts guide you through your modernization journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Start Transformation
              </Link>
              <Link 
                to="/about" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}