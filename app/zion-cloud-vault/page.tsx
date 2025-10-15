import { ArrowRight, Cloud, Lock, Upload, Download, Share, Shield, CheckCircle, Clock, DollarSign, Target, Zap, Globe, Users, Folder } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionCloudVault() {
  const features = [
    {
      title: "Secure Cloud Storage",
      description: "Military-grade encryption for your files with zero-knowledge architecture and end-to-end security",
      icon: <Cloud className="w-6 h-6" />,
      included: true
    },
    {
      title: "Real-time Sync",
      description: "Automatic synchronization across all your devices with conflict resolution and version control",
      icon: <Zap className="w-6 h-6" />,
      included: true
    },
    {
      title: "Advanced Sharing",
      description: "Secure file sharing with granular permissions, password protection, and expiration dates",
      icon: <Share className="w-6 h-6" />,
      included: true
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time editing, comments, and activity tracking",
      icon: <Users className="w-6 h-6" />,
      included: true
    },
    {
      title: "Backup & Recovery",
      description: "Automated backups with point-in-time recovery and ransomware protection",
      icon: <Shield className="w-6 h-6" />,
      included: true
    },
    {
      title: "Compliance Ready",
      description: "GDPR, HIPAA, and SOC 2 compliant with audit trails and data residency controls",
      icon: <CheckCircle className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: 9,
      period: "month",
      description: "Perfect for individuals",
      features: [
        "100 GB storage",
        "5 devices",
        "Basic sharing",
        "Email support",
        "30-day version history",
        "Standard encryption"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 29,
      period: "month",
      description: "Ideal for small teams",
      features: [
        "1 TB storage",
        "Unlimited devices",
        "Advanced sharing",
        "Priority support",
        "1-year version history",
        "Advanced encryption",
        "Team collaboration",
        "API access"
      ],
      popular: true
    },
    {
      name: "Business",
      price: 79,
      period: "month",
      description: "For growing businesses",
      features: [
        "5 TB storage",
        "Unlimited devices",
        "Enterprise sharing",
        "Dedicated support",
        "Unlimited version history",
        "Military-grade encryption",
        "Advanced admin controls",
        "SSO integration",
        "Compliance reporting"
      ],
      popular: false
    }
  ];

  const storageStats = [
    { number: "99.99%", label: "Uptime SLA", icon: <Cloud className="w-6 h-6" /> },
    { number: "256-bit", label: "AES Encryption", icon: <Lock className="w-6 h-6" /> },
    { number: "5x", label: "Faster Sync", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      company: "Creative Agency",
      role: "Creative Director",
      content: "Zion Cloud Vault has revolutionized how our team collaborates. The real-time sync and sharing features have made remote work seamless and secure.",
      rating: 5,
      avatar: "JA"
    },
    {
      name: "Mark Wilson",
      company: "Legal Firm",
      role: "Managing Partner",
      content: "The compliance features are outstanding. We can confidently store sensitive client documents knowing they're protected with military-grade encryption.",
      rating: 5,
      avatar: "MW"
    },
    {
      name: "Sarah Chen",
      company: "Startup Inc.",
      role: "CTO",
      content: "The API integration capabilities are fantastic. We've seamlessly integrated Zion Cloud Vault into our existing workflow without any disruption.",
      rating: 5,
      avatar: "SC"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Cloud Vault - Secure Cloud Storage & File Sharing | Zion Tech Group</title>
        <meta
          name="description"
          content="Secure your files with Zion Cloud Vault - the ultimate cloud storage solution. Military-grade encryption, real-time sync, team collaboration, and compliance features. Starting at $9/month."
        />
        <meta
          name="keywords"
          content="cloud storage, file sharing, secure storage, team collaboration, file sync, data backup, encryption, compliance, Zion Cloud Vault"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Cloud className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">#1 Secure Cloud Storage 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 animate-pulse">
                Zion Cloud Vault
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate secure cloud storage solution with military-grade encryption, real-time sync, 
              and advanced collaboration features. Keep your files safe and accessible anywhere.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>

            {/* Storage Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {storageStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Advanced Storage Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to store, sync, and share your files securely
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center mt-4">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-400 text-sm font-medium">Included in all plans</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Simple, Affordable Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the storage plan that fits your needs. All plans include our core security features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-cyan-500/10' 
                      : 'border-white/20 hover:border-blue-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-400">${plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Teams Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about Zion Cloud Vault
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Cloud key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Files Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join millions of users who trust Zion Cloud Vault with their most important files. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}