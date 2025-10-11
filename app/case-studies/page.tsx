'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, ExternalLink, CheckCircle, Star } from 'lucide-react'

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  featured: boolean;
  duration: string;
  team: string;
}

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot system with natural language processing',
      results: [
        'Reduced response time by 80%',
        'Cut customer service costs by 60%',
        'Improved customer satisfaction to 95%',
        'Handled 10x more inquiries'
      ],
      image: '/api/placeholder/600/400',
      featured: true,
      duration: '3 months',
      team: '5 developers'
    },
    {
      id: '2',
      title: 'Cybersecurity Infrastructure Overhaul',
      company: 'FinanceFirst Bank',
      industry: 'Finance',
      challenge: 'Vulnerable legacy systems and compliance requirements',
      solution: 'Complete security audit and modern infrastructure implementation',
      results: [
        'Zero security breaches in 12 months',
        '100% compliance with regulations',
        'Reduced security incidents by 90%',
        'Improved system performance by 40%'
      ],
      image: '/api/placeholder/600/400',
      featured: false,
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: '3',
      title: 'Cloud Migration and Optimization',
      company: 'RetailMax',
      industry: 'Retail',
      challenge: 'Outdated on-premise infrastructure limiting scalability',
      solution: 'Complete cloud migration with microservices architecture',
      results: [
        'Reduced infrastructure costs by 50%',
        'Improved scalability by 300%',
        'Faster deployment times',
        'Enhanced disaster recovery'
      ],
      image: '/api/placeholder/600/400',
      featured: false,
      duration: '4 months',
      team: '6 engineers'
    }
  ];

  const industries = ['All', 'Technology', 'Finance', 'Retail', 'Healthcare', 'Manufacturing'];

  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real-world success stories showcasing how we've helped businesses transform with AI and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto justify-center">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-lg whitespace-nowrap transition-all duration-200 ${
                  selectedIndustry === industry
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {filteredCaseStudies.find(study => study.featured) && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Featured Case Study</h2>
            {(() => {
              const featuredStudy = filteredCaseStudies.find(study => study.featured);
              return featuredStudy ? (
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={featuredStudy.image}
                        alt={featuredStudy.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:w-1/2">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {featuredStudy.industry}
                        </span>
                        <span className="text-gray-300 text-sm">Featured</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {featuredStudy.title}
                      </h3>
                      <p className="text-cyan-400 font-semibold mb-4">
                        {featuredStudy.company}
                      </p>
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                          <p className="text-gray-300 text-sm">{featuredStudy.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Solution:</h4>
                          <p className="text-gray-300 text-sm">{featuredStudy.solution}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{featuredStudy.duration}</span>
                          <span>{featuredStudy.team}</span>
                        </div>
                        <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">All Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.filter(study => !study.featured).map((study) => (
              <div
                key={study.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-cyan-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-3">
                    {study.company}
                  </p>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {study.challenge}
                  </p>
                  <div className="space-y-2 mb-4">
                    {study.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{study.duration}</span>
                    <button className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                      Read More
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with AI and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
              View Our Services
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CaseStudiesPage