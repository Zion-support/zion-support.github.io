import { Helmet  } from "react-helmet-async";
import { Globe, Zap, Shield, Users, CheckCircle, ArrowRight, BarChart3, Brain, FileText, Mic  } from "lucide-react";
import { Link  } from "react-router-dom";
import React  from 'react';
import { ArrowRight  } from "lucide-react";
import { Link  } from "react-router-dom";
const AITranslationServicesPage: React.FC = () => {
  return (
  return (
  const features = [
    {
      icon: <><Globe className="w-6h-6text-cyan-400" />,
      title: '100+ Languages',
      description: 'Support for over 100 languages with native-level accuracy and cultural context.'
    
  );

  );
},
    {
      icon: <Zap className="w-6h-6text-emerald-400" />,
      title: 'Real-time Translation',
      description: 'Instant translation for live conversations, meetings, and customer support.'
    },
    {
      icon: <Brain className="w-6h-6text-purple-400" />,
      title: 'AI-Powered Context',
      description: 'Advanced AI understands context, tone, and cultural nuances for accurate translations.'
    },
    {
      icon: <FileText className="w-6h-6text-orange-400" />,
      title: 'Document Translation',
      description: 'Translate documents, websites, and content while preserving formatting and structure.'
    },
    {
      icon: <Mic className="w-6h-6text-pink-400" />,
      title: 'Voice Translation',
      description: 'Convert speech to text and translate in real-time with natural voice synthesis.'
    },
    {icon: <Shield className="w-6h-6text-blue-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption for sensitive business communications.'
    }
  ]

  const useCases = [
    {
      title: 'Global Customer Support',
      description: 'Provide support in any language with instant translation and cultural adaptation.',
      icon: <Users className="w-8h-8text-cyan-400" /></Users>
    },
    {
      title: 'Multilingual Content',
      description: 'Translate websites, apps, and marketing materials for global audiences.',
      icon: <FileText className="w-8h-8text-emerald-400" /></FileText>
    },
    {
      title: 'International Meetings',
      description: 'Break down language barriers in real-time during video conferences and calls.',
      icon: <Globe className="w-8h-8text-purple-400" /></Globe>
    },
    {title: 'E-commerce Expansion',
      description: 'Expand to new markets with localized product descriptions and customer communications.',
      icon: <BarChart3 className="w-8h-8text-orange-400" /></BarChart3>
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
      popular: false;
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
      popular: true;
    },
    {name: 'Enterprise',
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
      popular: false;
    }
  ]

  return (
    <>>
      <Helmet></Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
      </Helmet>
        <title>AI Translation Services - Multilingual Communication | Zion Tech Group</title>
        <meta name="description" content="Break language barriers with AI-powered translation services. Real-time translation, document processing, and multilingual support for global businesses." / / /></meta>
        <meta name="keywords" content="AI translation, multilingual, language services, real-time translation, document translation, global communication" / / /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/ai-translation-services" /></link>
      </Helmet></>

      <>div className="min-h-screenbg-gray-900text-white" ></div>
        {/* Hero Section */}
    <>section className="relative py-20px-4overflow-hidden" />

              {features.map((feature, index) => (
    <>div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300" >{feature.icon}
                  </div>

              {useCases.map((useCase, index) => (
    <>div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <div className="flex items-centerspace-x-4mb-6" ></div>
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular;
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20' ></div>
                    : 'border-white/20 hover: border-cyan-400/30'></div>
                }`} />
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2transform-translate-x-1/2" ></div><div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold" />Most Popular;
                      </div></>
                  )}
                  <>div className="text-centermb-8" ></div>
                    <h3 className="text-2 xl font-bold text-white mb-2" />{plan.name}</h3>
                    <p className="text-gray-300 mb-4" ></p>
              {plan.description}</p>
                    <div className="flex items-baselinejustify-center" ></div>
                      <span className="text-5 xlfont-bold text-white" />{plan.price}</span>
                      <span className="text-gray-400ml-2" />{plan.period}</span>
                    </div>
                  
                  <ul className="space-y-4mb-8" /></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-centerspace-x-3" /></li>
                        <CheckCircle className="w-5 h-5text-green-400flex-shrink-0" /></CheckCircle>
                        <span className="text-gray-300" />{feature}</span>
                      </li></>
                    ))}
                  </ul>
                  
                  <Link;
                    to="/contact" className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'></Link>
                    }`}></Link>
                    />Get Started;
    <>/Link>
                </div></>
              ))}
    <>/div>
        </section></>

        {/* CTA Section */}
    <>section className="py-20px-4relative" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" /></div><div className="relative max-w-7xlmx-autotext-center" ></div></>
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8sm:p-12lg:p-16" ></div>
              <h2 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" /></h2>
                Ready to Go <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent" />Global?</span>
              </h2></>
              
              <p className="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed" ></p>
              Break down language barriers and connect with global audiences. 
                Start your free trial today and experience the power of AI translation.
              </p>
              
              <div className="flex flex-col sm:flex-rowgap-6justify-center" ></div>
                <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" ></Link>
          <span    /></span>
        </Link>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" /></ArrowRight>
                </Link><Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" ></Link></>
          <span    /></span>
        </Link>View All Plans</span>
                  <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" /></ArrowRight>
                </Link>
              </div>
          </div>
        </section>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div></>
  )
}

export default AITranslationServicesPage;
    </>
}}))))