'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Shield, Code, AlertTriangle, Lock, Eye, Search, FileText, Zap, Users, Clock, Award, Brain, Target, BarChart, Globe, Heart, Home, Video, Palette, Settings, Database, Activity, Bug, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import Footer from '../components/Footer';

const AICodeSecurityAuditorPage: React.FC = () => {
  const features = [
    "Automated Vulnerability Detection",
    "Real-time Security Scanning",
    "OWASP Top 10 Compliance",
    "Code Quality Analysis",
    "Dependency Vulnerability Check",
    "Secrets & Credentials Detection",
    "SAST & DAST Integration",
    "Custom Security Rules",
    "CI/CD Pipeline Integration",
    "Detailed Security Reports",
    "Remediation Recommendations",
    "Compliance Dashboard"
  ];

  const securityChecks = [
    {
      category: "Authentication & Authorization",
      icon: Lock,
      checks: [
        "Weak password policies",
        "Missing authentication",
        "Insecure session management",
        "Privilege escalation vulnerabilities",
        "JWT token vulnerabilities"
      ]
    },
    {
      category: "Input Validation",
      icon: AlertTriangle,
      checks: [
        "SQL injection vulnerabilities",
        "XSS (Cross-Site Scripting)",
        "CSRF protection missing",
        "Path traversal attacks",
        "Command injection risks"
      ]
    },
    {
      category: "Data Protection",
      icon: Shield,
      checks: [
        "Sensitive data exposure",
        "Insecure data storage",
        "Missing encryption",
        "PII data handling",
        "GDPR compliance issues"
      ]
    },
    {
      category: "API Security",
      icon: Code,
      checks: [
        "API authentication bypass",
        "Rate limiting missing",
        "CORS misconfigurations",
        "API versioning issues",
        "Endpoint security gaps"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Developer",
      price: "$49",
      period: "/month",
      description: "Perfect for individual developers and small teams",
      features: [
        "Up to 5 repositories",
        "Basic vulnerability scanning",
        "OWASP Top 10 checks",
        "Email notifications",
        "Basic reporting",
        "Community support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Team",
      price: "$199",
      period: "/month",
      description: "Ideal for development teams and growing companies",
      features: [
        "Up to 25 repositories",
        "Advanced vulnerability scanning",
        "Custom security rules",
        "CI/CD integration",
        "Detailed security reports",
        "Priority support",
        "Team collaboration tools",
        "Compliance reporting"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "For large organizations with complex security needs",
      features: [
        "Unlimited repositories",
        "Comprehensive security scanning",
        "Custom security policies",
        "Advanced CI/CD integration",
        "Executive dashboards",
        "Dedicated support",
        "On-premise deployment",
        "SLA guarantee",
        "Custom integrations",
        "Security training"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      role: "Security Engineer",
      company: "FinTech Solutions",
      content: "The AI Code Security Auditor has been instrumental in identifying vulnerabilities before they reach production. It's caught several critical security issues that would have been expensive to fix later.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Maria Rodriguez",
      role: "CTO",
      company: "HealthTech Inc.",
      content: "Compliance is crucial in healthcare. This tool helps us maintain HIPAA compliance and identify potential security risks in our codebase before they become problems.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "James Wilson",
      role: "Lead Developer",
      company: "E-commerce Platform",
      content: "The integration with our CI/CD pipeline is seamless. Every code commit is automatically scanned, and we get immediate feedback on security issues. It's saved us countless hours of manual security reviews.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const complianceStandards = [
    { name: "OWASP Top 10", status: "Fully Compliant", icon: Shield },
    { name: "PCI DSS", status: "Fully Compliant", icon: CreditCard },
    { name: "SOC 2", status: "Fully Compliant", icon: CheckCircle2 },
    { name: "ISO 27001", status: "Fully Compliant", icon: Award },
    { name: "GDPR", status: "Fully Compliant", icon: Globe },
    { name: "HIPAA", status: "Fully Compliant", icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>AI Security Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Code Security Auditor
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your codebase with AI-powered security auditing. Detect vulnerabilities, 
              ensure compliance, and maintain security standards automatically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                Start Free Scan
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-red-400 text-red-400 font-semibold py-4 px-8 rounded-xl hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">99.7%</div>
                <div className="text-gray-400">Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-400">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10k+</div>
                <div className="text-gray-400">Vulnerabilities Found</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-400">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Checks Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Analysis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered auditor performs deep security analysis across multiple categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityChecks.map((category, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.checks.map((check, checkIndex) => (
                    <div key={checkIndex} className="flex items-center text-sm text-gray-300">
                      <AlertCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      {check}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven security analysis with comprehensive coverage and detailed reporting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Advanced AI algorithms provide comprehensive security analysis with detailed remediation guidance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Compliance Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ensure your code meets industry security standards and compliance requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <standard.icon className="w-6 h-6 text-green-400" />
                    <h3 className="text-lg font-semibold text-white">{standard.name}</h3>
                  </div>
                  <span className="text-green-400 text-sm font-medium">{standard.status}</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Automated compliance checking ensures your code meets {standard.name} requirements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Secure Your Code Today
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your development needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`cyber-card p-8 hover:scale-105 transition-all duration-300 relative ${
                  tier.popular ? 'ring-2 ring-red-400/50' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-400 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 text-lg">{tier.period}</span>
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}>
                    {tier.cta}
                  </button>
                </div>
                
                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-red-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Security Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how security professionals rely on our AI-powered auditing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Codebase Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start your free security scan and discover vulnerabilities before they become problems. 
            No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Free Scan
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-red-400 text-red-400 font-semibold py-4 px-8 rounded-xl hover:bg-red-400 hover:text-slate-900 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            <p>Questions? Contact us at <a href="tel:+13024640950" className="text-red-400 hover:text-red-300">+1 (302) 464-0950</a></p>
            <p>or email <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AICodeSecurityAuditorPage;