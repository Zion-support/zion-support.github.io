'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, Workflow, CheckCircle, ArrowRight, Brain, Settings, Clock, TrendingUp, Shield } from 'lucide-react';

const AiAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Workflow className="w-8 h-8 text-cyan-400" />,
      title: 'Process Automation',
      description: 'Automate complex business processes with AI-powered decision making',
      benefits: ['75% process efficiency', '90% error reduction', 'Scalable automation']
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: 'Smart Workflows',
      description: 'Intelligent workflow orchestration that adapts to changing conditions',
      benefits: ['Dynamic routing', 'Conditional logic', 'Real-time optimization']
    },
    {
      icon: <Brain className="w-8 h-8 text-green-400" />,
      title: 'AI Decision Engine',
      description: 'Make data-driven decisions automatically with machine learning',
      benefits: ['Predictive analytics', 'Risk assessment', 'Optimization algorithms']
    },
    {
      icon: <Settings className="w-8 h-8 text-red-400" />,
      title: 'Integration Hub',
      description: 'Connect and automate across all your business systems',
      benefits: ['API integrations', 'Data synchronization', 'Unified dashboard']
    }
  ];

  const automationServices = [
    {
      title: 'Business Process Automation',
      description: 'Automate repetitive tasks and complex workflows',
      price: '$2,999/month',
      features: ['Workflow design', 'Process mapping', 'Automation rules', 'Performance monitoring']
    },
    {
      title: 'Data Processing Automation',
      description: 'Automated data collection, processing, and analysis',
      price: '$1,999/month',
      features: ['Data extraction', 'ETL processes', 'Quality checks', 'Report generation']
    },
    {
      title: 'Customer Service Automation',
      description: 'AI-powered customer service and support automation',
      price: '$2,499/month',
      features: ['Ticket routing', 'Response automation', 'Escalation management', 'Analytics']
    },
    {
      title: 'Marketing Automation',
      description: 'Automated marketing campaigns and lead nurturing',
      price: '$1,799/month',
      features: ['Email campaigns', 'Lead scoring', 'Personalization', 'A/B testing']
    }
  ];

  const stats = [
    { number: '500+', label: 'Processes Automated', icon: <Workflow className="w-6 h-6 text-cyan-400" /> },
    { number: '75%', label: 'Efficiency Increase', icon: <TrendingUp className="w-6 h-6 text-green-400" /> },
    { number: '90%', label: 'Error Reduction', icon: <Shield className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Automation Running', icon: <Clock className="w-6 h-6 text-red-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation - Zion Tech Group | Intelligent Process Automation Solutions</title>
        <meta name="description" content="Transform your business with AI-powered automation. Automate processes, workflows, and decision-making with intelligent automation solutions that increase efficiency and reduce errors." />
        <meta name="keywords" content="AI automation, process automation, workflow automation, business automation, intelligent automation, RPA" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-green-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-green-400/30">
              <Zap className="w-4 h-4" />
              <span>AI-Powered Automation</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Intelligent{' '}
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Automation
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with AI-powered automation that streamlines processes, 
              reduces errors, and increases efficiency by up to 75%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-green-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transform hover:scale-105"
              >
                <span>Start Automating</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-green-400 text-green-400 px-10 py-4 rounded-xl font-semibold hover:bg-green-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Automation Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-cyan-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Automation Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities that automate and optimize your business processes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Automation <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive automation solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {automationServices.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-3xl font-bold text-green-400 mb-6">
                    {service.price}
                  </div>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact"
                    className="w-full block text-center py-3 px-6 bg-gradient-to-r from-green-500 to-cyan-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-green-900/50 to-cyan-900/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-cyan-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Automate Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join hundreds of businesses using our AI automation solutions to streamline operations and boost productivity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                  >
                    Start Automating
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
                <div className="mt-8 text-gray-400">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiAutomationPage;