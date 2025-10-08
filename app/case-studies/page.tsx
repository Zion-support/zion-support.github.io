import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Optimize production line efficiency and reduce waste',
      solution: 'AI-powered predictive maintenance and quality control system',
      results: [
        '40% reduction in production downtime',
        '25% decrease in material waste',
        '$50M annual cost savings',
        '99.5% quality improvement'
      ],
      image: '🏭'
    },
    {
      title: 'Global Financial Services Firm',
      industry: 'Financial Services',
      challenge: 'Improve fraud detection and risk assessment',
      solution: 'Advanced machine learning models for real-time fraud detection',
      results: [
        '95% fraud detection accuracy',
        '70% reduction in false positives',
        '$200M prevented in fraudulent transactions',
        '50% faster risk assessment'
      ],
      image: '🏦'
    },
    {
      title: 'Healthcare System Network',
      industry: 'Healthcare',
      challenge: 'Enhance patient care and operational efficiency',
      solution: 'AI-powered diagnostic assistance and resource optimization',
      results: [
        '30% improvement in diagnostic accuracy',
        '45% reduction in patient wait times',
        '60% increase in operational efficiency',
        '25% cost reduction in operations'
      ],
      image: '🏥'
    },
    {
      title: 'E-commerce Platform',
      industry: 'Retail',
      challenge: 'Personalize customer experience and increase sales',
      solution: 'AI-driven recommendation engine and customer analytics',
      results: [
        '35% increase in conversion rates',
        '50% improvement in customer satisfaction',
        '40% boost in average order value',
        '60% reduction in cart abandonment'
      ],
      image: '🛒'
    },
    {
      title: 'Logistics & Supply Chain Company',
      industry: 'Logistics',
      challenge: 'Optimize delivery routes and inventory management',
      solution: 'AI-powered route optimization and demand forecasting',
      results: [
        '30% reduction in delivery time',
        '25% decrease in fuel costs',
        '40% improvement in inventory turnover',
        '50% reduction in stockouts'
      ],
      image: '🚚'
    },
    {
      title: 'Energy & Utilities Company',
      industry: 'Energy',
      challenge: 'Improve grid efficiency and renewable energy integration',
      solution: 'Smart grid AI system with predictive analytics',
      results: [
        '20% improvement in grid efficiency',
        '35% increase in renewable energy utilization',
        '45% reduction in energy waste',
        '30% decrease in maintenance costs'
      ],
      image: '⚡'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Real-world success stories of AI transformation across industries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Download Case Study
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how we've helped companies across industries achieve remarkable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{study.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{study.industry}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Read Full Case Study
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let us help you achieve similar results with our AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;