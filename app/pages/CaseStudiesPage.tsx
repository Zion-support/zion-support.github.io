import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform AI Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: ['40% increase in conversion rates', '25% reduction in cart abandonment', '60% improvement in customer satisfaction'],
      duration: '6 months',
      team: '8 specialists'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data analysis and treatment recommendations',
      solution: 'Built comprehensive AI analytics platform with predictive modeling capabilities',
      results: ['50% faster diagnosis', '30% improvement in treatment accuracy', '35% reduction in operational costs'],
      duration: '8 months',
      team: '12 specialists'
    },
    {
      title: 'Financial Services Fraud Detection',
      client: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'High fraud rates and manual detection processes',
      solution: 'Developed real-time AI fraud detection system with machine learning algorithms',
      results: ['90% reduction in fraud cases', '95% accuracy in detection', '70% faster response time'],
      duration: '4 months',
      team: '6 specialists'
    },
    {
      title: 'Manufacturing Process Optimization',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues',
      solution: 'Implemented IoT sensors and AI-powered predictive maintenance system',
      results: ['45% increase in production efficiency', '60% reduction in downtime', '25% improvement in product quality'],
      duration: '10 months',
      team: '10 specialists'
    },
    {
      title: 'Educational Platform Personalization',
      client: 'EduTech Academy',
      industry: 'Education',
      challenge: 'Low student engagement and poor learning outcomes',
      solution: 'Created AI-driven personalized learning paths and adaptive content delivery',
      results: ['55% increase in student engagement', '40% improvement in learning outcomes', '30% reduction in dropout rates'],
      duration: '7 months',
      team: '9 specialists'
    },
    {
      title: 'Supply Chain Optimization',
      client: 'Global Logistics Corp.',
      industry: 'Logistics',
      challenge: 'Inefficient supply chain management and high operational costs',
      solution: 'Built AI-powered supply chain optimization platform with predictive analytics',
      results: ['35% reduction in operational costs', '50% improvement in delivery times', '40% increase in efficiency'],
      duration: '9 months',
      team: '11 specialists'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies. See how we've helped businesses across various industries achieve their goals." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, client results, project outcomes" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Real results from real clients across various industries
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Discover how our AI and IT solutions have transformed businesses, 
              improved efficiency, and delivered measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <div 
                key={study.title}
                className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-slate-700 hover:border-indigo-500"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="font-semibold">{study.client}</span>
                    <span>•</span>
                    <span>{study.industry}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-gray-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2 flex-shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{study.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{study.team}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">4+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how we can help transform your business with our proven solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="border-2 border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;