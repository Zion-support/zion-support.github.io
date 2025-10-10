'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, ExternalLink, Award, Users, Clock, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  image: string;
  duration: string;
  team: string;
  challenge: string;
  solution: string;
  results: string[];
  category: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Automation',
      client: 'E-commerce Retailer',
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '6 months',
      team: '12 specialists',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '60% reduction in response time',
        '40% cost savings',
        '95% customer satisfaction rate',
        '24/7 automated support'
      ],
      category: 'AI Solutions'
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Migration',
      client: 'Financial Services Company',
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '4 months',
      team: '8 specialists',
      challenge: 'Legacy system limitations and scalability issues',
      solution: 'Complete cloud migration with microservices architecture',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '3x faster deployment times',
        'Enhanced security compliance'
      ],
      category: 'Cloud Services'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement',
      client: 'Healthcare Organization',
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '3 months',
      team: '6 specialists',
      challenge: 'Security vulnerabilities and compliance requirements',
      solution: 'Comprehensive security audit and implementation',
      results: [
        '100% compliance with HIPAA',
        'Zero security incidents',
        'Automated threat detection',
        'Staff security training completed'
      ],
      category: 'Cybersecurity'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful projects and case studies. See how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI projects, IT solutions, business transformation, client results" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Real success stories from our clients who have transformed their businesses
              </p>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {caseStudies.map((study) => (
                  <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300">
                    <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          {study.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          {study.duration}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                      <p className="text-blue-400 font-medium mb-4">{study.client}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-white mb-2">Challenge:</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-white mb-2">Solution:</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-white mb-2">Results:</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-400">
                          <Users className="w-4 h-4 mr-1" />
                          {study.team}
                        </div>
                        <button className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
                Our Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">$2M+</div>
                  <div className="text-gray-300">Cost Savings Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our proven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Your Project
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View All Services
                </button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;