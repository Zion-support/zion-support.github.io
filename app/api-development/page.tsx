<<<<<<< HEAD

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

export default function ApiDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Api Development | Zion Tech Group</title>
        <meta name="description" content="Professional api development solutions for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Api Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional api development solutions for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Solutions</h3>
            <p className="text-gray-300">Cutting-edge technology solutions tailored to your business needs.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
            <p className="text-gray-300">Dedicated support team to help you succeed with our solutions.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
            <p className="text-gray-300">Solutions that grow with your business and adapt to your needs.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to get started with api development?
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
    </div>
  );
}

=======
import React from 'react'
import {Helmet} from 'react-helmet-async'
;
const ApiDevelopmentPage: React.FC = () => {
  return(<>)
      <Helmet />
        <title>API Development - Zion Tech Group</title>
        <meta name="description" content="Professional API development services including RESTful APIs, GraphQL, microservices, and API integration solutions for modern applications." />
        <meta name="keywords" content="API development, RESTful APIs, GraphQL, microservices, API integration, web services" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">API Development;</h1>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Build robust, scalable APIs that power your applications with our comprehensive;</p>
              API development services including RESTful APIs, GraphQL, and microservices.;
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16"></div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">RESTful APIs</h3>
              <p className="text-gray-300 mb-4">Design and develop RESTful APIs following industry best practices and standards.</p>
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• RESTful architecture</li>
                <li>• HTTP methods</li>
                <li>• Status codes</li>
                <li>• API documentation</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">GraphQL APIs</h3>
              <p className="text-gray-300 mb-4">Modern GraphQL APIs for efficient data fetching and real-time subscriptions.</p>
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Schema design</li>
                <li>• Resolvers</li>
                <li>• Subscriptions</li>
                <li>• Caching strategies</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Microservices</h3>
              <p className="text-gray-300 mb-4">Scalable microservices architecture for distributed applications.</p>
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Service decomposition</li>
                <li>• Inter-service communication</li>
                <li>• Load balancing</li>
                <li>• Service discovery</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">API Security</h3>
              <p className="text-gray-300 mb-4">Comprehensive security measures to protect your APIs from threats.</p>
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Authentication</li>
                <li>• Authorization</li>
                <li>• Rate limiting</li>
                <li>• Input validation</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">API Testing</h3>
              <p className="text-gray-300 mb-4">Thorough testing strategies to ensure API reliability and performance.</p>
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Unit testing</li>
                <li>• Integration testing</li>
                <li>• Load testing</li>
                <li>• Security testing</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">API Management</h3>
              <p className="text-gray-300 mb-4">Complete API lifecycle management and monitoring solutions.</p>
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• API gateway</li>
                <li>• Monitoring & analytics</li>
                <li>• Version control</li>
                <li>• Developer portal</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"></button>
              Start Your API Project
            </button>
          </div>
        </div>
      </div>
    </>
  )}
;
export default ApiDevelopmentPage;
>>>>>>> 483f75ef6f90550321090516b2130e42775ac7eb
