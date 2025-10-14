import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Right, Brain, BarChart3, Zap, FileText, MessageSquare, Shield } from 'lucide-react';
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
      description: 'Advanced analytics solutions powered by AI to extract insights from your data.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Automate repetitive tasks and processes with intelligent AI solutions.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Generate high-quality content at scale using advanced AI models.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbots',
      description: 'Intelligent chatbots and virtual assistants for customer support.',      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'AI-powered security solutions to protect your business from threats.',
      color: 'from-red-500 to-pink-500'    }
  ]
  return (
    <div className="min-h-screen bg-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including consulting, analytics, automation, and more." />      </Helmet>
      
      <FuturisticBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI services designed to drive innovation and growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <button className="flex items-center text-white hover:text-gray-300 transition-colors">
                    Learn More
                    <Right className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you unlock the full potential of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300">                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center">
                    Learn More <Right className="w-4 h-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our AI Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )}
export default AiServicesPage