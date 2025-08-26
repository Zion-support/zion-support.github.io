import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudies: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'Global Retail Chain',
      industry: 'Retail',
      category: 'ai',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI-powered chatbot system with natural language processing',
      results: [
        'Reduced customer service costs by 40%',
        'Improved response time from 24 hours to 2 minutes',
        'Increased customer satisfaction by 35%',
        'Handled 10,000+ customer inquiries daily'
      ],
      technologies: ['Python', 'TensorFlow', 'NLP', 'AWS', 'React'],
      image: '/api/placeholder/600/400',
      duration: '6 months'
    },
    {
      id: 2,
      title: 'Cloud Migration & DevOps Automation',
      client: 'Financial Services Company',
      industry: 'Finance',
      category: 'cloud',
      challenge: 'Legacy infrastructure causing deployment delays and security risks',
      solution: 'Complete cloud migration with CI/CD pipeline and infrastructure as code',
      results: [
        'Reduced deployment time from 2 weeks to 2 hours',
        'Achieved 99.9% uptime SLA',
        'Reduced infrastructure costs by 30%',
        'Implemented zero-downtime deployments'
      ],
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'Docker'],
      image: '/api/placeholder/600/400',
      duration: '8 months'
    },
    {
      id: 3,
      title: 'Cybersecurity Framework Implementation',
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      category: 'cybersecurity',
      challenge: 'Need for HIPAA compliance and enhanced security posture',
      solution: 'Comprehensive security framework with threat detection and response',
      results: [
        'Achieved HIPAA compliance certification',
        'Reduced security incidents by 80%',
        'Implemented 24/7 threat monitoring',
        'Enhanced data protection measures'
      ],
      technologies: ['SIEM', 'EDR', 'Firewall', 'Encryption', 'Compliance Tools'],
      image: '/api/placeholder/600/400',
      duration: '4 months'
    },
    {
      id: 4,
      title: 'Digital Transformation for Manufacturing',
      client: 'Industrial Manufacturer',
      industry: 'Manufacturing',
      category: 'transformation',
      challenge: 'Outdated processes and lack of real-time data visibility',
      solution: 'IoT integration with predictive analytics and process automation',
      results: [
        'Increased production efficiency by 25%',
        'Reduced equipment downtime by 60%',
        'Improved quality control by 40%',
        'Real-time monitoring of 500+ devices'
      ],
      technologies: ['IoT', 'Machine Learning', 'Azure', 'Power BI', 'Python'],
      image: '/api/placeholder/600/400',
      duration: '12 months'
    },
    {
      id: 5,
      title: 'E-commerce Platform Modernization',
      client: 'Online Retailer',
      industry: 'E-commerce',
      category: 'web',
      challenge: 'Slow website performance and poor mobile experience',
      solution: 'Modern React-based platform with microservices architecture',
      results: [
        'Improved page load speed by 70%',
        'Increased mobile conversion by 45%',
        'Enhanced user experience scores',
        'Scaled to handle 100,000+ concurrent users'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
      image: '/api/placeholder/600/400',
      duration: '5 months'
    },
    {
      id: 6,
      title: 'Data Analytics & Business Intelligence',
      client: 'Logistics Company',
      industry: 'Logistics',
      category: 'analytics',
      challenge: 'Fragmented data sources and lack of actionable insights',
      solution: 'Centralized data warehouse with advanced analytics and reporting',
      results: [
        'Unified data from 15+ systems',
        'Reduced reporting time from days to hours',
        'Identified $2M in cost savings opportunities',
        'Improved decision-making with real-time insights'
      ],
      technologies: ['Snowflake', 'Tableau', 'Python', 'ETL', 'SQL'],
      image: '/api/placeholder/600/400',
      duration: '7 months'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Cases', count: caseStudies.length },
    { key: 'ai', label: 'AI & ML', count: caseStudies.filter(cs => cs.category === 'ai').length },
    { key: 'cloud', label: 'Cloud & DevOps', count: caseStudies.filter(cs => cs.category === 'cloud').length },
    { key: 'cybersecurity', label: 'Cybersecurity', count: caseStudies.filter(cs => cs.category === 'cybersecurity').length },
    { key: 'transformation', label: 'Digital Transformation', count: caseStudies.filter(cs => cs.category === 'transformation').length },
    { key: 'web', label: 'Web Development', count: caseStudies.filter(cs => cs.category === 'web').length },
    { key: 'analytics', label: 'Data Analytics', count: caseStudies.filter(cs => cs.category === 'analytics').length }
  ];

  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group Success Stories</title>
        <meta name="description" content="Explore Zion Tech Group's successful client implementations and case studies. See how we've helped businesses transform their operations with innovative technology solutions." />
        <meta name="keywords" content="case studies, success stories, client projects, AI implementation, cloud migration, cybersecurity, digital transformation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped organizations across industries transform their operations, 
              improve efficiency, and achieve remarkable results with our innovative technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-white">{caseStudies.length}+</div>
                <div className="text-sm text-gray-300">Successful Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-300">Industries Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredCaseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-sm">Case Study Image</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                          {caseStudy.industry}
                        </span>
                        <span className="text-xs text-gray-500">• {caseStudy.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                        {caseStudy.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium">
                        {caseStudy.client}
                      </p>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 mb-1">Challenge:</h4>
                        <p className="text-sm text-gray-600 line-clamp-2">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 mb-1">Solution:</h4>
                        <p className="text-sm text-gray-600 line-clamp-2">{caseStudy.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-800 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {caseStudy.results.slice(0, 3).map((result, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="line-clamp-2">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-800 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1">
                        {caseStudy.technologies.slice(0, 4).map((tech, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                        {caseStudy.technologies.length > 4 && (
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            +{caseStudy.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                      Read Full Case Study
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our technology solutions can help transform your business and achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Schedule a Consultation
              </button>
              <button className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                View Our Services
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Preview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-4">
                  "Zion Tech Group transformed our customer service operations with their AI solution. 
                  The results exceeded our expectations."
                </p>
                <div className="font-semibold text-slate-900">Sarah Johnson</div>
                <div className="text-sm text-gray-600">CTO, Global Retail Chain</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-4">
                  "Their cloud migration expertise helped us achieve unprecedented deployment speeds 
                  and operational efficiency."
                </p>
                <div className="font-semibold text-slate-900">Michael Chen</div>
                <div className="text-sm text-gray-600">VP Engineering, Financial Services</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-4">
                  "The cybersecurity framework they implemented gave us peace of mind and 
                  ensured full HIPAA compliance."
                </p>
                <div className="font-semibold text-slate-900">Dr. Emily Rodriguez</div>
                <div className="text-sm text-gray-600">CIO, Healthcare Provider</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;