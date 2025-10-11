'use client';
import React from 'react';
import { CheckCircle, ArrowRight, Users, Award, Clock, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  team: string;
  image: string;
  featured: boolean;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Platform',
      description: 'Revolutionized customer support with intelligent automation and natural language processing.',
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High volume of customer inquiries leading to long response times and customer dissatisfaction.',
      solution: 'Implemented AI-powered chatbot system with machine learning capabilities for automated responses.',
      results: ['75% reduction in response time', '90% customer satisfaction rate', '60% cost savings'],
      technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
      duration: '6 months',
      team: '8 developers',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration Strategy',
      description: 'Successfully migrated legacy systems to cloud infrastructure with zero downtime.',
      company: 'FinanceFlow Inc',
      industry: 'Financial Services',
      challenge: 'Outdated on-premise infrastructure causing performance issues and security concerns.',
      solution: 'Designed and executed comprehensive cloud migration strategy using AWS and Azure.',
      results: ['99.9% uptime achieved', '40% performance improvement', '50% infrastructure cost reduction'],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      duration: '4 months',
      team: '12 engineers',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: '3',
      title: 'Data Analytics Dashboard',
      description: 'Built comprehensive analytics platform for real-time business intelligence.',
      company: 'RetailMax',
      industry: 'Retail',
      challenge: 'Lack of real-time insights into business performance and customer behavior.',
      solution: 'Developed interactive dashboard with real-time data visualization and predictive analytics.',
      results: ['Real-time insights', '25% increase in sales', '30% improvement in inventory management'],
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      duration: '3 months',
      team: '6 developers',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies. See how Zion Tech Group delivers innovative AI and IT solutions for businesses." />
        <meta name="keywords" content="case studies, projects, AI solutions, cloud migration, data analytics, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Case
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Studies
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform their operations with innovative AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                View All Projects
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Start Your Project
              </button>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results, real impact on businesses worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${study.featured ? 'border-blue-400' : 'border-white/20'}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                    {study.featured && (
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {study.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      {study.industry}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {study.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {study.team}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{study.description}</p>
                  
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                      Read Full Case Study
                    </button>
                    <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                      Similar Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with innovative AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View Portfolio
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
