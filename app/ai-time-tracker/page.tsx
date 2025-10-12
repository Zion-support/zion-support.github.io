import { Helmet } from 'react-helmet-async'
import { Clock, Timer, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Target, Brain, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';
import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';
const AITimeTrackerPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-5 h-5 ml-2" />,
      title: 'AI Activity Recognition',
      description: 'Automatically detect and categorize work activities using AI to eliminate manual time entry.',
      benefits: ['Auto-detection', 'Smart categorization', 'Context awareness', 'Learning algorithms']
    },
    {
      icon: <Timer className="w-5 h-5 ml-2" />,
      title: 'Smart Time Tracking',
      description: 'AI-powered time tracking that learns your work patterns and suggests optimal time allocation.',
      benefits: ['Pattern learning', 'Optimal suggestions', 'Focus time detection', 'Break reminders']
    },
    {
      icon: <TrendingUp className="w-5 h-5 ml-2" />,
      title: 'Productivity Analytics',
      description: 'Comprehensive analytics with AI insights to improve productivity and work-life balance.',
      benefits: ['Productivity metrics', 'Efficiency analysis', 'Distraction tracking', 'Goal setting']
    },
    {
      icon: <Zap className="w-5 h-5 ml-2" />,
      title: 'Automated Reporting',
      description: 'Generate detailed time reports automatically with AI-powered insights and recommendations.',
      benefits: ['Auto reports', 'Client billing', 'Project insights', 'Team analytics']
    },
    {
      icon: <BarChart3 className="w-5 h-5 ml-2" />,
      title: 'Project Management',
      description: 'AI-driven project time estimation and resource allocation for better project planning.',
      benefits: ['Time estimation', 'Resource planning', 'Deadline tracking', 'Budget monitoring']
    },
    {
      icon: <Shield className="w-5 h-5 ml-2" />,
      title: 'Privacy Protection',
      description: 'Advanced privacy controls with local processing to protect sensitive work data.',
      benefits: ['Local processing', 'Data encryption', 'Privacy controls', 'GDPR compliance']
    }
  ]
  const pricingPlans = [
    {
      name: 'Individual',
      price: '$19',
      period: '/month',
      description: 'Perfect for freelancers and individual professionals',
      features: [
        'Unlimited time tracking',
        'Basic AI features',
        'Mobile app access',
        'Standard reports',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$49',
      period: '/month',
      description: 'Ideal for small teams and growing businesses',
      features: [
        'Up to 10 team members',
        'Advanced AI features',
        'Team collaboration',
        'Project management',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'White-label options'
      ],
      popular: false
    }
  ]
  const testimonials = [
    {
      name: 'Alex Johnson',
      company: 'Freelance Designer',
      content: 'AI Time Tracker increased my productivity by 40%. The auto-detection feature is a game-changer.',
      rating: 5,
      avatar: 'AJ'
    },
    {
      name: 'Maria Rodriguez',
      company: 'Project Manager',
      content: 'The project time estimation feature helped us deliver projects 20% faster with better accuracy.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'David Kim',
      company: 'Software Developer',
      content: 'Finally, a time tracker that actually understands my work patterns. Highly recommended!',
      rating: 5,
      avatar: 'DK'
    }
  ]
  const stats = [
    { number: '40%', label: 'Productivity Increase', icon: <TrendingUp className="w-5 h-5 ml-2" /> },
    { number: '20%', label: 'Faster Delivery', icon: <Timer className="w-5 h-5 ml-2" /> },
    { number: '95%', label: 'Accuracy Rate', icon: <Target className="w-5 h-5 ml-2" /> },
    { number: '50 K+', label: 'Hours Tracked', icon: <Clock className="w-5 h-5 ml-2" /> }
  ]
  return (
    <>
      <>
      </><Helmet>
        </Helmet></Helmet><title />AI Time Tracker - Smart Productivity Management | Zion Tech Group
        </title>
        <meta name="description" content="Revolutionary AI-powered time tracking with activity recognition, productivity analytics, and automated reporting. Increase productivity by 40% and deliver projects 20% faster." />
        <meta name="keywords" content="AI time tracking, productivity management, activity recognition, time analytics, project management, work optimization" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-time-tracker"  />
      </Helmet>
      {/* Hero Section */}
      <section className="w-5 h-5 ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            </div></div><Clock className="w-5 h-5 ml-2" />
            <span />AI-Powered Time Management</span>
          </div>
          <h1 className="w-5 h-5 ml-2" />
            AI Time
            <br />
            <span className="w-5 h-5 ml-2" />Tracker Pro
            </span>
          </h1>
          <p className="w-5 h-5 ml-2">Transform your productivity with AI-powered time tracking, 
            activity recognition, and intelligent insights that increase efficiency by 40%.
          </p>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            </div></div><Link to="/contact" className="group bg-gradient-to-r from-indigo-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-indigo-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="#demo" className="group border-2 border-indigo-400 text-indigo-400 px-10 py-4 rounded-xl font-semibold hover:bg-indigo-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
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
              Intelligent <span className="w-5 h-5 ml-2" />Features</span>
            </h2>
            <p className="w-5 h-5 ml-2">Our AI-powered time tracking platform uses machine learning to automatically 
              track activities, analyze productivity patterns, and provide actionable insights.
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
              Simple <span className="w-5 h-5 ml-2" />Pricing</span>
            </h2>
            <p className="w-5 h-5 ml-2">Choose the perfect plan for your time tracking needs. All plans include our core AI features 
              with flexible options for individuals and teams.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {pricingPlans.map((plan, index) => (
              </div></div><div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-indigo-400/50 shadow-2 xl shadow-indigo-500/20' 
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
                      ? 'bg-gradient-to-r from-indigo-500 to-cyan-600 text-white hover:from-indigo-600 hover:to-cyan-700 shadow-lg shadow-indigo-500/25'
                      : 'border-2 border-indigo-400 text-indigo-400 hover: bg-indigo-400 hover:text-gray-900'
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
              Trusted by <span className="w-5 h-5 ml-2" />Professionals</span>
            </h2>
            <p className="w-5 h-5 ml-2">See how AI Time Tracker is transforming productivity for professionals and teams worldwide.
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
            Ready to Boost Your
            <br />
            <span className="w-5 h-5 ml-2" />Productivity?
            </span>
          </h2>
          <p className="w-5 h-5 ml-2">Join thousands of professionals already increasing productivity and improving work-life balance with AI Time Tracker. 
            Start your free trial today - no credit card required.
          </p>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            </div></div><Link to="/contact" className="group bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
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
export default AITimeTrackerPage
    </>
);