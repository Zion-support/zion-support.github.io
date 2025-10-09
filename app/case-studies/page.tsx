import React from 'react';
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'Global Telecom AI Transformation',
      company: 'Fortune 500 Telecom',
      industry: 'Telecommunications',
      challenge: 'Legacy systems causing 40% operational inefficiency',
      solution: 'Implemented AI-powered automation and predictive analytics',
      results: [
        '60% reduction in operational costs',
        '300% increase in customer satisfaction',
        '85% improvement in system reliability',
        '$4.7B in additional revenue generated'
      ],
      duration: '18 months',
      team: '25 AI specialists',
      technologies: ['Machine Learning', 'NLP', 'Predictive Analytics', 'Cloud AI']
    },
    {
      title: 'Healthcare AI Platform',
      company: 'Regional Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Manual patient data processing causing delays and errors',
      solution: 'AI-powered document processing and patient analytics',
      results: [
        '90% reduction in data processing time',
        '95% accuracy in patient diagnosis',
        '70% decrease in administrative costs',
        '50% improvement in patient outcomes'
      ],
      duration: '12 months',
      team: '15 AI engineers',
      technologies: ['Computer Vision', 'NLP', 'Predictive Analytics', 'HIPAA Compliance']
    },
    {
      title: 'Manufacturing AI Optimization',
      company: 'Automotive Manufacturer',
      industry: 'Manufacturing',
      challenge: 'Quality control issues and production inefficiencies',
      solution: 'AI-powered quality control and predictive maintenance',
      results: [
        '80% reduction in defects',
        '45% increase in production efficiency',
        '60% decrease in maintenance costs',
        '99.5% quality assurance rate'
      ],
      duration: '15 months',
      team: '20 AI specialists',
      technologies: ['Computer Vision', 'IoT Integration', 'Predictive Maintenance', 'Edge AI']
    },
    {
      title: 'Financial Services AI Suite',
      company: 'Regional Bank',
      industry: 'Financial Services',
      challenge: 'Fraud detection and risk assessment inefficiencies',
      solution: 'Comprehensive AI fraud detection and risk management platform',
      results: [
        '99.9% fraud detection accuracy',
        '75% reduction in false positives',
        '90% decrease in fraud losses',
        '200% improvement in risk assessment speed'
      ],
      duration: '10 months',
      team: '18 AI engineers',
      technologies: ['Machine Learning', 'Anomaly Detection', 'Real-time Analytics', 'Security AI']
    },
    {
      title: 'Retail AI Personalization',
      company: 'E-commerce Platform',
      industry: 'Retail',
      challenge: 'Low customer engagement and conversion rates',
      solution: 'AI-powered recommendation engine and personalization platform',
      results: [
        '35% increase in conversion rates',
        '50% improvement in customer engagement',
        '40% increase in average order value',
        '60% reduction in cart abandonment'
      ],
      duration: '8 months',
      team: '12 AI specialists',
      technologies: ['Recommendation Systems', 'NLP', 'Behavioral Analytics', 'Real-time AI']
    },
    {
      title: 'Smart City AI Implementation',
      company: 'Metropolitan City',
      industry: 'Government',
      challenge: 'Traffic congestion and resource management inefficiencies',
      solution: 'Comprehensive smart city AI platform with traffic optimization',
      results: [
        '45% reduction in traffic congestion',
        '30% improvement in energy efficiency',
        '50% decrease in emergency response time',
        '25% increase in citizen satisfaction'
      ],
      duration: '24 months',
      team: '35 AI specialists',
      technologies: ['IoT Integration', 'Traffic Analytics', 'Resource Optimization', 'Smart City AI']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped organizations across industries transform their operations with cutting-edge AI and IT solutions.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-medium mr-4">
                      {study.industry}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {study.duration} • {study.team}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {study.title}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Results
                  </h4>
                  
                  <div className="space-y-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg">
                    <div className="text-sm text-gray-400 mb-2">Project Details</div>
                    <div className="flex items-center text-white">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="mr-4">{study.duration}</span>
                      <Users className="w-4 h-4 mr-2" />
                      <span>{study.team}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-purple-100 mb-6">
            Let's discuss how we can help transform your organization with AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/consultation"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;