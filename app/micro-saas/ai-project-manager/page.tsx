import React from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot} from 'lucide-react';

export default function AIProjectManagerPage() {
  const features = [
    {
      icon: <Bot className="w-6h-6text-cyan-400" / />,
      title: 'AI Task Prioritization',
      description: 'Intelligent task ranking based on deadlines, dependencies, and team capacity'
    },
    {
      icon: <BarChart3 className="w-6h-6text-emerald-400" / />,
      title: 'Predictive Analytics',
      description: 'AI-powered project forecasting and risk assessment with 95% accuracy'
    },
    {
      icon: <Users className="w-6h-6text-purple-400" / />,
      title: 'Smart Team Matching',
      description: 'AI algorithms match tasks to team members based on skills and availability'
    },
    {
      icon: <Zap className="w-6h-6text-orange-400" / />,
      title: 'Automated Workflows',
      description: 'Set up intelligent workflows that adapt and optimize based on project patterns'
    },
    {
      icon: <Target className="w-6h-6text-pink-400" / />,
      title: 'Resource Optimization',
      description: 'AI-driven resource allocation and capacity planning for maximum efficiency'
    },
    {
      icon: <Shield className="w-6h-6text-red-400" / />,
      title: 'Risk Management',
      description: 'Proactive risk identification and mitigation strategies powered by machine learning'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small teams and freelancers',
      features: [
        'Up to 5 team members',
        'Unlimited projects',
        'Basic AI features',
        'Mobile app access',
        'Email support',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing teams and agencies',
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Time tracking',
        'Resource management'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
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
      name: 'Alex Thompson',
      company: 'Software Development Agency',
      content: 'Our project delivery time improved by 40% with AI task prioritization. The predictive analytics are incredibly accurate.',
      rating: 5,
      avatar: 'AT'
    },
    {
      name: 'Maria Garcia',
      company: 'Marketing Agency',
      content: 'The smart team matching feature is a game-changer. It automatically assigns tasks to the right people every time.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'Robert Lee',
      company: 'Construction Company',
      content: 'Risk management features helped us avoid 3 major project delays. The AI insights are invaluable.',
      rating: 5,
      avatar: 'RL'
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-8h-8text-cyan-400" / />,
      title: '40% Faster Delivery',
      description: 'AI optimization reduces project completion time significantly'
    },
    {
      icon: <Target className="w-8h-8text-emerald-400" / />,
      title: '95% Accuracy',
      description: 'Predictive analytics with industry-leading accuracy rates'
    },
    {
      icon: <Users className="w-8h-8text-purple-400" / />,
      title: 'Team Productivity +60%',
      description: 'Smart task allocation maximizes team efficiency'
    },
    {
      icon: <Shield className="w-8h-8text-orange-400" / />,
      title: 'Risk Reduction 80%',
      description: 'Proactive risk management prevents project failures'
    }
  ]

  const integrations = [
    { name: 'Slack', icon: '💬' },
    { name: 'Microsoft Teams', icon: '👥' },
    { name: 'Jira', icon: '🎯' },
    { name: 'Asana', icon: '📋' },
    { name: 'Trello', icon: '📌' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Google Workspace', icon: '📧' },
    { name: 'Zoom', icon: '📹' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Notion', icon: '📝' }
  ]

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </div>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>AI Project Manager - Zion Tech Group | Intelligent Project Management</title>
        <meta name="description" content="Revolutionary AI-powered project management with smart task prioritization, predictive analytics, and automated workflows. Increase team productivity by 60%. Starting at $19/month." / / />
        <meta name="keywords" content="AI project management, smart task prioritization, predictive analytics, team collaboration, project automation, resource optimization" / / />
        <meta name="robots" content="index, follow" / / />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-project-manager" / />
      </Helmet>

      {/* Hero Section */}
    <>
      <section className="relative py-20px-4overflow-hidden" />
        <div className="absoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
        <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)]" / />
        <div className="relative max-w-7 xlmx-autotext-center">
        </div>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </div>
            <Calendar className="w-4h-4" / />
            <span>AI-Powered Project Management</span>
          </div>
          
          <h1 className="text-4 xl sm:text-6 xl md:text-7 xl font-bold text-whitemb-8leading-tight" />
            AI Project
    <>
            <br / />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Manager
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
            Transform your project management with AI-powered task prioritization, predictive analytics, 
            and intelligent automation. Deliver projects 40% faster with 95% accuracy.
          </p>
          
    <>
          <div className="flex flex-col sm:flex-row gap-6justify-centermb-16">
        </div>
            <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to="#pricing" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span>View Pricing</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
          </div>

          {/* Key Stats */}
    <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xlmx-auto">
        </div>
            <div className="text-center" />
              <div className="text-3 xl font-boldtext-cyan-400mb-2">40%</div>
              <div className="text-gray-300text-sm">Faster Delivery</div>
            <div className="text-center" />
              <div className="text-3 xl font-boldtext-purple-400mb-2">95%</div>
              <div className="text-gray-300text-sm">Prediction Accuracy</div>
            <div className="text-center" />
              <div className="text-3 xl font-boldtext-pink-400mb-2">60%</div>
              <div className="text-gray-300text-sm">Productivity Boost</div>
            <div className="text-center" />
              <div className="text-3 xl font-boldtext-emerald-400mb-2">10 K+</div>
              <div className="text-gray-300text-sm">Active Projects</div>
          </div>
      </section>

      {/* Benefits Section */}
    <>
      <section className="py-20px-4relative" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" / />
        <div className="relative max-w-7xlmx-auto">
        </div>
          <div className="text-centermb-16">
        </div>
            <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">AI Project Manager?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto" />
              Experience the future of project management with cutting-edge AI technology that works for your team.
    <>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </div>
            {benefits.map((benefit, index) => (
    <>
              <div key="{index}" className="text-centergroup" />
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 mx-auto group-hover:scale-110transition-transformduration-300">{benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{benefit.title}
                </h3>
                <p className="text-gray-300" />
                  {benefit.description}
    <>
                </p>
              </div>
            ))}
    <>
          </div>
      </section>

      {/* Features Section */}
    <>
      <section className="py-20px-4relative" />
        <div className="relative max-w-7xlmx-auto">
        </div>
          <div className="text-centermb-16">
        </div>
            <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Powerful Features for <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Smart Project Management</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto" />
              Everything you need to manage projects efficiently with AI-powered intelligence and automation.
    <>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </div>
            {features.map((feature, index) => (
    <>
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title}
                </h3>
                <p className="text-gray-300leading-relaxed" />
                  {feature.description}
    <>
                </p>
              </div>
            ))}
    <>
          </div>
      </section>

      {/* Integrations Section */}
    <>
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
        <div className="relative max-w-7xlmx-auto">
        </div>
          <div className="text-centermb-16">
        </div>
            <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Seamless <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Integrations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto" />
              Connect with your favorite tools and platforms for a unified project management experience.
    <>
            </p>
          </div>
          
          <div className="grid grid-cols-2md:grid-cols-5gap-8">
        </div>
            {integrations.map((integration, index) => (
    <>
              <div key="{index}" className="grouptext-center" />
                <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2 xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-allduration-300group-hover:scale-110">
        </div>
                  <span className="text-3xl">{integration.icon}</span>
                </div>
                <div className="text-gray-300group-hover:text-whitetransition-colors">{integration.name}
                </div>
            ))}
    <>
          </div>
      </section>

      {/* Pricing Section */}
    <>
      <section id="pricing" className="py-20px-4relative" />
        <div className="relative max-w-7xlmx-auto">
        </div>
          <div className="text-centermb-16">
        </div>
            <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto" />
              Choose the plan that fits your team size and needs. All plans include our core AI features.
    <>
            </p>
          </div>
          
          <div className="grid grid-cols-1md:grid-cols-3gap-8">
        </div>
            {pricingPlans.map((plan, index) => (
              <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2 xl ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: border-cyan-400/30'
              }`} />
                {plan.popular && (
    <>
                  <div className="absolute -top-4 left-1/2transform-translate-x-1/2">
        </div>
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                    </div>
                )}
                
    <>
                <div className="text-centermb-8">
        </div>
                  <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p className="text-gray-300text-smmb-4">{plan.description}</p>
                  <div className="flexitems-baselinejustify-center" />
                    <span className="text-5 xlfont-boldtext-cyan-400">{plan.price}</span>
                    <span className="text-gray-300ml-2">{plan.period}</span>
                  </div>
                
                <ul className="space-y-4mb-8" />
                  {plan.features.map((feature, featureIndex) => (
    <>
                    <li key="{featureIndex}" className="flexitems-centerspace-x-3" />
                      <CheckCircle className="w-5 h-5text-green-400flex-shrink-0" / />
                      <span className="text-gray-300">{feature}</span>
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
    <>
                </Link>
              </div>
            ))}
    <>
          </div>
      </section>

      {/* Testimonials Section */}
    <>
      <section className="py-20px-4relative" />
        <div className="relative max-w-7xlmx-auto">
        </div>
          <div className="text-centermb-16">
        </div>
            <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">10,000+</span> Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto" />
              See what our customers are saying about their success with our AI project manager.
    <>
            </p>
          </div>
          
          <div className="grid grid-cols-1md:grid-cols-3gap-8">
        </div>
            {testimonials.map((testimonial, index) => (
    <>
              <div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <div className="flexitems-centermb-4">
        </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar}
                  </div>
                  <div />
                    <div className="font-semiboldtext-white">{testimonial.name}</div>
                    <div className="text-gray-400text-sm">{testimonial.company}</div>
                </div>
                <div className="flexmb-4">
        </div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5text-yellow-400fill-current" / />
                  ))}
    <>
                </div>
                <p className="text-gray-300italic">"{testimonial.content}"</p>
              </div>
            ))}
    <>
          </div>
      </section>

      {/* CTA Section */}
    <>
      <section className="py-20px-4relative" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
        <div className="relative max-w-7xlmx-auto">
        </div>
          <div className="text-center" />
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
        </div>
              <div className="relativez-10">
        </div>
                <h2 className="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
                  Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Project Management?</span>
                </h2>
                
                <p className="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
                  Join thousands of teams already delivering projects 40% faster with our AI-powered project manager. 
                  Start your free trial today and experience the future of project management.
                </p>
                
    <>
                <div className="flex flex-col sm:flex-row gap-6justify-centermb-8">
        </div>
                  <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
                  </Link>
                  <Link to="#pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <span>View All Plans</span>
                    <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
                  </Link>
                </div>
                
    <>
                <div className="text-white/80text-sm">
        </div>
                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
    </>