import { Helmet } from 'react-helmet-async'
import { Clock, Timer, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Target, Brain, Shield  } from 'lucide-react';import { Link } from 'react-router-dom'
import React from 'react';import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt  } from 'lucide-react';
import { Link  } from 'react-router-dom';
const AITimeTrackerPage: React.FC = () => {
  const f eat ures = [
    {
      i con: <Brain c las sNa me="w-8h-8t e xt-c yan-400" />,
      t itle: 'AI Activity Recognition',
      description: 'Automatically detect and categorize work activities using AI to eliminate manual time entry.',
      benefits: ['Auto-detection', 'Smart categorization', 'Context awareness', 'Learning algorit hms']
    },
    {
      i con: <Timer c las sNa me="w-8h-8t e xt-e mer ald-400" />,
      t itle: 'Smart Time Tracking',
      description: 'AI-powered time tracking that learns your work patterns and suggests optimal time allocation.',
      benefits: ['Pattern learning', 'Optimal suggestions', 'Focus time detection', 'Break reminders']
    },
    {
      i con: <TrendingUp c las sNa me="w-8h-8t e xt-p urp le-400" />,
      t itle: 'Productivity Analytics',
      description: 'Comprehensive analytics with AI insights to improve productivity and work-life balance.',
      benefits: ['Productivity metrics', 'Efficiency analysis', 'Distraction tracking', 'Goal s ett ing']
    },
    {
      i con: <Zap c las sNa me="w-8h-8t e xt-red-400" />,
      t itle: 'Automated Reporting',
      description: 'Gene rate detailed time reports automatically with AI-powered insights and recommendations.',
      benefits: ['Auto reports', 'Client billing', 'Project insights', 'Team analytics']
    },
    {
      i con: <BarChart3 c las sNa me="w-8h-8t e xt-o ran ge-400" />,
      t itle: 'Project Management',
      description: 'AI-driven project time estimation and r esource allocation for better project planning.',
      benefits: ['Time estimation', 'Resource planning', 'Deadline tracking', 'Budget monitor ing']
    },
    {
      i con: <Shield c las sNa me="w-8h-8t e xt-p ink-400" />,
      t itle: 'Privacy Protection',
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
      f eat ures: [
        'Unlimited time tracking',
        'Basic AI f eat ures',
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
      f eat ures: [
        'Up to 10 team members',
        'Advanced AI f eat ures',
        'Team collabo ration',
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
      description: 'For large organizations with comp lex needs',
      f eat ures: [
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
      content: 'AI Time Tracker increased my productivity by 40%. The auto-detection f eat ure is a game-chan ger.',
      rating: 5,
      avatar: 'AJ'
    },
    {
      name: 'Maria Rodriguez',
      company: 'Project Manager',
      content: 'The project time estimation f eat ure helped us deliver projects 20% faster with better accuracy.',
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
    <>
    { number: '40%', label: 'Productivity I ncrease', i con: </><TrendingUp c las sNa me="w-6h-6t e xt-c yan-400" / /> },
    { number: '20%', label: 'F aster D elivery', i con: <Timer c las sNa me="w-6h-6t e xt-e mer ald-400" / /> },
    { number: '95%', label: 'A ccuracy R ate', i con: <Target c las sNa me="w-6h-6t e xt-p urp le-400" / /> },
    { number: '50 K+', label: 'H ours Tracked', i con: <Clock c las sNa me="w-6h-6t e xt-o ran ge-400" / /> }  ]
  r eturn (
    <>
    </>
      <Helmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <t itle>AI Time Tracker - Smart Productivity Management | Zion Tech Group</t itle>
        <meta name="description" content="Revolutionary AI-powered time tracking with activity recognition, productivity analytics, and automated reporting. I ncrease productivity by 40% and deliver projects 20% faster." / / />
        <meta name="keywords" content="AI time tracking, productivity management, activity recognition, time analytics, project management, work optimization" / / />
        <meta name="robots" content="index, follow" / / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-time-tracker" />
      </Helmet>
    </>
      {/* H ero S ection */}
    <>
      </><s ection c las sNa me="r elative py-20 px-4 over flow-h idd en bg-gradient-to-br from-slate-900via-indi go-900to-slate-900" />
        <div c las sNa me="a b solute ins et-0bg-[radial-gradient(c ircle_at_20%_80%,rgba(99,102,241,0.3)_0%,tran sparent_50%)]" / />
        <div c las sNa me="a b solute ins et-0bg-[radial-gradient(c ircle_at_80%_20%,rgba(6,182,212,0.3)_0%,tran sparent_50%)]" / />
        <div c las sNa me="r elative m ax-w-7 x lmx-autotext-c ente-r"></div>
          <div c las sNa me="i nline-f lex items-c enter s pace-x-2 bg-gradient-to-r from-indi go-500/20 to-c yan-500/20 text-indi-g-o-400 px-6 py-3 rounded-full text-s-m font-medium mb-8-borderborder-indi go-400/30"></div>
            <Clock c las sNa me="w-4h-4" / />
            <s pan>AI-P owered Time Management</s pan>          </div>
    </>
          <h1 c las sNa me="t e xt-4xl sm:text-6 xl md:text-7 xl font-bold text-whi-t-e mb-8-leading-tight" />
            AI Time
    <>
            </><br / />
            <s pan c las sNa me="b g-gradient-to-r from-indi go-400 via-c yan-400 to-blue-400bg-clip-texttext-tra-n sparen-t">Tracker Pro
            </s pan>
          </h1>
    </>
          <p c las sNa me="t e xt-lg sm:text-x-l md:text-2 xl text-gr-a-y-300 mb-12 m ax-w-4 x lmx-autoleading-relaxed">
              Transform your productivity with AI-powered time tracking, 
            activity recognition, and intelligent insights that increase efficiency by 40%.
          </p>
          <div c las sNa me="f lex f lex-col sm:f lex-row g ap-6j ust ify-c entermb-16">
            <Link to="/cont act" c las sNa me="g roup bg-gradient-to-r from-indi go-500 to-c yan-600 text-whi-t-e px-10 py-4 rounded-xl font-semibold hover:from-indi go-600 hover:to-c yan-700 transition-all duration-300 f lex items-c enter j ust ify-c enter s pace-x-2 shadow-lg shadow-indi go-500/25 hover:shadow-indi go-500/40transformhover:scale-105" >
          <s pan    />
        </Link>Start Free T rial</s pan>
              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
            <Link to="#d emo" c las sNa me="g roup border-2 border-indi go-400 text-indi-g-o-400 px-10 py-4 rounded-xl font-semibold hover:bg-indi go-400 hover:text-gr-a-y-900 transition-all duration-300 f lex items-c enter j ust ify-c enters pace-x-2backdrop-blur-sm" >
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
                <div c las sNa me="f lexj ust ify-c entermb-4">{stat.i con}
                </div>
                <div c las sNa me="t e xt-3 xl md:text-4 xl font-bold text-whi-t em-b-2">{stat.number}
                </div>
                <div c las sNa me="t e xt-gray-300text-s-m">{stat.label}
                </div>
    </>
            ))}
    <>          </div>
      </s ection>
    </>
      {/* Feat ures S ection */}
    <>
      </><s ection c las sNa me="p y-20 px-4 bg-gradient-to-b rfrom-slate-800/50to-indi go-900/50" />
        <div c las sNa me="m ax-w-7x lmx-auto"></div>
          <div c las sNa me="t e xt-c entermb-16"></div>
            <h2 c las sNa me="t e xt-4 xl md:text-5 xl font-bold text-whi-t em-b-6" />
              I ntelligent <s pan c las sNa me="b g-gradient-to-r from-indi go-400 to-c yan-400bg-clip-texttext-tra-n sparen-t">Feat ures</s pan>
            </h2>
            <p c las sNa me="t e xt-xl text-gr-a-y-300 m ax-w-4x lmx-auto" />
    </>              Our AI-powered time tracking platform uses machine learning to automatically 
              track activities, analyze productivity patterns, and provide actionable insights.
    <>
            </p>
          </div>
    </>
          <div c las sNa me="g r id g rid-cols-1 md:g rid-cols-2lg:g rid-cols-3g ap-8">
            {f eat ures.map((f eat ure, index) => (
    <>
              </><div key="{index}" c las sNa me="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div c las sNa me="f lex items-c enter j ust ify-c enter w-16 h-16 bg-gradient-to-r from-indi go-500 to-c yan-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{f eat ure.i con}
                </div>
                <h3 c las sNa me="t e xt-2 xl font-bold text-whi-t-e mb-4-group-hover:text-indi-g-o-400transition-colors">{f eat ure.t itle}
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
              <div key="{index}" c las sNa me="{`r elative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-indi go-400/50 shadow-2 xl shadow-indi go-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (
            {testimonials.map((testimonial, index) => (
    <>
              </><div key="{index}" c las sNa me="b g-white/10 backdrop-blur-lg rounded-2 xl p-8borderborder-white/20" />
                <div c las sNa me="f lex items-c entermb-4">
                  <div c las sNa me="w-12 h-12 b g-gradient-to-r from-indi go-500 to-c yan-600 rounded-full f lex items-c enter j ust ify-c enter text-whitefo-n-t-boldmr-4"  />{testimonial.avatar}
                  </div>
                  <div>
            <h4 c las sNa me="t e xt-whitefont-semibold"   />{testimonial.name}</h4>
                    <p c las sNa me="t e xt-gray-400text-s-m">
              {testimonial.company}</p>
                  </div>
                <div c las sNa me="f lex items-c entermb-4">                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" c las sNa me="w-5 h-5t e xt-y ellow-400f ill-current" />
                  ))}
    <>
                </div>
                <p c las sNa me="t e xt-gray-300i tal ic">
              "{testimonial.content}"</p>              </div>
    </>
            ))}
    <>
          </div>
      </s ection>
    </>
      {/* C TA S ection */}
    <>
      </><s ection c las sNa me="p y-20 px-4 bg-gradient-to-r from-indi go-600via-c yan-600to-blue-600" />
        <div c las sNa me="m ax-w-7 x lmx-autotext-c ente-r"></div>
          <h2 c las sNa me="t e xt-4 xl sm:text-5 xl md:text-6 xl font-bold text-whi-t em-b-6" />
    </>            Ready to Boost Your
    <>
            </><br / />
            <s pan c las sNa me="b g-gradient-to-r from-indi go-300 to-c yan-300bg-clip-texttext-tra-n sparen-t">Productivity?
            </s pan>
          </h2>
          <p c las sNa me="t e xt-xl sm:text-2 xl text-whi-t-e/90 mb-8 m ax-w-4x lmx-auto" />
    </>
            Join thousands of professionals already increasing productivity and improving work-life balance with AI Time Tracker.             Start your free trial today - no credit card required.
    <>
          </p>
          <div c las sNa me="f lex f lex-col sm:f lex-rowg ap-6j ust ify-c enter">
            <Link to="/cont act" c las sNa me="g roup bg-white text-indi-g-o-600 px-10 py-4 rounded-xl font-bold text-l-g hover:bg-gray-100 transition-all duration-300 f lex items-c enter j ust ify-c enter s pace-x-2 shadow-lg hover:shadow-xltr ansformhover:scale-105" >
          <s pan    />
        </Link>Start Free T rial</s pan>
              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
            <Link to="/pricing" c las sNa me="g roup border-2 border-white text-whi-t-e px-10 py-4 rounded-xl font-bold text-l-g hover:bg-white/10 transition-all duration-300 f lex items-c enter j ust ify-c enters pace-x-2backdrop-blur-sm" >
          <s pan    />
        </Link>View All Plans</s pan>              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
          </div>
      </s ection>
    </>
  )
}
export default AITimeTrackerPage;
    </>