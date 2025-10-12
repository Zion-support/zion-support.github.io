import { Helmet    } from 'react-helmet-async'
import { Server, Shield, Zap, BarChart3, CheckCircle, ArrowRight, Clock, Users, Database    } from 'lucide-react'
import { Link    } from 'react-router-dom'
import React from 'react';
import { ArrowRight    } from 'lucide-react';
import { Link    } from 'react-router-dom';

constServerManagementPage: React.FC = () => {
  constfeatures = [
    {
      icon: <ServerclassName="w-6h-6t e xt-cyan-400" />,
      title: '24/7 ServerMonitoring',
      description: 'Continuousmonitoringofserverperformance, uptime, andhealthwithinstantalerts.'
    },
    {
      icon: <ShieldclassName="w-6h-6t e xt-emerald-400" />,
      title: 'AdvancedSecurity',
      description: 'Comprehensivesecuritymeasuresincludingfirewalls, intrusiondetection, andthreatprevention.'
    },
    {
      icon: <ZapclassName="w-6h-6t e xt-purple-400" />,
      title: 'PerformanceOptimization',
      description: 'Automaticoptimizationofserverresourcesformaximumperformanceandefficiency.'
    },
    {
      icon: <BarChart3 className="w-6h-6t e xt-orange-400" />,
      title: 'Analytics & Reporting',
      description: 'Detailedanalyticsandreportsonserverperformance, usagepatterns, andtrends.'
    },
    {
      icon: <ClockclassName="w-6h-6t e xt-pink-400" />,
      title: 'AutomatedBackups',
      description: 'Regularautomatedbackupswithpoint-in-timerecoveryanddisasterrecoveryplanning.'
    },
    {
      icon: <UsersclassName="w-6h-6t e xt-blue-400" />,
      title: 'ExpertSupport',
      description: '24/7 expertsupportfromcertifiedserveradministratorsandengineers.'
    }
  ]

  constservices = [
    {
      icon: <ServerclassName="w-8h-8t e xt-cyan-400" />,
      title: 'ServerSetup & Configuration',
      description: 'Completeserversetup, configuration, andoptimizationforyourspecificneeds.',
      features: ['OSinstallation', 'Softwareconfiguration', 'Securityhardening', 'Performancetuning']
    },
    {
      icon: <ShieldclassName="w-8h-8t e xt-emerald-400" />,
      title: 'SecurityManagement',
      description: 'Comprehensivesecuritymanagementincludingfirewalls, antivirus, andthreatmonitoring.',
      features: ['Firewallconfiguration', 'Antivirussetup', 'Intrusiondetection', 'Securityaudits']
    },
    {
      icon: <ZapclassName="w-8h-8t e xt-purple-400" />,
      title: 'PerformanceMonitoring',
      description: 'Real-timemonitoringandoptimizationofserverperformanceandresourceusage.',
      features: ['CPUmonitoring', 'Memorytracking', 'Diskusage', 'Networkanalysis']
    },
    {
      icon: <DatabaseclassName="w-8h-8t e xt-orange-400" />,
      title: 'DatabaseManagement',
      description: 'Expertdatabaseadministration, optimization, andmaintenanceservices.',
      features: ['Databaseoptimization', 'Querytuning', 'Backupmanagement', 'Replicationsetup']
    }
  ]

  constpricingPlans = [
    {
      name: 'Basic',
      price: '$199',
      period: '/month',
      description: 'Perfectforsmallbusinesses',
      features: [
        '1-2 servers',
        'Basicmonitoring',
        'Emailsupport',
        'Monthlyreports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Idealforgrowingcompanies',
      features: [
        'Upto 10 servers',
        'Advancedmonitoring',
        '24/7 support',
        'Weeklyreports',
        'Securitymanagement'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Forlargeorganizations',
      features: [
        'Unlimitedservers',
        'Fullmonitoringsuite',
        'Dedicatedsupport',
        'Customsolutions',
        'SLAguarantee'
      ],
      popular: false
    }
  ]

  return (
    <>
    <>
      <Helmet>
        <title>5GDataAnalytics - ZionTechGroup</title>
        <metaname="description" content="Professional 5GdataanalyticsservicesbyZionTechGroup. Transformyourbusinesswithourexpertsolutions." />
      </Helmet>
        <title>ServerManagement - ProfessionalServerAdministration | ZionTechGroup</title>
        <metaname="description" content="Professionalservermanagementservicesincludingmonitoring, security, optimization, and 24/7 support. Keepyourserversrunningatpeakperformance." / / />
        <metaname="keywords" content="servermanagement, serveradministration, servermonitoring, serversecurity, ITinfrastructure, serveroptimization" / / />
        <linkrel="canonical" href="https://ziontechgroup.com/server-management" />
      </Helmet>
    </>

      <divclassName="m i n-h-screenbg-gray-900text-white">
        {/* HeroSection */}
    <>
        <sectionclassName="r e lativepy-20px-4overflow-hidden" />
          <divclassName="a b soluteinset-0 bg-gradient-to-rfrom-cyan-500/10to-purple-500/10" />
          <divclassName="r e lativemax-w-7xlmx-autotext-center">
            <divclassName="i n line-flexitems-centerspace-x-2 bg-gradient-to-rfrom-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-fulltext-smfont-mediummb-8borderborder-cyan-400/30">
              <ServerclassName="w-4h-4" />
              <span   />ServerManagement</span>
            </div>
    </>
            
            <h1 className="t e xt-4xlsm:text-6 xlmd:text-7 xlfont-boldtext-whitemb-8leading-tight" />
              Professional <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />ServerManagement</span>
            </h1>
    </>
            
            <pclassName="t e xt-lgsm:text-xlmd:text-2 xltext-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">Keepyourserversrunningatpeakperformancewithourcomprehensivemanagementservices. 
              Monitoring, security, optimization, and 24/7 expertsupport.</p>
            <divclassName="f l exflex-colsm:flex-rowgap-6justify-centermb-16">
              <Linkto="/contact" className="g r oupbg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-10 py-4 rounded-xlfont-semiboldhover:from-cyan-600 hover:to-purple-700 transition-allduration-300 flexitems-centerjustify-centerspace-x-2 shadow-lgshadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105">
          <span    />
        </Link>GetStarted</span>
                <ArrowRightclassName="w-5 h-5g r oup-hover:translate-x-1transition-transform" />
              </Link>
              <Linkto="/demo" className="g r oupborder-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xlfont-semiboldhover:bg-cyan-400 hover:text-gray-900 transition-allduration-300 flexitems-centerjustify-centerspace-x-2backdrop-blur-sm">
          <span    />
        </Link>ViewDemo</span>
                <ArrowRightclassName="w-5 h-5g r oup-hover:translate-x-1transition-transform" />
              </Link>
            </div>
        </section>
    </>

        {/* FeaturesSection */}
    <>
        <sectionclassName="p y-20px-4relative" />
          <divclassName="a b soluteinset-0 bg-gradient-to-brfrom-purple-500/5via-cyan-500/5to-pink-500/5" />
          <divclassName="r e lativemax-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
                Comprehensive <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />ServerManagement</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-4xlmx-auto">Everythingyouneedtokeepyourserverssecure, optimized, andrunningsmoothly.</p>
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
                  <pclassName="t e xt-gray-300leading-relaxed">{feature.description}</p>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* ServicesSection */}
    <>
        <sectionclassName="p y-20 px-4 bg-gradient-to-brfrom-slate-800/50to-purple-900/50relative" />
          <divclassName="r e lativemax-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
                Our <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Services</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-4xlmx-auto">Professionalservermanagementservicestailoredtoyourbusinessneeds.</p>
            </div>
    </>
            
            <divclassName="g r idgrid-cols-1md:grid-cols-2gap-8">
              {services.map((service, index) => (
    <>
                <divkey="{index}" className="g r oupbg-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <divclassName="f l exitems-centerspace-x-4mb-6">
                    <divclassName="f l exitems-centerjustify-centerw-16 h-16 bg-gradient-to-rfrom-cyan-500 to-purple-600 rounded-2 xlgroup-hover:scale-110transition-transformduration-300"  />{service.icon}
                    </div>
                    <h3 className="t e xt-2 xlfont-boldtext-whitegroup-hover:text-cyan-400 transition-colors"  />{service.title}
                    </h3>
                  </div>
                  <pclassName="t e xt-gray-300 mb-6leading-relaxed">{service.description}</p>
                  <divclassName="s p ace-y-2">
                    {service.features.map((feature, featureIndex) => (
    <>
                      <divkey="{featureIndex}" className="f l exitems-centerspace-x-2text-gray-400text-sm" />
                        <CheckCircleclassName="w-4h-4t e xt-green-400" />
                        <span   />{feature}</span>
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
          <divclassName="r e lativemax-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
                Flexible <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Pricing</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">Choosetheplanthatfitsyourserverinfrastructureneeds. Allplansinclude 24/7 support.</p>
            </div>
    </>
            
            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              {pricingPlans.map((plan, index) => (
                <divkey="{index}" className="{`r e lative" bg-white/10 backdrop-blur-lgrounded-2 xlp-8 bordertransition-allduration-300 hover:scale-105 ${
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
                    <pclassName="t e xt-gray-300 mb-4">{plan.description}</p>
                    <divclassName="f l exitems-baselinejustify-center">
                      <spanclassName="t e xt-5 xlfont-boldtext-white"   />{plan.price}</span>
                      <spanclassName="t e xt-gray-400ml-2"   />{plan.period}</span>
                    </div>
                  <ulclassName="s p ace-y-4mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <likey="{featureIndex}" className="f l exitems-centerspace-x-3" />
                        <CheckCircleclassName="w-5 h-5t e xt-green-400flex-shrink-0" />
                        <spanclassName="t e xt-gray-300"   />{feature}</span>
                      </li>
    </>
                    ))}
                  </ul>
                  <Linkto="/contact" 
                    className="{`b l ock" w-fulltext-centerpy-3 rounded-xlfont-semiboldtransition-allduration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitehover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                    }`}
                    />GetStarted
    <>
                  </Link>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* CTASection */}
    <>
        <sectionclassName="p y-20px-4relative" />
          <divclassName="a b soluteinset-0 bg-gradient-to-rfrom-cyan-500/10via-purple-500/10to-pink-500/10" />
          <divclassName="r e lativemax-w-7xlmx-autotext-center">
            <divclassName="b g-gradient-to-rfrom-cyan-600 via-purple-600 to-pink-600 rounded-3 xlp-8sm:p-12lg:p-16">
              <h2 className="t e xt-4xlsm:text-5 xlmd:text-6 xlfont-boldtext-whitemb-6leading-tight" />
                ReadytoOptimizeYour <spanclassName="b g-gradient-to-rfrom-cyan-300 to-pink-300bg-clip-texttext-transparent"   />ServerInfrastructure?</span>
              </h2>
    </>
              
              <pclassName="t e xt-xlsm:text-2 xltext-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">Letourexpertteammanageyourserverssoyoucanfocusonyourbusiness. 
                Getstartedwithourprofessionalservermanagementservicestoday.</p>
              <divclassName="f l exflex-colsm:flex-rowgap-6justify-center">
                <Linkto="/contact" className="g r oupbg-whitetext-cyan-600 px-10 py-4 rounded-xlfont-boldtext-lghover:bg-gray-100 transition-allduration-300 flexitems-centerjustify-centerspace-x-2 shadow-lghover:shadow-xltransformhover:scale-105">
          <span    />
        </Link>GetStarted</span>
                  <ArrowRightclassName="w-5 h-5g r oup-hover:translate-x-1transition-transform" />
                </Link>
                <Linkto="/pricing" className="g r oupborder-2 border-whitetext-whitepx-10 py-4 rounded-xlfont-boldtext-lghover:bg-white/10 transition-allduration-300 flexitems-centerjustify-centerspace-x-2backdrop-blur-sm">
          <span    />
        </Link>ViewPricing</span>
                  <ArrowRightclassName="w-5 h-5g r oup-hover:translate-x-1transition-transform" />
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
  )
}

exportdefaultServerManagementPage;
    </>
