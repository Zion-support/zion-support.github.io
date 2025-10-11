import React from 'react';
import { CheckCircle, ArrowRight, Users, TrendingUp, Clock, Award, ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Manufacturing Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Reduce production downtime and optimize manufacturing processes',
      solution: 'Implemented AI-driven predictive maintenance and process optimization',
      results: [
        '40% reduction in unplanned downtime',
        '25% increase in production efficiency',
        '60% decrease in maintenance costs',
        '99.5% equipment uptime achieved'
      ],
      duration: '6 months',
      team: '8 experts',
      image: '/api/placeholder/400/300',
      category: 'AI Services'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'Regional Bank',
      industry: 'Financial Services',
      challenge: 'Migrate legacy systems to cloud while maintaining security compliance',
      solution: 'Comprehensive cloud migration with enhanced security and compliance',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '100% compliance with financial regulations',
        '3x faster application deployment'
      ],
      duration: '8 months',
      team: '12 experts',
      image: '/api/placeholder/400/300',
      category: 'Cloud Services'
    },
    {
      id: 3,
      title: 'Digital Transformation for Healthcare',
      client: 'Metropolitan Hospital',
      industry: 'Healthcare',
      challenge: 'Modernize patient care systems and improve operational efficiency',
      solution: 'Complete digital transformation with AI-powered patient management',
      results: [
        '35% improvement in patient satisfaction',
        '45% reduction in administrative costs',
        '30% faster patient processing',
        'Zero data breaches'
      ],
      duration: '12 months',
      team: '15 experts',
      image: '/api/placeholder/400/300',
      category: 'Digital Transformation'
    },
    {
      id: 4,
      title: '5G Network Implementation',
      client: 'Smart City Initiative',
      industry: 'Government',
      challenge: 'Deploy 5G infrastructure for smart city applications',
      solution: 'Complete 5G network rollout with IoT integration',
      results: [
        '100% city coverage achieved',
        '10x faster data speeds',
        '1M+ IoT devices connected',
        '50% reduction in energy consumption'
      ],
      duration: '18 months',
      team: '20 experts',
      image: '/api/placeholder/400/300',
      category: '5G Implementation'
    },
    {
      id: 5,
      title: 'Micro SAAS Platform Development',
      client: 'E-commerce Startup',
      industry: 'E-commerce',
      challenge: 'Build scalable SAAS platform for small businesses',
      solution: 'Custom micro SAAS platform with AI-powered features',
      results: [
        '500% increase in user engagement',
        '90% customer retention rate',
        '75% reduction in support tickets',
        '10,000+ active users'
      ],
      duration: '4 months',
      team: '6 experts',
      image: '/api/placeholder/400/300',
      category: 'Micro SAAS'
    },
    {
      id: 6,
      title: 'IT Infrastructure Modernization',
      client: 'Fortune 500 Company',
      industry: 'Technology',
      challenge: 'Modernize legacy IT infrastructure and improve security',
      solution: 'Complete infrastructure overhaul with advanced security measures',
      results: [
        '60% improvement in system performance',
        '99.9% security compliance',
        '40% reduction in IT costs',
        'Zero security incidents'
      ],
      duration: '10 months',
      team: '18 experts',
      image: '/api/placeholder/400/300',
      category: 'IT Services'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '40%', label: 'Average Cost Savings' },
    { number: '99.9%', label: 'Success Rate' }
  ];

  const categories = ['All', 'AI Services', 'Cloud Services', 'Digital Transformation', '5G Implementation', 'Micro SAAS', 'IT Services'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our success stories and case studies. See how we've helped businesses transform with AI, cloud, and digital solutions." />
        <meta name="keywords" content="case studies, success stories, AI projects, cloud migration, digital transformation, client results" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses across industries transform with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  category === 'All' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">{study.industry}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                    <span className="text-gray-400 text-sm">{study.duration}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{study.client}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                  
                  <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm mb-3">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 3).map((result, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {study.team}
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    {study.industry}
                  </div>
                </div>

                <Link 
                  to={`/case-studies/${study.id}`}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Read Full Case Study
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our proven solutions and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
