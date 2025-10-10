import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Code, 
  Shield, 
  Zap, 
  BarChart, 
  Users, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Settings, 
  Database, 
  Lock, 
  Globe, 
  Cpu, 
  MessageSquare, 
  FileText, 
  Calendar,
  Rocket,
  Sparkles,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const serviceCategories = [
    {
      id: 'ai',
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Transform your business with cutting-edge AI solutions',
      services: [
        {
          name: 'AI Workflow Automation',
          description: 'Automate complex business processes with intelligent AI workflows',
          features: ['Process Optimization', 'Smart Automation', 'ROI Tracking'],
          href: '/ai-workflow-automation'
        },
        {
          name: 'AI Customer Support',
          description: '24/7 intelligent customer support powered by advanced AI',
          features: ['Natural Language Processing', 'Multi-channel Support', 'Sentiment Analysis'],
          href: '/ai-customer-support'
        },
        {
          name: 'AI Data Analytics',
          description: 'Unlock insights from your data with AI-powered analytics',
          features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards'],
          href: '/ai-data-analytics'
        },
        {
          name: 'AI Content Generation',
          description: 'Create high-quality content at scale with AI assistance',
          features: ['Content Creation', 'SEO Optimization', 'Brand Consistency'],
          href: '/ai-content-generation'
        }
      ]
    },
    {
      id: 'it',
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'Comprehensive IT solutions for modern businesses',
      services: [
        {
          name: 'Cloud Migration',
          description: 'Seamlessly migrate your infrastructure to the cloud',
          features: ['Zero Downtime', 'Cost Optimization', 'Security First'],
          href: '/cloud-migration'
        },
        {
          name: 'Cybersecurity',
          description: 'Protect your business with enterprise-grade security',
          features: ['Threat Detection', 'Compliance', '24/7 Monitoring'],
          href: '/cybersecurity'
        },
        {
          name: 'IT Infrastructure',
          description: 'Design and implement robust IT infrastructure',
          features: ['Scalable Architecture', 'High Availability', 'Performance Optimization'],
          href: '/it-infrastructure'
        },
        {
          name: '24/7 IT Support',
          description: 'Round-the-clock technical support for your business',
          features: ['Expert Support', 'Fast Response', 'Proactive Monitoring'],
          href: '/it-support'
        }
      ]
    },
    {
      id: 'saas',
      title: 'Micro SaaS',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      description: 'Powerful micro SaaS solutions for specific business needs',
      services: [
        {
          name: 'AI Project Manager',
          description: 'Intelligent project management with AI assistance',
          features: ['Smart Scheduling', 'Resource Optimization', 'Progress Tracking'],
          href: '/ai-project-manager'
        },
        {
          name: 'AI Smart Calendar',
          description: 'AI-powered calendar management and scheduling',
          features: ['Auto-scheduling', 'Conflict Resolution', 'Smart Reminders'],
          href: '/ai-smart-calendar'
        },
        {
          name: 'AI Content Writer',
          description: 'AI-powered content creation and writing assistance',
          features: ['Multiple Formats', 'SEO Optimization', 'Brand Voice'],
          href: '/ai-content-writer'
        },
        {
          name: 'AI Analytics Dashboard',
          description: 'Comprehensive analytics dashboard with AI insights',
          features: ['Real-time Data', 'Custom Reports', 'Predictive Analytics'],
          href: '/ai-analytics-dashboard'
        }
      ]
    }
  ];

  const stats = [
    { number: '300%', label: 'Average ROI' },
    { number: '70%', label: 'Cost Reduction' },
    { number: '90%', label: 'Efficiency Gains' },
    { number: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our operations with their AI solutions. We saw a 300% increase in efficiency within the first quarter.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'InnovateLabs',
      role: 'CEO',
      content: 'The micro SaaS solutions provided by Zion Tech Group have been game-changers for our business processes.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataFlow Systems',
      role: 'VP of Technology',
      content: 'Their IT services and cloud migration expertise saved us months of work and significantly reduced costs.',
      rating: 5
    }
  ];

  const currentCategory = serviceCategories.find(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI-powered solutions, 
              IT services, and micro SaaS applications designed for the future.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          {currentCategory && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">{currentCategory.title}</h2>
                <p className="text-gray-300 text-lg">{currentCategory.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {currentCategory.services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={service.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-300 text-lg">Hear from businesses that have transformed with our solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Let's discuss how our services can help you achieve your goals. 
            Get a free consultation and discover the possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;