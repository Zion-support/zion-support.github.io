import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Brain, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Zap, 
  Shield, 
  Cloud, 
  BarChart3, 
  Calendar,
  FileText,
  Share2,
  Mail,
  Phone,
  Globe,
  Target,
  TrendingUp,
  Settings,
  Monitor,
  Lock,
  Server,
  Cpu,
  Network,
  HardDrive,
  Headphones,
  Sparkles,
  Code,
  Bot,
  Wifi,
  Heart,
  Receipt,
  Package,
  Clock,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Activity,
  PieChart,
  LineChart,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  Lightbulb,
  Database,
  Smartphone,
  Laptop,
  Headphones as HeadphoneIcon,
  MessageCircle,
  Image,
  Video,
  Hash,
  AtSign,
  ThumbsUp,
  MessageSquare,
  Retweet,
  Bookmark,
  Send,
  Plus,
  Edit,
  Trash2,
  Copy,
  Share,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Bell,
  FileSearch,
  FileCheck,
  FileX,
  FilePlus,
  FileMinus,
  FileEdit,
  FileImage,
  File,
  FileSpreadsheet,
  Video as VideoIcon,
  Music,
  Archive,
  Folder,
  FolderOpen,
  Lock as LockIcon,
  Unlock,
  Key,
  Scan
} from "lucide-react";

export default function MicroSaaSServices() {
  const microSaasServices = [
    {
      name: "AI Smart Scheduler",
      description: "Intelligent calendar management with AI-powered optimization, team collaboration, and smart scheduling that learns your patterns.",
      price: "From $19/month",
      originalPrice: "$39/month",
      icon: <Calendar className="w-8 h-8" />,
      link: "/ai-smart-scheduler",
      color: "from-purple-500 to-cyan-500",
      category: "Productivity",
      features: ["AI-powered scheduling", "Team collaboration", "50+ integrations", "Smart notifications", "Analytics & insights", "Automated workflows"],
      popular: true,
      rating: 4.9,
      users: "5,000+"
    },
    {
      name: "AI Document Intelligence",
      description: "Smart document processing with OCR, intelligent search, automated workflows, and support for 50+ file formats.",
      price: "From $49/month",
      originalPrice: "$99/month",
      icon: <FileText className="w-8 h-8" />,
      link: "/ai-document-intelligence",
      color: "from-green-500 to-teal-500",
      category: "Document Management",
      features: ["50+ file formats", "99.9% OCR accuracy", "Intelligent search", "Automated workflows", "Advanced security", "Real-time collaboration"],
      popular: true,
      rating: 4.8,
      users: "3,500+"
    },
    {
      name: "AI Social Media Manager",
      description: "AI-powered social media management with content generation, multi-platform posting, and advanced analytics.",
      price: "From $29/month",
      originalPrice: "$59/month",
      icon: <Share2 className="w-8 h-8" />,
      link: "/ai-social-media-manager",
      color: "from-pink-500 to-purple-500",
      category: "Social Media",
      features: ["8+ platform support", "AI content generation", "Smart scheduling", "Advanced analytics", "Content calendar", "Automated engagement"],
      popular: true,
      rating: 4.7,
      users: "8,000+"
    },
    {
      name: "Zion AI Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated insights.",
      price: "From $299/month",
      originalPrice: "$599/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-ai-analytics-pro",
      color: "from-blue-500 to-cyan-500",
      category: "Analytics",
      features: ["Real-time processing", "Predictive analytics", "Advanced visualization", "Automated insights", "100+ integrations", "Custom AI models"],
      popular: false,
      rating: 4.9,
      users: "2,500+"
    },
    {
      name: "Zion Security Shield Pro",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated response, and 24/7 monitoring.",
      price: "From $499/month",
      originalPrice: "$999/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-security-shield-pro",
      color: "from-red-500 to-orange-500",
      category: "Security",
      features: ["AI threat detection", "Automated response", "24/7 monitoring", "Compliance reporting", "Incident response", "Security training"],
      popular: false,
      rating: 4.8,
      users: "1,200+"
    },
    {
      name: "Zion Cloud Vault Pro",
      description: "Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced collaboration features.",
      price: "From $99/month",
      originalPrice: "$199/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-cloud-vault-pro",
      color: "from-indigo-500 to-purple-500",
      category: "Cloud Storage",
      features: ["End-to-end encryption", "Unlimited storage", "Advanced sharing", "Version control", "Mobile apps", "API access"],
      popular: false,
      rating: 4.6,
      users: "4,000+"
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring, automation, and advanced analytics.",
      price: "From $199/month",
      originalPrice: "$399/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      color: "from-violet-500 to-purple-500",
      category: "CRM",
      features: ["AI lead scoring", "Automated follow-ups", "Pipeline management", "Performance analytics", "Integration hub", "Mobile access"],
      popular: false,
      rating: 4.7,
      users: "3,200+"
    },
    {
      name: "Zion AI Marketing Pro",
      description: "AI-powered marketing automation with predictive content generation, multi-channel orchestration, and advanced analytics.",
      price: "From $149/month",
      originalPrice: "$299/month",
      icon: <Target className="w-8 h-8" />,
      link: "/zion-ai-marketing-automation-pro",
      color: "from-pink-500 to-rose-500",
      category: "Marketing",
      features: ["AI content generation", "Multi-channel campaigns", "Lead scoring", "A/B testing", "Personalization", "Analytics dashboard"],
      popular: false,
      rating: 4.6,
      users: "2,800+"
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and automated reporting.",
      price: "From $99/month",
      originalPrice: "$199/month",
      icon: <Calendar className="w-8 h-8" />,
      link: "/zion-ai-project-manager-pro",
      color: "from-orange-500 to-amber-500",
      category: "Project Management",
      features: ["AI task prioritization", "Resource optimization", "Automated reporting", "Team collaboration", "Time tracking", "Risk assessment"],
      popular: false,
      rating: 4.5,
      users: "1,800+"
    },
    {
      name: "AI Email Analyzer",
      description: "Intelligent email analysis with sentiment detection, priority scoring, and automated response suggestions.",
      price: "From $39/month",
      originalPrice: "$79/month",
      icon: <Mail className="w-8 h-8" />,
      link: "/ai-powered-email-analyzer",
      color: "from-cyan-500 to-blue-500",
      category: "Communication",
      features: ["Sentiment analysis", "Priority scoring", "Auto-responses", "Email templates", "Analytics", "Integration"],
      popular: false,
      rating: 4.4,
      users: "1,500+"
    },
    {
      name: "Smart Inventory Optimizer",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and cost optimization.",
      price: "From $79/month",
      originalPrice: "$159/month",
      icon: <Package className="w-8 h-8" />,
      link: "/smart-inventory-optimizer",
      color: "from-emerald-500 to-green-500",
      category: "Inventory",
      features: ["Demand forecasting", "Automated reordering", "Cost optimization", "Multi-location", "Barcode scanning", "Analytics"],
      popular: false,
      rating: 4.6,
      users: "2,200+"
    },
    {
      name: "AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment analysis across all channels with automated alerts and response recommendations.",
      price: "From $59/month",
      originalPrice: "$119/month",
      icon: <Heart className="w-8 h-8" />,
      link: "/ai-customer-sentiment-tracker",
      color: "from-rose-500 to-pink-500",
      category: "Customer Service",
      features: ["Real-time analysis", "Multi-channel monitoring", "Automated alerts", "Response suggestions", "Trend analysis", "Dashboard"],
      popular: false,
      rating: 4.5,
      users: "1,900+"
    },
    {
      name: "Smart Expense Categorizer",
      description: "AI-powered expense management with automatic categorization, receipt scanning, and financial insights.",
      price: "From $49/month",
      originalPrice: "$99/month",
      icon: <Receipt className="w-8 h-8" />,
      link: "/smart-expense-categorizer",
      color: "from-amber-500 to-yellow-500",
      category: "Finance",
      features: ["Auto-categorization", "Receipt scanning", "Expense tracking", "Budget management", "Reporting", "Mobile app"],
      popular: false,
      rating: 4.3,
      users: "1,600+"
    },
    {
      name: "AI Code Assistant",
      description: "Intelligent code generation, review, and optimization with support for multiple programming languages.",
      price: "From $89/month",
      originalPrice: "$179/month",
      icon: <Code className="w-8 h-8" />,
      link: "/ai-code-assistant",
      color: "from-slate-500 to-gray-500",
      category: "Development",
      features: ["Code generation", "Bug detection", "Performance optimization", "Documentation", "Code review", "Refactoring"],
      popular: false,
      rating: 4.7,
      users: "3,100+"
    },
    {
      name: "AI Voice Assistant",
      description: "Custom voice assistant with natural language processing, task automation, and multi-language support.",
      price: "From $129/month",
      originalPrice: "$259/month",
      icon: <Bot className="w-8 h-8" />,
      link: "/ai-voice-assistant",
      color: "from-teal-500 to-cyan-500",
      category: "AI Assistant",
      features: ["Voice recognition", "Task automation", "Multi-language", "Custom commands", "Integration", "Analytics"],
      popular: false,
      rating: 4.4,
      users: "1,400+"
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length },
    { name: "Productivity", count: microSaasServices.filter(s => s.category === "Productivity").length },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length },
    { name: "Communication", count: microSaasServices.filter(s => s.category === "Communication").length },
    { name: "Development", count: microSaasServices.filter(s => s.category === "Development").length }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "50,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Tech Group's micro SAAS solutions have completely transformed our operations. The AI Smart Scheduler alone saved us 20 hours per week.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI Document Intelligence platform is incredible. We can now process thousands of documents in minutes instead of hours.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "The AI Social Media Manager has increased our engagement by 300% while reducing our social media management time by 60%.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - AI-Powered Business Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS services including AI Smart Scheduler, Document Intelligence, Social Media Manager, and 60+ other solutions. Starting from $19/month."
        />
        <meta
          name="keywords"
          content="micro SAAS, AI solutions, business automation, productivity tools, document management, social media management, analytics, CRM, project management"
        />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">#1 Micro SAAS Platform 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Micro SAAS Services
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
                From productivity tools to advanced analytics, we have everything you need to succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Watch Demo
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered business solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                    service.popular 
                      ? 'border-cyan-500/50 shadow-cyan-500/25' 
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 -right-3">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">{service.rating}</span>
                      </div>
                      <div className="text-gray-300 text-sm">{service.users} users</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
                      {service.category}
                    </span>
                  </div>
                  
                  {/* Pricing */}
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-cyan-400 text-center">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Trusted by Business Leaders
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our micro SAAS solutions
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

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses using our micro SAAS solutions to drive growth and efficiency.
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">kleber@ziontechgroup.com</a>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">+1 302 464 0950</a>
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
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Watch Demo
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}