import type { NextPage } from 'next',
import Head from 'next/head',
import Link from 'next/link',
const SolutionsPage: NextPage = () => {
  const solutions = [
    // Healthcare Solutions
    {
      category: &quot;Healthcare & Life Sciences&quot;,
      solutions: [
        {
          name: &quot;AI-Powered Medical Imaging&quot;,
          description: &quot;Advanced AI algorithms for medical image analysis, diagnosis assistance, and treatment planning.&quot;,
          useCases: [&quot;Radiology departments&quot;, &quot;Medical research&quot;, &quot;Telemedicine platforms&quot;, &quot;Clinical trials&quot;],
          benefits: [&quot;Improved diagnostic accuracy&quot;, &quot;Faster diagnosis&quot;, &quot;Reduced costs&quot;, &quot;Better patient outcomes&quot;],
          pricing: &quot;$15,000 - $75,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/healthcare-ai&quot;,
          icon: &quot;🏥&quot;
        },
        {
          name: &quot;Healthcare Data Analytics Platform&quot;,
          description: &quot;Comprehensive healthcare analytics solution for patient data, operational efficiency, and predictive insights.&quot;,
          useCases: [&quot;Hospitals&quot;, &quot;Clinics&quot;, &quot;Health insurance&quot;, &quot;Pharmaceutical companies&quot;],
          benefits: [&quot;Patient care optimization&quot;, &quot;Operational efficiency&quot;, &quot;Cost reduction&quot;, &quot;Compliance management&quot;],
          pricing: &quot;$25,000 - $100,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/healthcare-analytics&quot;,
          icon: &quot;📊&quot;
        },
        {
          name: &quot;Telemedicine Platform&quot;,
          description: &quot;Secure, HIPAA-compliant telemedicine solution with AI-powered triage and appointment scheduling.&quot;,
          useCases: [&quot;Primary care&quot;, &quot;Specialist consultations&quot;, &quot;Mental health&quot;, &quot;Rural healthcare&quot;],
          benefits: [&quot;Improved access to care&quot;, &quot;Reduced travel costs&quot;, &quot;Better patient engagement&quot;, &quot;Scalable operations&quot;],
          pricing: &quot;$20,000 - $80,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/telemedicine&quot;,
          icon: &quot;💻&quot;
        }
      ]
    },
    // Financial Services Solutions
    {
      category: &quot;Financial Services & FinTech&quot;,
      solutions: [
        {
          name: &quot;AI-Powered Risk Assessment&quot;,
          description: &quot;Machine learning-based risk assessment and fraud detection for financial institutions.&quot;,
          useCases: [&quot;Banks&quot;, &quot;Credit unions&quot;, &quot;Insurance companies&quot;, &quot;Investment firms&quot;],
          benefits: [&quot;Reduced fraud losses&quot;, &quot;Better risk management&quot;, &quot;Compliance automation&quot;, &quot;Improved customer experience&quot;],
          pricing: &quot;$30,000 - $120,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/financial-risk-ai&quot;,
          icon: &quot;🏦&quot;
        },
        {
          name: &quot;Blockchain Payment Solutions&quot;,
          description: &quot;Secure, fast, and cost-effective blockchain-based payment and settlement systems.&quot;,
          useCases: [&quot;Cross-border payments&quot;, &quot;Supply chain finance&quot;, &quot;Digital assets&quot;, &quot;Smart contracts&quot;],
          benefits: [&quot;Faster settlements&quot;, &quot;Lower transaction costs&quot;, &quot;Enhanced security&quot;, &quot;Transparency&quot;],
          pricing: &quot;$40,000 - $150,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/blockchain-payments&quot;,
          icon: &quot;⛓️&quot;
        },
        {
          name: &quot;RegTech Compliance Platform&quot;,
          description: &quot;Automated regulatory compliance and reporting platform for financial institutions.&quot;,
          useCases: [&quot;Anti-money laundering&quot;, &quot;KYC verification&quot;, &quot;Regulatory reporting&quot;, &quot;Audit trails&quot;],
          benefits: [&quot;Automated compliance&quot;, &quot;Reduced manual work&quot;, &quot;Real-time monitoring&quot;, &quot;Audit readiness&quot;],
          pricing: &quot;$35,000 - $100,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/regtech-compliance&quot;,
          icon: &quot;📋&quot;
        }
      ]
    },
    // Manufacturing & Industry 4.0
    {
      category: &quot;Manufacturing & Industry 4.0&quot;,
      solutions: [
        {
          name: &quot;IoT Manufacturing Platform&quot;,
          description: &quot;Comprehensive IoT solution for smart manufacturing, predictive maintenance, and quality control.&quot;,
          useCases: [&quot;Production lines&quot;, &quot;Quality control&quot;, &quot;Predictive maintenance&quot;, &quot;Supply chain management&quot;],
          benefits: [&quot;Reduced downtime&quot;, &quot;Improved quality&quot;, &quot;Cost optimization&quot;, &quot;Real-time monitoring&quot;],
          pricing: &quot;$50,000 - $200,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/iot-manufacturing&quot;,
          icon: &quot;🏭&quot;
        },
        {
          name: &quot;AI Quality Control System&quot;,
          description: &quot;Computer vision and AI-powered quality control for manufacturing processes.&quot;,
          useCases: [&quot;Automotive&quot;, &quot;Electronics&quot;, &quot;Food processing&quot;, &quot;Pharmaceuticals&quot;],
          benefits: [&quot;Zero defect production&quot;, &quot;24/7 monitoring&quot;, &quot;Cost reduction&quot;, &quot;Quality consistency&quot;],
          pricing: &quot;$40,000 - $150,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/ai-quality-control&quot;,
          icon: &quot;🔍&quot;
        },
        {
          name: &quot;Digital Twin Platform&quot;,
          description: &quot;Digital twin technology for manufacturing optimization and predictive analytics.&quot;,
          useCases: [&quot;Process optimization&quot;, &quot;Predictive maintenance&quot;, &quot;Training simulation&quot;, &quot;Performance analysis&quot;],
          benefits: [&quot;Process optimization&quot;, &quot;Reduced costs&quot;, &quot;Better decision making&quot;, &quot;Risk mitigation&quot;],
          pricing: &quot;$60,000 - $250,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/digital-twin&quot;,
          icon: &quot;🔄&quot;
        }
      ]
    },
    // Retail & E-commerce Solutions
    {
      category: &quot;Retail & E-commerce&quot;,
      solutions: [
        {
          name: &quot;AI-Powered Customer Analytics&quot;,
          description: &quot;Advanced customer behavior analysis and personalized marketing automation platform.&quot;,
          useCases: [&quot;Online retail&quot;, &quot;Brick-and-mortar stores&quot;, &quot;Marketplaces&quot;, &quot;Subscription services&quot;],
          benefits: [&quot;Increased sales&quot;, &quot;Better customer retention&quot;, &quot;Personalized experiences&quot;, &quot;Marketing optimization&quot;],
          pricing: &quot;$20,000 - $80,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/retail-analytics&quot;,
          icon: &quot;🛒&quot;
        },
        {
          name: &quot;Omnichannel Commerce Platform&quot;,
          description: &quot;Unified commerce platform for seamless customer experience across all channels.&quot;,
          useCases: [&quot;Multi-channel retail&quot;, &quot;B2B commerce&quot;, &quot;Marketplace operations&quot;, &quot;Inventory management&quot;],
          benefits: [&quot;Unified customer experience&quot;, &quot;Increased sales&quot;, &quot;Operational efficiency&quot;, &quot;Better inventory management&quot;],
          pricing: &quot;$35,000 - $120,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/omnichannel-commerce&quot;,
          icon: &quot;🔄&quot;
        },
        {
          name: &quot;AR/VR Shopping Experience&quot;,
          description: &quot;Immersive shopping experiences with augmented and virtual reality technology.&quot;,
          useCases: [&quot;Furniture retail&quot;, &quot;Fashion&quot;, &quot;Home improvement&quot;, &quot;Automotive&quot;],
          benefits: [&quot;Enhanced customer engagement&quot;, &quot;Reduced returns&quot;, &quot;Better product visualization&quot;, &quot;Competitive advantage&quot;],
          pricing: &quot;$45,000 - $180,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/ar-vr-shopping&quot;,
          icon: &quot;🥽&quot;
        }
      ]
    },
    // Education & Training Solutions
    {
      category: &quot;Education & Training&quot;,
      solutions: [
        {
          name: &quot;AI-Powered Learning Platform&quot;,
          description: &quot;Personalized learning platform with AI-driven content recommendations and adaptive assessments.&quot;,
          useCases: [&quot;K-12 education&quot;, &quot;Higher education&quot;, &quot;Corporate training&quot;, &quot;Professional development&quot;],
          benefits: [&quot;Personalized learning&quot;, &quot;Better engagement&quot;, &quot;Improved outcomes&quot;, &quot;Scalable delivery&quot;],
          pricing: &quot;$25,000 - $100,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/ai-learning&quot;,
          icon: &quot;🎓&quot;
        },
        {
          name: &quot;Virtual Reality Training&quot;,
          description: &quot;Immersive VR training solutions for high-risk industries and skill development.&quot;,
          useCases: [&quot;Healthcare training&quot;, &quot;Industrial safety&quot;, &quot;Military training&quot;, &quot;Skill development&quot;],
          benefits: [&quot;Safe training environment&quot;, &quot;Cost-effective&quot;, &quot;Realistic scenarios&quot;, &quot;Better retention&quot;],
          pricing: &quot;$35,000 - $150,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/vr-training&quot;,
          icon: &quot;🥽&quot;
        },
        {
          name: &quot;Learning Analytics Dashboard&quot;,
          description: &quot;Comprehensive analytics platform for tracking learning outcomes and performance metrics.&quot;,
          useCases: [&quot;Educational institutions&quot;, &quot;Training organizations&quot;, &quot;Corporate L&D&quot;, &quot;Government agencies&quot;],
          benefits: [&quot;Performance tracking&quot;, &quot;Data-driven decisions&quot;, &quot;ROI measurement&quot;, &quot;Continuous improvement&quot;],
          pricing: &quot;$15,000 - $60,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/learning-analytics&quot;,
          icon: &quot;📊&quot;
        }
      ]
    },
    // Government & Public Sector
    {
      category: &quot;Government & Public Sector&quot;,
      solutions: [
        {
          name: &quot;Smart City Platform&quot;,
          description: &quot;Comprehensive smart city solution for urban planning, traffic management, and citizen services.&quot;,
          useCases: [&quot;Urban planning&quot;, &quot;Traffic management&quot;, &quot;Public safety&quot;, &quot;Citizen services&quot;],
          benefits: [&quot;Improved efficiency&quot;, &quot;Better citizen experience&quot;, &quot;Cost reduction&quot;, &quot;Data-driven decisions&quot;],
          pricing: &quot;$100,000 - $500,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/smart-city&quot;,
          icon: &quot;🏙️&quot;
        },
        {
          name: &quot;Government Data Analytics&quot;,
          description: &quot;Advanced analytics platform for government data analysis and decision support.&quot;,
          useCases: [&quot;Policy analysis&quot;, &quot;Resource allocation&quot;, &quot;Performance monitoring&quot;, &quot;Public reporting&quot;],
          benefits: [&quot;Better policy decisions&quot;, &quot;Transparency&quot;, &quot;Efficiency improvement&quot;, &quot;Public trust&quot;],
          pricing: &quot;$50,000 - $200,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/government-analytics&quot;,
          icon: &quot;📊&quot;
        },
        {
          name: &quot;Digital Identity Platform&quot;,
          description: &quot;Secure digital identity and authentication platform for government services.&quot;,
          useCases: [&quot;Citizen services&quot;, &quot;Voting systems&quot;, &quot;Healthcare access&quot;, &quot;Financial services&quot;],
          benefits: [&quot;Secure access&quot;, &quot;Reduced fraud&quot;, &quot;Better service delivery&quot;, &quot;Cost savings&quot;],
          pricing: &quot;$75,000 - $300,000&quot;,
          link: &quot;https://ziontechgroup.com/solutions/digital-identity&quot;,
          icon: &quot;🆔&quot;
        }      ]
    }
  ],

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-gray-50 to-purple-50&quot;>
      <Head>
        <title>Industry Solutions - Zion Tech Group | Tailored Technology Solutions</title>
        <meta name=&quot;description&quot; content=&quot;Discover industry-specific technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors. Tailored solutions for your business needs.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;healthcare solutions, fintech, manufacturing 4.0, retail technology, education tech, government solutions, industry solutions&quot; />
      </Head>
      
      <main className=&quot;container mx-auto px-4 py-16&quot;>
        {/* Header Section */}
        <div className=&quot;text-center mb-16&quot;>
          <h1 className=&quot;text-5xl font-bold text-gray-900 mb-6&quot;>            Industry-Specific Solutions
          </h1>
          <p className=&quot;text-xl text-gray-600 max-w-4xl mx-auto&quot;>
            We deliver tailored technology solutions designed specifically for your industry. 
            From healthcare AI to smart manufacturing, _our solutions address real business challenges 
            and drive measurable results.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className=&quot;space-y-16&quot;>
          {solutions.map((category, categoryIndex) => (
            <div key={categoryIndex} className=&quot;bg-white rounded-2xl shadow-xl p-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-8 text-center&quot;>
                {category.category}
              </h2>
              <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                {category.solutions.map((solution, solutionIndex) => (
                  <div key={solutionIndex} className=&quot;bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-100&quot;>
                    <div className=&quot;text-4xl mb-4&quot;>{solution.icon}</div>
                    <h3 className=&quot;text-xl font-bold text-gray-900 mb-3&quot;>
                      {solution.name}
                    </h3>
                    <p className=&quot;text-gray-600 mb-4 leading-relaxed&quot;>
                      {solution.description}
                    </p>
                    
                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;font-semibold text-gray-800 mb-2&quot;>Use Cases:</h4>
                      <ul className=&quot;space-y-1&quot;>
                        {solution.useCases.map((useCase, useCaseIndex) => (
                          <li key={useCaseIndex} className=&quot;text-sm text-gray-600 flex items-center&quot;>
                            <span className=&quot;text-purple-500 mr-2&quot;>•</span>
                            {useCase}                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;font-semibold text-gray-800 mb-2&quot;>Key Benefits:</h4>
                      <ul className=&quot;space-y-1&quot;>
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className=&quot;text-sm text-gray-600 flex items-center&quot;>
                            <span className=&quot;text-green-500 mr-2&quot;>✓</span>
                            {benefit}                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className=&quot;mb-4&quot;>
                      <span className=&quot;inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold&quot;>
                        Starting at {solution.pricing}                      </span>
                    </div>

                    <Link 
                      href={solution.link}
                      className=&quot;inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full text-center&quot;                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className=&quot;bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mt-16 text-center text-white&quot;>
          <h2 className=&quot;text-3xl font-bold mb-4&quot;>            Success Stories
          </h2>
          <p className=&quot;text-xl mb-6 opacity-90&quot;>
            See how our solutions have transformed businesses across industries
          </p>
          <div className=&quot;grid md:grid-cols-3 gap-6 mb-8&quot;>
            <div>
              <h3 className=&quot;font-semibold mb-2&quot;>🏥 Healthcare Provider</h3>
              <p>40% reduction in diagnostic time with AI-powered imaging</p>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-2&quot;>🏭 Manufacturing Company</h3>
              <p>60% decrease in downtime with IoT predictive maintenance</p>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-2&quot;>🏦 Financial Institution</h3>
              <p>80% reduction in fraud losses with AI risk assessment</p>
            </div>
          </div>
          <Link 
            href=&quot;/contact&quot;
            className=&quot;bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors&quot;
          >
            View Case Studies
          </Link>
        </div>

        {/* Custom Solutions Section */}
        <div className=&quot;mt-16 text-center&quot;>
          <h2 className=&quot;text-3xl font-bold text-gray-900 mb-8&quot;>            Need a Custom Solution?
          </h2>
          <p className=&quot;text-xl text-gray-600 mb-8 max-w-3xl mx-auto&quot;>
            Can't find exactly what you need? Our expert team can design and develop 
            custom solutions tailored to your specific requirements and industry challenges.
          </p>
          <div className=&quot;grid md:grid-cols-3 gap-6 mb-8&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🔧</div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Custom Development</h3>
              <p className=&quot;text-gray-600&quot;>Tailored solutions built from the ground up</p>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🔗</div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>System Integration</h3>
              <p className=&quot;text-gray-600&quot;>Seamless integration with existing systems</p>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-4xl mb-4&quot;>📚</div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Training & Support</h3>
              <p className=&quot;text-gray-600&quot;>Comprehensive training and ongoing support</p>
            </div>
          </div>
          <Link 
            href=&quot;/contact&quot;
            className=&quot;bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors&quot;
          >
            Discuss Custom Solutions
          </Link>
        </div>

        {/* Contact Section */}
        <div className=&quot;mt-16 text-center&quot;>
          <h2 className=&quot;text-3xl font-bold text-gray-900 mb-8&quot;>            Ready to Transform Your Business?
          </h2>
          <p className=&quot;text-xl text-gray-600 mb-8 max-w-3xl mx-auto&quot;>
            Let's discuss how our industry-specific solutions can address your unique challenges 
            and drive measurable business outcomes.
          </p>
          <div className=&quot;flex justify-center gap-4 mb-8&quot;>
            <Link 
              href="/contact"
              className="bg-purple-600 hover: bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"            >
              Schedule Consultation
            </Link>
            <Link 
              href=&quot;/contact&quot;
              className=&quot;bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors&quot;
            >
              Request Demo
            </Link>
          </div>
          <div className=&quot;grid md:grid-cols-3 gap-6 text-sm text-gray-600&quot;>
            <div>
              <h3 className=&quot;font-semibold mb-2&quot;>📱 Mobile</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-2&quot;>✉️ Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className=&quot;font-semibold mb-2&quot;>🌐 Website</h3>
              <p>https://ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
},

export default SolutionsPage,