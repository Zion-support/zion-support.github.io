'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Share2, Mic, Wrench, Truck, Timer, PieChart, Activity, AlertCircle, Award, BookOpen, Briefcase, Building, ChevronRight, Download, Eye, Filter, GitBranch, Layers, Lightbulb, Maximize, Minimize, MoreHorizontal, Play, Pause, RefreshCw, Save, Search, Send, Settings2, Star as StarIcon, ThumbsUp, Trash2, Upload, User, Users2, Video, Volume2, Wifi, X, Zap as ZapIcon, Mail as MailIcon, Send as SendIcon, Target as TargetIcon, BarChart3, PieChart as PieChartIcon, Activity as ActivityIcon, Calendar as CalendarIcon, Clock as ClockIcon, Globe as GlobeIcon, Users as UsersIcon, Heart as HeartIcon, Share2 as Share2Icon, MessageCircle as MessageCircleIcon, Eye as EyeIcon, ThumbsUp as ThumbsUpIcon, Zap as ZapIcon2, Sparkles as SparklesIcon, Brain as BrainIcon, Cloud as CloudIcon, Code as CodeIcon, BarChart as BarChartIcon, Users as UsersIcon2, Zap as ZapIcon3, Shield as ShieldIcon, Globe as GlobeIcon2, Database as DatabaseIcon, Smartphone as SmartphoneIcon, Lock as LockIcon, TrendingUp as TrendingUpIcon2, Settings as SettingsIcon, Calendar as CalendarIcon2, CheckSquare as CheckSquareIcon, FileText as FileTextIcon, MessageCircle as MessageCircleIcon2, Heart as HeartIcon2, DollarSign as DollarSignIcon, Box as BoxIcon, Monitor as MonitorIcon, Link as LinkIcon2, Server as ServerIcon, Share2 as Share2Icon2, Mic as MicIcon, Wrench as WrenchIcon, Truck as TruckIcon, Mail as MailIcon2, Send as SendIcon2, Target as TargetIcon2, BarChart3 as BarChart3Icon, PieChart as PieChartIcon2, Activity as ActivityIcon2, Calendar as CalendarIcon3, Clock as ClockIcon2, Globe as GlobeIcon3, Users as UsersIcon3, Heart as HeartIcon3, Share2 as Share2Icon3, MessageCircle as MessageCircleIcon3, Eye as EyeIcon2, ThumbsUp as ThumbsUpIcon2, Zap as ZapIcon4, Sparkles as SparklesIcon2, Brain as BrainIcon2, Cloud as CloudIcon2, Code as CodeIcon2, BarChart as BarChartIcon2, Users as UsersIcon4, Zap as ZapIcon5, Shield as ShieldIcon2, Globe as GlobeIcon4, Database as DatabaseIcon2, Smartphone as SmartphoneIcon2, Lock as LockIcon2, TrendingUp as TrendingUpIcon3, Settings as SettingsIcon2, Calendar as CalendarIcon4, CheckSquare as CheckSquareIcon2, FileText as FileTextIcon2, MessageCircle as MessageCircleIcon4, Heart as HeartIcon4, DollarSign as DollarSignIcon2, Box as BoxIcon2, Monitor as MonitorIcon2, Link as LinkIcon3, Server as ServerIcon2, Share2 as Share2Icon4, Mic as MicIcon2, Wrench as WrenchIcon2, Truck as TruckIcon2 } from 'lucide-react';

const AIEmailMarketingAutomationPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate compelling email content, subject lines, and CTAs using advanced AI that understands your brand voice and audience preferences.',
      benefits: ['10x faster email creation', 'Personalized content', 'A/B testing automation', 'Multi-language support']
    },
    {
      icon: Target,
      title: 'Smart Segmentation',
      description: 'AI-powered audience segmentation that automatically groups subscribers based on behavior, preferences, and engagement patterns.',
      benefits: ['Dynamic segmentation', 'Behavioral triggers', 'Predictive analytics', 'Real-time updates']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive email marketing analytics with AI-powered insights, deliverability monitoring, and performance predictions.',
      benefits: ['Real-time performance tracking', 'Deliverability insights', 'Revenue attribution', 'Predictive analytics']
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Create sophisticated email automation workflows with AI-powered triggers, timing optimization, and personalization.',
      benefits: ['Smart trigger detection', 'Optimal send times', 'Personalized journeys', 'Cross-channel integration']
    },
    {
      icon: Users,
      title: 'Audience Intelligence',
      description: 'Deep audience analysis and insights to create highly targeted campaigns that drive engagement and conversions.',
      benefits: ['Demographic analysis', 'Engagement patterns', 'Content preferences', 'Churn prediction']
    },
    {
      icon: Shield,
      title: 'Deliverability Optimization',
      description: 'AI-powered deliverability optimization to ensure your emails reach the inbox and avoid spam filters.',
      benefits: ['Spam score optimization', 'Sender reputation monitoring', 'IP warming automation', 'Compliance checking']
    }
  ];

  const automationTypes = [
    {
      name: 'Welcome Series',
      description: 'Automated welcome emails for new subscribers',
      icon: Mail,
      color: 'text-blue-400',
      benefits: ['Increased engagement', 'Brand introduction', 'Value delivery']
    },
    {
      name: 'Abandoned Cart',
      description: 'Recover lost sales with smart cart abandonment emails',
      icon: ShoppingCart,
      color: 'text-green-400',
      benefits: ['Higher conversion rates', 'Revenue recovery', 'Personalized offers']
    },
    {
      name: 'Re-engagement',
      description: 'Win back inactive subscribers with targeted campaigns',
      icon: RefreshCw,
      color: 'text-orange-400',
      benefits: ['Reduced churn', 'List health improvement', 'Revenue recovery']
    },
    {
      name: 'Birthday Campaigns',
      description: 'Personalized birthday and anniversary emails',
      icon: Gift,
      color: 'text-pink-400',
      benefits: ['Personal touch', 'Increased loyalty', 'Special offers']
    },
    {
      name: 'Post-Purchase',
      description: 'Follow-up emails after purchase completion',
      icon: CheckCircle,
      color: 'text-purple-400',
      benefits: ['Customer satisfaction', 'Upselling opportunities', 'Feedback collection']
    },
    {
      name: 'Educational Series',
      description: 'Nurture leads with educational content',
      icon: BookOpen,
      color: 'text-cyan-400',
      benefits: ['Lead nurturing', 'Authority building', 'Trust establishment']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5,000 subscribers',
        'Basic AI content generation',
        'Standard automation',
        'Email support',
        'Basic analytics',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25,000 subscribers',
        'Advanced AI features',
        'Advanced automation',
        'Priority support',
        'Advanced analytics',
        'A/B testing',
        'White-label options',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited subscribers',
        'Full AI suite',
        'Custom automation',
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
      name: 'Jennifer Lee',
      role: 'Marketing Manager',
      company: 'E-commerce Plus',
      content: 'AI Email Marketing Automation has increased our open rates by 45% and click-through rates by 60%. The AI content suggestions are incredibly effective!',
      rating: 5,
      avatar: 'JL'
    },
    {
      name: 'Mark Rodriguez',
      role: 'Founder',
      company: 'SaaS Startup',
      content: 'The automated workflows and smart segmentation have transformed our email marketing. We now generate 3x more revenue from email campaigns.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Lisa Chen',
      role: 'Email Marketing Specialist',
      company: 'Digital Agency',
      content: 'Managing multiple client campaigns used to be overwhelming. Now with AI automation, we can focus on strategy while the AI handles execution.',
      rating: 5,
      avatar: 'LC'
    }
  ];

  const stats = [
    { number: '2M+', label: 'Emails Sent', icon: Send },
    { number: '45%', label: 'Open Rate Increase', icon: Eye },
    { number: '60%', label: 'Click Rate Increase', icon: MousePointer },
    { number: '300%', label: 'Revenue Growth', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-purple-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8 animate-fade-in">
                <Mail className="w-4 h-4 mr-2 animate-spin" />
                AI-Powered Email Marketing Automation
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-slide-up">
                AI Email Marketing
                <span className="block bg-gradient-to-r from-green-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                  Automation Pro
                </span>
              </h1>
              <p className="text-gray-300 mb-8 text-center leading-relaxed text-lg max-w-4xl mx-auto animate-fade-in delay-200">
                Transform your email marketing with AI-powered content generation, smart automation, and advanced analytics. 
                Increase open rates by 45% and click-through rates by 60%.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up delay-300">
              <a 
                href="tel:+13024640950" 
                className="group bg-gradient-to-r from-green-500 to-purple-600 hover:from-green-600 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 text-center shadow-2xl hover:shadow-green-500/25"
                aria-label="Call us at +1 302 464 0950"
              >
                <span className="flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="group border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 text-center hover:shadow-2xl hover:shadow-green-500/25"
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
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Automation Types
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Powerful automation workflows designed to engage your audience at every stage of their journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationTypes.map((type, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-gray-600">
                  <type.icon className={`w-10 h-10 ${type.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{type.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{type.description}</p>
                <ul className="space-y-1">
                  {type.benefits.map((benefit, idx) => (
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
              Leverage cutting-edge artificial intelligence to revolutionize your email marketing campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-green-500/10 to-purple-500/10 rounded-xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              Flexible pricing options designed to scale with your email marketing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-green-500/10 to-purple-500/10 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-green-500/40 scale-105 shadow-2xl shadow-green-500/25' 
                  : 'border-green-500/20 hover:border-green-500/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-green-400">{plan.price}</span>
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
                    ? 'bg-gradient-to-r from-green-500 to-purple-600 text-white hover:from-green-600 hover:to-purple-700'
                    : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
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
              Join thousands of satisfied customers who have transformed their email marketing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-green-500/20">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-400 font-bold">{testimonial.avatar}</span>
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
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI-driven email marketing automation. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-green-500 to-purple-600 hover:from-green-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              aria-label="Call us at +1 302 464 0950"
            >
              Start Free Trial
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center"
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

export default AIEmailMarketingAutomationPage;