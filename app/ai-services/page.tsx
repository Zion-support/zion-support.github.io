import { ArrowRight, Zap, Shield, Globe, Database, Code, Smartphone, Brain, BarChart3, Bot, FileText, Users, Target, TrendingUp, Mail, Phone, MapPin, Star, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  const aiServices = [
    {
      title: "AI Business Intelligence Pro",
      description: "Advanced AI-powered analytics platform with real-time dashboards, predictive modeling, and automated insights. Transform raw data into strategic business decisions.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-business-intelligence-pro",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $399/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"],
      benefits: ["Data-Driven Decisions", "Competitive Advantage", "Cost Reduction", "Growth Insights"],
      popular: true
    },
    {
      title: "AI Customer Support Suite",
      description: "Intelligent customer service automation with multi-language support, sentiment analysis, and seamless human handoff. 24/7 customer support excellence.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support-chatbot",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $299/month",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff"],
      benefits: ["24/7 Availability", "Improved Satisfaction", "Cost Efficiency", "Scalable Support"],
      popular: true
    },
    {
      title: "AI Content Generation Studio",
      description: "Create high-quality content at scale with our AI-powered writing tools. Blog posts, social media content, product descriptions, and marketing copy.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation-pro",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $199/month",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection"],
      benefits: ["Content at Scale", "Consistent Quality", "SEO Ready", "Time Savings"],
      popular: true
    },
    {
      title: "AI Cybersecurity Monitor Pro",
      description: "Advanced threat detection and response system with real-time monitoring, automated incident response, and compliance reporting. Protect your digital assets.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity-suite-pro",
      color: "from-red-500 to-orange-500",
      price: "Starting at $499/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring"],
      benefits: ["Enhanced Security", "Risk Mitigation", "Compliance Ready", "Peace of Mind"]
    },
    {
      title: "AI Marketing Automation",
      description: "End-to-end marketing automation with AI-driven personalization. Email campaigns, social media management, lead scoring, and conversion optimization.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing-automation",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $249/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing"],
      benefits: ["Higher Conversions", "Personalized Campaigns", "Automated Workflows", "ROI Optimization"]
    },
    {
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization. Support for multiple programming languages with automated testing and documentation.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant-pro",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $179/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation"],
      benefits: ["Faster Development", "Higher Quality", "Reduced Bugs", "Better Documentation"]
    },
    {
      title: "AI Data Analytics Dashboard",
      description: "Advanced data processing and visualization platform. Machine learning models, automated insights, and interactive dashboards for all your data needs.",
      icon: <Database className="w-8 h-8" />,
      path: "/ai-analytics-dashboard-pro",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $229/month",
      features: ["ML Models", "Interactive Dashboards", "Data Pipeline", "Real-time Processing"],
      benefits: ["Actionable Insights", "Real-time Data", "Predictive Analytics", "Easy Visualization"]
    },
    {
      title: "AI Document Intelligence",
      description: "Intelligent document analysis, extraction, and processing. OCR, form recognition, and automated data entry solutions for business efficiency.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-document-intelligence",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $159/month",
      features: ["OCR Technology", "Form Recognition", "Data Extraction", "Workflow Automation"],
      benefits: ["Automated Processing", "Error Reduction", "Time Savings", "Digital Transformation"]
    },
    {
      title: "AI Sales CRM Assistant",
      description: "Intelligent CRM with AI-powered lead qualification, sales forecasting, and automated follow-ups. Integration with major CRM platforms.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-crm-assistant",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $279/month",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "CRM Integration"],
      benefits: ["Higher Conversion", "Better Pipeline", "Automated Tasks", "Sales Insights"]
    },
    {
      title: "AI Financial Analytics",
      description: "Advanced financial modeling and risk assessment. Automated reporting, fraud detection, and investment analysis tools for financial institutions.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-financial-analytics",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $399/month",
      features: ["Risk Assessment", "Fraud Detection", "Investment Analysis", "Compliance Reporting"],
      benefits: ["Risk Management", "Fraud Prevention", "Better Investments", "Regulatory Compliance"]
    },
    {
      title: "AI Process Automation",
      description: "Streamline business processes with intelligent automation solutions. Workflow optimization, task automation, and intelligent decision making.",
      icon: <Zap className="w-8 h-8" />,
      path: "/ai-automation",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $199/month",
      features: ["Workflow Automation", "Task Optimization", "Decision Support", "Process Mining"],
      benefits: ["Efficiency Gains", "Cost Reduction", "Error Elimination", "Scalable Operations"]
    },
    {
      title: "AI Project Management",
      description: "Intelligent project planning and management with AI-powered resource allocation, timeline optimization, and risk assessment.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/ai-project-management",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $149/month",
      features: ["Resource Allocation", "Timeline Optimization", "Risk Assessment", "Progress Tracking"],
      benefits: ["Better Planning", "Resource Efficiency", "Risk Mitigation", "Project Success"]
    }
  ];

  const microSaasServices = [
    {
      title: "Zion Analytics Pro",
      description: "Advanced business intelligence with AI-powered insights and real-time dashboards.",
      price: "Starting at $99/month",
      features: ["Real-time Analytics", "Custom Dashboards", "Predictive Insights", "API Integration"]
    },
    {
      title: "Zion Security Shield",
      description: "AI-powered cybersecurity monitoring and threat detection for small to medium businesses.",
      price: "Starting at $149/month",
      features: ["Threat Detection", "Automated Response", "Compliance Monitoring", "24/7 Support"]
    },
    {
      title: "Zion Cloud Vault",
      description: "Intelligent cloud storage and backup solution with AI-powered organization and security.",
      price: "Starting at $79/month",
      features: ["Smart Organization", "Automated Backups", "Security Scanning", "Version Control"]
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation and management platform for marketing teams.",
      price: "Starting at $129/month",
      features: ["Content Generation", "SEO Optimization", "Brand Consistency", "Multi-platform Publishing"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services including business intelligence, customer support automation, content generation, cybersecurity, marketing automation, and data analytics. Transform your business with cutting-edge AI technology."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, automation, analytics, content generation, customer service, marketing AI, cybersecurity AI, business intelligence, data analytics"
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
                Advanced
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}AI Services
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From business intelligence to cybersecurity, we provide comprehensive AI services that drive growth and innovation.
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
                  AI Solutions & Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI services designed to transform your business operations and drive innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Popular</span>
                      </div>
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
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Price and Features */}
                    <div className="space-y-3">
                      <div className="text-center">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                          >
                            {feature}
                          </span>
                        ))}
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

        {/* Micro SAAS Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Affordable, specialized AI tools designed for small to medium businesses. Get enterprise-level AI capabilities at startup-friendly prices.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-3">{service.description}</p>
                  <div className="text-purple-400 font-bold mb-3">{service.price}</div>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30"
                      >
                        {feature}
                      </span>
                    ))}
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
                Contact us today for a personalized consultation and free AI readiness assessment.
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
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
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
                  Free AI Assessment
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
