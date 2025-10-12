import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Key, Shield, Zap, Smartphone, Globe, ArrowRight, Star, DollarSign, Calendar, Target, Brain, TrendingUp, Lock, Eye, AlertTriangle, Smartphone as Mobile, Database, Users } from 'lucide-react';
import Layout from '../layout';

export default function AIPasswordManagerPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Password Generation',
      description: 'Generate ultra-secure passwords using advanced AI algorithms that adapt to each site\'s requirements and your usage patterns.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Zero-Knowledge Architecture',
      description: 'Your passwords are encrypted locally and never stored on our servers. Only you can access your data with your master password.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Smart Auto-Fill',
      description: 'Intelligently fill passwords, usernames, and forms across all your devices with context-aware suggestions and biometric authentication.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
      title: 'Breach Monitoring',
      description: 'Continuously monitor the dark web for compromised passwords and instantly alert you when your accounts are at risk.'
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: 'Team Password Sharing',
      description: 'Securely share passwords with team members, set permissions, and track access with detailed audit logs.'
    },
    {
      icon: <Database className="w-8 h-8 text-red-500" />,
      title: 'Advanced Security Analytics',
      description: 'Get detailed insights into your password security, identify weak passwords, and receive personalized security recommendations.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$4',
      period: '/month',
      description: 'Perfect for individuals and families',
      features: [
        'Unlimited passwords',
        'AI password generation',
        'Cross-device sync',
        'Biometric authentication',
        'Breach monitoring',
        'Mobile apps'
      ],
      popular: false
    },
    {
      name: 'Family',
      price: '$8',
      period: '/month',
      description: 'Ideal for families up to 6 members',
      features: [
        'Up to 6 family members',
        'Family password sharing',
        'Parental controls',
        'Emergency access',
        'Priority support',
        'Advanced security features'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$15',
      period: '/user/month',
      description: 'For teams and organizations',
      features: [
        'Unlimited team members',
        'Admin dashboard',
        'SSO integration',
        'Advanced audit logs',
        'Compliance reporting',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Software Engineer',
      content: 'AI Password Manager has completely transformed how I handle passwords. The AI generation is incredibly smart and the security is top-notch.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'Small Business Owner',
      content: 'Our team productivity increased significantly since switching to this password manager. The sharing features are perfect for our workflow.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'IT Director',
      content: 'The breach monitoring feature saved us from a potential security disaster. Highly recommended for any organization.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6 text-green-500" />,
      title: 'End-to-End Encryption',
      description: 'Military-grade AES-256 encryption protects your data'
    },
    {
      icon: <Eye className="w-6 h-6 text-blue-500" />,
      title: 'Zero-Knowledge Architecture',
      description: 'We never see or store your master password or data'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Multi-Factor Authentication',
      description: 'Add extra security with 2FA, biometrics, and hardware keys'
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      title: 'Real-Time Monitoring',
      description: 'Instant alerts when your passwords are compromised'
    }
  ];

  return (
    <Layout
      title="AI Password Manager - Ultimate Security Solution | Zion Tech Group"
      description="Revolutionary AI-powered password manager with zero-knowledge architecture, breach monitoring, and smart auto-fill. Protect your digital life with military-grade security. Start your free trial today."
      keywords="AI password manager, password security, password generator, secure password storage, breach monitoring, password sharing"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Military-Grade Security
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Password Manager
              <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent block">
                That Protects Everything
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Secure your digital life with our revolutionary AI-powered password manager. 
              Zero-knowledge architecture, breach monitoring, and smart auto-fill for ultimate protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Watch Security Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100M+</div>
                <div className="text-gray-300 text-sm">Passwords Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">0</div>
                <div className="text-gray-300 text-sm">Security Breaches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">4.9★</div>
                <div className="text-gray-300 text-sm">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Military-Grade Security
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your passwords are protected by the highest security standards in the industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-purple-600 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Powerful Features for Ultimate Security
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to secure your digital life and protect your accounts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Simple, Secure Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your security needs. All plans include a 30-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-500 bg-red-500/10' 
                    : 'border-white/20 hover:border-white/40'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-red-600 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-purple-600 text-white hover:from-red-700 hover:to-purple-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    Start Free Trial
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Trusted by Security-Conscious Users
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers are saying about AI Password Manager
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Digital Life?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join millions of users who trust AI Password Manager to protect their most sensitive data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Security Audit
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              No credit card required • 30-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}