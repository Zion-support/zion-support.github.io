import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Users, 
  Building2,
  TrendingUp,
  Award,
  Clock,
  MessageSquare,
  Phone,
  Mail,
  Globe
} from 'lucide-react';

export default function PricingPage(props: any) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 99 9,
      yearlyPrice: 999 9,
      icon: Za p,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'AI Business Intelligence Dashboard',
        'Basic Cybersecurity Protection',
        'Cloud Infrastructure Setup',
        '5 User Licenses',
        'Email Support',
        'Basic Analytics',
        'Monthly Reports',
        'Standard SLA'
      ],
      popular: fals e
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and mid-size companies',
      monthlyPrice: 249 9,
      yearlyPrice: 2499 9,
      icon: Shiel d,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Everything in Starter, plus:',
        'Advanced AI & Machine Learning',
        'Comprehensive Cybersecurity Suite',
        'DevOps Automation',
        '25 User Licenses',
        'Priority Support',
        'Advanced Analytics',
        'Weekly Reports',
        'Enhanced SLA (99.5%)',
        'Custom Integrations',
        'Training & Onboarding'
      ],
      popular: tru e
    },
    {
      name: 'Enterprise',
      description: 'For large organizations requiring enterprise-grade solutions',
      monthlyPrice: 499 9,
      yearlyPrice: 4999 9,
      icon: Building 2,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Everything in Professional, plus:',
        'Custom AI Solutions Development',
        'Zero-Trust Security Architecture',
        'Full DevOps Transformation',
        'Unlimited User Licenses',
        '24/7 Dedicated Support',
        'Real-time Analytics & Monitoring',
        'Custom Reporting',
        'Premium SLA (99.9%)',
        'White-label Solutions',
        'Dedicated Account Manager',
        'On-site Implementation',
        'Compliance & Audit Support'
      ],
      popular: fals e
    }
  ];

  const servicePackages = [
    {
      name: 'AI & Machine Learning',
      icon: Brai n,
      description: 'Cutting-edge artificial intelligence solutions',
      startingPrice: 250 0,
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Machine Learning Models',
        'AI Strategy Consulting',
        'Custom AI Development'
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shiel d,
      description: 'Comprehensive security and compliance solutions',
      startingPrice: 300 0,
      features: [
        'Security Assessment',
        'Penetration Testing',
        'Compliance Management',
        'Incident Response',
        'Security Monitoring',
        'Employee Training'
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Clou d,
      description: 'Scalable cloud infrastructure and automation',
      startingPrice: 200 0,
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'CI/CD Pipelines',
        'Performance Optimization',
        'Cost Optimization',
        'Monitoring & Logging'
      ]
    },
    {
      name: 'Digital Transformation',
      icon: TrendingU p,
      description: 'End-to-end business transformation services',
      startingPrice: 500 0,
      features: [
        'Strategy Development',
        'Process Optimization',
        'Technology Assessment',
        'Change Management',
        'Training & Support',
        'ROI Measurement'
      ]
    }
  ];

  const addOns = [
    {
      name: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring',
      price: 50 0,
      icon: Cloc k
    },
    {
      name: 'Custom Development',
      description: 'Tailored solutions for your specific needs',
      price: 15 0,
      icon: User s
    },
    {
      name: 'Training & Certification',
      description: 'Comprehensive training for your team',
      price: 20 0,
      icon: Awar d
    },
    {
      name: 'Compliance & Audit',
      description: 'Industry-specific compliance support',
      price: 30 0,
      icon: Shiel d
    }
  ];

  const getYearlyDiscount = (props: any) => {
    return Math.round((monthlyPrice * 12 - monthlyPrice * 10) / (monthlyPrice * 12) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8 text-center">
          <h1 className="text-5xl md: tex t-6xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md: tex t-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our core features with flexible scaling options.
          </p>
          <div className="flex flex-col sm: fle x-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover: fro m-blue-600 hover: t o-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover: scal e-105"
            >
              Get Custom Quote
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white hover: b g-white hover: tex t-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-lg">
              <div className="flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover: tex t-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    billingCycle === 'yearly'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-blue-600'
                  }`}
                >
                  Yearly
                  <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Save {getYearlyDiscount(999)}%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
          <div className="grid grid-cols-1 md: gri d-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover: shado w-xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-center mb-6">{plan.description}</p>
                  
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-gray-900">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </div>
                    <div className="text-gray-600">
                      {billingCycle === 'monthly' ? 'per month' : 'per year'}
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"  />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover: fro m-purple-600 hover: t o-pink-600 text-white hover: scal e-105'
                        : 'bg-gray-100 hover: b g-gray-200 text-gray-900'
                    }`}
                  >
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom solutions tailored to your specific business needs and requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
            {servicePackages.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover: b g-white hover: shado w-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{service.name}</h3>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">From ${service.startingPrice}</span>
                  <span className="text-gray-600 text-sm">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <Check className="w-4 h-4 text-green-500"  />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover: fro m-blue-700 hover: t o-purple-700 text-white py-3 px-4 rounded-lg font-semibold text-center block transition-all duration-300 hover: scal e-105"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your plan with these additional services and support options.
            </p>
          </div>
          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover: shado w-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <addon.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{addon.name}</h3>
                <p className="text-gray-600 mb-4 text-center">{addon.description}</p>
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-green-600">${addon.price}</span>
                  <span className="text-gray-600 text-sm">/month</span>
                </div>
                <Link
                  to="/contact"
                  className="w-full bg-green-600 hover: b g-green-700 text-white py-3 px-4 rounded-lg font-semibold text-center block transition-all duration-300"
                >
                  Add Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm: p x-6 lg: p x-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our pricing and services.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I change my plan later?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Is there a setup fee?</h3>
              <p className="text-gray-600">No setup fees for our standard plans. Custom enterprise solutions may have one-time implementation costs.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's included in support?</h3>
              <p className="text-gray-600">All plans include email support. Professional and Enterprise plans include priority support and dedicated account management.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer custom solutions?</h3>
              <p className="text-gray-600">Yes, we specialize in custom development and can create tailored solutions for your specific business requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm: p x-6 lg: p x-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your specific needs and get a custom quote tailored to your business.
          </p>
          <div className="flex flex-col sm: fle x-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover: b g-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover: scal e-105"
            >
              Get Custom Quote
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white hover: b g-white hover: tex t-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

</string>