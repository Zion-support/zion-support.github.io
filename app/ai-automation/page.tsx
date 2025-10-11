'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Zap, Settings, Brain, CheckCircle, ArrowRight, Clock, Users, Target, BarChart, Shield } from 'lucide-react';

const AiAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and streamline business processes',
      benefits: ['90% time savings', 'Error reduction', '24/7 operation']
    },
    {
      icon: Brain,
      title: 'Intelligent Decision Making',
      description: 'AI-powered decision engines that learn and adapt',
      benefits: ['Smart routing', 'Predictive actions', 'Continuous learning']
    },
    {
      icon: Settings,
      title: 'Process Optimization',
      description: 'Continuously optimize processes for maximum efficiency',
      benefits: ['Performance monitoring', 'Auto-optimization', 'ROI tracking']
    },
    {
      icon: Shield,
      title: 'Error Prevention',
      description: 'Proactive error detection and prevention systems',
      benefits: ['Quality assurance', 'Risk mitigation', 'Compliance monitoring']
    }
  ];

  const automationTypes = [
    {
      title: 'Document Processing',
      description: 'Automatically extract, classify, and process documents',
      icon: '📄',
      benefits: ['OCR processing', 'Data extraction', 'Document routing']
    },
    {
      title: 'Customer Service',
      description: 'Automate customer interactions and support processes',
      icon: '💬',
      benefits: ['Ticket routing', 'Response generation', 'Escalation management']
    },
    {
      title: 'Data Entry',
      description: 'Eliminate manual data entry with intelligent automation',
      icon: '📊',
      benefits: ['Form processing', 'Data validation', 'Database updates']
    },
    {
      title: 'Email Management',
      description: 'Automate email processing and response generation',
      icon: '📧',
      benefits: ['Smart categorization', 'Auto-responses', 'Priority routing']
    },
    {
      title: 'Inventory Management',
      description: 'Automate inventory tracking and reorder processes',
      icon: '📦',
      benefits: ['Stock monitoring', 'Reorder alerts', 'Demand forecasting']
    },
    {
      title: 'Financial Processing',
      description: 'Automate financial workflows and reporting',
      icon: '💰',
      benefits: ['Invoice processing', 'Payment matching', 'Financial reporting']
    }
  ];

  const benefits = [
    { metric: '90%', description: 'Reduction in manual tasks' },
    { metric: '75%', description: 'Faster process completion' },
    { metric: '95%', description: 'Error reduction' },
    { metric: '300%', description: 'ROI improvement' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation - Zion Tech Group | Intelligent Process Automation</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Streamline workflows, reduce errors, and increase efficiency with intelligent process automation." />
        <meta name="keywords" content="AI automation, process automation, workflow automation, intelligent automation, business process automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                AI <span className="text-cyan-400">Automation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with intelligent automation solutions that streamline workflows, 
                reduce errors, and increase efficiency. Let AI handle the repetitive tasks while you focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose AI Automation?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our AI automation solutions deliver measurable results that transform your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                  <div className="text-gray-300">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our AI automation platform provides comprehensive tools for intelligent process automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Types Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Automation Solutions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We provide automation solutions for every aspect of your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {automationTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We follow a proven methodology to ensure successful automation implementation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Analysis</h3>
                <p className="text-gray-300 text-sm">Analyze your current processes and identify automation opportunities</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
                <p className="text-gray-300 text-sm">Design custom automation solutions tailored to your needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Implementation</h3>
                <p className="text-gray-300 text-sm">Deploy and configure your automation solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Optimization</h3>
                <p className="text-gray-300 text-sm">Monitor, optimize, and scale your automation processes</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-8 text-center border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Business?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Stop wasting time on repetitive tasks. Let our AI automation solutions handle the work 
                while you focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiAutomationPage;