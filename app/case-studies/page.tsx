import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce AI Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Manual inventory management and customer support bottlenecks',
      solution: 'Implemented AI inventory optimizer and customer support automation',
      results: [
        '40% reduction in stockouts',
        '60% faster customer response times',
        '25% increase in customer satisfaction',
        '35% reduction in operational costs'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      duration: '3 months',
      services: ['AI Inventory Optimizer Pro', 'AI Customer Support Pro']
    },
    {
      id: 2,
      title: 'Manufacturing Process Automation',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual workflow processes causing delays and errors',
      solution: 'Deployed AI workflow automator and predictive maintenance system',
      results: [
        '50% reduction in process time',
        '80% decrease in manual errors',
        '30% improvement in equipment uptime',
        '45% cost savings in operations'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
      duration: '4 months',
      services: ['AI Workflow Automator Pro', 'Predictive Analytics']
    },
    {
      id: 3,
      title: 'Financial Services Digital Transformation',
      company: 'First National Bank',
      industry: 'Financial Services',
      challenge: 'Outdated systems and manual compliance processes',
      solution: 'Cloud migration and AI-powered compliance automation',
      results: [
        '99.9% system uptime achieved',
        '70% faster compliance reporting',
        '50% reduction in IT costs',
        '100% regulatory compliance maintained'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      duration: '6 months',
      services: ['Cloud Infrastructure', 'AI Compliance Automation']
    },
    {
      id: 4,
      title: 'Healthcare Data Analytics',
      company: 'Regional Medical Center',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient resource allocation',
      solution: 'Integrated data analytics platform with AI-powered insights',
      results: [
        '35% improvement in patient outcomes',
        '25% reduction in readmission rates',
        '40% better resource utilization',
        '60% faster diagnosis times'
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop',
      duration: '5 months',
      services: ['Data Analytics', 'AI Healthcare Solutions']
    },
    {
      id: 5,
      title: 'SaaS Platform Scaling',
      company: 'CloudTech Solutions',
      industry: 'SaaS',
      challenge: 'Rapid user growth overwhelming existing infrastructure',
      solution: 'Scalable cloud architecture with AI-powered user analytics',
      results: [
        '300% increase in user capacity',
        '90% reduction in downtime',
        '50% improvement in user satisfaction',
        '200% increase in revenue'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      duration: '2 months',
      services: ['Cloud Infrastructure', 'AI User Analytics']
    },
    {
      id: 6,
      title: 'Retail Chain Digital Marketing',
      company: 'Fashion Forward Stores',
      industry: 'Retail',
      challenge: 'Ineffective marketing campaigns and poor customer engagement',
      solution: 'AI-powered email marketing and social media automation',
      results: [
        '150% increase in email open rates',
        '80% improvement in social media engagement',
        '45% increase in online sales',
        '60% reduction in marketing costs'
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop',
      duration: '3 months',
      services: ['AI Email Marketing Pro', 'AI Social Scheduler Pro']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Discover how we've helped businesses transform with our AI and IT solutions through real success stories." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses across industries transform with our AI and IT solutions.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${study.image})` }}>
                  <div className="h-full bg-black bg-opacity-40 flex items-end">
                    <div className="p-6 text-white">
                      <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-lg text-gray-600 mb-4">{study.company}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.services.map((service, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Duration: {study.duration}</span>
                    <span>Project #{study.id.toString().padStart(3, '0')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-blue-600 rounded-lg p-12 text-center text-white mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Impact in Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$50M+</div>
                <div className="text-blue-100">Cost Savings Generated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and IT solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Start Your Project
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;