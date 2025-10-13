import { ArrowRight, Zap, Shield, Globe, Database, Code, Smartphone, BarChart3, Bot, Cloud, Target, Users, TrendingUp, FileText, Mail, Star, CheckCircle, Clock, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      title: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/zion-analytics-pro",
      color: "from-blue-500 to-cyan-500",
      price: "From $29/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App"],
      benefits: ["40% faster decision making", "ROI tracking", "Automated reports", "Multi-source data"],
      category: "Analytics"
    },
    {
      title: "Zion Security Shield",
      description: "Advanced cybersecurity protection with threat detection, automated response, and compliance reporting. Enterprise-grade security for small businesses.",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-security-shield",
      color: "from-red-500 to-orange-500",
      price: "From $49/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Incident Response"],
      benefits: ["99.9% threat detection", "Zero false positives", "GDPR compliant", "SOC 2 ready"],
      category: "Security"
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption, file sharing, and collaboration tools. Your data, secured and accessible anywhere.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/zion-cloud-vault",
      color: "from-indigo-500 to-purple-500",
      price: "From $9/month",
      features: ["End-to-end Encryption", "File Sharing", "Version Control", "Team Collaboration", "Mobile Sync"],
      benefits: ["Unlimited storage", "Bank-level security", "Real-time sync", "Team management"],
      category: "Storage"
    },
    {
      title: "Zion AI Writer",
      description: "AI-powered content generation tool for blogs, social media, emails, and marketing copy. Create high-quality content at scale with brand voice consistency.",
      icon: <FileText className="w-8 h-8" />,
      path: "/zion-ai-writer",
      color: "from-green-500 to-emerald-500",
      price: "From $19/month",
      features: ["Content Generation", "SEO Optimization", "Brand Voice Training", "Multi-language", "Plagiarism Check"],
      benefits: ["10x content output", "SEO optimized", "Brand consistent", "Time saving"],
      category: "Content"
    },
    {
      title: "Zion CRM Assistant",
      description: "Intelligent CRM with AI-powered lead scoring, automated follow-ups, and sales forecasting. Streamline your sales process and boost conversions.",
      icon: <Users className="w-8 h-8" />,
      path: "/zion-crm-assistant",
      color: "from-purple-500 to-pink-500",
      price: "From $39/month",
      features: ["Lead Scoring", "Automated Follow-ups", "Sales Forecasting", "Pipeline Management", "Integration Hub"],
      benefits: ["30% more conversions", "Automated workflows", "Predictive insights", "Easy integration"],
      category: "CRM"
    },
    {
      title: "Zion Code Assistant",
      description: "AI-powered code generation, review, and optimization tool. Support for multiple programming languages with automated testing and documentation.",
      icon: <Code className="w-8 h-8" />,
      path: "/zion-code-assistant",
      color: "from-yellow-500 to-orange-500",
      price: "From $29/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation", "Multi-language"],
      benefits: ["50% faster coding", "Bug prevention", "Code quality", "Auto documentation"],
      category: "Development"
    },
    {
      title: "Zion Marketing Hub",
      description: "All-in-one marketing automation platform with email campaigns, social media management, and lead nurturing. Scale your marketing efforts efficiently.",
      icon: <Target className="w-8 h-8" />,
      path: "/zion-marketing-hub",
      color: "from-pink-500 to-rose-500",
      price: "From $39/month",
      features: ["Email Automation", "Social Media", "Lead Nurturing", "A/B Testing", "Analytics"],
      benefits: ["3x engagement", "Automated campaigns", "Lead scoring", "ROI tracking"],
      category: "Marketing"
    },
    {
      title: "Zion Project Manager",
      description: "AI-powered project management tool with smart scheduling, resource allocation, and progress tracking. Keep your projects on time and on budget.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/zion-project-manager",
      color: "from-teal-500 to-cyan-500",
      price: "From $24/month",
      features: ["Smart Scheduling", "Resource Allocation", "Progress Tracking", "Team Collaboration", "Risk Analysis"],
      benefits: ["25% faster delivery", "Better resource use", "Risk mitigation", "Team alignment"],
      category: "Project Management"
    },
    {
      title: "Zion Financial Tracker",
      description: "AI-powered financial management and accounting tool with expense tracking, invoicing, and financial forecasting. Take control of your business finances.",
      icon: <DollarSign className="w-8 h-8" />,
      path: "/zion-financial-tracker",
      color: "from-emerald-500 to-green-500",
      price: "From $34/month",
      features: ["Expense Tracking", "Automated Invoicing", "Financial Forecasting", "Tax Preparation", "Reporting"],
      benefits: ["Time saving", "Tax compliant", "Cash flow insights", "Automated invoicing"],
      category: "Finance"
    },
    {
      title: "Zion Customer Support Bot",
      description: "Intelligent chatbot for customer support with natural language processing, sentiment analysis, and seamless human handoff. 24/7 customer service.",
      icon: <Bot className="w-8 h-8" />,
      path: "/zion-customer-support-bot",
      color: "from-violet-500 to-purple-500",
      price: "From $19/month",
      features: ["Natural Language Processing", "Sentiment Analysis", "Human Handoff", "Multi-channel", "Analytics"],
      benefits: ["24/7 support", "Instant responses", "Customer satisfaction", "Cost reduction"],
      category: "Support"
    },
    {
      title: "Zion Data Insights",
      description: "Advanced data visualization and insights platform with machine learning models, automated reporting, and interactive dashboards.",
      icon: <Database className="w-8 h-8" />,
      path: "/zion-data-insights",
      color: "from-amber-500 to-yellow-500",
      price: "From $44/month",
      features: ["Data Visualization", "ML Models", "Automated Reports", "Interactive Dashboards", "Data Pipeline"],
      benefits: ["Data-driven decisions", "Automated insights", "Visual analytics", "Real-time data"],
      category: "Data"
    },
    {
      title: "Zion Mobile App Builder",
      description: "No-code mobile app development platform with drag-and-drop interface, real-time preview, and instant deployment. Build apps without coding.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/zion-mobile-app-builder",
      color: "from-cyan-500 to-blue-500",
      price: "From $59/month",
      features: ["Drag & Drop Builder", "Real-time Preview", "Instant Deployment", "App Store Ready", "Custom Templates"],
      benefits: ["No coding required", "Fast development", "Professional apps", "Easy maintenance"],
      category: "Development"
    }
  ];

  const categories = ["All", "Analytics", "Security", "Storage", "Content", "CRM", "Development", "Marketing", "Project Management", "Finance", "Support", "Data"];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: ["Up to 5 users", "Basic features", "Email support", "5GB storage"],
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "per month",
      description: "Ideal for growing businesses",
      features: ["Up to 25 users", "Advanced features", "Priority support", "50GB storage", "API access"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large organizations",
      features: ["Unlimited users", "All features", "24/7 support", "Unlimited storage", "Custom integrations", "Dedicated manager"],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including analytics, security, CRM, marketing automation, and more. Ready-to-use software for immediate business transformation."
        />
        <meta
          name="keywords"
          content="micro saas, software as a service, business software, analytics, CRM, marketing automation, project management, cloud storage, AI tools, business intelligence"
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
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ Micro SAAS Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              From analytics to security, we provide powerful micro SAAS tools designed for modern businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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
                  Our Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of micro SAAS solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
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
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include 14-day free trial and no setup fees.
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
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
