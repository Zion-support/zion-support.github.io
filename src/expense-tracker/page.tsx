'use client'';
import React from 'react';';
import {Receipt, TrendingUp, Shield, Zap, Brain, Target, CheckCircle, Star, Phone} from 'lucide-react';';
import { Link } from 'react-router-dom';';';
const ExpenseTrackerPage: React.FC = () => {;
const features = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Receipt,
      title: 'Smart Receipt Scanning','
      description: 'AI-powered receipt scanning that automatically extracts expense data, categorizes transactions, and creates detailed reports.','
      benefit:     ,
$4},
      icon: TrendingUp,
      title: 'Real-time Analytics','
      description: 'Get instant insights into your spending patterns with interactive charts, budget tracking, and financial forecasting.','
      benefit:       ,
iconicon: Brain,
      title: 'AI Categorization','
      description: 'Automatically categorize expenses using machine learning that learns from your spending patterns and preferences.','
      benefit:       ,
iconicon: Zap,
      title: 'Automated Workflows','
      description: 'Set up automated expense approval workflows, reimbursement processes, and compliance checks.','
      benefit:       ,
iconicon: Target,
      title: 'Budget Management','
      description: 'Create and track budgets with AI-powered alerts and recommendations for better financial control.','
      benefit:       ,
iconicon: Shield,
      title: 'Compliance & Security','
      description: 'Ensure compliance with tax regulations and company policies with automated checks and audit trails.','
      benefit:     ,
$4}
  ];
const pricingPlans = [
  // TODO: Add items
]
  // TODO: Add items
]
      name: 'Personal','
      price: '$9','
      period: '/month','
      description: 'Perfect for individuals','
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Unlimited receipts','
        'Basic AI categorization','
        'Expense reports','
        'Mobile app access','
        'Email support','
        '1 year data retention''
      ],
      popular: false,
    name: 'Business','
      price: '$29','
      description: 'Ideal for small businesses','
        'Up to 10 users','
        'Advanced AI features','
        'Team collaboration','
        'Custom categories','
        'Priority support','
        'API access','
        'Advanced reporting','
        '2 years data retention''
      popular: true,
    name: 'Enterprise','
      price: '$99','
      description: 'For large organizations','
        'Unlimited users','
        'Premium AI features','
        'Custom workflows','
        'Advanced integrations','
        'Dedicated support','
        'White-label options','
        'Unlimited data retention','
        'Custom compliance rules';';
const integrations = [
  // TODO: Add items
]
  // TODO: Add items
]
    { name: 'QuickBooks', icon: '📊', description: 'Accounting software' },'
    { name: 'Xero', icon: '💰', description: 'Cloud accounting' },'
    { name: 'Sage', icon: '📈', description: 'Business management' },'
    { name: 'Stripe', icon: '💳', description: 'Payment processing' },'
    { name: 'PayPal', icon: '💸', description: 'Online payments' },'
    { name: 'Slack', icon: '💬', description: 'Team communication' },'
    { name: 'Microsoft Teams', icon: '👥', description: 'Collaboration' },'
    { name: 'Google Workspace', icon: '📧', description: 'Productivity suite' }';
const testimonials = [
  // TODO: Add items
]
  // TODO: Add items
]
      name: 'Michael Johnson','
      company: 'Small Business Owner','
      role: 'CEO','
      content: 'Expense Tracker saved me 10 hours per month on bookkeeping. The AI categorization is incredibly accurate.','
      rating: 5,
    name: 'Sarah Williams','
      company: 'Marketing Agency','
      role: 'Finance Manager','
      content: 'Our expense processing time dropped from 2 days to 2 hours. The automated workflows are game-changing.','
      name: 'David Chen','
      company: 'Consulting Firm','
      role: 'Operations Director','
      content: 'The compliance features ensure we never miss a tax deduction. Our accountant loves the detailed reports.','
  return (
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"container mx-auto px-4 py-16 pt-24"
<div className="
<div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6"w-10 h-10 text-white"
<h1 className="
            AI Expense Tracker

          <p className="text-xl md:text-2 xl text-cyan-400 mb-8 font-medium"text-lg text-gray-300 max-w-4 xl mx-auto mb-8 leading-relaxed"
            Transform your expense management with AI-powered receipt scanning, automated categorization,
            and intelligent financial insights. Save time, reduce errors, and gain complete control
            over your business finances.
          <div className="
<$2 />
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"w-5 h-5 mr-2"
              Call: (302) 464-0950

            <$2 />
              href=""
              className="
              Start Free Trial,

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"text-center"
<div className="
            <div className="text-white font-semibold mb-2"text-gray-300 text-sm"
            <div className="
            <div className="text-white font-semibold mb-2"text-gray-300 text-sm"
            <div className="
            <div className="text-white font-semibold mb-2"text-gray-300 text-sm"
            <div className="
            <div className="text-white font-semibold mb-2"text-gray-300 text-sm"
        {/* Features Section */}
        <section className="
<h2 className="text-3 xl md: text-4 xl font-bold text-white mb-12 text-center"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            {features.map((feature, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<feature.icon className="w-12 h-12 text-cyan-400 mb-4"text-xl font-bold text-white mb-3"
                <p className="
                <div className="text-cyan-400 font-semibold text-sm"grid grid-cols-2 md:grid-cols-4 gap-6"
            {integrations.map((integration, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<div className="text-4 xl mb-3"text-lg font-bold text-white mb-2"
                <p className="
        {/* Pricing Section */}
            Simple, Transparent Pricing
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6 xl mx-auto"bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4"
                    Most Popular
                )}
                <h3 className="
                <p className="text-gray-300 mb-6"mb-6"
<span className="
                  <span className="text-gray-300"space-y-3 mb-8"
                  {plan.features.map((feature, featureIndex) => (
  // TODO: Add parameters
)
                    <li key={featureIndex} className="
<CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"grid grid-cols-1 md:grid-cols-3 gap-8"
            {testimonials.map((testimonial, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<div className="flex items-center mb-4"w-5 h-5 text-yellow-400 fill-current"
<p className="{testimonial.content}""font-semibold text-white"
                  <div className="
                  <div className="text-gray-400 text-sm"text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20"
<h2 className="
            Ready to Master Your Expenses?
          <p className="text-lg text-gray-300 mb-8 max-w-2 xl mx-auto"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      {/* Hero Section */}
      <section className=""
        <div className=""
          <div className=""
            <Receipt className=""
          < className="
  md: text-6 xl font-bold text-white mb-6">""
          < className="
  md: text-2 xl text-cyan-400 mb-8 font-medium">""
          <p className="
Transform your expense management with AI-powered receipt scanning, automated categorization,
            and intelligent financial insights. Save time, reduce errors, and gain complete control
            over your business finances.
          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center"tel:+13024640950" className="
// >
          ""w-5 h-5 mr-2"
 Cal,
  l: (302) 464-0950
            </a>
<$2 />
              href=" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300""
        < className="
  md:grid-cols-4 gap-8 mb-16">""
          <div className=""
            <div className=""
            <div className=""
            <div className=""
            <div className=""
            <div className=""
            <div className=""
            <div className=""
            <div className=""
            <div className=""
            <div className=""
            <div className=""
            <div className="
        {/* Features Section */}""mb-16""text-3 xl,"
  md: text-4 xl font-bold text-white mb-12 text-center"
</h2>
// Powerful Expense Management Features,
          </h2>""grid grid-cols-1,$2 />"">"
            {features.map((feature, index) => ()}"
          < key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20,">"
</div>"
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4"
                <h3 className="text-xl font-bold text-white mb-3"
                <p className="text-gray-300 mb-4 leading-relaxed"
                <div className="text-cyan-400 font-semibold text-sm""
          < className="
  md:grid-cols-4 gap-6">""
          < key={index} className="
  hover:border-cyan-400/40 transition-all duration-300">""
                <div className=""
                <h3 className=""
                <p className="
{/* Pricing Section */}
            Simple, Transparent Pricing;""grid grid-cols-1,"
  md:grid-cols-3 gap-8 max-w-6 xl mx-auto"
            {pricingPlans.map((plan, index) => ()}
          < key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${}$2 />
  // TOD,
  O: Add content,
}
//                 plan.popular
//                   ? 'border-cyan-400 scale-105''
                  : 'border-slate-700,'
  hover:border-cyan-500/50'`'
              }`}>
                {plan.popular && ()}""bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4"
Most Popular
                )}"
                <h3 className="text-2 xl font-bold text-white mb-2"
                <p className="text-gray-300 mb-6"
                <div className="mb-6"
                  <span className="text-4 xl font-bold text-white"
                  <span className="text-gray-300"
                <ul className="space-y-3 mb-8""
          <li key={featureIndex} className=""
                      <CheckCircle className="
                      {feature}
                </ul>`
                < className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${}$2 />
? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white,'
  hover:from-cyan-500,
  hover:to-purple-600''
                    : 'border-2 border-cyan-400 text-cyan-400,'
  hover:bg-cyan-400,
  hover: text-white''
                  Get Started,
                </button></button>
        {/* Testimonials */}
            What Our Customers Say;""grid grid-cols-1,"
  md:grid-cols-3 gap-8"
            {testimonials.map((testimonial, index) => ()}""bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20""flex items-center mb-4"
                  {[...Array(testimonial.rating)].map((_, i) => ()}"
          <Starkey={i} className="w-5 h-5 text-yellow-400 fill-current"
                <p className="text-gray-300 mb-4 italic""
                <div></div>"
                  <div className="font-semibold text-white"
                  <div className="text-cyan-400 text-sm"
                  <div className="text-gray-400 text-sm""
        <section className=""
          < className="
  md: text-4 xl font-bold text-white mb-6">""
          <p className="
            Join thousands of businesses using AI Expense Tracker to streamline financial
            management and gain better control over their spending.
  ),
}
export default ExpenseTrackerPage</div></div>;
</div></div>
</div></button>
</div></div>
</div></div>
</div></div>
</div></div>
</h2></div>
</div></Link>
</a></div>
</p></p>
</div></section>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</span></span>
</p></p>
</p></p>
</p></h3>
</h3></h3>
</section></section>
}}}))))))))))))))