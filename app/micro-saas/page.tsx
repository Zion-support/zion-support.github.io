import { ArrowRight, Brain, Shield, Cloud, BarChart3, Bot, Zap, Target, Users, TrendingUp, FileText, Mail, Smartphone, Globe, CheckCircle, Star, Clock, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      title: "Zion Analytics Pro",
      description: "Advanced business intelligence platform with real-time analytics, custom dashboards, and AI-powered insights. Perfect for growing businesses that need data-driven decision making.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/zion-analytics-pro",
      color: "from-blue-500 to-cyan-500",
      price: "$99/month",
      features: ["Real-time Analytics", "Custom Dashboards", "AI Insights", "API Integration", "Team Collaboration"],
      popular: true,
      category: "Analytics"
    },
    {
      title: "Zion Security Shield",
      description: "Comprehensive cybersecurity monitoring and threat detection for small to medium businesses. Automated security scanning, vulnerability assessment, and incident response.",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-security-shield",
      color: "from-red-500 to-orange-500",
      price: "$149/month",
      features: ["Threat Detection", "Vulnerability Scanning", "Incident Response", "Compliance Reports", "24/7 Monitoring"],
      popular: false,
      category: "Security"
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage and file management solution with advanced encryption, automated backups, and team collaboration features. Enterprise-grade security for your files.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/zion-cloud-vault",
      color: "from-indigo-500 to-purple-500",
      price: "$79/month",
      features: ["End-to-End Encryption", "Automated Backups", "Team Collaboration", "Version Control", "Access Management"],
      popular: false,
      category: "Storage"
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation and management platform. Generate high-quality content, manage social media, and optimize for SEO with intelligent automation.",
      icon: <FileText className="w-8 h-8" />,
      path: "/zion-content-studio",
      color: "from-green-500 to-emerald-500",
      price: "$129/month",
      features: ["AI Content Generation", "SEO Optimization", "Social Media Management", "Content Calendar", "Brand Voice Training"],
      popular: true,
      category: "Content"
    },
    {
      title: "Zion AI Video Generator",
      description: "Create professional videos with AI-powered automation. Generate marketing videos, product demos, and social media content in minutes, not hours.",
      icon: <Brain className="w-8 h-8" />,
      path: "/zion-ai-video-generator",
      color: "from-purple-500 to-pink-500",
      price: "$199/month",
      features: ["AI Video Generation", "Multiple Templates", "Voice Synthesis", "Auto Captions", "Brand Customization"],
      popular: true,
      category: "Video"
    },
    {
      title: "Zion AI Customer Insights",
      description: "Advanced customer analytics and behavior prediction platform. Understand your customers better with AI-powered insights and personalized recommendations.",
      icon: <Users className="w-8 h-8" />,
      path: "/zion-ai-customer-insights",
      color: "from-teal-500 to-cyan-500",
      price: "$179/month",
      features: ["Customer Segmentation", "Behavior Prediction", "Churn Analysis", "Personalization", "ROI Tracking"],
      popular: false,
      category: "Customer Intelligence"
    },
    {
      title: "Zion Task Automation Pro",
      description: "Intelligent workflow automation platform that connects your favorite tools and automates repetitive tasks. Save hours every day with smart automation.",
      icon: <Zap className="w-8 h-8" />,
      path: "/zion-task-automation-pro",
      color: "from-yellow-500 to-orange-500",
      price: "$89/month",
      features: ["Workflow Automation", "Tool Integration", "Custom Triggers", "Error Handling", "Analytics Dashboard"],
      popular: false,
      category: "Automation"
    },
    {
      title: "Zion Marketing Optimizer",
      description: "AI-powered marketing campaign optimization and performance tracking. Maximize your ROI with intelligent ad optimization and audience targeting.",
      icon: <Target className="w-8 h-8" />,
      path: "/zion-marketing-optimizer",
      color: "from-pink-500 to-rose-500",
      price: "$159/month",
      features: ["Campaign Optimization", "Audience Targeting", "A/B Testing", "ROI Analysis", "Multi-Channel Management"],
      popular: true,
      category: "Marketing"
    },
    {
      title: "Zion Financial Tracker",
      description: "Comprehensive financial management and forecasting platform for small businesses. Track expenses, predict cash flow, and make informed financial decisions.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/zion-financial-tracker",
      color: "from-emerald-500 to-green-500",
      price: "$119/month",
      features: ["Expense Tracking", "Cash Flow Forecasting", "Invoice Management", "Tax Preparation", "Financial Reports"],
      popular: false,
      category: "Finance"
    },
    {
      title: "Zion HR Assistant",
      description: "AI-powered human resources management platform. Streamline recruitment, employee onboarding, performance tracking, and HR analytics.",
      icon: <Users className="w-8 h-8" />,
      path: "/zion-hr-assistant",
      color: "from-violet-500 to-purple-500",
      price: "$139/month",
      features: ["Recruitment Automation", "Employee Onboarding", "Performance Tracking", "HR Analytics", "Compliance Management"],
      popular: false,
      category: "Human Resources"
    },
    {
      title: "Zion Project Manager",
      description: "Intelligent project management platform with AI-powered scheduling, resource allocation, and risk assessment. Keep your projects on track and on budget.",
      icon: <Target className="w-8 h-8" />,
      path: "/zion-project-manager",
      color: "from-cyan-500 to-blue-500",
      price: "$109/month",
      features: ["AI Scheduling", "Resource Management", "Risk Assessment", "Progress Tracking", "Team Collaboration"],
      popular: false,
      category: "Project Management"
    },
    {
      title: "Zion Inventory Optimizer",
      description: "Smart inventory management with AI-powered demand forecasting, automated reordering, and waste reduction. Optimize your supply chain and reduce costs.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/zion-inventory-optimizer",
      color: "from-amber-500 to-yellow-500",
      price: "$169/month",
      features: ["Demand Forecasting", "Automated Reordering", "Waste Reduction", "Supplier Management", "Cost Optimization"],
      popular: false,
      category: "Inventory"
    }
  ];

  const categories = ["All", "Analytics", "Security", "Storage", "Content", "Video", "Customer Intelligence", "Automation", "Marketing", "Finance", "Human Resources", "Project Management", "Inventory"];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Innovative Business Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions designed for modern businesses. From analytics and security to content creation and automation - find the perfect tools to grow your business."
        />
        <meta
          name="keywords"
          content="micro saas, business software, analytics, security, cloud storage, content creation, video generation, customer insights, automation, marketing, finance, HR, project management, inventory"
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
                Micro
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}SAAS
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Powerful, affordable micro SAAS solutions designed for modern businesses. 
              From analytics and security to content creation and automation - find the perfect tools to accelerate your growth.
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

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  {category}
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
                  Our Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SAAS tools designed to solve specific business challenges and drive growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
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
                      <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Price and Features */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-bold text-xl">{service.price}</span>
                        <div className="flex items-center text-yellow-400 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>14-day free trial</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-cyan-400">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-6 flex gap-2">
                      <Link
                        to={service.path}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-medium text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-sm"
                      >
                        Start Trial
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Simple, Transparent Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include 14-day free trials and no setup fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 3 micro SAAS tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Standard features
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 block"
                >
                  Start Free Trial
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/50 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 8 micro SAAS tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    API access
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 block"
                >
                  Start Free Trial
                </Link>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    On-premise deployment
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 block"
                >
                  Contact Sales
                </Link>
              </div>
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
                Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
                Start your free trial today - no credit card required.
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
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
