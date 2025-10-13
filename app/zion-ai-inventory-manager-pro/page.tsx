import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Star,
  ArrowRight,
  Brain,
  Zap,
  Shield,
  Cloud,
  Database,
  Server,
  Wifi,
  Signal,
  Battery,
  Monitor,
  Smartphone,
  Tablet,
  Headphones,
  Camera,
  Video,
  Image,
  File,
  Folder,
  WifiOff,
  SignalOff,
  BatteryLow,
  AlertCircle,
  Check,
  X,
  Info,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Globe,
  Award,
  Lightbulb,
  Rocket,
  Lock,
  Eye,
  EyeOff,
  Plus,
  Minus,
  Edit3,
  Trash2,
  Search,
  Filter,
  Tag,
  Bookmark,
  Send,
  Copy,
  Save,
  RefreshCw,
  Settings,
  Bell,
  Calendar,
  Clock,
  Users,
  Target,
  TrendingDown,
  MinusCircle,
  PlusCircle,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  Diamond,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Sad,
  Happy,
  Wink,
  Kiss,
  Tongue,
  Calculator,
  PieChart,
  LineChart,
  Activity,
  Receipt,
  CreditCard,
  DollarSign,
  Euro,
  PoundSterling,
  Yen,
  Bitcoin,
  Ethereum,
  Coins,
  Wallet,
  Upload,
  Download,
  Share2,
  Play,
  Pause,
  Volume2,
  Languages,
  HelpCircle,
  ChevronRight,
  CheckCircle2,
  XCircle,
  InfoIcon,
  QuestionMarkCircle,
  ExclamationTriangle,
  Ban,
  LockKeyhole,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  Barcode,
  MinusCircle as MinusCircleIcon,
  PlusCircle as PlusCircleIcon,
  Circle as CircleIcon,
  Square as SquareIcon,
  Triangle as TriangleIcon,
  Hexagon as HexagonIcon,
  Octagon as OctagonIcon,
  Pentagon as PentagonIcon,
  Diamond as DiamondIcon,
  Heart as HeartIcon,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown as ThumbsDownIcon,
  Smile as SmileIcon,
  Frown as FrownIcon,
  Meh as MehIcon,
  Laugh as LaughIcon,
  Angry as AngryIcon,
  Surprised as SurprisedIcon,
  Confused as ConfusedIcon,
  Sad as SadIcon,
  Happy as HappyIcon,
  Wink as WinkIcon,
  Kiss as KissIcon,
  Tongue as TongueIcon
} from 'lucide-react';

const ZionAiInventoryManagerProPage = () => {
  const features = [
    {
      title: "AI Demand Forecasting",
      description: "Predict future demand with 95% accuracy using machine learning algorithms that analyze sales patterns, seasonality, and market trends.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Reorder Points",
      description: "Automatically calculate optimal reorder points and quantities based on lead times, demand patterns, and safety stock requirements.",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Tracking",
      description: "Track inventory levels across multiple locations in real-time with barcode scanning, RFID integration, and mobile app support.",
      icon: <Package className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Alerts",
      description: "Get instant notifications for low stock, overstock, expiring items, and unusual demand patterns to prevent stockouts and waste.",
      icon: <Bell className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics with AI-powered insights on inventory turnover, profitability, and optimization opportunities.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Multi-location Management",
      description: "Manage inventory across warehouses, stores, and distribution centers with centralized control and location-specific rules.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Small Business",
      price: "$79",
      period: "/month",
      description: "Perfect for small retailers and e-commerce stores",
      features: [
        "Up to 1,000 SKUs",
        "Basic AI forecasting",
        "2 locations",
        "Mobile app access",
        "Basic reporting",
        "Email support",
        "Cloud sync"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for growing businesses and distributors",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI features",
        "10 locations",
        "Barcode scanning",
        "Advanced analytics",
        "API access",
        "Priority support",
        "Custom integrations",
        "Multi-user access"
      ],
      popular: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "For large organizations and enterprise",
      features: [
        "Unlimited SKUs",
        "All AI features included",
        "Unlimited locations",
        "RFID integration",
        "Custom workflows",
        "Dedicated account manager",
        "24/7 phone support",
        "White-label options",
        "Advanced security",
        "Custom reporting"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      company: "Retail Chain",
      role: "Operations Manager",
      content: "Zion AI Inventory Manager Pro has reduced our stockouts by 80% and improved our inventory turnover by 40%. The AI forecasting is incredibly accurate.",
      rating: 5,
      avatar: "RC"
    },
    {
      name: "Jennifer Lee",
      company: "E-commerce Platform",
      role: "Supply Chain Director",
      content: "The multi-location management feature is a game-changer. We can now track inventory across all our warehouses in real-time and optimize our distribution.",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "Michael Brown",
      company: "Manufacturing Co.",
      role: "Inventory Controller",
      content: "The automated alerts have saved us thousands of dollars by preventing stockouts and reducing waste. The analytics help us make better purchasing decisions.",
      rating: 5,
      avatar: "MB"
    }
  ];

  const stats = [
    { number: "95%", label: "Forecasting Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "80%", label: "Stockout Reduction", icon: <TrendingDown className="w-6 h-6" /> },
    { number: "15,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "50M+", label: "SKUs Managed", icon: <Package className="w-6 h-6" /> }
  ];

  const integrations = [
    { name: "Shopify", logo: "S", color: "from-green-500 to-green-600" },
    { name: "WooCommerce", logo: "W", color: "from-blue-500 to-blue-600" },
    { name: "Amazon", logo: "A", color: "from-orange-500 to-orange-600" },
    { name: "eBay", logo: "E", color: "from-purple-500 to-purple-600" },
    { name: "QuickBooks", logo: "QB", color: "from-cyan-500 to-cyan-600" },
    { name: "SAP", logo: "SAP", color: "from-indigo-500 to-indigo-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Inventory Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Zion AI Inventory
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Manager Pro
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The most intelligent inventory management system. Predict demand, optimize stock levels, 
            and eliminate stockouts with AI-powered automation and real-time insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Package className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Intelligent Inventory Management
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered platform makes inventory management smarter, more efficient, and more profitable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite e-commerce platforms, accounting software, and business tools.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${integration.color} flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {integration.logo}
                </div>
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                  {integration.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with a free trial and scale as your business grows. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-105' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center group`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Supply Chain Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion AI Inventory Manager Pro
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your Inventory?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses who trust Zion AI Inventory Manager Pro for 
            intelligent, automated inventory management. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Pricing
              <TrendingUp className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAiInventoryManagerProPage;