import React from 'react';
import { CheckCircle, ArrowRight, Users, Award, Clock, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: '1',
      title: 'AI-Powered E-commerce Platform',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      duration: '6 months',
      team: '8 developers',
      results: [
        '40% increase in conversion rates',
        '60% reduction in customer service queries',
        '25% improvement in inventory management',
        '35% boost in customer satisfaction'
      ],
      description: 'Implemented AI-driven recommendation engine and automated customer service for a leading e-commerce platform.',
      technologies: ['React', 'Node.js', 'TensorFlow', 'AWS', 'MongoDB'],
      image: '/images/case-studies/ecommerce-ai.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      duration: '8 months',
      team: '12 developers',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '3x faster deployment times',
        'Enhanced security compliance'
      ],
      description: 'Migrated legacy financial systems to cloud infrastructure with zero downtime and improved security.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'PostgreSQL'],
      image: '/images/case-studies/cloud-migration.jpg',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement Program',
      client: 'SecureBank',
      industry: 'Banking',
      duration: '4 months',
      team: '6 developers',
      results: [
        '95% reduction in security incidents',
        '100% compliance with industry standards',
        'Real-time threat detection',
        'Automated incident response'
      ],
      description: 'Implemented comprehensive cybersecurity solutions including threat detection and automated response systems.',
      technologies: ['Python', 'Elasticsearch', 'Kibana', 'AWS Security', 'SIEM'],
      image: '/images/case-studies/cybersecurity.jpg',
      featured: false
    }
  ];

  const stats = [
    {
      number: '150+',
      label: 'Projects Completed',
      icon: <Award className="w-8 h-8 text-blue-400" />
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      icon: <Star className="w-8 h-8 text-green-400" />
    },
    {
      number: '50+',
      label: 'Enterprise Clients',
      icon: <Users className="w-8 h-8 text-purple-400" />
    },
    {
      number: '5+',
      label: 'Years Experience',
      icon: <Clock className="w-8 h-8 text-orange-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses achieve their goals." />
        <meta name="keywords" content="case studies, projects, success stories, AI solutions, cloud migration" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View All Projects
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Start Your Project
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {caseStudies.find(study => study.featured) && (
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Featured Project</h2>
              {(() => {
                const featured = caseStudies.find(study => study.featured);
                return featured ? (
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-1/2">
                        <img
                          src={featured.image}
                          alt={featured.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      <div className="lg:w-1/2">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                            {featured.industry}
                          </span>
                          <span className="text-gray-400 text-sm">{featured.duration}</span>
                          <span className="text-gray-400 text-sm">{featured.team}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">{featured.title}</h3>
                        <p className="text-gray-300 mb-6">{featured.description}</p>
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                          <ul className="space-y-2">
                            {featured.results.map((result, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {featured.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                          Read Full Case Study
                          <ArrowRight className="inline-block ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          </section>
        )}

        {/* All Case Studies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">All Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-sm">{study.duration}</span>
                    <span className="text-gray-400 text-sm">{study.team}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-300 mb-6">{study.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.slice(0, 3).map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    View Details
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;
