import Head from 'next/head';
import Link from 'next/link';
import { Building2, TrendingUp, Shield, Users, Zap, Globe } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'Financial Services AI Transformation',
      client: 'Global Investment Bank',
      industry: 'Financial Services',
      challenge: 'Manual risk assessment processes taking 3-4 days, high error rates, and compliance gaps',
      solution: 'Implemented AI-powered risk assessment platform with real-time monitoring and automated compliance reporting',
      results: [
        '90% reduction in processing time',
        '99.5% accuracy in risk assessments',
        '$2.3M annual cost savings',
        '100% regulatory compliance'
      ],
      technologies: ['Machine Learning', 'Natural Language Processing', 'Cloud Infrastructure', 'API Integration'],
      duration: '8 months',
      team: '6 engineers, 2 data scientists, 1 project manager',
      image: '/images/case-studies/financial-ai.jpg'
    },
    {
      id: 2,
      title: 'Healthcare Data Security Enhancement',
      client: 'Regional Hospital Network',
      industry: 'Healthcare',
      challenge: 'HIPAA compliance issues, outdated security protocols, and growing cyber threats',
      solution: 'Deployed quantum-resistant encryption, zero-trust architecture, and AI-powered threat detection',
      results: [
        'Zero security breaches in 18 months',
        '100% HIPAA compliance achieved',
        '60% reduction in security incidents',
        '$1.8M saved in potential breach costs'
      ],
      technologies: ['Quantum Cryptography', 'Zero-Trust Security', 'AI Threat Detection', 'Blockchain'],
      duration: '12 months',
      team: '8 security experts, 4 healthcare specialists',
      image: '/images/case-studies/healthcare-security.jpg'
    },
    {
      id: 3,
      title: 'Manufacturing Supply Chain Optimization',
      client: 'Automotive Manufacturer',
      industry: 'Manufacturing',
      challenge: 'Supply chain disruptions, inventory overstock, and inefficient logistics',
      solution: 'AI-driven supply chain optimization with predictive analytics and autonomous inventory management',
      results: [
        '35% reduction in inventory costs',
        '45% improvement in delivery times',
        '$5.2M annual savings',
        '99.9% order fulfillment rate'
      ],
      technologies: ['Predictive Analytics', 'IoT Sensors', 'Machine Learning', 'Cloud Computing'],
      duration: '10 months',
      team: '5 engineers, 3 data analysts, 2 logistics experts',
      image: '/images/case-studies/manufacturing-ai.jpg'
    },
    {
      id: 4,
      title: 'Retail Customer Experience Transformation',
      client: 'National Retail Chain',
      industry: 'Retail',
      challenge: 'Declining customer satisfaction, inefficient operations, and digital transformation needs',
      solution: 'Omnichannel AI platform with personalized recommendations and automated customer service',
      results: [
        '40% increase in customer satisfaction',
        '25% boost in average order value',
        '50% reduction in customer service costs',
        '3x improvement in response times'
      ],
      technologies: ['AI Chatbots', 'Personalization Engine', 'Omnichannel Integration', 'Analytics'],
      duration: '14 months',
      team: '10 developers, 4 UX designers, 3 data scientists',
      image: '/images/case-studies/retail-cx.jpg'
    },
    {
      id: 5,
      title: 'Smart City Infrastructure Development',
      client: 'Metropolitan City Government',
      industry: 'Government',
      challenge: 'Inefficient traffic management, high energy consumption, and outdated city services',
      solution: 'Comprehensive smart city platform with IoT sensors, AI analytics, and automated systems',
      results: [
        '30% reduction in traffic congestion',
        '25% decrease in energy consumption',
        '40% improvement in emergency response times',
        '$3.5M annual operational savings'
      ],
      technologies: ['IoT Networks', '5G Infrastructure', 'AI Analytics', 'Smart Grid'],
      duration: '18 months',
      team: '15 engineers, 5 city planners, 3 data scientists',
      image: '/images/case-studies/smart-city.jpg'
    },
    {
      id: 6,
      title: 'Quantum Computing Research Platform',
      client: 'Research University',
      industry: 'Education/Research',
      challenge: 'Limited access to quantum computing resources for research and education',
      solution: 'Cloud-based quantum computing platform with educational tools and research workflows',
      results: [
        '5x increase in quantum research projects',
        '300+ students trained in quantum computing',
        '15 published research papers',
        '$2.1M in research grants secured'
      ],
      technologies: ['Quantum Computing', 'Cloud Platform', 'Educational Tools', 'API Development'],
      duration: '24 months',
      team: '8 quantum physicists, 6 software engineers, 4 educators',
      image: '/images/case-studies/quantum-research.jpg'
    }
  ];

  const industries = [
    { name: 'Financial Services', count: 12, icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Healthcare', count: 8, icon: <Shield className="w-5 h-5" /> },
    { name: 'Manufacturing', count: 15, icon: <Building2 className="w-5 h-5" /> },
    { name: 'Retail', count: 10, icon: <Users className="w-5 h-5" /> },
    { name: 'Government', count: 6, icon: <Globe className="w-5 h-5" /> },
    { name: 'Education', count: 4, icon: <Zap className="w-5 h-5" /> }
  ];

  const stats = [
    { label: 'Successful Projects', value: '150+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Average ROI', value: '320%' },
    { label: 'Industries Served', value: '25+' }
  ];

  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore real-world success stories and transformation projects from Zion Tech Group. See how we've helped organizations achieve breakthrough results with AI, cloud, and quantum solutions." />
        <meta name="keywords" content="case studies, success stories, AI transformation, cloud solutions, quantum computing, client results" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real-world success stories and transformation projects from Zion Tech Group" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies - Zion Tech Group" />
        <meta name="twitter:description" content="Real-world success stories and transformation projects" />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Case Studies",
              "description": "Real-world success stories and transformation projects from Zion Tech Group",
              "url": "https://ziontechgroup.com/case-studies",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": caseStudies.map((study, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "CreativeWork",
                    "name": study.title,
                    "description": study.challenge,
                    "author": {
                      "@type": "Organization",
                      "name": "Zion Tech Group"
                    }
                  }
                }))
              }
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success Stories That
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Transform</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped organizations achieve breakthrough results with cutting-edge AI, cloud, and quantum solutions.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                    <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
                  <div className="text-blue-600 mb-3 flex justify-center">{industry.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-2xl font-bold text-blue-600">{industry.count}+</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Case Studies</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-xl font-semibold mb-2">{study.client}</h3>
                      <p className="text-sm opacity-90">{study.industry}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="text-sm text-green-600 flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>Duration: {study.duration}</span>
                      <span>Team: {study.team}</span>
                    </div>
                    
                    <Link 
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Read Full Case Study
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the hundreds of organizations that have achieved breakthrough results with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Schedule a Consultation
              </Link>
              <Link 
                href="/services"
                className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}