'use client';
import React from 'react';
import { ArrowRight, ExternalLink, Award, TrendingUp, Users, Clock } from 'lucide-react';
import SEOHead from '../components/EnhancedSEOHead';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Global',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system.',
      results: [
        '85% reduction in response time',
        '60% decrease in operational costs',
        '95% customer satisfaction rate',
        '$2.3M annual savings'
      ],
      duration: '6 months',
      teamSize: '12 experts',
      technologies: ['AI/ML', 'Natural Language Processing', 'Cloud Computing', 'API Integration']
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy on-premise systems limiting scalability and increasing maintenance costs.',
      solution: 'Complete cloud migration with enhanced security and compliance measures.',
      results: [
        '99.9% uptime achieved',
        '40% reduction in infrastructure costs',
        '300% improvement in scalability',
        'Full compliance with financial regulations'
      ],
      duration: '8 months',
      teamSize: '15 experts',
      technologies: ['AWS', 'Azure', 'Kubernetes', 'DevOps', 'Security']
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'Increasing cyber threats targeting patient data and critical healthcare systems.',
      solution: 'Comprehensive cybersecurity framework with AI-powered threat detection.',
      results: [
        'Zero security breaches in 18 months',
        '99.8% threat detection accuracy',
        '50% faster incident response',
        'Full HIPAA compliance maintained'
      ],
      duration: '4 months',
      teamSize: '10 experts',
      technologies: ['Cybersecurity', 'AI Threat Detection', 'Network Security', 'Compliance']
    },
    {
      id: 4,
      title: 'AI-Driven Supply Chain Optimization',
      client: 'ManufacturingCo',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Inefficient supply chain operations leading to delays and increased costs.',
      solution: 'AI-powered demand forecasting and automated inventory management.',
      results: [
        '35% reduction in inventory costs',
        '25% improvement in delivery times',
        '90% accuracy in demand forecasting',
        '$5.2M annual cost savings'
      ],
      duration: '7 months',
      teamSize: '14 experts',
      technologies: ['Machine Learning', 'Predictive Analytics', 'IoT', 'Data Science']
    },
    {
      id: 5,
      title: 'Digital Transformation for Retail',
      client: 'RetailMax',
      industry: 'Retail',
      image: '/api/placeholder/600/400',
      challenge: 'Outdated e-commerce platform limiting growth and customer experience.',
      solution: 'Complete digital transformation with AI-powered personalization.',
      results: [
        '200% increase in online sales',
        '45% improvement in customer engagement',
        '60% reduction in cart abandonment',
        'Seamless omnichannel experience'
      ],
      duration: '10 months',
      teamSize: '20 experts',
      technologies: ['React', 'Node.js', 'AI/ML', 'Microservices', 'Cloud']
    },
    {
      id: 6,
      title: 'Quantum Computing Research Project',
      client: 'Research Institute',
      industry: 'Research & Development',
      image: '/api/placeholder/600/400',
      challenge: 'Complex optimization problems requiring quantum-level computational power.',
      solution: 'Custom quantum algorithms and hybrid classical-quantum systems.',
      results: [
        '1000x speedup for specific algorithms',
        'Breakthrough in optimization techniques',
        'Published 3 research papers',
        'Patent applications filed'
      ],
      duration: '12 months',
      teamSize: '8 experts',
      technologies: ['Quantum Computing', 'Algorithm Development', 'Research', 'Innovation']
    }
  ];

  return (
    <>
      <SEOHead
        title="Case Studies - Zion Tech Group | Success Stories"
        description="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions. Real results, real impact."
        keywords={['case studies', 'success stories', 'AI solutions', 'IT services', 'business transformation', 'client results']}
        canonicalUrl="https://ziontechgroup.com/case-studies"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable results with our AI and IT solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card hologram-card p-6 text-center">
                <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                <p className="text-gray-300">Successful Projects</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">300%</h3>
                <p className="text-gray-300">Average ROI</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">100+</h3>
                <p className="text-gray-300">Happy Clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <article key={study.id} className="cyber-card hologram-card hover:scale-105 transition-all duration-300">
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full mb-3">
                      {study.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-4">Client: {study.client}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-green-400 text-sm">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 border-t border-gray-700 pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{study.teamSize}</span>
                      </div>
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors flex items-center">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our proven AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button text-center"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;