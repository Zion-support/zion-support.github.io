'use client';
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, PieChart, TrendingDown, Activity, Battery, Leaf, Sun, Wind, Droplets, Thermometer, Lightbulb, Zap as ZapIcon, Shield as ShieldIcon, Clock as ClockIcon, Users as UsersIcon, Target as TargetIcon, BarChart as BarChartIcon, MessageSquare as MessageSquareIcon, Eye as EyeIcon, Sparkles as SparklesIcon, ArrowRight as ArrowRightIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, DollarSign as DollarSignIcon, Award as AwardIcon, Lock as LockIcon, Database as DatabaseIcon, Cloud as CloudIcon, Code as CodeIcon, Smartphone as SmartphoneIcon, Settings as SettingsIcon, BarChart3 as BarChart3Icon, FileText as FileTextIcon, Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Globe2 as Globe2Icon, Map as MapIcon, Navigation as NavIcon2, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon } from 'lucide-react';

const AiEnergyOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Energy Forecasting',
      description: 'Predict energy consumption patterns with 95% accuracy using machine learning algorithms',
      benefits: ['Demand forecasting', 'Peak load prediction', 'Seasonal analysis', 'Weather correlation']
    },
    {
      icon: Battery,
      title: 'Smart Load Management',
      description: 'Intelligently distribute energy loads to optimize consumption and reduce costs',
      benefits: ['Load balancing', 'Peak shaving', 'Demand response', 'Grid optimization']
    },
    {
      icon: Leaf,
      title: 'Carbon Footprint Tracking',
      description: 'Monitor and reduce your carbon footprint with real-time emissions tracking',
      benefits: ['Real-time tracking', 'Emission reduction', 'Sustainability reporting', 'Green certification']
    },
    {
      icon: Sun,
      title: 'Renewable Integration',
      description: 'Optimize renewable energy sources and storage systems for maximum efficiency',
      benefits: ['Solar optimization', 'Wind integration', 'Battery management', 'Grid stability']
    },
    {
      icon: Thermometer,
      title: 'HVAC Optimization',
      description: 'AI-powered heating, ventilation, and air conditioning optimization',
      benefits: ['Temperature control', 'Energy efficiency', 'Comfort optimization', 'Maintenance alerts']
    },
    {
      icon: BarChart3,
      title: 'Energy Analytics',
      description: 'Comprehensive energy analytics and reporting for data-driven decisions',
      benefits: ['Usage analytics', 'Cost analysis', 'Efficiency metrics', 'Custom reports']
    }
  ];

  const pricingPlans = [
    {
      name: 'Residential',
      price: '$29/month',
      description: 'Perfect for homeowners and small properties',
      features: [
        'Up to 5 energy meters',
        'Basic AI optimization',
        'Mobile app access',
        'Email support',
        'Monthly reports',
        'Energy savings tracking',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Commercial',
      price: '$149/month',
      description: 'Ideal for small to medium businesses',
      features: [
        'Up to 50 energy meters',
        'Advanced AI analytics',
        'Real-time monitoring',
        'Priority support',
        'Custom dashboards',
        'API access',
        'Advanced integrations',
        'Carbon tracking'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399/month',
      description: 'Comprehensive solution for large facilities',
      features: [
        'Unlimited energy meters',
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
      title: 'Smart Buildings',
      description: 'Optimize energy consumption in commercial and residential buildings with AI-powered automation',
      icon: Building,
      benefits: ['Reduced energy costs', 'Improved comfort', 'Lower maintenance', 'Sustainability goals']
    },
    {
      title: 'Manufacturing',
      description: 'Optimize industrial energy consumption and reduce operational costs with intelligent monitoring',
      icon: Factory,
      benefits: ['Cost reduction', 'Process optimization', 'Equipment efficiency', 'Compliance reporting']
    },
    {
      title: 'Data Centers',
      description: 'Maximize energy efficiency in data centers with AI-powered cooling and power management',
      icon: Database,
      benefits: ['PUE optimization', 'Cooling efficiency', 'Power distribution', 'Uptime improvement']
    },
    {
      title: 'Renewable Energy',
      description: 'Optimize renewable energy systems and storage for maximum efficiency and grid integration',
      icon: Wind,
      benefits: ['Energy yield optimization', 'Grid integration', 'Storage management', 'Revenue maximization']
    }
  ];

  const benefits = [
    {
      metric: '30%',
      description: 'Average Energy Savings',
      icon: TrendingDown
    },
    {
      metric: '50%',
      description: 'Reduction in Peak Demand',
      icon: Zap
    },
    {
      metric: '25%',
      description: 'Lower Carbon Footprint',
      icon: Leaf
    },
    {
      metric: '18 months',
      description: 'Average Payback Period',
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Energy Optimizer - Zion Tech Group"
        description="Optimize energy consumption with AI-powered forecasting, smart load management, and renewable energy integration."
        keywords={["AI energy optimization","energy management","smart grid","renewable energy","carbon footprint","energy efficiency"]}
        canonicalUrl="https://ziontechgroup.com/ai-energy-optimizer"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Battery className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Energy Optimizer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize energy consumption with AI-powered forecasting, smart load management, and renewable energy integration. 
              Reduce costs, improve efficiency, and achieve sustainability goals.
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
              Our AI Energy Optimizer delivers measurable improvements across all key metrics
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
              Everything you need to optimize your energy consumption and reduce costs
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
            <h2 className="text-4xl font-bold text-white mb-4">Perfect For Every Industry</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From residential to industrial, our AI Energy Optimizer adapts to your specific needs
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
              Choose the plan that fits your property size and energy consumption
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
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your Energy Consumption?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using AI Energy Optimizer to reduce costs and improve sustainability
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

export default AiEnergyOptimizerPage;