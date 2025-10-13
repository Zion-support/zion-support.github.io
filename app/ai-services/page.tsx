import { ArrowRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail, Database, Zap, CheckCircle, Star, Clock, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  const aiServices = [
    {
      title: "AI Business Intelligence",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform. Real-time dashboards, predictive analytics, and automated reporting.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-business-intelligence",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $299/month",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Modeling",
        "Custom Report Builder",
        "API Integration",
        "Data Visualization",
        "Mobile App Access",
        "Email Reports",
        "24/7 Support"
      ],
      popular: true,
      category: "Analytics"
    },
    {
      title: "AI Customer Support Automation",
      description: "Deploy intelligent chatbots and automated customer service solutions. 24/7 support with natural language processing and sentiment analysis.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $199/month",
      features: [
        "Multi-language Support",
        "Sentiment Analysis",
        "CRM Integration",
        "Live Chat Handoff",
        "Knowledge Base",
        "Automated Responses",
        "Performance Analytics",
        "Custom Training"
      ],
      popular: false,
      category: "Customer Service"
    },
    {
      title: "AI Content Generation Suite",
      description: "Create high-quality content at scale with our AI-powered writing tools. Blog posts, social media content, product descriptions, and more.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $149/month",
      features: [
        "SEO Optimization",
        "Brand Voice Training",
        "Multi-format Output",
        "Plagiarism Detection",
        "Content Calendar",
        "Social Media Integration",
        "Performance Analytics",
        "Team Collaboration"
      ],
      popular: false,
      category: "Content"
    },
    {
      title: "AI Cybersecurity Monitor",
      description: "Advanced threat detection and response system. Real-time monitoring, automated incident response, and compliance reporting.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      features: [
        "Threat Detection & Response",
        "Automated Security Scanning",
        "Compliance Reports",
        "24/7 Monitoring",
        "Firewall Management",
        "Vulnerability Assessment",
        "Incident Response",
        "Security Training"
      ],
      popular: false,
      category: "Security"
    },
    {
      title: "AI Marketing Automation",
      description: "End-to-end marketing automation with AI-driven personalization. Email campaigns, social media management, and lead scoring.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing-automation",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $199/month",
      features: [
        "Email Automation",
        "Social Media Management",
        "Lead Scoring",
        "A/B Testing",
        "Personalization Engine",
        "Campaign Analytics",
        "Customer Segmentation",
        "ROI Tracking"
      ],
      popular: false,
      category: "Marketing"
    },
    {
      title: "AI Project Management",
      description: "AI-powered project management tool with intelligent planning, resource optimization, and automated task management.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-project-management",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $179/month",
      features: [
        "AI Project Planning",
        "Resource Management",
        "Task Automation",
        "Team Collaboration",
        "Progress Tracking",
        "Risk Assessment",
        "Time Tracking",
        "Reporting Dashboard"
      ],
      popular: false,
      category: "Productivity"
    },
    {
      title: "AI Document Processing",
      description: "Intelligent document analysis, extraction, and processing. OCR, form recognition, and automated data entry solutions.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-document-processing",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $159/month",
      features: [
        "OCR Technology",
        "Form Recognition",
        "Data Extraction",
        "Workflow Automation",
        "Template Recognition",
        "Batch Processing",
        "API Integration",
        "Compliance Checks"
      ],
      popular: false,
      category: "Productivity"
    },
    {
      title: "AI Sales CRM Assistant",
      description: "Intelligent CRM with AI-powered lead qualification, sales forecasting, and automated follow-ups. Integration with major CRM platforms.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-crm-assistant",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $229/month",
      features: [
        "Lead Scoring",
        "Sales Forecasting",
        "Automated Follow-ups",
        "CRM Integration",
        "Pipeline Management",
        "Performance Analytics",
        "Customer Insights",
        "Deal Optimization"
      ],
      popular: false,
      category: "Sales"
    },
    {
      title: "AI Financial Analytics",
      description: "Advanced financial modeling and risk assessment. Automated reporting, fraud detection, and investment analysis tools.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-financial-analytics",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $349/month",
      features: [
        "Risk Assessment",
        "Fraud Detection",
        "Investment Analysis",
        "Compliance Reporting",
        "Financial Modeling",
        "Market Analysis",
        "Portfolio Optimization",
        "Regulatory Compliance"
      ],
      popular: false,
      category: "Finance"
    },
    {
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization. Support for multiple programming languages with automated testing and documentation.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $129/month",
      features: [
        "Code Generation",
        "Bug Detection",
        "Performance Optimization",
        "Documentation",
        "Code Review",
        "Testing Automation",
        "Multi-language Support",
        "Version Control"
      ],
      popular: false,
      category: "Development"
    },
    {
      title: "AI Data Analytics",
      description: "Advanced data processing and visualization platform. Machine learning models, automated insights, and interactive dashboards.",
      icon: <Database className="w-8 h-8" />,
      path: "/ai-data-analytics",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $179/month",
      features: [
        "ML Models",
        "Interactive Dashboards",
        "Data Pipeline",
        "Real-time Processing",
        "Predictive Analytics",
        "Data Visualization",
        "API Integration",
        "Custom Reports"
      ],
      popular: false,
      category: "Analytics"
    },
    {
      title: "AI Automation Platform",
      description: "Comprehensive automation platform for business processes. Workflow automation, RPA, and intelligent task management.",
      icon: <Zap className="w-8 h-8" />,
      path: "/ai-automation",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $249/month",
      features: [
        "Workflow Automation",
        "RPA Integration",
        "Task Management",
        "Process Optimization",
        "Error Handling",
        "Monitoring Dashboard",
        "Custom Workflows",
        "API Integration"
      ],
      popular: false,
      category: "Automation"
    }
  ];

  const categories = [
    { name: "All", count: aiServices.length },
    { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
    { name: "Customer Service", count: aiServices.filter(s => s.category === "Customer Service").length },
    { name: "Content", count: aiServices.filter(s => s.category === "Content").length },
    { name: "Security", count: aiServices.filter(s => s.category === "Security").length },
    { name: "Marketing", count: aiServices.filter(s => s.category === "Marketing").length },
    { name: "Productivity", count: aiServices.filter(s => s.category === "Productivity").length },
    { name: "Sales", count: aiServices.filter(s => s.category === "Sales").length },
    { name: "Finance", count: aiServices.filter(s => s.category === "Finance").length },
    { name: "Development", count: aiServices.filter(s => s.category === "Development").length },
    { name: "Automation", count: aiServices.filter(s => s.category === "Automation").length }
  ];

  const benefits = [
    {
      title: "Cutting-Edge AI",
      description: "Latest artificial intelligence technologies and machine learning algorithms",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance from our AI experts and technical team",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Scalable Solutions",
      description: "Flexible AI services that grow with your business needs and requirements",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security and compliance standards for all AI implementations",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services including business intelligence, customer support automation, content generation, cybersecurity, marketing automation, and more. Advanced artificial intelligence solutions for modern businesses."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, business intelligence, customer support automation, content generation, cybersecurity, marketing automation, project management, document processing, sales CRM, financial analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Star className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">12+ AI Services Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}& Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From analytics to automation, we provide comprehensive AI services that drive growth and innovation.
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
                <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for modern businesses that need powerful AI solutions without the complexity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered services and solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                    service.popular ? 'ring-2 ring-cyan-400' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
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
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="text-cyan-400 font-bold text-lg mb-2">
                        {service.price}
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-gray-400 text-center">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center">
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our AI solutions to drive growth and innovation. 
              Start your artificial intelligence journey today.
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
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Case Studies
                <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}