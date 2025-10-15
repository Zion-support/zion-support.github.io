import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ChartBarIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  BuildingOfficeIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce AI Transformation',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'AI-powered recommendation engine and chatbot',
      results: [
        '40% increase in conversion rates',
        '60% reduction in cart abandonment',
        '35% increase in average order value',
        '50% reduction in customer service costs'
      ],
      duration: '6 months',
      team: '8 specialists',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient reporting',
      solution: 'AI-powered data integration and predictive analytics',
      results: [
        '70% faster data processing',
        '45% improvement in patient outcomes',
        '30% reduction in operational costs',
        '90% accuracy in predictive models'
      ],
      duration: '8 months',
      team: '12 specialists',
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Manufacturing IoT Integration',
      client: 'Global Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Equipment downtime and maintenance inefficiencies',
      solution: 'IoT sensors with AI predictive maintenance',
      results: [
        '50% reduction in unplanned downtime',
        '25% increase in production efficiency',
        '40% reduction in maintenance costs',
        '95% accuracy in failure prediction'
      ],
      duration: '10 months',
      team: '15 specialists',
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'Financial Services AI Chatbot',
      client: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'High customer service costs and long wait times',
      solution: 'AI-powered customer service chatbot',
      results: [
        '80% reduction in response time',
        '60% decrease in customer service costs',
        '90% customer satisfaction rate',
        '24/7 availability'
      ],
      duration: '4 months',
      team: '6 specialists',
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'Real Estate Market Analysis',
      client: 'PropertyInvest Pro',
      industry: 'Real Estate',
      challenge: 'Manual market analysis and inaccurate valuations',
      solution: 'AI-powered market analysis and property valuation',
      results: [
        '85% accuracy in property valuations',
        '70% faster market analysis',
        '30% increase in successful investments',
        '50% reduction in analysis time'
      ],
      duration: '5 months',
      team: '7 specialists',
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'Supply Chain Optimization',
      client: 'LogisticsMax',
      industry: 'Logistics',
      challenge: 'Inefficient supply chain and high transportation costs',
      solution: 'AI-powered supply chain optimization',
      results: [
        '35% reduction in transportation costs',
        '50% improvement in delivery times',
        '25% increase in inventory turnover',
        '40% reduction in stockouts'
      ],
      duration: '7 months',
      team: '10 specialists',
      image: '/api/placeholder/600/400'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '40%', label: 'Average Cost Reduction' },
    { number: '60%', label: 'Average Efficiency Gain' }
  ];

  return (
    <>
      <SEOHead
        title="Case Studies - Zion Tech Group"
        description="Explore our successful AI and IT transformation projects. See how we've helped businesses achieve remarkable results with our innovative solutions."
        keywords="case studies, AI projects, IT transformation, business success stories, technology solutions, digital transformation"
        canonicalUrl="https://ziontechgroup.com/case-studies"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Real results from real businesses. See how our AI and IT solutions have transformed companies across industries.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Case Study */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={caseStudies[0].image} 
                  alt={caseStudies[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Featured Case Study
                  </span>
                  <span className="ml-4 text-sm text-gray-500">{caseStudies[0].industry}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{caseStudies[0].title}</h2>
                <p className="text-gray-600 mb-6"><strong>Client:</strong> {caseStudies[0].client}</p>
                <p className="text-gray-600 mb-6"><strong>Challenge:</strong> {caseStudies[0].challenge}</p>
                <p className="text-gray-600 mb-6"><strong>Solution:</strong> {caseStudies[0].solution}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {caseStudies[0].results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <BuildingOfficeIcon className="w-4 h-4 mr-2" />
                  <span className="mr-4">{caseStudies[0].duration}</span>
                  <CpuChipIcon className="w-4 h-4 mr-2" />
                  <span>{caseStudies[0].team}</span>
                </div>

                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                  Read Full Case Study
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(1).map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4"><strong>Client:</strong> {study.client}</p>
                  <p className="text-gray-600 mb-4 text-sm">{study.challenge}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <BuildingOfficeIcon className="w-3 h-3 mr-1" />
                    <span className="mr-3">{study.duration}</span>
                    <CpuChipIcon className="w-3 h-3 mr-1" />
                    <span>{study.team}</span>
                  </div>

                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm">
                    Read Case Study
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Load More Case Studies
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-xl mb-8">
              Let us help you achieve similar results with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </a>
              <a 
                href="/demo" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;