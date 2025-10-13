import { ArrowRight, Cloud, Lock, Shield, CheckCircle, Star, Zap, Globe, Database } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionCloudVault() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Secure Cloud Storage",
      description: "Enterprise-grade cloud storage with end-to-end encryption and 99.9% uptime"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Advanced Security",
      description: "Multi-layer security with zero-knowledge architecture and military-grade encryption"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Automated Backup",
      description: "Intelligent backup solutions with version control and disaster recovery"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Sync",
      description: "Seamless synchronization across all devices with conflict resolution"
    }
  ];

  const securityFeatures = [
    "End-to-end encryption (AES-256)",
    "Zero-knowledge architecture",
    "Multi-factor authentication",
    "Advanced access controls",
    "Audit logging and monitoring",
    "Compliance with GDPR, HIPAA, SOC 2",
    "Automated threat detection",
    "Secure file sharing"
  ];

  const pricingTiers = [
    {
      name: "Personal",
      price: "$99",
      period: "/month",
      features: [
        "Up to 1TB storage",
        "5 user accounts",
        "Basic security features",
        "Email support",
        "30-day version history"
      ]
    },
    {
      name: "Business",
      price: "$199",
      period: "/month",
      features: [
        "Up to 10TB storage",
        "50 user accounts",
        "Advanced security features",
        "Priority support",
        "1-year version history",
        "Team collaboration tools",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      features: [
        "Unlimited storage",
        "Unlimited users",
        "Enterprise security suite",
        "Dedicated support",
        "Unlimited version history",
        "Custom integrations",
        "White-label solution",
        "SLA guarantee"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Cloud Vault - Secure Cloud Storage Platform</title>
        <meta
          name="description"
          content="Secure your data with Zion Cloud Vault. Enterprise-grade cloud storage with end-to-end encryption, automated backup, and advanced security features."
        />
        <meta
          name="keywords"
          content="cloud storage, secure file storage, data backup, file synchronization, enterprise security, data protection"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mr-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Zion Cloud
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {" "}Vault
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Secure your most valuable data with enterprise-grade cloud storage. 
              End-to-end encryption, automated backup, and advanced security features for peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Secure Cloud Storage Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to protect and manage your data
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise-Grade Security
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{feature}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Security Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Encryption Level</span>
                    <span className="text-blue-400 font-semibold">AES-256</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Uptime</span>
                    <span className="text-blue-400 font-semibold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Data Centers</span>
                    <span className="text-blue-400 font-semibold">15+ Global</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Compliance</span>
                    <span className="text-blue-400 font-semibold">GDPR, HIPAA, SOC 2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Backup Frequency</span>
                    <span className="text-blue-400 font-semibold">Real-time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Storage Plan
              </h2>
              <p className="text-xl text-gray-300">
                Flexible storage solutions for individuals and businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                    tier.popular 
                      ? 'border-blue-400 bg-gradient-to-br from-blue-500/20 to-cyan-500/20' 
                      : 'border-white/20 hover:border-blue-400/50'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      tier.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Data Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses trusting Zion Cloud Vault with their most sensitive data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Security Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
