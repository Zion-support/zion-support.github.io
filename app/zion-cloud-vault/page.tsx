import { ArrowRight, Cloud, CheckCircle, TrendingUp, Users, Award, Clock, Zap, Database, Brain, Star, Mail, Smartphone, Globe, Lock, Upload, Download, Share2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionCloudVaultPage() {
  const features = [
    {
      title: "End-to-End Encryption",
      description: "Military-grade AES-256 encryption protects your files both in transit and at rest, ensuring maximum security.",
      icon: <Lock className="w-6 h-6" />,
      benefits: ["AES-256 encryption", "Zero-knowledge architecture", "Client-side encryption", "Secure key management"]
    },
    {
      title: "Automated Backup & Sync",
      description: "Never lose your data with intelligent backup and synchronization across all your devices and platforms.",
      icon: <Upload className="w-6 h-6" />,
      benefits: ["Real-time sync", "Version history", "Cross-platform support", "Selective sync"]
    },
    {
      title: "Collaborative Workspace",
      description: "Work together seamlessly with advanced collaboration tools, real-time editing, and team management features.",
      icon: <Share2 className="w-6 h-6" />,
      benefits: ["Real-time collaboration", "Team workspaces", "Permission controls", "Activity tracking"]
    },
    {
      title: "Advanced Search & Filtering",
      description: "Find any file instantly with AI-powered search, smart filters, and intelligent content recognition.",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["AI-powered search", "Content recognition", "Smart filters", "Full-text search"]
    }
  ];

  const storageFeatures = [
    { feature: "Unlimited Storage", value: "No limits", icon: <Cloud className="w-5 h-5" /> },
    { feature: "File Size Limit", value: "10GB per file", icon: <Upload className="w-5 h-5" /> },
    { feature: "Version History", value: "Unlimited", icon: <Database className="w-5 h-5" /> },
    { feature: "Uptime SLA", value: "99.99%", icon: <Award className="w-5 h-5" /> }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$9",
      originalPrice: "$15",
      period: "per month",
      description: "Perfect for individuals and small teams",
      features: [
        "Unlimited storage",
        "End-to-end encryption",
        "Cross-platform sync",
        "Version history",
        "Basic collaboration",
        "Mobile apps",
        "Email support",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$19",
      originalPrice: "$32",
      period: "per month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Everything in Personal",
        "Advanced collaboration tools",
        "Team workspaces",
        "Advanced sharing controls",
        "Priority support",
        "Up to 10 user accounts",
        "Admin dashboard",
        "API access",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$49",
      originalPrice: "$79",
      period: "per month",
      description: "Complete solution for large organizations",
      features: [
        "Everything in Professional",
        "Unlimited user accounts",
        "Advanced security controls",
        "SSO integration",
        "24/7 dedicated support",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantees",
        "Compliance reporting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Rachel Green",
      company: "Creative Agency",
      role: "Creative Director",
      content: "Zion Cloud Vault has revolutionized how we manage our creative assets. The unlimited storage and seamless collaboration features are exactly what we needed.",
      rating: 5,
      avatar: "RG"
    },
    {
      name: "Tom Anderson",
      company: "Tech Startup",
      role: "CTO",
      content: "The security features are outstanding. We can confidently store sensitive documents knowing they're protected with military-grade encryption.",
      rating: 5,
      avatar: "TA"
    },
    {
      name: "Maria Garcia",
      company: "Consulting Firm",
      role: "Operations Manager",
      content: "The AI-powered search is incredible. I can find any document in seconds, even from years ago. It's like having a personal assistant for our files.",
      rating: 5,
      avatar: "MG"
    }
  ];

  const stats = [
    { number: "25,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.99%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "10TB+", label: "Data Protected", icon: <Cloud className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Cloud Vault - Secure Cloud Storage Solution | Zion Tech Group</title>
        <meta
          name="description"
          content="Secure cloud storage with unlimited capacity, end-to-end encryption, and advanced collaboration features. Protect your files with Zion Cloud Vault."
        />
        <meta
          name="keywords"
          content="cloud storage, file sharing, secure storage, collaboration, encryption, file sync, document management, team workspace"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
                  <Cloud className="w-4 h-4 text-indigo-400 mr-2" />
                  <span className="text-indigo-400 text-sm font-medium">Secure Storage</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Zion
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse">
                    {" "}Cloud Vault
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Secure cloud storage solution with unlimited capacity, end-to-end encryption, 
                  and advanced collaboration features. Protect your files with enterprise-grade security.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Cloud className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
                
                {/* Storage Features */}
                <div className="grid grid-cols-2 gap-4">
                  {storageFeatures.map((feature, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center mr-3">
                          {feature.icon}
                        </div>
                        <div className="text-lg font-bold text-white">{feature.value}</div>
                      </div>
                      <div className="text-sm text-gray-300">{feature.feature}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Storage Dashboard</h3>
                    <p className="text-gray-300">Manage your files securely</p>
                  </div>
                  
                  {/* Mock Storage Dashboard */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-300">Storage Used</span>
                        <span className="text-sm text-indigo-400">2.4 TB / Unlimited</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{width: '24%'}}></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-white mb-1">1,247</div>
                        <div className="text-sm text-gray-300">Files</div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-white mb-1">89</div>
                        <div className="text-sm text-gray-300">Folders</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">Recent Activity</span>
                        <span className="text-xs text-purple-400">12 files synced</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Advanced Storage Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to store, sync, and collaborate on your files with enterprise-grade security.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Secure Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the storage plan that fits your needs. All plans include unlimited storage and end-to-end encryption.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-indigo-500/50 shadow-2xl shadow-indigo-500/10'
                      : 'border-white/20 hover:border-indigo-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-lg text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <div className="text-sm text-gray-400 line-through">{plan.originalPrice}{plan.period}</div>
                    <p className="text-gray-300 text-sm mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                        : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
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
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Files Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of users already protecting their files with Zion Cloud Vault. 
              Start your free trial and experience unlimited, secure cloud storage.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-indigo-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-indigo-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-indigo-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/micro-saas"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All Solutions
                <Cloud className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}