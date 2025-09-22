import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solutions - Zion Tech Group',
  description: 'Comprehensive technology solutions for businesses of all sizes. From AI automation to cloud migration.',
  keywords: 'technology solutions, business automation, AI solutions, cloud services',
};

export default function SolutionsPage() {
  const solutions = [
    {
      category: 'AI-Powered Solutions',
      icon: '🤖',
      description: 'Transform your business with cutting-edge artificial intelligence',
      solutions: [
        'Intelligent Process Automation',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Machine Learning Models',
        'AI Chatbots & Assistants',
      ],
    },
    {
      category: 'Cloud & Infrastructure',
      icon: '☁️',
      description: 'Scalable and secure cloud solutions for modern businesses',
      solutions: [
        'Cloud Migration Services',
        'DevOps & CI/CD Pipelines',
        'Container Orchestration',
        'Microservices Architecture',
        'Cloud Security & Compliance',
        'Infrastructure as Code',
      ],
    },
    {
      category: 'Digital Transformation',
      icon: '🚀',
      description: 'Modernize your business processes and technology stack',
      solutions: [
        'Legacy System Modernization',
        'API Development & Integration',
        'Data Analytics & Visualization',
        'Mobile App Development',
        'E-commerce Solutions',
        'Workflow Automation',
      ],
    },
    {
      category: 'Security & Compliance',
      icon: '🔒',
      description: 'Protect your business with comprehensive security solutions',
      solutions: [
        'Cybersecurity Audits',
        'Identity & Access Management',
        'Data Protection & Privacy',
        'Compliance Management',
        'Security Monitoring',
        'Incident Response',
      ],
    },
  ];

  const industries = [
    { name: 'Healthcare', icon: '🏥', description: 'HIPAA-compliant solutions for healthcare providers' },
    { name: 'Finance', icon: '💼', description: 'Secure fintech solutions and payment processing' },
    { name: 'E-commerce', icon: '🛒', description: 'Scalable online platforms and marketplaces' },
    { name: 'Education', icon: '🎓', description: 'EdTech solutions and learning management systems' },
    { name: 'Manufacturing', icon: '🏭', description: 'IoT and industrial automation solutions' },
    { name: 'Retail', icon: '🏪', description: 'Omnichannel retail and inventory management' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technology{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth, 
            streamline operations, and drive digital transformation.
          </p>
        </div>

        {/* Solution Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{solution.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{solution.category}</h2>
                  <p className="text-slate-300">{solution.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {solution.solutions.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-slate-700/50 rounded-lg p-3 text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Industry Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Industry-Specific Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <div className="text-3xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-slate-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Solution Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>
              <p className="text-slate-300 text-sm">
                We analyze your business needs and current technology landscape.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
              <p className="text-slate-300 text-sm">
                We create a comprehensive solution architecture tailored to your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Develop</h3>
              <p className="text-slate-300 text-sm">
                We implement the solution with agile methodologies and best practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Deploy</h3>
              <p className="text-slate-300 text-sm">
                We launch your solution and provide ongoing support and optimization.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's discuss your specific needs and create a custom solution that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}