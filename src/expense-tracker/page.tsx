'use client'
import React from 'react';
import { Receipt, TrendingUp, Shield, Zap, Brain, Target, CheckCircle, Star, Phone } from 'lucide-react';
import { Link  } from 'react-router-dom';const ExpenseTrackerPage: React.FC  = () => {
  const features = [
    {
      icon: Receipt,
      title: 'Smart Receipt Scanning',
      description: 'AI-powered receipt scanning that automatically extracts expense data, categorizes transactions, and creates detailed reports.',
      benefit:     ,
$4},
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Get instant insights into your spending patterns with interactive charts, budget tracking, and financial forecasting.',
      benefit:       ,
iconicon: Brain,
      title: 'AI Categorization',
      description: 'Automatically categorize expenses using machine learning that learns from your spending patterns and preferences.',
      benefit:       ,
iconicon: Zap,
      title: 'Automated Workflows',
      description: 'Set up automated expense approval workflows, reimbursement processes, and compliance checks.',
      benefit:       ,
iconicon: Target,
      title: 'Budget Management',
      description: 'Create and track budgets with AI-powered alerts and recommendations for better financial control.',
      benefit:       ,
iconicon: Shield,
      title: 'Compliance & Security',
      description: 'Ensure compliance with tax regulations and company policies with automated checks and audit trails.',
      benefit:     ,
$4}
  ]
  const pricingPlans = [
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
      popular: false,
    name: 'Business',
      price: '$29',
      description: 'Ideal for small businesses',
        'Up to 10 users',
        'Advanced AI features',
        'Team collaboration',
        'Custom categories',
        'Priority support',
        'API access',
        'Advanced reporting',
        '2 years data retention'
      popular: true,
    name: 'Enterprise',
      price: '$99',
      description: 'For large organizations',
        'Unlimited users',
        'Premium AI features',
        'Custom workflows',
        'Advanced integrations',
        'Dedicated support',
        'White-label options',
        'Unlimited data retention',
        'Custom compliance rules'
  const integrations = [
    { name: 'QuickBooks', icon: '📊', description: 'Accounting software' },
    { name: 'Xero', icon: '💰', description: 'Cloud accounting' },
    { name: 'Sage', icon: '📈', description: 'Business management' },
    { name: 'Stripe', icon: '💳', description: 'Payment processing' },
    { name: 'PayPal', icon: '💸', description: 'Online payments' },
    { name: 'Slack', icon: '💬', description: 'Team communication' },
    { name: 'Microsoft Teams', icon: '👥', description: 'Collaboration' },
    { name: 'Google Workspace', icon: '📧', description: 'Productivity suite' }
  const testimonials = [
      name: 'Michael Johnson',
      company: 'Small Business Owner',
      role: 'CEO',
      content: 'Expense Tracker saved me 10 hours per month on bookkeeping. The AI categorization is incredibly accurate.',
      rating: 5,
    name: 'Sarah Williams',
      company: 'Marketing Agency',
      role: 'Finance Manager',
      content: 'Our expense processing time dropped from 2 days to 2 hours. The automated workflows are game-changing.',
      name: 'David Chen',
      company: 'Consulting Firm',
      role: 'Operations Director',
      content: 'The compliance features ensure we never miss a tax deduction. Our accountant loves the detailed reports.',
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-16 pt-24"></section>
        <div className="text-center mb-16"></div>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6"></div>
            <Receipt className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6"></h1>
            AI Expense Tracker
  
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium"></p>
            Smart Financial Management,
  
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"></p>
            Transform your expense management with AI-powered receipt scanning, automated categorization, 
            and intelligent financial insights. Save time, reduce errors, and gain complete control 
            over your business finances.
          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center"></div>
            <$2 />
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
  
            <$2 />
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              Start Free Trial,
  
        {/* Key Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"></div>
          <div className="text-center"></div>
            <div className="text-4xl font-bold text-cyan-400 mb-2">8+
            <div className="text-white font-semibold mb-2">Hours Saved
            <div className="text-gray-300 text-sm">Per month on expense management
            <div className="text-4xl font-bold text-purple-400 mb-2">99%
            <div className="text-white font-semibold mb-2">Accuracy
            <div className="text-gray-300 text-sm">In AI categorization
            <div className="text-4xl font-bold text-green-400 mb-2">25%
            <div className="text-white font-semibold mb-2">Cost Reduction
            <div className="text-gray-300 text-sm">Through better expense control
            <div className="text-4xl font-bold text-orange-400 mb-2">5x
            <div className="text-white font-semibold mb-2">Faster Processing
            <div className="text-gray-300 text-sm">With automated workflows
        {/* Features Section */}
                <section className="mb-16"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center"></h2>
            Powerful Expense Management Features,
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"></div>
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3"></h3>
                {feature.title}
                <p className="text-gray-300 mb-4 leading-relaxed"></p>
                {feature.description}
                <div className="text-cyan-400 font-semibold text-sm"></div>
                {feature.benefit}
            ))}
        {/* Integrations Section */}
            Integrates with Your Tools
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6"></div>
                {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300"></div>
                <div className="text-4xl mb-3"></div>
                {integration.icon}
                <h3 className="text-lg font-bold text-white mb-2"></h3>
                {integration.name}
                <p className="text-gray-300 text-sm"></p>
                {integration.description}
        {/* Pricing Section */}
            Simple, Transparent Pricing
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
                {pricingPlans.map((plan, index) => (
              < key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${$2 />
                plan.popular 
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4"></div>
                    Most Popular
                )}
                <h3 className="text-2xl font-bold text-white mb-2"></h3>
                {plan.name}
                <p className="text-gray-300 mb-6"></p>
                {plan.description}
                <div className="mb-6"></div>
                  <span className="text-4xl font-bold text-white"></span>
                {plan.price}
                <span className="text-gray-300"></span>
                {plan.period}
                <ul className="space-y-3 mb-8"></ul>
                {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                {feature}
                </li>
                </ul>
                < className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${$2 />
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover: from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  Get Started,
  
        {/* Testimonials */}
            What Our Customers Say
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20"></div>
                <div className="flex items-center mb-4"></div>
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"
                <div></div>
                  <div className="font-semibold text-white"></div>
                {testimonial.name}
                <div className="text-cyan-400 text-sm"></div>
                {testimonial.role}
                <div className="text-gray-400 text-sm"></div>
                {testimonial.company}
        {/* CTA Section */}
                <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Ready to Master Your Expenses?
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"></p>
            Join thousands of businesses using AI Expense Tracker to streamline financial 
import { Link } from 'react-router-dom'
const ExpenseTrackerPage: React.FC  = () => {
    const features = [],
  return (
    {// TODO: Add content
  }
}
  ico,
  n: Receipt,
      titl,
  e: 'Smart Receipt Scanning',
      descriptio,
  n: 'AI-powered receipt scanning that automatically extracts expense data, categorizes transactions, and creates detailed reports.',
      benefi,
  t: 'Save 8+ hours per month'
    },
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Get instant insights into your spending patterns with interactive charts, budget tracking, and financial forecasting.',
      benefit: 'Reduce expenses by 25%',
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const PagePage: React.FC  = () => {return (
          <div>Coming Soon
  )
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-16 pt-24"></section>"
        <div className="text-center mb-16"></div>"
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6"></div>"
            <Receipt className="w-10 h-10 text-white" />
          </div>"
          < className="text-4xl,"$2 />
  md: text-6xl font-bold text-white mb-6"></h1>
// AI Expense Tracker,
          </h1>"
          < className="text-xl,"$2 />
  md: text-2xl text-cyan-400 mb-8 font-medium"></p>
// Smart Financial Management,
          </p>"
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"></p>
Transform your expense management with AI-powered receipt scanning, automated categorization,
            and intelligent financial insights. Save time, reduce errors, and gain complete control
            over your business finances.
          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center"></div>
            <$2 />
              href="tel:+13024640950" className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
// >
          "
          <Phone className="w-5 h-5 mr-2" />,
 Cal,
  l: (302) 464-0950
            </a>
            <$2 />
              href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
Start Free Trial,
            </Link>
                {/* Key Benefits */}"
        < className="grid grid-cols-1,"$2 />
  md:grid-cols-4 gap-8 mb-16"></div>"
          <div className="text-center"></div>"
            <div className="text-4xl font-bold text-cyan-400 mb-2">8+</div>"
            <div className="text-white font-semibold mb-2">Hours Saved</div>"
            <div className="text-gray-300 text-sm">Per month on expense management</div>"
            <div className="text-4xl font-bold text-purple-400 mb-2">99%</div>"
            <div className="text-white font-semibold mb-2">Accuracy</div>"
            <div className="text-gray-300 text-sm">In AI categorization</div>"
            <div className="text-4xl font-bold text-green-400 mb-2">25%</div>"
            <div className="text-white font-semibold mb-2">Cost Reduction</div>"
            <div className="text-gray-300 text-sm">Through better expense control</div>"
            <div className="text-4xl font-bold text-orange-400 mb-2">5x</div>"
            <div className="text-white font-semibold mb-2">Faster Processing</div>"
            <div className="text-gray-300 text-sm">With automated workflows
        {/* Features Section */}"
        <section className="mb-16"></section>"
          < className="text-3xl,"$2 />
  md: text-4xl font-bold text-white mb-12 text-center"></h2>
// Powerful Expense Management Features,
          </h2>"
          < className="grid grid-cols-1,$2 />
  md:grid-cols-2,"
  lg:grid-cols-3 gap-8">
                {features.map((feature, index) => ()}"
          < key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20,"$2 />
  hover:border-cyan-400/40 transition-all duration-300"></div>"
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" /></feature>"
                <h3 className="text-xl font-bold text-white mb-3"></h3>
                {feature.title}
                </h3>"
                <p className="text-gray-300 mb-4 leading-relaxed"></p>
                {feature.description}
                </p>"
                <div className="text-cyan-400 font-semibold text-sm"></div>
                {feature.benefit}
            ))}
        {/* Integrations Section */};
Integrates with Your Tools;"
          < className="grid grid-cols-2,"$2 />
  md:grid-cols-4 gap-6">
                {integrations.map((integration, index) => ()}"
          < key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center,"$2 />
  hover:border-cyan-400/40 transition-all duration-300"></div>"
                <div className="text-4xl mb-3"></div>
                {integration.icon}
                </div>"
                <h3 className="text-lg font-bold text-white mb-2"></h3>
                {integration.name}
                </h3>"
                <p className="text-gray-300 text-sm"></p>
                {integration.description}
{/* Pricing Section */}
            Simple, Transparent Pricing;"
          < className="grid grid-cols-1,"$2 />
  md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => ()}
                < key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${}$2 />
  // TOD,
  O: Add content,
}
//                 plan.popular
//                   ? 'border-cyan-400 scale-105'
                  : 'border-slate-700,
  hover:border-cyan-500/50'`
              }`}>
                {plan.popular && ()}"
          <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4"></div>
Most Popular
                )}"
                <h3 className="text-2xl font-bold text-white mb-2"></h3>
                {plan.name}
                </h3>"
                <p className="text-gray-300 mb-6"></p>
                {plan.description}
                </p>"
                <div className="mb-6"></div>"
                  <span className="text-4xl font-bold text-white"></span>
                {plan.price}
                </span>"
                  <span className="text-gray-300"></span>
                {plan.period}
                </span>"
                <ul className="space-y-3 mb-8"></ul>
                {plan.features.map((feature, featureIndex) => ()}"
          <li key={featureIndex} className="flex items-center text-gray-300"></li>"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                {feature}
                </ul>`
                < className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${}$2 />
? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white,
  hover:from-cyan-500,
  hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400,
  hover:bg-cyan-400,
  hover: text-white'
                  Get Started,
                </button>
                </button>
                {/* Testimonials */}
            What Our Customers Say;"
          < className="grid grid-cols-1,"$2 />
  md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => ()}"
          <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20"></div>"
                <div className="flex items-center mb-4"></div>
                {[...Array(testimonial.rating)].map((_, i) => ()}"
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" /></Star>"
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"
                <div></div>"
                  <div className="font-semibold text-white"></div>
                {testimonial.name}
                </div>"
                  <div className="text-cyan-400 text-sm"></div>
                {testimonial.role}
                </div>"
                  <div className="text-gray-400 text-sm"></div>
                {testimonial.company}
{/* CTA Section */}"
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20"></section>"
          < className="text-3xl,"$2 />
  md: text-4xl font-bold text-white mb-6"></h2>
            Ready to Master Your Expenses?"
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"></p>
            Join thousands of businesses using AI Expense Tracker to streamline financial
            management and gain better control over their spending.
  ),
}
export default ExpenseTrackerPage</div>
                </div>
  </div>
                </div>
  </div>
                </button>
  </div>
                </div>
  </div>
                </div>
  </div>
                </div>
  </div>
                </div>
  </h2>
                </div>
  </div>
                </Link>
  </a>
                </div>
  </p>
                </p>
  </div>
                </section>
  </div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></span>
                </span></p>
                </p></p>
                </p></p>
                </h3></h3>
                </h3></section>
                </section>