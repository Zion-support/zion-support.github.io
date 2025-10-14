import React from 'react';
import { Helmet } from 'react-helmet-async;';
import { Link } from 'react-router-dom';
import { ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  EnvelopeIcon } from '@heroicons/react/24/outline;
const ITServicesPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Professional IT services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1></h1>
              IT Services;
            </h1>
            <p></p>
              Professional IT services tailored to your business needs.
            </p>
<p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              From infrastructure management to AI integration, we provide end-to-end IT services;
              that keep your business running smoothly and securely.
            </p>
            <Link;
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              Get Started;
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
              Our IT Services;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to meet your business needs;
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
                <Link;
                  to="/contact"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all"
                >
                  Learn More;
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive IT solutions that keep your business running smoothly;
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
                <p className="text-gray-300">
                  Professional IT services that ensure your systems are always running at peak performance.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation;
                </h3>
                <p></p>
                  Tailored IT implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support;
                </h3>
                <p></p>
                  Round-the-clock support for all your IT needs.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started Today;
              </button>
            </div>
          </div>;
const ITServicesPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>ITServicesPage - Zion Tech Group</title>
        <meta name="description" content="ITServicesPage - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1>ITServicesPage</h1>
          <p>This page is under construction.</p>
        </div>
      </div>;
    </div>;  );
export default Page;
</>
  );
export default Page;
"use client;';
import React from 'react';
const ITServicesPage = () => {
  return (
  <>
    <div></div>
      <h1>ITServicesPage</h1>"
      <p>This page is under development.</p>"
    </div>
</>
);
}