import React from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot} from 'lucide-react';
import { ArrowRight, Calendar, Bar Chart3, Users, Zap, CheckCircle, Target, Trending Up, Smartphone, Shield, Bot, Star, Smartphone as Mobile } from 'lucide-react';

export default function A IProject Manager Page() {
  const features = [
    {
      icon: <B ot class Name="w-6h-6t ext-cyan-400" />,
      title: 'A I Task Prioritization',
      description: 'Intelligent task ranking based on deadlines, dependencies, and team capacity'
    },
    {
      icon: <B ar Chart3 class Name="w-6h-6t ext-emerald-400" />,
      title: 'Predictive Analytics',
      description: 'A I-powered project forecasting and risk assessment with 95% accuracy'
    },
    {
      icon: <U sers class Name="w-6h-6t ext-purple-400" />,
      title: 'Smart Team Matching',
      description: 'A I algorithms match tasks to team members based on skills and availability'
    },
    {
      icon: <Z ap class Name="w-6h-6t ext-orange-400" />,
      title: 'Automated Workflows',
      description: 'Set up intelligent workflows that adapt and optimize based on project patterns'
    },
    {
      icon: <T arget class Name="w-6h-6t ext-pink-400" />,
      title: 'Resource Optimization',
      description: 'A I-driven resource allocation and capacity planning for maximum efficiency'
    },
    {
      icon: <S hield class Name="w-6h-6t ext-red-400" />,
      title: 'Risk Management',
      description: 'Proactive risk identification and mitigation strategies powered by machine learning'
    }
  ]

  const pricing Plans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small teams and freelancers',
      features: [
        'Up to 5 team members',
        'Unlimited projects',
        'Basic A I features',
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
        'Advanced A I features',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'A PI access',
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
        'All A I features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'S LA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'Software Development Agency',
      content: 'Our project delivery time improved by 40% with A I task prioritization. The predictive analytics are incredibly accurate.',
      rating: 5,
      avatar: 'A T'
    },
    {
      name: 'Maria Garcia',
      company: 'Marketing Agency',
      content: 'The smart team matching feature is a game-changer. It automatically assigns tasks to the right people every time.',
      rating: 5,
      avatar: 'M G'
    },
    {
      name: 'Robert Lee',
      company: 'Construction Company',
      content: 'Risk management features helped us avoid 3 major project delays. The A I insights are invaluable.',
      rating: 5,
      avatar: 'R L'
    }
  ]

  const benefits = [
    {
      icon: <T rending Up class Name="w-8h-8t ext-cyan-400" />,
      title: '40% Faster Delivery',
      description: 'A I optimization reduces project completion time significantly'
    },
    {
      icon: <T arget class Name="w-8h-8t ext-emerald-400" />,
      title: '95% Accuracy',
      description: 'Predictive analytics with industry-leading accuracy rates'
    },
    {
      icon: <U sers class Name="w-8h-8t ext-purple-400" />,
      title: 'Team Productivity +60%',
      description: 'Smart task allocation maximizes team efficiency'
    },
    {
      icon: <S hield class Name="w-8h-8t ext-orange-400" />,
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
    { name: 'Git Hub', icon: '🐙' },
    { name: 'Google Workspace', icon: '📧' },
    { name: 'Zoom', icon: '📹' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Notion', icon: '📝' }
  ]

  return (

    <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </d iv>
      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Project Manager - Zion Tech Group | Intelligent Project Management</t itle>
        <m eta name="description" content="Revolutionary A I-powered project management with smart task prioritization, predictive analytics, and automated workflows. Increase team productivity by 60%. Starting at $19/month." / / />
        <m eta name="keywords" content="A I project management, smart task prioritization, predictive analytics, team collaboration, project automation, resource optimization" / / />
        <m eta name="robots" content="index, follow" / / />
        <l ink rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-project-manager" />
      </H elmet>

      {/* Hero Section */}

      <s ection class Name="r elative py-20px-4overflow-hidden" />
        <d iv class Name="a bsoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
        <d iv class Name="a bsoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)]" / />
        <d iv class Name="r elative max-w-7 xlmx-autotext-center">
        </d iv>
          <d iv class Name="i nline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </d iv>
            <C alendar class Name="w-4h-4" / />
            <s pan>A I-Powered Project Management</s pan>
          </d iv>
          
          <h1 c lass Name="t ext-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
            A I Project

            <b r / />
            <s pan class Name="b g-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Manager
            </s pan>
          </h1>
          
          <p c lass Name="t ext-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
            Transform your project management with A I-powered task prioritization, predictive analytics, 
            and intelligent automation. Deliver projects 40% faster with 95% accuracy.
          </p>

          <d iv class Name="f lex flex-col sm:flex-row gap-6justify-centermb-16">
        </d iv>
            <L ink to="/contact" class Name="g roup bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <s pan>Start Free Trial</s pan>
              <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
            </L ink>
            <L ink to="#pricing" class Name="g roup border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <s pan>View Pricing</s pan>
              <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
            </L ink>
          </d iv>

          {/* Key Stats */}

          <d iv class Name="g rid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xlmx-auto">
        </d iv>
            <d iv class Name="t ext-center" />
              <d iv class Name="t ext-3 xl font-boldtext-cyan-400mb-2">40%</d iv>
              <d iv class Name="t ext-gray-300text-sm">Faster Delivery</d iv>
            <d iv class Name="t ext-center" />
              <d iv class Name="t ext-3 xl font-boldtext-purple-400mb-2">95%</d iv>
              <d iv class Name="t ext-gray-300text-sm">Prediction Accuracy</d iv>
            <d iv class Name="t ext-center" />
              <d iv class Name="t ext-3 xl font-boldtext-pink-400mb-2">60%</d iv>
              <d iv class Name="t ext-gray-300text-sm">Productivity Boost</d iv>
            <d iv class Name="t ext-center" />
              <d iv class Name="t ext-3 xl font-boldtext-emerald-400mb-2">10 K+</d iv>
              <d iv class Name="t ext-gray-300text-sm">Active Projects</d iv>
          </d iv>
      </s ection>

      {/* Benefits Section */}

      <s ection class Name="p y-20px-4relative" />
        <d iv class Name="a bsolute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" / />
        <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Why Choose Our <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">A I Project Manager?</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto">
              Experience the future of project management with cutting-edge A I technology that works for your team.

            </p>
          </d iv>
          
          <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
            {benefits.map((benefit, index) => (

              <d iv key="{index}" class Name="t ext-centergroup" />
                <d iv class Name="f lex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 mx-auto group-hover:scale-110transition-transformduration-300">{benefit.icon}
                </d iv>
                <h3 c lass Name="t ext-xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{benefit.title}
                </h3>
                <p c lass Name="t ext-gray-300" />
                  {benefit.description}

                </p>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Features Section */}

      <s ection class Name="p y-20px-4relative" />
        <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Powerful Features for <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Smart Project Management</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto">
              Everything you need to manage projects efficiently with A I-powered intelligence and automation.

            </p>
          </d iv>
          
          <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
            {features.map((feature, index) => (

              <d iv key="{index}" class Name="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <d iv class Name="f lex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </d iv>
                <h3 c lass Name="t ext-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title}
                </h3>
                <p c lass Name="t ext-gray-300leading-relaxed" />
                  {feature.description}

                </p>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Integrations Section */}

      <s ection class Name="p y-20 px-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
        <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Seamless <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Integrations</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto">
              Connect with your favorite tools and platforms for a unified project management experience.

            </p>
          </d iv>
          
          <d iv class Name="g rid grid-cols-2md:grid-cols-5gap-8">
        </d iv>
            {integrations.map((integration, index) => (

              <d iv key="{index}" class Name="g rouptext-center" />
                <d iv class Name="w-20 h-20 b g-white/10 backdrop-blur-lg rounded-2 xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-allduration-300group-hover:scale-110">
        </d iv>
                  <s pan class Name="t ext-3xl">{integration.icon}</s pan>
                </d iv>
                <d iv class Name="t ext-gray-300group-hover:text-whitetransition-colors">{integration.name}
                </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Pricing Section */}

      <s ection id="pricing" class Name="p y-20px-4relative" />
        <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Simple, Transparent <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto">
              Choose the plan that fits your team size and needs. All plans include our core A I features.

            </p>
          </d iv>
          
          <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
            {pricing Plans.map((plan, index) => (
              <d iv key="{index}" class Name="{`r elative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2 xl ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: border-cyan-400/30'
              }`} />
                {plan.popular && (

                  <d iv class Name="a bsolute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                    <d iv class Name="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                    </d iv>
                )}

                <d iv class Name="t ext-centermb-8">
        </d iv>
                  <h3 c lass Name="t ext-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p c lass Name="t ext-gray-300text-smmb-4">{plan.description}</p>
                  <d iv class Name="f lexitems-baselinejustify-center" />
                    <s pan class Name="t ext-5 xlfont-boldtext-cyan-400">{plan.price}</s pan>
                    <s pan class Name="t ext-gray-300ml-2">{plan.period}</s pan>
                  </d iv>
                
                <u l class Name="s pace-y-4mb-8" />
                  {plan.features.map((feature, feature Index) => (

                    <l i key="{feature Index}" class Name="f lexitems-centerspace-x-3" />
                      <C heck Circle class Name="w-5 h-5t ext-green-400flex-shrink-0" / />
                      <s pan class Name="t ext-gray-300">{feature}</s pan>
                    </l i>
                  ))}
                </u l>
                
                <L ink 
                  to="/contact"
                  class Name="{`b lock" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />Get Started

                </L ink>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* Testimonials Section */}

      <s ection class Name="p y-20px-4relative" />
        <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Trusted by <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">10,000+</s pan> Teams
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto">
              See what our customers are saying about their success with our A I project manager.

            </p>
          </d iv>
          
          <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
            {testimonials.map((testimonial, index) => (

              <d iv key="{index}" class Name="b g-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <d iv class Name="f lexitems-centermb-4">
        </d iv>
                  <d iv class Name="w-12 h-12 b g-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar}
                  </d iv>
                  <d iv />
                    <d iv class Name="f ont-semiboldtext-white">{testimonial.name}</d iv>
                    <d iv class Name="t ext-gray-400text-sm">{testimonial.company}</d iv>
                </d iv>
                <d iv class Name="f lexmb-4">
        </d iv>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <S tar key="{i}" class Name="w-5 h-5t ext-yellow-400fill-current" />
                  ))}

                </d iv>
                <p c lass Name="t ext-gray-300italic">"{testimonial.content}"</p>
              </d iv>
            ))}

          </d iv>
      </s ection>

      {/* C TA Section */}

      <s ection class Name="p y-20px-4relative" />
        <d iv class Name="a bsolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
        <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-center" />
            <d iv class Name="b g-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
        </d iv>
              <d iv class Name="r elativez-10">
        </d iv>
                <h2 c lass Name="t ext-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
                  Ready to Transform Your <s pan class Name="b g-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Project Management?</s pan>
                </h2>
                
                <p c lass Name="t ext-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
                  Join thousands of teams already delivering projects 40% faster with our A I-powered project manager. 
                  Start your free trial today and experience the future of project management.
                </p>

                <d iv class Name="f lex flex-col sm:flex-row gap-6justify-centermb-8">
        </d iv>
                  <L ink to="/contact" class Name="g roup bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <s pan>Start Free Trial</s pan>
                    <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
                  </L ink>
                  <L ink to="#pricing" class Name="g roup border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <s pan>View All Plans</s pan>
                    <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
                  </L ink>
                </d iv>

                <d iv class Name="t ext-white/80text-sm">
        </d iv>
                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </d iv>
            </d iv>
        </d iv>
      </s ection>
    </d iv>
  );
}
