'use client';
import React, { useState, useCallback, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Receipt, Target, Users, CheckCircle, Brain, BarChart } from 'lucide-react';

const AIExpenseTracker: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Receipt,
      title: 'Smart Receipt Scanning',
      description: 'Automatically extract data from receipts using AI-powered OCR technology with 99% accuracy',
      color: 'text-purple-400'
    },
    {
      icon: Brain,
      title: 'AI Categorization',
      description: 'Intelligently categorize expenses and learn from your spending patterns over time',
      color: 'text-blue-400'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Get detailed insights into your spending habits with beautiful charts and reports',
      color: 'text-green-400'
    },
    {
      icon: Target,
      title: 'Budget Management',
      description: 'Set budgets, track progress, and get alerts when approaching limits',
      color: 'text-orange-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Unlimited receipts',
        'Basic categorization',
        'Monthly reports',
        'Email support',
        'Mobile app',
        '1 user account'
      ],
      popular: false},
    {
      name: 'Business',
      price: '$29',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Unlimited receipts',
        'AI categorization',
        'Advanced analytics',
        'Priority support',
        'Team collaboration',
        'Custom categories',
        '5 user accounts'
      ],
      popular: true},
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited everything',
        'Advanced AI features',
        'Custom integrations',
        '24/7 support',
        'White-label solution',
        'API access',
        'Unlimited users'
      ],
      popular: false}
  ];

  const useCases = [
    {
      title: 'Personal Finance',
      description: 'Track personal expenses and build better financial habits',
      icon: Receipt,
      result: '30% savings'
    },
    {
      title: 'Business Expenses',
      description: 'Manage business expenses and improve cash flow visibility',
      icon: BarChart,
      result: '50% faster'
    },
    {
      title: 'Tax Preparation',
      description: 'Organize receipts and expenses for easy tax filing',
      icon: Target,
      result: '90% easier'
    },
    {
      title: 'Team Management',
      description: 'Track team expenses and enforce spending policies',
      icon: Users,
      result: '100% control'
    }
  ];

  const benefits = [
    { metric: '99%', label: 'OCR Accuracy', color: 'text-green-400' },
    { metric: '5 min', label: 'Setup Time', color: 'text-blue-400' },
    { metric: '30%', label: 'Time Saved', color: 'text-purple-400' },
    { metric: '24/7', label: 'Available', color: 'text-orange-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Helmet>
      </Helmet> </Helmet> </Helmet><title>AI Expense Tracker - Smart Financial Management | Zion Tech Gro</title>u</title>p</title>
       <//title> <//title><meta name="description" content="Track expenses effortlessly with AI-powered receipt scanning and categorization. Save time and money with intelligent expense management." />
       </meta name="description" content="Track expenses effortlessly with AI-powered receipt scanning and categorization. Save time and money with intelligent expense management." /> </meta name="description" content="Track expenses effortlessly with AI-powered receipt scanning and categorization. Save time and money with intelligent expense management." /><meta name="keywords" content="expense tracker, receipt scanning, financial management, AI categorization, budget tracking" />
       </meta name="keywords" content="expense tracker, receipt scanning, financial management, AI categorization, budget tracking" /> </meta name="keywords" content="expense tracker, receipt scanning, financial management, AI categorization, budget tracking" /><meta property="og:title" content="AI Expense Tracker - Smart Financial Management" />
       </meta property="og:title" content="AI Expense Tracker - Smart Financial Management" /> </meta property="og:title" content="AI Expense Tracker - Smart Financial Management" /><meta property="og:description" content="Track expenses effortlessly with AI-powered receipt scanning and categorization." />
       </meta property="og:description" content="Track expenses effortlessly with AI-powered receipt scanning and categorization." /> </meta property="og:description" content="Track expenses effortlessly with AI-powered receipt scanning and categorization." /><meta property="og:type" content="website" />
       </meta property="og:type" content="website" /> </meta property="og:type" content="website" /><meta property="og:url" content="https://ziontechgroup.com/ai-expense-tracker" />
     </meta property="og:url" content="https://ziontechgroup.com/ai-expense-tracker" /> </meta property="og:url" content="https://ziontechgroup.com/ai-expense-tracker" /><div className="container mx-auto px-4 py-16">{/* Hero Section </div className="container mx-auto px-4 py-16">*</div className="container mx-auto px-4 py-16">/</div>}</div>
      <//div> <//div> </div><section className="text-center mb-16">
         </section className="text-center mb-16"> </section className="text-center mb-16"><div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
          </div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6"> </div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6"> </div><Receipt className="w-4 h-4" />
           </Receipt className="w-4 h-4" /> </Receipt className="w-4 h-4" /><span>AI-Powered Finan</span>c</span>e</span><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Expense Track</h1 className="text-4xl md:text-6xl font-bold text-white mb-6">e</h1 className="text-4xl md:text-6xl font-bold text-white mb-6">r</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your expense management with AI-powered receipt scanning and intelligent categorizatio</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">n</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">.</p>
            Save time, reduce errors, and gain valuable insights into your spending habit<//p>s<//p>.</p>

         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ><Phone className="w-5 h-5 mr-2" >Call: (302) 464-095</Phone className="w-5 h-5 mr-2" >0</Phone className="w-5 h-5 mr-2" ><a
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >Start Tracki</a
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >n</a
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >g</a>
          <//a> <//a> </a>
        <//a> <//a> </div>
      <//div> <//div> </section>

        {/* Benefits */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> </div>(</div>
             <//div> <//div><div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
               </div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20"> </div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20"><div className={`text-3xl font-bold ${benefit.color} mb-2`}>{benefit.metric</div className={`text-3xl font-bold ${benefit.color} mb-2`}>}</div className={`text-3xl font-bold ${benefit.color} mb-2`}><div className="text-white font-semibold mb-2">{benefit.lab</div className="text-white font-semibold mb-2">e</div className="text-white font-semibold mb-2">l</div>}</div>
               <//div> <//div><div className="text-gray-400 text-sm">Industry-leading performa</div className="text-gray-400 text-sm">n</div className="text-gray-400 text-sm">c</div>e</div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Features */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white text-center mb-12">Smart Feature</h2 className="text-3xl font-bold text-white text-center mb-12">s</h2 className="text-3xl font-bold text-white text-center mb-12"><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) =</div className="grid grid-cols-1 md:grid-cols-2 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
               </div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"> </div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"><div className="flex items-start space-x-4">
                 </div className="flex items-start space-x-4"> </div className="flex items-start space-x-4"><div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}>
                  </div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}> </div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}> </div><feature.icon className="w-6 h-6" />
                </feature.icon className="w-6 h-6" /> </feature.icon className="w-6 h-6" /> </div>
                 <//div> <//div><div>
                  </div> </div> </div><h3 className="text-xl font-semibold text-white mb-2">{feature.title</h3 className="text-xl font-semibold text-white mb-2">}</h3 className="text-xl font-semibold text-white mb-2"><p className="text-gray-400">{feature.descriptio</p className="text-gray-400">n</p className="text-gray-400">}</p>
                <//p> <//p> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Use Cases */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white text-center mb-12">Perfect Fo</h2 className="text-3xl font-bold text-white text-center mb-12">r</h2 className="text-3xl font-bold text-white text-center mb-12"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{useCases.map((useCase, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> </div>(</div>
             <//div> <//div><div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
               </div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"> </div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"><div className="flex items-center justify-between mb-4">
                </div className="flex items-center justify-between mb-4"> </div className="flex items-center justify-between mb-4"> </div><useCase.icon className="w-8 h-8 text-purple-400" />
                 </useCase.icon className="w-8 h-8 text-purple-400" /> </useCase.icon className="w-8 h-8 text-purple-400" /><div className="text-sm font-semibold text-green-400">{useCase.resul</div className="text-sm font-semibold text-green-400">t</div className="text-sm font-semibold text-green-400">}</div><h3 className="text-lg font-semibold text-white mb-2">{useCase.title</h3 className="text-lg font-semibold text-white mb-2">}</h3 className="text-lg font-semibold text-white mb-2"><p className="text-gray-400 text-sm">{useCase.descriptio</p className="text-gray-400 text-sm">n</p className="text-gray-400 text-sm">}</p>
            <//p> <//p> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Pricing */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white text-center mb-12">Simple Pricin</h2 className="text-3xl font-bold text-white text-center mb-12">g</h2 className="text-3xl font-bold text-white text-center mb-12"><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) =</div className="grid grid-cols-1 md:grid-cols-3 gap-8">></div className="grid grid-cols-1 md:grid-cols-3 gap-8"> </div>(</div>
               <//div> <//div><div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}>{plan.popular &</div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}>&</div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}> </div>(<//div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                 </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div> </div>
               <//div> <//div><div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popu</div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">l</div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">a</div>r</div>
                <//div> <//div> </div>
                )}
               <//div> <//div><div className="text-center mb-6">
                </div className="text-center mb-6"> </div className="text-center mb-6"> </div><h3 className="text-2xl font-bold text-white mb-2">{plan.nam</h3 className="text-2xl font-bold text-white mb-2">e</h3 className="text-2xl font-bold text-white mb-2">}</h3>
                 <//h3> <//h3><div className="flex items-baseline justify-center">
                  </div className="flex items-baseline justify-center"> </div className="flex items-baseline justify-center"> </div><span className="text-4xl font-bold text-white">{plan.pric</span className="text-4xl font-bold text-white">e</span className="text-4xl font-bold text-white">}</span><span className="text-gray-400 ml-1">{plan.perio</span className="text-gray-400 ml-1">d</span className="text-gray-400 ml-1">}</span><p className="text-gray-400 mt-2">{plan.description</p className="text-gray-400 mt-2">}</p className="text-gray-400 mt-2"><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) =></ul className="space-y-3 mb-8"> </ul className="space-y-3 mb-8">(</ul>
                  <//ul> <//ul> </ul><li key={featureIndex} className="flex items-center space-x-3">
                     </li key={featureIndex} className="flex items-center space-x-3"> </li key={featureIndex} className="flex items-center space-x-3"><CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                     </CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /><span className="text-gray-300">{featu</span className="text-gray-300">r</span className="text-gray-300">e</span>}</span>
                  <//span> <//span> </li>
                  ))}
               <//li> <//li><a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >Get Start</a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >e</a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >d</a>
              <//a> <//a> </a>
            <//a> <//a> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* CTA Section */}
       <//section> <//section><section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-12 rounded-lg border border-purple-500/30">
         </section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-12 rounded-lg border border-purple-500/30"> </section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-12 rounded-lg border border-purple-500/30"><h2 className="text-3xl font-bold text-white mb-4">Ready to Simplify Your Finance</h2 className="text-3xl font-bold text-white mb-4">s</h2 className="text-3xl font-bold text-white mb-4">?</h2>
           <//h2> <//h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join 10,000+ users already saving time and money with our AI Expense Tracke</p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">r</p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">.</p>
         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ><Phone className="w-5 h-5 mr-2" >Call: (302) 464-09</Phone className="w-5 h-5 mr-2" >5</Phone className="w-5 h-5 mr-2" >0</Phone>
          <//Phone> <//Phone> </Phone>
           <//Phone> <//Phone><a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            ><MessageSquare className="w-5 h-5 mr-2" >Email </MessageSquare className="w-5 h-5 mr-2" >U</MessageSquare className="w-5 h-5 mr-2" >s</MessageSquare>
          <//MessageSquare> <//MessageSquare> </MessageSquare>
        <//MessageSquare> <//MessageSquare> </div>
      <//div> <//div> </section>
    <//section> <//section> </div>
  <//div> <//div> </div>
  );

AIExpenseTracker.displayName = 'AIExpenseTracker';

export default AIExpenseTracker<//div>;<//div>