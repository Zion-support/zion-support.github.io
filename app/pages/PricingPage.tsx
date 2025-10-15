import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import { 
  CheckCircle, 
  X, 
  Star, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Smartphone, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  BarChart3, 
  Settings, 
  Award, 
  TrendingUp, 
  Target, 
  Rocket,
  DollarSign,
  Clock,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Crown,
  Sparkles
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const microSaasPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and content creators",
      monthlyPrice: 29,
      yearlyPrice: 290,
      originalMonthlyPrice: 49,
      originalYearlyPrice: 490,
      features: [
        "10,000 words per month",
        "5 content templates",
        "Basic SEO optimization",
        "Email support",
        "1 brand voice profile",
        "Basic analytics",
        "1 user account"
      ],
      limitations: [
        "Limited templates",
        "Basic support only",
        "No API access"
      ],
      popular: false,
      icon: Smartphone,
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and marketing teams",
      monthlyPrice: 59,
      yearlyPrice: 590,
      originalMonthlyPrice: 99,
      originalYearlyPrice: 990,
      features: [
        "50,000 words per month",
        "Unlimited templates",
        "Advanced SEO optimization",
        "Priority support",
        "5 brand voice profiles",
        "Advanced analytics",
        "Social media integration",
        "Plagiarism detection",
        "5 user accounts",
        "API access"
      ],
      limitations: [],
      popular: true,
      icon: Brain,
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Enterprise",
      description: "For large organizations with high content needs",
      monthlyPrice: 149,
      yearlyPrice: 1490,
      originalMonthlyPrice: 249,
      originalYearlyPrice: 2490,
      features: [
        "Unlimited words",
        "All templates + custom",
        "Full SEO suite",
        "24/7 dedicated support",
        "Unlimited brand voices",
        "Enterprise analytics",
        "Full API access",
        "White-label options",
        "Unlimited user accounts",
        "Custom integrations",
        "Dedicated account manager"
      ],
      limitations: [],
      popular: false,
      icon: Crown,
      color: "from-orange-500 to-red-600"
    }
  ];

  const aiSolutionsPlans = [
    {
      name: "AI Starter",
      description: "Basic AI solutions for small businesses",
      monthlyPrice: 2000,
      yearlyPrice: 20000,
      features: [
        "Custom AI model development",
        "Basic data preprocessing",
        "Model training and deployment",
        "Email support",
        "Monthly performance reports",
        "1 AI specialist"
      ],
      popular: false,
      icon: Brain,
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "AI Professional",
      description: "Advanced AI solutions for growing businesses",
      monthlyPrice: 5000,
      yearlyPrice: 50000,
      features: [
        "Advanced AI model development",
        "Full data preprocessing pipeline",
        "Model training and deployment",
        "Priority support",
        "Real-time monitoring",
        "Weekly performance reports",
        "3 AI specialists",
        "Custom integrations"
      ],
      popular: true,
      icon: Zap,
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "AI Enterprise",
      description: "Complete AI transformation for large organizations",
      monthlyPrice: 10000,
      yearlyPrice: 100000,
      features: [
        "Full AI transformation",
        "Custom AI architecture",
        "Advanced data pipelines",
        "24/7 dedicated support",
        "Real-time monitoring and alerts",
        "Daily performance reports",
        "Dedicated AI team",
        "Custom integrations",
        "White-label solutions",
        "Dedicated account manager"
      ],
      popular: false,
      icon: Crown,
      color: "from-orange-500 to-red-600"
    }
  ];

  const itServicesPlans = [
    {
      name: "IT Basic",
      description: "Essential IT services for small businesses",
      monthlyPrice: 1500,
      yearlyPrice: 15000,
      features: [
        "Basic cloud setup",
        "Security monitoring",
        "Email support",
        "Monthly maintenance",
        "1 IT specialist",
        "Basic reporting"
      ],
      popular: false,
      icon: Cloud,
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "IT Professional",
      description: "Comprehensive IT services for growing businesses",
      monthlyPrice: 3500,
      yearlyPrice: 35000,
      features: [
        "Full cloud infrastructure",
        "Advanced security suite",
        "Priority support",
        "Weekly maintenance",
        "3 IT specialists",
        "Advanced monitoring",
        "Custom integrations",
        "Performance optimization"
      ],
      popular: true,
      icon: Shield,
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "IT Enterprise",
      description: "Complete IT transformation for large organizations",
      monthlyPrice: 7500,
      yearlyPrice: 75000,
      features: [
        "Complete IT transformation",
        "Enterprise cloud architecture",
        "Advanced security suite",
        "24/7 dedicated support",
        "Daily maintenance",
        "Dedicated IT team",
        "Custom integrations",
        "White-label solutions",
        "Dedicated account manager",
        "Compliance management"
      ],
      popular: false,
      icon: Crown,
      color: "from-orange-500 to-red-600"
    }
  ];

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "Our free trial includes access to all basic features of the selected plan for 14 days. No credit card required, and you can cancel anytime."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "Do you offer custom pricing?",
      answer: "Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team to discuss your needs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, bank transfers, and can arrange custom payment terms for enterprise clients."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any of our plans. You only pay the monthly or yearly subscription fee."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for all our services. If you're not satisfied, we'll provide a full refund."
    }
  ];

  const renderPricingCard = (plan: any, index: number) => {
    const currentPrice = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
    const originalPrice = billingCycle === 'monthly' ? plan.originalMonthlyPrice : plan.originalYearlyPrice;
    const savings = originalPrice - currentPrice;
    const savingsPercent = Math.round((savings / originalPrice) * 100);

    return (
      <div key={index} className={`bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-xl relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
        {plan.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center">
            <Sparkles className="w-4 h-4 mr-1" />
            Most Popular
          </div>
        )}
        
        <div className="text-center mb-8">
          <div className={`bg-gradient-to-r ${plan.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
            <plan.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <p className="text-gray-300 mb-4">{plan.description}</p>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-4xl font-bold text-cyan-400">${currentPrice.toLocaleString()}</span>
            <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
          </div>
          {savings > 0 && (
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-500 line-through">${originalPrice.toLocaleString()}</span>
              <span className="bg-green-900 text-green-300 text-sm px-2 py-1 rounded">
                Save {savingsPercent}%
              </span>
            </div>
          )}
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-center text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
          {plan.limitations.map((limitation: string, idx: number) => (
            <li key={idx} className="flex items-center text-gray-500">
              <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
              {limitation}
            </li>
          ))}
        </ul>

        <a 
          href="/contact"
          className={`w-full text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
            plan.popular
              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
              : 'bg-slate-700 hover:bg-slate-600 text-white'
          }`}
        >
          Get Started
        </a>
      </div>
    );
  };

  return (
    <>
      <SEOHead
        title="Pricing - Zion Tech Group | AI & IT Solutions Pricing Plans"
        description="Transparent pricing for AI solutions, IT services, and micro SAAS applications. Choose the plan that fits your business needs. Starting at $29/month. Free 14-day trial available."
        keywords="pricing, ai solutions pricing, it services pricing, micro saas pricing, subscription plans, enterprise pricing"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Simple, Transparent
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features 
              with no hidden fees or long-term contracts.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#pricing" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Plans
            </a>
            <a 
              href="/contact" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Get Custom Quote
            </a>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-2 bg-green-900 text-green-300 text-xs px-2 py-1 rounded">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Micro SAAS Pricing */}
      <section id="pricing" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Affordable micro SAAS applications for businesses of all sizes. 
              Start with our basic plan and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPlans.map((plan, index) => renderPricingCard(plan, index))}
          </div>
        </div>
      </section>

      {/* AI Solutions Pricing */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Custom AI solutions tailored to your business needs. 
              From basic automation to complete AI transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiSolutionsPlans.map((plan, index) => renderPricingCard(plan, index))}
          </div>
        </div>
      </section>

      {/* IT Services Pricing */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services to modernize your infrastructure 
              and enhance your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itServicesPlans.map((plan, index) => renderPricingCard(plan, index))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our pricing and services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Start your free 14-day trial today. No credit card required. 
            Or contact us for a custom quote tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </a>
            <a 
              href="tel:+13024640950" 
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;