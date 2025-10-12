'useclient';
import { useState, useEffect  } from 'react';
import { Link   } from 'react-router-dom';
import { ArrowRight, ShoppingCart   } from 'lucide-react';
import { ArrowRight, ShoppingCart  } from 'lucide-react';

constItServicesPage: React.FC = () => {

  useEffect(() => {
    setIsVisible(true);
  }, []);

  constitServices = [
    {
      title: 'CloudInfrastructure',
      description: 'ScalablecloudsolutionswithAWS, Azure, andGoogleCloudexpertise',
      price: 'Startingat $5,000',
      features: [
        'Cloudmigrationandsetup',
        'InfrastructureasCode',
        'Auto-scalingsolutions',
        'Costoptimization',
        '24/7 monitoring',
        'Disasterrecovery'
      ],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      category: 'Infrastructure'
    },
    {
      title: 'CybersecuritySolutions',
      description: 'Comprehensivesecuritysolutionstoprotectyourdigitalassets',
      price: 'Startingat $3,000',
      features: [
        'Securityassessment',
        'Penetrationtesting',
        'Securitymonitoring',
        'Compliancemanagement',
        'Incidentresponse',
        'Stafftraining'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security'

constITServicesPage: React.FC = () => {
  constservices = [
    {
      icon: Cloud,
      title: 'CloudMigration',
      description: 'SeamlesslymigrateyourinfrastructuretothecloudwithAWS, Azure, andGoogleCloudexpertise.',
      features: ['AWSMigration', 'AzureMigration', 'GoogleCloudSetup', 'HybridCloudSolutions'],
      price: 'Startingat $2,500',
      color: 'from-cyan-500 to-blue-500',
      link: '/cloud-migration'
    },
    {
      icon: Shield,
      title: 'CybersecuritySolutions',
      description: 'Comprehensivesecuritysolutionstoprotectyourdigitalassetsandensurecompliance.',
      features: ['SecurityAudits', 'PenetrationTesting', 'ComplianceManagement', 'IncidentResponse'],
      price: 'Startingat $1,500',
      color: 'from-red-500 to-orange-500',
      link: '/cybersecurity-solutions'
    },
    {
      icon: Code,
      title: 'WebDevelopment',
      description: 'Modern, responsivewebapplicationsbuilttoscale',
      price: 'Startingat $8,000',
      features: [
        'Responsivedesign',
        'SEOoptimization',
        'Performancetuning',
        'Maintenancesupport',
        'Mobileoptimization',
        'Cross-browsercompatibility'
      ],
      color: 'from-green-500 to-emerald-500',
      category: 'Development'
    },
    {
      title: 'MobileDevelopment',
      description: 'Nativeandcross-platformmobileapplications',
      price: 'Startingat $12,000',
      features: [
        'iOS & Androidapps',
        'Cross-platformdevelopment',
        'Appstoreoptimization',
        'Pushnotifications',
        'Offlinefunctionality',
        'Performanceoptimization'
      ],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      category: 'Development'
    },
    {
      title: 'APIDevelopment',
      description: 'RESTfulandGraphQLAPIsforseamlessintegration',
      price: 'Startingat $4,000',
      features: [
        'RESTfulAPIdesign',
        'GraphQLimplementation',
        'APIdocumentation',
        'Ratelimiting',
        'Authentication',
        'Performancemonitoring'
      ],
      icon: LinkIcon,
      color: 'from-indigo-500 to-purple-500',
      category: 'Development'
    },
    {
      title: 'DatabaseManagement',
      description: 'Databasedesign, optimization, andmaintenance',
      price: 'Startingat $2,500',
      features: [
        'Databasedesign',
        'Performanceoptimization',
        'Backupandrecovery',
        'Securityhardening',
        'Migrationservices',
        '24/7 monitoring'
      ],
      icon: Database,
      color: 'from-yellow-500 to-orange-500',
      category: 'Infrastructure'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automateddeploymentandcontinuousintegrationpipelines',
      price: 'Startingat $6,000',
      features: [
        'CI/CDpipelinesetup',
        'Containerorchestration',
        'Infrastructureautomation',
        'Monitoringandlogging',
        'Securityscanning',
        'Performanceoptimization'
      ],
      icon: Settings,
      color: 'from-teal-500 to-cyan-500',
      category: 'DevOps'
    },
    {
      title: 'ITSupport',
      description: '24/7 technicalsupportandmaintenanceservices',
      price: 'Startingat $1,500/month',
      features: [
        '24/7 technicalsupport',
        'Remotemonitoring',
        'Preventivemaintenance',
        'Hardwaresupport',
        'Softwareupdates',
        'Usertraining'
      ],
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      category: 'Support'
    },
    {
      title: 'BlockchainDevelopment',
      description: 'Customblockchainsolutions, smartcontracts, anddecentralizedapplications',
      price: 'Startingat $15,000',
      features: [
        'Smartcontractdevelopment',
        'DAppcreation',
        'Tokendevelopment',
        'Blockchainintegration',
        'Securityauditing',
        'DeFisolutions'
      ],
      icon: LinkIcon,
      color: 'from-purple-500 to-pink-500',
      category: 'Development'
    },
    {
      title: 'IoTDevelopment',
      description: 'InternetofThingssolutionswithdeviceconnectivityanddatamanagement',
      price: 'Startingat $12,000',
      features: [
        'Deviceconnectivity',
        'Datacollection',
        'Real-timemonitoring',
        'Cloudintegration',
        'Mobileapps',
        'Analyticsdashboard'
      ],
      icon: Wifi,
      color: 'from-cyan-500 to-blue-500',
      category: 'Development'
    },
    {
      title: 'E-commerceDevelopment',
      description: 'Custome-commerceplatformswithpaymentintegrationandinventorymanagement',
      price: 'Startingat $10,000',
      features: [
        'Customstorefront',
        'Paymentintegration',
        'Inventorymanagement',
        'Orderprocessing',
        'Customerportal',
        'Analyticstracking'
      ],
      icon: ShoppingCart,
      color: 'from-green-500 to-emerald-500',
      category: 'Development'
    },
    {
      title: 'DataEngineering',
      description: 'Bigdataprocessing, ETLpipelines, anddatawarehousesolutions',
      price: 'Startingat $8,000',
      features: [
        'ETLpipelinedesign',
        'Datawarehousesetup',
        'Bigdataprocessing',
        'Real-timestreaming',
        'Dataqualityassurance',
        'Performanceoptimization'
      ],
      icon: Database,
      color: 'from-orange-500 to-red-500',
      category: 'Infrastructure'
    },
    {
      title: 'MachineLearningOps',
      description: 'MLmodeldeployment, monitoring, andmaintenanceinproductionenvironments',
      price: 'Startingat $12,000',
      features: [
        'Modeldeployment',
        'Performancemonitoring',
        'A/Btesting',
        'Auto-scaling',
        'Modelversioning',
        'Continuoustraining'
      ],
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      category: 'DevOps'
    },
    {
      title: 'EnterpriseIntegration',
      description: 'Seamlessintegrationofdisparatesystemsandapplications',
      price: 'Startingat $6,000',
      features: [
        'APIintegration',
        'Datasynchronization',
        'Legacysystemmigration',
        'Real-timeconnectivity',
        'Errorhandling',
        'Monitoringdashboard'
      ],
      icon: LinkIcon,
      color: 'from-teal-500 to-cyan-500',
      category: 'Infrastructure'
    },
    {
      title: 'PerformanceOptimization',
      description: 'Applicationandinfrastructureperformancetuningformaximumefficiency',
      price: 'Startingat $4,000',
      features: [
        'Performanceanalysis',
        'Codeoptimization',
        'Databasetuning',
        'Cachingstrategies',
        'Loadbalancing',
        'Monitoringsetup'
      ],
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500',
      category: 'Infrastructure'
    },
    {
      title: 'DisasterRecovery',
      description: 'Comprehensivebackupanddisasterrecoverysolutions',
      price: 'Startingat $5,000',
      features: [
        'Backupstrategies',
        'Recoveryplanning',
        'Datareplication',
        'Failoversystems',
        'Testingprocedures',
        'Documentation'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      category: 'Security'
    },
    {
      title: 'ComplianceAutomation',
      description: 'Automatedcompliancemonitoringandreportingforvariousstandards',
      price: 'Startingat $7,000',
      features: [
        'Compliancemonitoring',
        'Automatedreporting',
        'Audittrails',
        'Policyenforcement',
        'Riskassessment',
        'Documentationmanagement'
      ],
      icon: CheckSquare,
      color: 'from-gray-500 to-slate-500',
      category: 'Security'
    },
    {
      title: 'CloudCostOptimization',
      description: 'Cloudresourceoptimizationandcostreductionstrategies',
      price: 'Startingat $3,000',
      features: [
        'Costanalysis',
        'Resourceoptimization',
        'Right-sizingrecommendations',
        'Reservedinstanceplanning',
        'Costmonitoring',
        'Budgetmanagement'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-teal-500',
      category: 'Infrastructure'
    },
    {
      title: 'SecurityAutomation',
      description: 'Automatedsecuritymonitoring, incidentresponse, andthreathunting',
      price: 'Startingat $8,000',
      features: [
        'Threatdetection',
        'Incidentresponse',
        'Vulnerabilityscanning',
        'Securityorchestration',
        'Compliancemonitoring',
        'Forensicanalysis'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security'
    },
    {
      title: 'DataVisualization',
      description: 'Interactivedashboardsanddatavisualizationsolutions',
      price: 'Startingat $5,000',
      features: [
        'Customdashboards',
        'Interactivecharts',
        'Real-timedata',
        'Mobileresponsive',
        'Exportcapabilities',
        'Usermanagement'
      ],
      icon: BarChart,
      color: 'from-blue-500 to-purple-500',
      category: 'Development'
    },
    {
      title: 'WorkflowAutomation',
      description: 'Businessprocessautomationandworkflowoptimization',
      price: 'Startingat $6,000',
      features: [
        'Processmapping',
        'Workflowdesign',
        'Automationrules',
        'IntegrationAPIs',
        'Monitoringdashboard',
        'Performanceanalytics'
      ],
      icon: Workflow,
      color: 'from-cyan-500 to-blue-500',
      category: 'Automation'
    },
    {
      title: 'CloudNativeSecurity',
      description: 'Securitysolutionsspecificallydesignedforcloud-nativeapplications',
      price: 'Startingat $9,000',
      features: [
        'Containersecurity',
        'Kubernetessecurity',
        'APIsecurity',
        'Identitymanagement',
        'Networksecurity',
        'Compliancemonitoring'
      ],
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      category: 'Security'
    }
  ];
  constcategories = ['All', 'Infrastructure', 'Security', 'Development', 'DevOps', 'Support', 'Automation'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  constfilteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);
      description: 'Modernwebapplicationsbuiltwithcutting-edgetechnologies',
      features: ['React/Next.js', 'Node.jsbackend', 'Databasedesign', 'APIdevelopment'],
      price: 'Startingat $3,000/project'
    },
    {
      icon: Smartphone,
      title: 'MobileDevelopment',
      description: 'iOSandAndroidapplicationsforallbusinessneeds',
      features: ['Nativedevelopment', 'Cross-platform', 'Appstoredeployment', 'Maintenance'],
      price: 'Startingat $5,000/app'
    },
    {
      icon: Database,
      title: 'DatabaseManagement',
      description: 'Dataprocessing, storage, andanalyticssolutions',
      features: ['Databasedesign', 'Performanceoptimization', 'Datamigration', 'Backupsolutions'],
      price: 'Startingat $1,200/month'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Automateddeploymentandcontinuousintegrationpipelines',
      features: ['CI/CDsetup', 'Containerorchestration', 'Monitoring', 'Automatedtesting'],
      price: 'Startingat $2,000/month'
    }
  ];

  conststats = [
    { number: '500+', label: 'ProjectsCompleted', icon: CheckCircle },
    { number: '50+', label: 'HappyClients', icon: Users },
    { number: '99%', label: 'ClientSatisfaction', icon: Star },
    { number: '24/7', label: 'SupportAvailable', icon: Award },
  ];

  return (
    <>
    <>
      <Helmet>
        <title>5GDataAnalytics - ZionTechGroup</title>
        <metaname="description" content="Professional 5GdataanalyticsservicesbyZionTechGroup. Transformyourbusinesswithourexpertsolutions." />
      </Helmet>
        <title>ITServices - ZionTechGroup | ComprehensiveITSolutions</title>
        <metaconstname = "description" content="ProfessionalITservicesincludingcloudinfrastructure, cybersecurity, webdevelopment, mobileapps, andDevOps. TransformyourbusinesswithourexpertITsolutions." / / />
        <metaname="keywords" content="ITservices, cloudcomputing, cybersecurity, webdevelopment, mobiledevelopment, DevOps, databasemanagement, ITsupport" / / />
      </Helmet>
    </>

      <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900via-cyan-900to-slate-900">
        {/* HeroSection */}
    <>
        <sectionclassName="r e lativeoverflow-hiddenpt-20pb-16" />
          <divclassName="a b soluteinset-0opacity-20" />
          <divclassName="r e lativemax-w-7xlmx-autopx-4sm:px-6lg:px-8">
            <divclassName="t e xt-center">
              <h1 className="{`t e xt-4" xlmd: text-6 xlfont-boldtext-whitemb-6 transition-allduration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
    </>
                ITServices
    <>
                <spanclassName="b l ockbg-gradient-to-rfrom-cyan-400 to-blue-400bg-clip-texttext-transparent">& Solutions
                </span>
              </h1>
              <pclassName="{`t e xt-xl" text-gray-300 mb-8 max-w-3 xlmx-autotransition-allduration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
    </>
                ComprehensiveITservicestobuild, secure, andoptimizeyourtechnologyinfrastructure. 
                Fromcloudmigrationtocybersecurity, wehavetheexpertiseyouneed.
    <>
              </p>
              <divclassName="{`f l ex" flex-colsm: flex-rowgap-4 justify-centertransition-allduration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <Linkto="/contact" className="i n line-flexitems-centerpx-8 py-4 bg-gradient-to-rfrom-cyan-600 to-blue-600 text-whitefont-semiboldrounded-lghover:from-cyan-700 hover:to-blue-700 transition-allduration-300 transformhover:scale-105shadow-lghover:shadow-xl">
          GetStartedToday
                  
          <ArrowRightclassName="m l-2h-5w-5"  />
        </Link>
                <ahref="tel:+13024640950"
                  className="i n line-flexitems-centerpx-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semiboldrounded-lghover:bg-cyan-400 hover:text-whitetransition-allduration-300transformhover:scale-105" />
                  Call +1 302 464 0950
    <>
                </a>
              </div>
          </div>
        </section>
    </>

        {/* CategoryFilter */}
    <>
        <sectionclassName="p y-8bg-gray-900/50" />
          <divclassName="m a x-w-7xlmx-autopx-4sm:px-6lg:px-8">
            <divclassName="f l exflex-wrapjustify-centergap-4">
              {categories.map((category) => (
                <buttonkey="{category}"
                  onClick="{()" =>setSelectedCategory(category)}
                  className="{`p x-6" py-3 rounded-lgfont-semiboldtransition-allduration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-rfrom-cyan-600 to-blue-600 text-whiteshadow-lg'
                      : 'bg-gray-800 text-gray-300 hover: bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
    <>
            </div>
        </section>
    </>

        {/* ServicesGrid */}
    <>
        <sectionclassName="p y-16" />
          <divclassName="m a x-w-7xlmx-autopx-4sm:px-6lg:px-8">
            <divclassName="g r idgrid-cols-1 md:grid-cols-2 lg:grid-cols-3xl:grid-cols-4gap-8">
              {filteredServices.map((service, index) => (
                <divkey="{index}"
                  className="g r ouprelativebg-gray-800 rounded-xlp-6 hover:bg-gray-700 transition-allduration-300 transformhover:scale-105 borderborder-gray-700hover:border-cyan-500" />
                  <divclassName="t e xt-centermb-6">
                    <divclassName="{`i n line-flex" items-centerjustify-centerw-16 h-16 bg-gradient-to-r ${service.color} rounded-xlmb-4`} />
                      <service.iconclassName="h-8w-8t e xt-white" />
                    </div>
                    <h3 className="t e xt-xlfont-boldtext-whitemb-2"   />{service.title}</h3>
                    <pclassName="t e xt-gray-300text-smmb-4">{service.description}</p>
                    <divclassName="t e xt-2 xlfont-boldtext-cyan-400mb-4"   />{service.price}</div>
                  <divclassName="s p ace-y-3mb-6">
                    {service.features.map((feature, idx) => (
    <>
                      <divkey="{idx}" className="f l exitems-centertext-smtext-gray-300" />
                        <CheckCircleclassName="h-4 w-4 t e xt-green-400mr-3flex-shrink-0" />
                        <span   />{feature}</span>
                      </div>
    </>
                    ))}
                  </div>
                  <divclassName="s p ace-y-3">
                    <Linkto="/contact" className="w-f u llinline-flexitems-centerjustify-centerpx-4 py-3 bg-gradient-to-rfrom-cyan-600 to-blue-600 text-whitefont-semiboldrounded-lghover:from-cyan-700 hover:to-blue-700 transition-allduration-300transformhover:scale-105">
          GetQuote
                      
          <ArrowRightclassName="m l-2h-4w-4"  />
        </Link>
                    <Linkto="/contact" className="w-f u llinline-flexitems-centerjustify-centerpx-4 py-3 borderborder-cyan-400 text-cyan-400 font-semiboldrounded-lghover:bg-cyan-400 hover:text-whitetransition-allduration-300">LearnMore
                    </Link>
                  </div>
              ))}
    <>
            </div>
        </section>
    </>

        {/* CTASection */}
    <>
        <sectionclassName="p y-20 bg-gradient-to-brfrom-gray-900to-cyan-900" />
          <divclassName="m a x-w-7xlmx-autopx-4 sm:px-6lg:px-8text-center">
            <h2 className="t e xt-3 xlmd:text-4xlfont-boldtext-whitemb-4"  />ReadytoTransformYourITInfrastructure?
            </h2>
            <pclassName="t e xt-xltext-gray-300 mb-8 max-w-3xlmx-auto">
              Letourexpertteamhelpyoubuild, secure, andoptimizeyourtechnologyinfrastructureformaximumperformanceandsecurity.
    <>
            </p>
            <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
              <Linkto="/contact" className="i n line-flexitems-centerpx-8 py-4 bg-gradient-to-rfrom-cyan-600 to-blue-600 text-whitefont-semiboldrounded-lghover:from-cyan-700 hover:to-blue-700 transition-allduration-300 transformhover:scale-105shadow-lghover:shadow-xl">
          GetStartedToday
                
          <ArrowRightclassName="m l-2h-5w-5"  />
        </Link>
              <ahref="tel:+13024640950"
                className="i n line-flexitems-centerpx-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semiboldrounded-lghover:bg-cyan-400 hover:text-whitetransition-allduration-300transformhover:scale-105" />
                Call +1 302 464 0950
    <>
              </a>
            </div>
            <divclassName="m t-8text-gray-400">
              <p />Email: kleber@ziontechgroup.com</p>
              <p />Address: 364 EMainStSTE 1008, MiddletownDE 19709</p>
            </div>
        </section>
            </div>
        </section>
    </>

        {/* ServicesGrid */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6" />
                Our <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />ITSolutions</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">End-to-endITservicesdesignedtomodernizeyourinfrastructureandaccelerateyourdigitaltransformation</p>
            </div>
    </>

            <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
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
                    <spanclassName="t e xt-2 xlfont-boldtext-cyan-400"   />{service.price}</span>
                    <Linkto="{service.link}" className="t e xt-cyan-400 hover:text-cyan-300 transition-colorstext-smfont-mediumgroup-hover:translate-x-1inline-flexitems-center">
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
                Our <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Process</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">Aprovenmethodologythatensuressuccessfulprojectdeliveryandmaximumvalueforyourinvestment</p>
            </div>
    </>

            <divclassName="g r idgrid-cols-1md:grid-cols-5gap-8">
              {process.map((step, index) => (
    <>
                <divkey="{index}" className="t e xt-centergroup" />
                  <divclassName="w-16 h-16 b g-gradient-to-rfrom-cyan-500/20 to-purple-500/20 rounded-fullflexitems-centerjustify-centermx-automb-6 group-hover:scale-110transition-transformduration-300">
                    <spanclassName="t e xt-2 xlfont-boldtext-cyan-400"   />{step.step}</span>
                  </div>
                  <h3 className="t e xt-xlfont-boldtext-whitemb-4"   />{step.title}</h3>
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
                WhyChoose <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />ZionTechGroup</span>?
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">WedeliverexceptionalITsolutionsthroughexpertise, innovation, andunwaveringcommitmenttoyoursuccess</p>
            </div>
    </>

            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              <divclassName="t e xt-centergroup">
                <divclassName="w-20 h-20 b g-gradient-to-rfrom-cyan-500/20 to-purple-500/20 rounded-fullflexitems-centerjustify-centermx-automb-6 group-hover:scale-110transition-transformduration-300">
                  <ZapclassName="w-10h-10t e xt-cyan-400" />
                </div>
                <h3 className="t e xt-2 xlfont-boldtext-whitemb-4"   />RapidDeployment</h3>
                <pclassName="t e xt-gray-300leading-relaxed">Fastimplementationwithminimaldowntime. Wegetyoursolutionsupandrunningquickly.</p>
              </div>
    </>

              <divclassName="t e xt-centergroup">
                <divclassName="w-20 h-20 b g-gradient-to-rfrom-purple-500/20 to-pink-500/20 rounded-fullflexitems-centerjustify-centermx-automb-6 group-hover:scale-110transition-transformduration-300">
                  <UsersclassName="w-10h-10t e xt-purple-400" />
                </div>
                <h3 className="t e xt-2 xlfont-boldtext-whitemb-4"   />ExpertTeam</h3>
                <pclassName="t e xt-gray-300leading-relaxed">CertifiedprofessionalswithyearsofexperienceinenterpriseITsolutionsandcloudtechnologies.</p>
              </div>
    </>

              <divclassName="t e xt-centergroup">
                <divclassName="w-20 h-20 b g-gradient-to-rfrom-green-500/20 to-emerald-500/20 rounded-fullflexitems-centerjustify-centermx-automb-6 group-hover:scale-110transition-transformduration-300">
                  <AwardclassName="w-10h-10t e xt-green-400" />
                </div>
                <h3 className="t e xt-2 xlfont-boldtext-whitemb-4"   />ProvenResults</h3>
                <pclassName="t e xt-gray-300leading-relaxed">Trackrecordofsuccessfulprojectswithmeasurablebusinessimpactandclientsatisfaction.</p>
              </div>
          </div>
        </section>
    </>

        {/* CTASection */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="b g-gradient-to-rfrom-cyan-900/50 to-purple-900/50 backdrop-blur-smborderborder-cyan-500/20 rounded-2 xlp-12text-center">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6"  />ReadytoModernizeYourITInfrastructure?
              </h2>
              <pclassName="t e xt-xltext-gray-300 mb-8 max-w-2xlmx-auto">Let'sdiscussyourITneedsandcreateacustomizedsolutionthatdrivesyourbusinessforward.</p>
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

exportdefaultItServicesPage;
exportdefaultITServicesPage;
exportdefaultITServicesPage;
