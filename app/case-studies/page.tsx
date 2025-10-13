import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award, Building2, Shield, Zap, Target, Star, Globe, BarChart3, Clock } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration: string;
  team: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: [
        '60% reduction in customer service costs',
        '40% increase in customer satisfaction',
        '80% faster response times',
        '35% increase in first-call resolution rate'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'E-commerce Platform AI Transformation',
      client: 'TechStart Inc.',
      industry: 'E-commerce',
      challenge: 'Manual inventory management and customer service bottlenecks limiting growth potential.',
      solution: 'AI-powered inventory optimization and automated customer support with machine learning algorithms.',
      results: [
        '60% reduction in inventory costs',
        '40% increase in customer satisfaction',
        '80% faster response times',
        '35% increase in sales'
      ],
      image: '/images/case-studies/ecommerce-ai.jpg',
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '3',
      title: 'Financial Services Cybersecurity Enhancement',
      client: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'Increasing cyber threats and compliance requirements demanding robust security measures.',
      solution: 'Comprehensive cybersecurity framework with AI-powered threat detection and automated compliance monitoring.',
      results: [
        '99.9% security incident prevention rate',
        '50% reduction in security response time',
        '100% compliance with industry standards',
        '30% reduction in security operational costs'
      ],
      image: '/images/case-studies/cybersecurity-finance.jpg',
      duration: '8 months',
      team: '12 specialists'
    },
    {
      id: '4',
      title: 'Healthcare Data Analytics Platform',
      client: 'MedTech Innovations',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and lack of predictive analytics affecting treatment outcomes.',
      solution: 'Integrated data platform with AI-powered predictive analytics and real-time patient monitoring.',
      results: [
        '45% improvement in patient outcomes',
        '30% reduction in readmission rates',
        '60% faster diagnosis times',
        '25% cost savings in treatment protocols'
      ],
      image: '/images/case-studies/healthcare-analytics.jpg',
      duration: '10 months',
      team: '15 specialists'
    },
    {
      id: '5',
      title: 'Manufacturing Process Optimization',
      client: 'Industrial Dynamics',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes and high maintenance costs affecting profitability.',
      solution: 'IoT-enabled smart manufacturing with AI-driven predictive maintenance and process optimization.',
      results: [
        '35% increase in production efficiency',
        '50% reduction in maintenance costs',
        '25% improvement in product quality',
        '40% reduction in downtime'
      ],
      image: '/images/case-studies/manufacturing-iot.jpg',
      duration: '7 months',
      team: '10 specialists'
    },
    {
      id: '6',
      title: 'Retail Personalization Engine',
      client: 'Fashion Forward',
      industry: 'Retail',
      challenge: 'Generic customer experience and low conversion rates in online shopping.',
      solution: 'AI-powered personalization engine with recommendation algorithms and behavioral analytics.',
      results: [
        '55% increase in conversion rates',
        '40% improvement in customer engagement',
        '30% increase in average order value',
        '25% reduction in cart abandonment'
      ],
      image: '/images/case-studies/retail-personalization.jpg',
      duration: '5 months',
      team: '7 specialists'
    }
  ];

  const industries = [
    { name: 'All', count: caseStudies.length },
    { name: 'Technology', count: caseStudies.filter(cs => cs.industry === 'Technology').length },
    { name: 'E-commerce', count: caseStudies.filter(cs => cs.industry === 'E-commerce').length },
    { name: 'Financial Services', count: caseStudies.filter(cs => cs.industry === 'Financial Services').length },
    { name: 'Healthcare', count: caseStudies.filter(cs => cs.industry === 'Healthcare').length },
    { name: 'Manufacturing', count: caseStudies.filter(cs => cs.industry === 'Manufacturing').length },
    { name: 'Retail', count: caseStudies.filter(cs => cs.industry === 'Retail').length }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-cyan-400" />, value: '150+', label: 'Projects Completed' },
    { icon: <Award className="w-8 h-8 text-purple-400" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <TrendingUp className="w-8 h-8 text-green-400" />, value: '45%', label: 'Average ROI' },
    { icon: <Clock className="w-8 h-8 text-blue-400" />, value: '6', label: 'Months Avg. Delivery' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformation projects across various industries." />
        <meta name="keywords" content="case studies, success stories, AI implementation, digital transformation, technology solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#case-studies"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Featured Case Studies
            </h2>
            
            {/* Industry Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {industries.map((industry) => (
                <button
                  key={industry.name}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    industry.name === 'All'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {industry.name} ({industry.count})
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-slate-800/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                      <Building2 className="w-16 h-16 text-cyan-400" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {study.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Building2 className="w-4 h-4 mr-2" />
                        {study.client}
                      </div>
                      <div className="flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        {study.industry}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {study.team}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 mb-4">{study.challenge}</p>
                      
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <BarChart3 className="w-5 h-5 mr-2 text-green-400" />
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-start text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Discuss Similar Project
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-gray-300 mb-8">
                Let's discuss how we can help transform your business with innovative technology solutions tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Your Project
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;