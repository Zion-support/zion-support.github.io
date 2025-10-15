<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ShieldCheckIcon, CloudIcon, CogIcon } from '@heroicons/react/24/outline';

export default function FiveGPrivateNetworksPage() {
  return (
    <>
      <Helmet>
        <title>5G Private Networks - Zion Tech Group</title>
        <meta name="description" content="Secure and dedicated 5G private network solutions for enterprise and industrial applications." />
        <meta name="keywords" content="5G, private networks, enterprise networking, industrial IoT, secure connectivity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-20 lg:py-32">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                5G Private
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Networks
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Deploy secure, dedicated 5G private networks for enterprise and industrial applications 
                with complete control over your connectivity infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Private Network Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5G private network solutions provide enterprise-grade security and performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Enhanced Security</h3>
                <p className="text-gray-300 leading-relaxed">
                  Complete data isolation and control with dedicated network infrastructure.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <CloudIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Custom Configuration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Tailored network parameters optimized for your specific use cases.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <CogIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Full Control</h3>
                <p className="text-gray-300 leading-relaxed">
                  Complete management and monitoring capabilities for your private network.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-12 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready for Private 5G?
              </h2>
              <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
                Let's design and deploy a secure 5G private network for your organization.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Start Your Private Network
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
=======
import React from 'react';

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">page<// Comment
        <p className="text-gray-600">This page is under construction.<// Comment
      <// Comment
    <// Comment
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae
  );
}