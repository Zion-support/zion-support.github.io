'use client'
import { Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import React from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star } from 'lucide-react';

constAICRMPage: React.FC = () =>{constfeatures= [
    {
      ico,
      n: Brain,
      title: 'AI-Powered Lead Scoring'
      descriptio,
      n: 'Automatically score and prioritize leads using machine learning algorithms that analyze behavior patterns.'
      benefit,
      s: ['Behavioral analysis', 'Predictive scoring', 'Lead prioritization', 'Conversion optimization']
   }
    {
      icon: Users,
      title: 'Intelligent Customer Segmentation'
      descriptio,
      n: 'AI automatically segments customers based on behavior, preferences, and value potential.'
      benefits: ['Dynamic segmentation', 'Behavioral insights', 'Personalization', 'Targeted campaigns']
   }
    {
      icon: Target,
      title: 'Predictive Sales Forecasting'
      descriptio,
      n: 'Accurate sales predictions using AI that analyzes historical data and market trends.'
      benefit,
      s: ['Revenue forecasting', 'Pipeline analysis', 'Risk assessment', 'Goal tracking']
   }
    {
      icon: TrendingUp,
      title: 'Automated Follow-ups'
      descriptio,
      n: 'AI schedules and personalizes follow-up communications based on customer engagement patterns.'
      benefit,
      s: ['Smart scheduling', 'Personalized content', 'Engagement tracking', 'Response optimization']
    }
  ]

  const capabilities = []
    {title: 'Smart Contact Management'
      descriptio,
      n: 'AI automatically enriches contact data and maintains up-to-date information.'
      ico,
      n: Users,
      stats: '9 5% data accuracy'
   }
    {title: 'Intelligent Email Automation'
      descriptio,
      n: 'Send personalized emails at the perfect time with AI-optimized content.'
      ico,
      n: Mail,
      stats: '4 0% higher open rates'
   }
    {title: 'Advanced Analytics'
      descriptio,
      n: 'Comprehensive insights into customer behavior and sales performance.'
      ico,
      n: BarChart,
      stats: 'Real-time insights'
   }
    {title: 'Mobile-First Design'
      descriptio,
      n: 'Access your CRM anywhere with our responsive mobile application.'
      ico,
      n: Phone,
      stats: '100% mobile optimized'
    }
  ]

  const pricingPlans = []
    {name: 'Starter'
      price: '$4 9'
      period: '/$1/month'
      descriptio,
      n: 'Perfect for small teams getting started'
      feature,
      s: []
        'Up to 1,000contacts'
        'Basic AI lead scoring'
        'Email automation'
        'Mobile app access'
        'Standard support'
        'Basic analytics'
      ]
      popular: false
   }
    {name: 'Professional'
      price: '$9 9'
      period: '/$1/month'
      descriptio,
      n: 'Ideal for growing businesses'
      feature,
      s: []
        'Up to 1 0,000contacts'
        'Advanced AI features'
        'Custom workflows'
        'Advanced analytics'
        'Priority support'
        'API access'
        'Custom fields'
        'Team collaboration tools'
      ]
      popular: true
   }
    {name: 'Enterprise'
      price: '$19 9'
      period: '/$1/month'
      description: 'Comprehensive solution for large organizations'
      feature,
      s: []
        'Unlimited contacts'
        'Full AI suite'
        'Custom integrations'
        'Advanced reporting'
        '2 4/7 dedicated support'
        'White-label options'
        'Custom development'
        'Dedicated account manager'
      ]
      popula,
      r: false
    }
  ]

  const testimonials = []
    {name: 'Sarah Johnson'
      company: 'TechStart Inc.'
      role: 'Sales Director'
      conten,
      t: 'AI CRM increased our lead conversion by65% and saved us 20hours per week on manual tasks.'
      ratin,
      g:5}
    {name: 'Michael Chen'
      company: 'GrowthCorp'
      role: 'VP of Sales'
      conten,
      t: 'The predictive analytics helped us identify high-value prospects we would have missed otherwise.'
      ratin,
      g:5}
    {name: 'Emily Rodriguez'
      company: 'ScaleUp Solutions'
      role: 'Marketing Manager'
      conten,
      t: 'Automated follow-ups and personalized content have dramatically improved our customer engagement.'
      ratin,
      g: 5
    }
  ]

const Page = () => {};
  return (</div>
      <Navigation />
      {
    /* Hero Section  */
    return (</section>
        <div className="max-w-7x lmx-auto"></div>
          <div className="tex t-centermb-16"></div>
            <h1 className="tex t-5xlmd: text-6xl font-bold text-white mb-6 neon-text">
        </div>
              AI-Powered CRM Platform
            </h1>
            <p className="tex t-xltext-gray-300 mb-8 max-w-3xl mx-auto">
        </div>
              Transform your customer relationships with intelligent automation, predictive analytics, and personalized experiences that drive growth.
            </p>
            <div className="fle xflex-col sm:flex-row gap-4 justify-center"></div>
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
          {
    /* Stats  */
    return (</div>
            <div className="tex t-center"></div>
              <div className="tex t-4xlfont-bold text-cyan-400 mb-2">65%</div>
              <div className="tex t-gray-300">Higher Conversion Rate</div>
            </div>
            <div className="tex t-center"></div>
              <div className="tex t-4xlfont-bold text-cyan-400 mb-2">40%</div>
              <div className="tex t-gray-300">Increase in Email Opens</div>
            </div>
            <div className="tex t-center"></div>
              <div className="tex t-4xlfont-bold text-cyan-400 mb-2">95%</div>
              <div className="tex t-gray-300">Data Accuracy</div>
            </div>
            <div className="tex t-center"></div>
              <div className="tex t-4xlfont-bold text-cyan-400 mb-2">20h</div>
              <div className="tex t-gray-300">Time Saved Per Week</div>
            </div>
          </div>
        </div>
      </section>
      {
    /* Features Section  */
    return (</section>
        <div className="max-w-7x lmx-auto"></div>
          <div className="tex t-centermb-16"></div>
            <h2 className="tex t-4xlfont-bold text-white mb-4">Intelligent CRM Features</h2>
            <p className="tex t-xltext-gray-300">Everything you need to manage and grow your customer relationships</p>
          </div>
          <div className="gri dgrid-cols-1 md: grid-cols-2 l,
      g:grid-cols-4 gap-8"></div>
            {features.map((feature, index) => ()
              <div key={index} className="cyb er-cardp-6"></div>
                <div className="w-12h-12bg-g r adient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6h-6te x t-white" />
                </div>
                <h3 className="tex t-xlfont-semibold text-white mb-3">{feature.title};

  return (
                <p className="tex t-gray-300mb-4">{feature.description};

  return (
                <ul className="spa ce-y-2">
        </div>
                  {feature.benefits.map((benefit, idx) => ()
                    <li key={idx} className="fle xitems-center text-sm text-gray-400">
        </div>
                      <CheckCircle className="w-4h-4te x t-cyan-400 mr-2" />
                      {benefit};

  return (
                  ))};

  return (
              </div>
            ))};

  return (
        </div>
      </section>
      {
    /* Capabilities Section  */
    return (</section>
        <div className="max-w-7x lmx-auto"></div>
          <div className="tex t-centermb-16"></div>
            <h2 className="tex t-4xlfont-bold text-white mb-4">Powerful Capabilities</h2>
            <p className="tex t-xltext-gray-300">Advanced features that set us apart from traditional CRM systems</p>
          </div>
          <div className="gri dgrid-cols-1 md: grid-cols-2 l,
      g:grid-cols-4 gap-8"></div>
            {capabilities.map((capability, index) => ()
              <div key={index} className="cyb er-cardp-6"></div>
                <div className="w-12h-12bg-g r adient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <capability.icon className="w-6h-6te x t-white" />
                </div>
                <h3 className="tex t-xlfont-semibold text-white mb-3">{capability.title};

  return (
                <p className="tex t-gray-300mb-4">{capability.description};

  return (
                <div className="tex t-cyan-400font-semibold text-lg">{capability.stats};

  return (
              </div>
            ))};

  return (
        </div>
      </section>
      {
    /* Testimonials Section  */
    return (</section>
        <div className="max-w-7x lmx-auto"></div>
          <div className="tex t-centermb-16"></div>
            <h2 className="tex t-4xlfont-bold text-white mb-4">What Our Customers Say</h2>
            <p className="tex t-xltext-gray-300">Real results from real businesses</p>
          </div>
          <div className="gri dgrid-cols-1 md: grid-cols-3 gap-8"></div>
            {testimonials.map((testimonial, index) => ()
              <div key={index} className="cyb er-cardp-6"></div>
                <div className="fle xitems-center mb-4"></div>
                  {[...Array(testimonial.rating)].map((_, i) => ()
                    <Star key={i} className="w-5h-5te x t-yellow-400 fill-current" />
                  ))};

  return (
                <p className="tex t-gray-300mb-4 italic">"{testimonial.content}"</p>
                
                  <div className="fon t-semiboldtext-white">{testimonial.name};

  return (
                  <div className="tex t-smtext-gray-400">{testimonial.role}, {testimonial.company};

  return (
                </div>
              </div>
            ))};

  return (
        </div>
      </section>
      {
    /* Pricing Section  */
    return (</section>
        <div className="max-w-7x lmx-auto"></div>
          <div className="tex t-centermb-16"></div>
            <h2 className="tex t-4xlfont-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="tex t-xltext-gray-300">Choose the plan that fits your business needs</p>
          </div>
          <div className="gri dgrid-cols-1 md: grid-cols-3 gap-8"></div>
            {pricingPlans.map((plan, index) => ()
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}></div>
                {plan.popular && ()
                  <div className="abs olute-top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gr adient-to-rfrom-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
        </div>
                      Most Popular
                    </span>
                  </div>
                )};

  return (</div>
                  <h3 className="tex t-2xlfont-bold text-white mb-2">{plan.name};

  return (
                  <div className="tex t-4xlfont-bold text-cyan-400 mb-2"></div>
                    {plan.price};

  return ({plan.period};

  return (
                  </div>
                  <p className="tex t-gray-300">{plan.description};

  return (
                </div>
                <ul className="spa ce-y-3mb-8">
        </div>
                  {plan.features.map((feature, idx) => ()
                    <li key={idx} className="fle xitems-center text-gray-300">
        </div>
                      <CheckCircle className="w-5h-5te x t-cyan-400 mr-3" />
                      {feature};

  return (
                  ))};

  return (
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${}>plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover: from-cyan-600 hove,
      r:to-purple-700' 
                    : 'bg-slate-700 text-white hove,
      r:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))};

  return (
        </div>
      </section>
      {
    /* CTA Section  */
    return (</section>
        <div className="max-w-4x lmx-auto text-center"></div>
          <h2 className="tex t-4xlfont-bold text-white mb-6">Ready to Transform Your CRM?</h2>
          <p className="tex t-xltext-gray-300 mb-8">
        </div>
            Join thousands of businesses using AI-powered CRM to boost sales, improve customer relationships, and drive growth.
          </p>
          <div className="fle xflex-col sm:flex-row gap-4 justify-center"></div>
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
export default Page;
}}}}}}}