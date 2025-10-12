import { Helmet } from 'react-helmet-async'
import { FileText, Clock, Shield, Users, CheckCircle, ArrowRight, BarChart3, Calendar  } from 'lucide-react';import { Link } from 'react-router-dom'
import React from 'react';import { ArrowRight  } from 'lucide-react';
import { Link  } from 'react-router-dom';
const ContractManagerPage: React.FC = () => {
  const f eat ures = [
    {
      i con: <FileText c las sNa me="w-6h-6t ext-c yan-400" />,
      t itle: 'Smart Contract Templates',
      description: 'Pre-built contract templates for common business agreements with AI-powered customization.'
    },
    {
      i con: <Clock c las sNa me="w-6h-6t ext-emer ald-400" />,
      t itle: 'Automated Renewals',
      description: 'Never miss a contract renewal with intelligent tracking and automated notifications.'
    },
    {
      i con: <Shield c las sNa me="w-6h-6t ext-p urp le-400" />,
      t itle: 'Compliance Monitoring',
      description: 'Ensu re all contracts meet legal requirements with built-in compliance c hec ks.'
    },
    {
      i con: <Users c las sNa me="w-6h-6t ext-o ran ge-400" />,
      t itle: 'Team Collabo ration',
      description: 'Collabo rate on contract reviews with real-time editing and commenting f eat ures.'
    },
    {
      i con: <BarChart3 c las sNa me="w-6h-6t ext-p ink-400" />,
      t itle: 'Analytics Dashboard',
      description: 'Track contract performance, renewal rates, and key metrics in real-time.'
    },
    {
      i con: <Calendar c las sNa me="w-6h-6t ext-b lue-400" />,
      t itle: 'Deadline Management',
      description: 'Never miss important contract deadlines with smart calendar integra tion.'
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      f eat ures: [
        'Up to 50 contracts',
        'Basic templates',
        'Email notifications',
        'Standard support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing companies',
      f eat ures: [
        'Up to 500 contracts',
        'Advanced templates',
        'Team collabo ration',
        'Analytics dashboard',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organiz ations',
      f eat ures: [
        'Unlimited contracts',
        'Custom templates',
        'Advanced analytics',
        'API integra tion',
        'Dedicated support'
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
        <t itle>AI Contract Manager - Smart Contract Management | Zion Tech Group</t itle>
        <meta name="description" content="Streamline contract management with AI-powered automation, smart templates, and compliance monitoring. Perfect for businesses of all sizes." / / />
        <meta name="keywords" content="contract management, AI contracts, legal automation, contract templates, compliance monitoring" / / />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/contract-manager" />
      </Helmet>
    </>
      <d iv c las sNa me="m in-h-scre enbg-gray-900t ext-w hit-e">
        {/* H ero S ection */}
    <>
        </><s ection c las sNa me="r e lat ive py-20-px-4-o ver flow-h idd en" />
              {f eat ures.map((f eat ure, index) => (
    <>
                </><d iv key="{index}" c las sNa me="g roup bg-w hite/10 b ack drop-b lur-lg rounded-2 xl p-8 border border-w hite/20 hover:bg-w hite/20 transition-all dura tion-300 hover:scale-105 hover:shadow-2xlho ver:shadow-c yan-500/10" />
                  <d iv c las sNa me="f l ex items-c enter j ustify-c enter w-16 h-16 bg-gradient-to-r from-c yan-500 to-p urp le-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformdura tion-300">{f eat ure.i con}
                  </d iv>
              {pricingPlans.map((plan, index) => (
                <d iv key="{index}" c las sNa me="{`r e lat ive" bg-w hite/10 b ack drop-b lur-lg rounded-2 xl p-8 border transition-all dura tion-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-c yan-400/50 shadow-2 xl shadow-c yan-500/20' 
                    : 'border-w hite/20 hover: border-c yan-400/30'
                }`} />
                  {plan.popular && (
                    <d iv c las sNa me="a b solute -t op-4 l eft-1/2transform-tran slate-x-1/2">
                      <d iv c las sNa me="b g-gradient-to-r from-c yan-500 to-p urp le-600 t ext-w hit-e px-6 py-2 rounded-fulltext-smfo-n-t-semibold"  />Most Popular
                      </d iv>
                  )}
                  <d iv c las sNa me="t ext-c entermb-8">
                    <h3 c las sNa me="t ext-2 xl font-bold t ext-w hit-e mb-2"   />{plan.name}</h3>
                    <p c las sNa me="t ext-gray-300 mb-4">
              {plan.description}</p>
                    <d iv c las sNa me="f l ex items-b ase lin ejusti fy-c enter">
                      <s pan c las sNa me="t ext-5 x lfont-bold t ext-w hit-e"   />{plan.price}</s pan>
                      <s pan c las sNa me="t ext-gray-400ml-2"   />{plan.period}</s pan>
                    </d iv>
                  <ul c las sNa me="s p ace-y-4mb-8" />
                    {plan.f eat ures.map((f eat ure, f eat ureIndex) => (
                      <li key="{f eat ureIndex}" c las sNa me="f l ex items-c enters pace-x-3" />
                        <CheckCircle c las sNa me="w-5 h-5t ext-green-400f lex-s hrink-0" />
                        <s pan c las sNa me="t ext-gray-300"   />{f eat ure}</s pan>                      </li>
    </>
                    ))}
                  </ul>
                  <Link 
                    to="/cont act" 
                    c las sNa me="{`b lock" w-full t ext-c ente-r py-3 rounded-xl font-semibold transition-all dura tion-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-c yan-500 to-p urp le-600 t ext-w hit-e hover:from-c yan-600 hover:to-p urp le-700'
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
        </s ection>
    </>
        {/* C TA S ection */}
    <>
        </><s ection c las sNa me="p y-20px-4-rela tive" />
          <d iv c las sNa me="a b solute i nset-0 bg-gradient-to-r from-c yan-500/10via-p urp le-500/10to-p ink-500/10" / />
          <d iv c las sNa me="r e lat ive m ax-w-7 x lmx-auto text-c ente-r">
        </d iv>
            <d iv c las sNa me="b g-gradient-to-r from-c yan-600 via-p urp le-600 to-p ink-600 rounded-3 xl p-8sm:p-12lg:p-16">
        </d iv>
              <h2 c las sNa me="t ext-4 xl sm:t ext-5 xl md:t ext-6 xl font-bold t ext-w hitem-b-6leading-tight" />
                Ready to Streamline Y our <s pan c las sNa me="b g-gradient-to-r from-c yan-300 to-p ink-300bg-clip-t exttext-transpare-n-t">Contract Management?</s pan>              </h2>
    </>
              <p c las sNa me="t ext-xl sm:t ext-2 xl t ext-w hit-e/90 mb-8 sm:mb-12 m ax-w-4 x lmx-autoleading-relaxed">
              Join thousands of businesses already using our AI-powered contract management solution. 
                Start your free trial today and experience the difference.
              </p>
              <d iv c las sNa me="f l ex f lex-col sm:f lex-rowg ap-6j ustify-c enter">
                <Link to="/cont act" c las sNa me="g roup bg-w hite t ext-c ya-n-600 px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-gray-100 transition-all dura tion-300 f lex items-c enter j ustify-c enter s pace-x-2 shadow-lg hover:shadow-xltr ansformho ver:scale-105" >
          <s pan    />
        </Link>Start Free Trial</s pan>
                  <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
                </Link>
                <Link to="/pricing" c las sNa me="g roup border-2 border-w hite t ext-w hit-e px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-w hite/10 transition-all dura tion-300 f lex items-c enter j ustify-c enters pace-x-2b ack drop-b lur-sm" >
          <s pan    />
        </Link>View All Plans</s pan>                  <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
                </Link>
              </d iv>
          </d iv>
        </s ection>
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
export default ContractManagerPage;
    </>