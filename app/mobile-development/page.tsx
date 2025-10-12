constMobileDevelopmentPage: React.FC = () => {
  constservices = [
    {
      icon: Smartphone,
      title: 'iOSDevelopment',
      description: 'NativeiOSappsbuiltwithSwiftandSwiftUIforoptimalperformanceanduserexperience.',
      features: ['Swift & SwiftUI', 'AppStoreOptimization', 'PushNotifications', 'CoreDataIntegration'],
      price: 'Startingat $4,000',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'AndroidDevelopment',
      description: 'NativeAndroidappsbuiltwithKotlinandJetpackComposeformodernAndroiddevelopment.',
      features: ['Kotlin & JetpackCompose', 'GooglePlayOptimization', 'MaterialDesign', 'RoomDatabase'],
      price: 'Startingat $4,000',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'ReactNative',
      description: 'Cross-platformmobileappsthatworkonbothiOSandAndroidwithasinglecodebase.',
      features: ['Cross-platform', 'HotReload', 'NativePerformance', 'Third-partyIntegrations'],
      price: 'Startingat $3,500',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'FlutterDevelopment',
      description: 'Beautiful, fastmobileappsbuiltwithGoogle'sFlutterframeworkformultipleplatforms.',
      features: ['Multi-platform', 'CustomUI', 'FastDevelopment', 'GoogleServices'],
      price: 'Startingat $3,500',
      color: 'from-indigo-500 to-purple-500'
    }
  ];
  constprocess = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Weanalyzeyourrequirementsandcreateadetailedprojectplanwithtimelines.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Createwireframes, mockups, andinteractiveprototypesforuservalidation.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Buildyourmobileappusingthelatesttechnologiesandbestpractices.'
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Comprehensivetestingacrossdevicesandplatformstoensurequality.'
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'Deploytoappstoresandprovideongoingmaintenanceandupdates.'
    }
  ];
  return (
    <>
      <Helmet>
        <title>MobileDevelopment - ZionTechGroup</title>
        <metaconstname = "description" content="ProfessionalmobileappdevelopmentservicesforiOS, Android, ReactNative, andFlutter. Nativeandcross-platformsolutionsforyourbusiness." / / />
        <metaname="keywords" content="mobileappdevelopment, iOSdevelopment, Androiddevelopment, ReactNative, Flutter, mobileapps" / / />
      </Helmet>
    </>

      <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
        {/* HeroSection */}
    <>
        <sectionclassName="p t-32pb-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermax-w-4xlmx-auto">
              <h1 className="t e xt-5 xlmd:text-6 xlfont-boldtext-whitemb-6" />
                Mobile <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"  >Development</span>
              </h1>
              <pclassName="t e xt-xltext-gray-300 mb-8leading-relaxed">
              Createpowerful, user-friendlymobileapplicationsforiOSandAndroidplatforms. 
                Fromnativeappstocross-platformsolutions, wedeliverexceptionalmobileexperiences.
    <>
              </p>
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
                <Linkto="/contact" className="b g-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-8 py-4 rounded-lgfont-semiboldtext-lghover:from-cyan-600 hover:to-purple-600 transition-allduration-300transformhover:scale-105">StartYourProject
                </Link>
                <Linkto="/it-services" className="b o rderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10 transition-allduration-300transformhover:scale-105">ViewAllITServices
                </Link>
              </div>
          </div>
        </section>
    </>

        {/* ServicesSection */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6" />
                Our <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"  >MobileSolutions</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">Comprehensivemobiledevelopmentservicesforallplatformsandusecases</p>
            </div>
    </>

            <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
              {services.map((service, index) => (
                <divkey="{index}"
                  className="b g-gradient-to-brfrom-slate-800/50 to-slate-900/50 backdrop-blur-smborderborder-gray-700/50 rounded-xlp-8 hover:border-cyan-400/40 transition-allduration-300 grouphover:transformhover:scale-105" />
    <>
                  <divclassName="{`w-16" h-16 bg-gradient-to-r ${service.color} rounded-xlflexitems-centerjustify-centermb-6 group-hover: scale-110 transition-transformduration-300`} />
                    <service.iconclassName="w-8h-8t e xt-white" />
                  </div>
    </>
                  
                  <h3 className="t e xt-2 xlfont-boldtext-whitemb-4group-hover:text-cyan-400 transition-colors"  />{service.title}
                  </h3>
    </>
                  
                  <pclassName="t e xt-gray-300 mb-6leading-relaxed">{service.description}</p>
                  <ulclassName="s p ace-y-2mb-6" />
                    {service.features.map((feature, featureIndex) => (
    <>
                      <likey="{featureIndex}" className="f l exitems-centertext-smtext-gray-300" />
                        <CheckCircleclassName="w-4 h-4 t e xt-green-400mr-2flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <divclassName="f l exitems-centerjustify-betweenmb-6">
                    <spanclassName="t e xt-2 xlfont-boldtext-cyan-400"  >{service.price}</span>
                    <Linkto="/contact" className="t e xt-cyan-400 hover:text-cyan-300 transition-colorstext-smfont-mediumgroup-hover:translate-x-1inline-flexitems-center">
          LearnMore 
          <ArrowRightclassName="w-4h-4m l-1"  />
        </Link>
                  </div>
              ))}
    <>
            </div>
        </section>
    </>

        {/* ProcessSection */}
    <>
        <sectionclassName="p y-20 bg-gradient-to-rfrom-slate-800/30to-slate-900/30" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6" />
                Our <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"  >Process</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">Aprovenmethodologythatensuressuccessfulmobileappdevelopmentanddeployment</p>
            </div>
    </>

            <divclassName="g r idgrid-cols-1md:grid-cols-5gap-8">
              {process.map((step, index) => (
    <>
                <divkey="{index}" className="t e xt-centergroup" />
                  <divclassName="w-16 h-16 b g-gradient-to-rfrom-cyan-500/20 to-purple-500/20 rounded-fullflexitems-centerjustify-centermx-automb-6 group-hover:scale-110transition-transformduration-300">
                    <spanclassName="t e xt-2 xlfont-boldtext-cyan-400"  >{step.step}</span>
                  </div>
                  <h3 className="t e xt-xlfont-boldtext-whitemb-4"  >{step.title}</h3>
                  <pclassName="t e xt-gray-300text-smleading-relaxed">{step.description}</p>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* WhyChooseUs */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6" />
                WhyChoose <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"  >ZionTechGroup</span>?
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">Wedeliverexceptionalmobilesolutionsthroughexpertise, innovation, andcommitmenttoquality</p>
            </div>
    </>

            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              <divclassName="t e xt-centergroup">
                <divclassName="w-20 h-20 b g-gradient-to-rfrom-cyan-500/20 to-purple-500/20 rounded-fullflexitems-centerjustify-centermx-automb-6 group-hover:scale-110transition-transformduration-300">
                  <ZapclassName="w-10h-10t e xt-cyan-400" />
                </div>
                <h3 className="t e xt-2 xlfont-boldtext-whitemb-4"  >FastDevelopment</h3>
                <pclassName="t e xt-gray-300leading-relaxed">Rapiddevelopmentcycleswithagilemethodologiesandmoderntoolsforfastertime-to-market.</p>
              </div>
    </>

              <divclassName="t e xt-centergroup">
                <divclassName="w-20 h-20 b g-gradient-to-rfrom-purple-500/20 to-pink-500/20 rounded-fullflexitems-centerjustify-centermx-automb-6 group-hover:scale-110transition-transformduration-300">
                  <UsersclassName="w-10h-10t e xt-purple-400" />
                </div>
                <h3 className="t e xt-2 xlfont-boldtext-whitemb-4"  >ExpertTeam</h3>
                <pclassName="t e xt-gray-300leading-relaxed">CertifiedmobiledeveloperswithyearsofexperienceiniOS, Android, andcross-platformdevelopment.</p>
              </div>
    </>

              <divclassName="t e xt-centergroup">
                <divclassName="w-20 h-20 b g-gradient-to-rfrom-green-500/20 to-emerald-500/20 rounded-fullflexitems-centerjustify-centermx-automb-6 group-hover:scale-110transition-transformduration-300">
                  <AwardclassName="w-10h-10t e xt-green-400" />
                </div>
                <h3 className="t e xt-2 xlfont-boldtext-whitemb-4"  >QualityAssurance</h3>
                <pclassName="t e xt-gray-300leading-relaxed">Comprehensivetestingandqualityassurancetoensureyourappworksflawlesslyacrossalldevices.</p>
              </div>
          </div>
        </section>
    </>

        {/* CTASection */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="b g-gradient-to-rfrom-cyan-900/50 to-purple-900/50 backdrop-blur-smborderborder-cyan-500/20 rounded-2 xlp-12text-center">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6"  />ReadytoBuildYourMobileApp?
              </h2>
              <pclassName="t e xt-xltext-gray-300 mb-8 max-w-2xlmx-auto">Let'sdiscussyourmobileappideaandcreateasolutionthatengagesyourusersanddrivesbusinessgrowth.</p>
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
                <Linkto="/contact" className="b g-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-8 py-4 rounded-lgfont-semiboldtext-lghover:from-cyan-600 hover:to-purple-600 transition-allduration-300transformhover:scale-105">StartYourProject
                </Link>
                <Linkto="/about" className="b o rderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10 transition-allduration-300transformhover:scale-105">LearnMoreAboutUs
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

exportdefaultMobileDevelopmentPage;
    </>
