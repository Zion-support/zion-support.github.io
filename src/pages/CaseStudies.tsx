import React from 'react';
import SEO from '../components/SEO';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Platform",
      client: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Needed to implement AI-driven patient diagnosis and treatment recommendations",
      solution: "Developed a comprehensive AI platform with machine learning algorithms for medical data analysis",
      results: "40% improvement in diagnosis accuracy, 60% reduction in processing time",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Enterprise Cybersecurity Suite",
      client: "Global Finance Corp",
      industry: "Financial Services",
      challenge: "Required advanced threat detection and prevention across multiple systems",
      solution: "Implemented AI-powered cybersecurity monitoring with real-time threat analysis",
      results: "99.9% threat detection rate, 50% reduction in security incidents",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Smart Manufacturing Optimization",
      client: "Industrial Dynamics",
      industry: "Manufacturing",
      challenge: "Optimize production processes and reduce waste in manufacturing operations",
      solution: "Deployed IoT sensors and AI analytics for predictive maintenance and process optimization",
      results: "25% increase in efficiency, 30% reduction in waste",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <>
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore our successful projects and client case studies showcasing our AI and technology expertise."
        keywords="case studies, success stories, client projects, ai solutions, technology implementations"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations with cutting-edge AI and technology solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Case Study {study.id}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-purple-400">Client:</span> {study.client}
                    </p>
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-purple-400">Industry:</span> {study.industry}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-1">Challenge</h4>
                      <p className="text-sm text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-1">Solution</h4>
                      <p className="text-sm text-gray-300">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-1">Results</h4>
                      <p className="text-sm text-gray-300">{study.results}</p>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Read Full Case Study
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our AI and technology solutions.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;