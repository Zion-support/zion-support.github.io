import { Link  } from 'react-router-dom',
export default function Page() {
,
    {
      id: 'llm - prompt - safety - scanner',
      title: 'LLM Prompt Safety Scanner',
      description:
        'Scan prompts, tools and context windows for injection vectors.Generate red - team prompts and propose mitigations with policy diffs.',
      icon: Lock,
      color: 'from - purple - 600 to - pink - 700',
      price: '$59 / month',
      category: 'AI Security',
      features: ['Prompt injection pattern libraryContent policy diffing',
        'Automatic test corpus generationCI / CD gate with pass / fail',
        'Report exports for security review'
      ],
      benefits: ['Reduce safety incidents 40%Shift - left AI safety testing',
        'Automated security validationComprehensive threat detection',
        'Developer - friendly security'
      ],
      useCases: ['AppSec and platform teamsPre - prod safety testing',
        'Policy hardeningRegulatory readiness',
        'Security compliance'
      ],
      marketPrice: '$150 - $800 / month',
      roi: '200 - 300%',
      launchDate: 'Q1 2025',
      technology: ['Node.jsOpenAI', 'Anthropic'],
      integrations: ['GitHubGitLab', 'JenkinsVercel'],
      competitors: ['PromptfooGuardrails libraries'],
      marketSize: '$1B AI Safety',
      growthRate: 'Emerging'
    },
    {
      id: 'rfp - auto - responder',
      title: 'RFP Auto - Responder',
      description:
        'Upload RFP PDFs, map to knowledge base, and generate answers with citations and policy references.Export clean DOCX / Google Docs.',
      icon: FileText,
      color: 'from - blue - 600 to - indigo - 700',
      price: '$129 / month',
      category: 'AI & Business',
      features: ['Document parsing and mappingPolicy / KB grounding with citations',
        'Gaps highlighting and follow-upsExport to DOCX / Google Docs',
        'Collaborative review modes'
      ],
      benefits: ['Cut response time 60–80%Automated RFP processing',
        'Consistent response qualityKnowledge base integration',
        'Collaborative workflow'
      ],
      useCases: ['Sales engineering teamsRFP responses',
        'Security questionnairesDue diligence',
        'Compliance documentation'
      ],
      marketPrice: '$400 - $2,000 / month',
      roi: '300 - 500%',
      launchDate: 'Q1 2025',
      technology: ['Next.jsOpenAI', 'Pinecone'],
      integrations: ['Google DriveConfluence', 'Notion'],
      competitors: ['LoopioResponsive'],
      marketSize: '$2B RFP Tech',
      growthRate: 'Strong'
    },
    {
      id: 'ai - red - team - simulator',
      title: 'AI Red Team Simulator',
      description:
        'Continuously attack your AI stack with curated jailbreak prompts and tool abuse scenarios.Track regressions, export reports for auditors.',
      icon: Shield,
      color: 'from - amber - 600 to - red - 700',
      price: '$199 / month',
      category: 'AI Security',
      features: ['Curated jailbreak corporaTool - abuse and exfiltration scenarios',
        'Scoring and trend reportsCI / CD gating and webhooks',
        'Auditor - friendly exports'
      ],
      benefits: ['Reduce time - to - fix 30%Continuous security testing',
        'Automated threat simulationComprehensive risk assessment',
        'Audit compliance'
      ],
      useCases: ['Security teamsPlatform security',
        'Risk assessmentCompliance auditing',
        'Security training'
      ],
      marketPrice: '$500 - $3,000 / month',
      roi: '250 - 400%',
      launchDate: 'Q1 2025',
      technology: ['Node.jsDocker', 'OpenAI'],
      integrations: ['GitHubGitLab', 'Jenkins'],
      competitors: ['External red team services'],
      marketSize: '$1B AI Security',
      growthRate: 'High'
    },
    {
      id: 'speech-analytics - center',
      title: 'Contact Center Speech Analytics',
      description:
        'Ingest call recordings or live streams, transcribe, detect topics and sentiment, and score QA with dashboards.Coach agents with snippets.',
      icon: Mic,
      color: 'from - indigo - 600 to - violet - 700',
      price: '$179 / month',
      category: 'Customer Support & Success',
      features: ['Accurate transcription with diarizationSentiment and topic mining',
        'QA auto - scoring and calibrationCoaching snippets and playbooks',
        'PII redaction and access controls'
      ],
      benefits: ['Improve CSAT and AHT 10–20%Automated quality assurance',
        'Real - time insightsAgent performance improvement',
        'Compliance and privacy'
      ],
      useCases: ['Contact centersCustomer support',
        'Sales teamsQuality assurance',
        'Training and coaching'
      ],
      marketPrice: '$300 - $2,000 / month',
      roi: '200 - 350%',
      launchDate: 'Q1 2025',
      technology: ['WhisperVAD', 'Next.js'],
      integrations: ['TwilioAmazon Connect', 'Five9'],
      competitors: ['GongChorus', 'Observe.AI'],
      marketSize: '$6B Speech Analytics',
      growthRate: 'High'
    },
    {
      id: 'synthetic - data - studio',
      title: 'Synthetic Data Studio',
      description:
        'Create class - balanced datasets with differentially private generators.Export to parquet / CSV and seed sandboxes for testing.',
      icon: TestTube,
      color: 'from - teal - 600 to - emerald - 700',
      price: '$199 / month',
      category: 'AI & Data',
      features: ['DP and k - anonymity optionsImbalance correction and sampling',
        'Drift detection on synthetic setsRow / column level lineage',
        'Governed export with approvals'
      ],
      benefits: ['Reduce manual data prep 50%Privacy - safe data generation',
        'Balanced datasetsCompliance assurance',
        'Testing and development'
      ],
      useCases: ['Data science teamsML platform development',
        'Privacy - safe analyticsModel testing',
        'Research and development'
      ],
      marketPrice: '$400 - $2,500 / month',
      roi: '200 - 400%',
      launchDate: 'Q1 2025',
      technology: ['PythonJAX / PyTorch', 'Postgres'],
      integrations: ['S3GCS', 'Snowflake'],
      competitors: ['Gretel.aiMostly AI'],
      marketSize: '$2B Synthetic Data',
      growthRate: 'High'
    },
    {
      id: 'feature - store - starter',
      title: 'Feature Store Starter',
      description:
        'Bootstrap an offline + online feature store with transformations, point - in - time joins and approvals.Ship faster with templates.',
      icon: Database,
      color: 'from - amber - 600 to - yellow-700',
      price: '$99 / month',
      category: 'AI & Data',
      features: ['Point - in - time correctnessTransformation registry',
        'Approval workflowsLineage and ownership',
        'Rollbacks and versioning'
      ],
      benefits: ['Accelerate feature shipping 2×Governed feature management',
        'Real - time feature servingComprehensive lineage tracking',
        'Production - ready templates'
      ],
      useCases: ['ML platform teamsFeature engineering',
        'Real - time MLModel serving',
        'Data governance'
      ],
      marketPrice: '$500 - $3,000 / month',
      roi: '300 - 500%',
      launchDate: 'Q1 2025',
      technology: ['KafkaPostgres', 'Redis'],
      integrations: ['dbtAirflow', 'Spark'],
      competitors: ['FeastTecton(enterprise) '],
      marketSize: '$1B Feature Platforms',
      growthRate: 'Growing'
    },
    {
      id: 'model - registry - lite',
      title: 'Model Registry Lite',
      description:
        'Lightweight model registry with artifacts, metrics and stage transitions.Webhooks to CI for canary rollouts.',
      icon: Package,
      color: 'from - sky - 600 to - cyan - 700',
      price: '$79 / month',
      category: 'AI & Data',
      features: ['Artifacts and signaturesMetrics and evals',
        'Stage transitions and approvalsRBAC and audit logs',
        'Webhooks and rollback'
      ],
      benefits: ['Reduce release risk 20–40%Governed model deployment',
        'Automated workflowsComprehensive tracking',
        'Production safety'
      ],
      useCases: ['ML platform teamsModel governance',
        'Deployment managementCompliance tracking',
        'Risk management'
      ],
      marketPrice: '$300 - $2,000 / month',
      roi: '250 - 400%',
      launchDate: 'Q1 2025',
      technology: ['S3Postgres', 'Next.js'],
      integrations: ['MLflowWeights & Biases', 'Arize'],
      competitors: ['MLflow(self - hosted) '],
      marketSize: '$1B MLOps',
      growthRate: 'High'
    },
    {
      id: 'data - quality - monitoring',
      title: 'Data Quality Monitoring',
      description:
        'Monitor tables, streams and ML features for freshness, volume and validity.Alert owners and auto - create issues with owners preset.',
      icon: Activity,
      color: 'from - lime - 600 to - green - 700',
      price: '$129 / month',
      category: 'Data Observability',
      features: ['Freshness and volume checksAnomaly detection on metrics',
        'Schema drift notificationsOwnership and runbooks',
        'Incident export and trends'
      ],
      benefits: ['Reduce incidents and firefighting 30%Proactive data quality monitoring',
        'Automated alertingOwnership accountability',
        'Incident prevention'
      ],
      useCases: ['Data engineering teamsAnalytics reliability',
        'ML pipeline healthData governance',
        'Operational excellence'
      ],
      marketPrice: '$400 - $2,500 / month',
      roi: '250 - 400%',
      launchDate: 'Q1 2025',
      technology: ['dbtAirflow', 'OpenTelemetry'],
      integrations: ['SnowflakeBigQuery', 'Redshift'],
      competitors: ['Monte CarloBigeye'],
      marketSize: '$2B Data Reliability',
      growthRate: 'High'
    },
    {
      id: 'privacy - request - automation',
      title: 'Privacy Request Automation',
      description:
        'Automate data subject access requests across SaaS and data stores.Identity verification, redact / export, and audit - ready logs.',
      icon: FileText,
      color: 'from - fuchsia - 600 to - pink - 700',
      price: '$89 / month',
      category: 'Security & Compliance',
      features: ['Identity verification and portalsConnector library for SaaS and data',
        'Redaction and export pipelinesApprovals and audit logs',
        'SLA tracking and escalations'
      ],
      benefits: ['Reduce manual work 70%Automated compliance workflows',
        'Real - time request processingComprehensive audit trails',
        'Regulatory compliance'
      ],
      useCases: ['Legal and compliance teamsData privacy operations',
        'DSAR automationRegulatory compliance',
        'Data governance'
      ],
      marketPrice: '$300 - $2,000 / month',
      roi: '200 - 350%',
      launchDate: 'Q1 2025',
      technology: ['Node.jsWorkers', 'Queues'],
      integrations: ['Google WorkspaceSalesforce', 'HubSpot'],
      competitors: ['TranscendOneTrust'],
      marketSize: '$4B Privacy Ops',
      growthRate: 'High'
    },
    {
      id: 'customer - 360 - cdp - starter',
      title: 'Customer 360 CDP Starter',
      description:
        'Ingest web / app events, stitch identities, and build segments for activation with basic RT engagement dashboards.',
      icon: Users,
      color: 'from - cyan - 600 to - sky - 700',
      price: '$149 / month',
      category: 'AI & Data',
      features: ['Event schema and SDKsIdentity stitching and dedupe',
        'Segments and audiencesWarehouse sync and reverse ETL',
        'Consent and governance basics'
      ],
      benefits: ['Increase conversion 5–15%Unified customer view',
        'Real - time segmentationData - driven marketing',
        'Privacy compliance'
      ],
      useCases: ['Growth and data teamsCustomer personalization',
        'Lifecycle marketingAttribution analysis',
        'Customer insights'
      ],
      marketPrice: '$500 - $3,000 / month',
      roi: '200 - 400%',
      launchDate: 'Q1 2025',
      technology: ['Next.jsKafka', 'Snowflake'],
      integrations: ['SegmentRudderStack', 'HubSpot'],
      competitors: ['Twilio SegmentmParticle'],
      marketSize: '$5B CDP',
      growthRate: 'High'
    },
    {
      id: 'ab - testing - lab',
      title: 'A / B Testing Lab',
      description:
        'Run experiments with CUPED / Sequential testing, guardrail metrics and sample ratio checks.SDKs for web and backend.',
      icon: TestTube,
      color: 'from - pink - 600 to - rose - 700',
      price: '$89 / month',
      category: 'Developer Tools',
      features: ['Bucketing and targetingCUPED / Sequential methods',
        'Guardrails and SRM detectionFeature flags and killswitches',
        'Dashboards and exports'
      ],
      benefits: ['Ship safer and fasterData - driven decisions',
        'Risk mitigationPerformance optimization',
        'Statistical rigor'
      ],
      useCases: ['Product and growth teamsFeature rollout',
        'ExperimentationPerformance optimization',
        'Risk management'
      ],
      marketPrice: '$300 - $2,000 / month',
      roi: '200 - 350%',
      launchDate: 'Q1 2025',
      technology: ['TypescriptPostgres', 'ClickHouse'],
      integrations: ['SegmentRudderStack', 'Snowplow'],
      competitors: ['OptimizelyVWO'],
      marketSize: '$2B Experimentation',
      growthRate: 'Strong'
    }
  ],

  const categories = [...new Set(newServices.map (service => service.category) ) ],

  return (<div className="min - h-screen py-8">
      <div className="max - w-7xl mx - auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font - bold text-white mb-6">
              Revolutionary New Services 2025
            </h1>
            <p className="text-xl text-gray - 400 max - w-4xl mx - auto leading - relaxed mb-8">
              Discover our cutting - edge micro SAAS services, AI - powered
              platforms, and emerging technology solutions.Each service is
              designed with proven ROI, market - leading capabilities, and
              real - world implementation.</p>
            <div className="flex flex - wrap justify - center gap-4">
              {categories.map ( (category, index) => (<motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 bg-gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 border border-cyan - 500 / 30 rounded-full text-cyan - 400 font -medium"
                >
                  {category}
                </motion.div>) ) }
            </div>
          </motion.div>
        </div>

        {/* Services Grid by Category */}
        {categories.map((category, categoryIndex) => (<div key={category} className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font - bold text-white mb-4">{category}</h2>
              <div className="w-24 h-1 bg-gradient - to - r from - cyan - 500 to - blue - 500 mx -auto"></div>
            </motion.div>

            <div className="grid grid - cols - 1 md: anygrid - cols - 2 lg:grid - cols - 3 gap-8">
              {newServices
                .filter(service => service.category === category) .map((service, index) => (<motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray - 800 rounded-xl p - 8 hover:bg-gray - 700 transition - all duration - 300 border border-gray - 700 hover:border-cyan -500 / 30 group"
                  >
                    {/* Service Header */}
                    <div className="flex items - center space - x-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient - to - r ${service.color} rounded-xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font - bold text-white">
                          {service.title}
                        </h3>
                        <div className="flex items - center space - x-2 mt-1">
                          <span className="text-cyan - 400 font - bold text-lg">
                            {service.price}
                          </span>
                          {service.popular && (<span className="px-2 py-1 bg-yellow-500 / 20 text-yellow-400 text-xs rounded-full border border-yellow-500 / 30">
                              Popular
                            </span>) }
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray - 400 mb-6 leading -relaxed">
                      {service.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid - cols - 2 gap-4 mb-6">
                      <div className="text-center p - 3 bg-gray - 700 / 50 rounded-lg">
                        <div className="text-cyan - 400 font - bold text-sm">
                          Market Price
                        </div>
                        <div className="text-white text-xs">
                          {service.marketPrice}
                        </div>
                      </div>
                      <div className="text-center p - 3 bg-gray - 700 / 50 rounded-lg">
                        <div className="text-green - 400 font - bold text-sm">
                          ROI
                        </div>
                        <div className="text-white text-xs">{service.roi}</div>
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="space - y-2 mb-6">
                      {service.features
                        .slice(0, 3) .map((feature, featureIndex) => (<div
                            key={featureIndex}
                            className="flex items - center space - x-2 text-sm text-gray -300"
                          >
                            <CheckCircle className="w-4 h-4 text-cyan -400" />
                            <span>{feature}</span>
                          </div>) ) }
                      {service.features.length > 3 && (<div className="text-sm text-gray - 500 text-center">
                          +{service.features.length-3} more features
                        </div>) }
                    </div>

                    {/* Technology Stack */}
                    <div className="mb-6">
                      <div className="text-sm text-gray - 400 mb-2">
                        Technology Stack:
                      </div>
                      <div className="flex flex - wrap gap-2">
                        {service.technology
                          .slice(0, 3) .map((tech, techIndex) => (<span
                              key={techIndex}
                              className="px-2 py-1 bg-gray - 700 text-gray - 300 text-xs rounded border border-gray -600"
                            >
                              {tech}
                            </span>) ) }
                        {service.technology.length > 3 && (<span className="px-2 py-1 bg-gray - 700 text-gray - 500 text-xs rounded border border-gray -600">
                            +{service.technology.length-3} more
                          </span>) }
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="mb-6 p - 4 bg-gray - 700 / 50 rounded-lg">
                      <div className="grid grid - cols - 2 gap-4 text-xs">
                        <div>
                          <div className="text-gray -400">Market Size</div>
                          <div className="text-white font -medium">
                            {service.marketSize}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray -400">Growth</div>
                          <div className="text-white font -medium">
                            {service.growthRate}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="space - y-3">
                      <Link
                        to={`/services/${service.id}`}
                        className="block w-full text-center bg-gradient - to - r from - cyan - 500 to - blue - 600 text-white px-4 py-3 rounded-lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200 transform hover:scale -105"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="block w-full text-center bg-transparent text-cyan - 400 px-4 py-3 rounded-lg font - semibold border border-cyan - 400 hover:bg-cyan - 400 / 10 transition -colors"
                      >
                        Contact Sales
                      </Link>
                    </div>
                  </motion.div>) ) }
            </div>
          </div>) ) }

        {/* CTA Section */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient - to - r from - purple - 600 to - pink - 600 rounded-2xl p -12"
          >
            <h2 className="text-3xl font - bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple - 100 mb-8 max - w-2xl mx -auto">
              Our revolutionary new services are designed to give you a
              competitive edge in 2025.Get started with a free consultation and
              discover how we can accelerate your digital transformation.</p>

            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <Link
                to="/contact"
                className="inline - flex items - center space - x-2 px-8 py-4 bg-white text-purple - 600 rounded-lg hover:bg-gray - 100 transition - all duration - 200 font - semibold text-lg shadow-lg hover:shadow-xl transform hover:scale -105"
              >
                <span > Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request - quote"
                className="inline - flex items - center space - x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white / 10 transition - all duration - 200 font - semibold text-lg border-2 border-white"
              >
                <span > Request a Quote</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray - 800 rounded-2xl p - 8 border border-gray -700"
          >
            <h3 className="text-2xl font - bold text-white mb-6">Get in Touch</h3>
            <div className="grid grid - cols - 1 md: grid - cols - 3 gap-6">
              <div className="flex items - center justify - center space - x-3 text-gray -300">
                <Phone className="w-5 h-5 text-cyan -400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items - center justify - center space - x-3 text-gray -300">
                <Mail className="w-5 h-5 text-cyan -400" />
                <span > kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items - center justify - center space - x-3 text-gray -300">
                <MapPin className="w-5 h-5 text-cyan -400" />
                <span > 364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline - flex items - center space - x-2 text-cyan - 400 hover:text-cyan - 300 transition -colors"
              >
                <Globe className="w-5 h-5" />
                <span > Visit our website</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>) 
}
