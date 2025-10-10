'use client';
import React from 'react';
import { Lock, Shield, Eye, EyeOff, Key, Smartphone, Globe, Zap, CheckCircle, Star, Users, Clock, DollarSign, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIPasswordManagerPage: React.FC = () => {
  const features = [
    'AI-powered password generation',
    'Secure password storage with 256-bit encryption',
    'Multi-device synchronization',
    'Biometric authentication support',
    'Password strength analysis',
    'Breach monitoring and alerts',
    'Auto-fill functionality',
    'Secure sharing with team members',
    'Dark web monitoring',
    'Two-factor authentication',
    'Password health score',
    'Emergency access features'
  ];

  const benefits = [
    '99.9% security guarantee',
    'Save 2+ hours weekly',
    'Never forget passwords again',
    'Protect against data breaches',
    'Team collaboration made secure',
    'Compliance with security standards'
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$19',
      period: '/month',
      originalPrice: '$29',
      features: [
        'Unlimited passwords',
        '1 device',
        'Basic security monitoring',
        'Password generator',
        'Auto-fill',
        '24/7 support'
      ],
      popular: false
    },
    {
      name: 'Family',
      price: '$39',
      period: '/month',
      originalPrice: '$59',
      features: [
        'Everything in Personal',
        'Up to 6 family members',
        'Advanced security monitoring',
        'Secure sharing',
        'Family dashboard',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$99',
      period: '/month',
      originalPrice: '$149',
      features: [
        'Everything in Family',
        'Unlimited team members',
        'Admin dashboard',
        'SSO integration',
        'Advanced reporting',
        'API access',
        'Custom security policies'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'AI Password Manager Pro has revolutionized how we handle passwords. The AI suggestions are spot-on and the security features give us peace of mind.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'IT Director',
      content: 'The team collaboration features are excellent. We can securely share passwords while maintaining full control and audit trails.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Freelancer',
      content: 'The auto-fill feature saves me so much time. I never have to remember complex passwords anymore.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Password Manager Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered password management with military-grade security, intelligent password generation, and seamless team collaboration. Protect your digital life with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Users className="w-5 h-5" />
                <span>50,000+ users</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <span>4.9/5 rating</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI technology meets military-grade security to protect your most sensitive information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  {feature === 'AI-powered password generation' && 'Generate ultra-secure passwords using advanced AI algorithms that adapt to your security requirements.'}
                  {feature === 'Secure password storage with 256-bit encryption' && 'Military-grade AES-256 encryption ensures your passwords are protected with the highest security standards.'}
                  {feature === 'Multi-device synchronization' && 'Access your passwords securely across all your devices with real-time synchronization.'}
                  {feature === 'Biometric authentication support' && 'Use fingerprint, face ID, or other biometric methods for quick and secure access.'}
                  {feature === 'Password strength analysis' && 'AI analyzes your passwords and provides detailed strength reports with improvement suggestions.'}
                  {feature === 'Breach monitoring and alerts' && 'Monitor the dark web for compromised passwords and get instant alerts when breaches are detected.'}
                  {feature === 'Auto-fill functionality' && 'Intelligent auto-fill that works across all websites and applications with high accuracy.'}
                  {feature === 'Secure sharing with team members' && 'Share passwords securely with team members while maintaining full control and audit trails.'}
                  {feature === 'Dark web monitoring' && 'Continuous monitoring of the dark web for your personal information and compromised accounts.'}
                  {feature === 'Two-factor authentication' && 'Add an extra layer of security with 2FA support for all your accounts.'}
                  {feature === 'Password health score' && 'Get a comprehensive health score for all your passwords with actionable improvement recommendations.'}
                  {feature === 'Emergency access features' && 'Set up emergency access for trusted contacts to access your passwords when needed.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI Password Manager Pro?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of password management with AI-powered security and seamless user experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                <p className="text-gray-300">
                  {benefit === '99.9% security guarantee' && 'Our military-grade encryption and security protocols ensure your data is protected with 99.9% reliability.'}
                  {benefit === 'Save 2+ hours weekly' && 'Automated password management and auto-fill features save you valuable time every week.'}
                  {benefit === 'Never forget passwords again' && 'AI-powered password generation and secure storage means you never have to remember complex passwords.'}
                  {benefit === 'Protect against data breaches' && 'Advanced breach monitoring and alerts help you stay ahead of security threats.'}
                  {benefit === 'Team collaboration made secure' && 'Share passwords securely with team members while maintaining full control and compliance.'}
                  {benefit === 'Compliance with security standards' && 'Meet industry security standards including SOC 2, GDPR, and HIPAA compliance.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Security Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet your security needs, from personal use to enterprise teams.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/80 backdrop-blur-sm border rounded-xl p-8 relative ${plan.popular ? 'border-purple-400/40 ring-2 ring-purple-400/20' : 'border-gray-600/40'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</span>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Security-Conscious Users
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our users say about AI Password Manager Pro's security and ease of use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Digital Life?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with AI Password Manager Pro today and experience the future of password security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </a>
          </div>
          <div className="mt-8 text-purple-100">
            <p className="flex items-center justify-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIPasswordManagerPage;