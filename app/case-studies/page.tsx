'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Inc.',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticket routing system',
      results: [
        '60% reduction in response time',
        '40% cost savings',
        '95% customer satisfaction rate'
      ],
      metrics: {
        responseTime: '60%',
        costSavings: '40%',
        satisfaction: '95%'
      }
    },
    {
      id: 2,
      title: 'Cloud Migration Success Story',
      client: 'Global Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Legacy systems causing operational inefficiencies',
      solution: 'Complete cloud migration with modern infrastructure',
      results: [
        '50% improvement in system performance',
        '30% reduction in IT costs',
        '99.9% uptime achieved'
      ],
      metrics: {
        performance: '50%',
        costReduction: '30%',
        uptime: '99.9%'
      }
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement Project',
      client: 'Financial Services Ltd.',
      industry: 'Finance',
      challenge: 'Increasing security threats and compliance requirements',
      solution: 'Comprehensive security audit and implementation',
      results: [
        'Zero security breaches',
        '100% compliance achieved',
        '24/7 threat monitoring'
      ],
      metrics: {
        breaches: '0',
        compliance: '100%',
        monitoring: '24/7'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real success stories from our clients. See how we've helped businesses transform with AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <div className="flex items-center text-gray-400 mb-4">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{study.client} • {study.industry}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                    <p className="text-gray-300 mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={16} />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{study.metrics.responseTime || study.metrics.performance || study.metrics.breaches}</div>
                      <div className="text-sm text-gray-400">Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{study.metrics.costSavings || study.metrics.costReduction || study.metrics.compliance}</div>
                      <div className="text-sm text-gray-400">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{study.metrics.satisfaction || study.metrics.uptime || study.metrics.monitoring}</div>
                      <div className="text-sm text-gray-400">Satisfaction</div>
                    </div>
                  </div>

                  <a
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-1" size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
