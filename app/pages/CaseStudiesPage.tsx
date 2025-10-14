import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowTrendingUpIcon,
  UsersIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  EyeIcon,
  CalendarIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Finance' },
    { id: 'education', name: 'Education' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform AI Optimization',
      client: 'TechRetail Inc.',
      industry: 'ecommerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        { metric: 'Conversion Rate', value: '+45%', icon: ArrowTrendingUpIcon },
        { metric: 'Cart Abandonment', value: '-30%', icon: ArrowTrendingUpIcon },
        { metric: 'Customer Satisfaction', value: '+60%', icon: UsersIcon },
        { metric: 'Implementation Time', value: '3 months', icon: ClockIcon }
      ],
      description: 'We helped TechRetail Inc. transform their e-commerce platform with AI-powered personalization, resulting in significant improvements in conversion rates and customer satisfaction.',
      date: '2024-01-15',
      thumbnail: '/images/case-studies/ecommerce-ai.jpg'
    },
    {
      id: 2,
      title: 'Manufacturing Process Automation',
      client: 'AutoParts Manufacturing',
      industry: 'manufacturing',
      challenge: 'Manual quality control processes causing delays and errors',
      solution: 'Deployed computer vision and ML models for automated quality inspection',
      results: [
        { metric: 'Defect Detection', value: '+95%', icon: CheckCircleIcon },
        { metric: 'Processing Time', value: '-70%', icon: ClockIcon },
        { metric: 'Cost Savings', value: '$2M/year', icon: ArrowTrendingUpIcon },
        { metric: 'Implementation Time', value: '4 months', icon: ClockIcon }
      ],
      description: 'Automated quality control processes using computer vision and machine learning, reducing defects and improving efficiency.',
      date: '2024-01-10',
      thumbnail: '/images/case-studies/manufacturing-automation.jpg'
    },
    {
      id: 3,
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Systems',
      industry: 'healthcare',
      challenge: 'Fragmented patient data and inefficient diagnosis processes',
      solution: 'Built comprehensive data analytics platform with predictive modeling',
      results: [
        { metric: 'Diagnosis Accuracy', value: '+40%', icon: CheckCircleIcon },
        { metric: 'Processing Time', value: '-50%', icon: ClockIcon },
        { metric: 'Patient Outcomes', value: '+35%', icon: UsersIcon },
        { metric: 'Implementation Time', value: '6 months', icon: ClockIcon }
      ],
      description: 'Developed an integrated analytics platform that improved patient diagnosis accuracy and treatment outcomes.',
      date: '2024-01-05',
      thumbnail: '/images/case-studies/healthcare-analytics.jpg'
    },
    {
      id: 4,
      title: 'Financial Fraud Detection System',
      client: 'SecureBank',
      industry: 'finance',
      challenge: 'Increasing fraud incidents and manual detection processes',
      solution: 'Implemented real-time AI-powered fraud detection and prevention system',
      results: [
        { metric: 'Fraud Detection', value: '+90%', icon: CheckCircleIcon },
        { metric: 'False Positives', value: '-60%', icon: ArrowTrendingUpIcon },
        { metric: 'Response Time', value: '-80%', icon: ClockIcon },
        { metric: 'Implementation Time', value: '2 months', icon: ClockIcon }
      ],
      description: 'Deployed advanced machine learning models for real-time fraud detection, significantly improving security and reducing false positives.',
      date: '2023-12-20',
      thumbnail: '/images/case-studies/fraud-detection.jpg'
    },
    {
      id: 5,
      title: 'Cloud Migration and Optimization',
      client: 'DataFlow Systems',
      industry: 'ecommerce',
      challenge: 'Legacy infrastructure causing performance issues and high costs',
      solution: 'Migrated to cloud with optimized architecture and automated scaling',
      results: [
        { metric: 'Performance', value: '+300%', icon: ArrowTrendingUpIcon },
        { metric: 'Cost Reduction', value: '-60%', icon: ArrowTrendingUpIcon },
        { metric: 'Uptime', value: '99.9%', icon: CheckCircleIcon },
        { metric: 'Implementation Time', value: '5 months', icon: ClockIcon }
      ],
      description: 'Successfully migrated legacy systems to cloud infrastructure with significant performance improvements and cost savings.',
      date: '2023-12-15',
      thumbnail: '/images/case-studies/cloud-migration.jpg'
    },
    {
      id: 6,
      title: 'Educational Learning Management System',
      client: 'EduTech University',
      industry: 'education',
      challenge: 'Outdated learning platform with poor user experience',
      solution: 'Developed modern LMS with AI-powered personalized learning paths',
      results: [
        { metric: 'Student Engagement', value: '+75%', icon: UsersIcon },
        { metric: 'Learning Outcomes', value: '+50%', icon: CheckCircleIcon },
        { metric: 'Platform Usage', value: '+120%', icon: ArrowTrendingUpIcon },
        { metric: 'Implementation Time', value: '8 months', icon: ClockIcon }
      ],
      description: 'Created an intelligent learning management system that personalized education and improved student outcomes.',
      date: '2023-12-01',
      thumbnail: '/images/case-studies/education-lms.jpg'
    }
  ];

  const filteredCaseStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how we've helped businesses transform with our AI and IT solutions." />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Success <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Stories</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses across various industries transform 
                their operations and achieve remarkable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Filter Section */}
        <section className="py-12 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {industry.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from real clients. See how our solutions have transformed businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-cyan-900/20 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-white mb-2">Case Study</h3>
                      <p className="text-gray-300">Coming Soon</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {industries.find(ind => ind.id === study.industry)?.name}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {new Date(study.date).toLocaleDateString()}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                    <div className="flex items-center text-gray-400 mb-3">
                      <BuildingOfficeIcon className="w-4 h-4 mr-2" />
                      <span>{study.client}</span>
                    </div>
                    <p className="text-gray-300 mb-4 line-clamp-3">{study.description}</p>

                    <div className="space-y-2 mb-6">
                      <div>
                        <span className="text-sm font-semibold text-gray-400">Challenge:</span>
                        <p className="text-sm text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-400">Solution:</span>
                        <p className="text-sm text-gray-300">{study.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {study.results.slice(0, 4).map((result, index) => (
                        <div key={index} className="text-center p-2 bg-slate-700 rounded">
                          <result.icon className="w-5 h-5 text-green-400 mx-auto mb-1" />
                          <div className="text-sm font-semibold text-white">{result.value}</div>
                          <div className="text-xs text-gray-400">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2">
                      <EyeIcon className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Numbers that reflect our commitment to delivering exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-gray-300 text-lg">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-gray-300 text-lg">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  99.9%
                </div>
                <div className="text-gray-300 text-lg">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-gray-300 text-lg">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let us help you achieve similar results. Contact us today to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;