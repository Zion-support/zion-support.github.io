import { Helmet } from 'react-helmet-async'
import { Calendar, Share2, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Clock, Globe, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';
import { Share2, ArrowRight} from 'lucide-react';
import { Link } from 'react-router-dom';
const AISocialSchedulerPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-5 h-5 ml-2" />,
      title: 'AI Content Generation',
      description: 'Generate engaging social media posts using AI that understands your brand voice and audience preferences.',
      benefits: ['Brand voice training', 'Audience analysis', 'Content optimization', 'Multi-platform adaptation']
    },
    {
      icon: <Calendar className="w-5 h-5 ml-2" />,
      title: 'Smart Scheduling',
      description: 'AI determines optimal posting times based on your audience activity patterns and engagement data.',
      benefits: ['Optimal timing', 'Audience insights', 'Engagement prediction', 'Cross-platform sync']
    },
    {
      icon: <TrendingUp className="w-5 h-5 ml-2" />,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics with AI-powered insights to improve your social media strategy.',
      benefits: ['Engagement metrics', 'ROI tracking', 'Trend analysis', 'Competitor insights']
    },
    {
      icon: <Share2 className="w-5 h-5 ml-2" />,
      title: 'Multi-Platform Management',
      description: 'Manage all your social media accounts from one dashboard with platform-specific optimization.',
      benefits: ['Unified dashboard', 'Platform optimization', 'Bulk posting', 'Content adaptation']
    },
    {
      icon: <Zap className="w-5 h-5 ml-2" />,
      title: 'Automated Engagement',
      description: 'AI-powered auto-responses and engagement tools to maintain active social media presence.',
      benefits: ['Auto-responses', 'Comment management', 'Hashtag optimization', 'Community building']
    },
    {
      icon: <BarChart3 className="w-5 h-5 ml-2" />,
      title: 'Campaign Management',
      description: 'Plan, execute, and track social media campaigns with AI-driven recommendations.',
      benefits: ['Campaign planning', 'A/B testing', 'Performance tracking', 'Budget optimization']
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        'Up to 3 social accounts',
        '50 posts per month',
        'Basic AI content generation',
        'Standard analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 10 social accounts',
        'Unlimited posts',
        'Advanced AI features',
        'Team collaboration',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited accounts',
        'White-label options',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'Custom AI training'
      ],
      popular: false
    }
  ]
  const testimonials = [
    {
      name: 'Maria Garcia',
      company: 'Digital Marketing Agency',
      content: 'AI Social Scheduler increased our client engagement by 150%. The AI content generation is incredibly effective.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'Tom Anderson',
      company: 'E-commerce Brand',
      content: 'The optimal timing feature alone increased our reach by 200%. Best social media tool we've ever used.',
      rating: 5,
      avatar: 'TA'
    },
    {
      name: 'Sarah Kim',
      company: 'Content Creator',
      content: 'Saves me 10+ hours per week on content planning. The AI understands my brand voice perfectly.',
      rating: 5,
      avatar: 'SK'
    }
  ]
  const stats = [
    { number: '150%', label: 'Engagement Increase', icon: <TrendingUp className="w-5 h-5 ml-2" /> },
    { number: '200%', label: 'Reach Improvement', icon: <Globe className="w-5 h-5 ml-2" /> },
    { number: '10 hrs', label: 'Time Saved/Week', icon: <Clock className="w-5 h-5 ml-2" /> },
    { number: '50 K+', label: 'Posts Scheduled', icon: <Calendar className="w-5 h-5 ml-2" /> }
  ]
  return (
    <>
      <>
      </><Helmet>
        </Helmet></Helmet><title />AI Social Scheduler - Smart Social Media Management | Zion Tech Group
        </title>
        <meta name="description" content="Revolutionary AI-powered social media management with content generation, smart scheduling, and performance analytics. Increase engagement by 150% and save 10+ hours per week." />
        <meta name="keywords" content="AI social media scheduler, social media automation, content generation, social media analytics, social media management, AI content creation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-social-scheduler"  />
      </Helmet>
      {/* Hero Section */}
      <section className="w-5 h-5 ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            </div></div><Share2 className="w-5 h-5 ml-2" />
            <span />AI-Powered Social Media Management</span>
          </div>
          <h1 className="w-5 h-5 ml-2" />
            AI Social
            <br />
            <span className="w-5 h-5 ml-2" />Scheduler Pro
            </span>
          </h1>
          <p className="w-5 h-5 ml-2">Transform your social media presence with AI-powered content generation, 
            smart scheduling, and performance analytics that increase engagement by 150%.
          </p>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            </div></div><Link to="/contact" className="group bg-gradient-to-r from-pink-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="#demo" className="group border-2 border-pink-400 text-pink-400 px-10 py-4 rounded-xl font-semibold hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span />Watch Demo</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
      </section>
      {/* Stats Section */}
      <section className="w-5 h-5 ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {stats.map((stat, index) => (
              </div></div><div key="{index}" className="text-center bg-white/5 backdrop-blur-sm rounded-2 xl p-6borderborder-white/10" />
                </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.icon}
                </div></div></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.number}
                </div></div></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.label}
                </div></div></div>
            ))}
          </div>
      </section>
      {/* Features Section */}
      <section className="w-5 h-5 ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            </div></div><h2 className="w-5 h-5 ml-2" />
              Powerful <span className="w-5 h-5 ml-2" />Features</span>
            </h2>
            <p className="w-5 h-5 ml-2">Our AI-powered social media scheduler uses advanced machine learning to create, 
              schedule, and optimize your social media content across all platforms.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {features.map((feature, index) => (
              </div></div><div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                </div></div></div>
                <h3 className="w-5 h-5 ml-2" />{feature.title}
                </h3>
                <p className="w-5 h-5 ml-2">{feature.description}
                </p>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    </div></div><div key="{benefitIndex}" className="flex items-center space-x-2text-gray-400text-sm" />
                      </div></div><CheckCircle className="w-5 h-5 ml-2" />
                      <span />{benefit}</span>
                    </div>
                  ))}
                </div>
            ))}
          </div>
      </section>
      {/* Pricing Section */}
      <section className="w-5 h-5 ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            </div></div><h2 className="w-5 h-5 ml-2" />
              Affordable <span className="w-5 h-5 ml-2" />Pricing</span>
            </h2>
            <p className="w-5 h-5 ml-2">Choose the perfect plan for your social media management needs. All plans include our core AI features 
              with flexible options for businesses of all sizes.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {pricingPlans.map((plan, index) => (
              </div></div><div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-pink-400/50 shadow-2 xl shadow-pink-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (
                  </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Most Popular
                    </div></div></div>
                )}
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  </div></div><h3 className="w-5 h-5 ml-2" />{plan.name}</h3>
                  <p className="w-5 h-5 ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    </div></div><span className="w-5 h-5 ml-2" />{plan.price}</span>
                    <span className="w-5 h-5 ml-2" />{plan.period}</span>
                  </div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  {plan.features.map((feature, featureIndex) => (
                    </div></div><div key="{featureIndex}" className="flex items-centerspace-x-3" />
                      </div></div><CheckCircle className="w-5 h-5 ml-2" />
                      <span className="w-5 h-5 ml-2" />{feature}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to="/contact" 
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 to-cyan-600 text-white hover:from-pink-600 hover:to-cyan-700 shadow-lg shadow-pink-500/25'
                      : 'border-2 border-pink-400 text-pink-400 hover: bg-pink-400 hover:text-gray-900'
                  }`}
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
      </section>
      {/* Testimonials Section */}
      <section className="w-5 h-5 ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            </div></div><h2 className="w-5 h-5 ml-2" />
              Loved by <span className="w-5 h-5 ml-2" />Marketers</span>
            </h2>
            <p className="w-5 h-5 ml-2">See how AI Social Scheduler is transforming social media management for businesses and creators worldwide.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {testimonials.map((testimonial, index) => (
              </div></div><div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8borderborder-white/20" />
                </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.avatar}
                  </div></div></div>
                  <div />
                    </div></div><h4 className="w-5 h-5 ml-2" />{testimonial.name}</h4>
                    <p className="w-5 h-5 ml-2">{testimonial.company}</p>
                  </div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    </div></div><Star key="{i}" className="w-5 h-5te xt-yellow-400fill-current"  />
                  ))}
                </div>
                <p className="w-5 h-5 ml-2">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
      </section>
      {/* CTA Section */}
      <section className="w-5 h-5 ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          </div></div><h2 className="w-5 h-5 ml-2" />
            Ready to Transform Your
            <br />
            <span className="w-5 h-5 ml-2" />Social Media Strategy?
            </span>
          </h2>
          <p className="w-5 h-5 ml-2">Join thousands of marketers already increasing engagement and saving time with AI Social Scheduler. 
            Start your free trial today - no credit card required.
          </p>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            </div></div><Link to="/contact" className="group bg-white text-pink-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span />View All Plans</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
      </section>
    </>
  )
}
export default AISocialSchedulerPage
    </>
);