import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Mail, Send, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Clock, Brain, Shield, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
export default AIEmailAutomationPage;
const AIEmailAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-5h-5ml-2" />,
      title: 'AI Email Generation',
      description: 'Generate personalized, high-converting emails using AI that understands your audience and brand voice.',
      benefits: ['Personalized content', 'A/B testing', 'Brand voice training', 'Multi-language support']
    },
    {
      icon: <Send className="w-5h-5ml-2" />,
      title: 'Smart Automation',
      description: 'Create complex email workflows with AI-powered triggers, segmentation, and behavioral targeting.',
      benefits: ['Behavioral triggers', 'Smart segmentation', 'Dynamic content', 'Cross-channel sync']
    },
    {
      icon: <TrendingUp className="w-5h-5ml-2" />,
      title: 'Performance Analytics',
      description: 'Advanced analytics with AI insights to optimize email performance and improve ROI.',
      benefits: ['Open rate optimization', 'Click-through analysis', 'Revenue tracking', 'Predictive insights']
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Automated Sequences',
      description: 'AI-powered email sequences that adapt based on recipient behavior and engagement patterns.',
      benefits: ['Adaptive sequences', 'Behavioral triggers', 'Personalization', 'Optimal timing']
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Lead Scoring',
      description: 'AI automatically scores leads based on email engagement and behavior to prioritize follow-ups.',
      benefits: ['Lead scoring', 'Engagement tracking', 'Priority alerts', 'CRM integration']
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Deliverability Optimization',
      description: 'AI ensures maximum deliverability with reputation monitoring and content optimization.',
      benefits: ['Reputation monitoring', 'Content optimization', 'Spam prevention', 'Compliance checks']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$59',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5,000 contacts',
        '10,000 emails/month',
        'Basic AI features',
        'Email templates',
        'Email support'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25,000 contacts',
        '50,000 emails/month',
        'Advanced AI features',
        'A/B testing',
        'Priority support',
        'API access'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with high volume needs',
      features: [
        'Unlimited contacts',
        'Unlimited emails',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'White-label options'
      ],
      popular: false;
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Lee',
      company: 'E-commerce Store',
      content: 'AI Email Automation increased our email revenue by 300%. The AI-generated content is incredibly effective.',
      rating: 5,
      avatar: 'JL'
    },
    {
      name: 'Mark Thompson',
      company: 'SaaS Company',
      content: 'The lead scoring feature helped us identify high-value prospects and increased our conversion rate by 150%.',
      rating: 5,
      avatar: 'MT'
    },
    {
      name: 'Lisa Chen',
      company: 'Marketing Agency',
      content: 'Saves us 20+ hours per week on email campaigns. The automation features are incredibly powerful.',
      rating: 5,
      avatar: 'LC'
    }
  ]

  const stats = [
    { number: '300%', label: 'Revenue Increase', icon: <DollarSign className="w-5h-5ml-2" /&gt; },</DollarSign></DollarSign>
    { number: '150%', label: 'Conversion Boost', icon: <TrendingUp className="w-5h-5ml-2" /&gt; },</TrendingUp></TrendingUp>
    { number: '20 hrs', label: 'Time Saved/Week', icon: <Clock className="w-5h-5ml-2" /&gt; },</Clock></Clock>
    { number: '95%', label: 'Deliverability Rate', icon: <Shield className="w-5h-5ml-2" /&gt; }</Shield></Shield>
  ]

  return (
    <></>
      <Helmet></Helmet>
        <title>AI Email Automation - Smart Email Marketing | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered email automation with content generation, smart segmentation, and performance analytics. Increase revenue by 300% and save 20+ hours per week." /></meta>
        <meta name="keywords" content="AI email automation, email marketing, email generation, lead scoring, email analytics, marketing automation, AI content creation" /></meta>
        <meta name="robots" content="index, follow" /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/ai-email-automation"  /></link>
      </Helmet>
      {/* Hero Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <Mail className="w-5h-5ml-2" /></Mail>
            <span />AI-Powered Email Marketing</span>
          </div>
          <h1 className="w-5h-5ml-2" /></h1>
            AI Email;
            <br /></br>
            <span className="w-5h-5ml-2" />Automation Pro;
            </span>
          </h1>
          <p className="w-5h-5ml-2">Transform your email marketing with AI-powered automation, 
            content generation, and performance optimization that increases revenue by 300%.
          </p>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <Link to="/contact" className="groupbg-gradient-to-r from-blue-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40transformhover:scale-105" /></Link>
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
            </Link>
            <Link to="#demo" className="groupborder-2 border-blue-400 text-blue-400 px-10 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" /></Link>
              <span />Watch Demo</span>
              <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
            </Link>
          </div>
      </section>
      {/* Stats Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {stats.map((stat, index) => (
              <div key={index} className="text-centerbg-white/5 backdrop-blur-sm rounded-2 xl p-6 borderborder-white/10" /></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.icon}
                </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.number}
                </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.label}
                </div>
            ))}
          </div>
      </section>
      {/* Features Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2" /></h2>
              Advanced <span className="w-5h-5ml-2" />Features</span>
            </h2>
            <p className="w-5h-5ml-2">Our AI-powered email automation platform uses machine learning to create, 
              send, and optimize email campaigns that drive real business results.
            </p>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {features.map((feature, index) => (
              <div key={index} className="groupbg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300hover:scale-105" /></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                </div>
                <h3 className="w-5h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5h-5ml-2">{feature.description}
                </p>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2text-gray-400text-sm" /></div>
                      <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                      <span />{benefit}</span>
                    </div>
                  ))}
                </div>
            ))}
          </div>
      </section>
      {/* Pricing Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2" /></h2>
              Transparent <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the perfect plan for your email marketing needs. All plans include our core AI features;
              with scalable options for businesses of all sizes.
            </p>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular;
                  ? 'border-blue-400/50 shadow-2 xl shadow-blue-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} /></div>
                {plan.popular && (
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Most Popular;
                    </div>
                )}
                
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
                  </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-centerspace-x-3" /></div>
                      <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                      <span className="w-5h-5ml-2" />{feature}</span>
                    </div>
                  ))}
                </div>
                <Link;</Link></Link>
                  to="/contact" 
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 shadow-lg shadow-blue-500/25'
                      : 'border-2 border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-gray-900'
                  }`}
                  />Get Started;
                </Link>
              </div>
            ))}
          </div>
      </section>
      {/* Testimonials Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2" /></h2>
              Trusted by <span className="w-5h-5ml-2" />Marketers</span>
            </h2>
            <p className="w-5h-5ml-2">See how AI Email Automation is transforming email marketing for businesses worldwide.
            </p>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10backdrop-blur-lg rounded-2 xl p-8 borderborder-white/20" /></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.avatar}
                  </div>
                  <div /></div>
                    <h4 className="w-5h-5ml-2" />{testimonial.name}</h4>
                    <p className="w-5h-5ml-2">{testimonial.company}</p>
                  </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5h-5tex t-yellow-400fill-current"  /></Star>
                  ))}
                </div>
                <p className="w-5h-5ml-2">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
      </section>
      {/* CTA Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <h2 className="w-5h-5ml-2" /></h2>
            Ready to Revolutionize Your;
            <br /></br>
            <span className="w-5h-5ml-2" />Email Marketing?
            </span>
          </h2>
          <p className="w-5h-5ml-2">Join thousands of marketers already increasing revenue and saving time with AI Email Automation. 
            Start your free trial today - no credit card required.
          </p>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <Link to="/contact" className="groupbg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" /></Link>
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
            </Link>
            <Link to="/pricing" className="groupborder-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" /></Link>
              <span />View All Plans</span>
              <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
            </Link>
          </div>
      </section>
    </>
  )
}
