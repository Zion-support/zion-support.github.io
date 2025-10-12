import React from 'react';
import { CheckCircle, ArrowRight, Shield, Lock, Eye, AlertTriangle, Clock, DollarSign, Star, Users, BarChart3, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function CybersecurityPage() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Threat Detection',
      description: 'Advanced AI-powered threat detection and prevention systems'
    },
    {
      icon: <Lock className="w-6 h-6 text-green-500" />,
      title: 'Data Protection',
      description: 'Comprehensive data encryption and access control solutions'
    },
    {
      icon: <Eye className="w-6 h-6 text-purple-500" />,
      title: '24/7 Monitoring',
      description: 'Round-the-clock security monitoring and incident response'
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      title: 'Compliance',
      description: 'Ensure compliance with industry standards and regulations'
    }
  ];

  const pricing = [
    {
      plan: 'Basic Security',
      price: '$1,800',
      period: '/month',
      description: 'Essential security for small businesses',
      features: ['Firewall management', 'Antivirus protection', 'Security monitoring', 'Monthly reports', 'Email support'],
      popular: false
    },
    {
      plan: 'Advanced Security',
      price: '$3,500',
      period: '/month',
      description: 'Comprehensive security for growing companies',
      features: ['Advanced threat detection', 'Penetration testing', 'Security audits', 'Incident response', 'Priority support'],
      popular: true
    },
    {
      plan: 'Enterprise Security',
      price: '$7,500',
      period: '/month',
      description: 'Complete security solution for large organizations',
      features: ['Full security suite', 'Custom security policies', '24/7 SOC monitoring', 'Compliance management', 'Dedicated security team'],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Protect Assets',
      description: 'Safeguard your critical business data and systems',
      icon: <Shield className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Compliance Ready',
      description: 'Meet industry standards and regulatory requirements',
      icon: <Lock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Peace of Mind',
      description: '24/7 monitoring gives you confidence in your security',
      icon: <Eye className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Cost Effective',
      description: 'Prevent costly security breaches and data loss',
      icon: <DollarSign className="w-6 h-6 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Finance Corp',
      content: 'Their cybersecurity solutions gave us complete peace of mind. Professional and thorough.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'TechStart Inc.',
      content: 'The security audit revealed vulnerabilities we never knew existed. Excellent service.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Healthcare Plus',
      content: 'Compliance was a breeze with their expert guidance. Highly recommended.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity services including threat detection, data protection, compliance, and 24/7 monitoring. Protect your business from cyber threats." />
        <meta name="keywords" content="cybersecurity, threat detection, data protection, compliance, security monitoring" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Cybersecurity Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive cybersecurity solutions to protect your business from evolving threats. 
              Advanced threat detection, data protection, and compliance services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/it-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                All IT Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Protect your business with our advanced cybersecurity services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Cybersecurity?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced protection for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Security Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the security level that fits your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${plan.popular ? 'ring-2 ring-blue-500 relative' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Protect your business from cyber threats with our expert security solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <Shield className="w-5 h-5 mr-2" />
              Get Security Assessment
            </Link>
            <Link
              to="/it-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All IT Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}