'use client';
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, PieChart, TrendingDown, Activity, FileCode, Shield as ShieldIcon, Clock as ClockIcon, Users as UsersIcon, Target as TargetIcon, BarChart as BarChartIcon, MessageSquare as MessageSquareIcon, Eye as EyeIcon, Sparkles as SparklesIcon, ArrowRight as ArrowRightIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, DollarSign as DollarSignIcon, Award as AwardIcon, Lock as LockIcon, Database as DatabaseIcon, Cloud as CloudIcon, Code as CodeIcon, Smartphone as SmartphoneIcon, Settings as SettingsIcon, BarChart3 as BarChart3Icon, FileText as FileTextIcon, Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Globe2 as Globe2Icon, Map as MapIcon, Navigation as NavIcon2, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon } from 'lucide-react';

const AiSmartContractsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Contract Generation',
      description: 'Generate smart contracts automatically using natural language descriptions with 99% accuracy',
      benefits: ['Natural language input', 'Automated code generation', 'Security validation', 'Gas optimization']
    },
    {
      icon: Shield,
      title: 'Security Auditing',
      description: 'AI-powered security analysis to identify vulnerabilities and ensure contract safety',
      benefits: ['Vulnerability detection', 'Security scoring', 'Best practices compliance', 'Risk assessment']
    },
    {
      icon: FileCode,
      title: 'Code Optimization',
      description: 'Automatically optimize smart contracts for gas efficiency and performance',
      benefits: ['Gas optimization', 'Performance tuning', 'Cost reduction', 'Efficiency analysis']
    },
    {
      icon: Target,
      title: 'DeFi Integration',
      description: 'Seamlessly integrate with DeFi protocols and create complex financial instruments',
      benefits: ['DeFi protocol support', 'Yield farming', 'Liquidity management', 'Trading automation']
    },
    {
      icon: Users,
      title: 'Multi-Chain Support',
      description: 'Deploy and manage smart contracts across multiple blockchain networks',
      benefits: ['Ethereum support', 'Polygon integration', 'BSC compatibility', 'Cross-chain functionality']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Monitoring',
      description: 'Comprehensive analytics and real-time monitoring of smart contract performance',
      benefits: ['Performance metrics', 'Transaction tracking', 'Cost analysis', 'Usage statistics']
    }
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$99/month',
      description: 'Perfect for individual developers and small projects',
      features: [
        'Up to 10 smart contracts',
        'Basic AI generation',
        'Security auditing',
        'Email support',
        'Ethereum deployment',
        'Basic analytics',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing businesses and DeFi projects',
      features: [
        'Up to 100 smart contracts',
        'Advanced AI features',
        'Multi-chain deployment',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799/month',
      description: 'Comprehensive solution for large enterprises and institutions',
      features: [
        'Unlimited smart contracts',
        'Full AI suite',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Custom integrations',
        'Compliance features',
        'Training & onboarding'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'DeFi Protocols',
      description: 'Create and deploy complex DeFi protocols with AI-powered smart contract generation',
      icon: DollarSign,
      benefits: ['Automated trading', 'Yield optimization', 'Liquidity management', 'Risk mitigation']
    },
    {
      title: 'NFT Marketplaces',
      description: 'Build secure and efficient NFT marketplaces with AI-optimized smart contracts',
      icon: Palette,
      benefits: ['Secure transactions', 'Gas optimization', 'Royalty management', 'Marketplace features']
    },
    {
      title: 'Supply Chain',
      description: 'Implement transparent and automated supply chain solutions using blockchain technology',
      icon: Truck,
      benefits: ['Transparency', 'Automation', 'Traceability', 'Compliance']
    },
    {
      title: 'Gaming & Metaverse',
      description: 'Create immersive gaming experiences and metaverse applications with smart contracts',
      icon: Gamepad2,
      benefits: ['In-game assets', 'Player rewards', 'Virtual economies', 'Cross-platform integration']
    }
  ];

  const benefits = [
    {
      metric: '90%',
      description: 'Faster Development',
      icon: Clock
    },
    {
      metric: '99%',
      description: 'Security Accuracy',
      icon: Shield
    },
    {
      metric: '60%',
      description: 'Gas Cost Reduction',
      icon: TrendingDown
    },
    {
      metric: '24/7',
      description: 'Automated Monitoring',
      icon: Activity
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Smart Contracts - Zion Tech Group"
        description="Generate, deploy, and manage smart contracts with AI-powered automation, security auditing, and multi-chain support."
        keywords={["AI smart contracts","blockchain development","DeFi protocols","smart contract security","blockchain automation","Web3 development"]}
        canonicalUrl="https://ziontechgroup.com/ai-smart-contracts"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileCode className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Smart Contracts
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Generate, deploy, and manage smart contracts with AI-powered automation, security auditing, and multi-chain support. 
              Build the future of Web3 with intelligent blockchain development.
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
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Smart Contracts platform delivers measurable improvements across all key metrics
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, deploy, and manage smart contracts efficiently
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
                      <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
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
            <h2 className="text-4xl font-bold text-white mb-4">Perfect For Every Use Case</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From DeFi to gaming, our AI Smart Contracts adapts to your specific blockchain needs
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
                      <CheckCircle className="w-4 h-4 mr-2 text-purple-400" />
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
              Choose the plan that fits your development needs and project scale
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
                      <CheckCircle className="w-5 h-5 mr-3 text-cyan-400" />
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
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Build the Future of Web3?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of developers already using AI Smart Contracts to build innovative blockchain solutions
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
              <Phone className="w-5 h-5" />
              +1 302 464 0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AiSmartContractsPage;