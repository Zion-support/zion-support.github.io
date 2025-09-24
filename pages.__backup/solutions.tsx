import Head from 'next/head';
import Link from 'next/link';

export default function SolutionsPage() {
  const industrySolutions = [
    {
      industry: 'Healthcare',
      description: 'AI-powered diagnosticspatient care optimizationand secure health data management',
      solutions: [
        'AI Diagnostic Assistant',
        'Patient Care Optimization',
        'Health Data Security',
        'Medical Imaging AI',
        'Drug Discovery Platform'
      ],
      icon: '🏥',
      color: 'from-green-50o0 to-emerald-60o0'
    },
    {
      industry: 'Finance',
      description: 'Quantum-powered trading algorithmsfraud detectionand risk management',
      solutions: [
        'Quantum Trading Algorithms',
        'AI Fraud Detection',
        'Risk Management Systems',
        'Regulatory Compliance',
        'Portfolio Optimization'
      ],
      icon: '💼',
      color: 'from-blue-50o0 to-cyan-60o0'
    },
    {
      industry: 'Manufacturing',
      description: 'Smart manufacturingpredictive maintenanceand supply chain optimization',
      solutions: [
        'Predictive Maintenance',
        'Supply Chain Optimization',
        'Quality Control AI',
        'Energy Management',
        'Production Planning'
      ],
      icon: '🏭',
      color: 'from-orange-50o0 to-red-60o0'
    },
    {
      industry: 'Retail & E-commerce',
      description: 'Personalized shopping experiencesinventory managementand customer analytics',
      solutions: [
        'Personalized Recommendations',
        'Inventory Management',
        'Customer Analytics',
        'Demand Forecasting',
        'Customer Service AI'
      ],
      icon: '🛍️',
      color: 'from-purple-50o0 to-pink-60o0'
    },
    {
      industry: 'Education',
      description: 'Adaptive learning platformstudent performance analyticsand virtual classrooms',
      solutions: [
        'Adaptive Learning',
        'Student Analytics',
        'Virtual Classrooms',
        'Content Personalization',
        'Assessment Automation'
      ],
      icon: '🎓',
      color: 'from-indigo-50o0 to-blue-60o0'
    },
    {
      industry: 'Transportation & Logistics',
      description: 'Route optimizationfleet managementand predictive logistics',
      solutions: [
        'Route Optimization',
        'Fleet Management',
        'Predictive Logistics',
        'Traffic Analysis',
        'Supply Chain Visibility'
      ],
      icon: '🚚',
      color: 'from-yellow-50o0 to-orange-60o0'
    }
  ];

  const technologySolutions = [
    {
      category: 'AI & Machine Learning',
      description: 'Advanced artificial intelligence solutions for business automation and decision-making',
      solutions: [
        {
          name: 'AI Decision Engine',
          description: 'Intelligent decision-making systems for complex business scenarios',
          features: ['Real-time Analysis'Predictive Modeling'Automated Decision Making']
        },
        {
          name: 'Natural Language Processing',
          description: 'Advanced text and speech processing capabilities',
          features: ['Text Analysis'Sentiment Analysis'Language Translation']
        },
        {
          name: 'Computer Vision',
          description: 'Image and video analysis for automation and quality control',
          features: ['Object Detection'Quality Control'Process Automation']
        }
      ]
    },
    {
      category: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions for complex optimization problems',
      solutions: [
        {
          name: 'Quantum Optimization',
          description: 'Solve complex optimization problems with quantum algorithms',
          features: ['Supply Chain Optimization'Financial Modeling'Logistics Planning']
        },
        {
          name: 'Quantum Machine Learning',
          description: 'Enhanced machine learning with quantum computing power',
          features: ['Quantum Neural Networks'Enhanced Pattern Recognition'Faster Training']
        },
        {
          name: 'Quantum Cryptography',
          description: 'Unbreakable encryption using quantum principles',
          features: ['Quantum Key Distribution'Secure Communication'Future-Proof Security']
        }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      description: 'Scalable cloud-native platforms and infrastructure solutions',
      solutions: [
        {
          name: 'Multi-Cloud Management',
          description: 'Unified management across multiple cloud providers',
          features: ['Cost Optimization'Performance Monitoring'Security Management']
        },
        {
          name: 'Serverless Architecture',
          description: 'Modern serverless computing for scalable applications',
          features: ['Auto-scaling'Pay-per-use'Reduced Maintenance']
        },
        {
          name: 'Edge Computing',
          description: 'Distributed computing for low-latency applications',
          features: ['Local Processing'Reduced Latency'Bandwidth Optimization']
        }
      ]
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'AI-powered chatbots and virtual assistants that provide 24/7 customer support',
      benefits: ['24/7 Availability'Instant Response'Cost Reduction'Improved Satisfaction'],
      industries: ['Retail'Healthcare'Finance'Technology']
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast trends and behaviors to make proactive business decisions',
      benefits: ['Risk Mitigation'Opportunity Identification'Resource Optimization'Competitive Advantage'],
      industries: ['Manufacturing'Finance'Healthcare'Transportation']
    },
    {
      title: 'Cybersecurity Enhancement',
      description: 'Advanced threat detection and prevention using AI and quantum technologies',
      benefits: ['Real-time Protection'Threat Intelligence'Compliance Assurance'Incident Response'],
      industries: ['All Industries'Government'Finance'Healthcare']
    },
    {
      title: 'Process Automation',
      description: 'Streamline operations and reduce manual work through intelligent automation',
      benefits: ['Efficiency Gains'Error Reduction'Cost Savings'Scalability'],
      industries: ['Manufacturing'Finance'Healthcare'Retail']
    }
  ];

  return (
    <>
      <Head>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover industry-specific solutions and use cases powered by Zion Tech Group's cutting-edge AIquantum computingand cybersecurity technologies."  />
        <meta name="viewport" content="width=device-widthinitial-scale=1"  />
        <link rel="icon" href="/favicon.ico"  />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-90o0 via-blue-90o0 to-gray-90o0 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 via-blue-40o0 to-purple-40o0 bg-clip-text text-transparent">
              Industry Solutions
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-30o0 max-w-4xl mx-auto">
              Transform your business with industry-specific solutions powered by cutting-edge AIquantum computingand cybersecurity technologies.
            </p>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">
                Tailored solutions designed to address the unique challenges and opportunities in your industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((industryindex) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10 hover:bg-opacity-20 transition-all">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{industry.industry}</h3>
                  <p className="text-gray-30o0 mb-4">{industry.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {industry.solutions.map((solutionIndex) => (
                      <div key={solutionIndex} className="text-sm text-gray-40o0 bg-white bg-opacity-5 rounded px-2 py-1">
                        {solution}
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="text-blue-40o0 hover:text-blue-30o0 font-medium text-sm"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technology Solutions</h2>
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">
                Core technology platforms that power our industry solutions
              </p>
            </div>
            
            {technologySolutions.map((categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-12">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">{category.category}</h3>
                  <p className="text-lg text-gray-30o0 max-w-3xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.solutions.map((solutionIndex) => (
                    <div key={solutionIndex} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10">
                      <h4 className="text-lg font-semibold mb-3">{solution.name}</h4>
                      <p className="text-gray-30o0 mb-4">{solution.description}</p>
                      
                      <ul className="space-y-2 mb-4">
                        {solution.features.map((featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-40o0 flex items-center">
                            <svg className="w-4 h-4 text-green-40o0 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"  />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Common Use Cases</h2>
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">
                Real-world applications of our technology solutions across industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCaseindex) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10">
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-30o0 mb-4">{useCase.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-blue-40o0">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {useCase.benefits.map((benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-30o0 flex items-center">
                          <svg className="w-4 h-4 text-green-40o0 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"  />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-40o0">Applicable Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.industries.map((industryIndex) => (
                        <span key={industryIndex} className="text-xs bg-blue-60o0 bg-opacity-20 text-blue-30o0 px-2 py-1 rounded">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-60o0">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-10o0">
              Let's discuss how our solutions can address your specific challenges and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-60o0 hover:bg-gray-10o0 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="/services" 
                className="border border-white text-white hover:bg-white hover:text-blue-60o0 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}