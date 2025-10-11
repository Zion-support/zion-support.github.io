<<<<<<< HEAD
'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {ArrowRight} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
=======
'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-5dd0

const ZionAiContentModerationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
      <Helmet>
        <title>Zion Ai Content Moderation - Zion Tech Group</title>
        <meta name="description" content="Professional zion ai content moderation services and solutions." />
        <meta name="keywords" content="zion ai content moderation, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Zion Ai Content Moderation</h1>
            <p className="text-gray-300 mb-8">This page is under construction.</p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center mx-auto">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
=======
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Ai Content Moderation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional zion ai content moderation services delivered by experienced professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Expert Solutions</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Professional zion ai content moderation services delivered by experienced professionals.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Quality Assurance
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Fast Delivery
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  24/7 Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Custom Solutions
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Advanced Technology</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Cutting-edge tools and technologies to deliver superior results.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Latest Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Modern Methods
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Scalable Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Future-Ready
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Proven Results</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Track record of successful projects and satisfied clients.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  High Success Rate
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Client Satisfaction
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Ongoing Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Continuous Improvement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
>>>>>>> cursor/fix-errors-and-merge-to-main-5dd0
    </div>
  );
};

<<<<<<< HEAD
export default ZionAiContentModerationPage;
=======
export default ZionAiContentModerationPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-5dd0
