import { Helmet } from 'react-helmet-async'
import { Calendar, Share2, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Clock, Globe, Brain  } from 'lucide-react';import { Link } from 'react-router-dom'
import React from 'react';import { Share2, ArrowRight } from 'lucide-react';
import { Link  } from 'react-router-dom';
const AISocialSchedulerPage: React.FC = () => {
  const f eat ures = [
    {
      i con: <Brain c las sNa me="w-8h-8t e xt-c yan-400" />,
      t itle: 'AI Content Generation',
      description: 'Generate engaging social media posts using AI that understands your brand voice and audience preferences.',
      benefits: ['Brand voice training', 'Audience analysis', 'Content optimization', 'Multi-platform adaptation']
    },
    {
      i con: <Calendar c las sNa me="w-8h-8t e xt-e mer ald-400" />,
      t itle: 'Smart Scheduling',
      description: 'AI determines optimal posting times based on your audience activity patterns and engagement data.',
      benefits: ['Optimal timing', 'Audience insights', 'Engagement prediction', 'Cross-platform sync']
    },
    {
      i con: <TrendingUp c las sNa me="w-8h-8t e xt-p urp le-400" />,
      t itle: 'Performance Analytics',
      description: 'Comprehensive analytics with AI-powered insights to improve your social media strategy.',
      benefits: ['Engagement metrics', 'ROI tracking', 'Trend analysis', 'Competitor insights']
    },
    {
      i con: <Share2 c las sNa me="w-8h-8t e xt-red-400" />,
      t itle: 'Multi-Platform Management',
      description: 'Manage all your social media accounts from one dashboard with platform-specific optimization.',
      benefits: ['Unified dashboard', 'Platform optimization', 'Bulk posting', 'Content adaptation']
    },
    {
      i con: <Zap c las sNa me="w-8h-8t e xt-o ran ge-400" />,
      t itle: 'Automated Engagement',
      description: 'AI-powered auto-r esponses and engagement tools to maintain active social media presence.',
      benefits: ['Auto-r esponses', 'Comment management', 'Hashtag optimization', 'Community building']
    },
    {
      i con: <BarChart3 c las sNa me="w-8h-8t e xt-p ink-400" />,
      t itle: 'Campaign Management',
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
      f eat ures: [
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
      f eat ures: [
        'Up to 10 social accounts',
        'Unlimited posts',
        'Advanced AI f eat ures',
        'Team collabo ration',
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
      f eat ures: [
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
      company: 'E-comm erce Brand',
      content: 'The optimal timing f eat ure alone increased our reach by 200%. Best social media tool we've ever used.',
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
    <>
    { number: '150%', label: 'Engagement I ncrease', i con: </><TrendingUp c las sNa me="w-6h-6t e xt-c yan-400" / /> },
    { number: '200%', label: 'Reach I mprove ment', i con: <Globe c las sNa me="w-6h-6t e xt-e mer ald-400" / /> },
    { number: '10 hrs', label: 'T ime Saved/W eek', i con: <Clock c las sNa me="w-6h-6t e xt-p urp le-400" / /> },
    { number: '50 K+', label: 'P osts Schedul ed', i con: <Calendar c las sNa me="w-6h-6t e xt-o ran ge-400" / /> }  ]
  r eturn (
    <>
    </>
      <Helmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <t itle>AI Social Scheduler - Smart Social Media Management | Zion Tech Group</t itle>
        <meta name="description" content="Revolutionary AI-powered social media management with content generation, smart scheduling, and performance analytics. I ncrease engagement by 150% and save 10+ hours per week." / / />
        <meta name="keywords" content="AI social media scheduler, social media automation, content generation, social media analytics, social media management, AI content creation" / / />
        <meta name="robots" content="index, follow" / / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-social-scheduler" />
      </Helmet>
    </>
      {/* H ero S ection */}
    <>
      </><s ection c las sNa me="r e lative py-20 px-4 over flow-h idd en bg-gradient-to-br from-slate-900via-p ink-900to-slate-900" />
        <div c las sNa me="a b solute ins et-0bg-[radial-gradient(c ircle_at_20%_80%,rgba(236,72,153,0.3)_0%,tran sparent_50%)]" / />
        <div c las sNa me="a b solute ins et-0bg-[radial-gradient(c ircle_at_80%_20%,rgba(6,182,212,0.3)_0%,tran sparent_50%)]" / />
        <div c las sNa me="r e lative m ax-w-7 x lmx-auto text-c ente-r"></div>
          <div c las sNa me="i nline-f lex items-c enter s pace-x-2 bg-gradient-to-r from-p ink-500/20 to-c yan-500/20 t ext-p in-k-400 px-6 py-3 rounded-full t ext-s-m font-medium mb-8-borderborder-p ink-400/30"></div>
            <Share2 c las sNa me="w-4h-4" / />
            <s pan>AI-P owered Social Media Management</s pan>          </div>
    </>
          <h1 c las sNa me="t e xt-4xl sm:t ext-6 xl md:t ext-7 xl font-bold t ext-whit-e mb-8-leading-tight" />
            AI Social
    <>
            </><br / />
            <s pan c las sNa me="b g-gradient-to-r from-p ink-400 via-p urp le-400 to-c yan-400bg-clip-t exttext-tra-n sparen-t">Scheduler Pro
            </s pan>
          </h1>
    </>
          <p c las sNa me="t e xt-lg sm:t ext-x-l md:t ext-2 xl t ext-gra-y-300 mb-12 m ax-w-4 x lmx-autoleading-relaxed">
              Transform your social media presence with AI-powered content generation, 
            smart scheduling, and performance analytics that increase engagement by 150%.
          </p>
          <div c las sNa me="f l ex f lex-col sm:f lex-row g ap-6j ust ify-c entermb-16">
            <Link to="/cont act" c las sNa me="g roup bg-gradient-to-r from-p ink-500 to-c yan-600 t ext-whit-e px-10 py-4 rounded-xl font-semibold hover:from-p ink-600 hover:to-c yan-700 transition-all duration-300 f lex items-c enter j ust ify-c enter s pace-x-2 shadow-lg shadow-p ink-500/25 hover:shadow-p ink-500/40transformhover:scale-105" >
          <s pan    />
        </Link>Start Free T rial</s pan>
              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
            <Link to="#d emo" c las sNa me="g roup border-2 border-p ink-400 t ext-p in-k-400 px-10 py-4 rounded-xl font-semibold hover:bg-p ink-400 hover:t ext-gra-y-900 transition-all duration-300 f lex items-c enter j ust ify-c enters pace-x-2backdrop-blur-sm" >
          <s pan    />
        </Link>Watch D emo</s pan>              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
          </div>
      </s ection>
    </>
      {/* Stats S ection */}
    <>
      </><s ection c las sNa me="p y-20px-4-bg-gray-900" />
        <div c las sNa me="m ax-w-7x lmx-auto"></div>
          <div c las sNa me="g r id g rid-cols-2md:g rid-cols-4g ap-8"></div>
    </>
            {stats.map((stat, index) => (
    <>
              </><div key="{index}" c las sNa me="t e xt-c enter bg-white/5 backdrop-blur-sm rounded-2 xl p-6borderborder-white/10" />
                <div c las sNa me="f l exj ust ify-c entermb-4">{stat.i con}
                </div>
                <div c las sNa me="t e xt-3 xl md:t ext-4 xl font-bold text-whi-t em-b-2">{stat.number}
                </div>
                <div c las sNa me="t e xt-gray-300t ext-s-m">{stat.label}
                </div>
    </>
            ))}
    <>          </div>
      </s ection>
    </>
      {/* Feat ures S ection */}
    <>
      </><s ection c las sNa me="p y-20 px-4 bg-gradient-to-b rfrom-slate-800/50to-p ink-900/50" />
        <div c las sNa me="m ax-w-7x lmx-auto"></div>
          <div c las sNa me="t e xt-c entermb-16"></div>
            <h2 c las sNa me="t e xt-4 xl md:t ext-5 xl font-bold text-whi-t em-b-6" />
              P owerful <s pan c las sNa me="b g-gradient-to-r from-p ink-400 to-c yan-400bg-clip-t exttext-tra-n sparen-t">Feat ures</s pan>
            </h2>
            <p c las sNa me="t e xt-xl t ext-gra-y-300 m ax-w-4x lmx-auto" />
    </>              Our AI-powered social media scheduler uses advanced machine learning to create, 
              schedule, and optimize your social media content across all platforms.
    <>
            </p>
          </div>
    </>
          <div c las sNa me="g r id g rid-cols-1 md:g rid-cols-2lg:g rid-cols-3g ap-8">
            {f eat ures.map((f eat ure, index) => (
    <>
              </><div key="{index}" c las sNa me="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div c las sNa me="f l ex items-c enter j ust ify-c enter w-16 h-16 bg-gradient-to-r from-p ink-500 to-c yan-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{f eat ure.i con}
                </div>
                <h3 c las sNa me="t e xt-2 xl font-bold t ext-whit-e mb-4-group-hover:t ext-p in-k-400transition-colors">{f eat ure.t itle}
                </h3>
            ))}
    <>
          </div>
      </s ection>
    </>
      {/* Pricing S ection */}
    <>
      </><s ection c las sNa me="p y-20px-4-bg-gray-900" />
        <div c las sNa me="m ax-w-7x lmx-auto">
            {pricingPlans.map((plan, index) => (
              <div key="{index}" c las sNa me="{`r e lative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-p ink-400/50 shadow-2 xl shadow-p ink-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (
            {testimonials.map((testimonial, index) => (
    <>
              </><div key="{index}" c las sNa me="b g-white/10 backdrop-blur-lg rounded-2 xl p-8borderborder-white/20" />
                <div c las sNa me="f l ex items-c entermb-4">
                  <div c las sNa me="w-12 h-12 b g-gradient-to-r from-p ink-500 to-c yan-600 rounded-full f lex items-c enter j ust ify-c enter t ext-whitefon-t-boldmr-4"  />{testimonial.avatar}
                  </div>
                  <div>
            <h4 c las sNa me="t e xt-whitefont-semibold"   />{testimonial.name}</h4>
                    <p c las sNa me="t e xt-gray-400t ext-s-m">
              {testimonial.company}</p>
                  </div>
                <div c las sNa me="f l ex items-c entermb-4">                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" c las sNa me="w-5 h-5t e xt-y ellow-400f ill-c urrent" />
                  ))}
    <>
                </div>
                <p c las sNa me="t e xt-gray-300ital ic">
              "{testimonial.content}"</p>              </div>
    </>
            ))}
    <>
          </div>
      </s ection>
    </>
      {/* C TA S ection */}
    <>
      </><s ection c las sNa me="p y-20 px-4 bg-gradient-to-r from-p ink-600via-p urp le-600to-c yan-600" />
        <div c las sNa me="m ax-w-7 x lmx-auto text-c ente-r"></div>
          <h2 c las sNa me="t e xt-4 xl sm:t ext-5 xl md:t ext-6 xl font-bold text-whi-t em-b-6" />
    </>            Ready to Transform Your
    <>
            </><br / />
            <s pan c las sNa me="b g-gradient-to-r from-p ink-300 to-c yan-300bg-clip-t exttext-tra-n sparen-t">Social Media Strategy?
            </s pan>
          </h2>
          <p c las sNa me="t e xt-xl sm:t ext-2 xl t ext-whit-e/90 mb-8 m ax-w-4x lmx-auto" />
    </>
            Join thousands of marketers already increasing engagement and saving time with AI Social Scheduler.             Start your free trial today - no credit card required.
    <>
          </p>
          <div c las sNa me="f l ex f lex-col sm:f lex-rowg ap-6j ust ify-c enter">
            <Link to="/cont act" c las sNa me="g roup bg-white t ext-p in-k-600 px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-gray-100 transition-all duration-300 f lex items-c enter j ust ify-c enter s pace-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" >
          <s pan    />
        </Link>Start Free T rial</s pan>
              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
            <Link to="/pricing" c las sNa me="g roup border-2 border-white t ext-whit-e px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-white/10 transition-all duration-300 f lex items-c enter j ust ify-c enters pace-x-2backdrop-blur-sm" >
          <s pan    />
        </Link>View All Plans</s pan>              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
          </div>
      </s ection>
    </>
  )
}
export default AISocialSchedulerPage;
    </>