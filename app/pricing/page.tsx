import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Star, Zap, Shield, Brain, Globe } from "lucide-react";

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started",
      price: "$99",
      period: "/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Basic AI Analytics Dashboard",
        "Email Support",
        "5 User Accounts",
        "10GB Storage",
        "Basic Reporting",
        "Mobile App Access"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "$299",
      period: "/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Advanced AI Analytics Dashboard Pro",
        "Priority Support",
        "25 User Accounts",
        "100GB Storage",
        "Advanced Reporting & Insights",
        "API Access",
        "Custom Integrations",
        "24/7 Monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      price: "$599",
      period: "/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Full AI Suite Access",
        "Dedicated Account Manager",
        "Unlimited User Accounts",
        "1TB Storage",
        "Custom AI Models",
        "White-label Solutions",
        "On-premise Deployment",
        "SLA Guarantee",
        "Training & Onboarding"
      ],
      popular: false
    }
  ];

  const serviceCategories = [
    {
      title: "AI Services",
      icon: <Brain className="w-6 h-6" />,
      color: "text-blue-400",
      services: [
        { name: "AI Analytics Dashboard Pro", price: "$299/month" },
        { name: "AI Content Generation Pro", price: "$199/month" },
        { name: "AI Cybersecurity Suite Pro", price: "$499/month" },
        { name: "AI Business Intelligence Pro", price: "$399/month" },
        { name: "AI Code Assistant Pro", price: "$149/month" }
      ]
    },
    {
      title: "IT Services",
      icon: <Shield className="w-6 h-6" />,
      color: "text-green-400",
      services: [
        { name: "Cloud Infrastructure", price: "From $1,200/month" },
        { name: "Cybersecurity Solutions", price: "From $800/month" },
        { name: "Web Development", price: "From $2,500/project" },
        { name: "Mobile Development", price: "From $3,500/project" },
        { name: "Custom Software", price: "From $5,000/project" }
      ]
    },
    {
      title: "Micro SAAS",
      icon: <Zap className="w-6 h-6" />,
      color: "text-purple-400",
      services: [
        { name: "Zion Analytics Pro", price: "$199/month" },
        { name: "Zion Security Shield", price: "$299/month" },
        { name: "Zion Cloud Vault", price: "$149/month" },
        { name: "Zion Content Studio", price: "$179/month" },
        { name: "Zion Data Sync", price: "$129/month" }
      ]
    },
    {
      title: "5G Solutions",
      icon: <Globe className="w-6 h-6" />,
      color: "text-orange-400",
      services: [
        { name: "5G Data Analytics", price: "From $2,500/month" },
        { name: "5G Edge Computing", price: "From $3,000/month" },
        { name: "5G Implementation", price: "From $15,000/project" },
        { name: "5G Mobile Applications", price: "From $5,000/project" },
        { name: "5G Smart City Solutions", price: "From $25,000/project" }
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "Do you offer custom pricing for large enterprises?",
      answer: "Absolutely! We offer custom pricing and solutions for large enterprises with specific requirements. Contact our sales team for a personalized quote."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay via invoice."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all our plans. No credit card required to start your trial."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide email support for Starter plans, priority support for Professional plans, and dedicated account management for Enterprise plans."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Solutions Pricing</title>
        <meta
          name="description"
          content="View our transparent pricing for AI services, IT solutions, and micro SAAS products. Choose the perfect plan for your business needs with flexible options and no hidden fees."
        />
        <meta
          name="keywords"
          content="pricing, AI services pricing, IT solutions cost, micro SAAS pricing, business technology pricing, enterprise solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core features with no hidden fees or surprise charges.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                      : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mb-4 mx-auto`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service-Specific Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Detailed pricing for our individual services and solutions. Mix and match to create the perfect package for your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className={`flex items-center space-x-2 ${category.color} mb-6`}>
                    {category.icon}
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">{service.name}</span>
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="block w-full text-center py-2 px-4 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-sm font-medium mt-4"
                  >
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Have questions about our pricing? We've got answers.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}