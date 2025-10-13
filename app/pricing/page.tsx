import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  Star, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Users, 
  Award,
  Crown,
  Diamond,
  Rocket
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const PricingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "Transparent pricing for AI, IT, and Micro SAAS solutions",
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Plan",
        "price": "99",
        "priceCurrency": "USD",
        "description": "Perfect for small businesses getting started"
      },
      {
        "@type": "Offer",
        "name": "Professional Plan",
        "price": "299",
        "priceCurrency": "USD",
        "description": "Ideal for growing businesses"
      },
      {
        "@type": "Offer",
        "name": "Enterprise Plan",
        "price": "599",
        "priceCurrency": "USD",
        "description": "Complete solution for large organizations"
      }
    ]
  };

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with AI and automation",
      price: "$99",
      period: "per month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      popular: false,
      features: [
        "Up to 5 AI services",
        "Basic analytics dashboard",
        "Email support",
        "Standard security features",
        "1TB cloud storage",
        "Basic automation tools",
        "Mobile app access",
        "Monthly reports"
      ],
      limitations: [
        "Limited API calls",
        "Basic customization",
        "Standard uptime SLA"
      ],
      cta: "Start Free Trial",
      ctaLink: "/contact"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses that need advanced AI capabilities",
      price: "$299",
      period: "per month",
      icon: <Crown className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      popular: true,
      features: [
        "Up to 15 AI services",
        "Advanced analytics dashboard",
        "Priority support",
        "Advanced security features",
        "5TB cloud storage",
        "Advanced automation tools",
        "Mobile & desktop access",
        "Weekly reports",
        "Custom integrations",
        "API access",
        "Advanced customization",
        "99.9% uptime SLA"
      ],
      limitations: [
        "Limited custom development"
      ],
      cta: "Start Free Trial",
      ctaLink: "/contact"
    },
    {
      name: "Enterprise",
      description: "Complete solution for large organizations with custom requirements",
      price: "$599",
      period: "per month",
      icon: <Diamond className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      popular: false,
      features: [
        "Unlimited AI services",
        "Custom analytics dashboard",
        "24/7 dedicated support",
        "Enterprise security features",
        "Unlimited cloud storage",
        "Full automation suite",
        "All platform access",
        "Real-time reports",
        "Custom integrations",
        "Full API access",
        "Complete customization",
        "99.99% uptime SLA",
        "Dedicated account manager",
        "Custom development",
        "On-premise deployment",
        "SLA guarantees"
      ],
      limitations: [],
      cta: "Contact Sales",
      ctaLink: "/contact"
    }
  ];

  const addOnServices = [
    {
      name: "AI Development Services",
      description: "Custom AI model development and training",
      price: "From $2,000/month",
      icon: <Brain className="w-6 h-6" />,
      features: ["Custom AI models", "Model training", "Performance optimization", "Ongoing maintenance"]
    },
    {
      name: "Cybersecurity Audit",
      description: "Comprehensive security assessment and protection",
      price: "From $1,500/month",
      icon: <Shield className="w-6 h-6" />,
      features: ["Security audit", "Threat assessment", "Compliance reporting", "Incident response"]
    },
    {
      name: "Cloud Migration",
      description: "Complete cloud infrastructure migration and optimization",
      price: "From $3,000/month",
      icon: <Globe className="w-6 h-6" />,
      features: ["Infrastructure migration", "Data migration", "Performance optimization", "Training"]
    },
    {
      name: "Custom Development",
      description: "Bespoke software development and integration",
      price: "From $5,000/month",
      icon: <Rocket className="w-6 h-6" />,
      features: ["Custom applications", "System integration", "API development", "Maintenance"]
    }
  ];

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "Our free trial includes access to all Starter plan features for 14 days, with no credit card required. You can upgrade, downgrade, or cancel at any time."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "Do you offer custom pricing?",
      answer: "Yes, we offer custom pricing for Enterprise customers with specific requirements. Contact our sales team to discuss your needs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay via invoice."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any of our plans. You only pay the monthly subscription fee."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you before you reach your limits and offer options to upgrade or purchase additional capacity."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Pricing Plans - AI, IT & Micro SAAS Solutions | Zion Tech Group"
        description="Transparent pricing for our comprehensive suite of AI services, IT solutions, and micro SAAS applications. Choose the perfect plan for your business needs."
        keywords="pricing, AI services pricing, IT solutions cost, micro SAAS pricing, business automation pricing"
        canonical="https://ziontechgroup.com/pricing"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Transparent Pricing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Simple, Transparent Pricing
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs. All plans include our core AI services, 
            IT solutions, and micro SAAS applications with no hidden fees.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-purple-500/20 shadow-2xl scale-105' 
                    : 'border-white/20 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-white shadow-lg`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-white font-semibold mb-4">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-center space-x-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={plan.ctaLink}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-purple-500/25'
                      : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Add-on Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your experience with our additional professional services and custom solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{service.price}</p>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our pricing? We've got answers to the most common questions.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Start your free trial today and experience the power of our AI-driven solutions. 
            No credit card required, cancel anytime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Contact Sales
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;