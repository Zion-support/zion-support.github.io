import { ArrowRight, Zap, Star, CheckCircle, BarChart3, Shield, Cloud, Users, Brain, Database, Code, DollarSign, TrendingUp, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const featuredServices = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics and predictive insights",
      price: "From $29/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-analytics-pro",
      color: "from-cyan-500 to-blue-500",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "API Access"],
      popular: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI threat detection and automated response",
      price: "From $49/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-security-shield",
      color: "from-red-500 to-orange-500",
      features: ["AI Threat Detection", "24/7 Monitoring", "Compliance Tools", "Incident Response"],
      popular: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      price: "From $9/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-cloud-vault",
      color: "from-blue-500 to-cyan-500",
      features: ["Unlimited Storage", "AES-256 Encryption", "Global CDN", "Team Collaboration"],
      popular: true
    },
    {
      name: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI-powered lead scoring and automation",
      price: "From $39/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      color: "from-indigo-500 to-purple-500",
      features: ["AI Lead Scoring", "Automated Workflows", "Predictive Analytics", "Team Collaboration"],
      popular: true
    },
    {
      name: "Zion AI Marketing Automation",
      description: "AI-powered marketing platform with intelligent targeting and automated campaigns",
      price: "From $49/month",
      icon: <Zap className="w-8 h-8" />,
      link: "/zion-ai-marketing-automation",
      color: "from-pink-500 to-purple-500",
      features: ["AI Targeting", "Multi-channel Marketing", "Predictive Analytics", "A/B Testing"],
      popular: true
    },
    {
      name: "Zion AI Finance Assistant",
      description: "Intelligent financial management with automated bookkeeping and investment optimization",
      price: "From $19/month",
      icon: <DollarSign className="w-8 h-8" />,
      link: "/zion-ai-finance-assistant",
      color: "from-green-500 to-emerald-500",
      features: ["Automated Bookkeeping", "Investment Analysis", "Tax Preparation", "Fraud Detection"],
      popular: true
    },
    {
      name: "Zion AI HR Manager",
      description: "AI-powered human resources platform with intelligent recruitment and performance analytics",
      price: "From $29/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-hr-manager",
      color: "from-blue-500 to-cyan-500",
      features: ["AI Recruitment", "Performance Analytics", "Workforce Planning", "Compliance Management"],
      popular: true
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation platform with automated writing and design tools",
      price: "From $39/month",
      icon: <Brain className="w-8 h-8" />,
      link: "/zion-content-studio",
      color: "from-purple-500 to-pink-500",
      features: ["AI Writing", "Content Templates", "Brand Voice", "Multi-language Support"],
      popular: false
    },
    {
      name: "Zion Data Sync",
      description: "Intelligent data synchronization platform with real-time updates and conflict resolution",
      price: "From $19/month",
      icon: <Database className="w-8 h-8" />,
      link: "/zion-data-sync",
      color: "from-teal-500 to-cyan-500",
      features: ["Real-time Sync", "Conflict Resolution", "Data Validation", "API Integration"],
      popular: false
    }
  ];

  const categories = [
    {
      name: "AI-Powered Solutions",
      description: "Intelligent software powered by artificial intelligence",
      count: 6,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Business Tools",
      description: "Essential tools for business operations and growth",
      count: 8,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Security & Compliance",
      description: "Protect your business with advanced security solutions",
      count: 3,
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Productivity & Automation",
      description: "Streamline workflows and boost productivity",
      count: 5,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Discover our comprehensive collection of micro SAAS solutions. AI-powered tools for analytics, security, CRM, marketing, finance, HR, and more. Ready-to-deploy software for modern businesses."
        />
        <meta
          name="keywords"
          content="micro SAAS, software solutions, AI tools, business software, productivity tools, automation software, cloud solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
              <Zap className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">50+ Micro SAAS Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Micro SAAS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive collection of ready-to-deploy micro SAAS solutions. 
              AI-powered tools for analytics, security, CRM, marketing, finance, HR, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Solution Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our micro SAAS solutions organized by category and use case.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">
                    {category.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-400">
                      {category.count} Solutions
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and powerful micro SAAS solutions for modern businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                    service.popular
                      ? 'border-purple-400 bg-gradient-to-br from-purple-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-purple-400'
                  }`}
                >
                  {service.popular && (
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Featured</span>
                    </div>
                  )}
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <div className="text-purple-400 font-semibold text-lg mb-2">{service.price}</div>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using our micro SAAS solutions to accelerate growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}