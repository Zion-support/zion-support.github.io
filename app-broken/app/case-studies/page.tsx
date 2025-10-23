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
      solution: 'We implemented an AI-powered chatbot system integrated with their existing CRM, using natural language processing to understand customer queries and provide instant, accurate responses. The system was trained on their historical support data and continuously learns from new interactions.',
      results: [
        '75% reduction in response time',
        '60% decrease in support costs',
        '90% customer satisfaction rate',
        '40% increase in first-call resolution'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: '5 specialists'
    },
    {
      id: '2',
      title: 'Cybersecurity Infrastructure Overhaul',
      client: 'Financial Services Inc.',
      industry: 'Finance',
      challenge: 'A major financial institution needed to modernize their security infrastructure to comply with new regulations and protect against sophisticated cyber threats. Their legacy systems were vulnerable and couldn\'t provide real-time threat detection.',
      solution: 'We designed and implemented a comprehensive security framework including advanced threat detection, automated incident response, and employee training programs. The solution included multi-factor authentication, encryption, and continuous monitoring systems.',
      results: [
        '99.9% security uptime achieved',
        'Zero security breaches in 12 months',
        '50% faster threat detection',
        'Full regulatory compliance'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: '3',
      title: 'Cloud Migration & Optimization',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      challenge: 'RetailMax needed to migrate their on-premises infrastructure to the cloud while maintaining 99.9% uptime during peak shopping seasons. Their legacy systems were causing performance bottlenecks and high maintenance costs.',
      solution: 'We executed a phased cloud migration strategy using AWS, implementing auto-scaling, load balancing, and CDN optimization. The solution included database migration, application modernization, and comprehensive monitoring.',
      results: [
        '40% reduction in infrastructure costs',
        '99.99% uptime during peak season',
        '3x faster page load times',
        'Seamless migration with zero downtime'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'Data Analytics & Business Intelligence',
      client: 'Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'A manufacturing company had vast amounts of operational data but lacked the tools to extract meaningful insights. They needed real-time analytics to optimize production, reduce waste, and improve efficiency.',
      solution: 'We built a comprehensive data analytics platform that processes real-time data from IoT sensors, production lines, and business systems. The solution includes predictive analytics, automated reporting, and interactive dashboards.',
      results: [
        '25% increase in production efficiency',
        '30% reduction in waste',
        'Real-time operational insights',
        '$2M annual cost savings'
      ],
      image: '/images/case-studies/data-analytics.jpg',
      duration: '5 months',
      team: '7 specialists'
    },
    {
      id: '5',
      title: 'DevOps Automation & CI/CD Pipeline',
      client: 'Software Solutions Ltd.',
      industry: 'Software',
      challenge: 'A software company was struggling with manual deployment processes, frequent production issues, and slow release cycles. Their development and operations teams were working in silos, leading to inefficiencies.',
      solution: 'We implemented a complete DevOps transformation including automated CI/CD pipelines, infrastructure as code, containerization with Docker and Kubernetes, and comprehensive monitoring and logging systems.',
      results: [
        '80% reduction in deployment time',
        '90% decrease in production incidents',
        '3x faster release cycles',
        'Improved team collaboration'
      ],
      image: '/images/case-studies/devops.jpg',
      duration: '3 months',
      team: '4 specialists'
    },
    {
      id: '6',
      title: 'Mobile App Development & Integration',
      client: 'Healthcare Partners',
      industry: 'Healthcare',
      challenge: 'A healthcare organization needed a mobile app to improve patient engagement and streamline appointment scheduling. The app had to integrate with their existing EHR system while maintaining HIPAA compliance.',
      solution: 'We developed a secure, HIPAA-compliant mobile application with features including appointment scheduling, prescription management, telemedicine capabilities, and secure messaging. The app integrates seamlessly with their existing systems.',
      results: [
        '50% increase in patient engagement',
        '30% reduction in no-show rates',
        '95% patient satisfaction score',
        'Full HIPAA compliance maintained'
      ],
      image: '/images/case-studies/mobile-app.jpg',
      duration: '6 months',
      team: '6 specialists'
    }
  ];

  const industries = [
    { name: 'Technology', icon: <Zap className=&quot;w-5 h-5&quot; />, count: 12 },
    { name: 'Finance', icon: <Building2 className=&quot;w-5 h-5&quot; />, count: 8 },
    { name: 'Healthcare', icon: <Shield className=&quot;w-5 h-5&quot; />, count: 6 },
    { name: 'Retail', icon: <TrendingUp className=&quot;w-5 h-5&quot; />, count: 10 },
    { name: 'Manufacturing', icon: <Users className=&quot;w-5 h-5&quot; />, count: 7 }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Average ROI', value: '300%' },
    { label: 'Years Experience', value: '10+' }
  ];

  return (
    <div className=&quot;min-h-screen bg-gray-50&quot;></div>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our successful technology implementations and see how we've helped businesses transform their operations with AI, cybersecurity, cloud computing, and more.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;case studies, technology solutions, AI implementation, cybersecurity projects, cloud migration&quot; />
      </Helmet>

      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;></div>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
              Success Stories
            </h1>
            <p className=&quot;text-xl md:text-2xl mb-8 text-blue-100&quot;>
              Discover how we've helped businesses transform their operations with cutting-edge technology solutions
            </p>
            <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 mt-12&quot;></div>
              {stats.map((stat, index) => (
                <div key={index} className=&quot;text-center&quot;></div>
                  <div className=&quot;text-3xl md:text-4xl font-bold text-yellow-400 mb-2&quot;>{stat.value}</div>
                  <div className=&quot;text-blue-100&quot;>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className=&quot;py-16 bg-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;></div>
          <div className=&quot;max-w-6xl mx-auto&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-center text-gray-900 mb-12&quot;>Industries We Serve</h2>
            <div className=&quot;grid grid-cols-2 md:grid-cols-5 gap-6&quot;></div>
              {industries.map((industry, index) => (
                <div key={index} className=&quot;text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors&quot;></div>
                  <div className=&quot;flex justify-center mb-3 text-blue-600&quot;></div>
                    {industry.icon}
                  </div>
                  <h3 className=&quot;font-semibold text-gray-900 mb-1&quot;>{industry.name}</h3>
                  <p className=&quot;text-sm text-gray-600&quot;>{industry.count} projects</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className=&quot;py-16 bg-gray-50&quot;>
        <div className=&quot;container mx-auto px-4&quot;></div>
          <div className=&quot;max-w-6xl mx-auto&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-center text-gray-900 mb-12&quot;>Featured Case Studies</h2>
            <div className=&quot;space-y-12&quot;></div>
              {caseStudies.map((study, index) => (
                <div key={study.id} className={`bg-white rounded-xl shadow-lg overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex`}></div>
                  <div className=&quot;lg:w-1/2&quot;></div>
                    <div className=&quot;h-64 lg:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center&quot;></div>
                      <div className=&quot;text-white text-center&quot;></div>
                        <div className=&quot;w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                          <Award className=&quot;w-8 h-8&quot; />
                        </div>
                        <p className=&quot;text-sm font-medium&quot;>{study.industry}</p>
                      </div>
                    </div>
                  </div>
                  <div className=&quot;lg:w-1/2 p-8&quot;></div>
                    <div className=&quot;flex items-center gap-4 text-sm text-gray-500 mb-4&quot;></div>
                      <span className=&quot;flex items-center gap-1&quot;>
                        <Building2 className=&quot;w-4 h-4&quot; />
                        {study.client}
                      </span>
                      <span className=&quot;flex items-center gap-1&quot;>
                        <Users className=&quot;w-4 h-4&quot; />
                        {study.team}
                      </span>
                      <span className=&quot;flex items-center gap-1&quot;>
                        <TrendingUp className=&quot;w-4 h-4&quot; />
                        {study.duration}
                      </span>
                    </div>
                    
                    <h3 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>{study.title}</h3>
                    
                    <div className=&quot;mb-6&quot;></div>
                      <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Challenge</h4>
                      <p className=&quot;text-gray-600 text-sm&quot;>{study.challenge}</p>
                    </div>
                    
                    <div className=&quot;mb-6&quot;></div>
                      <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Solution</h4>
                      <p className=&quot;text-gray-600 text-sm&quot;>{study.solution}</p>
                    </div>
                    
                    <div className=&quot;mb-6&quot;></div>
                      <h4 className=&quot;font-semibold text-gray-900 mb-3&quot;>Results</h4>
                      <div className=&quot;grid grid-cols-2 gap-3&quot;></div>
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className=&quot;flex items-center gap-2&quot;></div>
                            <CheckCircle className=&quot;w-4 h-4 text-green-500 flex-shrink-0&quot; />
                            <span className=&quot;text-sm text-gray-600&quot;>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className=&quot;flex items-center justify-between&quot;></div>
                      <div className=&quot;text-sm text-gray-500&quot;></div>
                        <span className=&quot;font-medium&quot;>{study.industry}</span> industry
                      </div>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className=&quot;flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium&quot;
                      >
                        Read Full Case Study
                        <ArrowRight className=&quot;w-4 h-4&quot; />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className=&quot;py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;></div>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-3xl font-bold mb-6&quot;>Ready to Start Your Success Story?</h2>
            <p className=&quot;text-xl mb-8 text-blue-100&quot;>
              Let's discuss how we can help transform your business with our proven technology solutions.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <Link
                to=&quot;/contact&quot;
                className=&quot;inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors&quot;
              >
                Start Your Project
                <ArrowRight className=&quot;w-4 h-4&quot; />
              </Link>
              <Link
                to=&quot;/services&quot;
                className=&quot;inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors&quot;
              >
                View Our Services
                <ExternalLink className=&quot;w-4 h-4&quot; />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;