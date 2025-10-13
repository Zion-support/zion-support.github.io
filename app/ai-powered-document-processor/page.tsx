import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  Target,
  Smartphone,
  Globe,
  Database,
  FileText as DocumentIcon,
  AlertTriangle,
  Send,
  Filter,
  Search,
  Download,
  Settings,
  Eye,
  Lock,
  Cloud,
  Cpu,
  Network,
  Award,
  Sparkles,
  Upload,
  Download as DownloadIcon,
  Save,
  Edit,
  Trash2,
  Plus,
  Minus,
  Equal,
  File,
  FileImage,
  FileSpreadsheet,
  FileVideo,
  FileAudio,
  Archive,
  Folder,
  FolderOpen,
  Copy,
  Scissors,
  Clipboard,
  BookOpen,
  Book,
  Scroll,
  PenTool,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  List,
  Hash,
  Quote,
  Link as LinkIcon,
  Image,
  Video,
  Mic,
  Camera,
  Headphones,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  RotateCcw,
  RotateCw,
  Maximize,
  Minimize,
  Move,
  Crop,
  Palette,
  Paintbrush,
  Eraser,
  Highlighter,
  StickyNote,
  Tag,
  Flag,
  Bookmark,
  Star as StarIcon,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Share,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock as ClockIcon,
  User,
  UserCheck,
  UserX,
  Shield,
  Key,
  Lock as LockIcon,
  Unlock,
  Eye as EyeIcon,
  EyeOff,
  Activity,
  PieChart,
  LineChart,
  RefreshCw,
  Bell,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  MoreHorizontal,
  MoreVertical,
  Menu,
  X,
  Plus as PlusIcon,
  Minus as MinusIcon,
  Equal as EqualIcon
} from 'lucide-react';

const AIPoweredDocumentProcessorPage = () => {
  const features = [
    {
      title: "AI-Powered OCR & Text Extraction",
      description: "Advanced optical character recognition extracts text from any document with 99.5% accuracy, supporting 100+ languages",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Intelligent Document Classification",
      description: "Automatically categorize and organize documents by type, content, and importance using machine learning",
      icon: <Folder className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Smart Data Extraction",
      description: "Extract structured data from unstructured documents including forms, invoices, contracts, and reports",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Workflow Processing",
      description: "Create custom workflows to process documents automatically with approval chains and notifications",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Advanced Search & Retrieval",
      description: "Find any document instantly with AI-powered semantic search across all your document repositories",
      icon: <Search className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Document Analytics & Insights",
      description: "Get insights into document usage, processing times, and content trends with comprehensive analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$59",
      period: "per month",
      description: "Perfect for small teams with basic document needs",
      features: [
        "Up to 1,000 documents/month",
        "Basic OCR & text extraction",
        "Document classification",
        "Basic search functionality",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "Ideal for growing businesses with complex document workflows",
      features: [
        "Up to 10,000 documents/month",
        "Advanced AI processing",
        "Custom data extraction",
        "Workflow automation",
        "Advanced analytics",
        "API integrations",
        "Priority support",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per month",
      description: "Complete solution for large organizations with extensive document needs",
      features: [
        "Unlimited documents",
        "Full AI suite capabilities",
        "Custom model training",
        "Advanced security",
        "White-label options",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Compliance features"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      company: "Legal Services Inc.",
      role: "Document Manager",
      content: "The AI document processor has revolutionized our document management. We've reduced processing time by 80% and improved accuracy significantly.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Robert Kim",
      company: "Financial Services Group",
      role: "Operations Director",
      content: "The automated data extraction from invoices and contracts has saved us countless hours. The accuracy is remarkable.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Maria Santos",
      company: "Healthcare Systems",
      role: "Records Manager",
      content: "The document classification and search features have made our records management so much more efficient. Highly recommended.",
      rating: 5,
      avatar: "MS"
    }
  ];

  const stats = [
    { number: "99.5%", label: "OCR Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "80%", label: "Time Savings", icon: <Clock className="w-6 h-6" /> },
    { number: "100+", label: "Languages Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "4,200+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Save Time",
      description: "Automate document processing and eliminate manual data entry",
      icon: <Clock className="w-6 h-6" />,
      color: "text-green-400"
    },
    {
      title: "Improve Accuracy",
      description: "AI-powered processing reduces human errors and inconsistencies",
      icon: <Target className="w-6 h-6" />,
      color: "text-blue-400"
    },
    {
      title: "Enhance Security",
      description: "Advanced security features protect sensitive documents",
      icon: <Shield className="w-6 h-6" />,
      color: "text-purple-400"
    },
    {
      title: "Boost Productivity",
      description: "Streamlined workflows and automated processes increase efficiency",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-orange-400"
    }
  ];

  const documentTypes = [
    { name: "PDFs", icon: <FileText className="w-6 h-6" />, color: "text-red-400" },
    { name: "Images", icon: <FileImage className="w-6 h-6" />, color: "text-blue-400" },
    { name: "Spreadsheets", icon: <FileSpreadsheet className="w-6 h-6" />, color: "text-green-400" },
    { name: "Word Docs", icon: <FileText className="w-6 h-6" />, color: "text-blue-600" },
    { name: "Presentations", icon: <FileVideo className="w-6 h-6" />, color: "text-orange-400" },
    { name: "Audio Files", icon: <FileAudio className="w-6 h-6" />, color: "text-purple-400" }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered Document Processor - Zion Tech Group | Intelligent Document Management</title>
        <meta
          name="description"
          content="Transform your document management with AI-powered OCR, text extraction, classification, and workflow automation. Process documents 80% faster with 99.5% accuracy."
        />
        <meta
          name="keywords"
          content="document processing, OCR, text extraction, document management, AI documents, workflow automation, document classification, data extraction"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Document Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI-Powered Document Processor
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your document management with AI-powered OCR, intelligent text extraction, 
              automated classification, and workflow processing. Process documents 80% faster with 
              99.5% accuracy using our cutting-edge platform.
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
                <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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

        {/* Document Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Process Any Document Type
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Support for all major document formats with intelligent processing
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {documentTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className={`w-12 h-12 mx-auto mb-3 ${type.color}`}>
                    {type.icon}
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                    {type.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI Document Processor?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transform your document management with proven benefits and measurable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <div className={benefit.color}>
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Leverage cutting-edge artificial intelligence to streamline your document processing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                      : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about AI Document Processor
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Document Processing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using AI Document Processor to streamline their workflows.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
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
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPoweredDocumentProcessorPage;