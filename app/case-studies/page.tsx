'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign, Star, Award, Clock, Target } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce AI Transformation',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and chatbot',
      results: [
        '40% increase in conversion rates',
        '60% reduction in customer service tickets',
        '25% increase in average order value'
      ],
      duration: '6 months',
      team: '8 developers',
      image: '/case-studies/techretail.jpg'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient reporting',
      solution: 'Built comprehensive data analytics platform with real-time insights',
      results: [
        '50% reduction in reporting time',
        '30% improvement in patient outcomes',
        '80% increase in data accuracy'
      ],
      duration: '8 months',
      team: '12 developers',
      image: '/case-studies/healthcare-analytics.jpg'
    },
    {
      id: 3,
      title: 'Financial Services Cloud Migration',
      client: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'Legacy systems and security concerns',
      solution: 'Migrated to secure cloud infrastructure with enhanced security',
      results: [
        '70% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '50% faster transaction processing'
      ],
      duration: '10 months',
      team: '15 developers',
      image: '/case-studies/cloud-migration.jpg'
    },
    {
      id: 4,
      title: 'Manufacturing IoT Integration',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual processes and lack of real-time monitoring',
      solution: 'Implemented IoT sensors and predictive maintenance system',
      results: [
        '35% reduction in downtime',
        '20% increase in production efficiency',
        '45% decrease in maintenance costs'
      ],
      duration: '7 months',
      team: '10 developers',
      image: '/case-studies/iot-manufacturing.jpg'
    },
    {
      id: 5,
      title: 'Education Platform Modernization',
      client: 'EduTech Academy',
      industry: 'Education',
      challenge: 'Outdated platform and poor user engagement',
      solution: 'Complete platform redesign with AI-powered learning features',
      results: [
        '60% increase in student engagement',
        '40% improvement in course completion rates',
        '85% user satisfaction score'
      ],
      duration: '5 months',
      team: '6 developers',
      image: '/case-studies/education-platform.jpg'
    },
    {
      id: 6,
      title: 'Logistics Optimization System',
      client: 'Global Logistics Co.',
      industry: 'Logistics',
      challenge: 'Inefficient route planning and high operational costs',
      solution: 'AI-powered route optimization and real-time tracking system',
      results: [
        '25% reduction in fuel costs',
        '30% improvement in delivery times',
        '50% decrease in route planning time'
      ],
      duration: '9 months',
      team: '11 developers',
      image: '/case-studies/logistics-optimization.jpg'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Average ROI', value: '250%', icon: TrendingUp },
    { label: 'Team Members', value: '50+', icon: Users }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses transform with AI and IT solutions. Real results from real clients." />
        <meta name="keywords" content="case studies, success stories, AI projects, IT solutions, client results, project portfolio" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform with our AI and IT solutions. Real projects, real results.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Track Record
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Numbers that speak to our success and commitment to excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <stat.icon className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-cyan-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how we've helped businesses across different industries achieve their goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-64 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">Case Study</h3>
                      <p className="text-cyan-100">Coming Soon</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-cyan-600 font-medium uppercase tracking-wide">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4 font-medium">Client: {study.client}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600 mb-4">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Team: {study.team}
                      </div>
                      <button className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300 flex items-center">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Free Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                View Our Services
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default CaseStudiesPage;