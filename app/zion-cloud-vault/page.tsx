import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cloud, Lock, Shield, Zap, Users, BarChart3, CheckCircle, Star, Globe, Smartphone, Mail, ArrowRight, HardDrive, Upload, Download } from "lucide-react";

export default function ZionCloudVault() {
  const features = [
    {
      title: "Secure Cloud Storage",
      description: "Enterprise-grade cloud storage with end-to-end encryption and zero-knowledge architecture",
      icon: <Cloud className="w-6 h-6" />,
      benefits: ["End-to-end encryption", "Zero-knowledge architecture", "99.9% uptime", "Global CDN"]
    },
    {
      title: "Advanced File Management",
      description: "Intelligent file organization with AI-powered categorization and smart search",
      icon: <HardDrive className="w-6 h-6" />,
      benefits: ["AI categorization", "Smart search", "Version control", "File sharing"]
    },
    {
      title: "Collaboration Tools",
      description: "Real-time collaboration with team workspaces and document sharing",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Real-time sync", "Team workspaces", "Document sharing", "Comment system"]
    },
    {
      title: "Data Backup & Recovery",
      description: "Automated backup with point-in-time recovery and disaster recovery options",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Automated backup", "Point-in-time recovery", "Disaster recovery", "Data retention"]
    },
    {
      title: "Access Control",
      description: "Granular permissions and multi-factor authentication for maximum security",
      icon: <Lock className="w-6 h-6" />,
      benefits: ["Granular permissions", "MFA support", "SSO integration", "Audit logs"]
    },
    {
      title: "Analytics & Insights",
      description: "Comprehensive usage analytics and storage optimization recommendations",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Usage analytics", "Storage optimization", "Cost tracking", "Performance metrics"]
    }
  ];

  const storagePlans = [
    {
      name: "Personal",
      price: "$9",
      period: "per month",
      storage: "100GB",
      description: "Perfect for individuals and small teams",
      features: [
        "100GB secure storage",
        "End-to-end encryption",
        "Mobile & desktop apps",
        "File sharing",
        "Basic collaboration",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$29",
      period: "per month",
      storage: "1TB",
      description: "Ideal for growing businesses",
      features: [
        "1TB secure storage",
        "Advanced collaboration",
        "Team workspaces",
        "Admin dashboard",
        "Priority support",
        "API access",
        "Advanced security"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      storage: "10TB",
      description: "For large organizations",
      features: [
        "10TB+ secure storage",
        "Unlimited users",
        "Custom integrations",
        "Dedicated support",
        "On-premise options",
        "Compliance tools",
        "Custom branding",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: "Microsoft Office 365", icon: "📊" },
    { name: "Google Workspace", icon: "📝" },
    { name: "Slack", icon: "💬" },
    { name: "Zoom", icon: "📹" },
    { name: "Salesforce", icon: "☁️" },
    { name: "Dropbox", icon: "📁" },
    { name: "OneDrive", icon: "💾" },
    { name: "Box", icon: "📦" }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      company: "Creative Agency",
      role: "Creative Director",
      content: "Zion Cloud Vault has revolutionized how we manage our creative assets. The AI categorization saves us hours every week.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Mark Thompson",
      company: "Legal Firm",
      role: "Managing Partner",
      content: "The security features give us complete confidence in storing sensitive client documents. The compliance tools are excellent.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Sarah Davis",
      company: "Tech Startup",
      role: "CTO",
      content: "The collaboration features have improved our team productivity by 40%. The real-time sync is flawless.",
      rating: 5,
      avatar: "SD"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Cloud Vault - Secure Cloud Storage & Collaboration | Zion Tech Group</title>
        <meta
          name="description"
          content="Secure your data with Zion Cloud Vault. Enterprise-grade cloud storage with end-to-end encryption, collaboration tools, and AI-powered file management. Starting at $9/month."
        />
        <meta
          name="keywords"
          content="cloud storage, secure file sharing, collaboration tools, data backup, file management, cloud security, team workspace, document sharing"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-cloud-vault" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Cloud className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">#1 Secure Cloud Storage</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Zion
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 animate-pulse">
                {" "}Cloud Vault
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Secure your data with enterprise-grade cloud storage. End-to-end encryption, AI-powered file management, 
              and seamless collaboration tools designed for modern businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">256-bit</div>
                <div className="text-gray-300 text-sm">Encryption</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-teal-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">100,000+</div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300 text-sm">Integrations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Secure Cloud Storage
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to store, organize, and collaborate on your files securely. 
                Built with enterprise-grade security and designed for productivity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
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
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and platforms for a unified workflow experience.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="text-3xl mb-2">{integration.icon}</div>
                  <div className="text-sm text-gray-300 group-hover:text-blue-300 transition-colors">
                    {integration.name}
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
                Choose the storage plan that fits your needs. All plans include our core security features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {storagePlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-blue-500/50 shadow-2xl shadow-blue-500/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-blue-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                    <div className="text-blue-400 font-semibold text-lg">{plan.storage} Storage</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 shadow-lg hover:shadow-blue-500/25'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
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
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Data Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using Zion Cloud Vault to store, organize, and collaborate on their files securely. 
              Start your free trial today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-blue-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-blue-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-blue-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}