import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      price: { month: 999, year: 9999 },
      icon: Target,
      category: 'all',
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Analytics",
        "Custom Reports",
        "API Integration",
        "Email Support",
        "Up to 5 data sources"
      ],
      popular: false,
      color: 'from-gray-400 to-gray-600'
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: { month: 2499, year: 24999 },
      icon: Star,
      category: 'all',
      features: [
        "Multi-language Support",
        "Sentiment Analysis",
        "CRM Integration",
        "Live Chat Handoff",
        "Priority Support",
        "Up to 10,000 conversations"
      ],
      popular: true,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: { month: 4999, year: 49999 },
      icon: Award,
      category: 'all',
      features: [
        "SEO Optimization",
        "Brand Voice Training",
        "Multi-format Output",
        "Plagiarism Detection",
        "Content Calendar",
        "Up to 1,000 articles/month"
      ],
      popular: false,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const microSaasPricing = [
    {
      name: 'AI Marketing Automation',
      price: { month: 599, year: 5999 },
      description: 'Automate your marketing campaigns with AI',
      features: ['Campaign optimization', 'Customer segmentation', 'Content generation', 'Performance analytics']
    },
    {
      name: 'AI Data Analytics',
      price: { month: 799, year: 7999 },
      description: 'Transform data into actionable insights',
      features: ['Predictive modeling', 'Real-time dashboards', 'Custom reports', 'Data visualization']
    },
    {
      name: 'AI Customer Support',
      price: { month: 499, year: 4999 },
      description: 'AI-powered customer service solutions',
      features: ['Chatbot implementation', 'Ticket routing', 'Sentiment analysis', '24/7 availability']
        'Weekly Reports',
        'Up to 25 Users',
        'Enhanced Security',
        'Advanced Analytics',
        'Custom Integrations',
        'Dedicated Account Manager'
      ],
      popular: true,
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Zion Cloud Vault",
      price: "$9",
      period: "/month",
      description: "Secure cloud storage solution",
      features: [
        "1TB Storage",
        "End-to-end Encryption",
        "File Synchronization",
        "Mobile Apps",
        "Email Support",
        "Up to 5 devices"
      ],
      popular: false,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const enterprisePricing = [
    {
      name: "AI Solutions Suite",
      price: "Custom",
      period: "",
      description: "Complete AI transformation package",
      features: [
        "All AI Services Included",
        "Custom Development",
        "Dedicated Support Team",
        "White-label Solutions",
        "24/7 Phone Support",
        "Unlimited Usage",
        "Custom Integrations",
        "SLA Guarantee"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: 'Cloud Migration & Setup',
      price: { month: 1999, year: 19999 },
      description: 'Seamless cloud migration services',
      features: ['AWS/Azure/GCP setup', 'Data migration', 'Security configuration', 'Cost optimization']
    },
    {
      name: 'Cybersecurity Suite',
      price: { month: 899, year: 8999 },
      description: 'Comprehensive security solutions',
      features: ['Threat monitoring', 'Vulnerability scanning', 'Incident response', 'Compliance management']
    }
  ];

  const faqs = [
    {
      question: "Do you offer free trials?",
      answer: "Yes! All our services come with a 14-day free trial. No credit card required to get started."
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
      question: "Do you offer discounts for annual billing?",
      answer: "Yes! Save 20% when you pay annually. Contact us for custom enterprise pricing."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you before you reach your limits and offer options to upgrade or purchase additional capacity."
  ];

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions with transparent, no-hidden-fees pricing.
  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'pricing_phone_number'});
    }
  };

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Hero Section */}
      <section className="relative py-20 lg: py-32 overflow-hidden"></section>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse"></h1>
              Pricing Plans;
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed"></p>
              Choose the perfect plan for your business. All plans include our core AI services;
              with flexible options to scale as you grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">14-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">No Setup Fees</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
                <ArrowRight className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Cancel Anytime</span>
              </div>)
            </div>)
          </div>)
        </div>)
      </section>)),
      {/* Billing Toggle */}
      <section className="py-8"></section>
        <div className="container mx-auto px-4"></section>
          <div className="flex justify-center"></div>
            <div className="bg-slate-800/50 rounded-lg p-1 flex"></div>
              <button
                onClick={() =>setBillingCycle('monthly')}
              <button;
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-500 text-white'}
                    : 'text-gray-400 hover:text-white'}
                }`}
              >
                Monthly;
              </button>
              <button;
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-cyan-500 text-white'}
                    : 'text-gray-400 hover:text-white'}
                }`}
              >
                Yearly;
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded"></span>
                  Save 17%
                </span>
              </button>
    <>
      <Helmet></Helmet>
        <title>Pricing - Zion Tech Group</title>
            </div>

        <div className="container mx-auto px-4"></section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">{plans.map((plan, index) => {
              const savings = calculateSavings(plan.price.monthly, plan.price.yearly);</div>
              return (<div
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-7xl mx-auto">,
            {plans.map((plan, index) => {
              const savings = calculateSavings(plan.price.monthly, plan.price.yearly);
              return(<div;
                  key={index}
                  className={`relative bg-slate-800/50 rounded-lg p-8 ${}
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}
                  } hover:bg-slate-700/50 transition-all duration-300`}
            {/* Pricing Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"></div>
              {filteredPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                      : 'border-white/20 hover:border-cyan-400/50'
                  }`}
                ></div>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold"></div>
                        Most Popular
                      </div>
                    </div>
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">)
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">)
                        Most Popular;)
                      </div>)
                    </div>)
                  )}
                  <div className="space-y-4 mb-8"></div>
                    <h4 className="text-lg font-semibold text-white mb-3">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3"></div>
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-start space-x-3"></div>
                        <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <button;
                    onClick={() => setSelectedPlan(plan.name.toLowerCase())}
                    className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover: from-cyan-600 hover:to-purple-700'}
                        : 'bg-slate-700 text-white hover:bg-slate-600'}
                    }`}
                  ></button>
                    {selectedPlan === plan.name.toLowerCase() ? 'Selected' : 'Choose Plan'}</button>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-slate-800/50"></section>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Add-on Services</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Enhance your plan with additional services and features</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{addOns.map((addon, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <addon.icon className="w-6 h-6 text-white" />
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p><div className="text-2xl font-bold text-white mb-4">${addon.price[billingCycle as keyof typeof addon.price].toLocaleString()}</div><span className="text-gray-400 text-sm ml-1">/{billingCycle === 'monthly' ? 'month' : 'year'}</span><button className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-slate-600 transition-colors">Add to Plan</button>
                </button>
              </div>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4"></h2>
              Add-on Services;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              Enhance your plan with additional services and features;
            </p>,
          </div>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {addOns.map((addon, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover: bg-slate-700/50 transition-all duration-300">,
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">,
                  <addon.icon className="w-6 h-6 text-white" />,
                </div>,
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-white mb-4"></div>
                  ${addon.price[billingCycle as keyof typeof addon.price].toLocaleString()}
                  <span className="text-gray-400 text-sm ml-1"></span>
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                <button className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover: bg-slate-600 transition-colors"></button>
                  Add to Plan;
                </button>,
              </div>))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20"></section>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Common questions about our pricing and plans</p>
            </p>
          </div>
          <div className="max-w-4xl mx-auto"></div>
            <div className="space-y-6">{faqs.map((faq, index) => (</div>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4"></h2>
              Frequently Asked Questions;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              Common questions about our pricing and plans;
            </p>
          </div>,
          <div className="max-w-4xl mx-auto">,
            <div className="space-y-6">,
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}<p className="text-gray-300">{faq.answer}</p>
                <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3><p className="text-gray-300">{faq.answer}</p>
                </div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mb-6`}></div>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6"></div>
                    <span className="text-4xl font-bold text-white"></span>
                      ${plan.price[billingPeriod].toLocaleString()}
                    </span>
                    <span className="text-gray-300 ml-2"></span>
                      /{billingPeriod === 'month' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8"></ul>
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300"></li>
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"></button>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

          <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">,
            Ready to Get Started?,
          </h2>,
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">,
            Start your 14-day free trial today. No credit card required, cancel anytime.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <a;
        <div className="container mx-auto px-4 text-center"></section>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2><p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Start your 14-day free trial today. No credit card required, cancel anytime.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            ></a>
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial;
            </a>
            <a;
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            ></a>
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo;
            </a>
          </div>
        </div>
      </section>,
    </div>,
        {/* AI Services Pricing */}
        <section className="py-16 bg-white/5"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Specialized AI solutions with transparent pricing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"></div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4"></div>
                    <span className="text-3xl font-bold text-cyan-400"></span>
                      ${service.price[billingPeriod].toLocaleString()}
                    </span>
                    <span className="text-gray-300 ml-2"></span>
                      /{billingPeriod === 'month' ? 'month' : 'year'}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6"></ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm"></li>
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full border-2 border-cyan-400 text-cyan-400 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button>
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-16"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Professional IT services with competitive pricing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"></div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4"></div>
                    <span className="text-3xl font-bold text-cyan-400"></span>
                      ${service.price[billingPeriod].toLocaleString()}
                    </span>
                    <span className="text-gray-300 ml-2"></span>
                      /{billingPeriod === 'month' ? 'month' : 'year'}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6"></ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm"></li>
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full border-2 border-cyan-400 text-cyan-400 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button>
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white/5"></section>
          <div className="container mx-auto px-4"></div>
            <div className="max-w-4xl mx-auto text-center"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8"></p>
                We offer tailored solutions for unique business requirements. Contact us for a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                ></a>
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                ></Link>
                  <Mail className="w-5 h-5" />
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose the plan that fits your business needs." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24"></main>
          {/* Header */}
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
              Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Choose the plan that fits your business needs. All plans include our core AI and IT solutions with no hidden fees.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"></div>
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-white/10'
                }`}
              ></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center"></div>
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4"></div>
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8"></ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                ></button>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </div>
            ))}
          </div>
        </div>

          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Star, ArrowRight, Zap, Shield, Brain, Code, Cloud, Users, Clock, Target, TrendingUp } from 'lucide-react'

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics Dashboard'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI Solutions',
        'Custom Development',
        'Priority Support',
        'Real-time Analytics',
        'API Integration',
        'Training & Documentation'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Full AI Suite',
        'Custom AI Models',
        'Dedicated Support',
        'Advanced Security',
        'White-label Options',
        'SLA Guarantee'
      ],
      popular: false;
    }
  ]

  const addOns = [
    {
      name: 'Additional AI Models',
      price: '$500',
      period: '/month',
      description: 'Extra AI models for specialized tasks'
    },
    {
      name: 'Priority Support',
      price: '$1,000',
      period: '/month',
      description: '24/7 priority support and faster response times'
    },
    {
      name: 'Custom Development',
      price: '$200',
      period: '/hour',
      description: 'Custom features and integrations'
    },
    {
      name: 'Training & Consulting',
      price: '$300',
      period: '/hour',
      description: 'Team training and strategic consulting'
    }
  ]

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'Average ROI', value: '300%', icon: TrendingUp },
    { label: 'Response Time', value: '<2 hours', icon: Clock }
  ]

  return (
    <React.Fragment>
      <Helmet>
        <title>Pricing | Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, Zion Tech Group" />
      </Helmet>

    </React.Fragment>
  );
};

        {/* Add-ons Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Additional Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-2xl font-bold text-cyan-400">{addon.price}</span>
                    <span className="text-gray-400 ml-1 text-sm">{addon.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-2">Can I change my plan later?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-2">Is there a free trial available?</h3>
                <p className="text-gray-300">Yes, we offer a 14-day free trial for all our plans. No credit card required to get started.</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, bank transfers, and can accommodate enterprise payment terms.</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Yes, we offer custom pricing for large enterprises with specific requirements. Contact us to discuss your needs.</p>
          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto"></div>
            <h2 className="text-4xl font-bold text-white text-center mb-12"></h2>
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6"></div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-3"></h3>
                  Can I change my plan later?
                </h3>
                <p className="text-gray-300"></p>
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-3"></h3>
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-300"></p>
                  We accept all major credit cards, bank transfers, and can accommodate enterprise payment terms.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-3"></h3>
                  Is there a free trial available?
                </h3>
                <p className="text-gray-300"></p>
                  Yes, we offer a 14-day free trial for all plans. No credit card required to get started.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-3"></h3>
                  What support is included?
                </h3>
                <p className="text-gray-300"></p>
                  All plans include email support. Professional and Enterprise plans include priority support and dedicated account management.
                </p>
              </div>
            </div>
          </div>
        </section>

          {/* CTA Section */}
          <div className="mt-20 text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6"></h2>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              Contact us today to discuss your specific needs and get a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              ></a>
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              ></a>
                Get Free Quote
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default PricingPage


  return (
    <>
      <title>Pricing - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">Pricing</h1>
            <p className="text-lg text-gray-300 mb-8">Professional pricing services coming soon.</p>

      <  />

const PricingPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const addOns = [
    { name: 'Premium Support', description: '24/7 priority support', price: '$99/month' },
    { name: 'Advanced Analytics', description: 'Detailed performance metrics', price: '$49/month' },
    { name: 'Custom Integration', description: 'Tailored solutions for your needs', price: '$199/month' }
  ];

  const faqs = [
    { question: 'What is included in the free trial?', answer: 'Full access to all features for 14 days with no credit card required.' },
    { question: 'Can I change plans anytime?', answer: 'Yes, you can upgrade or downgrade your plan at any time.' },
    { question: 'Do you offer custom pricing?', answer: 'Yes, we offer custom pricing for enterprise clients with specific requirements.' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Pricing Plans
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                  <p className="text-gray-300 mb-4">{addon.description}</p>
                  <div className="text-2xl font-bold text-cyan-400">{addon.price}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the power of our AI and IT solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Professional pricing services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Pricing</h1>
          <p className="text-lg text-gray-300 mb-8">Professional pricing services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default PricingPage;
