import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Globe, Zap, Star, Clock, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      client: 'RetailCorp',
      industry: 'E-commerce',
      challenge: 'Legacy system causing 40% cart abandonment rate',
      solution: 'Implemented AI-powered recommendation engine and modern cloud infrastructure',
      results: [
        '60% increase in conversion rate',
        '45% reduction in page load time',
        '80% improvement in user engagement',
        '50% increase in average order value'
      ],
      image: '/images/case-studies/ecommerce.jpg',
      duration: '6 months',
      team: '12 developers',
      technologies: ['React', 'Node.js', 'AWS', 'Machine Learning']
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data across multiple systems',
      solution: 'Built unified data platform with AI-powered analytics and predictive modeling',
      results: [
        '90% reduction in data processing time',
        '75% improvement in diagnostic accuracy',
        '60% cost savings in data management',
        '100% compliance with HIPAA regulations'
      ],
      image: '/images/case-studies/healthcare.jpg',
      duration: '8 months',
      team: '15 developers',
      technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Docker']
    },
    {
      id: 3,
      title: 'Financial Services Automation',
      client: 'FinTech Global',
      industry: 'Financial Services',
      challenge: 'Manual processes causing delays and errors',
      solution: 'Implemented RPA and AI-driven automation for loan processing and risk assessment',
      results: [
        '85% reduction in processing time',
        '95% accuracy in risk assessment',
        '70% cost reduction in operations',
        '50% increase in customer satisfaction'
      ],
      image: '/images/case-studies/fintech.jpg',
      duration: '10 months',
      team: '20 developers',
      technologies: ['Python', 'RPA', 'Machine Learning', 'Azure']
    },
    {
      id: 4,
      title: 'Manufacturing IoT Integration',
      client: 'Industrial Solutions Inc',
      industry: 'Manufacturing',
      challenge: 'Lack of real-time visibility into production processes',
      solution: 'Deployed IoT sensors and AI analytics for predictive maintenance and quality control',
      results: [
        '40% reduction in equipment downtime',
        '30% improvement in product quality',
        '25% increase in production efficiency',
        '50% reduction in maintenance costs'
      ],
      image: '/images/case-studies/manufacturing.jpg',
      duration: '12 months',
      team: '18 developers',
      technologies: ['IoT', 'Edge Computing', 'Machine Learning', 'AWS IoT']
    },
    {
      id: 5,
      title: 'Education Platform Modernization',
      client: 'EduTech University',
      industry: 'Education',
      challenge: 'Outdated learning management system affecting student engagement',
      solution: 'Developed modern, AI-powered learning platform with personalized content delivery',
      results: [
        '65% increase in student engagement',
        '40% improvement in course completion rates',
        '50% reduction in administrative workload',
        '90% student satisfaction rating'
      ],
      image: '/images/case-studies/education.jpg',
      duration: '9 months',
      team: '14 developers',
      technologies: ['React', 'Node.js', 'AI/ML', 'MongoDB']
    },
    {
      id: 6,
      title: 'Supply Chain Optimization',
      client: 'Global Logistics Corp',
      industry: 'Logistics',
      challenge: 'Inefficient supply chain causing delays and increased costs',
      solution: 'Implemented AI-driven demand forecasting and route optimization system',
      results: [
        '35% reduction in delivery time',
        '25% decrease in transportation costs',
        '60% improvement in demand forecasting accuracy',
        '45% increase in customer satisfaction'
      ],
      image: '/images/case-studies/logistics.jpg',
      duration: '7 months',
      team: '16 developers',
      technologies: ['Python', 'Machine Learning', 'GraphQL', 'Kubernetes']
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: TrendingUp },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Industry Awards', value: '25+', icon: Award }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful projects and case studies across various industries. See how we've helped businesses transform with AI and technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI projects, technology solutions, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses across industries transform with cutting-edge AI and technology solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Case Studies</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                          {study.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-200 text-sm mt-1">{study.client}</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {study.team}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {study.duration}
                        </div>
                      </div>
                      <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with cutting-edge AI and technology solutions. 
                Join our growing list of successful clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                  View All Projects
                  <Globe className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;