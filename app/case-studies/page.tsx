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
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Inefficient supply chain management leading to 30% waste and delayed deliveries',
      solution: 'Implemented AI-driven demand forecasting and automated inventory management system',
      results: [
        'Reduced inventory costs by 40%',
        'Improved delivery times by 60%',
        'Eliminated 30% of waste',
        'Increased customer satisfaction by 45%'
      ],
      image: '/images/case-studies/supply-chain.jpg',
      duration: '6 months',
      team: '8 AI specialists'
    },
    {
      id: '2',
      title: 'Healthcare AI Diagnostic System',
      client: 'Metro Health Systems',
      industry: 'Healthcare',
      challenge: 'Manual diagnostic processes causing delays and inconsistent results',
      solution: 'Developed AI-powered medical imaging analysis and diagnostic assistance platform',
      results: [
        'Reduced diagnostic time by 70%',
        'Improved accuracy by 35%',
        'Processed 10x more cases',
        'Saved $2M annually in operational costs'
      ],
      image: '/images/case-studies/healthcare-ai.jpg',
      duration: '8 months',
      team: '12 AI engineers'
    },
    {
      id: '3',
      title: 'Financial Fraud Detection Platform',
      client: 'SecureBank International',
      industry: 'Financial Services',
      challenge: 'Increasing fraud incidents with traditional detection methods failing',
      solution: 'Built real-time AI fraud detection system with machine learning algorithms',
      results: [
        'Detected 95% of fraudulent transactions',
        'Reduced false positives by 80%',
        'Prevented $50M in potential losses',
        'Improved customer trust scores by 25%'
      ],
      image: '/images/case-studies/fraud-detection.jpg',
      duration: '4 months',
      team: '6 AI specialists'
    },
    {
      id: '4',
      title: 'Smart City IoT Integration',
      client: 'City of Innovation',
      industry: 'Government',
      challenge: 'Fragmented city services and inefficient resource management',
      solution: 'Integrated IoT sensors with AI analytics for comprehensive city management',
      results: [
        'Reduced energy consumption by 25%',
        'Improved traffic flow by 40%',
        'Enhanced public safety by 50%',
        'Saved $15M in operational costs'
      ],
      image: '/images/case-studies/smart-city.jpg',
      duration: '12 months',
      team: '15 IoT and AI experts'
    },
    {
      id: '5',
      title: 'E-commerce Personalization Engine',
      client: 'RetailMax Online',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        'Increased conversion rates by 65%',
        'Improved average order value by 45%',
        'Enhanced customer retention by 55%',
        'Generated $30M additional revenue'
      ],
      image: '/images/case-studies/ecommerce-ai.jpg',
      duration: '5 months',
      team: '10 AI and data scientists'
    },
    {
      id: '6',
      title: 'Manufacturing Quality Control AI',
      client: 'Precision Manufacturing Ltd',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing defects and delays',
      solution: 'Deployed computer vision AI for automated quality inspection and defect detection',
      results: [
        'Reduced defect rates by 90%',
        'Increased production speed by 35%',
        'Eliminated manual inspection costs',
        'Improved product quality consistency'
      ],
      image: '/images/case-studies/quality-control.jpg',
      duration: '3 months',
      team: '7 AI engineers'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful AI and IT implementations. Real case studies showing measurable results for clients across industries." />
        <meta name="keywords" content="AI case studies, IT success stories, client results, AI implementation, digital transformation" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real success stories from our AI and IT implementations" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable results with our AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <article key={study.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-400/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">📊</div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-medium">{study.industry}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Client: {study.client}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{study.team}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>{study.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-6 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI and IT solutions can transform your business and deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="https://ziontechgroup.com/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="https://ziontechgroup.com/consultation"
                  className="inline-flex items-center gap-2 bg-slate-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-slate-600 transition-all duration-200 border border-slate-600"
                >
                  Free Consultation
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;