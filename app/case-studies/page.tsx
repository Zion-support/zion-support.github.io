'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award, Building2, Shield, Zap } from 'lucide-react';

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
      challenge: 'TechCorp was struggling with high customer service costs and long response times. Their traditional support system couldn\'t handle the increasing volume of inquiries, leading to customer dissatisfaction and lost revenue.',
      solution: 'We implemented an AI-powered customer service platform that combines chatbots, natural language processing, and machine learning to provide instant, accurate responses to customer inquiries. The system learns from each interaction to improve its responses over time.',
      results: [
        'Reduced response time by 85%',
        'Decreased support costs by 60%',
        'Improved customer satisfaction by 40%',
        'Handled 300% more inquiries with same staff'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'Cloud Migration and Infrastructure Modernization',
      client: 'Global Manufacturing Inc.',
      industry: 'Manufacturing',
      challenge: 'Global Manufacturing Inc. was running on outdated on-premises infrastructure that was expensive to maintain and couldn\'t scale with their growing business needs. They needed a modern, scalable solution.',
      solution: 'We migrated their entire infrastructure to AWS, implementing a microservices architecture with containerization. We also set up automated CI/CD pipelines and implemented comprehensive monitoring and security measures.',
      results: [
        'Reduced infrastructure costs by 45%',
        'Improved system reliability by 99.9%',
        'Enabled 10x faster deployment cycles',
        'Achieved 100% uptime during migration'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '8 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement and Compliance',
      client: 'Financial Services Group',
      industry: 'Financial Services',
      challenge: 'Financial Services Group needed to enhance their cybersecurity posture to meet strict regulatory requirements and protect sensitive customer data from increasingly sophisticated cyber threats.',
      solution: 'We conducted a comprehensive security audit and implemented a multi-layered security approach including advanced threat detection, encryption, access controls, and employee training programs.',
      results: [
        'Achieved SOC 2 Type II compliance',
        'Reduced security incidents by 90%',
        'Improved threat detection by 95%',
        'Passed all regulatory audits'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'Data Analytics and Business Intelligence Platform',
      client: 'Retail Chain Corporation',
      industry: 'Retail',
      challenge: 'Retail Chain Corporation had vast amounts of customer and sales data but lacked the tools to analyze it effectively. They needed insights to improve their business operations and customer experience.',
      solution: 'We built a comprehensive data analytics platform that processes real-time data from multiple sources, provides interactive dashboards, and uses machine learning to generate actionable business insights.',
      results: [
        'Increased sales by 25% through better insights',
        'Reduced inventory costs by 30%',
        'Improved customer retention by 35%',
        'Enabled data-driven decision making'
      ],
      image: '/images/case-studies/data-analytics.jpg',
      duration: '5 months',
      team: '10 specialists'
    }
  ];

  const stats = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      number: '150+',
      label: 'Projects Completed'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: '200+',
      label: 'Happy Clients'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      number: '95%',
      label: 'Success Rate'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      number: '50+',
      label: 'Awards Won'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses transform their operations with cutting-edge technology solutions." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with innovative technology solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results. See how we've helped businesses across various industries achieve their goals.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((caseStudy, index) => (
              <div key={caseStudy.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12`}>
                <div className="lg:w-1/2">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {caseStudy.industry}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">
                      <strong>Client:</strong> {caseStudy.client}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">
                        {caseStudy.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Results</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Shield className="w-4 h-4 mr-1" />
                        Duration: {caseStudy.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        Team: {caseStudy.team}
                      </span>
                    </div>

                    <div className="flex gap-4">
                      <Link
                        to={`/case-studies/${caseStudy.id}`}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <Link
                        to="/contact"
                        className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Discuss Similar Project
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;