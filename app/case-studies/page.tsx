'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, Calendar, User, Building, TrendingUp, CheckCircle, Star } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    improvement: string;
    timeframe: string;
    roi: string;
  };
  image: string;
  date: string;
  author: string;
  tags: string[];
}

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    'all',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Technology',
    'Education',
    'Government'
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Patient Diagnosis System',
      company: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'MedTech Solutions needed to reduce diagnosis time and improve accuracy in their radiology department, which was struggling with a 40% increase in patient volume.',
      solution: 'We implemented an AI-powered diagnostic system that uses computer vision and machine learning to analyze medical images, providing instant preliminary diagnoses with 95% accuracy.',
      results: [
        'Reduced diagnosis time by 60%',
        'Improved diagnostic accuracy by 25%',
        'Handled 40% more patients with same staff',
        'Reduced false positives by 30%'
      ],
      metrics: {
        improvement: '60% faster diagnosis',
        timeframe: '3 months',
        roi: '300% ROI in first year'
      },
      image: '/images/case-studies/healthcare-ai.jpg',
      date: '2024-01-15',
      author: 'Dr. Sarah Johnson',
      tags: ['AI', 'Healthcare', 'Computer Vision', 'Machine Learning']
    },
    {
      id: '2',
      title: 'Fraud Detection & Prevention System',
      company: 'SecureBank',
      industry: 'Finance',
      challenge: 'SecureBank was experiencing increasing fraud attempts, losing millions annually due to sophisticated cyber attacks and identity theft schemes.',
      solution: 'We developed a real-time fraud detection system using advanced machine learning algorithms that analyzes transaction patterns and user behavior to identify suspicious activities instantly.',
      results: [
        'Reduced fraud losses by 85%',
        'Detected 99.7% of fraudulent transactions',
        'Reduced false positives by 70%',
        'Saved $12M annually in fraud prevention'
      ],
      metrics: {
        improvement: '85% fraud reduction',
        timeframe: '6 months',
        roi: '400% ROI in first year'
      },
      image: '/images/case-studies/finance-fraud.jpg',
      date: '2024-01-10',
      author: 'Michael Chen',
      tags: ['AI', 'Finance', 'Security', 'Machine Learning']
    },
    {
      id: '3',
      title: 'Smart Manufacturing Optimization',
      company: 'AutoParts Inc',
      industry: 'Manufacturing',
      challenge: 'AutoParts Inc needed to optimize their production line efficiency and reduce waste while maintaining quality standards in their automotive parts manufacturing.',
      solution: 'We implemented an AI-driven manufacturing optimization system that uses IoT sensors, predictive analytics, and machine learning to optimize production schedules and quality control.',
      results: [
        'Increased production efficiency by 35%',
        'Reduced waste by 50%',
        'Improved product quality by 20%',
        'Reduced energy consumption by 25%'
      ],
      metrics: {
        improvement: '35% efficiency gain',
        timeframe: '4 months',
        roi: '250% ROI in first year'
      },
      image: '/images/case-studies/manufacturing-ai.jpg',
      date: '2024-01-05',
      author: 'Lisa Rodriguez',
      tags: ['AI', 'Manufacturing', 'IoT', 'Predictive Analytics']
    }
  ];

  const filteredCaseStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group - Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies. See how we've helped businesses transform with AI and IT solutions, achieving remarkable results." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT transformation, business results, client testimonials" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Success <span className="text-cyan-400">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses transform with our AI and IT solutions. 
            Real results from real clients.
          </p>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {industry === 'all' ? 'All Industries' : industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(study.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <User className="w-4 h-4 mr-2" />
                        {study.author}
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4">{study.title}</h2>
                    <div className="flex items-center mb-6">
                      <Building className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-gray-300">{study.company}</span>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Challenge</h3>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Solution</h3>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="bg-slate-700 rounded-lg h-64 mb-6 flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <div className="text-4xl mb-2">📊</div>
                        <div className="text-sm">Case Study Image</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Metrics</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="text-sm text-gray-400">Improvement</div>
                            <div className="text-xl font-bold text-cyan-400">{study.metrics.improvement}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">Timeframe</div>
                            <div className="text-lg font-semibold text-white">{study.metrics.timeframe}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">ROI</div>
                            <div className="text-lg font-semibold text-green-400">{study.metrics.roi}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2">
                          <span>Read Full Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="px-4 py-3 border border-slate-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 rounded-lg transition-all duration-300">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No case studies found in this industry.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;