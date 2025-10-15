import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform AI Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      duration: '6 months',
      team: '8 members',
      budget: '$150,000',
      description: 'Implemented AI-powered recommendation engine and inventory optimization system.',
      results: [
        '40% increase in conversion rates',
        '25% reduction in inventory costs',
        '60% improvement in customer satisfaction'
      ],
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'AWS']
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      duration: '8 months',
      team: '12 members',
      budget: '$250,000',
      description: 'Developed comprehensive data analytics platform for patient care optimization.',
      results: [
        '30% reduction in patient readmission rates',
        '50% faster diagnosis times',
        '35% improvement in treatment outcomes'
      ],
      technologies: ['Data Science', 'R', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Financial Services Automation',
      client: 'SecureBank Ltd.',
      industry: 'Financial Services',
      duration: '4 months',
      team: '6 members',
      budget: '$100,000',
      description: 'Automated loan processing and risk assessment using AI algorithms.',
      results: [
        '70% reduction in processing time',
        '45% decrease in manual errors',
        '80% improvement in accuracy'
      ],
      technologies: ['AI/ML', 'Java', 'Spring Boot', 'Kubernetes']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI implementation, IT solutions, business transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world success stories showcasing our expertise in AI and IT solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-indigo-400 font-semibold">{study.client}</p>
                  <p className="text-gray-400 text-sm">{study.industry}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-300 leading-relaxed">{study.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-2 text-indigo-400" />
                    {study.duration}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-4 h-4 mr-2 text-indigo-400" />
                    {study.team}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <DollarSign className="w-4 h-4 mr-2 text-indigo-400" />
                    {study.budget}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <TrendingUp className="w-4 h-4 mr-2 text-indigo-400" />
                    Results
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-gray-300 flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 text-green-400" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-indigo-900/30 text-indigo-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;