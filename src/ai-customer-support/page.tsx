'use client';
import React from 'react';
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
import SEOOptimizer from '../$1/SEOOptimizer';
import {MessageCircle, CheckCircle, Phone, Mail} from 'lucide-react';;
constAICustomerSupportPage: React.FC= () =>{constfeatures= [
    {
      icon: MessageCircle,
      title: '2 4/7 AI Chat Support',
      description: 'Intelligent chatbots that provide instant responses to customer queries with natural language understanding.',
      benefits: ['Instant Response', 'Multi-language Support', 'Context Awareness', 'Escalation to Humans']
   },
    {icon: Users,
      title: 'Smart Ticket Routing',
      description: 'AI-powered ticket class ification and routing to the most appropriate support agent based on expertise and workload.',
      benefits: ['Intelligent Routing', 'Priority Classification', 'Load Balancing', 'Expert Matching']
   },
    {icon: Clock,
      title: 'Predictive Analytics',
      description: 'Predict customer issues before they occur and proactively reach out with solutions.',
      benefits: ['Issue Prediction', 'Proactive Support', 'Trend Analysis', 'Prevention Strategies']
   },
    {icon: Shield,
      title: 'Knowledge Base Integration',
      description: 'Seamlessly integrated knowledge base that provides accurate, up-to-date information to both AI and human agents.',
      benefits: ['Real-time Updates', 'Version Control', 'Search Optimization', 'Content Management']
   }
  ];

  constpricing= [
    {name: 'Starter',
      price: '$14 9/month',
      description: 'Perfect for small businesses',
      features: ['Up to 1,000conversations/month', 'Basic AI chatbot', 'Email support', 'Standard integrations']
   },
    {name: 'Professional',
      price: '$29 9/month',
      description: 'Ideal for growing companies',
      features: ['Up to10,000conversations/month', 'Advanced AI with learning', 'Phone & email support', 'Advanced integrations', 'Analytics dashboard']
   },
    {name: 'Enterprise',
      price: '$59 9/month',
      description: 'For large organizations',
      features: ['Unlimited conversations', 'Custom AI training', '2 4/7 human support', 'Custom integrations', 'Advanced analytics', 'Dedicated account manager']
   }
  ];
  
  conststats= [
    {number: '9 5%', label: 'Customer Satisfaction'},
    {number: '6 0%', label: 'Faster Resolution'},
    {number: '2 4/7', label: 'Availability'},
    {number: '5 0+', label: 'Languages Supported'}
  ];
  
  return (
  <><SEOOptimizertitle="AI Customer Support Solutions - ZionTechGroup"
        description="Revolutionary AI-powered customer support with chatbots, omnichannel support, and intelligent automation. Boost satisfaction by95% and reduce costs by60%."
        keywords={['AI customer support', 'chatbots', 'omnichannel support', 'customer service automation', 'AIhelpdesk']}
        canonicalUrl="https://ziontechgroup.com/ai-customer-support"
      /><divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-90 0to-slate-900cyber-gridneural-network-bg"><Navigation /><mainclassName="pt-24pb-16px-4"><divclassName="max-w-7xlmx-auto">{/* HeroSection */}
        <sectionclassName="text-centermb-16"><spanclassName="text-4 xlsm:text-5 xlmd:text-6 xl font-bold text-whitemb-6neon-text"></className="text-4 xlsm:text-5 xlmd:text-6 xl font-bold text-whitemb-6neon-text">AI Customer Support
          </h><spanclassName="text-xl text-gray-300mb-8 max-w-3xlmx-auto"></className="text-xl text-gray-300mb-8 max-w-3xlmx-auto">Transform your customer support with intelligent AI solutions that provide24/7 assistance, 
              smart ticket routing, and predictive analytics.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
               className="cyber-button inline-flexitems-centerspace-x-2"
              ><MessageCircleclassName="w-4h-4" /><spa n>GetStarted</spa></a><ahref="/contact"
               className="border-2 border-cyan-400text-cyan-400px-8 py-3 rounded-lg font-semiboldhover:bg-cyan-400 hover:text-slate-900transition-allduration-300"
              >Learn More
            </a></di></sectio>{/* FeaturesSection */}
        <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">Key Features
          </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{features.map((featureindex) => (
             <divkey={index}className="cyber-card p-6 text-centerhover:scale-105transition-allduration-300"><feature.iconclassName="w-12h-1 2text-cyan-400mx-automb-4" /><h3className="text-xl font-boldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300mb-4">{feature.description}</p><ulclassName="space-y-2">{feature.benefits.map((benefitbenefitIndex) => (
                   <likey={benefitIndex}className="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4text-green-400mr-2flex-shrink-0" />{benefit}
                    </l>))}
                </u></di>))}
          </di></sectio>{/* PricingSection */}
        <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">Pricing Plans
          </h><divclassName="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xlmx-auto">{pricing.map((planindex) => (
             <divkey={index}
                  className={`cyber-card p-8 relative ${
                    index===1? 'ring-2 ring-cyan-400scale-10 5' : ''
                }`}
                >{index===1&& (
                  <divclassName="absolute -top-4 left-1/2transform-translate-x-1/2"><spanclassName="bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold"></className="bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold">Most Popular
                    </spa></di>)}
                <h3className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h><pclassName="text-gray-300mb-4">{plan.description}</p><divclassName="text-4 xl font-bold text-cyan-400mb-6">{plan.price}</di><ulclassName="space-y-3mb-8">{plan.features.map((featurefeatureIndex) => (
                   <likey={featureIndex}className="flex items-centertext-gray-300"><CheckCircleclassName="w-5 h-5text-green-400mr-3flex-shrink-0" />{feature}
                    </l>))}
                </u><ahref={`mailto:kleber@ziontechgroup.com?subject=Interest in${plan.name}Plan`}
                   className="cyber-button w-fulltext-centerblock"
                  >Get Started
                </a></di>))}
          </di></sectio>{/* CTASection */}
        <sectionclassName="container mx-auto px-4 py-16text-center"><divclassName="cyber-card p-12max-w-4xlmx-auto"><spanclassName="text-3 xlmd:text-4 xl font-bold text-whitemb-6neon-text"></className="text-3 xlmd:text-4 xl font-bold text-whitemb-6neon-text">Ready to Transform Your Customer Support?
            </h><spanclassName="text-xl text-gray-300mb-8"></className="text-xl text-gray-300mb-8">Join500+ companies already using our AI customer support solutions
            </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
                 className="cyber-button flex items-centerjustify-centerspace-x-2"
                ><PhoneclassName="w-5h-5" /><spa n>Call (302)464-0950</spa></a><ahref="mailto:kleber@ziontechgroup.com"
                 className="cyber-button flex items-centerjustify-centerspace-x-2"
                  style={{background: 'linear-gradient(45 deg, #8 b5cf6, #ec4899)'}}
                ><MailclassName="w-5h-5" /><spa n>ScheduleDemo</spa></a></di></di></sectio></di></mai><Footer /></di></>
  );
};

export default AICustomerSupportPage;