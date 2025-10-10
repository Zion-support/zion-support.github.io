'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Award } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  featured: boolean;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Inefficient supply chain management leading to 15% inventory waste and delayed deliveries.',
      solution: 'Implemented AI-driven demand forecasting and automated inventory management system.',
      results: [
        'Reduced inventory waste by 40%',
        'Improved delivery times by 35%',
        'Saved $2.5M annually',
        'Increased customer satisfaction by 25%'
      ],
      image: '/images/case-studies/supply-chain.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Healthcare AI Diagnosis System',
      client: 'Metro Health Systems',
      industry: 'Healthcare',
      challenge: 'Manual diagnosis processes causing delays and inconsistent results.',
      solution: 'Deployed AI-powered medical imaging analysis and diagnostic assistance platform.',
      results: [
        'Reduced diagnosis time by 60%',
        'Improved accuracy by 30%',
        'Enhanced patient outcomes',
        'Reduced operational costs by $1.8M'
      ],
      image: '/images/case-studies/healthcare-ai.jpg',
      featured: false
    },
    {
      id: '3',
      title: 'Financial Fraud Detection',
      client: 'SecureBank International',
      industry: 'Financial Services',
      challenge: 'Increasing fraud incidents with traditional detection methods failing.',
      solution: 'Implemented real-time AI fraud detection system with machine learning algorithms.',
      results: [
        'Detected 95% of fraudulent transactions',
        'Reduced false positives by 70%',
        'Saved $5.2M in prevented fraud',
        'Improved customer trust significantly'
      ],
      image: '/images/case-studies/fraud-detection.jpg',
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Real-world success stories of AI and IT implementations" />
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">$50M+</div>
                <div className="text-gray-300">Cost Savings Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className={`bg-gray-800/50 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 ${
                    study.featured ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="h-48 bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                    <div className="text-white text-4xl">📊</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {study.industry}
                      </span>
                      {study.featured && (
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {study.title}
                    </h3>
                    
                    <p className="text-cyan-400 font-semibold mb-4">
                      {study.client}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with AI and IT solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;