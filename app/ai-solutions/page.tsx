import React from 'react';
import Link from 'next/link';
import { Brain, Zap, Target, CheckCircle, ArrowRight, Users, BarChart, MessageCircle, Globe, Server, Shield, Settings } from 'lucide-react';

const AISolutionsPage = () => {
  const solutions = [
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models and algorithms that learn from your data to make intelligent predictions.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Data Classification', 'Model Training'],
    },
    {
      icon: MessageCircle,
      title: 'Natural Language Processing',
      description: 'AI-powered text and speech processing for enhanced communication and automation.',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbots'],
    },
    {
      icon: BarChart,
      title: 'Data Intelligence',
      description: 'Transform raw data into actionable insights using advanced AI analytics.',
      features: ['Data Mining', 'Trend Analysis', 'Predictive Modeling', 'Visualization'],
    },
    {
      icon: Target,
      title: 'Computer Vision',
      description: 'Image and video analysis powered by advanced computer vision AI technology.',
      features: ['Object Detection', 'Image Recognition', 'Video Analysis', 'Facial Recognition'],
    },
    {
      icon: Settings,
      title: 'Process Automation',
      description: 'Intelligent automation solutions that streamline and optimize business processes.',
      features: ['Workflow Automation', 'Document Processing', 'Task Automation', 'Decision Support'],
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Advanced security solutions powered by AI to protect against cyber threats.',
      features: ['Threat Detection', 'Anomaly Detection', 'Fraud Prevention', 'Risk Assessment'],
    },
  ];

  const industries = [
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Transportation',
  ];

  const benefits = [
    'Increased Efficiency',
    'Better Decision Making',
    'Cost Reduction',
    'Enhanced Customer Experience',
    'Automated Processes',
    'Competitive Advantage',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI <span className="text-blue-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI solutions. From machine learning to 
              natural language processing, we deliver cutting-edge AI technology that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve complex business challenges across industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <solution.icon className="h-12 w-12 text-blue-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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
              Our AI solutions are tailored to meet the unique needs of various industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-lg font-semibold text-gray-900">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience the power of AI with our expert team and proven methodologies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-lg text-blue-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI solutions can help you achieve your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Your AI Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AISolutionsPage;