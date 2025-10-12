import React from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';
import { Arrow Right, Receipt, Bot} from 'lucide-react';
import { Arrow Right, Dollar Sign, Bar Chart3, Receipt, Check Circle, Clock, Target, Trending Up, Shield, Zap, Bot, Check Square } from 'lucide-react';

export default function A IExpense Tracker Page() {
  const features = [
    {
      icon: <R eceiptclass Name="w-6h-6t e xt-c y an-400" />,
      title: 'Smart Receipt Scanning',
      description: 'A I-powered O C R technology automatically extracts data from receipts and invoices'
    },
    {
      icon: <B ar Chart3 class Name="w-6h-6t e xt-e m erald-400" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive spending insights with predictive analytics and budget forecasting'
    },
    {
      icon: <B otclass Name="w-6h-6t e xt-p u rple-400" />,
      title: 'A I Categorization',
      description: 'Automatically categorizes expenses using machine learning and learns from your patterns'
    },
    {
      icon: <S hieldclass Name="w-6h-6t e xt-o r ange-400" />,
      title: 'Bank-level Security',
      description: '256-bit encryption and secure cloud storage for all your financial data'
    },
    {
      icon: <T argetclass Name="w-6h-6t e xt-p i nk-400" />,
      title: 'Smart Budgeting',
      description: 'A I-powered budget recommendations based on your spending patterns and goals'
    },
    {
      icon: <Z apclass Name="w-6h-6t e xt-r e d-400" />,
      title: 'Automated Workflows',
      description: 'Set up rules for automatic expense approval, reimbursement, and reporting'
    }
  ]

  const pricing Plans = [
    {
      name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Unlimited receipts',
        'A I categorization',
        'Basic analytics',
        'Mobile app access',
        'Cloud backup',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$29',
      period: '/month',
      description: 'Ideal for small businesses and teams',
      features: [
        'Everything in Personal',
        'Team collaboration',
        'Advanced analytics',
        'Custom categories',
        'A P I access',
        'Priority support',
        'Expense policies',
        'Multi-currency support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Business',
        'Unlimited users',
        'Custom integrations',
        'Dedicated support',
        'Advanced reporting',
        'Compliance tools',
        'White-label option',
        'Custom workflows'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Freelance Designer',
      content: 'Saves me hours every week. The A I categorization is incredibly accurate and the receipt scanning is flawless.',
      rating: 5,
      avatar: 'D K'
    },
    {
      name: 'Lisa Martinez',
      company: 'Small Business Owner',
      content: 'Finally found an expense tracker that actually understands my business needs. The analytics are game-changing.',
      rating: 5,
      avatar: 'L M'
    },
    {
      name: 'James Wilson',
      company: 'Finance Manager',
      content: 'Our team productivity increased by 40% since implementing this. The automated workflows are brilliant.',
      rating: 5,
      avatar: 'J W'
    }
  ]

  const benefits = [
    {
      icon: <C lockclass Name="w-8h-8t e xt-c y an-400" />,
      title: 'Save 5+ Hours Weekly',
      description: 'Automated data entry and categorization eliminates manual work'
    },
    {
      icon: <T rending Upclass Name="w-8h-8t e xt-e m erald-400" />,
      title: 'Reduce Costs by 15%',
      description: 'A I insights help identify spending patterns and optimization opportunities'
    },
    {
      icon: <S hieldclass Name="w-8h-8t e xt-p u rple-400" />,
      title: '100% Accurate',
      description: 'A I-powered validation ensures data accuracy and compliance'
    },
    {
      icon: <Z apclass Name="w-8h-8t e xt-o r ange-400" />,
      title: 'Real-time Sync',
      description: 'Instant updates across all devices and team members'
    }
  ]

  return (

    <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </d iv>
      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Expense Tracker - Zion Tech Group | Smart Financial Management</t itle>
        <m eta name="description" content="Revolutionary A I-powered expense tracker with smart receipt scanning, automated categorization, and real-time analytics. Save 5+ hours weekly. Starting at $9/month." / / />
        <m eta name="keywords" content="A I expense tracker, receipt scanning, expense management, financial analytics, budget tracking, automated categorization" / / />
        <m eta name="robots" content="index, follow" / / />
        <l inkrel="canonical" href="https://ziontechgroup.com/micro-saas/ai-expense-tracker" />
      </H elmet>

      {/* Hero Section */}

      <s ection class Name="r e l a tive py-20px-4overflow-hidden" />
        <d iv class Name="a b s o luteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
        <d iv class Name="a b s o luteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)]" / />
        <d iv class Name="r e l a tive max-w-7 xlmx-autotext-center">
        </d iv>
          <d iv class Name="i n l i ne-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </d iv>
            <D ollar Signclass Name="w-4h-4" / />
            <s pan>A I-Powered Financial Management</s pan>
          </d iv>
          
          <h1 c lass Name="t e x t-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
            A I Expense

            <b r / />
            <s pan class Name="b g-g r a dient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Tracker
            </s pan>
          </h1>
          
          <p c lass Name="t e x t-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
            Transform your financial management with A I-powered expense tracking, smart receipt scanning, 
            and automated categorization. Save time and gain insights like never before.
          </p>

          <d iv class Name="f l ex f l ex-col sm:flex-row gap-6justify-centermb-16">
        </d iv>
            <L ink to="/contact" class Name="g r o u p bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <s pan>Start Free Trial</s pan>
              <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
            </L ink>
            <L ink to="#pricing" class Name="g r o u p border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <s pan>View Pricing</s pan>
              <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
            </L ink>
          </d iv>

          {/* Key Stats */}

          <d iv class Name="g r id g r id-cols-2 md:grid-cols-4 gap-8 max-w-4xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-center" />
              <d iv class Name="t e xt-3 xl f o nt-boldtext-cyan-400mb-2">5+</d iv>
              <d iv class Name="t e xt-g r ay-300text-sm">Hours Saved Weekly</d iv>
            <d iv class Name="t e x t-center" />
              <d iv class Name="t e xt-3 xl f o nt-boldtext-purple-400mb-2">15%</d iv>
              <d iv class Name="t e xt-g r ay-300text-sm">Average Cost Reduction</d iv>
            <d iv class Name="t e x t-center" />
              <d iv class Name="t e xt-3 xl f o nt-boldtext-pink-400mb-2">99.9%</d iv>
              <d iv class Name="t e xt-g r ay-300text-sm">Accuracy Rate</d iv>
            <d iv class Name="t e x t-center" />
              <d iv class Name="t e xt-3 xl f o nt-boldtext-emerald-400mb-2">25 K+</d iv>
              <d iv class Name="t e xt-g r ay-300text-sm">Active Users</d iv>
          </d iv>
      </s ection>

      {/* Benefits Section */}

      <s ection class Name="p y-20p x-4r e lative" />
        <d iv class Name="a b s o lute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" / />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Why Choose Our <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">A I Expense Tracker?</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto">
              Experience the future of financial management with cutting-edge A I technology that works for you.

            </p>
          </d iv>
          
          <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
            {benefits.map((benefit, index) => (

              <d ivkey="{index}" class Name="t e x t-centergroup" />
                <d iv class Name="f l ex i t ems-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 mx-auto group-hover:scale-110transition-transformduration-300">{benefit.icon}
                </d iv>
                <h3 c lass Name="t e xt-xl f o nt-bold text-white mb-4group-hover:text-cyan-400transition-colors">{benefit.title}
                </h3>
                <p c lass Name="t e xt-g r ay-300" />
                  {benefit.description}

                </p>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Features Section */}

      <s ection class Name="p y-20p x-4r e lative" />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Powerful Features for <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Smart Finance</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto">
              Everything you need to manage your finances efficiently with A I-powered intelligence and automation.

            </p>
          </d iv>
          
          <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
            {features.map((feature, index) => (

              <d ivkey="{index}" class Name="g r o u p bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <d iv class Name="f l ex i t ems-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </d iv>
                <h3 c lass Name="t e xt-2 xl f o nt-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title}
                </h3>
                <p c lass Name="t e xt-g r ay-300leading-relaxed" />
                  {feature.description}

                </p>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Pricing Section */}

      <s ectionid="pricing" class Name="p y-20 p x-4 bg-g r adient-to-br from-slate-800/50to-purple-900/50relative" />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Simple, Transparent <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto">
              Choose the plan that fits your needs. All plans include our core A I features and secure cloud storage.

            </p>
          </d iv>
          
          <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
            {pricing Plans.map((plan, index) => (
              <d ivkey="{index}" class Name="{`r e l a tive" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2 xl ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: border-cyan-400/30'
              }`} />
                {plan.popular && (

                  <d iv class Name="a b s o lute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                    <d iv class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                    </d iv>
                )}

                <d iv class Name="t e x t-centermb-8">
        </d iv>
                  <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                  <p c lass Name="t e xt-g r ay-300text-smmb-4">{plan.description}</p>
                  <d iv class Name="f l e x items-baselinejustify-center" />
                    <s pan class Name="t e xt-5 x l font-boldtext-cyan-400">{plan.price}</s pan>
                    <s pan class Name="t e xt-g r ay-300ml-2">{plan.period}</s pan>
                  </d iv>
                
                <u lclass Name="s p a c e-y-4mb-8" />
                  {plan.features.map((feature, feature Index) => (

                    <l ikey="{feature Index}" class Name="f l e x items-centerspace-x-3" />
                      <C heck Circleclass Name="w-5 h-5t e xt-g r een-400flex-shrink-0" / />
                      <s pan class Name="t e xt-g r ay-300">{feature}</s pan>
                    </l i>
                  ))}
                </u l>
                
                <L ink 
                  to="/contact"
                  class Name="{`b l o c k" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />Get Started

                </L ink>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Testimonials Section */}

      <s ection class Name="p y-20p x-4r e lative" />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Trusted by <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">25,000+</s pan> Users
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto">
              See what our customers are saying about their success with our A I expense tracker.

            </p>
          </d iv>
          
          <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
            {testimonials.map((testimonial, index) => (

              <d ivkey="{index}" class Name="b g-w h i te/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <d iv class Name="f l e x items-centermb-4">
        </d iv>
                  <d iv class Name="w-12 h-12 b g-g r a dient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar}
                  </d iv>
                  <d iv />
                    <d iv class Name="f o nt-s e miboldtext-white">{testimonial.name}</d iv>
                    <d iv class Name="t e xt-g r ay-400text-sm">{testimonial.company}</d iv>
                </d iv>
                <d iv class Name="f l e x mb-4">
        </d iv>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <C heck Squarekey="{i}" class Name="w-5 h-5t e xt-y e llow-400fill-current" />
                  ))}

                </d iv>
                <p c lass Name="t e xt-g r ay-300italic">"{testimonial.content}"</p>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* C T A Section */}

      <s ection class Name="p y-20p x-4r e lative" />
        <d iv class Name="a b s o lute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-center" />
            <d iv class Name="b g-g r a dient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
        </d iv>
              <d iv class Name="r e l a tivez-10">
        </d iv>
                <h2 c lass Name="t e xt-4 xl sm:t e xt-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" />
                  Ready to Transform Your <s pan class Name="b g-g r a dient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Financial Management?</s pan>
                </h2>
                
                <p c lass Name="t e xt-xl sm:t e xt-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
                  Join thousands of users already saving time and money with our A I-powered expense tracker. 
                  Start your free trial today and experience the future of financial management.
                </p>

                <d iv class Name="f l ex f l ex-col sm:flex-row gap-6justify-centermb-8">
        </d iv>
                  <L ink to="/contact" class Name="g r o u p bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <s pan>Start Free Trial</s pan>
                    <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
                  </L ink>
                  <L ink to="#pricing" class Name="g r o u p border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <s pan>View All Plans</s pan>
                    <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
                  </L ink>
                </d iv>

                <d iv class Name="t e xt-w h ite/80text-sm">
        </d iv>
                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </d iv>
            </d iv>
        </d iv>
      </s ection>
    </d iv>
  );
}
