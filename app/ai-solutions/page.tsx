import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CpuChipIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CogIcon,
  LightBulbIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function AISolutionsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Solutions - Zion Tech Group",
    "description": "Comprehensive AI solutions including machine learning, natural language processing, and computer vision.",
    "url": "https://ziontechgroup.com/ai-solutions"
  };

  const solutions = [
    {
      icon: CpuChipIcon,
      title: 'Machine Learning',
      description: 'Build and deploy custom machine learning models for your business needs.',
      features: ['Custom Model Development', 'Data Pipeline Design', 'Model Training', 'Production Deployment'],
      price: 'Starting at $499/month'
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.',
      features: ['Data Visualization', 'Predictive Analytics', 'Real-time Dashboards', 'Custom Reports'],
      price: 'Starting at $299/month'
    },
    {
      icon: ShieldCheckIcon,
      title: 'AI Security',
      description: 'Secure your AI systems with comprehensive security solutions.',
      features: ['Threat Detection', 'Model Security', 'Data Protection', 'Compliance Monitoring'],
      price: 'Starting at $399/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Solutions - Zion Tech Group"
        description="Comprehensive AI solutions including machine learning, natural language processing, and computer vision."
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Harness the power of artificial intelligence to transform your business. 
              Our comprehensive AI solutions help you automate processes, gain insights, and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200">
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-gray-900 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to accelerate your digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <solution.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{solution.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-purple-600">{solution.price}</span>
                  <button className="text-purple-600 hover:text-purple-800 font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let our AI experts help you identify opportunities and implement solutions that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-purple-600 bg-white hover:bg-gray-100 transition-colors duration-200">
              Start Your AI Journey
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}