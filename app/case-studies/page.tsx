import React from 'react';
import { CheckCircle, ArrowRight, Users, Award, Clock, Star, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
  const caseStudies: CaseStudy[] = [
    {
      id: 'ai-customer-service',
      title: 'AI-Powered Customer Service Transformation',
      description: 'Implemented advanced AI chatbot and automation solutions for a leading e-commerce platform.',
      industry: 'E-commerce',
      duration: '6 months',
      client: 'TechRetail Inc.',
      challenge: 'High customer service costs and long response times during peak hours.',
      solution: 'Deployed AI chatbot with natural language processing and automated ticket routing system.',
      results: [
        '75% reduction in response time',
        '60% decrease in customer service costs',
        '95% customer satisfaction rate',
        '40% increase in first-call resolution'
      ],
      technologies: ['AI/ML', 'Natural Language Processing', 'Cloud Computing', 'API Integration'],
      image: '/images/case-studies/ai-customer-service.jpg',
      featured: true
    },
    {
      id: 'cloud-migration',
      title: 'Enterprise Cloud Migration',
      description: 'Successfully migrated legacy systems to cloud infrastructure for improved scalability and performance.',
      industry: 'Financial Services',
      duration: '8 months',
      client: 'FinanceCorp',
      challenge: 'Outdated on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Comprehensive cloud migration strategy with AWS, including data migration and security implementation.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster deployment times',
        'Enhanced security compliance'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Monitoring'],
      image: '/images/case-studies/cloud-migration.jpg',
      featured: false
    },
    {
      id: 'cybersecurity-audit',
      title: 'Comprehensive Cybersecurity Overhaul',
      description: 'Conducted security audit and implemented robust cybersecurity measures for a healthcare organization.',
      industry: 'Healthcare',
      duration: '4 months',
      client: 'HealthTech Solutions',
      challenge: 'Vulnerable security infrastructure and compliance requirements for healthcare data.',
      solution: 'Complete security assessment, implementation of zero-trust architecture, and staff training.',
      results: [
        '100% compliance with HIPAA regulations',
        'Zero security incidents post-implementation',
        '90% improvement in security posture',
        'Comprehensive staff training completed'
      ],
      technologies: ['Zero Trust Architecture', 'SIEM', 'Endpoint Protection', 'Compliance Tools'],
      image: '/images/case-studies/cybersecurity.jpg',
      featured: false
    },
    {
      id: 'data-analytics-platform',
      title: 'Advanced Data Analytics Platform',
      description: 'Built a comprehensive data analytics platform for real-time business intelligence and reporting.',
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
      icon: <Star className="w-8 h-8 text-yellow-400" />
    },
    {
      number: '50+',
      label: 'Industries Served',
      icon: <Users className="w-8 h-8 text-green-400" />
    },
    {
      number: '5+',
      label: 'Years Experience',
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />
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
              Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                  <div className="mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
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
                Explore our most successful projects and the impact we've made for our clients.
              </p>
            </div>
            
            <div className="space-y-16">
              {caseStudies.filter(study => study.featured).map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg h-64 flex items-center justify-center mb-6">
                        <span className="text-white text-lg font-semibold">Case Study Image</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                        <span className="text-gray-300">{study.industry}</span>
                        <span className="flex items-center text-gray-300">
                          <Clock className="w-4 h-4 mr-2" />
                          {study.duration}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                      <p className="text-gray-300 mb-6">{study.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Client: {study.client}</h4>
                        <p className="text-gray-300 mb-4"><strong>Challenge:</strong> {study.challenge}</p>
                        <p className="text-gray-300 mb-4"><strong>Solution:</strong> {study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, index) => (
                            <span key={index} className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                        Read Full Case Study
                        <ArrowRight className="inline-block ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
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
    </>
  );
};

export default CaseStudiesPage;