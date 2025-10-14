<<<<<<< HEAD
import React from "react";
import { Helmet } from "react-helmet-async";

const PagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />
        <meta name="keywords" content="page, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional page services designed to help your business grow and succeed.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
            <p className="text-gray-300">
              Our team of experts provides cutting-edge solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your systems run smoothly at all times.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300">
              Track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePage;
=======
import React from 'react';

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Zion Tech Group</h1>
            <p className="text-xl text-gray-600">
              Transforming businesses through innovative AI and IT solutions
            </p>
          </div>

          <div className='prose prose-lg max-w-none'>
            <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                Our Mission
              </h2>
              <p className='text-gray-600 mb-4'>
                At Zion Tech Group, we are dedicated to transforming
                businesses through cutting-edge AI and IT solutions. Our
                mission is to empower organizations with the technology they
                need to thrive in the digital age.
              </p>
              <p className='text-gray-600'>
                We combine deep technical expertise with innovative thinking
                to deliver solutions that drive real business value.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                Our Expertise
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    AI Solutions
                  </h3>
                  <p className='text-gray-600'>
                    Advanced machine learning, natural language processing,
                    and computer vision solutions.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    Quantum Computing
                  </h3>
                  <p className='text-gray-600'>
                    Next-generation quantum algorithms and quantum security
                    implementations.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    Autonomous Systems
                  </h3>
                  <p className='text-gray-600'>
                    Self-managing and self-optimizing systems for enterprise
                    operations.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    Business Intelligence
                  </h3>
                  <p className='text-gray-600'>
                    Data-driven insights and analytics for strategic decision
                    making.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                Why Choose Us
              </h2>
              <ul className='space-y-3 text-gray-600'>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2'></span>
                  <span>
                    Proven track record of successful AI implementations
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2'></span>
                  <span>Expert team with deep technical knowledge</span>
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2'></span>
                  <span>
                    Cutting-edge technology and innovative approaches
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2'></span>
                  <span>Comprehensive support and maintenance services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> origin/cursor/resolve-all-prs-and-merge
