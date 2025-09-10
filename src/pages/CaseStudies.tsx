import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "AI-Powered Healthcare Platform",
      client: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Needed to process large volumes of medical data and provide real-time insights",
      solution: "Implemented custom AI models for medical image analysis and predictive diagnostics",
      results: "40% reduction in diagnosis time, 95% accuracy in image analysis"
    },
    {
      title: "Cloud Migration for Financial Services",
      client: "FinanceCorp",
      industry: "Financial Services",
      challenge: "Legacy systems causing performance issues and high maintenance costs",
      solution: "Complete cloud migration with enhanced security and scalability",
      results: "60% cost reduction, 99.9% uptime, 3x faster processing"
    },
    {
      title: "Cybersecurity Implementation",
      client: "TechStart Inc",
      industry: "Technology",
      challenge: "Growing security threats and compliance requirements",
      solution: "Comprehensive cybersecurity suite with threat detection and response",
      results: "Zero security incidents, 100% compliance, 24/7 monitoring"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Real-world success stories of our AI and technology solutions."
        keywords={["case studies", "success stories", "client results", "AI implementation"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Case Studies</h1>
          <p className="text-xl text-gray-300">
            Real-world success stories from our clients
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                      {study.industry}
                    </span>
                    <span className="text-gray-400">{study.client}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Our Solution</h4>
                  <p className="text-gray-300 mb-4">{study.solution}</p>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                  <p className="text-green-400 font-semibold">{study.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;