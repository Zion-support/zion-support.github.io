import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Award,
  Clock,
  Shield,
  Zap,
  Brain,
  Globe,
  BarChart3,
  Cloud,
  Settings,
  DollarSign,
  Target
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses starting their digital transformation",
      features: [
        "Up to 5 users",
        "Basic AI features",
        "Email support",
        "Standard security",
        "1 TB storage",
        "Basic analytics",
        "30-day data retention",
        "Mobile app access"
      ],
      popular: false,
      cta: "Start Free Trial",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Advanced features for growing businesses with complex needs",
      features: [
        "Up to 25 users",
        "Advanced AI features",
        "Priority support",
        "Enhanced security",
        "10 TB storage",
        "Advanced analytics",
        "90-day data retention",
        "API access",
        "Custom integrations",
        "24/7 support"
      ],
      popular: true,
      cta: "Start Free Trial",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "Complete solution for large organizations with enterprise needs",
      features: [
        "Unlimited users",
        "All AI features",
        "Dedicated support",
        "Enterprise security",
        "Unlimited storage",
        "Custom analytics",
        "Unlimited data retention",
        "White-label solution",
        "Custom integrations",
        "Dedicated account manager",
        "On-premise deployment"
      ],
      popular: false,
      cta: "Contact Sales",
      color: "from-orange-500 to-red-500"
    }
  ];

  const serviceCategories = [
    {
      title: "AI Services",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      plans: [
        { name: "AI Analytics Pro", price: "$399/month", features: ["Real-time analytics", "Predictive insights", "Custom dashboards"] },
        { name: "AI Automation", price: "$599/month", features: ["Workflow automation", "Process optimization", "Custom integrations"] },
        { name: "AI Cybersecurity", price: "$799/month", features: ["Threat detection", "Automated response", "Compliance monitoring"] }
      ]
    },
    {
      title: "IT Services",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      plans: [
        { name: "Cloud Infrastructure", price: "$299/month", features: ["Scalable hosting", "24/7 monitoring", "Auto-scaling"] },
        { name: "DevOps Solutions", price: "$499/month", features: ["CI/CD pipelines", "Container management", "Infrastructure as Code"] },
        { name: "5G Solutions", price: "$1,299/month", features: ["Ultra-fast connectivity", "Edge computing", "IoT integration"] }
      ]
    },
    {
      title: "Micro SAAS",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      plans: [
        { name: "Inventory Manager", price: "$99/month", features: ["AI forecasting", "Real-time tracking", "Automated reordering"] },
        { name: "HR Assistant Pro", price: "$149/month", features: ["AI recruitment", "Performance tracking", "Employee engagement"] },
        { name: "Analytics Dashboard", price: "$199/month", features: ["Business intelligence", "Custom reports", "Data visualization"] }
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, all plans come with a 14-day free trial. No credit card required to get started."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
    },
    {
      question: "Do you offer custom pricing?",
      answer: "Yes, we offer custom pricing for enterprise customers with specific requirements. Contact our sales team for more information."
    },
    {
      question: "What's included in support?",
      answer: "All plans include email support. Professional and Enterprise plans include priority support and phone support."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no cancellation fees or long-term contracts."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Flexible Plans for Every Business | Zion Tech Group</title>
        <meta name="description" content="Choose the perfect plan for your business. Flexible pricing for AI services, IT solutions, and micro SAAS. Start with a free trial today." />
        <meta name="keywords" content="pricing, plans, AI services pricing, IT services cost, micro SAAS pricing, business solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <DollarSign className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Flexible Pricing Plans</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Simple, Transparent Pricing
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Choose the perfect plan for your business. All plans include a 14-day free trial with no credit card required.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Main Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with any plan and scale as your business grows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`relative group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.cta === "Contact Sales" ? "/contact" : "#signup"}
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Service Categories Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service-Specific Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed pricing for our individual services and solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.plans.map((plan, planIndex) => (
                    <div key={planIndex} className="border border-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-white font-medium">{plan.name}</h4>
                        <span className="text-purple-400 font-semibold">{plan.price}</span>
                      </div>
                      <ul className="space-y-1">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </FuturisticCard>
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
              Everything you need to know about our pricing and plans
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FuturisticCard
                  key={index}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses using our solutions to transform their operations. 
              Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="#signup"
                variant="primary"
                size="lg"
                icon={<Zap className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/contact"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Contact Sales
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default Pricing;