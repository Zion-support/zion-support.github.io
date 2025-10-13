import { ArrowRight, Shield, Zap, BarChart3, Users, Target, Globe, Star, CheckCircle, Mail, Smartphone, MapPin, TrendingUp, FileCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionComplianceManager() {
  const features = [
    {
      title: "Automated Compliance Monitoring",
      description: "Continuous monitoring of regulatory requirements with real-time alerts and automated compliance reporting",
      icon: <Shield className="w-6 h-6" />,
      benefit: "100% compliance coverage"
    },
    {
      title: "AI-Powered Risk Assessment",
      description: "Intelligent risk analysis that identifies potential compliance issues before they become problems",
      icon: <Target className="w-6 h-6" />,
      benefit: "Proactive risk management"
    },
    {
      title: "Document Management",
      description: "Centralized document storage with version control, approval workflows, and audit trails",
      icon: <FileCheck className="w-6 h-6" />,
      benefit: "Organized documentation"
    },
    {
      title: "Regulatory Updates",
      description: "Automatic updates on regulatory changes with impact analysis and recommended actions",
      icon: <Zap className="w-6 h-6" />,
      benefit: "Stay current"
    },
    {
      title: "Audit Preparation",
      description: "Streamlined audit preparation with automated evidence collection and compliance reports",
      icon: <BarChart3 className="w-6 h-6" />,
      benefit: "Faster audits"
    },
    {
      title: "Team Collaboration",
      description: "Multi-user compliance management with role-based access and collaborative workflows",
      icon: <Users className="w-6 h-6" />,
      benefit: "Seamless teamwork"
    }
  ];

  const complianceTypes = [
    {
      name: "GDPR Compliance",
      description: "Data protection and privacy regulations for EU businesses",
      icon: <Shield className="w-8 h-8" />,
      coverage: "100%"
    },
    {
      name: "HIPAA Compliance",
      description: "Healthcare data protection and patient privacy regulations",
      icon: <FileCheck className="w-8 h-8" />,
      coverage: "100%"
    },
    {
      name: "SOC 2 Compliance",
      description: "Security and availability controls for service organizations",
      icon: <Target className="w-8 h-8" />,
      coverage: "100%"
    },
    {
      name: "ISO 27001",
      description: "Information security management system standards",
      icon: <Globe className="w-8 h-8" />,
      coverage: "100%"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Basic compliance monitoring",
        "Document management",
        "Email support",
        "5 team members",
        "Standard templates",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$249",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Advanced compliance monitoring",
        "AI risk assessment",
        "Priority support",
        "25 team members",
        "Custom workflows",
        "Advanced reporting",
        "Regulatory updates"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "per month",
      description: "For large organizations",
      features: [
        "Full compliance suite",
        "Custom integrations",
        "Dedicated support",
        "24/7 phone support",
        "Unlimited team members",
        "White-label options",
        "Audit preparation"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "Healthcare Provider",
      role: "Compliance Officer",
      content: "Zion Compliance Manager has made HIPAA compliance effortless. We passed our audit with flying colors and saved months of preparation time.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Mark Thompson",
      company: "SaaS Company",
      role: "Security Director",
      content: "The automated monitoring is incredible. We're always compliant and never miss a regulatory update. It's like having a compliance team on autopilot.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Lisa Chen",
      company: "Financial Services",
      role: "Risk Manager",
      content: "The AI risk assessment has identified issues we never knew existed. We've reduced our compliance risk by 80% since implementing this platform.",
      rating: 5,
      avatar: "LC"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Compliance Manager - AI-Powered Compliance Management Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Streamline compliance with Zion Compliance Manager. AI-powered monitoring, automated reporting, and regulatory updates for GDPR, HIPAA, SOC 2, and ISO 27001 compliance."
        />
        <meta
          name="keywords"
          content="compliance management, regulatory compliance, GDPR compliance, HIPAA compliance, SOC 2 compliance, ISO 27001, risk management, audit preparation"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-compliance-manager" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border border-emerald-500/30 mb-6">
              <Shield className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-emerald-400 text-sm font-medium">Compliance Management Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-cyan-400">
                Zion Compliance Manager
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-purple-400 to-cyan-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most intelligent compliance management platform powered by AI. Automate compliance monitoring, 
              manage regulatory requirements, and ensure 100% compliance with advanced analytics and reporting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Shield className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                <div className="text-gray-300 text-sm">Compliance Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
                <div className="text-gray-300 text-sm">Risk Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
                <div className="text-gray-300 text-sm">Faster Audits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Automated Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Complete Compliance Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay compliant with all major regulations and standards.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-emerald-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="flex items-center justify-center text-emerald-400 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {type.coverage} Coverage
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Compliance Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to maintain compliance and reduce risk.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-emerald-400 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Compliance Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Scale your compliance management with our flexible pricing plans.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-emerald-500/50 shadow-2xl shadow-emerald-500/20' 
                      : 'border-white/20 hover:border-emerald-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-emerald-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-purple-600 text-white hover:from-emerald-600 hover:to-purple-700 shadow-lg hover:shadow-emerald-500/25'
                        : 'border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Compliance Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what compliance professionals say about Zion Compliance Manager
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-emerald-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ensure Compliance Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses using Zion Compliance Manager to maintain compliance and reduce risk. 
              Start your free trial today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-emerald-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-emerald-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-emerald-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Shield className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}