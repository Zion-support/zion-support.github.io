
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Database, Zap, Shield, Globe } from 'lucide-react';

export default function G5gDataAnalyticsPage() {
  return (
    <>
      <Helmet>
        <title>5G Data Analytics Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced 5G data analytics solutions for real-time insights, predictive analytics, and intelligent data processing." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                5G Data Analytics
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Unlock the power of 5G networks with advanced data analytics solutions that provide real-time insights, predictive analytics, and intelligent data processing capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <BarChart3 className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Analytics</h3>
                <p className="text-gray-300">
                  Process and analyze data streams in real-time with ultra-low latency 5G networks.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Database className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Big Data Processing</h3>
                <p className="text-gray-300">
                  Handle massive datasets with distributed processing and edge computing capabilities.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Edge Computing</h3>
                <p className="text-gray-300">
                  Deploy analytics at the network edge for faster processing and reduced latency.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Shield className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Security & Privacy</h3>
                <p className="text-gray-300">
                  Advanced encryption and privacy-preserving analytics for sensitive data.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Globe className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Global Scale</h3>
                <p className="text-gray-300">
                  Deploy analytics solutions across global 5G networks with consistent performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

