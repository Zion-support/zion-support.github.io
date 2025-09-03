import React from 'react';
import Layout from '../components/Layout';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      category: 'AI & Machine Learning',
      title: 'Intelligent Automation Solutions',
      description: 'Transform your business processes with AI-powered automation, predictive analytics, and intelligent decision-making systems.',
      features: ['Process Automation', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
      pricing: 'Starting at $5,000'
    },
    {
      category: 'Cloud & Infrastructure',
      title: 'Scalable Cloud Architecture',
      description: 'Build robust, scalable cloud infrastructure that grows with your business using AWS, Azure, and Google Cloud.',
      features: ['Cloud Migration', 'Auto-scaling', 'DevOps Implementation', 'Cost Optimization'],
      pricing: 'Starting at $3,000'
    },
    {
      category: 'Web & Mobile',
      title: 'Modern Application Development',
      description: 'Create stunning web and mobile applications with cutting-edge technologies and user-centric design.',
      features: ['React/Next.js Development', 'Mobile App Development', 'API Development', 'UI/UX Design'],
      pricing: 'Starting at $8,000'
    },
    {
      category: 'Data & Analytics',
      title: 'Data-Driven Insights Platform',
      description: 'Unlock the power of your data with comprehensive analytics, reporting, and business intelligence solutions.',
      features: ['Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Custom Dashboards'],
      pricing: 'Starting at $4,000'
    },
    {
      category: 'Cybersecurity',
      title: 'Comprehensive Security Solutions',
      description: 'Protect your digital assets with enterprise-grade security solutions and compliance frameworks.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response'],
      pricing: 'Starting at $2,000'
    },
    {
      category: 'Blockchain & Web3',
      title: 'Decentralized Solutions',
      description: 'Explore the future of technology with blockchain development, smart contracts, and Web3 applications.',
      features: ['Smart Contract Development', 'DeFi Solutions', 'NFT Platforms', 'Blockchain Integration'],
      pricing: 'Starting at $10,000'
    }
  ];

  return (
    <Layout 
      title="Solutions - Zion Tech Group" 
      description="Comprehensive technology solutions for modern businesses. From AI and cloud architecture to cybersecurity and blockchain development."
    >
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technology Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology solutions tailored to your business needs. From AI and machine learning to cloud architecture and cybersecurity, we help you stay ahead in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                    {solution.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-blue-600">{solution.pricing}</span>
                  <a 
                    href="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every business is unique. We specialize in creating custom technology solutions that perfectly fit your specific requirements and business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Custom Quote
              </a>
              <a 
                href="/services" 
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionsPage;