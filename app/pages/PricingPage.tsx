import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  X, 
  Star, 
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Users,
  Clock,
  DollarSign,
  MessageSquare,
  Phone
} from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI and IT solutions',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Basic AI Analytics Dashboard',
        'Cloud Hosting (1 Region)',
        'Email Support (24-48h response)',
        'Standard Security Features',
        'Monthly Performance Reports',
        'Basic API Access',
        'Up to 5 Users',
        '10GB Data Storage'
      ],
      limitations: [
        'Limited AI Model Training',
        'Basic Cloud Scaling',
        'Standard Support Only',
        'No Custom Integrations'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing companies that need advanced AI and IT capabilities',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Advanced AI Analytics Platform',
        'Multi-Region Cloud Infrastructure',
        '24/7 Phone & Email Support',
        'Advanced Security Suite',
        'Real-time Monitoring & Alerts',
        'Custom API Integrations',
        'Up to 25 Users',
        '100GB Data Storage',
        'Priority Support',
        'Custom Dashboard Creation',
        'Advanced ML Model Training',
        'Automated Backup & Recovery'
      ],
      limitations: [
        'Limited Custom Development',
        'Standard SLA (99.9%)',
        'Basic Compliance Reporting'
      ],
      popular: true,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations requiring comprehensive AI and IT solutions',
      monthlyPrice: 599,
      yearlyPrice: 5990,
      features: [
        'Full AI Platform Access',
        'Global Cloud Infrastructure',
        'Dedicated Account Manager',
        'Enterprise Security & Compliance',
        'Custom Development Services',
        'SLA Guarantees (99.99%)',
        'Unlimited Users',
        'Unlimited Data Storage',
        'White-label Solutions',
        'Custom AI Model Development',
        'Advanced Analytics & Reporting',
        'Priority Feature Requests',
        'On-site Support Available',
        'Compliance Certifications',
        'Custom Training & Workshops'
      ],
      limitations: [],
      popular: false,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const addOns = [
    {
      name: 'Additional AI Models',
      description: 'Access to premium AI models and custom training',
      monthlyPrice: 99,
      yearlyPrice: 990
    },
    {
      name: 'Extra Cloud Storage',
      description: 'Additional 100GB of cloud storage',
      monthlyPrice: 49,
      yearlyPrice: 490
    },
    {
      name: 'Priority Support',
      description: '24/7 priority support with faster response times',
      monthlyPrice: 199,
      yearlyPrice: 1990
    },
    {
      name: 'Custom Integrations',
      description: 'Custom API integrations and third-party connections',
      monthlyPrice: 299,
      yearlyPrice: 2990
    }
  ];

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "Our free trial includes access to all Professional plan features for 14 days, with no credit card required. You can test our AI analytics, cloud infrastructure, and support services."
    },
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, bank transfers, and can arrange custom billing for enterprise clients."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for Starter and Professional plans. Enterprise plans may include custom setup costs based on specific requirements."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee for all plans. If you're not satisfied, we'll provide a full refund."
    },
    {
      question: "Do you offer custom pricing?",
      answer: "Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team for a personalized quote."
    }
  ];

  const getCurrentPrice = (plan: any) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan: any) => {
    const monthlyTotal = plan.monthlyPrice * 12;
    const yearlyPrice = plan.yearlyPrice;
    return monthlyTotal - yearlyPrice;
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Flexible pricing plans for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Free trial available. Contact us for custom pricing." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud computing costs, business automation pricing, enterprise solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Choose the perfect plan for your business needs. All plans include our core AI and IT services 
              with different levels of support and features.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-4 text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-8 w-16 items-center rounded-full bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-4 text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="ml-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save 17%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`bg-slate-900 rounded-xl p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white">${getCurrentPrice(plan)}</span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="text-green-400 font-semibold">
                      Save ${getSavings(plan)}/year
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, index) => (
                    <li key={index} className="flex items-start">
                      <X className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{limitation}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border-2 border-slate-600 text-white hover:border-cyan-500 hover:bg-slate-800'
                  }`}
                >
                  {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Additional <span className="text-cyan-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with these optional add-ons to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{addon.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">
                  ${getCurrentPrice(addon)}/{billingCycle === 'monthly' ? 'month' : 'year'}
                </div>
                <button className="w-full bg-slate-700 text-white py-2 rounded-lg hover:bg-slate-600 transition-colors">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Plan <span className="text-cyan-400">Comparison</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare features across all our pricing plans to find the perfect fit.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-900 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-700">
                  <th className="px-6 py-4 text-left text-white font-semibold">Features</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Starter</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Professional</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700">
                  <td className="px-6 py-4 text-gray-300">AI Analytics</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="px-6 py-4 text-gray-300">Cloud Infrastructure</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="px-6 py-4 text-gray-300">24/7 Support</td>
                  <td className="px-6 py-4 text-center">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="px-6 py-4 text-gray-300">Custom Integrations</td>
                  <td className="px-6 py-4 text-center">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="px-6 py-4 text-gray-300">Dedicated Account Manager</td>
                  <td className="px-6 py-4 text-center">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300">SLA Guarantee</td>
                  <td className="px-6 py-4 text-center text-gray-400">99%</td>
                  <td className="px-6 py-4 text-center text-gray-400">99.9%</td>
                  <td className="px-6 py-4 text-center text-gray-400">99.99%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="text-cyan-400">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our pricing and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Choose your plan and start transforming your business with our AI and IT solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}