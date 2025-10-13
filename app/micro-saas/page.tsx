import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  BarChart3, 
  Shield, 
  Cloud, 
  Brain, 
  Database, 
  Zap, 
  Code, 
  Mail, 
  Users, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  DollarSign,
  TrendingUp,
  Lock,
  Globe,
  Smartphone,
  Monitor,
  Server
} from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics, predictive insights, and automated reporting",
      price: "From $29/month",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "API Integration"],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/zion-analytics-pro",
      category: "Analytics",
      popular: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with threat detection, vulnerability scanning, and compliance monitoring",
      price: "From $49/month",
      features: ["Threat Detection", "Vulnerability Scanning", "Compliance Monitoring", "24/7 Support"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      link: "/zion-security-shield",
      category: "Security",
      popular: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with encryption, backup, and collaboration features",
      price: "From $9/month",
      features: ["End-to-End Encryption", "Automatic Backup", "Team Collaboration", "Version Control"],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/zion-cloud-vault",
      category: "Storage",
      popular: true
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, and marketing materials",
      price: "From $19/month",
      features: ["AI Content Generation", "SEO Optimization", "Multi-format Export", "Brand Voice Training"],
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/zion-content-studio",
      category: "Content",
      popular: false
    },
    {
      name: "Zion Data Sync",
      description: "Automated data synchronization across platforms with real-time updates and conflict resolution",
      price: "From $15/month",
      features: ["Real-time Sync", "Conflict Resolution", "Multi-platform Support", "Data Validation"],
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      link: "/zion-data-sync",
      category: "Data",
      popular: false
    },
    {
      name: "Zion Lead Magnet",
      description: "Lead generation and nurturing platform with automated workflows and CRM integration",
      price: "From $25/month",
      features: ["Lead Capture", "Automated Nurturing", "CRM Integration", "Analytics Dashboard"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/zion-lead-magnet",
      category: "Marketing",
      popular: false
    },
    {
      name: "Zion Project Master",
      description: "Project management platform with AI-powered insights, resource planning, and team collaboration",
      price: "From $35/month",
      features: ["AI Insights", "Resource Planning", "Team Collaboration", "Progress Tracking"],
      icon: <Code className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      link: "/zion-project-master",
      category: "Productivity",
      popular: false
    },
    {
      name: "Zion Email Automation",
      description: "Advanced email marketing automation with personalization, A/B testing, and analytics",
      price: "From $22/month",
      features: ["Email Automation", "Personalization", "A/B Testing", "Advanced Analytics"],
      icon: <Mail className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      link: "/zion-email-automation",
      category: "Marketing",
      popular: false
    },
    {
      name: "Zion API Gateway",
      description: "Enterprise API management platform with rate limiting, authentication, and monitoring",
      price: "From $45/month",
      features: ["API Management", "Rate Limiting", "Authentication", "Real-time Monitoring"],
      icon: <Server className="w-8 h-8" />,
      color: "from-gray-500 to-slate-500",
      link: "/zion-api-gateway",
      category: "Development",
      popular: false
    },
    {
      name: "Zion Social Media Manager",
      description: "AI-powered social media management with content scheduling, engagement tracking, and analytics",
      price: "From $18/month",
      features: ["Content Scheduling", "Engagement Tracking", "AI Recommendations", "Multi-platform Support"],
      icon: <Globe className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      link: "/zion-social-manager",
      category: "Social Media",
      popular: false
    },
    {
      name: "Zion Mobile App Builder",
      description: "No-code mobile app development platform with drag-and-drop interface and instant deployment",
      price: "From $39/month",
      features: ["No-code Builder", "Drag-and-Drop", "Instant Deployment", "Cross-platform Support"],
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      link: "/zion-mobile-builder",
      category: "Development",
      popular: false
    },
    {
      name: "Zion Website Optimizer",
      description: "AI-powered website optimization for speed, SEO, and conversion rate improvement",
      price: "From $27/month",
      features: ["Speed Optimization", "SEO Enhancement", "Conversion Tracking", "Performance Monitoring"],
      icon: <Monitor className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      link: "/zion-website-optimizer",
      category: "Optimization",
      popular: false
    }
  ];

  const categories = [
    "All",
    "Analytics",
    "Security", 
    "Storage",
    "Content",
    "Data",
    "Marketing",
    "Productivity",
    "Development",
    "Social Media",
    "Optimization"
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Instant Deployment",
      description: "Get started in minutes with our ready-to-use solutions",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Scalable Pricing",
      description: "Pay only for what you use with flexible pricing plans",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support from our expert team",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta name="description" content="Discover our comprehensive collection of micro SAAS solutions. From analytics to security, get instant access to powerful software tools starting from $9/month." />
        <meta name="keywords" content="micro SAAS, software solutions, business tools, analytics, security, cloud storage, content creation, automation" />
        <meta property="og:title" content="Micro SAAS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Ready-to-use software solutions for immediate deployment. Transform your business with our micro SAAS platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:image" content="https://ziontechgroup.com/og-micro-saas.jpg" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <SEOOptimizer
          title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software"
          description="Discover our comprehensive collection of micro SAAS solutions. From analytics to security, get instant access to powerful software tools starting from $9/month."
          keywords="micro SAAS, software solutions, business tools, analytics, security, cloud storage, content creation, automation, productivity"
          canonical="https://ziontechgroup.com/micro-saas"
        />

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
              <Zap className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">50+ Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions for immediate deployment. Transform your business operations 
              with our comprehensive collection of micro SAAS tools designed for modern enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of ready-to-use software solutions designed for modern businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of micro SAAS tools designed to solve specific business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 relative"
                  aria-label={`Learn more about ${service.name}`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      aria-hidden="true"
                    >
                      {service.icon}
                    </div>
                    <span className="text-sm font-medium text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 2 && (
                        <span className="text-xs text-gray-400">
                          +{service.features.length - 2} more
                        </span>
                      )}
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
              Start your digital transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;