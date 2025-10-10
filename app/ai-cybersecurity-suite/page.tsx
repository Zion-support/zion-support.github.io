'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
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

<<<<<<< HEAD
const AICybersecuritySuitePage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Real-time Threat Detection',
      description: 'AI-powered monitoring that detects and responds to threats in real-time with 99.9% accuracy',
      benefits: ['99.9% accuracy', 'Real-time detection', 'Automated response', 'Threat intelligence']
    },
    {
      icon: Brain,
      title: 'Machine Learning Analysis',
      description: 'Advanced ML algorithms learn from your environment to identify unusual patterns and behaviors',
      benefits: ['Behavioral analysis', 'Pattern recognition', 'Anomaly detection', 'Predictive security']
    },
    {
      icon: Lock,
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust security model with continuous verification and least privilege access',
      benefits: ['Continuous verification', 'Least privilege access', 'Identity management', 'Access controls']
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: 'Comprehensive 24/7 security monitoring with advanced analytics and reporting',
      benefits: ['24/7 monitoring', 'Advanced analytics', 'Compliance reporting', 'Incident tracking']
    },
    {
      icon: AlertTriangle,
      title: 'Automated Response',
      description: 'Automatically block threats, isolate compromised systems, and alert security teams',
      benefits: ['Automated blocking', 'System isolation', 'Alert management', 'Incident response']
    },
    {
      icon: Globe,
      title: 'Global Threat Intelligence',
      description: 'Access to global threat intelligence feeds and security research for proactive defense',
      benefits: ['Threat intelligence', 'Global monitoring', 'Research integration', 'Proactive defense']
    }
  ];

  const benefits = [
    'Reduce security incidents by 95%',
    'Improve threat detection accuracy',
    'Automate security responses',
    'Ensure compliance standards',
    'Scale security operations',
    'Protect against advanced threats'
  ];

  const pricing = [
    {
      name: 'Essential',
      price: '$1,999',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Basic threat detection',
        'Email support',
        'Standard monitoring',
        'Basic reporting',
        '1 user account',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for growing organizations',
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
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$12,999',
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
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'SecureTech Solutions',
      role: 'CISO',
      quote: 'AI cybersecurity suite reduced our security incidents by 98% and improved our threat response time by 90%.',
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

  return (
    <ErrorBoundary>
=======
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>
=======
    <ErrorBoundary></ErrorBoundar>
>>>>>>> origin/main
      <SEOHead 
        title="AI Cybersecurity Suite - Advanced Threat Protection | Zion Tech Group"
        description="Comprehensive AI-powered cybersecurity solutions with real-time threat detection, automated response, and advanced analytics. Starting at $1,999/month."
        keywords="AI cybersecurity, threat detection, security automation, cyber defense, AI security, threat intelligence, security analytics"
        canonical="https://ziontechgroup.com/ai-cybersecurity-suite"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                AI Security Technology
              </div>
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Cybersecurity Suite
=======
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
                AI Cybersecurity Suite</h1>
>>>>>>> origin/main
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Advanced Threat Protection
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your organization with AI-powered cybersecurity solutions. Real-time threat detection, 
                automated response, and advanced analytics for comprehensive security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#pricing" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Security Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="#demo" 
                  className="inline-flex items-center px-8 py-4 border border-red-400 text-red-400 font-semibold rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc

<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
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
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI Cybersecurity Suite?
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
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Cybersecurity Suite Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the right security solution for your organization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-red-500/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-12 text-center">
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
=======
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
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
      </section>

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
<<<<<<< HEAD
        </div>
      </section>
    </div>
=======
        </section>
      </main>

<<<<<<< HEAD
      <Footer />
=======
      <Footer /></Footer>
>>>>>>> origin/main
    </ErrorBoundary>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
  );
};

export default PagePage;