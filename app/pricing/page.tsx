import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Sparkles,
  Brain,
  Shield,
  Cloud,
  Zap,
  Globe,
  BarChart3,
  Users,
  Award,
  Clock
} from 'lucide-react';

const PricingPage = () => {
  const aiServicesPricing = [
    {
      name: "AI Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Choose 2 AI services",
        "Basic AI capabilities",
        "Email support",
        "Standard integrations",
        "10GB data storage",
        "Monthly reporting"
      ],
      popular: false,
      category: "AI Services"
    },
    {
      name: "AI Professional",
      price: "$599",
      period: "per month",
      description: "Ideal for growing businesses with advanced AI needs",
      features: [
        "Choose 5 AI services",
        "Advanced AI capabilities",
        "Priority support",
        "All integrations",
        "100GB data storage",
        "Weekly reporting",
        "Custom training",
        "API access"
      ],
      popular: true,
      category: "AI Services"
    },
    {
      name: "AI Enterprise",
      price: "$999",
      period: "per month",
      description: "Complete AI solution for large organizations",
      features: [
        "Unlimited AI services",
        "Premium AI capabilities",
        "24/7 dedicated support",
        "Custom integrations",
        "Unlimited data storage",
        "Real-time reporting",
        "Custom AI models",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false,
      category: "AI Services"
    }
  ];

  const microSaasPricing = [
    {
      name: "Zion AI Analytics Pro",
      price: "$299",
      period: "per month",
      description: "Advanced business intelligence platform",
      features: [
        "Real-time analytics",
        "Predictive modeling",
        "Custom dashboards",
        "API integration",
        "Mobile app access",
        "Team collaboration"
      ],
      popular: true,
      category: "Micro SAAS"
    },
    {
      name: "Zion AI Security Shield",
      price: "$499",
      period: "per month",
      description: "AI-powered cybersecurity protection",
      features: [
        "24/7 threat detection",
        "Automated response",
        "Advanced firewall",
        "Compliance reporting",
        "Vulnerability scanning",
        "Incident response"
      ],
      popular: true,
      category: "Micro SAAS"
    },
    {
      name: "Zion Cloud Vault",
      price: "$99",
      period: "per month",
      description: "Secure cloud storage solution",
      features: [
        "End-to-end encryption",
        "Unlimited storage",
        "File sharing",
        "Version control",
        "Mobile access",
        "Backup management"
      ],
      popular: false,
      category: "Micro SAAS"
    }
  ];

  const itServicesPricing = [
    {
      name: "Basic Cloud Management",
      price: "$1,999",
      period: "per month",
      description: "Perfect for small businesses with basic cloud needs",
      features: [
        "Up to 10 cloud resources",
        "Basic monitoring",
        "Email support",
        "Standard security",
        "Monthly reporting",
        "Backup management"
      ],
      popular: false,
      category: "IT Services"
    },
    {
      name: "Professional Cloud Services",
      price: "$4,999",
      period: "per month",
      description: "Ideal for growing businesses with advanced cloud requirements",
      features: [
        "Up to 50 cloud resources",
        "Advanced monitoring",
        "Priority support",
        "Enhanced security",
        "Weekly reporting",
        "Disaster recovery",
        "Cost optimization",
        "Performance tuning"
      ],
      popular: true,
      category: "IT Services"
    },
    {
      name: "Enterprise Cloud Solutions",
      price: "$9,999",
      period: "per month",
      description: "Complete cloud solution for large organizations",
      features: [
        "Unlimited cloud resources",
        "24/7 monitoring",
        "Dedicated support team",
        "Enterprise security",
        "Real-time reporting",
        "Full disaster recovery",
        "Advanced optimization",
        "Custom integrations",
        "On-premise hybrid"
      ],
      popular: false,
      category: "IT Services"
    }
  ];

  const faqs = [
    {
      question: "Do you offer free trials?",
      answer: "Yes, all our services come with a 14-day free trial. No credit card required to get started."
    },
    {
      question: "Can I change my plan anytime?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any of our services. You only pay the monthly subscription fee."
    },
    {
      question: "Do you offer custom pricing?",
      answer: "Yes, we offer custom pricing for enterprise customers with specific requirements. Contact us for a quote."
    },
    {
      question: "What happens if I cancel?",
      answer: "You can cancel anytime. Your service will continue until the end of your current billing period."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions Pricing</title>
        <meta name="description" content="Transparent pricing for our AI services, micro SAAS solutions, and IT services. Choose the plan that fits your business needs. Starting at $99/month." />
        <meta name="keywords" content="pricing, AI services pricing, micro SAAS pricing, IT services pricing, business intelligence, cybersecurity, cloud services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Transparent Pricing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Simple, Transparent Pricing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Choose the plan that fits your business needs. All plans include 14-day free trial with no credit card required.
          </p>
        </div>
      </section>

      {/* AI Services Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Services Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServicesPricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-purple-500/20' 
                    : 'border-white/20 hover:border-purple-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700 shadow-lg hover:shadow-purple-500/25'
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use software solutions for immediate deployment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Services Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions for your infrastructure needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itServicesPricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-blue-500/50 shadow-blue-500/20' 
                    : 'border-white/20 hover:border-blue-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25'
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our pricing and services
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Choose your plan and start your free trial today. No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;