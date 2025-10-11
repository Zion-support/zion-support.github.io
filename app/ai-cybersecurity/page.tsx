import React from 'react';
import { CheckCircle, ArrowRight, Shield, Eye, Lock, AlertTriangle, Zap, DollarSign, Star, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms that detect and prevent cyber threats in real-time.',
      benefits: ['Real-time threat analysis', 'Predictive threat modeling', 'Automated response', '99.9% accuracy rate']
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: 'Behavioral Analytics',
      description: 'Monitor user and system behavior patterns to identify anomalies and potential security breaches.',
      benefits: ['User behavior analysis', 'Anomaly detection', 'Risk scoring', 'Continuous monitoring']
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: 'Zero Trust Architecture',
      description: 'Implement zero-trust security model with AI-powered continuous verification and access control.',
      benefits: ['Continuous verification', 'Dynamic access control', 'Micro-segmentation', 'Identity management']
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />,
      title: 'Incident Response',
      description: 'Automated incident response with AI-driven threat hunting and forensic analysis capabilities.',
      benefits: ['Automated response', 'Threat hunting', 'Forensic analysis', 'Recovery planning']
    }
  ];

  const pricingTiers = [
    {
      name: 'Basic',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'AI threat detection',
        'Basic behavioral analytics',
        'Email security scanning',
        '24/7 monitoring',
        'Basic incident response',
        'Up to 50 users'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI threat detection',
        'Full behavioral analytics',
        'Zero trust architecture',
        'Advanced incident response',
        'Custom security policies',
        'Up to 200 users',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Enterprise AI security suite',
        'Custom AI model training',
        'Advanced threat hunting',
        'Compliance management',
        'Dedicated security team',
        'Unlimited users',
        '24/7 phone support',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Proactive Protection',
      description: 'Prevent attacks before they happen with predictive AI security',
      icon: <Shield className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Effective',
      description: 'Reduce security costs by up to 60% compared to traditional solutions',
      icon: <DollarSign className="w-6 h-6 text-blue-500" />
    },
    {
      title: '24/7 Monitoring',
      description: 'Round-the-clock AI-powered security monitoring and protection',
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Compliance Ready',
      description: 'Meet GDPR, HIPAA, SOX, and other regulatory requirements',
      icon: <CheckCircle className="w-6 h-6 text-yellow-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CISO, TechCorp',
      content: 'AI Cybersecurity has transformed our security posture. We\'ve prevented 15+ potential breaches in the first month alone.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'IT Director, FinanceFlow',
      content: 'The behavioral analytics caught a sophisticated insider threat that traditional tools missed. Incredible technology.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Security Manager, HealthTech',
      content: 'Compliance has never been easier. The AI automatically ensures we meet all regulatory requirements.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions with real-time threat detection, behavioral analytics, and zero-trust architecture. Protect your business with cutting-edge AI security." />
        <meta name="keywords" content="AI cybersecurity, threat detection, behavioral analytics, zero trust, incident response, security monitoring" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your business with next-generation AI-powered cybersecurity. Real-time threat detection, behavioral analytics, and automated incident response to keep your data secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advanced AI Security Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive cybersecurity powered by artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose AI Cybersecurity?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of cybersecurity with AI-powered protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Cybersecurity Pricing</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect security plan for your organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${tier.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real feedback from organizations using our AI cybersecurity solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Secure Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free security assessment and discover how AI can protect your organization from cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All AI Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityPage;