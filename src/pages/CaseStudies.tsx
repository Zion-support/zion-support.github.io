import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Financial Services' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'retail', name: 'Retail & E-commerce' },
    { id: 'education', name: 'Education' },
    { id: 'government', name: 'Government' }
  ];

  const services = [
    { id: 'all', name: 'All Services' },
    { id: 'ai-ml', name: 'AI & Machine Learning' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'digital-transformation', name: 'Digital Transformation' },
    { id: 'data-analytics', name: 'Data Analytics' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Patient Care Optimization',
      client: 'MetroHealth Systems',
      industry: 'healthcare',
      services: ['ai-ml', 'data-analytics'],
      challenge: 'MetroHealth Systems faced challenges in patient flow management, resource allocation, and treatment planning, leading to increased wait times and operational inefficiencies.',
      solution: 'Implemented an AI-powered patient care optimization platform that analyzes patient data, predicts resource needs, and optimizes scheduling and resource allocation.',
      results: [
        '30% reduction in patient wait times',
        '25% improvement in resource utilization',
        '40% faster diagnosis and treatment planning',
        'Improved patient satisfaction scores by 35%'
      ],
      duration: '6 months',
      teamSize: '12 developers',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'PostgreSQL']
    },
    {
      id: 2,
      title: 'Cybersecurity Transformation for Financial Institution',
      client: 'GlobalTrust Bank',
      industry: 'finance',
      services: ['cybersecurity', 'digital-transformation'],
      challenge: 'GlobalTrust Bank needed to modernize their security infrastructure to protect against evolving cyber threats while maintaining compliance with financial regulations.',
      solution: 'Developed and implemented a comprehensive cybersecurity framework including zero-trust architecture, advanced threat detection, and automated incident response systems.',
      results: [
        '99.9% threat detection accuracy',
        '60% reduction in security incidents',
        'Full compliance with SOC 2, PCI DSS, and GDPR',
        'Real-time threat monitoring and response'
      ],
      duration: '8 months',
      teamSize: '15 security specialists',
      technologies: ['SIEM', 'EDR', 'Zero Trust', 'AWS Security', 'Python']
    },
    {
      id: 3,
      title: 'Cloud Migration and DevOps Transformation',
      client: 'TechManufacture Inc.',
      industry: 'manufacturing',
      services: ['cloud', 'digital-transformation'],
      challenge: 'TechManufacture Inc. struggled with legacy on-premise systems that limited scalability, caused frequent downtime, and hindered innovation.',
      solution: 'Migrated entire infrastructure to cloud-native architecture with automated CI/CD pipelines, containerization, and microservices architecture.',
      results: [
        '80% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '90% faster deployment cycles',
        'Improved scalability and performance'
      ],
      duration: '10 months',
      teamSize: '18 engineers',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins']
    },
    {
      id: 4,
      title: 'E-commerce Platform Modernization',
      client: 'RetailPlus',
      industry: 'retail',
      services: ['digital-transformation', 'ai-ml'],
      challenge: 'RetailPlus\'s outdated e-commerce platform couldn\'t handle increased traffic, lacked personalization features, and provided poor user experience.',
      solution: 'Built a modern, AI-powered e-commerce platform with personalized recommendations, advanced search, and scalable architecture.',
      results: [
        '300% increase in conversion rates',
        '50% improvement in page load times',
        'Enhanced user experience and engagement',
        'Scalable platform handling 10x traffic'
      ],
      duration: '7 months',
      teamSize: '14 developers',
      technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'Redis']
    },
    {
      id: 5,
      title: 'Educational Technology Platform',
      client: 'EduTech University',
      industry: 'education',
      services: ['ai-ml', 'data-analytics'],
      challenge: 'EduTech University needed a modern learning management system that could provide personalized learning experiences and track student progress effectively.',
      solution: 'Developed an AI-powered learning platform with adaptive learning algorithms, progress tracking, and comprehensive analytics dashboard.',
      results: [
        '40% improvement in student engagement',
        '25% increase in course completion rates',
        'Personalized learning paths for each student',
        'Comprehensive analytics and reporting'
      ],
      duration: '9 months',
      teamSize: '16 developers',
      technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS']
    },
    {
      id: 6,
      title: 'Government Digital Services Platform',
      client: 'CitySmart Government',
      industry: 'government',
      services: ['digital-transformation', 'cybersecurity'],
      challenge: 'CitySmart Government needed to digitize citizen services while ensuring security, compliance, and accessibility for all residents.',
      solution: 'Built a secure, accessible digital services platform with integrated identity management, automated workflows, and citizen portal.',
      results: [
        '70% reduction in service processing time',
        'Enhanced citizen satisfaction and engagement',
        'Improved security and compliance',
        'Cost savings of $2M annually'
      ],
      duration: '12 months',
      teamSize: '20 developers',
      technologies: ['React', 'Node.js', 'AWS GovCloud', 'Okta', 'PostgreSQL']
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const serviceMatch = selectedService === 'all' || study.services.includes(selectedService);
    return industryMatch && serviceMatch;
  });

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Client Success Stories</title>
        <meta name="description" content="Explore real-world success stories and case studies from Zion Tech Group clients. See how we've transformed businesses across industries with innovative technology solutions." />
        <meta name="keywords" content="case studies, client success stories, Zion Tech Group, technology solutions, digital transformation, AI solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Client <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped organizations across industries transform their businesses 
              with innovative technology solutions. Real results, real impact, real success stories.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <div>
                <label className="block text-white font-medium mb-2">Industry</label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="px-4 py-2 bg-slate-700 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                >
                  {industries.map((industry) => (
                    <option key={industry.id} value={industry.id}>
                      {industry.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Service</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="px-4 py-2 bg-slate-700 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/50 rounded-xl border border-white/10 overflow-hidden hover:border-blue-400/30 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                        {industries.find(i => i.id === study.industry)?.name}
                      </span>
                      <span className="px-3 py-1 bg-cyan-600/20 text-cyan-400 text-sm rounded-full">
                        {study.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-blue-400 mb-4">{study.client}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-start text-gray-300 text-sm">
                            <span className="text-green-400 mr-2">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>Team: {study.teamSize}</span>
                      <span>Duration: {study.duration}</span>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                      View Full Case Study
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No case studies found with the selected filters.</p>
                <p className="text-gray-500 mt-2">Try adjusting your selection or browse all case studies.</p>
              </div>
            )}
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
              Our Impact by the Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "40%", label: "Average Efficiency Gain" },
                { number: "25+", label: "Industries Served" }
              ].map((metric, index) => (
                <div key={index} className="bg-slate-700/50 p-6 rounded-xl border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{metric.number}</div>
                  <div className="text-gray-300">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of organizations that have transformed their businesses with Zion Tech Group. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;