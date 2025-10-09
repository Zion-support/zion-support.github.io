'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, Users, Clock, Target, BarChart, Zap, Shield, Globe, Brain, Cpu, Database, Cloud, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Award, TrendingUp, Lock, Code, BarChart3, PieChart as PieChartIcon, LineChart, Activity as ActivityIcon, Target as TargetIcon, Users as UsersIcon, Clock as ClockIcon, Calendar as CalendarIcon, FileText as FileTextIcon, Settings as SettingsIcon, Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Navigation as NavigationIcon, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon, Zap as LightningIcon, Target as CrosshairIcon, Shield as SecurityIcon, Users as PeopleIcon, Star as StarIcon, CheckCircle as CheckIcon, ArrowRight as ArrowIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as LocationIcon, MessageSquare, HelpCircle, Headphones, Phone, Mail as MailIcon2, Send, Inbox, Archive, Trash2, Star as StarIcon2, Heart as HeartIcon2, Flag, Tag, Filter, Search as SearchIcon2, Plus, Minus, Edit3, Copy, Share2, Download, Upload, Eye, EyeOff, Lock as LockIcon, Unlock, Shield as ShieldIcon, AlertCircle, CheckCircle as CheckCircleIcon, X, Info, HelpCircle as HelpCircleIcon, Lightbulb, Bookmark, ExternalLink, Link, Calendar as CalendarIcon2, Clock as ClockIcon2, Users as UsersIcon2, Target as TargetIcon2, BarChart as BarChartIcon, TrendingUp as TrendingUpIcon, TrendingDown as TrendingDownIcon2, Activity as ActivityIcon2, Zap as ZapIcon, Brain as BrainIcon, Cpu as CpuIcon, Database as DatabaseIcon, Cloud as CloudIcon, Smartphone as SmartphoneIcon, Settings as SettingsIcon2, FileText as FileTextIcon2, Search as SearchIcon3, Bot as BotIcon2, Palette as PaletteIcon2, Camera as CameraIcon2, Music as MusicIcon2, Video as VideoIcon2, Gamepad2 as Gamepad2Icon2, ShoppingCart as ShoppingCartIcon2, CreditCard as CreditCardIcon2, Building as BuildingIcon2, Factory as FactoryIcon2, Car as CarIcon2, Plane as PlaneIcon2, Ship as ShipIcon2, Train as TrainIcon2, Home as HomeIcon2, Heart as HeartIcon3, Stethoscope as StethoscopeIcon2, GraduationCap as GraduationCapIcon2, Briefcase as BriefcaseIcon2, Wrench as WrenchIcon2, Hammer as HammerIcon2, Paintbrush as PaintbrushIcon2, Scissors as ScissorsIcon2, BookOpen as BookOpenIcon2, Calculator as CalculatorIcon2, Calendar as CalendarIcon3, Clock3 as Clock3Icon2, Compass as CompassIcon2, Navigation as NavigationIcon2, PieChart as PieChartIcon2, TrendingDown as TrendingDownIcon3, Activity as ActivityIcon3, Zap as LightningIcon2, Target as CrosshairIcon2, Shield as SecurityIcon2, Users as PeopleIcon2, Star as StarIcon3, CheckCircle as CheckIcon2, ArrowRight as ArrowIcon2, Phone as PhoneIcon2, Mail as MailIcon3, MapPin as LocationIcon2 } from 'lucide-react';

const AICustomerSupportBotPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for human-like conversations',
      benefits: ['Context understanding', 'Intent recognition', 'Sentiment analysis']
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Support',
      description: 'Support customers across all communication channels',
      benefits: ['Website chat', 'Social media', 'Email integration', 'Phone support']
    },
    {
      icon: Zap,
      title: 'Instant Responses',
      description: '24/7 instant responses with 99.9% uptime guarantee',
      benefits: ['Sub-second response time', 'Always available', 'Scalable infrastructure']
    },
    {
      icon: Target,
      title: 'Smart Routing',
      description: 'Intelligent ticket routing to the right human agent',
      benefits: ['Priority detection', 'Skill matching', 'Escalation management']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and performance insights',
      benefits: ['Response time tracking', 'Customer satisfaction', 'Issue resolution rates']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with GDPR and SOC 2 compliance',
      benefits: ['Data encryption', 'Privacy protection', 'Audit trails']
    }
  ];

  const integrations = [
    { name: 'Website', icon: '🌐', description: 'Embed on any website' },
    { name: 'Facebook', icon: '📘', description: 'Facebook Messenger integration' },
    { name: 'WhatsApp', icon: '💬', description: 'WhatsApp Business API' },
    { name: 'Slack', icon: '💼', description: 'Internal team communication' },
    { name: 'Zendesk', icon: '🎫', description: 'Ticket management system' },
    { name: 'Salesforce', icon: '☁️', description: 'CRM integration' },
    { name: 'Shopify', icon: '🛒', description: 'E-commerce platform' },
    { name: 'WordPress', icon: '📝', description: 'Content management system' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '1,000 conversations/month',
        'Basic AI features',
        'Website integration',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10,000 conversations/month',
        'Advanced AI features',
        'Multi-channel support',
        'Priority support',
        'API access',
        'Custom integrations',
        'Advanced analytics',
        'Team collaboration'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited conversations',
        'Full AI suite',
        'White-label options',
        '24/7 dedicated support',
        'Custom development',
        'Advanced security',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Lee',
      role: 'Customer Success Manager',
      company: 'TechCorp Solutions',
      content: 'AI Customer Support Bot has reduced our response time by 90% and increased customer satisfaction by 200%.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Brown',
      role: 'Operations Director',
      company: 'E-commerce Plus',
      content: 'The bot handles 80% of our customer inquiries automatically. Our team can now focus on complex issues.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Sarah Davis',
      role: 'CEO',
      company: 'StartupHub',
      content: 'The AI understanding is incredible. Customers can\'t tell they\'re talking to a bot most of the time.',
      rating: 5,
      avatar: '👩‍💻'
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      description: 'Handle product inquiries, order tracking, and returns with AI-powered support',
      benefits: ['90% faster responses', '80% issue resolution', '200% customer satisfaction']
    },
    {
      industry: 'SaaS',
      description: 'Provide technical support and onboarding assistance for software users',
      benefits: ['95% uptime', '85% self-service', '300% efficiency gain']
    },
    {
      industry: 'Healthcare',
      description: 'Answer patient questions and provide appointment scheduling assistance',
      benefits: ['100% HIPAA compliant', '90% accuracy', '150% patient satisfaction']
    },
    {
      industry: 'Finance',
      description: 'Handle account inquiries, transaction support, and fraud prevention',
      benefits: ['99.9% security', '95% compliance', '250% efficiency improvement']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 pt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Bot className="w-4 h-4" />
            <span>AI-Powered Customer Support</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            AI Customer Support Bot
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-400 mb-8 font-medium cyber-glow">
            Intelligent 24/7 Customer Support
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your customer support with AI-powered chatbots that provide instant, accurate responses. 
            Reduce response time by 90% and increase customer satisfaction by 200%.
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
              <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-gray-300">Faster Responses</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">200%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Seamless Integrations
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Connect with all your existing tools and platforms
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">{integration.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{integration.name}</h3>
              <div className="text-sm text-gray-400">{integration.description}</div>
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
            Leverage cutting-edge AI technology to provide exceptional customer support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">
                <feature.icon className="w-12 h-12 mx-auto text-purple-400" />
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
                    <div className="text-lg font-bold text-purple-400">{benefit}</div>
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
            Choose the plan that fits your customer support needs. All plans include our core AI features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'border-purple-400 border-2' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-purple-400 mb-2">
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
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
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
            Join thousands of satisfied customers who have transformed their customer support
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
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using AI Customer Support Bot to provide better service, 
            reduce costs, and increase customer satisfaction.
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

export default AICustomerSupportBotPage;