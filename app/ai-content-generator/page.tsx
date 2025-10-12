import React from 'react'
import { Helmet    } from 'react-helmet-async'
import { Link    } from 'react-router-dom'
import React from 'react';
import { Helmet    } from 'react-helmet-async';
import { Link    } from 'react-router-dom';
import { ArrowRight, Palette, Brain, Users, Type, Copy   } from 'lucide-react';
import { ArrowRight, Brain, FileText, CheckCircle, Star, Clock, Users, BarChart3, Sparkles, Target, Globe, Shield, MessageCircle, Mail, Phone, MapPin, Play, Copy, Share, Palette, Type    } from 'lucide-react';

exportdefaultfunctionAIContentGeneratorPage() {

  constfeatures = [
    {
      icon: <BrainclassName="w-6h-6t e xt-cyan-400" />,
      title: 'AI-PoweredWriting',
      description: 'AdvancedGPT-4 andClaude-3 poweredcontentgenerationwith 99.9% accuracyandhuman-likequality.',
      benefits: ['Naturallanguageprocessing', 'Context-awaregeneration', 'Multi-languagesupport', 'Brandvoiceadaptation']
    },
    {
      icon: <FileTextclassName="w-6h-6t e xt-emerald-400" />,
      title: 'ContentTemplates',
      description: '500+ professionallydesignedtemplatesforblogs, socialmedia, emails, ads, andmore.',
      benefits: ['Industry-specifictemplates', 'Customizablelayouts', 'SEO-optimizedstructure', 'Mobile-responsivedesign']
    },
    {
      icon: <BarChart3 className="w-6h-6t e xt-purple-400" />,
      title: 'SEOOptimization',
      description: 'Built-inSEOtoolswithkeywordresearch, densityanalysis, andreadabilityscoring.',
      benefits: ['Keywordoptimization', 'Metataggeneration', 'Readabilityanalysis', 'Competitoranalysis']
    },
    {
      icon: <PaletteclassName="w-6h-6t e xt-pink-400" />,
      title: 'BrandVoiceTraining',
      description: 'TrainAItomatchyouruniquebrandvoiceandtoneacrossallcontenttypes.',
      benefits: ['Voiceconsistency', 'Toneadaptation', 'Styleguidelines', 'Brandpersonality']
    },
    {
      icon: <GlobeclassName="w-6h-6t e xt-orange-400" />,
      title: 'Multi-LanguageSupport',
      description: 'Generatecontentin 50+ languageswithnative-levelqualityandculturaladaptation.',
      benefits: ['50+ languages', 'Culturaladaptation', 'LocalSEOoptimization', 'Regionalpreferences']
    },
    {
      icon: <ShieldclassName="w-6h-6t e xt-red-400" />,
      title: 'PlagiarismDetection',
      description: 'Built-inplagiarismcheckerwith 99.8% accuracyandoriginalityscoring.',
      benefits: ['Real-timechecking', 'Originalityreports', 'Citationsuggestions', 'Copyrightcompliance']
    }
  ]

  constpricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfectforindividualsandsmallbusinesses',
      features: [
        '10,000 words/month',
        '50+ contenttemplates',
        'BasicSEOtools',
        '5 brandvoices',
        '3 languages',
        'Emailsupport',
        'Basicanalytics'
      ],
      popular: false,
      cta: 'StartFreeTrial'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Idealforgrowingbusinessesandagencies',
      features: [
        '100,000 words/month',
        '500+ contenttemplates',
        'AdvancedSEOsuite',
        'Unlimitedbrandvoices',
        '20 languages',
        'Prioritysupport',
        'Advancedanalytics',
        'Teamcollaboration',
        'APIaccess',
        'Customtemplates'
      ],
      popular: true,
      cta: 'StartFreeTrial'
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'Forlargeorganizationswithcustomneeds',
      features: [
        'Unlimitedwords',
        'Alltemplates + custom',
        'FullSEOsuite + AIinsights',
        'Unlimitedeverything',
        'All 50+ languages',
        '24/7 dedicatedsupport',
        'Enterpriseanalytics',
        'Advancedteamfeatures',
        'FullAPIaccess',
        'White-labeloptions',
        'Customintegrations',
        'Dedicatedaccountmanager'
      ],
      popular: false,
      cta: 'ContactSales'
    }
  ]

  consttestimonials = [
    {
      name: 'SarahJohnson',
      role: 'ContentMarketingManager',
      company: 'TechFlowInc.',
      content: 'Zion'sAIContentGeneratorhasrevolutionizedourcontentstrategy. We'veincreasedourcontentoutputby 300% whilemaintainingquality.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'MichaelChen',
      role: 'Founder',
      company: 'StartupHub',
      content: 'Thebrandvoicetrainingfeatureisincredible. Ourcontentnowsoundsexactlylikeourbrand, savingushoursofediting.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'EmilyRodriguez',
      role: 'SEOSpecialist',
      company: 'DigitalMarketingPro',
      content: 'TheSEOoptimizationtoolsaregame-changing. Ourcontentranks 40% highersinceusingthisplatform.',
      rating: 5,
      avatar: 'ER'
    }
  ]

  constuseCases = [
    {
      title: 'BlogContent',
      description: 'GenerateengagingblogpostswithSEOoptimizationandbrandvoiceconsistency.',
      icon: <FileTextclassName="w-8h-8t e xt-cyan-400" />,
      examples: ['How-toguides', 'Industryinsights', 'Productreviews', 'Thoughtleadership']
    },
    {
      title: 'SocialMedia',
      description: 'Createcompellingsocialmediapostsforallplatformswithoptimalengagement.',
      icon: <ShareclassName="w-8h-8t e xt-emerald-400" />,
      examples: ['Facebookposts', 'Twitterthreads', 'LinkedInarticles', 'Instagramcaptions']
    },
    {
      title: 'EmailMarketing',
      description: 'Generatepersonalizedemailcampaignsthatconvertandengageyouraudience.',
      icon: <MailclassName="w-8h-8t e xt-purple-400" />,
      examples: ['Newsletters', 'Promotionalemails', 'Welcomesequences', 'Follow-upcampaigns']
    },
    {
      title: 'AdCopy',
      description: 'Createhigh-convertingadcopyforGoogle, Facebook, andotheradvertisingplatforms.',
      icon: <TargetclassName="w-8h-8t e xt-pink-400" />,
      examples: ['GoogleAds', 'FacebookAds', 'LinkedInAds', 'Displaybanners']
    }
  ]

  return (
    <>
    <>
      <Helmet>
        <title>5GDataAnalytics - ZionTechGroup</title>
        <metaname="description" content="Professional 5GdataanalyticsservicesbyZionTechGroup. Transformyourbusinesswithourexpertsolutions." />
      </Helmet>
        <title>AIContentGenerator - AdvancedAIWritingAssistant | ZionTechGroup</title>
        <metaname="description" content="TransformyourcontentcreationwithourAIContentGenerator. Generatehigh-quality, SEO-optimizedcontentin 50+ languages. Startingat $29/month. Freetrialavailable." / / />
        <metaname="keywords" content="AIcontentgenerator, contentwriting, SEOcontent, blogwriting, socialmediacontent, emailmarketing, contentautomation, AIwritingassistant" / / />
        <metaname="robots" content="index, follow" / / />
        <linkrel="canonical" href="https://ziontechgroup.com/ai-content-generator" />
      </Helmet>
    </>

      <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900to-slate-900pt-20">
        {/* HeroSection */}
        <sectionclassName="r e lativepy-20px-4overflow-hidden" />
          {/* AnimatedBackground */}
          <divclassName="a b soluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)]animate-pulse" />
          <divclassName="a b soluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / />
    </>
          {/* FloatingElements */}
    <>
          <divclassName="a b solutetop-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animationDelay: '0.5 s' }} / />
          <divclassName="a b solutetop-40 right-20 w-12 h-12 bg-purple-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animationDelay: '1.5 s' }} / />
          <divclassName="a b solutebottom-20 left-1/4 w-8 h-8 bg-pink-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animationDelay: '2.5 s' }} / />
          <divclassName="r e lativemax-w-7xlmx-autotext-center">
            <divclassName="i n line-flexitems-centerspace-x-2 bg-gradient-to-rfrom-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-fulltext-smfont-mediummb-8borderborder-cyan-400/30">
              <SparklesclassName="w-4h-4" />
              <span   />AI-PoweredContentCreation</span>
            </div>
    </>
            
            <h1 className="t e xt-4xlsm:text-6 xlmd:text-7 xlfont-boldtext-whitemb-8leading-tight" />
              AIContent
    <>
              <br / />
              <spanclassName="b g-gradient-to-rfrom-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Generator
              </span>
            </h1>
    </>
            
            <pclassName="t e xt-lgsm:text-xlmd:text-2 xltext-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Createhigh-quality, SEO-optimizedcontentinsecondswithouradvancedAIwritingassistant. 
    <>
              <br / />
              <spanclassName="t e xt-cyan-400font-semibold">50+ languages • 500+ templates • 99.9% accuracy</span>
            </p>
    </>
            
            <divclassName="f l exflex-colsm:flex-rowgap-6justify-centermb-16">
              <buttonclassName="g r oupbg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-10 py-4 rounded-xlfont-semiboldhover:from-cyan-600 hover:to-purple-700 transition-allduration-300 flexitems-centerjustify-centerspace-x-2 shadow-lgshadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <span>StartFreeTrial</span>
                <ArrowRightclassName="w-5 h-5g r oup-hover:translate-x-1transition-transform" />
              </button>
              <buttonclassName="g r oupborder-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xlfont-semiboldhover:bg-cyan-400 hover:text-gray-900 transition-allduration-300 flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
                <PlayclassName="w-5h-5" />
                <span   />WatchDemo</span>
              </button>
            </div>
    </>
            
            {/* TrustIndicators */}
            <divclassName="f l exflex-wrapjustify-centeritems-centergap-8text-gray-400text-sm">
              <divclassName="f l exitems-centerspace-x-2">
                <CheckCircleclassName="w-4h-4t e xt-green-400" />
                <span   />10,000+ ActiveUsers</span>
              </div>
              <divclassName="f l exitems-centerspace-x-2">
                <StarclassName="w-4h-4t e xt-yellow-400" />
                <span   />4.9/5 Rating</span>
              </div>
              <divclassName="f l exitems-centerspace-x-2">
                <ShieldclassName="w-4h-4t e xt-blue-400" />
                <span   />EnterpriseSecurity</span>
              </div>
              <divclassName="f l exitems-centerspace-x-2">
                <ClockclassName="w-4h-4t e xt-purple-400" />
                <span   />24/7 Support</span>
              </div>
          </div>
        </section>
    </>

        {/* FeaturesSection */}
    <>
        <sectionclassName="p y-20px-4relative" />
          <divclassName="a b soluteinset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" />
          <divclassName="r e lativemax-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
                PowerfulFeaturesfor <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />ContentCreators</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-4xlmx-auto">Everythingyouneedtocreate, optimize, andscaleyourcontentmarketingeffortswithAI.</p>
            </div>
    </>
            
            <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
              {features.map((feature, index) => (
    <>
                <divkey="{index}" className="g r oupbg-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:bg-white/20 transition-allduration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <divclassName="f l exitems-centerjustify-centerw-16 h-16 bg-gradient-to-rfrom-cyan-500 to-purple-600 rounded-2 xlmb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                  </div>
                  <h3 className="t e xt-2 xlfont-boldtext-whitemb-4group-hover:text-cyan-400 transition-colors"  />{feature.title}
                  </h3>
                  <pclassName="t e xt-gray-300 mb-6leading-relaxed">{feature.description}</p>
                  <divclassName="s p ace-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
    <>
                      <divkey="{benefitIndex}" className="f l exitems-centerspace-x-2text-gray-400text-sm" />
                        <CheckCircleclassName="w-4h-4t e xt-green-400" />
                        <span   />{benefit}</span>
                      </div>
    </>
                    ))}
    <>
                  </div>
              ))}
    <>
            </div>
        </section>
    </>

        {/* UseCasesSection */}
    <>
        <sectionclassName="p y-20 px-4 bg-gradient-to-brfrom-slate-800/50to-purple-900/50relative" />
          <divclassName="a b soluteinset-0bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <divclassName="r e lativemax-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
                PerfectforEvery <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />ContentType</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-4xlmx-auto">Fromblogpoststosocialmedia, createengagingcontentthatconvertsacrossallplatforms.</p>
            </div>
    </>
            
            <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
              {useCases.map((useCase, index) => (
    <>
                <divkey="{index}" className="g r oupbg-white/10 backdrop-blur-lgrounded-2 xlp-6 borderborder-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <divclassName="f l exitems-centerjustify-centerw-16 h-16 bg-gradient-to-rfrom-cyan-500 to-purple-600 rounded-2 xlmb-6 group-hover:scale-110transition-transformduration-300">{useCase.icon}
                  </div>
                  <h3 className="t e xt-xlfont-boldtext-whitemb-4group-hover:text-cyan-400 transition-colors"  />{useCase.title}
                  </h3>
                  <pclassName="t e xt-gray-300 mb-4leading-relaxed">{useCase.description}</p>
                  <divclassName="s p ace-y-1">
                    {useCase.examples.map((example, exampleIndex) => (
    <>
                      <divkey="{exampleIndex}" className="t e xt-cyan-400text-sm">• {example}
                      </div>
    </>
                    ))}
    <>
                  </div>
              ))}
    <>
            </div>
        </section>
    </>

        {/* PricingSection */}
    <>
        <sectionclassName="p y-20px-4relative" />
          <divclassName="a b soluteinset-0 bg-gradient-to-rfrom-purple-500/5via-cyan-500/5to-pink-500/5" />
          <divclassName="r e lativemax-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
                Simple, Transparent <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Pricing</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-4xlmx-auto">Choosetheperfectplanforyourcontentneeds. AllplansincludeourcoreAIfeatures.</p>
            </div>
    </>
            
            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              {pricingPlans.map((plan, index) => (
                <divkey="{index}" className="{`g r oup" relativebg-white/10 backdrop-blur-lgrounded-2 xlp-8 bordertransition-allduration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2 xlshadow-cyan-500/20' 
                    : 'border-white/20 hover: border-cyan-400/30'
                }`} />
                  {plan.popular && (
                    <divclassName="a b solute -top-4 left-1/2transform-translate-x-1/2">
                      <divclassName="b g-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-6 py-2 rounded-fulltext-smfont-semibold"  />MostPopular
                      </div>
                  )}
                  
                  <divclassName="t e xt-centermb-8">
                    <h3 className="t e xt-2 xlfont-boldtext-whitemb-2"   />{plan.name}</h3>
                    <pclassName="t e xt-gray-300 mb-6">{plan.description}</p>
                    <divclassName="f l exitems-baselinejustify-center">
                      <spanclassName="t e xt-5 xlfont-boldtext-white"   />{plan.price}</span>
                      <spanclassName="t e xt-gray-400ml-2"   />{plan.period}</span>
                    </div>
                  <divclassName="s p ace-y-4mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <divkey="{featureIndex}" className="f l exitems-centerspace-x-3" />
                        <CheckCircleclassName="w-5 h-5t e xt-green-400flex-shrink-0" />
                        <spanclassName="t e xt-gray-300"   />{feature}</span>
                      </div>
    </>
                    ))}
                  </div>
                  <buttonclassName="{`w-f u ll" py-4 rounded-xlfont-semiboldtransition-allduration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitehover:from-cyan-600 hover:to-purple-700 shadow-lgshadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}  />{plan.cta}
    <>
                  </button>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* TestimonialsSection */}
    <>
        <sectionclassName="p y-20 px-4 bg-gradient-to-brfrom-purple-900/50to-pink-900/50relative" />
          <divclassName="a b soluteinset-0bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
          <divclassName="r e lativemax-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
                Trustedby <spanclassName="b g-gradient-to-rfrom-purple-400 to-pink-400bg-clip-texttext-transparent"   />10,000+ Users</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-4xlmx-auto">SeewhatourcustomerssayabouttheirexperiencewithourAIContentGenerator.</p>
            </div>
    </>
            
            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              {testimonials.map((testimonial, index) => (
    <>
                <divkey="{index}" className="b g-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:bg-white/20transition-allduration-300" />
                  <divclassName="f l exitems-centermb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Starkey="{i}" className="w-5 h-5t e xt-yellow-400fill-current" />
                    ))}
    <>
                  </div>
                  <pclassName="t e xt-gray-300 mb-6leading-relaxed">"{testimonial.content}"</p>
                  <divclassName="f l exitems-centerspace-x-4">
                    <divclassName="w-12 h-12 b g-gradient-to-rfrom-cyan-500 to-purple-600 rounded-fullflexitems-centerjustify-centertext-whitefont-bold"  />{testimonial.avatar}
                    </div>
                    <div />
                      <divclassName="f o nt-semiboldtext-white"   />{testimonial.name}</div>
                      <divclassName="t e xt-gray-400text-sm"   />{testimonial.role}, {testimonial.company}</div>
                  </div>
              ))}
    <>
            </div>
        </section>
    </>

        {/* CTASection */}
    <>
        <sectionclassName="p y-20px-4relative" />
          <divclassName="a b soluteinset-0 bg-gradient-to-rfrom-cyan-500/10via-purple-500/10to-pink-500/10" />
          <divclassName="r e lativemax-w-7xlmx-auto">
            <divclassName="t e xt-center">
              <divclassName="b g-gradient-to-rfrom-cyan-600 via-purple-600 to-pink-600 rounded-3 xlp-8 sm:p-12 lg:p-16relativeoverflow-hidden">
                <divclassName="a b solutetop-0 left-0 w-fullh-fullbg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]animate-pulse" />
                <divclassName="r e lativez-10">
                  <h2 className="t e xt-4xlsm:text-5 xlmd:text-6 xlfont-boldtext-whitemb-6leading-tight" />
                    ReadytoTransformYour <spanclassName="b g-gradient-to-rfrom-cyan-300 to-pink-300bg-clip-texttext-transparent"   />ContentStrategy?</span>
                  </h2>
    </>
                  
                  <pclassName="t e xt-xlsm:text-2 xltext-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">JointhousandsofcontentcreatorswhoarealreadyusingourAItoscaletheircontentproduction. 
                    Startyourfreetrialtoday - nocreditcardrequired.</p>
                  <divclassName="f l exflex-colsm:flex-rowgap-6justify-centermb-8">
                    <buttonclassName="g r oupbg-whitetext-cyan-600 px-10 py-4 rounded-xlfont-boldtext-lghover:bg-gray-100 transition-allduration-300 flexitems-centerjustify-centerspace-x-2 shadow-lghover:shadow-xltransformhover:scale-105" />
                      <span>StartFreeTrial</span>
                      <ArrowRightclassName="w-5 h-5g r oup-hover:translate-x-1transition-transform" />
                    </button>
                    <Linkto="/contact" className="g r oupborder-2 border-whitetext-whitepx-10 py-4 rounded-xlfont-boldtext-lghover:bg-white/10 transition-allduration-300 flexitems-centerjustify-centerspace-x-2backdrop-blur-sm">
          <span    />
        </Link>ContactSales</span>
                      <MessageCircleclassName="w-5 h-5g r oup-hover:scale-110transition-transform" />
                    </Link>
                  </div>
    </>
                  
                  {/* ContactInformation */}
                  <divclassName="g r idgrid-cols-1 md:grid-cols-3gap-6text-white/80">
                    <divclassName="f l exitems-centerjustify-centerspace-x-3">
                      <PhoneclassName="w-5h-5t e xt-cyan-300" />
                      <spanclassName="t e xt-sm"   />+1 302 464 0950</span>
                    </div>
                    <divclassName="f l exitems-centerjustify-centerspace-x-3">
                      <MailclassName="w-5h-5t e xt-purple-300" />
                      <spanclassName="t e xt-sm"   />kleber@ziontechgroup.com</span>
                    </div>
                    <divclassName="f l exitems-centerjustify-centerspace-x-3">
                      <MapPinclassName="w-5h-5t e xt-pink-300" />
                      <spanclassName="t e xt-sm"   />MiddletownDE 19709</span>
                    </div>
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
      </div>
    </>
  );
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
}
    </>
