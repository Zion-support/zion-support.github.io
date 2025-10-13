import { ArrowRight, Cloud, Shield, Database, Zap, CheckCircle, Users, Clock, Target, Star, Lock, Upload, Download, RefreshCw } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionCloudVault() {
  const features = [
    {
      title: "Secure Cloud Storage",
      description: "Bank-level encryption for all your data with end-to-end security and zero-knowledge architecture for maximum privacy.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI-Powered Backup",
      description: "Intelligent backup scheduling that learns your usage patterns and automatically protects your most important files.",
      icon: <Database className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Synchronization",
      description: "Seamless file synchronization across all your devices with conflict resolution and version control management.",
      icon: <RefreshCw className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Advanced Access Control",
      description: "Granular permissions and role-based access control with audit trails and compliance reporting capabilities.",
      icon: <Lock className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      title: "99.99% Uptime",
      description: "Enterprise-grade reliability with guaranteed availability",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Unlimited Storage",
      description: "Scale from GB to PB with no storage limits",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "SOC 2 Compliant",
      description: "Enterprise-grade security with full compliance certification",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "1000+ Happy Users",
      description: "Trusted by businesses and individuals worldwide",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$199",
      period: "per month",
      description: "Perfect for individuals and small teams",
      features: [
        "1TB storage",
        "Basic encryption",
        "Email support",
        "Mobile apps",
        "File sharing"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$399",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "10TB storage",
        "Advanced encryption",
        "Priority support",
        "Team collaboration",
        "Admin dashboard",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored for large organizations",
      features: [
        "Unlimited storage",
        "Custom encryption",
        "Dedicated support",
        "On-premise deployment",
        "White-label options",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "ZionCloudVault has transformed how we manage our data. The AI-powered backup has saved us from several potential disasters.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "DataFlow Corp.",
      role: "CTO",
      content: "The security features are outstanding. We can finally store sensitive data in the cloud with complete confidence.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      role: "Creative Director",
      content: "The real-time sync across all our devices is flawless. Our team collaboration has never been smoother.",
      rating: 5
    }
  ];

  const storageStats = [
    {
      title: "Data Protected",
      value: "50PB+",
      description: "Total data under protection"
    },
    {
      title: "Files Synced",
      value: "1B+",
      description: "Files synchronized daily"
    },
    {
      title: "Uptime",
      value: "99.99%",
      description: "Service availability"
    },
    {
      title: "Security",
      value: "256-bit",
      description: "AES encryption standard"
    }
  ];

  return (
    <>
      <Helmet>
        <title>ZionCloudVault - Secure Cloud Storage & Backup | Zion Tech Group</title>
        <meta
          name="description"
          content="Secure your data with ZionCloudVault, the most advanced cloud storage and backup solution. AI-powered backup, real-time sync, and enterprise-grade security."
        />
        <meta
          name="keywords"
          content="cloud storage, secure backup, file sync, data protection, cloud vault, AI backup, enterprise storage, ZionCloudVault"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                #1 Secure Cloud Storage
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ZionCloud
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Vault
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The most secure cloud storage and backup solution for modern businesses. 
              Protect your data with AI-powered backup, real-time synchronization, and enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                View Storage Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Storage Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {storageStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-green-400 mb-2">{stat.title}</div>
                  <div className="text-gray-300 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose ZionCloudVault?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The most trusted cloud storage platform trusted by 1000+ users worldwide.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4 mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Storage Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to secure, sync, and manage your data in the cloud.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied users who trust ZionCloudVault with their most important data.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-green-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
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
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your storage needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-green-400 ring-2 ring-green-400/20' : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
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
              Ready to Secure Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 1000+ users already using ZionCloudVault to protect and sync their most important data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}