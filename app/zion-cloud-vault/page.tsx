import { ArrowRight, CheckCircle, Star, Cloud, Lock, Shield, Users, Award, Clock, Zap, Globe, Mail, Smartphone, Globe as World, Brain, Target, Database, Activity, Settings, Download, Share2, Filter, RefreshCw, AlertCircle, CheckCircle2, XCircle, Info, Upload, Folder, FileText, BarChart3, TrendingUp, Eye, EyeOff } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionCloudVault() {
  const features = [
    {
      title: "1TB Storage",
      description: "Generous cloud storage space with automatic expansion options for growing businesses.",
      icon: <Database className="w-6 h-6" />,
      benefits: ["1TB base storage", "Auto-expansion", "Unlimited bandwidth", "Fast upload speeds"]
    },
    {
      title: "End-to-End Encryption",
      description: "Military-grade encryption ensures your data is secure both in transit and at rest.",
      icon: <Lock className="w-6 h-6" />,
      benefits: ["AES-256 encryption", "Zero-knowledge architecture", "Client-side encryption", "Secure key management"]
    },
    {
      title: "File Sharing",
      description: "Secure file sharing with customizable permissions and expiration dates.",
      icon: <Share2 className="w-6 h-6" />,
      benefits: ["Secure links", "Password protection", "Expiration dates", "Download tracking"]
    },
    {
      title: "Backup Automation",
      description: "Automated backup scheduling with version control and recovery options.",
      icon: <RefreshCw className="w-6 h-6" />,
      benefits: ["Scheduled backups", "Version history", "Point-in-time recovery", "Incremental backups"]
    },
    {
      title: "Version Control",
      description: "Track and manage file versions with detailed change history and rollback options.",
      icon: <Activity className="w-6 h-6" />,
      benefits: ["Version tracking", "Change history", "Rollback options", "Conflict resolution"]
    },
    {
      title: "Mobile Access",
      description: "Native mobile apps for iOS and Android with offline access capabilities.",
      icon: <Smartphone className="w-6 h-6" />,
      benefits: ["iOS & Android apps", "Offline access", "Sync capabilities", "Touch optimization"]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$9",
      originalPrice: "$15",
      period: "per month",
      description: "Perfect for individuals and small teams",
      features: [
        "1TB storage",
        "End-to-end encryption",
        "File sharing",
        "Mobile apps",
        "Email support",
        "Up to 5 users"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Business",
      price: "$29",
      originalPrice: "$49",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "5TB storage",
        "Advanced sharing",
        "Admin controls",
        "Priority support",
        "API access",
        "Up to 25 users",
        "Backup automation",
        "Version control"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "$99",
      originalPrice: "$149",
      period: "per month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited storage",
        "Everything in Business",
        "Custom integrations",
        "24/7 phone support",
        "Unlimited users",
        "White-label options",
        "Dedicated support",
        "Custom SLA"
      ],
      popular: false,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const storageStats = [
    { number: "1TB+", label: "Storage Space", icon: <Database className="w-6 h-6" /> },
    { number: "256-bit", label: "Encryption", icon: <Lock className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      company: "Creative Agency",
      role: "Creative Director",
      content: "Zion Cloud Vault has revolutionized how we manage our creative assets. The version control and sharing features are incredible.",
      rating: 5,
      avatar: "JL",
      metrics: "50% faster workflows"
    },
    {
      name: "Robert Smith",
      company: "Legal Firm",
      role: "Managing Partner",
      content: "The security and encryption features give us confidence that our sensitive client documents are protected. Highly recommended.",
      rating: 5,
      avatar: "RS",
      metrics: "100% secure storage"
    },
    {
      name: "Maria Garcia",
      company: "Consulting Group",
      role: "Operations Manager",
      content: "The mobile app is fantastic. I can access all our files on the go and the offline sync works perfectly.",
      rating: 5,
      avatar: "MG",
      metrics: "Mobile-first design"
    }
  ];

  const securityFeatures = [
    { name: "AES-256 Encryption", description: "Military-grade encryption for all data", icon: <Lock className="w-5 h-5" /> },
    { name: "Zero-Knowledge Architecture", description: "We can't see your files", icon: <EyeOff className="w-5 h-5" /> },
    { name: "Two-Factor Authentication", description: "Additional security layer", icon: <Shield className="w-5 h-5" /> },
    { name: "SOC 2 Compliant", description: "Industry-standard security", icon: <CheckCircle className="w-5 h-5" /> },
    { name: "GDPR Compliant", description: "EU data protection standards", icon: <Globe className="w-5 h-5" /> },
    { name: "Regular Security Audits", description: "Third-party security testing", icon: <Activity className="w-5 h-5" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Cloud Vault - Secure Cloud Storage Solution | Zion Tech Group</title>
        <meta
          name="description"
          content="Secure your data with Zion Cloud Vault - the ultimate cloud storage solution featuring 1TB storage, end-to-end encryption, file sharing, and mobile access. Starting at $9/month."
        />
        <meta
          name="keywords"
          content="cloud storage, secure file sharing, data encryption, file backup, version control, mobile cloud storage, business file storage, secure cloud, data protection"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-cloud-vault" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                  <Cloud className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-purple-400 text-sm font-medium">Secure Cloud Storage</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Zion Cloud
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-pulse">
                    {" "}Vault
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Secure cloud storage solution with end-to-end encryption, file sharing, 
                  and mobile access. Keep your data safe and accessible anywhere.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
                    See Demo
                    <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
                
                {/* Storage Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {storageStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-purple-400">{stat.number}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white">Storage Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-300">Synced</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-400">1.2TB</div>
                      <div className="text-sm text-gray-300">Total Storage</div>
                      <div className="flex items-center mt-1">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                        <span className="text-xs text-green-400">+5.2%</span>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-400">847GB</div>
                      <div className="text-sm text-gray-300">Used Space</div>
                      <div className="flex items-center mt-1">
                        <Database className="w-4 h-4 text-purple-400 mr-1" />
                        <span className="text-xs text-purple-400">70% used</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Cloud className="w-12 h-12 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Secure Cloud Storage Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to store, share, and protect your files in the cloud.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise-Grade Security
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your data is protected with military-grade security and compliance standards.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.name}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Storage Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible storage solutions for individuals and businesses of all sizes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative ${
                    plan.popular ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{plan.period}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    } hover:scale-105`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Thousands
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about Zion Cloud Vault
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-purple-400">{testimonial.metrics}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Files?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of users who trust Zion Cloud Vault to protect their most important files.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-purple-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-purple-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-purple-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
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