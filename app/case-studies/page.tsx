import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock, Award } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce AI Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'AI-powered recommendation engine and personalized shopping experience',
      results: [
        '300% increase in conversion rates',
        '45% reduction in cart abandonment',
        '250% ROI within 6 months',
        '90% customer satisfaction score'
      ],
      image: '/images/case-studies/ecommerce-ai.jpg',
      duration: '6 months',
      team: '8 members'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data management and analysis',
      solution: 'Comprehensive AI analytics platform with predictive insights',
      results: [
        '70% reduction in data processing time',
        '85% improvement in diagnostic accuracy',
        '40% cost savings on operations',
        '99.9% system uptime'
      ],
      image: '/images/case-studies/healthcare-analytics.jpg',
      duration: '8 months',
      team: '12 members'
    },
    {
      id: 3,
      title: 'Financial Services Automation',
      company: 'FinTech Global',
      industry: 'Financial Services',
      challenge: 'Manual processes and compliance requirements',
      solution: 'End-to-end automation with AI-powered compliance monitoring',
      results: [
        '95% automation of manual processes',
        '60% reduction in processing time',
        '100% compliance rate',
        '200% increase in efficiency'
      ],
      image: '/images/case-studies/fintech-automation.jpg',
      duration: '10 months',
      team: '15 members'
    },
    {
      id: 4,
      title: 'Manufacturing IoT Integration',
      company: 'Industrial Corp',
      industry: 'Manufacturing',
      challenge: 'Lack of real-time monitoring and predictive maintenance',
      solution: 'IoT integration with AI-powered predictive analytics',
      results: [
        '50% reduction in downtime',
        '35% increase in production efficiency',
        '80% improvement in maintenance scheduling',
        '25% cost savings on maintenance'
      ],
      image: '/images/case-studies/manufacturing-iot.jpg',
      duration: '12 months',
      team: '20 members'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
          </p>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-4">{study.company}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      {study.team}
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Our Success Metrics</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Numbers that speak to our commitment to delivering exceptional results for our clients.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: '500+', label: 'Projects Completed', icon: Award },
                  { number: '300%', label: 'Average ROI', icon: TrendingUp },
                  { number: '99.9%', label: 'Client Satisfaction', icon: CheckCircle },
                  { number: '24/7', label: 'Support Available', icon: Clock }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudiesPage;