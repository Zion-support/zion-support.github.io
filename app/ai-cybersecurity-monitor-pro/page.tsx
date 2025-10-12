import React from 'react';
import { Link    } from 'react-router-dom';
import { ArrowRight, AlertCircle, Building2, Bug    } from 'lucide-react';
import { ArrowRight, AlertCircle, Building2, Bug   } from 'lucide-react';
exportdefaultfunctionAiCybersecurityMonitorProPage() {
import { Shield, Eye, Lock, Zap, CheckCircle, ArrowRight, Brain, Target, Network, Clock    } from 'lucide-react';

  constfeatures = [
    {
      icon: <BrainclassName="w-8h-8t e xt-cyan-400" />,
      title: 'AIThreatDetection',
      description: 'Advancedmachinelearningalgorithmsdetectandpreventcyberthreatsinreal-time',
      benefits: ['Behavioralanalysis', 'Anomalydetection', 'Threatprediction', 'Zero-dayprotection']
    },
    {
      icon: <ShieldclassName="w-8h-8t e xt-green-400" />,
      title: '24/7 Monitoring',
      description: 'Continuoussecuritymonitoringwithinstantthreatresponseandautomatedremediation',
      benefits: ['Real-timealerts', 'Automatedresponse', 'Incidentmanagement', 'Threathunting']
    },
    {
      icon: <EyeclassName="w-8h-8t e xt-purple-400" />,
      title: 'NetworkVisibility',
      description: 'Completevisibilityintoyournetworkinfrastructurewithadvancedtrafficanalysis',
      benefits: ['Networkmapping', 'Trafficanalysis', 'Devicediscovery', 'Vulnerabilityscanning']
    },
    {
      icon: <LockclassName="w-8h-8t e xt-orange-400" />,
      title: 'ComplianceManagement',
      description: 'AutomatedcompliancemonitoringforGDPR, HIPAA, SOX, andotherregulatorystandards',
      benefits: ['Regulatorycompliance', 'Audittrails', 'Policyenforcement', 'Riskassessment']
    },
    {
      icon: <ZapclassName="w-8h-8t e xt-red-400" />,
      title: 'AutomatedResponse',
      description: 'Intelligentincidentresponsewithautomatedthreatcontainmentandremediation',
      benefits: ['Auto-quarantine', 'Threatisolation', 'Systemrestoration', 'Forensicanalysis']
    },
    {
      icon: <GlobeclassName="w-8h-8t e xt-blue-400" />,
      title: 'GlobalThreatIntelligence',
      description: 'Accesstoglobalthreatintelligencefeedsandsecurityresearchdatabases',
      benefits: ['Threatintelligence', 'IOCfeeds', 'Malwareanalysis', 'Attackpatterns']
    }
  ];
  constsecurityCapabilities = [
    {
      category: 'ThreatDetection',
      icon: <AlertTriangleclassName="w-6h-6t e xt-red-400" />,
      items: [
        'Malwaredetection',
        'Phishingprevention',
        'Ransomwareprotection',
        'Advancedpersistentthreats',
        'Insiderthreatdetection'
      ]
    },
    {
      category: 'NetworkSecurity',
      icon: <NetworkclassName="w-6h-6t e xt-blue-400" />,
      items: [
        'Firewallmanagement',
        'Intrusiondetection',
        'Networksegmentation',
        'VPNmonitoring',
        'Wirelesssecurity'
      ]
    },
    {
      category: 'EndpointProtection',
      icon: <MonitorclassName="w-6h-6t e xt-green-400" />,
      items: [
        'Devicemonitoring',
        'Applicationcontrol',
        'USBprotection',
        'Mobiledevicesecurity',
        'Patchmanagement'
      ]
    },
    {
      category: 'DataProtection',
      icon: <DatabaseclassName="w-6h-6t e xt-purple-400" />,
      items: [
        'Dataencryption',
        'Accesscontrols',
        'Datalossprevention',
        'Backupmonitoring',
        'Privacycompliance'
      ]
    },
    {
      category: 'IncidentResponse',
      icon: <AlertCircleclassName="w-6h-6t e xt-orange-400" />,
      items: [
        'Automatedresponse',
        'Incidenttracking',
        'Forensicanalysis',
        'Recoveryprocedures',
        'Communicationtools'
      ]
    },
    {
      category: 'SecurityAnalytics',
      icon: <BarChart3 className="w-6h-6t e xt-cyan-400" />,
      items: [
        'Securitydashboards',
        'Riskassessment',
        'Compliancereporting',
        'Trendanalysis',
        'Performancemetrics'
      ]
    }
  ];
  constpricingPlans = [
    {
      name: 'Essential',
      price: '$299',
      period: '/month',
      description: 'Perfectforsmallbusinessesandstartups',
      features: [
        'Upto 50 devices',
        'Basicthreatdetection',
        'Emailsupport',
        'Standardreports',
        'Basiccompliance',
        '1 TBlogstorage'
      ],
      popular: false,
      cta: 'StartFreeTrial'
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Idealforgrowingbusinessesandsecurityteams',
      features: [
        'Upto 500 devices',
        'AdvancedAIdetection',
        'Prioritysupport',
        'Customdashboards',
        'Fullcompliancesuite',
        '10 TBlogstorage',
        'Automatedresponse',
        'Threatintelligence'
      ],
      popular: true,
      cta: 'GetStarted'
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Forlargeorganizationswithcomplexsecurityneeds',
      features: [
        'Unlimiteddevices',
        'CustomAImodels',
        'Dedicatedsupport',
        'White-labeloptions',
        'Unlimitedstorage',
        'APIaccess',
        'On-premisedeployment',
        'Customintegrations'
      ],
      popular: false,
      cta: 'ContactSales'
    }
  ];
  consttestimonials = [
    {
      name: 'MichaelTorres',
      company: 'SecureTechSolutions',
      role: 'CISO',
      content: 'AICybersecurityMonitorProhasrevolutionizedoursecurityposture. TheAIdetectioncapabilitieshavepreventedmultiplesophisticatedattacksthattraditionaltoolsmissed.',
      rating: 5,
      avatar: 'MT',
      results: '99.7% threatdetectionrate'
    },
    {
      name: 'SarahChen',
      company: 'GlobalFinanceCorp',
      role: 'SecurityDirector',
      content: 'Theautomatedresponsecapabilitieshavereducedourincidentresponsetimeby 80%. Oursecurityteamcannowfocusonstrategicinitiativesinsteadofmanualmonitoring.',
      rating: 5,
      avatar: 'SC',
      results: '80% fasterincidentresponse'
    },
    {
      name: 'DavidRodriguez',
      company: 'HealthcareSystems',
      role: 'ITSecurityManager',
      content: 'ThecompliancemanagementfeatureshavemadeourHIPAAauditsseamless. Wemaintaincontinuouscompliancewithautomatedmonitoringandreporting.',
      rating: 5,
      avatar: 'DR',
      results: '100% compliancescore'
    }
  ];
  conststats = [
    { number: '1 M+', label: 'ThreatsBlocked', icon: <ShieldclassName="w-6h-6" /> },
    { number: '500+', label: 'EnterpriseClients', icon: <Building2 className="w-6h-6" /> },
    { number: '99.9%', label: 'UptimeGuarantee', icon: <ActivityclassName="w-6h-6" /> },
    { number: '24/7', label: 'SecurityMonitoring', icon: <EyeclassName="w-6h-6" /> }
  ];
  constthreatTypes = [
    { name: 'Malware', icon: <BugclassName="w-6h-6" />, category: 'MaliciousSoftware' },
    { name: 'Phishing', icon: <TargetclassName="w-6h-6" />, category: 'SocialEngineering' },
    { name: 'Ransomware', icon: <LockclassName="w-6h-6" />, category: 'DataEncryption' },
    { name: 'DDoS', icon: <NetworkclassName="w-6h-6" />, category: 'NetworkAttacks' },
    { name: 'InsiderThreats', icon: <UsersclassName="w-6h-6" />, category: 'InternalRisks' },
    { name: 'Zero-Day', icon: <AlertCircleclassName="w-6h-6" />, category: 'UnknownVulnerabilities' },
    { name: 'APTs', icon: <SearchclassName="w-6h-6" />, category: 'AdvancedPersistentThreats' },
    { name: 'IoTAttacks', icon: <SmartphoneclassName="w-6h-6" />, category: 'DeviceVulnerabilities' }
  ];
  return (
    <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet />
        <title   />AICybersecurityMonitorPro - ZionTechGroup | AdvancedSecurityIntelligencePlatform</title>
        <metaname="description" content="ProtectyourbusinesswithAICybersecurityMonitorPro. Advancedthreatdetection, 24/7 monitoring, andautomatedresponseforenterprise-gradesecurity. Startyourfreetrialtoday." / / />
        <metaname="keywords" content="AIcybersecurity, threatdetection, securitymonitoring, cyberdefense, enterprisesecurity, ZionTechGroup" / / />
        <metaname="robots" content="index, follow" / / />
        <metaname="author" content="ZionTechGroup" / / />
        <metaname="viewport" content="width="device-width," initial-scale=1.0" / / />
        <metaname="theme-color" content="#8 b5 cf6" / / />
        {/* OpenGraphMetaTags */}
    <>
        <metaproperty="og:title" content="AICybersecurityMonitorPro - AdvancedSecurityIntelligencePlatform" / / />
        <metaproperty="og: description" content="ProtectyourbusinesswithAI-poweredthreatdetection, 24/7 monitoring, andautomatedresponseforenterprise-gradesecurity." / / />
        <metaproperty="og:type" content="website" / / />
        <metaproperty="og:url" content="https://ziontechgroup.com/ai-cybersecurity-monitor-pro" / / />
        <metaproperty="og:image" content="https://ziontechgroup.com/og-ai-cybersecurity.jpg" / / />
        <metaproperty="og:site_name" content="ZionTechGroup" / / />
        {/* TwitterCardMetaTags */}
    <>
        <metaname="twitter:card" content="summary_large_image" / / />
        <metaname="twitter:title" content="AICybersecurityMonitorPro - AdvancedSecurityIntelligencePlatform" / / />
        <metaname="twitter: description" content="ProtectyourbusinesswithAI-poweredthreatdetection, 24/7 monitoring, andautomatedresponse." / / />
        <metaname="twitter:image" content="https://ziontechgroup.com/twitter-ai-cybersecurity.jpg" / / />
        <metaname="twitter:site" content="@ziontechgroup" / / />
        {/* StructuredData */}
        <scripttype="application/ld+json"  />{JSON.stringify({
            "@context": "https: //schema.org",
            "@type": "SoftwareApplication",
            "name": "AICybersecurityMonitorPro",
            "description": "AdvancedAI-poweredcybersecurityplatformwiththreatdetection, 24/7 monitoring, andautomatedresponseforenterprise-gradesecurity.",
            "url": "https: //ziontechgroup.com/ai-cybersecurity-monitor-pro",
            "applicationCategory": "SecurityApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "299",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "299",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "ZionTechGroup",
              "url": "https: //ziontechgroup.com"
            }
          })}
    <>
        </script>
      </Helmet>
      <divclassName="m a x-w-7xlmx-autopx-4 sm:px-6lg:px-8py-16">
        {/* HeroSection */}
        <divclassName="t e xt-centermb-16">
          <h1 className="t e xt-4xlsm:text-5 xlmd:text-6 xlfont-boldtext-whitemb-6" />
            AICybersecurityMonitor{' '}
    <>
            <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-500bg-clip-texttext-transparent">Pro
            </span>
          </h1>
          <pclassName="t e xt-lgsm:text-xltext-gray-300 max-w-4 xlmx-automb-8">
              ProtectyourbusinesswithAI-poweredthreatdetection, 24/7 monitoring, 
            andautomatedresponse. Enterprise-gradesecuritypoweredbyartificialintelligence.
    <>
          </p>
          <divclassName="f l exflex-colsm:flex-rowgap-4justify-centermb-8">
            <Linkto="/contact" className="b g-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-8 py-4 rounded-lgfont-semiboldhover:from-cyan-600 hover:to-purple-700 transition-allduration-300 flexitems-centerjustify-center">
          StartFreeTrial
              
          <ArrowRightclassName="w-5h-5m l-2"  />
        </Link>
            <Linkto="/ai-services" className="b o rder-2 border-whitetext-whitepx-8 py-4 rounded-lgfont-semiboldhover:bg-white/10 transition-colorsflexitems-centerjustify-center">ViewAllAIServices
            </Link>
          </div>
          <divclassName="t e xt-smtext-gray-400">✓ 14-dayfreetrial • ✓ Nosetupfees • ✓ 24/7 securitymonitoring
          </div>
        {/* StatsSection */}
    <>
        <sectionclassName="p y-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-smrounded-2xlmb-16" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="g r idgrid-cols-2md:grid-cols-4gap-8">
              {stats.map((stat, index) => (
    <>
                <divkey="{index}" className="t e xt-center" />
                  <divclassName="f l exitems-centerjustify-centerw-16 h-16 bg-gradient-to-rfrom-purple-500 to-blue-600 rounded-fullmx-automb-4">
                    <stat.iconclassName="h-8w-8t e xt-white" />
                  </div>
                  <divclassName="t e xt-3 xlmd: text-4xlfont-boldtext-whitemb-2"   />{stat.number}</div>
                  <divclassName="t e xt-gray-300"   />{stat.label}</div>
              ))}
    <>
            </div>
        </section>
        {/* FeaturesSection */}
    <>
        <sectionclassName="m b-16" />
          <divclassName="t e xt-centermb-12">
            <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"   />AdvancedSecurityFeatures</h2>
            <pclassName="t e xt-lgtext-gray-300 max-w-3xlmx-auto">
              OurAICybersecurityMonitorProleveragescutting-edgeartificialintelligencetoprovidecomprehensiveprotectionagainstevolvingcyberthreats.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
            {features.map((feature, index) => (
    <>
              <divkey="{index}" className="b g-slate-800/50 rounded-2 xlp-8 borderborder-slate-700 hover:border-cyan-500/30 transition-allduration-300group" />
                <divclassName="m b-6">
                  <divclassName="f l exitems-centerjustify-centerw-16 h-16 bg-gradient-to-rfrom-cyan-500 to-purple-600 rounded-xlmx-automb-4group-hover:scale-110transition-transform"  />{feature.icon}
                  </div>
                  <h3 className="t e xt-xlfont-semiboldtext-whitemb-3text-center"   />{feature.title}</h3>
                  <pclassName="t e xt-gray-300 mb-4text-center">{feature.description}</p>
                  <ulclassName="s p ace-y-2" />
                    {feature.benefits.map((benefit, benefitIndex) => (
    <>
                      <likey="{benefitIndex}" className="f l exitems-centertext-smtext-gray-300" />
                        <CheckCircleclassName="w-4 h-4 t e xt-green-400mr-2flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
    <>
                  </ul>
                </div>
            ))}
    <>
          </div>
        </section>
        {/* SecurityCapabilitiesSection */}
    <>
        <sectionclassName="m b-16" />
          <divclassName="t e xt-centermb-12">
            <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"   />ComprehensiveSecurityCoverage</h2>
            <pclassName="t e xt-lgtext-gray-300 max-w-3xlmx-auto">
              Protecteveryaspectofyourdigitalinfrastructurewithourcomprehensivesecuritycapabilities.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-3gap-6">
            {securityCapabilities.map((capability, index) => (
    <>
              <divkey="{index}" className="b g-slate-800/50 rounded-xlp-6 borderborder-slate-700 hover:border-cyan-500/30transition-allduration-300" />
                <divclassName="f l exitems-centermb-4">
                  {capability.icon}
    <>
                  <h3 className="t e xt-lgfont-semiboldtext-whiteml-3">{capability.category}</h3>
                </div>
                <ulclassName="s p ace-y-2" />
                  {capability.items.map((item, itemIndex) => (
    <>
                    <likey="{itemIndex}" className="f l exitems-centertext-smtext-gray-300" />
                      <CheckCircleclassName="w-4 h-4 t e xt-green-400mr-2flex-shrink-0" />
                      {item}
                    </li>
                  ))}
    <>
                </ul>
              </div>
            ))}
    <>
          </div>
        </section>
        {/* ThreatTypesSection */}
    <>
        <sectionclassName="m b-16" />
          <divclassName="t e xt-centermb-12">
            <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"   />ThreatProtection</h2>
            <pclassName="t e xt-lgtext-gray-300 max-w-3xlmx-auto">
              AdvancedAIdetectionandpreventionforalltypesofcyberthreatsandattacks.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-2md:grid-cols-4gap-6">
            {threatTypes.map((threat, index) => (
    <>
              <divkey="{index}" className="b g-slate-800/50 rounded-xlp-6 borderborder-slate-700 hover:border-cyan-500/30 transition-allduration-300text-centergroup" />
                <divclassName="f l exitems-centerjustify-centerw-12 h-12 bg-gradient-to-rfrom-cyan-500 to-purple-600 rounded-lgmx-automb-3group-hover:scale-110transition-transform">{threat.icon}
                </div>
                <h3 className="t e xt-whitefont-semiboldmb-1"   />{threat.name}</h3>
                <pclassName="t e xt-gray-400text-sm">{threat.category}</p>
              </div>
            ))}
    <>
          </div>
        </section>
        {/* PricingSection */}
    <>
        <sectionclassName="m b-16" />
          <divclassName="t e xt-centermb-12">
            <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"   />ChooseYourSecurityPlan</h2>
            <pclassName="t e xt-lgtext-gray-300 max-w-2xlmx-auto">
              Flexiblepricingplansdesignedtoprotectbusinessesofallsizes.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
            {pricingPlans.map((plan, index) => (
              <divkey="{index}" className="{`b g-slate-800/50" rounded-2 xlp-8 bordertransition-allduration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover: border-cyan-500/30'
              }`} />
                {plan.popular && (
                  <divclassName="a b solute -top-3 left-1/2transform-translate-x-1/2">
                    <spanclassName="b g-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-4 py-1 rounded-fulltext-smfont-semibold"  />MostPopular
                    </span>
                  </div>
                )}
                
                <divclassName="t e xt-centermb-6">
                  <h3 className="t e xt-2 xlfont-boldtext-whitemb-2"   />{plan.name}</h3>
                  <divclassName="f l exitems-baselinejustify-centermb-2">
                    <spanclassName="t e xt-4xlfont-boldtext-cyan-400"   />{plan.price}</span>
                    <spanclassName="t e xt-gray-400ml-1"   />{plan.period}</span>
                  </div>
                  <pclassName="t e xt-gray-300">{plan.description}</p>
                </div>
                <ulclassName="s p ace-y-3mb-8" />
                  {plan.features.map((feature, featureIndex) => (
                    <likey="{featureIndex}" className="f l exitems-centertext-gray-300" />
                      <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Linkto="/contact"
                  className="{`w-f u ll" py-3 rounded-lgfont-semiboldtransition-allduration-300 flexitems-centerjustify-center ${
                    plan.popular
                      ? 'bg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitehover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover: bg-cyan-500 hover:text-white'
                  }`}>
          {plan.cta}
                  
          <ArrowRightclassName="w-4h-4m l-2"  />
        </Link>
              </div>
            ))}
    <>
          </div>
        </section>
        {/* Testimonials */}
    <>
        <sectionclassName="p y-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-smrounded-2xlmb-16" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="t e xt-centermb-12">
              <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"   />WhatOurCustomersSay</h2>
              <pclassName="t e xt-lgtext-gray-300 max-w-2xlmx-auto">JoinhundredsofsecurityprofessionalswhotrustAICybersecurityMonitorPro.</p>
            </div>
            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              {testimonials.map((testimonial, index) => (
    <>
                <divkey="{index}" className="b g-slate-800/50 rounded-xlp-6borderborder-slate-700" />
                  <divclassName="f l exitems-centermb-4">
                    <divclassName="w-12 h-12 b g-gradient-to-rfrom-cyan-500 to-purple-600 rounded-fullflexitems-centerjustify-centertext-whitefont-boldmr-4"  />{testimonial.avatar}
                    </div>
                    <div>
            <h4 className="t e xt-whitefont-semibold"   />{testimonial.name}</h4>
                      <pclassName="t e xt-gray-400text-sm">{testimonial.role}</p>
                      <pclassName="t e xt-cyan-400text-smfont-semibold">{testimonial.company}</p>
                    </div>
                  <divclassName="f l exitems-centermb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Starkey="{i}" className="w-4 h-4t e xt-yellow-400fill-current" />
                    ))}
    <>
                  </div>
                  <pclassName="t e xt-gray-300italicmb-3">"{testimonial.content}"</p>
                  <divclassName="t e xt-cyan-400font-semiboldtext-sm"  />Result: {testimonial.results}
                  </div>
              ))}
    <>
            </div>
        </section>
        {/* CTASection */}
    <>
        <sectionclassName="t e xt-center" />
          <divclassName="b g-gradient-to-rfrom-cyan-500/20 to-purple-500/20 rounded-2 xlp-12borderborder-cyan-500/30">
            <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"  />ReadytoSecureYourBusiness?
            </h2>
            <pclassName="t e xt-lgtext-gray-300 mb-8 max-w-3xlmx-auto">
              Startyourfreetrialtodayandexperienceenterprise-gradesecuritypoweredbyAI. 
              Joinhundredsoforganizationsalreadyprotectedbyouradvancedthreatdetection.
    <>
            </p>
            <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
              <Linkto="/contact" className="b g-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-8 py-4 rounded-lgfont-semiboldhover:from-cyan-600 hover:to-purple-700 transition-allduration-300 inline-flexitems-centerjustify-center">
          StartFreeTrial
                
          <SparklesclassName="w-5h-5m l-2" /  />
        </Link>
              <Linkto="/about" className="b o rder-2 border-whitetext-whitepx-8 py-4 rounded-lgfont-semiboldhover:bg-white/10 transition-colorsinline-flexitems-centerjustify-center">
          LearnMore
                
          <ShieldclassName="w-5h-5m l-2" /  />
        </Link>
            </div>
            <divclassName="m t-8text-white/80text-sm">
              <p />✓ 14-dayfreetrial • ✓ Nosetupfees • ✓ 24/7 monitoring • ✓ Cancelanytime</p>
            </div>
        </section>
      </div>
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
    </>
}
    </>
