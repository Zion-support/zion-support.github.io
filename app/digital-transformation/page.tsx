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
  DollarSign,
  Clock,
  Target,
  Rocket,
  Award,
  Settings,
  Monitor,
  Smartphone as PhoneIcon,
  Laptop,
  Server,
  Wifi as WifiIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Database as DatabaseIcon,
  BarChart3 as ChartIcon,
  MessageSquare as MessageIcon,
  FileText as FileIcon,
  Camera as CameraIcon,
  Mail as MailIcon,
  Phone as PhoneCallIcon,
  MapPin as MapIcon,
  DollarSign as DollarIcon,
  Clock as ClockIcon,
  Target as TargetIcon,
  Rocket as RocketIcon,
  Award as AwardIcon,
  Settings as SettingsIcon
} from 'lucide-react';

export default function DigitalTransformationPage() {
  const transformationServices = [
    {
      id: 'ai-integration',
      title: 'AI Integration & Automation',
      description: 'Transform your business processes with AI-powered automation and intelligent decision-making systems.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      price: 'Starting at $5,000/month',
      features: [
        'AI process automation',
        'Intelligent data analysis',
        'Predictive analytics',
        'Natural language processing',
        'Machine learning models',
        'Real-time decision support'
      ],
      benefits: [
        'Increase efficiency by 60%',
        'Reduce operational costs by 40%',
        'Improve decision accuracy',
        'Scale operations automatically'
      ],
      link: '/ai-integration',
      category: 'AI & Automation',
      popular: true
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration & Modernization',
      description: 'Seamlessly migrate your infrastructure to the cloud with modern architecture and optimization.',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      price: 'Starting at $3,000/month',
      features: [
        'Zero-downtime migration',
        'Application modernization',
        'Cloud-native architecture',
        'Performance optimization',
        'Cost optimization',
        'Security enhancement'
      ],
      benefits: [
        'Reduce infrastructure costs by 50%',
        'Improve scalability and performance',
        'Enhance security posture',
        'Enable remote work capabilities'
      ],
      link: '/cloud-migration',
      category: 'Cloud & Infrastructure'
    },
    {
      id: 'data-analytics',
      title: 'Advanced Data Analytics',
      description: 'Unlock insights from your data with advanced analytics, visualization, and business intelligence.',
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      price: 'Starting at $2,500/month',
      features: [
        'Real-time data processing',
        'Advanced visualization',
        'Predictive modeling',
        'Custom dashboards',
        'Data integration',
        'Automated reporting'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify new opportunities',
        'Improve operational efficiency',
        'Predict future trends'
      ],
      link: '/data-analytics',
      category: 'Data & Analytics'
    },
    {
      id: 'customer-experience',
      title: 'Customer Experience Transformation',
      description: 'Enhance customer interactions with AI-powered chatbots, personalization, and omnichannel solutions.',
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      price: 'Starting at $1,800/month',
      features: [
        'AI-powered chatbots',
        'Personalized experiences',
        'Omnichannel integration',
        'Customer journey mapping',
        'Sentiment analysis',
        'Automated support'
      ],
      benefits: [
        'Improve customer satisfaction by 45%',
        'Reduce support costs by 35%',
        'Increase customer retention',
        'Enable 24/7 support'
      ],
      link: '/customer-experience',
      category: 'Customer Experience',
      popular: true
    },
    {
      id: 'workplace-modernization',
      title: 'Workplace Modernization',
      description: 'Modernize your workplace with digital tools, collaboration platforms, and remote work solutions.',
      icon: <Users className="w-8 h-8 text-orange-400" />,
      price: 'Starting at $1,200/month',
      features: [
        'Digital collaboration tools',
        'Remote work solutions',
        'Employee engagement platforms',
        'Digital training systems',
        'Performance management',
        'Communication tools'
      ],
      benefits: [
        'Improve employee productivity',
        'Enable flexible work arrangements',
        'Enhance team collaboration',
        'Reduce operational overhead'
      ],
      link: '/workplace-modernization',
      category: 'Workplace & HR'
    },
    {
      id: 'security-transformation',
      title: 'Cybersecurity Transformation',
      description: 'Strengthen your security posture with advanced threat protection, compliance, and monitoring.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      price: 'Starting at $2,000/month',
      features: [
        'Advanced threat detection',
        'Zero-trust architecture',
        'Compliance management',
        'Security monitoring',
        'Incident response',
        'Security training'
      ],
      benefits: [
        'Protect against 99.9% of threats',
        'Meet compliance requirements',
        'Reduce security incidents',
        'Build security culture'
      ],
      link: '/security-transformation',
      category: 'Cybersecurity'
    }
  ];

  const transformationSteps = [
    {
      step: '01',
      title: 'Assessment & Strategy',
      description: 'Comprehensive analysis of your current state and development of a tailored transformation roadmap.',
      icon: <Target className="w-8 h-8 text-cyan-400" />
    },
    {
      step: '02',
      title: 'Planning & Design',
      description: 'Detailed planning and architecture design for your digital transformation initiatives.',
      icon: <Settings className="w-8 h-8 text-blue-400" />
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Phased implementation of digital solutions with minimal business disruption.',
      icon: <Rocket className="w-8 h-8 text-green-400" />
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring, optimization, and scaling of your digital solutions.',
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />
    }
  ];

  const stats = [
    { number: '200+', label: 'Successful Transformations', icon: <Rocket className="w-6 h-6" /> },
    { number: '85%', label: 'Average Cost Reduction', icon: <DollarSign className="w-6 h-6" /> },
    { number: '60%', label: 'Efficiency Improvement', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '99%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group | Complete Business Modernization</title>
        <meta name="description" content="Complete digital transformation services including AI integration, cloud migration, data analytics, and customer experience enhancement. Transform your business for the digital age." />
        <meta name="keywords" content="digital transformation, business modernization, ai integration, cloud migration, data analytics, zion tech group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Digital Transformation - Zion Tech Group" />
        <meta property="og:description" content="Complete digital transformation services including AI integration, cloud migration, and data analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/digital-transformation" />
        <meta property="og:image" content="https://ziontechgroup.com/og-digital-transformation.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Transformation - Zion Tech Group" />
        <meta name="twitter:description" content="Complete digital transformation services including AI integration, cloud migration, and data analytics." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-digital-transformation.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Digital Transformation
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your business for the digital age with our comprehensive modernization services and cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Process */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Transformation Process</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                A proven methodology for successful digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {transformationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Transformation Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive services to modernize every aspect of your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {transformationServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-cyan-400 font-semibold">{service.category}</span>
                    <span className="text-lg font-bold text-white">{service.price}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 border-2 border-white text-white px-4 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Start your digital transformation journey today with our expert team and proven methodology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Free Consultation
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}