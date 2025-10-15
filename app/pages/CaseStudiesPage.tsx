import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ExternalLink, Calendar, User, Building } from "lucide-react";

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: "AI-Powered Customer Service Automation",
      client: "TechCorp Solutions",
      industry: "Technology",
      challenge: "High customer service volume leading to long response times and customer dissatisfaction.",
      solution: "Implemented AI-powered chatbots and automated ticket routing system.",
      results: [
        "75% reduction in response time",
        "90% customer satisfaction rate",
        "60% cost savings on support staff",
        "24/7 automated support coverage"
      ],
      image: "/api/placeholder/600/400",
      date: "2024"
    },
    {
      title: "Predictive Analytics for Supply Chain",
      client: "Global Manufacturing Inc.",
      industry: "Manufacturing",
      challenge: "Supply chain disruptions and inventory management inefficiencies.",
      solution: "Developed machine learning models for demand forecasting and inventory optimization.",
      results: [
        "40% reduction in inventory costs",
        "85% improvement in demand accuracy",
        "30% reduction in stockouts",
        "50% faster decision making"
      ],
      image: "/api/placeholder/600/400",
      date: "2024"
    },
    {
      title: "Cybersecurity Threat Detection System",
      client: "Financial Services Group",
      industry: "Finance",
      challenge: "Increasing cybersecurity threats and need for real-time threat detection.",
      solution: "Built AI-powered threat detection and response system with real-time monitoring.",
      results: [
        "99.9% threat detection accuracy",
        "80% faster incident response",
        "Zero successful breaches",
        "24/7 automated monitoring"
      ],
      image: "/api/placeholder/600/400",
      date: "2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT solutions through detailed case studies showcasing real-world results and client success stories." />
        <meta name="keywords" content="case studies, AI solutions, IT projects, client success, technology implementation" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
            Real projects, real results, real impact.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Building className="w-5 h-5 text-blue-400 mr-2" />
                    <span className="text-blue-400 font-semibold">{study.industry}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                  <div className="flex items-center text-gray-300 mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span className="font-semibold">{study.client}</span>
                    <Calendar className="w-4 h-4 ml-4 mr-2" />
                    <span>{study.date}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
                
                <div className="relative">
                  <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Case Study Image</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl p-12 border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results with our proven AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold">
              Start Your Project
            </button>
            <button className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
