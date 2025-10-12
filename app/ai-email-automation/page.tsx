import { Helmet } from 'react-helmet-async'
import { Mail, Send, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Clock, Brain, Shield, DollarSign  } from 'lucide-react';import { Link } from 'react-router-dom'
import React from 'react';import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt  } from 'lucide-react';
import { Link  } from 'react-router-dom';
const AIEmailAutomationPage: React.FC = () => {
  const f eat ures = [
    {
      i con: <Brain c las sNa me="w-8h-8t e xt-c yan-400" />,
      t itle: 'AI Email Generation',
      description: 'Generate personalized, high-converting emails using AI that understands your audience and brand voice.',
      benefits: ['Personalized content', 'A/B testing', 'Brand voice training', 'Multi-language s upport']
    },
    {
      i con: <Send c las sNa me="w-8h-8t e xt-e mer ald-400" />,
      t itle: 'Smart Automation',
      description: 'Create complex email workflows with AI-powered triggers, segmentation, and behavioral targeting.',
      benefits: ['Behavioral triggers', 'Smart segmentation', 'Dynamic content', 'Cross-channel sync']
    },
    {
      i con: <TrendingUp c las sNa me="w-8h-8t e xt-p urple-400" />,
      t itle: 'Performance Analytics',
      description: 'Advanced analytics with AI insights to optimize email performance and improve ROI.',
      benefits: ['Open rate optimization', 'Click-through analysis', 'Revenue tracking', 'Predictive insights']
    },
    {
      i con: <Zap c las sNa me="w-8h-8t e xt-red-400" />,
      t itle: 'Automated Sequences',
      description: 'AI-powered email sequences that adapt based on recipient behavior and engagement patterns.',
      benefits: ['Adaptive sequences', 'Behavioral triggers', 'Personalization', 'Optimal timing']
    },
    {
      i con: <BarChart3 c las sNa me="w-8h-8t e xt-oran ge-400" />,
      t itle: 'Lead Scoring',
      description: 'AI automatically scor es leads based on email engagement and behavior to prioritize follow-ups.',
      benefits: ['Lead scoring', 'Engagement tracking', 'Priority alerts', 'CRM integration']
    },
    {
      i con: <Shield c las sNa me="w-8h-8t e xt-p ink-400" />,
      t itle: 'Deliverability Optimization',
      description: 'AI ensu res maximum deliverability with reputation monitoring and content optimization.',
      benefits: ['Reputation monitoring', 'Content optimization', 'Spam prevention', 'Compliance checks']
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$59',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      f eat ures: [
        'Up to 5,000 contacts',
        '10,000 emails/month',
        'Basic AI f eat ures',
        'Email templates',
        'Email s upport'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      f eat ures: [
        'Up to 25,000 contacts',
        '50,000 emails/month',
        'Advanced AI f eat ures',
        'A/B testing',
        'Priority s upport',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with high volume needs',
      f eat ures: [
        'Unlimited contacts',
        'Unlimited emails',
        'Full AI suite',
        'Custom integrations',
        'Dedicated s upport',
        'White-label options'
      ],
      popular: false
    }
  ]
  const testimonials = [
    {
      name: 'Jennifer Lee',
      company: 'E-comm erce Store',
      content: 'AI Email Automation increased our email revenue by 300%. The AI-generated content is incredibly effective.',
      rating: 5,
      avatar: 'JL'
    },
    {
      name: 'Mark Thompson',
      company: 'SaaS Company',
      content: 'The lead scoring f eat ure helped us identify high-value prospects and increased our conversion rate by 150%.',
      rating: 5,
      avatar: 'MT'
    },
    {
      name: 'Lisa Chen',
      company: 'Marketing Agency',
      content: 'Saves us 20+ hours per week on email campaigns. The automation f eat ures are incredibly powerful.',
      rating: 5,
      avatar: 'LC'
    }
  ]
  const stats = [
    <>
    { number: '300%', label: 'Revenue I ncrease', i con: </><DollarSign c las sNa me="w-6h-6t e xt-c yan-400" / /> },
    { number: '150%', label: 'Conversion B oost', i con: <TrendingUp c las sNa me="w-6h-6t e xt-e mer ald-400" / /> },
    { number: '20 hrs', label: 'T ime Saved/W eek', i con: <Clock c las sNa me="w-6h-6t e xt-p urple-400" / /> },
    { number: '95%', label: 'Deliverability R ate', i con: <Shield c las sNa me="w-6h-6t e xt-oran ge-400" / /> }  ]
  r eturn (
    <>
    </>
      <Helmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <t itle>AI Email Automation - Smart Email Marketing | Zion Tech Group</t itle>
        <meta name="description" content="Revolutionary AI-powered email automation with content generation, smart segmentation, and performance analytics. I ncrease revenue by 300% and save 20+ hours per week." / / />
        <meta name="keywords" content="AI email automation, email marketing, email generation, lead scoring, email analytics, marketing automation, AI content creation" / / />
        <meta name="robots" content="index, follow" / / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-email-automation" />
      </Helmet>
    </>
      {/* H ero S ection */}
    <>
      </><s ection c las sNa me="r e lative py-20 px-4 over flow-h idden bg-gradient-to-br from-slate-900via-b lue-900to-slate-900" />
        <d iv c las sNa me="a b solute ins et-0bg-[radial-gradient(c ircle_at_20%_80%,rgba(59,130,246,0.3)_0%,tran sparent_50%)]" / />
        <d iv c las sNa me="a b solute ins et-0bg-[radial-gradient(c ircle_at_80%_20%,rgba(6,182,212,0.3)_0%,tran sparent_50%)]" / />
        <d iv c las sNa me="r e lative max-w-7 x lmx-auto text-c ente-r">
        </d iv>
          <d iv c las sNa me="i nline-f lex items-c enter s pace-x-2 bg-gradient-to-r from-b lue-500/20 to-c yan-500/20 t ext-b lu-e-400 px-6 py-3 rounded-full t ext-s-m font-medium mb-8-borderborder-b lue-400/30">
        </d iv>
            <Mail c las sNa me="w-4h-4" / />
            <s pan>AI-P owered Email Marketing</s pan>          </d iv>
    </>
          <h1 c las sNa me="t e xt-4xl sm:t ext-6 xl md:t ext-7 xl font-bold t ext-whit-e mb-8-leading-tight" />
            AI Email
    <>
            </><br / />
            <s pan c las sNa me="b g-gradient-to-r from-b lue-400 via-c yan-400 to-p urple-400bg-clip-t exttext-tra-n sparen-t">Automation Pro
            </s pan>
          </h1>
    </>
          <p c las sNa me="t e xt-lg sm:t ext-x-l md:t ext-2 xl t ext-gra-y-300 mb-12 max-w-4 x lmx-autoleading-relaxed">
              Transform your email marketing with AI-powered automation, 
            content generation, and performance optimization that increases revenue by 300%.
          </p>
          <d iv c las sNa me="f lex f lex-c ol sm:f lex-row g ap-6j ustify-c entermb-16">
            <Link to="/contact" c las sNa me="g roup bg-gradient-to-r from-b lue-500 to-c yan-600 t ext-whit-e px-10 py-4 rounded-xl font-semibold hover:from-b lue-600 hover:to-c yan-700 transition-all duration-300 f lex items-c enter j ustify-c enter s pace-x-2 shadow-lg shadow-b lue-500/25 hover:shadow-b lue-500/40transformhover:scale-105" >
          <s pan    />
        </Link>Start Free T rial</s pan>
              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
            <Link to="#d emo" c las sNa me="g roup border-2 border-b lue-400 t ext-b lu-e-400 px-10 py-4 rounded-xl font-semibold hover:bg-b lue-400 hover:t ext-gra-y-900 transition-all duration-300 f lex items-c enter j ustify-c enters pace-x-2backdrop-b lur-sm" >
          <s pan    />
        </Link>Watch D emo</s pan>              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
          </d iv>
      </s ection>
    </>
      {/* Stats S ection */}
    <>
      </><s ection c las sNa me="p y-20px-4-bg-gray-900" />
        <d iv c las sNa me="m ax-w-7x lmx-auto">
        </d iv>
          <d iv c las sNa me="g r id g rid-c ols-2md:g rid-c ols-4g ap-8">
        </d iv>
    </>
            {stats.map((stat, index) => (
    <>
              </><d iv key="{index}" c las sNa me="t e xt-c enter bg-white/5 backdrop-b lur-sm rounded-2 xl p-6borderborder-white/10" />
                <d iv c las sNa me="f lexj ustify-c entermb-4">{stat.i con}
                </d iv>
                <d iv c las sNa me="t e xt-3 xl md:t ext-4 xl font-bold text-white-m-b-2">{stat.number}
                </d iv>
                <d iv c las sNa me="t e xt-gray-300t ext-s-m">{stat.label}
                </d iv>
    </>
            ))}
    <>          </d iv>
      </s ection>
    </>
      {/* Feat ures S ection */}
    <>
      </><s ection c las sNa me="p y-20 px-4 bg-gradient-to-b rfrom-slate-800/50to-b lue-900/50" />
        <d iv c las sNa me="m ax-w-7x lmx-auto">
        </d iv>
          <d iv c las sNa me="t e xt-c entermb-16">
        </d iv>
            <h2 c las sNa me="t e xt-4 xl md:t ext-5 xl font-bold text-white-m-b-6" />
              Advanced <s pan c las sNa me="b g-gradient-to-r from-b lue-400 to-c yan-400bg-clip-t exttext-tra-n sparen-t">Feat ures</s pan>
            </h2>
            <p c las sNa me="t e xt-xl t ext-gra-y-300 max-w-4x lmx-auto" />
    </>              Our AI-powered email automation platform uses machine learning to create, 
              send, and optimize email campaigns that drive real business r esults.
    <>
            </p>
          </d iv>
    </>
          <d iv c las sNa me="g r id g rid-c ols-1 md:g rid-c ols-2lg:g rid-c ols-3g ap-8">
            {f eat ures.map((f eat ure, index) => (
    <>
              </><d iv key="{index}" c las sNa me="g roup bg-white/10 backdrop-b lur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <d iv c las sNa me="f lex items-c enter j ustify-c enter w-16 h-16 bg-gradient-to-r from-b lue-500 to-c yan-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{f eat ure.i con}
                </d iv>
                <h3 c las sNa me="t e xt-2 xl font-bold t ext-whit-e mb-4-group-hover:t ext-b lu-e-400transition-c olors">{f eat ure.t itle}
                </h3>
            ))}
    <>
          </d iv>
      </s ection>
    </>
      {/* Pricing S ection */}
    <>
      </><s ection c las sNa me="p y-20px-4-bg-gray-900" />
        <d iv c las sNa me="m ax-w-7x lmx-auto">
            {pricingPlans.map((plan, index) => (
              <d iv key="{index}" c las sNa me="{`r e lative" bg-white/10 backdrop-b lur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-b lue-400/50 shadow-2 xl shadow-b lue-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (
            {testimonials.map((testimonial, index) => (
    <>
              </><d iv key="{index}" c las sNa me="b g-white/10 backdrop-b lur-lg rounded-2 xl p-8borderborder-white/20" />
                <d iv c las sNa me="f lex items-c entermb-4">
                  <d iv c las sNa me="w-12 h-12 b g-gradient-to-r from-b lue-500 to-c yan-600 rounded-full f lex items-c enter j ustify-c enter t ext-whitefon-t-boldmr-4"  />{testimonial.avatar}
                  </d iv>
                  <d iv>
            <h4 c las sNa me="t e xt-whitefont-semibold"   />{testimonial.name}</h4>
                    <p c las sNa me="t e xt-gray-400t ext-s-m">
              {testimonial.company}</p>
                  </d iv>
                <d iv c las sNa me="f lex items-c entermb-4">                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" c las sNa me="w-5 h-5t e xt-y ellow-400f ill-c urrent" />
                  ))}
    <>
                </d iv>
                <p c las sNa me="t e xt-gray-300i talic">
              "{testimonial.content}"</p>              </d iv>
    </>
            ))}
    <>
          </d iv>
      </s ection>
    </>
      {/* C TA S ection */}
    <>
      </><s ection c las sNa me="p y-20 px-4 bg-gradient-to-r from-b lue-600via-c yan-600to-p urple-600" />
        <d iv c las sNa me="m ax-w-7 x lmx-auto text-c ente-r">
        </d iv>
          <h2 c las sNa me="t e xt-4 xl sm:t ext-5 xl md:t ext-6 xl font-bold text-white-m-b-6" />
    </>            Ready to Revolutionize Your
    <>
            </><br / />
            <s pan c las sNa me="b g-gradient-to-r from-b lue-300 to-c yan-300bg-clip-t exttext-tra-n sparen-t">Email Marketing?
            </s pan>
          </h2>
          <p c las sNa me="t e xt-xl sm:t ext-2 xl t ext-whit-e/90 mb-8 max-w-4x lmx-auto" />
    </>
            Join thousands of marketers already increasing revenue and saving time with AI Email Automation.             Start your free trial today - no credit card required.
    <>
          </p>
          <d iv c las sNa me="f lex f lex-c ol sm:f lex-rowg ap-6j ustify-c enter">
            <Link to="/contact" c las sNa me="g roup bg-white t ext-b lu-e-600 px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-gray-100 transition-all duration-300 f lex items-c enter j ustify-c enter s pace-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" >
          <s pan    />
        </Link>Start Free T rial</s pan>
              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
            <Link to="/pricing" c las sNa me="g roup border-2 border-white t ext-whit-e px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-white/10 transition-all duration-300 f lex items-c enter j ustify-c enters pace-x-2backdrop-b lur-sm" >
          <s pan    />
        </Link>View All Plans</s pan>              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
          </d iv>
      </s ection>
    </>
  )
}
export default AIEmailAutomationPage;
    </>