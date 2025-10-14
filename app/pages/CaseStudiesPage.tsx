import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, TrendingUp, Users, Clock } from "lucide-react";

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform AI Optimization",
      client: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Low conversion rates and high cart abandonment",
      solution: "Implemented AI-powered recommendation engine and personalized shopping experience",
      results: ["40% increase in conversion rates", "25% reduction in cart abandonment", "35% increase in average order value"],
      icon: TrendingUp
    },
    {
      title: "Healthcare Data Analytics Platform",
      client: "MediCare Solutions",
      industry: "Healthcare",
      challenge: "Fragmented patient data and inefficient reporting",
      solution: "Built comprehensive data analytics platform with AI-powered insights",
      results: ["60% faster reporting", "50% reduction in data processing time", "90% improvement in data accuracy"],
      icon: Users
    },
    {
      title: "Manufacturing Process Automation",
      client: "AutoParts Manufacturing",
      industry: "Manufacturing",
      challenge: "Manual quality control processes and high defect rates",
      solution: "Implemented AI-powered quality control and automated inspection systems",
      results: ["70% reduction in defect rates", "45% increase in production efficiency", "80% reduction in manual inspection time"],
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT projects and see how we've helped businesses transform with technology." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform with our AI and IT solutions.
            Real projects, real results.
          </p>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="flex items-center mb-4">
                  <study.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                    <p className="text-gray-600">{study.client} • {study.industry}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 mb-4">{study.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600 mb-4">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-green-600">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let us help you achieve similar results with our AI and IT solutions.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;