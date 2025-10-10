'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield,
  Code,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Lock,
  Unlock,
  FileText,
  Search,
  Filter,
  Download,
  Upload,
  Settings,
  Zap,
  Star,
  Users,
  Clock,
  ArrowRight,
  Target,
  Globe,
  Activity,
  TrendingUp
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICodeSecurityAuditorPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Automated Security Scanning',
      description: 'AI-powered code analysis that automatically detects vulnerabilities and security issues',
      benefits: ['Vulnerability detection', 'Security best practices', 'Automated scanning', 'Real-time alerts']
    },
    {
      icon: Code,
      title: 'Multi-Language Support',
      description: 'Comprehensive security auditing for 50+ programming languages and frameworks',
      benefits: ['50+ languages', 'Framework support', 'Custom rules', 'Language-specific checks']
    },
    {
      icon: AlertTriangle,
      title: 'Threat Intelligence',
      description: 'Advanced threat detection using machine learning and security intelligence databases',
      benefits: ['ML threat detection', 'Intelligence feeds', 'Pattern recognition', 'Risk assessment']
    },
    {
      icon: CheckCircle,
      title: 'Compliance Checking',
      description: 'Automated compliance verification for security standards and regulations',
      benefits: ['GDPR compliance', 'SOC 2 checks', 'PCI DSS validation', 'Custom standards']
    },
    {
      icon: Eye,
      title: 'Code Review Automation',
      description: 'Intelligent code review with AI-powered suggestions and security recommendations',
      benefits: ['Automated reviews', 'AI suggestions', 'Security recommendations', 'Quality checks']
    },
    {
      icon: Lock,
      title: 'Secrets Detection',
      description: 'Advanced detection of hardcoded secrets, API keys, and sensitive information',
      benefits: ['Secret scanning', 'API key detection', 'Credential protection', 'Data loss prevention']
    }
  ];

  const securityChecks = [
    {
      title: 'SQL Injection',
      description: 'Detect and prevent SQL injection vulnerabilities in database queries',
      severity: 'High',
      icon: '🔍'
    },
    {
      title: 'XSS Protection',
      description: 'Identify and fix cross-site scripting vulnerabilities',
      severity: 'High',
      icon: '🛡️'
    },
    {
      title: 'Authentication Issues',
      description: 'Check for weak authentication and authorization mechanisms',
      severity: 'Critical',
      icon: '🔐'
    },
    {
      title: 'Data Encryption',
      description: 'Verify proper encryption of sensitive data at rest and in transit',
      severity: 'High',
      icon: '🔒'
    },
    {
      title: 'Input Validation',
      description: 'Ensure proper input validation and sanitization',
      severity: 'Medium',
      icon: '✅'
    },
    {
      title: 'Dependency Vulnerabilities',
      description: 'Scan for known vulnerabilities in third-party dependencies',
      severity: 'Medium',
      icon: '📦'
    }
  ];

  const benefits = [
    'Reduce security vulnerabilities by 90%',
    'Automate compliance checking',
    'Improve code quality',
    'Save security audit time',
    'Prevent data breaches',
    'Ensure regulatory compliance'
  ];

  const pricing = [
    {
      name: 'Developer',
      price: '$49',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Basic security scanning',
        '5 languages',
        'Email support',
        'Basic reports',
        '1 user account',
        'Standard checks'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$199',
      period: '/month',
      description: 'Ideal for development teams',
      features: [
        'Advanced security scanning',
        'All languages',
        'Priority support',
        'Advanced reports',
        'Up to 10 users',
        'Custom rules',
        'API access',
        'CI/CD integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full security suite',
        'Custom scanning',
        'Dedicated support',
        'Unlimited users',
        'White-label solution',
        'Custom integrations',
        'SLA guarantee',
        'Security consulting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Kim',
      company: 'SecureCode Inc',
      role: 'Security Director',
      quote: 'AI security auditor helped us identify and fix 95% of vulnerabilities before they became issues.',
      rating: 5,
      image: '👩‍🔬'
    },
    {
      name: 'Michael Chen',
      company: 'FinTech Solutions',
      role: 'CTO',
      quote: 'Compliance checking is now automated. We passed our SOC 2 audit with zero findings.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'HealthTech Corp',
      role: 'Lead Developer',
      quote: 'The secret detection feature prevented a potential data breach. Invaluable tool.',
      rating: 5,
      image: '👩‍💻'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Security Auditor - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered code security auditing. Detect vulnerabilities, ensure compliance, and protect your code with intelligent security analysis." />
        <meta name="keywords" content="AI security auditor, code security, vulnerability detection, security scanning, compliance checking, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-6xl mb-6 animate-bounce">🔒</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Code Security Auditor
            </h1>
            <p className="text-xl md:text-2xl text-red-400 mb-8 font-medium">
              Protect Your Code with AI-Powered Security
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Advanced AI-powered security auditing that automatically detects vulnerabilities, 
              ensures compliance, and protects your code from threats.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">90%</div>
                <div className="text-gray-300">Vulnerability Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
                <div className="text-gray-300">Languages Supported</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">Compliance</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Security Scan
              </button>
              <button className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security auditing powered by AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">
                    <feature.icon className="text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Security Checks Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Security Checks Performed
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security analysis covering all major vulnerability types
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityChecks.map((check, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl mb-4 text-center">{check.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{check.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{check.description}</p>
                  <div className="text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      check.severity === 'Critical' ? 'bg-red-500 text-white' :
                      check.severity === 'High' ? 'bg-orange-500 text-white' :
                      'bg-yellow-500 text-black'
                    }`}>
                      {check.severity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI Security Auditor?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect your code and ensure compliance with intelligent security analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Security Auditor Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the right security solution for your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                  plan.popular ? 'ring-2 ring-red-400 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-red-400 mb-2">
                      {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="text-green-400 mr-3 w-5 h-5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white'
                      : 'border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Security Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how organizations improved their security posture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-red-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-5 h-5" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-red-500/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Code?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start your security transformation with AI-powered code auditing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Scan
                </button>
                <button className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default AICodeSecurityAuditorPage;