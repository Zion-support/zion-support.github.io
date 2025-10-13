import { ArrowRight, Check, Star, Zap, Shield, Cloud, Brain, BarChart3, Code, Target, Users, Mail, Smartphone, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Pricing() {
  const aiServicesPricing = [
    {
      name: "AI Analytics Dashboard",
      price: "$299",
      period: "/month",
      description: "Real-time analytics with predictive insights",
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "API Integration", "24/7 Support"],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "AI Content Generator",
      price: "$149",
      period: "/month",
      description: "AI-powered content creation for all formats",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection", "Content Calendar"],
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "AI Cybersecurity Suite",
      price: "$599",
      period: "/month",
      description: "Advanced threat detection and response",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Incident Response"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      popular: false
    },
    {
      name: "AI Customer Support",
      price: "$199",
      period: "/month",
      description: "Intelligent chatbots and support automation",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff", "Knowledge Base"],
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      popular: false
    }
  ];

  const microSaasPricing = [
    {
      name: "Zion Analytics Pro",
      price: "$29",
      period: "/month",
      description: "AI-powered business intelligence platform",
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "API Integration"],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      popular: true
    },
    {
      name: "Zion Security Shield",
      price: "$49",
      period: "/month",
      description: "Advanced cybersecurity protection",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      popular: false
    },
    {
      name: "Zion Cloud Vault",
      price: "$9",
      period: "/month",
      description: "Secure cloud storage solution",
      features: ["End-to-End Encryption", "Automated Backup", "File Sharing", "Version Control"],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      popular: false
    },
    {
      name: "Zion Content Studio",
      price: "$19",
      period: "/month",
      description: "AI-powered content creation platform",
      features: ["AI Writing", "SEO Optimization", "Multi-format Output", "Brand Voice Training"],
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      popular: false
    }
  ];

  const itServicesPricing = [
    {
      name: "Cloud Infrastructure",
      price: "$249",
      period: "/month",
      description: "Comprehensive cloud solutions with auto-scaling",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening", "24/7 Support"],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Web Development",
      price: "$5,000",
      period: "/project",
      description: "Custom web applications and websites",
      features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Security Implementation", "Maintenance"],
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      popular: true
    },
    {
      name: "Mobile Development",
      price: "$8,000",
      period: "/project",
      description: "Native and cross-platform mobile apps",
      features: ["iOS & Android", "Cross-platform", "UI/UX Design", "Backend Integration", "App Store Deployment"],
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      popular: false
    },
    {
      name: "Blockchain Development",
      price: "$15,000",
      period: "/project",
      description: "Smart contracts and DeFi applications",
      features: ["Smart Contracts", "DeFi Applications", "NFT Platforms", "Blockchain Integration", "Security Audit"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI & IT Solutions</title>
        <meta
          name="description"
          content="Transparent pricing for our AI services, micro SAAS solutions, and IT services. Choose the perfect plan for your business needs with flexible pricing options."
        />
        <meta
          name="keywords"
          content="pricing, AI services pricing, micro SAAS pricing, IT services pricing, business solutions, technology consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-gradient-enhanced">Transparent</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect plan for your business needs. All our services come with transparent pricing, 
              no hidden fees, and flexible payment options.
            </p>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AI Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI solutions with enterprise-grade features and 24/7 support
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServicesPricing.map((service, index) => (
                <div
                  key={index}
                  className={`relative glass-card-enhanced rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    service.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use software solutions that can transform your business operations immediately
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasPricing.map((service, index) => (
                <div
                  key={index}
                  className={`relative glass-card-enhanced rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    service.popular ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-purple-400">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                      service.popular
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-600 text-white hover:from-purple-600 hover:to-cyan-700'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  IT Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional IT services with custom solutions and dedicated support
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServicesPricing.map((service, index) => (
                <div
                  key={index}
                  className={`relative glass-card-enhanced rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    service.popular ? 'ring-2 ring-green-500' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-green-400">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                      service.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us for personalized pricing and custom solutions tailored to your specific needs.
            </p>
            
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
                Contact Us Today
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
      </div>
    </>
  );
}
