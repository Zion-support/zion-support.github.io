import React from 'react';
import { CheckCircle, ArrowRight, Users, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  industry: string;
  duration: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image: string;
  featured: boolean;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'ai-automation',
      title: 'AI-Powered Process Automation',
      description: 'Implemented intelligent automation solutions to streamline business operations and reduce manual workload.',
      industry: 'Financial Services',
      duration: '6 months',
      client: 'FinTech Solutions',
      challenge: 'Manual processes causing delays and errors in financial operations.',
      solution: 'Developed AI-powered automation system with machine learning capabilities for process optimization.',
      results: [
        '75% reduction in processing time',
        '90% accuracy improvement',
        '50% cost savings',
        'Zero manual errors'
      ],
      technologies: ['Python', 'Machine Learning', 'RPA', 'Cloud Computing'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Infrastructure Migration',
      description: 'Successfully migrated legacy systems to cloud infrastructure with zero downtime.',
      industry: 'E-commerce',
      duration: '8 months',
      client: 'RetailMax',
      challenge: 'Legacy infrastructure unable to handle growing traffic and scalability requirements.',
      solution: 'Designed and implemented cloud-native architecture with microservices and containerization.',
      results: [
        '99.9% uptime achieved',
        '300% performance improvement',
        '60% cost reduction',
        'Seamless scalability'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 'data-analytics',
      title: 'Advanced Data Analytics Platform',
      description: 'Built comprehensive data analytics platform for real-time insights and decision making.',
      industry: 'Manufacturing',
      duration: '10 months',
      client: 'ManufacturingPro',
      challenge: 'Lack of real-time insights and data-driven decision making capabilities.',
      solution: 'Developed end-to-end data pipeline with real-time analytics and interactive dashboards.',
      results: [
        'Real-time data processing capabilities',
        '50% improvement in operational efficiency',
        'Predictive maintenance implementation',
        '30% reduction in downtime'
      ],
      technologies: ['Big Data', 'Machine Learning', 'Real-time Processing', 'Data Visualization'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 'cybersecurity-audit',
      title: 'Comprehensive Security Audit',
      description: 'Conducted thorough security assessment and implemented robust cybersecurity measures.',
      industry: 'Healthcare',
      duration: '4 months',
      client: 'HealthCare Plus',
      challenge: 'Security vulnerabilities and compliance requirements in healthcare data management.',
      solution: 'Implemented comprehensive security framework with advanced threat detection and compliance tools.',
      results: [
        '100% compliance achieved',
        'Zero security incidents',
        '50% faster threat detection',
        'Enhanced data protection'
      ],
      technologies: ['SIEM', 'Penetration Testing', 'Compliance Tools', 'Encryption'],
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, cloud migration, cybersecurity, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Studies</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses transform with our AI and IT solutions. 
              Real results from real projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View All Projects
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Start Your Project
              </button>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've helped businesses achieve their goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {caseStudies.map((study) => (
                <div key={study.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${study.featured ? 'ring-2 ring-blue-400' : ''}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                    {study.featured && (
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-300 mb-6">{study.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{study.client}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{study.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    Read Full Case Study
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;