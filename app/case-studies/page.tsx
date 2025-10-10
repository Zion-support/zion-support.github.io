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
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticket routing system',
      results: [
        'Reduced response time by 80%',
        'Cut customer service costs by 60%',
        'Improved customer satisfaction by 45%',
        'Handled 10x more inquiries with same team size'
      ],
      image: '/images/case-study-1.jpg',
      duration: '3 months',
      team: '5 AI specialists, 2 developers'
    },
    {
      id: '2',
      title: 'Predictive Analytics for Manufacturing',
      client: 'Global Manufacturing Inc.',
      industry: 'Manufacturing',
      challenge: 'Equipment downtime causing production delays',
      solution: 'AI-powered predictive maintenance system with IoT sensors',
      results: [
        'Reduced unplanned downtime by 70%',
        'Increased production efficiency by 35%',
        'Saved $2M annually in maintenance costs',
        'Improved equipment lifespan by 40%'
      ],
      image: '/images/case-study-2.jpg',
      duration: '6 months',
      team: '8 AI engineers, 4 data scientists'
    },
    {
      id: '3',
      title: 'Financial Fraud Detection System',
      client: 'SecureBank Financial',
      industry: 'Banking',
      challenge: 'Increasing fraud cases and false positives',
      solution: 'Advanced AI fraud detection with real-time monitoring',
      results: [
        'Detected 95% of fraud attempts',
        'Reduced false positives by 80%',
        'Saved $5M in prevented fraud',
        'Improved customer trust scores'
      ],
      image: '/images/case-study-3.jpg',
      duration: '4 months',
      team: '6 AI specialists, 3 security experts'
    },
    {
      id: '4',
      title: 'Healthcare AI Diagnosis Assistant',
      client: 'MedCenter Hospital',
      industry: 'Healthcare',
      challenge: 'Long diagnosis times and diagnostic accuracy issues',
      solution: 'AI-powered medical imaging analysis and diagnosis support',
      results: [
        'Reduced diagnosis time by 50%',
        'Improved diagnostic accuracy by 30%',
        'Enhanced patient outcomes',
        'Reduced misdiagnosis by 60%'
      ],
      image: '/images/case-study-4.jpg',
      duration: '8 months',
      team: '10 AI researchers, 5 medical experts'
    },
    {
      id: '5',
      title: 'E-commerce Personalization Engine',
      client: 'ShopSmart Retail',
      industry: 'Retail',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'AI-driven product recommendations and personalized shopping',
      results: [
        'Increased conversion rates by 65%',
        'Boosted average order value by 40%',
        'Improved customer retention by 55%',
        'Generated $10M additional revenue'
      ],
      image: '/images/case-study-5.jpg',
      duration: '5 months',
      team: '7 AI engineers, 3 UX designers'
    },
    {
      id: '6',
      title: 'Supply Chain Optimization',
      client: 'LogisticsPro Global',
      industry: 'Logistics',
      challenge: 'Inefficient supply chain and high operational costs',
      solution: 'AI-powered supply chain optimization and demand forecasting',
      results: [
        'Reduced operational costs by 45%',
        'Improved delivery times by 60%',
        'Optimized inventory levels by 50%',
        'Increased customer satisfaction by 70%'
      ],
      image: '/images/case-study-6.jpg',
      duration: '7 months',
      team: '9 AI specialists, 4 logistics experts'
    }
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed', description: 'Successfully delivered AI solutions' },
    { value: '95%', label: 'Client Satisfaction', description: 'Based on post-project surveys' },
    { value: '$50M+', label: 'Cost Savings', description: 'Generated for our clients' },
    { value: '24/7', label: 'Support', description: 'Round-the-clock assistance' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | AI & IT Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT implementations across various industries. See how we've helped businesses transform with cutting-edge technology." />
        <meta name="keywords" content="AI case studies, IT success stories, AI implementation, business transformation, AI solutions" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real success stories of AI and IT implementations" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-6xl text-cyan-400">📊</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
                      <Users className="w-4 h-4" />
                      <span>{study.client}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4">
                      <Award className="w-4 h-4" />
                      <span>{study.industry}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>Duration: {study.duration}</span>
                    <span>Team: {study.team}</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI and IT solutions can transform your business 
                and deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-gray-300">Ready to start your transformation journey?</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white font-semibold">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Request a Consultation</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Description
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Tell us about your project requirements"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Request Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;