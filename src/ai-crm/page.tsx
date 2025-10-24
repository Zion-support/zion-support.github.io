    "use client",
import { Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star } from 'lucide-react';
import { Send, Users, Mail, Target, BarChart, Brain, TrendingUp } from 'lucide-react'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Send, Users, Mail, Target, BarChart, Brain, TrendingUp } from 'lucide-react'
const Page: React.FC = () => {const features = [
    {
      icon: Brain,
      title: "AI-Powered Lead Scoring",
      description: "Automatically score and prioritize leads using machine learning algorithms that analyze behavior patterns.",
      benefits: ['Behavioral analysis', 'Predictive scoring', 'Lead prioritization', 'Conversion optimization']
  }
    {
      icon: Users,
      title: "Intelligent Customer Segmentation",
      description: "AI automatically segments customers based on behavior, preferences, and value potential.",
      benefits: ['Dynamic segmentation', 'Behavioral insights', 'Personalization', 'Targeted campaigns']
  }
    {
      icon: Target,
      title: "Predictive Sales Forecasting",
      description: "Accurate sales predictions using AI that analyzes historical data and market trends.",
      benefits: ['Revenue forecasting', 'Pipeline analysis', 'Risk assessment', 'Goal tracking']
  }
    {
      icon: TrendingUp,
      title: "Automated Follow-ups",
      description: "AI schedules and personalizes follow-up communications based on customer engagement patterns.",
      benefits: ['Smart scheduling', 'Personalized content', 'Engagement tracking', 'Response optimization']
  }
  ]
  constcapabilities= []
    {
      title: "Smart Contact Management",
      description: "AI automatically enriches contact data and maintains up-to-date information.",
      icon: Users,
      stats: '9 5% data accuracy'
  }
    {
      title: "Intelligent Email Automation",
      description: "Send personalized emails at the perfect time with AI-optimized content.",
      icon: Mail,
      stats: '4 0% higher open rates'
  }
    {
      title: "Advanced Analytics",
      description: "Comprehensive insights into customer behavior and sales performance.",
      icon: BarChart,
      stats: 'Real-time insights'
  }
    {
      title: "Mobile-First Design",
      description: "Access your CRM anywhere with our responsive mobile application.",
      icon: Phone,
      stats: '100% mobile optimized'
  }
  ]
  constpricingPlans= []
    {
      name: "Starter",
      price: "$4 9",
      period: "/$1/month",
      description: 'Perfect for small teams getting started'
      features: []
    "Up to 1,000contacts",
    "Basic AI lead scoring",
    "Email automation",
    "Mobile app access",
    "Standard support",
    "Basic analytics",
  ]
      popular: false
  }
    {
      name: "Professional",
      price: "$9 9",
      period: "/$1/month",
      description: 'Ideal for growing businesses'
      features: []
    "Up to 1 0,000contacts",
    "Advanced AI features",
    "Custom workflows",
    "Advanced analytics",
    "Priority support",
    "API access",
    "Custom fields",
    "Team collaboration tools",
  ]
      popular: true
  }
    {
      name: "Enterprise",
      price: "$19 9",
      period: "/$1/month",
      description: 'Comprehensive solution for large organizations'
      features: []
    "Unlimited contacts",
    "Full AI suite",
    "Custom integrations",
    "Advanced reporting",
    "2 4/7 dedicated support",
    "White-label options",
    "Custom development",
    "Dedicated account manager",
  ]
      popular: false
  }
  ]
  consttestimonials= []
    {name: "Sarah Johnson",
      company: 'TechStart Inc.'
      role: "Sales Director",
      content: 'AI CRM increased our lead conversion by65% and saved us 20hours per week on manual tasks.'
      rating:5}
    {name: "Michael Chen",
      company: 'GrowthCorp'
      role: "VP of Sales",
      content: 'The predictive analytics helped us identify high-value prospects we would have missed otherwise.'
      rating:5}
    {name: "Emily Rodriguez",
      company: 'ScaleUp Solutions'
      role: "Marketing Manager",
      content: 'Automated follow-ups and personalized content have dramatically improved our customer engagement.'
      rating: 5
  }
  ]
const Page = () => {
  return (
    <div className="min-h-s creenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-20pb-16 p x-4">
        <div className="max-w-7x lmx-auto">
          <div className="tex t-centermb-16">
            <h1 className="tex t-5xlmd: text-6xl font-bold text-white mb-6 neon-text">
        </div>
              AI-Powered CRM Platform
            </h1>
            <p className="tex t-xltext-gray-300 mb-8 max-w-3xl mx-auto">
        </div>
              Transform your customer relationships with intelligent automation, predictive analytics, and personalized experiences that drive growth.
            </p>
            <div className="fle xflex-col sm:flex-row gap-4 justify-center">
              <button className="cyb er-buttonpx-8 py-4 text-lg">
        </div>
                Start Free Trial
              </button>
              <button className="cyb er-button-outlinepx-8 py-4 text-lg">
        </div>
                Watch Demo
              </button>
            </div>
          </div>
          {/* Stats */}
          <div className="gri dgrid-cols-2 md: grid-cols-4 gap-8 mb-16">
            <div className="tex t-center">
              <div className="tex t-4xlfont-bold text-cyan-400 mb-2">65%</div>
              <div className="tex t-gray-300">Higher Conversion Rate</div>
            </div>
            <div className="tex t-center">
              <div className="tex t-4xlfont-bold text-cyan-400 mb-2">40%</div>
              <div className="tex t-gray-300">Increase in Email Opens</div>
            </div>
            <div className="tex t-center">
              <div className="tex t-4xlfont-bold text-cyan-400 mb-2">95%</div>
              <div className="tex t-gray-300">Data Accuracy</div>
            </div>
            <div className="tex t-center">
              <div className="tex t-4xlfont-bold text-cyan-400 mb-2">20h</div>
              <div className="tex t-gray-300">Time Saved Per Week</div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16px-4">
        <div className="max-w-7x lmx-auto">
          <div className="tex t-centermb-16">
            <h2 className="tex t-4xlfont-bold text-white mb-4">Intelligent CRM Features</h2>
            <p className="tex t-xltext-gray-300">Everything you need to manage and grow your customer relationships</p>
          </div>
          <div className="gri dgrid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => ()
              <div key={index} className="cyb er-cardp-6">
                <div className="w-12h-12bg-g r adient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6h-6te x t-white" />
                </div>
                <h3 className="tex t-xlfont-semibold text-white mb-3">{feature.title}</h3>
                <p className="tex t-gray-300mb-4">{feature.description}</p>
                <ul className="spa ce-y-2">
        </div>
                  {feature.benefits.map((benefit, idx) => ()
                    <li key={idx} className="fle xitems-center text-sm text-gray-400">
        </div>
                      <CheckCircle className="w-4h-4te x t-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Capabilities Section */}
      <section className="py-16px-4 b g-slate-800/50">
        <div className="max-w-7x lmx-auto">
          <div className="tex t-centermb-16">
            <h2 className="tex t-4xlfont-bold text-white mb-4">Powerful Capabilities</h2>
            <p className="tex t-xltext-gray-300">Advanced features that set us apart from traditional CRM systems</p>
          </div>
          <div className="gri dgrid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => ()
              <div key={index} className="cyb er-cardp-6">
                <div className="w-12h-12bg-g r adient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6h-6te x t-white" />
                </div>
                <h3 className="tex t-xlfont-semibold text-white mb-3">{capability.title}</h3>
                <p className="tex t-gray-300mb-4">{capability.description}</p>
                <div className="tex t-cyan-400font-semibold text-lg">{capability.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16px-4">
        <div className="max-w-7x lmx-auto">
          <div className="tex t-centermb-16">
            <h2 className="tex t-4xlfont-bold text-white mb-4">What Our Customers Say</h2>
            <p className="tex t-xltext-gray-300">Real results from real businesses</p>
          </div>
          <div className="gri dgrid-cols-1 md: grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => ()
              <div key={index} className="cyb er-cardp-6">
                <div className="fle xitems-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => ()
                    <Star key={i} className="w-5h-5te x t-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="tex t-gray-300mb-4 italic">"{testimonial.content}"</p>
                  <div className="fon t-semiboldtext-white">{testimonial.name}</div>
                  <div className="tex t-smtext-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-16px-4 b g-slate-800/50">
        <div className="max-w-7x lmx-auto">
          <div className="tex t-centermb-16">
            <h2 className="tex t-4xlfont-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="tex t-xltext-gray-300">Choose the plan that fits your business needs</p>
          </div>
          <div className="gri dgrid-cols-1 md: grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => ()
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}></div>
                {plan.popular && ()
                  <div className="abs olute-top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gr adient-to-rfrom-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
        </div>
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="tex t-centermb-6">
                  <h3 className="tex t-2xlfont-bold text-white mb-2">{plan.name}</h3>
                  <div className="tex t-4xlfont-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="tex t-lgtext-gray-400">{plan.period}</span>
                  </div>
                  <p className="tex t-gray-300">{plan.description}</p>
                </div>
                <ul className="spa ce-y-3mb-8">
        </div>
                  {plan.features.map((feature, idx) => ()
                    <li key={idx} className="fle xitems-center text-gray-300">
        </div>
                      <CheckCircle className="w-5h-5te x t-cyan-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${}>
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover: from-cyan-600 hover:to-purple-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16px-4 b g-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4x lmx-auto text-center">
          <h2 className="tex t-4xlfont-bold text-white mb-6">Ready to Transform Your CRM?</h2>
          <p className="tex t-xltext-gray-300 mb-8">
        </div>
            Join thousands of businesses using AI-powered CRM to boost sales, improve customer relationships, and drive growth.
          </p>
          <div className="fle xflex-col sm:flex-row gap-4 justify-center">
            <button className="cyb er-buttonpx-8 py-4 text-lg">
        </div>
              Start Free Trial
            </button>
            <button className="cyb er-button-outlinepx-8 py-4 text-lg">
        </div>
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  )
{};
;
  }
export default Page;