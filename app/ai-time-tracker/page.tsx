import { Helmet } from 'react-helmet-async'
import { Clock, Timer, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Target, Brain, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import React  from 'react';
import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

const AITimeTrackerPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8h-8text-cyan-400" />,
      title: 'AI Activity Recognition',
      description: 'Automatically detect and categorize work activities using AI to eliminate manual time entry.',
      benefits: ['Auto-detection', 'Smart categorization', 'Context awareness', 'Learning algorithms']
    },
    {
      icon: <Timer className="w-8h-8text-emerald-400" />,
      title: 'Smart Time Tracking',
      description: 'AI-powered time tracking that learns your work patterns and suggests optimal time allocation.',
      benefits: ['Pattern learning', 'Optimal suggestions', 'Focus time detection', 'Break reminders']
    },
    {
      icon: <TrendingUp className="w-8h-8text-purple-400" />,
      title: 'Productivity Analytics',
      description: 'Comprehensive analytics with AI insights to improve productivity and work-life balance.',
      benefits: ['Productivity metrics', 'Efficiency analysis', 'Distraction tracking', 'Goal setting']
    },
    {
      icon: <Zap className="w-8h-8text-red-400" />,
      title: 'Automated Reporting',
      description: 'Generate detailed time reports automatically with AI-powered insights and recommendations.',
      benefits: ['Auto reports', 'Client billing', 'Project insights', 'Team analytics']
    },
    {
      icon: <BarChart3 className="w-8h-8text-orange-400" />,
      title: 'Project Management',
      description: 'AI-driven project time estimation and resource allocation for better project planning.',
      benefits: ['Time estimation', 'Resource planning', 'Deadline tracking', 'Budget monitoring']
    },
    {
      icon: <Shield className="w-8h-8text-pink-400" />,
      title: 'Privacy Protection',
      description: 'Advanced privacy controls with local processing to protect sensitive work data.',
      benefits: ['Local processing', 'Data encryption', 'Privacy controls', 'GDPR compliance']

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

  ]

  const stats = [
    { number: '40%', label: 'Productivity Increase', icon: <TrendingUp className="w-6h-6text-cyan-400" /> },
    { number: '20%', label: 'Faster Delivery', icon: <Timer className="w-6h-6text-emerald-400" /> },
    { number: '95%', label: 'Accuracy Rate', icon: <Target className="w-6h-6text-purple-400" /> },
    { number: '50 K+', label: 'Hours Tracked', icon: <Clock className="w-6h-6text-orange-400" /> }
  ]

  return (

      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>AI Time Tracker - Smart Productivity Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered time tracking with activity recognition, productivity analytics, and automated reporting. Increase productivity by 40% and deliver projects 20% faster." / / />
        <meta name="keywords" content="AI time tracking, productivity management, activity recognition, time analytics, project management, work optimization" / / />
        <meta name="robots" content="index, follow" / / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-time-tracker" />
      </Helmet>

      {/* Hero Section */}

      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900via-indigo-900to-slate-900" />
        <div className="absoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.3)_0%,transparent_50%)]" />
        <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" />
        <div className="relative max-w-7xlmx-autotext-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-indigo-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-indigo-400/30">
            <Clock className="w-4h-4" />
            <span   />AI-Powered Time Management</span>
          </div>

          <h1 className="text-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
            AI Time

            <br / />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400bg-clip-texttext-transparent">Tracker Pro
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Transform your productivity with AI-powered time tracking,
            activity recognition, and intelligent insights that increase efficiency by 40%.
          </p>

          <div className="flex flex-col sm:flex-row gap-6justify-centermb-16">
            <Link to="/contact" className="group bg-gradient-to-r from-indigo-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-indigo-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40transformhover:scale-105" >

          <span    />
        </Link>Start Free Trial</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to="#demo" className="group border-2 border-indigo-400 text-indigo-400 px-10 py-4 rounded-xl font-semibold hover:bg-indigo-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >

          <span    />
        </Link>Watch Demo</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
          </div>
      </section>

      {/* Stats Section */}

      <section className="py-20px-4bg-gray-900" />
        <div className="max-w-7xlmx-auto">
          <div className="grid grid-cols-2md:grid-cols-4gap-8">
            {stats.map((stat, index) => (
              <div key="{index}" className="text-center bg-white/5 backdrop-blur-sm rounded-2 xl p-6borderborder-white/10" />
                <div className="flexjustify-centermb-4"  />{stat.icon}
                </div>
                <div className="text-3 xl md:text-4xl font-bold text-white mb-2"  />{stat.number}
                </div>
                <div className="text-gray-300text-sm"  />{stat.label}
                </div>
            ))}
          </div>
      </section>

      {/* Features Section */}

      <section className="py-20 px-4 bg-gradient-to-brfrom-slate-800/50to-indigo-900/50" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
              Intelligent <span className="bg-gradient-to-r from-indigo-400 to-cyan-400bg-clip-texttext-transparent"   />Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              Our AI-powered time tracking platform uses machine learning to automatically
              track activities, analyze productivity patterns, and provide actionable insights.

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
            {features.map((feature, index) => (

              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-indigo-400transition-colors">{feature.title}
                </h3>
                <p className="text-gray-300 mb-6leading-relaxed">
              {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (

                    <div key="{benefitIndex}" className="flex items-center space-x-2text-gray-400text-sm" />
                      <CheckCircle className="w-4h-4text-green-400" />
                      <span   />{benefit}</span>
                    </div>

                  ))}

                </div>
            ))}

          </div>
      </section>

      {/* Pricing Section */}

      <section className="py-20px-4bg-gray-900" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
              Simple <span className="bg-gradient-to-r from-indigo-400 to-cyan-400bg-clip-texttext-transparent"   />Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              Choose the perfect plan for your time tracking needs. All plans include our core AI features
              with flexible options for individuals and teams.

            </p>
          </div>

          <div className="grid grid-cols-1md:grid-cols-3gap-8">
            {pricingPlans.map((plan, index) => (
              <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'border-indigo-400/50 shadow-2 xl shadow-indigo-500/20'
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2transform-translate-x-1/2">
                    <div className="bg-gradient-to-r from-indigo-500 to-cyan-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold"  />Most Popular
                    </div>
                )}

                <div className="text-centermb-8">
                  <h3 className="text-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                  <p className="text-gray-300 mb-4">
              {plan.description}</p>
                  <div className="flex items-baselinejustify-center">
                    <span className="text-5 xlfont-bold text-white"   />{plan.price}</span>
                    <span className="text-gray-400ml-2"   />{plan.period}</span>
                  </div>

                <div className="space-y-4mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key="{featureIndex}" className="flex items-centerspace-x-3" />
                      <CheckCircle className="w-5 h-5text-green-400flex-shrink-0" />
                      <span className="text-gray-300"   />{feature}</span>
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

      <section className="py-20 px-4 bg-gradient-to-brfrom-indigo-900/50to-purple-900/50" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
              Trusted by <span className="bg-gradient-to-r from-indigo-400 to-purple-400bg-clip-texttext-transparent"   />Professionals</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              See how AI Time Tracker is transforming productivity for professionals and teams worldwide.

            </p>
          </div>

          <div className="grid grid-cols-1md:grid-cols-3gap-8">
            {testimonials.map((testimonial, index) => (

              <div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8borderborder-white/20" />
                <div className="flex items-centermb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4"  />{testimonial.avatar}
                  </div>
                  <div>
            <h4 className="text-whitefont-semibold"   />{testimonial.name}</h4>
                    <p className="text-gray-400text-sm">
              {testimonial.company}</p>
                  </div>
                <div className="flex items-centermb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5text-yellow-400fill-current" />
                  ))}

                </div>
                <p className="text-gray-300italic">
              "{testimonial.content}"</p>
              </div>

            ))}

          </div>
      </section>

      {/* CTA Section */}

      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600via-cyan-600to-blue-600" />
        <div className="max-w-7xlmx-autotext-center">
          <h2 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6" />
            Ready to Boost Your

            <br / />
            <span className="bg-gradient-to-r from-indigo-300 to-cyan-300bg-clip-texttext-transparent">Productivity?
            </span>
          </h2>
          <p className="text-xl sm:text-2 xl text-white/90 mb-8 max-w-4xlmx-auto">
              Join thousands of professionals already increasing productivity and improving work-life balance with AI Time Tracker.
            Start your free trial today - no credit card required.

          </p>
          <div className="flex flex-col sm:flex-rowgap-6justify-center">
            <Link to="/contact" className="group bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" >

          <span    />
        </Link>Start Free Trial</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >

          <span    />
        </Link>View All Plans</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
          </div>
      </section>

export default AITimeTrackerPage;
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
