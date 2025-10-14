import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  ChartBarIcon,
  CpuChipIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      client: 'TechCorp Solutions',
      industry: 'E-commerce',
      challenge: 'Needed to improve customer experience and increase sales through AI-driven recommendations',
      solution: 'Implemented machine learning algorithms for personalized product recommendations and automated customer service',
      results: [
        '40% increase in conversion rates',
        '60% improvement in customer satisfaction',
        '35% reduction in support tickets'
      ],
      icon: CpuChipIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Migration',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing performance issues and high maintenance costs',
      solution: 'Complete cloud migration with enhanced security and scalability',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster application performance'
      ],
      icon: CloudIcon,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Data Analytics Dashboard',
      client: 'RetailMax Chain',
      industry: 'Retail',
      challenge: 'Lack of real-time insights into business performance and customer behavior',
      solution: 'Custom analytics dashboard with predictive modeling and real-time reporting',
      results: [
        '25% increase in revenue',
        '30% improvement in inventory management',
        '45% better decision-making speed'
      ],
      icon: ChartBarIcon,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industries Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies showcasing AI solutions, cloud infrastructure, and digital transformation projects for various industries." />
        <meta name="keywords" content="case studies, success stories, AI projects, cloud migration, digital transformation, client results" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Real Results for Real Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Discover how we've helped businesses across various industries achieve 
              their goals through innovative AI solutions, cloud infrastructure, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've transformed businesses across different industries
            </p>
          </div>
          
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-lg flex items-center justify-center mr-4`}>
                      <study.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                      <p className="text-gray-300">{study.client} • {study.industry}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-gray-300">
                            <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-slate-800 rounded-xl p-8">
                    <h4 className="text-xl font-bold text-white mb-4">Project Overview</h4>
                    <p className="text-gray-300 mb-6">
                      This case study demonstrates our ability to deliver measurable results 
                      through innovative technology solutions tailored to specific business needs.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you achieve similar results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const page = React.lazy(() => import('./page'));
export default page;