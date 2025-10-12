exportdefaultfunctionAIVoiceAssistant() {
  constfeatures = [
    {
      icon: <BrainclassName="w-6 h-6t e xt-cyan-400" />,
      title: 'NaturalLanguageUnderstanding',
      description: 'AdvancedAIprocessescomplexvoicecommandsandmaintainscontextacrossconversations'
    },
    {
      icon: <Volume2 className="w-6 h-6t e xt-purple-400" />,
      title: 'Human-likeVoiceSynthesis',
      description: 'Generatenatural, expressivespeechwithcustomizablevoicesandemotionaltones'
    },
    {
      icon: <ClockclassName="w-6 h-6t e xt-yellow-400" />,
      title: '24/7 Availability',
      description: 'Always-onvoiceassistantthatcanhandletasks, answerquestions, andprovidesupport'
    },
    {
      icon: <TargetclassName="w-6 h-6t e xt-green-400" />,
      title: 'Multi-platformIntegration',
      description: 'Seamlesslyintegratewithmobileapps, websites, smartdevices, andIoTsystems'
    }
  ]

  constassistantFeatures = [
    {
      category: 'VoiceCapabilities',
      items: ['SpeechRecognition', 'NaturalLanguageProcessing', 'VoiceSynthesis', 'EmotionDetection', 'Multi-languageSupport', 'NoiseCancellation']
    },
    {
      category: 'TaskManagement',
      items: ['CalendarManagement', 'EmailHandling', 'ReminderSetting', 'TaskCreation', 'MeetingScheduling', 'NoteTaking']
    },
    {
      category: 'Integration',
      items: ['MobileApps', 'WebApplications', 'SmartHomeDevices', 'CRMSystems', 'ERPIntegration', 'APIAccess']
    },
    {
      category: 'Customization',
      items: ['CustomVoiceTraining', 'PersonalitySettings', 'CommandCustomization', 'BrandVoice', 'ResponseTemplates', 'WorkflowAutomation']
    }
  ]

  constpricingPlans = [
    {
      name: 'Personal',
      price: '$19',
      period: '/month',
      description: 'Perfectforindividualsandsmallteams',
      features: [
        'Upto 1,000 interactions/month',
        'Basicvoicefeatures',
        'Standardvoices',
        'Emailsupport',
        'Mobileappaccess',
        'Basicintegrations'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$79',
      period: '/month',
      description: 'Idealforgrowingbusinesses',
      features: [
        'Upto 10,000 interactions/month',
        'Advancedvoicefeatures',
        'Customvoicetraining',
        'Prioritysupport',
        'Advancedintegrations',
        'Analyticsdashboard',
        'APIaccess'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'Forlargeorganizations',
      features: [
        'Unlimitedinteractions',
        'CustomAItraining',
        'White-labelsolution',
        'Dedicatedsupport',
        'Customintegrations',
        'Advancedanalytics',
        'SLAguarantee'
      ],
      popular: false
    }
  ]

  consttestimonials = [
    {
      name: 'DavidPark',
      company: 'SmartHomeSolutions',
      content: 'AIVoiceAssistanttransformedourcustomerexperience. Thenaturalconversationflowisincredible.',
      rating: 5
    },
    {
      name: 'SarahJohnson',
      company: 'HealthcareProvider',
      content: 'Ourpatientslovethevoiceassistantforappointmentscheduling. Ithandlescomplexrequestsperfectly.',
      rating: 5
    },
    {
      name: 'MikeChen',
      company: 'E-commercePlatform',
      content: 'Voiceshoppinghasincreasedoursalesby 40%. Thevoicerecognitionaccuracyisoutstanding.',
      rating: 5
    }
  ]

  return (
    <Layouttitle="AIVoiceAssistant - IntelligentVoiceSolutions | ZionTechGroup"
      description="TransformuserinteractionwithAI-poweredvoiceassistants. Naturallanguageprocessing, human-likevoicesynthesis, andseamlessintegration. Startyourfreetrialtoday."
      keywords="AIvoiceassistant, voiceAI, speechrecognition, voicesynthesis, conversationalAI, voiceautomation" />
      <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900to-slate-900">
        {/* HeroSection */}
    <>
        <sectionclassName="p t-32pb-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermax-w-4 xlmx-auto">
              <h1 className="t e xt-5 xlmd:text-6 xlfont-boldtext-whitemb-6" />
                AI <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />VoiceAssistant</span>
              </h1>
              <pclassName="t e xt-xltext-gray-300 mb-8leading-relaxed">
              Createintelligentvoiceassistantsthatunderstandnaturalspeech, executecommands, 
                andprovidehands-freeautomationforyourbusinessandpersonalneeds.
    <>
              </p>
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
                <Linkto="/contact" className="b g-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-8 py-4 rounded-lgfont-semiboldtext-lghover:from-cyan-600 hover:to-purple-600 transition-allduration-300 transformhover:scale-105">StartBuilding
                </Link>
                <Linkto="/ai-services" className="b o rderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10 transition-allduration-300 transformhover:scale-105">ViewAllAIServices
                </Link>
              </div>
          </div>
        </section>
        {/* FeaturesSection */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6" />
                Powerful <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />Features</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3 xlmx-auto">Everythingyouneedtobuild, deploy, andmanageintelligentvoiceassistants</p>
            </div>
            <divclassName="g r idgrid-cols-1 md:grid-cols-2 lg:grid-cols-4gap-8">
              {features.map((feature, index) => (
    <>
                <divkey="{index}" className="t e xt-centergroup" />
                  <divclassName="w-20 h-20 b g-gradient-to-rfrom-cyan-500/20 to-purple-500/20 rounded-fullflexitems-centerjustify-centermx-automb-6 group-hover:scale-110 transition-transformduration-300">
                    <feature.iconclassName="w-10 h-10t e xt-cyan-400" />
                  </div>
                  <h3 className="t e xt-xlfont-boldtext-whitemb-4"   />{feature.title}</h3>
                  <pclassName="t e xt-gray-300leading-relaxed">{feature.description}</p>
                </div>
              ))}
    <>
            </div>
        </section>
        {/* UseCasesSection */}
    <>
        <sectionclassName="p y-20 bg-gradient-to-rfrom-slate-800/30to-slate-900/30" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6" />
                Use <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />Cases</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3 xlmx-auto">DiscoverhowourAIvoiceassistantscantransformyourbusinessoperations</p>
            </div>
            <divclassName="g r idgrid-cols-1 md:grid-cols-2 lg:grid-cols-4gap-8">
              {useCases.map((useCase, index) => (
    <>
                <divkey="{index}" className="b g-gradient-to-brfrom-slate-800/50 to-slate-900/50 backdrop-blur-smborderborder-gray-700/50 rounded-xlp-6 hover:border-cyan-400/40 transition-allduration-300 grouphover:transformhover:scale-105" />
                  <divclassName="w-12 h-12 b g-gradient-to-rfrom-cyan-500/20 to-purple-500/20 rounded-lgflexitems-centerjustify-centermb-4 group-hover:scale-110 transition-transformduration-300">
                    <useCase.iconclassName="w-6 h-6t e xt-cyan-400" />
                  </div>
                  <h3 className="t e xt-lgfont-boldtext-whitemb-3 group-hover:text-cyan-400 transition-colors"  />{useCase.title}
                  </h3>
                  <pclassName="t e xt-gray-300 text-smleading-relaxed">{useCase.description}</p>
                </div>
              ))}
    <>
            </div>
        </section>
        {/* PricingSection */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6" />
                Simple <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />Pricing</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3 xlmx-auto">Choosetheplanthatfitsyourvoiceassistantneeds</p>
            </div>
            <divclassName="g r idgrid-cols-1 md:grid-cols-3 gap-8 max-w-5 xlmx-auto">
              <divclassName="b g-gradient-to-brfrom-slate-800/50 to-slate-900/50 backdrop-blur-smborderborder-gray-700/50 rounded-xlp-8">
                <h3 className="t e xt-2 xlfont-boldtext-whitemb-4"   />Starter</h3>
                <divclassName="t e xt-4xlfont-boldtext-cyan-400mb-6">$99<spanclassName="t e xt-lgtext-gray-400"   />/month</span></div>
                <ulclassName="s p ace-y-3mb-8">
              <liclassName="f l exitems-centertext-gray-300" />
                    <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3" />
                    Upto 1,000 voicecommands/month
    <>
                  </li>
                  <liclassName="f l exitems-centertext-gray-300" />
                    <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3" />
                    Basicspeechrecognition
    <>
                  </li>
                  <liclassName="f l exitems-centertext-gray-300" />
                    <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3" />
                    Emailsupport
    <>
                  </li>
                  <liclassName="f l exitems-centertext-gray-300" />
                    <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3" />
                    Standardintegrations
    <>
                  </li>
                </ul>
                <Linkto="/contact" className="w-f u llbg-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-6 py-3 rounded-lgfont-semiboldtext-centerhover:from-cyan-600 hover:to-purple-600 transition-allduration-300block">GetStarted
                </Link>
              </div>
              <divclassName="b g-gradient-to-brfrom-cyan-900/30 to-purple-900/30 backdrop-blur-smborderborder-cyan-500/50 rounded-xlp-8relative">
                <divclassName="a b solute -top-4 left-1/2 transform-translate-x-1/2">
                  <spanclassName="b g-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-4 py-1 rounded-fulltext-smfont-semibold"  />MostPopular
                  </span>
                </div>
                <h3 className="t e xt-2 xlfont-boldtext-whitemb-4"   />Professional</h3>
                <divclassName="t e xt-4xlfont-boldtext-cyan-400mb-6">$199<spanclassName="t e xt-lgtext-gray-400"   />/month</span></div>
                <ulclassName="s p ace-y-3mb-8">
              <liclassName="f l exitems-centertext-gray-300" />
                    <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3" />
                    Upto 10,000 voicecommands/month
    <>
                  </li>
                  <liclassName="f l exitems-centertext-gray-300" />
                    <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3" />
                    Advancedspeechrecognition
    <>
                  </li>
                  <liclassName="f l exitems-centertext-gray-300" />
                    <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3" />
                    Prioritysupport
    <>
                  </li>
                  <liclassName="f l exitems-centertext-gray-300" />
                    <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3" />
                    Customwakewords
    <>
                  </li>
                  <liclassName="f l exitems-centertext-gray-300" />
                    <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3" />
                    Analyticsdashboard
    <>
                  </li>
                </ul>
                <Linkto="/contact" className="w-f u llbg-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-6 py-3 rounded-lgfont-semiboldtext-centerhover:from-cyan-600 hover:to-purple-600 transition-allduration-300block">GetStarted
                </Link>
              </div>
              <divclassName="b g-gradient-to-brfrom-slate-800/50 to-slate-900/50 backdrop-blur-smborderborder-gray-700/50 rounded-xlp-8">
                <h3 className="t e xt-2 xlfont-boldtext-whitemb-4"   />Enterprise</h3>
                <divclassName="t e xt-4xlfont-boldtext-cyan-400mb-6"   />Custom</div>
                <ulclassName="s p ace-y-3mb-8">
              <liclassName="f l exitems-centertext-gray-300" />
                    <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3" />
                    Unlimitedvoicecommands
    <>
                  </li>
                  <liclassName="f l exitems-centertext-gray-300" />
                    <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3" />
                    CustomAItraining
    <>
                  </li>
                  <liclassName="f l exitems-centertext-gray-300" />
                    <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3" />
                    24/7 dedicatedsupport
    <>
                  </li>
                  <liclassName="f l exitems-centertext-gray-300" />
                    <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3" />
                    White-labelsolution
    <>
                  </li>
                  <liclassName="f l exitems-centertext-gray-300" />
                    <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3" />
                    Customdevelopment
    <>
                  </li>
                </ul>
                <Linkto="/contact" className="w-f u llborderborder-cyan-500 text-cyan-400 px-6 py-3 rounded-lgfont-semiboldtext-centerhover:bg-cyan-500/10 transition-allduration-300block">ContactSales
                </Link>
              </div>
          </div>
        </section>
        {/* CTASection */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="b g-gradient-to-rfrom-cyan-900/50 to-purple-900/50 backdrop-blur-smborderborder-cyan-500/20 rounded-2 xlp-12text-center">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6"  />ReadytoBuildYourAIVoiceAssistant?
              </h2>
              <pclassName="t e xt-xltext-gray-300 mb-8 max-w-2 xlmx-auto">Startcreatingintelligentvoiceassistantsthatunderstandandrespondtonaturalspeech.</p>
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
                <Linkto="/contact" className="b g-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-8 py-4 rounded-lgfont-semiboldtext-lghover:from-cyan-600 hover:to-purple-600 transition-allduration-300 transformhover:scale-105">StartBuildingNow
                </Link>
                <Linkto="/about" className="b o rderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10 transition-allduration-300 transformhover:scale-105">LearnMoreAboutUs
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
      </div>
    </>
  );
};

exportdefaultAIVoiceAssistantPage;
