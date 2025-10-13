import { ArrowRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail, Settings, Zap, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform. Real-time dashboards, predictive analytics, and automated reporting.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-business-intelligence",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $299/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"],
      category: "AI Analytics",
      popular: true
    },
    {
      title: "AI Customer Support Automation",
      description: "Deploy intelligent chatbots and automated customer service solutions. 24/7 support with natural language processing and sentiment analysis.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $199/month",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff"],
      category: "AI Automation",
      popular: true
    },
    {
      title: "AI Content Generation Suite",
      description: "Create high-quality content at scale with our AI-powered writing tools. Blog posts, social media content, product descriptions, and more.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $149/month",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection"],
      category: "AI Content",
      popular: false
    },
    {
      title: "AI Cybersecurity Monitor",
      description: "Advanced threat detection and response system. Real-time monitoring, automated incident response, and compliance reporting.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring"],
      category: "Cybersecurity",
      popular: true
    },
    {
      title: "5G Network Infrastructure",
      description: "Complete 5G network deployment and management solutions. Ultra-low latency, massive IoT connectivity, and edge computing capabilities.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/5g-solutions",
      color: "from-cyan-500 to-blue-500",
      price: "Custom Pricing",
      features: ["Network Planning", "Edge Computing", "IoT Integration", "Performance Monitoring"],
      category: "5G Solutions",
      popular: false
    },
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $249/month",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening"],
      category: "Cloud Services",
      popular: true
    },
    {
      title: "AI-Powered Data Analytics",
      description: "Advanced data processing and visualization platform. Machine learning models, automated insights, and interactive dashboards.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-data-analytics",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $179/month",
      features: ["ML Models", "Interactive Dashboards", "Data Pipeline", "Real-time Processing"],
      category: "AI Analytics",
      popular: false
    },
    {
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization. Support for multiple programming languages with automated testing and documentation.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $129/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation"],
      category: "AI Development",
      popular: true
    },
    {
      title: "AI Marketing Automation",
      description: "End-to-end marketing automation with AI-driven personalization. Email campaigns, social media management, and lead scoring.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing-automation",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $199/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing"],
      category: "AI Marketing",
      popular: false
    },
    {
      title: "AI Document Processing",
      description: "Intelligent document analysis, extraction, and processing. OCR, form recognition, and automated data entry solutions.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-document-processing",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $159/month",
      features: ["OCR Technology", "Form Recognition", "Data Extraction", "Workflow Automation"],
      category: "AI Automation",
      popular: false
    },
    {
      title: "AI Sales CRM Assistant",
      description: "Intelligent CRM with AI-powered lead qualification, sales forecasting, and automated follow-ups. Integration with major CRM platforms.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-crm-assistant",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $229/month",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "CRM Integration"],
      category: "AI Sales",
      popular: true
    },
    {
      title: "AI Financial Analytics",
      description: "Advanced financial modeling and risk assessment. Automated reporting, fraud detection, and investment analysis tools.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-financial-analytics",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $349/month",
      features: ["Risk Assessment", "Fraud Detection", "Investment Analysis", "Compliance Reporting"],
      category: "AI Finance",
      popular: false
    },
    {
      title: "AI Healthcare Solutions",
      description: "Revolutionary healthcare AI platform with medical image analysis, patient monitoring, and diagnostic assistance. Improve patient outcomes with cutting-edge technology.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-healthcare-solutions",
      color: "from-green-500 to-teal-500",
      price: "Starting at $499/month",
      features: ["Medical Image Analysis", "Patient Monitoring", "Diagnostic Assistance", "HIPAA Compliance"],
      category: "AI Healthcare",
      popular: true
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation. Reduce costs and improve efficiency.",
      icon: <Globe className="w-8 h-8" />,
      path: "/ai-supply-chain-optimization",
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $379/month",
      features: ["Demand Forecasting", "Inventory Optimization", "Logistics Automation", "Risk Management"],
      category: "AI Logistics",
      popular: false
    },
    {
      title: "AI Legal Document Analysis",
      description: "Advanced legal AI platform for contract analysis, document review, and compliance monitoring. Accelerate legal processes with intelligent automation.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-legal-document-analysis",
      color: "from-slate-500 to-gray-500",
      price: "Starting at $429/month",
      features: ["Contract Analysis", "Document Review", "Compliance Monitoring", "Legal Research"],
      category: "AI Legal",
      popular: false
    },
    {
      title: "AI Real Estate Intelligence",
      description: "Comprehensive real estate AI platform with property valuation, market analysis, and investment recommendations. Make informed real estate decisions.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-real-estate-intelligence",
      color: "from-orange-500 to-red-500",
      price: "Starting at $299/month",
      features: ["Property Valuation", "Market Analysis", "Investment Recommendations", "Risk Assessment"],
      category: "AI Real Estate",
      popular: true
    },
    {
      title: "AI Manufacturing Optimization",
      description: "Smart manufacturing solutions with predictive maintenance, quality control, and production optimization. Maximize efficiency and minimize downtime.",
      icon: <Settings className="w-8 h-8" />,
      path: "/ai-manufacturing-optimization",
      color: "from-gray-500 to-slate-500",
      price: "Starting at $549/month",
      features: ["Predictive Maintenance", "Quality Control", "Production Optimization", "IoT Integration"],
      category: "AI Manufacturing",
      popular: false
    },
    {
      title: "AI Energy Management",
      description: "Intelligent energy management system with consumption optimization, renewable energy integration, and cost reduction strategies.",
      icon: <Zap className="w-8 h-8" />,
      path: "/ai-energy-management",
      color: "from-yellow-500 to-amber-500",
      price: "Starting at $279/month",
      features: ["Consumption Optimization", "Renewable Integration", "Cost Reduction", "Sustainability Tracking"],
      category: "AI Energy",
      popular: false
    },
    {
      title: "AI Education Platform",
      description: "Personalized learning platform with adaptive content, progress tracking, and intelligent tutoring. Transform education with AI-powered learning.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-education-platform",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $199/month",
      features: ["Adaptive Learning", "Progress Tracking", "Intelligent Tutoring", "Assessment Tools"],
      category: "AI Education",
      popular: true
    },
    {
      title: "AI Agriculture Intelligence",
      description: "Smart agriculture solutions with crop monitoring, yield prediction, and resource optimization. Revolutionize farming with AI technology.",
      icon: <Globe className="w-8 h-8" />,
      path: "/ai-agriculture-intelligence",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $349/month",
      features: ["Crop Monitoring", "Yield Prediction", "Resource Optimization", "Weather Analysis"],
      category: "AI Agriculture",
      popular: false
    },
    {
      title: "AI Transportation Optimization",
      description: "Intelligent transportation management with route optimization, fleet management, and predictive maintenance. Streamline logistics operations.",
      icon: <Globe className="w-8 h-8" />,
      path: "/ai-transportation-optimization",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $399/month",
      features: ["Route Optimization", "Fleet Management", "Predictive Maintenance", "Fuel Efficiency"],
      category: "AI Transportation",
      popular: false
    },
    {
      title: "AI Retail Analytics",
      description: "Advanced retail intelligence with customer behavior analysis, inventory optimization, and sales forecasting. Boost retail performance with AI insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-retail-analytics",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $249/month",
      features: ["Customer Behavior Analysis", "Inventory Optimization", "Sales Forecasting", "Price Optimization"],
      category: "AI Retail",
      popular: true
    },
    {
      title: "AI Insurance Risk Assessment",
      description: "Intelligent insurance platform with risk assessment, fraud detection, and claims processing automation. Modernize insurance operations.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-insurance-risk-assessment",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $379/month",
      features: ["Risk Assessment", "Fraud Detection", "Claims Processing", "Policy Optimization"],
      category: "AI Insurance",
      popular: false
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
            
            {/* Categories Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Array.from(new Set(services.map(s => s.category))).map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      POPULAR
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                        <div className="text-xs text-gray-400">{service.category}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      <div className="flex flex-wrap gap-1">
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
                    
                    <div className="flex items-center justify-between mt-6">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <span className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
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
