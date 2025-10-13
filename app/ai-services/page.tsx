import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Right, Star, Brain, BarChart3, Zap, FileText, MessageCircle, Shield } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';

const AiServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Consulting',
      description: 'Strategic AI consulting to help you identify opportunities and develop AI roadmaps.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'AI Analytics',
      description: 'Advanced analytics solutions powered by machine learning and AI algorithms.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI-powered workflows.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Generate high-quality content at scale using advanced AI language models.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI solutions for customer service and support.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Protect your business with AI-powered security and threat detection systems.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const benefits = [
    'Increase operational efficiency by up to 300%',
    'Reduce costs through intelligent automation',
    'Improve decision-making with data-driven insights',
    'Enhance customer experience with AI-powered solutions',
    'Scale your business without proportional cost increase',
    'Stay ahead of the competition with cutting-edge AI'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and identify AI opportunities'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive AI strategy tailored to your goals'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy AI solutions with minimal disruption to your operations'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously monitor and optimize AI performance'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services. From consulting to implementation, we help you leverage artificial intelligence for growth." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI consulting, AI implementation" />
        <link rel="canonical" href="/ai-services" />
      </Helmet>

      <FuturisticBackground>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-3xl"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Services
                <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  That Transform
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Leverage the power of artificial intelligence to transform your business. 
                Our comprehensive AI services help you stay competitive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <Right className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to meet your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                      Learn More
                      <Right className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of working with AI experts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/50 rounded-2xl">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for successful AI implementation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 text-center">
            <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI services can help you achieve your business goals 
                and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center">
                  Start Your AI Journey
                  <Right className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </section>
        </div>
      </FuturisticBackground>
    </>
  );
};

export default AiServicesPage;