import React from 'react';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform AI Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Manual inventory management and customer service bottlenecks',
      solution: 'Implemented AI-powered inventory optimization and chatbot system',
      results: [
        '40% reduction in inventory costs',
        '60% improvement in customer response time',
        '25% increase in sales conversion',
        '99.9% uptime achieved'
      ],
      duration: '6 months',
      team: '8 AI specialists',
      image: '/api/placeholder/600/400',
      testimonial: 'Zion Tech Group transformed our entire e-commerce operation. The AI solutions delivered results beyond our expectations.',
      author: 'Sarah Johnson',
      position: 'CTO, TechRetail Inc.'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Revolution',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Complex patient data analysis and predictive healthcare needs',
      solution: 'Deployed advanced AI analytics platform for patient insights',
      results: [
        '50% faster diagnosis accuracy',
        '30% reduction in readmission rates',
        '35% improvement in treatment outcomes',
        'Compliance with HIPAA standards'
      ],
      duration: '8 months',
      team: '12 data scientists',
      image: '/api/placeholder/600/400',
      testimonial: 'The AI analytics platform revolutionized our patient care approach. We can now predict and prevent health issues proactively.',
      author: 'Dr. Michael Chen',
      position: 'Chief Medical Officer, MediCare Solutions'
    },
    {
      id: 3,
      title: 'Manufacturing Process Optimization',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Inefficient production lines and quality control issues',
      solution: 'AI-powered predictive maintenance and quality control system',
      results: [
        '45% reduction in downtime',
        '20% increase in production efficiency',
        '90% improvement in defect detection',
        'ROI of 300% in first year'
      ],
      duration: '4 months',
      team: '6 AI engineers',
      image: '/api/placeholder/600/400',
      testimonial: 'Zion Tech Group helped us achieve unprecedented efficiency gains. Our production quality has never been better.',
      author: 'Emily Rodriguez',
      position: 'Operations Director, AutoParts Manufacturing'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: <CheckCircle className="w-8 h-8 text-green-500" /> },
    { label: 'Client Satisfaction', value: '98%', icon: <Star className="w-8 h-8 text-yellow-500" /> },
    { label: 'Average ROI', value: '250%', icon: <TrendingUp className="w-8 h-8 text-blue-500" /> },
    { label: 'Years Experience', value: '10+', icon: <Clock className="w-8 h-8 text-purple-500" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT transformation projects. See how we've helped businesses achieve remarkable results." />
        <meta name="keywords" content="case studies, AI projects, IT transformation, success stories, business results" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-16">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-gray-300 mb-6">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-gray-300 mb-6">
                      <strong>Solution:</strong> {study.solution}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center mb-6">
                      <span className="text-gray-400">Case Study Image</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6">
                      <p className="text-gray-300 italic mb-4">"{study.testimonial}"</p>
                      <div>
                        <p className="font-semibold text-white">{study.author}</p>
                        <p className="text-gray-400 text-sm">{study.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let us help you achieve similar results with our proven AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudiesPage;
