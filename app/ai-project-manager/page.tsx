'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, Users, Clock, Target, BarChart, Zap, Shield, Globe, Brain, Cpu, Database, Cloud, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Award, TrendingUp, Lock, Code, BarChart3, PieChart as PieChartIcon, LineChart, Activity as ActivityIcon, Target as TargetIcon, Users as UsersIcon, Clock as ClockIcon, Calendar as CalendarIcon, FileText as FileTextIcon, Settings as SettingsIcon, Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Navigation as NavigationIcon, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon, Zap as LightningIcon, Target as CrosshairIcon, Shield as SecurityIcon, Users as PeopleIcon, Star as StarIcon, CheckCircle as CheckIcon, ArrowRight as ArrowIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as LocationIcon } from 'lucide-react';

const AIProjectManagerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with predictive analytics and resource optimization',
      benefits: ['Automated task prioritization', 'Resource allocation optimization', 'Risk prediction and mitigation']
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive project analytics with AI-driven insights and recommendations',
      benefits: ['Performance tracking', 'Budget monitoring', 'Timeline optimization']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Advanced team collaboration tools with AI-powered communication optimization',
      benefits: ['Smart task assignment', 'Communication optimization', 'Team performance insights']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Intelligent goal setting and tracking with automated progress monitoring',
      benefits: ['Smart milestone setting', 'Progress prediction', 'Achievement optimization']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'AI-powered risk assessment and mitigation strategies',
      benefits: ['Risk identification', 'Mitigation planning', 'Contingency management']
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Automated project management workflows and intelligent decision making',
      benefits: ['Workflow automation', 'Decision support', 'Process optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small teams and individual projects',
      features: [
        'Up to 5 projects',
        '10 team members',
        'Basic AI insights',
        'Standard templates',
        'Email support',
        'Mobile app access'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and complex projects',
      features: [
        'Unlimited projects',
        '50 team members',
        'Advanced AI analytics',
        'Custom templates',
        'Priority support',
        'API access',
        'Advanced integrations',
        'Custom reporting'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations with complex project needs',
      features: [
        'Unlimited everything',
        'Unlimited team members',
        'AI-powered insights',
        'Custom development',
        '24/7 dedicated support',
        'Advanced security',
        'White-label options',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Director',
      company: 'TechCorp Solutions',
      content: 'AI Project Manager has revolutionized how we handle complex projects. The AI insights have helped us reduce project delays by 40%.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'InnovateLabs',
      content: 'The automation features are incredible. We\'ve seen a 60% improvement in project delivery times since implementing this solution.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Manager',
      company: 'Global Dynamics',
      content: 'The risk management capabilities have saved us from multiple potential disasters. The AI predictions are remarkably accurate.',
      rating: 5,
      avatar: '👩‍🔬'
    }
  ];

  const useCases = [
    {
      industry: 'Software Development',
      description: 'Manage complex software projects with AI-powered sprint planning and resource allocation',
      benefits: ['40% faster delivery', '30% cost reduction', '95% on-time completion']
    },
    {
      industry: 'Construction',
      description: 'Optimize construction projects with intelligent scheduling and risk management',
      benefits: ['25% time savings', '20% cost reduction', '99% safety compliance']
    },
    {
      industry: 'Marketing',
      description: 'Streamline marketing campaigns with AI-driven planning and performance optimization',
      benefits: ['50% better ROI', '35% faster execution', '90% goal achievement']
    },
    {
      industry: 'Healthcare',
      description: 'Manage healthcare projects with compliance tracking and resource optimization',
      benefits: ['100% compliance', '45% efficiency gain', '60% cost savings']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 pt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            <span>AI-Powered Project Management</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            AI Project Manager
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Intelligent Project Management Platform
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your project management with AI-powered insights, automated workflows, and intelligent resource allocation. 
            Achieve 40% faster delivery times and 60% cost reduction with our advanced AI project management platform.
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
              Get Free Demo
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Faster Delivery</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">60%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">On-Time Completion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Powerful AI Features
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Leverage cutting-edge AI technology to optimize every aspect of your project management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">
                <feature.icon className="w-12 h-12 mx-auto text-cyan-400" />
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
            Proven results across multiple industries and project types
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="text-center">
                    <div className="text-lg font-bold text-cyan-400">{benefit}</div>
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core AI features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'border-cyan-400 border-2' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
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
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
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
            Join thousands of satisfied customers who have transformed their project management
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
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of teams already using AI Project Manager to achieve better results, 
            faster delivery, and significant cost savings.
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
              Get Free Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIProjectManagerPage;