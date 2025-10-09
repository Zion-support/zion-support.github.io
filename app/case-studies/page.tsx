'use client';
import React from 'react';
import { BarChart, TrendingUp, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'Fortune 500 Manufacturing Company',
      challenge: 'Manual quality control processes causing delays and errors',
      solution: 'AI-powered computer vision system for automated quality inspection',
      results: ['95% accuracy improvement', '60% faster inspection', '$2M annual savings'],
      icon: BarChart
    },
    {
      title: 'Global E-commerce Platform',
      challenge: 'High customer service costs and response times',
      solution: 'AI chatbot with natural language processing capabilities',
      results: ['80% query resolution', '50% cost reduction', '24/7 availability'],
      icon: TrendingUp
    },
    {
      title: 'Financial Services Firm',
      challenge: 'Manual fraud detection missing sophisticated attacks',
      solution: 'Advanced AI fraud detection system with real-time monitoring',
      results: ['99.9% detection accuracy', '90% false positive reduction', 'Real-time alerts'],
      icon: Award
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories of businesses transformed by our AI and technology solutions. See measurable results and ROI."
        keywords={['case studies', 'success stories', 'AI results', 'business transformation', 'ROI']}
        canonicalUrl="https://ziontechgroup.com/case-studies"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real-world success stories of businesses transformed by our AI and technology solutions.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <study.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300">
                          <div className="w-1 h-1 bg-green-400 rounded-full mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join these companies and transform your business with our proven AI solutions.
              </p>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Start Your Transformation
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;