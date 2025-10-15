'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Brain, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  Star, 
  TrendingUp, 
  Target, 
  Lightbulb, 
  Rocket, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  Code, 
  Eye, 
  MessageSquare, 
  Cpu, 
  Network, 
  FileText, 
  Settings,
  DollarSign,
  Globe,
  Database,
  Smartphone,
  Cloud,
  Lock,
  Wifi,
  Monitor,
  HardDrive,
  Layers,
  Calculator,
  Leaf,
  Thermometer,
  Crop,
  Building,
  Code2,
  Package,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Volume2,
  Camera,
  Image,
  Video,
  Music,
  Headphones,
  Mic,
  MicOff,
  Bell,
  BellOff,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Share,
  Bookmark,
  Flag,
  AlertTriangle,
  Info,
  HelpCircle,
  X,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Copy,
  Scissors,
  Undo,
  Redo,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  Move,
  Grid,
  List,
  Calendar,
  Clock as ClockIcon,
  Timer,
  Stopwatch,
  Watch,
  Calendar as CalendarIcon,
  Sun,
  Moon,
  Cloud as CloudIcon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Flame,
  Snowflake,
  Zap as ZapIcon,
  Sparkles,
  Star as StarIcon,
  Heart as HeartIcon,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Sad,
  Surprised,
  Wink,
  Kiss,
  Tongue,
  Wink2,
  Grimace,
  Expressionless,
  Hushed,
  Flushed,
  Relieved,
  Pensive,
  Confused,
  Confounded,
  Persevere,
  Disappointed,
  Worried,
  Angry as AngryIcon,
  Rage,
  Cry,
  Sob,
  Joy,
  Astonished,
  Scream,
  Necktie,
  Shirt,
  Dress,
  WomansClothes,
  Bikini,
  Kimono,
  LabCoat,
  SafetyVest,
  WomansHat,
  Tophat,
  MortarBoard,
  BilledCap,
  MilitaryHelmet,
  RescueWorkersHelmet,
  ConstructionWorkersHelmet,
  RacingHelmet,
  MotorcycleHelmet,
  Bicycle,
  Scooter,
  Skateboard,
  MotorScooter,
  Bus,
  OncomingBus,
  Trolleybus,
  Minibus,
  Ambulance,
  FireEngine,
  PoliceCar,
  OncomingPoliceCar,
  Taxi,
  OncomingTaxi,
  Car,
  OncomingAutomobile,
  BlueCar,
  PickupTruck,
  Truck,
  ArticulatedLorry,
  Tractor,
  RacingCar,
  Motorcycle,
  MotorScooter as MotorScooterIcon,
  ManualWheelchair,
  MotorizedWheelchair,
  AutoRickshaw,
  Bike,
  KickScooter,
  Skateboard as SkateboardIcon,
  RollerSkate,
  Bus as BusIcon,
  Trolleybus as TrolleybusIcon,
  Minibus as MinibusIcon,
  Ambulance as AmbulanceIcon,
  FireEngine as FireEngineIcon,
  PoliceCar as PoliceCarIcon,
  OncomingPoliceCar as OncomingPoliceCarIcon,
  Taxi as TaxiIcon,
  OncomingTaxi as OncomingTaxiIcon,
  Car as CarIcon,
  OncomingAutomobile as OncomingAutomobileIcon,
  BlueCar as BlueCarIcon,
  PickupTruck as PickupTruckIcon,
  Truck as TruckIcon,
  ArticulatedLorry as ArticulatedLorryIcon,
  Tractor as TractorIcon,
  RacingCar as RacingCarIcon,
  Motorcycle as MotorcycleIcon,
  MotorScooter as MotorScooterIcon2,
  ManualWheelchair as ManualWheelchairIcon,
  MotorizedWheelchair as MotorizedWheelchairIcon,
  AutoRickshaw as AutoRickshawIcon,
  Bike as BikeIcon,
  KickScooter as KickScooterIcon,
  Skateboard as SkateboardIcon2,
  RollerSkate as RollerSkateIcon
} from 'lucide-react';

const MicroSaaSSolutionsPage: React.FC = () => {
  const microSaaSServices = [
    {
      id: 'ai-accounting-assistant',
      name: 'AI Accounting Assistant',
      price: '$29/mo',
      originalPrice: '$49/mo',
      description: 'Automated bookkeeping and financial management with AI',
      longDescription: 'Streamline your accounting processes with our intelligent AI assistant that handles invoicing, expense tracking, and financial reporting.',
      features: [
        'Automated Invoice Generation',
        'Expense Categorization',
        'Tax Preparation Assistance',
        'Financial Reporting',
        'Bank Reconciliation',
        'Receipt Scanning & OCR',
        'Multi-currency Support',
        'Integration with Banks',
        'Compliance Monitoring',
        'Custom Dashboard'
      ],
      benefits: [
        'Save 10+ hours per week',
        'Reduce accounting errors by 95%',
        'Automated tax compliance',
        'Real-time financial insights',
        'Cost-effective solution'
      ],
      category: 'Finance & Accounting',
      icon: <Calculator className="w-8 h-8 text-green-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-accounting-assistant'
    },
    {
      id: 'ai-content-moderation-pro',
      name: 'AI Content Moderation Pro',
      price: '$49/mo',
      originalPrice: '$79/mo',
      description: 'Automated content moderation for social media and websites',
      longDescription: 'Keep your platform safe with our advanced AI content moderation system that automatically detects and filters inappropriate content.',
      features: [
        'Text Content Analysis',
        'Image Content Detection',
        'Video Content Screening',
        'Real-time Moderation',
        'Custom Rule Engine',
        'Multi-language Support',
        'API Integration',
        'Dashboard Analytics',
        'Manual Review Queue',
        'Compliance Reporting'
      ],
      benefits: [
        'Reduce moderation costs by 80%',
        '24/7 automated monitoring',
        'Improve user experience',
        'Scale with your platform',
        'Maintain brand safety'
      ],
      category: 'Content Management',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-content-moderation-pro'
    },
    {
      id: 'ai-climate-solutions-pro',
      name: 'AI Climate Solutions Pro',
      price: '$79/mo',
      originalPrice: '$129/mo',
      description: 'Environmental monitoring and sustainability analytics',
      longDescription: 'Track and optimize your environmental impact with AI-powered climate monitoring and sustainability reporting tools.',
      features: [
        'Carbon Footprint Tracking',
        'Energy Usage Analytics',
        'Waste Management Optimization',
        'Sustainability Reporting',
        'Environmental Compliance',
        'Green Energy Recommendations',
        'Supply Chain Analysis',
        'Climate Risk Assessment',
        'ESG Reporting',
        'Custom Dashboards'
      ],
      benefits: [
        'Reduce carbon footprint by 30%',
        'Comply with environmental regulations',
        'Improve sustainability metrics',
        'Reduce operational costs',
        'Enhance brand reputation'
      ],
      category: 'Sustainability',
      icon: <Leaf className="w-8 h-8 text-green-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-climate-solutions-pro'
    },
    {
      id: 'ai-agricultural-intelligence',
      name: 'AI Agricultural Intelligence',
      price: '$99/mo',
      originalPrice: '$149/mo',
      description: 'Smart farming solutions for crop optimization',
      longDescription: 'Maximize crop yields and optimize farming operations with our AI-powered agricultural intelligence platform.',
      features: [
        'Crop Health Monitoring',
        'Weather Prediction',
        'Soil Analysis',
        'Pest Detection',
        'Irrigation Optimization',
        'Yield Forecasting',
        'Market Price Analysis',
        'Farm Management Tools',
        'Mobile App Access',
        'Expert Recommendations'
      ],
      benefits: [
        'Increase crop yields by 25%',
        'Reduce water usage by 40%',
        'Minimize pesticide use',
        'Optimize planting schedules',
        'Maximize profitability'
      ],
      category: 'Agriculture',
      icon: <Crop className="w-8 h-8 text-yellow-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-agricultural-intelligence'
    },
    {
      id: 'ai-business-intelligence-pro',
      name: 'AI Business Intelligence Pro',
      price: '$149/mo',
      originalPrice: '$199/mo',
      description: 'Advanced analytics and business insights platform',
      longDescription: 'Transform your data into actionable business insights with our comprehensive AI-powered business intelligence platform.',
      features: [
        'Predictive Analytics',
        'Custom Dashboard Builder',
        'Real-time Data Visualization',
        'Automated Report Generation',
        'KPI Tracking & Alerts',
        'Data Integration (100+ sources)',
        'Machine Learning Models',
        'Collaborative Workspaces',
        'Mobile Analytics App',
        'White-label Solutions'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify growth opportunities',
        'Improve operational efficiency',
        'Reduce reporting time by 90%',
        'Scale with business growth'
      ],
      category: 'Analytics',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-business-intelligence-pro'
    },
    {
      id: 'ai-code-assistant-pro',
      name: 'AI Code Assistant Pro',
      price: '$199/mo',
      originalPrice: '$299/mo',
      description: 'AI-powered coding assistant and development tools',
      longDescription: 'Accelerate your development process with our intelligent coding assistant that provides code suggestions, debugging, and optimization.',
      features: [
        'Code Generation & Completion',
        'Bug Detection & Fixing',
        'Code Review & Optimization',
        'Multi-language Support',
        'IDE Integration',
        'Documentation Generation',
        'Test Case Creation',
        'Performance Analysis',
        'Security Scanning',
        'Team Collaboration Tools'
      ],
      benefits: [
        'Increase coding speed by 60%',
        'Reduce bugs by 70%',
        'Improve code quality',
        'Faster time to market',
        'Reduce development costs'
      ],
      category: 'Development',
      icon: <Code2 className="w-8 h-8 text-purple-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-code-assistant-pro'
    },
    {
      id: 'ai-customer-insights',
      name: 'AI Customer Insights',
      price: '$89/mo',
      originalPrice: '$129/mo',
      description: 'Customer behavior analysis and personalization engine',
      longDescription: 'Understand your customers better with AI-powered insights that help you personalize experiences and improve customer satisfaction.',
      features: [
        'Customer Segmentation',
        'Behavioral Analysis',
        'Predictive Modeling',
        'Personalization Engine',
        'Churn Prediction',
        'Lifetime Value Analysis',
        'A/B Testing Tools',
        'Real-time Recommendations',
        'Customer Journey Mapping',
        'ROI Tracking'
      ],
      benefits: [
        'Increase customer retention by 35%',
        'Boost conversion rates by 25%',
        'Improve customer satisfaction',
        'Reduce churn rate',
        'Maximize customer lifetime value'
      ],
      category: 'Customer Analytics',
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/ai-customer-insights'
    },
    {
      id: 'ai-inventory-optimizer',
      name: 'AI Inventory Optimizer',
      price: '$119/mo',
      originalPrice: '$179/mo',
      description: 'Smart inventory management and demand forecasting',
      longDescription: 'Optimize your inventory levels and reduce costs with our AI-powered inventory management system that predicts demand and prevents stockouts.',
      features: [
        'Demand Forecasting',
        'Stock Level Optimization',
        'Reorder Point Calculation',
        'Supplier Performance Analysis',
        'Seasonal Trend Analysis',
        'Multi-location Management',
        'Integration with POS Systems',
        'Automated Purchase Orders',
        'Cost Optimization',
        'Real-time Alerts'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Eliminate stockouts',
        'Improve cash flow',
        'Optimize storage space',
        'Increase profitability'
      ],
      category: 'Supply Chain',
      icon: <Package className="w-8 h-8 text-orange-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/ai-inventory-optimizer'
    }
  ];

  const categories = ['All', 'Finance & Accounting', 'Content Management', 'Sustainability', 'Agriculture', 'Analytics', 'Development', 'Customer Analytics', 'Supply Chain'];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes with our one-click deployment and intuitive setup process.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.9% uptime guarantee and comprehensive data protection.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock expert support to ensure your micro SaaS runs smoothly at all times.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business, from startup to enterprise scale.'
    },
    {
      icon: <Award className="w-8 h-8 text-cyan-400" />,
      title: 'Proven Results',
      description: 'Trusted by 500+ businesses worldwide for our innovative solutions and exceptional service.'
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-400" />,
      title: 'Fast Deployment',
      description: 'Quick implementation and deployment to get you up and running in no time.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29/mo',
      description: 'Perfect for small businesses',
      features: [
        'Basic micro SaaS features',
        'Up to 1,000 API calls/month',
        'Email support',
        'Standard integrations',
        'Basic analytics',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99/mo',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced micro SaaS capabilities',
        'Up to 10,000 API calls/month',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'API access',
        'Up to 5 user accounts'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Full micro SaaS suite',
        'Unlimited API calls',
        '24/7 dedicated support',
        'Custom development',
        'White-label solutions',
        'On-premise deployment',
        'Unlimited user accounts'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SaaS Solutions' },
    { number: '500+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Powerful AI-Powered Tools | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive micro SaaS solutions including AI accounting, content moderation, climate solutions, and more. Affordable, scalable, and powerful tools for modern businesses." />
        <meta name="keywords" content="micro SaaS, AI solutions, accounting software, content moderation, climate solutions, business intelligence, code assistant" />
        <meta property="og:title" content="Micro SaaS Solutions - Powerful AI-Powered Tools" />
        <meta property="og:description" content="Discover our comprehensive micro SaaS solutions including AI accounting, content moderation, climate solutions, and more." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SaaS
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Powerful, affordable micro software-as-a-service solutions designed for modern businesses. 
              From AI accounting to climate solutions, we have the tools you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-white/30 hover:border-purple-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through our expertise, innovation, and commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of micro SaaS solutions designed to solve specific business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSServices.map((service, index) => (
              <div key={index} className={`bg-slate-700/50 hover:bg-slate-600/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group relative ${
                service.popular ? 'ring-2 ring-purple-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-sm text-purple-400 font-medium">{service.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-3xl font-bold text-purple-400">{service.price}</span>
                    <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 5).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 5 && (
                    <li className="text-sm text-purple-400 font-medium">
                      +{service.features.length - 5} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-4">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </a>
                  <Link
                    to="/contact"
                    className="block w-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro SaaS Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect micro SaaS plan for your business. All plans include 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                tier.popular ? 'ring-2 ring-purple-500 bg-slate-700/50' : ''
              }`}>
                {tier.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white'
                      : 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Choose from our comprehensive micro SaaS solutions and start your free trial today. 
            No credit card required, cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicroSaaSSolutionsPage;