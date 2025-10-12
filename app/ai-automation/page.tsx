import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, Brain, CheckCircle, ArrowRight, Users, Award, Star, Globe, Settings } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management.'
    },
    {
      icon: Brain,
      title: 'Intelligent Decision Making',
      description: 'AI-powered decision making based on data analysis and business rules.'
    },
    {
      icon: Settings,
      title: 'Custom Integrations',
      description: 'Seamlessly integrate with your existing systems and third-party applications.'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Automation solutions that grow with your business and adapt to changing needs.'
    }
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automate ticket routing, response generation, and issue resolution.',
      icon: Users
    },
    {
      title: 'Data Processing',
      description: 'Automate data collection, validation, and analysis workflows.',
      icon: Star
    },
    {
      title: 'Marketing Automation',
      description: 'Automate email campaigns, lead scoring, and customer segmentation.',
      icon: Award
    },
    {
      title: 'Financial Operations',
      description: 'Automate invoice processing, expense management, and financial reporting.',
      icon: CheckCircle
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 70%',
    'Increase productivity and efficiency',
    'Eliminate human errors in repetitive tasks',
    '24/7 automated operations',
    'Scalable and adaptable solutions',
    'ROI within 3-6 months'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our AI automation services. Automate workflows, processes, and operations for maximum efficiency and productivity." />
        <meta name="keywords" content="ai automation, workflow automation, business process automation, intelligent automation, ai solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation</span> Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business operations with intelligent automation solutions that reduce costs, increase efficiency, and eliminate repetitive tasks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI automation platform provides comprehensive tools to streamline your business processes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 p-6 rounded-xl border border-purple-400/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Use Cases</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover how AI automation can transform different areas of your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose AI Automation?</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Experience the transformative power of intelligent automation in your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss how AI automation can transform your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Your Automation Journey <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationPage;