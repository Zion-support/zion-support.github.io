'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Shield, DollarSign, CheckCircle, Brain, AlertTriangle, Lock, Star, ArrowRight, Users, Zap, Target, Globe, Settings, Activity, TrendingUp, BarChart, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICybersecurityMonitor: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);
=======
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
>>>>>>> origin/main

const PagePage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
=======
      icon: Shield,
    {}
>>>>>>> origin/main
      icon: Shield,
      title: 'Real-time Threat Detection',
      description: 'AI-powered monitoring that detects and responds to threats in real-time with 99.9% accuracy',
      color: 'text-purple-400'
    },
    {
<<<<<<< HEAD
=======
      icon: Brain,
    {}
>>>>>>> origin/main
      icon: Brain,
      title: 'Machine Learning Analysis',
      description: 'Advanced ML algorithms learn from your environment to identify unusual patterns and behaviors',
      color: 'text-blue-400'
    },
    {
<<<<<<< HEAD
=======
      icon: AlertTriangle,
    {}
>>>>>>> origin/main
      icon: AlertTriangle,
      title: 'Automated Response',
      description: 'Automatically block threats, isolate compromised systems, and alert security teams',
      color: 'text-green-400'
    },
    {
<<<<<<< HEAD
=======
      icon: Lock,
    {}
>>>>>>> origin/main
      icon: Lock,
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust security model with continuous verification and least privilege access',
      color: 'text-orange-400'
    },
    {
      icon: BarChart,
      title: 'Security Analytics',
      description: 'Comprehensive security analytics and reporting for compliance and risk management',
      color: 'text-cyan-400'
    },
    {
      icon: Globe,
      title: 'Global Threat Intelligence',
      description: 'Access to global threat intelligence feeds and security research for proactive defense',
      color: 'text-pink-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic threat detection',
        'Email support',
        'Standard monitoring',
        'Basic reporting',
        '1 user account',
        'Basic analytics'
      ],
<<<<<<< HEAD
      popular: false
=======
      popular: false},
      popular: false,
>>>>>>> origin/main
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced threat detection',
        'Priority support',
        'Advanced monitoring',
        'Advanced reporting',
        'Up to 10 users',
        'Advanced analytics',
        'Custom rules',
        'API access'
      ],
<<<<<<< HEAD
      popular: true
=======
      popular: true},
      popular: true,
>>>>>>> origin/main
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full AI suite',
        'Custom solutions',
        'White-label options',
        'Unlimited users',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Training & consulting'
      ],
<<<<<<< HEAD
      popular: false
    }
  ];

  const benefits = [
    'Reduce security incidents by 90%',
    'Improve threat detection accuracy',
    'Automate security responses',
    'Ensure compliance standards',
    'Scale security operations',
    'Protect against advanced threats'
=======
      popular: false}
      popular: false,
    }
  ];

  const useCases = [
    {}
      title: 'Threat Prevention',
      description: 'Prevent cyber attacks before they happen with predictive threat analysis',
      icon: Shield,
      result: '99.9% prevention'},
    {}
      title: 'Incident Response',
      description: 'Rapidly detect and respond to security incidents with automated workflows',
      icon: AlertTriangle,
      result: '90% faster'},
    {}
      title: 'Compliance',
      description: 'Maintain compliance with GDPR, HIPAA, SOX, and other regulations',
      icon: Lock,
      result: '100% compliant'},
    {}
      title: 'Cost Reduction',
      description: 'Reduce security costs while improving protection with AI automation',
      icon: DollarSign,
      result: '60% savings'}
>>>>>>> origin/main
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'SecureTech Solutions',
      role: 'CISO',
      quote: 'AI cybersecurity monitor reduced our security incidents by 95% and improved our threat response time by 80%.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      company: 'Financial Services Inc',
      role: 'Security Director',
      quote: 'The machine learning analysis helped us identify sophisticated attacks that traditional tools missed.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      company: 'Healthcare Corp',
      role: 'IT Security Manager',
      quote: 'Automated response capabilities saved us from potential data breaches. Invaluable protection.',
      rating: 5,
      image: '👨‍💻'
    }
  ];

<<<<<<< HEAD
  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Monitor - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity monitoring with real-time threat detection, automated response, and 99.9% accuracy. Starting at $299/month." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, automated response, zero trust, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-cybersecurity-monitor" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-6xl mb-6 animate-bounce">🛡️</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Monitor
            </h1>
            <p className="text-xl text-red-400 mb-8 font-medium">
              Advanced AI-Powered Security Protection
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Protect your organization with AI-powered cybersecurity monitoring that detects, 
              analyzes, and responds to threats in real-time with 99.9% accuracy.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
                <div className="text-gray-300">Accuracy Rate</div>
=======
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  return (</div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <title>AI Cybersecurity Monitor - Advanced Threat Detection | Zion Tech Group</title>
        <meta name="description" content="Protect your business with AI-powered cybersecurity monitoring. Real-time threat detection, automated response, and 99.9% accuracy." />
        <meta name="keywords" content="cybersecurity, threat detection, AI security, network monitoring, incident response, compliance" />
        <meta property="og: title" content="AI Cybersecurity Monitor - Advanced Threat Detection" />
        <meta property="og:description" content="Protect your business with AI-powered cybersecurity monitoring and threat detection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-cybersecurity-monitor" />
      <div className="container mx-auto px-4 py-16">{/* Hero Section */}</div>
        </div><section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></section>
            <Shield className="w-4 h-4" />
            <span>AI-Powered Security</span><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Cybersecurity Monitor</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Protect your business with advanced AI-powered cybersecurity monitoring.</p>
            Detect threats in real-time, automate responses, and maintain compliance with 99.9% accuracy.</p>
        <meta property="og:type" content="website" />,
        <meta property="og:url" content="https://ziontechgroup.com/ai-cybersecurity-monitor" />,
      </Helmet>,
,
      <div className="container mx-auto px-4 py-16">,
        {/* Hero Section */}</div>
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
            <Shield className="w-4 h-4" />
            <span>AI-Powered Security</span>
          </div>

          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
            AI Cybersecurity Monitor;</h1>
          </h1>)
)
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">)
            Protect your business with advanced AI-powered cybersecurity monitoring.),
            Detect threats in real-time, automate responses, and maintain compliance with 99.9% accuracy.
          </p>

          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <a;
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
            ><Phone className="w-5 h-5 mr-2" >Call: (302) 464-0950<a
              href="/contact"
              className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
            >Get Security Assessment</a>
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950;
            </a>
            <a;
              href="/contact"
              className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Security Assessment;
            </a>
          </div>,
        </section>,
,
        {/* Security Metrics */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{securityMetrics.map((metric, index) => (</div>
              </div><div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-red-500/20"></div>
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.metric}<div className="text-white font-semibold mb-2">{metric.label}<div className="text-gray-400 text-sm">Industry-leading security performance</div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
            {securityMetrics.map((metric, index) => (</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityMetrics.map((metric, index) => (}</div>
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-red-500/20"></div>
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.metric}</div>
                <div className="text-white font-semibold mb-2">{metric.label}</div>
                <div className="text-gray-400 text-sm">Industry-leading security performance</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{securityMetrics.map((metric, index) => (</section>
              </div><div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-red-500/20"></div>
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.metric}</div><div className="text-white font-semibold mb-2">{metric.label}</div><div className="text-gray-400 text-sm">Industry-leading security performance</div>
>>>>>>> origin/main
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">90%</div>
                <div className="text-gray-300">Threat Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Real-time</div>
                <div className="text-gray-300">Response</div>
              </div>
            </div>

<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
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
                Comprehensive AI-powered cybersecurity capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">
                    <feature.icon className={feature.color} />
=======
        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Security Features<div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</div>
              </div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (}</div>
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Security Features</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover: border-red-500/50 transition-all duration-300">,</div>
                <div className="flex items-start space-x-4">,</div>
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Security Features</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</section>
              </div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
                    <feature.icon className="w-6 h-6" />
>>>>>>> origin/main
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI Cybersecurity Monitor?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect your organization with intelligent security automation
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
                Cybersecurity Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the right security solution for your organization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
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
<<<<<<< HEAD
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
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how organizations enhanced their security posture
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
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
=======
        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Solutions<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{useCases.map((useCase, index) => (</div>
              </div><div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (}</div>
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <useCase.icon className="w-8 h-8 text-red-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}<h3 className="text-lg font-semibold text-white mb-2">{useCase.title}<p className="text-gray-400 text-sm">{useCase.description}</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Solutions</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
            {useCases.map((useCase, index) => (</div>
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover: border-red-500/50 transition-all duration-300">,</div>
                <div className="flex items-center justify-between mb-4">,</div>
                  <useCase.icon className="w-8 h-8 text-red-400" />,
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Solutions</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{useCases.map((useCase, index) => (</section>
              </div><div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <useCase.icon className="w-8 h-8 text-red-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div><h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3><p className="text-gray-400 text-sm">{useCase.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
=======
        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Investment Plans<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-red-500 ring-2 ring-red-500/20' : 'border-gray-700'} hover:border-red-500/50 transition-all duration-300`}>{plan.popular && (</div>
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Investment Plans</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</section><div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-red-500 ring-2 ring-red-500/20' : 'border-gray-700'} hover:border-red-500/50 transition-all duration-300`}>{plan.popular && (</div>
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Investment Plans</h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (}</div>
              <div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-red-500 ring-2 ring-red-500/20' : 'border-gray-700'} hover:border-red-500/50 transition-all duration-300`}>
                {plan.popular && (}</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular;</div>
                    </div>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4xl font-bold text-white">{plan.price}</span><span className="text-gray-400 ml-1">{plan.period}</span><p className="text-gray-400 mt-2">{plan.description}</p><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                    </ul><li key={featureIndex} className="flex items-center space-x-3">
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
>>>>>>> origin/main
                  </div>
                </div>
              ))}
            </div>
          </section>

<<<<<<< HEAD
          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-red-500/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Organization?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start your AI-powered cybersecurity transformation today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
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
=======
        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-red-600/20 to-orange-600/20 p-12 rounded-lg border border-red-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Don't Wait for a Breach</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join 1,000+ organizations already protected by our AI Cybersecurity Monitor.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <a;
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
            ><Phone className="w-5 h-5 mr-2" >Call: (302) 464-0950</Phone>
            </Phone>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            ></a><MessageSquare className="w-5 h-5 mr-2" >Email Us</MessageSquar>
            </MessageSquare>
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
        className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
      >
              <MessageSquare className="w-5 h-5 mr-2" />
              Email Us;
            </a>
          </div>
        </section>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
    </div>
>>>>>>> origin/main
  );
};

<<<<<<< HEAD
AICybersecurityMonitor.displayName = 'AICybersecurityMonitor';

export default AICybersecurityMonitor;
=======
export default PagePage;
>>>>>>> origin/main
