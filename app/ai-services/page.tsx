import { ArrowRight, Zap, Shield, Globe, Database, Code, Smartphone, BarChart3, Bot, Cloud, Target, Users, TrendingUp, FileText, Mail, Star, CheckCircle, Brain, Cpu, Eye, MessageSquare, Search, Settings, Sparkles } from "lucide-react";
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
      price: "From $299/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"],
      benefits: ["40% faster decision making", "ROI tracking", "Automated reports", "Multi-source data"]
    },
    {
      title: "AI Customer Support Automation",
      description: "Deploy intelligent chatbots and automated customer service solutions. 24/7 support with natural language processing and sentiment analysis.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support",
      color: "from-green-500 to-emerald-500",
      price: "From $199/month",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff"],
      benefits: ["24/7 support", "Instant responses", "Customer satisfaction", "Cost reduction"]
    },
    {
      title: "AI Content Generation Suite",
      description: "Create high-quality content at scale with our AI-powered writing tools. Blog posts, social media content, product descriptions, and more.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation",
      color: "from-purple-500 to-pink-500",
      price: "From $149/month",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection"],
      benefits: ["10x content output", "SEO optimized", "Brand consistent", "Time saving"]
    },
    {
      title: "AI Cybersecurity Monitor",
      description: "Advanced threat detection and response system. Real-time monitoring, automated incident response, and compliance reporting.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity",
      color: "from-red-500 to-orange-500",
      price: "From $399/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring"],
      benefits: ["99.9% threat detection", "Zero false positives", "GDPR compliant", "SOC 2 ready"]
    },
    {
      title: "AI Marketing Automation",
      description: "End-to-end marketing automation with AI-driven personalization. Email campaigns, social media management, and lead scoring.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing-automation",
      color: "from-pink-500 to-rose-500",
      price: "From $199/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing"],
      benefits: ["3x engagement", "Automated campaigns", "Lead scoring", "ROI tracking"]
    },
    {
      title: "AI Data Analytics",
      description: "Advanced data processing and visualization platform. Machine learning models, automated insights, and interactive dashboards.",
      icon: <Database className="w-8 h-8" />,
      path: "/ai-data-analytics",
      color: "from-teal-500 to-cyan-500",
      price: "From $179/month",
      features: ["ML Models", "Interactive Dashboards", "Data Pipeline", "Real-time Processing"],
      benefits: ["Data-driven decisions", "Automated insights", "Visual analytics", "Real-time data"]
    },
    {
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization. Support for multiple programming languages with automated testing and documentation.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant",
      color: "from-yellow-500 to-orange-500",
      price: "From $129/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation"],
      benefits: ["50% faster coding", "Bug prevention", "Code quality", "Auto documentation"]
    },
    {
      title: "AI Document Processing",
      description: "Intelligent document analysis, extraction, and processing. OCR, form recognition, and automated data entry solutions.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-document-processing",
      color: "from-emerald-500 to-green-500",
      price: "From $159/month",
      features: ["OCR Technology", "Form Recognition", "Data Extraction", "Workflow Automation"],
      benefits: ["Time saving", "Accuracy improvement", "Automated workflows", "Cost reduction"]
    },
    {
      title: "AI Sales CRM Assistant",
      description: "Intelligent CRM with AI-powered lead qualification, sales forecasting, and automated follow-ups. Integration with major CRM platforms.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-crm-assistant",
      color: "from-violet-500 to-purple-500",
      price: "From $229/month",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "CRM Integration"],
      benefits: ["30% more conversions", "Automated workflows", "Predictive insights", "Easy integration"]
    },
    {
      title: "AI Financial Analytics",
      description: "Advanced financial modeling and risk assessment. Automated reporting, fraud detection, and investment analysis tools.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-financial-analytics",
      color: "from-amber-500 to-yellow-500",
      price: "From $349/month",
      features: ["Risk Assessment", "Fraud Detection", "Investment Analysis", "Compliance Reporting"],
      benefits: ["Risk mitigation", "Fraud prevention", "Investment insights", "Compliance ready"]
    },
    {
      title: "AI Computer Vision",
      description: "Advanced image and video analysis solutions. Object detection, facial recognition, and automated visual inspection systems.",
      icon: <Eye className="w-8 h-8" />,
      path: "/ai-computer-vision",
      color: "from-indigo-500 to-purple-500",
      price: "From $249/month",
      features: ["Object Detection", "Facial Recognition", "Visual Inspection", "Real-time Processing"],
      benefits: ["Automated inspection", "Quality control", "Security enhancement", "Process optimization"]
    },
    {
      title: "AI Natural Language Processing",
      description: "Advanced text analysis and language understanding. Sentiment analysis, language translation, and automated text processing.",
      icon: <MessageSquare className="w-8 h-8" />,
      path: "/ai-natural-language-processing",
      color: "from-cyan-500 to-blue-500",
      price: "From $189/month",
      features: ["Sentiment Analysis", "Language Translation", "Text Summarization", "Entity Recognition"],
      benefits: ["Better understanding", "Multilingual support", "Content insights", "Automated processing"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter AI",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses getting started with AI",
      features: ["Basic AI Analytics", "Simple Automation", "Email Support", "5 AI Models"],
      popular: false
    },
    {
      name: "Professional AI",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses with advanced AI needs",
      features: ["Advanced AI Analytics", "Complex Automation", "Priority Support", "20 AI Models", "Custom Training"],
      popular: true
    },
    {
      name: "Enterprise AI",
      price: "$999",
      period: "per month",
      description: "For large organizations with extensive AI requirements",
      features: ["Full AI Suite", "Custom AI Development", "24/7 Support", "Unlimited Models", "Dedicated AI Team", "White-label Solutions"],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services including business intelligence, customer support automation, content generation, cybersecurity, marketing automation, and more. Transform your business with cutting-edge AI technology."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, automation, analytics, content generation, customer service, marketing AI, cybersecurity AI, business intelligence, natural language processing, computer vision"
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
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Advanced AI Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}& Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From analytics to automation, we provide comprehensive AI services that drive growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start AI Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free AI Consultation
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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
                        {service.features.slice(0, 3).map((feature, idx) => (
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

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Service Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect AI solution for your business. All plans include 14-day free trial and no setup fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                      : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
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
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/case-studies"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
