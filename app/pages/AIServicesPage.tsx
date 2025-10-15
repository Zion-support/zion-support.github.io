import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Bot, BarChart3, Shield, Zap, Target } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI strategies tailored to your business objectives and industry requirements.',
      features: ['AI Readiness Assessment', 'Technology Roadmap', 'ROI Analysis', 'Implementation Planning']
    },
    {
      icon: Bot,
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models and algorithms designed to solve your specific business challenges.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems']
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Insights',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
      features: ['Data Mining', 'Statistical Analysis', 'Real-time Dashboards', 'Business Intelligence']
    },
    {
      icon: Shield,
      title: 'AI Security & Compliance',
      description: 'Ensure your AI systems are secure, compliant, and protected against potential threats.',
      features: ['Security Audits', 'Compliance Testing', 'Risk Assessment', 'Data Protection']
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: ['Workflow Automation', 'Document Processing', 'Customer Service Bots', 'Task Optimization']
    },
    {
      icon: Target,
      title: 'AI Implementation',
      description: 'End-to-end AI implementation services from concept to deployment and maintenance.',
      features: ['System Integration', 'Model Deployment', 'Performance Monitoring', 'Ongoing Support']
    }
  ];

  const industries = [
    { name: 'Healthcare', description: 'AI-powered diagnostic tools and patient care solutions' },
    { name: 'Finance', description: 'Fraud detection and algorithmic trading systems' },
    { name: 'E-commerce', description: 'Personalized recommendations and inventory optimization' },
    { name: 'Manufacturing', description: 'Quality control and predictive maintenance systems' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, data analytics, process automation, and AI strategy consulting for businesses." />
        <meta name="keywords" content="AI services, machine learning, data analytics, AI consulting, artificial intelligence" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform your business with cutting-edge artificial intelligence solutions
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to drive innovation and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are tailored to meet the unique needs of various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let our experts help you harness the power of artificial intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </a>
            <a
              href="/case-studies"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;