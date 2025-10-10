'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cpu, BarChart, Users, CheckSquare, FileText, Search, Calendar, Settings, ArrowRight } from 'lucide-react';

const MicroSaaSPage: React.FC = () => {
  const solutions = [
    {
      icon: BarChart,
      title: 'Business Intelligence',
      description: 'Transform your data into actionable insights with our BI platform',
      features: [
        'Real-time dashboards',
        'Custom reporting',
        'Data visualization',
        'Automated insights'
      ],
      price: 'Starting at $99/month'
    },
    {
      icon: Users,
      title: 'Customer Relationship Management',
      description: 'Streamline your customer relationships with our CRM solution',
      features: [
        'Contact management',
        'Sales pipeline tracking',
        'Email automation',
        'Analytics & reporting'
      ],
      price: 'Starting at $149/month'
    },
    {
      icon: CheckSquare,
      title: 'Project Management',
      description: 'Organize and track your projects with our PM tools',
      features: [
        'Task management',
        'Team collaboration',
        'Time tracking',
        'Progress monitoring'
      ],
      price: 'Starting at $79/month'
    },
    {
      icon: FileText,
      title: 'Document Processing',
      description: 'Automate your document workflows and processing',
      features: [
        'OCR technology',
        'Document classification',
        'Automated extraction',
        'Workflow automation'
      ],
      price: 'Starting at $199/month'
    },
    {
      icon: Search,
      title: 'Search Engine',
      description: 'Powerful search capabilities for your content and data',
      features: [
        'Full-text search',
        'Faceted search',
        'Auto-complete',
        'Search analytics'
      ],
      price: 'Starting at $129/month'
    },
    {
      icon: Calendar,
      title: 'Calendar Management',
      description: 'Smart calendar and scheduling solutions',
      features: [
        'Meeting scheduling',
        'Resource booking',
        'Time zone handling',
        'Integration capabilities'
      ],
      price: 'Starting at $59/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Micro
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              SaaS Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Specialized software solutions designed to solve specific business problems efficiently and cost-effectively.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <ArrowRight className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-purple-400">{solution.price}</span>
                  <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Try Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              We can build a custom micro-SaaS solution tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Custom Quote
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicroSaaSPage;
