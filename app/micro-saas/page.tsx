import React, { useState, useMemo } from "react";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Globe, Lock, Settings, Target, TrendingUp, Cpu, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Package } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaasServices() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const microSaasServices = useMemo(() => [
    // Analytics & Business Intelligence
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "Advanced AI-powered business intelligence platform with real-time analytics, predictive insights, and automated reporting",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time data visualization",
        "Predictive analytics & forecasting",
        "Custom dashboard creation",
        "Automated report generation",
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
      category: "Analytics",
      rating: 4.9,
      reviews: 1247,
      link: "/zion-analytics-pro",
      featured: true
    },
    {
      id: "zion-crm-intelligence",
      name: "Zion CRM Intelligence",
      description: "AI-powered CRM with intelligent lead scoring, automated follow-ups, and predictive sales analytics",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "AI lead scoring & qualification",
        "Automated follow-up sequences",
        "Sales forecasting & analytics",
        "Pipeline management",
        "Email integration",
        "Mobile app access",
        "Custom field creation",
        "API integration"
      ],
      benefits: [
        "Increase sales by 40%",
        "Reduce lead response time by 90%",
        "Improve conversion rates",
        "Streamline sales processes"
      ],
      category: "CRM",
      rating: 4.8,
      reviews: 892,
      link: "/zion-crm-intelligence",
      featured: true
    },
    {
      id: "zion-customer-insights",
      name: "Zion Customer Insights",
      description: "Deep customer analytics platform with sentiment analysis, behavior tracking, and personalized recommendations",
      price: "From $249/month",
      icon: <Eye className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Customer behavior analysis",
        "Sentiment analysis & monitoring",
        "Personalized recommendations",
        "Churn prediction & prevention",
        "Customer journey mapping",
        "Real-time notifications",
        "Integration with major platforms",
        "Custom analytics dashboards"
      ],
      benefits: [
        "Reduce churn by 30%",
        "Increase customer satisfaction by 45%",
        "Improve retention rates",
        "Boost customer lifetime value"
      ],
      category: "Analytics",
      rating: 4.7,
      reviews: 654,
      link: "/zion-customer-insights",
      featured: false
    },

    // Security & Compliance
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity platform with threat detection, automated response, and compliance monitoring",
      price: "From $499/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: [
        "AI threat detection & prevention",
        "Automated incident response",
        "Compliance monitoring (GDPR, HIPAA, SOX)",
        "24/7 security monitoring",
        "Vulnerability scanning",
        "Security awareness training",
        "Incident reporting & analytics",
        "Multi-factor authentication"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Reduce security incidents by 98%",
        "Ensure compliance requirements",
        "Save on security costs"
      ],
      category: "Security",
      rating: 4.9,
      reviews: 1156,
      link: "/zion-security-shield",
      featured: true
    },
    {
      id: "zion-compliance-manager",
      name: "Zion Compliance Manager",
      description: "Automated compliance management for GDPR, HIPAA, SOX, and other regulatory requirements",
      price: "From $399/month",
      icon: <Lock className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "Multi-regulation compliance",
        "Automated audit trails",
        "Policy management & updates",
        "Risk assessment tools",
        "Document management",
        "Training & certification tracking",
        "Real-time compliance monitoring",
        "Custom reporting"
      ],
      benefits: [
        "Ensure 100% compliance",
        "Reduce audit preparation time by 70%",
        "Minimize compliance risks",
        "Streamline regulatory processes"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 543,
      link: "/zion-compliance-manager",
      featured: false
    },

    // Content & Marketing
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation platform with multi-format support, SEO optimization, and brand consistency",
      price: "From $149/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "AI content generation",
        "Multi-format support (blog, social, email)",
        "SEO optimization & keyword research",
        "Brand voice customization",
        "Content calendar management",
        "Plagiarism detection",
        "Performance analytics",
        "Team collaboration tools"
      ],
      benefits: [
        "Create 20x more content",
        "Improve SEO rankings by 60%",
        "Maintain brand consistency",
        "Save 25+ hours weekly"
      ],
      category: "Content",
      rating: 4.7,
      reviews: 1834,
      link: "/zion-content-studio",
      featured: true
    },
    {
      id: "zion-social-scheduler",
      name: "Zion Social Scheduler",
      description: "Intelligent social media management with AI-powered posting, engagement analytics, and content optimization",
      price: "From $99/month",
      icon: <Share className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "Multi-platform scheduling",
        "AI-optimized posting times",
        "Engagement analytics & insights",
        "Content performance tracking",
        "Hashtag research & optimization",
        "Team collaboration",
        "Automated responses",
        "Competitor analysis"
      ],
      benefits: [
        "Increase engagement by 50%",
        "Save 15+ hours weekly",
        "Improve social media ROI",
        "Grow follower base faster"
      ],
      category: "Marketing",
      rating: 4.6,
      reviews: 967,
      link: "/zion-social-scheduler",
      featured: false
    },
    {
      id: "zion-email-automation",
      name: "Zion Email Automation",
      description: "Advanced email marketing platform with AI-driven personalization, automation workflows, and analytics",
      price: "From $179/month",
      icon: <Mail className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "AI-powered personalization",
        "Advanced automation workflows",
        "A/B testing & optimization",
        "Email template builder",
        "List segmentation & management",
        "Deliverability optimization",
        "Performance analytics",
        "Integration with major platforms"
      ],
      benefits: [
        "Increase open rates by 40%",
        "Boost click-through rates by 60%",
        "Automate email campaigns",
        "Improve email deliverability"
      ],
      category: "Marketing",
      rating: 4.8,
      reviews: 1234,
      link: "/zion-email-automation",
      featured: false
    },

    // Project Management & Productivity
    {
      id: "zion-project-master",
      name: "Zion Project Master",
      description: "AI-enhanced project management with intelligent task allocation, progress tracking, and resource optimization",
      price: "From $229/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "AI task allocation & prioritization",
        "Progress tracking & analytics",
        "Resource optimization",
        "Team collaboration tools",
        "Time tracking & reporting",
        "Risk assessment & mitigation",
        "Custom project templates",
        "Integration with popular tools"
      ],
      benefits: [
        "Complete projects 30% faster",
        "Improve team productivity by 45%",
        "Reduce project risks",
        "Optimize resource allocation"
      ],
      category: "Productivity",
      rating: 4.8,
      reviews: 1456,
      link: "/zion-project-master",
      featured: true
    },
    {
      id: "zion-workflow-automation",
      name: "Zion Workflow Automation",
      description: "Intelligent process automation with AI-powered workflow optimization and error handling",
      price: "From $199/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Visual workflow builder",
        "AI-powered optimization",
        "Error handling & recovery",
        "500+ app integrations",
        "Custom automation rules",
        "Performance monitoring",
        "Team collaboration",
        "API & webhook support"
      ],
      benefits: [
        "Automate 90% of repetitive tasks",
        "Reduce errors by 95%",
        "Save 30+ hours weekly",
        "Improve process efficiency"
      ],
      category: "Productivity",
      rating: 4.7,
      reviews: 1123,
      link: "/zion-workflow-automation",
      featured: false
    },

    // Data & Storage
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with AI-powered organization, backup automation, and collaboration features",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      features: [
        "AI-powered file organization",
        "Automated backup & sync",
        "Advanced security & encryption",
        "Team collaboration tools",
        "Version control & history",
        "File sharing & permissions",
        "Mobile app access",
        "Integration with major platforms"
      ],
      benefits: [
        "Organize files automatically",
        "Never lose important data",
        "Improve team collaboration",
        "Reduce storage costs by 40%"
      ],
      category: "Storage",
      rating: 4.6,
      reviews: 876,
      link: "/zion-cloud-vault",
      featured: true
    },
    {
      id: "zion-data-sync",
      name: "Zion Data Sync",
      description: "Intelligent data synchronization platform with real-time updates, conflict resolution, and data validation",
      price: "From $149/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      features: [
        "Real-time data synchronization",
        "Intelligent conflict resolution",
        "Data validation & cleansing",
        "Multi-platform integration",
        "Custom sync rules",
        "Data transformation tools",
        "Monitoring & alerting",
        "API & webhook support"
      ],
      benefits: [
        "Keep data consistent across platforms",
        "Reduce data errors by 80%",
        "Automate data management",
        "Improve data quality"
      ],
      category: "Data",
      rating: 4.7,
      reviews: 654,
      link: "/zion-data-sync",
      featured: false
    },

    // AI & Machine Learning
    {
      id: "zion-ai-chatbot",
      name: "Zion AI Chatbot",
      description: "Advanced conversational AI with natural language processing, sentiment analysis, and multi-channel support",
      price: "From $299/month",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Natural language understanding",
        "Sentiment analysis & emotion detection",
        "Multi-channel support",
        "Knowledge base integration",
        "Live chat handoff",
        "Custom AI training",
        "Analytics & insights",
        "Multi-language support"
      ],
      benefits: [
        "Reduce response time by 90%",
        "Handle 95% of queries automatically",
        "Improve customer satisfaction",
        "Scale support operations 10x"
      ],
      category: "AI",
      rating: 4.8,
      reviews: 1654,
      link: "/zion-ai-chatbot",
      featured: false
    },
    {
      id: "zion-ai-code-reviewer",
      name: "Zion AI Code Reviewer",
      description: "Intelligent code review platform with automated analysis, security scanning, and performance optimization",
      price: "From $199/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Automated code analysis",
        "Security vulnerability detection",
        "Performance optimization suggestions",
        "Code quality metrics",
        "Custom rule configuration",
        "Integration with Git platforms",
        "Team collaboration features",
        "Detailed reporting"
      ],
      benefits: [
        "Improve code quality by 60%",
        "Reduce security vulnerabilities by 80%",
        "Accelerate development cycles",
        "Enhance team productivity"
      ],
      category: "AI",
      rating: 4.7,
      reviews: 987,
      link: "/zion-ai-code-reviewer",
      featured: false
    },

    // Financial & Accounting
    {
      id: "zion-ai-accounting-assistant",
      name: "Zion AI Accounting Assistant",
      description: "Intelligent accounting platform with automated bookkeeping, expense tracking, and financial reporting",
      price: "From $249/month",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: [
        "Automated bookkeeping",
        "Expense tracking & categorization",
        "Invoice generation & management",
        "Financial reporting & analytics",
        "Tax preparation assistance",
        "Bank reconciliation",
        "Multi-currency support",
        "Integration with accounting software"
      ],
      benefits: [
        "Reduce accounting time by 70%",
        "Improve accuracy by 90%",
        "Automate financial processes",
        "Ensure compliance requirements"
      ],
      category: "Finance",
      rating: 4.8,
      reviews: 743,
      link: "/zion-ai-accounting-assistant",
      featured: false
    },
    {
      id: "zion-invoice-genius",
      name: "Zion Invoice Genius",
      description: "Smart invoicing platform with AI-powered templates, automated reminders, and payment tracking",
      price: "From $79/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "AI-powered invoice templates",
        "Automated payment reminders",
        "Payment tracking & analytics",
        "Multi-currency support",
        "Client portal access",
        "Recurring billing automation",
        "Tax calculation",
        "Integration with payment gateways"
      ],
      benefits: [
        "Get paid 50% faster",
        "Reduce late payments by 60%",
        "Automate invoicing processes",
        "Improve cash flow management"
      ],
      category: "Finance",
      rating: 4.6,
      reviews: 567,
      link: "/zion-invoice-genius",
      featured: false
    },

    // E-commerce & Sales
    {
      id: "zion-ecommerce-optimizer",
      name: "Zion E-commerce Optimizer",
      description: "AI-powered e-commerce optimization with product recommendations, pricing strategies, and conversion tracking",
      price: "From $299/month",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: [
        "AI product recommendations",
        "Dynamic pricing optimization",
        "Conversion rate optimization",
        "Inventory management",
        "Customer behavior analysis",
        "A/B testing tools",
        "Performance analytics",
        "Integration with major platforms"
      ],
      benefits: [
        "Increase sales by 45%",
        "Improve conversion rates by 35%",
        "Optimize pricing strategies",
        "Reduce cart abandonment"
      ],
      category: "E-commerce",
      rating: 4.7,
      reviews: 892,
      link: "/zion-ecommerce-optimizer",
      featured: false
    },
    {
      id: "zion-lead-magnet",
      name: "Zion Lead Magnet",
      description: "Advanced lead generation platform with AI-powered lead scoring, nurturing campaigns, and conversion tracking",
      price: "From $179/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "AI lead scoring & qualification",
        "Automated nurturing campaigns",
        "Landing page builder",
        "Form optimization tools",
        "Lead tracking & analytics",
        "CRM integration",
        "A/B testing capabilities",
        "Custom lead magnets"
      ],
      benefits: [
        "Increase lead quality by 60%",
        "Boost conversion rates by 40%",
        "Automate lead nurturing",
        "Improve sales pipeline"
      ],
      category: "Sales",
      rating: 4.8,
      reviews: 1123,
      link: "/zion-lead-magnet",
      featured: false
    },

    // HR & Recruitment
    {
      id: "zion-ai-recruitment-pro",
      name: "Zion AI Recruitment Pro",
      description: "Intelligent recruitment platform with AI-powered candidate screening, skill matching, and interview scheduling",
      price: "From $299/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: [
        "AI candidate screening",
        "Skill matching algorithms",
        "Automated interview scheduling",
        "Bias-free hiring processes",
        "Candidate communication tools",
        "Performance analytics",
        "Integration with job boards",
        "Custom assessment creation"
      ],
      benefits: [
        "Reduce hiring time by 60%",
        "Improve candidate quality by 45%",
        "Eliminate hiring bias",
        "Streamline recruitment processes"
      ],
      category: "HR",
      rating: 4.8,
      reviews: 876,
      link: "/zion-ai-recruitment-pro",
      featured: false
    },

    // Communication & Collaboration
    {
      id: "zion-meeting-assistant",
      name: "Zion Meeting Assistant",
      description: "AI-powered meeting platform with transcription, action item tracking, and intelligent scheduling",
      price: "From $149/month",
      icon: <Video className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "AI meeting transcription",
        "Action item extraction",
        "Intelligent scheduling",
        "Meeting analytics & insights",
        "Integration with calendar apps",
        "Team collaboration tools",
        "Custom meeting templates",
        "Mobile app access"
      ],
      benefits: [
        "Improve meeting productivity by 50%",
        "Never miss action items",
        "Optimize meeting schedules",
        "Enhance team collaboration"
      ],
      category: "Communication",
      rating: 4.7,
      reviews: 654,
      link: "/zion-meeting-assistant",
      featured: false
    },

    // Inventory & Supply Chain
    {
      id: "zion-inventory-smart",
      name: "Zion Inventory Smart",
      description: "Intelligent inventory management with demand forecasting, automated reordering, and optimization analytics",
      price: "From $199/month",
      icon: <Package className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "AI demand forecasting",
        "Automated reorder points",
        "Inventory optimization",
        "Multi-location management",
        "Supplier integration",
        "Cost tracking & analytics",
        "Barcode scanning support",
        "Mobile app access"
      ],
      benefits: [
        "Reduce inventory costs by 25%",
        "Prevent stockouts by 90%",
        "Optimize inventory levels",
        "Improve supply chain efficiency"
      ],
      category: "Inventory",
      rating: 4.6,
      reviews: 543,
      link: "/zion-inventory-smart",
      featured: false
    },

    // Performance & Monitoring
    {
      id: "zion-performance-monitor",
      name: "Zion Performance Monitor",
      description: "Comprehensive performance monitoring with real-time analytics, alerting, and optimization recommendations",
      price: "From $179/month",
      icon: <Activity className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Real-time performance monitoring",
        "Automated alerting & notifications",
        "Performance optimization suggestions",
        "Custom dashboards & reports",
        "API & database monitoring",
        "User experience tracking",
        "Integration with popular tools",
        "Mobile app access"
      ],
      benefits: [
        "Improve system performance by 40%",
        "Reduce downtime by 80%",
        "Optimize resource usage",
        "Enhance user experience"
      ],
      category: "Monitoring",
      rating: 4.7,
      reviews: 789,
      link: "/zion-performance-monitor",
      featured: false
    }
  ], []);

  const categories = useMemo(() => [
    { name: "All", count: microSaasServices.length, active: selectedCategory === "All" },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length, active: selectedCategory === "Analytics" },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length, active: selectedCategory === "Security" },
    { name: "Content", count: microSaasServices.filter(s => s.category === "Content").length, active: selectedCategory === "Content" },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length, active: selectedCategory === "Marketing" },
    { name: "Productivity", count: microSaasServices.filter(s => s.category === "Productivity").length, active: selectedCategory === "Productivity" },
    { name: "Storage", count: microSaasServices.filter(s => s.category === "Storage").length, active: selectedCategory === "Storage" },
    { name: "Data", count: microSaasServices.filter(s => s.category === "Data").length, active: selectedCategory === "Data" },
    { name: "AI", count: microSaasServices.filter(s => s.category === "AI").length, active: selectedCategory === "AI" },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length, active: selectedCategory === "Finance" },
    { name: "E-commerce", count: microSaasServices.filter(s => s.category === "E-commerce").length, active: selectedCategory === "E-commerce" },
    { name: "Sales", count: microSaasServices.filter(s => s.category === "Sales").length, active: selectedCategory === "Sales" },
    { name: "HR", count: microSaasServices.filter(s => s.category === "HR").length, active: selectedCategory === "HR" },
    { name: "Communication", count: microSaasServices.filter(s => s.category === "Communication").length, active: selectedCategory === "Communication" },
    { name: "Inventory", count: microSaasServices.filter(s => s.category === "Inventory").length, active: selectedCategory === "Inventory" },
    { name: "Monitoring", count: microSaasServices.filter(s => s.category === "Monitoring").length, active: selectedCategory === "Monitoring" }
  ], [microSaasServices, selectedCategory]);

  const filteredServices = useMemo(() => {
    if (selectedCategory === "All") return microSaasServices;
    return microSaasServices.filter(service => service.category === selectedCategory);
  }, [microSaasServices, selectedCategory]);

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "25,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro has transformed our data insights. We've increased revenue by 40% and reduced analysis time by 80% in just 6 months.",
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
        <title>Micro SAAS Services - Zion Tech Group | Ready-to-Use Software Solutions</title>
        <meta
          name="description"
          content="Comprehensive micro SAAS solutions including analytics, security, content creation, project management, and more. Transform your business with ready-to-use software tools."
        />
        <meta
          name="keywords"
          content="micro SAAS, software solutions, business tools, analytics, security, content creation, project management, automation, productivity"
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
                Ready-to-use software solutions that can transform your business operations immediately. 
                From analytics to automation, we have the tools you need to succeed.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">50+ micro SAAS solutions</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">25,000+ active users</span>
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

        {/* Categories Filter */}
        <div className="py-8 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
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
                Our most popular and powerful micro SAAS solutions trusted by businesses worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.filter(service => service.featured).map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
                >
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
                Complete micro SAAS solutions for every business need
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