'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock, Award } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Inefficient supply chain management leading to 30% waste and delayed deliveries',
      solution: 'Implemented AI-driven demand forecasting and automated inventory management system',
      results: [
        '40% reduction in inventory costs',
        '25% improvement in delivery times',
        '60% decrease in stockouts',
        '35% increase in overall efficiency'
      ],
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: 2,
      title: 'Cybersecurity Transformation',
      client: 'Financial Services Inc',
      industry: 'Finance',
      challenge: 'Frequent security breaches and compliance issues affecting customer trust',
      solution: 'Deployed comprehensive security framework with AI-powered threat detection',
      results: [
        '90% reduction in security incidents',
        '100% compliance with regulations',
        '50% faster incident response',
        'Zero data breaches in 12 months'
      ],
      duration: '4 months',
      team: '12 specialists'
    },
    {
      id: 3,
      title: 'AI Customer Service Automation',
      client: 'E-commerce Platform',
      industry: 'Retail',
      challenge: 'High customer service costs and inconsistent response times',
      solution: 'Deployed AI-powered chatbots and automated ticket routing system',
      results: [
        '70% reduction in support costs',
        '80% faster response times',
        '95% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      duration: '3 months',
      team: '6 specialists'
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Migration',
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'Outdated on-premise systems causing downtime and scalability issues',
      solution: 'Migrated to cloud infrastructure with automated scaling and monitoring',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '3x faster application deployment',
        'Enhanced data security and compliance'
      ],
      duration: '8 months',
      team: '15 specialists'
    },
    {
      id: 5,
      title: 'Data Analytics Platform',
      client: 'Marketing Agency',
      industry: 'Marketing',
      challenge: 'Lack of actionable insights from client data affecting campaign performance',
      solution: 'Built custom analytics platform with real-time reporting and predictive modeling',
      results: [
        '300% improvement in campaign ROI',
        'Real-time performance monitoring',
        'Predictive analytics for better targeting',
        'Automated reporting and insights'
      ],
      duration: '5 months',
      team: '10 specialists'
    },
    {
      id: 6,
      title: 'Process Automation Implementation',
      client: 'Insurance Company',
      industry: 'Insurance',
      challenge: 'Manual processes causing delays and errors in claims processing',
      solution: 'Implemented RPA and AI-powered document processing system',
      results: [
        '75% reduction in processing time',
        '90% decrease in manual errors',
        '60% cost savings in operations',
        'Improved customer satisfaction'
      ],
      duration: '4 months',
      team: '8 specialists'
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-600" />, value: '100+', label: 'Projects Completed' },
    { icon: <Award className="w-8 h-8 text-green-600" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <TrendingUp className="w-8 h-8 text-purple-600" />, value: '40%', label: 'Average Cost Savings' },
    { icon: <Clock className="w-8 h-8 text-yellow-600" />, value: '6 months', label: 'Average Project Duration' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT projects. See how we've helped businesses transform their operations with cutting-edge technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI projects, IT solutions, business transformation, client results" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Success <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Stories</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover how we've helped businesses across industries transform their operations 
                with cutting-edge AI and IT solutions. Real results, real impact.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8"
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Featured Case Studies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore detailed case studies showcasing our expertise and the transformative 
                impact of our solutions across different industries.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{study.duration}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {study.title}
                    </h3>
                    
                    <p className="text-cyan-400 font-semibold mb-4">{study.client}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{study.team}</span>
                    </div>
                    <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/services"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CaseStudiesPage;