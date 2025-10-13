import { ArrowRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail } from "lucide-react";
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
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"]
    },
    {
      title: "AI Customer Support Automation",
      description: "Deploy intelligent chatbots and automated customer service solutions. 24/7 support with natural language processing and sentiment analysis.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $199/month",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff"]
    },
    {
      title: "AI Sentiment Analyzer Pro",
      description: "Advanced AI-powered sentiment analysis with real-time monitoring, trend detection, and multi-language support. Boost customer satisfaction with 95% accuracy.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-sentiment-analyzer-pro",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $49/month",
      features: ["Real-time Analysis", "Trend Detection", "Multi-language", "API Integration"]
    },
    {
      title: "AI Project Manager Pro",
      description: "Revolutionary AI-powered project management with predictive analytics, automated workflows, and intelligent resource allocation. Deliver projects 40% faster.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-project-manager-pro",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $29/month",
      features: ["AI Planning", "Predictive Analytics", "Team Collaboration", "Automated Workflows"]
    },
    {
      title: "AI Cyber Shield Enterprise",
      description: "Enterprise-grade AI-powered cybersecurity with 99.9% threat detection accuracy, 24/7 monitoring, and automated incident response.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cyber-shield-enterprise",
      color: "from-red-500 to-orange-500",
      price: "Starting at $199/month",
      features: ["AI Threat Detection", "24/7 Monitoring", "Zero-Trust Security", "Compliance"]
    },
    {
      title: "AI Marketing Automation Pro",
      description: "Intelligent marketing automation with AI-powered personalization, predictive analytics, and cross-channel campaigns. Boost ROI by 300%.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing-automation-pro",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $99/month",
      features: ["AI Personalization", "Predictive Analytics", "Multi-channel", "Lead Scoring"]
    },
    {
      title: "AI Content Generation Suite",
      description: "Create high-quality content at scale with our AI-powered writing tools. Blog posts, social media content, product descriptions, and more.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $149/month",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection"]
    },
    {
      title: "5G Network Infrastructure",
      description: "Complete 5G network deployment and management solutions. Ultra-low latency, massive IoT connectivity, and edge computing capabilities.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/5g-solutions",
      color: "from-cyan-500 to-blue-500",
      price: "Custom Pricing",
      features: ["Network Planning", "Edge Computing", "IoT Integration", "Performance Monitoring"]
    },
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $249/month",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening"]
    },
    {
      title: "AI-Powered Data Analytics",
      description: "Advanced data processing and visualization platform. Machine learning models, automated insights, and interactive dashboards.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-data-analytics",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $179/month",
      features: ["ML Models", "Interactive Dashboards", "Data Pipeline", "Real-time Processing"]
    },
    {
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization. Support for multiple programming languages with automated testing and documentation.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $129/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation"]
    },
    {
      title: "AI Document Processing",
      description: "Intelligent document analysis, extraction, and processing. OCR, form recognition, and automated data entry solutions.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-document-processing",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $159/month",
      features: ["OCR Technology", "Form Recognition", "Data Extraction", "Workflow Automation"]
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
