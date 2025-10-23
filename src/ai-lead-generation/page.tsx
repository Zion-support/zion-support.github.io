'use client';
import React from 'react';
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
import SEOOptimizer from '../$1/SEOOptimizer';
import {Building, CheckCircle, PhoneIcon, MailIcon} from 'lucide-react';;
constAILeadGenerationPage: React.FC= () =>{constfeatures= [
    {
      icon: Brain,
      title: 'AI Lead Scoring',
      description: 'Intelligent lead scoring using machine learning to identify high-value prospects and prioritize sales efforts.',
      benefits: ['9 5% accuracy', 'Real-time scoring', 'Behavioral analysis']
   },
    {icon: Target,
      title: 'Smart Prospecting',
      description: 'AI-powered prospecting that finds ideal customers based on your ideal customer profile and market data.',
      benefits: ['Automated research', 'Contact discovery', 'Intent signals']
   },
    {icon: Mail,
      title: 'Email Sequences',
      description: 'Personalized email sequences that automatically follow up with prospects and nurture leads through the sales funnel.',
      benefits: ['Personalization', 'A/B testing', 'Auto-optimization']
   },
    {icon: BarChart,
      title: 'Lead Analytics',
      description: 'Comprehensive analytics on lead quality, conversion rates, and campaign performance to optimize your strategy.',
      benefits: ['Conversion tracking', 'ROI analysis', 'Performance insights']
   },
    {icon: Zap,
      title: 'CRM Integration',
      description: 'Seamless integration with popular CRMs to automatically sync leads and track the entire sales process.',
      benefits: ['Auto-sync', 'Real-time updates', 'Pipeline management']
   },
    {icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborative features that allow your team to work together on lead generation and follow-up activities.',
      benefits: ['Team workflows', 'Lead assignment', 'Activity tracking']
   }
  ];
  constpricingPlans= [
    {name: 'Starter',
      price: '$19 9',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000leads/month',
        'Basic AI scoring',
        'Email sequences',
        'CRM integration',
        'Email support',
        'Basic analytics'
      ],
      popular: false
   },
    {name: 'Professional',
      price: '$49 9',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to10,000leads/month',
        'Advanced AI algorithms',
        'Multi-channel outreach',
        'Advanced analytics',
        'Priority support',
        'A/B testing',
        'Team collaboration'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$1,29 9',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited leads',
        'Custom AI models',
        'All channels',
        'Custom integrations',
        'Dedicated support',
        'Custom development',
        'Advanced compliance',
        'SLA guarantee'
      ],
      popular: false
   }
  ];
  conststats= [
    {number: '30 0%', label: 'More Qualified Leads'},
    {number: '8 5%', label: 'Time Savings'},
    {number: '9 5%', label: 'Lead Accuracy'},
    {number: '5 0+', label: 'CRM Integrations'}
  ];
  constuseCases= [
    {title: 'B2 B Lead Generation',
      description: 'Generate high-quality B2 B leads using AI-powered company research, contact discovery, and intent signals.',
      icon: Building
   },
    {title: 'E-commerce Prospecting',
      description: 'Find and engage potential customers for e-commerce businesses with personalized outreach and retargeting.',
      icon: ShoppingCart
   },
    {title: 'SaaS Trial Conversion',
      description: 'Convert free trial users into paying customers with intelligent lead nurturing and personalized follow-ups.',
      icon: Cloud
   },
    {title: 'Real Estate Leads',
      description: 'Generate qualified real estate leads with AI-powered market analysis and automated follow-up sequences.',
      icon: Home
   }
  ];
  return (
  <><SEOOptimizertitle="AI Lead Generation Platform - ZionTechGroup"
        description="Generate 30 0% more qualified leads with AI-powered prospecting, lead scoring, and automated outreach.85% time savingsand95%accuracy."
        keywords={['AI lead generation', 'lead scoring', 'prospecting', 'sales automation', 'leadnurturing']}
        canonicalUrl="https://ziontechgroup.com/ai-lead-generation"
      /><divclassName="min-h-screen bg-gradient-to-br from-slate-90 0via-purple-900to-slate-900"><Navigation /><mainclassName="pt-16">{/* HeroSection */}
        <sectionclassName="container mx-auto px-4 py-16text-center"><divclassName="max-w-4xlmx-auto"><spanclassName="text-4 xlmd:text-6 xl font-bold text-whitemb-6neon-text"></className="text-4 xlmd:text-6 xl font-bold text-whitemb-6neon-text">AI Lead Generation Platform
            </h><spanclassName="text-xlmd:text-2 xl text-cyan-400mb-8"></className="text-xlmd:text-2 xl text-cyan-400mb-8">Generate300% more qualified leads with AI
            </p><spanclassName="text-lg text-gray-300mb-12max-w-3xlmx-auto"></className="text-lg text-gray-300mb-12max-w-3xlmx-auto">Our AI-powered lead generation platform helps businesses find, score, and nurture high-quality leads 
                with intelligent automation and personalized outreach.
            </p><divclassName="flex flex-colsm:flex-row gap-4 justify-center items-centermb-16"><ahref="tel:+13024640950"
                 className="cyber-button flexitems-centerspace-x-2"
                ><PhoneIconclassName="w-5h-5" /><spa n>Call (302)464-0950</spa></a><ahref="mailto:kleber@ziontechgroup.com"
                 className="cyber-button flexitems-centerspace-x-2"
                  style={{background: 'linear-gradient(45 deg, #8 b5cf6, #ec4899)'}}
                ><MailIconclassName="w-5h-5" /><spa n>GetFreeDemo</spa></a></di>{/* Stats */}
            <divclassName="grid grid-cols-2 md:grid-cols-4 gap-8mb-16">{stats.map((statindex) => (
               <divkey={index}className="cyber-cardp-6text-center"><divclassName="text-3 xlmd:text-4 xl font-boldtext-cyan-400mb-2neon-text">{stat.number}
                  </di><divclassName="text-gray-300font-medium">{stat.label}</di></di>))}
            </di></di></sectio>{/* FeaturesSection */}
        <sectionclassName="container mx-auto px-4py-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">Powerful Lead Generation Features
          </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{features.map((featureindex) => (
             <divkey={index}className="cyber-card p-6 hover:scale-105transition-allduration-300"><feature.iconclassName="w-12h-12text-cyan-400mb-4" /><h3className="text-xl font-boldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300mb-4">{feature.description}</p><ulclassName="space-y-2">{feature.benefits.map((benefitidx) => (
                   <likey={idx}className="flex items-center space-x-2 text-smtext-cyan-400"><CheckCircleclassName="w-4h-4" /><spa n>{benefit}</spa></l>))}
                </u></di>))}
          </di></sectio>{/* Use CasesSection */}
        <sectionclassName="container mx-auto px-4py-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">Perfect for Every Industry
          </h><divclassName="grid grid-cols-1md:grid-cols-2gap-8">{useCases.map((useCaseindex) => (
             <divkey={index}className="cyber-card p-6 hover:scale-105transition-allduration-300"><useCase.iconclassName="w-12h-12text-cyan-400mb-4" /><h3className="text-xl font-boldtext-whitemb-3">{useCase.title}</h><pclassName="text-gray-300">{useCase.description}</p></di>))}
          </di></sectio>{/* PricingSection */}
        <sectionclassName="container mx-auto px-4py-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">Simple, Transparent Pricing
          </h><divclassName="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xlmx-auto">{pricingPlans.map((planindex) => (
             <divkey={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400scale-10 5'  : ''
                }`}
                >{plan.popular && (
                  <divclassName="absolute -top-4 left-1/2transform-translate-x-1/2"><spanclassName="bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold"></className="bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold">Most Popular
                    </spa></di>)}
                <divclassName="text-centermb-6"><h3className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h><pclassName="text-gray-400mb-4">{plan.description}</p><divclassName="flexitems-baselinejustify-center"><spanclassName="text-4 xl font-boldtext-cyan-400">{plan.price}</spa><spanclassName="text-gray-400ml-1">{plan.period}</spa></di></di><ulclassName="space-y-3mb-8">{plan.features.map((featureidx) => (
                   <likey={idx}className="flexitems-centerspace-x-3"><CheckCircleclassName="w-5 h-5 text-cyan-400flex-shrink-0" /><spanclassName="text-gray-300">{feature}</spa></l>))}
                </u><ahref="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300${
                      plan.popular
                        ? 'bg-cyan-400text-slate-900 hover:bg-cyan-30 0'
                         : 'bg-slate-700text-whitehover:bg-slate-60 0'
                  }`}
                  >Get Started
                </a></di>))}
          </di></sectio>{/* CTASection */}
        <sectionclassName="container mx-auto px-4 py-16text-center"><divclassName="cyber-card p-12max-w-4xlmx-auto"><spanclassName="text-3 xlmd:text-4 xl font-bold text-whitemb-6neon-text"></className="text-3 xlmd:text-4 xl font-bold text-whitemb-6neon-text">Ready to3x Your Lead Generation?
            </h><spanclassName="text-xl text-gray-300mb-8"></className="text-xl text-gray-300mb-8">Join 2500+ companies already using our AI lead generation platform
            </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
                 className="cyber-button flex items-centerjustify-centerspace-x-2"
                ><PhoneIconclassName="w-5h-5" /><spa n>Call (302)464-0950</spa></a><ahref="mailto:kleber@ziontechgroup.com"
                 className="cyber-button flex items-centerjustify-centerspace-x-2"
                  style={{background: 'linear-gradient(45 deg, #8 b5cf6, #ec4899)'}}
                ><MailIconclassName="w-5h-5" /><spa n>ScheduleDemo</spa></a></di></di></sectio></mai><Footer /></di></>
  );
};
export default AILeadGenerationPage;