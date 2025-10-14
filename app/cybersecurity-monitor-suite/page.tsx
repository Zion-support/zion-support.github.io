'use client'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon,
  CheckCircleIcon
  ArrowRightIcon,
  StarIcon
  GlobeAltIcon,
  DocumentTextIcon
  CpuChipIcon,
  ClockIcon
  UserGroupIcon,
  CurrencyDollarIcon
  PhoneIcon,
  EnvelopeIcon
  ExclamationTriangleIcon,
  LockClosedIcon
  EyeIcon
} from '@heroicons/react/24/outline';
const CybersecurityMonitorSuite: React.FC = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Threat Detection',
      description: 'Advanced AI-powered threat detection with real-time monitoring and instant alerts'
    }
    {
      icon: DocumentTextIcon,
      title: 'Compliance Reports',
      description: 'Automated compliance reporting for GDPR, HIPAA, SOX, and other regulatory frameworks'
    }
    {
      icon: ExclamationTriangleIcon,
      title: 'Incident Response',
      description: 'Automated incident response workflows with step-by-step guidance and escalation'
    }
    {
      icon: LockClosedIcon,
      title: 'Security Audits',
      description: 'Comprehensive security audits with vulnerability assessments and penetration testing'
    }
    {
      icon: EyeIcon,
      title: '24/7 Monitoring',
      description: 'Round-the-clock security monitoring with dedicated security operations center'
    }
    {
      icon: CpuChipIcon,
      title: 'AI Analytics',
      description: 'Machine learning-powered security analytics for advanced threat intelligence'
    }
  ]
  const pricingPlans = [
    {
      name: 'Essential',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic threat detection'
        '5 compliance reports'
        'Email alerts'
        'Standard support'
        '1 security audit/month'
        'Up to 10 devices'
      ],
      popular: false
    }
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses with advanced security needs',
      features: [
        'Advanced threat detection'
        'Unlimited compliance reports'
        'Real-time alerts'
        'Priority support'
        'Weekly security audits'
        'Up to 50 devices'
        'Incident response'
        'API access'
      ],
      popular: true
    }
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations with complex security requirements',
      features: [
        'Enterprise threat detection'
        'Custom compliance reports'
        '24/7 SOC monitoring'
        'Dedicated support'
        'Daily security audits'
        'Unlimited devices'
        'Advanced incident response'
        'Custom integrations'
        'White-label options'
      ],
      popular: false
    }
  ]
  const securityMetrics = [
    { label: 'Threats Blocked', value: '99.9%', color: 'text-green-400' }
    { label: 'Response Time', value: '< 2min', color: 'text-cyan-400' }
    { label: 'Uptime', value: '99.99%', color: 'text-purple-400' }
    { label: 'Compliance', value: '100%', color: 'text-pink-400' }
  ]
  const testimonials = [
    {
      name: 'Robert Johnson',
      company: 'Financial Services Corp',
      role: 'CISO',
      content: 'The Cybersecurity Monitor Suite has significantly improved our security posture. We\'ve reduced security incidents by 85%.',
      rating: 5
    }
    {
      name: 'Maria Garcia',
      company: 'Healthcare Systems',
      role: 'IT Director',
      content: 'Compliance reporting used to take weeks. Now it\'s automated and takes minutes. HIPAA compliance has never been easier.',
      rating: 5
    }
    {
      name: 'Alex Thompson',
      company: 'E-commerce Platform',
      role: 'Security Manager',
      content: 'The AI-powered threat detection is incredibly accurate. False positives are down 90% while catching real threats faster.',
      rating: 5
    }
  ]
  return (
    <>
      <Helmet>
        <title>Cybersecurity Monitor Suite - Advanced Security Platform | Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity monitoring platform with threat detection, compliance reporting, incident response, and 24/7 security operations center. Protect your business today." />
        <meta name="keywords" content="cybersecurity, threat detection, security monitoring, compliance reporting, incident response, security audit, SOC, cyber defense" />
        <meta property="og:title" content="Cybersecurity Monitor Suite - Advanced Security Platform" />
        <meta property="og:description" content="Comprehensive cybersecurity monitoring platform with threat detection, compliance reporting, incident response, and 24/7 security operations center." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/cybersecurity-monitor-suite" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-orange-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium mb-6">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                Enterprise-Grade Security
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Cybersecurity Monitor Suite
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Protect your business with our comprehensive cybersecurity platform. 
                Advanced threat detection, compliance reporting, and 24/7 security monitoring.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/demo"
                  className="border-2 border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-400 hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  Watch Demo
                </Link>
              </div>

              {/* Security Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                {securityMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                    <div className="text-gray-300">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Security</span> Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to protect your business from evolving cyber threats.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
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

        {/* Security Dashboard Preview */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-red-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-time <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Security</span> Dashboard
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Monitor your security posture with our intuitive, real-time dashboard.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Active Threats</h3>
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-3xl font-bold text-red-400 mb-2">3</div>
                  <div className="text-sm text-gray-400">Blocked in last hour</div>
                </div>
                
                <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Compliance</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-sm text-gray-400">HIPAA compliant</div>
                </div>
                
                <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Vulnerabilities</h3>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">2</div>
                  <div className="text-sm text-gray-400">Medium risk</div>
                </div>
                
                <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Response Time</h3>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">1.2s</div>
                  <div className="text-sm text-gray-400">Average response</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Security</span> Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect your business with our flexible security solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-red-500 shadow-2xl shadow-red-500/25'
                    : 'border-slate-600 hover:border-red-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link,
  to ="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700 hover:scale-105'
                        : 'border-2 border-red-400 text-red-300 hover:bg-red-400 hover:text-white'
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
        <section className="py-20 bg-gradient-to-r from-red-900/30 to-orange-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Security Leaders</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how organizations are protecting their assets with our security platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-red-900">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Secure Your Business Today
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait for a security breach. Start protecting your business with our comprehensive security platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link,
  to ="/contact"
                  className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
                >
                  Start Free Trial
                </Link>
                <Link,
  to ="/demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <PhoneIcon className="w-6 h-6 text-red-400" />
                  <span className="text-lg">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <EnvelopeIcon className="w-6 h-6 text-red-400" />
                  <span className="text-lg">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <CurrencyDollarIcon className="w-6 h-6 text-red-400" />
                  <span className="text-lg">Starting at $79/month</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default CybersecurityMonitorSuite