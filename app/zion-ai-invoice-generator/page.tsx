import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  FileText, 
  Download, 
  Share, 
  Star, 
  CheckCircle, 
  Sparkles,
  Zap,
  Users,
  Clock,
  DollarSign,
  Shield,
  Globe,
  Bot,
  Camera,
  Palette,
  Settings,
  BarChart3,
  TrendingUp,
  Award,
  Headphones,
  Smartphone,
  Laptop,
  Monitor,
  Mail,
  Phone,
  MapPin,
  Receipt,
  CreditCard,
  Calculator,
  PieChart,
  Target,
  Lock,
  RefreshCw,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  Search,
  Filter,
  Calendar,
  Tag,
  Flag,
  Bookmark,
  Bell,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Play,
  Pause,
  Stop,
  Save,
  Copy,
  Scissors,
  Clipboard,
  Folder,
  Archive,
  HardDrive,
  Server,
  Cpu,
  Network,
  Database,
  Cloud,
  Wifi,
  Bluetooth,
  Radio,
  Tv,
  Tablet,
  Watch,
  Speaker,
  Mic,
  Camera as CameraIcon,
  Video,
  Image,
  Music,
  Film,
  Book,
  Newspaper,
  File,
  Package,
  ShoppingCart,
  Truck,
  Building,
  Factory,
  Warehouse,
  Office,
  School,
  Hospital,
  Bank,
  Car,
  Plane,
  Train,
  Ship,
  Bike,
  Bus,
  Taxi,
  Box,
  Gift,
  ShoppingBag,
  Wallet,
  Coins,
  Banknote,
  Percent,
  Thermometer,
  Gauge,
  Battery,
  Signal,
  Wifi as WifiIcon,
  Battery as BatteryIcon,
  Signal as SignalIcon
} from 'lucide-react';

const ZionAIInvoiceGeneratorPage = () => {
  const features = [
    {
      title: "Auto Invoice Creation",
      description: "Generate professional invoices automatically from your data with AI-powered formatting and calculations",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Data Extraction",
      description: "Extract billing information from emails, contracts, and documents using advanced AI technology",
      icon: <Bot className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Smart Categorization",
      description: "Automatically categorize expenses and line items for better financial tracking and reporting",
      icon: <Tag className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Accounting Integration",
      description: "Seamlessly integrate with QuickBooks, Xero, and other popular accounting software",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Multi-Currency Support",
      description: "Handle invoices in multiple currencies with automatic conversion and exchange rate updates",
      icon: <Globe className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "PDF Export & Sharing",
      description: "Export invoices as professional PDFs and share them directly with clients via email",
      icon: <Download className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      description: "Perfect for freelancers and small businesses",
      features: [
        "50 invoices per month",
        "Basic AI extraction",
        "PDF export",
        "Email integration",
        "Basic templates",
        "Email support"
      ],
      popular: false,
      color: "from-gray-500 to-slate-500"
    },
    {
      name: "Professional",
      price: "$199",
      period: "month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "200 invoices per month",
        "Advanced AI extraction",
        "Multi-currency support",
        "Accounting integration",
        "Custom templates",
        "Priority support",
        "API access",
        "Team collaboration"
      ],
      popular: true,
      color: "from-cyan-500 to-purple-500"
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "month",
      description: "For large organizations with high-volume needs",
      features: [
        "Unlimited invoices",
        "Premium AI extraction",
        "Custom integrations",
        "White-label options",
        "Advanced analytics",
        "Dedicated support",
        "Custom workflows",
        "SLA guarantee"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "Freelance Consultant",
      role: "Business Owner",
      content: "This AI invoice generator has saved me hours every week. The automatic data extraction is incredibly accurate and the invoices look professional.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Thompson",
      company: "Marketing Agency",
      role: "Operations Manager",
      content: "The accounting integration is seamless. Our invoices are automatically synced with QuickBooks, eliminating manual data entry completely.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "Robert Kim",
      company: "E-commerce Store",
      role: "Finance Director",
      content: "The multi-currency support is fantastic for our international clients. The exchange rate updates are always current and accurate.",
      rating: 5,
      avatar: "RK"
    }
  ];

  const stats = [
    { number: "1,200+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "25,000+", label: "Invoices Generated", icon: <FileText className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "4.8/5", label: "User Rating", icon: <Star className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Save Time",
      description: "Reduce invoice creation time by 90% with AI automation",
      icon: <Clock className="w-6 h-6" />,
      stat: "90% time saved"
    },
    {
      title: "Reduce Errors",
      description: "Eliminate manual data entry errors with AI-powered extraction",
      icon: <Shield className="w-6 h-6" />,
      stat: "99.5% accuracy"
    },
    {
      title: "Professional Look",
      description: "Create polished, branded invoices that impress clients",
      icon: <Award className="w-6 h-6" />,
      stat: "100% professional"
    },
    {
      title: "Easy Integration",
      description: "Connect with your existing accounting and business tools",
      icon: <Settings className="w-6 h-6" />,
      stat: "50+ integrations"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Invoice Generator Pro - Automated Invoice Creation | Zion Tech Group</title>
        <meta name="description" content="Automated invoice generation with AI-powered data extraction, smart categorization, and seamless accounting integration. Create professional invoices in minutes." />
        <meta name="keywords" content="AI invoice generator, automated invoicing, invoice automation, accounting software, financial management, invoice creation" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-invoice-generator" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                  <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 text-sm font-medium">AI Invoice Automation</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                    Zion AI Invoice Generator Pro
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Automated invoice generation with AI-powered data extraction, smart categorization, 
                  and seamless accounting integration. Create professional invoices in minutes, not hours.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
                    <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>7-day free trial</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">Invoice #INV-2024-001</h3>
                      <span className="text-sm text-gray-500">Jan 15, 2024</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Web Development Services</span>
                        <span>$2,500.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>AI Integration</span>
                        <span>$1,200.00</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-semibold">
                        <span>Total</span>
                        <span>$3,700.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-gray-400 text-sm">Generated in 30 seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Invoice Generator?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your invoicing process with intelligent automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 mb-3 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Invoice Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to automate your invoicing process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
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

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your invoicing needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                      : 'border-white/20 hover:border-cyan-500/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
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
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied customers who are automating their invoicing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Invoicing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Start your free trial today and experience the power of AI invoice generation. 
              No credit card required, cancel anytime.
            </p>
            
            {/* Contact Information */}
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
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIInvoiceGeneratorPage;