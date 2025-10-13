import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  CheckCircle, 
  AlertTriangle, 
  Brain, 
  Zap, 
  Shield, 
  Target, 
  Star,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  Languages,
  Settings,
  Bell,
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
  Lock,
  Eye,
  EyeOff,
  Upload,
  Download,
  Share2,
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
  TrendingUp,
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
  BarChart3,
  Users,
  Clock,
  Calendar,
  HelpCircle,
  ChevronRight,
  Bug,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Terminal,
  Command,
  Layers,
  Cpu,
  MemoryStick,
  HardDrive,
  Wrench,
  Hammer,
  Screwdriver,
  Cog,
  Settings2,
  Sliders,
  ToggleLeft,
  ToggleRight,
  Power,
  PowerOff,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBack,
  SkipForward,
  RotateCcw,
  RotateCw,
  Repeat,
  Shuffle,
  VolumeX,
  Volume1,
  Volume2 as Volume2Icon,
  Mic,
  MicOff,
  VideoOff,
  Maximize,
  Minimize,
  Move,
  Move3D,
  Rotate3D,
  Box,
  Package,
  Archive,
  FolderOpen,
  FileText,
  FileImage,
  FileVideo,
  FileAudio,
  FileSpreadsheet,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  FileCode,
  FileJson,
  FileXml,
  FileCss,
  FileHtml,
  FileJs,
  FileTs,
  FileJsx,
  FileTsx,
  FileVue,
  FileSvelte,
  FileReact,
  FileAngular,
  FileNode,
  FilePython,
  FileJava,
  FileC,
  FileCpp,
  FileCsharp,
  FilePhp,
  FileRuby,
  FileGo,
  FileRust,
  FileSwift,
  FileKotlin,
  FileDart,
  FileScala,
  FileR,
  FileMatlab,
  FileSql,
  FileDatabase,
  FileArchive,
  FileZip,
  FileRar,
  File7z,
  FileTar,
  FileGz,
  FileBz2,
  FileXz,
  FileLz4,
  FileZst,
  FileBrotli,
  FileDeflate,
  FileInflate,
  FileCompress,
  FileExtract,
  FileUnzip,
  FileUnrar,
  FileUn7z,
  FileUntar,
  FileUngz,
  FileUnbz2,
  FileUnxz,
  FileUnlz4,
  FileUnzst,
  FileUnbrotli,
  FileUndeflate,
  FileUninflate,
  FileUncompress,
  FileUnextract,
  FileUnunzip,
  FileUnunrar,
  FileUnun7z,
  FileUnuntar,
  FileUnungz,
  FileUnunbz2,
  FileUnunxz,
  FileUnunlz4,
  FileUnunzst,
  FileUnunbrotli,
  FileUnundeflate,
  FileUnuninflate,
  FileUnuncompress,
  FileUnunextract,
  FileUnununzip,
  FileUnununrar,
  FileUnunun7z,
  FileUnununtar,
  FileUnunungz,
  FileUnununbz2,
  FileUnununxz,
  FileUnununlz4,
  FileUnununzst,
  FileUnununbrotli,
  FileUnunundeflate,
  FileUnununinflate,
  FileUnununcompress,
  FileUnununextract
} from 'lucide-react';

const AiCodeReviewerProPage = () => {
  const features = [
    {
      title: "AI-Powered Code Analysis",
      description: "Advanced machine learning algorithms analyze your code for bugs, security vulnerabilities, performance issues, and code quality problems with 99.2% accuracy.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Language Support",
      description: "Supports 50+ programming languages including Python, JavaScript, Java, C++, Go, Rust, and more with language-specific best practices and patterns.",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Security Vulnerability Detection",
      description: "Automatically detect security vulnerabilities, SQL injection risks, XSS vulnerabilities, and other security issues before they reach production.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Performance Optimization",
      description: "Identify performance bottlenecks, memory leaks, inefficient algorithms, and suggest optimizations to improve code performance and scalability.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Code Quality Metrics",
      description: "Comprehensive code quality analysis including cyclomatic complexity, maintainability index, technical debt, and code coverage recommendations.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Real-time Collaboration",
      description: "Team-based code review with real-time comments, suggestions, and approval workflows integrated with popular version control systems.",
      icon: <Users className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Developer",
      price: "$49",
      period: "/month",
      description: "Perfect for individual developers and freelancers",
      features: [
        "Up to 10 repositories",
        "Basic AI analysis",
        "5 programming languages",
        "Security scanning",
        "Performance analysis",
        "Email support",
        "GitHub integration"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Team",
      price: "$149",
      period: "/month",
      description: "Ideal for development teams and small companies",
      features: [
        "Up to 50 repositories",
        "Advanced AI features",
        "All programming languages",
        "Advanced security scanning",
        "Code quality metrics",
        "Team collaboration",
        "Priority support",
        "API access",
        "Custom rules"
      ],
      popular: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations and enterprises",
      features: [
        "Unlimited repositories",
        "All AI features included",
        "Custom AI models",
        "Advanced security analysis",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "White-label options",
        "SSO integration",
        "Custom reporting"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Tech Startup",
      role: "Lead Developer",
      content: "Zion AI Code Reviewer Pro has revolutionized our code review process. It catches bugs and security issues we would have missed, and the AI suggestions are incredibly helpful.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Sarah Johnson",
      company: "Software Agency",
      role: "CTO",
      content: "The multi-language support is outstanding. We work with multiple tech stacks and this tool handles everything seamlessly. Our code quality has improved dramatically.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Enterprise Corp",
      role: "Security Engineer",
      content: "The security vulnerability detection is top-notch. It's caught several critical issues before they reached production, potentially saving us from major security breaches.",
      rating: 5,
      avatar: "MC"
    }
  ];

  const stats = [
    { number: "99.2%", label: "Analysis Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "Languages Supported", icon: <Code className="w-6 h-6" /> },
    { number: "25,000+", label: "Active Developers", icon: <Users className="w-6 h-6" /> },
    { number: "1M+", label: "Lines of Code Analyzed", icon: <FileCode className="w-6 h-6" /> }
  ];

  const supportedLanguages = [
    { name: "Python", logo: "PY", color: "from-yellow-500 to-orange-500" },
    { name: "JavaScript", logo: "JS", color: "from-yellow-400 to-yellow-600" },
    { name: "Java", logo: "JA", color: "from-red-500 to-red-600" },
    { name: "C++", logo: "C++", color: "from-blue-500 to-blue-600" },
    { name: "Go", logo: "GO", color: "from-cyan-500 to-blue-500" },
    { name: "Rust", logo: "RS", color: "from-orange-500 to-red-500" },
    { name: "TypeScript", logo: "TS", color: "from-blue-600 to-blue-700" },
    { name: "C#", logo: "C#", color: "from-purple-500 to-purple-600" },
    { name: "PHP", logo: "PHP", color: "from-indigo-500 to-purple-500" },
    { name: "Ruby", logo: "RB", color: "from-red-600 to-red-700" },
    { name: "Swift", logo: "SW", color: "from-orange-600 to-orange-700" },
    { name: "Kotlin", logo: "KT", color: "from-purple-600 to-purple-700" }
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
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Code Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            AI Code Reviewer
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Pro
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The most intelligent code review platform. Catch bugs, security vulnerabilities, and performance issues 
            before they reach production with AI-powered analysis and real-time collaboration.
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
              Intelligent Code Analysis
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered platform makes code review smarter, faster, and more comprehensive than ever before.
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

      {/* Supported Languages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supports 50+ Programming Languages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From popular languages to emerging ones, our AI understands them all.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {supportedLanguages.map((language, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${language.color} flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {language.logo}
                </div>
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                  {language.name}
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
              Start with a free trial and scale as your development team grows.
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
              Trusted by Development Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what developers say about Zion AI Code Reviewer Pro
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
            Ready to Improve Your Code Quality?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of developers who trust Zion AI Code Reviewer Pro for 
            intelligent, automated code analysis. Start your free trial today.
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

export default AiCodeReviewerProPage;