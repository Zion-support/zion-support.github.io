import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'AI-Powered Customer Service Transformation',
      company: 'Global E-commerce Retailer',
      industry: 'Retail & E-commerce',
      challenge: 'High customer service costs and inconsistent response times across multiple channels',
      solution: 'Implemented AI-powered chatbot system with natural language processing and automated ticket routing',
      results: [
        '85% reduction in customer service response time',
        '60% decrease in customer service costs',
        '95% customer satisfaction rate maintained',
        '24/7 customer support availability'
      ],
      technologies: ['AI/ML', 'Natural Language Processing', 'Cloud Infrastructure', 'API Integration'],
      duration: '3 months',
      roi: '340%',
      featured: true
    },
    {
      title: 'Quantum Computing for Financial Risk Management',
      company: 'International Investment Bank',
      industry: 'Finance',
      challenge: 'Complex risk calculations taking days to complete, limiting real-time decision making',
      solution: 'Developed quantum computing algorithms for portfolio optimization and risk assessment',
      results: [
        '99.9% faster risk calculations',
        'Real-time portfolio optimization',
        '15% improvement in risk-adjusted returns',
        'Enhanced regulatory compliance'
      ],
      technologies: ['Quantum Computing', 'Financial Algorithms', 'Risk Modeling', 'High-Performance Computing'],
      duration: '6 months',
      roi: '280%',
      featured: false
    },
    {
      title: 'Cybersecurity Overhaul for Healthcare Provider',
      company: 'Regional Hospital Network',
      industry: 'Healthcare',
      challenge: 'Vulnerable legacy systems and increasing cyber threats targeting patient data',
      solution: 'Implemented zero-trust security architecture with AI-powered threat detection',
      results: [
        '100% compliance with HIPAA regulations',
        '90% reduction in security incidents',
        'Real-time threat detection and response',
        'Enhanced patient data protection'
      ],
      technologies: ['Zero Trust Security', 'AI Threat Detection', 'Compliance Management', 'Data Encryption'],
      duration: '4 months',
      roi: '420%',
      featured: false
    },
    {
      title: 'Cloud Migration and DevOps Transformation',
      company: 'Manufacturing Technology Company',
      industry: 'Manufacturing',
      challenge: 'Outdated on-premise infrastructure limiting scalability and innovation',
      solution: 'Complete cloud migration with modern DevOps practices and containerization',
      results: [
        '70% reduction in infrastructure costs',
        '10x faster deployment cycles',
        '99.9% uptime achieved',
        'Enhanced disaster recovery capabilities'
      ],
      technologies: ['Cloud Migration', 'DevOps', 'Containerization', 'Infrastructure as Code'],
      duration: '5 months',
      roi: '310%',
      featured: false
    },
    {
      title: 'AI-Powered Supply Chain Optimization',
      company: 'Global Logistics Provider',
      industry: 'Transportation & Logistics',
      challenge: 'Inefficient route planning and inventory management leading to delays and increased costs',
      solution: 'AI-driven supply chain optimization platform with predictive analytics',
      results: [
        '25% reduction in delivery times',
        '30% decrease in operational costs',
        'Improved inventory accuracy to 99.5%',
        'Enhanced customer satisfaction scores'
      ],
      technologies: ['AI/ML', 'Predictive Analytics', 'Supply Chain Management', 'Real-time Tracking'],
      duration: '4 months',
      roi: '380%',
      featured: false
    },
    {
      title: 'Quantum-Safe Cybersecurity Implementation',
      company: 'Government Defense Contractor',
      industry: 'Government & Defense',
      challenge: 'Need for future-proof cybersecurity against quantum computing threats',
      solution: 'Implemented quantum-resistant encryption and post-quantum cryptography protocols',
      results: [
        'Future-proof security against quantum threats',
        'Enhanced data protection standards',
        'Compliance with government security requirements',
        'Improved competitive positioning'
      ],
      technologies: ['Quantum Cryptography', 'Post-Quantum Algorithms', 'Security Protocols', 'Compliance Management'],
      duration: '7 months',
      roi: '250%',
      featured: false
    }
  ];

  const industries = [
    'All Industries',
    'Retail & E-commerce',
    'Finance',
    'Healthcare',
    'Manufacturing',
    'Transportation & Logistics',
    'Government & Defense',
    'Technology'
  ];

  const featuredCaseStudy = caseStudies.find(study => study.featured);

  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Discover how Zion Tech Group has helped businesses transform their operations with cutting-edge AI, quantum computing, and cybersecurity solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              Real results from real businesses. See how our cutting-edge technology solutions have transformed operations and driven measurable outcomes.
            </p>
          </div>
        </section>

        {/* Featured Case Study */}
        {featuredCaseStudy && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 border border-white border-opacity-10">
                <div className="mb-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured Case Study
                  </span>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{featuredCaseStudy.title}</h2>
                    <div className="text-blue-400 font-semibold mb-2">{featuredCaseStudy.company}</div>
                    <div className="text-gray-400 mb-4">{featuredCaseStudy.industry}</div>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2 text-blue-400">Challenge:</h3>
                      <p className="text-gray-300">{featuredCaseStudy.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2 text-blue-400">Solution:</h3>
                      <p className="text-gray-300">{featuredCaseStudy.solution}</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3 text-blue-400">Results:</h3>
                      <ul className="space-y-2">
                        {featuredCaseStudy.results.map((result, index) => (
                          <li key={index} className="text-gray-300 flex items-center">
                            <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white bg-opacity-10 rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-400">{featuredCaseStudy.roi}</div>
                        <div className="text-sm text-gray-400">ROI</div>
                      </div>
                      <div className="bg-white bg-opacity-10 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-400">{featuredCaseStudy.duration}</div>
                        <div className="text-sm text-gray-400">Duration</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Industry Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    industry === 'All Industries'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.filter(study => !study.featured).map((study, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10 hover:bg-opacity-20 transition-all">
                  <div className="mb-4">
                    <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs text-gray-300">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                  <div className="text-blue-400 font-medium mb-2">{study.company}</div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-blue-400 text-sm">Challenge:</h4>
                    <p className="text-gray-300 text-sm line-clamp-3">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-blue-400 text-sm">Solution:</h4>
                    <p className="text-gray-300 text-sm line-clamp-3">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-blue-400 text-sm">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, resultIndex) => (
                        <li key={resultIndex} className="text-gray-300 text-sm flex items-center">
                          <svg className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-400">
                      <span className="font-semibold text-green-400">{study.roi}</span> ROI
                    </div>
                    <div className="text-sm text-gray-400">{study.duration}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-blue-600 bg-opacity-20 text-blue-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-400 hover:text-blue-300 font-medium text-sm"
                  >
                    Read Full Case Study →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">What Our Clients Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-300 mb-4">
                  "Zion Tech Group transformed our customer service operations with AI, delivering results that exceeded our expectations."
                </p>
                <div className="font-semibold">- Sarah Johnson, CTO</div>
                <div className="text-sm text-gray-400">Global E-commerce Retailer</div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-10">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-300 mb-4">
                  "Their quantum computing expertise gave us a competitive edge in financial risk management."
                </p>
                <div className="font-semibold">- Michael Chen, Head of Risk</div>
                <div className="text-sm text-gray-400">International Investment Bank</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our solutions can transform your business and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="/services" 
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
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