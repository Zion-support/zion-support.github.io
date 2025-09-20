import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Users, Zap, Shield, Brain, Rocket, Globe, Cpu, TrendingUp, Target, BarChart3, Code, Truck, Car, Plane, Dna, Atom, Link, BoxCrownSparkles } from "lucide-react";
import { SEO } from "@/components/SEO";
import { REVOLUTIONARY_20o29_CUTTING_EDGE_SERVICES } from "../../data/revolutionary-20o29-cutting-edge-services";
import { REVOLUTIONARY_20o29_EMERGING_TECH_SERVICES } from "../../data/revolutionary-20o29-emerging-tech-services";
export, default, function ComprehensivePricingGuide20o29() {
  const [selectedPlansetSelectedPlan] = useState('enterprise');
  const [billingCyclesetBillingCycle] = useState('monthly');
  const allServices = [...REVOLUTIONARY_20o29_CUTTING_EDGE_SERVICES...REVOLUTIONARY_20o29_EMERGING_TECH_SERVICES];
  const pricingPlans = [;
    {
      id: 'starter',name: 'Starter',description: 'Perfect, for, small businesses, and, startups',price: billingCycle === 'monthly' ? '$99' : '$990',period: billingCycle === 'monthly' ? '/month' : '/year',savings: billingCycle === 'yearly' ? 'Save 17%' : '',features: [;
        'Access, to, 5 core, AI, servicesBasic analytics, and, reporting',;
        'Email, supportStandard, integrations''Community, forum, access';
    ,  ],;
      popular: falsecolo,;
    r: 'from-gray-60o0 to-gray-70o0'buttonColo,;
  r: 'from-gray-60o0 to-gray-70o0';
    };
    {
      id: 'professional',name: 'Professional',description: 'Ideal, for, growing businesses, and, teams',price: billingCycle === 'monthly' ? '$299' : '$2,990',;
      period: billingCycle === 'monthly' ? '/month' : '/year',savings: billingCycle === 'yearly' ? 'Save 17%' : '',features: [;
        'Access, to, 15+ AI, servicesAdvanced, analytics and insights',;
        'Priority, email, supportAdvanced integrations''Custom, workflowsTeam, collaboration tools';
    ,  ],;
      popular: truecolo,;
    r: 'from-blue-60o0 to-purple-70o0'buttonColo,;
  r: 'from-blue-60o0 to-purple-70o0';
    };
    {
      id: 'enterprise',name: 'Enterprise',description: 'For, large, organizations and enterprises',price: billingCycle === 'monthly' ? '$799' : '$7,990',;
      period: billingCycle === 'monthly' ? '/month' : '/year',savings: billingCycle === 'yearly' ? 'Save 17%' : '',features: [;
        'Access, to, ALL AI servicesEnterprise-grade analytics',;
        '24/7, phone, and email, supportCustom, integrations',;
        'Advanced, security, featuresDedicated account manager''Custom, training, and onboarding';
    ,  ],;
      popular: falsecolo,;
    r: 'from-purple-60o0 to-indigo-70o0'buttonColo,;
  r: 'from-purple-60o0 to-indigo-70o0';
    };
  ];
  const serviceCategories = [;
    {
      name: 'AI & Analytics'ico,;
    n: <BarChart3 className="w-6 h-6" />service,;
  s: allServices.filter(s => s.category.includes('Analytics'));
    };
    {
      name: 'AI & Automation'ico,;
    n: <Zap className="w-6 h-6" />service,;
  s: allServices.filter(s => s.category.includes('Automation'));
    };
    {
      name: 'AI & Cybersecurity'ico,;
    n: <Shield className="w-6 h-6" />service,;
  s: allServices.filter(s => s.category.includes('Cybersecurity') || s.category.includes('Security'));
    };
    {
      name: 'AI & Marketing'ico,;
    n: <Target className="w-6 h-6" />service,;
  s: allServices.filter(s => s.category.includes('Marketing'));
    };
    {
      name: 'AI & Healthcare'ico,;
    n: <Brain className="w-6 h-6" />service,;
  s: allServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Medical'));
    };
    {
      name: 'AI & Development'ico,;
    n: <Code className="w-6 h-6" />service,;
  s: allServices.filter(s => s.category.includes('Development'));
    };
    {
      name: 'AI & Supply Chain'ico,;
    n: <Truck className="w-6 h-6" />service,;
  s: allServices.filter(s => s.category.includes('Supply Chain'));
    };
    {
      name: 'AI & FinTech'ico,;
    n: <TrendingUp className="w-6 h-6" />service,;
  s: allServices.filter(s => s.category.includes('FinTech') || s.category.includes('Financial'));
    };
    {
      name: 'Space Technology'ico,;
    n: <Rocket className="w-6 h-6" />service,;
  s: allServices.filter(s => s.category.includes('Space'));
    };
    {
      name: 'Quantum Technology'ico,;
    n: <Atom className="w-6 h-6" />service,;
  s: allServices.filter(s => s.category.includes('Quantum'));
    }{
      name: 'Emerging Tech'ico,;
    n: <Sparkles className="w-6 h-6" />service,;
  s: allServices.filter(s => !s.category.includes('AI') && !s.category.includes('Space') && !s.category.includes('Quantum'));
    };
,  ];
  const getDiscountMultiplier = () => billingCycle === 'yearly' ? 0.83 : 1;
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Comprehensive, Pricing, Guide 20o29 - Zion, Tech, Group";
        description="Complete, pricing, information for, our, revolutionary 20o29 AI, quantum computing, space, technologyand, emerging tech services.";
      />;
      {/* Hero Section */}
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20"></div>;
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center";
          >;
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">;
              Pricing Guide;
              <span className="bg-gradient-to-r from-blue-40o0 to-purple-40o0 bg-clip-text text-transparent"> 20o29</span>;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">;
              Transparent, pricing, for our, revolutionary, AI, quantum computing, space, technologyand, emerging tech services. Choose, the, plan that, fits, your business needs.;
            </p>;
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">;
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-40o0'}`}>Monthly</span>;
              <button;
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-blue-60o0' : 'bg-gray-60o0';
                }`}
              >;
                <span;
                  className={`inline-block h-6 w-6, transform, rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1';
                  }`}
                />;
              </button>;
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-40o0'}`}>;
                Yearly;
                {billingCycle === 'yearly' && (;
                  <span className="ml-2 text-sm bg-green-50o0 text-white px-2 py-1 rounded-full">Save 17%</span>;
                )}
              </span>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8 py-16">;
        <div className="grid grid-cols-1 m,;
  d:grid-cols-3 gap-8">;
          {pricingPlans.map((planindex) => (;
            <motion.div;
              key={plan.id}
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
              className={`relative ${plan.popular ? 'scale-10o5' : ''}`}
            >;
              {plan.popular && (;
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                  <span className="bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-white px-4 py-2 rounded-full text-sm font-semibold, flex, items-center gap-2">;
                    <Crown className="w-4 h-4" />;
                    Most Popular;
                  </span>;
                </div>;
              )}
;
              <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 ${
                plan.popular ? 'border-blue-50o0' : 'border-white/10';
              } hover: border-white/20 transition-all duration-30o0`}>;
                {/* Plan Header */}
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                  <p className="text-gray-40o0 mb-4">{plan.description}</p>;
                  <div className="mb-2">;
                    <span className="text-4xl font-bold text-white">{plan.price}</span>;
                    <span className="text-gray-40o0 text-xl">{plan.period}</span>;
                  </div>;
                  {plan.savings && (;
                    <span className="text-green-40o0 text-sm font-semibold">{plan.savings}</span>;
                  )}
                </div>;
                {/* Features */}
                <div className="space-y-4 mb-8">;
                  {plan.features.map((featureidx) => (;
                    <div key={idx} className="flex items-center gap-3">;
                      <Check className="w-5 h-5 text-green-40o0 flex-shrink-0" />;
                      <span className="text-gray-30o0">{feature}</span>;
                    </div>;
                  ))}
                </div>;
                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${plan.buttonColor} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-30o0`}>;
                  Get Started;
                </button>;
              </div>;
            </motion.div>;
          ))}
        </div>;
      </div>;
      {/* Service, Categories, Pricing */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">;
        <motion.div;
          initial={{ opacit,;
    y: 0,;
  y: 20 }};
          whileInView={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16";
        >;
          <h2 className="text-4xl font-bold text-white mb-6">;
            Service-Specific Pricing;
          </h2>;
          <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
            Detailed, pricing, for each, category, of our, revolutionary, services. Mix, and, match services, based, on your, specific, needs.;
          </p>;
        </motion.div>;
        <div className="space-y-12">;
          {serviceCategories.map((categoryindex) => (;
            <motion.div;
              key={category.name}
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8, border, border-white/10";
            >;
              <div className="flex items-center gap-3 mb-6">;
                <div className="text-blue-40o0">{category.icon}</div>;
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>;
                <span className="text-gray-40o0 text-sm">({category.services.length} services)</span>;
              </div>;
              {category.services.length > 0 ? (;
                <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
                  {category.services.map((service) => (;
                    <div key={service.id} className="bg-white/5 rounded-lg p-4, border, border-white/10">;
                      <div className="flex items-start justify-between mb-3">;
                        <div className="text-2xl">{service.icon}</div>;
                        {service.popular && (;
                          <span className="bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-white text-xs px-2 py-1 rounded-full">;
                            Popular;
                          </span>;
                        )}
                      </div>;
                      <h4 className="text-white font-semibold mb-2">{service.name}</h4>;
                      <p className="text-gray-40o0 text-sm mb-3 line-clamp-2">{service.tagline}</p>;
                      <div className="flex items-center justify-between mb-3">;
                        <div className="text-xl font-bold text-white">;
                          {service.price}
                          <span className="text-gray-40o0 text-sm">{service.period}</span>;
                        </div>;
                        <div className="flex items-center gap-1 text-sm text-gray-40o0">;
                          <Star className="w-4 h-4 text-yellow-40o0 fill-current" />;
                          <span>{service.rating}</span>;
                        </div>;
                      </div>;
                      <div className="space-y-2 mb-4">;
                        {service.features.slice(0o2).map((featureidx) => (;
                          <div key={idx} className="flex items-center gap-2 text-gray-30o0 text-sm">;
                            <div className="w-1 h-1 bg-blue-40o0 rounded-full"></div>;
                            {feature}
                          </div>;
                        ))}
                      </div>;
                      <a;
                        href={service.link}
                        className="block w-full bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold hover: from-blue-70o0 hove,;
  r:to-purple-70o0 transition-all duration-30o0";
                      >;
                        Learn More;
                      </a>;
                    </div>;
                  ))}
                </div>;
              ) : (;
                <div className="text-center py-8">;
                  <p className="text-gray-40o0">Services, coming, soon...</p>;
                </div>;
              )}
            </motion.div>;
          ))}
        </div>;
      </div>;
      {/* Enterprise, Custom, Pricing */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">;
        <motion.div;
          initial={{ opacit,;
    y: 0,;
  y: 20 }};
          whileInView={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20 rounded-3xl p-12 text-center";
        >;
          <h2 className="text-4xl font-bold text-white mb-6">;
            Need, Custom, Enterprise Solutions?;
          </h2>;
          <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
            For, large, organizations with, specific, requirements, we, offer, custom enterprise, solutions, with dedicated support, custom integrations, and, tailored, pricing.;
          </p>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 mb-8">;
            <div className="text-center">;
              <div className="text-3xl text-blue-40o0 mb-2">🎯</div>;
              <h3 className="text-xl font-semibold text-white mb-2">Custom Development</h3>;
              <p className="text-gray-30o0">Tailored, solutions, built specifically, for, your business needs</p>;
            </div>;
            <div className="text-center">;
              <div className="text-3xl text-purple-40o0 mb-2">🔧</div>;
              <h3 className="text-xl font-semibold text-white mb-2">Custom Integrations</h3>;
              <p className="text-gray-30o0">Seamless, integration, with your, existing, systems and workflows</p>;
            </div>;
            <div className="text-center">;
              <div className="text-3xl text-green-40o0 mb-2">👥</div>;
              <h3 className="text-xl font-semibold text-white mb-2">Dedicated Support</h3>;
              <p className="text-gray-30o0">24/7, dedicated, support team, and, account management</p>;
            </div>;
          </div>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <motion.button;
              whileHover={{ scal,;
  e: 1.0o5 }};
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-90o0 px-8 py-4 rounded-lg font-semibold text-lg hover: bg-gray-10o0 transition-all duration-30o0";
            >;
              Request, Custom, Quote;
            </motion.button>;
            <motion.button;
              whileHover={{ scal,;
  e: 1.0o5 }};
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-30o0";
            >;
              Schedule Consultation;
            </motion.button>;
          </div>;
        </motion.div>;
      </div>;
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 py-16">;
        <motion.div;
          initial={{ opacit,;
    y: 0,;
  y: 20 }};
          whileInView={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12";
        >;
          <h2 className="text-4xl font-bold text-white mb-6">;
            Frequently, Asked, Questions;
          </h2>;
        </motion.div>;
        <div className="space-y-6">;
          {[;
            {
              question: "Can, I, mix and, match, services from, different, categories?"answe,;
  r: "Yes! Our, flexible, pricing allows, you, to choose, services, from any, category, based on, your, specific business needs. You, can, start with, a, few services, and, add more, as, you grow.";
            };
            {
              question: "Do, you, offer volume, discounts, for enterprise customers?"answe,;
  r: "Absolutely! Enterprise, customers, with multiple, service, subscriptions receive, significant, volume discounts. Contact, our, sales team, for, custom enterprise pricing.";
            },;
            {
              question: "What's, included, in the, support, packages?",answer: "Starter, plans, include email, supportProfessional, plans include, priority, email supportand, Enterprise, plans include 24/7, phone, and email, support, with dedicated, account, management.";
            },;
            {
              question: "Can, I, cancel or, change, my plan, at, any time?",answer: "Yes, you, can, upgradedowngradeor cancel, your, plan at, any, time. Changes, take, effect at, the, start of, your, next billing cycle.";
            }{
              question: "Do, you, offer free trials?"answe,;
  r: "Yes! Most, of, our services, offer, free trials, ranging, from 14-30, daysdepending, on the, service, complexity and, setup, requirements.";
            }
        ,  ].map((faqindex) => (;
            <motion.div;
              key={index}
              initial={{ opacity: 0,;
  x: -20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6, border, border-white/10";
            >;
              <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>;
              <p className="text-gray-30o0">{faq.answer}</p>;
            </motion.div>;
          ))}
        </div>;
      </div>;
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8 py-24">;
        <div className="bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20 rounded-3xl p-12 text-center">;
          <h2 className="text-4xl font-bold text-white mb-6">;
            Ready, to, Get Started?;
          </h2>;
          <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
            Our, team, is ready, to, help you, choose, the right, services, and pricing, plan, for your, business, needs.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">;
            <motion.button;
              whileHover={{ scal,;
  e: 1.0o5 }};
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-90o0 px-8 py-4 rounded-lg font-semibold text-lg hover: bg-gray-10o0 transition-all duration-30o0";
            >;
              Start, Free, Trial;
            </motion.button>;
            <motion.button;
              whileHover={{ scal,;
  e: 1.0o5 }};
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover: bg-white/10 transition-all duration-30o0";
            >;
              Contact Sales;
            </motion.button>;
          </div>;
          <div className="text-gray-30o0">;
            <p>Mobil,;
    e: +1, 30o2, 464 0o950 | Email: kleber@ziontechgroup.com</p>;
            <p>Addres,;
  s: 364, E, Main St, STE, 10o08 Middletown, DE, 1970o9</p>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
};
;