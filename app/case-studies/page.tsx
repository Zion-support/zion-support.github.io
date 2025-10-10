'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Star, Building, Target, Award, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      category: 'ai',
      challenge: 'Inefficient supply chain management leading to 30% inventory waste and delayed deliveries',
      solution: 'Implemented AI-driven demand forecasting and automated inventory management system',
      results: [
        'Reduced inventory waste by 45%',
        'Improved delivery times by 60%',
        'Saved $2.3M annually in operational costs',
        'Increased customer satisfaction by 35%'
      ],
      duration: '6 months',
      team: '8 specialists',
      technologies: ['Machine Learning', 'Python', 'AWS', 'Docker']
    },
    {
      id: 2,
      title: 'Cloud Migration & DevOps Transformation',
      client: 'FinTech Solutions Inc',
      industry: 'Financial Services',
      category: 'cloud',
      challenge: 'Legacy on-premise infrastructure causing scalability issues and high maintenance costs',
      solution: 'Complete cloud migration with automated CI/CD pipelines and microservices architecture',
      results: [
        'Reduced infrastructure costs by 40%',
        'Improved deployment speed by 80%',
        'Achieved 99.9% uptime',
        'Scaled to handle 10x traffic growth'
      ],
      duration: '4 months',
      team: '12 specialists',
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform']
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'Healthcare Systems Ltd',
      industry: 'Healthcare',
      category: 'security',
      challenge: 'HIPAA compliance requirements and increasing cyber threats targeting patient data',
      solution: 'Comprehensive security framework with advanced threat detection and compliance automation',
      results: [
        'Achieved 100% HIPAA compliance',
        'Reduced security incidents by 90%',
        'Implemented zero-trust architecture',
        'Passed all security audits'
      ],
      duration: '3 months',
      team: '6 specialists',
      technologies: ['SIEM', 'Zero Trust', 'Encryption', 'Compliance Tools']
    },
    {
      id: 4,
      title: 'Data Analytics & Business Intelligence',
      client: 'Retail Chain Corp',
      industry: 'Retail',
      category: 'data',
      challenge: 'Lack of data-driven insights affecting sales performance and customer experience',
      solution: 'Built comprehensive analytics platform with real-time dashboards and predictive modeling',
      results: [
        'Increased sales by 25%',
        'Improved customer retention by 40%',
        'Reduced operational costs by 30%',
        'Enabled data-driven decision making'
      ],
      duration: '5 months',
      team: '10 specialists',
      technologies: ['Python', 'Tableau', 'SQL', 'Machine Learning']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: caseStudies.length },
    { id: 'ai', name: 'AI Solutions', count: caseStudies.filter(cs => cs.category === 'ai').length },
    { id: 'cloud', name: 'Cloud & DevOps', count: caseStudies.filter(cs => cs.category === 'cloud').length },
    { id: 'security', name: 'Cybersecurity', count: caseStudies.filter(cs => cs.category === 'security').length },
    { id: 'data', name: 'Data Analytics', count: caseStudies.filter(cs => cs.category === 'data').length }
  ];

  const filteredStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <>
      <SEOOptimizer 
        title="Case Studies - Zion Tech Group | Success Stories & Project Portfolio"
        description="Explore our successful AI and IT projects. Real case studies showcasing our expertise in AI solutions, cloud migration, cybersecurity, and data analytics."
        keywords="case studies, project portfolio, AI solutions, cloud migration, cybersecurity, data analytics, success stories"
      />
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Case
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Studies
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions. 
              Real projects, real results, real success stories.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{study.title}</h3>
                        <p className="text-gray-400">{study.client}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">{study.industry}</p>
                      <div className="flex items-center mt-1">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-300">Success Story</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-3">Key Results</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {study.team}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    View Full Case Study
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CaseStudiesPage;