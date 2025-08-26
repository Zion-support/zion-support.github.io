import Head from 'next/head';
import Link from 'next/link';
export default function PartnersPage() {
  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that provide the foundation for our solutions',
      partners: [
        {
          name: 'Microsoft Azure',
          logo: '☁️',
          description: 'Cloud infrastructure and AI services',
          partnership: 'Strategic Cloud Partner',
          benefits: ['Enterprise-grade infrastructure', 'AI and ML services', 'Global reach']
        },
        {
          name: 'Amazon Web Services',
          logo: '🚀',
          description: 'Cloud computing and machine learning',
          partnership: 'Advanced Technology Partner',
          benefits: ['Scalable cloud solutions', 'ML and AI tools', 'Security services']
        },
        {
          name: 'Google Cloud',
          logo: '🔍',
          description: 'AI and data analytics platform',
          partnership: 'Innovation Partner',
          benefits: ['AI and ML capabilities', 'Data analytics', 'Security features']
        }
      ]
    },
    {
      title: 'AI & Machine Learning Partners',
      description: 'Specialized partners in artificial intelligence and machine learning',
      partners: [
        {
          name: 'OpenAI',
          logo: '🤖',
          description: 'Advanced AI models and APIs',
          partnership: 'AI Innovation Partner',
          benefits: ['State-of-the-art AI models', 'Research collaboration', 'API access']
        },
        {
          name: 'Anthropic',
          logo: '🧠',
          description: 'AI safety and research',
          partnership: 'AI Ethics Partner',
          benefits: ['AI safety research', 'Ethical AI development', 'Advanced models']
        },
        {
          name: 'Hugging Face',
          logo: '🤗',
          description: 'Open-source AI models and tools',
          partnership: 'Open Source Partner',
          benefits: ['Model repository', 'Development tools', 'Community access']
        }
      ]
    },
    {
      title: 'Quantum Computing Partners',
      description: 'Partners at the forefront of quantum computing technology',
      partners: [
        {
          name: 'IBM Quantum',
          logo: '⚛️',
          description: 'Quantum computing hardware and software',
          partnership: 'Quantum Technology Partner',
          benefits: ['Quantum hardware access', 'Qiskit framework', 'Research collaboration']
        },
        {
          name: 'Google Quantum AI',
          logo: '🔬',
          description: 'Quantum computing research and development',
          partnership: 'Quantum Research Partner',
          benefits: ['Quantum research', 'Hardware access', 'Algorithm development']
        },
        {
          name: 'Rigetti Computing',
          logo: '🌌',
          description: 'Quantum computing systems',
          partnership: 'Quantum Systems Partner',
          benefits: ['Quantum processors', 'Cloud access', 'Custom solutions']
        }
      ]
    },
    {
      title: 'Cybersecurity Partners',
      description: 'Partners specializing in advanced security solutions',
      partners: [
        {
          name: 'CrowdStrike',
          logo: '🛡️',
          description: 'Endpoint security and threat intelligence',
          partnership: 'Security Technology Partner',
          benefits: ['Threat detection', 'Endpoint protection', 'Intelligence sharing']
        },
        {
          name: 'Palo Alto Networks',
          logo: '🔒',
          description: 'Network security and cloud protection',
          partnership: 'Network Security Partner',
          benefits: ['Network protection', 'Cloud security', 'Threat prevention']
        },
        {
          name: 'SentinelOne',
          logo: '⚡',
          description: 'AI-powered cybersecurity platform',
          partnership: 'AI Security Partner',
          benefits: ['AI-driven protection', 'Automated response', 'Threat hunting']
        }
      ]
    }
  ];
  const partnershipBenefits = [
    {
      title: 'Technology Integration',
      description: 'Seamless integration with leading technology platforms',
      icon: '🔗'
    },
    {
      title: 'Joint Innovation',
      description: 'Collaborative development of cutting-edge solutions',
      icon: '💡'
    },
    {
      title: 'Market Access',
      description: 'Expanded reach through partner networks',
      icon: '🌐'
    },
    {
      title: 'Shared Expertise',
      description: 'Access to specialized knowledge and resources',
      icon: '🧠'
    },
    {
      title: 'Cost Optimization',
      description: 'Reduced development and infrastructure costs',
      icon: '💰'
    },
    {
      title: 'Risk Mitigation',
      description: 'Shared risk in innovative technology development',
      icon: '🛡️'
    }
  ];
  const partnershipTypes = [
    {
      type: 'Strategic Partnership',
      description: 'Long-term collaboration on major initiatives',
      benefits: ['Joint product development', 'Shared go-to-market', 'Technology co-innovation'],
      commitment: 'High'
    },
    {
      type: 'Technology Partnership',
      description: 'Integration and technical collaboration',
      benefits: ['API integration', 'Technical support', 'Joint certifications'],
      commitment: 'Medium'
    },
    {
      type: 'Channel Partnership',
      description: 'Go-to-market and sales collaboration',
      benefits: ['Joint sales efforts', 'Marketing collaboration', 'Revenue sharing'],
      commitment: 'Medium'
    },
    {
      type: 'Research Partnership',
      description: 'Collaborative research and development',
      benefits: ['Joint research projects', 'Shared IP development', 'Academic collaboration'],
      commitment: 'Variable'
    }
  ];
  return (
    <>
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies and explore collaboration opportunities with Zion Tech Group." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Strategic Partnerships
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              Collaborating with industry leaders to deliver cutting-edge technology solutions and drive innovation across all sectors.
            </p>
          </div>
        </section>
        {/* Partnership Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Partner With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We create value through strategic partnerships that benefit all stakeholders
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10 text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Partner Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-20">
          <div className="max-w-7xl mx-auto">
            {partnerCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">{category.title}</h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10 hover:bg-opacity-20 transition-all">
                      <div className="text-4xl mb-4">{partner.logo}</div>
                      <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                      <p className="text-gray-300 mb-3">{partner.description}</p>
                      <div className="text-blue-400 font-medium mb-4">{partner.partnership}</div>
                      
                      <ul className="space-y-2 mb-4">
                        {partner.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                            <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {benefit}
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
        {/* Partnership Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partnership Models</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible partnership options to meet your business objectives
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{type.type}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      type.commitment === 'High' ? 'bg-green-600 text-white' :
                      type.commitment === 'Medium' ? 'bg-yellow-600 text-white' :
                      'bg-blue-600 text-white'
                    }`}>
                      {type.commitment} Commitment
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Become a Partner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Become a Partner
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Ready to explore partnership opportunities? Let's discuss how we can create value together.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">For Technology Companies</h3>
                <p className="text-blue-100 text-sm">
                  Integrate your technology with our AI and quantum computing solutions to reach new markets and customers.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">For Service Providers</h3>
                <p className="text-blue-100 text-sm">
                  Leverage our technology platform to enhance your service offerings and deliver more value to your clients.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/solutions" 
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Partner?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's discuss how we can create innovative solutions together and drive mutual success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Partnership Discussion
              </Link>
              <Link 
                href="/about" 
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}