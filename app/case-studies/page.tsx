'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration: string;
  team: string;
  technologies: string[];
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Automation',
      client: 'Fortune 500 Retail Company',
      industry: 'Retail',
      challenge: 'High customer service costs and inconsistent response times across multiple channels.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: [
        '95% reduction in response time',
        '60% decrease in customer service costs',
        '98% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      image: '/images/case-study-1.jpg',
      duration: '3 months',
      team: '8 specialists',
      technologies: ['NLP', 'Machine Learning', 'AWS', 'React']
    },
    {
      id: '2',
      title: 'Predictive Analytics for Supply Chain',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Supply chain disruptions and inventory management inefficiencies.',
      solution: 'Developed predictive analytics platform with real-time demand forecasting and automated inventory optimization.',
      results: [
        '40% reduction in inventory costs',
        '85% improvement in demand forecasting accuracy',
        '30% decrease in stockouts',
        '$2M annual savings'
      ],
      image: '/images/case-study-2.jpg',
      duration: '4 months',
      team: '12 specialists',
      technologies: ['Python', 'TensorFlow', 'Kubernetes', 'PostgreSQL']
    },
    {
      id: '3',
      title: 'AI-Driven Marketing Automation',
      client: 'E-commerce Platform',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and ineffective marketing campaigns.',
      solution: 'Built AI-powered marketing automation platform with personalized content generation and customer segmentation.',
      results: [
        '300% increase in conversion rates',
        '250% improvement in email open rates',
        '180% boost in customer engagement',
        '50% reduction in marketing costs'
      ],
      image: '/images/case-study-3.jpg',
      duration: '2 months',
      team: '6 specialists',
      technologies: ['Machine Learning', 'Node.js', 'MongoDB', 'Redis']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT solution implementations. Real case studies showcasing measurable results and business transformations." />
        <meta name="keywords" content="case studies, success stories, AI implementations, IT solutions, business transformation, results" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions. 
              Real results, real impact.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition-colors">
                  <div className="h-48 bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">📊</div>
                      <div className="text-sm opacity-80">{study.industry}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-cyan-400 font-medium">{study.client}</span>
                      <span className="text-sm text-gray-400">{study.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge:</h4>
                      <p className="text-sm text-gray-400">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution:</h4>
                      <p className="text-sm text-gray-400">{study.solution}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 3).map((result, index) => (
                          <li key={index} className="text-sm text-gray-400 flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Track Record</h2>
              <p className="text-lg text-gray-300">Numbers that speak for themselves</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">200+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">$50M+</div>
                <div className="text-gray-300">Client Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the ranks of successful businesses that have transformed their operations with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;