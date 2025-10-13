'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Globe } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Enterprise AI Transformation',
      client: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Legacy systems and manual processes were limiting operational efficiency and decision-making capabilities.',
      solution: 'Implemented comprehensive AI solution including predictive maintenance, quality control automation, and intelligent supply chain optimization.',
      results: {
        efficiency: '40%',
        costSavings: '$2.5M',
        accuracy: '95%',
        timeReduction: '60%'
      },
      technologies: ['Machine Learning', 'Computer Vision', 'IoT Integration', 'Cloud Computing'],
      duration: '8 months',
      team: '12 specialists',
      image: '/images/case-studies/ai-transformation.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Infrastructure Overhaul',
      client: 'Global Financial Services',
      industry: 'Financial Services',
      challenge: 'Outdated security infrastructure vulnerable to sophisticated cyber threats and compliance requirements.',
      solution: 'Deployed advanced threat detection, zero-trust architecture, and automated security monitoring systems.',
      results: {
        efficiency: '85%',
        costSavings: '$1.8M',
        accuracy: '99.9%',
        timeReduction: '70%'
      },
      technologies: ['Zero Trust Architecture', 'AI-Powered Threat Detection', 'Automated Response', 'Compliance Automation'],
      duration: '6 months',
      team: '8 specialists',
      image: '/images/case-studies/cybersecurity.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Migration & Optimization',
      client: 'Healthcare Technology Provider',
      industry: 'Healthcare',
      challenge: 'On-premises infrastructure unable to scale with growing patient data and regulatory requirements.',
      solution: 'Migrated to cloud-native architecture with automated scaling, data analytics, and HIPAA-compliant security measures.',
      results: {
        efficiency: '65%',
        costSavings: '$3.2M',
        accuracy: '98%',
        timeReduction: '50%'
      },
      technologies: ['AWS/Azure Migration', 'Containerization', 'Microservices', 'Data Analytics'],
      duration: '10 months',
      team: '15 specialists',
      image: '/images/case-studies/cloud-migration.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'AI-Powered Customer Service',
      client: 'E-commerce Platform',
      industry: 'E-commerce',
      challenge: 'High customer service costs and inconsistent support quality across multiple channels.',
      solution: 'Implemented AI chatbot system with natural language processing, sentiment analysis, and human escalation workflows.',
      results: {
        efficiency: '75%',
        costSavings: '$1.5M',
        accuracy: '92%',
        timeReduction: '80%'
      },
      technologies: ['Natural Language Processing', 'Machine Learning', 'API Integration', 'Real-time Analytics'],
      duration: '4 months',
      team: '6 specialists',
      image: '/images/case-studies/ai-customer-service.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics & Business Intelligence',
      client: 'Retail Chain',
      industry: 'Retail',
      challenge: 'Fragmented data sources preventing effective business insights and decision-making.',
      solution: 'Created unified data platform with real-time analytics, predictive modeling, and automated reporting dashboards.',
      results: {
        efficiency: '55%',
        costSavings: '$2.1M',
        accuracy: '97%',
        timeReduction: '45%'
      },
      technologies: ['Data Warehousing', 'Business Intelligence', 'Predictive Analytics', 'Dashboard Development'],
      duration: '7 months',
      team: '10 specialists',
      image: '/images/case-studies/data-analytics.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'IoT & Smart Infrastructure',
      client: 'Smart City Initiative',
      industry: 'Government',
      challenge: 'Need to modernize city infrastructure with smart technologies for better resource management.',
      solution: 'Deployed IoT sensors, data collection systems, and AI-powered analytics for traffic, energy, and waste management.',
      results: {
        efficiency: '70%',
        costSavings: '$4.5M',
        accuracy: '94%',
        timeReduction: '55%'
      },
      technologies: ['IoT Sensors', 'Edge Computing', 'Real-time Analytics', 'Mobile Applications'],
      duration: '12 months',
      team: '20 specialists',
      image: '/images/case-studies/iot-smart-city.jpg',
      featured: false
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: Award },
    { label: 'Cost Savings Delivered', value: '$50M+', icon: TrendingUp },
    { label: 'Countries Served', value: '25+', icon: Globe }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta
          name="description"
          content="Explore our success stories and case studies. See how Zion Tech Group has helped businesses transform with AI, cloud, and cybersecurity solutions."
        />
        <meta
          name="keywords"
          content="case studies, success stories, AI transformation, cloud migration, cybersecurity, business solutions, client results"
        />
        <meta property="og:title" content="Case Studies - Zion Tech Group | Success Stories" />
        <meta property="og:description" content="Explore our success stories and case studies." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Stories</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform with cutting-edge technology solutions
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {caseStudies.find(cs => cs.featured) && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Case Study</h2>
              {(() => {
                const featured = caseStudies.find(cs => cs.featured);
                return featured ? (
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img
                          src={featured.image}
                          alt={featured.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {featured.industry}
                          </span>
                          <span className="text-gray-500 text-sm">{featured.duration}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{featured.title}</h3>
                        <p className="text-gray-600 mb-6">{featured.challenge}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{featured.results.efficiency}</div>
                            <div className="text-sm text-gray-600">Efficiency Gain</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">{featured.results.costSavings}</div>
                            <div className="text-sm text-gray-600">Cost Savings</div>
                          </div>
                        </div>
                        
                        <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                          Read Full Case Study
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Case Studies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {caseStudy.industry}
                      </span>
                      <span className="text-gray-500 text-xs">{caseStudy.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{caseStudy.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{caseStudy.challenge}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{caseStudy.results.efficiency}</div>
                        <div className="text-xs text-gray-600">Efficiency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{caseStudy.results.costSavings}</div>
                        <div className="text-xs text-gray-600">Savings</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{caseStudy.team}</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        Read More
                        <ArrowRight className="w-4 h-4 inline ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help transform your business with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                View Our Services
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