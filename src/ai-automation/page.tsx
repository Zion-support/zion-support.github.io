import React from 'react';
import Layout from '../components/Layout';
import SEOOptimizer from '../components/SEOOptimizer';
import { Bot, Zap, Settings, BarChart, CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to your business processes.',
      benefits: ['Process Learning', 'Adaptive Workflows', 'Error Reduction', 'Efficiency Gains']
    },
    {
      icon: Zap,
      title: 'Smart Task Automation',
      description: 'Automate repetitive tasks with intelligent decision-making capabilities.',
      benefits: ['Task Prioritization', 'Smart Scheduling', 'Resource Optimization', 'Quality Control']
    },
    {
      icon: Settings,
      title: 'Workflow Optimization',
      description: 'Continuously optimize workflows based on performance data and user feedback.',
      benefits: ['Performance Analytics', 'Continuous Improvement', 'User Feedback Integration', 'Predictive Optimization']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to measure and improve automation effectiveness.',
      benefits: ['Real-time Metrics', 'Performance Dashboards', 'ROI Tracking', 'Predictive Analytics']
    }
  ];

  const automationAreas = [
    'Customer Service Automation',
    'Sales Process Automation',
    'Marketing Campaign Automation',
    'Data Processing Automation',
    'Document Management Automation',
    'Email & Communication Automation',
    'Inventory Management Automation',
    'Financial Process Automation',
    'HR Process Automation',
    'Quality Assurance Automation'
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Automation Solutions - Zion Tech Group"
        description="Transform your business with intelligent AI automation that learns, adapts, and optimizes your processes for maximum efficiency and productivity."
        keywords={['AI automation', 'process automation', 'intelligent automation', 'workflow optimization', 'business automation']}
        canonicalUrl="https://ziontechgroup.com/ai-automation"
      />
      <Layout>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Automation Solutions
            </h1>
            <p className="text-xl md:text-2xl text-purple-400 mb-8">
              Transform your business with intelligent automation that learns and adapts
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Our AI automation platform combines machine learning, process intelligence, and smart workflows 
              to automate complex business processes while maintaining quality and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button flex items-center justify-center space-x-2"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <Mail className="w-5 h-5" />
                <span>Schedule Demo</span>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Key Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI automation capabilities designed to transform your business processes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center mb-6">
                  <feature.icon className="w-10 h-10 text-purple-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Automation Areas Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Automation Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We can automate virtually any business process across all departments
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {automationAreas.map((area, index) => (
              <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-gray-300 text-sm font-medium">{area}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you identify automation opportunities and implement intelligent solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button flex items-center justify-center space-x-2"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <span>Get Free Assessment</span>
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AIAutomationPage;