import {Helmet} from 'react-helmet-async'
import {Globe, Zap, Shield, Users, CheckCircle, ArrowRight, BarChart3, Brain, FileText, Mic} from 'lucide-react'
import {Link} from 'react-router-dom'
import React from 'react';
import {ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';

const AITranslation Services Page: React.FC = () => {
  constfeatures = [
    {
      icon: <Globeclass Name ="w-6h-6text-cyan-400" / />,
      title: '100+ Languages',
      description: 'Support for over 100 languages with native-level accuracy and cultural context.'
    },
    {
      icon: <Zapclass Name ="w-6h-6text-emerald-400" / />,
      title: 'Real-time Translation',
      description: 'Instant translation for live conversations, meetings, and customer support.'
    },
    {
      icon: <Brainclass Name ="w-6h-6text-purple-400" / />,
      title: 'AI- Powered Context',
      description: 'Advanced AI understands context, tone, and cultural nuances for accurate translations.'
    },
    {
      icon: <File Textclass Name="w-6h-6text-orange-400" / />,
      title: 'Document Translation',
      description: 'Translate documents, websites, and content while preserving formatting and structure.'
    },
    {
      icon: <Micclass Name ="w-6h-6text-pink-400" / />,
      title: 'Voice Translation',
      description: 'Convert speech to text and translate in real-time with natural voice synthesis.'
    },
    {
      icon: <Shieldclass Name ="w-6h-6text-blue-400" / />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption for sensitive business communications.'
    }
  ]

  const useCases = [
    {
      title: 'Global Customer Support',
      description: 'Provide support in any language with instant translation and cultural adaptation.',
      icon: <Usersclass Name ="w-8h-8text-cyan-400" / />
    },
    {
      title: 'Multilingual Content',
      description: 'Translate websites, apps, and marketing materials for global audiences.',
      icon: <File Textclass Name="w-8h-8text-emerald-400" / />
    },
    {
      title: 'International Meetings',
      description: 'Break down language barriers in real-time during video conferences and calls.',
      icon: <Globeclass Name ="w-8h-8text-purple-400" / />
    },
    {
      title: 'E-commerce Expansion',
      description: 'Expand to new markets with localized product descriptions and customer communications.',
      icon: <Bar Chart3class Name="w-8h-8text-orange-400" / />
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
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
        'Custom AI training',
        'Dedicated support',
        'White-label options'
      ],
      popular: false
    }
  ]

  return (
    <>
      <Helmet />
        <title   />AITranslation Services - MultilingualCommunication | ZionTech Group</title>
        <meta name ="description" content="Breaklanguage barrierswith AI-poweredtranslation services. Real-timetranslation, documentprocessing, andmultilingual supportfor globalbusinesses." / / />
        <meta name ="keywords" content="AItranslation, multilingual, languageservices, real-timetranslation, documenttranslation, globalcommunication" / / />
        <linkrel ="canonical" href="https://ziontechgroup.com/ai-translation-services" / />
      </Helmet>

      <div className ="min-h-screenbg-gray-900text-white" />
        {/* HeroSection */}
        <sectionclassName ="relativepy-20px-4overflow-hidden" />
          <div className ="absoluteinset-0 bg-gradient-to-r from-cyan-500/10to-purple-500/10" / />
          <div className ="relativemax-w-7 xlmx-autotext-center" />
            <div className ="inline-flexitems-centerspace-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-fulltext-smfont-mediummb-8borderborder-cyan-400/30" />
              <Globeclass Name ="w-4h-4" / />
              <span   />AITranslation Services</span>
            </div>
            
            <h1className ="text-4 xlsm:text-6 xlmd:text-7 xlfont-boldtext-whitemb-8leading-tight" />
              BreakLanguage <spanclassName ="bg-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Barriers</span>
            </h1>
            
            <pclassName ="text-lgsm:text-xlmd:text-2 xltext-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed" />
              Connectwith globalaudiences usingAI-poweredtranslation services. 
              Real-timetranslation, documentprocessing, andmultilingual supportfor businessesworldwide.
            </p>
            
            <div className ="flexflex-colsm:flex-rowgap-6justify-centermb-16" />
              <Link to ="/contact" className="groupbg-gradient-to-r from-cyan-500 to-purple-600 text-whitepx-10 py-4 rounded-xlfont-semiboldhover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-centerspace-x-2 shadow-lgshadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <span   />StartFree Trial</span>
                <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
              </Link>
              <Link to ="/demo" className="groupborder-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xlfont-semiboldhover:bg-cyan-400 hover:text-gray-900 transition-allduration-300 flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
                <span   />ViewDemo</span>
                <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* FeaturesSection */}
        <sectionclassName ="py-20px-4relative" />
          <div className ="absoluteinset-0 bg-gradient-to-brfrom-purple-500/5via-cyan-500/5to-pink-500/5" / />
          <div className ="relativemax-w-7xlmx-auto" />
            <div className ="text-centermb-16" />
              <h2className ="text-4 xlmd:text-5 xlfont-boldtext-whitemb-6" />
                Powerful <spanclassName ="bg-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />TranslationFeatures</span>
              </h2>
              <pclassName ="text-xltext-gray-300 max-w-4xlmx-auto" />
                Everythingyou needto communicateeffectively acrosslanguages andcultures.
              </p>
            </div>
            
            <div className ="gridgrid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8" />
              {features.map((feature, index) => (
                <divkey ="{index}" className="groupbg-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:bg-white/20 transition-allduration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <div className ="flexitems-centerjustify-centerw-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xlmb-6 group-hover:scale-110transition-transformduration-300"  />{feature.icon}
                  </div>
                  <h3className ="text-2 xlfont-boldtext-whitemb-4group-hover:text-cyan-400transition-colors"  />{feature.title}
                  </h3>
                  <pclassName ="text-gray-300leading-relaxed" />
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <sectionclassName ="py-20 px-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
          <div className ="relative max-w-7xlmx-auto" />
            <div className ="text-centermb-16" />
              <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Perfect for <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Every Business</span>
              </h2>
              <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
                Discover how AI translation can transform your business operations and global reach.
              </p>
            </div>
            
            <div className ="grid grid-cols-1md:grid-cols-2gap-8" />
              {use Cases.map((useCase, index) => (
                <divkey ="{index}" className="groupbg-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <div className ="flexitems-centerspace-x-4mb-6" />
                    <div className ="flexitems-centerjustify-centerw-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xlgroup-hover:scale-110transition-transformduration-300"  />{useCase.icon}
                    </div>
                    <h3className ="text-2 xlfont-boldtext-whitegroup-hover:text-cyan-400transition-colors"  />{useCase.title}
                    </h3>
                  </div>
                  <pclassName ="text-gray-300leading-relaxed" />
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <sectionclassName ="py-20px-4relative" />
          <div className ="relative max-w-7xlmx-auto" />
            <div className ="text-centermb-16" />
              <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Simple <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Pricing</span>
              </h2>
              <pclassName ="text-xl text-gray-300 max-w-3xlmx-auto" />
                Choose the plan that fits your translation needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
              {pricing Plans.map((plan, index) => (
                <divkey ="{index}" className="{`relative" bg-white/10 backdrop-blur-lgrounded-2 xlp-8 bordertransition-allduration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2 xlshadow-cyan-500/20' 
                    : 'border-white/20 hover: border-cyan-400/30'
                }`} />
                  {plan.popular && (
                    <div className ="absolute -top-4 left-1/2transform-translate-x-1/2" />
                      <div className ="bg-gradient-to-r from-cyan-500 to-purple-600 text-whitepx-6 py-2 rounded-fulltext-smfont-semibold"  />MostPopular
                      </div>
                    </div>
                  )}
                  
                  <div className ="text-centermb-8" />
                    <h3className ="text-2 xl font-boldtext-whitemb-2"   />{plan.name}</h3>
                    <pclassName ="text-gray-300mb-4" />{plan.description}</p>
                    <div className ="flexitems-baselinejustify-center" />
                      <spanclassName ="text-5 xlfont-boldtext-white"   />{plan.price}</span>
                      <spanclassName ="text-gray-400ml-2"   />{plan.period}</span>
                    </div>
                  </div>
                  
                  <ulclassName ="space-y-4mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <likey ="{featureIndex}" className="flexitems-centerspace-x-3" />
                        <Check Circleclass Name="w-5 h-5text-green-400flex-shrink-0" / />
                        <spanclassName ="text-gray-300"   />{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to ="/contact" 
                    className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-whitehover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                    }`}
                    />Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <sectionclassName ="py-20px-4relative" />
          <div className ="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
          <div className ="relative max-w-7 xlmx-autotext-center" />
            <div className ="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8sm:p-12lg:p-16" />
              <h2className ="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
                Ready to Go <spanclassName ="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent"   />Global?</span>
              </h2>
              
              <pclassName ="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed" />
                Break down language barriers and connect with global audiences. 
                Start your free trial today and experience the power of AI translation.
              </p>
              
              <div className ="flex flex-col sm:flex-rowgap-6justify-center" />
                <Link to ="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                  <span   />Start Free Trial</span>
                  <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
                </Link>
                <Link to ="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                  <span   />View All Plans</span>
                  <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AITranslation Services Page;