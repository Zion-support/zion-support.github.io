import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  TrendingUp, 
  Database, 
  Cpu, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Globe,
  Mail,
  Smartphone,
  DollarSign,
  Target,
  Settings,
  FileText,
  MessageSquare,
  Calendar,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bell,
  Eye,
  Heart,
  ThumbsUp,
  Rocket,
  Wifi,
  Battery,
  Camera,
  Headphones,
  Mic,
  Video,
  Image,
  Music,
  BookOpen,
  Lightbulb,
  Puzzle,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  Gift,
  Tag,
  Percent,
  Calculator,
  PieChart,
  LineChart,
  Activity,
  Layers,
  Grid,
  List,
  Map,
  Compass,
  Navigation,
  Globe2,
  WifiOff,
  Signal,
  Bluetooth,
  Usb,
  HardDrive,
  MemoryStick,
  Printer,
  Scanner,
  Fax,
  Phone,
  Voicemail,
  Headset,
  Speaker,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  RotateCcw,
  RotateCw,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  Maximize,
  Minimize,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Star as StarIcon,
  Moon,
  Sun,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Timer,
  Stopwatch,
  Hourglass,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12,
  Calendar as CalendarIcon,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarSearch,
  CalendarHeart,
  CalendarStar,
  CalendarClock,
  CalendarUser,
  CalendarEdit,
  CalendarTrash,
  CalendarSettings,
  CalendarImport,
  CalendarExport,
  CalendarShare,
  CalendarLock,
  CalendarUnlock,
  CalendarKey,
  CalendarShield,
  CalendarAlert,
  CalendarBell,
  CalendarZap,
  CalendarSparkles,
  CalendarGift,
  CalendarAward,
  CalendarTrophy,
  CalendarMedal,
  CalendarCrown,
  CalendarGem,
  CalendarDiamond,
  CalendarPearl,
  CalendarRuby,
  CalendarSapphire,
  CalendarEmerald,
  CalendarTopaz,
  CalendarAmethyst,
  CalendarQuartz,
  CalendarCrystal,
  CalendarJewel,
  CalendarTreasure,
  CalendarGold,
  CalendarSilver,
  CalendarBronze,
  CalendarPlatinum,
  CalendarTitanium,
  CalendarSteel,
  CalendarIron,
  CalendarCopper,
  CalendarAluminum,
  CalendarZinc,
  CalendarTin,
  CalendarLead,
  CalendarMercury,
  CalendarUranium,
  CalendarPlutonium,
  CalendarRadium,
  CalendarThorium,
  CalendarActinium,
  CalendarProtactinium,
  CalendarNeptunium,
  CalendarAmericium,
  CalendarCurium,
  CalendarBerkelium,
  CalendarCalifornium,
  CalendarEinsteinium,
  CalendarFermium,
  CalendarMendelevium,
  CalendarNobelium,
  CalendarLawrencium,
  CalendarRutherfordium,
  CalendarDubnium,
  CalendarSeaborgium,
  CalendarBohrium,
  CalendarHassium,
  CalendarMeitnerium,
  CalendarDarmstadtium,
  CalendarRoentgenium,
  CalendarCopernicium,
  CalendarNihonium,
  CalendarFlerovium,
  CalendarMoscovium,
  CalendarLivermorium,
  CalendarTennessine,
  CalendarOganesson,
  Package,
  Receipt,
  ClipboardList,
  Workflow,
  Code
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "Advanced analytics platform with AI-powered insights and real-time reporting for data-driven decision making",
      features: [
        "Real-time data visualization",
        "AI-powered insights",
        "Custom dashboards",
        "Automated reporting",
        "Multi-source data integration",
        "Predictive analytics",
        "Mobile app access",
        "API integration"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      href: "/zion-analytics-pro",
      price: "$99/month",
      originalPrice: "$199/month",
      discount: "50% OFF",
      category: "Analytics",
      rating: 4.9,
      reviews: 1892,
      featured: true,
      benefits: [
        "Increase data accuracy by 95%",
        "Reduce reporting time by 80%",
        "Improve decision making speed",
        "Boost ROI by 40%"
      ]
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity solution with AI-powered threat detection and automated incident response",
      features: [
        "24/7 threat monitoring",
        "Automated incident response",
        "Vulnerability scanning",
        "Security compliance reporting",
        "Employee training modules",
        "Zero-trust architecture",
        "Advanced threat intelligence",
        "Real-time alerts"
      ],
      icon: <Shield className="w-8 h-8" />,
      href: "/zion-security-shield",
      price: "$149/month",
      originalPrice: "$299/month",
      discount: "50% OFF",
      category: "Security",
      rating: 4.8,
      reviews: 1654,
      featured: true,
      benefits: [
        "Reduce security incidents by 95%",
        "Automate 90% of security tasks",
        "Ensure compliance with regulations",
        "Protect against advanced threats"
      ]
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage and backup solution with enterprise-grade encryption and unlimited scalability",
      features: [
        "End-to-end encryption",
        "Automated backups",
        "File versioning",
        "Team collaboration",
        "Cross-platform sync",
        "Unlimited storage",
        "Advanced sharing controls",
        "Mobile access"
      ],
      icon: <Cloud className="w-8 h-8" />,
      href: "/zion-cloud-vault",
      price: "$79/month",
      originalPrice: "$159/month",
      discount: "50% OFF",
      category: "Storage",
      rating: 4.7,
      reviews: 1234,
      featured: true,
      benefits: [
        "Secure data storage",
        "Reduce storage costs by 60%",
        "Improve team collaboration",
        "Ensure data availability"
      ]
    },
    {
      id: "zion-ai-crm-pro",
      name: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI-powered automation and predictive analytics",
      features: [
        "AI lead scoring",
        "Automated follow-ups",
        "Sales forecasting",
        "Customer segmentation",
        "Integration capabilities",
        "Pipeline management",
        "Performance analytics",
        "Mobile app"
      ],
      icon: <Users className="w-8 h-8" />,
      href: "/zion-ai-crm-pro",
      price: "$129/month",
      originalPrice: "$259/month",
      discount: "50% OFF",
      category: "CRM",
      rating: 4.8,
      reviews: 1456,
      featured: false,
      benefits: [
        "Increase sales by 35%",
        "Improve lead quality by 50%",
        "Reduce follow-up time by 70%",
        "Boost customer retention"
      ]
    },
    {
      id: "zion-ai-marketing-automation-pro",
      name: "Zion AI Marketing Automation Pro",
      description: "Complete marketing automation platform with AI-driven campaign optimization and multi-channel orchestration",
      features: [
        "Email marketing automation",
        "Social media scheduling",
        "Lead nurturing workflows",
        "A/B testing",
        "Performance analytics",
        "Personalization engine",
        "Campaign optimization",
        "ROI tracking"
      ],
      icon: <Globe className="w-8 h-8" />,
      href: "/zion-ai-marketing-automation-pro",
      price: "$199/month",
      originalPrice: "$399/month",
      discount: "50% OFF",
      category: "Marketing",
      rating: 4.6,
      reviews: 1123,
      featured: false,
      benefits: [
        "Increase conversion rates by 45%",
        "Reduce marketing costs by 30%",
        "Improve campaign performance",
        "Scale marketing operations"
      ]
    },
    {
      id: "zion-ai-project-manager-pro",
      name: "Zion AI Project Manager Pro",
      description: "Smart project management tool with AI-powered resource allocation and timeline optimization",
      features: [
        "AI task prioritization",
        "Resource optimization",
        "Timeline forecasting",
        "Team collaboration",
        "Progress tracking",
        "Risk assessment",
        "Budget management",
        "Integration capabilities"
      ],
      icon: <Award className="w-8 h-8" />,
      href: "/zion-ai-project-manager-pro",
      price: "$159/month",
      originalPrice: "$319/month",
      discount: "50% OFF",
      category: "Productivity",
      rating: 4.7,
      reviews: 987,
      featured: false,
      benefits: [
        "Complete projects 40% faster",
        "Reduce project costs by 25%",
        "Improve team productivity",
        "Minimize project risks"
      ]
    },
    {
      id: "zion-ai-video-generator",
      name: "Zion AI Video Generator",
      description: "Create professional videos with AI-powered content generation, voice synthesis, and smart editing",
      features: [
        "AI script generation",
        "Voice synthesis (50+ languages)",
        "Auto video editing",
        "Brand template library",
        "Multi-format export",
        "Collaboration tools",
        "Analytics dashboard",
        "Mobile app"
      ],
      icon: <Video className="w-8 h-8" />,
      href: "/zion-ai-video-generator",
      price: "$89/month",
      originalPrice: "$179/month",
      discount: "50% OFF",
      category: "Content",
      rating: 4.5,
      reviews: 756,
      featured: false,
      benefits: [
        "Create videos 10x faster",
        "Reduce production costs by 70%",
        "Improve content quality",
        "Scale video production"
      ]
    },
    {
      id: "zion-ai-invoice-generator",
      name: "Zion AI Invoice Generator",
      description: "Automated invoice generation with smart templates, payment tracking, and financial analytics",
      features: [
        "Auto invoice generation",
        "Payment tracking",
        "Tax calculations",
        "Multi-currency support",
        "Client management",
        "Recurring billing",
        "Financial reporting",
        "Mobile app"
      ],
      icon: <Receipt className="w-8 h-8" />,
      href: "/zion-ai-invoice-generator",
      price: "$49/month",
      originalPrice: "$99/month",
      discount: "50% OFF",
      category: "Finance",
      rating: 4.6,
      reviews: 634,
      featured: false,
      benefits: [
        "Reduce invoicing time by 80%",
        "Improve payment collection",
        "Eliminate billing errors",
        "Streamline financial processes"
      ]
    },
    {
      id: "zion-ai-customer-insights",
      name: "Zion AI Customer Insights",
      description: "Deep customer analytics and behavior prediction for better business decisions and personalization",
      features: [
        "Customer segmentation",
        "Behavior prediction",
        "Sentiment analysis",
        "Churn prediction",
        "Personalization engine",
        "Real-time insights",
        "Multi-channel integration",
        "Custom dashboards"
      ],
      icon: <Eye className="w-8 h-8" />,
      href: "/zion-ai-customer-insights",
      price: "$149/month",
      originalPrice: "$299/month",
      discount: "50% OFF",
      category: "Analytics",
      rating: 4.8,
      reviews: 892,
      featured: false,
      benefits: [
        "Increase customer retention by 30%",
        "Improve personalization accuracy",
        "Reduce churn by 25%",
        "Boost customer satisfaction"
      ]
    },
    {
      id: "zion-ai-voice-assistant-pro",
      name: "Zion AI Voice Assistant Pro",
      description: "Advanced voice assistant with natural language processing and multi-platform integration",
      features: [
        "Natural language processing",
        "Multi-platform support",
        "Custom voice training",
        "API integration",
        "Task automation",
        "Calendar management",
        "Email handling",
        "Smart home control"
      ],
      icon: <Mic className="w-8 h-8" />,
      href: "/zion-ai-voice-assistant-pro",
      price: "$119/month",
      originalPrice: "$239/month",
      discount: "50% OFF",
      category: "AI Assistant",
      rating: 4.7,
      reviews: 567,
      featured: false,
      benefits: [
        "Increase productivity by 50%",
        "Reduce manual tasks by 60%",
        "Improve accessibility",
        "Enhance user experience"
      ]
    },
    {
      id: "zion-ai-code-reviewer",
      name: "Zion AI Code Reviewer",
      description: "Intelligent code review and optimization with automated testing and security analysis",
      features: [
        "Automated code review",
        "Security vulnerability detection",
        "Performance optimization",
        "Code quality metrics",
        "Integration with Git",
        "Team collaboration",
        "Custom rules engine",
        "Real-time feedback"
      ],
      icon: <Code className="w-8 h-8" />,
      href: "/zion-ai-code-reviewer",
      price: "$179/month",
      originalPrice: "$359/month",
      discount: "50% OFF",
      category: "Development",
      rating: 4.9,
      reviews: 445,
      featured: false,
      benefits: [
        "Reduce bugs by 70%",
        "Improve code quality",
        "Accelerate development",
        "Enhance security"
      ]
    },
    {
      id: "zion-ai-contract-analyzer",
      name: "Zion AI Contract Analyzer",
      description: "AI-powered contract analysis and risk assessment with automated compliance checking",
      features: [
        "Contract analysis",
        "Risk assessment",
        "Compliance checking",
        "Clause extraction",
        "Automated summaries",
        "Version comparison",
        "Legal database integration",
        "Custom templates"
      ],
      icon: <FileText className="w-8 h-8" />,
      href: "/zion-ai-contract-analyzer",
      price: "$199/month",
      originalPrice: "$399/month",
      discount: "50% OFF",
      category: "Legal",
      rating: 4.6,
      reviews: 234,
      featured: false,
      benefits: [
        "Reduce contract review time by 85%",
        "Improve risk identification",
        "Ensure compliance",
        "Streamline legal processes"
      ]
    }
  ];

  const categories = [
    { name: "All", count: microSaasProducts.length, active: true },
    { name: "Analytics", count: microSaasProducts.filter(s => s.category === "Analytics").length, active: false },
    { name: "Security", count: microSaasProducts.filter(s => s.category === "Security").length, active: false },
    { name: "Storage", count: microSaasProducts.filter(s => s.category === "Storage").length, active: false },
    { name: "CRM", count: microSaasProducts.filter(s => s.category === "CRM").length, active: false },
    { name: "Marketing", count: microSaasProducts.filter(s => s.category === "Marketing").length, active: false },
    { name: "Productivity", count: microSaasProducts.filter(s => s.category === "Productivity").length, active: false },
    { name: "Content", count: microSaasProducts.filter(s => s.category === "Content").length, active: false },
    { name: "Finance", count: microSaasProducts.filter(s => s.category === "Finance").length, active: false },
    { name: "AI Assistant", count: microSaasProducts.filter(s => s.category === "AI Assistant").length, active: false },
    { name: "Development", count: microSaasProducts.filter(s => s.category === "Development").length, active: false },
    { name: "Legal", count: microSaasProducts.filter(s => s.category === "Legal").length, active: false }
  ];

  const stats = [
    { label: "Active Users", value: "50,000+", icon: <Users className="w-6 h-6" /> },
    { label: "Uptime", value: "99.9%", icon: <Shield className="w-6 h-6" /> },
    { label: "Customer Satisfaction", value: "98%", icon: <Star className="w-6 h-6" /> },
    { label: "Cost Savings", value: "60%", icon: <DollarSign className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data insights. We've seen a 300% improvement in decision-making speed and a 40% increase in revenue.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Zion Security Shield gives us peace of mind. Our security incidents dropped by 95% since implementation, and we're now fully compliant.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio",
      role: "Project Manager",
      content: "Zion AI Project Manager Pro has streamlined our workflow. We're completing projects 40% faster and our team productivity has increased significantly.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Software</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS solutions designed to streamline your business operations with AI-powered tools and automation. Analytics, security, CRM, and more." />
        <meta name="keywords" content="micro SAAS, business software, AI tools, automation, business solutions, software as a service, analytics, security, CRM, project management" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {' '}That Scale
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused software solutions designed to solve specific business challenges 
              and boost productivity across your organization. All solutions include 24/7 support and 99.9% uptime guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our carefully crafted suite of business tools designed for modern enterprises
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                    product.featured ? 'ring-2 ring-cyan-500/50' : ''
                  }`}
                >
                  {product.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                        FEATURED
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {product.icon}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{product.price}</span>
                        <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                      </div>
                      <div className="text-green-400 text-xs font-semibold">{product.discount}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                      {product.category}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 4 && (
                      <li className="text-xs text-cyan-400">
                        +{product.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <span className="text-gray-300 text-sm ml-2">({product.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <Link
                    to={product.href}
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Don't just take our word for it. See what our satisfied customers have to say about our micro SAAS solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your journey with our micro SAAS solutions today. Choose the perfect tools for your business needs.
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
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
