'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const EnhancedErrorBoundary: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Enhanced Error Boundary - Zion Tech Group</title>
        <meta name="description" content="Advanced error boundary solution for modern businesses." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Enhanced Error Boundary
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced error boundary solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
,
        {/* Features Section */}
        <section className="py-20 px-4"> </section><div className="max-w-7xl mx-auto"></div>
        <div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p>Discover the powerful features that make EnhancedErrorBoundary the perfect solution for your business.</p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"> </div><h3 className="text-xl font-semibold text-white mb-3">AI-Powered</h3>
                <p className="text-gray-300">Advanced AI algorithms for intelligent automation.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"> </div><h3 className="text-xl font-semibold text-white mb-3">Scalable</h3>
                <p className="text-gray-300">Grows with your business needs and requirements.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"> </div><h3 className="text-xl font-semibold text-white mb-3">Secure</h3>
                <p className="text-gray-300">Enterprise-grade security and data protection.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"> </div><h3 className="text-xl font-semibold text-white mb-3">Efficient</h3>
                <p className="text-gray-300">Optimized performance for maximum productivity.</p>
                </div>
              </div>
        </div>
      </section>,
,
        {/* CTA Section */}
        <section className="py-20 px-4"> </section><div className="max-w-4xl mx-auto text-center"> </div><h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p>Join thousands of businesses already using EnhancedErrorBoundary to transform their operations.</p>
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Start Your Free Trial
            
            </button>
          </div>
        </section>
        </div>
      </Footer>
      </div>

interface Props {;
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (_error: Error, errorInfo: ErrorInfo) => void;
  showErrorDetails?: boolean}

export default EnhancedErrorBoundary}