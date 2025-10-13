import { ArrowRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail, Zap, Database, Cpu, Lock, Smartphone as Phone, Monitor, Server, Network, Settings, CheckCircle, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    // AI Services
    {
      title: "AI-Powered Business Intelligence Pro",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform. Real-time dashboards, predictive analytics, and automated reporting with 99.9% accuracy.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-business-intelligence-pro",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $299/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Advanced ML Models"],
      category: "AI Services",
      marketPrice: "$500-800/month",
      benefits: ["40% faster decision making", "60% reduction in manual reporting", "ROI within 3 months"]
    },
    {
      title: "AI Customer Support Automation Suite",
      description: "Deploy intelligent chatbots and automated customer service solutions. 24/7 support with natural language processing, sentiment analysis, and multilingual support.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support-chatbot",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $199/month",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff", "Voice Recognition"],
      category: "AI Services",
      marketPrice: "$300-500/month",
      benefits: ["80% reduction in response time", "24/7 availability", "95% customer satisfaction"]
    },
    {
      title: "AI Content Generation Studio",
      description: "Create high-quality content at scale with our AI-powered writing tools. Blog posts, social media content, product descriptions, and marketing copy with brand voice consistency.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation-pro",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $149/month",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection", "Content Calendar"],
      category: "AI Services",
      marketPrice: "$200-400/month",
      benefits: ["10x faster content creation", "Consistent brand voice", "SEO-optimized output"]
    },
    {
      title: "AI Cybersecurity Defense Matrix",
      description: "Advanced threat detection and response system. Real-time monitoring, automated incident response, and compliance reporting with zero false positives.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity-suite-pro",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Behavioral Analysis"],
      category: "AI Services",
      marketPrice: "$600-1200/month",
      benefits: ["99.9% threat detection accuracy", "Real-time response", "Compliance automation"]
    },
    {
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization. Support for 50+ programming languages with automated testing, documentation, and security auditing.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant-pro",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $129/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation", "Security Auditing"],
      category: "AI Services",
      marketPrice: "$200-350/month",
      benefits: ["50% faster development", "Reduced bugs by 70%", "Automated documentation"]
    },
    {
      title: "AI Marketing Automation Platform",
      description: "End-to-end marketing automation with AI-driven personalization. Email campaigns, social media management, lead scoring, and conversion optimization.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing-automation",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $199/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing", "Conversion Optimization"],
      category: "AI Services",
      marketPrice: "$300-600/month",
      benefits: ["3x higher conversion rates", "Automated lead nurturing", "Personalized campaigns"]
    },
    {
      title: "AI Document Intelligence Suite",
      description: "Intelligent document analysis, extraction, and processing. OCR, form recognition, automated data entry, and workflow automation with 99.5% accuracy.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-document-processing",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $159/month",
      features: ["OCR Technology", "Form Recognition", "Data Extraction", "Workflow Automation", "Multi-language OCR"],
      category: "AI Services",
      marketPrice: "$250-450/month",
      benefits: ["90% reduction in manual data entry", "99.5% accuracy", "Multi-format support"]
    },
    {
      title: "AI Sales CRM Assistant Pro",
      description: "Intelligent CRM with AI-powered lead qualification, sales forecasting, and automated follow-ups. Integration with major CRM platforms and advanced analytics.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-crm-assistant",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $229/month",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "CRM Integration", "Pipeline Analytics"],
      category: "AI Services",
      marketPrice: "$350-600/month",
      benefits: ["25% increase in sales", "Automated lead qualification", "Predictive sales forecasting"]
    },
    {
      title: "AI Financial Analytics Pro",
      description: "Advanced financial modeling and risk assessment. Automated reporting, fraud detection, investment analysis, and regulatory compliance tools.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-financial-analytics",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $349/month",
      features: ["Risk Assessment", "Fraud Detection", "Investment Analysis", "Compliance Reporting", "Real-time Alerts"],
      category: "AI Services",
      marketPrice: "$500-1000/month",
      benefits: ["95% fraud detection accuracy", "Real-time risk monitoring", "Automated compliance"]
    },
    {
      title: "AI Predictive Analytics Engine",
      description: "Advanced predictive modeling for business forecasting, demand planning, and trend analysis. Machine learning algorithms with real-time data processing.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-predictive-analytics",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $279/month",
      features: ["Demand Forecasting", "Trend Analysis", "Risk Prediction", "Real-time Processing", "Custom Models"],
      category: "AI Services",
      marketPrice: "$400-800/month",
      benefits: ["85% forecast accuracy", "Real-time insights", "Custom ML models"]
    },

    // IT Services
    {
      title: "Cloud Infrastructure Management Pro",
      description: "Comprehensive cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support with 99.99% uptime SLA.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $249/month",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening", "Multi-cloud Support"],
      category: "IT Services",
      marketPrice: "$400-800/month",
      benefits: ["99.99% uptime SLA", "40% cost reduction", "Automated scaling"]
    },
    {
      title: "5G Network Infrastructure Solutions",
      description: "Complete 5G network deployment and management solutions. Ultra-low latency, massive IoT connectivity, and edge computing capabilities.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/5g-solutions",
      color: "from-cyan-500 to-blue-500",
      price: "Custom Pricing",
      features: ["Network Planning", "Edge Computing", "IoT Integration", "Performance Monitoring", "Private Networks"],
      category: "IT Services",
      marketPrice: "$10,000-50,000/month",
      benefits: ["10x faster speeds", "Ultra-low latency", "Massive IoT support"]
    },
    {
      title: "Advanced Cybersecurity Suite",
      description: "Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, penetration testing, and compliance management.",
      icon: <Lock className="w-8 h-8" />,
      path: "/cybersecurity-solutions",
      color: "from-red-500 to-pink-500",
      price: "Starting at $399/month",
      features: ["Threat Detection", "Vulnerability Assessment", "Penetration Testing", "Compliance Management", "Incident Response"],
      category: "IT Services",
      marketPrice: "$600-1500/month",
      benefits: ["Zero security breaches", "24/7 monitoring", "Compliance automation"]
    },
    {
      title: "Enterprise Web Development",
      description: "Custom web applications and websites with modern technologies. React, Node.js, Python, and cloud deployment with responsive design.",
      icon: <Globe className="w-8 h-8" />,
      path: "/web-development",
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $2,500/project",
      features: ["Custom Development", "Responsive Design", "SEO Optimization", "Performance Optimization", "Maintenance"],
      category: "IT Services",
      marketPrice: "$5,000-25,000/project",
      benefits: ["Modern technology stack", "Mobile-first design", "SEO optimized"]
    },
    {
      title: "Mobile App Development Pro",
      description: "Native and cross-platform mobile applications for iOS and Android. Flutter, React Native, and native development with app store optimization.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/mobile-development",
      color: "from-green-500 to-teal-500",
      price: "Starting at $3,500/project",
      features: ["Native Development", "Cross-platform", "App Store Optimization", "Push Notifications", "Analytics Integration"],
      category: "IT Services",
      marketPrice: "$7,000-35,000/project",
      benefits: ["Cross-platform compatibility", "App store optimization", "Real-time analytics"]
    },
    {
      title: "Database Management & Optimization",
      description: "Database design, optimization, and management services. MySQL, PostgreSQL, MongoDB, and cloud database solutions with performance tuning.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-orange-500 to-red-500",
      price: "Starting at $199/month",
      features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Security Hardening", "Cloud Migration"],
      category: "IT Services",
      marketPrice: "$300-800/month",
      benefits: ["50% performance improvement", "Automated backups", "Security hardening"]
    },
    {
      title: "DevOps & CI/CD Solutions",
      description: "Complete DevOps implementation with continuous integration, continuous deployment, and infrastructure automation using modern tools.",
      icon: <Settings className="w-8 h-8" />,
      path: "/devops-solutions",
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $299/month",
      features: ["CI/CD Pipeline", "Infrastructure as Code", "Monitoring & Logging", "Container Orchestration", "Security Scanning"],
      category: "IT Services",
      marketPrice: "$500-1200/month",
      benefits: ["90% faster deployments", "Automated testing", "Infrastructure automation"]
    },
    {
      title: "Blockchain Development Services",
      description: "Custom blockchain solutions, smart contracts, and cryptocurrency development. Ethereum, Solana, and custom blockchain implementations.",
      icon: <Network className="w-8 h-8" />,
      path: "/blockchain-development",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $5,000/project",
      features: ["Smart Contracts", "DApp Development", "Token Development", "DeFi Solutions", "NFT Platforms"],
      category: "IT Services",
      marketPrice: "$10,000-100,000/project",
      benefits: ["Secure smart contracts", "DeFi integration", "NFT marketplace"]
    },
    {
      title: "Machine Learning Operations (MLOps)",
      description: "End-to-end machine learning pipeline management, model deployment, monitoring, and optimization for production environments.",
      icon: <Cpu className="w-8 h-8" />,
      path: "/machine-learning-ops",
      color: "from-pink-500 to-purple-500",
      price: "Starting at $399/month",
      features: ["Model Training", "Deployment Pipeline", "Model Monitoring", "A/B Testing", "Auto-scaling"],
      category: "IT Services",
      marketPrice: "$600-1500/month",
      benefits: ["Automated ML pipelines", "Model versioning", "Production monitoring"]
    },
    {
      title: "IoT Solutions & Integration",
      description: "Internet of Things solutions including device integration, data collection, real-time monitoring, and analytics for smart systems.",
      icon: <Monitor className="w-8 h-8" />,
      path: "/iot-solutions",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $299/month",
      features: ["Device Integration", "Real-time Monitoring", "Data Analytics", "Edge Computing", "Security"],
      category: "IT Services",
      marketPrice: "$500-1200/month",
      benefits: ["Real-time monitoring", "Edge computing", "Secure device management"]
    },

    // Micro SAAS Services
    {
      title: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Perfect for small to medium businesses.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/zion-analytics-pro",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $29/month",
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "API Integration", "Mobile App"],
      category: "Micro SAAS",
      marketPrice: "$50-100/month",
      benefits: ["Easy setup in 5 minutes", "No technical knowledge required", "30-day free trial"]
    },
    {
      title: "Zion Security Shield",
      description: "Advanced cybersecurity protection for small businesses. Real-time threat detection, automated response, and compliance reporting.",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-security-shield",
      color: "from-red-500 to-orange-500",
      price: "Starting at $49/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Mobile Alerts"],
      category: "Micro SAAS",
      marketPrice: "$80-150/month",
      benefits: ["Enterprise-grade security", "Easy setup", "24/7 protection"]
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, file sharing, and collaboration features. Perfect for teams and individuals.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/zion-cloud-vault",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $9/month",
      features: ["Secure Storage", "File Sharing", "Collaboration", "Version Control", "Mobile Sync"],
      category: "Micro SAAS",
      marketPrice: "$15-30/month",
      benefits: ["End-to-end encryption", "Unlimited sharing", "Cross-platform sync"]
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, and marketing. Generate high-quality content with brand voice consistency.",
      icon: <FileText className="w-8 h-8" />,
      path: "/zion-content-studio",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $19/month",
      features: ["Content Generation", "SEO Optimization", "Brand Voice", "Multi-format", "Content Calendar"],
      category: "Micro SAAS",
      marketPrice: "$30-60/month",
      benefits: ["10x faster content creation", "SEO optimized", "Brand consistency"]
    },
    {
      title: "Zion Data Sync Pro",
      description: "Automated data synchronization between different platforms and databases. Real-time sync with conflict resolution and data validation.",
      icon: <Database className="w-8 h-8" />,
      path: "/zion-data-sync",
      color: "from-green-500 to-teal-500",
      price: "Starting at $39/month",
      features: ["Real-time Sync", "Conflict Resolution", "Data Validation", "Multiple Sources", "API Integration"],
      category: "Micro SAAS",
      marketPrice: "$60-120/month",
      benefits: ["Real-time synchronization", "Zero data loss", "Easy setup"]
    },
    {
      title: "Zion Lead Magnet Builder",
      description: "Create and manage lead magnets, landing pages, and email campaigns. Complete marketing automation for small businesses.",
      icon: <Target className="w-8 h-8" />,
      path: "/zion-lead-magnet",
      color: "from-orange-500 to-red-500",
      price: "Starting at $29/month",
      features: ["Landing Pages", "Email Campaigns", "Lead Scoring", "Analytics", "A/B Testing"],
      category: "Micro SAAS",
      marketPrice: "$50-100/month",
      benefits: ["Drag-and-drop builder", "Email automation", "Lead tracking"]
    },
    {
      title: "Zion Project Master",
      description: "AI-powered project management tool with task automation, team collaboration, and progress tracking. Perfect for remote teams.",
      icon: <Users className="w-8 h-8" />,
      path: "/zion-project-master",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $24/month",
      features: ["Task Management", "Team Collaboration", "Progress Tracking", "AI Insights", "Time Tracking"],
      category: "Micro SAAS",
      marketPrice: "$40-80/month",
      benefits: ["AI-powered insights", "Team collaboration", "Progress automation"]
    },
    {
      title: "Zion Email Automation Pro",
      description: "Advanced email marketing automation with AI-driven personalization, segmentation, and campaign optimization.",
      icon: <Mail className="w-8 h-8" />,
      path: "/zion-email-automation",
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $19/month",
      features: ["Email Automation", "Personalization", "Segmentation", "Analytics", "A/B Testing"],
      category: "Micro SAAS",
      marketPrice: "$30-60/month",
      benefits: ["AI personalization", "Automated campaigns", "Advanced analytics"]
    },
    {
      title: "Zion Social Scheduler",
      description: "AI-powered social media management with content scheduling, analytics, and engagement optimization across all platforms.",
      icon: <Globe className="w-8 h-8" />,
      path: "/zion-social-scheduler",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $29/month",
      features: ["Content Scheduling", "Multi-platform", "Analytics", "Engagement", "Hashtag Research"],
      category: "Micro SAAS",
      marketPrice: "$50-100/month",
      benefits: ["Multi-platform management", "Optimal posting times", "Engagement analytics"]
    },
    {
      title: "Zion Workflow Automation",
      description: "No-code workflow automation platform. Connect apps, automate tasks, and streamline business processes without coding.",
      icon: <Zap className="w-8 h-8" />,
      path: "/zion-workflow-automation",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $39/month",
      features: ["No-code Automation", "App Integration", "Custom Workflows", "Triggers", "Analytics"],
      category: "Micro SAAS",
      marketPrice: "$60-120/month",
      benefits: ["No coding required", "Unlimited workflows", "Easy integration"]
    },
    {
      title: "Zion Invoice Genius",
      description: "AI-powered invoicing and payment management system. Automated invoicing, payment tracking, and financial reporting.",
      icon: <FileText className="w-8 h-8" />,
      path: "/zion-invoice-genius",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $19/month",
      features: ["Automated Invoicing", "Payment Tracking", "Financial Reports", "Tax Management", "Client Portal"],
      category: "Micro SAAS",
      marketPrice: "$30-60/month",
      benefits: ["Automated invoicing", "Payment tracking", "Tax compliance"]
    },
    {
      title: "Zion Inventory Smart",
      description: "Intelligent inventory management with demand forecasting, automated reordering, and real-time tracking.",
      icon: <Database className="w-8 h-8" />,
      path: "/zion-inventory-smart",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $34/month",
      features: ["Inventory Tracking", "Demand Forecasting", "Automated Reordering", "Analytics", "Multi-location"],
      category: "Micro SAAS",
      marketPrice: "$50-100/month",
      benefits: ["Demand forecasting", "Automated reordering", "Multi-location support"]
    },
    {
      title: "Zion Compliance Manager",
      description: "Automated compliance management for various industries. Track requirements, generate reports, and ensure regulatory compliance.",
      icon: <CheckCircle className="w-8 h-8" />,
      path: "/zion-compliance-manager",
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $49/month",
      features: ["Compliance Tracking", "Report Generation", "Audit Trails", "Alerts", "Industry Standards"],
      category: "Micro SAAS",
      marketPrice: "$80-150/month",
      benefits: ["Automated compliance", "Industry standards", "Audit readiness"]
    },
    {
      title: "Zion Performance Monitor",
      description: "Real-time application and website performance monitoring with alerts, analytics, and optimization recommendations.",
      icon: <Monitor className="w-8 h-8" />,
      path: "/zion-performance-monitor",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $29/month",
      features: ["Real-time Monitoring", "Performance Alerts", "Analytics", "Optimization Tips", "Uptime Tracking"],
      category: "Micro SAAS",
      marketPrice: "$50-100/month",
      benefits: ["Real-time monitoring", "Performance optimization", "Uptime tracking"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI and IT services including business intelligence, customer support automation, content generation, cybersecurity, 5G solutions, cloud infrastructure, and micro SAAS solutions. Transform your business with cutting-edge technology and innovative solutions."
        />
        <meta
          name="keywords"
          content="AI services, business intelligence, customer support automation, content generation, cybersecurity, 5G solutions, cloud infrastructure, data analytics, code assistant, marketing automation, document processing, CRM, financial analytics, micro SAAS, IT services, web development, mobile development, blockchain, IoT, DevOps"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Services
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation. 
              From intelligent automation to cutting-edge infrastructure, we provide end-to-end technology services with real market pricing and proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AI & Technology Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI-powered services and cutting-edge technology solutions designed to transform your business.
              </p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                All Services
              </button>
              <button className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                AI Services
              </button>
              <button className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                IT Services
              </button>
              <button className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                Micro SAAS
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Category Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                      {service.category === "Micro SAAS" && (
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      )}
                    </div>
                    
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Price and Market Price */}
                    <div className="space-y-3 mb-4">
                      <div className="text-center">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        <div className="text-xs text-gray-400 mt-1">
                          Market: {service.marketPrice}
                        </div>
                      </div>
                      
                      {/* Benefits */}
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-xs text-green-400">
                            <CheckCircle className="w-3 h-3 mr-2" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-1 justify-center">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-xs text-gray-400">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.path}
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

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our solutions to drive growth and innovation. 
                Contact us today for a personalized consultation and get started with our proven technology solutions.
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
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
