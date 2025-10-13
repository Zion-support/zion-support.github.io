import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Receipt, 
  DollarSign, 
  CreditCard, 
  Wallet, 
  Banknote, 
  Coins, 
  Bitcoin, 
  Ethereum, 
  CheckCircle, 
  Sparkles, 
  FileText, 
  Mail, 
  Phone, 
  MapPin,
  Brain,
  Shield,
  Cloud,
  Database,
  Code,
  Workflow,
  Target,
  Calendar,
  MessageSquare,
  Heart,
  ThumbsUp,
  Eye,
  Edit,
  Copy,
  RefreshCw,
  RotateCcw,
  RotateCw,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume1,
  Volume2,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Camera,
  CameraOff,
  Image,
  ImageOff,
  File,
  FileText as FileTextIcon,
  FileImage,
  FileVideo,
  FileAudio,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  FileZip,
  FileCode,
  FileJson,
  FileCss,
  FileHtml,
  FileXml,
  FileYaml,
  FileMarkdown,
  FileSpreadsheet,
  FileDatabase,
  FileArchive,
  FileBinary,
  FileCheck,
  FileX,
  FilePlus,
  FileMinus,
  FileEdit,
  FileSearch,
  FileDownload,
  FileUpload,
  FileShare,
  FileCopy,
  FileMove,
  FileTrash,
  FileLock,
  FileUnlock,
  FileKey,
  FileShield,
  FileAlert,
  FileInfo,
  FileQuestion,
  FileHeart,
  FileStar,
  FileBookmark,
  FileTag,
  FileFlag,
  FileClock,
  FileCalendar,
  FileUser,
  FileUsers,
  FileFolder,
  FileHome,
  FileGlobe,
  FileWifi,
  FileBluetooth,
  FileUsb,
  FileHdmi,
  FileEthernet,
  FileCloud,
  FileCloudDownload,
  FileCloudUpload,
  FileCloudSync,
  FileCloudCheck,
  FileCloudX,
  FileCloudPlus,
  FileCloudMinus,
  FileCloudEdit,
  FileCloudSearch,
  FileCloudShare,
  FileCloudCopy,
  FileCloudMove,
  FileCloudTrash,
  FileCloudLock,
  FileCloudUnlock,
  FileCloudKey,
  FileCloudShield,
  FileCloudAlert,
  FileCloudInfo,
  FileCloudQuestion,
  FileCloudHeart,
  FileCloudStar,
  FileCloudBookmark,
  FileCloudTag,
  FileCloudFlag,
  FileCloudClock,
  FileCloudCalendar,
  FileCloudUser,
  FileCloudUsers,
  FileCloudFolder,
  FileCloudHome,
  FileCloudGlobe,
  FileCloudWifi,
  FileCloudBluetooth,
  FileCloudUsb,
  FileCloudHdmi,
  FileCloudEthernet,
  Users,
  Clock,
  BarChart3,
  TrendingUp,
  Zap,
  Award,
  Star,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Headphones,
  Settings,
  Palette,
  Layers,
  Play,
  Pause,
  Download,
  Upload,
  Share,
  MessageSquare,
  Bell,
  AlertTriangle,
  CheckSquare,
  Square,
  Minus,
  Plus,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Home,
  Menu,
  X as CloseIcon,
  ExternalLink,
  Info,
  HelpCircle,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Flame,
  Snowflake,
  Sun,
  Moon,
  Droplets,
  Wind,
  Thermometer,
  Gauge,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  TrendingDown,
  Building,
  ShoppingCart,
  Play
} from "lucide-react";

export default function ZionAIInvoiceGeneratorPro() {
  const features = [
    {
      title: "AI Invoice Generation",
      description: "Automatically generate professional invoices using AI technology. Simply input your client details and services, and watch as our AI creates perfectly formatted invoices.",
      icon: <Brain className="w-6 h-6" />,
      benefits: [
        "95% reduction in billing errors",
        "Automated invoice creation",
        "Professional formatting",
        "Customizable templates"
      ]
    },
    {
      title: "Automated Payment Reminders",
      description: "Never chase payments again. Our AI automatically sends personalized payment reminders based on your clients' payment history and preferences.",
      icon: <Bell className="w-6 h-6" />,
      benefits: [
        "60% faster payment collection",
        "Personalized reminders",
        "Automated follow-ups",
        "Payment history tracking"
      ]
    },
    {
      title: "Multi-currency Support",
      description: "Accept payments in 50+ currencies with automatic conversion rates and local payment methods for global clients.",
      icon: <Globe className="w-6 h-6" />,
      benefits: [
        "50+ currency support",
        "Real-time conversion rates",
        "Local payment methods",
        "Global client support"
      ]
    },
    {
      title: "Tax Calculation & Compliance",
      description: "Automatically calculate taxes based on your location and client's location with full compliance reporting for different tax jurisdictions.",
      icon: <Shield className="w-6 h-6" />,
      benefits: [
        "Automatic tax calculation",
        "Multi-jurisdiction compliance",
        "Tax reporting",
        "Audit trail"
      ]
    },
    {
      title: "Client Portal Access",
      description: "Give your clients secure access to view invoices, make payments, and download receipts through a professional client portal.",
      icon: <Users className="w-6 h-6" />,
      benefits: [
        "Secure client access",
        "Payment history",
        "Receipt downloads",
        "Professional portal"
      ]
    },
    {
      title: "Payment Gateway Integration",
      description: "Accept payments through 20+ payment gateways including Stripe, PayPal, Square, and more with secure processing.",
      icon: <CreditCard className="w-6 h-6" />,
      benefits: [
        "20+ payment gateways",
        "Secure processing",
        "Multiple payment methods",
        "PCI compliance"
      ]
    },
    {
      title: "Financial Reporting Dashboard",
      description: "Get comprehensive insights into your business finances with detailed reports, analytics, and forecasting tools.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: [
        "Real-time financial insights",
        "Custom reports",
        "Revenue forecasting",
        "Business analytics"
      ]
    },
    {
      title: "Recurring Billing Automation",
      description: "Set up automatic recurring billing for subscription services with flexible billing cycles and automated invoice generation.",
      icon: <RefreshCw className="w-6 h-6" />,
      benefits: [
        "Automated recurring billing",
        "Flexible billing cycles",
        "Subscription management",
        "Revenue predictability"
      ]
    }
  ];

  const useCases = [
    {
      title: "Freelancers & Consultants",
      description: "Perfect for independent professionals who need to bill clients efficiently and professionally.",
      icon: <Users className="w-8 h-8" />,
      examples: ["Project billing", "Hourly rates", "Retainer agreements", "Expense tracking"]
    },
    {
      title: "Small Businesses",
      description: "Ideal for small businesses looking to streamline their invoicing and payment collection processes.",
      icon: <Building className="w-8 h-8" />,
      examples: ["Service invoicing", "Product sales", "Recurring billing", "Multi-client management"]
    },
    {
      title: "E-commerce Stores",
      description: "Perfect for online stores that need automated invoicing and payment processing for their sales.",
      icon: <ShoppingCart className="w-8 h-8" />,
      examples: ["Order invoicing", "Payment processing", "Tax calculation", "Refund management"]
    },
    {
      title: "Service Agencies",
      description: "Great for agencies that need to manage multiple clients with different billing requirements and payment terms.",
      icon: <Target className="w-8 h-8" />,
      examples: ["Client management", "Project billing", "Team collaboration", "Revenue tracking"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$89/month",
      originalPrice: "$179/month",
      description: "Perfect for freelancers and small businesses",
      features: [
        "50 invoices/month",
        "Basic templates",
        "Email support",
        "Payment gateway integration",
        "Basic reporting",
        "Client portal"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149/month",
      originalPrice: "$299/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "200 invoices/month",
        "Premium templates",
        "Priority support",
        "Multi-currency support",
        "Advanced reporting",
        "API access",
        "Recurring billing",
        "Tax calculation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$249/month",
      originalPrice: "$499/month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited invoices",
        "Custom templates",
        "24/7 support",
        "All payment gateways",
        "Custom reporting",
        "Full API access",
        "Advanced automation",
        "Multi-user access",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "95%", label: "Reduction in Billing Errors", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "60%", label: "Faster Payment Collection", icon: <Zap className="w-6 h-6" /> },
    { number: "50+", label: "Currencies Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "20+", label: "Payment Gateways", icon: <CreditCard className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Freelance Designer",
      role: "Owner",
      content: "Zion AI Invoice Generator Pro has saved me hours every week. The automated reminders have improved my payment collection by 70%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Digital Marketing Agency",
      role: "CEO",
      content: "The multi-currency support is fantastic for our international clients. The tax calculation feature has made compliance so much easier.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Consulting Firm",
      role: "Operations Manager",
      content: "The client portal has improved our client relationships significantly. Clients can easily view their invoices and make payments online.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Invoice Generator Pro - Automated Invoicing & Payment Processing | Zion Tech Group</title>
        <meta
          name="description"
          content="Streamline your billing with Zion AI Invoice Generator Pro. AI-powered invoice generation, automated payment reminders, multi-currency support, and 20+ payment gateways. Start your free trial today."
        />
        <meta
          name="keywords"
          content="AI invoice generator, automated invoicing, payment processing, billing software, invoice automation, payment reminders, multi-currency billing, financial management"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-invoice-generator-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                  <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 text-sm font-medium">#1 AI Invoice Generator 2024</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                    Zion AI Invoice Generator Pro
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Streamline your billing process with AI-powered invoice generation, automated payment reminders, 
                  and multi-currency support. Get paid faster with professional invoicing automation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                    <Receipt className="w-16 h-16 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">See It In Action</h3>
                  <p className="text-gray-300 mb-6">
                    Watch how our AI transforms your billing process with automated invoice generation and payment processing.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-cyan-400">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm">Automated billing</span>
                    </div>
                    <div className="flex items-center text-cyan-400">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm">Multi-currency</span>
                    </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Features for Automated Invoicing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to streamline your billing process and get paid faster with AI-powered automation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-cyan-400">
                        <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Perfect for Every Business Type
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From freelancers to large enterprises, our AI invoice generator adapts to your billing needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <div key={idx} className="text-xs text-cyan-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{example}</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your invoicing needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-500 line-through">{plan.originalPrice}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 group-hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Businesses Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Invoice Generator Pro.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
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
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Streamline Your Billing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using Zion AI Invoice Generator Pro to automate their billing process and get paid faster. 
                Start your free trial today and experience the difference.
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
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}