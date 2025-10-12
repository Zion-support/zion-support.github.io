import { Helmet } from 'react-helmet-async'
import { Mail, Palette, Users, Zap, Check Circle, Arrow Right, Bar Chart3, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom'
import React from 'react';
import { Palette, Arrow Right} from 'lucide-react';
import { Link } from 'react-router-dom';

const Email Signature Page: React.F C = () => {
  const features = [
    {
      icon: <P aletteclass Name="w-6h-6t e xt-c y an-400" />,
      title: 'Custom Design Templates',
      description: 'Beautiful, professional email signature templates that match your brand identity.'
    },
    {
      icon: <U sersclass Name="w-6h-6t e xt-e m erald-400" />,
      title: 'Team Management',
      description: 'Manage signatures for your entire team with centralized control and consistency.'
    },
    {
      icon: <Z apclass Name="w-6h-6t e xt-p u rple-400" />,
      title: 'One-Click Setup',
      description: 'Deploy signatures across your organization with just one click.'
    },
    {
      icon: <B ar Chart3 class Name="w-6h-6t e xt-o r ange-400" />,
      title: 'Analytics & Tracking',
      description: 'Track email engagement and signature performance with detailed analytics.'
    },
    {
      icon: <S hieldclass Name="w-6h-6t e xt-p i nk-400" />,
      title: 'Security & Compliance',
      description: 'Ensure all signatures meet security standards and compliance requirements.'
    },
    {
      icon: <C lockclass Name="w-6h-6t e xt-b l ue-400" />,
      title: 'Auto-Updates',
      description: 'Automatically update signatures when team members change roles or information.'
    }
  ]

  const pricing Plans = [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
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
      features: [
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
      features: [
        'Unlimited signatures',
        'Custom templates',
        'A P I integration',
        'White-label options',
        'Dedicated support'
      ],
      popular: false
    }
  ]

  return (

      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Email Signature Manager - Professional Email Signatures | Zion Tech Group</t itle>
        <m eta name="description" content="Create and manage professional email signatures for your team. Beautiful templates, team management, and analytics included." / / />
        <m eta name="keywords" content="email signature, email marketing, team management, professional signatures, email branding" / / />
        <l inkrel="canonical" href="https://ziontechgroup.com/micro-saas/email-signature" />
      </H elmet>

      <d iv class Name="m in-h-s c reenbg-gray-900text-white">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="r e l a tive py-20px-4overflow-hidden" />
          <d iv class Name="a b s o lute inset-0 bg-gradient-to-rfrom-cyan-500/10to-purple-500/10" / />
          <d iv class Name="r e l a tive max-w-7 xlmx-autotext-center">
        </d iv>
            <d iv class Name="i n l i ne-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </d iv>
              <M ailclass Name="w-4h-4" / />
              <s pan>Email Signature Management</s pan>
            </d iv>

            <h1 c lass Name="t e xt-4 xl sm:t e xt-6 xl md:text-7 xl font-bold text-whitemb-8leading-tight" />
              Professional <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Email Signatures</s pan>
            </h1>

            <p c lass Name="t e x t-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Create beautiful, consistent email signatures for your entire team. 
              Boost your brand presence with professional email signatures that convert.
            </p>

            <d iv class Name="f l ex f l ex-col sm:flex-row gap-6justify-centermb-16">
        </d iv>
              <L ink to="/contact" class Name="g r o u p bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <s pan>Start Free Trial</s pan>
                <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
              </L ink>
              <L ink to="/demo" class Name="g r o u p border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <s pan>View Templates</s pan>
                <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
              </L ink>
            </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-20p x-4r e lative" />
          <d iv class Name="a b s o lute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" / />
          <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
                Everything You Need for <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Email Signatures</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

                Professional email signatures that enhance your brand and drive engagement.

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
              {features.map((feature, index) => (

                <d ivkey="{index}" class Name="g r o u p bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <d iv class Name="f l ex i t ems-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                  </d iv>
                  <h3 c lass Name="t e xt-2 xl f o nt-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title}
                  </h3>
                  <p c lass Name="t e xt-g r ay-300leading-relaxed" />

                    {feature.description}

                  </p>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="p y-20 p x-4 bg-g r adient-to-br from-slate-800/50to-purple-900/50relative" />
          <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
                Simple <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                Choose the plan that fits your team size. All plans include a 14-day free trial.

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              {pricing Plans.map((plan, index) => (
                <d ivkey="{index}" class Name="{`r e l a tive" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20' 
                    : 'border-white/20 hover: border-cyan-400/30'
                }`} />
                  {plan.popular && (

                    <d iv class Name="a b s o lute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                      <d iv class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                      </d iv>

                  )}

                  <d iv class Name="t e x t-centermb-8">
        </d iv>
                    <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                    <p c lass Name="t e xt-g r ay-300mb-4">{plan.description}</p>
                    <d iv class Name="f l e x items-baselinejustify-center" />
                      <s pan class Name="t e xt-5 x l font-boldtext-white">{plan.price}</s pan>
                      <s pan class Name="t e xt-g r ay-400ml-2">{plan.period}</s pan>
                    </d iv>

                  <u lclass Name="s p a c e-y-4mb-8" />
                    {plan.features.map((feature, feature Index) => (

                      <l ikey="{feature Index}" class Name="f l e x items-centerspace-x-3" />
                        <C heck Circleclass Name="w-5 h-5t e xt-g r een-400flex-shrink-0" / />
                        <s pan class Name="t e xt-g r ay-300">{feature}</s pan>
                      </l i>

                    ))}
                  </u l>
                  
                  <L ink 
                    to="/contact" 
                    class Name="{`b l o c k" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                    }`}
                    />Get Started

                  </L ink>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="p y-20p x-4r e lative" />
          <d iv class Name="a b s o lute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
          <d iv class Name="r e l a tive max-w-7 xlmx-autotext-center">
        </d iv>
            <d iv class Name="b g-g r a dient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8sm:p-12lg:p-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl sm:t e xt-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" />
                Ready to Elevate Your <s pan class Name="b g-g r a dient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Email Branding?</s pan>
              </h2>

              <p c lass Name="t e xt-xl sm:t e xt-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
                Join thousands of businesses using our email signature management platform. 
                Start your free trial today and see the difference professional signatures make.
              </p>

              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-6justify-center">
        </d iv>
                <L ink to="/contact" class Name="g r o u p bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                  <s pan>Start Free Trial</s pan>
                  <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
                </L ink>
                <L ink to="/pricing" class Name="g r o u p border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                  <s pan>View All Plans</s pan>
                  <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
                </L ink>
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

  )
}

export default Email Signature Page;
