import React from 'react'
import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { ArrowRight, Share2} from 'lucide-react';

export default function AISocialMediaSchedulerPage() {
  const features = [
    {
      icon: <Calendar className="w-5h-5ml-2" />,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on audience engagement patterns'
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive performance metrics and ROI tracking across all platforms'
    },
    {
      icon: <Users className="w-5h-5ml-2" />,
      title: 'Audience Insights',
      description: 'AI-driven audience analysis and content personalization recommendations'
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Auto-Posting',
      description: 'Seamless cross-platform content distribution with smart formatting'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: 'Content Optimization',
      description: 'AI suggestions for hashtags, captions, and optimal posting times'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Brand Safety',
      description: 'Automated content moderation and brand compliance checking'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and individuals',
      features: [
        '3 social media accounts',
        '50 posts per month',
        'Basic analytics',
        'Email support',
        'Content calendar',
        'Hashtag suggestions'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        'Unlimited posts',
        'Advanced analytics',
        'Priority support',
        'Team collaboration',
        'AI content suggestions',
        'Competitor analysis',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited accounts',
        'Unlimited posts',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced AI features',
        'API access',
        'Custom reporting'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Digital Marketing Agency',
      content: 'Increased our social media engagement by 300% in just 2 months. The AI scheduling is incredibly accurate.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      company: 'E-commerce Store',
      content: 'The analytics dashboard gives us insights we never had before. ROI tracking is spot-on.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Content Creator',
      content: 'Saves me 10+ hours per week. The AI content suggestions are always on-brand and engaging.',
      rating: 5,
      avatar: 'ER'
    }
  ]

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title />AI Social Media Scheduler - Zion Tech Group | Automated Social Media Management</title>
        <meta name="description" content="Revolutionary AI-powered social media scheduler with smart posting, analytics, and audience insights. Increase engagement by 300% with automated content optimization. Starting at $29/month." />
        <meta name="keywords" content="AI social media scheduler, automated posting, social media management, content optimization, social media analytics, AI marketing tools" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-social-media-scheduler"  />
      </Helmet>
=======

        <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>AI Social Media Scheduler - Zion Tech Group | Automated Social Media Management</title>
>>>>>>> cursor/fix-errors-and-merge-to-main-48fd

      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <Share2 className="w-5h-5ml-2" />
            <span />AI-Powered Social Media Management</span>
          </div>
          
          <h1 className="w-5h-5ml-2" />
            AI Social Media
            <br />
            <span className="w-5h-5ml-2" />Scheduler
            </span>
          </h1>
          
          <p className="w-5h-5ml-2">Transform your social media presence with AI-powered scheduling, content optimization, 
            and analytics. Increase engagement by up to 300% with intelligent automation.
          </p>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
            <Link to="#pricing" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span />View Pricing</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
          </div>

          {/* Key Stats */}
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">300%</div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Avg. Engagement Increase</div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">10+</div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Platforms Supported</div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">50 K+</div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Active Users</div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">99.9%</div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Uptime Guarantee</div>
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5ml-2" />
              Powerful Features for <span className="w-5h-5ml-2" />Social Success</span>
            </h2>
            <p className="w-5h-5ml-2">Everything you need to manage, optimize, and grow your social media presence with AI-powered intelligence.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                </div>
                <h3 className="w-5h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5h-5ml-2">{feature.description}
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20px-4 b g-gradient-to-br from-slate-800/50 to-purple-900/50relative" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5ml-2" />
              Simple, Transparent <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the plan that fits your needs. All plans include our core AI features and 24/7 support.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2 xl ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: border-cyan-400/30'
              }`} />
                {plan.popular && (
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Most Popular
                    </div>
                )}
                
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
                  </div>
                
                <ul className="w-5h-5ml-2" />
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-centerspace-x-3" />
                      <CheckCircle className="w-5h-5ml-2" />
                      <span className="w-5h-5ml-2" />{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5ml-2" />
              Trusted by <span className="w-5h-5ml-2" />50,000+</span> Users
            </h2>
            <p className="w-5h-5ml-2">See what our customers are saying about their success with our AI social media scheduler.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-all duration-300" />
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.avatar}
                  </div>
                  <div />
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.name}</div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.company}</div>
                </div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5h-5te x t-yellow-400fill-current"  />
                  ))}
                </div>
                <p className="w-5h-5ml-2">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <h2 className="w-5h-5ml-2" />
                  Ready to Transform Your <span className="w-5h-5ml-2" />Social Media?</span>
                </h2>
                
                <p className="w-5h-5ml-2">Join thousands of businesses already using our AI-powered social media scheduler 
                  to increase engagement, save time, and grow their online presence.
<<<<<<< HEAD
                </p>
                
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <span />Start Free Trial</span>
                    <ArrowRight className="w-5h-5ml-2" />
                  </Link>
                  <Link to="#pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <span />View All Plans</span>
                    <ArrowRight className="w-5h-5ml-2" />
                  </Link>
                </div>
                
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <p />✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
=======

                    <span>Start Free Trial</span>
                    <span>View All Plans</span>

                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>

      </>
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-48fd
