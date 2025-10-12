'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Code, 
  Smartphone, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Lock,
  Cpu,
  Wifi,
  BarChart3,
  MessageSquare,
  FileText,
  Camera,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

export default function HomePage() {
  const aiServices = [
    {
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with natural language processing',
      price: '$299/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content analytics'],
      icon: FileText,
      path: '/ai-content-generator'
    },
    {
      name: 'AI Chatbot Enterprise',
      description: 'Intelligent conversational AI for customer service and support',
      price: '$499/month',
      features: ['24/7 availability', 'Multi-channel integration', 'Sentiment analysis', 'Custom training'],
      icon: MessageSquare,
      path: '/ai-chatbot-enterprise'
    },
    {
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive AI-driven analytics and business intelligence platform',
      price: '$399/month',
      features: ['Real-time insights', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      icon: BarChart3,
      path: '/ai-analytics-dashboard'
    },
    {
      name: 'AI 3D Generation',
      description: 'Revolutionary AI-powered 3D content creation and modeling',
      price: '$599/month',
      features: ['3D model generation', 'Texture synthesis', 'Animation creation', 'VR/AR support'],
      icon: Camera,
      path: '/ai-3d-generation'
    }
  ];

  const itServices = [
    {
      name: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure with zero downtime',
      price: 'From $2,500',
      features: ['AWS/Azure/GCP expertise', 'Data migration', 'Security compliance', '24/7 support'],
      icon: Cloud,
      path: '/cloud-migration'
    },
    {
      name: 'DevOps Solutions',
      description: 'Complete DevOps implementation with CI/CD pipelines and automation',
      price: 'From $3,000',
      features: ['CI/CD setup', 'Infrastructure as Code', 'Monitoring & logging', 'Security integration'],
      icon: Code,
      path: '/devops-solutions'
    },
    {
      name: 'Cybersecurity Suite',
      description: 'Comprehensive cybersecurity solutions to protect your digital assets',
      price: 'From $1,500',
      features: ['Threat detection', 'Vulnerability assessment', 'Compliance audit', 'Incident response'],
      icon: Shield,
      path: '/cybersecurity'
    },
    {
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile app development for iOS and Android',
      price: 'From $5,000',
      features: ['Native performance', 'Cross-platform', 'App store optimization', 'Maintenance support'],
      icon: Smartphone,
      path: '/mobile-development'
    }
  ];

  const microSaasServices = [
    {
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights',
      price: '$99/month',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Integration APIs'],
      icon: Users,
      path: '/ai-crm'
    },
    {
      name: 'Smart Analytics',
      description: 'AI-driven analytics platform for data-driven decision making',
      price: '$149/month',
      features: ['Real-time dashboards', 'Predictive modeling', 'Custom metrics', 'Export capabilities'],
      icon: TrendingUp,
      path: '/smart-analytics'
    },
    {
      name: 'Automated Testing',
      description: 'AI-powered automated testing suite for web and mobile applications',
      price: '$199/month',
      features: ['Test generation', 'Cross-browser testing', 'Performance testing', 'Bug detection'],
      icon: Zap,
      path: '/ai-automated-testing'
    },
    {
      name: 'Content Management',
      description: 'AI-enhanced content management system with intelligent organization',
      price: '$79/month',
      features: ['Auto-tagging', 'Content optimization', 'Workflow automation', 'Multi-user support'],
      icon: FileText,
      path: '/ai-content-management'
    }
  ];

  const fiveGServices = [
    {
      name: '5G Network Infrastructure',
      description: 'Complete 5G network design, deployment, and optimization services',
      price: 'Custom pricing',
      features: ['Network planning', 'Equipment deployment', 'Performance optimization', 'Maintenance'],
      icon: Wifi,
      path: '/5g-network-infrastructure'
    },
    {
      name: '5G Edge Computing',
      description: 'Edge computing solutions leveraging 5G for ultra-low latency applications',
      price: 'Custom pricing',
      features: ['Edge deployment', 'Latency optimization', 'Real-time processing', 'Scalability'],
      icon: Cpu,
      path: '/5g-edge-computing'
    },
    {
      name: '5G IoT Solutions',
      description: 'Internet of Things solutions powered by 5G connectivity',
      price: 'Custom pricing',
      features: ['Device management', 'Data analytics', 'Remote monitoring', 'Integration APIs'],
      icon: Globe,
      path: '/5g-iot-solutions'
    },
    {
      name: '5G Mobile Applications',
      description: 'Next-generation mobile applications optimized for 5G networks',
      price: 'From $8,000',
      features: ['5G optimization', 'AR/VR support', 'Real-time features', 'Cross-platform'],
      icon: Smartphone,
      path: '/5g-mobile-applications'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLab',
      content: 'The AI content generator has revolutionized our marketing. We can now create high-quality content at scale.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, DataFlow',
      content: 'Their 5G implementation was flawless. We achieved ultra-low latency that we never thought possible.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, and digital transformation. Transform your business with cutting-edge technology and artificial intelligence." />
        <meta name="keywords" content="AI solutions, IT services, cloud computing, digital transformation, 5G implementation, cybersecurity, machine learning" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Transform Your Business with
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  AI & IT Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Leading the future of technology with cutting-edge AI solutions, comprehensive IT services, 
                and revolutionary 5G implementations. Scale your business with our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI-Powered Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations 
                and unlock new possibilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="mb-6">
                    <service.icon className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-blue-400 mb-6">{service.price}</div>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete IT solutions to modernize your infrastructure and accelerate your digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="mb-6">
                    <service.icon className="w-12 h-12 text-green-400 group-hover:text-green-300 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-green-400 mb-6">{service.price}</div>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized software solutions designed to solve specific business challenges with AI integration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="mb-6">
                    <service.icon className="w-12 h-12 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-purple-400 mb-6">{service.price}</div>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5G Solutions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                5G Implementation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Next-generation connectivity solutions to power the future of your business with 5G technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {fiveGServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="mb-6">
                    <service.icon className="w-12 h-12 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-cyan-400 mb-6">{service.price}</div>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say about our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already using our AI and IT solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}