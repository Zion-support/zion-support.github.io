import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Package, 
  BarChart3, 
  TrendingUp, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  Zap,
  Clock,
  Users,
  Award,
  Target,
  Shield,
  Cloud,
  Database,
  Settings,
  Eye,
  Heart,
  ThumbsUp,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  PieChart,
  LineChart,
  Calendar,
  AlertCircle,
  CheckSquare,
  FileCheck,
  Banknote,
  Coins,
  Wallet,
  TrendingDown,
  Percent,
  Activity,
  Brain,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bell,
  BellOff,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  Signal,
  SignalLow,
  SignalZero,
  SignalHigh,
  SignalMedium,
  Truck,
  Warehouse,
  ShoppingCart,
  Store,
  CreditCard,
  DollarSign,
  Calculator,
  Receipt,
  FileText,
  Download as DownloadIcon,
  Send,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Layout,
  Maximize,
  Minimize,
  Move,
  Copy,
  Scissors,
  Clipboard,
  Bookmark,
  Tag,
  Flag
} from 'lucide-react';

const AISmartInventoryOptimizer = () => {
  const features = [
    {
      title: "Demand Forecasting",
      description: "Predict future demand with 95% accuracy using advanced machine learning algorithms",
      icon: <TrendingUp className="w-6 h-6" />,
      details: ["Seasonal analysis", "Trend prediction", "External factor integration", "Confidence intervals"]
    },
    {
      title: "Auto Reordering",
      description: "Automatically generate purchase orders when inventory reaches optimal levels",
      icon: <Package className="w-6 h-6" />,
      details: ["Smart reorder points", "Supplier integration", "Lead time optimization", "Bulk order discounts"]
    },
    {
      title: "Cost Optimization",
      description: "Minimize inventory costs while maintaining service levels with AI optimization",
      icon: <DollarSign className="w-6 h-6" />,
      details: ["Holding cost analysis", "Order cost optimization", "ABC analysis", "Dead stock prevention"]
    },
    {
      title: "Multi-location Management",
      description: "Manage inventory across multiple warehouses and locations seamlessly",
      icon: <Warehouse className="w-6 h-6" />,
      details: ["Location tracking", "Transfer optimization", "Centralized control", "Local demand analysis"]
    },
    {
      title: "Supplier Management",
      description: "Optimize supplier relationships and performance with integrated analytics",
      icon: <Truck className="w-6 h-6" />,
      details: ["Supplier scoring", "Performance tracking", "Contract management", "Risk assessment"]
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting for data-driven inventory decisions",
      icon: <BarChart3 className="w-6 h-6" />,
      details: ["Real-time dashboards", "Custom reports", "KPI tracking", "Trend analysis"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$249",
      period: "/month",
      originalPrice: "$499",
      description: "Perfect for small retail businesses",
      features: [
        "Up to 1,000 SKUs",
        "Basic forecasting",
        "Single location",
        "Email support",
        "Standard reports",
        "API access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      originalPrice: "$999",
      description: "Ideal for growing e-commerce businesses",
      features: [
        "Up to 10,000 SKUs",
        "Advanced forecasting",
        "Multi-location support",
        "Priority support",
        "Custom reports",
        "Supplier integration",
        "Team collaboration",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      originalPrice: "$1999",
      description: "For large enterprises with complex supply chains",
      features: [
        "Unlimited SKUs",
        "AI-powered optimization",
        "Global multi-location",
        "24/7 dedicated support",
        "Custom dashboards",
        "Full ERP integration",
        "White-label options",
        "Custom algorithms",
        "SLA guarantee",
        "Training & onboarding"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduce Costs",
      description: "Lower inventory costs by up to 30% with optimized stock levels",
      icon: <DollarSign className="w-8 h-8" />,
      stat: "30% cost reduction"
    },
    {
      title: "Improve Service",
      description: "Increase stock availability to 99.5% with better demand prediction",
      icon: <Target className="w-8 h-8" />,
      stat: "99.5% availability"
    },
    {
      title: "Save Time",
      description: "Automate 90% of inventory management tasks with AI optimization",
      icon: <Clock className="w-8 h-8" />,
      stat: "90% automation"
    }
  ];

  const useCases = [
    {
      title: "E-commerce",
      description: "Optimize inventory for online retailers with seasonal demand patterns",
      icon: <ShoppingCart className="w-8 h-8" />,
      examples: ["Seasonal forecasting", "Multi-channel inventory", "Dropshipping optimization", "Returns management"]
    },
    {
      title: "Retail",
      description: "Manage inventory across multiple store locations and channels",
      icon: <Store className="w-8 h-8" />,
      examples: ["Store-level optimization", "Omnichannel inventory", "Visual merchandising", "Promotion planning"]
    },
    {
      title: "Manufacturing",
      description: "Optimize raw materials and finished goods inventory for production",
      icon: <Settings className="w-8 h-8" />,
      examples: ["Raw material planning", "Production scheduling", "Quality control", "Supplier coordination"]
    },
    {
      title: "Distribution",
      description: "Streamline inventory management for wholesale and distribution companies",
      icon: <Truck className="w-8 h-8" />,
      examples: ["Warehouse optimization", "Route planning", "Cross-docking", "Fulfillment centers"]
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Optimized", icon: <Package className="w-6 h-6" /> },
    { number: "30%", label: "Average Cost Reduction", icon: <DollarSign className="w-6 h-6" /> },
    { number: "95%", label: "Forecast Accuracy", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Smart Inventory Optimizer - Zion Tech Group | Intelligent Inventory Management</title>
        <meta
          name="description"
          content="Optimize inventory management with AI Smart Inventory Optimizer. Demand forecasting, auto reordering, cost optimization, and multi-location management for retail and e-commerce."
        />
        <meta
          name="keywords"
          content="inventory management, demand forecasting, auto reordering, cost optimization, supply chain, retail optimization, e-commerce inventory"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Inventory Optimization</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Smart Inventory Optimizer
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Optimize inventory management with AI-powered demand forecasting, auto reordering, and cost optimization. 
              Reduce costs by 30% while improving service levels to 99.5%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Why Choose AI Smart Inventory Optimizer?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your inventory management with AI-powered optimization and automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to optimize your inventory management and reduce costs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect for Every Business Type
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From e-commerce to manufacturing, our inventory optimizer adapts to your industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                    {useCase.description}
                  </p>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <li key={idx} className="text-xs text-cyan-400 text-center">
                        • {example}
                      </li>
                    ))}
                  </ul>
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
                Choose the plan that fits your inventory management needs. All plans include our core features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                    plan.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300">{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">Was {plan.originalPrice}</span>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Inventory?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies using AI Smart Inventory Optimizer to reduce costs and improve service levels. 
                Start your free trial today.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISmartInventoryOptimizer;