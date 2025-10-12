import { ArrowRight, Bot, MessageSquare } from 'lucide-react'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot} from 'lucide-react';
import { ArrowRight, Mail, BarChart3, Users, Zap, CheckCircle, Clock, Target, TrendingUp, Shield, Bot, Star, Eye } from 'lucide-react'

export default function AIEmailMarketingAutomationPage() {
  const features = [
    {
      icon: <Bot className="w-6h-6text-cyan-400" />,
      title: 'AI Content Generation',
      description: 'Generate personalized email content with AI that adapts to your brand voice and audience'
    },
    {
      icon: <Target className="w-6h-6text-emerald-400" />,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior, preferences, and engagement patterns'
    },
    {
      icon: <BarChart3 className="w-6h-6text-purple-400" />,
      title: 'Predictive Analytics',
      description: 'AI-powered insights predict the best send times, subject lines, and content for maximum engagement'
    },
    {
      icon: <Zap className="w-6h-6text-orange-400" />,
      title: 'Automated Workflows',
      description: 'Create intelligent email sequences that adapt based on recipient behavior and engagement'
    },
    {
      icon: <Eye className="w-6h-6text-pink-400" />,
      title: 'A/B Testing AI',
      description: 'Automatically test and optimize email elements with AI-driven insights and recommendations'
    },
    {
      icon: <Shield className="w-6h-6text-red-400" />,
      title: 'Deliverability Optimization',
      description: 'AI-powered tools ensure maximum inbox placement and compliance with email regulations'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5,000 subscribers',
        'Basic AI features',
        'Email templates',
        'Mobile app access',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25,000 subscribers',
        'Advanced AI features',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API access',
        'A/B testing',
        'Landing pages'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited subscribers',
        'All AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Rachel Green',
      company: 'E-commerce Store',
      content: 'Increased our email open rates by 150% and revenue by 40%. The AI content generation is incredible.',
      rating: 5,
      avatar: 'RG'
    },
    {
      name: 'David Park',
      company: 'SaaS Company',
      content: 'The automated workflows save us 20+ hours per week. Customer engagement has never been higher.',
      rating: 5,
      avatar: 'DP'
    },
    {
      name: 'Lisa Chen',
      company: 'Marketing Agency',
      content: 'Our clients love the results. The AI segmentation and personalization features are game-changers.',
      rating: 5,
      avatar: 'LC'
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-8h-8text-cyan-400" />,
      title: '150% Higher Open Rates',
      description: 'AI-optimized subject lines and send times maximize engagement'
    },
    {
      icon: <DollarSign className="w-8h-8text-emerald-400" />,
      title: '40% Revenue Increase',
      description: 'Personalized content and smart segmentation drive conversions'
    },
    {
      icon: <Clock className="w-8h-8text-purple-400" />,
      title: 'Save 20+ Hours Weekly',
      description: 'Automated workflows and AI content generation eliminate manual work'
    },
    {
      icon: <Target className="w-8h-8text-orange-400" />,
      title: '95% Deliverability',
      description: 'AI-powered optimization ensures maximum inbox placement'
    }
  ]

  const emailTypes = [
    { name: 'Welcome Series', icon: '👋', description: 'Onboard new subscribers with personalized sequences' },
    { name: 'Product Recommendations', icon: '🛍️', description: 'AI-powered product suggestions based on behavior' },
    { name: 'Cart Abandonment', icon: '🛒', description: 'Recover lost sales with intelligent follow-up campaigns' },
    { name: 'Re-engagement', icon: '🔄', description: 'Win back inactive subscribers with targeted content' },
    { name: 'Birthday & Anniversaries', icon: '🎉', description: 'Celebrate special moments with personalized messages' },
    { name: 'Educational Content', icon: '📚', description: 'Nurture leads with valuable, AI-generated content' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
      <Helmet />
        <title>AI Email Marketing Automation - Zion Tech Group | Smart Email Campaigns</title>
        <meta name="description" content="Revolutionary AI-powered email marketing automation with smart segmentation, content generation, and predictive analytics. Increase open rates by 150%. Starting at $29/month."  />
        <meta name="keywords" content="AI email marketing, email automation, smart segmentation, email content generation, email analytics, marketing automation"  />
        <meta name="robots" content="index, follow"  />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-email-marketing-automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20px-4overflow-hidden" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)]">
        
        <div className="relative max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-rfrom-cyan-500/20 to-purple-500/20 text-cyan-400 px-6py-3rounded-full text-smfont-medium mb-8 border border-cyan-400/30">
            <Mail className="w-4h-4" />
            <span  >AI-Powered Email Marketing</span>
          </div>
          
          <h1 className="text-4xlsm:text-6xlmd:text-7xlfont-bold text-whitemb-8 leading-tight" />
            AI Email Marketing
            <br />
            <span className="bg-gradient-to-rfrom-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"  />Automation
            </span>
          </h1>
          
          <p className="text-lgsm:text-xlmd:text-2xltext-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your email marketing with AI-powered automation, smart segmentation, and personalized content. 
            Increase open rates by 150% and revenue by 40% with intelligent campaigns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6justify-center mb-16" />
            <Link 
              to="/contact" 
              className="group bg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-10py-4rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
             />
              <span  >Start Free Trial</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="#pricing" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10py-4rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
             />
              <span  >View Pricing</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2md:grid-cols-4gap-8max-w-4xl mx-auto">
        <div className="text-center">
              <div className="text-3xlfont-bold text-cyan-400 mb-2"  >150%</div>
              <div className="text-gray-300 text-sm"  >Higher Open Rates</div>
            </div>
            <div className="text-center" />
              <div className="text-3xlfont-bold text-purple-400 mb-2"  >40%</div>
              <div className="text-gray-300 text-sm"  >Revenue Increase</div>
            </div>
            <div className="text-center" />
              <div className="text-3xlfont-bold text-pink-400 mb-2"  >95%</div>
              <div className="text-gray-300 text-sm"  >Deliverability Rate</div>
            </div>
            <div className="text-center" />
              <div className="text-3xlfont-bold text-emerald-400 mb-2"  >50 K+</div>
              <div className="text-gray-300 text-sm"  >Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20px-4relative" />
        <div className="absolute inset-0 bg-gradient-to-brfrom-purple-500/5 via-cyan-500/5 to-pink-500/5">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-centermb-16" />
            <h2 className="text-4xlmd:text-5xlfont-bold text-whitemb-6" />
              Why Choose Our <span className="bg-gradient-to-rfrom-cyan-400 to-purple-400 bg-clip-text text-transparent"  >AI Email Marketing?</span>
            </h2>
            <p className="text-xltext-gray-300 max-w-4xl mx-auto">
              Experience the future of email marketing with cutting-edge AI technology that works for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-8" />
            {benefits.map((benefit, index) => (
              <div key={index} className="text-centergroup" />
                <div className="flex items-center justify-center w-20h-20bg-gradient-to-rfrom-cyan-500 to-purple-600 rounded-2 xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"  />{benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-whitemb-4 group-hover:text-cyan-400 transition-colors"  />{benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Types Section */}
      <section className="py-20px-4relative" />
        <div className="relative max-w-7xl mx-auto">
        <div className="text-centermb-16">
            <h2 className="text-4xlmd:text-5xlfont-bold text-whitemb-6" />
              AI-Powered <span className="bg-gradient-to-rfrom-cyan-400 to-purple-400 bg-clip-text text-transparent"  >Email Campaigns</span>
            </h2>
            <p className="text-xltext-gray-300 max-w-4xl mx-auto">
              Create intelligent email campaigns that adapt and optimize based on recipient behavior and preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-3gap-8" />
            {emailTypes.map((emailType, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10" />
                <div className="text-centermb-6" />
                  <div className="text-4xlmb-4"  >{emailType.icon}</div>
                  <h3 className="text-xl font-bold text-whitegroup-hover:text-cyan-400 transition-colors"  />{emailType.name}
                  </h3>
                </div>
                <p className="text-gray-300 text-center">
                  {emailType.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20px-4bg-gradient-to-brfrom-slate-800/50 to-purple-900/50 relative" />
        <div className="relative max-w-7xl mx-auto">
        <div className="text-centermb-16">
            <h2 className="text-4xlmd:text-5xlfont-bold text-whitemb-6" />
              Powerful Features for <span className="bg-gradient-to-rfrom-cyan-400 to-purple-400 bg-clip-text text-transparent"  >Smart Email Marketing</span>
            </h2>
            <p className="text-xltext-gray-300 max-w-4xl mx-auto">
              Everything you need to create, send, and optimize email campaigns with AI-powered intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-3gap-8" />
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10" />
                <div className="flex items-center justify-center w-16h-16bg-gradient-to-rfrom-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110 transition-transform duration-300"  />{feature.icon}
                </div>
                <h3 className="text-2xlfont-bold text-whitemb-4 group-hover:text-cyan-400 transition-colors"  />{feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20px-4relative" />
        <div className="relative max-w-7xl mx-auto">
        <div className="text-centermb-16">
            <h2 className="text-4xlmd:text-5xlfont-bold text-whitemb-6" />
              Simple, Transparent <span className="bg-gradient-to-rfrom-cyan-400 to-purple-400 bg-clip-text text-transparent"  >Pricing</span>
            </h2>
            <p className="text-xltext-gray-300 max-w-4xl mx-auto">
              Choose the plan that fits your subscriber count and marketing needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1md:grid-cols-3gap-8" />
            {pricingPlans.map((plan, index) => (
              <div key={index} className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-brfrom-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: border-cyan-400/30'
              }`} />
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2" />
                    <div className="bg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-6py-2rounded-full text-smfont-semibold"  />Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-centermb-8" />
                  <h3 className="text-2xlfont-bold text-whitemb-2"  >{plan.name}</h3>
                  <p className="text-gray-300 text-smmb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center" />
                    <span className="text-5xlfont-bold text-cyan-400"  >{plan.price}</span>
                    <span className="text-gray-300 ml-2"  >{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8" />
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3" />
                      <CheckCircle className="w-5 h-5text-green-400 flex-shrink-0" />
                      <span className="text-gray-300"  >{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className="{`block" w-full text-centerpy-3rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitehover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20px-4relative" />
        <div className="relative max-w-7xl mx-auto">
        <div className="text-centermb-16">
            <h2 className="text-4xlmd:text-5xlfont-bold text-whitemb-6" />
              Trusted by <span className="bg-gradient-to-rfrom-cyan-400 to-purple-400 bg-clip-text text-transparent"  >50,000+</span> Marketers
            </h2>
            <p className="text-xltext-gray-300 max-w-4xl mx-auto">
              See what our customers are saying about their success with our AI email marketing automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1md:grid-cols-3gap-8" />
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300" />
                <div className="flex items-center mb-4" />
                  <div className="w-12h-12bg-gradient-to-rfrom-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-bold mr-4"  />{testimonial.avatar}
                  </div>
                  <div />
                    <div className="font-semibold text-white"  >{testimonial.name}</div>
                    <div className="text-gray-400 text-sm"  >{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex mb-4" />
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5text-yellow-400fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20px-4relative" />
        <div className="absolute inset-0 bg-gradient-to-rfrom-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
        <div className="bg-gradient-to-rfrom-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="relative z-10" />
                <h2 className="text-4xlsm:text-5xlmd:text-6xlfont-bold text-whitemb-6 leading-tight" />
                  Ready to Transform Your <span className="bg-gradient-to-rfrom-cyan-300 to-pink-300 bg-clip-text text-transparent"  >Email Marketing?</span>
                </h2>
                
                <p className="text-xlsm:text-2xltext-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join thousands of marketers already increasing open rates by 150% with our AI-powered email automation. 
                  Start your free trial today and experience the future of email marketing.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6justify-center mb-8" />
                  <Link 
                    to="/contact" 
                    className="group bg-whitetext-cyan-600 px-10py-4rounded-xl font-bold text-lghover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                   />
                    <span  >Start Free Trial</span>
                    <ArrowRight className="w-5 h-5group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="#pricing" 
                    className="group border-2 border-white text-whitepx-10py-4rounded-xl font-bold text-lghover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                   />
                    <span  >View All Plans</span>
                    <ArrowRight className="w-5 h-5group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="text-white/80 text-sm" />
                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}