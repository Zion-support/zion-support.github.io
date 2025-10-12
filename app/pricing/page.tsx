'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Zap,
  Shield,
  Clock,
  Users,
  Database,
  Cloud,
  Brain,
  Code,
  Wifi
} from 'lucide-react'
import { Link } from 'react-router-dom'

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Up to 10 AI models',
        'Basic analytics',
        'Email support',
        'Standard security',
        '5GB storage'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 50 AI models',
        'Advanced analytics',
        'Priority support',
        'Enhanced security',
        '50GB storage',
        'API access',
        'Custom integrations'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited AI models',
        'Custom analytics',
        '24/7 dedicated support',
        'Enterprise security',
        'Unlimited storage',
        'Full API access',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false,
      color: 'from-green-500 to-blue-500'
    }
  ]

  const microSaasPlans = [
    {
      name: 'Basic',
      price: '$19',
      period: '/month',
      description: 'Essential micro SaaS tools',
      features: [
        '1 Micro SaaS app',
        'Basic support',
        'Standard features',
        'Email notifications'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/month',
      description: 'Advanced micro SaaS suite',
      features: [
        'Up to 5 Micro SaaS apps',
        'Priority support',
        'Advanced features',
        'API access',
        'Custom integrations',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$99',
      period: '/month',
      description: 'Complete micro SaaS solution',
      features: [
        'Unlimited Micro SaaS apps',
        '24/7 support',
        'All features',
        'Full API access',
        'White-label options',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance from our expert team'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Scalable Infrastructure',
      description: 'Grows with your business needs'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Fast Performance',
      description: 'Optimized for speed and reliability'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Pricing - Zion Tech Group AI and IT Solutions"
        description="Flexible pricing plans for AI solutions, micro SaaS services, and IT consulting. Choose the perfect plan for your business. Contact us at +1 302 464 0950"
        keywords="pricing, plans, AI solutions, micro SaaS, IT services, subscription, cost"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
              💰 Transparent Pricing
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Simple
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Choose the perfect plan for your business. No hidden fees, no surprises. 
            All plans include a 14-day free trial.
          </p>
        </div>
      </section>

      {/* AI Services Pricing */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Services Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to scale with your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl transform hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/40 shadow-2xl shadow-cyan-500/10' 
                  : 'border-white/10 hover:border-cyan-400/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Pricing */}
      <section className="py-24 px-4 bg-gradient-to-r from-gray-900/50 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Micro SaaS Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use micro SaaS applications for your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl transform hover:scale-105 ${
                plan.popular 
                  ? 'border-green-400/40 shadow-2xl shadow-green-500/10' 
                  : 'border-white/10 hover:border-green-400/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 shadow-lg hover:shadow-green-500/25'
                      : 'border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Us?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All our plans include these essential features to help your business succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/40 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10 transform hover:scale-105">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl p-12 border border-cyan-500/30 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't see what you need? We offer custom solutions tailored to your specific requirements. 
                Contact us for a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Now
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Learn More
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-cyan-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PricingPage
