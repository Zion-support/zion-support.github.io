'use client';

import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Cloud, 
  Code, 
  Zap, 
  Shield, 
  Settings, 
  BarChart, 
  Users, 
  Globe, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Award,
  Clock,
  Building,
  TrendingUp,
  Sparkles,
  Cpu,
  Database,
  Lock,
  FileText,
  Calendar,
  DollarSign,
  MessageSquare,
  Palette,
  Mic,
  Receipt,
  Key,
  ChartLine,
  Rocket
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    document.title = 'Our Services - AI & IT Solutions | Zion Tech Group';
  }, []);

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Cutting-edge artificial intelligence solutions for enterprise applications',
      services: [
        { name: 'AI Financial Analyzer Pro', href: '/ai-financial-analyzer-pro', icon: ChartLine, price: '$199/mo' },
        { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning-studio', icon: Mic, price: '$99/mo' },
        { name: 'AI Drug Discovery Pro', href: '/ai-drug-discovery-pro', icon: Brain, price: '$4,500/mo' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro', icon: Globe, price: '$3,200/mo' },
        { name: 'AI Space Technology Pro', href: '/ai-space-technology-pro', icon: Rocket, price: '$5,500/mo' },
        { name: 'AI Quantum Financial Oracle', href: '/ai-quantum-financial-oracle', icon: Zap, price: '$2,800/mo' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'Comprehensive IT solutions for modern businesses',
      services: [
        { name: 'Cloud Migration Pro', href: '/cloud-migration-pro', icon: Cloud, price: '$2,500' },
        { name: 'Cybersecurity Suite', href: '/cybersecurity', icon: Shield, price: '$1,800/mo' },
        { name: 'IT Infrastructure Design', href: '/it-infrastructure', icon: Settings, price: '$3,000/mo' },
        { name: '24/7 IT Support', href: '/it-support', icon: Clock, price: '$1,200/mo' },
        { name: 'Custom Development', href: '/custom-development', icon: Code, price: 'Custom' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings, price: '$2,200/mo' }
      ]
    },
    {
      title: 'Micro SaaS',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      description: 'AI-powered micro SaaS tools for productivity and automation',
      services: [
        { name: 'AI Expense Tracker Pro', href: '/ai-expense-tracker-pro', icon: Receipt, price: '$29/mo' },
        { name: 'AI Invoice Generator Pro', href: '/ai-invoice-generator-pro', icon: FileText, price: '$19/mo' },
        { name: 'AI Password Manager Pro', href: '/ai-password-manager-pro', icon: Key, price: '$9/mo' },
        { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning-studio', icon: Mic, price: '$99/mo' },
        { name: 'AI Smart Calendar Pro', href: '/ai-smart-calendar-pro', icon: Calendar, price: '$39/mo' },
        { name: 'AI Project Manager Pro', href: '/ai-project-manager', icon: BarChart, price: '$79/mo' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      description: 'Next-generation technology solutions for the future',
      services: [
        { name: 'Quantum Computing', href: '/ai-quantum-computing', icon: Zap, price: 'Custom' },
        { name: 'Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu, price: 'Custom' },
        { name: 'AR/VR Solutions', href: '/ar-vr-solutions', icon: Globe, price: 'Custom' },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Database, price: 'Custom' },
        { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Lock, price: 'Custom' },
        { name: 'Smart Cities', href: '/smart-cities', icon: Building, price: 'Custom' }
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Enterprise Clients", icon: Building },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Expert Support", icon: Clock },
    { number: "50+", label: "Countries Served", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Comprehensive Service Portfolio
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of AI, IT, and emerging technology services 
              designed to transform your business and drive innovation.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-lg mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mx-auto mb-6">
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{category.title}</h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white">{service.name}</h3>
                          <div className="text-cyan-400 font-semibold">{service.price}</div>
                        </div>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our experts to discuss your specific needs and discover how our services 
            can transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center text-gray-300">
                <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;