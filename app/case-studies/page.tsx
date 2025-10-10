'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Star, Clock, Users, TrendingUp, BarChart, Shield, Brain, Cloud, Code, Target, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Case Studies' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'cloud', label: 'Cloud Migration' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'development', name: 'Custom Development' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Inc.',
      industry: 'Technology',
      category: 'ai',
      image: '/images/case-studies/ai-customer-service.webp',
      challenge: 'TechCorp needed to improve customer service efficiency while reducing response times and costs.',
      solution: 'Implemented an AI-powered chatbot system with natural language processing capabilities.',
      results: [
        '75% reduction in response time',
        '60% cost savings on customer service',
        '95% customer satisfaction rate',
        '50% increase in issue resolution rate'
      ],
      duration: '6 months',
      teamSize: '8 developers',
      technologies: ['AI/ML', 'NLP', 'React', 'Node.js', 'AWS']
    },
    {
      id: 2,
      title: 'Enterprise Cloud Migration',
      client: 'Global Finance Ltd.',
      industry: 'Finance',
      category: 'cloud',
      image: '/images/case-studies/cloud-migration.webp',
      challenge: 'Legacy on-premises infrastructure was limiting scalability and increasing maintenance costs.',
      solution: 'Migrated entire infrastructure to AWS with microservices architecture and automated CI/CD.',
      results: [
        '40% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster deployment times',
        '50% improvement in scalability'
      ],
      duration: '8 months',
      teamSize: '12 developers',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Python']
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement',
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      category: 'security',
      image: '/images/case-studies/cybersecurity.webp',
      challenge: 'Healthcare organization needed to strengthen security posture and ensure HIPAA compliance.',
      solution: 'Implemented comprehensive security framework with threat detection and compliance monitoring.',
      results: [
        'Zero security breaches',
        '100% HIPAA compliance',
        '90% reduction in security incidents',
        '24/7 threat monitoring'
      ],
      duration: '4 months',
      teamSize: '6 security experts',
      technologies: ['SIEM', 'Firewall', 'Encryption', 'Monitoring', 'Compliance']
    }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Case Studies - Success Stories | Zion Tech Group"
        description="Explore our successful projects and case studies showcasing how we've helped businesses transform with AI and IT solutions."
        keywords="case studies, success stories, AI projects, cloud migration, cybersecurity, client results"
      />
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Success
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform with cutting-edge AI and IT solutions. 
              Real projects, real results, real success.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                        {study.category.toUpperCase()}
                      </span>
                      <span className="text-gray-400 text-sm">{study.industry}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-purple-400 font-semibold mb-6">{study.client}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {study.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {study.teamSize}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                      Read Full Case Study
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and create a success story together. 
              Our team is ready to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Our Services
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;