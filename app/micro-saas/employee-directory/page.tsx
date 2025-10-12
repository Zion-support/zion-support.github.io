import { Helmet } from 'react-helmet-async'
import { Users, Search, Shield, Phone, CheckCircle, ArrowRight, BarChart3, Clock  } from 'lucide-react';import { Link } from 'react-router-dom'
import React from 'react';import { ArrowRight  } from 'lucide-react';
import { Link  } from 'react-router-dom';
const EmployeeDirectoryPage: React.FC = () => {
  const f eat ures = [
    {
      i con: <Search c las sNa me="w-6h-6t e xt-c yan-400" />,
      t itle: 'Advanced Search',
      description: 'Find employees instantly with powerful search filters and smart suggestions.'
    },
    {
      i con: <Users c las sNa me="w-6h-6t e xt-e mer ald-400" />,
      t itle: 'Team Organization',
      description: 'Organize employees by department, role, location, and custom categor ies.'
    },
    {
      i con: <Shield c las sNa me="w-6h-6t e xt-p urp le-400" />,
      t itle: 'Privacy Controls',
      description: 'Granular privacy settings to control what information is visible to w hom.'
    },
    {
      i con: <Phone c las sNa me="w-6h-6t e xt-o ran ge-400" />,
      t itle: 'Contact Integration',
      description: 'Seamless integration with phone systems and communication platforms.'
    },
    {
      i con: <BarChart3 c las sNa me="w-6h-6t e xt-p ink-400" />,
      t itle: 'Analytics Dashboard',
      description: 'Track directory usage and employee engagement with detailed analytics.'
    },
    {
      i con: <Clock c las sNa me="w-6h-6t e xt-b lue-400" />,
      t itle: 'Real-time Updates',
      description: 'Automatic updates when employee information chan ges across all systems.'
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small teams',
      f eat ures: [
        'Up to 50 employees',
        'Basic search',
        'Contact integration',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing compani es',
      f eat ures: [
        'Up to 500 employees',
        'Advanced search',
        'Team organization',
        'Analytics dashboard',
        'Prio rity support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations',
      f eat ures: [
        'Unlimited employees',
        'Custom integrations',
        'Advanced analytics',
        'API access',
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
        <t itle>AI Employee Directory - Smart Team Management | Zion Tech Group</t itle>
        <meta name="description" content="Create a smart employee directory with advanced search, team organization, and privacy controls. Perfect for compani es of all sizes." / / />
        <meta name="keywords" content="employee directory, team management, HR software, employee search, organizational chart" / / />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/employee-directory" />
      </Helmet>
    </>
      <d iv c las sNa me="m in-h-scre enbg-gray-900t ext-w hit-e">
        {/* H ero S ection */}
    <>
        </><s ection c las sNa me="r e lat ive py-20-px-4-o ver flow-h idd en" />
              {f eat ures.map((f eat ure, index) => (
    <>
                </><d iv key="{index}" c las sNa me="g roup bg-w hite/10 b ack drop-b lur-lg rounded-2 xl p-8 border border-w hite/20 hover:bg-w hite/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlho ver:shadow-c yan-500/10" />
                  <d iv c las sNa me="f l ex items-c enter j ust ify-c enter w-16 h-16 bg-gradient-to-r from-c yan-500 to-p urp le-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{f eat ure.i con}
                  </d iv>
              {pricingPlans.map((plan, index) => (
                <d iv key="{index}" c las sNa me="{`r e lat ive" bg-w hite/10 b ack drop-b lur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-c yan-400/50 shadow-2 xl shadow-c yan-500/20' 
                    : 'border-w hite/20 hover: border-c yan-400/30'
                }`} />
                  {plan.popular && (
                    <d iv c las sNa me="a b solute -t op-4 l eft-1/2transform-tran slate-x-1/2">
                      <d iv c las sNa me="b g-gradient-to-r from-c yan-500 to-p urp le-600 t ext-w hit-e px-6 py-2 rounded-fulltext-smfo-n-t-semibold"  />Most Popular
                      </d iv>
                  )}
                  <d iv c las sNa me="t e xt-c entermb-8">
                    <h3 c las sNa me="t e xt-2 xl font-bold t ext-w hit-e mb-2"   />{plan.name}</h3>
                    <p c las sNa me="t e xt-gray-300 mb-4">
              {plan.description}</p>
                    <d iv c las sNa me="f l ex items-b ase lin ejusti fy-c enter">
                      <s pan c las sNa me="t e xt-5 x lfont-bold t ext-w hit-e"   />{plan.price}</s pan>
                      <s pan c las sNa me="t e xt-gray-400ml-2"   />{plan.period}</s pan>
                    </d iv>
                  <ul c las sNa me="s p ace-y-4mb-8" />
                    {plan.f eat ures.map((f eat ure, f eat ureIndex) => (
                      <li key="{f eat ureIndex}" c las sNa me="f l ex items-c enters pace-x-3" />
                        <CheckCircle c las sNa me="w-5 h-5t e xt-g reen-400f lex-s hrink-0" />
                        <s pan c las sNa me="t e xt-gray-300"   />{f eat ure}</s pan>                      </li>
    </>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    c las sNa me="{`b lock" w-full t ext-c ente-r py-3 rounded-xl font-semibold transition-all duration-300 ${
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
        </><s ection c las sNa me="p y-20px-4-relative" />
          <d iv c las sNa me="a b solute inset-0 bg-gradient-to-r from-c yan-500/10via-p urp le-500/10to-p ink-500/10" / />
          <d iv c las sNa me="r e lat ive m ax-w-7 x lmx-a uto text-c ente-r">
        </d iv>
            <d iv c las sNa me="b g-gradient-to-r from-c yan-600 via-p urp le-600 to-p ink-600 rounded-3 xl p-8sm:p-12lg:p-16">
        </d iv>
              <h2 c las sNa me="t e xt-4 xl sm:t ext-5 xl md:t ext-6 xl font-bold t ext-w hitem-b-6leading-tight" />
                Ready to Conn ect Y our <s pan c las sNa me="b g-gradient-to-r from-c yan-300 to-p ink-300bg-clip-t exttext-transpare-n-t">Team?</s pan>              </h2>
    </>
              <p c las sNa me="t e xt-xl sm:t ext-2 xl t ext-w hit-e/90 mb-8 sm:mb-12 m ax-w-4 x lmx-a utoleading-relaxed">
              Join thousands of organizations using our employee directory platform. 
                Start your free trial today and see how easy team conn ection can be.
              </p>
              <d iv c las sNa me="f l ex f lex-c ol sm:f lex-rowg ap-6j ust ify-c enter">
                <Link to="/contact" c las sNa me="g roup bg-w hite t ext-c ya-n-600 px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-gray-100 transition-all duration-300 f lex items-c enter j ust ify-c enter s pace-x-2 shadow-lg hover:shadow-xltransformho ver:scale-105" >
          <s pan    />
        </Link>Start Free Trial</s pan>
                  <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
                </Link>
                <Link to="/pricing" c las sNa me="g roup border-2 border-w hite t ext-w hit-e px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-w hite/10 transition-all duration-300 f lex items-c enter j ust ify-c enters pace-x-2b ack drop-b lur-sm" >
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
export default EmployeeDirectoryPage;
    </>