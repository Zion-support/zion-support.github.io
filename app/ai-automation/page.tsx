'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, Users, BarChart, Bot, Settings, Clock, CheckCircle, 
  ArrowRight, Phone, Mail, Star, TrendingUp, Shield, 
  Database, Cloud, Target, Globe, Brain, Cpu
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const AIAutomationPage: React.FC = () => {
  const automationServices = [
    {
      icon: Settings,
      title: 'Process Automation',
      description: 'Intelligent automation of complex business processes with decision-making capabilities',
      features: ['Workflow automation', 'Task scheduling', 'Data processing', 'Error handling'],
      benefits: ['80% time savings', 'Reduced errors', '24/7 operation', 'Cost reduction'],
      price: 'Starting at $299/month'
    },
    {
      icon: Users,
      title: 'Customer Service Automation',
      description: 'AI-powered chatbots and support systems for enhanced customer experience',
      features: ['Chatbot integration', 'Ticket routing', 'Response generation', 'Sentiment analysis'],
      benefits: ['Instant responses', '24/7 availability', 'Consistent service', 'Scalable support'],
      price: 'Starting at $199/month'
    },
    {
      icon: BarChart,
      title: 'Data Analysis Automation',
      description: 'Automated data processing and insights generation using AI',
      features: ['Data collection', 'Pattern recognition', 'Report generation', 'Predictive analytics'],
      benefits: ['Faster insights', 'Accurate analysis', 'Reduced manual work', 'Better decisions'],
      price: 'Starting at $399/month'
    },
    {
      icon: Target,
      title: 'Marketing Automation',
      description: 'AI-driven marketing campaigns and customer engagement automation',
      features: ['Campaign optimization', 'Personalization', 'A/B testing', 'Performance tracking'],
      benefits: ['Higher conversion', 'Better targeting', 'Reduced costs', 'Improved ROI'],
      price: 'Starting at $249/month'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Workflow Optimization",
      description: "Streamline your business processes with intelligent automation"
    },
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "24/7 customer support with natural language processing"
    },
    {
      icon: BarChart,
      title: "Data Intelligence",
      description: "Automated data analysis and actionable insights"
    },
    {
      icon: Settings,
      title: "Custom Integration",
      description: "Seamless integration with your existing systems"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Services - Zion Tech Group | Intelligent Process Automation</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Streamline workflows, reduce costs, and improve efficiency with our intelligent automation services." />
        <meta name="keywords" content="AI automation, process automation, workflow optimization, intelligent systems, business automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                AI Automation Services
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Transform your business operations with intelligent automation. 
                Reduce manual work, eliminate errors, and scale your operations efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Automation Consultation
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Started
                </Link>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {automationServices.map((service, index) => (
                  <div key={index} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                    <div className="flex items-center mb-4">
                      <service.icon className="w-12 h-12 text-cyan-400 mr-4 group-hover:text-cyan-300 transition-colors" />
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                      <a
                        href="tel:+13024640950"
                        className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
                  Why Choose Our AI Automation?
                </h2>
                <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                  Our automation solutions are designed to integrate seamlessly into your existing workflow
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:bg-cyan-500 transition-colors">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-cyan-400 mb-8 neon-glow">
                Our AI automation solutions are designed to deliver measurable results. 
                All implementations include free trials, dedicated support, and ongoing optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                >
                  <Mail className="w-5 h-5" />
                  Get Custom Automation Strategy
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AIAutomationPage;