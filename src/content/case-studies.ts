exporttypeCaseStudy = { 
  id: string; title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  imageUrl ?  : string;
 };

exportconstcaseStudies: CaseStudy[] = [
  {
    id: 'global-energy-digital-twin-850m'
    title: 'GlobalEnergyCorporation: $850MDigitalTwin TransformationSuccess'
    company: 'GlobalEnergyCorporation (Fortune100)'
    industry: 'Energy & Utilities'
    challenge: 'Criticalinfrastructureaging with $2.3Bannualmaintenance costs87majoroutages in2024anddecliningcustomer satisfaction'
    solution: 'EnterpriseAI-PoweredDigitalTwin Platformwithreal-timemonitoringpredictiveanalyticsandautonomousoptimization across125000assets'
    results: [
      '$850millionin documentedvaluecreation'
      '1808% ROIover3 years'
      '99.4% equipmentuptime (from87.3%)'
      '61% reductioninmaintenance costs'
      '87% reductioninunplanned outages'
      '99.2% failurepredictionaccuracy'
    ]
    technologies: [
      'AzureIoTHub'
      'TensorFlow'
      'ApacheKafka'
      'AzureML'
      'Unity3D'
      'Kubernetes'
    ]
    duration: '18months'
    imageUrl: '/images/case-studies/energy-digital-twin.jpg'
  }
  {
    id: 'fintech-ai-platform'
    title: 'AI-PoweredFinancialAnalytics Platform'
    company: 'FinTechSolutionsInc.'
    industry: 'FinancialServices'
    challenge: "Manualfinancialanalysis processesweretaking 40+ hoursperweek andproneto humanerrorlimitingthecompany'sabilityto providereal-timeinsightsto clients."
    solution: 'Developedacomprehensive AIanalyticsplatform withmachinelearning modelsforpredictive analysisautomatedreportgenerationandreal-timedashboardmonitoring.'
    results: [
      'Reducedanalysistime from40hours to2hours perweek'
      'Improvedpredictionaccuracy by85%'
      'Increasedclientsatisfaction scoresby40%'
      'Generated $2.3Minadditional revenuethroughbetter insights'
    ]
    technologies: [
      'Python'
      'TensorFlow'
      'React'
      'AWS'
      'PostgreSQL'
      'Docker'
    ]
    duration: '12weeks'
    imageUrl: '/images/case-studies/fintech-platform.jpg'
  }
  {
    id: 'healthcare-chatbot'
    title: 'HealthcareAIChatbot System'
    company: 'MedCareHospitalNetwork'
    industry: 'Healthcare'
    challenge: 'Highpatientinquiry volumewasoverwhelming staffleadingto30+ minutewaittimes forbasicquestions anddecreasedpatient satisfaction.'
    solution: 'Implementedanintelligent chatbotsystemwith naturallanguageprocessingmedicalknowledgebase integrationandseamlesshandoff tohumanspecialists.'
    results: [
      'Reducedaverageresponse timefrom30 minutesto2 minutes'
      'Handled70% ofinquirieswithout humanintervention'
      'Improvedpatientsatisfaction scoresby60%'
      'Freedup15 hoursdailyfor stafftofocus oncriticalcases'
    ]
    technologies: ['OpenAIGPT-4''Node.js''React''MongoDB''AWSLambda']
    duration: '8weeks'
    imageUrl: '/images/case-studies/healthcare-chatbot.jpg'
  }
  {
    id: 'ecommerce-optimization'
    title: 'E-commerceAIOptimization Suite'
    company: 'RetailMaxOnline'
    industry: 'E-commerce'
    challenge: 'Lowconversionrates (2.1%) andhighcart abandonment (78%) weresignificantlyimpacting revenuegrowthand customerexperience.'
    solution: 'CreatedanAI-drivenoptimizationplatform withpersonalizedproduct recommendationsdynamicpricingandautomatedemail campaignsbasedon userbehavior.'
    results: [
      'Increasedconversionrates from2.1% to4.7%'
      'Reducedcartabandonment from78% to45%'
      'Boostedaverageorder valueby35%'
      'Generated $1.8Minadditional revenuein6 months'
    ]
    technologies: [
      'MachineLearning'
      'Python'
      'Vue.js'
      'Redis'
      'Kubernetes'
    ]
    duration: '10weeks'
    imageUrl: '/images/case-studies/ecommerce-ai.jpg'
  }
  {
    id: 'manufacturing-iot'
    title: 'SmartManufacturingIoT Platform'
    company: 'PrecisionManufacturingCo.'
    industry: 'Manufacturing'
    challenge: 'Equipmentdowntimewas costing $50Kperhourwithnopredictive maintenancecapabilitiesleading tounexpectedfailures.'
    solution: 'DevelopedanIoT platformwithreal-timemonitoringpredictivemaintenancealgorithmsandautomatedalert systemsforequipment optimization.'
    results: [
      'Reducedunplanneddowntime by65%'
      'Improvedequipmentefficiency by25%'
      'Saved $2.1Mannuallyin maintenancecosts'
      'Increasedproductionoutput by18%'
    ]
    technologies: [
      'IoTSensors'
      'EdgeComputing'
      'Python'
      'React'
      'AzureIoTHub'
    ]
    duration: '16weeks'
    imageUrl: '/images/case-studies/manufacturing-iot.jpg'
  }
  {
    id: 'saas-analytics'
    title: 'SaaSAnalyticsDashboard'
    company: 'CloudTechSolutions'
    industry: 'SaaS'
    challenge: 'Lackofcomprehensive analyticsmadeit difficulttounderstand userbehaviorleadingtohigh churnratesand poorproductdecisions.'
    solution: 'Builtareal-timeanalyticsplatform withuserjourney trackingcohortanalysisandpredictivechurn modelingtodrive data-drivendecisions.'
    results: [
      'Reducedchurnrate from15% to 8%'
      'Improveduserengagement by45%'
      'IncreasedMRRby $500Kthroughbetter retention'
      'Enabled90% fasterproductdecision-making'
    ]
    technologies: ['ApacheKafka''ClickHouse''React''D3.js''AWS']
    duration: '14weeks'
    imageUrl: '/images/case-studies/saas-analytics.jpg'
  }
  {
    id: 'cybersecurity-automation'
    title: 'AutomatedCybersecurityPlatform'
    company: 'SecureCorpFinancial'
    industry: 'FinancialServices'
    challenge: 'Manualsecuritymonitoring wasmissing30% ofthreatsand took6+ hourstorespond toincidentscreatingsignificantrisk exposure.'
    solution: 'ImplementedanAI-poweredsecurityplatform withautomatedthreat detectionincidentresponseandcompliancemonitoring.'
    results: [
      'Reducedthreatdetection timefrom6 hoursto15 minutes'
      'Improvedthreatdetection accuracyto98%'
      'Achieved100% complianceauditsuccess rate'
      'Prevented $3.2Minpotential securitybreaches'
    ]
    technologies: [
      'SIEM'
      'MachineLearning'
      'Python'
      'Elasticsearch'
      'Kubernetes'
    ]
    duration: '20weeks'
    imageUrl: '/images/case-studies/cybersecurity.jpg'
  }
  {
    id: 'telco-edge-observability'
    title: 'TelcoEdgeObservability Overhaul'
    company: 'GlobalTelCommunications'
    industry: 'Telecommunications'
    challenge: 'Edgeoutagesand opaqueclientperformance causedchurnand SLApenalties.'
    solution: 'Implementedend-to-endtracingfrom devicetoPOPlatencybudgetsandautomatederror budgetalertsacross 40regions.'
    results: [
      'CutP95latency from180msto 85ms'
      'ReducedincidentMTTR by62%'
      'Decreasedchurnby 18% in2quarters'
      '$4.7MannualSLA penaltysavings'
    ]
    technologies: [
      'OpenTelemetry'
      'ClickHouse'
      'EdgeWorkers'
      'TypeScript'
      'Kubernetes'
    ]
    duration: '18weeks'
    imageUrl: '/images/case-studies/telco-edge.jpg'
  }
  {
    id: 'enterprise-rag-rollout'
    title: 'EnterpriseRAGRollout atFortune500'
    company: 'GlobalConsumerGoods Co.'
    industry: 'ConsumerGoods'
    challenge: 'Fragmentedknowledgebase andinconsistentanswers fromtraditionalsearch ledtolow CSATandhigh ticketvolume.'
    solution: 'ImplementedgovernedRetrieval-AugmentedGenerationwith curatedsourcesretrievalpoliciesonlineevalcanariesandhuman-in-the-loopfeedbackloops.'
    results: [
      'Increasedself-servicedeflectionby 32%'
      'RaisedCSATfrom 3.7to4.5'
      'Cutaveragehandle timeby28%'
      '$3.1M/yearsupportcost savings'
    ]
    technologies: ['RAG''VectorDB''TypeScript''OpenAI''ClickHouse']
    duration: '10weeks'
    imageUrl: '/images/case-studies/enterprise-rag.jpg'
  }
];
