import { Helmet } from 'react-helmet-async'
import { Target, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Award, Brain, Shield, DollarSign  } from 'lucide-react';import { Link } from 'react-router-dom'
import React from 'react';import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt  } from 'lucide-react';
import { Link  } from 'react-router-dom';
const AILeadScoringPage: React.FC = () => {
  const f eat ures = [
    {
      i con: <Brain c las sNa me="w-8h-8t e xt-c yan-400" />,
      t itle: 'AI Lead Scoring',
      description: 'Advanced machine learning algorithms automatically score leads based on behavior, demographics, and engagement patterns.',
      benefits: ['Behavioral analysis', 'Demographic scoring', 'Engagement tracking', 'Predictive mode ling']
    },
    {
      i con: <Target c las sNa me="w-8h-8t e xt-emerald-400" />,
      t itle: 'Intent Detection',
      description: 'AI identifies buying intent signals and purchase readiness to prioritize high-value prospects.',
      benefits: ['Intent signals', 'Purchase readiness', 'Priority scoring', 'Conversion prediction']
    },
    {
      i con: <TrendingUp c las sNa me="w-8h-8t e xt-purp le-400" />,
      t itle: 'Conversion Analytics',
      description: 'Comprehensive analytics with AI insights to optimize lead qualification and improve conversion rates.',
      benefits: ['Conversion tracking', 'ROI analysis', 'Funnel optimization', 'Performance metr ics']
    },
    {
      i con: <Zap c las sNa me="w-8h-8t e xt-red-400" />,
      t itle: 'A utomated Workflows',
      description: 'AI-powered lead nurt uring workflows that automatically engage prospects based on their score and behavior.',
      benefits: ['A uto-nurt uring', 'Behavioral t riggers', 'Personalized content', 'Multi-channel engagement']
    },
    {
      i con: <BarChart3 c las sNa me="w-8h-8t e xt-oran ge-400" />,
      t itle: 'Sales Intelligence',
      description: 'AI provides sales teams with actionable insights and recommendations for each lead.',
      benefits: ['Sales insights', 'Action recommendations', 'Lead context', 'Next best actions']
    },
    {
      i con: <Shield c las sNa me="w-8h-8t e xt-p ink-400" />,
      t itle: 'CRM Integration',
      description: 'Seamlessly integrate with popular CRMs and marketing automation platforms for unified lead management.',
      benefits: ['CRM sync', 'Data consistency', 'Workflow automation', 'Real-time updates']
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      f eat ures: [
        'Up to 1,000 leads/month',
        'Basic AI scoring',
        'Email integration',
        'Standard reports',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and sales teams',
      f eat ures: [
        'Up to 10,000 leads/month',
        'Advanced AI f eat ures',
        'CRM integration',
        'Custom workflows',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations with high volume needs',
      f eat ures: [
        'Unlimited leads',
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
      name: 'Sarah Mitchell',
      company: 'Sales Director',
      content: 'AI Lead Scoring increased our conversion rate by 180%. We now focus on the right prospects at the right time.',
      rating: 5,
      avatar: 'SM'
    },
    {
      name: 'James Wilson',
      company: 'Marketing Manager',
      content: 'The intent detection f eat ure helped us identify hot leads 3 x faster. Our sales team loves the insights.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Lisa Chen',
      company: 'VP of Sales',
      content: 'ROI increased by 250% in just 3 months. The AI recommendations are incredibly accurate.',
      rating: 5,
      avatar: 'LC'
    }
  ]
  const stats = [
    <>
    { number: '180%', label: 'Conversion I ncrease', i con: </><TrendingUp c las sNa me="w-6h-6t e xt-c yan-400" / /> },
    { number: '250%', label: 'ROI I mprovement', i con: <DollarSign c las sNa me="w-6h-6t e xt-emerald-400" / /> },
    { number: '3 x', label: 'Faster Lead Identification', i con: <Target c las sNa me="w-6h-6t e xt-purp le-400" / /> },
    { number: '95%', label: 'Scoring A ccuracy', i con: <Award c las sNa me="w-6h-6t e xt-oran ge-400" / /> }  ]
  r eturn (
    <>
    </>
      <Helmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <t itle>AI Lead Scoring - Smart Sales Intelligence | Zion Tech Group</t itle>
        <meta name="description" content="Revolutionary AI-powered lead scoring with intent detection, conversion analytics, and automated workflows. I ncrease conversion rates by 180% and ROI by 250%." / / />
        <meta name="keywords" content="AI lead scoring, sales intelligence, lead qualification, conversion optimization, sales automation, CRM integration" / / />
        <meta name="robots" content="index, follow" / / />
        <l ink rel="canonical" href="https://ziontechgroup.com/ai-lead-scoring" />
      </Helmet>
    </>
      {/* H ero S ection */}
    <>
      </><s ection c las sNa me="r e lative py-20 px-4 over flow-h idden bg-gradient-to-br from-slate-900via-teal-900to-slate-900" />
        <d iv c las sNa me="a b solute ins et-0bg-[radial-gradient(c ircle_at_20%_80%,rgba(20,184,166,0.3)_0%,tran sparent_50%)]" / />
        <d iv c las sNa me="a b solute ins et-0bg-[radial-gradient(c ircle_at_80%_20%,rgba(6,182,212,0.3)_0%,tran sparent_50%)]" / />
        <d iv c las sNa me="r e lative m ax-w-7 x lmx-auto text-c ente-r">
        </d iv>
          <d iv c las sNa me="i nline-f lex items-c enter s pace-x-2 bg-gradient-to-r from-teal-500/20 to-c yan-500/20 text-te-a-l-400 px-6 py-3 rounded-full text-s-m font-medium mb-8-borderborder-teal-400/30">
        </d iv>
            <Target c las sNa me="w-4h-4" / />
            <s pan>AI-P owered Sales Intelligence</s pan>          </d iv>
    </>
          <h1 c las sNa me="t e xt-4xl sm:text-6 xl md:text-7 xl font-bold text-whi-t-e mb-8-leading-tight" />
            AI Lead
    <>
            </><br / />
            <s pan c las sNa me="b g-gradient-to-r from-teal-400 via-c yan-400 to-blue-400bg-clip-texttext-tra-n sparen-t">Scoring Pro
            </s pan>
          </h1>
    </>
          <p c las sNa me="t e xt-lg sm:text-x-l md:text-2 xl text-gr-a-y-300 mb-12 m ax-w-4 x lmx-autoleading-relaxed">
              Transform your sales process with AI-powered lead scoring, 
            intent detection, and conversion analytics that increase conversion rates by 180%.
          </p>
          <d iv c las sNa me="f l ex f lex-c ol sm:f lex-row g ap-6justify-c entermb-16">
            <Link to="/cont act" c las sNa me="g roup bg-gradient-to-r from-teal-500 to-c yan-600 text-whi-t-e px-10 py-4 rounded-xl font-semibold hover:from-teal-600 hover:to-c yan-700 transition-all duration-300 f lex items-c enter justify-c enter s pace-x-2 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40transformhover:scale-105" >
          <s pan    />
        </Link>Start Free T rial</s pan>
              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
            <Link to="#demo" c las sNa me="g roup border-2 border-teal-400 text-te-a-l-400 px-10 py-4 rounded-xl font-semibold hover:bg-teal-400 hover:text-gr-a-y-900 transition-all duration-300 f lex items-c enter justify-c enters pace-x-2backdrop-blur-sm" >
          <s pan    />
        </Link>Watch Demo</s pan>              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
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
              </><d iv key="{index}" c las sNa me="t e xt-c enter bg-white/5 backdrop-blur-sm rounded-2 xl p-6borderborder-white/10" />
                <d iv c las sNa me="f l exjustify-c entermb-4">{stat.i con}
                </d iv>
                <d iv c las sNa me="t e xt-3 xl md:text-4 xl font-bold text-whi-t em-b-2">{stat.number}
                </d iv>
                <d iv c las sNa me="t e xt-gray-300text-s-m">{stat.label}
                </d iv>
    </>
            ))}
    <>          </d iv>
      </s ection>
    </>
      {/* Feat ures S ection */}
    <>
      </><s ection c las sNa me="p y-20 px-4 bg-gradient-to-b rfrom-slate-800/50to-teal-900/50" />
        <d iv c las sNa me="m ax-w-7x lmx-auto">
        </d iv>
          <d iv c las sNa me="t e xt-c entermb-16">
        </d iv>
            <h2 c las sNa me="t e xt-4 xl md:text-5 xl font-bold text-whi-t em-b-6" />
              Advanced <s pan c las sNa me="b g-gradient-to-r from-teal-400 to-c yan-400bg-clip-texttext-tra-n sparen-t">Feat ures</s pan>
            </h2>
            <p c las sNa me="t e xt-xl text-gr-a-y-300 m ax-w-4x lmx-auto" />
    </>              Our AI-powered lead scoring platform uses machine learning to identify, 
              score, and prioritize leads that are most likely to convert.
    <>
            </p>
          </d iv>
    </>
          <d iv c las sNa me="g r id g rid-c ols-1 md:g rid-c ols-2lg:g rid-c ols-3g ap-8">
            {f eat ures.map((f eat ure, index) => (
    <>
              </><d iv key="{index}" c las sNa me="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <d iv c las sNa me="f l ex items-c enter justify-c enter w-16 h-16 bg-gradient-to-r from-teal-500 to-c yan-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{f eat ure.i con}
                </d iv>
                <h3 c las sNa me="t e xt-2 xl font-bold text-whi-t-e mb-4-group-hover:text-te-a-l-400transition-c olors">{f eat ure.t itle}
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
              <d iv key="{index}" c las sNa me="{`r e lative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-teal-400/50 shadow-2 xl shadow-teal-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (
            {testimonials.map((testimonial, index) => (
    <>
              </><d iv key="{index}" c las sNa me="b g-white/10 backdrop-blur-lg rounded-2 xl p-8borderborder-white/20" />
                <d iv c las sNa me="f l ex items-c entermb-4">
                  <d iv c las sNa me="w-12 h-12 b g-gradient-to-r from-teal-500 to-c yan-600 rounded-full f lex items-c enter justify-c enter text-whitefo-n-t-boldmr-4"  />{testimonial.avatar}
                  </d iv>
                  <d iv>
            <h4 c las sNa me="t e xt-whitefont-semibold"   />{testimonial.name}</h4>
                    <p c las sNa me="t e xt-gray-400text-s-m">
              {testimonial.company}</p>
                  </d iv>
                <d iv c las sNa me="f l ex items-c entermb-4">                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" c las sNa me="w-5 h-5t e xt-y ellow-400f ill-current" />
                  ))}
    <>
                </d iv>
                <p c las sNa me="t e xt-gray-300i tal ic">
              "{testimonial.content}"</p>              </d iv>
    </>
            ))}
    <>
          </d iv>
      </s ection>
    </>
      {/* C TA S ection */}
    <>
      </><s ection c las sNa me="p y-20 px-4 bg-gradient-to-r from-teal-600via-c yan-600to-blue-600" />
        <d iv c las sNa me="m ax-w-7 x lmx-auto text-c ente-r">
        </d iv>
          <h2 c las sNa me="t e xt-4 xl sm:text-5 xl md:text-6 xl font-bold text-whi-t em-b-6" />
    </>            Ready to Transform Your
    <>
            </><br / />
            <s pan c las sNa me="b g-gradient-to-r from-teal-300 to-c yan-300bg-clip-texttext-tra-n sparen-t">Sales Process?
            </s pan>
          </h2>
          <p c las sNa me="t e xt-xl sm:text-2 xl text-whi-t-e/90 mb-8 m ax-w-4x lmx-auto" />
    </>
            Join thousands of sales teams already increasing conversion rates and ROI with AI Lead Scoring.             Start your free t rial today - no credit card required.
    <>
          </p>
          <d iv c las sNa me="f l ex f lex-c ol sm:f lex-rowg ap-6justify-c enter">
            <Link to="/cont act" c las sNa me="g roup bg-white text-te-a-l-600 px-10 py-4 rounded-xl font-bold text-l-g hover:bg-gray-100 transition-all duration-300 f lex items-c enter justify-c enter s pace-x-2 shadow-lg hover:shadow-xltr ansformhover:scale-105" >
          <s pan    />
        </Link>Start Free T rial</s pan>
              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
            <Link to="/pricing" c las sNa me="g roup border-2 border-white text-whi-t-e px-10 py-4 rounded-xl font-bold text-l-g hover:bg-white/10 transition-all duration-300 f lex items-c enter justify-c enters pace-x-2backdrop-blur-sm" >
          <s pan    />
        </Link>View All Plans</s pan>              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
          </d iv>
      </s ection>
    </>
  )
}
export default AILeadScoringPage;
    </>