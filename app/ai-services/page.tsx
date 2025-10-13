import { ArrowRight, Zap, Shield, Globe, Database, Code, Smartphone, Brain, BarChart3, Bot, FileText, Users, Target, TrendingUp, Mail, Eye, Lock, Sparkles, CheckCircle, Clock, DollarSign, Star, Monitor, Settings, Activity, PieChart, LineChart, Calendar, Wifi, Phone, Download, Upload, RefreshCw, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  const aiServices = [
    {
      title: "AI Business Intelligence Pro",
      description: "Advanced AI-powered analytics platform with real-time insights, predictive modeling, and automated reporting. Transform your data into strategic advantages.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-business-intelligence-pro",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $499/month",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Modeling Engine",
        "Automated Report Generation",
        "Custom KPI Tracking",
        "Data Visualization Tools",
        "API Integration",
        "Multi-source Data Connectors",
        "Advanced Filtering & Search",
        "Export to Multiple Formats",
        "24/7 AI Support"
      ],
      category: "Analytics",
      popular: true
    },
    {
      title: "AI Customer Support Suite",
      description: "Intelligent customer service automation with multi-language chatbots, sentiment analysis, and seamless human handoff capabilities.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support-suite",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $299/month",
      features: [
        "Multi-language Chatbots",
        "Sentiment Analysis",
        "CRM Integration",
        "Live Chat Handoff",
        "Knowledge Base AI",
        "Automated Ticket Routing",
        "Customer Satisfaction Tracking",
        "Voice & Text Support",
        "Custom Training",
        "Analytics Dashboard"
      ],
      category: "Customer Service",
      popular: true
    },
    {
      title: "AI Content Generation Studio",
      description: "Create high-quality content at scale with our AI-powered writing tools. Blog posts, social media content, product descriptions, and more.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation-studio",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $199/month",
      features: [
        "SEO-optimized Content",
        "Brand Voice Training",
        "Multi-format Output",
        "Plagiarism Detection",
        "Content Calendar",
        "Social Media Scheduling",
        "A/B Testing Tools",
        "Performance Analytics",
        "Team Collaboration",
        "Content Templates"
      ],
      category: "Content Creation",
      popular: false
    },
    {
      title: "AI Cybersecurity Monitor",
      description: "Advanced threat detection and response system with real-time monitoring, automated incident response, and compliance reporting.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity-monitor",
      color: "from-red-500 to-orange-500",
      price: "Starting at $599/month",
      features: [
        "Real-time Threat Detection",
        "Automated Incident Response",
        "Compliance Monitoring",
        "Vulnerability Scanning",
        "Security Audit Reports",
        "24/7 AI Monitoring",
        "Multi-layer Protection",
        "Threat Intelligence Feeds",
        "Custom Security Policies",
        "Emergency Response Team"
      ],
      category: "Security",
      popular: true
    },
    {
      title: "AI Marketing Automation Pro",
      description: "End-to-end marketing automation with AI-driven personalization, lead scoring, and campaign optimization for maximum ROI.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing-automation-pro",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $349/month",
      features: [
        "Email Automation",
        "Social Media Management",
        "Lead Scoring AI",
        "A/B Testing",
        "Personalization Engine",
        "Campaign Optimization",
        "ROI Analytics",
        "Customer Journey Mapping",
        "Integration APIs",
        "Performance Tracking"
      ],
      category: "Marketing",
      popular: false
    },
    {
      title: "AI Document Intelligence",
      description: "Intelligent document analysis, extraction, and processing with OCR, form recognition, and automated data entry solutions.",
      icon: <Database className="w-8 h-8" />,
      path: "/ai-document-intelligence",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $249/month",
      features: [
        "OCR Technology",
        "Form Recognition",
        "Data Extraction",
        "Workflow Automation",
        "Document Classification",
        "Version Control",
        "Search & Retrieval",
        "Compliance Checking",
        "API Integration",
        "Batch Processing"
      ],
      category: "Document Processing",
      popular: false
    },
    {
      title: "AI Sales CRM Assistant",
      description: "Intelligent CRM with AI-powered lead qualification, sales forecasting, and automated follow-ups for maximum conversion.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-sales-crm-assistant",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $379/month",
      features: [
        "Lead Scoring AI",
        "Sales Forecasting",
        "Automated Follow-ups",
        "CRM Integration",
        "Pipeline Management",
        "Deal Tracking",
        "Performance Analytics",
        "Custom Workflows",
        "Mobile App",
        "Team Collaboration"
      ],
      category: "Sales",
      popular: false
    },
    {
      title: "AI Financial Analytics",
      description: "Advanced financial modeling and risk assessment with automated reporting, fraud detection, and investment analysis tools.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-financial-analytics",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $449/month",
      features: [
        "Risk Assessment",
        "Fraud Detection",
        "Investment Analysis",
        "Compliance Reporting",
        "Financial Modeling",
        "Portfolio Optimization",
        "Market Analysis",
        "Automated Alerts",
        "Custom Dashboards",
        "Regulatory Compliance"
      ],
      category: "Finance",
      popular: false
    },
    {
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization with support for multiple programming languages and automated testing.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant-pro",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $179/month",
      features: [
        "Code Generation",
        "Bug Detection",
        "Performance Optimization",
        "Documentation",
        "Code Review",
        "Testing Automation",
        "Multi-language Support",
        "IDE Integration",
        "Team Collaboration",
        "Version Control"
      ],
      category: "Development",
      popular: false
    },
    {
      title: "AI Data Visualization",
      description: "Transform complex data into interactive visualizations with AI-powered insights and automated chart generation.",
      icon: <PieChart className="w-8 h-8" />,
      path: "/ai-data-visualization",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $159/month",
      features: [
        "Interactive Dashboards",
        "Automated Chart Generation",
        "Real-time Updates",
        "Custom Visualizations",
        "Data Storytelling",
        "Export Options",
        "Collaboration Tools",
        "Mobile Responsive",
        "API Integration",
        "Template Library"
      ],
      category: "Data Visualization",
      popular: false
    },
    {
      title: "AI Workflow Automation",
      description: "Powerful workflow automation that connects your apps and automates repetitive tasks with intelligent decision-making.",
      icon: <Zap className="w-8 h-8" />,
      path: "/ai-workflow-automation",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $229/month",
      features: [
        "Visual Workflow Builder",
        "App Integrations",
        "Conditional Logic",
        "Data Transformation",
        "Error Handling",
        "Scheduled Triggers",
        "Custom Actions",
        "Workflow Analytics",
        "Team Permissions",
        "API Access"
      ],
      category: "Automation",
      popular: false
    },
    {
      title: "AI Predictive Analytics",
      description: "Advanced predictive modeling with machine learning algorithms for forecasting, trend analysis, and business intelligence.",
      icon: <Activity className="w-8 h-8" />,
      path: "/ai-predictive-analytics",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $399/month",
      features: [
        "Machine Learning Models",
        "Forecasting Engine",
        "Trend Analysis",
        "Pattern Recognition",
        "Risk Assessment",
        "Scenario Planning",
        "Model Training",
        "Performance Metrics",
        "Custom Algorithms",
        "Real-time Predictions"
      ],
      category: "Predictive Analytics",
      popular: false
    }
  ];

  const categories = [
    { name: "All", count: aiServices.length },
    { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
    { name: "Customer Service", count: aiServices.filter(s => s.category === "Customer Service").length },
    { name: "Content Creation", count: aiServices.filter(s => s.category === "Content Creation").length },
    { name: "Security", count: aiServices.filter(s => s.category === "Security").length },
    { name: "Marketing", count: aiServices.filter(s => s.category === "Marketing").length },
    { name: "Document Processing", count: aiServices.filter(s => s.category === "Document Processing").length },
    { name: "Sales", count: aiServices.filter(s => s.category === "Sales").length },
    { name: "Finance", count: aiServices.filter(s => s.category === "Finance").length },
    { name: "Development", count: aiServices.filter(s => s.category === "Development").length },
    { name: "Data Visualization", count: aiServices.filter(s => s.category === "Data Visualization").length },
    { name: "Automation", count: aiServices.filter(s => s.category === "Automation").length },
    { name: "Predictive Analytics", count: aiServices.filter(s => s.category === "Predictive Analytics").length }
  ];

  const stats = [
    { number: "12+", label: "AI Solutions", icon: <Brain className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Integrations", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services including business intelligence, customer support automation, content generation, cybersecurity, marketing automation, and predictive analytics. Transform your business with cutting-edge AI technology."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, business intelligence, customer support automation, content generation, cybersecurity AI, marketing automation, predictive analytics, document processing, sales AI, financial analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 holographic-grid"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Advanced AI Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From advanced analytics to intelligent automation, we provide comprehensive AI services that drive growth and innovation.
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
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
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

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our AI Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className={`group holographic-card p-6 hover:scale-105 transition-all duration-300 ${
                    service.popular ? 'ring-2 ring-cyan-400/50' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30">
                      {service.category}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 5 && (
                      <div className="text-sm text-cyan-400 font-medium">
                        +{service.features.length - 5} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <Link
                      to={service.path}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center block"
                    >
                      Get Started
                    </Link>
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
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI solutions to drive growth and innovation. 
                Contact us today for a personalized consultation and demo.
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
                  Start Your AI Journey
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
