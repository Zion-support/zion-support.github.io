import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot} from 'lucide-react';

export default function AIProjectManagerPage() {
  const features = [
    {
      icon: <Bot className="w-5 h-5ml-2" />,
      title: 'AI Task Prioritization',
      description: 'Intelligent task ranking based on deadlines, dependencies, and team capacity'
    },
    {
      icon: <BarChart3 className="w-5 h-5ml-2" />,
      title: 'Predictive Analytics',
      description: 'AI-powered project forecasting and risk assessment with 95% accuracy'
    },
    {
      icon: <Users className="w-5 h-5ml-2" />,
      title: 'Smart Team Matching',
      description: 'AI algorithms match tasks to team members based on skills and availability'
    },
    {
      icon: <Zap className="w-5 h-5ml-2" />,
      title: 'Automated Workflows',
      description: 'Set up intelligent workflows that adapt and optimize based on project patterns'
    },
    {
      icon: <Target className="w-5 h-5ml-2" />,
      title: 'Resource Optimization',
      description: 'AI-driven resource allocation and capacity planning for maximum efficiency'
    },
    {
      icon: <Shield className="w-5 h-5ml-2" />,
=======

import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight, Bot} from 'lucide-react';

import { ArrowRight, Calendar, BarChart3, Users, Zap, CheckCircle, Target, TrendingUp, Smartphone, Shield, Bot, Star, Smartphone as Mobile } from 'lucide-react';

export default function AIProjectManagerPage() {
  const features = [
      icon: <Bot className="w-6h-6text-cyan-400" />,
      title: 'AI Task Prioritization',
      description: 'Intelligent task ranking based on deadlines, dependencies, and team capacity'
    },
      icon: <BarChart3 className="w-6h-6text-emerald-400" />,
      title: 'Predictive Analytics',
      description: 'AI-powered project forecasting and risk assessment with 95% accuracy'
    },
      icon: <Users className="w-6h-6text-purple-400" />,
      title: 'Smart Team Matching',
      description: 'AI algorithms match tasks to team members based on skills and availability'
    },
      icon: <Zap className="w-6h-6text-orange-400" />,
      title: 'Automated Workflows',
      description: 'Set up intelligent workflows that adapt and optimize based on project patterns'
    },
      icon: <Target className="w-6h-6text-pink-400" />,
      title: 'Resource Optimization',
      description: 'AI-driven resource allocation and capacity planning for maximum efficiency'
    },
      icon: <Shield className="w-6h-6text-red-400" />,
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
      title: 'Risk Management',
      description: 'Proactive risk identification and mitigation strategies powered by machine learning'
  ]

  const pricingPlans = [
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
  ]

  const testimonials = [
      name: 'Alex Thompson',
      company: 'Software Development Agency',
      content: 'Our project delivery time improved by 40% with AI task prioritization. The predictive analytics are incredibly accurate.',
      rating: 5,
      avatar: 'AT'
    },
      name: 'Maria Garcia',
      company: 'Marketing Agency',
      content: 'The smart team matching feature is a game-changer. It automatically assigns tasks to the right people every time.',
      rating: 5,
      avatar: 'MG'
    },
      name: 'Robert Lee',
      company: 'Construction Company',
      content: 'Risk management features helped us avoid 3 major project delays. The AI insights are invaluable.',
      rating: 5,
      avatar: 'RL'
  ]

  const benefits = [
<<<<<<< HEAD
    {
      icon: <TrendingUp className="w-5 h-5ml-2" />,
      title: '40% Faster Delivery',
      description: 'AI optimization reduces project completion time significantly'
    },
    {
      icon: <Target className="w-5 h-5ml-2" />,
      title: '95% Accuracy',
      description: 'Predictive analytics with industry-leading accuracy rates'
    },
    {
      icon: <Users className="w-5 h-5ml-2" />,
      title: 'Team Productivity +60%',
      description: 'Smart task allocation maximizes team efficiency'
    },
    {
      icon: <Shield className="w-5 h-5ml-2" />,
=======
      icon: <TrendingUp className="w-8h-8text-cyan-400" />,
      title: '40% Faster Delivery',
      description: 'AI optimization reduces project completion time significantly'
    },
      icon: <Target className="w-8h-8text-emerald-400" />,
      title: '95% Accuracy',
      description: 'Predictive analytics with industry-leading accuracy rates'
    },
      icon: <Users className="w-8h-8text-purple-400" />,
      title: 'Team Productivity +60%',
      description: 'Smart task allocation maximizes team efficiency'
    },
      icon: <Shield className="w-8h-8text-orange-400" />,
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
      title: 'Risk Reduction 80%',
      description: 'Proactive risk management prevents project failures'
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
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title />AI Project Manager - Zion Tech Group | Intelligent Project Management</title>
        <meta name="description" content="Revolutionary AI-powered project management with smart task prioritization, predictive analytics, and automated workflows. Increase team productivity by 60%. Starting at $19/month." />
        <meta name="keywords" content="AI project management, smart task prioritization, predictive analytics, team collaboration, project automation, resource optimization" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-project-manager"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <Calendar className="w-5 h-5ml-2" />
            <span />AI-Powered Project Management</span>
          </div>
          
          <h1 className="w-5 h-5ml-2" />
            AI Project
            <br />
            <span className="w-5 h-5ml-2" />Manager
            </span>
          </h1>
          
          <p className="w-5 h-5ml-2">Transform your project management with AI-powered task prioritization, predictive analytics, 
            and intelligent automation. Deliver projects 40% faster with 95% accuracy.
          </p>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5 h-5ml-2" />
            </Link>
            <Link to="#pricing" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span />View Pricing</span>
              <ArrowRight className="w-5 h-5ml-2" />
            </Link>
          </div>

          {/* Key Stats */}
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">40%</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Faster Delivery</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">95%</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Prediction Accuracy</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">60%</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Productivity Boost</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">10 K+</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Active Projects</div>
          </div>
      </section>

      {/* Benefits Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Why Choose Our <span className="w-5 h-5ml-2" />AI Project Manager?</span>
            </h2>
            <p className="w-5 h-5ml-2">Experience the future of project management with cutting-edge AI technology that works for your team.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {benefits.map((benefit, index) => (
              <div key="{index}" className="text-centergroup" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{benefit.icon}
                </div>
                <h3 className="w-5 h-5ml-2" />{benefit.title}
                </h3>
                <p className="w-5 h-5ml-2">{benefit.description}
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Powerful Features for <span className="w-5 h-5ml-2" />Smart Project Management</span>
            </h2>
            <p className="w-5 h-5ml-2">Everything you need to manage projects efficiently with AI-powered intelligence and automation.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {features.map((feature, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                </div>
                <h3 className="w-5 h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5 h-5ml-2">{feature.description}
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* Integrations Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Seamless <span className="w-5 h-5ml-2" />Integrations</span>
            </h2>
            <p className="w-5 h-5ml-2">Connect with your favorite tools and platforms for a unified project management experience.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {integrations.map((integration, index) => (
              <div key="{index}" className="group text-center" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <span className="w-5 h-5ml-2" />{integration.icon}</span>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{integration.name}
                </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20px-4relative" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Simple, Transparent <span className="w-5 h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5 h-5ml-2">Choose the plan that fits your team size and needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {pricingPlans.map((plan, index) => (
              <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2 xl ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: border-cyan-400/30'
              }`} />
                {plan.popular && (
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Most Popular
                    </div>
                )}
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <h3 className="w-5 h-5ml-2" />{plan.name}</h3>
                  <p className="w-5 h-5ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="w-5 h-5ml-2" />{plan.price}</span>
                    <span className="w-5 h-5ml-2" />{plan.period}</span>
                  </div>
                
                <ul className="w-5 h-5ml-2" />
                  {plan.features.map((feature, featureIndex) => (
                    <li key="{featureIndex}" className="flex items-centerspace-x-3" />
                      <CheckCircle className="w-5 h-5ml-2" />
                      <span className="w-5 h-5ml-2" />{feature}</span>
                    </li>
=======

        <title>5G Data Analytics - Zion Tech Group</title>
        <title>AI Project Manager - Zion Tech Group | Intelligent Project Management</title>

      {/* Hero Section */}
    
            <span>AI-Powered Project Management</span>

            AI Project
    
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Manager
          
            Transform your project management with AI-powered task prioritization, predictive analytics, 
            and intelligent automation. Deliver projects 40% faster with 95% accuracy.

              <span>Start Free Trial</span>
              <span>View Pricing</span>

          {/* Key Stats */}

              <div className="text-3 xl font-boldtext-cyan-400mb-2">40%</div>
              <div className="text-gray-300text-sm">Faster Delivery</div>
              <div className="text-3 xl font-boldtext-purple-400mb-2">95%</div>
              <div className="text-gray-300text-sm">Prediction Accuracy</div>
              <div className="text-3 xl font-boldtext-pink-400mb-2">60%</div>
              <div className="text-gray-300text-sm">Productivity Boost</div>
              <div className="text-3 xl font-boldtext-emerald-400mb-2">10 K+</div>
              <div className="text-gray-300text-sm">Active Projects</div>

      {/* Benefits Section */}
    
              Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">AI Project Manager?</span>

              Experience the future of project management with cutting-edge AI technology that works for your team.

 (
    
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 mx-auto group-hover:scale-110transition-transformduration-300">{benefit.icon}

                <h3 className="text-xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{benefit.title}
                  {benefit.description}
    
            ))}

      {/* Features Section */}
    
              Powerful Features for <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Smart Project Management</span>

              Everything you need to manage projects efficiently with AI-powered intelligence and automation.

 (
    
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}

                <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title}
                  {feature.description}
    
            ))}

      {/* Integrations Section */}
    
              Seamless <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Integrations</span>

              Connect with your favorite tools and platforms for a unified project management experience.

 (
    
                  <span className="text-3xl">{integration.icon}</span>
                <div className="text-gray-300group-hover:text-whitetransition-colors">{integration.name}
            ))}

      {/* Pricing Section */}
    
              Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</span>

              Choose the plan that fits your team size and needs. All plans include our core AI features.

 (
                {plan.popular && (

                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                )}

                  <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p className="text-gray-300text-smmb-4">{plan.description}</p>
                    <span className="text-5 xlfont-boldtext-cyan-400">{plan.price}</span>
                    <span className="text-gray-300ml-2">{plan.period}</span>

 (

                      <span className="text-gray-300">{feature}</span>

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                  ))}

                  to="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
<<<<<<< HEAD
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Trusted by <span className="w-5 h-5ml-2" />10,000+</span> Teams
            </h2>
            <p className="w-5 h-5ml-2">See what our customers are saying about their success with our AI project manager.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {testimonials.map((testimonial, index) => (
              <div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.avatar}
                  </div>
                  <div />
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.name}</div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.company}</div>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5te xt-yellow-400fill-current"  />
                  ))}
                </div>
                <p className="w-5 h-5ml-2">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <h2 className="w-5 h-5ml-2" />
                  Ready to Transform Your <span className="w-5 h-5ml-2" />Project Management?</span>
                </h2>
                
                <p className="w-5 h-5ml-2">Join thousands of teams already delivering projects 40% faster with our AI-powered project manager. 
                  Start your free trial today and experience the future of project management.
                </p>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <span />Start Free Trial</span>
                    <ArrowRight className="w-5 h-5ml-2" />
                  </Link>
                  <Link to="#pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <span />View All Plans</span>
                    <ArrowRight className="w-5 h-5ml-2" />
                  </Link>
                </div>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <p />✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
=======
Get Started
    
            ))}

      {/* Testimonials Section */}
    
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">10,000+</span> Teams

              See what our customers are saying about their success with our AI project manager.

 (
    
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar}
                    <div className="font-semiboldtext-white">{testimonial.name}</div>
                    <div className="text-gray-400text-sm">{testimonial.company}</div>

 (
                  ))}

                <p className="text-gray-300italic">"{testimonial.content}"</p>

            ))}

      {/* CTA Section */}
    
                  Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Project Management?</span>
                
                  Join thousands of teams already delivering projects 40% faster with our AI-powered project manager. 
                  Start your free trial today and experience the future of project management.

                    <span>Start Free Trial</span>
                    <span>View All Plans</span>

                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>

  );
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
