import { ArrowRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail, Settings, Database } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    // AI Services
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform. Real-time dashboards, predictive analytics, and automated reporting that drives 40% faster decision making.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-business-intelligence",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $299/month",
      originalPrice: "$599/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Machine Learning", "Automated Alerts"],
      benefits: ["40% faster decisions", "60% cost reduction", "99.9% uptime", "Unlimited data sources"],
      category: "AI Services",
      popular: true
    },
    {
      title: "AI Customer Support Automation",
      description: "Deploy intelligent chatbots and automated customer service solutions. 24/7 support with natural language processing, sentiment analysis, and 80% reduction in support tickets.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff", "Voice Recognition", "Custom Workflows"],
      benefits: ["80% ticket reduction", "24/7 availability", "95% satisfaction", "Multi-platform support"],
      category: "AI Services",
      popular: true
    },
    {
      title: "AI Content Generation Suite",
      description: "Create high-quality content at scale with our AI-powered writing tools. Blog posts, social media content, product descriptions, and marketing materials with 10x faster production.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $149/month",
      originalPrice: "$299/month",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection", "Content Calendar", "Team Collaboration"],
      benefits: ["10x faster creation", "SEO-optimized output", "Consistent brand voice", "Unlimited generation"],
      category: "AI Services",
      popular: false
    },
    {
      title: "AI Cybersecurity Monitor",
      description: "Advanced threat detection and response system with AI-powered security. Real-time monitoring, automated incident response, and compliance reporting with 99.8% threat detection accuracy.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      originalPrice: "$799/month",
      features: ["AI Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Vulnerability Scanning", "Incident Management"],
      benefits: ["99.8% detection accuracy", "50% faster response", "SOC 2 compliant", "Zero false positives"],
      category: "AI Services",
      popular: true
    },
    {
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization with support for 50+ programming languages. Automated testing, documentation, and 40% faster development cycles.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $129/month",
      originalPrice: "$259/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation", "Security Analysis", "Team Collaboration"],
      benefits: ["40% faster development", "60% fewer bugs", "50+ languages", "Real-time analysis"],
      category: "AI Services",
      popular: false
    },
    {
      title: "AI Marketing Automation",
      description: "End-to-end marketing automation with AI-driven personalization. Email campaigns, social media management, and lead scoring with 300% increase in conversion rates.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing-automation",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing", "Customer Segmentation", "Campaign Analytics"],
      benefits: ["300% conversion increase", "50% time savings", "Advanced personalization", "Real-time tracking"],
      category: "AI Services",
      popular: true
    },
    {
      title: "AI Document Processing",
      description: "Intelligent document analysis, extraction, and processing with OCR technology. Form recognition, automated data entry, and workflow automation for 90% efficiency gains.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-document-processing",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $159/month",
      originalPrice: "$319/month",
      features: ["OCR Technology", "Form Recognition", "Data Extraction", "Workflow Automation", "Multi-format Support", "Quality Control"],
      benefits: ["90% efficiency gain", "99.9% accuracy", "Multi-format support", "Automated workflows"],
      category: "AI Services",
      popular: false
    },
    {
      title: "AI Sales CRM Assistant",
      description: "Intelligent CRM with AI-powered lead qualification, sales forecasting, and automated follow-ups. Integration with major CRM platforms and 25% increase in sales productivity.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-crm-assistant",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $229/month",
      originalPrice: "$459/month",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "CRM Integration", "Pipeline Management", "Performance Analytics"],
      benefits: ["25% productivity increase", "30% better forecasting", "Automated follow-ups", "CRM integration"],
      category: "AI Services",
      popular: true
    },
    {
      title: "AI Financial Analytics",
      description: "Advanced financial modeling and risk assessment with AI-powered insights. Automated reporting, fraud detection, and investment analysis with 99.9% accuracy.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-financial-analytics",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $349/month",
      originalPrice: "$699/month",
      features: ["Risk Assessment", "Fraud Detection", "Investment Analysis", "Compliance Reporting", "Real-time Monitoring", "Predictive Modeling"],
      benefits: ["99.9% accuracy", "Real-time monitoring", "Fraud prevention", "Compliance ready"],
      category: "AI Services",
      popular: false
    },
    // IT Services
    {
      title: "5G Network Infrastructure",
      description: "Complete 5G network deployment and management solutions. Ultra-low latency, massive IoT connectivity, and edge computing capabilities for next-generation applications.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/5g-solutions",
      color: "from-cyan-500 to-blue-500",
      price: "Custom Pricing",
      originalPrice: null,
      features: ["Network Planning", "Edge Computing", "IoT Integration", "Performance Monitoring", "Private Networks", "Smart City Solutions"],
      benefits: ["10x faster speeds", "Ultra-low latency", "Massive IoT support", "Edge computing"],
      category: "IT Services",
      popular: true
    },
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support with 99.9% uptime guarantee.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $249/month",
      originalPrice: "$499/month",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening", "Multi-cloud Support", "24/7 Monitoring"],
      benefits: ["99.9% uptime", "Cost optimization", "Auto-scaling", "Disaster recovery"],
      category: "IT Services",
      popular: true
    },
    {
      title: "AI-Powered Data Analytics",
      description: "Advanced data processing and visualization platform with machine learning models. Automated insights, interactive dashboards, and real-time processing capabilities.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-data-analytics",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $179/month",
      originalPrice: "$359/month",
      features: ["ML Models", "Interactive Dashboards", "Data Pipeline", "Real-time Processing", "Data Quality", "Custom Reports"],
      benefits: ["Real-time processing", "ML-powered insights", "Interactive dashboards", "Data quality"],
      category: "IT Services",
      popular: false
    },
    {
      title: "Enterprise Security Suite",
      description: "Comprehensive enterprise security solution with advanced threat protection, compliance management, and security awareness training. Protect your organization 24/7.",
      icon: <Shield className="w-8 h-8" />,
      path: "/enterprise-security",
      color: "from-red-600 to-orange-600",
      price: "Starting at $499/month",
      originalPrice: "$999/month",
      features: ["Advanced Threat Protection", "Compliance Management", "Security Training", "Incident Response", "Vulnerability Management", "Security Analytics"],
      benefits: ["Enterprise-grade security", "Compliance ready", "24/7 protection", "Advanced analytics"],
      category: "IT Services",
      popular: true
    },
    {
      title: "DevOps Automation Platform",
      description: "Complete DevOps automation with CI/CD pipelines, infrastructure as code, and automated testing. Accelerate development cycles and improve deployment reliability.",
      icon: <Settings className="w-8 h-8" />,
      path: "/devops-automation",
      color: "from-purple-600 to-indigo-600",
      price: "Starting at $299/month",
      originalPrice: "$599/month",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Container Orchestration", "Monitoring", "Security Scanning"],
      benefits: ["50% faster deployments", "99.9% reliability", "Automated testing", "Container support"],
      category: "IT Services",
      popular: false
    },
    {
      title: "Database Management & Optimization",
      description: "Advanced database management with performance optimization, automated backups, and scaling solutions. Support for SQL, NoSQL, and cloud databases.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-green-600 to-teal-600",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Performance Optimization", "Automated Backups", "Scaling Solutions", "Query Optimization", "Security Hardening", "Monitoring"],
      benefits: ["50% performance boost", "Automated backups", "Easy scaling", "Query optimization"],
      category: "IT Services",
      popular: false
    },
    {
      title: "Network Infrastructure & Monitoring",
      description: "Complete network infrastructure solutions with real-time monitoring, performance optimization, and security management. Ensure optimal network performance.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/network-infrastructure",
      color: "from-blue-600 to-cyan-600",
      price: "Starting at $179/month",
      originalPrice: "$359/month",
      features: ["Network Design", "Performance Monitoring", "Security Management", "Troubleshooting", "Capacity Planning", "24/7 Support"],
      benefits: ["Optimal performance", "Real-time monitoring", "Security management", "24/7 support"],
      category: "IT Services",
      popular: false
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic IT consulting services to help you plan, implement, and optimize your technology infrastructure. Digital transformation and technology roadmap development.",
      icon: <Users className="w-8 h-8" />,
      path: "/it-consulting",
      color: "from-gray-600 to-slate-600",
      price: "Starting at $150/hour",
      originalPrice: "$300/hour",
      features: ["Technology Strategy", "Digital Transformation", "Infrastructure Planning", "Security Assessment", "Cost Optimization", "Vendor Management"],
      benefits: ["Strategic guidance", "Cost optimization", "Technology roadmap", "Expert consultation"],
      category: "IT Services",
      popular: true
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
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {service.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                          {service.originalPrice && (
                            <span className="text-gray-400 line-through text-sm">{service.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Category */}
                    <div className="mb-4">
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-white font-semibold text-sm">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                          >
                            {benefit}
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
