'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, Users, Clock, Target, BarChart, Zap, Shield, Globe, Brain, Cpu, Database, Cloud, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Award, TrendingUp, Lock, Code, BarChart3, PieChart as PieChartIcon, LineChart, Activity as ActivityIcon, Target as TargetIcon, Users as UsersIcon, Clock as ClockIcon, Calendar as CalendarIcon, FileText as FileTextIcon, Settings as SettingsIcon, Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Navigation as NavigationIcon, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon, Zap as LightningIcon, Target as CrosshairIcon, Shield as SecurityIcon, Users as PeopleIcon, Star as StarIcon, CheckCircle as CheckIcon, ArrowRight as ArrowIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as LocationIcon, Mail as MailIcon2, Send, Inbox, Archive, Trash2, Star as StarIcon2, Heart as HeartIcon2, Flag, Tag, Filter, Search as SearchIcon2, Plus, Minus, Edit3, Copy, Share2, Download, Upload, Eye, EyeOff, Lock as LockIcon, Unlock, Shield as ShieldIcon, AlertCircle, CheckCircle as CheckCircleIcon, X, Info, HelpCircle, Lightbulb, Bookmark, ExternalLink, Link, Calendar as CalendarIcon2, Clock as ClockIcon2, Users as UsersIcon2, Target as TargetIcon2, BarChart as BarChartIcon, TrendingUp as TrendingUpIcon, TrendingDown as TrendingDownIcon2, Activity as ActivityIcon2, Zap as ZapIcon, Brain as BrainIcon, Cpu as CpuIcon, Database as DatabaseIcon, Cloud as CloudIcon, Smartphone as SmartphoneIcon, Settings as SettingsIcon2, FileText as FileTextIcon2, Search as SearchIcon3, Bot as BotIcon2, Palette as PaletteIcon2, Camera as CameraIcon2, Music as MusicIcon2, Video as VideoIcon2, Gamepad2 as Gamepad2Icon2, ShoppingCart as ShoppingCartIcon2, CreditCard as CreditCardIcon2, Building as BuildingIcon2, Factory as FactoryIcon2, Car as CarIcon2, Plane as PlaneIcon2, Ship as ShipIcon2, Train as TrainIcon2, Home as HomeIcon2, Heart as HeartIcon3, Stethoscope as StethoscopeIcon2, GraduationCap as GraduationCapIcon2, Briefcase as BriefcaseIcon2, Wrench as WrenchIcon2, Hammer as HammerIcon2, Paintbrush as PaintbrushIcon2, Scissors as ScissorsIcon2, BookOpen as BookOpenIcon2, Calculator as CalculatorIcon2, Calendar as CalendarIcon3, Clock3 as Clock3Icon2, Compass as CompassIcon2, Navigation as NavigationIcon2, PieChart as PieChartIcon2, TrendingDown as TrendingDownIcon3, Activity as ActivityIcon3, Zap as LightningIcon2, Target as CrosshairIcon2, Shield as SecurityIcon2, Users as PeopleIcon2, Star as StarIcon3, CheckCircle as CheckIcon2, ArrowRight as ArrowIcon2, Phone as PhoneIcon2, Mail as MailIcon3, MapPin as LocationIcon2 } from 'lucide-react';

const AIEmailMarketingPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate compelling email content using advanced AI algorithms',
      benefits: ['Personalized subject lines', 'Dynamic content creation', 'A/B testing optimization']
    },
    {
      icon: Target,
      title: 'Smart Segmentation',
      description: 'AI-powered audience segmentation for maximum engagement',
      benefits: ['Behavioral targeting', 'Demographic analysis', 'Predictive segmentation']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive email marketing analytics with AI insights',
      benefits: ['Open rate optimization', 'Click-through analysis', 'Conversion tracking']
    },
    {
      icon: Clock,
      title: 'Optimal Timing',
      description: 'AI-determined best sending times for each subscriber',
      benefits: ['Send time optimization', 'Timezone intelligence', 'Engagement prediction']
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Intelligent email automation with AI decision making',
      benefits: ['Drip campaigns', 'Triggered emails', 'Behavioral automation']
    },
    {
      icon: Shield,
      title: 'Deliverability',
      description: 'AI-powered deliverability optimization and reputation management',
      benefits: ['Spam score reduction', 'Reputation monitoring', 'Inbox placement']
    }
  ];

  const emailTypes = [
    { name: 'Welcome Series', icon: '👋', description: 'Onboard new subscribers', openRate: '45%' },
    { name: 'Newsletter', icon: '📰', description: 'Regular updates', openRate: '25%' },
    { name: 'Promotional', icon: '🎯', description: 'Sales and offers', openRate: '20%' },
    { name: 'Transactional', icon: '📧', description: 'Order confirmations', openRate: '60%' },
    { name: 'Re-engagement', icon: '🔄', description: 'Win back customers', openRate: '15%' },
    { name: 'Abandoned Cart', icon: '🛒', description: 'Recover lost sales', openRate: '35%' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '5,000 subscribers',
        'Unlimited emails',
        'Basic AI features',
        'Email templates',
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
      description: 'Ideal for growing businesses and agencies',
      features: [
        '25,000 subscribers',
        'Unlimited emails',
        'Advanced AI features',
        'Custom templates',
        'Priority support',
        'API access',
        'A/B testing',
        'Advanced analytics'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited subscribers',
        'Unlimited emails',
        'Full AI suite',
        'White-label options',
        '24/7 dedicated support',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced security'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Marketing Manager',
      company: 'E-commerce Plus',
      content: 'AI Email Marketing has increased our open rates by 180% and our revenue by 250%. The AI insights are game-changing.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'John Smith',
      role: 'CEO',
      company: 'TechStart Solutions',
      content: 'The automation features have saved us 15 hours per week. Our email campaigns are now fully optimized.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      role: 'Digital Marketing Director',
      company: 'Growth Agency',
      content: 'The AI content generation is incredible. We\'ve seen a 300% improvement in engagement rates.',
      rating: 5,
      avatar: '👩‍🎨'
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      description: 'Boost sales with AI-optimized email campaigns and personalized product recommendations',
      benefits: ['250% increase in sales', '180% higher open rates', '90% automation efficiency']
    },
    {
      industry: 'SaaS',
      description: 'Improve user engagement and reduce churn with intelligent email sequences',
      benefits: ['300% better retention', '220% more activations', '85% churn reduction']
    },
    {
      industry: 'Real Estate',
      description: 'Generate leads and nurture prospects with AI-powered email marketing',
      benefits: ['400% more leads', '280% better conversion', '95% lead quality']
    },
    {
      industry: 'Healthcare',
      description: 'Engage patients and improve outcomes with personalized healthcare communications',
      benefits: ['150% better engagement', '200% appointment rates', '90% patient satisfaction']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 pt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            <span>AI-Powered Email Marketing</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            AI Email Marketing
          </h1>
          
          <p className="text-xl md:text-2xl text-green-400 mb-8 font-medium cyber-glow">
            Intelligent Email Marketing Platform
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your email marketing with AI-powered content generation, smart segmentation, 
            and advanced automation. Increase open rates by 180% and revenue by 250%.
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
              <div className="text-3xl font-bold text-green-400 mb-2">180%</div>
              <div className="text-gray-300">Higher Open Rates</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">250%</div>
              <div className="text-gray-300">Revenue Increase</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">90%</div>
              <div className="text-gray-300">Automation Efficiency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Types Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            All Email Types Supported
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Create and optimize every type of email campaign with AI-powered insights
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {emailTypes.map((emailType, index) => (
            <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">{emailType.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{emailType.name}</h3>
              <div className="text-sm text-gray-400 mb-1">{emailType.description}</div>
              <div className="text-sm text-green-400">{emailType.openRate} avg open rate</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Powerful AI Features
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Leverage cutting-edge AI technology to optimize your email marketing strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">
                <feature.icon className="w-12 h-12 mx-auto text-green-400" />
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="text-center">
                    <div className="text-lg font-bold text-green-400">{benefit}</div>
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
            Choose the plan that fits your email marketing needs. All plans include our core AI features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'border-green-400 border-2' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">
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
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
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
            Join thousands of satisfied customers who have transformed their email marketing
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
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using AI Email Marketing to increase engagement, 
            boost revenue, and automate their campaigns.
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

export default AIEmailMarketingPage;