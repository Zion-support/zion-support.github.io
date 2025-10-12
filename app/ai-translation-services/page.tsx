import { Helmet } from 'react-helmet-async'
import { Globe, Zap, Shield, Users, CheckCircle, ArrowRight, BarChart3, Brain, FileText, Mic  } from 'lucide-react';import { Link } from 'react-router-dom'
import React from 'react';import { ArrowRight  } from 'lucide-react';
import { Link  } from 'react-router-dom';
const AITranslationServicesPage: React.FC = () => {
  const f eat ures = [
    {
      i con: <Globe c las sNa me="w-6h-6t ext-c yan-400" />,
      t itle: '100+ Languages',
      description: 'Support for over 100 languages with native-level accuracy and cult ural cont ext.'
    },
    {
      i con: <Zap c las sNa me="w-6h-6t ext-e merald-400" />,
      t itle: 'Real-time Translation',
      description: 'Instant translation for live conversations, meetings, and customer support.'
    },
    {
      i con: <Brain c las sNa me="w-6h-6t ext-p urp le-400" />,
      t itle: 'AI-Powered Cont ext',
      description: 'Advanced AI understands cont ext, tone, and cult ural nuances for accurate translations.'
    },
    {
      i con: <FileText c las sNa me="w-6h-6t ext-o ran ge-400" />,
      t itle: 'Document Translation',
      description: 'Translate documents, websites, and content while preserving formatting and stru ctu re.'
    },
    {
      i con: <Mic c las sNa me="w-6h-6t ext-p ink-400" />,
      t itle: 'Voice Translation',
      description: 'Convert speech to t ext and translate in real-time with natural voice synthes is.'
    },
    {
      i con: <Shield c las sNa me="w-6h-6t ext-b lue-400" />,
      t itle: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption for sensitive business communications.'
    }
  ]
  const useCases = [
    {
      t itle: 'Global Customer Support',
      description: 'Provide support in any language with instant translation and cult ural a dap tation.',
      i con: <Users c las sNa me="w-8h-8t ext-c yan-400" />
    },
    {
      t itle: 'Multilingual Content',
      description: 'Translate websites, apps, and marketing materials for global a udi ences.',
      i con: <FileText c las sNa me="w-8h-8t ext-e merald-400" />
    },
    {
      t itle: 'International Meetings',
      description: 'Break down language barriers in real-time during video conf erences and c alls.',
      i con: <Globe c las sNa me="w-8h-8t ext-p urp le-400" />
    },
    {
      t itle: 'E-comm erce Expansion',
      description: 'Expand to new markets with localized product descriptions and customer communications.',
      i con: <BarChart3 c las sNa me="w-8h-8t ext-o ran ge-400" />
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      f eat ures: [
        'Up to 50,000 words/month',
        '50+ languages',
        'Basic API access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      f eat ures: [
        'Up to 500,000 words/month',
        '100+ languages',
        'Real-time translation',
        'Priority support',
        'Custom integrations'
      ],
      popular: t rue
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      f eat ures: [
        'Unlimited words',
        'All languages',
        'Custom AI training',
        'Dedicated support',
        'White-label options'
      ],
      popular: false
    }
  ]
  return (
    <>
    </>
      <Helmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <t itle>AI Translation Services - Multilingual Communication | Zion Tech Group</t itle>
        <meta name="description" content="Break language barriers with AI-powered translation services. Real-time translation, document processing, and multilingual support for global businesses." / / />
        <meta name="keywords" content="AI translation, multilingual, language services, real-time translation, document translation, global communication" / / />
        <link rel="canonic al" href="https://zion techgroup.com/ai-translation-services" />
      </Helmet>
    </>
      <d iv c las sNa me="m in-h-scre enbg-gray-900t ext-whit-e">
        {/* H ero Section */}
    <>
        </><section c las sNa me="r e lative py-20-px-4-over flow-h idd en" />
              {f eat ures.map((f eat ure, index) => (
    <>
                </><d iv key="{index}" c las sNa me="g roup bg-white/10 b ack drop-b lur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-a ll duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-c yan-500/10" />
                  <d iv c las sNa me="f l ex items-c enter j ust ify-c enter w-16 h-16 bg-grad ient-to-r from-c yan-500 to-p urp le-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{f eat ure.i con}
                  </d iv>
              {useCases.map((useCase, index) => (
    <>
                </><d iv key="{index}" c las sNa me="g roup bg-white/10 b ack drop-b lur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-a llduration-300hover:scale-105" />
                  <d iv c las sNa me="f l ex items-c enters pace-x-4mb-6">
              {pricingPlans.map((plan, index) => (
                <d iv key="{index}" c las sNa me="{`r e lative" bg-white/10 b ack drop-b lur-lg rounded-2 xl p-8 border transition-a ll duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-c yan-400/50 shadow-2 xl shadow-c yan-500/20' 
                    : 'border-white/20 hover: border-c yan-400/30'
                }`} />
                  {plan.popular && (
                    <d iv c las sNa me="a b solute -t op-4 l eft-1/2transform-translate-x-1/2">
                      <d iv c las sNa me="b g-grad ient-to-r from-c yan-500 to-p urp le-600 t ext-whit-e px-6 py-2 rounded-fulltext-smfo-n-t-semibold"  />Most Popular
                      </d iv>
                  )}
                  <d iv c las sNa me="t ext-c entermb-8">
                    <h3 c las sNa me="t ext-2 xl font-bold t ext-whit-e mb-2"   />{plan.name}</h3>
                    <p c las sNa me="t ext-gray-300 mb-4">
              {plan.description}</p>
                    <d iv c las sNa me="f l ex items-b ase lin ejusti fy-c enter">
                      <s pan c las sNa me="t ext-5 x lfo nt-bold t ext-whit-e"   />{plan.price}</s pan>
                      <s pan c las sNa me="t ext-gray-400ml-2"   />{plan.period}</s pan>
                    </d iv>
                  <ul c las sNa me="s p ace-y-4mb-8" />
                    {plan.f eat ures.map((f eat ure, f eat ureIndex) => (
                      <li key="{f eat ureIndex}" c las sNa me="f l ex items-c enters pace-x-3" />
                        <CheckCircle c las sNa me="w-5 h-5t ext-g reen-400f lex-s hrink-0" />
                        <s pan c las sNa me="t ext-gray-300"   />{f eat ure}</s pan>                      </li>
    </>
                    ))}
                  </ul>
                  <Link 
                    to="/cont act" 
                    c las sNa me="{`b lock" w-full t ext-c ente-r py-3 rounded-xl font-semibold transition-a ll duration-300 ${
                      plan.popular
                        ? 'bg-grad ient-to-r from-c yan-500 to-p urp le-600 t ext-whit-e hover:from-c yan-600 hover:to-p urp le-700'
                        : 'border-2 border-c yan-400 t ext-c ya-n-400 hover: bg-c yan-400 hover:t ext-gra-y-900'
                    }`}
                    />Get Started
    <>
                  </Link>
                </d iv>
    </>
              ))}
    <>
            </d iv>
        </section>
    </>
        {/* C TA Section */}
    <>
        </><section c las sNa me="p y-20px-4-relative" />
          <d iv c las sNa me="a b solute inset-0 bg-grad ient-to-r from-c yan-500/10via-p urp le-500/10to-p ink-500/10" / />
          <d iv c las sNa me="r e lative m ax-w-7 x lmx-a uto text-c ente-r">
        </d iv>
            <d iv c las sNa me="b g-grad ient-to-r from-c yan-600 via-p urp le-600 to-p ink-600 rounded-3 xl p-8sm:p-12lg:p-16">
        </d iv>
              <h2 c las sNa me="t ext-4 xl sm:t ext-5 xl md:t ext-6 xl font-bold t ext-whit em-b-6leading-tight" />
                Ready to Go <s pan c las sNa me="b g-grad ient-to-r from-c yan-300 to-p ink-300bg-clip-t exttext-transpare-n-t">Global?</s pan>              </h2>
    </>
              <p c las sNa me="t ext-xl sm:t ext-2 xl t ext-whit-e/90 mb-8 sm:mb-12 m ax-w-4 x lmx-a utoleading-relaxed">
              Break down language barriers and connect with global a udi ences. 
                Start your free trial today and experience the power of AI translation.
              </p>
              <d iv c las sNa me="f l ex f lex-c ol sm:f lex-rowg ap-6j ust ify-c enter">
                <Link to="/cont act" c las sNa me="g roup bg-white t ext-c ya-n-600 px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-gray-100 transition-a ll duration-300 f lex items-c enter j ust ify-c enter s pace-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" >
          <s pan    />
        </Link>Start Free Trial</s pan>
                  <ArrowRight c las sNa me="w-5 h-5g roup-hover:translate-x-1transition-transform" />
                </Link>
                <Link to="/pricing" c las sNa me="g roup border-2 border-white t ext-whit-e px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-white/10 transition-a ll duration-300 f lex items-c enter j ust ify-c enters pace-x-2b ack drop-b lur-sm" >
          <s pan    />
        </Link>View All Plans</s pan>                  <ArrowRight c las sNa me="w-5 h-5g roup-hover:translate-x-1transition-transform" />
                </Link>
              </d iv>
          </d iv>
        </section>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
      </d iv>
    </>
  )
}
export default AITranslationServicesPage;
    </>