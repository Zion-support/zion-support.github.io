<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CpuChipIcon, CloudIcon, BoltIcon } from '@heroicons/react/24/outline';

export default function FiveGEdgeComputingPage() {
  return (
    <>
      <Helmet>
        <title>5G Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Revolutionary 5G edge computing solutions for ultra-low latency applications and real-time processing." />
        <meta name="keywords" content="5G, edge computing, low latency, real-time processing, IoT" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-20 lg:py-32">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                5G Edge
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Computing
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Bring computing power closer to your data sources with 5G edge computing solutions 
                that deliver ultra-low latency and real-time processing capabilities.
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
                Edge Computing Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5G edge computing solutions provide the foundation for next-generation applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <BoltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Ultra-Low Latency</h3>
                <p className="text-gray-300 leading-relaxed">
                  Achieve sub-millisecond response times with edge computing infrastructure.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <CpuChipIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real-time Processing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Process data locally at the edge for immediate insights and actions.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <CloudIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Distributed Architecture</h3>
                <p className="text-gray-300 leading-relaxed">
                  Scalable edge nodes that work seamlessly with cloud infrastructure.
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
                Ready for Edge Computing?
              </h2>
              <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
                Discover how 5G edge computing can transform your applications and user experience.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Start Your Edge Journey
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