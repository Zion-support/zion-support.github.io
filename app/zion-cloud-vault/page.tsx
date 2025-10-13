import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Check, 
  Star, 
  Cloud, 
  Lock, 
  Users, 
  Share2, 
  Zap, 
  Globe, 
  Database, 
  Smartphone,
  Award,
  Sparkles,
  Mail,
  MapPin,
  Clock,
  TrendingUp,
  Settings,
  Monitor,
  FileText,
  Key,
  Activity,
  Download,
  Upload,
  Folder,
  Search
} from "lucide-react";

const ZionCloudVault = () => {
  const features = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "End-to-End Encryption",
      description: "Military-grade encryption protects your files both in transit and at rest with AES-256 encryption."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Real-time Collaboration",
      description: "Work together seamlessly with real-time editing, comments, and version control for all file types."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Organization",
      description: "Smart file organization with AI that automatically categorizes, tags, and suggests file locations."
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Advanced Sharing Controls",
      description: "Granular permission controls with password protection, expiration dates, and access tracking."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Version Control & History",
      description: "Complete file history with unlimited versioning and one-click restore to any previous version."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Sync",
      description: "Instant synchronization across all devices with offline access and conflict resolution."
    }
  ];

  const storagePlans = [
    {
      name: "Personal",
      storage: "1TB",
      price: "$9",
      period: "per month",
      description: "Perfect for individuals and freelancers",
      features: [
        "1TB secure storage",
        "End-to-end encryption",
        "Mobile & desktop apps",
        "Basic sharing",
        "Version history (30 days)",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Business",
      storage: "5TB",
      price: "$29",
      period: "per month",
      description: "Ideal for small to medium businesses",
      features: [
        "5TB secure storage",
        "Advanced collaboration tools",
        "Admin dashboard",
        "Advanced sharing controls",
        "Version history (1 year)",
        "Priority support",
        "Custom branding",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      storage: "Unlimited",
      price: "$99",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited storage",
        "Advanced security features",
        "Dedicated support team",
        "Custom integrations",
        "Unlimited version history",
        "24/7 phone support",
        "White-label options",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: "Microsoft Office", logo: "MO" },
    { name: "Google Workspace", logo: "GW" },
    { name: "Slack", logo: "SL" },
    { name: "Trello", logo: "TR" },
    { name: "Asana", logo: "AS" },
    { name: "Jira", logo: "JI" },
    { name: "Salesforce", logo: "SF" },
    { name: "HubSpot", logo: "HS" }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      company: "Creative Agency",
      role: "Creative Director",
      content: "Zion Cloud Vault has revolutionized how our team collaborates. The AI organization feature saves us hours every week, and the real-time sync is flawless.",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "Mark Wilson",
      company: "Legal Firm",
      role: "Managing Partner",
      content: "The security features give us complete confidence in storing sensitive client documents. The compliance features are exactly what we needed for our practice.",
      rating: 5,
      avatar: "MW"
    },
    {
      name: "Sarah Davis",
      company: "Marketing Consultancy",
      role: "Operations Manager",
      content: "The version control and collaboration features are incredible. We can work on projects simultaneously without any conflicts, and the file organization is intuitive.",
      rating: 5,
      avatar: "SD"
    }
  ];

  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "AES-256 Encryption",
      description: "Military-grade encryption for maximum security",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "Zero-Knowledge Architecture",
      description: "We can't access your files even if we wanted to",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SOC 2 Compliant",
      description: "Meets highest industry security standards",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Activity Monitoring",
      description: "Track all file access and modifications",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Cloud Vault - Secure Cloud Storage & Collaboration | Zion Tech Group</title>
        <meta
          name="description"
          content="Enterprise-grade cloud storage with AI-powered organization, real-time collaboration, and military-grade security. Start from $9/month."
        />
        <meta
          name="keywords"
          content="cloud storage, file sharing, collaboration, encryption, document management, version control, secure storage"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-cloud-vault" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                  <Cloud className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-purple-400 text-sm font-medium">Secure Cloud Storage & Collaboration</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Zion Cloud
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {" "}Vault
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Enterprise-grade cloud storage with advanced security, real-time collaboration, 
                  and AI-powered file organization. Keep your data safe while working seamlessly with your team.
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
                    Watch Demo
                    <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Cloud className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Cloud Storage Dashboard</h3>
                    <p className="text-gray-300">Secure file management</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <div className="flex items-center">
                        <Folder className="w-4 h-4 text-purple-400 mr-3" />
                        <span className="text-sm text-white">Storage Used</span>
                      </div>
                      <span className="text-purple-400 text-sm font-semibold">2.4GB / 5GB</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-pink-500/10 rounded-lg border border-pink-500/20">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-pink-400 mr-3" />
                        <span className="text-sm text-white">Active Collaborators</span>
                      </div>
                      <span className="text-pink-400 text-sm font-semibold">12 users</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <div className="flex items-center">
                        <Share2 className="w-4 h-4 text-blue-400 mr-3" />
                        <span className="text-sm text-white">Shared Files</span>
                      </div>
                      <span className="text-blue-400 text-sm font-semibold">47 files</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <div className="flex items-center">
                        <Lock className="w-4 h-4 text-green-400 mr-3" />
                        <span className="text-sm text-white">Security Status</span>
                      </div>
                      <span className="text-green-400 text-sm font-semibold">Protected</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Last sync</div>
                    <div className="text-lg font-semibold text-purple-400">Just now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Storage & Collaboration Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to store, organize, and collaborate on your files securely.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your data is protected with military-grade security and industry-leading compliance standards.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite productivity tools and work seamlessly across platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">{integration.logo}</span>
                  </div>
                  <div className="text-sm text-gray-300">{integration.name}</div>
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
                Choose the storage plan that fits your needs. All plans include 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {storagePlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ${
                    plan.popular ? 'ring-2 ring-purple-500/50' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-300 font-normal">/{plan.period}</span>
                    </div>
                    <div className="text-lg text-pink-400 font-semibold mb-2">{plan.storage} Storage</div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
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

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Files Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of teams already using Zion Cloud Vault for secure file storage and collaboration. 
              Start your free trial today and experience the difference.
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
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
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
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-purple-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionCloudVault;