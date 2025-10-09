'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, ArrowRight, Zap, Brain, Cloud, Shield, DollarSign, Users, BarChart, Target, Globe, Smartphone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesAdvertising: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServices = [
    {
      name: 'AI Project Manager',
      description: 'AI-powered project management with intelligent task prioritization and predictive analytics',
      price: '$29/month',
      features: ['Task prioritization', 'Team allocation', 'Predictive analytics', 'Automated workflows'],
      icon: Target,
      color: 'purple'
    },
    {
      name: 'AI Customer Insights',
      description: 'AI-powered customer segmentation, predictive analytics, and personalized recommendations',
      price: '$49/month',
      features: ['Customer segmentation', 'Predictive analytics', 'Real-time tracking', 'Sentiment analysis'],
      icon: Users,
      color: 'cyan'
    },
    {
      name: 'AI Financial Planner',
      description: 'AI-powered budgeting, investment optimization, and goal-based financial planning',
      price: '$19/month',
      features: ['Budget optimization', 'Investment recommendations', 'Goal tracking', 'Risk assessment'],
      icon: DollarSign,
      color: 'green'
    },
    {
      name: 'AI Voice Assistant',
      description: 'Natural language processing with 99% accuracy for seamless voice interactions',
      price: '$99/month',
      features: ['NLP processing', 'Multi-language support', 'Context awareness', 'Custom training'],
      icon: Brain,
      color: 'purple'
    },
    {
      name: 'AI Marketing Automation',
      description: 'Revolutionary AI-powered marketing automation, ad optimization, and content generation',
      price: '$199/month',
      features: ['Ad optimization', 'Content generation', 'Campaign automation', 'Performance analytics'],
      icon: BarChart,
      color: 'pink'
    },
    {
      name: 'AI Workflow Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities',
      price: '$399/month',
      features: ['Process automation', 'Decision making', 'Exception handling', 'Integration management'],
      icon: Zap,
      color: 'blue'
    }
  ];

  const itServices = [
    {
      name: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and cost optimization',
      price: 'Starting at $2,500',
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud', 'Multi-cloud strategy'],
      icon: Cloud,
      color: 'blue'
    },
    {
      name: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions with threat detection, compliance management, and 24/7 monitoring',
      price: 'Starting at $1,500/month',
      features: ['Threat detection', 'Compliance management', '24/7 monitoring', 'Incident response'],
      icon: Shield,
      color: 'red'
    },
    {
      name: 'IT Infrastructure',
      description: 'Enterprise-grade infrastructure solutions with scalability and reliability',
      price: 'Starting at $1,200/month',
      features: ['Server management', 'Network setup', 'Storage solutions', 'Backup systems'],
      icon: Globe,
      color: 'green'
    },
    {
      name: 'DevOps & CI/CD',
      description: 'Development operations with continuous integration and deployment pipelines',
      price: 'Starting at $800/month',
      features: ['CI/CD pipelines', 'Automated testing', 'Deployment automation', 'Monitoring'],
      icon: Zap,
      color: 'orange'
    }
  ];

  const microSaasServices = [
    {
      name: 'AI Writing Assistant',
      description: 'AI-powered content creation with grammar checking and style optimization',
      price: '$29/month',
      features: ['Content generation', 'Grammar checking', 'Style optimization', 'Multi-language'],
      icon: Brain,
      color: 'blue'
    },
    {
      name: 'Smart Analytics',
      description: 'Business intelligence dashboard with real-time insights and reporting',
      price: '$79/month',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Predictive analytics'],
      icon: BarChart,
      color: 'cyan'
    },
    {
      name: 'AI Scheduler',
      description: 'Intelligent scheduling with calendar integration and meeting optimization',
      price: '$39/month',
      features: ['Calendar integration', 'Meeting optimization', 'Conflict resolution', 'Time zone handling'],
      icon: Clock,
      color: 'purple'
    },
    {
      name: 'Expense Tracker',
      description: 'Automated expense tracking with receipt scanning and categorization',
      price: '$19/month',
      features: ['Receipt scanning', 'Auto-categorization', 'Expense reports', 'Budget tracking'],
      icon: DollarSign,
      color: 'green'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const benefits = [
    {
      icon: Star,
      title: 'Proven Results',
      description: '300% average ROI with our AI and IT solutions'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: '99.9% uptime guarantee on all services'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security and compliance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Comprehensive AI & IT Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Our Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of AI services, IT solutions, and micro SAAS applications. 
              All services include detailed features, competitive pricing, and expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
              <div className="text-gray-300">AI & IT Solutions</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-${service.color}-500/10 rounded-lg flex items-center justify-center mr-4`}>
                    <service.icon className={`w-6 h-6 text-${service.color}-400`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className={`text-${service.color}-400 font-bold text-lg`}>{service.price}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`inline-flex items-center text-${service.color}-400 hover:text-${service.color}-300 font-medium transition-colors`}
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              IT Services & Infrastructure
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-${service.color}-500/10 rounded-lg flex items-center justify-center mr-4`}>
                    <service.icon className={`w-6 h-6 text-${service.color}-400`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className={`text-${service.color}-400 font-bold text-lg`}>{service.price}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`inline-flex items-center text-${service.color}-400 hover:text-${service.color}-300 font-medium transition-colors`}
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use AI-powered applications for immediate business impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-${service.color}-500/10 rounded-lg flex items-center justify-center mr-4`}>
                    <service.icon className={`w-6 h-6 text-${service.color}-400`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className={`text-${service.color}-400 font-bold text-lg`}>{service.price}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`inline-flex items-center text-${service.color}-400 hover:text-${service.color}-300 font-medium transition-colors`}
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven expertise and commitment to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Get a free consultation and discover how our AI and IT solutions can drive your business forward. 
            Contact us today for personalized recommendations and pricing.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Phone className="w-5 h-5 text-cyan-400" />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Mail className="w-5 h-5 text-cyan-400" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-sm">{contactInfo.address}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Globe className="w-5 h-5 text-cyan-400" />
              <a href={contactInfo.website} className="hover:text-cyan-400 transition-colors">
                {contactInfo.website}
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesAdvertising;