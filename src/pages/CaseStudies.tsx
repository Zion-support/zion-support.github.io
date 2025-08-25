import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'Healthcare AI Transformation',
      company: 'Regional Medical Center',
      industry: 'Healthcare',
      challenge: 'Needed to reduce diagnostic errors and improve patient outcomes while maintaining HIPAA compliance.',
      solution: 'Implemented AI-powered diagnostic assistance system with real-time image analysis and predictive analytics.',
      results: [
        'Reduced diagnostic errors by 35%',
        'Improved patient outcomes by 28%',
        'Achieved 99.9% HIPAA compliance',
        'Reduced diagnostic time by 40%'
      ],
      technologies: ['AI/ML', 'Computer Vision', 'HIPAA Compliance', 'Predictive Analytics'],
      image: '🏥',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Financial Services Automation',
      company: 'Global Investment Bank',
      industry: 'Finance',
      challenge: 'Required automated risk assessment and fraud detection across multiple global markets.',
      solution: 'Developed comprehensive AI-driven risk management platform with real-time monitoring and automated alerts.',
      results: [
        'Reduced fraud incidents by 60%',
        'Improved risk assessment accuracy by 45%',
        'Automated 80% of compliance processes',
        'Saved $2.5M annually in operational costs'
      ],
      technologies: ['AI/ML', 'Risk Management', 'Fraud Detection', 'Compliance Automation'],
      image: '🏦',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Manufacturing IoT Integration',
      company: 'Automotive Manufacturer',
      industry: 'Manufacturing',
      challenge: 'Needed to optimize production efficiency and reduce downtime through predictive maintenance.',
      solution: 'Implemented IoT-based monitoring system with AI-powered predictive analytics and automated maintenance scheduling.',
      results: [
        'Reduced unplanned downtime by 55%',
        'Increased production efficiency by 32%',
        'Reduced maintenance costs by 40%',
        'Improved product quality by 25%'
      ],
      technologies: ['IoT', 'Predictive Analytics', 'Automation', 'Quality Control'],
      image: '🏭',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Retail Digital Transformation',
      company: 'National Retail Chain',
      industry: 'Retail',
      challenge: 'Required omnichannel customer experience with personalized recommendations and inventory optimization.',
      solution: 'Built comprehensive e-commerce platform with AI-powered personalization and real-time inventory management.',
      results: [
        'Increased online sales by 150%',
        'Improved customer satisfaction by 45%',
        'Reduced inventory costs by 30%',
        'Enhanced customer retention by 60%'
      ],
      technologies: ['E-commerce', 'AI Personalization', 'Inventory Management', 'Omnichannel'],
      image: '🛍️',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Government Cybersecurity',
      company: 'Federal Agency',
      industry: 'Government',
      challenge: 'Needed to protect sensitive data from advanced cyber threats while maintaining compliance standards.',
      solution: 'Implemented multi-layered cybersecurity framework with AI-powered threat detection and automated response.',
      results: [
        'Prevented 99.9% of cyber attacks',
        'Reduced incident response time by 70%',
        'Achieved 100% compliance standards',
        'Protected 10M+ citizen records'
      ],
      technologies: ['Cybersecurity', 'AI Threat Detection', 'Compliance', 'Automated Response'],
      image: '🏛️',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Education AI Platform',
      company: 'University System',
      industry: 'Education',
      challenge: 'Required personalized learning experiences and automated assessment for 50,000+ students.',
      solution: 'Developed AI-powered learning management system with adaptive content and intelligent tutoring.',
      results: [
        'Improved student performance by 35%',
        'Reduced administrative workload by 50%',
        'Enhanced learning engagement by 60%',
        'Scaled to support 100,000+ students'
      ],
      technologies: ['AI/ML', 'Learning Analytics', 'Adaptive Learning', 'Automated Assessment'],
      image: '🎓',
      readTime: '7 min read'
    }
  ];

  const industries = [
    'All Industries',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Government',
    'Education',
    'Technology'
  ];

  const technologies = [
    'All Technologies',
    'AI/ML',
    'Cybersecurity',
    'IoT',
    'Cloud Computing',
    'Data Analytics',
    'Automation',
    'Blockchain'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how organizations across industries are transforming their businesses with Zion Tech Group solutions.
          </p>
          
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <select className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
              {industries.map((industry) => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
            <select className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
              {technologies.map((tech) => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                {/* Header */}
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{study.image}</div>
                    <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                      {study.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{study.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{study.company}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center">
                          <span className="text-cyan-400 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-700">
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 text-center font-medium"
                  >
                    Read Full Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our solutions can help you achieve similar results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}