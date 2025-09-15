import React from 'react';
import { useParams } from 'react-router-dom';

const CaseStudyPage = () => {
  const { slug } = useParams();

  const caseStudies = {
    'ai-transformation': {
      title: 'AI Transformation Success Story',
<<<<<<< HEAD
      company: 'Fortune 500 Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Legacy systems and manual processes were limiting operational efficiency and growth potential.',
      solution: 'Implemented comprehensive AI transformation including autonomous systems, predictive analytics, and intelligent automation.',
      results: [
        '40% reduction in operational costs',
        '300% increase in productivity',
        '99.9% system uptime achieved',
        '$2M annual savings realized'
      ],
      technologies: ['Machine Learning', 'Predictive Analytics', 'Process Automation', 'Neural Networks']
    },
    'blockchain-implementation': {
      title: 'Blockchain Implementation',
      company: 'Global Supply Chain Corp',
      industry: 'Supply Chain',
      challenge: 'Supply chain transparency and traceability issues affecting customer trust and regulatory compliance.',
      solution: 'Deployed enterprise blockchain solution with smart contracts and real-time tracking capabilities.',
      results: [
        '$2M annual cost savings',
        '100% supply chain transparency',
        '50% reduction in disputes',
        'Real-time tracking implemented'
      ],
      technologies: ['Blockchain', 'Smart Contracts', 'IoT Integration', 'Cryptographic Security']
    },
    'cloud-migration': {
      title: 'Cloud Migration Success',
      company: 'Financial Services Inc',
      industry: 'Financial Services',
      challenge: 'Legacy on-premises infrastructure was costly, inflexible, and difficult to maintain.',
      solution: 'Migrated entire infrastructure to cloud with microservices architecture and automated scaling.',
      results: [
        '99.9% uptime achieved',
        '60% faster performance',
        '50% cost reduction',
        'Zero downtime migration'
      ],
      technologies: ['Cloud Computing', 'Microservices', 'Containerization', 'Auto-scaling']
    }
  };

  const caseStudy = caseStudies[slug] || caseStudies['ai-transformation'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Case Study
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{caseStudy.title}</h1>
            <p className="text-xl text-gray-600">{caseStudy.company} • {caseStudy.industry}</p>
          </div>

          {/* Challenge Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{caseStudy.challenge}</p>
          </div>

          {/* Solution Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{caseStudy.solution}</p>
          </div>

          {/* Results Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Results Achieved</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-lg">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Success Story?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let us help you achieve similar results with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Start Your Project
              </a>
              <a 
                href="/pages/ComprehensiveServices2025" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                View All Services
=======
      company: 'Fortune 500 Company',
      challenge: 'Manual processes causing delays and errors',
      solution: 'Implemented autonomous AI agents',
      results: '40% cost reduction, 300% productivity increase'
    },
    'blockchain-implementation': {
      title: 'Blockchain Implementation',
      company: 'Global Supply Chain Company',
      challenge: 'Supply chain transparency and traceability',
      solution: 'Enterprise blockchain solution',
      results: '$2M annual savings, streamlined operations'
    },
    'cloud-migration': {
      title: 'Cloud Migration Success',
      company: 'Technology Startup',
      challenge: 'Legacy system limitations',
      solution: 'Cloud infrastructure migration',
      results: '99.9% uptime, 60% faster performance'
    }
  };

  const caseStudy = caseStudies[slug] || {
    title: 'Case Study Not Found',
    company: 'Unknown',
    challenge: 'This case study does not exist',
    solution: 'Please check the URL',
    results: 'No results available'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{caseStudy.title}</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Company</h2>
                <p className="text-gray-600 mb-6">{caseStudy.company}</p>
                
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Challenge</h2>
                <p className="text-gray-600 mb-6">{caseStudy.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Solution</h2>
                <p className="text-gray-600 mb-6">{caseStudy.solution}</p>
                
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Results</h2>
                <p className="text-gray-600 mb-6">{caseStudy.results}</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <a href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
                ← Back to Home
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;