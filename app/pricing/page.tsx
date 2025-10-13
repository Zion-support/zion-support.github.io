import { ArrowRight, Check, Star, Zap, Shield, Cloud, Brain, Users, Mail, Smartphone, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Pricing() {
  const aiServicesPricing = [
    {
      name: "AI Business Intelligence Pro",
      price: "$299",
      period: "/month",
      description: "Advanced AI analytics platform with real-time dashboards and predictive modeling",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Modeling",
        "Custom Reports",
        "API Integration",
        "Advanced ML Models",
        "24/7 Support"
      ],
      marketPrice: "$500-800/month",
      savings: "40%",
      popular: false
    },
    {
      name: "AI Customer Support Suite",
      price: "$199",
      period: "/month",
      description: "Intelligent chatbots and automated customer service solutions",
      features: [
        "Multi-language Support",
        "Sentiment Analysis",
        "CRM Integration",
        "Live Chat Handoff",
        "Voice Recognition",
        "24/7 Availability"
      ],
      marketPrice: "$300-500/month",
      savings: "35%",
      popular: true
    },
    {
      name: "AI Content Generation Studio",
      price: "$149",
      period: "/month",
      description: "AI-powered content creation with brand voice consistency",
      features: [
        "SEO Optimization",
        "Brand Voice Training",
        "Multi-format Output",
        "Plagiarism Detection",
        "Content Calendar",
        "Unlimited Content"
      ],
      marketPrice: "$200-400/month",
      savings: "25%",
      popular: false
    },
    {
      name: "AI Cybersecurity Defense",
      price: "$399",
      period: "/month",
      description: "Advanced threat detection and response system",
      features: [
        "Threat Detection",
        "Automated Response",
        "Compliance Reports",
        "24/7 Monitoring",
        "Behavioral Analysis",
        "Zero False Positives"
      ],
      marketPrice: "$600-1200/month",
      savings: "50%",
      popular: false
    }
  ];

  const itServicesPricing = [
    {
      name: "Cloud Infrastructure Pro",
      price: "$249",
      period: "/month",
      description: "Comprehensive cloud solutions with automated scaling",
      features: [
        "Auto-scaling",
        "Disaster Recovery",
        "Cost Optimization",
        "Security Hardening",
        "Multi-cloud Support",
        "99.99% Uptime SLA"
      ],
      marketPrice: "$400-800/month",
      savings: "40%",
      popular: true
    },
    {
      name: "Web Development",
      price: "$2,500",
      period: "/project",
      description: "Custom web applications with modern technologies",
      features: [
        "Custom Development",
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Maintenance Included",
        "3 Months Support"
      ],
      marketPrice: "$5,000-25,000/project",
      savings: "50%",
      popular: false
    },
    {
      name: "Mobile App Development",
      price: "$3,500",
      period: "/project",
      description: "Native and cross-platform mobile applications",
      features: [
        "Native Development",
        "Cross-platform",
        "App Store Optimization",
        "Push Notifications",
        "Analytics Integration",
        "6 Months Support"
      ],
      marketPrice: "$7,000-35,000/project",
      savings: "50%",
      popular: false
    },
    {
      name: "Cybersecurity Suite",
      price: "$399",
      period: "/month",
      description: "Comprehensive cybersecurity solutions",
      features: [
        "Threat Detection",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Compliance Management",
        "Incident Response",
        "24/7 Monitoring"
      ],
      marketPrice: "$600-1500/month",
      savings: "50%",
      popular: false
    }
  ];

  const microSaasPricing = [
    {
      name: "Zion Analytics Pro",
      price: "$29",
      period: "/month",
      description: "AI-powered business intelligence platform",
      features: [
        "Real-time Dashboards",
        "Predictive Analytics",
        "Custom Reports",
        "API Integration",
        "Mobile App",
        "30-day Free Trial"
      ],
      marketPrice: "$50-100/month",
      savings: "42%",
      popular: true
    },
    {
      name: "Zion Security Shield",
      price: "$49",
      period: "/month",
      description: "Advanced cybersecurity protection for small businesses",
      features: [
        "Threat Detection",
        "Automated Response",
        "Compliance Reports",
        "24/7 Monitoring",
        "Mobile Alerts",
        "Easy Setup"
      ],
      marketPrice: "$80-150/month",
      savings: "39%",
      popular: false
    },
    {
      name: "Zion Cloud Vault",
      price: "$9",
      period: "/month",
      description: "Secure cloud storage with collaboration features",
      features: [
        "Secure Storage",
        "File Sharing",
        "Collaboration",
        "Version Control",
        "Mobile Sync",
        "Unlimited Sharing"
      ],
      marketPrice: "$15-30/month",
      savings: "40%",
      popular: false
    },
    {
      name: "Zion Content Studio",
      price: "$19",
      period: "/month",
      description: "AI-powered content creation platform",
      features: [
        "Content Generation",
        "SEO Optimization",
        "Brand Voice",
        "Multi-format",
        "Content Calendar",
        "Unlimited Content"
      ],
      marketPrice: "$30-60/month",
      savings: "37%",
      popular: false
    }
  ];

  const enterprisePricing = [
    {
      name: "Enterprise AI Suite",
      price: "Custom",
      period: "",
      description: "Complete AI transformation for large organizations",
      features: [
        "All AI Services Included",
        "Custom AI Models",
        "Dedicated Support Team",
        "On-premise Deployment",
        "Custom Integrations",
        "Training & Consulting"
      ],
      marketPrice: "$10,000-50,000/month",
      savings: "30%",
      popular: false
    },
    {
      name: "Enterprise IT Solutions",
      price: "Custom",
      period: "",
      description: "Comprehensive IT infrastructure and development",
      features: [
        "All IT Services Included",
        "Custom Development",
        "Dedicated Team",
        "24/7 Support",
        "Custom Integrations",
        "Project Management"
      ],
      marketPrice: "$15,000-100,000/month",
      savings: "25%",
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI & IT Solutions</title>
        <meta
          name="description"
          content="Transparent pricing for AI services, IT solutions, and micro SAAS products. Competitive rates with significant savings compared to market prices. Contact us for custom enterprise solutions."
        />
        <meta
          name="keywords"
          content="AI pricing, IT services pricing, micro SAAS pricing, enterprise solutions, competitive rates, transparent pricing, cost savings"
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
                Transparent
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Pricing
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Competitive pricing for all our AI and IT solutions. Save up to 50% compared to market rates 
              with our transparent, no-hidden-fees pricing structure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Custom Quote
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

        {/* AI Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AI Services Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI solutions with significant cost savings compared to market rates
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServicesPricing.map((service, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                    service.popular ? 'ring-2 ring-cyan-400' : ''
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
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-gray-400 ml-1">{service.period}</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                        <span className="ml-2 text-sm text-green-400 font-semibold">
                          Save {service.savings}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  IT Services Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional IT solutions with transparent project-based and monthly pricing
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServicesPricing.map((service, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden ${
                    service.popular ? 'ring-2 ring-purple-400' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-purple-400">{service.price}</span>
                        <span className="text-gray-400 ml-1">{service.period}</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                        <span className="ml-2 text-sm text-green-400 font-semibold">
                          Save {service.savings}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                  Micro SAAS Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Affordable micro SAAS solutions perfect for small to medium businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasPricing.map((service, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 relative overflow-hidden ${
                    service.popular ? 'ring-2 ring-pink-400' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-pink-400">{service.price}</span>
                        <span className="text-gray-400 ml-1">{service.period}</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                        <span className="ml-2 text-sm text-green-400 font-semibold">
                          Save {service.savings}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Enterprise Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Custom enterprise solutions tailored to your organization's needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {enterprisePricing.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-gray-400 ml-1">{service.period}</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                        <span className="ml-2 text-sm text-green-400 font-semibold">
                          Save {service.savings}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105 text-lg"
                    >
                      Contact Sales
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a personalized consultation and custom pricing for your specific needs.
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
                  Get Custom Quote
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
