'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Zap } from 'lucide-react';

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
      title: 'AI-Powered Customer Service Transformation',
      client: 'Global E-commerce Giant',
      industry: 'E-commerce',
      challenge: 'High customer service costs and inconsistent response quality across multiple channels.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: ['60% reduction in response time', '40% cost savings', '95% customer satisfaction rate', '24/7 multilingual support'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'Regional Bank',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing performance issues and high maintenance costs.',
      solution: 'Complete cloud migration to AWS with microservices architecture and automated scaling.',
      results: ['50% improvement in system performance', '30% reduction in operational costs', '99.9% uptime achieved', 'Enhanced security compliance'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: '3',
      title: 'IoT Data Analytics Platform',
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Massive amounts of sensor data with no effective analysis or predictive capabilities.',
      solution: 'Built comprehensive IoT analytics platform with real-time monitoring and predictive maintenance.',
      results: ['25% reduction in downtime', '15% increase in production efficiency', 'Predictive maintenance accuracy of 92%', 'Real-time monitoring capabilities'],
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: Users },
    { label: 'Cost Savings', value: '40%', icon: TrendingUp },
    { label: 'Awards Won', value: '12', icon: Award }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies. See how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI projects, cloud migration, Zion Tech Group" />
        <meta property="og:title" content="Case Studies | Zion Tech Group" />
        <meta property="og:description" content="Explore our successful projects and case studies. See how we've helped businesses transform with AI and IT solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Case
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Studies</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses transform with innovative AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Track Record
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Numbers that speak to our commitment to excellence and client success.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've delivered value for our clients.
              </p>
            </div>
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={study.id} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                      {study.featured && (
                        <div className="flex items-center gap-2 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                          <Zap className="w-4 h-4" />
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <span>{study.client}</span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-1" />
                              <span className="text-gray-300 text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <button className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="mr-2 h-5 w-5" />
                Start Your Project
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Users className="mr-2 h-5 w-5" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;