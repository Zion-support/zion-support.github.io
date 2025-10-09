'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, TrendingUp, Users, DollarSign, Clock, Award, ArrowRight, Star, BarChart, Zap, Shield, Brain, Cloud, Code, Target, MessageSquare, Eye, Cpu, Lock, Database, Settings, Globe, FileText, Search, Bot, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Smartphone, TrendingUp as TrendingUpIcon, Cube, Mic, DollarSign as Dollar, HardDrive, FileCheck } from 'lucide-react';

const SpecializedServicesPage: React.FC = () => {
  const specializedServices = [
    {
      title: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum computing applications for complex problem solving and optimization',
      icon: Cpu,
      price: 'Custom Pricing',
      features: [
        'Quantum algorithm development',
        'Quantum machine learning',
        'Quantum optimization',
        'Quantum cryptography',
        'Quantum simulation',
        'Quantum error correction'
      ],
      benefits: [
        'Exponential speed improvements',
        'Breakthrough problem solving',
        'Future-proof technology',
        'Competitive advantage'
      ],
      color: 'from-purple-500 to-indigo-600',
      category: 'Quantum Technology'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing systems that operate independently with minimal human intervention',
      icon: Settings,
      price: 'Custom Pricing',
      features: [
        'Autonomous decision making',
        'Self-healing systems',
        'Predictive maintenance',
        'Adaptive learning',
        'Real-time optimization',
        'Fault tolerance'
      ],
      benefits: [
        'Reduced operational costs',
        'Improved reliability',
        '24/7 autonomous operation',
        'Enhanced efficiency'
      ],
      color: 'from-green-500 to-teal-600',
      category: 'Automation'
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Decentralized applications and blockchain infrastructure for the next generation web',
      icon: Lock,
      price: 'Custom Pricing',
      features: [
        'Smart contract development',
        'DeFi applications',
        'NFT marketplaces',
        'Web3 integration',
        'Token creation',
        'Blockchain consulting'
      ],
      benefits: [
        'Decentralized security',
        'Transparent transactions',
        'Reduced intermediaries',
        'Global accessibility'
      ],
      color: 'from-yellow-500 to-orange-600',
      category: 'Blockchain'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions for real-time data processing',
      icon: Globe,
      price: 'Custom Pricing',
      features: [
        'IoT device development',
        'Edge computing infrastructure',
        'Real-time data processing',
        'Sensor integration',
        'Edge AI deployment',
        'IoT security'
      ],
      benefits: [
        'Real-time insights',
        'Reduced latency',
        'Cost-effective processing',
        'Enhanced security'
      ],
      color: 'from-blue-500 to-cyan-600',
      category: 'IoT'
    },
    {
      title: 'Business Intelligence Platform',
      description: 'Advanced analytics and business intelligence solutions for data-driven decisions',
      icon: BarChart,
      price: 'Custom Pricing',
      features: [
        'Advanced analytics',
        'Predictive modeling',
        'Real-time dashboards',
        'Data visualization',
        'Business reporting',
        'Performance metrics'
      ],
      benefits: [
        'Data-driven decisions',
        'Improved performance',
        'Competitive insights',
        'Operational efficiency'
      ],
      color: 'from-indigo-500 to-purple-600',
      category: 'Analytics'
    },
    {
      title: 'Robotics Solutions',
      description: 'Intelligent robotics and automation systems for industrial and commercial applications',
      icon: Settings,
      price: 'Custom Pricing',
      features: [
        'Industrial robotics',
        'Service robots',
        'Autonomous vehicles',
        'Robotic process automation',
        'Human-robot collaboration',
        'Robotic maintenance'
      ],
      benefits: [
        'Increased productivity',
        'Reduced human error',
        '24/7 operation',
        'Cost savings'
      ],
      color: 'from-red-500 to-pink-600',
      category: 'Robotics'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise-grade solutions for large organizations',
      icon: Building,
      price: 'Custom Pricing',
      features: [
        'Enterprise architecture',
        'System integration',
        'Legacy modernization',
        'Scalable infrastructure',
        'Enterprise security',
        'Compliance management'
      ],
      benefits: [
        'Scalable solutions',
        'Enterprise security',
        'Compliance assurance',
        'Long-term support'
      ],
      color: 'from-gray-500 to-slate-600',
      category: 'Enterprise'
    },
    {
      title: 'Analytics Tools Suite',
      description: 'Comprehensive analytics tools for business intelligence and data science',
      icon: PieChart,
      price: 'Custom Pricing',
      features: [
        'Data mining tools',
        'Statistical analysis',
        'Machine learning pipelines',
        'Visualization tools',
        'Reporting systems',
        'Data governance'
      ],
      benefits: [
        'Advanced analytics',
        'Better insights',
        'Automated reporting',
        'Data quality assurance'
      ],
      color: 'from-teal-500 to-green-600',
      category: 'Analytics'
    },
    {
      title: 'Business Applications',
      description: 'Custom business applications tailored to specific industry needs',
      icon: Briefcase,
      price: 'Custom Pricing',
      features: [
        'Custom app development',
        'Industry-specific solutions',
        'Mobile applications',
        'Web applications',
        'API development',
        'Integration services'
      ],
      benefits: [
        'Tailored solutions',
        'Industry expertise',
        'Scalable applications',
        'Ongoing support'
      ],
      color: 'from-cyan-500 to-blue-600',
      category: 'Applications'
    },
    {
      title: 'Smart Analytics Platform',
      description: 'AI-powered analytics platform for intelligent business insights',
      icon: TrendingUp,
      price: 'Custom Pricing',
      features: [
        'AI-powered insights',
        'Automated reporting',
        'Predictive analytics',
        'Real-time monitoring',
        'Custom dashboards',
        'Data integration'
      ],
      benefits: [
        'Intelligent insights',
        'Automated analysis',
        'Real-time monitoring',
        'Better decisions'
      ],
      color: 'from-emerald-500 to-green-600',
      category: 'Analytics'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'AI-powered medical solutions, patient care optimization, and healthcare analytics',
      services: ['Medical AI', 'Patient Analytics', 'Diagnostic Tools', 'Treatment Optimization']
    },
    {
      name: 'Finance',
      icon: '🏦',
      description: 'Financial AI solutions, fraud detection, and algorithmic trading systems',
      services: ['Fraud Detection', 'Algorithmic Trading', 'Risk Assessment', 'Financial Analytics']
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Smart manufacturing, quality control, and predictive maintenance solutions',
      services: ['Quality Control', 'Predictive Maintenance', 'Supply Chain AI', 'Process Optimization']
    },
    {
      name: 'Retail',
      icon: '🛒',
      description: 'E-commerce optimization, customer analytics, and inventory management',
      services: ['Customer Analytics', 'Inventory Optimization', 'Personalization', 'Demand Forecasting']
    },
    {
      name: 'Transportation',
      icon: '🚚',
      description: 'Logistics optimization, autonomous vehicles, and route planning solutions',
      services: ['Route Optimization', 'Autonomous Vehicles', 'Fleet Management', 'Logistics AI']
    },
    {
      name: 'Education',
      icon: '🎓',
      description: 'Personalized learning, educational analytics, and student success platforms',
      services: ['Personalized Learning', 'Student Analytics', 'Educational AI', 'Learning Optimization']
    }
  ];

  const stats = [
    { label: 'Specialized Projects', value: '200+', icon: Award },
    { label: 'Industry Expertise', value: '15+', icon: Globe },
    { label: 'Success Rate', value: '98%', icon: Star },
    { label: 'Client Satisfaction', value: '99%', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Specialized Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Cutting-edge specialized solutions for complex business challenges. 
            From quantum computing to autonomous systems, we deliver breakthrough technologies 
            that transform industries and drive innovation.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Our Specialized Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-cyan-400 font-bold text-lg">{service.price}</div>
                  <div className="text-sm text-gray-400">{service.category}</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 bg-gradient-to-r ${service.color} text-white`}
                >
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Industry Expertise
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            We serve clients across diverse industries with specialized solutions tailored to their unique needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{industry.name}</h3>
                <p className="text-gray-300 mb-4 text-center">{industry.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Our Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="px-2 py-1 bg-cyan-400/20 text-cyan-400 rounded text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="/contact"
                  className="w-full py-2 px-4 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 bg-cyan-400 text-slate-900"
                >
                  Discuss Your Needs
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Our Specialized Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Discovery</h3>
              <p className="text-gray-300">Deep dive into your specific challenges and requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Design</h3>
              <p className="text-gray-300">Custom solution architecture and technology selection</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Development</h3>
              <p className="text-gray-300">Specialized development with cutting-edge technologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Deployment</h3>
              <p className="text-gray-300">Seamless deployment with ongoing support and optimization</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready for Specialized Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your specialized requirements and explore how our cutting-edge technologies 
              can solve your most complex challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Start Your Project
              </a>
              <a 
                href="tel:+13024640950" 
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <PhoneIcon className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SpecializedServicesPage;