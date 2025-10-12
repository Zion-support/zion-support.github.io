import React from 'react';import { ArrowRight  } from 'lucide-react';
'use client'
const EnhancedHero: React.FC = () => {
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Custom implementation and training'
  ];
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9 AM-6 PM PST'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@ziontechgroup.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Schedule a m eet ing'
    }
  ];
  r etu rn (
    <d iv c las sNa me="r e lat ive m in-h-scre en bg-grad ient-to-br from-slate-900 via-purple-900to-slate-900overflow-hidden">
        </d iv>
      {/* B ack gro und E ffe cts */}
    <>
      </><d iv c las sNa me="a b solute i nset-0bg-[radi al-grad ient(c ircle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)]a nim ate-p ulse" / />
      <d iv c las sNa me="a b solute i nset-0bg-[radi al-grad ient(c ircle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]a nim ate-p ulse" style="{{" a nim ationDelay: '1 s' }} / />
      {/* Main C ont ent */}
      <d iv c las sNa me="r e lat ive z-10 flex flex-c ol lg:flex-rowitems-centerm in-h-scre en">
        </d iv>
        {/* L eft C ont ent */}
    <>
        </><d iv c las sNa me="f lex-1 px-4 sm:px-6-lg:px-8-py-20">
        </d iv>
          <d iv c las sNa me="m ax-w-2xl">
        </d iv>
            <h1 c las sNa me="t e xt-4 xl sm:t ext-5 xl md:t ext-6 xl f ont-bold t ext-whitem-b-6leading-tight" />              Transform Your Business with{' '}
    <>
              </><span c las sNa me="b g-grad ient-to-r from-c yan-400 to-purple-400bg-clip-t exttext-transpare-n-t">AI & IT Solutions
              </span>
            </h1>
            <p c las sNa me="t e xt-lg sm:t ext-x-l t ext-gra-y-300 mb-8-leading-relaxed">              Harness the power of cutt ing-edge artificial intelligence and information technology 
              to drive innovation, efficiency, and growth in your orga nization.
            </p>
            {/* Benefits L ist */}
    <>
            </><d iv c las sNa me="m b-8">
        </d iv>
              <h3 c las sNa me="t e xt-lg f ont-s emi bol dte xt-whitem-b-4">W hy C hoo se Us?</h3>
              <d iv c las sNa me="g r id g rid-c ols-1sm:g rid-c ols-2g ap-3">
        </d iv>
                {benefits.map((benefit, index) => (
    <>
                  </><d iv k ey="{index}" c las sNa me="f lexitems-centert ext-gra-y-300" />
                    <C hec kCi rcle c las sNa me="h-5 w-5 t e xt-c yan-400mr-3-flex-s hri nk-0" / />
                    <span c las sNa me="t e xt-sm">{benefit}</span>                  </d iv>
                ))}
    <>
              </d iv>
            {/* C TA B utt ons */}
    <>
            </><d iv c las sNa me="f lex flex-c ol sm:flex-rowg ap-4mb-8">
        </d iv>
              <b utt on c las sNa me="c y ber-b utt on px-8 py-4 t ext-l-g f ont-s emi bold inline-flex items-centerjustify-center" />                Get Star ted
    <>
                </><ArrowRight c las sNa me="m l-2h-5w-5" />
              </b utt on>
              <b utt on c las sNa me="c y ber-b utt on-seconda ry px-8 py-4-t ext-l gfon-t-s emi bold">Learn More
              </b utt on>
            </d iv>
            {/* C ontact Info */}
            <d iv c las sNa me="g r id g rid-c ols-1sm:g rid-c ols-3g ap-4">
        </d iv>
              {contactInfo.map((contact, index) => (
    <>
                </><d iv k ey="{index}" c las sNa me="f lexitems-centert ext-gra-y-300" />
                  <contact.icon c las sNa me="h-5 w-5 t e xt-c yan-400mr-3-flex-s hri nk-0" / />
                  <d iv />
                    <d iv c las sNa me="t e xt-s mfont-m edi umt ext-whit-e">{contact.title}</d iv>
                    <d iv c las sNa me="t e xt-x ste xt-gra-y-400">{contact.details}</d iv>                </d iv>
              ))}
    <>
            </d iv>
        </d iv>
        {/* Right C ont ent - Visu al E lements */}
    <>
        </><d iv c las sNa me="f lex-1 px-4 sm:px-6-lg:px-8-py-20">
        </d iv>
          <d iv c las sNa me="r e lat ive" />
            {/* F loating C ards */}
    <>
            </><d iv c las sNa me="a b solute t op-0 l eft-0 w-64 h-40 bg-grad ient-to-br from-c yan-500/20 to-purple-500/20 rounded-2 xl backdrop-blur-sm borderborder-c yan-500/30a nim ate-float">
        </d iv>
              <d iv c las sNa me="p-6">
        </d iv>
                <B rain c las sNa me="h-8 w-8t e xt-c yan-400mb-3" / />
                <h3 c las sNa me="t e xt-lg f ont-bold text-white-m-b-2">AI Solutions</h3>                <p c las sNa me="t e xt-s mte xt-gra-y-300">M achine Lear ning & Analytics</p>
              </d iv>
    <>
            </><d iv c las sNa me="a b solute t op-20 r ight-0 w-64 h-40 bg-grad ient-to-br from-purple-500/20 to-pink-500/20 rounded-2 xl backdrop-blur-sm borderborder-purple-500/30a nim ate-float" style="{{" a nim ationDelay: '1 s' }} />
              <d iv c las sNa me="p-6">
        </d iv>
                <S hie ld c las sNa me="h-8 w-8t e xt-purple-400mb-3" / />
                <h3 c las sNa me="t e xt-lg f ont-bold text-white-m-b-2">S ecurity</h3>                <p c las sNa me="t e xt-s mte xt-gra-y-300">C ybe rsecurity & Compliance</p>
              </d iv>
    <>
            </><d iv c las sNa me="a b solute t op-40 l eft-1/2 transform -translate-x-1/2 w-64 h-40 bg-grad ient-to-br from-green-500/20 to-blue-500/20 rounded-2 xl backdrop-blur-sm borderborder-green-500/30a nim ate-float" style="{{" a nim ationDelay: '2 s' }} />
              <d iv c las sNa me="p-6">
        </d iv>
                <G lobe c las sNa me="h-8 w-8t e xt-green-400mb-3" / />
                <h3 c las sNa me="t e xt-lg f ont-bold text-white-m-b-2">C loud S erv ices</h3>                <p c las sNa me="t e xt-s mte xt-gra-y-300">Infr ast ruc ture & Migration</p>
              </d iv>
          </d iv>
      </d iv>
  )
};
    </>