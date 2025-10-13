import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Lock, 
  Database, 
  Shield, 
  Zap, 
  CheckCircle, 
  Globe, 
  Brain,
  ArrowRight,
  Star,
  Clock,
  Target,
  Smartphone,
  Monitor,
  Server,
  Users,
  Award,
  Upload,
  Download,
  RefreshCw
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionCloudVault = () => {
  const features = [
    {
      title: "Secure Cloud Storage",
      description: "Enterprise-grade cloud storage with end-to-end encryption and 99.999% durability guarantee.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI-Powered Backup",
      description: "Intelligent backup scheduling and automated data protection using advanced AI algorithms.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Sync",
      description: "Seamless synchronization across all your devices with real-time updates and conflict resolution.",
      icon: <RefreshCw className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Advanced Security",
      description: "Zero-knowledge encryption, multi-factor authentication, and comprehensive access controls.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    }
  ];

  const storageFeatures = [
    {
      title: "Unlimited Storage",
      description: "Store unlimited files with no size restrictions",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Version Control",
      description: "Track file versions and restore previous versions",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "File Sharing",
      description: "Secure file sharing with password protection and expiration",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Team Collaboration",
      description: "Real-time collaboration tools for teams",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Mobile Access",
      description: "Access your files from any device, anywhere",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "API Integration",
      description: "Integrate with your existing applications",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals",
      features: [
        "1TB storage",
        "Basic encryption",
        "Mobile apps",
        "Email support",
        "File versioning",
        "Basic sharing"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$99",
      period: "/month",
      description: "Ideal for small teams",
      features: [
        "10TB storage",
        "Advanced encryption",
        "Team collaboration",
        "Priority support",
        "Advanced sharing",
        "Admin controls",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited storage",
        "Zero-knowledge encryption",
        "Custom integrations",
        "24/7 phone support",
        "Advanced analytics",
        "Compliance tools",
        "White-label solution"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "99.999%", label: "Durability SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "256-bit", label: "AES Encryption", icon: <Lock className="w-6 h-6" /> },
    { number: "50+", label: "Global Data Centers", icon: <Globe className="w-6 h-6" /> },
    { number: "1M+", label: "Files Protected", icon: <Database className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion Cloud Vault - Secure Cloud Storage & Backup Platform | Zion Tech Group"
        description="Secure your data with Zion Cloud Vault. Enterprise-grade cloud storage, AI-powered backup, and advanced security features for businesses of all sizes."
        keywords="cloud storage, secure backup, data protection, file sharing, cloud security, enterprise storage, Zion Cloud Vault"
        canonical="https://ziontechgroup.com/zion-cloud-vault"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Cloud className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">#1 Cloud Storage 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Zion Cloud Vault
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Secure your data with our enterprise-grade cloud storage platform. 
            AI-powered backup, real-time sync, and military-grade encryption.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Cloud className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Cloud Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to store, sync, and protect your data in the cloud.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Storage Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Storage Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced features for secure file storage and collaboration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {storageFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
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
              Storage Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the storage plan that fits your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-blue-500/50 ring-2 ring-blue-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
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
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Secure Your Data Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses trusting Zion Cloud Vault for their data storage needs. 
            Start your free trial and experience enterprise-grade security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Cloud className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionCloudVault;