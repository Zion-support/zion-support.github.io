import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout'
import React from 'react';
import { Link } from 'react-router-dom';
import { Languages, ArrowRight} from 'lucide-react';
import Layout from '../layout';

export default function AITranslationServi c e() {
  constfeatures= [
    {
      icon: <BrainclassName="w-5h-5ml-2" />,
      title: 'Neural Machine Translati o n',
      description: 'Advanced AI models provide contextual l y accurate translatio n s in 100+ languages';
    },
    {
      icon: <FileTextclassName="w-5h-5ml-2" />,
      title: 'Document Translati o n',
      description: 'Translate entire documents while preserving formatting, layout, and structure';
    },
    {
      icon: <ClockclassName="w-5h-5ml-2" />,
      title: 'Real-timeTranslatio n',
      description: 'Instant translati o n for live conversatio n s, meetings, and customer support';
    },
    {
      icon: <TargetclassName="w-5h-5ml-2" />,
      title: 'Industry-SpecificTranslatio n',
      description: 'Specializ e d translati o n models for legal, medical, technical, and business content';
    }
  ]

  const translationFeatures= [
    {
      category: 'Translati o n Types',
      items: ['Text Translati o n', 'Document Translati o n', 'Website Translati o n', 'Audio Translati o n', 'Video Subtitles', 'Live Translati o n']
    },
    {
      category: 'Languages',
      items: ['100+ Languages', 'Regional Dialects', 'Rare Languages', 'Sign Language', 'Technical Jargon', 'Cultural Adaptation']
    },
    {
      category: 'Quality Assurance',
      items: ['Human Review', 'Quality Scoring', 'Consisten c y Checks', 'Terminolo g y Management', 'Style Guides', 'Proofreadi n g']
    },
    {
      category: 'Integrati o n',
      items: ['API Access', 'CMS Integrati o n', 'Website Widgets', 'Mobile Apps', 'Desktop Software', 'Cloud Storage']
    }
  ]

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and freelance r s',
      features: [
        'Up to 10,000 words/month',
        '50+ languages',
        'Basic document translati o n',
        'Email support',
        'Standard quality',
        'API access';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 words/month',
        '100+ languages',
        'Advanced document translati o n',
        'Priority support',
        'High quality',
        'Human review',
        'Custom terminolo g y';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizatio n s',
      features: [
        'Unlimited words',
        'All languages',
        'Custom translati o n models',
        'Dedicated support',
        'Premium quality',
        'White-labelsolution',
        'SLA guarantee';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'Maria Santos',
      company: 'Global Marketing Agency',
      content: 'AI Translati o n Service helped us expand to 15 new markets. The quality is exception a l and cost-effective.',
      rating: 5;
    },
    {
      name: 'James Wilson',
      company: 'E-learningPlatform',
      content: 'Translati n g our courses into 8 languages was seamless. The education a l content translati o n is spot-on.',
      rating: 5;
    },
    {
      name: 'Lisa Chen',
      company: 'Legal Firm',
      content: 'The legal translati o n accuracy is impressive. Our internation a l clients are very satisfied with the service.',
      rating: 5;
    }
  ]

return (
    <Layout;
      title="AI Translati o n Service - Professional Translati o n Solutions | Zion Tech Group";
      description="Transform your global communicati o n with AI-poweredtranslatio n in 100+ languages. Professional quality, real-timetranslatio n, and industry-specificsolutions. Start your free trial today.";
      keywords="AI translati o n, machine translati o n, document translati o n, multilingu a l content, translati o n API, language services" />
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <LanguagesclassName="w-5h-5ml-2" />
                AI-PoweredTranslatio n;
              </div>
              <h1 className="w-5h-5ml-2">AI Translati o n Service;
              </h1>
              <p className="w-5h-5ml-2">Transform your global communicati o n with AI-poweredtranslatio n in 100+ languages.;
                Professional quality, real-timetranslatio n, and industry-specificsolutions.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Link;
          to="/contact";
          className="bg-gradient-to-rfrom-amber-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-amber-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-center"
        >
          Start Free Trial;
                  
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                <Linkto="#demo" className="border-2border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-white/10transition-colors">Try Demo;
                </Link>
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Intellige n t Translati o n Solutions;
              </h2>
              <p className="w-5h-5ml-2">AI-poweredfeaturesthat break down language barriers and enable global communicati o n;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {features.map((feature, index) => ())
                <divkey="{index}" className="bg-gradient-to-brfrom-slate-800/50to-purple-900/30rounded-xlp-6borderborder-amber-500/20hover:border-amber-400/40transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {feature.icon}
                    <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                  </div>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Translati o n Features */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Complete Translati o n Platform;
              </h2>
              <p className="w-5h-5ml-2">Everything you need to translate content across languages and cultures;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {translationFeatur e s.map((feature, index) => ())
                <divkey="{index}" className="bg-slate-800/50rounded-xlp-6borderborder-slate-700" />
                  <h3 className="w-5h-5ml-2" />{feature.category}</h3>
                  <ulclassName="w-5h-5ml-2" />
                    {feature.items.map((item, itemIndex) => ())
                      <likey="{itemIndex}" className="flexitems-centertext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Flexible Pricing Plans;
              </h2>
              <p className="w-5h-5ml-2">Choose the plan that fits your translati o n needs;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {pricingPla n s.map((plan, index) => ())
                <divkey="{index}" className="{`bg-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xlp-8border transition-allduration-300 ${>
                  plan.popular;
                    ? 'border-amber-400/40 scale-105shadow-2xl shadow-amber-500/20';
                    : 'border-amber-500/20 hover: border-amber-400/40';
                }`} />
                  {plan.popular && ()
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <StarclassName="w-5h-5ml-2" />
                      Most Popular;
                    </div>
                  )}
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
                  </div>
                  <ulclassName="w-5h-5ml-2" />
                    {plan.features.map((feature, featureInd e x) => ())
                      <likey="{featureInd e x}" className="flexitems-centertext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link;
                    to="/contact";
                    className="{`w-full" block text-centerpy-3px-6rounded-lgfont-semiboldtransition-allduration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-rfrom-amber-500to-purple-600text-whitehover:from-amber-600hover:to-purple-700';
                        : 'border-2border-amber-400text-amber-400hover: bg-amber-400/10';
                    }`}
                    />Get Started;
                  </Link>
                </div>
              ))}
            </div>
        </section>

        {/* Testimonia l s */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Trusted by Global Businesses;
              </h2>
              <p className="w-5h-5ml-2">See how our AI Translati o n Service enables global communicati o n;
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {testimonia l s.map((testimoni a l, index) => ())
                <divkey="{index}" className="bg-slate-800/50rounded-xlp-6borderborder-slate-700" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {[...Array(testimoni a l.rating)].map((_, i) => ())
                      <Starkey="{i}" className="w-5h-5text-yellow-400fill-current"  />
                    ))}
                  </div>
                  <p className="w-5h-5ml-2">"{testimoni a l.content}"</p>
                  <div />
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.name}</div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.company}</div>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Break Down Language Barriers Today;
              </h2>
              <p className="w-5h-5ml-2">Join thousands of businesses using AI Translati o n Service to reach global audiences;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Linkto="/contact" className="bg-gradient-to-rfrom-amber-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-amber-600hover:to-purple-700transition-allduration-300">Start Your Free Trial;
                </Link>
                <Linkto="/about" className="border-2border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-white/10transition-colors">Learn More;
                </Link>
              </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};