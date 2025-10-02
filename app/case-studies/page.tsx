import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: "Fortune 500 Manufacturing Transformation",
      description: "Implemented AI-powered predictive maintenance reducing downtime by 40% and saving $25M annually.",
      industry: "Manufacturing",
      challenge: "High equipment downtime and maintenance costs",
      solution: "AI-powered predictive maintenance system",
      results: [
        { metric: "Downtime Reduction", value: "40%" },
        { metric: "Annual Savings", value: "$25M" },
        { metric: "ROI", value: "350%" }
      ],
      icon: "🏭"
    },
    {
      title: "Healthcare AI Platform Deployment",
      description: "Deployed comprehensive AI platform improving patient outcomes and operational efficiency.",
      industry: "Healthcare",
      challenge: "Manual processes and inconsistent patient care",
      solution: "AI-powered healthcare management platform",
      results: [
        { metric: "Patient Satisfaction", value: "95%" },
        { metric: "Processing Speed", value: "3x Faster" },
        { metric: "Cost Reduction", value: "30%" }
      ],
      icon: "🏥"
    },
    {
      title: "Financial Services Automation",
      description: "Automated loan processing and risk assessment using machine learning algorithms.",
      industry: "Financial Services",
      challenge: "Slow loan processing and manual risk assessment",
      solution: "ML-powered loan processing automation",
      results: [
        { metric: "Processing Time", value: "75% Faster" },
        { metric: "Accuracy", value: "98%" },
        { metric: "Cost Savings", value: "50%" }
      ],
      icon: "🏦"
    },
    {
      title: "E-commerce Personalization Engine",
      description: "Built AI-driven recommendation system increasing conversion rates and customer engagement.",
      industry: "E-commerce",
      challenge: "Low conversion rates and poor customer experience",
      solution: "AI-powered personalization engine",
      results: [
        { metric: "Conversion Rate", value: "45% Increase" },
        { metric: "Customer Engagement", value: "60% Higher" },
        { metric: "Revenue Growth", value: "35%" }
      ],
      icon: "🛒"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Real success stories from our enterprise clients. See how we've transformed businesses with AI and technology solutions." />
      </Helmet>
      
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our enterprise clients across various industries. 
              See how we've transformed businesses with cutting-edge technology solutions.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4">{study.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Results</h4>
                    <div className="space-y-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">{result.value}</div>
                          <div className="text-sm text-gray-600">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how we can help transform your business with our technology solutions.
              </p>
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;