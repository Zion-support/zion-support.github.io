import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap,
  Brain,
  Cpu,
  Cloud,
  Shield,
  Smartphone,
  BarChart3,
  Target,
  Rocket,
  Users,
  Award,
  Clock,
  Globe,
  Lock,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 999, yearly: 9999 },
      features: [
        'Basic AI Integration',
        'Up to 5 users',
        '10GB storage',
        'Email support',
        'Basic analytics',
        'Mobile app access'
      ],
      limitations: [
        'Limited AI features',
        'Basic customization',
        'Standard support hours'
      ],
      color: 'from-blue-500 to-cyan-600',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: { monthly: 2499, yearly: 24999 },
      features: [
        'Advanced AI Solutions',
        'Up to 25 users',
        '100GB storage',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'API access',
        'Training sessions'
      ],
      limitations: [
        'Limited custom development',
        'Standard SLA'
      ],
      color: 'from-purple-500 to-pink-600',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: { monthly: 4999, yearly: 49999 },
      features: [
        'Full AI Suite',
        'Unlimited users',
        'Unlimited storage',
        '24/7 dedicated support',
        'Custom analytics',
        'White-label solutions',
        'Advanced API access',
        'Dedicated account manager',
        'Custom development',
        'SLA guarantee',
        'On-site training',
        'Priority feature requests'
      ],
      limitations: [],
      color: 'from-cyan-500 to-blue-600',
      popular: false
    }
  ];

  const microSaaSPricing = [
    {
      name: 'AI Project Manager',
      description: 'Intelligent project management with AI insights',
      price: { monthly: 49, yearly: 490 },
      features: [
        'Smart task assignment',
        'Progress prediction',
        'Resource optimization',
        'Team collaboration',
        'Mobile app',
        'Basic reporting'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'AI Content Writer',
      description: 'AI-powered content creation and optimization',
      price: { monthly: 29, yearly: 290 },
      features: [
        'SEO optimization',
        'Multi-language support',
        'Brand voice matching',
        'Content planning',
        'Plagiarism check',
        'Social media integration'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive analytics with real-time insights',
      price: { monthly: 79, yearly: 790 },
      features: [
        'Custom dashboards',
        'Real-time data',
        'Predictive analytics',
        'Automated reports',
        'Data visualization',
        'API integration'
      ],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'AI Email Marketing',
      description: 'Intelligent email marketing with personalization',
      price: { monthly: 39, yearly: 390 },
      features: [
        'Smart segmentation',
        'A/B testing',
        'Send time optimization',
        'Performance analytics',
        'Template library',
        'Automation workflows'
      ],
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const addOnServices = [
    {
      name: 'Custom Development',
      description: 'Bespoke software solutions tailored to your needs',
      price: 'Starting at $150/hour',
      features: ['Custom features', 'Integration services', 'API development', 'Mobile apps']
    },
    {
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud hosting and infrastructure management',
      price: 'Starting at $200/month',
      features: ['AWS/Azure setup', 'Auto-scaling', 'Security monitoring', 'Backup solutions']
    },
    {
      name: 'AI Consulting',
      description: 'Strategic AI implementation and optimization',
      price: 'Starting at $200/hour',
      features: ['AI strategy', 'Data analysis', 'Model optimization', 'Training programs']
    },
    {
      name: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring',
      price: 'Starting at $500/month',
      features: ['Priority support', 'Dedicated engineer', 'SLA guarantee', 'Proactive monitoring']
    }
  ];

  const faqs = [
    {
      question: 'What\'s included in the free trial?',
      answer: 'Our free trial includes access to all core features for 14 days, with no credit card required. You can test our AI solutions, project management tools, and analytics dashboard.'
    },
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Absolutely! We offer custom pricing for enterprise clients with specific requirements. Contact our sales team to discuss your needs.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. Enterprise clients can also pay via invoice.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for our standard plans. Custom implementations may have associated setup costs, which we\'ll discuss upfront.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide email support for Starter plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise plans.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Solutions Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from our flexible plans or get custom pricing for enterprise needs." />
        <meta name="keywords" content="pricing, plans, AI solutions pricing, IT services cost, enterprise pricing, micro SAAS pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Simple,
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Transparent
              </span>
              {' '}Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions 
              with no hidden fees or surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-slate-700 rounded-lg p-1 flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  billingCycle === 'yearly'
                    ? 'bg-cyan-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Yearly
                <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Save 20%</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                  : 'border-slate-600/50 hover:border-cyan-500/50'
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
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white'
                        : 'border-2 border-slate-600 hover:border-cyan-400 text-white hover:bg-cyan-600'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>

                <div className="space-y-4">
                  <h4 className="text-white font-semibold mb-4">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.limitations.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-slate-600">
                    <h4 className="text-gray-400 font-semibold mb-3 text-sm">Limitations:</h4>
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <span className="text-gray-400 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Pricing */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Micro SAAS Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Individual tools and applications available as standalone services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microSaaSPricing.map((saas, index) => (
              <div key={index} className="bg-slate-700/50 hover:bg-slate-700/70 p-6 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-12 h-12 bg-gradient-to-r ${saas.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{saas.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{saas.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">
                    ${billingCycle === 'monthly' ? saas.price.monthly : saas.price.yearly}
                  </span>
                  <span className="text-gray-400 ml-1">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {saas.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center block"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Add-on Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Additional services to enhance your solution and support your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions about our pricing and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Choose your plan or contact us for a custom solution tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;