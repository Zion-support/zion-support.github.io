import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle, Star, Cloud, BarChart3, Users, Clock, DollarSign, Shield, Code, Database, Mail, Settings, FileText, RefreshCw, Brain, Mic, TrendingUp, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage = () => {
  const services = [
    {
      id: 'zion-analytics-pro',
      title: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting.',
      icon: BarChart3,
      features: ['Real-time Dashboards', 'AI Insights', 'Advanced Reporting', 'Data Integration'],
      price: 'From $99/month',
      featured: true
    },
    {
      id: 'zion-security-shield',
      title: 'Zion Security Shield',
      description: 'Advanced AI-powered cybersecurity platform with real-time threat detection and automated incident response.',
      icon: Shield,
      features: ['AI Threat Detection', 'Zero-Trust Architecture', 'Automated Response', 'Compliance Management'],
      price: 'From $199/month',
      featured: true
    },
    {
      id: 'zion-cloud-vault',
      title: 'Zion Cloud Vault',
      description: 'Unlimited cloud storage platform with AI-powered organization, real-time collaboration, and enterprise-grade security.',
      icon: Cloud,
      features: ['Unlimited Storage', 'AI Organization', 'Real-time Collaboration', 'Advanced Security'],
      price: 'From $9/month',
      featured: true
    },
    {
      id: 'zion-content-studio',
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform with text generation, visual design, SEO optimization, and team collaboration.',
      icon: FileText,
      features: ['AI Content Generation', 'Visual Design', 'SEO Optimization', 'Team Collaboration'],
      price: 'From $29/month',
      featured: true
    },
    {
      id: 'zion-data-sync',
      title: 'Zion Data Sync',
      description: 'Real-time data synchronization platform with AI-powered mapping and multi-platform integration.',
      icon: RefreshCw,
      features: ['Real-time Sync', 'AI Data Mapping', '200+ Connectors', 'Advanced Monitoring'],
      price: 'From $49/month',
      featured: false
    },
    {
      id: 'zion-project-master',
      title: 'Zion Project Master',
      description: 'AI-powered project management platform with intelligent planning, real-time collaboration, and predictive analytics.',
      icon: Settings,
      features: ['AI Project Planning', 'Real-time Collaboration', 'Resource Management', 'Advanced Analytics'],
      price: 'From $39/month',
      featured: false
    },
    {
      id: 'zion-ai-neural-interface',
      title: 'Zion AI Neural Interface',
      description: 'Revolutionary brain-computer interface for thought-to-text conversion and mind control applications.',
      icon: Brain,
      features: ['Thought-to-Text', 'Mind Control', 'Neural Training', 'Advanced AI'],
      price: 'From $199/month',
      featured: false
    },
    {
      id: 'ai-voice-cloning-studio',
      title: 'AI Voice Cloning Studio',
      description: 'Professional voice synthesis with 95% accuracy and multi-language support for content creation.',
      icon: Mic,
      features: ['Voice Synthesis', 'Multi-language', '95% Accuracy', 'Professional Quality'],
      price: 'From $29/month',
      featured: false
    },
    {
      id: 'ai-quantum-financial-oracle',
      title: 'AI Quantum Financial Oracle',
      description: 'Quantum-powered financial predictions with 99.7% accuracy for market analysis and investment decisions.',
      icon: TrendingUp,
      features: ['Quantum Computing', '99.7% Accuracy', 'Market Analysis', 'Investment Predictions'],
      price: 'From $199/month',
      featured: false
    },
    {
      id: 'ai-space-mission-optimizer',
      title: 'AI Space Mission Optimizer',
      description: 'Advanced space mission optimization with 99.9% trajectory accuracy for aerospace and satellite operations.',
      icon: Globe,
      features: ['Mission Optimization', '99.9% Accuracy', 'Trajectory Planning', 'Aerospace Solutions'],
      price: 'From $499/month',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Custom micro software-as-a-service solutions designed to streamline your business operations and boost productivity."
        keywords="micro SAAS, software as a service, business tools, productivity, automation, project management, CRM"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Custom micro software-as-a-service solutions designed to streamline your business operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Featured Micro SAAS Solutions
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.filter(service => service.featured).map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 p-6 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-cyan-400">{service.price}</span>
                    <div className="flex items-center text-sm text-gray-400">
                      <Cloud className="w-4 h-4 mr-1" />
                      <span>Cloud Hosted</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/${service.id}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                  >
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              All Micro SAAS Solutions
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="group bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-cyan-400">{service.price}</span>
                    <div className="flex items-center text-sm text-gray-400">
                      <Cloud className="w-4 h-4 mr-1" />
                      <span>Cloud Hosted</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/${service.id}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                  >
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Streamline Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our micro SAAS solutions can help you automate processes and increase efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Start Your SAAS Journey
            </Link>
            <Link 
              to="/pricing" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;