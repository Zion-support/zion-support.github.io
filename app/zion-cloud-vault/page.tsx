import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Cloud, 
  Lock, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  DollarSign,
  Globe,
  Smartphone,
  Monitor,
  Server,
  Brain,
  Target,
  Zap,
  Database,
  BarChart3,
  Upload,
  Download,
  Share2,
  Folder
} from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const ZionCloudVaultPage = () => {
  const features = [
    {
      title: "End-to-End Encryption",
      description: "Military-grade encryption for all your data with zero-knowledge architecture",
      icon: <Lock className="w-6 h-6" />,
      benefits: ["AES-256 encryption", "Zero-knowledge architecture", "Client-side encryption", "Secure key management"]
    },
    {
      title: "Automatic Backup",
      description: "Intelligent backup scheduling with version control and recovery options",
      icon: <Database className="w-6 h-6" />,
      benefits: ["Automated backups", "Version control", "Point-in-time recovery", "Incremental sync"]
    },
    {
      title: "Team Collaboration",
      description: "Seamless collaboration with real-time sync and sharing capabilities",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Real-time sync", "File sharing", "Permission management", "Activity tracking"]
    },
    {
      title: "Version Control",
      description: "Track changes and maintain file history with advanced versioning",
      icon: <Clock className="w-6 h-6" />,
      benefits: ["File versioning", "Change tracking", "Rollback capability", "Conflict resolution"]
    },
    {
      title: "Cross-Platform Access",
      description: "Access your files from any device with native apps and web interface",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["Web interface", "Mobile apps", "Desktop sync", "API access"]
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive usage analytics and storage insights",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Usage analytics", "Storage insights", "Access reports", "Performance metrics"]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$9",
      period: "per month",
      description: "Perfect for individuals and small teams",
      features: [
        "100 GB storage",
        "End-to-end encryption",
        "Basic sharing",
        "Mobile apps",
        "Email support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Business",
      price: "$29",
      period: "per month",
      description: "Ideal for growing businesses and teams",
      features: [
        "1 TB storage",
        "Advanced sharing",
        "Team collaboration",
        "Admin controls",
        "Priority support",
        "API access",
        "Custom branding"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited storage",
        "Advanced security",
        "Custom integrations",
        "24/7 support",
        "On-premise deployment",
        "SLA guarantee",
        "Custom development"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const useCases = [
    {
      title: "Document Management",
      description: "Secure storage and collaboration for business documents",
      icon: <Folder className="w-8 h-8" />,
      capabilities: ["Document storage", "Version control", "Team collaboration", "Access control"]
    },
    {
      title: "Media Storage",
      description: "High-performance storage for photos, videos, and creative assets",
      icon: <Upload className="w-8 h-8" />,
      capabilities: ["Media optimization", "Fast uploads", "Preview generation", "CDN delivery"]
    },
    {
      title: "Backup & Recovery",
      description: "Automated backup solutions for critical business data",
      icon: <Shield className="w-8 h-8" />,
      capabilities: ["Automated backups", "Disaster recovery", "Data retention", "Compliance"]
    },
    {
      title: "File Sharing",
      description: "Secure file sharing with advanced permission controls",
      icon: <Share2 className="w-8 h-8" />,
      capabilities: ["Secure sharing", "Permission management", "Link expiration", "Audit trails"]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      company: "Creative Agency",
      role: "Creative Director",
      content: "Zion Cloud Vault has revolutionized how we manage our creative assets. The real-time collaboration features are incredible, and the security gives us peace of mind.",
      rating: 5,
      avatar: "JA"
    },
    {
      name: "Mark Thompson",
      company: "Legal Firm",
      role: "Managing Partner",
      content: "The encryption and compliance features are exactly what we needed for our sensitive legal documents. The team collaboration tools have improved our workflow significantly.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Sarah Lee",
      company: "Tech Startup",
      role: "CTO",
      content: "The API integration was seamless with our existing systems. We can now store and sync all our development files securely across our entire team.",
      rating: 5,
      avatar: "SL"
    }
  ];

  const stats = [
    { number: "99.99%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "256-bit", label: "Encryption", icon: <Lock className="w-6 h-6" /> },
    { number: "50+", label: "Integrations", icon: <Server className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Cloud Vault - Secure Cloud Storage Solution</title>
        <meta name="description" content="Secure your data with Zion Cloud Vault - enterprise-grade cloud storage with end-to-end encryption, team collaboration, and automatic backup starting from $9/month." />
        <meta name="keywords" content="cloud storage, secure storage, file sharing, team collaboration, data backup, encryption, cloud vault, file sync" />
        <meta property="og:title" content="Zion Cloud Vault - Secure Cloud Storage Solution" />
        <meta property="og:description" content="Enterprise-grade cloud storage with end-to-end encryption and team collaboration features." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-cloud-vault" />
        <meta property="og:image" content="https://ziontechgroup.com/og-cloud-vault.jpg" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <SEOOptimizer
          title="Zion Cloud Vault - Secure Cloud Storage Solution"
          description="Secure your data with Zion Cloud Vault - enterprise-grade cloud storage with end-to-end encryption, team collaboration, and automatic backup starting from $9/month."
          keywords="cloud storage, secure storage, file sharing, team collaboration, data backup, encryption, cloud vault, file sync, enterprise storage"
          canonical="https://ziontechgroup.com/zion-cloud-vault"
        />

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Cloud className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">Enterprise-Grade Storage</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Zion Cloud
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-pulse">
                {" "}Vault
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Secure cloud storage solution with end-to-end encryption, team collaboration, 
              and automatic backup designed for modern enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Cloud className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Storage Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to store, sync, and collaborate on your files securely.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect for Every Use Case
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From personal files to enterprise collaboration, Zion Cloud Vault adapts to your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.capabilities.map((capability, capabilityIndex) => (
                      <div key={capabilityIndex} className="text-sm bg-purple-500/20 text-purple-300 px-3 py-2 rounded">
                        {capability}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the storage plan that fits your needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-purple-500/20' 
                    : 'border-white/20 hover:border-purple-500/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Teams Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion Cloud Vault
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Data Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using Zion Cloud Vault to store and collaborate on their files securely. 
              Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Cloud className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionCloudVaultPage;