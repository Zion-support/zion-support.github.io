import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Lock, 
  Upload, 
  Download, 
  CheckCircle, 
  Zap, 
  Globe, 
  ArrowRight,
  Star,
  Play,
  Settings,
  Activity,
  Users,
  Clock,
  FileText,
  Smartphone,
  Server,
  Database,
  Folder,
  Search,
  Share2,
  Trash2,
  Eye
} from 'lucide-react';

const ZionCloudVault = () => {
  const [isDemoMode, setIsDemoMode] = useState(false);

  const features = [
    {
      title: "Secure Cloud Storage",
      description: "End-to-end encrypted cloud storage with military-grade security",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Sync",
      description: "Automatic synchronization across all your devices instantly",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Advanced Security",
      description: "Zero-knowledge encryption and multi-factor authentication",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Global Access",
      description: "Access your files from anywhere with our global CDN network",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals",
      features: [
        "100 GB storage",
        "Basic encryption",
        "2 device sync",
        "Email support",
        "File sharing",
        "Mobile apps"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Most popular for professionals",
      features: [
        "1 TB storage",
        "Advanced encryption",
        "Unlimited device sync",
        "Priority support",
        "Advanced sharing",
        "Version history",
        "API access",
        "Team collaboration"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Business",
      price: "$99",
      period: "/month",
      description: "For growing teams",
      features: [
        "5 TB storage",
        "Enterprise encryption",
        "Admin dashboard",
        "24/7 support",
        "Advanced analytics",
        "Custom integrations",
        "SSO support",
        "Compliance tools"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { label: "Files Stored", value: "1B+", icon: <FileText className="w-6 h-6" /> },
    { label: "Uptime", value: "99.99%", icon: <Activity className="w-6 h-6" /> },
    { label: "Global Users", value: "500K+", icon: <Users className="w-6 h-6" /> },
    { label: "Security Score", value: "A+", icon: <Shield className="w-6 h-6" /> }
  ];

  const demoFiles = [
    { name: "Project_Report.pdf", size: "2.4 MB", type: "PDF", date: "2 hours ago" },
    { name: "Presentation.pptx", size: "15.8 MB", type: "PowerPoint", date: "1 day ago" },
    { name: "Design_Assets.zip", size: "45.2 MB", type: "Archive", date: "3 days ago" },
    { name: "Meeting_Notes.txt", size: "1.2 MB", type: "Text", date: "1 week ago" }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Cloud Vault - Secure Cloud Storage Platform | Zion Tech Group</title>
        <meta name="description" content="Secure your data with Zion Cloud Vault - the most advanced encrypted cloud storage platform. Real-time sync, military-grade security, and global access. Starting at $19/month." />
        <meta name="keywords" content="cloud storage, secure storage, file sync, data encryption, cloud backup, file sharing, secure cloud" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-blue-400/30 mb-6">
                <Cloud className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-semibold">Secure Cloud Storage Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="holographic">Zion Cloud Vault</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Secure your data with the most advanced encrypted cloud storage platform. 
                Real-time sync, military-grade security, and global access.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={() => setIsDemoMode(!isDemoMode)}
                  className="neon-button neon-blue px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {isDemoMode ? 'Exit Demo' : 'Try Live Demo'}
                </button>
                <Link
                  to="/contact"
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Get Started
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full glass flex items-center justify-center text-blue-400">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Secure, Fast, and Reliable
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to store, sync, and share your files securely
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-8 hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        {isDemoMode && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="glass rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white">Cloud Vault Demo</h3>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm">
                      Online
                    </button>
                    <button className="px-4 py-2 bg-gray-600 text-white rounded-lg text-sm">
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="glass p-6 rounded-xl mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-white">My Files</h4>
                        <div className="flex space-x-2">
                          <button className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                            <Upload className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-green-500/20 text-green-400 rounded-lg">
                            <Folder className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {demoFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                            <div className="flex items-center space-x-3">
                              <FileText className="w-5 h-5 text-blue-400" />
                              <div>
                                <div className="text-white font-medium">{file.name}</div>
                                <div className="text-gray-400 text-sm">{file.size} • {file.date}</div>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <button className="p-1 text-gray-400 hover:text-white">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-1 text-gray-400 hover:text-white">
                                <Download className="w-4 h-4" />
                              </button>
                              <button className="p-1 text-gray-400 hover:text-white">
                                <Share2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="glass p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-white mb-4">Storage Usage</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm text-gray-300 mb-1">
                            <span>Used</span>
                            <span>2.4 GB / 1 TB</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: '24%'}}></div>
                          </div>
                        </div>
                        <div className="text-center text-cyan-400 font-semibold">24% Used</div>
                      </div>
                    </div>
                    
                    <div className="glass p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-white mb-4">Recent Activity</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-sm">
                          <Upload className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">Uploaded Project_Report.pdf</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm">
                          <Share2 className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300">Shared Design_Assets.zip</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm">
                          <Download className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-300">Downloaded Presentation.pptx</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Secure Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the storage plan that fits your needs. All plans include our core security features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative glass rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-blue-400/50 neon-glow' 
                    : 'border-white/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Secure Your Data Today
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of users already protecting their data with Zion Cloud Vault.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="neon-button neon-blue px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
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
};

export default ZionCloudVault;
