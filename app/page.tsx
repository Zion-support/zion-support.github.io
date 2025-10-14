import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions</title>
        <meta name="description" content="Professional AI and IT solutions by Zion Tech Group. Advanced technology services for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-2xl text-gray-300 mb-12">
            Advanced AI & IT Solutions
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-white mb-6">
              Welcome to the Future of Technology
            </h2>
            <p className="text-gray-200 mb-8 text-lg">
              We provide cutting-edge AI and IT solutions to help businesses thrive in the digital age. 
              Our expert team delivers innovative technology solutions tailored to your specific needs.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-6 hover:bg-blue-500/30 transition-colors">
                <h3 className="text-xl font-semibold text-blue-200 mb-3">
                  AI Solutions
                </h3>
                <p className="text-blue-100">
                  Advanced artificial intelligence solutions for automation, machine learning, and intelligent systems.
                </p>
              </div>
              
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-6 hover:bg-green-500/30 transition-colors">
                <h3 className="text-xl font-semibold text-green-200 mb-3">
                  IT Services
                </h3>
                <p className="text-green-100">
                  Comprehensive IT infrastructure, support, and maintenance services for modern businesses.
                </p>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-6 hover:bg-purple-500/30 transition-colors">
                <h3 className="text-xl font-semibold text-purple-200 mb-3">
                  Cloud Solutions
                </h3>
                <p className="text-purple-100">
                  Scalable cloud infrastructure, migration services, and cloud-native application development.
                </p>
              </div>
              
              <div className="bg-orange-500/20 border border-orange-400/30 rounded-lg p-6 hover:bg-orange-500/30 transition-colors">
                <h3 className="text-xl font-semibold text-orange-200 mb-3">
                  Cybersecurity
                </h3>
                <p className="text-orange-100">
                  Advanced security solutions to protect your business from cyber threats and vulnerabilities.
                </p>
              </div>
              
              <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-6 hover:bg-red-500/30 transition-colors">
                <h3 className="text-xl font-semibold text-red-200 mb-3">
                  Data Analytics
                </h3>
                <p className="text-red-100">
                  Powerful data analytics and business intelligence solutions to drive informed decisions.
                </p>
              </div>
              
              <div className="bg-indigo-500/20 border border-indigo-400/30 rounded-lg p-6 hover:bg-indigo-500/30 transition-colors">
                <h3 className="text-xl font-semibold text-indigo-200 mb-3">
                  Mobile Development
                </h3>
                <p className="text-indigo-100">
                  Custom mobile applications for iOS and Android platforms with modern technologies.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}