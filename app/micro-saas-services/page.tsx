import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Code, 
  Database, 
  Users, 
  Award, 
  Mail, 
  Smartphone, 
  Monitor, 
  Target, 
  TrendingUp, 
  Cpu, 
  Network, 
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
  DollarSign,
  Clock,
  Globe,
  Settings,
  Lock,
  Server,
  Wifi,
  Camera,
  Palette,
  Brush,
  Scissors,
  Wrench,
  Hammer,
  Screwdriver,
  Key,
  Unlock,
  EyeOff,
  RefreshCw,
  RotateCcw as RotateCcwIcon,
  Save,
  Edit,
  Trash2,
  Copy,
  Cut,
  Paste,
  Undo,
  Redo,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Search as SearchIcon,
  Filter as FilterIcon,
  SortAsc,
  SortDesc,
  Grid as GridIcon,
  List as ListIcon,
  Layout,
  Sidebar,
  SidebarClose,
  SidebarOpen,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  Split,
  Columns,
  Rows,
  Square as SquareIcon,
  Circle as CircleIcon,
  Triangle as TriangleIcon,
  Hexagon as HexagonIcon,
  Octagon as OctagonIcon,
  Diamond as DiamondIcon,
  Star as StarIcon2,
  Moon as MoonIcon,
  Sun as SunIcon,
  Sunrise as SunriseIcon,
  Sunset as SunsetIcon,
  CloudRain as CloudRainIcon,
  CloudSnow as CloudSnowIcon,
  CloudLightning as CloudLightningIcon,
  Wind as WindIcon,
  Droplets as DropletsIcon,
  Thermometer as ThermometerIcon,
  Gauge as GaugeIcon,
  Timer as TimerIcon,
  Stopwatch as StopwatchIcon,
  Hourglass as HourglassIcon
} from 'lucide-react';

export default function MicroSaasServices() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasServices = useMemo(() => [
    // AI-Powered Business Tools
    {
      id: "zion-ai-analytics-pro",
      name: "Zion AI Analytics Pro",
      description: "Advanced AI-powered business intelligence platform with predictive analytics, real-time dashboards, and automated insights generation.",
      price: "From $299/month",
      originalPrice: "$599/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time predictive analytics",
        "Machine learning insights",
        "Automated report generation",
        "Custom data visualization",
        "Multi-platform integration",
        "Advanced filtering & segmentation",
        "Export to PDF/Excel/CSV",
        "White-label options"
      ],
      benefits: [
        "Increase revenue by 35%",
        "Reduce reporting time by 85%",
        "Make data-driven decisions",
        "Scale with your business"
      ],
      category: "AI Analytics",
      rating: 4.9,
      reviews: 1247,
      link: "/zion-ai-analytics-pro",
      featured: true,
      popular: true
    },
    {
      id: "zion-ai-content-studio",
      name: "Zion AI Content Studio",
      description: "Revolutionary AI content creation platform with natural language processing, multi-language support, and brand optimization.",
      price: "From $199/month",
      originalPrice: "$399/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Advanced NLP content generation",
        "Multi-language support (100+ languages)",
        "Brand voice customization",
        "SEO optimization & keyword research",
        "Content calendar management",
        "Social media optimization",
        "Plagiarism detection & originality",
        "Performance analytics & insights"
      ],
      benefits: [
        "Create 20x more content",
        "Improve SEO rankings by 60%",
        "Maintain brand consistency",
        "Save 25+ hours weekly"
      ],
      category: "AI Content",
      rating: 4.7,
      reviews: 1834,
      link: "/zion-ai-content-studio",
      featured: true,
      popular: true
    },
    {
      id: "zion-ai-crm-assistant",
      name: "Zion AI CRM Assistant",
      description: "Intelligent CRM with AI-powered lead qualification, sales forecasting, and automated follow-ups.",
      price: "From $229/month",
      originalPrice: "$459/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "Lead scoring & qualification",
        "Sales forecasting & analytics",
        "Automated follow-up sequences",
        "CRM integration & sync",
        "Pipeline management",
        "Performance analytics",
        "Custom AI training",
        "Multi-channel communication"
      ],
      benefits: [
        "Increase conversion rates by 45%",
        "Reduce sales cycle by 30%",
        "Improve lead quality",
        "Automate repetitive tasks"
      ],
      category: "AI CRM",
      rating: 4.8,
      reviews: 987,
      link: "/zion-ai-crm-assistant",
      featured: true,
      popular: true
    },
    {
      id: "zion-ai-cybersecurity-shield",
      name: "Zion AI Cybersecurity Shield",
      description: "Next-generation AI-powered security platform with threat detection, behavioral analysis, and automated response.",
      price: "From $399/month",
      originalPrice: "$799/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "AI threat detection & prevention",
        "Behavioral analysis & anomaly detection",
        "Automated incident response",
        "Zero-day vulnerability protection",
        "Compliance monitoring (GDPR, HIPAA, SOX)",
        "24/7 AI security monitoring",
        "Predictive threat intelligence",
        "Custom AI model training"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Reduce security incidents by 98%",
        "Ensure compliance requirements",
        "Save on security costs"
      ],
      category: "AI Security",
      rating: 4.8,
      reviews: 892,
      link: "/zion-ai-cybersecurity-shield",
      featured: true,
      popular: true
    },
    {
      id: "zion-ai-marketing-automation",
      name: "Zion AI Marketing Automation",
      description: "Intelligent marketing automation with AI-powered personalization, campaign optimization, and customer journey mapping.",
      price: "From $179/month",
      originalPrice: "$359/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      features: [
        "AI-powered personalization",
        "Behavioral trigger campaigns",
        "Customer journey mapping",
        "A/B testing automation",
        "Predictive customer scoring",
        "Multi-channel campaign management",
        "Performance optimization",
        "ROI analysis & reporting"
      ],
      benefits: [
        "Increase conversion rates by 55%",
        "Improve customer engagement by 40%",
        "Reduce marketing costs by 35%",
        "Scale marketing efforts 10x"
      ],
      category: "AI Marketing",
      rating: 4.7,
      reviews: 1456,
      link: "/zion-ai-marketing-automation",
      featured: true,
      popular: true
    },
    {
      id: "zion-ai-project-manager",
      name: "Zion AI Project Manager",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and automated reporting.",
      price: "From $149/month",
      originalPrice: "$299/month",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "AI task prioritization",
        "Resource allocation optimization",
        "Automated progress reporting",
        "Risk assessment & mitigation",
        "Team collaboration tools",
        "Time tracking & analytics",
        "Budget management",
        "Integration with popular tools"
      ],
      benefits: [
        "Complete projects 40% faster",
        "Reduce project overruns by 60%",
        "Improve team productivity",
        "Better resource utilization"
      ],
      category: "AI Project Management",
      rating: 4.6,
      reviews: 876,
      link: "/zion-ai-project-manager",
      featured: true,
      popular: true
    },

    // Business Productivity Tools
    {
      id: "zion-expense-tracker-pro",
      name: "Zion Expense Tracker Pro",
      description: "Smart expense management with AI-powered categorization, receipt scanning, and automated reporting.",
      price: "From $29/month",
      originalPrice: "$59/month",
      icon: <Receipt className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "AI receipt scanning & OCR",
        "Automatic expense categorization",
        "Multi-currency support",
        "Tax preparation integration",
        "Expense approval workflows",
        "Real-time expense tracking",
        "Custom reporting & analytics",
        "Mobile app & web access"
      ],
      benefits: [
        "Save 10+ hours monthly",
        "Reduce expense errors by 90%",
        "Improve tax compliance",
        "Better budget control"
      ],
      category: "Business Tools",
      rating: 4.8,
      reviews: 2341,
      link: "/zion-expense-tracker-pro",
      featured: false,
      popular: true
    },
    {
      id: "zion-inventory-optimizer",
      name: "Zion Inventory Optimizer",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and cost optimization.",
      price: "From $89/month",
      originalPrice: "$179/month",
      icon: <Package className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "AI demand forecasting",
        "Automated reorder points",
        "Multi-location inventory tracking",
        "Supplier management",
        "Cost optimization analysis",
        "Real-time inventory alerts",
        "Integration with POS systems",
        "Custom reporting dashboards"
      ],
      benefits: [
        "Reduce inventory costs by 25%",
        "Eliminate stockouts & overstock",
        "Improve cash flow",
        "Optimize supplier relationships"
      ],
      category: "Business Tools",
      rating: 4.7,
      reviews: 1876,
      link: "/zion-inventory-optimizer",
      featured: false,
      popular: true
    },
    {
      id: "zion-time-tracker-pro",
      name: "Zion Time Tracker Pro",
      description: "Advanced time tracking with AI-powered productivity analysis, automated timesheets, and team performance insights.",
      price: "From $39/month",
      originalPrice: "$79/month",
      icon: <Clock className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: [
        "AI productivity analysis",
        "Automatic time tracking",
        "Project time allocation",
        "Team performance insights",
        "Billing & invoicing integration",
        "Mobile & desktop apps",
        "Custom productivity reports",
        "Integration with project tools"
      ],
      benefits: [
        "Increase productivity by 30%",
        "Accurate time billing",
        "Better project planning",
        "Identify productivity patterns"
      ],
      category: "Business Tools",
      rating: 4.6,
      reviews: 1654,
      link: "/zion-time-tracker-pro",
      featured: false,
      popular: true
    },
    {
      id: "zion-social-media-scheduler",
      name: "Zion Social Media Scheduler",
      description: "AI-powered social media management with content optimization, optimal posting times, and engagement analytics.",
      price: "From $49/month",
      originalPrice: "$99/month",
      icon: <Share className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: [
        "AI content optimization",
        "Optimal posting time analysis",
        "Multi-platform scheduling",
        "Engagement analytics",
        "Hashtag research & suggestions",
        "Content calendar management",
        "Team collaboration tools",
        "Performance tracking"
      ],
      benefits: [
        "Increase engagement by 50%",
        "Save 15+ hours weekly",
        "Improve content performance",
        "Better social media ROI"
      ],
      category: "Marketing Tools",
      rating: 4.7,
      reviews: 2134,
      link: "/zion-social-media-scheduler",
      featured: false,
      popular: true
    },
    {
      id: "zion-email-marketing-pro",
      name: "Zion Email Marketing Pro",
      description: "Advanced email marketing platform with AI-powered personalization, automation, and performance optimization.",
      price: "From $79/month",
      originalPrice: "$159/month",
      icon: <Mail className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "AI email personalization",
        "Advanced automation workflows",
        "A/B testing & optimization",
        "Subscriber segmentation",
        "Email template builder",
        "Performance analytics",
        "Integration with CRM systems",
        "Compliance & deliverability"
      ],
      benefits: [
        "Increase open rates by 40%",
        "Boost click-through rates by 60%",
        "Automate email campaigns",
        "Better subscriber engagement"
      ],
      category: "Marketing Tools",
      rating: 4.8,
      reviews: 1987,
      link: "/zion-email-marketing-pro",
      featured: false,
      popular: true
    },
    {
      id: "zion-customer-feedback-pro",
      name: "Zion Customer Feedback Pro",
      description: "Comprehensive customer feedback management with AI sentiment analysis, automated responses, and actionable insights.",
      price: "From $59/month",
      originalPrice: "$119/month",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "AI sentiment analysis",
        "Multi-channel feedback collection",
        "Automated response suggestions",
        "Customer satisfaction tracking",
        "Feedback categorization",
        "Action item management",
        "Integration with support tools",
        "Custom reporting & analytics"
      ],
      benefits: [
        "Improve customer satisfaction by 35%",
        "Reduce response time by 70%",
        "Identify improvement opportunities",
        "Better customer retention"
      ],
      category: "Customer Tools",
      rating: 4.7,
      reviews: 1456,
      link: "/zion-customer-feedback-pro",
      featured: false,
      popular: true
    },

    // Data & Analytics Tools
    {
      id: "zion-data-visualization-pro",
      name: "Zion Data Visualization Pro",
      description: "Advanced data visualization platform with interactive charts, real-time dashboards, and AI-powered insights.",
      price: "From $99/month",
      originalPrice: "$199/month",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "Interactive chart library",
        "Real-time data dashboards",
        "AI-powered insights generation",
        "Custom visualization builder",
        "Data source integrations",
        "Collaborative dashboards",
        "Export & sharing options",
        "Mobile-responsive design"
      ],
      benefits: [
        "Make data-driven decisions",
        "Create stunning visualizations",
        "Share insights easily",
        "Improve data understanding"
      ],
      category: "Data Analytics",
      rating: 4.8,
      reviews: 1234,
      link: "/zion-data-visualization-pro",
      featured: false,
      popular: true
    },
    {
      id: "zion-web-analytics-pro",
      name: "Zion Web Analytics Pro",
      description: "Comprehensive web analytics with AI-powered insights, user behavior tracking, and conversion optimization.",
      price: "From $69/month",
      originalPrice: "$139/month",
      icon: <Activity className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: [
        "AI-powered insights",
        "User behavior tracking",
        "Conversion funnel analysis",
        "Real-time visitor monitoring",
        "Custom event tracking",
        "A/B testing tools",
        "Heatmap & session recording",
        "Integration with marketing tools"
      ],
      benefits: [
        "Increase conversions by 45%",
        "Understand user behavior",
        "Optimize website performance",
        "Make data-driven improvements"
      ],
      category: "Data Analytics",
      rating: 4.7,
      reviews: 1876,
      link: "/zion-web-analytics-pro",
      featured: false,
      popular: true
    },
    {
      id: "zion-financial-dashboard",
      name: "Zion Financial Dashboard",
      description: "AI-powered financial dashboard with real-time monitoring, predictive analytics, and automated reporting.",
      price: "From $129/month",
      originalPrice: "$259/month",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Real-time financial monitoring",
        "AI predictive analytics",
        "Automated financial reports",
        "Cash flow forecasting",
        "Budget vs actual analysis",
        "Multi-currency support",
        "Integration with accounting software",
        "Custom financial KPIs"
      ],
      benefits: [
        "Improve financial visibility",
        "Make better financial decisions",
        "Automate financial reporting",
        "Optimize cash flow"
      ],
      category: "Financial Tools",
      rating: 4.8,
      reviews: 987,
      link: "/zion-financial-dashboard",
      featured: false,
      popular: true
    },

    // Communication & Collaboration Tools
    {
      id: "zion-team-collaboration-pro",
      name: "Zion Team Collaboration Pro",
      description: "Advanced team collaboration platform with AI-powered productivity insights, task management, and communication tools.",
      price: "From $89/month",
      originalPrice: "$179/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      features: [
        "AI productivity insights",
        "Advanced task management",
        "Real-time collaboration",
        "Video & voice conferencing",
        "File sharing & storage",
        "Project tracking",
        "Team performance analytics",
        "Integration with popular tools"
      ],
      benefits: [
        "Improve team productivity by 40%",
        "Better project coordination",
        "Reduce communication overhead",
        "Enhanced team collaboration"
      ],
      category: "Collaboration",
      rating: 4.7,
      reviews: 1654,
      link: "/zion-team-collaboration-pro",
      featured: false,
      popular: true
    },
    {
      id: "zion-video-conference-pro",
      name: "Zion Video Conference Pro",
      description: "AI-enhanced video conferencing with noise cancellation, automatic transcription, and meeting analytics.",
      price: "From $39/month",
      originalPrice: "$79/month",
      icon: <Video className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "AI noise cancellation",
        "Automatic meeting transcription",
        "Real-time language translation",
        "Meeting recording & playback",
        "Screen sharing & collaboration",
        "Meeting analytics & insights",
        "Integration with calendar apps",
        "Mobile & desktop support"
      ],
      benefits: [
        "Improve meeting quality",
        "Better meeting documentation",
        "Reduce language barriers",
        "Enhanced collaboration"
      ],
      category: "Communication",
      rating: 4.6,
      reviews: 2134,
      link: "/zion-video-conference-pro",
      featured: false,
      popular: true
    },
    {
      id: "zion-document-collaboration",
      name: "Zion Document Collaboration",
      description: "AI-powered document collaboration with real-time editing, version control, and intelligent suggestions.",
      price: "From $49/month",
      originalPrice: "$99/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      features: [
        "Real-time collaborative editing",
        "AI writing suggestions",
        "Version control & history",
        "Comment & review system",
        "Template library",
        "Document analytics",
        "Integration with cloud storage",
        "Mobile editing support"
      ],
      benefits: [
        "Improve document quality",
        "Faster collaboration",
        "Better version control",
        "Enhanced productivity"
      ],
      category: "Collaboration",
      rating: 4.7,
      reviews: 1456,
      link: "/zion-document-collaboration",
      featured: false,
      popular: true
    },

    // Security & Compliance Tools
    {
      id: "zion-password-manager-pro",
      name: "Zion Password Manager Pro",
      description: "Advanced password management with AI-powered security analysis, breach monitoring, and team sharing.",
      price: "From $29/month",
      originalPrice: "$59/month",
      icon: <Lock className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "AI security analysis",
        "Breach monitoring & alerts",
        "Team password sharing",
        "Multi-factor authentication",
        "Password generator",
        "Secure notes & documents",
        "Cross-platform sync",
        "Enterprise security features"
      ],
      benefits: [
        "Enhance security posture",
        "Reduce password-related risks",
        "Simplify password management",
        "Improve team security"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 2341,
      link: "/zion-password-manager-pro",
      featured: false,
      popular: true
    },
    {
      id: "zion-compliance-monitor",
      name: "Zion Compliance Monitor",
      description: "AI-powered compliance monitoring with automated reporting, risk assessment, and regulatory updates.",
      price: "From $199/month",
      originalPrice: "$399/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: [
        "AI compliance monitoring",
        "Automated reporting",
        "Risk assessment & scoring",
        "Regulatory update alerts",
        "Audit trail management",
        "Policy management",
        "Integration with business systems",
        "Custom compliance frameworks"
      ],
      benefits: [
        "Ensure regulatory compliance",
        "Reduce compliance risks",
        "Automate reporting processes",
        "Stay updated with regulations"
      ],
      category: "Compliance",
      rating: 4.7,
      reviews: 876,
      link: "/zion-compliance-monitor",
      featured: false,
      popular: true
    },

    // Development & Technical Tools
    {
      id: "zion-api-manager-pro",
      name: "Zion API Manager Pro",
      description: "Comprehensive API management platform with monitoring, analytics, security, and developer tools.",
      price: "From $149/month",
      originalPrice: "$299/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: [
        "API monitoring & analytics",
        "Rate limiting & throttling",
        "API security & authentication",
        "Developer portal",
        "API documentation",
        "Testing & debugging tools",
        "Integration marketplace",
        "Custom API policies"
      ],
      benefits: [
        "Improve API performance",
        "Enhance API security",
        "Better developer experience",
        "Streamline API management"
      ],
      category: "Development",
      rating: 4.8,
      reviews: 1234,
      link: "/zion-api-manager-pro",
      featured: false,
      popular: true
    },
    {
      id: "zion-database-monitor",
      name: "Zion Database Monitor",
      description: "AI-powered database monitoring with performance optimization, security scanning, and automated maintenance.",
      price: "From $119/month",
      originalPrice: "$239/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "AI performance optimization",
        "Security vulnerability scanning",
        "Automated maintenance tasks",
        "Real-time monitoring",
        "Query performance analysis",
        "Backup & recovery management",
        "Multi-database support",
        "Custom alerting rules"
      ],
      benefits: [
        "Optimize database performance",
        "Improve security posture",
        "Reduce maintenance overhead",
        "Prevent data loss"
      ],
      category: "Development",
      rating: 4.7,
      reviews: 987,
      link: "/zion-database-monitor",
      featured: false,
      popular: true
    },

    // Industry-Specific Tools
    {
      id: "zion-ecommerce-optimizer",
      name: "Zion E-commerce Optimizer",
      description: "AI-powered e-commerce optimization with conversion tracking, customer insights, and sales analytics.",
      price: "From $159/month",
      originalPrice: "$319/month",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "AI conversion optimization",
        "Customer behavior analysis",
        "Sales funnel tracking",
        "Inventory optimization",
        "Pricing strategy insights",
        "A/B testing tools",
        "Integration with e-commerce platforms",
        "Custom reporting dashboards"
      ],
      benefits: [
        "Increase sales by 35%",
        "Improve conversion rates",
        "Better customer insights",
        "Optimize pricing strategies"
      ],
      category: "E-commerce",
      rating: 4.8,
      reviews: 1876,
      link: "/zion-ecommerce-optimizer",
      featured: false,
      popular: true
    },
    {
      id: "zion-hr-management-pro",
      name: "Zion HR Management Pro",
      description: "Comprehensive HR management with AI-powered recruitment, employee analytics, and performance tracking.",
      price: "From $179/month",
      originalPrice: "$359/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      features: [
        "AI recruitment screening",
        "Employee performance analytics",
        "Attendance & leave management",
        "Payroll integration",
        "Performance review automation",
        "Employee engagement tracking",
        "Compliance management",
        "Custom HR workflows"
      ],
      benefits: [
        "Streamline HR processes",
        "Improve recruitment quality",
        "Better employee management",
        "Reduce HR administrative work"
      ],
      category: "HR Management",
      rating: 4.7,
      reviews: 1456,
      link: "/zion-hr-management-pro",
      featured: false,
      popular: true
    }
  ], []);

  const categories = useMemo(() => [
    { name: "All", count: microSaasServices.length, active: selectedCategory === "All" },
    { name: "AI Analytics", count: microSaasServices.filter(s => s.category === "AI Analytics").length, active: selectedCategory === "AI Analytics" },
    { name: "AI Content", count: microSaasServices.filter(s => s.category === "AI Content").length, active: selectedCategory === "AI Content" },
    { name: "AI CRM", count: microSaasServices.filter(s => s.category === "AI CRM").length, active: selectedCategory === "AI CRM" },
    { name: "AI Security", count: microSaasServices.filter(s => s.category === "AI Security").length, active: selectedCategory === "AI Security" },
    { name: "AI Marketing", count: microSaasServices.filter(s => s.category === "AI Marketing").length, active: selectedCategory === "AI Marketing" },
    { name: "AI Project Management", count: microSaasServices.filter(s => s.category === "AI Project Management").length, active: selectedCategory === "AI Project Management" },
    { name: "Business Tools", count: microSaasServices.filter(s => s.category === "Business Tools").length, active: selectedCategory === "Business Tools" },
    { name: "Marketing Tools", count: microSaasServices.filter(s => s.category === "Marketing Tools").length, active: selectedCategory === "Marketing Tools" },
    { name: "Customer Tools", count: microSaasServices.filter(s => s.category === "Customer Tools").length, active: selectedCategory === "Customer Tools" },
    { name: "Data Analytics", count: microSaasServices.filter(s => s.category === "Data Analytics").length, active: selectedCategory === "Data Analytics" },
    { name: "Financial Tools", count: microSaasServices.filter(s => s.category === "Financial Tools").length, active: selectedCategory === "Financial Tools" },
    { name: "Collaboration", count: microSaasServices.filter(s => s.category === "Collaboration").length, active: selectedCategory === "Collaboration" },
    { name: "Communication", count: microSaasServices.filter(s => s.category === "Communication").length, active: selectedCategory === "Communication" },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length, active: selectedCategory === "Security" },
    { name: "Compliance", count: microSaasServices.filter(s => s.category === "Compliance").length, active: selectedCategory === "Compliance" },
    { name: "Development", count: microSaasServices.filter(s => s.category === "Development").length, active: selectedCategory === "Development" },
    { name: "E-commerce", count: microSaasServices.filter(s => s.category === "E-commerce").length, active: selectedCategory === "E-commerce" },
    { name: "HR Management", count: microSaasServices.filter(s => s.category === "HR Management").length, active: selectedCategory === "HR Management" }
  ], [microSaasServices, selectedCategory]);

  const filteredServices = useMemo(() => {
    let filtered = microSaasServices;
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [microSaasServices, selectedCategory, searchTerm]);

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion AI Analytics Pro has revolutionized our data insights. We've increased revenue by 40% and reduced analysis time by 80% in just 6 months.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital transformation needs.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including AI analytics, content generation, CRM, cybersecurity, and business automation tools. Transform your business with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="micro SAAS, business software, AI tools, analytics, CRM, cybersecurity, marketing automation, project management, business solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Micro SAAS Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
                From analytics to automation, we have everything you need to scale and succeed.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">50+ micro SAAS solutions</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">10,000+ active users</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">99.9% uptime SLA</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">24/7 support available</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <Monitor className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="py-8 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search micro SAAS solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      category.active
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                        : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our most popular and powerful micro SAAS solutions trusted by leading organizations worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.filter(service => service.featured).map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                      <span className="ml-1 text-xs text-gray-400">({service.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>

                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    {service.originalPrice && (
                      <span className="ml-2 text-lg text-gray-500 line-through">{service.originalPrice}</span>
                    )}
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Link
                      to={service.link}
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      Get Demo
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Services Grid */}
        <div className="py-16 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  All Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Complete micro SAAS solutions for every business need and industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color}`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="ml-1 text-xs font-medium">{service.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-3 text-sm line-clamp-2">{service.description}</p>

                  <div className="flex items-center mb-3">
                    <span className="text-lg font-bold text-white">{service.price}</span>
                    {service.originalPrice && (
                      <span className="ml-2 text-sm text-gray-500 line-through">{service.originalPrice}</span>
                    )}
                  </div>

                  <div className="space-y-1 mb-4">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="w-full inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how our micro SAAS solutions have transformed businesses across industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
              Start your digital transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                View Pricing
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}