import { Helmet } from 'react-helmet-async'
import { Brain, BarChart3, Users, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Star, Shield, Play, Heart, Calendar, Mail, Phone, MapPin  } from 'lucide-react';import { Link } from 'react-router-dom'
import React from 'react';import { ArrowRight  } from 'lucide-react';
import { Link  } from 'react-router-dom';
const AICustomerInsightsPage: React.FC = () => {
  const f eat ures = [
    {
      i con: <Brain c las sNa me="w-8h-8t e xt-c yan-400" />,
      t itle: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze customer behavior patterns and predict futu re trends with 95% accuracy.',
      price: '$299/month',
      benefits: ['Real-time insights', 'Predictive analytics', 'Behavioral analysis', 'Trend forecasting']
    },
    {
      i con: <BarChart3 c las sNa me="w-8h-8t e xt-e merald-400" />,
      t itle: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior, preferences, and value with dynamic clustering algorithms.',
      price: '$199/month',
      benefits: ['Dynamic segmentation', 'Behavioral clustering', 'Value-based grouping', 'Custom criteria']
    },
    {
      i con: <Users c las sNa me="w-8h-8t e xt-p urp le-400" />,
      t itle: 'Customer Journey Mapping',
      description: 'Visualize comp lete customer journeys across all touchpoints with inte ractive journey maps and conversion funnels.',
      price: '$249/month',
      benefits: ['Journey visualization', 'Touchpoint analysis', 'Conversion tracking', 'Optimization insights']
    },
    {
      i con: <TrendingUp c las sNa me="w-8h-8t e xt-oran ge-400" />,
      t itle: 'Churn Prediction',
      description: 'Predict customer churn with 92% accuracy using advanced ML models and proactive retention strategies.',
      price: '$179/month',
      benefits: ['Churn prediction', 'Risk scoring', 'Retention strategies', 'Early warning aler ts']
    },
    {
      i con: <Target c las sNa me="w-8h-8t e xt-pink-400" />,
      t itle: 'Personalization Engine',
      description: 'Create hyper-personalized experiences with AI-driven content recommendations and dynamic pricing.',
      price: '$399/month',
      benefits: ['Content personalization', 'Dynamic pricing', 'Recommendation engine', 'A/B t esting']
    },
    {
      i con: <Zap c las sNa me="w-8h-8t e xt-y ell ow-400" />,
      t itle: 'Real-time Insights',
      description: 'Get instant customer insights with real-time data processing and live dashboard updates.',
      price: '$149/month',
      benefits: ['Live dashboards', 'Real-time aler ts', 'Instant notifications', 'Live data streams']
    }
  ]
  const useCases = [
    {
      t itle: 'E-commerce Personalization',
      description: 'Increase conversion rates by 35% with personalized product recommendations and dynamic pricing.',
      metrics: ['35% conversion increase', '28% higher AOV', '42% repe at p urc hases'],
      i con: <S hoppin gCart c las sNa me="w-6h-6t e xt-c yan-400" />
    },
    {
      t itle: 'SaaS Customer Success',
      description: 'Reduce churn by 50% with predictive analytics and proactive customer success management.',
      metrics: ['50% churn reduction', '60% faster onboarding', '45% f eat ure a doption'],
      i con: <M oni tor c las sNa me="w-6h-6t e xt-e merald-400" />
    },
    {
      t itle: 'Financial Services',
      description: 'Improve risk a ssessment and fraud detection with advanced customer behavior analysis.',
      metrics: ['85% fraud detection', '30% risk reduction', '25% faster approva ls'],
      i con: <Shield c las sNa me="w-6h-6t e xt-p urp le-400" />
    },
    {
      t itle: 'Healthcare Analytics',
      description: 'Enhance patient engagement and treatment outcomes with personalized healthcare insights.',
      metrics: ['40% engagement increase', '25% better outcomes', '35% c ost reduction'],
      i con: <Heart c las sNa me="w-6h-6t e xt-pink-400" />
    }
  ]
  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with customer insights',
      f eat ures: [
        'Up to 10,000 customers',
        'Basic analytics dashboard',
        'Email support',
        'Standard integrations',
        'M onthly reports',
        'Basic segmentation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Advanced f eat ures for growing businesses with comp lex customer data',
      f eat ures: [
        'Up to 100,000 customers',
        'Advanced AI analytics',
        'Priority support',
        'Custom integrations',
        'Real-time dashboards',
        'Advanced segmentation',
        'Churn prediction',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'Comp lete solution for large enterprises with unlimited customers',
      f eat ures: [
        'Unlimited customers',
        'Full AI suite',
        '24/7 dedicated support',
        'White-label solution',
        'Custom development',
        'Advanced security',
        'SLA guar antee',
        'Dedicated account manager'
      ],
      popular: false
    }
  ]
  const t estimo nia ls = [
    {
      name: 'Sarah Chen',
      company: 'TechFlow Inc.',
      role: 'VP of Marketing',
      content: 'AI Customer Insights transformed our understanding of customer behavior. We increased retention by 40% in just 3 months.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      company: 'DataDriven Solutions',
      role: 'Head of Analytics',
      content: 'The predictive analytics are incredibly accurate. We can now prevent churn before it happens and o ptimize our customer journey.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Johnson',
      company: 'GrowthCorp',
      role: 'Customer Success Director',
      content: 'The personalization engine h as revolutionized our customer experience. Our NPS score increased by 25 points.',
      rating: 5,
      avatar: 'EJ'
    }
  ]
  return (
    <>
    </>
      <Helmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expe rt solutions." />
      </Helmet>
        <t itle>AI Customer Insights - Advanced Analytics & Personalization | Zion Tech Group</t itle>
        <meta name="description" content="Transform customer data into actionable insights with AI-powered analytics, churn prediction, and personalization. Increase retention by 40% and boost revenue with inte lligent customer insights." / / />
        <meta name="keywords" content="AI customer insights, customer analytics, churn prediction, personalization engine, customer segmentation, behavioral analysis, customer journey mapping, Zion Tech Group" / / />
        <meta name="robots" content="index, foll ow" / / />
        <link rel="cano nical" href="https://ziontechgroup.com/ai-customer-insights" />
      </Helmet>
    </>
      {/* H ero S ection */}
    <>
      </><section c las sNa me="r e lative py-20-px-4-over flow-h idd en" />
        <d iv c las sNa me="a b solute inset-0bg-[r adial-grad ient(c ircle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)]a nimate-pulse" />
        <d iv c las sNa me="a b solute inset-0bg-[r adial-grad ient(c ircle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]a nimate-pulse" style="{{" a nimationD elay: '1 s' }} / />
        <d iv c las sNa me="r e lative m ax-w-7 x lmx-a uto text-c ente-r">
        </d iv>
          <d iv c las sNa me="i nline-f lex i tems-c enter space-x-2 bg-grad ient-to-r from-c yan-500/20 to-p urp le-500/20 t ext-c ya-n-400 px-6 py-3 rounded-full t ext-s-m font-medium mb-8-borderborder-c yan-400/30">
        </d iv>
            <Brain c las sNa me="w-4h-4" / />
            <span>AI-Powered Customer Inte lligence</span>          </d iv>
    </>
          <h1 c las sNa me="t e xt-6 xl md:t ext-8 xl font-b old t ext-w hit-e mb-8-leading-tight" />
            AI Customer
    <>
            </><br / />
            <span c las sNa me="b g-grad ient-to-r from-c yan-400 v ia-p urp le-400 to-pink-400 bg-clip-t exttext-transparenta-n imat-e-pulse">Insights
            </span>
          </h1>
    </>
          <p c las sNa me="t e xt-2 xl t ext-gra-y-300 mb-12 m ax-w-4 x lmx-a utolea ding-relaxed">
              Transform customer data into actionable insights with advanced AI analytics, 
            churn prediction, and hyper-personalization. 
    <>
            </><br / />
            <span c las sNa me="t e xt-c yan-400font-s emi bold">Increase retention by 40% and boost revenue with inte lligent customer insights.</span>
          </p>
    </>
          <d iv c las sNa me="f lex f lex-c ol sm:f lex-row g ap-6justify-c entermb-16">
            <Link to="/cont act" c las sNa me="g roup bg-grad ient-to-r from-c yan-500 to-p urp le-600 t ext-w hit-e px-10 py-4 rounded-xl font-s emi bold hover:from-c yan-600 hover:to-p urp le-700 transition-all duration-300 f lex i tems-c enter justify-c enter space-x-2 shadow-lg shadow-c yan-500/25 hover:shadow-c yan-500/40transformhover:scale-105" >
          <span    />
        </Link>Start Free T rial</span>
              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
            <Link to="/d emo" c las sNa me="g roup border-2 border-c yan-400 t ext-c ya-n-400 px-10 py-4 rounded-xl font-s emi bold hover:bg-c yan-400 hover:t ext-gra-y-900 transition-all duration-300 f lex i tems-c enter justify-c enterspace-x-2backdrop-blur-sm" >
          <span    />
        </Link>W atch D emo</span>
              <Play c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />            </Link>
          </d iv>
      </section>
    </>
      {/* Feat ures S ection */}
    <>
      </><section c las sNa me="p y-20px-4-relative" />
        <d iv c las sNa me="a b solute inset-0 bg-grad ient-to-br from-p urp le-500/5v ia-c yan-500/5to-pink-500/5" / />
        <d iv c las sNa me="r e lative m ax-w-7x lmx-a uto">
        </d iv>
          <d iv c las sNa me="t e xt-c entermb-16">
        </d iv>
            <h2 c las sNa me="t e xt-4 xl md:t ext-5 xl font-b old text-w hit em-b-6" />
              Powerful <span c las sNa me="b g-grad ient-to-r from-c yan-400 to-p urp le-400bg-clip-t exttext-transpare-n-t">AI Feat ures</span>
            </h2>
            <p c las sNa me="t e xt-xl t ext-gra-y-300 m ax-w-4x lmx-a uto" />
    </>              Advanced AI-powered customer insights that help you understand, predict, and o ptimize customer behavior 
              for m aximum business growth and retention.
    <>
            </p>
          </d iv>
    </>
          <d iv c las sNa me="g r id g rid-c ols-1 md:g rid-c ols-2lg:g rid-c ols-3g ap-8">
            {f eat ures.map((f eat ure, index) => (
    <>
              </><d iv key="{index}" c las sNa me="g roup bg-w hite/10 backdrop-blur-lg rounded-2 xl p-8 border border-w hite/20 hover:bg-w hite/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-c yan-500/10" />
                <d iv c las sNa me="f lex i tems-c enter justify-c enter w-16 h-16 bg-grad ient-to-r from-c yan-500 to-p urp le-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{f eat ure.i con}
                </d iv>
            {useCases.map((useCase, index) => (
    <>
              </><d iv key="{index}" c las sNa me="g roup bg-w hite/10 backdrop-blur-lg rounded-2 xl p-8 border border-w hite/20 hover:bg-w hite/20 transition-allduration-300hover:scale-105" />
                <d iv c las sNa me="f lex i tems-c enterspace-x-4mb-6">
            ))}
    <>
          </d iv>
      </section>
    </>
      {/* Pricing S ection */}
    <>
      </><section c las sNa me="p y-20px-4-relative" />
            {pricing.map((plan, index) => (
              <d iv key="{index}" c las sNa me="{`r e lative" group bg-w hite/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-c yan-400/50 bg-grad ient-to-br from-c yan-500/10 to-p urp le-500/10' 
                  : 'border-w hite/20 hover: bg-w hite/20'
              }`} />
                {plan.popular && (
            {t estimo nia ls.map((t estimo nial, index) => (
    <>
              </><d iv key="{index}" c las sNa me="g roup bg-w hite/10 backdrop-blur-lg rounded-2 xl p-8 border border-w hite/20 hover:bg-w hite/20 transition-allduration-300hover:scale-105" />
                <d iv c las sNa me="f lex i tems-c enterspace-x-4mb-6">
                  <d iv c las sNa me="w-12 h-12 b g-grad ient-to-r from-c yan-500 to-p urp le-600 rounded-full f lex i tems-c enter justify-c entert ext-w hitefon-t-b old"  />{t estimo nial.avatar}
                  </d iv>
                  <d iv>
            <h4 c las sNa me="t e xt-l gfont-s emi bol dte xt-w hit-e"   />{t estimo nial.name}</h4>
                    <p c las sNa me="t e xt-gray-400t ext-s-m">
              {t estimo nial.role}</p>
                    <p c las sNa me="t e xt-gray-500t ext-s-m">
              {t estimo nial.company}</p>
                  </d iv>
                <d iv c las sNa me="f lex i tems-c enterspace-x-1mb-4">                  {[...Array(t estimo nial.rating)].map((_, i) => (
                    <Star key="{i}" c las sNa me="w-5 h-5t e xt-y ell ow-400f ill-current" />
                  ))}
                </d iv>
                <p c las sNa me="t e xt-gray-300leading-relaxed italic" />
                  "{t estimo nial.content}"
    <>                </p>
              </d iv>
    </>
            ))}
    <>
          </d iv>
      </section>
    </>
      {/* C TA S ection */}
    <>
      </><section c las sNa me="p y-20px-4-relative" />
        <d iv c las sNa me="a b solute inset-0 bg-grad ient-to-r from-c yan-500/10v ia-p urp le-500/10to-pink-500/10" / />
        <d iv c las sNa me="r e lative m ax-w-7x lmx-a uto">
        </d iv>
          <d iv c las sNa me="t e xt-c enter" />
            <d iv c las sNa me="b g-grad ient-to-r from-c yan-600 v ia-p urp le-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverf low-h idd en">
        </d iv>
              <d iv c las sNa me="r e lativez-10">
        </d iv>
                <h2 c las sNa me="t e xt-4 xl sm:t ext-5 xl md:t ext-6 xl font-b old t ext-w hit em-b-6leading-tight" />
                  Ready to Transform Y our <span c las sNa me="b g-grad ient-to-r from-c yan-300 to-pink-300bg-clip-t exttext-transpare-n-t">Customer Experience?</span>                </h2>
    </>
                <p c las sNa me="t e xt-xl sm:t ext-2 xl t ext-w hit-e/90 mb-8 sm:mb-12 m ax-w-4 x lmx-a utolea ding-relaxed">
              Start your free trial today and see how AI Customer Insights can help you 
                  understand, predict, and o ptimize customer behavior for m aximum growth.
                </p>
                <d iv c las sNa me="f lex f lex-c ol sm:f lex-row g ap-6justify-c entermb-8">
                  <Link to="/cont act" c las sNa me="g roup bg-w hite t ext-c ya-n-600 px-10 py-4 rounded-xl font-b old t ext-l-g hover:bg-gray-100 transition-all duration-300 f lex i tems-c enter justify-c enter space-x-2 shadow-lg hover:shadow-xltr ansformhover:scale-105" >
          <span    />
        </Link>Start Free T rial</span>
                    <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
                  </Link>
                  <Link to="/d emo" c las sNa me="g roup border-2 border-w hite t ext-w hit-e px-10 py-4 rounded-xl font-b old t ext-l-g hover:bg-w hite/10 transition-all duration-300 f lex i tems-c enter justify-c enterspace-x-2backdrop-blur-sm" >
          <span    />
        </Link>Schedule D emo</span>
                    <Calendar c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />                  </Link>
                </d iv>
    </>
    <>
                </><d iv c las sNa me="g r id g rid-c ols-1 md:g rid-c ols-3g ap-6t ext-w hit-e/80">
        </d iv>
                  <d iv c las sNa me="f lex i tems-c enterjustify-c enterspace-x-3">
        </d iv>
                    <Phone c las sNa me="w-5h-5t e xt-c yan-300" / />
                    <span c las sNa me="t e xt-sm">+1 302 464 0950</span>
                  </d iv>
                  <d iv c las sNa me="f lex i tems-c enterjustify-c enterspace-x-3">
        </d iv>
                    <Mail c las sNa me="w-5h-5t e xt-p urp le-300" / />
                    <span c las sNa me="t e xt-sm">k leb er@ziontechgroup.com</span>
                  </d iv>
                  <d iv c las sNa me="f lex i tems-c enterjustify-c enterspace-x-3">
        </d iv>
                    <MapPin c las sNa me="w-5h-5t e xt-pink-300" / />
                    <span c las sNa me="t e xt-sm">M idd let own DE 19709</span>                  </d iv>
              </d iv>
          </d iv>
      </section>
    </>
  );
};
export default AICustomerInsightsPage;
    </>