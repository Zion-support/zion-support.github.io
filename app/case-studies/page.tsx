'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Star, Building, Target, Award, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
=======
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, DollarSign } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

<<<<<<< HEAD
const CaseStudiesPage: React.FC = () => {
=======
export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
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
        'Reduced inventory waste by 45%',
        'Improved delivery times by 60%',
        'Saved $2.3M annually in operational costs',
        'Increased customer satisfaction by 35%'
      ],
      image: '/images/case-study-1.jpg',
      duration: '6 months',
      team: '8 specialists',
      budget: '$500K'
    },
    {
      id: 2,
      title: 'Cloud Migration & Security Enhancement',
      client: 'Financial Services Inc',
      industry: 'Finance',
      category: 'cloud',
      challenge: 'Legacy on-premise infrastructure causing security vulnerabilities and scalability issues',
      solution: 'Complete cloud migration with advanced security protocols and compliance framework',
      results: [
        '99.9% uptime achieved',
        '50% reduction in security incidents',
        '40% cost savings on infrastructure',
        'Full compliance with financial regulations'
      ],
      image: '/images/case-study-2.jpg',
      duration: '4 months',
      team: '12 specialists',
      budget: '$750K'
    },
    {
      id: 3,
      title: 'AI Customer Service Automation',
      client: 'E-commerce Platform',
      industry: 'Retail',
      category: 'ai',
      challenge: 'High customer service costs and inconsistent response times affecting customer satisfaction',
      solution: 'Deployed AI-powered chatbot and automated ticket routing system',
      results: [
        '80% reduction in response time',
        '60% decrease in support costs',
        '95% customer satisfaction rate',
        '24/7 multilingual support capability'
      ],
      image: '/images/case-study-3.jpg',
      duration: '3 months',
      team: '6 specialists',
      budget: '$300K'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: caseStudies.length },
    { id: 'ai', name: 'AI Solutions', count: caseStudies.filter(cs => cs.category === 'ai').length },
    { id: 'cloud', name: 'Cloud Services', count: caseStudies.filter(cs => cs.category === 'cloud').length },
    { id: 'security', name: 'Cybersecurity', count: caseStudies.filter(cs => cs.category === 'security').length }
  ];

  const filteredStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>
<<<<<<< HEAD
              </div>
            ))}
          </div>
        </div>
      </section>
=======

      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
              </p>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-400 mb-4">{study.client}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-300">
                        <Clock className="w-4 h-4 mr-2" />
                        Duration: {study.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <Users className="w-4 h-4 mr-2" />
                        Team: {study.team}
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Budget: {study.budget}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Let's discuss how we can help transform your business with our proven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <SEOOptimizer />
    </div>
  );
<<<<<<< HEAD
};

export default CaseStudiesPage;

=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
