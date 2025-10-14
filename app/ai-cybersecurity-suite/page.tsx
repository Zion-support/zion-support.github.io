import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Brain, Eye, Lock, AlertTriangle, CheckCircle, Star, Zap, Globe, BarChart3, Users, Clock, Target, Activity, FileText, Network, Server, Database, Cpu, Smartphone, Laptop, Monitor } from 'lucide-react'

const AICybersecuritySuitePage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms that detect and prevent cyber threats in real-time with 99.9% accuracy.'
    },
    {
      icon: <Eye className="w-6 h-6 text-emerald-400" />,
      title: 'Behavioral Analytics',
      description: 'Monitor user and system behavior patterns to identify anomalies and potential security breaches.'
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-400" />,
      title: 'Zero-Trust Architecture',
      description: 'Implement zero-trust security model with continuous verification and least-privilege access controls.'
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
      title: 'Threat Intelligence',
      description: 'Real-time threat intelligence feeds and automated response to emerging cyber threats.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
      title: 'Security Analytics',
      description: 'Comprehensive security dashboards with detailed reports and compliance monitoring.'
    },
    {
      icon: <Globe className="w-6 h-6 text-pink-400" />,
      title: 'Global Protection',
      description: 'Protect your infrastructure across multiple cloud providers and on-premises environments.'
    }
  ]

  const securityModules = [
    {
      icon: <Network className="w-8 h-8 text-cyan-400" />,
      title: 'Network Security',
      description: 'Advanced firewall, intrusion detection, and network monitoring with AI-powered analysis.',
      price: '$199/month',
      features: ['AI Firewall', 'Intrusion Detection', 'Network Monitoring', 'DDoS Protection']
    },
    {
      icon: <Server className="w-8 h-8 text-emerald-400" />,
      title: 'Endpoint Protection',
      description: 'Comprehensive endpoint security with AI-driven malware detection and response.',
      price: '$149/month',
      features: ['Malware Detection', 'Device Management', 'Data Loss Prevention', 'USB Control']
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Data Security',
      description: 'Protect sensitive data with encryption, access controls, and data loss prevention.',
      price: '$179/month',
      features: ['Data Encryption', 'Access Controls', 'Data Classification', 'Backup Security']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'Identity Management',
      description: 'Advanced identity and access management with multi-factor authentication and SSO.',
      price: '$129/month',
      features: ['Multi-Factor Auth', 'Single Sign-On', 'Privileged Access', 'User Provisioning']
    },
    {
      icon: <Monitor className="w-8 h-8 text-pink-400" />,
      title: 'Security Monitoring',
      description: '24/7 security operations center with AI-powered threat hunting and incident response.',
      price: '$299/month',
      features: ['24/7 Monitoring', 'Threat Hunting', 'Incident Response', 'Forensic Analysis']
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-400" />,
      title: 'Compliance Management',
      description: 'Automated compliance monitoring for GDPR, HIPAA, SOX, and other regulatory requirements.',
      price: '$159/month',
      features: ['GDPR Compliance', 'HIPAA Support', 'SOX Monitoring', 'Audit Reports']
    }
  ]

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic threat detection',
        'Email security',
        'Firewall protection',
        '24/7 monitoring',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI detection',
        'All security modules',
        'Behavioral analytics',
        'Incident response',
        'Priority support',
        'Compliance tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full AI suite',
        'Custom integrations',
        'Dedicated SOC team',
        'White-label options',
        'API access',
        'Custom training'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '99.9%', label: 'Threat Detection Accuracy', icon: <Shield className="w-6 h-6 text-cyan-400" /> },
    { number: '< 1ms', label: 'Response Time', icon: <Zap className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'Monitoring', icon: <Clock className="w-6 h-6 text-purple-400" /> },
    { number: '1000+', label: 'Threats Blocked Daily', icon: <AlertTriangle className="w-6 h-6 text-red-400" /> }
  ]

  const testimonials = [
    {
      name: 'David Kim',
      company: 'TechCorp Security',
      content: 'Zion Tech Group\'s AI Cybersecurity Suite has transformed our security posture. We\'ve reduced security incidents by 95% and improved our compliance scores significantly.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      company: 'Financial Services Inc.',
      content: 'The AI threat detection is incredible. It caught several sophisticated attacks that traditional security tools missed. Our data has never been more secure.',
      rating: 5
    },
    {
      name: 'Robert Johnson',
      company: 'Healthcare Systems',
      content: 'The compliance management features helped us achieve HIPAA compliance effortlessly. The automated reporting saves us hours every week.',
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite - Advanced AI Security Solutions | Zion Tech Group</title>
        <meta name="description" content="Protect your business with our AI-powered cybersecurity suite. Advanced threat detection, behavioral analytics, and 24/7 monitoring with 99.9% accuracy." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, behavioral analytics, compliance management, network security" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-cybersecurity-suite" />
      </Helmet>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-purple-500/20 text-red-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-red-400/30">
              <Shield className="w-4 h-4" />
              <span>AI-Powered Cybersecurity</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Advanced <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">AI Cybersecurity Suite</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Protect your business with cutting-edge AI-powered cybersecurity solutions. 
              Advanced threat detection, behavioral analytics, and 24/7 monitoring with 99.9% accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-red-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transform hover:scale-105"
              >
                <span>Get Security Assessment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-red-400 text-red-400 px-10 py-4 rounded-xl font-semibold hover:bg-red-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">AI Security?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven cybersecurity with our proven track record.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-red-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">Security Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive cybersecurity protection powered by advanced artificial intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
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

        {/* Security Modules Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-red-900/50 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Security <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">Modules</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive security modules that work together to protect your entire infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityModules.map((module, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {module.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {module.description}
                  </p>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-red-400 mb-2">
                      {module.price}
                    </div>
                    <div className="space-y-1">
                      {module.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link 
                      to="/contact"
                      className="block w-full mt-4 bg-gradient-to-r from-red-500 to-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/25"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Security <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security plan that fits your organization's needs. All plans include 24/7 monitoring.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-red-400/50 shadow-2xl shadow-red-500/20' 
                    : 'border-white/20 hover:border-red-400/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700'
                        : 'border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-gray-900'
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
        <section className="py-20 px-4 bg-gradient-to-br from-red-900/50 to-purple-900/50 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Join thousands of organizations that trust our AI-powered cybersecurity solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-red-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Secure Your <span className="bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-transparent">Digital Assets?</span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                Don't wait for a security breach. Protect your business with our AI-powered cybersecurity suite. 
                Get a free security assessment and see how we can protect your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/contact" 
                  className="group bg-white text-red-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Get Security Assessment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                >
                  <span>View All Plans</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AICybersecuritySuitePage