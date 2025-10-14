import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  XMarkIcon,
  ArrowRightIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const microSaaSPricing = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "Up to 1,000 AI generations/month",
        "Basic analytics dashboard",
        "Email support",
        "Standard templates",
        "Basic integrations"
      ],
      limitations: [
        "Limited customization",
        "No API access",
        "Basic reporting"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        "Up to 10,000 AI generations/month",
        "Advanced analytics dashboard",
        "Priority support",
        "Custom templates",
        "API access",
        "Advanced integrations",
        "Team collaboration",
        "Custom branding"
      ],
      limitations: [],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        "Unlimited AI generations",
        "Custom analytics dashboard",
        "24/7 dedicated support",
        "Fully custom templates",
        "Full API access",
        "All integrations",
        "Advanced team management",
        "White-label solution",
        "Custom training",
        "SLA guarantee"
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const aiServicesPricing = [
    {
      name: "AI Consulting",
      description: "Strategic AI implementation guidance",
      price: "Custom",
      features: [
        "AI readiness assessment",
        "Strategy development",
        "Technology selection",
        "Implementation planning",
        "ROI analysis",
        "Ongoing support"
      ],
      cta: "Get Quote"
    },
    {
      name: "ML Development",
      description: "Custom machine learning solutions",
      price: "Starting at $5,000",
      features: [
        "Custom model development",
        "Data preprocessing",
        "Model training & testing",
        "Deployment & scaling",
        "Performance monitoring",
        "Documentation & training"
      ],
      cta: "Get Quote"
    },
    {
      name: "Computer Vision",
      description: "Advanced image processing solutions",
      price: "Starting at $3,000",
      features: [
        "Image recognition systems",
        "Object detection",
        "Visual analytics",
        "Real-time processing",
        "Custom training data",
        "Integration support"
      ],
      cta: "Get Quote"
    },
    {
      name: "NLP Solutions",
      description: "Natural language processing applications",
      price: "Starting at $4,000",
      features: [
        "Text analysis & processing",
        "Sentiment analysis",
        "Language translation",
        "Conversational AI",
        "Document processing",
        "API development"
      ],
      cta: "Get Quote"
    }
  ];

  const itServicesPricing = [
    {
      name: "Cloud Infrastructure",
      description: "Complete cloud management services",
      price: "Starting at $2,500/month",
      features: [
        "Cloud migration planning",
        "Infrastructure setup",
        "Cost optimization",
        "Security hardening",
        "24/7 monitoring",
        "Performance optimization"
      ],
      cta: "Get Quote"
    },
    {
      name: "Cybersecurity",
      description: "Comprehensive security solutions",
      price: "Starting at $1,500/month",
      features: [
        "Security assessment",
        "Threat monitoring",
        "Penetration testing",
        "Compliance auditing",
        "Incident response",
        "Security training"
      ],
      cta: "Get Quote"
    },
    {
      name: "Digital Transformation",
      description: "End-to-end business transformation",
      price: "Custom",
      features: [
        "Process analysis",
        "Technology integration",
        "Change management",
        "Staff training",
        "Performance monitoring",
        "Ongoing support"
      ],
      cta: "Get Quote"
    },
    {
      name: "5G Solutions",
      description: "Next-generation connectivity",
      price: "Starting at $10,000/project",
      features: [
        "5G network planning",
        "Infrastructure deployment",
        "IoT integration",
        "Performance testing",
        "Maintenance support",
        "Training & documentation"
      ],
      cta: "Get Quote"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI solutions, IT services, and micro SaaS platforms. Choose the perfect plan for your business needs." />
        <meta name="keywords" content="AI pricing, IT services pricing, micro SaaS pricing, cloud computing costs, cybersecurity pricing" />
        <meta property="og:title" content="Pricing - Zion Tech Group | Transparent Pricing for AI & IT Solutions" />
        <meta property="og:description" content="Transparent pricing for AI solutions, IT services, and micro SaaS platforms. Choose the perfect plan for your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Choose the perfect plan for your business needs. No hidden fees, no surprises.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`text-sm font-medium mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ml-3 ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-1 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Save 20%</span>
              </span>
            </div>
          </div>
        </section>

        {/* Micro SaaS Pricing */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Micro <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SaaS Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Affordable micro SaaS solutions with transparent pricing and no hidden costs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {microSaaSPricing.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/20' 
                    : 'border-slate-600 hover:border-purple-400'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-green-400 text-sm font-medium">
                        Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                      </p>
                    )}
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                        : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Custom AI solutions tailored to your specific business requirements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServicesPricing.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="w-full block text-center py-3 px-6 rounded-lg font-semibold border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    {service.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IT <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions with flexible pricing options.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServicesPricing.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-green-400 mb-4">{service.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="w-full block text-center py-3 px-6 rounded-lg font-semibold border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white transition-all duration-300"
                  >
                    {service.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-600">
                  <h3 className="text-xl font-semibold text-white mb-4">Do you offer free trials?</h3>
                  <p className="text-gray-300">
                    Yes! All our micro SaaS solutions come with a 14-day free trial. No credit card required. 
                    For custom AI and IT services, we offer free consultations and project assessments.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-600">
                  <h3 className="text-xl font-semibold text-white mb-4">Can I change my plan anytime?</h3>
                  <p className="text-gray-300">
                    Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                    and we'll prorate any billing differences.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-600">
                  <h3 className="text-xl font-semibold text-white mb-4">What payment methods do you accept?</h3>
                  <p className="text-gray-300">
                    We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. 
                    Enterprise customers can also pay via invoice.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-600">
                  <h3 className="text-xl font-semibold text-white mb-4">Do you offer custom pricing for large organizations?</h3>
                  <p className="text-gray-300">
                    Yes! We offer custom pricing and enterprise plans for large organizations with specific requirements. 
                    Contact our sales team to discuss your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Have questions about our pricing? Need a custom quote? Our team is here to help you choose the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                Contact Sales
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <EnvelopeIcon className="w-5 h-5" />
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PricingPage;
