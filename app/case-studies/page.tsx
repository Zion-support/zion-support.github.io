'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Zap } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      client: 'RetailCorp',
      industry: 'E-commerce',
      challenge: 'Legacy system causing 40% cart abandonment rate',
      solution: 'Implemented AI-powered recommendation engine and modern cloud infrastructure',
      results: [
        '60% increase in conversion rate',
        '45% reduction in page load time',
        '80% improvement in user engagement',
        '50% increase in average order value'
      ],
      image: '/images/case-studies/ecommerce.jpg',
      duration: '6 months',
      team: '12 developers'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data across multiple systems',
      solution: 'Built unified data platform with AI-powered analytics and predictive modeling',
      results: [
        '90% reduction in data processing time',
        '75% improvement in diagnostic accuracy',
        '60% cost savings in data management',
        '100% compliance with HIPAA regulations'
      ],
      image: '/images/case-studies/healthcare.jpg',
      duration: '8 months',
      team: '15 developers'
    },
    {
      id: 3,
      title: 'Financial Services Automation',
      client: 'FinTech Global',
      industry: 'Financial Services',
      challenge: 'Manual processes causing delays and errors',
      solution: 'Implemented RPA and AI-driven automation for loan processing and risk assessment',
      results: [
        '85% reduction in processing time',
        '95% accuracy in risk assessment',
        '70% cost reduction in operations',
        '50% increase in customer satisfaction'
      ],
      image: '/images/case-studies/fintech.jpg',
      duration: '10 months',
      team: '20 developers'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: TrendingUp },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Industry Awards', value: '25+', icon: Award }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies. Real-world examples of how we've helped businesses transform with technology." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT transformation, business results" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-purple-400 font-semibold">{study.industry}</span>
                    <span className="text-sm text-gray-400">{study.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    <strong>{study.company}</strong>
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Results:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Success Story</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-purple-400 font-semibold">Featured</span>
                    <span className="text-sm text-gray-400">6 months</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Fortune 500 Manufacturing: AI-Powered Predictive Maintenance
                  </h3>
                  <p className="text-gray-300 mb-6">
                    <strong>Global Manufacturing Corp</strong>
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm">Unplanned equipment downtime costing $2M annually</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">AI-powered predictive maintenance system with IoT sensors</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4">Results:</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      85% reduction in unplanned downtime
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      $1.7M annual cost savings
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      99.2% equipment uptime achieved
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      ROI of 340% in first year
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you achieve similar results with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center group"
              >
                Free Consultation
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;
