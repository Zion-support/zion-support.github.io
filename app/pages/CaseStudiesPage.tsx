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
      results: [
        { metric: 'Conversion Rate', value: '+45%', icon: TrendingUp },
        { metric: 'Cart Abandonment', value: '-30%', icon: TrendingUp },
        { metric: 'Customer Satisfaction', value: '+60%', icon: Users },
        { metric: 'Implementation Time', value: '3 months', icon: Clock }
      ],
      description: 'We helped TechRetail Inc. transform their e-commerce platform with AI-powered personalization, resulting in significant improvements in conversion rates and customer satisfaction.'
    },
    {
      title: 'Manufacturing Process Automation',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing delays and errors',
      solution: 'Deployed computer vision and machine learning for automated quality inspection',
      results: [
        { metric: 'Quality Defects', value: '-75%', icon: TrendingUp },
        { metric: 'Processing Speed', value: '+200%', icon: TrendingUp },
        { metric: 'Cost Savings', value: '$2M annually', icon: DollarSign },
        { metric: 'Implementation Time', value: '6 months', icon: Clock }
      ],
      description: 'Our AI-powered quality control system revolutionized AutoParts Manufacturing\'s production line, dramatically reducing defects while increasing efficiency.'
    },
    {
      title: 'Healthcare Data Security Enhancement',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Compliance with HIPAA regulations and protecting sensitive patient data',
      solution: 'Comprehensive cybersecurity framework with advanced threat detection and encryption',
      results: [
        { metric: 'Security Incidents', value: '-90%', icon: TrendingUp },
        { metric: 'Compliance Score', value: '100%', icon: TrendingUp },
        { metric: 'Data Breach Risk', value: '-95%', icon: TrendingUp },
        { metric: 'Implementation Time', value: '4 months', icon: Clock }
      ],
      description: 'We implemented a robust cybersecurity solution that ensured full HIPAA compliance while significantly reducing security risks for MediCare Systems.'
    },
    {
      title: 'Financial Services Cloud Migration',
      client: 'FinTech Solutions',
      industry: 'Financial Services',
      challenge: 'Legacy systems limiting scalability and increasing operational costs',
      solution: 'Complete cloud migration with microservices architecture and automated scaling',
      results: [
        { metric: 'Operational Costs', value: '-40%', icon: TrendingUp },
        { metric: 'System Performance', value: '+300%', icon: TrendingUp },
        { metric: 'Scalability', value: '10x increase', icon: TrendingUp },
        { metric: 'Implementation Time', value: '8 months', icon: Clock }
      ],
      description: 'Our cloud migration strategy transformed FinTech Solutions\' infrastructure, enabling massive scalability while reducing operational costs.'
    },
    {
      title: 'Retail Chain Digital Transformation',
      client: 'MegaMart Chain',
      industry: 'Retail',
      challenge: 'Outdated POS systems and lack of real-time inventory management',
      solution: 'Integrated digital platform with real-time analytics and mobile POS systems',
      results: [
        { metric: 'Inventory Accuracy', value: '+85%', icon: TrendingUp },
        { metric: 'Checkout Speed', value: '+150%', icon: TrendingUp },
        { metric: 'Customer Satisfaction', value: '+70%', icon: Users },
        { metric: 'Implementation Time', value: '5 months', icon: Clock }
      ],
      description: 'We modernized MegaMart Chain\'s entire retail operation with a comprehensive digital platform that improved efficiency and customer experience.'
    },
    {
      title: 'Educational Platform AI Integration',
      client: 'EduTech Academy',
      industry: 'Education',
      challenge: 'Personalized learning at scale and student engagement',
      solution: 'AI-powered adaptive learning platform with intelligent content recommendations',
      results: [
        { metric: 'Student Engagement', value: '+120%', icon: TrendingUp },
        { metric: 'Learning Outcomes', value: '+65%', icon: TrendingUp },
        { metric: 'Course Completion', value: '+80%', icon: TrendingUp },
        { metric: 'Implementation Time', value: '6 months', icon: Clock }
      ],
      description: 'Our AI-driven learning platform transformed EduTech Academy\'s educational delivery, creating personalized experiences that significantly improved student outcomes.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies showcasing how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI projects, IT solutions, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real success stories from our clients who transformed their businesses with our solutions
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              Discover how we've helped companies across various industries achieve remarkable results 
              through innovative AI, cybersecurity, and digital transformation solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {study.industry}
                      </span>
                      <span className="text-cyan-400 font-semibold">{study.client}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-gray-300 mb-6">{study.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Challenge</h4>
                    <p className="text-gray-400 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-3">Solution</h4>
                    <p className="text-gray-400 mb-6">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => {
                        const Icon = result.icon;
                        return (
                          <div key={resultIndex} className="bg-slate-700/50 rounded-lg p-4">
                            <div className="flex items-center mb-2">
                              <Icon className="w-5 h-5 text-green-400 mr-2" />
                              <span className="text-2xl font-bold text-white">{result.value}</span>
                            </div>
                            <p className="text-gray-400 text-sm">{result.metric}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-600">
                    <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our proven solutions and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;