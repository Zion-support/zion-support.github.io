import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, CheckCircle, Star, Clock, DollarSign, Zap, Brain, Shield, Key, Eye, EyeOff, Copy, RefreshCw, AlertTriangle, BarChart3, Users, Award, ArrowRight, Sparkles, Target, TrendingUp, Smartphone, Monitor, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIPasswordManagerPage = () => {
  const features = [
    {
      title: "AI-Powered Password Generation",
      description: "Advanced AI creates ultra-secure passwords that are both strong and memorable, adapting to your preferences and security requirements",
      icon: <Brain className="w-6 h-6" />,
      stats: "256-bit encryption"
    },
    {
      title: "Smart Breach Detection",
      description: "AI continuously monitors the dark web and data breaches to alert you immediately if any of your passwords are compromised",
      icon: <AlertTriangle className="w-6 h-6" />,
      stats: "Real-time monitoring"
    },
    {
      title: "Biometric Authentication",
      description: "Secure your vault with fingerprint, face recognition, or voice authentication for maximum security and convenience",
      icon: <Shield className="w-6 h-6" />,
      stats: "99.9% accuracy"
    },
    {
      title: "Auto-Fill & Auto-Login",
      description: "Intelligent auto-fill that learns your patterns and securely fills forms and login fields across all your devices and browsers",
      icon: <Zap className="w-6 h-6" />,
      stats: "Instant login"
    },
    {
      title: "Password Health Scoring",
      description: "AI analyzes your password strength, reusability, and security posture, providing actionable recommendations for improvement",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "Comprehensive analysis"
    },
    {
      title: "Secure Sharing",
      description: "Safely share passwords and sensitive information with team members using military-grade encryption and access controls",
      icon: <Users className="w-6 h-6" />,
      stats: "Zero-knowledge sharing"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$4.99",
      period: "/month",
      description: "Perfect for individuals and families",
      features: [
        "Unlimited passwords",
        "AI password generation",
        "Biometric authentication",
        "Auto-fill & auto-login",
        "Breach monitoring",
        "Password health scoring",
        "2FA support",
        "1 user account",
        "Mobile & desktop apps"
      ],
      popular: false
    },
    {
      name: "Family",
      price: "$9.99",
      period: "/month",
      description: "Ideal for families and small teams",
      features: [
        "Everything in Personal",
        "Up to 6 user accounts",
        "Secure password sharing",
        "Family dashboard",
        "Child account controls",
        "Priority support",
        "Advanced security features",
        "Cloud backup",
        "Emergency access"
      ],
      popular: true
    },
    {
      name: "Business",
      price: "$19.99",
      period: "/month",
      description: "Complete solution for businesses and organizations",
      features: [
        "Everything in Family",
        "Unlimited user accounts",
        "Admin dashboard",
        "SSO integration",
        "Advanced reporting",
        "API access",
        "Custom security policies",
        "24/7 support",
        "Compliance reporting",
        "White-label options"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "2M+", label: "Passwords Secured", icon: <Lock className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-6 h-6" /> },
    { number: "256-bit", label: "AES Encryption", icon: <Key className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Marketing Agency",
      role: "Digital Marketing Manager",
      content: "This AI password manager is a game-changer! It generates incredibly strong passwords and I never have to remember them. The breach detection saved us from a potential security disaster.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Chen",
      company: "Tech Startup",
      role: "CTO",
      content: "We implemented this for our entire team and it's been fantastic. The admin dashboard gives us complete visibility into our security posture, and the auto-fill saves hours every day.",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Sarah Thompson",
      company: "Freelance Designer",
      role: "Creative Director",
      content: "As someone who works with multiple clients, I need to manage hundreds of passwords securely. This AI manager makes it effortless and gives me peace of mind.",
      rating: 5,
      avatar: "ST"
    }
  ];

  const securityFeatures = [
    {
      title: "Zero-Knowledge Architecture",
      description: "Your passwords are encrypted locally and we never have access to your data",
      icon: <Lock className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "End-to-End Encryption",
      description: "Military-grade AES-256 encryption protects your data in transit and at rest",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Multi-Factor Authentication",
      description: "Multiple layers of security including biometrics, hardware keys, and SMS",
      icon: <Key className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Regular Security Audits",
      description: "Continuous security testing and third-party audits ensure maximum protection",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Password Manager - Zion Tech Group | Secure Password Management"
        description="Advanced AI-powered password manager with biometric authentication, breach detection, and auto-fill. Secure your digital life with military-grade encryption and smart features."
        keywords="password manager, AI password generator, biometric authentication, password security, breach detection, auto-fill, password vault"
        canonical="https://ziontechgroup.com/ai-password-manager"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 AI-Powered Password Manager</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Password Manager
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Secure your digital life with AI-powered password management. Generate ultra-secure passwords, 
            detect breaches in real-time, and enjoy seamless auto-fill across all your devices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <Eye className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Protect your digital identity with cutting-edge AI-powered security features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                    {feature.stats}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Military-Grade Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your passwords are protected by the same encryption standards used by banks and governments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
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

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Security Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Secure your digital life with our flexible pricing plans
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-cyan-500/50 shadow-cyan-500/20 scale-105'
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Millions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our users say about our AI password manager
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Secure Your Digital Life Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join millions of users who trust our AI password manager to protect their most sensitive information. 
            Start your free trial today and experience the future of password security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Pricing
              <DollarSign className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPasswordManagerPage;