'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, Users, Clock, Target, BarChart, Zap, Shield, Globe, Brain, Cpu, Database, Cloud, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Award, TrendingUp, Lock, Code, BarChart3, PieChart as PieChartIcon, LineChart, Activity as ActivityIcon, Target as TargetIcon, Users as UsersIcon, Clock as ClockIcon, Calendar as CalendarIcon, FileText as FileTextIcon, Settings as SettingsIcon, Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Navigation as NavigationIcon, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon, Zap as LightningIcon, Target as CrosshairIcon, Shield as SecurityIcon, Users as PeopleIcon, Star as StarIcon, CheckCircle as CheckIcon, ArrowRight as ArrowIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as LocationIcon, Server, Network, HardDrive, Cpu as CpuIcon, MemoryStick, Router, Wifi, Ethernet, Database as DatabaseIcon, Cloud as CloudIcon, Shield as ShieldIcon, Lock as LockIcon, Key, Eye, EyeOff, AlertTriangle, CheckCircle as CheckCircleIcon, X, Info, HelpCircle, Lightbulb, Bookmark, Flag, Tag, User, UserPlus, UserMinus, UserCheck, UserX, Users as UsersIcon2, UserCircle, UserCheck2, UserPlus2, UserMinus2, UserX2, Users2, UserCircle2, UserCheck3, UserPlus3, UserMinus3, UserX3, Users3, UserCircle3, UserCheck4, UserPlus4, UserMinus4, UserX4, Users4, UserCircle4, UserCheck5, UserPlus5, UserMinus5, UserX5, Users5, UserCircle5, UserCheck6, UserPlus6, UserMinus6, UserX6, Users6, UserCircle6, UserCheck7, UserPlus7, UserMinus7, UserX7, Users7, UserCircle7, UserCheck8, UserPlus8, UserMinus8, UserX8, Users8, UserCircle8, UserCheck9, UserPlus9, UserMinus9, UserX9, Users9, UserCircle9, UserCheck10, UserPlus10, UserMinus10, UserX10, Users10, UserCircle10 } from 'lucide-react';

const ITInfrastructurePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server infrastructure management and optimization',
      benefits: ['24/7 monitoring', 'Performance optimization', 'Hardware maintenance', 'Backup solutions']
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Enterprise-grade network design, implementation, and management',
      benefits: ['Network design', 'Security implementation', 'Performance tuning', 'Disaster recovery']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Hybrid and multi-cloud infrastructure solutions',
      benefits: ['Cloud migration', 'Multi-cloud management', 'Cost optimization', 'Security compliance']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance services',
      benefits: ['Database design', 'Performance tuning', 'Backup strategies', 'Security hardening']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Comprehensive security solutions and compliance management',
      benefits: ['Security audits', 'Compliance monitoring', 'Threat detection', 'Incident response']
    },
    {
      icon: Zap,
      title: 'Automation & DevOps',
      description: 'Infrastructure automation and DevOps implementation',
      benefits: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring automation', 'Deployment automation']
    }
  ];

  const infrastructureTypes = [
    { name: 'On-Premise', icon: '🏢', description: 'Traditional data center solutions', uptime: '99.9%' },
    { name: 'Cloud', icon: '☁️', description: 'Public cloud infrastructure', uptime: '99.95%' },
    { name: 'Hybrid', icon: '🔗', description: 'Mixed on-premise and cloud', uptime: '99.99%' },
    { name: 'Edge', icon: '🌐', description: 'Edge computing solutions', uptime: '99.8%' },
    { name: 'Private Cloud', icon: '🔒', description: 'Dedicated cloud infrastructure', uptime: '99.99%' },
    { name: 'Multi-Cloud', icon: '☁️☁️', description: 'Multiple cloud providers', uptime: '99.99%' }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 10 servers',
        'Basic monitoring',
        'Email support',
        'Standard security',
        'Monthly reports',
        'Backup solutions'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing businesses and mid-size companies',
      features: [
        'Up to 50 servers',
        'Advanced monitoring',
        'Priority support',
        'Advanced security',
        'Weekly reports',
        'Disaster recovery',
        'Cloud integration',
        '24/7 monitoring'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For large organizations with complex infrastructure needs',
      features: [
        'Unlimited servers',
        'Full monitoring suite',
        '24/7 dedicated support',
        'Enterprise security',
        'Real-time reports',
        'Complete disaster recovery',
        'Multi-cloud management',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Robert Johnson',
      role: 'CTO',
      company: 'TechCorp Solutions',
      content: 'IT Infrastructure services have transformed our operations. We\'ve achieved 99.99% uptime and reduced costs by 40%.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Maria Garcia',
      role: 'IT Director',
      company: 'Global Dynamics',
      content: 'The cloud migration was seamless. Our infrastructure is now more scalable and secure than ever before.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'StartupHub',
      content: 'The automation and DevOps implementation has increased our deployment speed by 500%. Highly recommended.',
      rating: 5,
      avatar: '👨‍💻'
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      description: 'HIPAA-compliant infrastructure with high availability and security',
      benefits: ['99.99% uptime', 'HIPAA compliance', '40% cost reduction', '95% security improvement']
    },
    {
      industry: 'Finance',
      description: 'PCI DSS compliant infrastructure with advanced security and monitoring',
      benefits: ['99.99% uptime', 'PCI DSS compliance', '50% performance improvement', '99% security compliance']
    },
    {
      industry: 'E-commerce',
      description: 'Scalable infrastructure to handle traffic spikes and high availability',
      benefits: ['99.95% uptime', '300% scalability', '60% faster load times', '90% cost optimization']
    },
    {
      industry: 'Manufacturing',
      description: 'Industrial-grade infrastructure with edge computing and IoT integration',
      benefits: ['99.9% uptime', '200% efficiency gain', '80% automation', '95% reliability']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 pt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Server className="w-4 h-4" />
            <span>Enterprise IT Infrastructure</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            IT Infrastructure
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-400 mb-8 font-medium cyber-glow">
            Enterprise-Grade Infrastructure Solutions
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your IT infrastructure with enterprise-grade solutions, 99.99% uptime guarantee, 
            and 24/7 expert support. Reduce costs by 40% while improving performance and security.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.99%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Types Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Infrastructure Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive infrastructure solutions for every business need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {infrastructureTypes.map((infrastructure, index) => (
            <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">{infrastructure.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{infrastructure.name}</h3>
              <div className="text-sm text-gray-400 mb-1">{infrastructure.description}</div>
              <div className="text-sm text-blue-400">{infrastructure.uptime} uptime</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Comprehensive IT Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            End-to-end IT infrastructure solutions with enterprise-grade reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">
                <feature.icon className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4 text-center leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Industry Applications
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Proven results across multiple industries and business types
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">
                {useCase.industry}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {useCase.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="text-center">
                    <div className="text-lg font-bold text-blue-400">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Transparent Pricing
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your infrastructure needs. All plans include our core services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'border-blue-400 border-2' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.cta === 'Contact Sales' ? 'mailto:kleber@ziontechgroup.com' : 'tel:+13024640950'}
                className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                    : 'bg-slate-800 text-white hover:bg-slate-700 border border-gray-600'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have transformed their IT infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cyber-card p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="cyber-card p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses already using our IT Infrastructure services to achieve 
            better performance, security, and cost efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITInfrastructurePage;