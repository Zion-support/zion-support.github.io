import React from 'react';
import { Helmet } from 'react-helmet-async';
import SuccessStoriesShowcase from '../components/SuccessStoriesShowcase';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing Company",
      industry: "Manufacturing",
      challenge: "Legacy system modernization and process automation",
      solution: "Implemented AI-powered predictive maintenance and automated workflows",
      results: [
        "40% reduction in downtime",
        "60% improvement in operational efficiency",
        "$2.5M annual cost savings"
      ],
      image: "🏭"
    },
    {
      id: 2,
      title: "Global Financial Services Firm",
      industry: "Financial Services",
      challenge: "Digital transformation and cloud migration",
      solution: "Complete cloud infrastructure migration with enhanced security",
      results: [
        "99.9% uptime achieved",
        "50% faster transaction processing",
        "Enhanced security compliance"
      ],
      image: "🏦"
    },
    {
      id: 3,
      title: "Healthcare Technology Provider",
      industry: "Healthcare",
      challenge: "AI implementation for patient care optimization",
      solution: "Machine learning models for predictive healthcare analytics",
      results: [
        "35% improvement in patient outcomes",
        "25% reduction in readmission rates",
        "Streamlined care coordination"
      ],
      image: "🏥"
    },
    {
      id: 4,
      title: "E-commerce Retail Giant",
      industry: "Retail",
      challenge: "Scalable infrastructure and personalization",
      solution: "Cloud-native architecture with AI-driven personalization",
      results: [
        "300% increase in website performance",
        "45% boost in conversion rates",
        "Seamless scalability during peak seasons"
      ],
      image: "🛒"
    },
    {
      id: 5,
      title: "Technology Startup",
      industry: "Technology",
      challenge: "Rapid growth and infrastructure scaling",
      solution: "DevOps automation and microservices architecture",
      results: [
        "90% reduction in deployment time",
        "99.95% system reliability",
        "10x faster feature delivery"
      ],
      image: "🚀"
    },
    {
      id: 6,
      title: "Energy Sector Leader",
      industry: "Energy",
      challenge: "IoT integration and data analytics",
      solution: "Comprehensive IoT platform with real-time analytics",
      results: [
        "20% improvement in energy efficiency",
        "Real-time monitoring capabilities",
        "Predictive maintenance implementation"
      ],
      image: "⚡"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore successful digital transformation case studies and learn how Zion Tech Group has helped businesses achieve their goals." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories & Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses across various industries achieve 
              remarkable results through innovative technology solutions.
            </p>
          </div>

          {/* Success Stories Showcase */}
          <SuccessStoriesShowcase />

          {/* Detailed Case Studies */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Case Studies</h2>
            <div className="space-y-12">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
                      <div className="text-white text-6xl">{study.image}</div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Challenge:</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Solution:</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Results:</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {study.results.map((result, index) => (
                              <li key={index} className="text-gray-600">{result}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Read Full Case Study
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industry Statistics */}
          <section className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Our Impact by Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">$50M+</div>
                <div className="text-gray-600">Cost Savings Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Start Your Project
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;