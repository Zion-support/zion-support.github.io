'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, Users, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration: string;
  teamSize: string;
  technologies: string[];
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and inconsistent response times across multiple channels.',
      solution: 'Implemented an AI-powered chatbot system with natural language processing and machine learning capabilities.',
      results: [
        'Reduced customer service costs by 40%',
        'Improved response time by 75%',
        'Increased customer satisfaction to 95%',
        'Handled 80% of inquiries without human intervention'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '6 months',
      teamSize: '8 developers',
      technologies: ['AI/ML', 'NLP', 'React', 'Node.js', 'AWS']
    },
    {
      id: '2',
      title: 'Cloud Migration and Infrastructure Optimization',
      company: 'Global Finance Inc.',
      industry: 'Financial Services',
      challenge: 'Legacy on-premises infrastructure causing scalability issues and high maintenance costs.',
      solution: 'Migrated entire infrastructure to AWS with microservices architecture and automated CI/CD pipelines.',
      results: [
        'Reduced infrastructure costs by 60%',
        'Improved system reliability to 99.9%',
        'Decreased deployment time by 90%',
        'Enhanced security compliance'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '8 months',
      teamSize: '12 engineers',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Python']
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement and Compliance',
      company: 'Healthcare Plus',
      industry: 'Healthcare',
      challenge: 'Need to meet HIPAA compliance requirements and protect sensitive patient data.',
      solution: 'Implemented comprehensive security framework with encryption, access controls, and monitoring systems.',
      results: [
        'Achieved 100% HIPAA compliance',
        'Reduced security incidents by 95%',
        'Implemented zero-trust architecture',
        'Enhanced data protection measures'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
      teamSize: '6 security specialists',
      technologies: ['Security', 'Compliance', 'Encryption', 'Monitoring', 'AWS']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformation projects across various industries." />
        <meta name="keywords" content="case studies, success stories, technology implementation, digital transformation, AI solutions" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-blue-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge technology solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <div className="text-6xl">📊</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                        {study.industry}
                      </span>
                      <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                        {study.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {study.title}
                    </h3>
                    
                    <p className="text-blue-400 font-medium mb-4">
                      {study.company}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                        <p className="text-sm text-gray-400">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                        <p className="text-sm text-gray-400">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {study.teamSize}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {study.duration}
                        </div>
                      </div>
                      
                      <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our proven technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  View Our Services
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CaseStudiesPage;