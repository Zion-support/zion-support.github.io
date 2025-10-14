import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowPathIcon,
  UserGroupIcon,
  CloudIcon,
  CpuChipIcon,
  ArrowRightIcon,
  CheckIcon,
  ChartBarIcon } from '@heroicons/react/24/outline';
const DigitalTransformationPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our digital transformation services." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1>
              Digital Transformation;
            </h1>
            <p>
              Transform your business with our comprehensive digital transformation services.
            </p>
<p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Embrace digital transformation with our comprehensive services that modernize your business processes, 
              improve efficiency, and drive growth in today's competitive landscape.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              Start Your Transformation
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Digital Transformation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions to modernize your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description;
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                      {feature;
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Technology Implementation;
                </h3>
                <p>
                  Implement cutting-edge technologies to modernize your operations.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  Change Management;
                </h3>
                <p>
                  Guide your team through the transformation process with expert support.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started Today;
              </button>
            </div>
          </div>;
const DigitalTransformationPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>DigitalTransformationPage - Zion Tech Group</title>
        <meta name="description" content="DigitalTransformationPage - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1>DigitalTransformationPage</h1>
          <p>This page is under construction.</p>
        </div>
      </div>;
    </div>;  );
export default DigitalTransformationPage;
    </>
  );
export default DigitalTransformationPage;
"use client;
import React from 'react';
const DigitalTransformationPage = () => {
  return (
  <>
    <div></div>
      <h1>DigitalTransformationPage</h1>"
      <p>This page is under development.</p>"
    </div>
  </>
);
}