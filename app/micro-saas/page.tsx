import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Star, BarChart3, Shield, Cloud, Brain, Database, Zap, Code, Users } from "lucide-react";

export default function MicroSAAS() {
  const featuredProducts = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics and predictive insights.",
      price: "From $29/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-analytics-pro",
      featured: true,
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "API Integration"]
    },
    {
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity suite with threat detection and automated response.",
      price: "From $49/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-security-shield",
      featured: true,
      features: ["Threat Detection", "Automated Response", "Compliance Monitoring", "24/7 Support"]
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage and backup solution with enterprise-grade encryption.",
      price: "From $19/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-cloud-vault",
      featured: true,
      features: ["Secure Storage", "Automated Backup", "File Sharing", "Version Control"]
    }
  ];

  const allProducts = [
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation and management platform.",
      price: "From $39/month",
      icon: <Brain className="w-6 h-6" />,
      link: "/zion-content-studio"
    },
    {
      name: "Zion Data Sync",
      description: "Seamless data synchronization across all your applications.",
      price: "From $24/month",
      icon: <Database className="w-6 h-6" />,
      link: "/zion-data-sync"
    },
    {
      name: "Zion Lead Magnet",
      description: "Lead generation and nurturing automation platform.",
      price: "From $34/month",
      icon: <Zap className="w-6 h-6" />,
      link: "/zion-lead-magnet"
    },
    {
      name: "Zion Project Master",
      description: "Advanced project management and team collaboration tool.",
      price: "From $44/month",
      icon: <Code className="w-6 h-6" />,
      link: "/zion-project-master"
    },
    {
      name: "Zion Email Automation",
      description: "Intelligent email marketing and automation platform.",
      price: "From $29/month",
      icon: <Zap className="w-6 h-6" />,
      link: "/zion-email-automation"
    },
    {
      name: "Zion Social Scheduler",
      description: "Social media management and scheduling platform.",
      price: "From $19/month",
      icon: <Users className="w-6 h-6" />,
      link: "/zion-social-scheduler"
    }
  ];

  const benefits = [
    {
      title: "Ready to Deploy",
      description: "No development time required. Start using our solutions immediately."
    },
    {
      title: "Scalable Pricing",
      description: "Pay only for what you use with flexible pricing plans."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success."
    },
    {
      title: "Regular Updates",
      description: "Continuous improvements and new features added regularly."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Ready-to-use software solutions for immediate deployment including analytics, security, and productivity tools."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ready-to-use software solutions for immediate deployment. 
                No development time required - start using our tools today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/consultation"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our most popular and powerful micro SAAS solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/40 hover:border-purple-500/60 transition-all duration-300 group relative"
              >
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Featured</span>
                  </div>
                </div>
                
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {product.name}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {product.description}
                </p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-purple-400">{product.price}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={product.link}
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* All Products Grid */}
        <div className="bg-slate-800/30 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All Solutions
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Complete suite of micro SAAS solutions for every business need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-slate-700/30 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-3 text-sm">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-lg font-bold text-cyan-400">{product.price}</span>
                  </div>
                  
                  <Link
                    to={product.link}
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Micro SAAS?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Immediate deployment with enterprise-grade features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose from our range of micro SAAS solutions and start transforming your business today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/consultation"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}