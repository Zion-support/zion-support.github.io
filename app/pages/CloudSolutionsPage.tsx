'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  CloudIcon,
  ServerIcon,
  CpuChipIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function CloudSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Cloud Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with our comprehensive cloud solutions designed for scalability, security, and performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <CloudIcon className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Cloud Migration</h3>
            <p className="text-gray-300 mb-4">Seamless migration of your applications and data to the cloud with minimal downtime.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Assessment & planning</li>
              <li>• Data migration</li>
              <li>• Application modernization</li>
              <li>• Performance optimization</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <ServerIcon className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Infrastructure Management</h3>
            <p className="text-gray-300 mb-4">Complete management of your cloud infrastructure with 24/7 monitoring and support.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Server provisioning</li>
              <li>• Load balancing</li>
              <li>• Auto-scaling</li>
              <li>• Backup & recovery</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <CpuChipIcon className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">DevOps & Automation</h3>
            <p className="text-gray-300 mb-4">Streamline your development and deployment processes with our DevOps solutions.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• CI/CD pipelines</li>
              <li>• Container orchestration</li>
              <li>• Infrastructure as Code</li>
              <li>• Monitoring & logging</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Get Started Today
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}