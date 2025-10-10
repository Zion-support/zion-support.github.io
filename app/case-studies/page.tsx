'use client';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      description: 'Implemented AI chatbot system resulting in 80% reduction in response time and 95% customer satisfaction.',
      results: ['80% faster response times', '95% customer satisfaction', '60% cost reduction']
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      description: 'Seamless migration to AWS cloud infrastructure with zero downtime and enhanced security.',
      results: ['Zero downtime migration', '40% cost savings', 'Enhanced security compliance']
    },
    {
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      description: 'Comprehensive cybersecurity overhaul protecting sensitive patient data and ensuring HIPAA compliance.',
      results: ['100% HIPAA compliance', 'Zero security breaches', '24/7 threat monitoring']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 holographic-text">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with our AI and IT solutions. 
              Real results from real clients.
            </p>
          </section>

          {/* Case Studies Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <article key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="mb-4">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="text-sm text-cyan-400 font-semibold mb-2">
                      {study.industry}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {study.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-sm text-gray-400">
                      Client: {study.client}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="cyber-button text-center"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;
