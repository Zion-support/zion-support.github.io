'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, User, Building, CheckCircle, Star } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Healthcare Analytics',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      description: 'Implemented comprehensive AI analytics platform to improve patient outcomes and operational efficiency.',
      challenge: 'Legacy systems unable to process large volumes of patient data efficiently.',
      solution: 'Developed custom AI platform with machine learning algorithms for predictive analytics.',
      results: [
        '40% improvement in patient diagnosis accuracy',
        '60% reduction in data processing time',
        '25% increase in operational efficiency',
        '99.9% system uptime achieved'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'React', 'PostgreSQL'],
      duration: '6 months',
      team: '8 developers'
    },
    {
      title: 'Cloud Migration for E-commerce',
      client: 'ShopTech Solutions',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      description: 'Successfully migrated legacy e-commerce platform to modern cloud infrastructure.',
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Migrated entire infrastructure to AWS with microservices architecture and automated CI/CD pipelines.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster deployment cycles',
        'Enhanced security compliance'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Node.js', 'MongoDB'],
      duration: '4 months',
      team: '6 developers'
    },
    {
      title: 'Cybersecurity Enhancement for Finance',
      client: 'SecureBank Corp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      description: 'Implemented comprehensive cybersecurity solutions to protect sensitive financial data.',
      challenge: 'Increasing cyber threats and regulatory compliance requirements.',
      solution: 'Deployed multi-layered security architecture with AI-powered threat detection.',
      results: [
        '100% compliance with financial regulations',
        'Zero security breaches',
        '80% reduction in false positives',
        '24/7 automated threat monitoring'
      ],
      technologies: ['Python', 'SIEM', 'AWS Security', 'Machine Learning', 'Docker'],
      duration: '5 months',
      team: '10 developers'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies. See how we've helped businesses transform with cutting-edge technology." />
        <meta name="keywords" content="case studies, AI solutions, IT consulting, cloud migration, cybersecurity, business transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Building className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">{study.industry}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">{study.duration}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-400">{study.team}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{study.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Building className="w-4 h-4" />
                      <span>{study.client}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{study.industry}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 3).map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;