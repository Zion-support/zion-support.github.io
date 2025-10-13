import { ArrowRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail, Zap, Database, Settings, Monitor, Lock, Server, Cpu, Network, HardDrive, Smartphone as Phone, Laptop, Headphones, CheckCircle, Star, Award, Rocket, Sparkles, Link } from "lucide-react";
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
      title: "Enterprise Database Management Pro",
      description: "Comprehensive database solutions with optimization, backup, recovery, and performance monitoring for enterprise applications and data warehouses.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $299/month",
      originalPrice: "$599/month",
      features: ["Database Optimization", "Backup & Recovery", "Performance Monitoring", "Security Hardening", "Scalability Planning", "Migration Services"],
      category: "Database Services",
      popular: true
    },
    {
      title: "IT Infrastructure Monitoring Suite",
      description: "24/7 infrastructure monitoring with real-time alerts, performance analytics, and automated incident response for servers, networks, and applications.",
      icon: <Monitor className="w-8 h-8" />,
      path: "/infrastructure-monitoring",
      color: "from-green-500 to-teal-500",
      price: "Starting at $179/month",
      originalPrice: "$359/month",
      features: ["Real-time Monitoring", "Automated Alerts", "Performance Analytics", "Incident Response", "Capacity Planning", "Health Dashboards"],
      category: "Infrastructure"
    },
    {
      title: "Advanced Network Security Solutions",
      description: "Comprehensive network security with firewall management, intrusion detection, VPN solutions, and threat intelligence for enterprise networks.",
      icon: <Lock className="w-8 h-8" />,
      path: "/network-security",
      color: "from-red-500 to-pink-500",
      price: "Starting at $249/month",
      originalPrice: "$499/month",
      features: ["Firewall Management", "Intrusion Detection", "VPN Solutions", "Threat Intelligence", "Network Segmentation", "Compliance Auditing"],
      category: "Network Security"
    },
    {
      title: "Cloud Migration & Modernization",
      description: "Complete cloud migration services with application modernization, data migration, and cloud-native architecture design for digital transformation.",
      icon: <Server className="w-8 h-8" />,
      path: "/cloud-migration",
      color: "from-purple-500 to-violet-500",
      price: "Starting at $399/month",
      originalPrice: "$799/month",
      features: ["Application Migration", "Data Migration", "Cloud Architecture", "Performance Optimization", "Cost Optimization", "Security Implementation"],
      category: "Cloud Migration"
    },
    {
      title: "DevOps & CI/CD Pipeline Solutions",
      description: "Complete DevOps implementation with continuous integration, deployment automation, container orchestration, and infrastructure as code.",
      icon: <Settings className="w-8 h-8" />,
      path: "/devops-solutions",
      color: "from-orange-500 to-amber-500",
      price: "Starting at $229/month",
      originalPrice: "$459/month",
      features: ["CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code", "Automated Testing", "Deployment Automation", "Monitoring & Logging"],
      category: "DevOps"
    },
    {
      title: "Enterprise Backup & Disaster Recovery",
      description: "Comprehensive backup solutions with automated scheduling, disaster recovery planning, and business continuity services for enterprise data protection.",
      icon: <HardDrive className="w-8 h-8" />,
      path: "/backup-disaster-recovery",
      color: "from-slate-500 to-gray-500",
      price: "Starting at $159/month",
      originalPrice: "$319/month",
      features: ["Automated Backups", "Disaster Recovery", "Data Encryption", "Offsite Storage", "Recovery Testing", "Compliance Reporting"],
      category: "Data Protection"
    },
    {
      title: "Mobile App Development Services",
      description: "Native and cross-platform mobile app development with iOS, Android, and React Native solutions for enterprise and consumer applications.",
      icon: <Phone className="w-8 h-8" />,
      path: "/mobile-development",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Native iOS/Android", "Cross-platform Apps", "UI/UX Design", "API Integration", "App Store Optimization", "Maintenance & Support"],
      category: "Mobile Development"
    },
    {
      title: "Web Application Development",
      description: "Custom web application development with modern frameworks, responsive design, and scalable architecture for business applications and e-commerce.",
      icon: <Laptop className="w-8 h-8" />,
      path: "/web-development",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $179/month",
      originalPrice: "$359/month",
      features: ["Custom Web Apps", "Responsive Design", "E-commerce Solutions", "API Development", "Performance Optimization", "SEO Implementation"],
      category: "Web Development"
    },
    {
      title: "IT Support & Help Desk Services",
      description: "24/7 IT support with remote assistance, help desk management, and technical support for end users and IT infrastructure maintenance.",
      icon: <Headphones className="w-8 h-8" />,
      path: "/it-support",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $129/month",
      originalPrice: "$259/month",
      features: ["24/7 Support", "Remote Assistance", "Help Desk Management", "User Training", "Issue Resolution", "Preventive Maintenance"],
      category: "IT Support"
    },
    {
      title: "Network Infrastructure Design",
      description: "Complete network infrastructure design and implementation with LAN, WAN, wireless solutions, and network optimization for enterprise environments.",
      icon: <Network className="w-8 h-8" />,
      path: "/network-infrastructure",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $279/month",
      originalPrice: "$559/month",
      features: ["Network Design", "LAN/WAN Setup", "Wireless Solutions", "Network Optimization", "Security Implementation", "Performance Tuning"],
      category: "Network Infrastructure"
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic IT consulting with technology roadmaps, digital transformation planning, and technology assessment for business growth and efficiency.",
      icon: <Cpu className="w-8 h-8" />,
      path: "/it-consulting",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Technology Roadmaps", "Digital Transformation", "IT Assessment", "Strategic Planning", "Technology Selection", "Implementation Guidance"],
      category: "IT Consulting"
    },
    {
      title: "Cybersecurity Audit & Compliance",
      description: "Comprehensive cybersecurity audits with compliance assessment, vulnerability testing, and security recommendations for regulatory requirements.",
      icon: <Shield className="w-8 h-8" />,
      path: "/cybersecurity-audit",
      color: "from-red-500 to-orange-500",
      price: "Starting at $349/month",
      originalPrice: "$699/month",
      features: ["Security Audits", "Compliance Assessment", "Vulnerability Testing", "Penetration Testing", "Risk Assessment", "Remediation Planning"],
      category: "Cybersecurity"
    },
    {
      title: "Data Center Services & Colocation",
      description: "Secure data center services with colocation, managed hosting, and infrastructure services for enterprise applications and data storage.",
      icon: <Server className="w-8 h-8" />,
      path: "/data-center-services",
      color: "from-slate-600 to-gray-600",
      price: "Starting at $299/month",
      originalPrice: "$599/month",
      features: ["Colocation Services", "Managed Hosting", "Power & Cooling", "Physical Security", "Network Connectivity", "24/7 Monitoring"],
      category: "Data Center"
    },
    {
      title: "IT Asset Management Solutions",
      description: "Complete IT asset management with inventory tracking, lifecycle management, and cost optimization for hardware and software assets.",
      icon: <Settings className="w-8 h-8" />,
      path: "/asset-management",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $149/month",
      originalPrice: "$299/month",
      features: ["Asset Inventory", "Lifecycle Management", "Cost Tracking", "License Management", "Depreciation Tracking", "Compliance Reporting"],
      category: "Asset Management"
    },
    {
      title: "AI-Powered DevOps Solutions",
      description: "Intelligent DevOps automation with AI-driven CI/CD pipelines, automated testing, and smart monitoring for faster, more reliable deployments.",
      icon: <Settings className="w-8 h-8" />,
      path: "/ai-powered-devops",
      color: "from-indigo-500 to-blue-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["AI CI/CD Pipelines", "Automated Testing", "Smart Monitoring", "Infrastructure Automation", "Code Quality Analysis", "Security Automation"],
      category: "DevOps & Automation",
      popular: true
    },
    {
      title: "Blockchain Development Services",
      description: "Expert blockchain solutions including DeFi platforms, NFT marketplaces, smart contracts, and enterprise blockchain integration.",
      icon: <Link className="w-8 h-8" />,
      path: "/blockchain-solutions",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $15,000/project",
      features: ["Smart Contract Development", "DeFi Platform Development", "NFT Marketplace", "Blockchain Integration", "Security Auditing", "Custom Solutions"],
      category: "Blockchain & Web3"
    },
    {
      title: "AI-Powered Data Science Platform",
      description: "Advanced data science platform with machine learning models, automated insights, and predictive analytics for data-driven decision making.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-data-science-platform",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $299/month",
      originalPrice: "$599/month",
      features: ["ML Model Development", "Automated Insights", "Predictive Analytics", "Data Visualization", "Model Deployment", "A/B Testing"],
      category: "Data Science & AI"
    },
    {
      title: "Enterprise API Management",
      description: "Comprehensive API management platform with security, monitoring, and analytics for enterprise-grade API operations.",
      icon: <Globe className="w-8 h-8" />,
      path: "/api-management",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["API Gateway", "Rate Limiting", "Security Policies", "Analytics Dashboard", "Developer Portal", "Documentation"],
      category: "API & Integration"
    },
    {
      title: "IoT Solutions & Integration",
      description: "Complete IoT solutions including device management, data collection, real-time monitoring, and analytics for connected devices.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/iot-solutions",
      color: "from-orange-500 to-red-500",
      price: "Starting at $249/month",
      originalPrice: "$499/month",
      features: ["Device Management", "Real-time Monitoring", "Data Analytics", "Edge Computing", "Security", "Scalability"],
      category: "IoT & Edge Computing"
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
