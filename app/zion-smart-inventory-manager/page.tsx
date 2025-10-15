'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  ArchiveBoxIcon, 
  ChartBarIcon, 
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
  GlobeAltIcon,
  CpuChipIcon,
  EyeIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ExclamationTriangleIcon,
  CheckBadgeIcon,
  XMarkIcon,
  PlusIcon,
  MinusIcon,
  PencilIcon,
  TrashIcon,
  ShareIcon,
  DownloadIcon,
  UploadIcon,
  PrinterIcon,
  ArchiveBoxIcon as ArchiveBoxIconOutline,
  TagIcon,
  FlagIcon,
  BookmarkIcon,
  HeartIcon,
  ThumbUpIcon,
  ThumbDownIcon,
  ChatBubbleOvalLeftIcon,
  BellIcon,
  BellSlashIcon,
  LockClosedIcon,
  LockOpenIcon,
  KeyIcon,
  FingerPrintIcon,
  EyeIcon as EyeIconOutline,
  EyeSlashIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  ExclamationCircleIcon,
  CheckCircleIcon as CheckCircleIconOutline,
  XCircleIcon,
  PlusCircleIcon,
  MinusCircleIcon,
  ExclamationTriangleIcon as ExclamationTriangleIconOutline,
  LightBulbIcon,
  FireIcon,
  SunIcon,
  MoonIcon,
  CloudIcon,
  CloudRainIcon,
  CloudSnowIcon,
  CloudSunIcon,
  CloudMoonIcon,
  CloudLightningIcon,
  CloudArrowUpIcon,
  CloudArrowDownIcon,
  CloudCheckIcon,
  CloudXMarkIcon,
  CloudSlashIcon,
  CloudBoltIcon,
  CloudSunIcon as CloudSunIconOutline,
  CloudMoonIcon as CloudMoonIconOutline,
  CloudRainIcon as CloudRainIconOutline,
  CloudSnowIcon as CloudSnowIconOutline,
  CloudLightningIcon as CloudLightningIconOutline,
  CloudArrowUpIcon as CloudArrowUpIconOutline,
  CloudArrowDownIcon as CloudArrowDownIconOutline,
  CloudCheckIcon as CloudCheckIconOutline,
  CloudXMarkIcon as CloudXMarkIconOutline,
  CloudSlashIcon as CloudSlashIconOutline,
  CloudBoltIcon as CloudBoltIconOutline,
  CloudSunIcon as CloudSunIconOutline2,
  CloudMoonIcon as CloudMoonIconOutline2,
  CloudRainIcon as CloudRainIconOutline2,
  CloudSnowIcon as CloudSnowIconOutline2,
  CloudLightningIcon as CloudLightningIconOutline2,
  CloudArrowUpIcon as CloudArrowUpIconOutline2,
  CloudArrowDownIcon as CloudArrowDownIconOutline2,
  CloudCheckIcon as CloudCheckIconOutline2,
  CloudXMarkIcon as CloudXMarkIconOutline2,
  CloudSlashIcon as CloudSlashIconOutline2,
  CloudBoltIcon as CloudBoltIconOutline2,
  TruckIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  QrCodeIcon,
  BarcodeIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  AdjustmentsHorizontalIcon,
  ChartPieIcon,
  PresentationChartLineIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  CommandLineIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ServerIcon,
  SignalIcon,
  WifiIcon,
  BoltIcon,
  BatteryIcon,
  PowerIcon,
  LightBulbIcon as LightBulbIconOutline,
  FireIcon as FireIconOutline,
  SunIcon as SunIconOutline,
  MoonIcon as MoonIconOutline,
  CloudIcon as CloudIconOutline,
  CloudRainIcon as CloudRainIconOutline3,
  CloudSnowIcon as CloudSnowIconOutline3,
  CloudSunIcon as CloudSunIconOutline3,
  CloudMoonIcon as CloudMoonIconOutline3,
  CloudLightningIcon as CloudLightningIconOutline3,
  CloudArrowUpIcon as CloudArrowUpIconOutline3,
  CloudArrowDownIcon as CloudArrowDownIconOutline3,
  CloudCheckIcon as CloudCheckIconOutline3,
  CloudXMarkIcon as CloudXMarkIconOutline3,
  CloudSlashIcon as CloudSlashIconOutline3,
  CloudBoltIcon as CloudBoltIconOutline3
} from '@heroicons/react/24/outline';

const ZionSmartInventoryManagerPage: React.FC = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI Demand Forecasting',
      description: 'Advanced machine learning algorithms predict demand patterns with 90% accuracy, helping you optimize stock levels and reduce waste.',
      benefits: ['90% forecasting accuracy', 'Seasonal pattern recognition', 'Trend analysis', 'Automated reorder points']
    },
    {
      icon: ArchiveBoxIcon,
      title: 'Real-time Stock Tracking',
      description: 'Monitor inventory levels across multiple locations with real-time updates, barcode scanning, and automated alerts.',
      benefits: ['Real-time visibility', 'Barcode scanning', 'Multi-location support', 'Low stock alerts']
    },
    {
      icon: ChartBarIcon,
      title: 'Cost Optimization',
      description: 'AI-powered cost analysis helps you identify savings opportunities, optimize supplier relationships, and reduce carrying costs.',
      benefits: ['Cost trend analysis', 'Supplier optimization', 'Carrying cost reduction', 'ROI tracking']
    },
    {
      icon: CogIcon,
      title: 'Automated Reordering',
      description: 'Set up intelligent reorder rules that automatically place purchase orders based on demand forecasts and current stock levels.',
      benefits: ['Smart reorder rules', 'Supplier integration', 'Purchase order automation', 'Approval workflows']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 SKUs',
        'Basic demand forecasting',
        'Single location',
        'Email support',
        'Mobile app access',
        'Basic reporting',
        'Barcode scanning',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI forecasting',
        'Multi-location support',
        'Priority support',
        'API access',
        'Advanced analytics',
        'Supplier management',
        'Team collaboration',
        '5 users included',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited SKUs',
        'Custom AI models',
        'Unlimited locations',
        '24/7 phone support',
        'Custom development',
        'Advanced security',
        'Dedicated account manager',
        'On-premise deployment',
        'Unlimited users',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      company: 'RetailMax Inc.',
      role: 'Operations Manager',
      content: 'Smart Inventory Manager reduced our stockouts by 70% and lowered our inventory costs by 25%. The AI forecasting is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'Manufacturing Corp',
      role: 'Supply Chain Director',
      content: 'The automated reordering feature saves us 20 hours per week. We never run out of critical components anymore.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'E-commerce Plus',
      role: 'Inventory Coordinator',
      content: 'The real-time tracking across our 5 warehouses is game-changing. We have complete visibility into our inventory at all times.',
      rating: 5
    }
  ];

  const inventoryFeatures = [
    {
      name: 'Barcode Scanning',
      description: 'Quick and accurate inventory updates with mobile barcode scanning.',
      icon: QrCodeIcon,
      benefits: ['99.9% scan accuracy', 'Mobile app support', 'Batch scanning', 'Offline capability']
    },
    {
      name: 'Multi-location Management',
      description: 'Manage inventory across multiple warehouses, stores, and distribution centers.',
      icon: MapPinIcon,
      benefits: ['Unlimited locations', 'Transfer management', 'Location-specific rules', 'Centralized control']
    },
    {
      name: 'Supplier Integration',
      description: 'Seamlessly connect with suppliers for automated ordering and tracking.',
      icon: BuildingOfficeIcon,
      benefits: ['100+ supplier integrations', 'Automated PO generation', 'Delivery tracking', 'Performance monitoring']
    },
    {
      name: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting for data-driven inventory decisions.',
      icon: ChartPieIcon,
      benefits: ['Real-time dashboards', 'Custom reports', 'Trend analysis', 'Performance metrics']
    }
  ];

  return (
    <>
      <SEOHead 
        title="Smart Inventory Manager - AI-Powered Inventory Optimization | Zion Tech Group"
        description="Optimize your inventory with AI-powered demand forecasting, real-time tracking, and automated reordering. Reduce stockouts by 70% and lower costs by 25%."
        keywords="inventory management, demand forecasting, stock optimization, barcode scanning, multi-location inventory, supply chain management"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-emerald-900/30"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="cyber-grid"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <SparklesIcon className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-300 text-sm font-medium">AI-Powered Inventory Management</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Smart Inventory Manager
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Optimize your inventory with AI-powered demand forecasting, real-time tracking, and automated reordering that reduces stockouts by 70% and lowers costs by 25%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">70%</div>
                  <div className="text-gray-300 text-sm">Stockout Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">25%</div>
                  <div className="text-gray-300 text-sm">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
                  <div className="text-gray-300 text-sm">Forecasting Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">20h</div>
                  <div className="text-gray-300 text-sm">Time Saved/Week</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Inventory Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage AI and automation to optimize your inventory management and reduce costs while improving service levels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Complete <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Inventory Solution</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your inventory efficiently, from scanning to analytics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {inventoryFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{feature.description}</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core inventory features and 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-green-500 shadow-green-500/20' 
                    : 'border-slate-700 hover:border-green-500 hover:shadow-green-500/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                      : 'border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                What Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have optimized their inventory with Smart Inventory Manager.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-900/40 via-slate-900 to-emerald-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Ready to Optimize Your Inventory?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see how AI-powered inventory management can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionSmartInventoryManagerPage;