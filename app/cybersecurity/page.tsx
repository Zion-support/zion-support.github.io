'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, Users, Clock, Target, BarChart, Zap, Shield, Globe, Brain, Cpu, Database, Cloud, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Award, TrendingUp, Lock, Code, BarChart3, PieChart as PieChartIcon, LineChart, Activity as ActivityIcon, Target as TargetIcon, Users as UsersIcon, Clock as ClockIcon, Calendar as CalendarIcon, FileText as FileTextIcon, Settings as SettingsIcon, Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Navigation as NavigationIcon, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon, Zap as LightningIcon, Target as CrosshairIcon, Shield as SecurityIcon, Users as PeopleIcon, Star as StarIcon, CheckCircle as CheckIcon, ArrowRight as ArrowIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as LocationIcon, Shield as ShieldIcon, Lock as LockIcon, Eye, EyeOff, AlertTriangle, CheckCircle as CheckCircleIcon, X, Info, HelpCircle, Lightbulb, Bookmark, Flag, Tag, User, UserPlus, UserMinus, UserCheck, UserX, Users as UsersIcon2, UserCircle, UserCheck2, UserPlus2, UserMinus2, UserX2, Users2, UserCircle2, UserCheck3, UserPlus3, UserMinus3, UserX3, Users3, UserCircle3, UserCheck4, UserPlus4, UserMinus4, UserX4, Users4, UserCircle4, UserCheck5, UserPlus5, UserMinus5, UserX5, Users5, UserCircle5, UserCheck6, UserPlus6, UserMinus6, UserX6, Users6, UserCircle6, UserCheck7, UserPlus7, UserMinus7, UserX7, Users7, UserCircle7, UserCheck8, UserPlus8, UserMinus8, UserX8, Users8, UserCircle8, UserCheck9, UserPlus9, UserMinus9, UserX9, Users9, UserCircle9, UserCheck10, UserPlus10, UserMinus10, UserX10, Users10, UserCircle10, Key, Fingerprint, Smartphone as SmartphoneIcon, Laptop, Monitor, HardDrive, Wifi, Network, Server, Database as DatabaseIcon, Cloud as CloudIcon, Globe as GlobeIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Navigation as NavigationIcon, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon, Zap as LightningIcon, Target as CrosshairIcon, Shield as SecurityIcon, Users as PeopleIcon, Star as StarIcon, CheckCircle as CheckIcon, ArrowRight as ArrowIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as LocationIcon } from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Threat Detection',
      description: 'Advanced threat detection and response using AI and machine learning',
      benefits: ['Real-time monitoring', 'Behavioral analysis', 'Threat intelligence', 'Incident response']
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Comprehensive data encryption and protection solutions',
      benefits: ['End-to-end encryption', 'Data classification', 'Access controls', 'Backup security']
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and threat hunting services',
      benefits: ['SIEM implementation', 'Log analysis', 'Threat hunting', 'Security alerts']
    },
    {
      icon: Key,
      title: 'Identity Management',
      description: 'Advanced identity and access management solutions',
      benefits: ['Multi-factor authentication', 'Single sign-on', 'Privileged access', 'Identity governance']
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Network security architecture and implementation',
      benefits: ['Firewall management', 'Intrusion detection', 'VPN solutions', 'Network segmentation']
    },
    {
      icon: Zap,
      title: 'Compliance & Audit',
      description: 'Compliance management and security auditing services',
      benefits: ['GDPR compliance', 'SOC 2 certification', 'Security audits', 'Risk assessment']
    }
  ];

  const securityServices = [
    { name: 'Penetration Testing', icon: '🔍', description: 'Vulnerability assessment', coverage: '100%' },
    { name: 'Security Audit', icon: '📋', description: 'Comprehensive security review', coverage: '100%' },
    { name: 'Incident Response', icon: '🚨', description: '24/7 incident handling', coverage: '24/7' },
    { name: 'Security Training', icon: '🎓', description: 'Staff security education', coverage: 'Ongoing' },
    { name: 'Compliance', icon: '✅', description: 'Regulatory compliance', coverage: '100%' },
    { name: 'Risk Assessment', icon: '📊', description: 'Security risk analysis', coverage: '100%' }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$1,499',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic threat detection',
        'Email security',
        'Firewall management',
        'Monthly security reports',
        'Email support',
        'Basic compliance'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$3,999',
      period: '/month',
      description: 'Ideal for growing businesses and mid-size companies',
      features: [
        'Advanced threat detection',
        'Full security suite',
        '24/7 monitoring',
        'Weekly security reports',
        'Priority support',
        'Advanced compliance',
        'Incident response',
        'Security training'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$7,999',
      period: '/month',
      description: 'For large organizations with complex security needs',
      features: [
        'Complete security suite',
        'AI-powered threat detection',
        '24/7 dedicated support',
        'Real-time reporting',
        'Custom compliance',
        'Dedicated security team',
        'Advanced incident response',
        'White-label options'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CISO',
      company: 'Financial Services Inc',
      content: 'Cybersecurity services have protected us from multiple sophisticated attacks. Our security posture has improved by 95%.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'IT Director',
      company: 'Healthcare Systems',
      content: 'The compliance management has been invaluable. We achieved HIPAA compliance in record time with their expert guidance.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'David Rodriguez',
      role: 'CEO',
      company: 'E-commerce Plus',
      content: 'The incident response team saved us from a major data breach. Their quick response prevented millions in damages.',
      rating: 5,
      avatar: '👨‍💻'
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      description: 'HIPAA-compliant security solutions with patient data protection',
      benefits: ['100% HIPAA compliance', '99.9% threat prevention', '95% security improvement', '90% cost reduction']
    },
    {
      industry: 'Finance',
      description: 'PCI DSS compliant security with advanced fraud detection',
      benefits: ['100% PCI compliance', '99.99% fraud prevention', '98% security improvement', '85% cost reduction']
    },
    {
      industry: 'Government',
      description: 'FISMA compliant security with classified data protection',
      benefits: ['100% FISMA compliance', '99.99% data protection', '97% security improvement', '80% cost reduction']
    },
    {
      industry: 'E-commerce',
      description: 'Customer data protection with payment security and fraud prevention',
      benefits: ['99.9% fraud prevention', '95% data protection', '90% security improvement', '75% cost reduction']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 pt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Enterprise Cybersecurity</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            Cybersecurity
          </h1>
          
          <p className="text-xl md:text-2xl text-red-400 mb-8 font-medium cyber-glow">
            Advanced Security Solutions
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Protect your business with enterprise-grade cybersecurity solutions, advanced threat detection, 
            and 24/7 security monitoring. Achieve 99.9% threat prevention and 100% compliance.
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
              Get Free Security Audit
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
              <div className="text-gray-300">Threat Prevention</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-gray-300">Compliance Rate</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Security Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Comprehensive Security Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Complete cybersecurity solutions for every business need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {securityServices.map((service, index) => (
            <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
              <div className="text-sm text-gray-400 mb-1">{service.description}</div>
              <div className="text-sm text-red-400">{service.coverage} coverage</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Advanced Security Features
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade security solutions with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">
                <feature.icon className="w-12 h-12 mx-auto text-red-400" />
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
            Proven security solutions across multiple industries and compliance requirements
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
                    <div className="text-lg font-bold text-red-400">{benefit}</div>
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
            Choose the security plan that fits your business needs. All plans include our core security features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'border-red-400 border-2' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-red-400 mb-2">
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
                    ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700'
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
            Join hundreds of satisfied clients who have secured their business with our solutions
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
            Ready to Secure Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses already using our Cybersecurity services to protect their 
            data, comply with regulations, and prevent security breaches.
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
              Get Free Security Audit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityPage;