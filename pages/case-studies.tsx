import React from 'react';
import type { NextPage } from 'next';
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Award } from 'lucide-react';

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Optimization",
      company: "RetailTech Solutions",
      industry: "E-commerce",
      challenge: "High cart abandonment rates and poor customer experience",
      solution: "Implemented AI-powered recommendation engine and automated email follow-up system",
      results: [
        "40% increase in conversion rates",
        "60% reduction in cart abandonment",
        "35% increase in average order value"
      ],
      testimonial: "Zion Tech Group transformed our online business. The AI recommendations have been a game-changer.",
      author: "Sarah Johnson, CEO"
    },
    {
      id: 2,
      title: "Cloud Cost Reduction Initiative",
      company: "Global Finance Corp",
      industry: "Financial Services",
      challenge: "Excessive cloud spending with poor resource utilization",
      solution: "Deployed cloud cost optimization suite with automated scaling policies",
      results: [
        "50% reduction in cloud costs",
        "80% improvement in resource utilization",
        "99.9% uptime achievement"
      ],
      testimonial: "We saved over $2M annually while improving performance. Exceptional results.",
      author: "Michael Chen, CTO"
    },
    {
      id: 3,
      title: "Zero Trust Security Implementation",
      company: "HealthTech Innovations",
      industry: "Healthcare",
      challenge: "Security vulnerabilities and compliance requirements",
      solution: "Implemented comprehensive zero trust security platform with identity management",
      results: [
        "90% reduction in security incidents",
        "100% compliance with HIPAA regulations",
        "Zero data breaches in 12 months"
      ],
      testimonial: "Our security posture has never been stronger. Highly recommend their expertise.",
      author: "Dr. Jennifer Liu, CISO"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable results with our AI and technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <Award className="w-6 h-6 text-blue-600 mr-2" />
                        <span className="text-blue-600 font-semibold text-sm">{study.industry}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {study.title}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700 mb-6">
                        {study.company}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Results:</h4>
                      <ul className="space-y-3 mb-6">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-gray-700 italic mb-4">"{study.testimonial}"</p>
                        <p className="text-gray-600 font-semibold">— {study.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Join the companies that have transformed their business with our AI and technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;