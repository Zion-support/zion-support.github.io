'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Users, TrendingUp, Clock, Shield, Zap, Settings, Phone, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Settings,
      title: 'Process Automation',
      description: 'Intelligent automation of complex business processes with decision-making capabilities',
      benefits: ['Reduced manual work', 'Improved accuracy', 'Faster processing', 'Cost savings']
    },
    {
      icon: Zap,
      title: 'Workflow Optimization',
      description: 'Streamline and optimize existing workflows for maximum efficiency',
      benefits: ['Better resource utilization', 'Reduced bottlenecks', 'Improved throughput', 'Enhanced productivity']
    },
    {
      icon: Shield,
      title: 'Data Processing',
      description: 'Automated data collection, validation, and processing with AI-powered insights',
      benefits: ['Real-time processing', 'Data quality assurance', 'Automated reporting', 'Predictive analytics']
    },
    {
      icon: Users,
      title: 'Customer Service',
      description: 'AI-powered customer support with natural language processing and sentiment analysis',
      benefits: ['24/7 availability', 'Instant responses', 'Multilingual support', 'Personalized interactions']
    },
    {
      icon: Clock,
      title: 'Task Scheduling',
      description: 'Intelligent scheduling and resource allocation based on priorities and constraints',
      benefits: ['Optimal resource allocation', 'Reduced conflicts', 'Improved planning', 'Better outcomes']
    },
    {
      icon: TrendingUp,
      title: 'Performance Monitoring',
      description: 'Continuous monitoring and optimization of automated processes',
      benefits: ['Real-time insights', 'Proactive optimization', 'Performance tracking', 'Continuous improvement']
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '80%', label: 'Efficiency Increase' },
    { icon: Clock, value: '50%', label: 'Time Savings' },
    { icon: Users, value: '200+', label: 'Processes Automated' },
    { icon: Star, value: '4.9/5', label: 'Client Rating' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Services | Zion Tech Group</title>
        <meta name="description" content="Transform your business with intelligent AI automation solutions. Streamline processes, reduce costs, and boost efficiency with our cutting-edge automation services." />
        <meta name="keywords" content="AI automation, business process automation, workflow optimization, intelligent automation, process efficiency" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-Powered <span className="text-cyan-400">Automation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with intelligent automation solutions that streamline processes, 
                reduce costs, and boost efficiency across all operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +1 302 464 0950
                </a>
              </div>
              <div className="mt-8 text-sm opacity-90">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Our Automation Solutions</h2>
                <p className="text-xl text-gray-300">
                  Comprehensive AI automation services tailored to your business needs
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <feature.icon className="h-8 w-8 text-cyan-400 mr-3" />
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 px-4 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Proven Results</h2>
                <p className="text-xl text-gray-300">
                  Our automation solutions deliver measurable business impact
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-cyan-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-8 w-8 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our AI automation experts help you identify opportunities and implement 
                solutions that drive real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors"
                >
                  Start Your Automation Journey
                </a>
                <a
                  href="/demo"
                  className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Schedule a Demo
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