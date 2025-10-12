import { Helmet } from 'react-helmet-async'
import { Globe, Zap, Shield, Users, CheckCircle, ArrowRight, Bar Chart3, Brain, File Text, Mic } from 'lucide-react';
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const A ITranslation Services Page: React.F C = () => {
  const features = [
    {
      icon: <G lobe class Name="w-6h-6t ext-cyan-400" />,
      title: '100+ Languages',
      description: 'Support for over 100 languages with native-level accuracy and cultural context.'
    },
    {
      icon: <Z ap class Name="w-6h-6t ext-emerald-400" />,
      title: 'Real-time Translation',
      description: 'Instant translation for live conversations, meetings, and customer support.'
    },
    {
      icon: <B rain class Name="w-6h-6t ext-purple-400" />,
      title: 'A I-Powered Context',
      description: 'Advanced A I understands context, tone, and cultural nuances for accurate translations.'
    },
    {
      icon: <F ile Text class Name="w-6h-6t ext-orange-400" />,
      title: 'Document Translation',
      description: 'Translate documents, websites, and content while preserving formatting and structure.'
    },
    {
      icon: <M ic class Name="w-6h-6t ext-pink-400" />,
      title: 'Voice Translation',
      description: 'Convert speech to text and translate in real-time with natural voice synthesis.'
    },
    {
      icon: <S hield class Name="w-6h-6t ext-blue-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption for sensitive business communications.'
    }
  ]

  const use Cases = [
    {
      title: 'Global Customer Support',
      description: 'Provide support in any language with instant translation and cultural adaptation.',
      icon: <U sers class Name="w-8h-8t ext-cyan-400" />
    },
    {
      title: 'Multilingual Content',
      description: 'Translate websites, apps, and marketing materials for global audiences.',
      icon: <F ile Text class Name="w-8h-8t ext-emerald-400" />
    },
    {
      title: 'International Meetings',
      description: 'Break down language barriers in real-time during video conferences and calls.',
      icon: <G lobe class Name="w-8h-8t ext-purple-400" />
    },
    {
      title: 'E-commerce Expansion',
      description: 'Expand to new markets with localized product descriptions and customer communications.',
      icon: <B ar Chart3 class Name="w-8h-8t ext-orange-400" />
    }
  ]

  const pricing Plans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50,000 words/month',
        '50+ languages',
        'Basic A PI access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500,000 words/month',
        '100+ languages',
        'Real-time translation',
        'Priority support',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'All languages',
        'Custom A I training',
        'Dedicated support',
        'White-label options'
      ],
      popular: false
    }
  ]

  return (

      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Translation Services - Multilingual Communication | Zion Tech Group</t itle>
        <m eta name="description" content="Break language barriers with A I-powered translation services. Real-time translation, document processing, and multilingual support for global businesses." / / />
        <m eta name="keywords" content="A I translation, multilingual, language services, real-time translation, document translation, global communication" / / />
        <l ink rel="canonical" href="https://ziontechgroup.com/ai-translation-services" />
      </H elmet>

      <d iv class Name="m in-h-screenbg-gray-900text-white">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="r elative py-20px-4overflow-hidden" />
          <d iv class Name="a bsolute inset-0 bg-gradient-to-rfrom-cyan-500/10to-purple-500/10" / />
          <d iv class Name="r elative max-w-7 xlmx-autotext-center">
        </d iv>
            <d iv class Name="i nline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </d iv>
              <G lobe class Name="w-4h-4" / />
              <s pan>A I Translation Services</s pan>
            </d iv>

            <h1 c lass Name="t ext-4 xl sm:text-6 xl md:text-7 xl font-bold text-whitemb-8leading-tight" />
              Break Language <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Barriers</s pan>
            </h1>

            <p c lass Name="t ext-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Connect with global audiences using A I-powered translation services. 
              Real-time translation, document processing, and multilingual support for businesses worldwide.
            </p>

            <d iv class Name="f lex flex-col sm:flex-row gap-6justify-centermb-16">
        </d iv>
              <L ink to="/contact" class Name="g roup bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <s pan>Start Free Trial</s pan>
                <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
              </L ink>
              <L ink to="/demo" class Name="g roup border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <s pan>View Demo</s pan>
                <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
              </L ink>
            </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-20px-4relative" />
          <d iv class Name="a bsolute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" / />
          <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Powerful <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Translation Features</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

                Everything you need to communicate effectively across languages and cultures.

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
              {features.map((feature, index) => (

                <d iv key="{index}" class Name="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <d iv class Name="f lex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                  </d iv>
                  <h3 c lass Name="t ext-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title}
                  </h3>
                  <p c lass Name="t ext-gray-300leading-relaxed" />

                    {feature.description}

                  </p>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Use Cases Section */}

        <s ection class Name="p y-20 px-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
          <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Perfect for <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Every Business</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

                Discover how A I translation can transform your business operations and global reach.

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1md:grid-cols-2gap-8">
        </d iv>
              {use Cases.map((use Case, index) => (

                <d iv key="{index}" class Name="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <d iv class Name="f lex items-centerspace-x-4mb-6">
        </d iv>
                    <d iv class Name="f lex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl group-hover:scale-110transition-transformduration-300">{use Case.icon}
                    </d iv>
                    <h3 c lass Name="t ext-2 xl font-bold text-whitegroup-hover:text-cyan-400transition-colors">{use Case.title}
                    </h3>
                  </d iv>
                  <p c lass Name="t ext-gray-300leading-relaxed" />

                    {use Case.description}

                  </p>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="p y-20px-4relative" />
          <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Simple <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-3xlmx-auto" />

                Choose the plan that fits your translation needs. All plans include a 14-day free trial.

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
              {pricing Plans.map((plan, index) => (
                <d iv key="{index}" class Name="{`r elative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20' 
                    : 'border-white/20 hover: border-cyan-400/30'
                }`} />
                  {plan.popular && (

                    <d iv class Name="a bsolute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                      <d iv class Name="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                      </d iv>

                  )}

                  <d iv class Name="t ext-centermb-8">
        </d iv>
                    <h3 c lass Name="t ext-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                    <p c lass Name="t ext-gray-300mb-4">{plan.description}</p>
                    <d iv class Name="f lexitems-baselinejustify-center" />
                      <s pan class Name="t ext-5 xlfont-boldtext-white">{plan.price}</s pan>
                      <s pan class Name="t ext-gray-400ml-2">{plan.period}</s pan>
                    </d iv>

                  <u l class Name="s pace-y-4mb-8" />
                    {plan.features.map((feature, feature Index) => (

                      <l i key="{feature Index}" class Name="f lexitems-centerspace-x-3" />
                        <C heck Circle class Name="w-5 h-5t ext-green-400flex-shrink-0" / />
                        <s pan class Name="t ext-gray-300">{feature}</s pan>
                      </l i>

                    ))}
                  </u l>
                  
                  <L ink 
                    to="/contact" 
                    class Name="{`b lock" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
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

        {/* C TA Section */}

        <s ection class Name="p y-20px-4relative" />
          <d iv class Name="a bsolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
          <d iv class Name="r elative max-w-7 xlmx-autotext-center">
        </d iv>
            <d iv class Name="b g-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8sm:p-12lg:p-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
                Ready to Go <s pan class Name="b g-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Global?</s pan>
              </h2>

              <p c lass Name="t ext-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
                Break down language barriers and connect with global audiences. 
                Start your free trial today and experience the power of A I translation.
              </p>

              <d iv class Name="f lex flex-col sm:flex-rowgap-6justify-center">
        </d iv>
                <L ink to="/contact" class Name="g roup bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                  <s pan>Start Free Trial</s pan>
                  <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
                </L ink>
                <L ink to="/pricing" class Name="g roup border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                  <s pan>View All Plans</s pan>
                  <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
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

export default A ITranslation Services Page;
