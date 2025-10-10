'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      category: 'ai',
      challenge: 'Inefficient supply chain management leading to 30% inventory waste and delayed deliveries',
      solution: 'Implemented AI-driven demand forecasting and automated inventory management system',
      results: [
        '35% reduction in inventory costs',
        '50% improvement in delivery times',
        '25% increase in operational efficiency',
        '$2.5M annual savings'
      ],
      image: '/images/case-studies/supply-chain.jpg',
      testimonial: 'The AI solution transformed our supply chain operations. We\'ve never been more efficient.',
      author: 'Sarah Johnson, COO'
    },
    {
      id: 2,
      title: 'Cloud Migration & Digital Transformation',
      client: 'Financial Services Inc',
      industry: 'Finance',
      category: 'cloud',
      challenge: 'Legacy systems causing security vulnerabilities and operational inefficiencies',
      solution: 'Complete cloud migration with modern security protocols and automated workflows',
      results: [
        '99.9% uptime achieved',
        '60% faster processing times',
        'Enhanced security compliance',
        '40% reduction in IT costs'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      testimonial: 'Our digital transformation exceeded all expectations. The team was professional and thorough.',
      author: 'Michael Chen, CTO'
    },
    {
      id: 3,
      title: 'Machine Learning Customer Analytics',
      client: 'E-commerce Platform',
      industry: 'Retail',
      category: 'ai',
      challenge: 'Low customer retention rates and ineffective marketing campaigns',
      solution: 'Deployed ML algorithms for customer behavior analysis and personalized recommendations',
      results: [
        '45% increase in customer retention',
        '30% boost in conversion rates',
        '25% improvement in customer satisfaction',
        '50% higher average order value'
      ],
      image: '/images/case-studies/customer-analytics.jpg',
      testimonial: 'The ML solution revolutionized our customer experience. Highly recommend Zion Tech Group.',
      author: 'Emily Rodriguez, VP Marketing'
    }
  ];

  const categories = ['All', 'AI', 'Cloud', 'Web Development', 'Mobile'];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies. See how we've helped businesses achieve remarkable results." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT projects, business results" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Case Studies
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">📊</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                        {study.category.toUpperCase()}
                      </span>
                      <span className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{study.client}</p>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                      <strong>Solution:</strong> {study.solution}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {study.results.slice(0, 3).map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <blockquote className="text-sm text-gray-300 italic mb-3">
                        "{study.testimonial}"
                      </blockquote>
                      <p className="text-xs text-gray-400">— {study.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
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