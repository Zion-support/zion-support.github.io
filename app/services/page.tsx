import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Explore our comprehensive range of AI, micro SaaS, and IT services designed to transform your business.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI, micro SaaS, and IT solutions designed to transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
            <p className="text-gray-300 mb-4">
              Custom AI models, automation, and intelligent systems that transform your business operations.
            </p>
            <a href="/services/ai-services" className="text-blue-400 hover:text-blue-300">Learn More →</a>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Micro SaaS</h3>
            <p className="text-gray-300 mb-4">
              Scalable software-as-a-service solutions that help you build and grow your business.
            </p>
            <a href="/services/micro-saas" className="text-blue-400 hover:text-blue-300">Learn More →</a>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">IT Services</h3>
            <p className="text-gray-300 mb-4">
              Complete IT infrastructure management, cloud migration, and technical support services.
            </p>
            <a href="/services/it-services" className="text-blue-400 hover:text-blue-300">Learn More →</a>
          </div>
        </div>
      </div>
    </div>
  );
}