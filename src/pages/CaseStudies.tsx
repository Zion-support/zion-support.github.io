import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "AI-Powered Customer Service Transformation",
      client: "Fortune 500 Retail Company",
      industry: "Retail",
      challenge: "High customer service costs and long response times",
      solution: "Implemented AI chatbots and automated response systems",
      results: "40% reduction in support costs, 60% faster response times"
    },
    {
      title: "Cloud Migration & DevOps Automation",
      client: "Healthcare Technology Provider",
      industry: "Healthcare",
      challenge: "Legacy infrastructure causing scalability issues",
      solution: "Complete cloud migration with automated CI/CD pipelines",
      results: "99.9% uptime, 80% faster deployment cycles"
    },
    {
      title: "Cybersecurity Infrastructure Overhaul",
      client: "Financial Services Firm",
      industry: "Finance",
      challenge: "Outdated security systems vulnerable to modern threats",
      solution: "Zero-trust architecture with advanced threat detection",
      results: "100% threat detection rate, 0 security breaches"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped organizations transform their technology infrastructure 
              and achieve remarkable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{study.industry}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{study.title}</h3>
                <p className="text-gray-400 text-sm mb-4">Client: {study.client}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Results</h4>
                    <p className="text-gray-300 text-sm font-semibold">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Success Story?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how our solutions can transform your business and deliver measurable results.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;