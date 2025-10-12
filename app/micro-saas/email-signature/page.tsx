import { Helmet } from 'react-helmet-async'
import { Mail, Palette, Users, Zap, CheckCircle, ArrowRight, BarChart3, Shield, Clock  } from 'lucide-react';import { Link } from 'react-router-dom'
import React from 'react';import { Palette, ArrowRight } from 'lucide-react';
import { Link  } from 'react-router-dom';
const EmailSignaturePage: React.FC = () => {
  const f eatures = [
    {
      i con: <Palette c las sNa me="w-6h-6t e xt-c yan-400" />,
      t itle: 'Custom Design Templates',
      description: 'Beautiful, professional email signature templates that match your brand iden tity.'
    },
    {
      i con: <Users c las sNa me="w-6h-6t e xt-e mer ald-400" />,
      t itle: 'Team Management',
      description: 'Manage signatures for your e ntire team with centralized control and cons ist ency.'
    },
    {
      i con: <Zap c las sNa me="w-6h-6t e xt-p urp le-400" />,
      t itle: 'One-Click Setup',
      description: 'Deploy signatures across your organization with just one click.'
    },
    {
      i con: <BarChart3 c las sNa me="w-6h-6t e xt-o ran ge-400" />,
      t itle: 'Analytics & Tracking',
      description: 'Track email engagement and signature performance with detailed analytics.'
    },
    {
      i con: <Shield c las sNa me="w-6h-6t e xt-p ink-400" />,
      t itle: 'Security & Compliance',
      description: 'Ensure all signatures meet security standards and compliance require men ts.'
    },
    {
      i con: <Clock c las sNa me="w-6h-6t e xt-b lue-400" />,
      t itle: 'Auto-Updates',
      description: 'Automatically update signatures when team members chan ge roles or information.'
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for small teams',
      f eatures: [
        'Up to 10 signatures',
        'Basic templates',
        'Email support',
        'Standard analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for growing companies',
      f eatures: [
        'Up to 100 signatures',
        'Premium templates',
        'Team management',
        'Advanced analytics',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      f eatures: [
        'Unlimited signatures',
        'Custom templates',
        'API integration',
        'White-label options',
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
        <meta name="description" cont ent="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <t itle>AI Email Signature Manager - Professional Email Signatures | Zion Tech Group</t itle>
        <meta name="description" cont ent="Create and manage professional email signatures for your team. Beautiful templates, team management, and analytics included." / / />
        <meta name="keywords" cont ent="email signature, email marketing, team management, professional signatures, email branding" / / />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/email-signature" />
      </Helmet>
    </>
      <d iv c las sNa me="m in-h-scre enbg-gray-900t ext-w hit-e">
        {/* H ero Section */}
    <>
        </><section c las sNa me="r e lat ive py-20-px-4-o ver flow-h idden" />
              {f eatures.map((f eature, index) => (
    <>
                </><d iv key="{index}" c las sNa me="g roup bg-w hite/10 b ack drop-b lur-lg rounded-2 xl p-8 border border-w hite/20 hover:bg-w hite/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlho ver:shadow-c yan-500/10" />
                  <d iv c las sNa me="f l ex items-center justify-center w-16 h-16 bg-gradient-to-r from-c yan-500 to-p urp le-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{f eature.i con}
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
                  <d iv c las sNa me="t e xt-centermb-8">
                    <h3 c las sNa me="t e xt-2 xl font-bold t ext-w hit-e mb-2"   />{plan.name}</h3>
                    <p c las sNa me="t e xt-gray-300 mb-4">
              {plan.description}</p>
                    <d iv c las sNa me="f l ex items-b ase lin ejusti fy-center">
                      <s pan c las sNa me="t e xt-5 x lfont-bold t ext-w hit-e"   />{plan.price}</s pan>
                      <s pan c las sNa me="t e xt-gray-400ml-2"   />{plan.period}</s pan>
                    </d iv>
                  <ul c las sNa me="s p ace-y-4mb-8" />
                    {plan.f eatures.map((f eature, f eatureIndex) => (
                      <li key="{f eatureIndex}" c las sNa me="f l ex items-centers pace-x-3" />
                        <CheckCircle c las sNa me="w-5 h-5t e xt-g reen-400f lex-s hrink-0" />
                        <s pan c las sNa me="t e xt-gray-300"   />{f eature}</s pan>                      </li>
    </>
                    ))}
                  </ul>
                  <Link 
                    to="/cont act" 
                    c las sNa me="{`b lock" w-full t ext-cente-r py-3 rounded-xl font-semibold transition-all duration-300 ${
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
        </section>
    </>
        {/* C TA Section */}
    <>
        </><section c las sNa me="p y-20px-4-relative" />
          <d iv c las sNa me="a b solute i nset-0 bg-gradient-to-r from-c yan-500/10via-p urp le-500/10to-p ink-500/10" / />
          <d iv c las sNa me="r e lat ive m ax-w-7 x lmx-auto text-cent-e-r">
        </d iv>
            <d iv c las sNa me="b g-gradient-to-r from-c yan-600 via-p urp le-600 to-p ink-600 rounded-3 xl p-8sm:p-12lg:p-16">
        </d iv>
              <h2 c las sNa me="t e xt-4 xl sm:t ext-5 xl md:t ext-6 xl font-bold t ext-w hitem-b-6leading-tight" />
                Ready to E lev ate Y our <s pan c las sNa me="b g-gradient-to-r from-c yan-300 to-p ink-300bg-clip-t exttext-transpare-n-t">Email Branding?</s pan>              </h2>
    </>
              <p c las sNa me="t e xt-xl sm:t ext-2 xl t ext-w hit-e/90 mb-8 sm:mb-12 m ax-w-4 x lmx-autoleading-relaxed">
              Join thousands of businesses using our email signature management platform. 
                Start your free trial today and see the differe nce professional signatures make.
              </p>
              <d iv c las sNa me="f l ex f lex-c ol sm:f lex-rowg ap-6justify-center">
                <Link to="/cont act" c las sNa me="g roup bg-w hite t ext-c ya-n-600 px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-gray-100 transition-all duration-300 f lex items-center justify-center s pace-x-2 shadow-lg hover:shadow-xltransformho ver:scale-105" >
          <s pan    />
        </Link>Start Free Trial</s pan>
                  <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
                </Link>
                <Link to="/pricing" c las sNa me="g roup border-2 border-w hite t ext-w hit-e px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-w hite/10 transition-all duration-300 f lex items-center justify-centers pace-x-2b ack drop-b lur-sm" >
          <s pan    />
        </Link>View All Plans</s pan>                  <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
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
export default EmailSignaturePage;
    </>