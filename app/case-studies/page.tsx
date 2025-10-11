import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Inefficient supply chain management leading to 30% waste and delayed deliveries',
      solution: 'Implemented AI-driven demand forecasting and automated inventory management',
      results: [
        '40% reduction in inventory costs',
        '25% improvement in delivery times',
        '60% decrease in waste',
        '$2.3M annual savings'
      ],
      image: '/images/case-study-1.jpg'
    },
    {
      id: 2,
      title: 'Quantum-Enhanced Cybersecurity Platform',
      client: 'Financial Services Inc',
      industry: 'Finance',
      challenge: 'Increasing cyber threats and need for quantum-resistant security',
      solution: 'Developed quantum-resistant encryption and AI-powered threat detection',
      results: [
        '99.9% threat detection accuracy',
        'Zero security breaches in 12 months',
        '50% faster threat response',
        'Compliance with all regulations'
      ],
      image: '/images/case-study-2.jpg'
    },
    {
      id: 3,
      title: 'AI-Driven Customer Experience Transformation',
      client: 'E-commerce Giant',
      industry: 'Retail',
      challenge: 'Poor customer satisfaction and high support costs',
      solution: 'Deployed AI chatbots and personalized recommendation engines',
      results: [
        '85% improvement in customer satisfaction',
        '70% reduction in support costs',
        '35% increase in conversion rates',
        '24/7 multilingual support'
      ],
      image: '/images/case-study-3.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Discover how Zion Tech Group has helped businesses transform their operations with AI and IT solutions. Real results from real clients." />
        <meta name="keywords" content="AI case studies, IT success stories, business transformation, AI implementation results" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations and achieve remarkable results through innovative AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                      <span className="text-gray-300">{study.client}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start">
                              <TrendingUp className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <button className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 h-96 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📊</div>
                      <p className="text-white text-lg">Case Study Visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-300">
              Real results from real clients across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">150+</div>
              <div className="text-white text-lg">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
              <div className="text-white text-lg">Client Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
              <div className="text-white text-lg">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with cutting-edge AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Start Your Project
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;