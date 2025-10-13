import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Brain, BarChart3, Zap, TrendingUp, Target, CheckCircle, Star, Users, Clock, Shield, Smartphone, Globe, Award, Sparkles, Mail, Heart, Receipt, Bot, Code } from "lucide-react";

export default function MicroSaaSServices() {
  const microSaasServices = [
    {
      title: "AI-Powered Email Analyzer",
      description: "Transform your email management with intelligent AI analysis, sentiment detection, priority classification, and automated response suggestions.",
      icon: <Mail className="w-8 h-8" />,
      path: "/ai-powered-email-analyzer",
      color: "from-blue-500 to-cyan-500",
      price: "From $29/month",
      features: ["99.7% accuracy", "Real-time analysis", "Multi-language support", "Response suggestions"],
      category: "AI Communication",
      popular: true
    },
    {
      title: "Smart Inventory Optimizer",
      description: "Optimize your inventory with AI-powered demand forecasting, automated reorder points, and multi-channel synchronization.",
      icon: <Package className="w-8 h-8" />,
      path: "/smart-inventory-optimizer",
      color: "from-green-500 to-emerald-500",
      price: "From $49/month",
      features: ["95% forecast accuracy", "30% cost reduction", "Multi-channel sync", "Supplier analytics"],
      category: "AI Operations",
      popular: true
    },
    {
      title: "AI Customer Sentiment Tracker",
      description: "Monitor customer sentiment in real-time across all channels with AI-powered analysis and predictive analytics.",
      icon: <Heart className="w-8 h-8" />,
      path: "/ai-customer-sentiment-tracker",
      color: "from-purple-500 to-pink-500",
      price: "From $39/month",
      features: ["98% accuracy", "25% retention increase", "Real-time monitoring", "Predictive analytics"],
      category: "AI Analytics",
      popular: true
    },
    {
      title: "Smart Expense Categorizer",
      description: "Automate expense categorization with AI-powered analysis and receipt scanning. Save 90% time on expense management.",
      icon: <Receipt className="w-8 h-8" />,
      path: "/smart-expense-categorizer",
      color: "from-orange-500 to-red-500",
      price: "From $19/month",
      features: ["99% accuracy", "90% time saved", "OCR scanning", "Multi-currency support"],
      category: "AI Finance",
      popular: false
    },
    {
      title: "AI Chatbot Builder",
      description: "Build intelligent chatbots without coding using our no-code AI chatbot builder. Deploy across multiple channels.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-chatbot-builder",
      color: "from-cyan-500 to-blue-500",
      price: "From $29/month",
      features: ["No-code builder", "80% cost reduction", "Multi-channel deployment", "Live agent handoff"],
      category: "AI Communication",
      popular: true
    },
    {
      title: "AI Code Assistant",
      description: "Boost developer productivity with AI-powered code generation, review, and documentation. Write code 3x faster.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant",
      color: "from-indigo-500 to-purple-500",
      price: "From $39/month",
      features: ["3x faster coding", "70% fewer bugs", "Code review", "Test generation"],
      category: "AI Development",
      popular: true
    },
    {
      title: "Project Management Tool",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and automated reporting.",
      icon: <Target className="w-8 h-8" />,
      path: "/project-management-tool",
      color: "from-teal-500 to-cyan-500",
      price: "From $99/month",
      features: ["AI task prioritization", "Resource optimization", "Automated reporting", "Team collaboration"],
      category: "Business Tools",
      popular: false
    },
    {
      title: "Customer Relationship Manager",
      description: "AI-powered CRM with intelligent lead scoring, sales forecasting, and automated follow-ups for better customer relationships.",
      icon: <Users className="w-8 h-8" />,
      path: "/customer-relationship-manager",
      color: "from-pink-500 to-rose-500",
      price: "From $79/month",
      features: ["Lead scoring", "Sales forecasting", "Automated follow-ups", "Pipeline management"],
      category: "Business Tools",
      popular: false
    },
    {
      title: "Inventory Management System",
      description: "Comprehensive inventory management with real-time tracking, automated reordering, and advanced analytics.",
      icon: <Package className="w-8 h-8" />,
      path: "/inventory-management-system",
      color: "from-amber-500 to-yellow-500",
      price: "From $59/month",
      features: ["Real-time tracking", "Automated reordering", "Advanced analytics", "Multi-location support"],
      category: "Business Tools",
      popular: false
    },
    {
      title: "Financial Reporting Tool",
      description: "Automated financial reporting with AI-powered insights, customizable dashboards, and compliance tracking.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/financial-reporting-tool",
      color: "from-emerald-500 to-green-500",
      price: "From $89/month",
      features: ["Automated reporting", "AI insights", "Custom dashboards", "Compliance tracking"],
      category: "Business Tools",
      popular: false
    },
    {
      title: "Employee Time Tracker",
      description: "AI-powered time tracking with automatic categorization, productivity insights, and project time allocation.",
      icon: <Clock className="w-8 h-8" />,
      path: "/employee-time-tracker",
      color: "from-violet-500 to-purple-500",
      price: "From $29/month",
      features: ["Automatic categorization", "Productivity insights", "Project allocation", "Mobile app"],
      category: "Business Tools",
      popular: false
    },
    {
      title: "Social Media Scheduler",
      description: "AI-powered social media management with optimal posting times, content suggestions, and performance analytics.",
      icon: <Globe className="w-8 h-8" />,
      path: "/social-media-scheduler",
      color: "from-rose-500 to-pink-500",
      price: "From $39/month",
      features: ["Optimal timing", "Content suggestions", "Performance analytics", "Multi-platform support"],
      category: "Marketing Tools",
      popular: false
    }
  ];

  const categories = [
    { name: "AI-Powered Tools", count: 6, icon: <Brain className="w-5 h-5" /> },
    { name: "Business Tools", count: 4, icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Marketing Tools", count: 1, icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Development Tools", count: 1, icon: <Code className="w-5 h-5" /> }
  ];

  const stats = [
    { number: "12+", label: "Micro SAAS Solutions", icon: <Package className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS services including AI-powered email analysis, inventory optimization, sentiment tracking, expense management, chatbot builder, and code assistant. Transform your business with intelligent automation."
        />
        <meta
          name="keywords"
          content="micro SAAS, AI tools, business automation, email analyzer, inventory optimizer, sentiment tracker, expense categorizer, chatbot builder, code assistant, business solutions"
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
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of micro SAAS services designed to transform your business operations. 
              From AI-powered email analysis to intelligent inventory optimization, we provide ready-to-use solutions that deliver immediate value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SAAS services are organized into specialized categories to meet your specific business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-cyan-400 font-medium">{category.count} solutions</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered micro SAAS solutions designed to streamline your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
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
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}
                      >
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30 inline-block mb-2">
                          {service.category}
                        </div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-cyan-400">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-cyan-400 font-bold">{service.price}</span>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using our micro SAAS solutions to streamline operations and boost productivity.
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
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}