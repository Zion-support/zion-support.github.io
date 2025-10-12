'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Zap,
  Shield,
  Globe,
  Database,
  Code,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  Camera,
  Cpu,
  Users,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Rocket,
  Target
} from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import { NeonText, NeonButton, NeonCard, PulsingDot, AnimatedGradient } from '../components/NeonEffects';
import { aiServices } from '../data/services';

export default function AIServicesPage() {
  const iconMap: { [key: string]: React.ReactNode } = {
    'Brain': <Brain className="w-6 h-6" />,
    'MessageSquare': <MessageSquare className="w-6 h-6" />,
    'BarChart3': <BarChart3 className="w-6 h-6" />,
    'Shield': <Shield className="w-6 h-6" />,
    'FileText': <FileText className="w-6 h-6" />,
    'Users': <Users className="w-6 h-6" />,
    'Mail': <Mail className="w-6 h-6" />,
    'Cpu': <Cpu className="w-6 h-6" />,
    'Cloud': <Cloud className="w-6 h-6" />,
    'Code': <Code className="w-6 h-6" />,
    'Database': <Database className="w-6 h-6" />,
    'Smartphone': <Smartphone className="w-6 h-6" />,
    'Server': <Server className="w-6 h-6" />,
    'Wifi': <Wifi className="w-6 h-6" />
  };

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: Brain },
    { number: '99.8%', label: 'Accuracy Rate', icon: Shield },
    { number: '24/7', label: 'AI Monitoring', icon: Globe },
    { number: '50+', label: 'Languages Supported', icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FuturisticBackground />
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our advanced AI services including content generation, chatbots, analytics, and automation. Enterprise-grade AI solutions from Zion Tech Group." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI chatbots, content generation, AI analytics, automation, Zion Tech Group" />
      </Helmet>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <PulsingDot color="#8b5cf6" size={12} className="inline-block mr-2" />
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Advanced AI Solutions</span>
            <PulsingDot color="#06b6d4" size={12} className="inline-block ml-2" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Advanced{' '}
            <NeonText className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" intensity="high">
              AI Services
            </NeonText>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From content generation to predictive analytics, we deliver AI that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </NeonButton>
            <NeonButton 
              variant="secondary" 
              size="lg"
              onClick={() => window.location.href = '/about'}
            >
              Learn More
            </NeonButton>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <NeonCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <NeonText intensity="medium">{stat.number}</NeonText>
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </NeonCard>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise AI Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <NeonText intensity="medium">Enterprise AI Solutions</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Powerful AI services designed for enterprise-scale operations and maximum impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <NeonCard key={index} className={`group hover:scale-105 transition-all duration-300 relative ${
                service.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                      {iconMap[service.icon] || <Brain className="w-6 h-6 text-white" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <p className="text-2xl font-bold text-cyan-400">{service.price}</p>
                      {service.marketPrice && (
                        <p className="text-sm text-gray-400 line-through">{service.marketPrice}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex justify-between items-center text-sm">
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      📞 Call Now
                    </a>
                    <a 
                      href={`mailto:${service.contactInfo.email}`}
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      ✉️ Email
                    </a>
                  </div>
                </div>
              </NeonCard>
            ))}
          </div>
        </section>

        {/* Micro SAAS Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">AI Micro SAAS Solutions</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Specialized AI-powered tools for specific business needs. Start small, scale big.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <p className="text-cyan-400 font-medium">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center text-sm"
                >
                  Explore
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Our AI Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We combine cutting-edge technology with practical business solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Advanced AI Models</h3>
                <p className="text-gray-300">State-of-the-art machine learning models trained on enterprise data for maximum accuracy and performance.</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance with industry standards to protect your data and operations.</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-600 rounded-full mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Rapid Deployment</h3>
                <p className="text-gray-300">Quick implementation and integration with your existing systems for immediate business impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive growth, efficiency, and innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your AI Journey
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}