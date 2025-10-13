import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  XMarkIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon,
  WifiIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function EnhancedPricingPage() {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: "$299",
      period: "per month",
      popular: false,
      features: [
        "AI Chatbot (up to 1,000 conversations/month)",
        "Basic Analytics Dashboard",
        "Email Support",
        "Standard Security Features",
        "1 User Account",
        "Basic Integration APIs"
      ],
      limitations: [
        "Limited AI Training Data",
        "Basic Reporting",
        "Standard Response Time"
      ],
      color: "from-blue-500 to-cyan-500",
      buttonText: "Get Started",
      buttonLink: "/contact"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and mid-size companies",
      price: "$799",
      period: "per month",
      popular: true,
      features: [
        "AI Chatbot (up to 10,000 conversations/month)",
        "Advanced Analytics Dashboard",
        "Priority Support (24/7)",
        "Advanced Security Suite",
        "Up to 5 User Accounts",
        "Full Integration APIs",
        "Custom AI Training",
        "Advanced Reporting",
        "API Rate Limiting",
        "White-label Options"
      ],
      limitations: [
        "Limited Custom Branding",
        "Standard SLA"
      ],
      color: "from-purple-500 to-pink-500",
      buttonText: "Start Free Trial",
      buttonLink: "/contact"
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large organizations",
      price: "$1,999",
      period: "per month",
      popular: false,
      features: [
        "Unlimited AI Conversations",
        "Custom Analytics Dashboard",
        "Dedicated Support Manager",
        "Enterprise Security Suite",
        "Unlimited User Accounts",
        "Custom Integration Development",
        "Advanced AI Training & Fine-tuning",
        "Custom Reporting & BI",
        "High Availability SLA",
        "Full Custom Branding",
        "On-premise Deployment Option",
        "Custom Compliance Features"
      ],
      limitations: [],
      color: "from-green-500 to-emerald-500",
      buttonText: "Contact Sales",
      buttonLink: "/contact"
    }
  ];

  const servicePricing = [
    {
      category: "AI & Machine Learning Services",
      icon: CpuChipIcon,
      color: "from-purple-500 to-pink-500",
      services: [
        { name: "AI Chatbot & Virtual Assistant", price: "$299-999/month", description: "Intelligent conversational AI" },
        { name: "AI Content Generation Pro", price: "$199-599/month", description: "High-quality content generation" },
        { name: "AI Analytics Dashboard", price: "$399-1,299/month", description: "Advanced business intelligence" },
        { name: "AI Cybersecurity Monitor", price: "$599-1,999/month", description: "AI-powered threat detection" },
        { name: "AI Code Assistant Pro", price: "$149-499/month", description: "AI-powered coding assistance" },
        { name: "AI Customer Support Suite", price: "$349-1,199/month", description: "Complete support automation" }
      ]
    },
    {
      category: "Micro SaaS Solutions",
      icon: GlobeAltIcon,
      color: "from-blue-500 to-cyan-500",
      services: [
        { name: "Zion AI CRM Pro", price: "$49-199/user/month", description: "AI-enhanced CRM system" },
        { name: "Zion AI Email Optimizer", price: "$99-399/month", description: "Email marketing optimization" },
        { name: "Zion AI Workflow Automation", price: "$199-799/month", description: "Business process automation" },
        { name: "Zion AI Mobile App Builder", price: "$299-1,199/month", description: "No-code mobile app development" },
        { name: "Zion AI Lead Scoring", price: "$149-599/month", description: "AI-powered lead qualification" },
        { name: "Zion AI Social Listener", price: "$179-699/month", description: "Social media monitoring" }
      ]
    },
    {
      category: "IT Infrastructure & Cloud Services",
      icon: CloudIcon,
      color: "from-green-500 to-emerald-500",
      services: [
        { name: "Cloud Migration Pro", price: "$2,999-9,999/project", description: "Complete cloud migration" },
        { name: "IT Infrastructure Management", price: "$499-2,999/month", description: "Infrastructure management" },
        { name: "Database Management", price: "$299-1,999/month", description: "Database optimization" },
        { name: "IoT Edge Computing", price: "$799-4,999/month", description: "IoT infrastructure solutions" }
      ]
    },
    {
      category: "Cybersecurity Solutions",
      icon: ShieldCheckIcon,
      color: "from-red-500 to-orange-500",
      services: [
        { name: "Advanced Security Suite", price: "$899-2,999/month", description: "Comprehensive security solution" },
        { name: "Cybersecurity Solutions", price: "$1,299-4,999/month", description: "Complete security strategy" }
      ]
    },
    {
      category: "5G & Next-Gen Solutions",
      icon: WifiIcon,
      color: "from-indigo-500 to-purple-500",
      services: [
        { name: "5G Network Implementation", price: "$4,999-49,999/project", description: "5G network deployment" },
        { name: "5G IoT Solutions", price: "$2,499-9,999/month", description: "5G-powered IoT solutions" },
        { name: "5G Smart City Solutions", price: "$9,999-99,999/month", description: "Smart city infrastructure" }
      ]
    },
    {
      category: "Industry-Specific Solutions",
      icon: BuildingOfficeIcon,
      color: "from-yellow-500 to-orange-500",
      services: [
        { name: "AI Healthcare Solutions", price: "$1,999-9,999/month", description: "Healthcare AI solutions" },
        { name: "AI Fintech Solutions", price: "$2,499-12,999/month", description: "Financial technology solutions" },
        { name: "AI E-commerce Solutions", price: "$1,499-7,999/month", description: "E-commerce AI platform" },
        { name: "AI Education Platform", price: "$799-3,999/month", description: "Educational AI system" },
        { name: "Property Management AI", price: "$599-2,999/month", description: "Real estate AI solutions" },
        { name: "Supply Chain Optimizer", price: "$1,799-8,999/month", description: "Supply chain AI optimization" }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the perfect plan for your business needs with flexible pricing options." />
        <meta name="keywords" content="pricing, AI services, IT solutions, subscription plans, enterprise pricing, Zion Tech Group" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Choose the perfect plan for your business needs. All plans include our core features 
              with flexible pricing options to scale with your growth.
            </p>
            <div className="flex items-center justify-center gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400" />
                <span>30-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={plan.name}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/20' 
                    : 'border-slate-600 hover:border-purple-400'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <StarIcon className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.limitations.length > 0 && (
                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Limitations:</h4>
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-start gap-3">
                        <XMarkIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  to={plan.buttonLink}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  {plan.buttonText}
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service-Specific Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed pricing for individual services and custom solutions
            </p>
          </div>

          <div className="space-y-12">
            {servicePricing.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.category} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-slate-800/50 p-6 rounded-lg border border-slate-600 hover:border-purple-500 transition-all duration-300">
                        <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                        <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-purple-400 font-bold">{service.price}</span>
                          <Link 
                            to="/contact"
                            className="text-purple-300 hover:text-purple-200 text-sm font-medium"
                          >
                            Learn More →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              We offer custom pricing for enterprise solutions, large-scale implementations, 
              and specialized requirements. Contact us for a personalized quote.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CogIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Custom Development</h3>
                <p className="text-gray-300">Tailored solutions built specifically for your business needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Dedicated Support</h3>
                <p className="text-gray-300">24/7 dedicated support team for enterprise clients</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Advanced security features and compliance requirements</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Custom Quote
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
                <h3 className="text-xl font-semibold text-white mb-3">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
                <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial available?</h3>
                <p className="text-gray-300">Yes, we offer a 30-day free trial for all our plans. No credit card required to start your trial.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
                <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise clients. All payments are processed securely.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
                <h3 className="text-xl font-semibold text-white mb-3">Do you offer discounts for annual billing?</h3>
                <p className="text-gray-300">Yes, we offer a 20% discount for annual billing on all plans. Contact us for more details on enterprise pricing.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
                <h3 className="text-xl font-semibold text-white mb-3">What happens if I exceed my plan limits?</h3>
                <p className="text-gray-300">We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional capacity as needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Choose your plan and start transforming your business today
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Sales
                <PhoneIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}