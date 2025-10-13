import { ArrowRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail, Video, Mic, Camera, Settings, Heart, MessageSquare, CheckCircle, Truck, Zap, Database, Server, HardDrive, Link, DollarSign, Headphones } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "AI-Powered Business Intelligence Pro",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform. Real-time dashboards, predictive analytics, and automated reporting with 99.9% accuracy.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-business-intelligence",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $299/month",
      originalPrice: "$599/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      category: "AI Analytics",
      popular: true
    },
    {
      title: "AI Customer Support Automation Suite",
      description: "Deploy intelligent chatbots and automated customer service solutions. 24/7 support with natural language processing, sentiment analysis, and multilingual capabilities.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff", "Voice Recognition", "Custom Training"],
      category: "AI Customer Service",
      popular: true
    },
    {
      title: "AI Content Generation Studio",
      description: "Create high-quality content at scale with our AI-powered writing tools. Blog posts, social media content, product descriptions, and marketing materials with SEO optimization.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $149/month",
      originalPrice: "$299/month",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection", "Content Calendar", "Team Collaboration"],
      category: "AI Content"
    },
    {
      title: "AI Cybersecurity Defense Matrix",
      description: "Advanced threat detection and response system with real-time monitoring, automated incident response, and compliance reporting. Protect your business 24/7.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      originalPrice: "$799/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Incident Response", "Security Training"],
      category: "Cybersecurity",
      popular: true
    },
    {
      title: "5G Network Infrastructure Solutions",
      description: "Complete 5G network deployment and management solutions. Ultra-low latency, massive IoT connectivity, and edge computing capabilities for smart cities and enterprises.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/5g-solutions",
      color: "from-cyan-500 to-blue-500",
      price: "Custom Pricing",
      features: ["Network Planning", "Edge Computing", "IoT Integration", "Performance Monitoring", "Smart City Solutions", "Private Networks"],
      category: "5G Technology"
    },
    {
      title: "Cloud Infrastructure Management Pro",
      description: "Comprehensive cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support with cost optimization.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $249/month",
      originalPrice: "$499/month",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening", "Multi-cloud", "DevOps Integration"],
      category: "Cloud Services"
    },
    {
      title: "AI-Powered Data Analytics Platform",
      description: "Advanced data processing and visualization platform with machine learning models, automated insights, and interactive dashboards for data-driven decisions.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-data-analytics",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $179/month",
      originalPrice: "$359/month",
      features: ["ML Models", "Interactive Dashboards", "Data Pipeline", "Real-time Processing", "Data Visualization", "Custom Reports"],
      category: "Data Analytics"
    },
    {
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization with support for multiple programming languages, automated testing, and documentation generation.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $129/month",
      originalPrice: "$259/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation", "Code Review", "Refactoring"],
      category: "Development Tools"
    },
    {
      title: "AI Marketing Automation Hub",
      description: "End-to-end marketing automation with AI-driven personalization, email campaigns, social media management, and advanced lead scoring algorithms.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing-automation",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing", "Personalization", "Analytics Dashboard"],
      category: "Marketing Automation"
    },
    {
      title: "AI Document Intelligence Suite",
      description: "Intelligent document analysis, extraction, and processing with OCR technology, form recognition, and automated data entry solutions.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-document-processing",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $159/month",
      originalPrice: "$319/month",
      features: ["OCR Technology", "Form Recognition", "Data Extraction", "Workflow Automation", "Document Classification", "Search & Retrieval"],
      category: "Document Management"
    },
    {
      title: "AI Sales CRM Assistant Pro",
      description: "Intelligent CRM with AI-powered lead qualification, sales forecasting, and automated follow-ups. Integration with major CRM platforms and sales tools.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-crm-assistant",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $229/month",
      originalPrice: "$459/month",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "CRM Integration", "Pipeline Management", "Performance Analytics"],
      category: "Sales & CRM"
    },
    {
      title: "AI Financial Analytics Pro",
      description: "Advanced financial modeling and risk assessment with automated reporting, fraud detection, and investment analysis tools for financial institutions.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-financial-analytics",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $349/month",
      originalPrice: "$699/month",
      features: ["Risk Assessment", "Fraud Detection", "Investment Analysis", "Compliance Reporting", "Portfolio Optimization", "Market Prediction"],
      category: "Financial Services"
    },
    {
      title: "AI Healthcare Diagnostics",
      description: "Revolutionary AI-powered medical diagnostics with image analysis, symptom assessment, and treatment recommendations for healthcare providers.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-healthcare-diagnostics",
      color: "from-rose-500 to-pink-500",
      price: "Starting at $499/month",
      originalPrice: "$999/month",
      features: ["Medical Imaging", "Symptom Analysis", "Treatment Recommendations", "Patient Monitoring", "Drug Interaction", "Compliance Tracking"],
      category: "Healthcare AI"
    },
    {
      title: "AI Supply Chain Optimizer",
      description: "Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation for manufacturing and retail.",
      icon: <Globe className="w-8 h-8" />,
      path: "/ai-supply-chain-optimizer",
      color: "from-slate-500 to-gray-500",
      price: "Starting at $279/month",
      originalPrice: "$559/month",
      features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Supplier Management", "Risk Assessment", "Cost Analysis"],
      category: "Supply Chain"
    },
    {
      title: "AI Legal Research Assistant",
      description: "Advanced legal research and document analysis with case law search, contract review, and compliance monitoring for law firms and legal departments.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-legal-research",
      color: "from-indigo-500 to-blue-500",
      price: "Starting at $329/month",
      originalPrice: "$659/month",
      features: ["Case Law Search", "Contract Analysis", "Compliance Monitoring", "Document Review", "Legal Research", "Precedent Analysis"],
      category: "Legal Tech"
    },
    {
      title: "AI Energy Management System",
      description: "Smart energy management with consumption optimization, renewable energy integration, and predictive maintenance for utilities and commercial buildings.",
      icon: <Zap className="w-8 h-8" />,
      path: "/ai-energy-management",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Energy Optimization", "Renewable Integration", "Predictive Maintenance", "Smart Grid", "Cost Analysis", "Carbon Tracking"],
      category: "Energy Management"
    },
    {
      title: "AI Video Generation Studio",
      description: "Create professional videos with AI-powered editing, voice synthesis, and automated production. Perfect for marketing, training, and social media content.",
      icon: <Video className="w-8 h-8" />,
      path: "/ai-video-generation",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $89/month",
      originalPrice: "$179/month",
      features: ["AI Video Editing", "Voice Synthesis", "Auto Captions", "Template Library", "Brand Integration", "Multi-format Export"],
      category: "AI Video",
      popular: true
    },
    {
      title: "AI Voice Assistant Platform",
      description: "Build custom voice assistants with natural language processing, speech recognition, and multi-language support for customer service and automation.",
      icon: <Mic className="w-8 h-8" />,
      path: "/ai-voice-assistant",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $129/month",
      originalPrice: "$259/month",
      features: ["Voice Recognition", "Natural Language Processing", "Multi-language Support", "Custom Training", "API Integration", "Analytics Dashboard"],
      category: "AI Voice"
    },
    {
      title: "AI Image Recognition System",
      description: "Advanced computer vision with object detection, facial recognition, and image classification for security, retail, and healthcare applications.",
      icon: <Camera className="w-8 h-8" />,
      path: "/ai-image-recognition",
      color: "from-green-500 to-teal-500",
      price: "Starting at $159/month",
      originalPrice: "$319/month",
      features: ["Object Detection", "Facial Recognition", "Image Classification", "Real-time Processing", "Custom Models", "API Access"],
      category: "AI Vision"
    },
    {
      title: "AI Predictive Maintenance",
      description: "Prevent equipment failures with AI-powered predictive analytics, sensor data analysis, and automated maintenance scheduling for manufacturing and facilities.",
      icon: <Settings className="w-8 h-8" />,
      path: "/ai-predictive-maintenance",
      color: "from-orange-500 to-red-500",
      price: "Starting at $179/month",
      originalPrice: "$359/month",
      features: ["Failure Prediction", "Sensor Integration", "Maintenance Scheduling", "Cost Optimization", "Real-time Alerts", "Performance Analytics"],
      category: "AI Maintenance"
    },
    {
      title: "AI Fraud Detection Engine",
      description: "Advanced fraud detection with machine learning algorithms, real-time monitoring, and automated response for financial institutions and e-commerce.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-fraud-detection",
      color: "from-red-500 to-pink-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Real-time Detection", "Machine Learning Models", "Pattern Recognition", "Automated Response", "Risk Scoring", "Compliance Reporting"],
      category: "AI Security"
    },
    {
      title: "AI Recommendation Engine",
      description: "Personalized recommendations with collaborative filtering, content-based filtering, and deep learning for e-commerce, streaming, and content platforms.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-recommendation-engine",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $149/month",
      originalPrice: "$299/month",
      features: ["Collaborative Filtering", "Content-based Filtering", "Deep Learning", "A/B Testing", "Real-time Updates", "Analytics Dashboard"],
      category: "AI Recommendations"
    },
    {
      title: "AI Translation Services",
      description: "Real-time translation with neural machine translation, language detection, and context-aware translations for global businesses and content creators.",
      icon: <Globe className="w-8 h-8" />,
      path: "/ai-translation-services",
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $79/month",
      originalPrice: "$159/month",
      features: ["100+ Languages", "Neural Translation", "Context Awareness", "Real-time Processing", "API Integration", "Quality Metrics"],
      category: "AI Translation"
    },
    {
      title: "AI Sentiment Analysis Platform",
      description: "Analyze customer sentiment across social media, reviews, and feedback with advanced NLP and machine learning for brand monitoring and customer insights.",
      icon: <Heart className="w-8 h-8" />,
      path: "/ai-sentiment-analysis",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $99/month",
      originalPrice: "$199/month",
      features: ["Multi-source Analysis", "Real-time Monitoring", "Emotion Detection", "Trend Analysis", "Alert System", "Custom Dashboards"],
      category: "AI Analytics"
    },
    {
      title: "AI Code Review Assistant",
      description: "Automated code review with bug detection, security analysis, and performance optimization suggestions for development teams and code quality assurance.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-review",
      color: "from-slate-500 to-gray-500",
      price: "Starting at $119/month",
      originalPrice: "$239/month",
      features: ["Bug Detection", "Security Analysis", "Performance Optimization", "Code Quality Metrics", "Team Collaboration", "Integration Support"],
      category: "AI Development"
    },
    {
      title: "AI Personalization Engine",
      description: "Deliver personalized experiences with AI-powered user profiling, behavioral analysis, and dynamic content optimization for websites and applications.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-personalization",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $139/month",
      originalPrice: "$279/month",
      features: ["User Profiling", "Behavioral Analysis", "Dynamic Content", "A/B Testing", "Real-time Adaptation", "Performance Tracking"],
      category: "AI Personalization"
    },
    {
      title: "AI Document Intelligence",
      description: "Extract insights from documents with OCR, natural language processing, and automated data extraction for legal, healthcare, and business applications.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-document-intelligence",
      color: "from-amber-500 to-orange-500",
      price: "Starting at $109/month",
      originalPrice: "$219/month",
      features: ["OCR Technology", "NLP Processing", "Data Extraction", "Document Classification", "Search & Retrieval", "Workflow Automation"],
      category: "AI Document Processing"
    },
    {
      title: "AI Chatbot Builder Pro",
      description: "Create advanced conversational AI with no-code builder, multi-channel deployment, and advanced analytics for customer service and sales automation.",
      icon: <MessageSquare className="w-8 h-8" />,
      path: "/ai-chatbot-builder",
      color: "from-cyan-500 to-teal-500",
      price: "Starting at $69/month",
      originalPrice: "$139/month",
      features: ["No-code Builder", "Multi-channel Deployment", "Advanced Analytics", "Custom Training", "Integration APIs", "White-label Options"],
      category: "AI Chatbots"
    },
    {
      title: "AI Market Research Assistant",
      description: "Automated market research with data collection, trend analysis, and competitive intelligence for business strategy and market insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-market-research",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $189/month",
      originalPrice: "$379/month",
      features: ["Data Collection", "Trend Analysis", "Competitive Intelligence", "Market Forecasting", "Report Generation", "Custom Research"],
      category: "AI Research"
    },
    {
      title: "AI Quality Assurance Suite",
      description: "Automated testing and quality assurance with AI-powered test generation, bug detection, and performance monitoring for software development.",
      icon: <CheckCircle className="w-8 h-8" />,
      path: "/ai-quality-assurance",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $159/month",
      originalPrice: "$319/month",
      features: ["Automated Testing", "Bug Detection", "Performance Monitoring", "Test Generation", "Regression Testing", "Quality Metrics"],
      category: "AI Testing"
    },
    {
      title: "AI Supply Chain Optimizer",
      description: "Optimize supply chain operations with demand forecasting, inventory optimization, and logistics automation using advanced AI algorithms.",
      icon: <Truck className="w-8 h-8" />,
      path: "/ai-supply-chain-optimizer",
      color: "from-slate-500 to-gray-500",
      price: "Starting at $279/month",
      originalPrice: "$559/month",
      features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Supplier Management", "Risk Assessment", "Cost Analysis"],
      category: "AI Supply Chain"
    },
    {
      title: "Enterprise Cloud Migration",
      description: "Complete cloud migration services with zero-downtime deployment, data security, and cost optimization for enterprise applications and infrastructure.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/enterprise-cloud-migration",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,999/month",
      originalPrice: "$4,999/month",
      features: ["Zero-downtime Migration", "Data Security", "Cost Optimization", "Performance Monitoring", "Disaster Recovery", "24/7 Support"],
      category: "Cloud Services",
      popular: true
    },
    {
      title: "Advanced Network Security",
      description: "Comprehensive network security with firewall management, intrusion detection, VPN solutions, and threat monitoring for enterprise networks.",
      icon: <Shield className="w-8 h-8" />,
      path: "/advanced-network-security",
      color: "from-red-500 to-orange-500",
      price: "Starting at $1,299/month",
      originalPrice: "$2,199/month",
      features: ["Firewall Management", "Intrusion Detection", "VPN Solutions", "Threat Monitoring", "Security Audits", "Compliance Support"],
      category: "Cybersecurity"
    },
    {
      title: "Database Administration Pro",
      description: "Professional database management with performance optimization, backup solutions, security hardening, and 24/7 monitoring for critical databases.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-administration",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $899/month",
      originalPrice: "$1,599/month",
      features: ["Performance Optimization", "Backup Solutions", "Security Hardening", "24/7 Monitoring", "Disaster Recovery", "Migration Services"],
      category: "Database Services"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile app development with modern frameworks, UI/UX design, and backend integration for iOS and Android platforms.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/mobile-app-development",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $3,999/project",
      originalPrice: "$6,999/project",
      features: ["Native Development", "Cross-platform", "UI/UX Design", "Backend Integration", "App Store Deployment", "Maintenance Support"],
      category: "Mobile Development"
    },
    {
      title: "API Development & Integration",
      description: "Custom API development with RESTful services, GraphQL, microservices architecture, and third-party integrations for modern applications.",
      icon: <Code className="w-8 h-8" />,
      path: "/api-development",
      color: "from-indigo-500 to-blue-500",
      price: "Starting at $1,599/month",
      originalPrice: "$2,799/month",
      features: ["RESTful APIs", "GraphQL Services", "Microservices", "Third-party Integration", "API Documentation", "Performance Optimization"],
      category: "API Services"
    },
    {
      title: "DevOps Automation Suite",
      description: "Complete DevOps implementation with CI/CD pipelines, infrastructure as code, containerization, and automated deployment for modern software delivery.",
      icon: <Settings className="w-8 h-8" />,
      path: "/devops-automation",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $1,899/month",
      originalPrice: "$3,199/month",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Containerization", "Automated Deployment", "Monitoring & Logging", "Security Integration"],
      category: "DevOps"
    },
    {
      title: "IT Infrastructure Management",
      description: "Complete IT infrastructure management with server administration, network monitoring, hardware maintenance, and 24/7 technical support.",
      icon: <Server className="w-8 h-8" />,
      path: "/it-infrastructure-management",
      color: "from-slate-500 to-gray-500",
      price: "Starting at $1,499/month",
      originalPrice: "$2,499/month",
      features: ["Server Administration", "Network Monitoring", "Hardware Maintenance", "24/7 Support", "Performance Optimization", "Disaster Recovery"],
      category: "Infrastructure"
    },
    {
      title: "Web Application Development",
      description: "Modern web application development with responsive design, progressive web apps, and full-stack solutions for businesses and enterprises.",
      icon: <Globe className="w-8 h-8" />,
      path: "/web-application-development",
      color: "from-orange-500 to-red-500",
      price: "Starting at $2,999/project",
      originalPrice: "$4,999/project",
      features: ["Responsive Design", "Progressive Web Apps", "Full-stack Development", "Performance Optimization", "SEO Integration", "Maintenance Support"],
      category: "Web Development"
    },
    {
      title: "Data Backup & Recovery",
      description: "Comprehensive data backup and disaster recovery solutions with automated backups, off-site storage, and rapid recovery capabilities.",
      icon: <HardDrive className="w-8 h-8" />,
      path: "/data-backup-recovery",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $299/month",
      originalPrice: "$499/month",
      features: ["Automated Backups", "Off-site Storage", "Rapid Recovery", "Data Encryption", "Compliance Support", "24/7 Monitoring"],
      category: "Data Protection"
    },
    {
      title: "IT Consulting Services",
      description: "Strategic IT consulting with technology assessment, digital transformation planning, and technology roadmap development for business growth.",
      icon: <Users className="w-8 h-8" />,
      path: "/it-consulting",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $199/hour",
      originalPrice: "$299/hour",
      features: ["Technology Assessment", "Digital Transformation", "Technology Roadmap", "Vendor Selection", "Cost Optimization", "Strategic Planning"],
      category: "Consulting"
    },
    {
      title: "System Integration Services",
      description: "Enterprise system integration with legacy system modernization, API integration, and seamless data flow between different business applications.",
      icon: <Link className="w-8 h-8" />,
      path: "/system-integration",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $2,499/month",
      originalPrice: "$4,199/month",
      features: ["Legacy Modernization", "API Integration", "Data Migration", "System Testing", "Performance Optimization", "Ongoing Support"],
      category: "Integration"
    },
    {
      title: "IT Security Audit",
      description: "Comprehensive security audit with vulnerability assessment, penetration testing, compliance review, and security recommendations for businesses.",
      icon: <Shield className="w-8 h-8" />,
      path: "/it-security-audit",
      color: "from-red-500 to-pink-500",
      price: "Starting at $1,999/audit",
      originalPrice: "$3,499/audit",
      features: ["Vulnerability Assessment", "Penetration Testing", "Compliance Review", "Security Recommendations", "Risk Analysis", "Remediation Support"],
      category: "Security Audit"
    },
    {
      title: "Cloud Cost Optimization",
      description: "Optimize cloud spending with cost analysis, resource optimization, and automated scaling to reduce cloud expenses while maintaining performance.",
      icon: <DollarSign className="w-8 h-8" />,
      path: "/cloud-cost-optimization",
      color: "from-green-500 to-teal-500",
      price: "Starting at $599/month",
      originalPrice: "$999/month",
      features: ["Cost Analysis", "Resource Optimization", "Automated Scaling", "Spending Alerts", "Cost Forecasting", "ROI Analysis"],
      category: "Cloud Optimization"
    },
    {
      title: "IT Support & Helpdesk",
      description: "24/7 IT support and helpdesk services with remote assistance, ticketing system, and technical support for all IT-related issues.",
      icon: <Headphones className="w-8 h-8" />,
      path: "/it-support-helpdesk",
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $399/month",
      originalPrice: "$699/month",
      features: ["24/7 Support", "Remote Assistance", "Ticketing System", "Priority Support", "Knowledge Base", "SLA Guarantee"],
      category: "IT Support"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI and IT services including business intelligence, customer support automation, content generation, cybersecurity, 5G solutions, and cloud infrastructure. Transform your business with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="AI services, business intelligence, customer support automation, content generation, cybersecurity, 5G solutions, cloud infrastructure, data analytics, code assistant, marketing automation, document processing, CRM, financial analytics"
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
              From intelligent automation to cutting-edge infrastructure, we provide end-to-end technology services.
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
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
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
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
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-cyan-400 text-center">
                          +{service.features.length - 4} more features
                        </div>
                      )}
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
                Contact us today for a personalized consultation.
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
