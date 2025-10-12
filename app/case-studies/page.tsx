import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      client: 'RetailTech Solutions',
      industry: 'E-commerce',
      challenge: 'Needed to improve product recommendations and reduce cart abandonment',
      solution: 'Implemented machine learning algorithms for personalized recommendations and predictive analytics',
      results: [
        '40% increase in conversion rates',
        '25% reduction in cart abandonment',
        '60% improvement in customer satisfaction'
      ],
      image: '/images/case-study-1.jpg',
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'React']
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinSecure Bank',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Migrated to AWS cloud with enhanced security and scalability',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        'Enhanced security compliance'
      ],
      image: '/images/case-study-2.jpg',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement',
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      challenge: 'Protecting sensitive patient data and ensuring HIPAA compliance',
      solution: 'Implemented comprehensive security framework with AI-powered threat detection',
      results: [
        'Zero security breaches',
        '100% HIPAA compliance',
        'Real-time threat detection'
      ],
      image: '/images/case-study-3.jpg',
      technologies: ['Cybersecurity', 'AI', 'SIEM', 'Compliance']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT solution implementations across various industries." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with our AI and IT solutions
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">CS</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">{study.industry}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="inline-block bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our expertise.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Get Started Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;