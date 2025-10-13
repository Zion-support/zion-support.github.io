import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function SolutionsPage() {
  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Comprehensive technology solutions for businesses of all sizes. AI, IT, cloud, cybersecurity, and digital transformation services." />
      </Helmet>

      <div className="min-h-screen bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Comprehensive technology solutions designed to transform your business and drive innovation
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
                <p className="text-gray-300 mb-6">Advanced artificial intelligence services for automation and insights</p>
                <Link to="/ai-solutions" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2">
                  Learn More <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS</h3>
                <p className="text-gray-300 mb-6">Custom micro SaaS solutions for specific business needs</p>
                <Link to="/micro-saas" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2">
                  Learn More <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
                <p className="text-gray-300 mb-6">Comprehensive IT services and infrastructure solutions</p>
                <Link to="/it-solutions" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2">
                  Learn More <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              Get Started Today
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}