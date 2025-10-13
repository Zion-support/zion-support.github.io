import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mic, 
  FileText, 
  Download, 
  Share2, 
  Clock, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  Languages,
  Brain,
  Zap,
  Shield,
  Cloud,
  BarChart3,
  MessageSquare,
  Calendar,
  Search,
  Filter,
  Tag,
  Bookmark,
  Send,
  Copy,
  Edit3,
  Trash2,
  Settings,
  HelpCircle,
  ChevronRight,
  Check,
  X,
  AlertCircle,
  Info,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Globe,
  Award,
  TrendingUp,
  Target,
  Lightbulb,
  Rocket,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Plus,
  Minus,
  RefreshCw,
  Save,
  Upload,
  Monitor,
  Smartphone,
  Tablet,
  Headphones,
  Camera,
  Video,
  Image,
  File,
  Folder,
  Database,
  Server,
  Wifi,
  Signal,
  Battery,
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
  CreditCard,
  DollarSign,
  Euro,
  PoundSterling,
  Yen,
  Bitcoin,
  Ethereum,
  Coins,
  Wallet,
  Receipt,
  Calculator,
  PieChart,
  LineChart,
  Activity,
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
  Wink2,
  Kiss2,
  Tongue2,
  Wink3,
  Kiss3,
  Tongue3,
  Wink4,
  Kiss4,
  Tongue4,
  Wink5,
  Kiss5,
  Tongue5,
  Wink6,
  Kiss6,
  Tongue6,
  Wink7,
  Kiss7,
  Tongue7,
  Wink8,
  Kiss8,
  Tongue8,
  Wink9,
  Kiss9,
  Tongue9,
  Wink10,
  Kiss10,
  Tongue10
} from 'lucide-react';

const ZionAiMeetingTranscriberPage = () => {
  const features = [
    {
      title: "Real-time Transcription",
      description: "Get instant, accurate transcriptions of your meetings with 99.5% accuracy using advanced AI speech recognition.",
      icon: <Mic className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-language Support",
      description: "Transcribe meetings in 50+ languages with automatic language detection and translation capabilities.",
      icon: <Languages className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Speaker Identification",
      description: "Automatically identify and label different speakers, making it easy to follow conversations and action items.",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Action Item Extraction",
      description: "AI automatically extracts action items, decisions, and key points from your meetings for easy follow-up.",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Smart Search & Filter",
      description: "Search through all your meeting transcripts with intelligent filters by date, speaker, topic, or keywords.",
      icon: <Search className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Integration Ready",
      description: "Seamlessly integrate with Zoom, Teams, Google Meet, and other popular meeting platforms.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams and individuals",
      features: [
        "Up to 10 hours of transcription per month",
        "Real-time transcription",
        "Basic speaker identification",
        "5 language support",
        "PDF export",
        "Email support"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 50 hours of transcription per month",
        "Advanced AI features",
        "Speaker identification & analysis",
        "20+ language support",
        "Action item extraction",
        "Smart search & filters",
        "Multiple export formats",
        "Priority support",
        "API access"
      ],
      popular: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited transcription hours",
        "All AI features included",
        "Custom speaker training",
        "50+ language support",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom branding",
        "SSO integration",
        "Advanced security"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Inc.",
      role: "Product Manager",
      content: "Zion AI Meeting Transcriber has revolutionized our team meetings. We never miss important details anymore, and the action item extraction saves us hours of follow-up work.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Consulting Partners",
      role: "Senior Consultant",
      content: "The multi-language support is incredible. We work with international clients and being able to transcribe meetings in their native language has improved our communication significantly.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      company: "Legal Associates",
      role: "Partner",
      content: "As a law firm, accuracy is crucial. The 99.5% accuracy rate gives us confidence in our meeting records, and the search functionality makes finding specific information effortless.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  const stats = [
    { number: "99.5%", label: "Accuracy Rate", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "Languages Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "10,000+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
    { number: "1M+", label: "Hours Transcribed", icon: <Clock className="w-6 h-6" /> }
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
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Meeting Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Zion AI Meeting
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Transcriber
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your meetings with AI-powered real-time transcription, speaker identification, 
            and intelligent action item extraction. Never miss important details again.
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
              <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our advanced AI technology makes meeting transcription smarter, faster, and more accurate than ever before.
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

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core AI features.
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Professionals Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion AI Meeting Transcriber
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
            Ready to Transform Your Meetings?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of professionals who trust Zion AI Meeting Transcriber for accurate, 
            intelligent meeting documentation. Start your free trial today.
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

export default ZionAiMeetingTranscriberPage;