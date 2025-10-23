'use client';
import React from 'react';
import {Receipt, CheckCircle, Phone, Star} from 'lucide-react';;

constExpenseTrackerPage: React.FC= () =>{constfeatures= [
    {
      icon: Receipt,
      title: 'Smart Receipt Scanning',
      description: 'AI-powered receipt scanning that automatically extracts expense data, categorizes transactions, and creates detailed reports.',
      benefit: 'Save 8+ hours per month'
   },
    {icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Get instant insights into your spending patterns with interactive charts, budget tracking, and financial forecasting.',
      benefit: 'Reduce expenses by25%'
   },
    {icon: Brain,
      title: 'AI Categorization',
      description: 'Automatically categorize expenses using machine learning that learns from your spending patterns and preferences.',
      benefit: '9 9% accurate categorization'
   },
    {icon: Zap,
      title: 'Automated Workflows',
      description: 'Set up automated expense approval workflows, reimbursement processes, and compliance checks.',
      benefit: 'Process expenses5x faster'
   },
    {icon: Target,
      title: 'Budget Management',
      description: 'Create and track budgets with AI-powered alerts and recommendations for better financial control.',
      benefit: 'Stay within budget90% of the time'
   },
    {icon: Shield,
      title: 'Compliance & Security',
      description: 'Ensure compliance with tax regulations and company policies with automated checks and audit trails.',
      benefit: '10 0% compliance guarantee'
   }
  ];

  constpricingPlans= [
    {name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Unlimited receipts',
        'Basic AI categorization',
        'Expense reports',
        'Mobile app access',
        'Email support',
        '1 year data retention'
      ],
      popular: false
   },
    {name: 'Business',
      price: '$2 9',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Up to 10users',
        'Advanced AI features',
        'Team collaboration',
        'Custom categories',
        'Priority support',
        'API access',
        'Advanced reporting',
        '2 years data retention'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$9 9',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Premium AI features',
        'Custom workflows',
        'Advanced integrations',
        'Dedicated support',
        'White-label options',
        'Unlimited data retention',
        'Custom compliance rules'
      ],
      popular: false
   }
  ];

  constintegrations= [
    {name: 'QuickBooks', icon: '📊', description: 'Accounting software'},
    {name: 'Xero', icon: '💰', description: 'Cloud accounting'},
    {name: 'Sage', icon: '📈', description: 'Business management'},
    {name: 'Stripe', icon: '💳', description: 'Payment processing'},
    {name: 'PayPal', icon: '💸', description: 'Online payments'},
    {name: 'Slack', icon: '💬', description: 'Team communication'},
    {name: 'Microsoft Teams', icon: '👥', description: 'Collaboration'},
    {name: 'Google Workspace', icon: '📧', description: 'Productivity suite'}
  ];

  consttestimonials= [
    {name: 'Michael Johnson',
      company: 'Small Business Owner',
      role: 'CEO',
      content: 'Expense Tracker saved me 1 0 hours per month on bookkeeping. The AI categorization is incredibly accurate.',
      rating:5},
    {name: 'Sarah Williams',
      company: 'Marketing Agency',
      role: 'Finance Manager',
      content: 'Our expense processing time dropped from2days to2hours. The automated workflows are game-changing.',
      rating:5},
    {name: 'David Chen',
      company: 'Consulting Firm',
      role: 'Operations Director',
      content: 'The compliance features ensure we never miss a tax deduction. Our accountant loves the detailed reports.',
      rating:5}
  ];

  return (
  <divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">{/* HeroSection */}
    <sectionclassName="container mx-autopx-4py-16pt-24"><divclassName="text-centermb-16"><divclassName="inline-flex items-center justify-center w-20h-20bg-gradient-to-r from-cyan-40 0to-purple-500rounded-fullmb-6"><ReceiptclassName="w-10h-10text-white" /></di><spanclassName="text-4 xlmd:text-6 xl font-boldtext-whitemb-6"></className="text-4 xlmd:text-6 xl font-boldtext-whitemb-6">AI Expense Tracker
        </h><spanclassName="text-xlmd:text-2 xltext-cyan-400mb-8font-medium"></className="text-xlmd:text-2 xltext-cyan-400mb-8font-medium">Smart Financial Management
        </p><spanclassName="text-lg text-gray-300max-w-4 xl mx-automb-8leading-relaxed"></className="text-lg text-gray-300max-w-4 xl mx-automb-8leading-relaxed">Transform your expense management with AI-powered receipt scanning, automated categorization, 
            and intelligent financial insights. Save time, reduce errors, and gain complete control 
            over your business finances.
        </p><divclassName="flex flex-colsm:flex-row gap-4justify-centeritems-center"><ahref="tel:+13024640950"
             className="bg-gradient-to-r from-cyan-40 0 to-purple-500text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-500 hover:to-purple-600transition-allduration-300flexitems-center"
            ><PhoneclassName="w-5h-5mr-2" />Call: (30 2)464-0950</a><ahref="/contact"
             className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-whitehover:text-indigo-600transition-allduration-300"
            >Start Free Trial
          </a></di></di>{/* KeyBenefits */}
      <divclassName="grid grid-cols-1 md:grid-cols-4 gap-8mb-16"><divclassName="text-center"><divclassName="text-4 xl font-bold text-cyan-400mb-2">8+</di><divclassName="text-whitefont-semiboldmb-2">HoursSaved</di><divclassName="text-gray-300text-sm">Per month onexpensemanagement</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-purple-400mb-2">99%</di><divclassName="text-whitefont-semiboldmb-2">Accuracy</di><divclassName="text-gray-300text-sm">InAIcategorization</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-green-400mb-2">25%</di><divclassName="text-whitefont-semiboldmb-2">CostReduction</di><divclassName="text-gray-300text-sm">Through betterexpensecontrol</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-orange-400mb-2">5x</di><divclassName="text-whitefont-semiboldmb-2">FasterProcessing</di><divclassName="text-gray-300text-sm">Withautomatedworkflows</di></di></di>{/* FeaturesSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Powerful Expense Management Features
        </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{features.map((featureindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-50 0/20 hover:border-cyan-40 0/40transition-allduration-300"><feature.iconclassName="w-12h-12text-cyan-400mb-4" /><h3className="text-xl font-boldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300mb-4leading-relaxed">{feature.description}</p><divclassName="text-cyan-400font-semiboldtext-sm">{feature.benefit}</di></di>))}
        </di></sectio>{/* IntegrationsSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Integrates with Your Tools
        </h><divclassName="grid grid-cols-2md:grid-cols-4gap-6">{integrations.map((integrationindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-50 0/20text-centerhover:border-cyan-40 0/40transition-allduration-300"><divclassName="text-4xlmb-3">{integration.icon}</di><h3className="text-lg font-boldtext-whitemb-2">{integration.name}</h><pclassName="text-gray-300text-sm">{integration.description}</p></di>))}
        </di></sectio>{/* PricingSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Simple, Transparent Pricing
        </h><divclassName="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xlmx-auto">{pricingPlans.map((planindex) => (
           <divkey={index} className={`bg-slate-80 0/50backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300${
                plan.popular 
                  ? 'border-cyan-400scale-10 5' 
                   : 'border-slate-700 hover:border-cyan-50 0/5 0'
            }`}>{plan.popular && (
                <divclassName="bg-cyan-400text-slate-900px-4 py-2 rounded-full text-sm font-semiboldtext-centermb-4">Most Popular
                </di>)}
              <h3className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h><pclassName="text-gray-300mb-6">{plan.description}</p><divclassName="mb-6"><spanclassName="text-4 xlfont-boldtext-white">{plan.price}</spa><spanclassName="text-gray-300">{plan.period}</spa></di><ulclassName="space-y-3mb-8">{plan.features.map((featurefeatureIndex) => (
                 <likey={featureIndex}className="flex items-centertext-gray-300"><CheckCircleclassName="w-5 h-5text-green-400mr-3flex-shrink-0" />{feature}
                  </l>))}
              </u>< className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-30 0 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-40 0 to-purple-500text-whitehover:from-cyan-500 hover:to-purple-60 0'
                     : 'border-2 border-cyan-400text-cyan-400 hover:bg-cyan-400 hover:text-white'
              }`}></ className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-30 0 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400to-purple-500text-whitehover:from-cyan-500 hover:to-purple-60 0'
                     : 'border-2 border-cyan-400text-cyan-400 hover:bg-cyan-400 hover:text-white'
              }`}>Get Started
              </butto></di>))}
        </di></sectio>{/* Testimonials */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></spa></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">What Our Customers Say
        </h><divclassName="grid grid-cols-1md:grid-cols-3gap-8">{testimonials.map((testimonialindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20"><divclassName="flexitems-centermb-4">{[...Array(testimonial.rating)].map((_i) => (
                 <Starkey={i}className="w-5 h-5 text-yellow-400fill-current" />))}
              </di><pclassName="text-gray-300mb-4italic">"{testimonial.content}"</p><di v><divclassName="font-semiboldtext-white">{testimonial.name}</di><divclassName="text-cyan-400text-sm">{testimonial.role}</di><divclassName="text-gray-400text-sm">{testimonial.company}</di></di></di>))}
        </di></sectio>{/* CTASection */}
      <sectionclassName="text-center bg-gradient-to-r from-cyan-50 0/10to-purple-50 0/10rounded-lg p-12border border-cyan-500/20"><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-6"></spa></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-6">Ready to Master Your Expenses?
        </h><spanclassName="text-lg text-gray-300mb-8 max-w-2xlmx-auto"></spa></className="text-lg text-gray-300mb-8 max-w-2xlmx-auto">Join thousands of businesses using AI Expense Tracker to streamline financial 
            management and gain better control over their spending.
        </p><divclassName="flex flex-colsm:flex-row gap-4justify-centeritems-center"><ahref="tel:+13024640950"
             className="bg-gradient-to-r from-cyan-40 0 to-purple-500text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-500 hover:to-purple-600transition-allduration-300flexitems-center"
            ><PhoneclassName="w-5h-5mr-2" />Call: (30 2)464-0950</a><ahref="/contact"
             className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-whitehover:text-indigo-600transition-allduration-300"
            >Start Free Trial
          </a></di></sectio></sectio></di>
  );
};

export default ExpenseTrackerPage;