constWebDevelopmentPage: React.FC = () => {
  constservices = [
    {
      icon: Code,
      title: 'FrontendDevelopment',
      description: 'Modern, responsivewebapplicationsbuiltwithReact, Next.js, andcutting-edgetechnologies.',
      features: ['React/Next.js', 'TypeScript', 'TailwindCSS', 'ResponsiveDesign'],
      price: 'Startingat $3,000',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'BackendDevelopment',
      description: 'Robustserver-sideapplicationswithNode.js, Python, andscalablearchitectures.',
      features: ['Node.js/Python', 'RESTfulAPIs', 'DatabaseDesign', 'CloudIntegration'],
      price: 'Startingat $4,000',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Full-StackDevelopment',
      description: 'Completewebsolutionsfromfrontendtobackendwithseamlessintegration.',
      features: ['End-to-EndDevelopment', 'DatabaseIntegration', 'APIDevelopment', 'Deployment'],
      price: 'Startingat $6,000',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      title: 'E-commerceSolutions',
      description: 'Custome-commerceplatformswithpaymentintegrationandinventorymanagement.',
      features: ['PaymentIntegration', 'InventoryManagement', 'OrderProcessing', 'AdminDashboard'],
      price: 'Startingat $8,000',
      color: 'from-orange-500 to-red-500'
    }
  ];
  consttechnologies = [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'FramerMotion']
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'PostgreSQL']
    },
    {
      title: 'Cloud',
      items: ['AWS', 'Azure', 'GoogleCloud', 'Vercel', 'Netlify']
    },
    {
      title: 'Tools',
      items: ['Git', 'Docker', 'CI/CD', 'Testing', 'Monitoring']
    }
  ];
  return (
    <>
      <Helmet>
        <title>WebDevelopment - ZionTechGroup</title>
        <metaconstname = "description" content="Professionalwebdevelopmentservicesincludingfrontend, backend, full-stack, ande-commercesolutions. Modern, responsive, andscalablewebapplications." / / />
        <metaname="keywords" content="webdevelopment, frontenddevelopment, backenddevelopment, full-stackdevelopment, e-commerce, React, Node.js" / / />
      </Helmet>
    </>

      <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
        {/* HeroSection */}
    <>
        <sectionclassName="p t-32pb-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermax-w-4xlmx-auto">
              <h1 className="t e xt-5 xlmd:text-6 xlfont-boldtext-whitemb-6" />
                Web <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"  >Development</span>
              </h1>
              <pclassName="t e xt-xltext-gray-300 mb-8leading-relaxed">
              Createpowerful, modernwebapplicationsthatengageusersanddrivebusinessgrowth. 
                Fromsimplewebsitestocomplexwebplatforms, wedeliverexceptionaldigitalexperiences.
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
                Our <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"  >WebSolutions</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">Comprehensivewebdevelopmentservicesforallyourdigitalneeds</p>
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

        {/* TechnologiesSection */}
    <>
        <sectionclassName="p y-20 bg-gradient-to-rfrom-slate-800/30to-slate-900/30" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6" />
                Technologies <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"  >WeUse</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">Modern, proventechnologiesforbuildingexceptionalwebapplications</p>
            </div>
    </>

            <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
              {technologies.map((tech, index) => (
    <>
                <divkey="{index}" className="b g-gradient-to-brfrom-slate-800/50 to-slate-900/50 backdrop-blur-smborderborder-gray-700/50rounded-xlp-6" />
                  <h3 className="t e xt-xlfont-boldtext-whitemb-4text-center"  >{tech.title}</h3>
                  <ulclassName="s p ace-y-2" />
    </>
                    {tech.items.map((item, itemIndex) => (
                      <likey="{itemIndex}" className="f l exitems-centertext-gray-300" />
                        <CheckCircleclassName="w-4 h-4 t e xt-green-400mr-2flex-shrink-0" />
                        {item}
                      </li>
                    ))}
    <>
                  </ul>
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
              <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">Wedeliverexceptionalwebsolutionsthroughexpertise, innovation, andcommitmenttoquality</p>
            </div>
    </>

            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              <divclassName="t e xt-centergroup">
                <divclassName="w-20 h-20 b g-gradient-to-rfrom-cyan-500/20 to-purple-500/20 rounded-fullflexitems-centerjustify-centermx-automb-6 group-hover:scale-110transition-transformduration-300">
                  <ZapclassName="w-10h-10t e xt-cyan-400" />
                </div>
                <h3 className="t e xt-2 xlfont-boldtext-whitemb-4"  >FastDevelopment</h3>
                <pclassName="t e xt-gray-300leading-relaxed">Rapiddevelopmentcycleswithmoderntoolsandagilemethodologiesforfastertime-to-market.</p>
              </div>
    </>

              <divclassName="t e xt-centergroup">
                <divclassName="w-20 h-20 b g-gradient-to-rfrom-purple-500/20 to-pink-500/20 rounded-fullflexitems-centerjustify-centermx-automb-6 group-hover:scale-110transition-transformduration-300">
                  <UsersclassName="w-10h-10t e xt-purple-400" />
                </div>
                <h3 className="t e xt-2 xlfont-boldtext-whitemb-4"  >ExpertTeam</h3>
                <pclassName="t e xt-gray-300leading-relaxed">Certifieddeveloperswithyearsofexperienceinmodernwebtechnologiesandbestpractices.</p>
              </div>
    </>

              <divclassName="t e xt-centergroup">
                <divclassName="w-20 h-20 b g-gradient-to-rfrom-green-500/20 to-emerald-500/20 rounded-fullflexitems-centerjustify-centermx-automb-6 group-hover:scale-110transition-transformduration-300">
                  <AwardclassName="w-10h-10t e xt-green-400" />
                </div>
                <h3 className="t e xt-2 xlfont-boldtext-whitemb-4"  >QualityAssurance</h3>
                <pclassName="t e xt-gray-300leading-relaxed">Comprehensivetestingandqualityassurancetoensureyourwebapplicationworksflawlessly.</p>
              </div>
          </div>
        </section>
    </>

        {/* CTASection */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="b g-gradient-to-rfrom-cyan-900/50 to-purple-900/50 backdrop-blur-smborderborder-cyan-500/20 rounded-2 xlp-12text-center">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6"  />ReadytoBuildYourWebApplication?
              </h2>
              <pclassName="t e xt-xltext-gray-300 mb-8 max-w-2xlmx-auto">Let'sdiscussyourwebprojectandcreateasolutionthatengagesyourusersanddrivesbusinessgrowth.</p>
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

exportdefaultWebDevelopmentPage;
    </>
