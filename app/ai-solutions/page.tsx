import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Bot, BarChart3, Shield, Zap, Target, ArrowRight } from 'lucide-react';

export default function AISolutionsPage() {
  const solutions = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Build intelligent systems that learn and adapt to your business needs.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Continuous Learning']
    },
    {
      icon: Bot,
      title: 'Natural Language Processing',
      description: 'Enable machines to understand and process human language effectively.',
      features: ['Chatbots & Virtual Assistants', 'Text Analysis', 'Language Translation', 'Sentiment Analysis']
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Insights',
      description: 'Transform raw data into actionable business insights using AI.',
      features: ['Data Mining', 'Predictive Modeling', 'Business Intelligence', 'Real-time Analytics']
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Protect your AI systems and data with advanced security measures.',
      features: ['AI Model Security', 'Data Privacy', 'Threat Detection', 'Compliance Management']
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Automate complex business processes using intelligent AI solutions.',
      features: ['Workflow Automation', 'Task Optimization', 'Resource Management', 'Efficiency Improvement']
    },
    {
      icon: Target,
      title: 'Computer Vision',
      description: 'Enable machines to interpret and understand visual information.',
      features: ['Image Recognition', 'Object Detection', 'Visual Analytics', 'Quality Control']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, NLP, data analytics, and automation for businesses." />
        <meta name="keywords" content="AI solutions, machine learning, natural language processing, data analytics, computer vision" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations, 
            improve decision-making, and drive innovation across all departments.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our AI Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Discovery</h3>
              <p className="text-gray-300 text-sm">Understand your business needs and identify AI opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
              <p className="text-gray-300 text-sm">Create a comprehensive AI strategy and solution architecture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Develop</h3>
              <p className="text-gray-300 text-sm">Build and train AI models tailored to your specific requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Deploy</h3>
              <p className="text-gray-300 text-sm">Implement and monitor AI solutions in your production environment</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-300 mb-6">
              Let's discuss how our AI solutions can help you achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start AI Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View AI Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}