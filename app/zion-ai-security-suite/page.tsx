import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Zap, CheckCircle, Users, Target, Clock, AlertTriangle, Award, ArrowRight, Sparkles, Star } from 'lucide-react';

const ZionAISecuritySuitePage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent cyber threats in real-time.",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Real-time monitoring", "Behavioral analysis", "Anomaly detection", "Zero-day protection"]
    },
    {
      title: "Automated Incident Response",
      description: "Instant response to security incidents with automated containment and remediation.",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Auto containment", "Instant alerts", "Response playbooks", "Recovery automation"]
    },
    {
      title: "Compliance Monitoring",
      description: "Ensure compliance with GDPR, HIPAA, SOX, and other regulatory requirements.",
      icon: <CheckCircle className="w-8 h-8" />,
      benefits: ["GDPR compliance", "HIPAA monitoring", "SOX reporting", "Audit trails"]
    },
    {
      title: "Security Training Platform",
      description: "Educate your team with AI-powered security awareness training and simulations.",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Phishing simulations", "Security quizzes", "Progress tracking", "Certification programs"]
    }
  ];

const securityMetrics = [
    {
      title: "Threat Detection Rate",
      value: "99.9%",
      description: "Accuracy in detecting real threats",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Response Time",
      value: "< 30s",
      description: "Average incident response time",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "False Positives",
      value: "< 0.1%",
      description: "Minimal false positive rate",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Uptime SLA",
      value: "99.99%",
      description: "Guaranteed service availability",
      icon: <Award className="w-6 h-6" />
    }
  ];

const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 50 endpoints",
        "Basic threat detection",
        "Email support",
        "Standard reports",
        "1 admin account",]
        "Basic compliance monitoring"]
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Up to 500 endpoints",
        "Advanced AI detection",
        "Priority support",
        "Custom reports",
        "Up to 10 admin accounts",
        "Full compliance suite",
        "Security training platform",]
        "API access"]
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1999",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited endpoints",
        "AI-powered threat hunting",
        "24/7 dedicated support",
        "White-label reports",
        "Unlimited admin accounts",
        "Custom compliance frameworks",
        "Advanced training modules",
        "Full API access",]
        "Dedicated security consultant"]
      ],
      popular: false
    }
  ];

const testimonials = [
    {
      name: "David Kim",
      company: "SecureTech Corp",
      role: "CISO",
      content: "Zion AI Security Suite has reduced our security incidents by 85%. The AI threat detection is incredibly accurate.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Martinez",
      company: "FinanceFirst",
      role: "IT Director",
      content: "The compliance monitoring saved us from a potential GDPR violation. The automated reporting is a game-changer.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "James Wilson",
      company: "HealthTech Solutions",
      role: "Security Manager",
      content: "Our team's security awareness improved dramatically with the training platform. Highly recommend!",
      rating: 5,
      avatar: "JW"
    }
  ];

const complianceFrameworks = [
    { name: "GDPR", description: "General Data Protection Regulation" },
    { name: "HIPAA", description: "Health Insurance Portability and Accountability Act" },
    { name: "SOX", description: "Sarbanes-Oxley Act" },
    { name: "PCI DSS", description: "Payment Card Industry Data Security Standard" },
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "NIST", description: "National Institute of Standards and Technology" }
  ];
  return (
    <>
      <Helmet>
        <title>Zion AI Security Suite - Advanced Cybersecurity Platform | Zion Tech Group</title>
        <meta name="description" content="Protect your business with Zion AI Security Suite. AI-powered threat detection, automated incident response, and compliance monitoring. Start your free trial today!" />
        <meta name="keywords" content="cybersecurity, AI security, threat detection, incident response, compliance monitoring, security training, data protection, network security" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-security-suite" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          
        <div className="absolute inset-0 overflow-hidden">
            
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
        <div className="max-w-7xl mx-auto text-center relative z-10">
            
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-8 neon-border">
              <Shield className="w-5 h-5 text-red-400 mr-2 animate-pulse" />
              <span className="text-red-400 text-sm font-medium">#1 AI Security Platform 2024</span>
            </div>
            
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="holographic-text">
                Zion AI Security Suite
              </span>
            </h1>
            
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your business with advanced AI-powered cybersecurity. Detect threats, respond instantly, 
              and maintain compliance with our comprehensive security platform.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
    to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 group cyber-button"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
    to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group"
              >
                Watch Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            {/* Security Metrics */}
            
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {securityMetrics.map((metric, index) => (
                <div key={index} className="text-center group data-stream">
                  
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                    {metric.icon}
                  </div>
                  
        <div className="text-xl md: text-2xl font-bold text-white mb-2 holographic-text">{metric.value}</div>
                  
        <div className="text-gray-300 text-sm font-semibold mb-1">{metric.title}</div>
                  
        <div className="text-gray-400 text-xs">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Security Protection
              </h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered security features designed to protect your business from evolving cyber threats.
              </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
    key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 neon-border"
                >
                  
        <div className="flex items-center mb-6">
                    
        <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white mr-6 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  
          <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
        <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Compliance Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance Made Simple
              </h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay compliant with major regulatory frameworks with automated monitoring and reporting.
              </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <div
    key={index} className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/10 text-center"
                >
                  
        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {framework.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {framework.name}
                  </h3>
                  
          <p className="text-gray-300 text-sm">
                    {framework.description}
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
                Flexible pricing options designed to protect businesses of all sizes. Start with a free trial.
              </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
    key={index} className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 relative overflow-hidden ${
                    plan.popular 
                      ? 'border-red-500/50 ring-2 ring-red-500/20 neon-border' 
                      : 'border-white/20 hover: border-red-500/40'
                  }`}
                >
                  {plan.popular && (
                    
        <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                        <Star className="w-3 h-3" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
        <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    
          <p className="text-gray-300 mb-4">{plan.description}</p>
                    
        <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 group flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 cyber-button'
                        : 'border border-red-400 text-red-400 hover: bg-red-400 hover:text-slate-900'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Security Professionals
              </h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what security experts say about Zion AI Security Suite
              </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
    key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 neon-border"
                >
                  
        <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
          <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
        <div className="flex items-center">
                    
        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          
        <div className="max-w-4xl mx-auto text-center">
            
        <div className="bg-white/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-12 neon-border">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Secure Your Business Today
              </h2>
              
          <p className="text-xl text-gray-300 mb-8">
                Don't wait for a security breach. Protect your business with Zion AI Security Suite and sleep better at night.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
    to="/contact"
                  className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 group cyber-button"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
    to="/demo"
                  className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group"
                >
                  Schedule Demo
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ZionAISecuritySuitePage;