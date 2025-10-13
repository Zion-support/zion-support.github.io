import React from "react";
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Brain, Code, Database, Mail, Users, Clock, DollarSign, Globe, Smartphone, Lock, TrendingUp, Target, Settings, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Cpu, Wifi, Battery, Camera, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Sparkles } from "lucide-react";
=======
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Brain, Code, Database, Mail, Users, Clock, DollarSign, Globe, Smartphone, Lock, TrendingUp, Target, Settings, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Cpu, Wifi, Battery, Camera, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Receipt, ClipboardList, Workflow } from "lucide-react";
>>>>>>> main
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function MicroSaas() {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics, predictive insights, and automated reporting",
      price: "From $29/month",
      originalPrice: "$49/month",
      discount: "40% OFF",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time dashboard analytics",
        "Predictive business insights",
        "Automated report generation",
        "Custom data visualization",
        "Multi-platform integration",
        "Advanced filtering & segmentation",
        "Export to PDF/Excel/CSV",
        "White-label options"
      ],
      benefits: [
        "Increase revenue by 25%",
        "Reduce reporting time by 80%",
        "Make data-driven decisions",
        "Scale with your business"
      ],
      category: "Analytics",
      rating: 4.9,
      reviews: 1247,
      link: "/zion-analytics-pro",
      featured: true
    },
    {
      id: "zion-ai-inventory-manager",
      name: "Zion AI Inventory Manager",
      description: "Intelligent inventory management with demand forecasting, automated reordering, and real-time tracking",
      price: "From $39/month",
      originalPrice: "$65/month",
      discount: "40% OFF",
      icon: <Package className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "AI demand forecasting",
        "Automated reorder points",
        "Real-time inventory tracking",
        "Multi-location support",
        "Barcode scanning integration",
        "Supplier management",
        "Cost optimization",
        "Mobile app access"
      ],
      benefits: [
        "Reduce stockouts by 60%",
        "Lower inventory costs by 25%",
        "Improve cash flow",
        "Eliminate manual counting"
      ],
      category: "Inventory",
      rating: 4.8,
      reviews: 892,
      link: "/zion-ai-inventory-manager",
      featured: true
    },
    {
      id: "zion-hr-assistant-pro",
      name: "Zion HR Assistant Pro",
      description: "AI-powered HR management with recruitment automation, employee analytics, and performance tracking",
      price: "From $45/month",
      originalPrice: "$75/month",
      discount: "40% OFF",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "AI resume screening",
        "Automated interview scheduling",
        "Employee performance analytics",
        "Payroll integration",
        "Benefits management",
        "Time tracking & attendance",
        "Employee self-service portal",
        "Compliance monitoring"
      ],
      benefits: [
        "Reduce hiring time by 50%",
        "Improve employee retention",
        "Streamline HR processes",
        "Ensure compliance"
      ],
      category: "HR",
      rating: 4.7,
      reviews: 1156,
      link: "/zion-hr-assistant-pro",
      featured: true
    },
    {
      id: "zion-ai-accounting-suite",
      name: "Zion AI Accounting Suite",
      description: "Complete accounting solution with automated bookkeeping, tax preparation, and financial insights",
      price: "From $35/month",
      originalPrice: "$58/month",
      discount: "40% OFF",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Automated bookkeeping",
        "AI expense categorization",
        "Tax preparation assistance",
        "Financial reporting",
        "Invoice generation",
        "Bank reconciliation",
        "Multi-currency support",
        "Audit trail"
      ],
      benefits: [
        "Save 15+ hours weekly",
        "Reduce accounting errors",
        "Ensure tax compliance",
        "Improve cash flow"
      ],
      category: "Finance",
      rating: 4.9,
      reviews: 1347,
      link: "/zion-ai-accounting-suite",
      featured: true
    },
    {
      id: "zion-ecommerce-optimizer",
      name: "Zion E-commerce Optimizer",
      description: "AI-powered e-commerce platform with conversion optimization, inventory management, and analytics",
      price: "From $49/month",
      originalPrice: "$82/month",
      discount: "40% OFF",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "AI conversion optimization",
        "Dynamic pricing engine",
        "Inventory management",
        "Customer behavior analytics",
        "A/B testing automation",
        "SEO optimization",
        "Multi-channel selling",
        "Mobile commerce"
      ],
      benefits: [
        "Increase conversions by 35%",
        "Boost average order value",
        "Reduce cart abandonment",
        "Scale online sales"
      ],
      category: "E-commerce",
      rating: 4.8,
      reviews: 987,
      link: "/zion-ecommerce-optimizer",
      featured: true
    },
    {
      id: "zion-ai-customer-insights",
      name: "Zion AI Customer Insights",
      description: "Advanced customer analytics platform with sentiment analysis, churn prediction, and personalization",
      price: "From $42/month",
      originalPrice: "$70/month",
      discount: "40% OFF",
      icon: <Eye className="w-8 h-8" />,
      color: "from-cyan-500 to-teal-500",
      features: [
        "Customer sentiment analysis",
        "Churn prediction modeling",
        "Behavioral analytics",
        "Personalization engine",
        "Customer journey mapping",
        "Lifetime value prediction",
        "Segmentation automation",
        "Real-time insights"
      ],
      benefits: [
        "Reduce churn by 30%",
        "Increase customer lifetime value",
        "Improve personalization",
        "Boost customer satisfaction"
      ],
      category: "Analytics",
      rating: 4.9,
      reviews: 1456,
      link: "/zion-ai-customer-insights",
      featured: false
    },
    {
      id: "zion-ai-lead-scoring",
      name: "Zion AI Lead Scoring",
      description: "Intelligent lead qualification with predictive scoring, automated nurturing, and conversion optimization",
      price: "From $28/month",
      originalPrice: "$47/month",
      discount: "40% OFF",
      icon: <Target className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "AI lead scoring",
        "Behavioral tracking",
        "Automated nurturing campaigns",
        "Conversion prediction",
        "Lead source analysis",
        "ROI tracking",
        "CRM integration",
        "Custom scoring models"
      ],
      benefits: [
        "Increase conversion rates by 45%",
        "Reduce sales cycle time",
        "Improve lead quality",
        "Boost sales productivity"
      ],
      category: "Sales",
      rating: 4.7,
      reviews: 1123,
      link: "/zion-ai-lead-scoring",
      featured: false
    },
    {
      id: "zion-ai-document-processor",
      name: "Zion AI Document Processor",
      description: "Intelligent document processing with OCR, data extraction, and automated workflow management",
      price: "From $32/month",
      originalPrice: "$53/month",
      discount: "40% OFF",
      icon: <FileText className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: [
        "Advanced OCR technology",
        "Data extraction & validation",
        "Document classification",
        "Workflow automation",
        "Multi-format support",
        "Batch processing",
        "API integration",
        "Compliance tracking"
      ],
      benefits: [
        "Process documents 10x faster",
        "Reduce manual data entry",
        "Improve accuracy by 95%",
        "Streamline workflows"
      ],
      category: "Productivity",
      rating: 4.8,
      reviews: 876,
      link: "/zion-ai-document-processor",
      featured: false
    },
    {
      id: "zion-ai-social-listener",
      name: "Zion AI Social Listener",
      description: "Social media monitoring and analytics with sentiment analysis, trend detection, and engagement optimization",
      price: "From $25/month",
      originalPrice: "$42/month",
      discount: "40% OFF",
      icon: <Share className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: [
        "Multi-platform monitoring",
        "Sentiment analysis",
        "Trend detection",
        "Influencer identification",
        "Crisis management alerts",
        "Competitor analysis",
        "Engagement optimization",
        "Custom reporting"
      ],
      benefits: [
        "Monitor brand mentions 24/7",
        "Identify trending topics",
        "Improve social engagement",
        "Protect brand reputation"
      ],
      category: "Social Media",
      rating: 4.6,
      reviews: 743,
      link: "/zion-ai-social-listener",
      featured: false
    },
    {
      id: "zion-ai-email-optimizer",
      name: "Zion AI Email Optimizer",
      description: "Advanced email marketing with AI optimization, deliverability improvement, and performance analytics",
      price: "From $38/month",
      originalPrice: "$63/month",
      discount: "40% OFF",
      icon: <Mail className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      features: [
        "AI subject line optimization",
        "Send time optimization",
        "Deliverability monitoring",
        "A/B testing automation",
        "Segmentation intelligence",
        "Performance analytics",
        "Template optimization",
        "Spam score reduction"
      ],
      benefits: [
        "Increase open rates by 40%",
        "Boost click-through rates",
        "Improve deliverability",
        "Maximize email ROI"
      ],
      category: "Marketing",
      rating: 4.8,
      reviews: 1098,
      link: "/zion-ai-email-optimizer",
      featured: false
    },
    {
      id: "zion-ai-meeting-assistant",
      name: "Zion AI Meeting Assistant",
      description: "Intelligent meeting management with transcription, action items, and follow-up automation",
      price: "From $24/month",
      originalPrice: "$40/month",
      discount: "40% OFF",
      icon: <Video className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Real-time transcription",
        "Action item extraction",
        "Meeting summaries",
        "Calendar integration",
        "Follow-up automation",
        "Multi-language support",
        "Speaker identification",
        "Meeting analytics"
      ],
      benefits: [
        "Save 5+ hours weekly",
        "Never miss action items",
        "Improve meeting productivity",
        "Enhance collaboration"
      ],
      category: "Productivity",
      rating: 4.7,
      reviews: 934,
      link: "/zion-ai-meeting-assistant",
      featured: false
    },
    {
      id: "zion-ai-expense-tracker",
      name: "Zion AI Expense Tracker",
      description: "Smart expense management with receipt scanning, categorization, and reimbursement automation",
      price: "From $19/month",
      originalPrice: "$32/month",
      discount: "40% OFF",
      icon: <Receipt className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: [
        "Receipt scanning & OCR",
        "Automatic categorization",
        "Policy compliance checking",
        "Reimbursement automation",
        "Expense reporting",
        "Mobile app",
        "Multi-currency support",
        "Integration with accounting"
      ],
      benefits: [
        "Reduce expense processing time",
        "Eliminate manual data entry",
        "Ensure policy compliance",
        "Improve accuracy"
      ],
      category: "Finance",
      rating: 4.6,
      reviews: 678,
      link: "/zion-ai-expense-tracker",
      featured: false
    },
    {
      id: "zion-ai-survey-builder",
      name: "Zion AI Survey Builder",
      description: "Intelligent survey creation with AI optimization, response analysis, and actionable insights",
      price: "From $31/month",
      originalPrice: "$52/month",
      discount: "40% OFF",
      icon: <ClipboardList className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      features: [
        "AI survey optimization",
        "Question recommendation",
        "Response analysis",
        "Sentiment analysis",
        "Custom branding",
        "Multi-channel distribution",
        "Real-time analytics",
        "Export capabilities"
      ],
      benefits: [
        "Create better surveys",
        "Increase response rates",
        "Get actionable insights",
        "Save time on analysis"
      ],
      category: "Research",
      rating: 4.5,
      reviews: 567,
      link: "/zion-ai-survey-builder",
      featured: false
    },
    {
      id: "zion-ai-chatbot-builder",
      name: "Zion AI Chatbot Builder",
      description: "No-code chatbot creation with AI training, multi-channel deployment, and conversation analytics",
      price: "From $36/month",
      originalPrice: "$60/month",
      discount: "40% OFF",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: [
        "No-code chatbot builder",
        "AI training & learning",
        "Multi-channel deployment",
        "Conversation analytics",
        "Integration capabilities",
        "Custom branding",
        "Human handoff",
        "Performance monitoring"
      ],
      benefits: [
        "Reduce support costs by 60%",
        "Improve response times",
        "Scale customer service",
        "Enhance user experience"
      ],
      category: "Support",
      rating: 4.8,
      reviews: 1234,
      link: "/zion-ai-chatbot-builder",
      featured: false
    },
    {
      id: "zion-ai-workflow-automation",
      name: "Zion AI Workflow Automation",
      description: "Visual workflow automation with AI optimization, 500+ integrations, and intelligent routing",
      price: "From $44/month",
      originalPrice: "$73/month",
      discount: "40% OFF",
      icon: <Workflow className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      features: [
        "Visual workflow builder",
        "AI process optimization",
        "500+ app integrations",
        "Conditional logic",
        "Error handling",
        "Performance analytics",
        "Team collaboration",
        "Custom triggers"
      ],
      benefits: [
        "Automate 80% of repetitive tasks",
        "Reduce errors by 95%",
        "Save 20+ hours weekly",
        "Improve efficiency"
      ],
      category: "Automation",
      rating: 4.9,
      reviews: 1456,
      link: "/zion-ai-workflow-automation",
      featured: false
    },
    {
      id: "zion-ai-seo-optimizer",
      name: "Zion AI SEO Optimizer",
      description: "Comprehensive SEO platform with AI content optimization, keyword research, and ranking tracking",
      price: "From $41/month",
      originalPrice: "$68/month",
      discount: "40% OFF",
      icon: <Search className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      features: [
        "AI content optimization",
        "Keyword research & analysis",
        "Ranking tracking",
        "Technical SEO audit",
        "Competitor analysis",
        "Link building tools",
        "Local SEO optimization",
        "Performance reporting"
      ],
      benefits: [
        "Increase organic traffic by 50%",
        "Improve search rankings",
        "Optimize content automatically",
        "Beat competitors"
      ],
      category: "SEO",
      rating: 4.7,
      reviews: 987,
      link: "/zion-ai-seo-optimizer",
      featured: false
    },
    {
      id: "zion-ai-data-warehouse",
      name: "Zion AI Data Warehouse",
      description: "Cloud-based data warehouse with AI-powered analytics, ETL automation, and real-time processing",
      price: "From $67/month",
      originalPrice: "$112/month",
      discount: "40% OFF",
      icon: <Database className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      features: [
        "Cloud data warehouse",
        "AI-powered analytics",
        "ETL automation",
        "Real-time processing",
        "Data governance",
        "Scalable infrastructure",
        "API access",
        "Custom dashboards"
      ],
      benefits: [
        "Centralize all data sources",
        "Enable real-time analytics",
        "Reduce data silos",
        "Scale with business growth"
      ],
      category: "Data",
      rating: 4.8,
      reviews: 756,
      link: "/zion-ai-data-warehouse",
      featured: false
    },
    {
      id: "zion-ai-mobile-app-builder",
      name: "Zion AI Mobile App Builder",
      description: "No-code mobile app development with AI assistance, cross-platform deployment, and analytics",
      price: "From $58/month",
      originalPrice: "$97/month",
      discount: "40% OFF",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "No-code app builder",
        "AI design assistance",
        "Cross-platform deployment",
        "Push notifications",
        "User analytics",
        "App store optimization",
        "Custom integrations",
        "White-label options"
      ],
      benefits: [
        "Build apps without coding",
        "Deploy to iOS & Android",
        "Reduce development costs",
        "Faster time to market"
      ],
      category: "Development",
      rating: 4.6,
      reviews: 823,
      link: "/zion-ai-mobile-app-builder",
      featured: false
    },
    {
      id: "zion-ai-api-manager",
      name: "Zion AI API Manager",
      description: "Comprehensive API management with AI monitoring, security, and performance optimization",
      price: "From $52/month",
      originalPrice: "$87/month",
      discount: "40% OFF",
      icon: <Globe className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "API gateway management",
        "AI performance monitoring",
        "Security & authentication",
        "Rate limiting",
        "Documentation generation",
        "Analytics & reporting",
        "Developer portal",
        "Version control"
      ],
      benefits: [
        "Secure API endpoints",
        "Monitor performance 24/7",
        "Improve developer experience",
        "Scale API infrastructure"
      ],
      category: "Development",
      rating: 4.7,
      reviews: 645,
      link: "/zion-ai-api-manager",
      featured: false
    },
    {
      id: "zion-ai-backup-manager",
      name: "Zion AI Backup Manager",
      description: "Intelligent backup solution with automated scheduling, version control, and disaster recovery",
      price: "From $26/month",
      originalPrice: "$43/month",
      discount: "40% OFF",
      icon: <HardDrive className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Automated backup scheduling",
        "Version control & history",
        "Disaster recovery",
        "Cross-platform support",
        "Encryption & security",
        "Cloud storage integration",
        "Restore testing",
        "Compliance monitoring"
      ],
      benefits: [
        "Protect critical data",
        "Automate backup processes",
        "Ensure business continuity",
        "Meet compliance requirements"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/zion-ai-backup-manager",
      featured: false
    },
    {
      id: "zion-ai-testing-automation",
      name: "Zion AI Testing Automation",
      description: "AI-powered testing platform with automated test generation, execution, and reporting",
      price: "From $47/month",
      originalPrice: "$78/month",
      discount: "40% OFF",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: [
        "AI test generation",
        "Automated test execution",
        "Cross-browser testing",
        "Performance testing",
        "API testing",
        "Visual regression testing",
        "Test reporting",
        "CI/CD integration"
      ],
      benefits: [
        "Reduce testing time by 70%",
        "Improve test coverage",
        "Catch bugs early",
        "Ensure quality releases"
      ],
      category: "Development",
      rating: 4.9,
      reviews: 1123,
      link: "/zion-ai-testing-automation",
      featured: false
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with threat detection, vulnerability scanning, and compliance monitoring",
      price: "From $49/month",
      originalPrice: "$79/month",
      discount: "38% OFF",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Real-time threat detection",
        "Automated vulnerability scanning",
        "Compliance monitoring (GDPR, HIPAA, SOX)",
        "24/7 security monitoring",
        "Incident response automation",
        "Security audit reports",
        "Multi-factor authentication",
        "Data encryption at rest & transit"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Reduce security incidents by 95%",
        "Ensure compliance requirements",
        "Save on security costs"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/zion-security-shield",
      featured: true
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, file sharing, and collaboration tools",
      price: "From $9/month",
      originalPrice: "$15/month",
      discount: "40% OFF",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "End-to-end encryption",
        "Unlimited file sharing",
        "Real-time collaboration",
        "Version control & history",
        "Advanced search & filtering",
        "Mobile & desktop sync",
        "Team management tools",
        "API integration"
      ],
      benefits: [
        "Store unlimited files securely",
        "Collaborate in real-time",
        "Access files anywhere",
        "Reduce storage costs by 60%"
      ],
      category: "Storage",
      rating: 4.7,
      reviews: 2156,
      link: "/zion-cloud-vault",
      featured: true
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, and marketing materials",
      price: "From $19/month",
      originalPrice: "$35/month",
      discount: "46% OFF",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "AI content generation",
        "Multi-language support",
        "SEO optimization",
        "Brand voice customization",
        "Content calendar management",
        "Social media scheduling",
        "Plagiarism detection",
        "Performance analytics"
      ],
      benefits: [
        "Create 10x more content",
        "Improve SEO rankings",
        "Maintain brand consistency",
        "Save 15+ hours weekly"
      ],
      category: "Content",
      rating: 4.6,
      reviews: 1834,
      link: "/zion-content-studio",
      featured: false
    },
    {
      id: "zion-data-sync",
      name: "Zion Data Sync",
      description: "Automated data synchronization across platforms with real-time updates and conflict resolution",
      price: "From $15/month",
      originalPrice: "$25/month",
      discount: "40% OFF",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Multi-platform synchronization",
        "Real-time data updates",
        "Conflict resolution algorithms",
        "Data validation & cleaning",
        "Custom sync rules",
        "Error handling & recovery",
        "Audit trail & logging",
        "REST API access"
      ],
      benefits: [
        "Eliminate data silos",
        "Reduce manual data entry",
        "Ensure data accuracy",
        "Improve operational efficiency"
      ],
      category: "Data",
      rating: 4.5,
      reviews: 967,
      link: "/zion-data-sync",
      featured: false
    },
    {
      id: "zion-email-automation",
      name: "Zion Email Automation",
      description: "Advanced email marketing automation with AI-powered personalization and behavioral triggers",
      price: "From $12/month",
      originalPrice: "$20/month",
      discount: "40% OFF",
      icon: <Mail className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "AI-powered personalization",
        "Behavioral trigger campaigns",
        "A/B testing automation",
        "Advanced segmentation",
        "Email template library",
        "Deliverability optimization",
        "Performance analytics",
        "CRM integration"
      ],
      benefits: [
        "Increase open rates by 45%",
        "Boost conversion rates by 30%",
        "Reduce manual work by 90%",
        "Scale email marketing efforts"
      ],
      category: "Marketing",
      rating: 4.7,
      reviews: 1456,
      link: "/zion-email-automation",
      featured: false
    },
    {
      id: "zion-project-master",
      name: "Zion Project Master",
      description: "Comprehensive project management with AI-powered insights, resource optimization, and team collaboration",
      price: "From $25/month",
      originalPrice: "$40/month",
      discount: "38% OFF",
      icon: <Code className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "AI-powered project insights",
        "Resource optimization",
        "Team collaboration tools",
        "Gantt charts & timelines",
        "Budget tracking & forecasting",
        "Risk assessment & mitigation",
        "Time tracking & reporting",
        "Integration with 100+ tools"
      ],
      benefits: [
        "Complete projects 25% faster",
        "Reduce project costs by 20%",
        "Improve team productivity",
        "Minimize project risks"
      ],
      category: "Productivity",
      rating: 4.8,
      reviews: 1123,
      link: "/zion-project-master",
      featured: false
    },
    {
      id: "zion-crm-intelligence",
      name: "Zion CRM Intelligence",
      description: "AI-enhanced CRM with predictive analytics, lead scoring, and automated follow-ups",
      price: "From $35/month",
      originalPrice: "$55/month",
      discount: "36% OFF",
      icon: <Users className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "AI lead scoring",
        "Predictive analytics",
        "Automated follow-ups",
        "Sales forecasting",
        "Customer journey mapping",
        "Pipeline management",
        "Performance dashboards",
        "Mobile CRM access"
      ],
      benefits: [
        "Increase sales by 35%",
        "Improve lead quality by 50%",
        "Reduce follow-up time by 70%",
        "Boost customer retention"
      ],
      category: "CRM",
      rating: 4.9,
      reviews: 1892,
      link: "/zion-crm-intelligence",
      featured: false
    },
    {
      id: "zion-ai-customer-service-pro",
      name: "Zion AI Customer Service Pro",
      description: "Intelligent customer service automation with multilingual support and sentiment analysis",
      price: "From $45/month",
      originalPrice: "$70/month",
      discount: "36% OFF",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      features: [
        "AI-powered chatbots",
        "Multilingual support (50+ languages)",
        "Sentiment analysis",
        "Ticket routing automation",
        "Knowledge base integration",
        "Live chat handoff",
        "Performance analytics",
        "Custom AI training"
      ],
      benefits: [
        "Reduce response time by 80%",
        "Handle 90% of queries automatically",
        "Improve customer satisfaction",
        "Scale support operations"
      ],
      category: "Support",
      rating: 4.7,
      reviews: 1654,
      link: "/zion-ai-customer-service-pro",
      featured: false
    },
    {
      id: "zion-workflow-automation",
      name: "Zion Workflow Automation",
      description: "Visual workflow builder with AI optimization and integration capabilities for business processes",
      price: "From $22/month",
      originalPrice: "$35/month",
      discount: "37% OFF",
      icon: <Settings className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: [
        "Visual workflow builder",
        "AI process optimization",
        "500+ app integrations",
        "Conditional logic & triggers",
        "Error handling & retries",
        "Workflow analytics",
        "Team collaboration",
        "Custom API endpoints"
      ],
      benefits: [
        "Automate 80% of repetitive tasks",
        "Reduce errors by 95%",
        "Save 20+ hours weekly",
        "Improve process efficiency"
      ],
      category: "Automation",
      rating: 4.6,
      reviews: 1347,
      link: "/zion-workflow-automation",
      featured: false
    },
    {
      id: "zion-ai-accounting-assistant",
      name: "Zion AI Accounting Assistant",
      description: "Intelligent accounting automation with expense tracking, invoice processing, and financial insights",
      price: "From $30/month",
      originalPrice: "$50/month",
      discount: "40% OFF",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: [
        "Automated expense tracking",
        "Invoice processing & OCR",
        "Financial reporting",
        "Tax preparation assistance",
        "Receipt scanning & categorization",
        "Bank reconciliation",
        "Budget planning & forecasting",
        "Compliance monitoring"
      ],
      benefits: [
        "Reduce accounting time by 70%",
        "Eliminate manual data entry",
        "Improve financial accuracy",
        "Ensure tax compliance"
      ],
      category: "Finance",
      rating: 4.8,
      reviews: 987,
      link: "/zion-ai-accounting-assistant",
      featured: false
    },
    {
      id: "zion-social-scheduler",
      name: "Zion Social Scheduler",
      description: "AI-powered social media management with content optimization and performance analytics",
      price: "From $18/month",
      originalPrice: "$30/month",
      discount: "40% OFF",
      icon: <Share className="w-8 h-8" />,
      color: "from-sky-500 to-blue-500",
      features: [
        "Multi-platform posting",
        "AI content optimization",
        "Optimal timing suggestions",
        "Hashtag research & generation",
        "Content calendar management",
        "Performance analytics",
        "Competitor analysis",
        "Team collaboration tools"
      ],
      benefits: [
        "Increase engagement by 40%",
        "Save 10+ hours weekly",
        "Improve content performance",
        "Grow social media presence"
      ],
      category: "Social Media",
      rating: 4.5,
      reviews: 1234,
      link: "/zion-social-scheduler",
      featured: false
    },
    {
      id: "zion-inventory-smart",
      name: "Zion Inventory Smart",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and real-time tracking",
      price: "From $39/month",
      originalPrice: "$65/month",
      discount: "40% OFF",
      icon: <Package className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: [
        "AI demand forecasting",
        "Automated reorder points",
        "Real-time inventory tracking",
        "Multi-location management",
        "Barcode scanning integration",
        "Supplier management",
        "Cost optimization analytics",
        "Mobile app access"
      ],
      benefits: [
        "Reduce stockouts by 60%",
        "Lower inventory costs by 25%",
        "Improve cash flow",
        "Eliminate manual counting"
      ],
      category: "Inventory",
      rating: 4.7,
      reviews: 856,
      link: "/zion-inventory-smart",
      featured: true
    },
    {
      id: "zion-invoice-genius",
      name: "Zion Invoice Genius",
      description: "Intelligent invoicing system with AI-powered automation, payment tracking, and financial insights",
      price: "From $16/month",
      originalPrice: "$28/month",
      discount: "43% OFF",
      icon: <FileText className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: [
        "AI invoice generation",
        "Automated payment reminders",
        "Multi-currency support",
        "Tax calculation & compliance",
        "Payment gateway integration",
        "Client portal access",
        "Financial reporting",
        "Mobile invoicing"
      ],
      benefits: [
        "Get paid 40% faster",
        "Reduce billing errors by 90%",
        "Automate follow-ups",
        "Improve cash flow"
      ],
      category: "Finance",
      rating: 4.8,
      reviews: 1123,
      link: "/zion-invoice-genius",
      featured: false
    },
    {
      id: "zion-hr-assistant-pro",
      name: "Zion HR Assistant Pro",
      description: "AI-powered HR management with recruitment automation, employee analytics, and performance tracking",
      price: "From $42/month",
      originalPrice: "$70/month",
      discount: "40% OFF",
      icon: <Users className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      features: [
        "AI candidate screening",
        "Automated interview scheduling",
        "Employee performance analytics",
        "Payroll integration",
        "Time tracking & attendance",
        "Benefits management",
        "Compliance monitoring",
        "Employee self-service portal"
      ],
      benefits: [
        "Reduce hiring time by 50%",
        "Improve employee retention",
        "Automate HR processes",
        "Ensure compliance"
      ],
      category: "HR",
      rating: 4.6,
      reviews: 743,
      link: "/zion-hr-assistant-pro",
      featured: false
    },
    {
      id: "zion-seo-optimizer-pro",
      name: "Zion SEO Optimizer Pro",
      description: "Advanced SEO optimization tool with AI content analysis, keyword research, and ranking tracking",
      price: "From $24/month",
      originalPrice: "$40/month",
      discount: "40% OFF",
      icon: <Search className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "AI content optimization",
        "Keyword research & analysis",
        "Ranking tracking & monitoring",
        "Technical SEO audits",
        "Competitor analysis",
        "Link building suggestions",
        "Local SEO optimization",
        "Performance reporting"
      ],
      benefits: [
        "Increase organic traffic by 80%",
        "Improve search rankings",
        "Save 15+ hours weekly",
        "Boost conversion rates"
      ],
      category: "SEO",
      rating: 4.7,
      reviews: 1456,
      link: "/zion-seo-optimizer-pro",
      featured: false
    },
    {
      id: "zion-email-signature-pro",
      name: "Zion Email Signature Pro",
      description: "Professional email signature management with branding, analytics, and team coordination",
      price: "From $8/month",
      originalPrice: "$15/month",
      discount: "47% OFF",
      icon: <Mail className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "Custom signature templates",
        "Team signature management",
        "Click tracking & analytics",
        "Social media integration",
        "Legal disclaimer support",
        "Mobile optimization",
        "Brand consistency tools",
        "Bulk signature updates"
      ],
      benefits: [
        "Professional brand image",
        "Track email engagement",
        "Maintain brand consistency",
        "Save time on updates"
      ],
      category: "Email",
      rating: 4.5,
      reviews: 634,
      link: "/zion-email-signature-pro",
      featured: false
    },
    {
      id: "zion-password-manager-pro",
      name: "Zion Password Manager Pro",
      description: "Enterprise-grade password management with AI security analysis and team collaboration",
      price: "From $12/month",
      originalPrice: "$20/month",
      discount: "40% OFF",
      icon: <Lock className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Secure password storage",
        "AI security analysis",
        "Team password sharing",
        "Two-factor authentication",
        "Password generation",
        "Breach monitoring",
        "Compliance reporting",
        "Mobile & desktop sync"
      ],
      benefits: [
        "Enhance security posture",
        "Reduce password-related risks",
        "Improve team collaboration",
        "Ensure compliance"
      ],
      category: "Security",
      rating: 4.9,
      reviews: 892,
      link: "/zion-password-manager-pro",
      featured: false
    },
    {
      id: "zion-time-tracker-pro",
      name: "Zion Time Tracker Pro",
      description: "AI-powered time tracking with productivity analytics, project management, and automated reporting",
      price: "From $14/month",
      originalPrice: "$25/month",
      discount: "44% OFF",
      icon: <Clock className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Automatic time tracking",
        "AI productivity insights",
        "Project time allocation",
        "Team performance analytics",
        "Invoice generation",
        "Mobile time tracking",
        "Integration with 50+ tools",
        "Custom reporting"
      ],
      benefits: [
        "Increase productivity by 30%",
        "Accurate project billing",
        "Identify time wasters",
        "Improve team efficiency"
      ],
      category: "Productivity",
      rating: 4.6,
      reviews: 967,
      link: "/zion-time-tracker-pro",
      featured: false
    },
    {
      id: "zion-form-builder-pro",
      name: "Zion Form Builder Pro",
      description: "Advanced form creation with AI optimization, conditional logic, and comprehensive analytics",
      price: "From $19/month",
      originalPrice: "$35/month",
      discount: "46% OFF",
      icon: <FileText className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "Drag-and-drop form builder",
        "AI form optimization",
        "Conditional logic & branching",
        "Payment integration",
        "Advanced analytics",
        "Multi-step forms",
        "Custom styling options",
        "API integration"
      ],
      benefits: [
        "Increase form conversions by 50%",
        "Reduce form abandonment",
        "Gather better data",
        "Save development time"
      ],
      category: "Forms",
      rating: 4.7,
      reviews: 1234,
      link: "/zion-form-builder-pro",
      featured: false
    },
    {
      id: "zion-survey-master-pro",
      name: "Zion Survey Master Pro",
      description: "AI-powered survey platform with advanced analytics, sentiment analysis, and automated insights",
      price: "From $26/month",
      originalPrice: "$45/month",
      discount: "42% OFF",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: [
        "AI survey optimization",
        "Sentiment analysis",
        "Advanced analytics & insights",
        "Multi-channel distribution",
        "Custom branding options",
        "Response validation",
        "Export to multiple formats",
        "Team collaboration tools"
      ],
      benefits: [
        "Get 60% more responses",
        "Extract actionable insights",
        "Improve decision making",
        "Save analysis time"
      ],
      category: "Surveys",
      rating: 4.8,
      reviews: 756,
      link: "/zion-survey-master-pro",
      featured: false
    },
    {
      id: "zion-chat-widget-pro",
      name: "Zion Chat Widget Pro",
      description: "Intelligent live chat solution with AI automation, visitor tracking, and conversion optimization",
      price: "From $21/month",
      originalPrice: "$35/month",
      discount: "40% OFF",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "AI-powered chatbots",
        "Live chat integration",
        "Visitor behavior tracking",
        "Proactive chat triggers",
        "Multi-language support",
        "CRM integration",
        "Performance analytics",
        "Custom chat themes"
      ],
      benefits: [
        "Increase conversions by 35%",
        "Reduce response time by 80%",
        "Capture more leads",
        "Improve customer satisfaction"
      ],
      category: "Chat",
      rating: 4.7,
      reviews: 1089,
      link: "/zion-chat-widget-pro",
      featured: false
    },
    {
      id: "zion-backup-vault-pro",
      name: "Zion Backup Vault Pro",
      description: "Automated cloud backup solution with AI optimization, version control, and disaster recovery",
      price: "From $15/month",
      originalPrice: "$25/month",
      discount: "40% OFF",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      features: [
        "Automated cloud backups",
        "AI backup optimization",
        "Version control & history",
        "Cross-platform sync",
        "Disaster recovery tools",
        "Encryption & security",
        "Bandwidth optimization",
        "Mobile backup support"
      ],
      benefits: [
        "Protect critical data",
        "Reduce backup costs by 50%",
        "Ensure business continuity",
        "Simplify data management"
      ],
      category: "Backup",
      rating: 4.6,
      reviews: 543,
      link: "/zion-backup-vault-pro",
      featured: false
    },
    {
      id: "zion-api-manager-pro",
      name: "Zion API Manager Pro",
      description: "Comprehensive API management platform with monitoring, analytics, and developer tools",
      price: "From $45/month",
      originalPrice: "$75/month",
      discount: "40% OFF",
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "API gateway management",
        "Rate limiting & throttling",
        "API analytics & monitoring",
        "Developer portal",
        "API documentation",
        "Security & authentication",
        "Load balancing",
        "Custom integrations"
      ],
      benefits: [
        "Improve API performance",
        "Enhance security",
        "Reduce development time",
        "Scale API operations"
      ],
      category: "API",
      rating: 4.8,
      reviews: 432,
      link: "/zion-api-manager-pro",
      featured: false
    },
    {
      id: "zion-monitoring-suite-pro",
      name: "Zion Monitoring Suite Pro",
      description: "AI-powered system monitoring with predictive alerts, performance optimization, and uptime tracking",
      price: "From $38/month",
      originalPrice: "$65/month",
      discount: "42% OFF",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: [
        "Real-time system monitoring",
        "AI predictive alerts",
        "Performance optimization",
        "Uptime tracking & SLA",
        "Custom dashboards",
        "Mobile monitoring app",
        "Integration with 100+ tools",
        "Automated incident response"
      ],
      benefits: [
        "Prevent 90% of outages",
        "Improve system performance",
        "Reduce downtime costs",
        "Enhance reliability"
      ],
      category: "Monitoring",
      rating: 4.7,
      reviews: 678,
      link: "/zion-monitoring-suite-pro",
      featured: false
    },
    {
      id: "zion-translation-pro",
      name: "Zion Translation Pro",
      description: "AI-powered translation service with 100+ languages, context awareness, and real-time processing",
      price: "From $29/month",
      originalPrice: "$50/month",
      discount: "42% OFF",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "100+ language support",
        "AI context awareness",
        "Real-time translation",
        "Document translation",
        "Website localization",
        "API integration",
        "Quality assurance",
        "Custom terminology"
      ],
      benefits: [
        "Reach global audiences",
        "Improve translation accuracy",
        "Reduce translation costs",
        "Speed up localization"
      ],
      category: "Translation",
      rating: 4.6,
      reviews: 823,
      link: "/zion-translation-pro",
      featured: false
    },
    {
      id: "zion-calendar-sync-pro",
      name: "Zion Calendar Sync Pro",
      description: "Intelligent calendar management with AI scheduling, meeting optimization, and team coordination",
      price: "From $17/month",
      originalPrice: "$30/month",
      discount: "43% OFF",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "Multi-calendar sync",
        "AI meeting optimization",
        "Smart scheduling suggestions",
        "Team availability tracking",
        "Meeting analytics",
        "Time zone management",
        "Integration with 20+ platforms",
        "Mobile calendar access"
      ],
      benefits: [
        "Reduce scheduling conflicts",
        "Optimize meeting times",
        "Improve team coordination",
        "Save scheduling time"
      ],
      category: "Calendar",
      rating: 4.5,
      reviews: 567,
      link: "/zion-calendar-sync-pro",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length, active: true },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length, active: false },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length, active: false },
    { name: "Storage", count: microSaasServices.filter(s => s.category === "Storage").length, active: false },
    { name: "Content", count: microSaasServices.filter(s => s.category === "Content").length, active: false },
    { name: "Data", count: microSaasServices.filter(s => s.category === "Data").length, active: false },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length, active: false },
    { name: "Productivity", count: microSaasServices.filter(s => s.category === "Productivity").length, active: false },
    { name: "CRM", count: microSaasServices.filter(s => s.category === "CRM").length, active: false },
    { name: "Support", count: microSaasServices.filter(s => s.category === "Support").length, active: false },
    { name: "Automation", count: microSaasServices.filter(s => s.category === "Automation").length, active: false },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length, active: false },
    { name: "Social Media", count: microSaasServices.filter(s => s.category === "Social Media").length, active: false },
    { name: "Inventory", count: microSaasServices.filter(s => s.category === "Inventory").length, active: false },
    { name: "HR", count: microSaasServices.filter(s => s.category === "HR").length, active: false },
<<<<<<< HEAD
    { name: "SEO", count: microSaasServices.filter(s => s.category === "SEO").length, active: false },
    { name: "Email", count: microSaasServices.filter(s => s.category === "Email").length, active: false },
    { name: "Forms", count: microSaasServices.filter(s => s.category === "Forms").length, active: false },
    { name: "Surveys", count: microSaasServices.filter(s => s.category === "Surveys").length, active: false },
    { name: "Chat", count: microSaasServices.filter(s => s.category === "Chat").length, active: false },
    { name: "Backup", count: microSaasServices.filter(s => s.category === "Backup").length, active: false },
    { name: "API", count: microSaasServices.filter(s => s.category === "API").length, active: false },
    { name: "Monitoring", count: microSaasServices.filter(s => s.category === "Monitoring").length, active: false },
    { name: "Translation", count: microSaasServices.filter(s => s.category === "Translation").length, active: false },
    { name: "Calendar", count: microSaasServices.filter(s => s.category === "Calendar").length, active: false }
=======
    { name: "E-commerce", count: microSaasServices.filter(s => s.category === "E-commerce").length, active: false },
    { name: "Sales", count: microSaasServices.filter(s => s.category === "Sales").length, active: false },
    { name: "Research", count: microSaasServices.filter(s => s.category === "Research").length, active: false },
    { name: "SEO", count: microSaasServices.filter(s => s.category === "SEO").length, active: false },
    { name: "Development", count: microSaasServices.filter(s => s.category === "Development").length, active: false }
>>>>>>> main
  ];

  const stats = [
    { number: "25+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "15,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data insights. We increased revenue by 30% in just 2 months with their predictive analytics.",
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
      content: "Zion Security Shield gives us peace of mind. Our security incidents dropped by 95% since implementation.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive collection of micro SAAS solutions. AI-powered analytics, security, content creation, automation, and more. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="micro saas, business software, AI tools, analytics, security, automation, productivity, CRM, marketing, cloud storage"
        />
        <meta
          name="keywords"
          content="micro saas, business software, analytics, CRM, marketing automation, project management, inventory management, HR software, cloud storage, AI assistant"
        />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      <SEOOptimizer
        title="Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools"
        description="Discover our comprehensive collection of micro SAAS solutions. AI-powered analytics, security, content creation, automation, and more. Start your free trial today!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Micro SAAS Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, AI-driven micro SAAS tools designed to transform your business operations. 
                Choose from 25+ specialized solutions to boost productivity, security, and growth.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Free 14-day trial</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">No setup fees</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Cancel anytime</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">24/7 support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
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

        {/* Categories Filter */}
        <div className="py-8 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
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

        {/* Featured Services */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our most popular micro SAAS solutions trusted by thousands of businesses worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.filter(service => service.featured).map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
                >
                  {service.discount && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {service.discount}
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
                      <span className="ml-2 text-sm text-gray-400 line-through">{service.originalPrice}</span>
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
                      Start Free Trial
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
                  All Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Browse our complete collection of micro SAAS solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {microSaasServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {service.discount && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {service.discount}
                    </div>
                  )}
                  
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
                      <span className="ml-2 text-xs text-gray-400 line-through">{service.originalPrice}</span>
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
                  What Our Customers Say
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust our micro SAAS solutions
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
              Start your free 14-day trial today. No credit card required. Cancel anytime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
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
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">25+ Ready-to-Use Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}SAAS
              </span>
              <br />
              Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use business software solutions that can transform your operations immediately. 
              From analytics to security, CRM to marketing automation - everything you need to grow your business.
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
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choose from our comprehensive suite of business software solutions. Each tool is designed to solve specific business challenges with powerful features and intuitive interfaces.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
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
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our micro SAAS solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
              Start your free trial today - no credit card required.
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
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All Services
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}