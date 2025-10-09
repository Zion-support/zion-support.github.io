'use client';
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, PieChart, TrendingDown, Activity, Bot as BotIcon, Shield as ShieldIcon, Clock as ClockIcon, Users as UsersIcon, Target as TargetIcon, BarChart as BarChartIcon, MessageSquare as MessageSquareIcon, Eye as EyeIcon, Sparkles as SparklesIcon, ArrowRight as ArrowRightIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, DollarSign as DollarSignIcon, Award as AwardIcon, Lock as LockIcon, Database as DatabaseIcon, Cloud as CloudIcon, Code as CodeIcon, Smartphone as SmartphoneIcon, Settings as SettingsIcon, BarChart3 as BarChart3Icon, FileText as FileTextIcon, Search as SearchIcon, Bot as BotIcon2, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Globe2 as Globe2Icon, Map as MapIcon, Navigation as NavIcon2, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon } from 'lucide-react';

const AiRoboticsSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Robotics',
      description: 'Intelligent robots with advanced AI capabilities for autonomous operation and decision-making',
      benefits: ['Autonomous navigation', 'Object recognition', 'Predictive maintenance', 'Adaptive learning']
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced computer vision systems for object detection, tracking, and spatial awareness',
      benefits: ['Real-time processing', '3D mapping', 'Gesture recognition', 'Quality inspection']
    },
    {
      icon: Brain,
      title: 'Machine Learning Integration',
      description: 'Custom ML models for robot behavior optimization and continuous improvement',
      benefits: ['Behavioral learning', 'Performance optimization', 'Predictive analytics', 'Custom algorithms']
    },
    {
      icon: Settings,
      title: 'Robotic Process Automation',
      description: 'Automate complex workflows and processes with intelligent robotic systems',
      benefits: ['Workflow automation', 'Process optimization', 'Error reduction', 'Scalable operations']
    },
    {
      icon: Shield,
      title: 'Safety & Compliance',
      description: 'Advanced safety systems and compliance monitoring for secure robotic operations',
      benefits: ['Safety protocols', 'Compliance monitoring', 'Risk assessment', 'Emergency response']
    },
    {
      icon: Cloud,
      title: 'Cloud Robotics Platform',
      description: 'Scalable cloud-based platform for managing and monitoring robotic fleets',
      benefits: ['Fleet management', 'Remote monitoring', 'Data analytics', 'Scalable infrastructure']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,999/month',
      description: 'Perfect for small businesses and pilot projects',
      features: [
        'Up to 5 robots',
        'Basic AI capabilities',
        'Standard safety features',
        'Email support',
        'Basic monitoring',
        'Documentation',
        'Training materials'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999/month',
      description: 'Ideal for growing businesses and medium-scale operations',
      features: [
        'Up to 25 robots',
        'Advanced AI features',
        'Custom algorithms',
        'Priority support',
        'Advanced monitoring',
        'API access',
        'Custom integrations',
        'Dedicated support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$12,999/month',
      description: 'Comprehensive solution for large-scale robotic operations',
      features: [
        'Unlimited robots',
        'Full AI suite',
        'Custom development',
        'Dedicated support team',
        'White-label options',
        'Advanced security',
        'Custom integrations',
        'Compliance features',
        'On-site deployment'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Manufacturing Automation',
      description: 'Revolutionize manufacturing with intelligent robots for assembly, quality control, and logistics',
      icon: Factory,
      benefits: ['Increased productivity', 'Quality improvement', 'Cost reduction', '24/7 operations']
    },
    {
      title: 'Healthcare Robotics',
      description: 'Advanced robotic systems for surgery, patient care, and medical assistance',
      icon: Stethoscope,
      benefits: ['Surgical precision', 'Patient safety', 'Reduced recovery time', 'Medical innovation']
    },
    {
      title: 'Warehouse & Logistics',
      description: 'Automate warehouse operations with intelligent robots for picking, packing, and sorting',
      icon: Package,
      benefits: ['Faster fulfillment', 'Reduced errors', 'Lower costs', 'Scalable operations']
    },
    {
      title: 'Service Robotics',
      description: 'Intelligent service robots for hospitality, retail, and customer service applications',
      icon: Users,
      benefits: ['Enhanced customer experience', '24/7 availability', 'Consistent service', 'Cost efficiency']
    }
  ];

  const benefits = [
    {
      metric: '80%',
      description: 'Productivity Increase',
      icon: TrendingUp
    },
    {
      metric: '95%',
      description: 'Accuracy Rate',
      icon: Target
    },
    {
      metric: '60%',
      description: 'Cost Reduction',
      icon: DollarSign
    },
    {
      metric: '24/7',
      description: 'Continuous Operation',
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Robotics Solutions - Zion Tech Group"
        description="Transform your operations with AI-powered robotics solutions for manufacturing, healthcare, logistics, and service industries."
        keywords={["AI robotics","robotic automation","intelligent robots","manufacturing automation","healthcare robotics","service robots"]}
        canonicalUrl="https://ziontechgroup.com/ai-robotics-solutions"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bot className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Robotics Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your operations with AI-powered robotics solutions for manufacturing, healthcare, logistics, and service industries. 
              Unlock unprecedented efficiency and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Get Started
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
              Our AI Robotics Solutions deliver measurable improvements across all key metrics
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
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Robotics Technology</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build and deploy intelligent robotic systems
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
            <h2 className="text-4xl font-bold text-white mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your industry with intelligent robotic solutions
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
            <h2 className="text-4xl font-bold text-white mb-4">Flexible Pricing Options</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the robotics solution that fits your operational needs and budget
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
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the robotics revolution and unlock unprecedented efficiency and innovation for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            >
              Get Started
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

export default AiRoboticsSolutionsPage;