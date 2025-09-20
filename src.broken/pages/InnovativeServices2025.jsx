import { Link  } from 'react-router-dom',
export default function Page() {
,
    {
      category: 'Advanced AI & Machine Learning',
      description:
        'Enterprise - grade artificial intelligence solutions that drive innovation and competitive advantage',
      services: [{
          name: 'AI - Powered Fraud Detection',
          description:
            'Next - generation fraud prevention platform using machine learning to detect and prevent fraudulent activities in real - time.',
          features: [
            'Real - time transaction monitoringBehavioral pattern recognition',
            'Machine learning risk scoringAutomated fraud alerts',
            'Comprehensive fraud analytics'
          ],
          benefits: ['99.9% fraud detection accuracyReal - time prevention capabilities',
            'Reduced false positives by 80%Compliance with regulatory requirements',
            'Significant cost savings from fraud prevention'
          ],
          pricing: '$3,000 - $25,000 / month',
          marketPosition:
            'Leading AI fraud detection for financial institutions and e - commerce',
          useCases: ['BanksCredit card companies',
            'E - commerce platformsInsurance companies'
          ],
          competitors: ['SiftSignifyd', 'Forter'],
          competitiveAdvantage:
            'Advanced ML algorithms, real - time processing, and industry - leading accuracy rates'
        },
        {
          name: 'AI Supply Chain Optimization',
          description:
            'Intelligent supply chain platform that optimizes operations, reduces costs, and improves efficiency through AI - powered analytics.',
          features: ['Predictive demand forecastingRoute optimization algorithms',
            'Supplier performance analyticsReal - time supply chain visibility',
            'Risk assessment and mitigation'
          ],
          benefits: ['25% reduction in supply chain costsImproved delivery performance',
            'Enhanced supplier relationshipsReal - time risk monitoring',
            'Data - driven decision making'
          ],
          pricing: '$4,000 - $30,000 / month',
          marketPosition:
            'Advanced supply chain optimization for global enterprises',
          useCases: ['ManufacturingLogistics', 'RetailHealthcare'],
          competitors: ['LlamasoftAnyLogic', 'FlexSim'],
          competitiveAdvantage:
            'AI - powered optimization, real - time visibility, and comprehensive risk management'
        },
        {
          name: 'AI - Powered Healthcare',
          description:
            'Revolutionary healthcare AI platform that improves diagnosis accuracy, patient care, and operational efficiency.',
          features: ['Medical imaging analysisDiagnostic assistance algorithms',
            'Patient monitoring systemsDrug discovery optimization',
            'Healthcare analytics dashboard'
          ],
          benefits: ['Improved diagnostic accuracy by 30%Enhanced patient care quality',
            'Reduced healthcare costsFaster treatment decisions',
            'Better resource utilization'
          ],
          pricing: '$8,000 - $60,000 / month',
          marketPosition:
            'Leading healthcare AI for hospitals and medical institutions',
          useCases: ['HospitalsMedical clinics',
            'Research institutionsPharmaceutical companies'
          ],
          competitors: ['IBM Watson HealthGoogle Health',
            'Microsoft Healthcare'
          ],
          competitiveAdvantage:
            'Advanced medical AI, comprehensive healthcare integration, and regulatory compliance'
        }
      ]
    },
    {
      category: 'Emerging Technology Solutions',
      description:
        'Cutting - edge technology services that position businesses for the future',
      services: [{
          name: 'Quantum Computing Consulting',
          description:
            'Expert guidance on quantum computing strategy, implementation, and business transformation for forward - thinking organizations.',
          features: [
            'Quantum computing strategy developmentUse case identification and validation',
            'Vendor selection and evaluationImplementation roadmap planning',
            'Quantum workforce development'
          ],
          benefits: ['Future - ready technology strategyCompetitive advantage in emerging tech',
            'Innovation leadership positioningStrategic technology planning',
            'Expert guidance and support'
          ],
          pricing: '$5,000 - $25,000 / month',
          marketPosition:
            'Premier quantum computing consulting for Fortune 500 companies',
          useCases: ['Financial servicesPharmaceutical',
            'LogisticsResearch institutions'
          ],
          competitors: ['McKinseyBCG', 'Deloitte'],
          competitiveAdvantage:
            'Deep quantum expertise, practical implementation experience, and strategic business focus'
        },
        {
          name: 'Metaverse Development',
          description:
            'Complete metaverse platform development including VR / AR experiences, 3D environments, and interactive digital spaces.',
          features: ['Virtual reality platform developmentAugmented reality applications',
            '3D modeling and designInteractive experience creation',
            'Multi - user platform support'
          ],
          benefits: ['Innovation leadership in emerging techNew revenue streams and business models',
            'Enhanced customer engagementCompetitive differentiation',
            'Future - ready technology infrastructure'
          ],
          pricing: '$8,000 - $60,000 / month',
          marketPosition:
            'Leading metaverse development for brands and enterprises',
          useCases: ['Brand marketingVirtual events',
            'Training and educationEntertainment'
          ],
          competitors: ['MetaMicrosoft', 'Unity'],
          competitiveAdvantage:
            'Custom development, rapid prototyping, and comprehensive platform solutions'
        },
        {
          name: 'Web3 Development',
          description:
            'Complete Web3 development services including decentralized applications, DeFi platforms, and blockchain integration.',
          features: ['Decentralized application developmentSmart contract development',
            'DeFi platform creationNFT marketplace development',
            'Blockchain integration services'
          ],
          benefits: ['Decentralized business modelsInnovation in financial services',
            'New revenue opportunitiesTechnology leadership',
            'Future - proof architecture'
          ],
          pricing: '$6,000 - $45,000 / month',
          marketPosition:
            'Expert Web3 development for fintech and innovative businesses',
          useCases: ['Financial servicesGaming',
            'Art and collectiblesSupply chain'
          ],
          competitors: ['ConsensysChainlink Labs', 'Alchemy'],
          competitiveAdvantage:
            'Full - stack Web3 development, rapid deployment, and comprehensive blockchain expertise'
        }
      ]
    },
    {
      category: 'Advanced Cybersecurity Solutions',
      description:
        'Next - generation security solutions that protect against evolving cyber threats',
      services: [{
          name: 'Zero Trust Architecture',
          description:
            'Modern security architecture implementation that eliminates implicit trust and continuously validates every access request.',
          features: [
            'Identity verification and authenticationContinuous access monitoring',
            'Network segmentationThreat detection and response',
            'Compliance and audit support'
          ],
          benefits: ['Enhanced security postureReduced attack surface',
            'Improved complianceBetter visibility and control',
            'Adaptive security architecture'
          ],
          pricing: '$4,500 - $35,000 / month',
          marketPosition:
            'Leading zero trust implementation for enterprise organizations',
          useCases: ['Financial servicesHealthcare',
            'GovernmentTechnology companies'
          ],
          competitors: ['Palo Alto NetworksCisco', 'Microsoft'],
          competitiveAdvantage:
            'Comprehensive implementation, rapid deployment, and ongoing optimization support'
        },
        {
          name: 'AI - Powered Cybersecurity',
          description:
            'Next - generation cybersecurity platform that uses artificial intelligence to detect and respond to threats in real - time.',
          features: ['AI - powered threat detectionBehavioral analysis and monitoring',
            'Automated incident responsePredictive security analytics',
            'Continuous learning and adaptation'
          ],
          benefits: ['Proactive threat preventionZero - day attack protection',
            'Automated response capabilitiesReduced false positives',
            'Continuous security improvement'
          ],
          pricing: '$5,000 - $40,000 / month',
          marketPosition:
            'Advanced AI cybersecurity for high-security environments',
          useCases: ['Critical infrastructureFinancial institutions',
            'HealthcareGovernment'
          ],
          competitors: ['DarktraceCrowdStrike', 'SentinelOne'],
          competitiveAdvantage:
            'Advanced AI algorithms, real - time protection, and comprehensive threat intelligence'
        }
      ]
    }
  ],
  return (<div className="min - h-screen bg-gradient - to - br from - slate - 900 via - blue - 900 to - slate - 900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max - w-7xl mx - auto text-center">
          <h1 className="text-4xl md:text-6xl font - bold mb-6">
            Innovative{' '}
            <span className="text-transparent bg-clip - text bg-gradient - to - r from - blue - 400 to - cyan -400">
              {' '}
              Services 2025
            </span>
          </h1>
          <p className="text-xl text-gray - 300 mb-8 max - w-4xl mx -auto">
            Discover our cutting - edge portfolio of AI - powered micro SAAS
            solutions, advanced technology services, and emerging tech
            innovations designed to transform your business and drive
            competitive advantage
          </p>
          <div className="flex flex - col sm:flex - row gap-4 justify - center mb-8">
            <a
              href="tel:+13024640950"
              className="inline - flex items - center px-8 py-3 bg-gradient - to - r from - blue - 600 to - cyan - 600 text-white font - semibold rounded-lg hover:from - blue - 700 hover:to - cyan - 700 transition - all duration -300"
            >
              Call Us: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline - flex items - center px-8 py-3 border border-gray - 600 text-white font - semibold rounded-lg hover:bg-gray - 800 transition - all duration -300"
            >
              Email Us
            </a>
          </div>
          <div className="text-sm text-gray - 400 space - y-1">
            <p>
              🌐 Website:{' '}
              <a
                href="https://ziontechgroup.com"
                className="text-blue - 400 hover:text-blue -300"
              >
                ziontechgroup.com
              </a>
            </p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {innovativeServices.map ( (category, categoryIndex) => (<section
          key={categoryIndex}
          className={`py-20 px-4 sm:px-6 lg:px-8 ${categoryIndex % 2 === 0 ? 'bg-white / 5' : ''}`}
        >
          <div className="max - w-7xl mx -auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font - bold text-white mb-4">
                {category.category}
              </h2>
              <p className="text-xl text-gray - 300 max - w-3xl mx -auto">
                {category.description}
              </p>
            </div>

            <div className="space - y-12">
              {category.services.map((service, serviceIndex) => (<div
                  key={serviceIndex}
                  className="bg-white / 10 backdrop - blur - lg rounded-xl p - 8 border border-white / 20 hover:border-white / 40 transition - all duration -300"
                >
                  <div className="grid grid - cols - 1 lg:grid - cols - 2 gap-8">
                    {/* Service Details */}
                    <div>
                      <h3 className="text-2xl font - bold text-white mb-4">
                        {service.name}
                      </h3>
                      <p className="text-gray - 300 mb-6 text-lg">
                        {service.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font - semibold text-blue - 400 mb-3">
                          Key Features:
                        </h4>
                        <ul className="space - y-2">
                          {service.features.map((feature, idx) => (<li
                              key={idx}
                              className="text-gray - 300 flex items -start"
                            >
                              <span className="w-2 h-2 bg-blue - 400 rounded-full mr-3 mt-2 flex - shrink -0"></span>
                              {feature}
                            </li>) ) }
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font - semibold text-green - 400 mb-3">
                          Key Benefits:
                        </h4>
                        <ul className="space - y-2">
                          {service.benefits.map((benefit, idx) => (<li
                              key={idx}
                              className="text-gray - 300 flex items -start"
                            >
                              <span className="w-2 h-2 bg-green - 400 rounded-full mr-3 mt-2 flex - shrink -0"></span>
                              {benefit}
                            </li>) ) }
                        </ul>
                      </div>
                    </div>

                    {/* Market Information */}
                    <div className="space - y-6">
                      <div className="bg-white / 5 rounded-lg p -6">
                        <h4 className="text-lg font - semibold text-yellow-400 mb-3">
                          Pricing & Market Position
                        </h4>
                        <div className="space - y-3">
                          <div>
                            <span className="text-sm text-gray -400">
                              Pricing:
                            </span>
                            <p className="text-white font - semibold text-lg">
                              {service.pricing}
                            </p>
                          </div>
                          <div>
                            <span className="text-sm text-gray -400">
                              Market Position:
                            </span>
                            <p className="text-gray -300">
                              {service.marketPosition}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white / 5 rounded-lg p -6">
                        <h4 className="text-lg font - semibold text-purple - 400 mb-3">
                          Business Information
                        </h4>
                        <div className="space - y-3">
                          <div>
                            <span className="text-sm text-gray -400">
                              Use Cases:
                            </span>
                            <p className="text-gray -300">
                              {service.useCases.join() }
                            </p>
                          </div>
                          <div>
                            <span className="text-sm text-gray -400">
                              Competitors:
                            </span>
                            <p className="text-gray -300">
                              {service.competitors.join(', ') }
                            </p>
                          </div>
                          <div>
                            <span className="text-sm text-gray -400">
                              Competitive Advantage:
                            </span>
                            <p className="text-gray -300">
                              {service.competitiveAdvantage}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>) ) }
            </div>
          </div>
        </section>) ) }

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient - to - r from - blue - 900 / 50 to - cyan -900 / 50">
        <div className="max - w-4xl mx - auto text-center">
          <h2 className="text-3xl md:text-4xl font - bold text-white mb-6">
            Ready to Transform Your Business with Innovation?
          </h2>
          <p className="text-xl text-gray - 300 mb-8">
            Let's discuss how our cutting - edge services can position your
            business for success in 2025 and beyond
          </p>
          <div className="flex flex - col sm:flex - row gap-4 justify - center mb-6">
            <Link
              to="/contact"
              className="inline - flex items - center px-8 py-3 bg-gradient - to - r from - blue - 600 to - cyan - 600 text-white font - semibold rounded-lg hover:from - blue - 700 hover:to - cyan - 700 transition - all duration -300"
            >
              Start Your Innovation Journey
            </Link>
            <a
              href="tel:+13024640950"
              className="inline - flex items - center px-8 py-3 border border-gray - 600 text-white font - semibold rounded-lg hover:bg-gray - 800 transition - all duration -300"
            >
              Call: +1 302 464 0950
            </a>
          </div>
          <div className="text-sm text-gray - 400 space - y-1">
            <p>
              📧 Email:{' '}
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="text-blue - 400 hover:text-blue -300"
              >
                kleber@ziontechgroup.com
              </a>
            </p>
            <p>
              🌐 Website:{' '}
              <a
                href="https://ziontechgroup.com"
                className="text-blue - 400 hover:text-blue -300"
              >
                ziontechgroup.com
              </a>
            </p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>) ,
},
