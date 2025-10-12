import { Helmet } from 'react-helmet-async'
import { Calendar, Share2, Trending Up, Bar Chart3, Zap, CheckCircle, ArrowRight, Star, Clock, Globe, Brain } from 'lucide-react';
import { Link } from 'react-router-dom'
import React from 'react';
import { Share2, ArrowRight} from 'lucide-react';
import { Link } from 'react-router-dom';

const A ISocial Scheduler Page: React.F C = () => {
  const features = [
    {
      icon: <B rain class Name="w-8h-8t ext-cyan-400" />,
      title: 'A I Content Generation',
      description: 'Generate engaging social media posts using A I that understands your brand voice and audience preferences.',
      benefits: ['Brand voice training', 'Audience analysis', 'Content optimization', 'Multi-platform adaptation']
    },
    {
      icon: <C alendar class Name="w-8h-8t ext-emerald-400" />,
      title: 'Smart Scheduling',
      description: 'A I determines optimal posting times based on your audience activity patterns and engagement data.',
      benefits: ['Optimal timing', 'Audience insights', 'Engagement prediction', 'Cross-platform sync']
    },
    {
      icon: <T rending Up class Name="w-8h-8t ext-purple-400" />,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics with A I-powered insights to improve your social media strategy.',
      benefits: ['Engagement metrics', 'R OI tracking', 'Trend analysis', 'Competitor insights']
    },
    {
      icon: <S hare2 class Name="w-8h-8t ext-red-400" />,
      title: 'Multi-Platform Management',
      description: 'Manage all your social media accounts from one dashboard with platform-specific optimization.',
      benefits: ['Unified dashboard', 'Platform optimization', 'Bulk posting', 'Content adaptation']
    },
    {
      icon: <Z ap class Name="w-8h-8t ext-orange-400" />,
      title: 'Automated Engagement',
      description: 'A I-powered auto-responses and engagement tools to maintain active social media presence.',
      benefits: ['Auto-responses', 'Comment management', 'Hashtag optimization', 'Community building']
    },
    {
      icon: <B ar Chart3 class Name="w-8h-8t ext-pink-400" />,
      title: 'Campaign Management',
      description: 'Plan, execute, and track social media campaigns with A I-driven recommendations.',
      benefits: ['Campaign planning', 'A/B testing', 'Performance tracking', 'Budget optimization']
    }
  ]

  const pricing Plans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        'Up to 3 social accounts',
        '50 posts per month',
        'Basic A I content generation',
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
        'Advanced A I features',
        'Team collaboration',
        'Priority support',
        'A PI access'
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
        'Custom A I training'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Maria Garcia',
      company: 'Digital Marketing Agency',
      content: 'A I Social Scheduler increased our client engagement by 150%. The A I content generation is incredibly effective.',
      rating: 5,
      avatar: 'M G'
    },
    {
      name: 'Tom Anderson',
      company: 'E-commerce Brand',
      content: 'The optimal timing feature alone increased our reach by 200%. Best social media tool we've ever used.',
      rating: 5,
      avatar: 'T A'
    },
    {
      name: 'Sarah Kim',
      company: 'Content Creator',
      content: 'Saves me 10+ hours per week on content planning. The A I understands my brand voice perfectly.',
      rating: 5,
      avatar: 'S K'
    }
  ]

  const stats = [

    { number: '150%', label: 'Engagement Increase', icon: <T rending Up class Name="w-6h-6t ext-cyan-400" / /> },
    { number: '200%', label: 'Reach Improvement', icon: <G lobe class Name="w-6h-6t ext-emerald-400" / /> },
    { number: '10 hrs', label: 'Time Saved/Week', icon: <C lock class Name="w-6h-6t ext-purple-400" / /> },
    { number: '50 K+', label: 'Posts Scheduled', icon: <C alendar class Name="w-6h-6t ext-orange-400" / /> }
  ]

  return (

      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Social Scheduler - Smart Social Media Management | Zion Tech Group</t itle>
        <m eta name="description" content="Revolutionary A I-powered social media management with content generation, smart scheduling, and performance analytics. Increase engagement by 150% and save 10+ hours per week." / / />
        <m eta name="keywords" content="A I social media scheduler, social media automation, content generation, social media analytics, social media management, A I content creation" / / />
        <m eta name="robots" content="index, follow" / / />
        <l ink rel="canonical" href="https://ziontechgroup.com/ai-social-scheduler" />
      </H elmet>

      {/* Hero Section */}

      <s ection class Name="r elative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900via-pink-900to-slate-900" />
        <d iv class Name="a bsoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.3)_0%,transparent_50%)]" / />
        <d iv class Name="a bsoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" / />
        <d iv class Name="r elative max-w-7 xlmx-autotext-center">
        </d iv>
          <d iv class Name="i nline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-pink-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-pink-400/30">
        </d iv>
            <S hare2 class Name="w-4h-4" / />
            <s pan>A I-Powered Social Media Management</s pan>
          </d iv>

          <h1 c lass Name="t ext-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
            A I Social

            <b r / />
            <s pan class Name="b g-gradient-to-r from-pink-400 via-purple-400 to-cyan-400bg-clip-texttext-transparent">Scheduler Pro
            </s pan>
          </h1>

          <p c lass Name="t ext-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
            Transform your social media presence with A I-powered content generation, 
            smart scheduling, and performance analytics that increase engagement by 150%.
          </p>

          <d iv class Name="f lex flex-col sm:flex-row gap-6justify-centermb-16">
        </d iv>
            <L ink to="/contact" class Name="g roup bg-gradient-to-r from-pink-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40transformhover:scale-105" />
              <s pan>Start Free Trial</s pan>
              <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
            </L ink>
            <L ink to="#demo" class Name="g roup border-2 border-pink-400 text-pink-400 px-10 py-4 rounded-xl font-semibold hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <s pan>Watch Demo</s pan>
              <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
            </L ink>
          </d iv>
      </s ection>

      {/* Stats Section */}

      <s ection class Name="p y-20px-4bg-gray-900" />
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
          <d iv class Name="g rid grid-cols-2md:grid-cols-4gap-8">
        </d iv>

            {stats.map((stat, index) => (

              <d iv key="{index}" class Name="t ext-center bg-white/5 backdrop-blur-sm rounded-2 xl p-6borderborder-white/10" />
                <d iv class Name="f lexjustify-centermb-4">{stat.icon}
                </d iv>
                <d iv class Name="t ext-3 xl md:text-4 xl font-boldtext-whitemb-2">{stat.number}
                </d iv>
                <d iv class Name="t ext-gray-300text-sm">{stat.label}
                </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Features Section */}

      <s ection class Name="p y-20 px-4 bg-gradient-to-brfrom-slate-800/50to-pink-900/50" />
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Powerful <s pan class Name="b g-gradient-to-r from-pink-400 to-cyan-400bg-clip-texttext-transparent">Features</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

              Our A I-powered social media scheduler uses advanced machine learning to create, 
              schedule, and optimize your social media content across all platforms.

            </p>
          </d iv>

          <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
            {features.map((feature, index) => (

              <d iv key="{index}" class Name="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <d iv class Name="f lex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </d iv>
                <h3 c lass Name="t ext-2 xl font-bold text-white mb-4group-hover:text-pink-400transition-colors">{feature.title}
                </h3>
                <p c lass Name="t ext-gray-300mb-6leading-relaxed" />

                  {feature.description}

                </p>
                <d iv class Name="s pace-y-2">
        </d iv>

                  {feature.benefits.map((benefit, benefit Index) => (

                    <d iv key="{benefit Index}" class Name="f lex items-center space-x-2text-gray-400text-sm" />
                      <C heck Circle class Name="w-4h-4t ext-green-400" / />
                      <s pan>{benefit}</s pan>
                    </d iv>

                  ))}

                </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Pricing Section */}

      <s ection class Name="p y-20px-4bg-gray-900" />
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Affordable <s pan class Name="b g-gradient-to-r from-pink-400 to-cyan-400bg-clip-texttext-transparent">Pricing</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

              Choose the perfect plan for your social media management needs. All plans include our core A I features 
              with flexible options for businesses of all sizes.

            </p>
          </d iv>

          <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
            {pricing Plans.map((plan, index) => (
              <d iv key="{index}" class Name="{`r elative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-pink-400/50 shadow-2 xl shadow-pink-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (

                  <d iv class Name="a bsolute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                    <d iv class Name="b g-gradient-to-r from-pink-500 to-cyan-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                    </d iv>

                )}

                <d iv class Name="t ext-centermb-8">
        </d iv>
                  <h3 c lass Name="t ext-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p c lass Name="t ext-gray-300mb-4">{plan.description}</p>
                  <d iv class Name="f lexitems-baselinejustify-center" />
                    <s pan class Name="t ext-5 xlfont-boldtext-white">{plan.price}</s pan>
                    <s pan class Name="t ext-gray-400ml-2">{plan.period}</s pan>
                  </d iv>

                <d iv class Name="s pace-y-4mb-8">
        </d iv>
                  {plan.features.map((feature, feature Index) => (

                    <d iv key="{feature Index}" class Name="f lexitems-centerspace-x-3" />
                      <C heck Circle class Name="w-5 h-5t ext-green-400flex-shrink-0" / />
                      <s pan class Name="t ext-gray-300">{feature}</s pan>
                    </d iv>

                  ))}
                </d iv>
                
                <L ink 
                  to="/contact" 
                  class Name="{`b lock" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 to-cyan-600 text-white hover:from-pink-600 hover:to-cyan-700 shadow-lg shadow-pink-500/25'
                      : 'border-2 border-pink-400 text-pink-400 hover: bg-pink-400 hover:text-gray-900'
                  }`}
                  />Get Started

                </L ink>
              </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Testimonials Section */}

      <s ection class Name="p y-20 px-4 bg-gradient-to-brfrom-pink-900/50to-purple-900/50" />
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Loved by <s pan class Name="b g-gradient-to-r from-pink-400 to-purple-400bg-clip-texttext-transparent">Marketers</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

              See how A I Social Scheduler is transforming social media management for businesses and creators worldwide.

            </p>
          </d iv>

          <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
            {testimonials.map((testimonial, index) => (

              <d iv key="{index}" class Name="b g-white/10 backdrop-blur-lg rounded-2 xl p-8borderborder-white/20" />
                <d iv class Name="f lexitems-centermb-4">
        </d iv>
                  <d iv class Name="w-12 h-12 b g-gradient-to-r from-pink-500 to-cyan-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar}
                  </d iv>
                  <d iv />
                    <h4 c lass Name="t ext-whitefont-semibold">{testimonial.name}</h4>
                    <p c lass Name="t ext-gray-400text-sm">{testimonial.company}</p>
                  </d iv>
                <d iv class Name="f lexitems-centermb-4">
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

      <s ection class Name="p y-20 px-4 bg-gradient-to-r from-pink-600via-purple-600to-cyan-600" />
        <d iv class Name="m ax-w-7 xlmx-autotext-center">
        </d iv>
          <h2 c lass Name="t ext-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6" />

            Ready to Transform Your

            <b r / />
            <s pan class Name="b g-gradient-to-r from-pink-300 to-cyan-300bg-clip-texttext-transparent">Social Media Strategy?
            </s pan>
          </h2>
          <p c lass Name="t ext-xl sm:text-2 xl text-white/90 mb-8 max-w-4xlmx-auto" />

            Join thousands of marketers already increasing engagement and saving time with A I Social Scheduler. 
            Start your free trial today - no credit card required.

          </p>
          <d iv class Name="f lex flex-col sm:flex-rowgap-6justify-center">
        </d iv>
            <L ink to="/contact" class Name="g roup bg-white text-pink-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
              <s pan>Start Free Trial</s pan>
              <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
            </L ink>
            <L ink to="/pricing" class Name="g roup border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <s pan>View All Plans</s pan>
              <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
            </L ink>
          </d iv>
      </s ection>

  )
}

export default A ISocial Scheduler Page;
