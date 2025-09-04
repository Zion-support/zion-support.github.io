import React from 'react';
import { Head } from 'next/head';
import { Shield, Eye, Zap, BarChart3, CheckCircle, Phone } from 'lucide-react';

export default function AIFraudDetection() {
  return (
    <>
      <Head>
        <title>AI Fraud Detection - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered fraud detection that reduces false positives by 70% and detects fraud 10x faster." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI Fraud <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Detection</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Advanced AI-powered fraud detection that reduces false positives by 70% and detects fraud 10x faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-medium flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Security Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Monitoring</h3>
                <p className="text-gray-600 mb-4">24/7 AI-powered monitoring of all transactions</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Instant alerts
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Pattern recognition
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Behavioral Analysis</h3>
                <p className="text-gray-600 mb-4">Machine learning models for behavior analysis</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    User profiling
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Anomaly detection
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Instant Response</h3>
                <p className="text-gray-600 mb-4">Automated response system blocks threats instantly</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Auto-blocking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Risk scoring
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Analytics</h3>
                <p className="text-gray-600 mb-4">Comprehensive reporting and threat intelligence</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Threat intelligence
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Compliance reporting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Protect Your Business Today</h2>
            <p className="text-xl text-red-100 mb-8">Get AI-powered fraud protection now.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-red-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-medium flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}