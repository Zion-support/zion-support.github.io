import { ArrowRight, Shield, CheckCircle, FileText, Target, Zap, BarChart3, Clock, DollarSign, Users, Settings, Globe, AlertTriangle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionComplianceManager() {
  const features = [
    {
      title: "Automated Compliance Monitoring",
      description: "AI-powered compliance monitoring that tracks regulatory requirements and alerts you to changes",
      icon: <Shield className="w-6 h-6" />,
      included: true
    },
    {
      title: "Regulatory Framework Support",
      description: "Support for GDPR, HIPAA, SOC 2, PCI DSS, and 50+ other regulatory frameworks",
      icon: <FileText className="w-6 h-6" />,
      included: true
    },
    {
      title: "Risk Assessment",
      description: "Automated risk assessments with scoring and recommendations for compliance improvements",
      icon: <Target className="w-6 h-6" />,
      included: true
    },
    {
      title: "Document Management",
      description: "Centralized document management with version control, approval workflows, and audit trails",
      icon: <FileText className="w-6 h-6" />,
      included: true
    },
    {
      title: "Audit Preparation",
      description: "Automated audit preparation with compliance reports, evidence collection, and gap analysis",
      icon: <CheckCircle className="w-6 h-6" />,
      included: true
    },
    {
      title: "Team Training",
      description: "Compliance training modules with progress tracking and certification management",
      icon: <Users className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 49,
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 3 compliance frameworks",
        "Basic monitoring",
        "Email support",
        "1 user account",
        "Standard reports",
        "Basic training modules"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 129,
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10 compliance frameworks",
        "Advanced monitoring",
        "Priority support",
        "Up to 10 user accounts",
        "Advanced reports",
        "Premium training modules",
        "Risk assessment",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 299,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited compliance frameworks",
        "Custom monitoring",
        "Dedicated support",
        "Unlimited users",
        "Custom reports",
        "White-label solution",
        "Custom integrations",
        "SSO integration"
      ],
      popular: false
    }
  ];

  const complianceStats = [
    { number: "95%", label: "Compliance Success Rate", icon: <Shield className="w-6 h-6" /> },
    { number: "50+", label: "Regulatory Frameworks", icon: <FileText className="w-6 h-6" /> },
    { number: "80%", label: "Time Saved on Audits", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Compliance Monitoring", icon: <AlertTriangle className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Healthcare Provider",
      role: "Compliance Officer",
      content: "Zion Compliance Manager has been a game-changer for our HIPAA compliance. We've achieved 95% compliance success rate and significantly reduced our audit preparation time.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Financial Services",
      role: "Risk Manager",
      content: "The automated risk assessment and monitoring features have helped us stay ahead of regulatory changes. We've never been more confident in our compliance posture.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Lisa Rodriguez",
      company: "E-commerce Platform",
      role: "Data Protection Officer",
      content: "Managing GDPR compliance used to be overwhelming. Now we have automated monitoring, document management, and audit preparation all in one platform.",
      rating: 5,
      avatar: "LR"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Compliance Manager - AI-Powered Compliance Management Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Streamline compliance with Zion Compliance Manager - the ultimate AI-powered compliance platform. Automated monitoring, risk assessment, and audit preparation. Starting at $49/month."
        />
        <meta
          name="keywords"
          content="compliance management, regulatory compliance, risk assessment, audit preparation, GDPR, HIPAA, SOC 2, compliance monitoring, Zion Compliance Manager"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 via-gray-500/10 to-slate-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(71,85,105,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-500/20 to-gray-500/20 border border-slate-500/30 mb-6">
              <Shield className="w-4 h-4 text-slate-400 mr-2" />
              <span className="text-slate-400 text-sm font-medium">#1 Compliance Management Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-400 to-slate-400 animate-pulse">
                Zion Compliance Manager
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 via-gray-400 to-slate-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate AI-powered compliance management platform that helps you stay compliant with regulations, 
              manage risks, and prepare for audits. Automated monitoring, risk assessment, and comprehensive reporting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-slate-500 to-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-slate-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-slate-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-slate-400 text-slate-400 px-8 py-4 rounded-lg font-semibold hover:bg-slate-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>

            {/* Compliance Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {complianceStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-slate-500/20 to-gray-500/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-400 mb-2">{stat.number}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-gray-400">
                  Advanced Compliance Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage compliance effectively
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-slate-500 to-gray-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-slate-300 transition-colors">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-gray-400">
                  Compliance Management Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your compliance needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-slate-500/50 bg-gradient-to-br from-slate-500/10 to-gray-500/10' 
                      : 'border-white/20 hover:border-slate-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-slate-500 to-gray-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-slate-400">${plan.price}</span>
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
                        ? 'bg-gradient-to-r from-slate-500 to-gray-600 text-white hover:from-slate-600 hover:to-gray-700 shadow-lg hover:shadow-slate-500/25'
                        : 'border border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-slate-900'
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
                Trusted by Compliance Officers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about Zion Compliance Manager
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Shield key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-slate-500 to-gray-500 flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-900/30 to-gray-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Managing Compliance Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses who use Zion Compliance Manager to stay compliant. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-slate-500 to-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-slate-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-slate-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-slate-400 text-slate-400 px-8 py-4 rounded-lg font-semibold hover:bg-slate-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
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