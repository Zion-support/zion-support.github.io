'use client';
import React from 'react';
import { Receipt } from 'lucide-react';

const ExpenseTrackerPage: React.FC = () => {
  const features = [
    {
      icon: Receipt,
      title: 'Smart Receipt Scanning',
      description: 'AI-powered receipt scanning that automatically extracts expense data, categorizes transactions, and creates detailed reports.',
      benefit: 'Save 8+ hours per month'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Get instant insights into your spending patterns with interactive charts, budget tracking, and financial forecasting.',
      benefit: 'Reduce expenses by 25%'
    },
    {
      icon: Brain,
      title: 'AI Categorization',
      description: 'Automatically categorize expenses using machine learning that learns from your spending patterns and preferences.',
      benefit: '99% accurate categorization'
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Set up automated expense approval workflows, reimbursement processes, and compliance checks.',
      benefit: 'Process expenses 5x faster'
    },
    {
      icon: Target,
      title: 'Budget Management',
      description: 'Create and track budgets with AI-powered alerts and recommendations for better financial control.',
      benefit: 'Stay within budget 90% of the time'
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Ensure compliance with tax regulations and company policies with automated checks and audit trails.',
      benefit: '100% compliance guarantee'
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
        'Basic AI categorization',
        'Expense reports',
        'Mobile app access',
        'Email support',
        '1 year data retention'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$29',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Up to 10 users',
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
    {
      name: 'Enterprise',
      price: '$99',
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

  const integrations = [
    { name: 'QuickBooks', icon: '📊', description: 'Accounting software' },
    { name: 'Xero', icon: '💰', description: 'Cloud accounting' },
    { name: 'Sage', icon: '📈', description: 'Business management' },
    { name: 'Stripe', icon: '💳', description: 'Payment processing' },
    { name: 'PayPal', icon: '💸', description: 'Online payments' },
    { name: 'Slack', icon: '💬', description: 'Team communication' },
    { name: 'Microsoft Teams', icon: '👥', description: 'Collaboration' },
    { name: 'Google Workspace', icon: '📧', description: 'Productivity suite' }
  ];

  const testimonials = [
    {
      name: 'Michael Johnson',
      company: 'Small Business Owner',
      role: 'CEO',
      content: 'Expense Tracker saved me 10 hours per month on bookkeeping. The AI categorization is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      company: 'Marketing Agency',
      role: 'Finance Manager',
      content: 'Our expense processing time dropped from 2 days to 2 hours. The automated workflows are game-changing.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Consulting Firm',
      role: 'Operations Director',
      content: 'The compliance features ensure we never miss a tax deduction. Our accountant loves the detailed reports.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><//div>
      {/* Hero Section */}</div><>
<//div>
<section className="container mx-auto px-4 py-16 pt-24"><>
</section className="container mx-auto px-4 py-16 pt-24">
<div className="text-center mb-16"></div><>
<//div>
<div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6"></div><>
<//div>
<Receipt className="w-10 h-10 text-white" /><>
</Receipt className="w-10 h-10 text-white" />
</div><>
<//div>
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1><//h1>
            AI Expense Tracker</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium"></p><//p>
            Smart Financial Management</p><>
<//p>
</p><>
<//p>
<p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"></p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your expense management with AI-powered receipt scanning, automated categorization, 
            and intelligent financial insights. Save time, reduce errors, and gain complete control </p><//p>
            over your business finances.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div><>
<//div>
<a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            ><>
</a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
<Phone className="w-5 h-5 mr-2" /></Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a><>
<//a>
<a href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            ></a href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial
            </a><>
<//a>
</div><>
<//div>
</div><//div>
        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"></div><>
<//div>
<div className="text-center"></div><>
<//div>
<div className="text-4xl font-bold text-cyan-400 mb-2">8+</div><>
<//div>
<div className="text-white font-semibold mb-2">Hours Saved</div><>
<//div>
<div className="text-gray-300 text-sm">Per month on expense management</div><>
<//div>
</div><>
<//div>
<div className="text-center"></div><>
<//div>
<div className="text-4xl font-bold text-purple-400 mb-2">99%</div><>
<//div>
<div className="text-white font-semibold mb-2">Accuracy</div><>
<//div>
<div className="text-gray-300 text-sm">In AI categorization</div><>
<//div>
</div><>
<//div>
<div className="text-center"></div><>
<//div>
<div className="text-4xl font-bold text-green-400 mb-2">25%</div><>
<//div>
<div className="text-white font-semibold mb-2">Cost Reduction</div><>
<//div>
<div className="text-gray-300 text-sm">Through better expense control</div><>
<//div>
</div><>
<//div>
<div className="text-center"></div><>
<//div>
<div className="text-4xl font-bold text-orange-400 mb-2">5x</div><>
<//div>
<div className="text-white font-semibold mb-2">Faster Processing</div><>
<//div>
<div className="text-gray-300 text-sm">With automated workflows</div><>
<//div>
</div><>
<//div>
</div><//div>
        {/* Features Section */}
        <section className="mb-16"><>
</section className="mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"></h1><//h1>
            Powerful Expense Management Features</h1><>
<//h1>
</h2><>
<//h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div><//div>
            {features.map((feature, index) => (</div><>
<//div>
<div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"></div><>
<//div>
<feature.icon className="w-12 h-12 text-cyan-400 mb-4" /><>
</feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
<h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3><>
<//h3>
<p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p><>
<//p>
<div className="text-cyan-400 font-semibold text-sm">{feature.benefit}</div><>
<//div>
</div><//div>
            ))}
          </div><>
<//div>
</section><//section>
        {/* Integrations Section */}
        <section className="mb-16"><>
</section className="mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"></h1><//h1>
            Integrates with Your Tools</h1><>
<//h1>
</h2><>
<//h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6"></div><//div>
            {integrations.map((integration, index) => (</div><>
<//div>
<div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300"></div><>
<//div>
<div className="text-4xl mb-3">{integration.icon}</div><>
<//div>
<h3 className="text-lg font-bold text-white mb-2">{integration.name}</h3><>
<//h3>
<p className="text-gray-300 text-sm">{integration.description}</p><>
<//p>
</div><//div>
            ))}
          </div><>
<//div>
</section><//section>
        {/* Pricing Section */}
        <section className="mb-16"><>
</section className="mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"></h1><//h1>
            Simple, Transparent Pricing</h1><>
<//h1>
</h2><>
<//h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div><//div>
            {pricingPlans.map((plan, index) => (</div><>
<//div>
<div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}></div><//div>
                {plan.popular && (</div><>
<//div>
<div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4"></div><//div>
                    Most Popular</div><>
<//div>
</div><//div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><>
<//h3>
<p className="text-gray-300 mb-6">{plan.description}</p><>
<//p>
<div className="mb-6"></div><>
<//div>
<span className="text-4xl font-bold text-white">{plan.price}</span><>
<//span>
<span className="text-gray-300">{plan.period}</span><>
<//span>
</div><>
<//div>
<ul className="space-y-3 mb-8"></ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300"><>
</li key={featureIndex} className="flex items-center text-gray-300">
<CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li><//li>
                  ))}
                </ul><>
<//ul>
<button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}></button><//button>
                  Get Started</button><>
<//button>
</button><>
<//button>
</div><//div>
            ))}
          </div><>
<//div>
</section><//section>
        {/* Testimonials */}
        <section className="mb-16"><>
</section className="mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"></h1><//h1>
            What Our Customers Say</h1><>
<//h1>
</h2><>
<//h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div><//div>
            {testimonials.map((testimonial, index) => (</div><>
<//div>
<div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20"></div><>
<//div>
<div className="flex items-center mb-4"></div><//div>
                  {[...Array(testimonial.rating)].map((_, i) => (</div><>
<//div>
<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" /></Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div><>
<//div>
<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p><>
<//p>
<div></div><>
<//div>
<div className="font-semibold text-white">{testimonial.name}</div><>
<//div>
<div className="text-cyan-400 text-sm">{testimonial.role}</div><>
<//div>
<div className="text-gray-400 text-sm">{testimonial.company}</div><>
<//div>
</div><>
<//div>
</div><//div>
            ))}
          </div><>
<//div>
</section><//section>
        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20"><>
</section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h1><//h1>
            Ready to Master Your Expenses?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"></p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using AI Expense Tracker to streamline financial </p><//p>
            management and gain better control over their spending.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div><>
<//div>
<a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            ><>
</a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
<Phone className="w-5 h-5 mr-2" /></Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a><>
<//a>
<a href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            ></a href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial
            </a><>
<//a>
</div><>
<//div>
</section><>
<//section>
</section><>
<//section>
</div><//div>
  );
};

export default ExpenseTrackerPage;