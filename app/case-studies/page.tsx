import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Star, Globe, Shield, CheckCircle } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

const CaseStudiesPage = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      duration: '6 months',
      challenge: 'High customer service costs and long response times affecting customer satisfaction',
      solution: 'Implemented AI-powered chatbot system with natural language processing and automated ticket routing',
      results: [
        '60% reduction in response time',
        '40% decrease in support costs',
        '95% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      technologies: ['AI/ML', 'Natural Language Processing', 'Cloud Infrastructure', 'API Integration']
    },
    {
      id: '2',
      title: 'Cloud Migration and Security Enhancement',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      duration: '8 months',
      challenge: 'Legacy systems causing security vulnerabilities and scalability issues',
      solution: 'Complete cloud migration with advanced security protocols and compliance automation',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '100% compliance with financial regulations',
        '3x faster application deployment'
      ],
      technologies: ['AWS', 'Kubernetes', 'Security Automation', 'Compliance Tools']
    },
    {
      id: '3',
      title: 'IoT Manufacturing Optimization',
      client: 'ManufacturingPro Inc',
      industry: 'Manufacturing',
      duration: '12 months',
      challenge: 'Inefficient production processes and lack of real-time monitoring',
      solution: 'Comprehensive IoT solution with predictive analytics and automated quality control',
      results: [
        '25% increase in production efficiency',
        '30% reduction in waste',
        'Predictive maintenance preventing 90% of equipment failures',
        'Real-time production monitoring'
      ],
      technologies: ['IoT Sensors', 'Edge Computing', 'Predictive Analytics', 'Machine Learning']
    },
    {
      id: '4',
      title: 'E-commerce Platform Modernization',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      duration: '4 months',
      challenge: 'Outdated e-commerce platform causing poor user experience and low conversion rates',
      solution: 'Complete platform rebuild with modern architecture, mobile optimization, and AI recommendations',
      results: [
        '150% increase in mobile conversions',
        '40% improvement in page load speed',
        '35% increase in average order value',
        'Seamless omnichannel experience'
      ],
      technologies: ['React', 'Node.js', 'AI Recommendations', 'Mobile Optimization']
    },
    {
      id: '5',
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      duration: '10 months',
      challenge: 'Fragmented patient data and lack of insights for treatment optimization',
      solution: 'Integrated data platform with advanced analytics and predictive health modeling',
      results: [
        'Unified patient data across all systems',
        '30% improvement in treatment outcomes',
        'Predictive health risk identification',
        'HIPAA-compliant data management'
      ],
      technologies: ['Data Integration', 'Machine Learning', 'HIPAA Compliance', 'Predictive Analytics']
    },
    {
      id: '6',
      title: 'Smart City Infrastructure Implementation',
      client: 'City of Innovation',
      industry: 'Government',
      duration: '18 months',
      challenge: 'Inefficient city services and lack of data-driven decision making',
      solution: 'Comprehensive smart city platform with IoT sensors, data analytics, and citizen engagement tools',
      results: [
        '20% reduction in energy consumption',
        '35% improvement in traffic flow',
        'Real-time city monitoring dashboard',
        'Enhanced citizen engagement'
      ],
      technologies: ['IoT', 'Big Data Analytics', 'Cloud Computing', 'Citizen Apps']
    }
  ];

  const industries = [
    "All",
    "Technology",
    "Financial Services",
    "Manufacturing",
    "Retail",
    "Healthcare",
    "Government",
    "Energy"
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta
          name="description"
          content="Explore our successful case studies and see how we've helped businesses transform through innovative technology solutions. Real results, proven outcomes."
        />
        <meta
          name="keywords"
          content="case studies, success stories, client results, AI implementation, digital transformation, technology solutions, business outcomes"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="flex items-center justify-center py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how we've helped businesses transform and achieve extraordinary results through innovative technology solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Start Your Success Story
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <span className="text-gray-300 text-sm">{study.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <div className="mb-4">
                    <p className="text-cyan-400 font-semibold text-sm mb-2">{study.client}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <strong>Solution:</strong> {study.solution}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Key Results
                    </h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 3).map((result, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-start">
                          <Star className="w-3 h-3 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Target className="w-4 h-4 text-purple-400 mr-2" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-transform"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the companies that have transformed their operations with our innovative technology solutions. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
              >
                Explore Our Services
                <Globe className="w-5 h-5 ml-2 inline group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;