import Head from 'next/head';
import Link from 'next/link';

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Advanced artificial intelligence solutions for business automation and decision-making',
      services: [
        { name: 'AI-Powered Decision Engine', description: 'Intelligent decision-making systems for complex business scenarios', link: '/services/ai-powered-decision-engine' },
        { name: 'AI Customer Success Platform', description: 'Automated customer success and retention optimization', link: '/services/ai-customer-success-platform' },
        { name: 'AI Sales Intelligence Platform', description: 'Sales automation and intelligence enhancement', link: '/services/ai-sales-intelligence-platform' },
        { name: 'AI Financial Planning Platform', description: 'Intelligent financial planning and analysis', link: '/services/ai-financial-planning-platform' },
        { name: 'Intelligent Content Automation', description: 'AI-driven content creation and management', link: '/services/intelligent-content-automation-platform' },
        { name: 'Intelligent HR Analytics', description: 'Human resources analytics and optimization', link: '/services/intelligent-hr-analytics-platform' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud-native platforms and infrastructure solutions',
      services: [
        { name: 'Quantum Cloud Infrastructure', description: 'Next-generation cloud infrastructure with quantum computing capabilities', link: '/services/quantum-cloud-infrastructure-platform' },
        { name: 'Serverless Platforms', description: 'Modern serverless architecture and deployment solutions', link: '/services/serverless-platforms' },
        { name: 'Container Orchestration', description: 'Kubernetes and container management solutions', link: '/services/container-orchestration' },
        { name: 'Microservices Architecture', description: 'Scalable microservices design and implementation', link: '/services/microservices-architecture' }
      ]
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for modern digital threats',
      services: [
        { name: 'Quantum Cybersecurity Platform', description: 'Advanced quantum-resistant security solutions', link: '/services/quantum-cybersecurity-platform' },
        { name: 'Zero Trust Security', description: 'Comprehensive zero trust architecture implementation', link: '/services/zero-trust-security' },
        { name: 'Threat Intelligence', description: 'Real-time threat detection and response systems', link: '/services/threat-intelligence' },
        { name: 'Compliance Management', description: 'Regulatory compliance and audit solutions', link: '/services/compliance-management' }
      ]
    },
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing and optimization services',
      services: [
        { name: 'Quantum Internet Protocol', description: 'Revolutionary quantum internet infrastructure', link: '/services/quantum-internet-protocol-2029' },
        { name: 'Quantum Financial Trading', description: 'Quantum-powered financial trading algorithms', link: '/services/quantum-financial-trading' },
        { name: 'Quantum Supply Chain Optimization', description: 'Supply chain optimization using quantum algorithms', link: '/services/quantum-supply-chain-optimizer' },
        { name: 'Quantum IoT Solutions', description: 'Internet of Things with quantum computing integration', link: '/services/quantum-iot' }
      ]
    },
    {
      title: 'Industry Solutions',
      description: 'Specialized solutions for specific industry verticals',
      services: [
        { name: 'Real Estate Technology', description: 'Innovative solutions for real estate industry', link: '/services/real-estate-technology-solutions' },
        { name: 'Entertainment & Media', description: 'Digital transformation for media companies', link: '/services/entertainment-media-solutions' },
        { name: 'E-commerce Solutions', description: 'Advanced e-commerce and retail technology', link: '/services/ecommerce-returns-management' },
        { name: 'Healthcare Technology', description: 'AI-powered healthcare solutions and platforms', link: '/services/healthcare-technology' }
      ]
    },
    {
      title: 'Business Solutions',
      description: 'Comprehensive business process optimization and automation',
      services: [
        { name: 'Intelligent Project Management', description: 'AI-enhanced project management suite', link: '/services/intelligent-project-management-suite' },
        { name: 'Invoice Studio', description: 'Automated invoice processing and management', link: '/services/invoice-studio' },
        { name: 'IT Asset Discovery', description: 'Automated IT asset management and discovery', link: '/services/it-asset-discovery-agent' },
        { name: 'Keyword Research Engine', description: 'Advanced SEO and keyword research tools', link: '/services/keyword-research-engine' }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of AI, cloud, cybersecurity, and quantum computing services designed to transform your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge technology solutions designed to accelerate your business transformation.
            </p>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">{category.title}</h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all border border-white border-opacity-10">
                      <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <Link 
                        href={service.link}
                        className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
                      >
                        Learn More 
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our services can transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/pricing" 
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
