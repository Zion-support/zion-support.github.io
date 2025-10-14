'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  GlobeAltIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Micro SaaS Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build, launch, and scale your micro SaaS business with our comprehensive platform and development services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <RocketLaunchIcon className="h-12 w-12 text-orange-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Rapid Development</h3>
            <p className="text-gray-300 mb-4">Fast-track your micro SaaS development with our proven frameworks and tools.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• MVP development</li>
              <li>• API integration</li>
              <li>• Database design</li>
              <li>• User authentication</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <ChartBarIcon className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Analytics & Insights</h3>
            <p className="text-gray-300 mb-4">Comprehensive analytics to track your SaaS performance and user behavior.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• User analytics</li>
              <li>• Revenue tracking</li>
              <li>• Performance metrics</li>
              <li>• Custom dashboards</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <GlobeAltIcon className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Global Deployment</h3>
            <p className="text-gray-300 mb-4">Deploy your micro SaaS globally with our scalable infrastructure solutions.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Multi-region deployment</li>
              <li>• CDN optimization</li>
              <li>• Load balancing</li>
              <li>• Auto-scaling</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Start Building
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}