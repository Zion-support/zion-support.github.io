'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Inc.',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticket routing',
      results: '50% reduction in response time, 30% cost savings'
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing operational inefficiencies',
      solution: 'Complete cloud migration with enhanced security',
      results: '99.9% uptime, 40% faster processing, improved security'
    },
    {
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Comprehensive security audit and implementation',
      results: 'Zero security incidents, 100% compliance, improved patient trust'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Discover how we've helped businesses transform with AI and IT solutions. Read our success stories and case studies." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, client results, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped businesses transform with our AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">Client:</h4>
                          <p className="text-gray-600">{study.client}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Industry:</h4>
                          <p className="text-gray-600">{study.industry}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Challenge:</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">Solution:</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Results:</h4>
                          <p className="text-gray-600">{study.results}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CaseStudiesPage;