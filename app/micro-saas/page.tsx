import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Check, 
  Star, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Brain, 
  Code, 
  Mail, 
  Users, 
  Database, 
  Globe, 
  Smartphone,
  CreditCard,
  Clock,
  Award,
  TrendingUp,
  Lock,
  Sparkles,
  Target,
  Rocket
} from "lucide-react";

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      tagline: "AI-Powered Business Intelligence Platform",
      description: "Transform your data into actionable insights with our advanced AI analytics platform. Get real-time dashboards, predictive analytics, and automated reporting.",
      price: "From $29/month",
      features: [
        "Real-time data visualization",
        "AI-powered predictive analytics",
        "Automated report generation",
        "Custom dashboard creation",
        "Multi-source data integration",
        "Advanced filtering and segmentation",
        "Export to multiple formats",
        "24/7 monitoring alerts"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      popular: true,
      link: "/zion-analytics-pro"
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      tagline: "Advanced Cybersecurity Protection Suite",
      description: "Comprehensive security solution protecting your business from cyber threats with AI-powered threat detection and automated response.",
      price: "From $49/month",
      features: [
        "AI-powered threat detection",
        "Real-time security monitoring",
        "Automated incident response",
        "Vulnerability scanning",
        "Compliance reporting",
        "Multi-layer protection",
        "24/7 security operations center",
        "Custom security policies"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      popular: true,
      link: "/zion-security-shield"
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      tagline: "Secure Cloud Storage & Collaboration",
      description: "Enterprise-grade cloud storage with advanced security, real-time collaboration, and AI-powered file organization.",
      price: "From $9/month",
      features: [
        "End-to-end encryption",
        "Real-time collaboration",
        "AI-powered file organization",
        "Version control and history",
        "Advanced sharing controls",
        "Mobile and desktop sync",
        "Compliance and audit logs",
        "Unlimited storage options"
      ],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      popular: false,
      link: "/zion-cloud-vault"
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      tagline: "AI-Powered Content Creation Suite",
      description: "Create engaging content at scale with AI assistance. Generate blog posts, social media content, videos, and more with our intelligent content platform.",
      price: "From $19/month",
      features: [
        "AI content generation",
        "Multi-format support (text, video, images)",
        "Brand voice customization",
        "SEO optimization",
        "Content calendar management",
        "Collaboration tools",
        "Performance analytics",
        "Template library"
      ],
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      popular: false,
      link: "/zion-content-studio"
    },
    {
      id: "zion-data-sync",
      name: "Zion Data Sync",
      tagline: "Intelligent Data Integration Platform",
      description: "Seamlessly connect and synchronize data across all your business applications with our intelligent data integration platform.",
      price: "From $39/month",
      features: [
        "500+ app integrations",
        "Real-time data synchronization",
        "Data transformation and mapping",
        "Error handling and monitoring",
        "Custom API connections",
        "Data quality validation",
        "Automated backup and recovery",
        "Advanced scheduling options"
      ],
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      popular: false,
      link: "/zion-data-sync"
    },
    {
      id: "zion-project-master",
      name: "Zion Project Master",
      tagline: "AI-Enhanced Project Management",
      description: "Streamline project management with AI-powered insights, automated task allocation, and intelligent resource planning.",
      price: "From $25/month",
      features: [
        "AI-powered task prioritization",
        "Automated resource allocation",
        "Real-time progress tracking",
        "Team collaboration tools",
        "Risk assessment and mitigation",
        "Custom workflow automation",
        "Advanced reporting and analytics",
        "Integration with popular tools"
      ],
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      popular: false,
      link: "/zion-project-master"
    },
    {
      id: "zion-email-automation",
      name: "Zion Email Automation",
      tagline: "Smart Email Marketing & Automation",
      description: "Create, send, and track email campaigns with AI-powered personalization and advanced automation workflows.",
      price: "From $15/month",
      features: [
        "AI-powered email personalization",
        "Advanced automation workflows",
        "A/B testing and optimization",
        "Subscriber segmentation",
        "Email template library",
        "Performance analytics",
        "Compliance management",
        "Multi-channel integration"
      ],
      icon: <Mail className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      popular: false,
      link: "/zion-email-automation"
    },
    {
      id: "zion-customer-insights",
      name: "Zion Customer Insights",
      tagline: "AI-Powered Customer Analytics",
      description: "Understand your customers better with AI-driven insights, sentiment analysis, and predictive customer behavior modeling.",
      price: "From $35/month",
      features: [
        "Customer sentiment analysis",
        "Predictive behavior modeling",
        "Churn prediction and prevention",
        "Customer journey mapping",
        "Real-time feedback analysis",
        "Segmentation and targeting",
        "ROI and LTV calculations",
        "Custom dashboard creation"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      popular: false,
      link: "/zion-customer-insights"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$9-19",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic features included",
        "Up to 5 users",
        "Email support",
        "Standard integrations"
      ],
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$25-49",
      description: "Ideal for growing businesses",
      features: [
        "All Starter features",
        "Up to 25 users",
        "Priority support",
        "Advanced integrations",
        "Custom workflows"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "All Professional features",
        "Unlimited users",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantees"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Setup",
      description: "Get started in minutes with our one-click deployment and intuitive setup process."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance with industry standards."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Solutions",
      description: "Grow with confidence - our solutions scale seamlessly as your business expands."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock support from our expert team to ensure your success."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions. AI-powered analytics, security, content creation, and more. Start from $9/month with instant setup."
        />
        <meta
          name="keywords"
          content="micro saas, business software, AI analytics, cloud storage, project management, email automation, customer insights, business intelligence"
        />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ Micro SAAS Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Powerful, ready-to-use software solutions that transform your business operations. 
              From AI analytics to cybersecurity, we have everything you need to succeed.
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
                <Rocket className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for modern businesses with cutting-edge technology and user-friendly design.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choose from our comprehensive suite of AI-powered business tools designed to streamline your operations and drive growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={service.id}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                    service.popular ? 'ring-2 ring-cyan-500/50' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-cyan-400 font-medium text-sm">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-cyan-400 font-medium">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Link
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center text-sm group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-sm"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ${
                    tier.popular ? 'ring-2 ring-cyan-500/50' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                    <p className="text-gray-300 text-sm">{tier.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      tier.popular
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
              Start your free trial today and see the difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Schedule Demo
                <Rocket className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;