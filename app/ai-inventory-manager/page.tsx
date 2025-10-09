'use client';
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, PieChart, TrendingDown, Activity, Package, Truck, AlertTriangle, TrendingUp as TrendingUpIcon, BarChart as BarChartIcon, Settings as SettingsIcon, Database as DatabaseIcon, Shield as ShieldIcon, Clock as ClockIcon, Users as UsersIcon, Target as TargetIcon, BarChart3 as BarChart3Icon, FileText as FileTextIcon, Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Globe2 as Globe2Icon, Map as MapIcon, Navigation as NavIcon2, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon } from 'lucide-react';

const AiInventoryManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Demand Forecasting',
      description: 'Predict inventory needs with 95% accuracy using machine learning algorithms',
      benefits: ['Reduce stockouts by 80%', 'Minimize overstock by 60%', 'Optimize reorder points', 'Seasonal trend analysis']
    },
    {
      icon: Package,
      title: 'Smart Inventory Tracking',
      description: 'Real-time inventory monitoring with automated alerts and notifications',
      benefits: ['Real-time visibility', 'Automated alerts', 'Barcode scanning', 'Multi-location tracking']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and analytics for data-driven inventory decisions',
      benefits: ['Custom dashboards', 'Performance metrics', 'Cost analysis', 'Trend identification']
    },
    {
      icon: Truck,
      title: 'Automated Reordering',
      description: 'AI-powered automatic purchase orders based on demand patterns and lead times',
      benefits: ['Auto reorder triggers', 'Supplier management', 'Lead time optimization', 'Cost optimization']
    },
    {
      icon: AlertTriangle,
      title: 'Risk Management',
      description: 'Identify and mitigate inventory risks with predictive analytics',
      benefits: ['Risk assessment', 'Early warning system', 'Mitigation strategies', 'Compliance monitoring']
    },
    {
      icon: Globe,
      title: 'Multi-Channel Integration',
      description: 'Seamlessly integrate with e-commerce, POS, and warehouse management systems',
      benefits: ['E-commerce sync', 'POS integration', 'WMS connectivity', 'API flexibility']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 SKUs',
        'Basic AI forecasting',
        'Real-time tracking',
        'Email support',
        'Standard integrations',
        'Mobile app access',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149/month',
      description: 'Ideal for growing businesses and retail chains',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI analytics',
        'Automated reordering',
        'Priority support',
        'Advanced integrations',
        'Multi-location support',
        'Custom dashboards',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399/month',
      description: 'Comprehensive solution for large enterprises',
      features: [
        'Unlimited SKUs',
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
      title: 'E-commerce Retail',
      description: 'Optimize inventory for online stores with AI-powered demand forecasting and automated reordering',
      icon: ShoppingCart,
      benefits: ['Reduce stockouts', 'Minimize carrying costs', 'Improve cash flow', 'Enhance customer satisfaction']
    },
    {
      title: 'Manufacturing',
      description: 'Manage raw materials and finished goods with precision using AI-driven inventory optimization',
      icon: Factory,
      benefits: ['Production optimization', 'Material planning', 'Quality control', 'Cost reduction']
    },
    {
      title: 'Healthcare',
      description: 'Ensure critical medical supplies are always available with intelligent inventory management',
      icon: Stethoscope,
      benefits: ['Patient safety', 'Regulatory compliance', 'Cost control', 'Supply chain visibility']
    },
    {
      title: 'Food & Beverage',
      description: 'Manage perishable inventory with AI-powered shelf-life optimization and waste reduction',
      icon: Heart,
      benefits: ['Waste reduction', 'Freshness optimization', 'Cost savings', 'Sustainability']
    }
  ];

  const benefits = [
    {
      metric: '95%',
      description: 'Forecasting Accuracy',
      icon: Target
    },
    {
      metric: '60%',
      description: 'Reduction in Overstock',
      icon: TrendingDown
    },
    {
      metric: '80%',
      description: 'Fewer Stockouts',
      icon: Shield
    },
    {
      metric: '40%',
      description: 'Cost Savings',
      icon: DollarSign
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Inventory Manager - Zion Tech Group"
        description="Revolutionize your inventory management with AI-powered forecasting, automated reordering, and intelligent analytics."
        keywords={["AI inventory management","inventory optimization","demand forecasting","supply chain AI","inventory analytics","automated reordering"]}
        canonicalUrl="https://ziontechgroup.com/ai-inventory-manager"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Package className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Inventory Manager
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your inventory management with AI-powered forecasting, automated reordering, and intelligent analytics. 
              Reduce costs, eliminate stockouts, and optimize your supply chain.
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
              Our AI Inventory Manager delivers measurable improvements across all key metrics
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
              Everything you need to optimize your inventory management
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
              From retail to manufacturing, our AI Inventory Manager adapts to your specific needs
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
              Choose the plan that fits your business size and inventory complexity
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
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your Inventory?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using AI Inventory Manager to reduce costs and improve efficiency
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

export default AiInventoryManagerPage;