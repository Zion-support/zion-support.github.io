import Head from 'next/head';
import { Service } from '../types';

export default function Services() {
  const services: Service[] = [
    {
      id: 'ai-automation',
      title: 'AI Automation Platform',
      description: 'Intelligent automation solutions that streamline business processes and reduce manual work.',
      category: 'AI Services',
      features: ['Process Automation', 'Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Computer Vision', 'Robotic Process Automation'],
      pricing: {
        basic: 999,
        pro: 2999,
        enterprise: 9999
      }
    },
    {
      id: 'cloud-optimization',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions designed to optimize performance and reduce costs.',
      category: 'IT Solutions',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Cost Optimization', 'Disaster Recovery', 'Security Hardening'],
      pricing: {
        basic: 1999,
        pro: 4999,
        enterprise: 14999
      }
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Development',
      description: 'Focused software solutions that address specific business needs with minimal complexity.',
      category: 'Micro SaaS',
      features: ['Rapid Development', 'User-friendly Design', 'API Integration', 'Scalable Architecture', 'Multi-tenant Support', 'Analytics Dashboard'],
      pricing: {
        basic: 2999,
        pro: 7999,
        enterprise: 19999
      }
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      category: 'Security',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Penetration Testing', 'Security Audits', 'Compliance Management', 'Incident Response'],
      pricing: {
        basic: 1499,
        pro: 3999,
        enterprise: 9999
      }
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      category: 'Analytics',
      features: ['Data Visualization', 'Predictive Modeling', 'Real-time Dashboards', 'ETL Processes', 'Machine Learning', 'Custom Reports'],
      pricing: {
        basic: 2499,
        pro: 5999,
        enterprise: 12999
      }
    },
    {
      id: 'blockchain',
      title: 'Blockchain Solutions',
      description: 'Cutting-edge blockchain technology for secure, transparent, and decentralized applications.',
      category: 'Blockchain',
      features: ['Smart Contracts', 'DeFi Protocols', 'NFT Marketplaces', 'Token Development', 'DApp Development', 'Blockchain Consulting'],
      pricing: {
        basic: 4999,
        pro: 12999,
        enterprise: 29999
      }
    }
  ];

  const categories = ['All', 'AI Services', 'IT Solutions', 'Micro SaaS', 'Security', 'Analytics', 'Blockchain'];

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI automation, cloud infrastructure, micro SaaS development, cybersecurity, and blockchain solutions." />
        <meta name="keywords" content="AI services, cloud computing, micro SaaS, cybersecurity, data analytics, blockchain, software development" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20"></div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                From AI automation to blockchain development, we provide end-to-end technology services 
                that transform businesses and drive innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.pricing && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-green-400 mb-3 uppercase tracking-wide">Pricing</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Basic:</span>
                          <span className="text-white">${service.pricing.basic.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Pro:</span>
                          <span className="text-white">${service.pricing.pro.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Enterprise:</span>
                          <span className="text-white">${service.pricing.enterprise.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 hover:bg-blue-400 hover:text-slate-950 rounded-lg font-semibold transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}