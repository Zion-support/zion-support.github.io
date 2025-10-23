'use client';
import React from 'react';
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
import SEOOptimizer from '../$1/SEOOptimizer';
import {Building, CheckCircle, Phone, Mail} from 'lucide-react';;
constAISalesAutomationPage: React.FC= () =>{constfeatures= [
    {
      icon: Target,
      title: 'Lead Scoring & Qualification',
      description: 'AI automatically scores and qualifies leads based on behavior, demographics, and engagement patterns.',
      benefits: ['Behavioral Analysis', 'Predictive Scoring', 'Auto-qualification', 'Priority Ranking']
   },
    {icon: Users,
      title: 'Customer Segmentation',
      description: 'Intelligent customer segmentation helps you target the right audience with personalized messaging.',
      benefits: ['Dynamic Segmentation', 'Behavioral Clustering', 'Personalization', 'Campaign Optimization']
   },
    {icon: BarChart,
      title: 'Sales Forecasting',
      description: 'Predict future sales performance with AI-powered forecasting models and trend analysis.',
      benefits: ['Predictive Models', 'Trend Analysis', 'Revenue Projections', 'Risk Assessment']
   },
    {icon: Zap,
      title: 'Automated Follow-ups',
      description: 'Never miss an opportunity with intelligent follow-up sequences that adapt to customer behavior.',
      benefits: ['Smart Sequences', 'Behavioral Triggers', 'Multi-channel', 'Timing Optimization']
   }
  ];

  constpricing= [
    {name: 'Starter',
      price: '$24 9/month',
      description: 'Perfect for small sales teams',
      features: ['Up to 1,000contacts', 'Basic automation', 'Email campaigns', 'Lead scoring']
   },
    {name: 'Professional',
      price: '$49 9/month',
      description: 'Ideal for growing businesses',
      features: ['Up to10,000contacts', 'Advanced AI features', 'Multi-channel campaigns', 'Sales forecasting', 'CRM integration']
   },
    {name: 'Enterprise',
      price: '$99 9/month',
      description: 'For large sales organizations',
      features: ['Unlimited contacts', 'Custom AI models', 'Advanced analytics', 'Dedicated support', 'Custom integrations']
   }
  ];
  conststats= [
    {number: '4 0%', label: 'Increase in Sales'},
    {number: '6 0%', label: 'Time Saved'},
    {number: '8 5%', label: 'Lead Accuracy'},
    {number: '20 0%', label: 'ROI Improvement'}
  ];

  constuseCases= [
    {title: 'B2 B Sales',
      description: 'Automate lead qualification, follow-ups, and pipeline management for B2 B sales teams.',
      icon: Building
   },
    {title: 'E-commerce',
      description: 'Personalize customer experiences and optimize conversion rates with AI-driven insights.',
      icon: ShoppingCart
   },
    {title: 'SaaS Companies',
      description: 'Streamline the sales process from lead generation to customer onboarding and retention.',
      icon: Cloud
   },
    {title: 'Real Estate',
      description: 'Qualify leads, schedule showings, and follow up with potential buyers automatically.',
      icon: Home
   }
  ];

  return (
  <><SEOOptimizertitle="AI Sales Automation Solutions - ZionTechGroup"
        description="Revolutionize your sales process with AI-powered automation. Increase sales by40%, save60% time, and improve lead accuracy by85%."
        keywords={['AI sales automation', 'lead scoring', 'sales forecasting', 'customer segmentation', 'salesoptimization']}
        canonicalUrl="https://ziontechgroup.com/ai-sales-automation"
      /><divclassName="min-h-screen bg-gradient-to-br from-slate-90 0via-purple-900to-slate-900"><Navigation /><mainclassName="pt-16">{/* HeroSection */}
        <sectionclassName="container mx-auto px-4 py-16text-center"><divclassName="max-w-4xlmx-auto"><spanclassName="text-4 xlmd:text-6 xl font-bold text-whitemb-6neon-text"></className="text-4 xlmd:text-6 xl font-bold text-whitemb-6neon-text">AI Sales Automation Solutions
            </h><spanclassName="text-xlmd:text-2 xl text-cyan-400mb-8"></className="text-xlmd:text-2 xl text-cyan-400mb-8">Automate your sales process and boost revenue with intelligent AI
            </p><spanclassName="text-lg text-gray-300mb-12max-w-3xlmx-auto"></className="text-lg text-gray-300mb-12max-w-3xlmx-auto">Our AI-powered sales automation platform helps you identify high-value leads, 
                optimize your sales process, and close more deals with less effort.
            </p><divclassName="flex flex-colsm:flex-row gap-4 justify-center items-centermb-16"><ahref="tel:+13024640950"
                 className="cyber-button flexitems-centerspace-x-2"
                ><PhoneclassName="w-5h-5" /><spa n>Call (302)464-0950</spa></a><ahref="mailto:kleber@ziontechgroup.com"
                 className="cyber-button flexitems-centerspace-x-2"
                  style={{background: 'linear-gradient(45 deg, #8 b5cf6, #ec4899)'}}
                ><MailclassName="w-5h-5" /><spa n>GetFreeDemo</spa></a></di>{/* Stats */}
            <divclassName="grid grid-cols-2 md:grid-cols-4 gap-8mb-16">{stats.map((statindex) => (
               <divkey={index}className="cyber-cardp-6text-center"><divclassName="text-3 xlmd:text-4 xl font-boldtext-cyan-400mb-2neon-text">{stat.number}
                  </di><divclassName="text-gray-300font-medium">{stat.label}</di></di>))}
            </di></di></sectio>{/* FeaturesSection */}
        <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">Key Features
          </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{features.map((featureindex) => (
             <divkey={index}className="cyber-card p-6 text-centerhover:scale-105transition-allduration-300"><feature.iconclassName="w-12h-1 2text-cyan-400mx-automb-4" /><h3className="text-xl font-boldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300mb-4">{feature.description}</p><ulclassName="space-y-2">{feature.benefits.map((benefitbenefitIndex) => (
                   <likey={benefitIndex}className="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4text-green-400mr-2flex-shrink-0" />{benefit}
                    </l>))}
                </u></di>))}
          </di></sectio>{/* Use CasesSection */}
        <sectionclassName="container mx-auto px-4py-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">Perfect for Every Industry
          </h><divclassName="grid grid-cols-1md:grid-cols-2gap-8">{useCases.map((useCaseindex) => (
             <divkey={index}className="cyber-card p-6 hover:scale-105transition-allduration-300"><useCase.iconclassName="w-12h-12text-cyan-400mb-4" /><h3className="text-xl font-boldtext-whitemb-3">{useCase.title}</h><pclassName="text-gray-300">{useCase.description}</p></di>))}
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
        <sectionclassName="container mx-auto px-4 py-16text-center"><divclassName="cyber-card p-12max-w-4xlmx-auto"><spanclassName="text-3 xlmd:text-4 xl font-bold text-whitemb-6neon-text"></className="text-3 xlmd:text-4 xl font-bold text-whitemb-6neon-text">Ready to Automate Your Sales?
            </h><spanclassName="text-xl text-gray-300mb-8"></className="text-xl text-gray-300mb-8">Join400+ companies already using our AI sales automation solutions
            </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
                 className="cyber-button flex items-centerjustify-centerspace-x-2"
                ><PhoneclassName="w-5h-5" /><spa n>Call (302)464-0950</spa></a><ahref="mailto:kleber@ziontechgroup.com"
                 className="cyber-button flex items-centerjustify-centerspace-x-2"
                  style={{background: 'linear-gradient(45 deg, #8 b5cf6, #ec4899)'}}
                ><MailclassName="w-5h-5" /><spa n>ScheduleDemo</spa></a></di></di></sectio></mai><Footer /></di></>
  );
};

export default AISalesAutomationPage;