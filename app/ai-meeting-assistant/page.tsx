'use client';
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, PieChart, TrendingDown, Activity, Mic, Headphones, Video as VideoIcon, Calendar as CalendarIcon, Users as UsersIcon, FileText as FileTextIcon, CheckCircle as CheckCircleIcon, Zap as ZapIcon, Shield as ShieldIcon, Clock as ClockIcon, BarChart as BarChartIcon, MessageSquare as MessageSquareIcon, Eye as EyeIcon, Sparkles as SparklesIcon, ArrowRight as ArrowRightIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, DollarSign as DollarSignIcon, Award as AwardIcon, Lock as LockIcon, Database as DatabaseIcon, Cloud as CloudIcon, Code as CodeIcon, Smartphone as SmartphoneIcon, Settings as SettingsIcon, BarChart3 as BarChart3Icon, FileText as FileTextIcon2, Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon2, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon2, Clock3 as Clock3Icon, Compass as CompassIcon, Globe2 as Globe2Icon, Map as MapIcon, Navigation as NavIcon2, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon } from 'lucide-react';

const AiMeetingAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'Real-time Transcription',
      description: 'Advanced AI-powered speech-to-text with 99.5% accuracy in multiple languages',
      benefits: ['Instant meeting transcripts', 'Multi-language support', 'Speaker identification', 'Real-time editing']
    },
    {
      icon: Brain,
      title: 'Intelligent Summarization',
      description: 'AI automatically generates meeting summaries, action items, and key decisions',
      benefits: ['Auto-generated summaries', 'Action item extraction', 'Decision tracking', 'Key point highlighting']
    },
    {
      icon: VideoIcon,
      title: 'Video Analysis',
      description: 'Analyze participant engagement, sentiment, and non-verbal cues during meetings',
      benefits: ['Engagement metrics', 'Sentiment analysis', 'Attention tracking', 'Body language insights']
    },
    {
      icon: CalendarIcon,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that finds optimal meeting times for all participants',
      benefits: ['Auto-scheduling', 'Time zone optimization', 'Conflict resolution', 'Calendar integration']
    },
    {
      icon: UsersIcon,
      title: 'Participant Management',
      description: 'Track attendance, participation levels, and follow-up requirements',
      benefits: ['Attendance tracking', 'Participation scoring', 'Follow-up reminders', 'Team analytics']
    },
    {
      icon: FileTextIcon,
      title: 'Document Generation',
      description: 'Automatically create meeting minutes, reports, and follow-up documents',
      benefits: ['Auto-generated minutes', 'Report templates', 'Action item lists', 'Decision logs']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29/month',
      description: 'Perfect for small teams and individual professionals',
      features: [
        'Up to 5 hours of meetings/month',
        'Real-time transcription',
        'Basic AI summaries',
        'Email support',
        'Standard integrations',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79/month',
      description: 'Ideal for growing teams and departments',
      features: [
        'Up to 20 hours of meetings/month',
        'Advanced AI analysis',
        'Video engagement tracking',
        'Custom templates',
        'Priority support',
        'Advanced integrations',
        'Team collaboration tools',
        'Export to multiple formats'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199/month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Unlimited meeting hours',
        'Full AI suite',
        'Custom AI training',
        'Advanced analytics',
        'Dedicated support',
        'API access',
        'Custom integrations',
        'White-label options',
        'Compliance features'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Corporate Meetings',
      description: 'Streamline board meetings, team standups, and client calls with intelligent automation',
      icon: BuildingIcon,
      benefits: ['Improved meeting efficiency', 'Better decision tracking', 'Enhanced collaboration']
    },
    {
      title: 'Remote Teams',
      description: 'Keep distributed teams connected with AI-powered meeting insights and follow-ups',
      icon: Globe2Icon,
      benefits: ['Remote collaboration', 'Time zone optimization', 'Cultural sensitivity']
    },
    {
      title: 'Client Meetings',
      description: 'Professional meeting documentation and follow-up for client interactions',
      icon: UsersIcon,
      benefits: ['Client satisfaction', 'Professional documentation', 'Follow-up automation']
    },
    {
      title: 'Training Sessions',
      description: 'Capture and analyze training effectiveness with detailed engagement metrics',
      icon: GraduationCapIcon,
      benefits: ['Training optimization', 'Engagement tracking', 'Knowledge retention']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Meeting Assistant - Zion Tech Group"
        description="Transform your meetings with AI-powered transcription, summarization, and intelligent insights. Boost productivity and collaboration."
        keywords={["AI meeting assistant","meeting transcription","meeting automation","virtual meetings","meeting analytics","AI scheduling"]}
        canonicalUrl="https://ziontechgroup.com/ai-meeting-assistant"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mic className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Meeting Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your meetings with AI-powered transcription, intelligent summarization, and actionable insights. 
              Never miss important details again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <PhoneIcon className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to make your meetings more productive and efficient
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-cyan-300">
                      <CheckCircleIcon className="w-4 h-4 mr-2 text-cyan-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Perfect For Every Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From small startups to large enterprises, our AI Meeting Assistant adapts to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-purple-400/20 rounded-xl p-8 hover:border-purple-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-purple-300">
                      <CheckCircleIcon className="w-4 h-4 mr-2 text-purple-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your team size and meeting volume
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                plan.popular 
                  ? 'border-cyan-400/60 ring-2 ring-cyan-400/20' 
                  : 'border-gray-600/50'
              } hover:border-cyan-400/40 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 mr-3 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Meetings?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of teams already using AI Meeting Assistant to boost productivity and collaboration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <PhoneIcon className="w-5 h-5" />
              +1 302 464 0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AiMeetingAssistantPage;