import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Package, 
  Brain, 
  BarChart3, 
  Users, 
  CheckCircle, 
  Star, 
  Award, 
  Zap, 
  Shield, 
  Clock, 
  Globe, 
  Smartphone, 
  Monitor,
  TrendingUp,
  MessageSquare,
  Target,
  PieChart,
  Settings,
  Download,
  Upload,
  Share,
  Bell,
  Eye,
  Edit,
  Plus,
  RefreshCw,
  Play,
  Pause,
  Volume2,
  Maximize,
  Minimize,
  Copy,
  Palette,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  List,
  Quote,
  Code,
  Link as LinkIcon,
  ExternalLink,
  Info,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Crown,
  Gem,
  Diamond,
  Zap as Lightning,
  Flame,
  Sun,
  Moon,
  Droplets,
  Wind,
  Snowflake,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudHail,
  CloudFog,
  CloudSun,
  CloudMoon,
  Sunrise,
  Sunset,
  Thermometer,
  Gauge,
  Activity,
  Pulse,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Kiss,
  Wink,
  Tongue,
  Sad,
  Happy,
  Neutral,
  Excited,
  Proud,
  Shy,
  Cool,
  Hot,
  Cold,
  Warm,
  Fresh,
  Stale,
  New,
  Old,
  Young,
  Mature,
  Beginner,
  Expert,
  Pro,
  Amateur,
  Rookie,
  Veteran,
  Master,
  Legend,
  Hero,
  Champion,
  Winner,
  Loser,
  Success,
  Failure,
  Victory,
  Defeat,
  Win,
  Lose,
  Draw,
  Tie,
  Equal,
  Different,
  Same,
  Similar,
  Unique,
  Common,
  Rare,
  Frequent,
  Occasional,
  Regular,
  Irregular,
  Normal,
  Abnormal,
  Standard,
  Custom,
  Default,
  Special,
  General,
  Specific,
  Broad,
  Narrow,
  Wide,
  Thin,
  Thick,
  Large,
  Small,
  Big,
  Tiny,
  Huge,
  Massive,
  Mini,
  Micro,
  Macro,
  Mega,
  Giga,
  Tera,
  Peta,
  Exa,
  Zetta,
  Yotta,
  Kilo,
  Hecto,
  Deca,
  Deci,
  Centi,
  Milli,
  Micro as MicroIcon,
  Nano,
  Pico,
  Femto,
  Atto,
  Zepto,
  Yocto,
  Calendar,
  CreditCard,
  Receipt,
  ShoppingCart,
  Truck,
  Warehouse,
  Box,
  Layers,
  Archive,
  Database,
  Server,
  Cloud,
  Lock,
  Key,
  MapPin,
  Navigation,
  Route,
  Compass,
  Map,
  Globe as GlobeIcon,
  Building,
  Home,
  Store,
  ShoppingBag,
  Tag,
  Percent,
  DollarSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  TrendingDown,
  Activity as ActivityIcon,
  LineChart,
  BarChart,
  PieChart as PieChartIcon,
  Scatter,
  AreaChart,
  Candlestick,
  Gauge as GaugeIcon,
  Thermometer as ThermometerIcon,
  Droplet,
  Wind as WindIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
  Cloud as CloudIcon,
  CloudRain as CloudRainIcon,
  CloudSnow as CloudSnowIcon,
  CloudLightning as CloudLightningIcon,
  CloudDrizzle as CloudDrizzleIcon,
  CloudHail as CloudHailIcon,
  CloudFog as CloudFogIcon,
  CloudSun as CloudSunIcon,
  CloudMoon as CloudMoonIcon,
  Sunrise as SunriseIcon,
  Sunset as SunsetIcon,
  Droplets as DropletsIcon,
  Wind as WindIcon2,
  Snowflake as SnowflakeIcon,
  CloudRain as CloudRainIcon2,
  CloudSnow as CloudSnowIcon2,
  CloudLightning as CloudLightningIcon2,
  CloudDrizzle as CloudDrizzleIcon2,
  CloudHail as CloudHailIcon2,
  CloudFog as CloudFogIcon2,
  CloudSun as CloudSunIcon2,
  CloudMoon as CloudMoonIcon2,
  Sunrise as SunriseIcon2,
  Sunset as SunsetIcon2,
  Thermometer as ThermometerIcon2,
  Gauge as GaugeIcon2,
  Activity as ActivityIcon2,
  Pulse as PulseIcon,
  Heart as HeartIcon2,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown as ThumbsDownIcon,
  Smile as SmileIcon,
  Frown as FrownIcon,
  Meh as MehIcon,
  Laugh as LaughIcon,
  Angry as AngryIcon,
  Surprised as SurprisedIcon,
  Confused as ConfusedIcon,
  Kiss as KissIcon,
  Wink as WinkIcon,
  Tongue as TongueIcon,
  Sad as SadIcon,
  Happy as HappyIcon,
  Neutral as NeutralIcon,
  Excited as ExcitedIcon,
  Proud as ProudIcon,
  Shy as ShyIcon,
  Cool as CoolIcon,
  Hot as HotIcon,
  Cold as ColdIcon,
  Warm as WarmIcon,
  Fresh as FreshIcon,
  Stale as StaleIcon,
  New as NewIcon,
  Old as OldIcon,
  Young as YoungIcon,
  Mature as MatureIcon,
  Beginner as BeginnerIcon,
  Expert as ExpertIcon,
  Pro as ProIcon,
  Amateur as AmateurIcon,
  Rookie as RookieIcon,
  Veteran as VeteranIcon,
  Master as MasterIcon,
  Legend as LegendIcon,
  Hero as HeroIcon,
  Champion as ChampionIcon,
  Winner as WinnerIcon,
  Loser as LoserIcon,
  Success as SuccessIcon,
  Failure as FailureIcon,
  Victory as VictoryIcon,
  Defeat as DefeatIcon,
  Win as WinIcon,
  Lose as LoseIcon,
  Draw as DrawIcon,
  Tie as TieIcon,
  Equal as EqualIcon,
  Different as DifferentIcon,
  Same as SameIcon,
  Similar as SimilarIcon,
  Unique as UniqueIcon,
  Common as CommonIcon,
  Rare as RareIcon,
  Frequent as FrequentIcon,
  Occasional as OccasionalIcon,
  Regular as RegularIcon,
  Irregular as IrregularIcon,
  Normal as NormalIcon,
  Abnormal as AbnormalIcon,
  Standard as StandardIcon,
  Custom as CustomIcon,
  Default as DefaultIcon,
  Special as SpecialIcon,
  General as GeneralIcon,
  Specific as SpecificIcon,
  Broad as BroadIcon,
  Narrow as NarrowIcon,
  Wide as WideIcon,
  Thin as ThinIcon,
  Thick as ThickIcon,
  Large as LargeIcon,
  Small as SmallIcon,
  Big as BigIcon,
  Tiny as TinyIcon,
  Huge as HugeIcon,
  Massive as MassiveIcon,
  Mini as MiniIcon,
  Micro as MicroIcon2,
  Macro as MacroIcon,
  Mega as MegaIcon,
  Giga as GigaIcon,
  Tera as TeraIcon,
  Peta as PetaIcon,
  Exa as ExaIcon,
  Zetta as ZettaIcon,
  Yotta as YottaIcon,
  Kilo as KiloIcon,
  Hecto as HectoIcon,
  Deca as DecaIcon,
  Deci as DeciIcon,
  Centi as CentiIcon,
  Milli as MilliIcon,
  Micro as MicroIcon3,
  Nano as NanoIcon,
  Pico as PicoIcon,
  Femto as FemtoIcon,
  Atto as AttoIcon,
  Zepto as ZeptoIcon,
  Yocto as YoctoIcon
} from "lucide-react";

const SmartInventoryOptimizerPage = () => {
  const features = [
    {
      title: "AI Demand Forecasting",
      description: "Advanced machine learning algorithms predict future demand with 95% accuracy using historical data and market trends",
      icon: <Brain className="w-8 h-8" />,
      benefits: [
        "95% accuracy in demand prediction",
        "Reduces stockouts by 80%",
        "Minimizes overstock by 60%",
        "Optimizes cash flow"
      ]
    },
    {
      title: "Automated Reordering",
      description: "Smart reorder points and quantities based on lead times, demand patterns, and supplier reliability",
      icon: <RefreshCw className="w-8 h-8" />,
      benefits: [
        "Never run out of stock",
        "Automated purchase orders",
        "Supplier performance tracking",
        "Reduced manual work"
      ]
    },
    {
      title: "Cost Optimization",
      description: "Intelligent cost analysis and optimization recommendations to reduce inventory costs and improve margins",
      icon: <DollarSign className="w-8 h-8" />,
      benefits: [
        "30% reduction in inventory costs",
        "Improved profit margins",
        "Bulk purchasing optimization",
        "Supplier negotiation insights"
      ]
    },
    {
      title: "Multi-location Support",
      description: "Manage inventory across multiple warehouses, stores, and distribution centers with real-time synchronization",
      icon: <MapPin className="w-8 h-8" />,
      benefits: [
        "Centralized inventory management",
        "Real-time location tracking",
        "Inter-location transfers",
        "Location-specific analytics"
      ]
    },
    {
      title: "Supplier Management",
      description: "Comprehensive supplier relationship management with performance tracking and automated communications",
      icon: <Users className="w-8 h-8" />,
      benefits: [
        "Supplier performance scoring",
        "Automated communications",
        "Contract management",
        "Quality tracking"
      ]
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive analytics dashboard with real-time insights, trends, and performance metrics",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: [
        "Real-time inventory insights",
        "Performance dashboards",
        "Custom reports",
        "Trend analysis"
      ]
    },
    {
      title: "Mobile App",
      description: "Full-featured mobile app for inventory management on the go with barcode scanning and real-time updates",
      icon: <Smartphone className="w-8 h-8" />,
      benefits: [
        "Barcode scanning",
        "Real-time updates",
        "Offline functionality",
        "Push notifications"
      ]
    },
    {
      title: "API Integration",
      description: "Seamless integration with ERP, e-commerce, and accounting systems through robust APIs",
      icon: <Settings className="w-8 h-8" />,
      benefits: [
        "ERP integration",
        "E-commerce sync",
        "Accounting software",
        "Custom integrations"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 SKUs",
        "Basic demand forecasting",
        "Single location",
        "Email support",
        "Basic analytics",
        "Mobile app access"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI forecasting",
        "Multi-location support",
        "Supplier management",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited SKUs",
        "Premium AI features",
        "Unlimited locations",
        "Advanced supplier tools",
        "Custom analytics",
        "Dedicated support",
        "White-label options",
        "Custom deployment",
        "SLA guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "RetailMax Inc.",
      role: "Operations Manager",
      content: "Smart Inventory Optimizer has transformed our supply chain. We've reduced inventory costs by 35% and eliminated stockouts completely.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Chen",
      company: "E-commerce Solutions",
      role: "Supply Chain Director",
      content: "The AI demand forecasting is incredibly accurate. We've improved our cash flow significantly and reduced waste by 50%.",
      rating: 5,
      avatar: "LC"
    },
    {
      name: "Robert Johnson",
      company: "Manufacturing Corp",
      role: "Inventory Manager",
      content: "The multi-location support and automated reordering have streamlined our operations. Our team productivity has increased by 40%.",
      rating: 5,
      avatar: "RJ"
    }
  ];

  const useCases = [
    {
      title: "E-commerce Retailers",
      description: "Manage inventory across multiple sales channels with automated reordering and demand forecasting",
      icon: <ShoppingCart className="w-6 h-6" />,
      benefits: [
        "50% reduction in stockouts",
        "Automated multi-channel sync",
        "Seasonal demand prediction",
        "Improved customer satisfaction"
      ]
    },
    {
      title: "Manufacturing Companies",
      description: "Optimize raw material inventory and production planning with AI-powered demand forecasting",
      icon: <Package className="w-6 h-6" />,
      benefits: [
        "30% reduction in raw material costs",
        "Improved production planning",
        "Reduced waste and obsolescence",
        "Better supplier relationships"
      ]
    },
    {
      title: "Wholesale Distributors",
      description: "Streamline distribution operations with intelligent inventory allocation and automated reordering",
      icon: <Truck className="w-6 h-6" />,
      benefits: [
        "40% improvement in fill rates",
        "Optimized distribution routes",
        "Reduced carrying costs",
        "Better customer service"
      ]
    },
    {
      title: "Retail Chains",
      description: "Manage inventory across multiple store locations with real-time visibility and automated replenishment",
      icon: <Store className="w-6 h-6" />,
      benefits: [
        "Real-time inventory visibility",
        "Automated store replenishment",
        "Reduced shrinkage",
        "Improved sales performance"
      ]
    }
  ];

  const keyMetrics = [
    { label: "Inventory Cost Reduction", value: "30%", icon: <DollarSign className="w-6 h-6" /> },
    { label: "Stockout Reduction", value: "80%", icon: <Package className="w-6 h-6" /> },
    { label: "Forecasting Accuracy", value: "95%", icon: <Target className="w-6 h-6" /> },
    { label: "Time Savings", value: "60%", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Inventory Optimizer - Zion Tech Group | AI-Powered Inventory Management</title>
        <meta
          name="description"
          content="Transform your inventory management with Smart Inventory Optimizer. AI-powered demand forecasting, automated reordering, cost optimization, and multi-location support. Reduce inventory costs by 30%."
        />
        <meta
          name="keywords"
          content="inventory management, demand forecasting, automated reordering, cost optimization, supply chain, warehouse management, inventory analytics, multi-location inventory"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
                  <Brain className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-green-400 text-sm font-medium">AI-Powered Inventory Intelligence</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400">
                    Smart Inventory Optimizer
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Revolutionize your inventory management with AI-powered demand forecasting, automated reordering, 
                  and cost optimization. Reduce inventory costs by 30% while eliminating stockouts and overstock.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {keyMetrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        {metric.icon}
                      </div>
                      <div className="text-2xl font-bold text-green-400 mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-300">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Package className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Smart Inventory Optimizer</h3>
                    <p className="text-gray-300 text-sm">Starting at $49/month</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-sm text-gray-300">AI Demand Forecasting</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-sm text-gray-300">Automated Reordering</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-sm text-gray-300">Cost Optimization</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-sm text-gray-300">Multi-location Support</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                    >
                      Get Started Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Advanced AI Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the powerful AI capabilities that make inventory management effortless and intelligent.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect for Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how different industries use Smart Inventory Optimizer to transform their supply chain operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business size and inventory volume. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 relative ${
                    plan.popular 
                      ? 'border-green-500/50 bg-gradient-to-b from-green-500/10 to-emerald-500/10' 
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">${plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Smart Inventory Optimizer
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Inventory?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using Smart Inventory Optimizer to streamline their supply chain 
              and reduce costs. Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SmartInventoryOptimizerPage;