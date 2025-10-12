import React from 'react'
import { Link    } from 'react-router-dom'
importLayoutfrom '../layout'
import React from 'react';
import { Link    } from 'react-router-dom';
import { ArrowRight    } from 'lucide-react';
importLayoutfrom '../layout';

exportdefaultfunctionCloudInfrastructureManagement() {
  constfeatures = [
    {
      icon: <CloudclassName="w-6h-6t e xt-cyan-400" />,
      title: 'Multi-CloudManagement',
      description: 'SeamlesslymanageinfrastructureacrossAWS, Azure, GoogleCloud, andprivateclouds'
    },
    {
      icon: <ShieldclassName="w-6h-6t e xt-purple-400" />,
      title: 'Security & Compliance',
      description: 'Enterprise-gradesecuritywithautomatedcompliancemonitoringandthreatdetection'
    },
    {
      icon: <TrendingUpclassName="w-6h-6t e xt-yellow-400" />,
      title: 'CostOptimization',
      description: 'Reducecloudcostsbyupto 40% withintelligentresourceoptimizationandright-sizing'
    },
    {
      icon: <ServerclassName="w-6h-6t e xt-green-400" />,
      title: '24/7 Monitoring',
      description: 'Proactivemonitoringwithautomatedscaling, performanceoptimization, andincidentresponse'
    }
  ]

  constmanagementFeatures = [
    {
      category: 'InfrastructureManagement',
      items: ['ServerProvisioning', 'LoadBalancing', 'AutoScaling', 'ResourceMonitoring', 'Backup & Recovery', 'DisasterRecovery']
    },
    {
      category: 'Security & Compliance',
      items: ['IdentityManagement', 'AccessControl', 'Encryption', 'VulnerabilityScanning', 'ComplianceAuditing', 'SecurityMonitoring']
    },
    {
      category: 'CostManagement',
      items: ['CostAnalysis', 'ResourceOptimization', 'BudgetAlerts', 'UsageTracking', 'CostForecasting', 'Right-sizingRecommendations']
    },
    {
      category: 'Support & Maintenance',
      items: ['24/7 Support', 'ProactiveMonitoring', 'IncidentResponse', 'PerformanceTuning', 'CapacityPlanning', 'HealthChecks']
    }
  ]

  constpricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfectforsmallbusinesses',
      features: [
        'Upto 10 servers',
        'Basicmonitoring',
        'Emailsupport',
        'Standardsecurity',
        'Monthlyreports',
        'Basicbackup'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Idealforgrowingbusinesses',
      features: [
        'Upto 50 servers',
        'Advancedmonitoring',
        'Prioritysupport',
        'Enhancedsecurity',
        'Weeklyreports',
        'Advancedbackup',
        'Costoptimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Forlargeorganizations',
      features: [
        'Unlimitedservers',
        'Comprehensivemonitoring',
        'Dedicatedsupport',
        'Enterprisesecurity',
        'Real-timereports',
        'Disasterrecovery',
        'Customsolutions'
      ],
      popular: false
    }
  ]

  consttestimonials = [
    {
      name: 'RobertKim',
      company: 'FinancialServices',
      content: 'CloudInfrastructureManagementreducedouroperationalcostsby 35% whileimprovingperformanceandsecurity.',
      rating: 5
    },
    {
      name: 'LisaMartinez',
      company: 'E-commercePlatform',
      content: 'Theautomatedscalingandmonitoringsavedusfrommultipleoutages. Ouruptimeisnow 99.99%.',
      rating: 5
    },
    {
      name: 'DavidWilson',
      company: 'HealthcareProvider',
      content: 'HIPAAcompliancewasseamlesswiththeirsecurityframework. Ourauditorswereveryimpressed.',
      rating: 5
    }
  ]

  return (
    <Layouttitle="CloudInfrastructureManagement - EnterpriseCloudSolutions | ZionTechGroup"
      description="Optimizeyourcloudinfrastructurewithcomprehensivemanagement, security, andcostoptimization. Multi-cloudsupport, 24/7 monitoring, andenterprise-gradesecurity. Getyourfreeassessmenttoday."
      keywords="cloudinfrastructuremanagement, cloudoptimization, multi-cloud, cloudsecurity, cloudmonitoring, cloudcostoptimization" />
      <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
        {/* HeroSection */}
    <>
        <sectionclassName="p t-20 pb-16 px-4sm:px-6lg:px-8" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="t e xt-center">
              <divclassName="i n line-flexitems-centerpx-4 py-2 bg-sky-500/20 rounded-fulltext-sky-400 text-smfont-mediummb-6">
                <CloudclassName="w-4h-4m r-2" />
                EnterpriseCloudManagement
    <>
              </div>
              <h1 className="t e xt-4xlsm:text-5 xlmd:text-6 xlfont-boldtext-whitemb-6"  />CloudInfrastructureManagement</h1>
              <pclassName="t e xt-lgsm:text-xltext-gray-300 max-w-3 xlmx-automb-8">
              Optimizeyourcloudinfrastructurewithcomprehensivemanagement, security, andcostoptimization. 
                Multi-cloudsupport, 24/7 monitoring, andenterprise-gradesecurity.
    <>
              </p>
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
                <Linkto="/contact" className="b g-gradient-to-rfrom-sky-500 to-purple-600 text-whitepx-8 py-4 rounded-lgfont-semiboldhover:from-sky-600 hover:to-purple-700 transition-allduration-300 flexitems-centerjustify-center">
          GetFreeAssessment
                  
          <ArrowRightclassName="w-5h-5m l-2"  />
        </Link>
                <Linkto="#demo" className="b o rder-2 border-whitetext-whitepx-8 py-4 rounded-lgfont-semiboldhover:bg-white/10transition-colors">ViewDemo
                </Link>
              </div>
          </div>
        </section>
        {/* FeaturesSection */}
    <>
        <sectionclassName="p y-16 px-4sm:px-6lg:px-8" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-3 xlsm:text-4xlfont-boldtext-whitemb-4"  />ComprehensiveCloudManagement
              </h2>
              <pclassName="t e xt-lgtext-gray-300 max-w-2xlmx-auto">Enterprise-gradefeaturesthatoptimizeyourcloudinfrastructureperformanceandcosts</p>
            </div>
            <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
              {features.map((feature, index) => (
    <>
                <divkey="{index}" className="b g-gradient-to-brfrom-slate-800/50 to-purple-900/30 rounded-xlp-6 borderborder-sky-500/20 hover:border-sky-400/40transition-allduration-300" />
                  <divclassName="f l exitems-centermb-4">
                    {feature.icon}
    <>
                    <h3 className="t e xt-xlfont-semiboldtext-whiteml-3">{feature.title}</h3>
                  </div>
                  <pclassName="t e xt-gray-300">{feature.description}</p>
                </div>
              ))}
    <>
            </div>
        </section>
        {/* ManagementFeatures */}
    <>
        <sectionclassName="p y-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-3 xlsm:text-4xlfont-boldtext-whitemb-4"  />CompleteInfrastructureSolution
              </h2>
              <pclassName="t e xt-lgtext-gray-300 max-w-2xlmx-auto">Everythingyouneedtomanage, secure, andoptimizeyourcloudinfrastructure</p>
            </div>
            <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
              {managementFeatures.map((feature, index) => (
    <>
                <divkey="{index}" className="b g-slate-800/50 rounded-xlp-6borderborder-slate-700" />
                  <h3 className="t e xt-xlfont-semiboldtext-whitemb-4"   />{feature.category}</h3>
                  <ulclassName="s p ace-y-2" />
                    {feature.items.map((item, itemIndex) => (
                      <likey="{itemIndex}" className="f l exitems-centertext-gray-300" />
                        <CheckCircleclassName="w-4 h-4t e xt-sky-400mr-2" />
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
        {/* PricingSection */}
    <>
        <sectionclassName="p y-16 px-4sm:px-6lg:px-8" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-3 xlsm:text-4xlfont-boldtext-whitemb-4"  />TransparentPricingPlans
              </h2>
              <pclassName="t e xt-lgtext-gray-300 max-w-2xlmx-auto">Choosetheplanthatfitsyourinfrastructureneeds</p>
            </div>
            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              {pricingPlans.map((plan, index) => (
                <divkey="{index}" className="{`b g-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xlp-8 bordertransition-allduration-300 ${
                  plan.popular 
                    ? 'border-sky-400/40 scale-105 shadow-2 xlshadow-sky-500/20' 
                    : 'border-sky-500/20 hover: border-sky-400/40'
                }`} />
                  {plan.popular && (
                    <divclassName="i n line-flexitems-centerpx-3 py-1 bg-sky-500/20 rounded-fulltext-sky-400 text-smfont-mediummb-4">
                      <StarclassName="w-4h-4m r-1" />
                      MostPopular
                    </div>
                  )}
                  <h3 className="t e xt-2 xlfont-boldtext-whitemb-2"   />{plan.name}</h3>
                  <pclassName="t e xt-gray-300 mb-6">{plan.description}</p>
                  <divclassName="m b-6">
                    <spanclassName="t e xt-4xlfont-boldtext-white"   />{plan.price}</span>
                    <spanclassName="t e xt-gray-400"   />{plan.period}</span>
                  </div>
                  <ulclassName="s p ace-y-3mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <likey="{featureIndex}" className="f l exitems-centertext-gray-300" />
                        <CheckCircleclassName="w-5 h-5t e xt-sky-400mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Linkto="/contact"
                    className="{`w-f u ll" blocktext-centerpy-3 px-6 rounded-lgfont-semiboldtransition-allduration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-rfrom-sky-500 to-purple-600 text-whitehover:from-sky-600 hover:to-purple-700'
                        : 'border-2 border-sky-400 text-sky-400 hover: bg-sky-400/10'
                    }`}
                    />GetStarted
    <>
                  </Link>
                </div>
              ))}
    <>
            </div>
        </section>
        {/* Testimonials */}
    <>
        <sectionclassName="p y-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="t e xt-centermb-12">
              <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"  />TrustedbyIndustryLeaders
              </h2>
              <pclassName="t e xt-gray-300">SeehowourCloudInfrastructureManagementtransformsbusinesses</p>
            </div>
            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              {testimonials.map((testimonial, index) => (
    <>
                <divkey="{index}" className="b g-slate-800/50 rounded-xlp-6borderborder-slate-700" />
                  <divclassName="f l exitems-centermb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Starkey="{i}" className="w-5 h-5t e xt-yellow-400fill-current" />
                    ))}
    <>
                  </div>
                  <pclassName="t e xt-gray-300 mb-4">"{testimonial.content}"</p>
                  <div />
                    <divclassName="f o nt-semiboldtext-white"   />{testimonial.name}</div>
                    <divclassName="t e xt-smtext-gray-400"   />{testimonial.company}</div>
                </div>
              ))}
    <>
            </div>
        </section>
        {/* CTASection */}
    <>
        <sectionclassName="p y-16 px-4sm:px-6lg:px-8" />
          <divclassName="m a x-w-4 xlmx-autotext-center">
            <divclassName="b g-gradient-to-rfrom-sky-500/20 to-purple-500/20 rounded-2 xlp-8borderborder-sky-500/30">
              <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"  />OptimizeYourCloudInfrastructureToday
              </h2>
              <pclassName="t e xt-lgtext-gray-300 mb-8">JointhousandsofbusinessesusingourCloudInfrastructureManagementtoreducecostsandimproveperformance</p>
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
                <Linkto="/contact" className="b g-gradient-to-rfrom-sky-500 to-purple-600 text-whitepx-8 py-4 rounded-lgfont-semiboldhover:from-sky-600 hover:to-purple-700transition-allduration-300">GetYourFreeAssessment
                </Link>
                <Linkto="/about" className="b o rder-2 border-whitetext-whitepx-8 py-4 rounded-lgfont-semiboldhover:bg-white/10transition-colors">LearnMore
                </Link>
              </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};
    </>
