'use client';
import React from 'react';
import { CheckCircle, Star, Bot, Cpu, BarChart } from 'lucide-react';
const AutonomousSystemsPage: React.FC = () => {
  const autonomousServices = [
    {
      id: 'self-healing-infrastructure',
      title: 'Self-Healing Infrastructure',
      description: 'AI-powered systems that automatically detect, diagnose, and resolve infrastructure issues without human intervention.',
      features: ['Automated problem detection', 'Self-recovery mechanisms', 'Predictive maintenance', 'Zero-downtime operations'],
      benefits: ['99.9% uptime', 'Reduced manual intervention', 'Lower operational costs', 'Improved reliability'],
      marketPrice: '$2,000-5,000/month',
      category: 'Infrastructure Automation',
      technologies: ['Machine Learning', 'Anomaly Detection', 'Auto-remediation', 'Monitoring Systems']
    },
    {
      id: 'process-automation',
      title: 'Intelligent Process Automation',
      description: 'End-to-end automation of complex business processes using AI and machine learning.',
      features: ['Workflow automation', 'Decision-making AI', 'Process optimization', 'Exception handling'],
      benefits: ['80% process efficiency', 'Reduced errors', 'Faster execution', 'Cost savings'],
      marketPrice: '$1,500-4,000/month',
      category: 'Business Process Automation',
      technologies: ['RPA', 'AI/ML', 'Workflow Engines', 'Integration APIs']
    },
    {
      id: 'autonomous-monitoring',
      title: 'Autonomous Monitoring Systems',
      description: '24/7 intelligent monitoring and alerting systems that learn and adapt to your environment.',
      features: ['Real-time monitoring', 'Predictive alerts', 'Adaptive thresholds', 'Automated responses'],
      benefits: ['Proactive issue detection', 'Reduced false positives', 'Improved system health', 'Better resource utilization'],
      marketPrice: '$800-2,500/month',
      category: 'Monitoring & Alerting',
      technologies: ['AI Analytics', 'Time Series DB', 'Alert Systems', 'Machine Learning']
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Autonomous Systems Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Transform your operations with intelligent autonomous systems that work 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Explore Autonomous Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Autonomous Systems?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our autonomous systems deliver unprecedented efficiency, reliability, and cost savings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Operation</h3>
              <p className="text-gray-600">Systems that never sleep, continuously monitoring and optimizing your operations</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Self-Healing</h3>
              <p className="text-gray-600">Automatically detect and resolve issues before they impact your business</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Learning</h3>
              <p className="text-gray-600">AI systems that improve performance over time through machine learning</p>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Autonomous Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive autonomous systems designed to transform your business operations
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {autonomousServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Star className="w-5 h-5 text-yellow-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{service.marketPrice}</span>
                    <span className="text-sm text-gray-500">{service.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Automate Your Operations?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our autonomous systems transform your business with intelligent automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AutonomousSystemsPage;
