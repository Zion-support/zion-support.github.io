'use client';
import React, { useState } from 'react';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  Target, 
  Globe, 
  Phone, 
  Mail, 
  MapPin,
  Zap,
  Settings,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Calendar,
  FileText,
  MessageCircle,
  Share2,
  Filter
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Cloud },
    { id: 'saas', name: 'Micro SaaS', icon: Code }
  ];

  const services = [
    {
      id: 'ai-analytics',
      category: 'ai',
      icon: BarChart,
      title: 'AI Analytics',
      description: 'Advanced data analytics powered by artificial intelligence to uncover insights and drive business decisions.',
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Machine Learning Models'],
      price: 'Starting at $299/month',
      href: '/ai-analytics'
    },
    {
      id: 'ai-automation',
      category: 'ai',
      icon: Zap,
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: ['Process Automation', 'Workflow Optimization', 'Smart Scheduling', 'Error Reduction'],
      price: 'Starting at $199/month',
      href: '/ai-automation'
    },
    {
      id: 'ai-chatbot',
      category: 'ai',
      icon: MessageCircle,
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI for customer service and support.',
      features: ['24/7 Support', 'Natural Language Processing', 'Multi-language Support', 'Integration Ready'],
      price: 'Starting at $149/month',
      href: '/ai-chatbot-builder'
    },
    {
      id: 'cloud-infrastructure',
      category: 'it',
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Disaster Recovery', 'Security Monitoring'],
      price: 'Starting at $199/month',
      href: '/ai-cloud-infrastructure'
    },
    {
      id: 'cybersecurity',
      category: 'it',
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response'],
      price: 'Starting at $299/month',
      href: '/ai-cybersecurity-suite'
    },
    {
      id: 'api-management',
      category: 'it',
      icon: Settings,
      title: 'API Management',
      description: 'Complete API development and management solutions.',
      features: ['API Development', 'Documentation', 'Rate Limiting', 'Analytics'],
      price: 'Starting at $149/month',
      href: '/ai-api-management'
    },
    {
      id: 'social-media-manager',
      category: 'saas',
      icon: Share2,
      title: 'AI Social Media Manager',
      description: 'Automate your social media presence with AI-powered content creation and scheduling.',
      features: ['Content Generation', 'Smart Scheduling', 'Analytics', 'Auto-Responses'],
      price: 'Starting at $29/month',
      href: '/ai-social-media-manager'
    },
    {
      id: 'email-marketing',
      category: 'saas',
      icon: Mail,
      title: 'AI Email Marketing',
      description: 'Transform your email marketing with AI-powered content generation and automation.',
      features: ['Content Creation', 'Smart Segmentation', 'Automation', 'Analytics'],
      price: 'Starting at $39/month',
      href: '/ai-email-marketing-automation'
    },
    {
      id: 'project-manager',
      category: 'saas',
      icon: Calendar,
      title: 'AI Project Manager',
      description: 'Streamline project management with AI-powered task automation and insights.',
      features: ['Task Automation', 'Predictive Analytics', 'Team Collaboration', 'Workflow Automation'],
      price: 'Starting at $49/month',
      href: '/ai-project-manager'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO',
      company: 'TechCorp',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'InnovateLabs',
      content: 'Outstanding service and cutting-edge technology. They delivered our project ahead of schedule.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'VP Engineering',
      company: 'DataFlow',
      content: 'The best IT partner we\'ve ever worked with. Their expertise in AI and cloud solutions is unmatched.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI and IT solutions designed to transform your business operations 
            and drive unprecedented growth. From micro SaaS solutions to enterprise-grade services.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss how our services can help you achieve your goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;