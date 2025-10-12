import { Helmet } from 'react-helmet-async'
import { Clock, Timer, Trending Up, Bar Chart3, Zap, Check Circle, Arrow Right, Star, Target, Brain, Shield } from 'lucide-react';
import { Link } from 'react-router-dom'
import React from 'react';
import { Arrow Right, Bot, Rotate Ccw, Rotate Cw, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

const A I Time Tracker Page: React.F C = () => {
  const features = [
    {
      icon: <B rainclass Name="w-8h-8t e xt-c y an-400" />,
      title: 'A I Activity Recognition',
      description: 'Automatically detect and categorize work activities using A I to eliminate manual time entry.',
      benefits: ['Auto-detection', 'Smart categorization', 'Context awareness', 'Learning algorithms']
    },
    {
      icon: <T imerclass Name="w-8h-8t e xt-e m erald-400" />,
      title: 'Smart Time Tracking',
      description: 'A I-powered time tracking that learns your work patterns and suggests optimal time allocation.',
      benefits: ['Pattern learning', 'Optimal suggestions', 'Focus time detection', 'Break reminders']
    },
    {
      icon: <T rending Upclass Name="w-8h-8t e xt-p u rple-400" />,
      title: 'Productivity Analytics',
      description: 'Comprehensive analytics with A I insights to improve productivity and work-life balance.',
      benefits: ['Productivity metrics', 'Efficiency analysis', 'Distraction tracking', 'Goal setting']
    },
    {
      icon: <Z apclass Name="w-8h-8t e xt-r e d-400" />,
      title: 'Automated Reporting',
      description: 'Generate detailed time reports automatically with A I-powered insights and recommendations.',
      benefits: ['Auto reports', 'Client billing', 'Project insights', 'Team analytics']
    },
    {
      icon: <B ar Chart3 class Name="w-8h-8t e xt-o r ange-400" />,
      title: 'Project Management',
      description: 'A I-driven project time estimation and resource allocation for better project planning.',
      benefits: ['Time estimation', 'Resource planning', 'Deadline tracking', 'Budget monitoring']
    },
    {
      icon: <S hieldclass Name="w-8h-8t e xt-p i nk-400" />,
      title: 'Privacy Protection',
      description: 'Advanced privacy controls with local processing to protect sensitive work data.',
      benefits: ['Local processing', 'Data encryption', 'Privacy controls', 'G D P R compliance']
    }
  ]

  const pricing Plans = [
    {
      name: 'Individual',
      price: '$19',
      period: '/month',
      description: 'Perfect for freelancers and individual professionals',
      features: [
        'Unlimited time tracking',
        'Basic A I features',
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
        'Advanced A I features',
        'Team collaboration',
        'Project management',
        'Priority support',
        'A P I access'
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
        'Full A I suite',
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
      content: 'A I Time Tracker increased my productivity by 40%. The auto-detection feature is a game-changer.',
      rating: 5,
      avatar: 'A J'
    },
    {
      name: 'Maria Rodriguez',
      company: 'Project Manager',
      content: 'The project time estimation feature helped us deliver projects 20% faster with better accuracy.',
      rating: 5,
      avatar: 'M R'
    },
    {
      name: 'David Kim',
      company: 'Software Developer',
      content: 'Finally, a time tracker that actually understands my work patterns. Highly recommended!',
      rating: 5,
      avatar: 'D K'
    }
  ]

  const stats = [

    { number: '40%', label: 'Productivity Increase', icon: <T rending Upclass Name="w-6h-6t e xt-c y an-400" / /> },
    { number: '20%', label: 'Faster Delivery', icon: <T imerclass Name="w-6h-6t e xt-e m erald-400" / /> },
    { number: '95%', label: 'Accuracy Rate', icon: <T argetclass Name="w-6h-6t e xt-p u rple-400" / /> },
    { number: '50 K+', label: 'Hours Tracked', icon: <C lockclass Name="w-6h-6t e xt-o r ange-400" / /> }
  ]

  return (

      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Time Tracker - Smart Productivity Management | Zion Tech Group</t itle>
        <m eta name="description" content="Revolutionary A I-powered time tracking with activity recognition, productivity analytics, and automated reporting. Increase productivity by 40% and deliver projects 20% faster." / / />
        <m eta name="keywords" content="A I time tracking, productivity management, activity recognition, time analytics, project management, work optimization" / / />
        <m eta name="robots" content="index, follow" / / />
        <l inkrel="canonical" href="https://ziontechgroup.com/ai-time-tracker" />
      </H elmet>

      {/* Hero Section */}

      <s ection class Name="r e l a tive py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900via-indigo-900to-slate-900" />
        <d iv class Name="a b s o luteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.3)_0%,transparent_50%)]" / />
        <d iv class Name="a b s o luteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" / />
        <d iv class Name="r e l a tive max-w-7 xlmx-autotext-center">
        </d iv>
          <d iv class Name="i n l i ne-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-indigo-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-indigo-400/30">
        </d iv>
            <C lockclass Name="w-4h-4" / />
            <s pan>A I-Powered Time Management</s pan>
          </d iv>

          <h1 c lass Name="t e x t-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
            A I Time

            <b r / />
            <s pan class Name="b g-g r a dient-to-r from-indigo-400 via-cyan-400 to-blue-400bg-clip-texttext-transparent">Tracker Pro
            </s pan>
          </h1>

          <p c lass Name="t e x t-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
            Transform your productivity with A I-powered time tracking, 
            activity recognition, and intelligent insights that increase efficiency by 40%.
          </p>

          <d iv class Name="f l ex f l ex-col sm:flex-row gap-6justify-centermb-16">
        </d iv>
            <L ink to="/contact" class Name="g r o u p bg-gradient-to-r from-indigo-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-indigo-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40transformhover:scale-105" />
              <s pan>Start Free Trial</s pan>
              <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
            </L ink>
            <L ink to="#demo" class Name="g r o u p border-2 border-indigo-400 text-indigo-400 px-10 py-4 rounded-xl font-semibold hover:bg-indigo-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <s pan>Watch Demo</s pan>
              <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
            </L ink>
          </d iv>
      </s ection>

      {/* Stats Section */}

      <s ection class Name="p y-20p x-4bg-g r ay-900" />
        <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
          <d iv class Name="g r id g r id-cols-2md:grid-cols-4gap-8">
        </d iv>

            {stats.map((stat, index) => (

              <d ivkey="{index}" class Name="t e x t-center bg-white/5 backdrop-blur-sm rounded-2 xl p-6borderborder-white/10" />
                <d iv class Name="f l e x justify-centermb-4">{stat.icon}
                </d iv>
                <d iv class Name="t e xt-3 xl md:t e xt-4 xl font-boldtext-whitemb-2">{stat.number}
                </d iv>
                <d iv class Name="t e xt-g r ay-300text-sm">{stat.label}
                </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Features Section */}

      <s ection class Name="p y-20 p x-4 bg-g r adient-to-brfrom-slate-800/50to-indigo-900/50" />
        <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Intelligent <s pan class Name="b g-g r a dient-to-r from-indigo-400 to-cyan-400bg-clip-texttext-transparent">Features</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

              Our A I-powered time tracking platform uses machine learning to automatically 
              track activities, analyze productivity patterns, and provide actionable insights.

            </p>
          </d iv>

          <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
            {features.map((feature, index) => (

              <d ivkey="{index}" class Name="g r o u p bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <d iv class Name="f l ex i t ems-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </d iv>
                <h3 c lass Name="t e xt-2 xl f o nt-bold text-white mb-4group-hover:text-indigo-400transition-colors">{feature.title}
                </h3>
                <p c lass Name="t e xt-g r ay-300mb-6leading-relaxed" />

                  {feature.description}

                </p>
                <d iv class Name="s p a c e-y-2">
        </d iv>

                  {feature.benefits.map((benefit, benefit Index) => (

                    <d ivkey="{benefit Index}" class Name="f l ex i t ems-center space-x-2text-gray-400text-sm" />
                      <C heck Circleclass Name="w-4h-4t e xt-g r een-400" / />
                      <s pan>{benefit}</s pan>
                    </d iv>

                  ))}

                </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Pricing Section */}

      <s ection class Name="p y-20p x-4bg-g r ay-900" />
        <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Simple <s pan class Name="b g-g r a dient-to-r from-indigo-400 to-cyan-400bg-clip-texttext-transparent">Pricing</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

              Choose the perfect plan for your time tracking needs. All plans include our core A I features 
              with flexible options for individuals and teams.

            </p>
          </d iv>

          <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
            {pricing Plans.map((plan, index) => (
              <d ivkey="{index}" class Name="{`r e l a tive" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-indigo-400/50 shadow-2 xl shadow-indigo-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (

                  <d iv class Name="a b s o lute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                    <d iv class Name="b g-g r a dient-to-r from-indigo-500 to-cyan-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                    </d iv>

                )}

                <d iv class Name="t e x t-centermb-8">
        </d iv>
                  <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                  <p c lass Name="t e xt-g r ay-300mb-4">{plan.description}</p>
                  <d iv class Name="f l e x items-baselinejustify-center" />
                    <s pan class Name="t e xt-5 x l font-boldtext-white">{plan.price}</s pan>
                    <s pan class Name="t e xt-g r ay-400ml-2">{plan.period}</s pan>
                  </d iv>

                <d iv class Name="s p a c e-y-4mb-8">
        </d iv>
                  {plan.features.map((feature, feature Index) => (

                    <d ivkey="{feature Index}" class Name="f l e x items-centerspace-x-3" />
                      <C heck Circleclass Name="w-5 h-5t e xt-g r een-400flex-shrink-0" / />
                      <s pan class Name="t e xt-g r ay-300">{feature}</s pan>
                    </d iv>

                  ))}
                </d iv>
                
                <L ink 
                  to="/contact" 
                  class Name="{`b l o c k" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-cyan-600 text-white hover:from-indigo-600 hover:to-cyan-700 shadow-lg shadow-indigo-500/25'
                      : 'border-2 border-indigo-400 text-indigo-400 hover: bg-indigo-400 hover:text-gray-900'
                  }`}
                  />Get Started

                </L ink>
              </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Testimonials Section */}

      <s ection class Name="p y-20 p x-4 bg-g r adient-to-brfrom-indigo-900/50to-purple-900/50" />
        <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Trusted by <s pan class Name="b g-g r a dient-to-r from-indigo-400 to-purple-400bg-clip-texttext-transparent">Professionals</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

              See how A I Time Tracker is transforming productivity for professionals and teams worldwide.

            </p>
          </d iv>

          <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
            {testimonials.map((testimonial, index) => (

              <d ivkey="{index}" class Name="b g-w h i te/10 backdrop-blur-lg rounded-2 xl p-8borderborder-white/20" />
                <d iv class Name="f l e x items-centermb-4">
        </d iv>
                  <d iv class Name="w-12 h-12 b g-g r a dient-to-r from-indigo-500 to-cyan-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar}
                  </d iv>
                  <d iv />
                    <h4 c lass Name="t e xt-w h itefont-semibold">{testimonial.name}</h4>
                    <p c lass Name="t e xt-g r ay-400text-sm">{testimonial.company}</p>
                  </d iv>
                <d iv class Name="f l e x items-centermb-4">
        </d iv>

                  {[...Array(testimonial.rating)].map((_, i) => (
                    <S tarkey="{i}" class Name="w-5 h-5t e xt-y e llow-400fill-current" />
                  ))}

                </d iv>
                <p c lass Name="t e xt-g r ay-300italic">"{testimonial.content}"</p>
              </d iv>

            ))}

          </d iv>
      </s ection>

      {/* C T A Section */}

      <s ection class Name="p y-20 p x-4 bg-g r adient-to-r from-indigo-600via-cyan-600to-blue-600" />
        <d iv class Name="m a x-w-7 x l mx-autotext-center">
        </d iv>
          <h2 c lass Name="t e xt-4 xl sm:t e xt-5 xl md:text-6 xl font-boldtext-white mb-6" />

            Ready to Boost Your

            <b r / />
            <s pan class Name="b g-g r a dient-to-r from-indigo-300 to-cyan-300bg-clip-texttext-transparent">Productivity?
            </s pan>
          </h2>
          <p c lass Name="t e xt-xl sm:t e xt-2 xl text-white/90 mb-8 max-w-4xlmx-auto" />

            Join thousands of professionals already increasing productivity and improving work-life balance with A I Time Tracker. 
            Start your free trial today - no credit card required.

          </p>
          <d iv class Name="f l ex f l ex-col sm:flex-rowgap-6justify-center">
        </d iv>
            <L ink to="/contact" class Name="g r o u p bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
              <s pan>Start Free Trial</s pan>
              <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
            </L ink>
            <L ink to="/pricing" class Name="g r o u p border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <s pan>View All Plans</s pan>
              <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
            </L ink>
          </d iv>
      </s ection>

  )
}

export default A I Time Tracker Page;
