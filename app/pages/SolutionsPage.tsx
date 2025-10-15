import React from 'react';
import SEOHead from '../components/SEOHead';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      category: 'AI Solutions',
      title: 'Artificial Intelligence',
      description: 'Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Automation'],
      link: '/ai-solutions',
      icon: '🤖'
    },
    {
      category: 'IT Services',
      title: 'Information Technology',
      description: 'Comprehensive IT services including infrastructure management, technical support, and system integration.',
      features: ['Infrastructure Management', 'Technical Support', 'System Integration', 'IT Consulting', 'Cloud Services'],
      link: '/it-solutions',
      icon: '💻'
    },
    {
      category: 'Cybersecurity',
      title: 'Security Solutions',
      description: 'Protect your business with advanced cybersecurity solutions and threat detection systems.',
      features: ['Security Audits', 'Threat Detection', 'Data Protection', 'Compliance Management', 'Security Training'],
      link: '/cybersecurity',
      icon: '🔒'
    },
    {
      category: 'Cloud Infrastructure',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and management services for modern businesses.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Monitoring', 'Backup Solutions', 'Multi-cloud Management'],
      link: '/cloud-solutions',
      icon: '☁️'
    },
    {
      category: 'Micro SaaS',
      title: 'Micro SaaS Development',
      description: 'Custom micro SaaS applications tailored to your specific business requirements.',
      features: ['Custom Development', 'API Integration', 'Scalable Architecture', 'User Management', 'Analytics'],
      link: '/micro-saas-solutions',
      icon: '🚀'
    },
    {
      category: '5G Solutions',
      title: '5G Technology',
      description: 'Next-generation 5G technology solutions for enhanced connectivity and performance.',
      features: ['5G Implementation', 'Edge Computing', 'IoT Integration', 'Network Optimization', 'Mobile Applications'],
      link: '/5g-solutions',
      icon: '📡'
    }
  ];

  return (
    <>
      <SEOHead
        title="Solutions - Zion Tech Group"
        description="Comprehensive technology solutions including AI, IT services, cybersecurity, cloud infrastructure, and digital transformation for modern businesses."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Our Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive growth in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {solution.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <span className="text-blue-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={solution.link} 
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Every business is unique. Let's discuss your specific needs and create a tailored solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Get a Custom Quote
              </a>
              <a 
                href="/about" 
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsPage;