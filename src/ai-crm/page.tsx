import { CheckCircle, Star, Check } from 'lucide-react';
'use client';
import {CheckCircleStar} from 'lucide-react';
import React from 'react';

import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';

constAICRMPage: React.FC= () =>{constfeatures= [
    {
      icon: Brain,
      title: 'AI-Powered Lead Scoring',
      description: 'Automatically score and prioritize leads using machine learning algorithms that analyze behavior patterns.',
      benefits: ['Behavioral analysis', 'Predictive scoring', 'Lead prioritization', 'Conversion optimization']
   },
    {icon: Users,
      title: 'Intelligent Customer Segmentation',
      description: 'AI automatically segments customers based on behavior, preferences, and value potential.',
      benefits: ['Dynamic segmentation', 'Behavioral insights', 'Personalization', 'Targeted campaigns']
   },
    {icon: Target,
      title: 'Predictive Sales Forecasting',
      description: 'Accurate sales predictions using AI that analyzes historical data and market trends.',
      benefits: ['Revenue forecasting', 'Pipeline analysis', 'Risk assessment', 'Goal tracking']
   },
    {icon: TrendingUp,
      title: 'Automated Follow-ups',
      description: 'AI schedules and personalizes follow-up communications based on customer engagement patterns.',
      benefits: ['Smart scheduling', 'Personalized content', 'Engagement tracking', 'Response optimization']
   }
  ];

  constcapabilities= [
    {title: 'Smart Contact Management',
      description: 'AI automatically enriches contact data and maintains up-to-date information.',
      icon: Users,
      stats: '9 5% data accuracy'
   },
    {title: 'Intelligent Email Automation',
      description: 'Send personalized emails at the perfect time with AI-optimized content.',
      icon: Mail,
      stats: '4 0% higher open rates'
   },
    {title: 'Advanced Analytics',
      description: 'Comprehensive insights into customer behavior and sales performance.',
      icon: BarChart,
      stats: 'Real-time insights'
   },
    {title: 'Mobile-First Design',
      description: 'Access your CRM anywhere with our responsive mobile application.',
      icon: Phone,
      stats: '10 0% mobile optimized'
   }
  ];

  constpricingPlans= [
    {name: 'Starter',
      price: '$4 9',
      period: '/$1/month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 1,000contacts',
        'Basic AI lead scoring',
        'Email automation',
        'Mobile app access',
        'Standard support',
        'Basic analytics'
      ],
      popular: false
   },
    {name: 'Professional',
      price: '$9 9',
      period: '/$1/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 1 0,000contacts',
        'Advanced AI features',
        'Custom workflows',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom fields',
        'Team collaboration tools'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$19 9',
      period: '/$1/month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        'Custom integrations',
        'Advanced reporting',
        '2 4/7 dedicated support',
        'White-label options',
        'Custom development',
        'Dedicated account manager'
      ],
      popular: false
   }
  ];

  consttestimonials= [
    {name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Sales Director',
      content: 'AI CRM increased our lead conversion by65% and saved us 20hours per week on manual tasks.',
      rating:5},
    {name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'VP of Sales',
      content: 'The predictive analytics helped us identify high-value prospects we would have missed otherwise.',
      rating:5},
    {name: 'Emily Rodriguez',
      company: 'ScaleUp Solutions',
      role: 'Marketing Manager',
      content: 'Automated follow-ups and personalized content have dramatically improved our customer engagement.',
      rating:5}
  ];

  return (
  <divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"><Navigation />{/* HeroSection */}
    <sectionclassName="pt-20pb-16px-4"><divclassName="max-w-7xlmx-auto"><divclassName="text-centermb-16"><spanclassName="text-5 xlmd:text-6 xl font-bold text-whitemb-6neon-text"></className="text-5 xlmd:text-6 xl font-bold text-whitemb-6neon-text">AI-Powered CRM Platform
          </h><spanclassName="text-xl text-gray-300mb-8 max-w-3xlmx-auto"></className="text-xl text-gray-300mb-8 max-w-3xlmx-auto">Transform your customer relationships with intelligent automation, predictive analytics, and personalized experiences that drive growth.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="cyber-button px-8py-4text-lg"></className="cyber-button px-8py-4text-lg">Start Free Trial
            </butto><spanclassName="cyber-button-outline px-8py-4text-lg"></className="cyber-button-outline px-8py-4text-lg">Watch Demo
            </butto></di></di>{/* Stats */}
        <divclassName="grid grid-cols-2 md:grid-cols-4 gap-8mb-16"><divclassName="text-center"><divclassName="text-4 xl font-bold text-cyan-400mb-2">65%</di><divclassName="text-gray-300">HigherConversionRate</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-cyan-400mb-2">40%</di><divclassName="text-gray-300">Increase inEmailOpens</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-cyan-400mb-2">95%</di><divclassName="text-gray-300">DataAccuracy</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-cyan-400mb-2">20h</di><divclassName="text-gray-300">Time SavedPerWeek</di></di></di></di></sectio>{/* FeaturesSection */}
    <sectionclassName="py-16px-4"><divclassName="max-w-7xlmx-auto"><divclassName="text-centermb-16"><h2className="text-4 xl font-boldtext-whitemb-4">IntelligentCRMFeatures</h><pclassName="text-xltext-gray-300">Everything you need to manage and grow yourcustomerrelationships</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{features.map((featureindex) => (
           <divkey={index}className="cyber-cardp-6"><divclassName="w-1 2 h-12bg-gradient-to-r from-cyan-500to-purple-600rounded-lg flex items-centerjustify-centermb-4"><feature.iconclassName="w-6h-6text-white" /></di><h3className="text-xl font-semiboldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300mb-4">{feature.description}</p><ulclassName="space-y-2">{feature.benefits.map((benefitidx) => (
                 <likey={idx}className="flex items-center text-smtext-gray-400"><CheckCircleclassName="w-4 h-4 text-cyan-400mr-2" />{benefit}
                  </l>))}
              </u></di>))}
        </di></di></sectio>{/* CapabilitiesSection */}
    <sectionclassName="py-16px-4 bg-slate-800/50"><divclassName="max-w-7xlmx-auto"><divclassName="text-centermb-16"><h2className="text-4 xl font-boldtext-whitemb-4">PowerfulCapabilities</h><pclassName="text-xltext-gray-300">Advanced features that set us apart from traditionalCRMsystems</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{capabilities.map((capabilityindex) => (
           <divkey={index}className="cyber-cardp-6"><divclassName="w-1 2 h-12bg-gradient-to-r from-purple-500to-pink-600rounded-lg flex items-centerjustify-centermb-4"><capability.iconclassName="w-6h-6text-white" /></di><h3className="text-xl font-semiboldtext-whitemb-3">{capability.title}</h><pclassName="text-gray-300mb-4">{capability.description}</p><divclassName="text-cyan-400font-semiboldtext-lg">{capability.stats}</di></di>))}
        </di></di></sectio>{/* TestimonialsSection */}
    <sectionclassName="py-16px-4"><divclassName="max-w-7xlmx-auto"><divclassName="text-centermb-16"><h2className="text-4 xl font-boldtext-whitemb-4">What OurCustomersSay</h><pclassName="text-xltext-gray-300">Real results fromrealbusinesses</p></di><divclassName="grid grid-cols-1md:grid-cols-3gap-8">{testimonials.map((testimonialindex) => (
           <divkey={index}className="cyber-cardp-6"><divclassName="flexitems-centermb-4">{[...Array(testimonial.rating)].map((_i) => (
                 <Starkey={i}className="w-5 h-5 text-yellow-400fill-current" />))}
              </di><pclassName="text-gray-300mb-4italic">"{testimonial.content}"</p><di v><divclassName="font-semiboldtext-white">{testimonial.name}</di><divclassName="text-smtext-gray-400">{testimonial.role},{testimonial.company}</di></di></di>))}
        </di></di></sectio>{/* PricingSection */}
    <sectionclassName="py-16px-4 bg-slate-800/50"><divclassName="max-w-7xlmx-auto"><divclassName="text-centermb-16"><h2className="text-4 xl font-boldtext-whitemb-4">Simple,TransparentPricing</h><pclassName="text-xltext-gray-300">Choose the plan that fits yourbusinessneeds</p></di><divclassName="grid grid-cols-1md:grid-cols-3gap-8">{pricingPlans.map((planindex) => (
           <divkey={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-50 0':''}`}>{plan.popular && (
                <divclassName="absolute -top-4 left-1/2transform-translate-x-1/2"><spanclassName="bg-gradient-to-r from-cyan-500to-purple-600text-white px-4 py-2 rounded-fulltext-smfont-semibold"></className="bg-gradient-to-r from-cyan-500to-purple-600text-white px-4 py-2 rounded-fulltext-smfont-semibold">Most Popular
                  </spa></di>)}
              <divclassName="text-centermb-6"><h3className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h><divclassName="text-4 xl font-bold text-cyan-400mb-2">{plan.price}
                  <spanclassName="text-lgtext-gray-400">{plan.period}</spa></di><pclassName="text-gray-300">{plan.description}</p></di><ulclassName="space-y-3mb-8">{plan.features.map((featureidx) => (
                 <likey={idx}className="flex items-centertext-gray-300"><CheckCircleclassName="w-5 h-5 text-cyan-400mr-3" />{feature}
                  </l>))}
              </u>< className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-50 0 to-purple-600text-whitehover:from-cyan-600 hover:to-purple-70 0' 
                     : 'bg-slate-700text-whitehover:bg-slate-60 0'
              }`}></ className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500to-purple-600text-whitehover:from-cyan-600 hover:to-purple-70 0' 
                     : 'bg-slate-700text-whitehover:bg-slate-60 0'
              }`}>Get Started
              </butto></di>))}
        </di></di></sectio>{/* CTASection */}
    <sectionclassName="py-16px-4 bg-gradient-to-r from-purple-60 0/20to-blue-600/20"><divclassName="max-w-4 xlmx-autotext-center"><h2className="text-4 xl font-boldtext-whitemb-6">Ready to TransformYourCRM?</h><spanclassName="text-xl text-gray-300mb-8"></spa></className="text-xl text-gray-300mb-8">Join thousands of businesses using AI-powered CRM to boost sales, improve customer relationships, and drive growth.
        </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="cyber-button px-8py-4text-lg"></spa></className="cyber-button px-8py-4text-lg">Start Free Trial
          </butto><spanclassName="cyber-button-outline px-8py-4text-lg"></spa></className="cyber-button-outline px-8py-4text-lg">Contact Sales
          </butto></di></di></sectio><Footer /></di>
  );
};

export default AICRMPage
