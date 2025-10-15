import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  Play,
  Activity,
  Brain,
  Target,
  Zap,
  TrendingUp,
  Users,
  Calendar,
  BarChart3,
  Lock,
  Eye,
  AlertTriangle,
  FileShield
} from 'lucide-react';

const AiCybersecuritySuitePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms that detect and prevent cyber threats in real-time before they can cause damage.",
      benefits: ["Real-time monitoring", "Behavioral analysis", "Anomaly detection", "Predictive threat modeling"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zero Trust Architecture",
      description: "Implement zero trust security model with continuous verification and least privilege access controls.",
      benefits: ["Identity verification", "Access controls", "Network segmentation", "Continuous monitoring"]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Security Monitoring",
      description: "24/7 security operations center with AI-powered monitoring and incident response capabilities.",
      benefits: ["24/7 SOC", "Incident response", "Threat hunting", "Forensic analysis"]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Protection",
      description: "Comprehensive data encryption, backup, and recovery solutions to protect your critical business data.",
      benefits: ["End-to-end encryption", "Automated backups", "Disaster recovery", "Compliance management"]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Vulnerability Management",
      description: "Automated vulnerability scanning, assessment, and remediation to keep your systems secure.",
      benefits: ["Automated scanning", "Risk assessment", "Patch management", "Compliance reporting"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Incident Response",
      description: "Rapid incident detection, containment, and recovery with AI-powered response automation.",
      benefits: ["Automated response", "Containment strategies", "Recovery procedures", "Post-incident analysis"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$199",
      period: "month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic threat detection",
        "Email security",
        "Firewall management",
        "Monthly security reports",
        "Email support",
        "Up to 50 users"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "month",
      description: "Ideal for growing businesses and enterprises",
      features: [
        "Advanced AI threat detection",
        "24/7 SOC monitoring",
        "Incident response",
        "Vulnerability management",
        "Priority support",
        "Up to 500 users",
        "Compliance reporting",
        "Security training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Full AI security suite",
        "Dedicated security team",
        "Custom integrations",
        "24/7 dedicated support",
        "Unlimited users",
        "Advanced compliance",
        "White-label options",
        "Custom development"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      company: "Financial Services Inc.",
      role: "CISO",
      content: "AI Cybersecurity Suite has prevented 15 major security incidents in the past year. The AI threat detection is incredibly accurate and has saved us millions in potential damages.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      company: "Healthcare Solutions",
      role: "IT Security Director",
      content: "The 24/7 SOC monitoring and incident response capabilities have given us peace of mind. We've achieved 99.9% uptime and zero security breaches since implementation.",
      rating: 5
    },
    {
      name: "David Thompson",
      company: "E-commerce Platform",
      role: "Security Manager",
      content: "The vulnerability management and compliance reporting features have streamlined our security operations. We're now fully compliant with industry standards.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite - Advanced Security Solutions | Zion Tech Group</title>
        <meta name="description" content="Protect your business with AI-powered cybersecurity solutions including threat detection, zero trust architecture, and 24/7 monitoring. Prevent 99.9% of cyber threats." />
        <meta name="keywords" content="AI cybersecurity, threat detection, zero trust security, SOC monitoring, incident response, vulnerability management, data protection" />
        <meta property="og:title" content="AI Cybersecurity Suite - Zion Tech Group" />
        <meta property="og:description" content="AI-powered cybersecurity platform with advanced threat detection and 24/7 monitoring" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-cybersecurity-suite" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 AI Security Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Cybersecurity Suite
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Protect your business with AI-powered cybersecurity solutions including threat detection, 
                  zero trust architecture, and 24/7 monitoring. Prevent 99.9% of cyber threats.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Get Security Assessment
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Advanced Security Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive cybersecurity solutions powered by artificial intelligence and machine learning.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-card"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Security Plans
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the security plan that fits your organization's needs. All plans include our core AI security features.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    What Our Clients Say
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join thousands of organizations that trust our AI-powered cybersecurity solutions.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Secure Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Get a free security assessment and see how our AI-powered cybersecurity solutions can protect your organization. 
                  No obligation required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Get Free Assessment
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AiCybersecuritySuitePage;