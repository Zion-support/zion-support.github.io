import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Receipt, 
  Camera, 
  CreditCard, 
  PieChart, 
  TrendingUp, 
  DollarSign, 
  Euro, 
  PoundSterling, 
  Yen, 
  Bitcoin, 
  Ethereum, 
  Coins, 
  Wallet, 
  Calculator, 
  BarChart3, 
  LineChart, 
  Activity, 
  TrendingDown, 
  Target, 
  CheckCircle, 
  Star,
  ArrowRight,
  Upload,
  Download,
  Share2,
  Settings,
  Bell,
  Calendar,
  Clock,
  Users,
  Shield,
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
  Zap,
  Brain,
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
  Camera as CameraIcon,
  Video,
  Image,
  File,
  Folder,
  WifiOff,
  SignalOff,
  BatteryLow,
  AlertTriangle,
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
  Tongue
} from 'lucide-react';

const ZionAiExpenseTrackerProPage = () => {
  const features = [
    {
      title: "Smart Receipt Scanning",
      description: "Take a photo of any receipt and our AI will automatically extract merchant, amount, date, and category with 99.2% accuracy.",
      icon: <Camera className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Currency Support",
      description: "Track expenses in 150+ currencies with real-time exchange rates and automatic currency conversion.",
      icon: <Coins className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI-Powered Categorization",
      description: "Automatically categorize expenses using machine learning. Learns from your patterns to improve accuracy over time.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Analytics",
      description: "Get instant insights with beautiful charts, spending trends, and personalized recommendations to optimize your budget.",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Expense Approval Workflow",
      description: "Set up approval workflows for team expenses with customizable rules, notifications, and automated approvals.",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Tax Preparation Ready",
      description: "Generate tax-ready reports and export data to popular accounting software like QuickBooks, Xero, and FreshBooks.",
      icon: <File className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals and freelancers",
      features: [
        "Unlimited receipt scanning",
        "AI-powered categorization",
        "Multi-currency support",
        "Basic analytics & reports",
        "Mobile & web access",
        "Cloud sync",
        "Email support"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Ideal for small businesses and teams",
      features: [
        "Everything in Personal",
        "Team collaboration",
        "Advanced analytics",
        "Custom categories & tags",
        "Expense approval workflows",
        "API access",
        "Priority support",
        "Custom integrations",
        "Advanced reporting"
      ],
      popular: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Unlimited users",
        "Advanced security",
        "Custom workflows",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom branding",
        "SSO integration",
        "Advanced compliance",
        "White-label options"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Startup Ventures",
      role: "CFO",
      content: "Zion AI Expense Tracker Pro has saved us countless hours. The receipt scanning is incredibly accurate, and the AI categorization learns our spending patterns perfectly.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Martinez",
      company: "Consulting Group",
      role: "Operations Manager",
      content: "The multi-currency support is a game-changer for our international team. We can track expenses across different countries seamlessly.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "James Wilson",
      company: "Tech Solutions",
      role: "Accountant",
      content: "The tax preparation features are outstanding. We can generate all the reports we need for our accountant, and the integration with QuickBooks is flawless.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const stats = [
    { number: "99.2%", label: "Receipt Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "150+", label: "Currencies Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "50,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "2M+", label: "Receipts Processed", icon: <Receipt className="w-6 h-6" /> }
  ];

  const integrations = [
    { name: "QuickBooks", logo: "QB", color: "from-blue-500 to-blue-600" },
    { name: "Xero", logo: "X", color: "from-green-500 to-green-600" },
    { name: "FreshBooks", logo: "FB", color: "from-purple-500 to-purple-600" },
    { name: "Sage", logo: "S", color: "from-orange-500 to-orange-600" },
    { name: "Wave", logo: "W", color: "from-cyan-500 to-cyan-600" },
    { name: "Zoho Books", logo: "ZB", color: "from-indigo-500 to-indigo-600" }
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
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Expense Management</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Zion AI Expense
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Tracker Pro
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The most intelligent expense tracking solution. Scan receipts, categorize automatically, 
            and get insights that help you save money and stay organized.
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
              <Camera className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
              Intelligent Expense Management
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered platform makes expense tracking effortless, accurate, and insightful.
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
              Connect with your favorite accounting and business tools for a complete financial workflow.
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
              Start with a free trial and upgrade as your needs grow. All plans include our core AI features.
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
              Loved by Finance Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion AI Expense Tracker Pro
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
            Ready to Simplify Your Expense Tracking?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of professionals who trust Zion AI Expense Tracker Pro for 
            intelligent, accurate expense management. Start your free trial today.
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

export default ZionAiExpenseTrackerProPage;