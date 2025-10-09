'use client';
import React from 'react';
import { ArrowRight, CheckCircle, Star, Award, Brain, Cloud, Shield, Code, BarChart, Zap, Target, MessageSquare, Eye, Cpu, Lock, FileText, Search, Bot, Calculator, Calendar, Compass, Navigation, PieChart, Activity, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Video, Gamepad2, ShoppingCart, CreditCard, Truck, Link, HardDrive, FileCheck, DollarSign, TrendingUp, Users, Settings, Database, Globe, Smartphone, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedSEOOptimizer from '../components/EnhancedSEOOptimizer';

const SpecializedServicesPage: React.FC = () => {
  const specializedServices = [
    {
      title: 'Quantum Computing Solutions',
      description: 'Harness the power of quantum computing for complex problem-solving and optimization',
      icon: Cpu,
      price: 'Starting at $5,000/month',
      features: [
        'Quantum algorithm development',
        'Quantum machine learning',
        'Quantum optimization',
        'Quantum simulation',
        'Quantum cryptography',
        'Quantum error correction'
      ],
      benefits: [
        'Exponential speedup for specific problems',
        'Revolutionary computational capabilities',
        'Future-proof technology',
        'Competitive advantage'
      ],
      category: 'Quantum Technology',
      color: 'text-purple-400',
      popular: true
    },
    {
      title: 'Autonomous Systems Development',
      description: 'Build intelligent autonomous systems that can operate independently and adapt to changing environments',
      icon: Settings,
      price: 'Starting at $3,500/month',
      features: [
        'Self-driving vehicle systems',
        'Autonomous robotics',
        'Smart infrastructure',
        'Predictive maintenance',
        'Adaptive control systems',
        'Real-time decision making'
      ],
      benefits: [
        'Reduced human intervention',
        'Improved efficiency and safety',
        '24/7 autonomous operation',
        'Scalable solutions'
      ],
      category: 'Autonomous Systems',
      color: 'text-blue-400',
      popular: true
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Develop decentralized applications and blockchain-based solutions for the next generation of the internet',
      icon: Lock,
      price: 'Starting at $2,500/month',
      features: [
        'Smart contract development',
        'DeFi applications',
        'NFT marketplaces',
        'DAO governance systems',
        'Cross-chain interoperability',
        'Web3 integration'
      ],
      benefits: [
        'Decentralized and secure',
        'Transparent transactions',
        'Reduced intermediaries',
        'Global accessibility'
      ],
      category: 'Blockchain',
      color: 'text-yellow-400',
      popular: false
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connect and manage devices at the edge with intelligent IoT solutions and real-time processing',
      icon: Globe,
      price: 'Starting at $2,000/month',
      features: [
        'IoT device management',
        'Edge AI processing',
        'Real-time data analytics',
        'Predictive maintenance',
        'Smart city solutions',
        'Industrial IoT'
      ],
      benefits: [
        'Real-time processing',
        'Reduced latency',
        'Cost-effective scaling',
        'Enhanced security'
      ],
      category: 'IoT & Edge',
      color: 'text-green-400',
      popular: true
    },
    {
      title: 'Advanced Robotics Solutions',
      description: 'Create intelligent robots and robotic systems for industrial, commercial, and research applications',
      icon: Settings,
      price: 'Starting at $4,000/month',
      features: [
        'Industrial automation',
        'Service robotics',
        'Human-robot collaboration',
        'Computer vision integration',
        'Machine learning for robotics',
        'Robotic process automation'
      ],
      benefits: [
        'Increased productivity',
        'Precision and accuracy',
        'Dangerous task automation',
        'Consistent performance'
      ],
      category: 'Robotics',
      color: 'text-red-400',
      popular: false
    },
    {
      title: 'Augmented & Virtual Reality',
      description: 'Develop immersive AR/VR experiences and applications for training, entertainment, and business',
      icon: Eye,
      price: 'Starting at $2,800/month',
      features: [
        'AR/VR application development',
        '3D modeling and animation',
        'Haptic feedback systems',
        'Spatial computing',
        'Mixed reality solutions',
        'Immersive training platforms'
      ],
      benefits: [
        'Enhanced user experience',
        'Immersive training',
        'Remote collaboration',
        'Innovative engagement'
      ],
      category: 'AR/VR',
      color: 'text-pink-400',
      popular: false
    },
    {
      title: 'Advanced Analytics & BI',
      description: 'Transform complex data into actionable insights with cutting-edge analytics and business intelligence',
      icon: BarChart,
      price: 'Starting at $1,800/month',
      features: [
        'Real-time analytics',
        'Predictive modeling',
        'Data visualization',
        'Business intelligence dashboards',
        'Advanced statistical analysis',
        'Machine learning integration'
      ],
      benefits: [
        'Data-driven decisions',
        'Competitive insights',
        'Operational efficiency',
        'Revenue optimization'
      ],
      category: 'Analytics',
      color: 'text-cyan-400',
      popular: true
    },
    {
      title: 'Enterprise Integration Solutions',
      description: 'Seamlessly integrate disparate systems and applications across your entire enterprise',
      icon: Link,
      price: 'Starting at $2,200/month',
      features: [
        'API development and management',
        'Legacy system modernization',
        'Data synchronization',
        'Workflow automation',
        'System architecture design',
        'Cloud integration'
      ],
      benefits: [
        'Unified data access',
        'Improved efficiency',
        'Reduced complexity',
        'Better decision making'
      ],
      category: 'Integration',
      color: 'text-indigo-400',
      popular: false
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'AI-powered medical diagnosis, patient monitoring, and drug discovery',
      color: 'text-red-400'
    },
    {
      name: 'Finance',
      icon: DollarSign,
      description: 'Fraud detection, algorithmic trading, and risk management',
      color: 'text-green-400'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Predictive maintenance, quality control, and process optimization',
      color: 'text-blue-400'
    },
    {
      name: 'Transportation',
      icon: Truck,
      description: 'Autonomous vehicles, route optimization, and fleet management',
      color: 'text-yellow-400'
    },
    {
      name: 'Education',
      icon: GraduationCap,
      description: 'Personalized learning, virtual classrooms, and educational analytics',
      color: 'text-purple-400'
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      description: 'Customer analytics, inventory optimization, and personalized recommendations',
      color: 'text-pink-400'
    }
  ];

  const stats = [
    { label: 'Specialized Projects', value: '200+', icon: Award },
    { label: 'Industry Expertise', value: '15+', icon: Building },
    { label: 'Success Rate', value: '98%', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '99%', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEOOptimizer
        title="Specialized Services - Zion Tech Group"
        description="Explore our cutting-edge specialized services including quantum computing, autonomous systems, blockchain solutions, and advanced robotics. Transform your business with next-generation technology."
        keywords={['specialized services', 'quantum computing', 'autonomous systems', 'blockchain', 'IoT', 'robotics', 'AR/VR', 'advanced analytics', 'enterprise integration']}
        canonicalUrl="https://ziontechgroup.com/specialized-services"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            Specialized Services
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Cutting-edge solutions for the most complex challenges. Our specialized services push the boundaries of what's possible with technology.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
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
              <div key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <service.icon className={`w-16 h-16 ${service.color} mx-auto mb-4`} />
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-lg font-bold text-cyan-400 mb-2">{service.price}</div>
                  <span className="bg-slate-800 text-cyan-400 px-3 py-1 rounded-full text-sm">
                    {service.category}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-pink-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="/contact" className="w-full cyber-button py-3 text-center font-semibold">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <industry.icon className={`w-12 h-12 ${industry.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Our Specialized Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="cyber-card p-6 text-center">
              <div className="w-12 h-12 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="text-lg font-bold text-white mb-2">Discovery</h3>
              <p className="text-gray-300 text-sm">Deep dive into your unique challenges and requirements</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="w-12 h-12 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="text-lg font-bold text-white mb-2">Design</h3>
              <p className="text-gray-300 text-sm">Create a custom solution architecture tailored to your needs</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="w-12 h-12 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="text-lg font-bold text-white mb-2">Develop</h3>
              <p className="text-gray-300 text-sm">Build and test your specialized solution with cutting-edge technology</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="w-12 h-12 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h3 className="text-lg font-bold text-white mb-2">Deploy</h3>
              <p className="text-gray-300 text-sm">Launch and optimize your solution with ongoing support</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Explore Specialized Solutions?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our specialized services can solve your most complex challenges and give you a competitive edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Schedule Consultation
              </a>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Call +1 302 464 0950
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