import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Calendar, Building } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  industry: string;
  duration: string;
  results: string[];
  technologies: string[];
  image: string;
  featured: boolean;
  client: string;
  challenge: string;
  solution: string;
}

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const caseStudies: CaseStudy[] = [
    {
      id: 'ai-customer-service',
      title: 'AI-Powered Customer Service Transformation',
      description: 'Implemented AI-driven customer service solutions that reduced response times by 80% and improved customer satisfaction scores.',
      industry: 'Retail',
      duration: '6 months',
      results: [
        '80% reduction in response time',
        '95% customer satisfaction rate',
        '60% cost reduction in support operations',
        '24/7 automated support coverage'
      ],
      technologies: ['AI/ML', 'Natural Language Processing', 'Cloud Computing', 'API Integration'],
      image: '/images/case-studies/ai-customer-service.jpg',
      featured: true,
      client: 'Global Retail Chain',
      challenge: 'High customer service costs and slow response times',
      solution: 'Implemented AI-powered chatbots and automated ticket routing'
    },
    {
      id: 'cybersecurity-healthcare',
      title: 'Healthcare Data Security Enhancement',
      description: 'Comprehensive cybersecurity overhaul for a major healthcare provider, ensuring HIPAA compliance and protecting patient data.',
      industry: 'Healthcare',
      duration: '4 months',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security breaches since implementation',
        '50% reduction in security incidents',
        'Enhanced patient data protection'
      ],
      technologies: ['Cybersecurity', 'HIPAA Compliance', 'SIEM', 'Penetration Testing'],
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      featured: true,
      client: 'Regional Healthcare System',
      challenge: 'HIPAA compliance and patient data security',
      solution: 'Comprehensive security audit and implementation of advanced security measures'
    },
    {
      id: 'cloud-migration-finance',
      title: 'Financial Services Cloud Migration',
      description: 'Successfully migrated legacy financial systems to the cloud while maintaining compliance and improving performance.',
      industry: 'Financial Services',
      duration: '8 months',
      results: [
        '40% improvement in system performance',
        '99.9% uptime achieved',
        '30% reduction in infrastructure costs',
        'Enhanced scalability and flexibility'
      ],
      technologies: ['Cloud Migration', 'AWS', 'Docker', 'Kubernetes', 'Microservices'],
      image: '/images/case-studies/cloud-migration-finance.jpg',
      featured: false,
      client: 'Regional Bank',
      challenge: 'Legacy system limitations and compliance requirements',
      solution: 'Phased cloud migration with zero downtime and full compliance'
    }
  ];

  const industries = ['All', 'Retail', 'Financial Services', 'Healthcare', 'Manufacturing', 'Technology', 'Education'];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industries Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses transform their technology infrastructure." />
        <meta name="keywords" content="case studies, projects, success stories, technology solutions, client results" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses across industries transform their technology infrastructure 
              and achieve remarkable results.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedIndustry === industry
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/30 transition-colors">
                  {study.image && (
                    <div className="aspect-video bg-gray-700">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-wide">
                        {study.industry}
                      </span>
                      {study.featured && (
                        <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wide">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                    <p className="text-gray-300 mb-4">{study.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <Building className="w-4 h-4 mr-2" />
                        {study.client}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {study.duration}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {study.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;