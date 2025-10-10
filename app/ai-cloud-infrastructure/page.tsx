'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Share2, Mic, Wrench, Truck, Timer, PieChart, Activity, AlertCircle, Award, BookOpen, Briefcase, Building, ChevronRight, Download, Eye, Filter, GitBranch, Layers, Lightbulb, Maximize, Minimize, MoreHorizontal, Play, Pause, RefreshCw, Save, Search, Send, Settings2, Star as StarIcon, ThumbsUp, Trash2, Upload, User, Users2, Video, Volume2, Wifi, X, Zap as ZapIcon, Cloud as CloudIcon, Server as ServerIcon, Database as DatabaseIcon, Shield as ShieldIcon, Lock as LockIcon, Globe as GlobeIcon, Users as UsersIcon, BarChart as BarChartIcon, TrendingUp as TrendingUpIcon, Settings as SettingsIcon, Calendar as CalendarIcon, CheckSquare as CheckSquareIcon, FileText as FileTextIcon, MessageCircle as MessageCircleIcon, Heart as HeartIcon, DollarSign as DollarSignIcon, Box as BoxIcon, Monitor as MonitorIcon, Link as LinkIcon2, Server as ServerIcon2, Share2 as Share2Icon, Mic as MicIcon, Wrench as WrenchIcon, Truck as TruckIcon, Timer as TimerIcon, PieChart as PieChartIcon, Activity as ActivityIcon, AlertCircle as AlertCircleIcon, Award as AwardIcon, BookOpen as BookOpenIcon, Briefcase as BriefcaseIcon, Building as BuildingIcon, ChevronRight as ChevronRightIcon, Download as DownloadIcon, Eye as EyeIcon, Filter as FilterIcon, GitBranch as GitBranchIcon, Layers as LayersIcon, Lightbulb as LightbulbIcon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, MoreHorizontal as MoreHorizontalIcon, Play as PlayIcon, Pause as PauseIcon, RefreshCw as RefreshCwIcon, Save as SaveIcon, Search as SearchIcon, Send as SendIcon, Settings2 as Settings2Icon, Star as StarIcon2, ThumbsUp as ThumbsUpIcon, Trash2 as Trash2Icon, Upload as UploadIcon, User as UserIcon, Users2 as Users2Icon, Video as VideoIcon, Volume2 as Volume2Icon, Wifi as WifiIcon, X as XIcon, Zap as ZapIcon2, Sparkles as SparklesIcon, Brain as BrainIcon, Cloud as CloudIcon2, Code as CodeIcon, BarChart as BarChartIcon2, Users as UsersIcon2, Zap as ZapIcon3, Shield as ShieldIcon2, Globe as GlobeIcon2, Database as DatabaseIcon2, Smartphone as SmartphoneIcon, Lock as LockIcon2, TrendingUp as TrendingUpIcon2, Settings as SettingsIcon2, Calendar as CalendarIcon2, CheckSquare as CheckSquareIcon2, FileText as FileTextIcon2, MessageCircle as MessageCircleIcon2, Heart as HeartIcon2, DollarSign as DollarSignIcon2, Box as BoxIcon2, Monitor as MonitorIcon2, Link as LinkIcon3, Server as ServerIcon3, Share2 as Share2Icon2, Mic as MicIcon2, Wrench as WrenchIcon2, Truck as TruckIcon2 } from 'lucide-react';

const AICloudInfrastructurePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Intelligent resource allocation, performance optimization, and cost management using machine learning algorithms.',
      benefits: ['40% cost reduction', '99.9% uptime guarantee', 'Auto-scaling', 'Predictive maintenance']
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Multi-layered security with AI-powered threat detection, encryption, and compliance management.',
      benefits: ['Real-time threat detection', 'Zero-trust architecture', 'Compliance automation', 'Data encryption']
    },
    {
      icon: Zap,
      title: 'Automated Management',
      description: 'Fully automated infrastructure management with self-healing capabilities and intelligent monitoring.',
      benefits: ['Self-healing systems', 'Automated backups', 'Disaster recovery', 'Performance monitoring']
    },
    {
      icon: Globe,
      title: 'Global Edge Network',
      description: 'Worldwide edge computing network with low-latency content delivery and global redundancy.',
      benefits: ['Global CDN', 'Edge computing', 'Low latency', 'Geographic redundancy']
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Comprehensive monitoring and analytics with AI-powered insights and predictive analytics.',
      benefits: ['Real-time monitoring', 'Predictive analytics', 'Performance insights', 'Cost optimization']
    },
    {
      icon: Users,
      title: '24/7 Expert Support',
      description: 'Round-the-clock support from cloud infrastructure experts and AI-powered assistance.',
      benefits: ['24/7 support', 'Expert guidance', 'AI assistance', 'Proactive monitoring']
    }
  ];

  const services = [
    {
      name: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure with zero downtime',
      icon: Cloud,
      color: 'text-blue-400',
      benefits: ['Zero downtime migration', 'Data integrity', 'Performance optimization', 'Cost analysis']
    },
    {
      name: 'Container Orchestration',
      description: 'Kubernetes and Docker management with AI optimization',
      icon: Box,
      color: 'text-green-400',
      benefits: ['Auto-scaling', 'Load balancing', 'Service discovery', 'Health monitoring']
    },
    {
      name: 'Database Management',
      description: 'AI-powered database optimization and management',
      icon: Database,
      color: 'text-purple-400',
      benefits: ['Performance tuning', 'Backup automation', 'Scaling', 'Security hardening']
    },
    {
      name: 'DevOps Automation',
      description: 'CI/CD pipelines and infrastructure as code',
      icon: Settings,
      color: 'text-orange-400',
      benefits: ['Automated deployments', 'Infrastructure as code', 'Testing automation', 'Rollback capabilities']
    },
    {
      name: 'Disaster Recovery',
      description: 'Comprehensive disaster recovery and business continuity',
      icon: Shield,
      color: 'text-red-400',
      benefits: ['Backup strategies', 'Recovery testing', 'RTO/RPO optimization', 'Geographic redundancy']
    },
    {
      name: 'Cost Optimization',
      description: 'AI-powered cost analysis and optimization recommendations',
      icon: DollarSign,
      color: 'text-yellow-400',
      benefits: ['Cost analysis', 'Resource optimization', 'Right-sizing', 'Reserved instances']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 servers',
        'Basic AI optimization',
        'Standard support',
        'Email support',
        'Basic monitoring',
        '99.9% uptime SLA'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25 servers',
        'Advanced AI features',
        'Priority support',
        '24/7 monitoring',
        'Advanced analytics',
        'Custom configurations',
        'White-label options',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited servers',
        'Full AI suite',
        'Custom solutions',
        '24/7 dedicated support',
        'Advanced security',
        'Custom AI training',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Williams',
      role: 'CTO',
      company: 'TechCorp Inc.',
      content: 'AI Cloud Infrastructure has reduced our operational costs by 40% while improving performance by 60%. The AI optimization is incredible!',
      rating: 5,
      avatar: 'SW'
    },
    {
      name: 'Michael Brown',
      role: 'DevOps Manager',
      company: 'StartupXYZ',
      content: 'The automated management and self-healing capabilities have eliminated 90% of our infrastructure issues. Highly recommended!',
      rating: 5,
      avatar: 'MB'
    },
    {
      name: 'Lisa Davis',
      role: 'IT Director',
      company: 'Global Solutions',
      content: 'The 24/7 support and AI-powered monitoring have given us peace of mind. Our infrastructure has never been more reliable.',
      rating: 5,
      avatar: 'LD'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime SLA', icon: Shield },
    { number: '40%', label: 'Cost Reduction', icon: DollarSign },
    { number: '60%', label: 'Performance Improvement', icon: TrendingUp },
    { number: '24/7', label: 'Expert Support', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
                <Cloud className="w-4 h-4 mr-2 animate-spin" />
                AI-Powered Cloud Infrastructure
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-slide-up">
                AI Cloud Infrastructure
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                  Pro
                </span>
              </h1>
              <p className="text-gray-300 mb-8 text-center leading-relaxed text-lg max-w-4xl mx-auto animate-fade-in delay-200">
                Transform your cloud infrastructure with AI-powered optimization, automated management, and intelligent monitoring. 
                Reduce costs by 40% and achieve 99.9% uptime with our advanced cloud solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up delay-300">
              <a 
                href="tel:+13024640950" 
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 text-center shadow-2xl hover:shadow-blue-500/25"
                aria-label="Call us at +1 302 464 0950"
              >
                <span className="flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 text-center hover:shadow-2xl hover:shadow-blue-500/25"
                aria-label="Email us at kleber@ziontechgroup.com"
              >
                <span className="flex items-center justify-center">
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in delay-500">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive cloud infrastructure services designed to optimize your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-gray-600">
                  <service.icon className={`w-10 h-10 ${service.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-xs text-gray-300">• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to optimize your cloud infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your cloud infrastructure needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-blue-500/40 scale-105 shadow-2xl shadow-blue-500/25' 
                  : 'border-blue-500/20 hover:border-blue-500/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                    : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their cloud infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-blue-500/20">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-400 font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Cloud Infrastructure?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI-driven cloud infrastructure. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              aria-label="Call us at +1 302 464 0950"
            >
              Start Free Trial
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center"
              aria-label="Email us at kleber@ziontechgroup.com"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICloudInfrastructurePage;