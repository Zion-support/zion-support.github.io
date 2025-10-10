'use client';
import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  Shield, 
  Key, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Brain,
  Zap,
  Smartphone,
  Laptop,
  Globe,
  Settings,
  BarChart,
  Target,
  Award,
  AlertTriangle,
  RefreshCw,
  Download,
  Upload
} from 'lucide-react';

const AIPasswordManagerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Password Generation',
      description: 'Generate ultra-secure passwords using advanced AI algorithms that adapt to each site\'s requirements.',
      benefits: ['Context-aware generation', 'Site-specific optimization', 'Unbreakable complexity', 'Memorable patterns']
    },
    {
      icon: Shield,
      title: 'Advanced Security Monitoring',
      description: 'Real-time monitoring of your passwords and accounts with instant breach notifications and security scoring.',
      benefits: ['Breach detection', 'Security scoring', 'Real-time alerts', 'Risk assessment']
    },
    {
      icon: Zap,
      title: 'One-Click Login',
      description: 'Seamlessly log into any website with biometric authentication and zero-click password filling.',
      benefits: ['Biometric login', 'Auto-fill forms', 'Cross-device sync', 'Instant access']
    },
    {
      icon: Globe,
      title: 'Multi-Platform Sync',
      description: 'Access your passwords securely across all devices with end-to-end encryption and zero-knowledge architecture.',
      benefits: ['Cross-device sync', 'Zero-knowledge', 'End-to-end encryption', 'Offline access']
    },
    {
      icon: BarChart,
      title: 'Security Analytics',
      description: 'Comprehensive security insights and recommendations to improve your overall digital security posture.',
      benefits: ['Security dashboard', 'Weakness detection', 'Improvement suggestions', 'Trend analysis']
    },
    {
      icon: Target,
      title: 'Family & Team Sharing',
      description: 'Securely share passwords with family members or team members with granular permission controls.',
      benefits: ['Secure sharing', 'Permission controls', 'Audit trails', 'Emergency access']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$4.99',
      period: '/month',
      description: 'Perfect for individuals and families',
      features: [
        'Unlimited passwords',
        '5 devices',
        'Basic security monitoring',
        'Password generator',
        'Secure notes',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Family',
      price: '$9.99',
      period: '/month',
      description: 'Ideal for families and small teams',
      features: [
        'Everything in Personal',
        'Up to 10 family members',
        'Advanced security monitoring',
        'Family sharing',
        'Priority support',
        'Dark web monitoring'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$19.99',
      period: '/month',
      description: 'For businesses and organizations',
      features: [
        'Everything in Family',
        'Unlimited team members',
        'Admin dashboard',
        'SSO integration',
        'API access',
        '24/7 support',
        'Compliance reporting'
      ],
      popular: false
    }
  ];

  const securityFeatures = [
    {
      title: 'Zero-Knowledge Architecture',
      description: 'Your master password never leaves your device. We can\'t see your passwords even if we wanted to.',
      icon: Lock
    },
    {
      title: 'End-to-End Encryption',
      description: 'All data is encrypted with AES-256 encryption before it leaves your device.',
      icon: Shield
    },
    {
      title: 'Biometric Authentication',
      description: 'Use fingerprint, face ID, or Windows Hello for secure and convenient access.',
      icon: Smartphone
    },
    {
      title: 'Dark Web Monitoring',
      description: 'We continuously monitor the dark web for your credentials and alert you immediately.',
      icon: AlertTriangle
    }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      content: 'AI Password Manager has completely changed how I handle passwords. The AI generation is incredibly smart and the security monitoring gives me peace of mind.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Small Business Owner',
      content: 'Managing passwords for my team was a nightmare. This tool makes it so easy and secure. The family plan is perfect for our needs.',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      role: 'IT Director',
      content: 'The business features are excellent. The admin dashboard and compliance reporting help us maintain security standards across the organization.',
      rating: 5
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 text-white">
                <Lock className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Password Manager Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The world's most intelligent password manager. Let AI generate, secure, and manage your passwords while keeping you safe from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Advanced Security Made Simple
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of password management with AI-powered security and intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 text-white w-fit mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Security Features Section */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-300">
              Your security is our top priority. We use the most advanced encryption and security measures available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 text-white w-fit mx-auto mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Secure Pricing
          </h2>
          <p className="text-xl text-gray-300">
            Choose the plan that fits your security needs. All plans include a 30-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-green-400 ring-2 ring-green-400/50' 
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}>
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Millions Worldwide
            </h2>
            <p className="text-xl text-gray-300">
              See what our users are saying about AI Password Manager Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Secure Your Digital Life Today
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join millions of users who trust AI Password Manager Pro to keep their accounts secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Contact Sales
            </button>
          </div>
          <p className="text-green-100 text-sm mt-4">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIPasswordManagerPage;