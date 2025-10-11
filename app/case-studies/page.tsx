import React from 'react';
import { CheckCircle, ArrowRight, Users, Award, Clock, Star, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: '1',
      title: 'E-commerce Platform Migration',
      industry: 'Retail',
      duration: '6 months',
      client: 'TechRetail Inc.',
      challenge: 'Legacy system limitations affecting scalability and performance.',
      solution: 'Migrated to cloud-native architecture with microservices and containerization.',
      results: [
        '99.9% uptime achieved',
        '300% improvement in page load speed',
        '50% reduction in infrastructure costs',
        'Seamless scalability for peak traffic'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      industry: 'Manufacturing',
      duration: '10 months',
      client: 'ManufacturingPro',
      challenge: 'Lack of real-time insights and data-driven decision making capabilities.',
      solution: 'Developed end-to-end data pipeline with real-time analytics and interactive dashboards.',
      results: [
        'Real-time data processing capabilities',
        '50% improvement in operational efficiency',
        'Predictive maintenance implementation',
        '30% reduction in downtime'
      ],
      technologies: ['Big Data', 'Machine Learning', 'Real-time Processing', 'Data Visualization'],
      image: '/images/case-studies/data-analytics.jpg',
      featured: true
    },
    {
      id: '3',
      title: 'Comprehensive Security Audit',
      industry: 'Healthcare',
      duration: '4 months',
      client: 'HealthCare Plus',
      challenge: 'Outdated security infrastructure and compliance requirements.',
      solution: 'Implemented comprehensive security framework with advanced threat detection and compliance management.',
      results: [
        '100% compliance achieved',
        'Zero security incidents',
        '50% faster threat detection',
        'Complete audit trail implementation'
      ],
      technologies: ['Security Frameworks', 'Threat Detection', 'Compliance Tools', 'Monitoring Systems'],
      image: '/images/case-studies/security-audit.jpg',
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, cloud migration, cybersecurity, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Success
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations with cutting-edge technology solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">99%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our successful projects and see how we've helped businesses achieve their goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                      {study.industry}
                    </span>
                    <span className="ml-2 text-gray-400 text-sm">{study.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.solution}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Read Full Case Study
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                All Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse through our complete portfolio of successful projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg h-48 flex items-center justify-center mb-6">
                    <span className="text-white text-lg font-semibold">Case Study Image</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    {study.featured && (
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    )}
                    <span className="flex items-center text-gray-300 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-white/10 px-2 py-1 rounded-full text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
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
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our proven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our successful projects and case studies.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">Case studies coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudiesPage;
