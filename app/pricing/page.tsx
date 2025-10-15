import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  Clock,
  Phone,
  Mail
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const microSaasPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "1 AI Content Writer",
        "Basic analytics",
        "Email support",
        "5GB storage",
        "Up to 10 users"
      ],
      popular: false,
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        "3 AI tools included",
        "Advanced analytics",
        "Priority support",
        "50GB storage",
        "Up to 50 users",
        "API access",
        "Custom integrations"
      ],
      popular: true,
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        "All AI tools",
        "Custom analytics",
        "24/7 phone support",
        "Unlimited storage",
        "Unlimited users",
        "Dedicated account manager",
        "Custom development",
        "SLA guarantee"
      ],
      popular: false,
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const aiServicesPlans = [
    {
      name: "Consultation",
      description: "AI strategy and planning",
      price: "$150/hour",
      features: [
        "AI readiness assessment",
        "Strategy development",
        "Technology recommendations",
        "Implementation roadmap"
      ],
      popular: false
    },
    {
      name: "Custom Development",
      description: "Tailored AI solutions",
      price: "Starting at $5,000",
      features: [
        "Custom AI model development",
        "Data preprocessing",
        "Model training & testing",
        "Deployment & integration",
        "3 months support"
      ],
      popular: true
    },
    {
      name: "AI Maintenance",
      description: "Ongoing AI support",
      price: "$500/month",
      features: [
        "Model monitoring",
        "Performance optimization",
        "Regular updates",
        "Technical support",
        "Monthly reports"
      ],
      popular: false
    }
  ];

  const itServicesPlans = [
    {
      name: "Basic Support",
      description: "Essential IT support",
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        "Remote support",
        "System monitoring",
        "Security updates",
        "Backup management",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Managed Services",
      description: "Comprehensive IT management",
      monthlyPrice: 799,
      yearlyPrice: 7990,
      features: [
        "24/7 monitoring",
        "Proactive maintenance",
        "Security management",
        "Cloud management",
        "Phone support",
        "Monthly reports"
      ],
      popular: true
    },
    {
      name: "Enterprise IT",
      description: "Full IT transformation",
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      features: [
        "Dedicated team",
        "Custom solutions",
        "Infrastructure design",
        "Migration services",
        "Training & documentation",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately for upgrades and at the next billing cycle for downgrades."
    },
    {
      question: "Do you offer custom pricing?",
      answer: "Absolutely! We offer custom pricing for enterprise clients with specific requirements. Contact our sales team to discuss your needs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and can accommodate enterprise payment terms for qualified clients."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all Micro SAAS plans. No credit card required to get started."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI & IT Services</title>
        <meta name="description" content="Transparent pricing for our AI services, IT solutions, and Micro SAAS products. Choose the plan that fits your business needs and budget." />
        <meta name="keywords" content="pricing, AI services pricing, IT services cost, micro saas pricing, business solutions" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for AI and IT services" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Transparent</span> Pricing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Choose the perfect plan for your business. No hidden fees, no surprises.
                Scale up or down as your needs change.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-12">
                <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                  Yearly
                </span>
                {billingCycle === 'yearly' && (
                  <span className="ml-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    Save 20%
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Micro SAAS Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI-powered tools to automate and optimize your business processes
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {microSaasPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-500/40'
                }`}>
                  {plan.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {plan.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 text-center">
                    {plan.description}
                  </p>
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-white mb-2">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      <span className="text-lg text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm">
                        Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice}/year
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Custom AI solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {aiServicesPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-500/40'
                }`}>
                  {plan.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 text-center">
                    {plan.description}
                  </p>
                  
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-white">
                      {plan.price}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    Contact Sales
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT support and management solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {itServicesPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-500/40'
                }`}>
                  {plan.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 text-center">
                    {plan.description}
                  </p>
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-white mb-2">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      <span className="text-lg text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm">
                        Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice}/year
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Common questions about our pricing and services
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact our team to discuss your specific needs and get a custom quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Contact Sales
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;