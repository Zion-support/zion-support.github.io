import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS development services including AI-powered tools, productivity apps, marketing automation, and business intelligence solutions.',
  keywords: 'micro SaaS development, SaaS products, AI tools, productivity apps, marketing automation, business intelligence'
};

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Micro SaaS Development
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Complete micro SaaS development services including AI-powered tools, productivity apps, 
            marketing automation, and business intelligence solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Tools</h3>
            <p className="text-gray-600">
              Build intelligent micro SaaS applications with cutting-edge AI capabilities 
              that solve real business problems.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Productivity Apps</h3>
            <p className="text-gray-600">
              Create efficient productivity tools that streamline business operations 
              and boost team efficiency.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Automation</h3>
            <p className="text-gray-600">
              Develop automated marketing solutions that help businesses reach their 
              target audience more effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}