'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

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
  team: string});
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
        '75% reduction in response time',
        '60% decrease in support costs',
        '90% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: '8 specialists'});;)
},
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Complete cloud migration to AWS with microservices architecture and automated scaling.',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '300% improvement in deployment speed',
        'Enhanced security compliance'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '12 specialists'});;)
},
    {
      id: '3',
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats and need for HIPAA compliance in patient data protection.',
      solution: 'Comprehensive security audit and implementation of zero-trust architecture with advanced threat detection.',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security breaches in 12 months',
        'Real-time threat detection and response',
        'Automated compliance reporting'
      ],
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      duration: '4 months',
      team: '10 specialists'});;)
},
    {
      id: '4',
      title: 'Machine Learning for Predictive Analytics',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Inventory management inefficiencies leading to stockouts and overstock situations.',
      solution: 'ML-powered demand forecasting system with real-time inventory optimization.',
      results: [
        '40% reduction in stockouts',
        '25% decrease in excess inventory',
        '15% increase in revenue',
        'Real-time demand prediction accuracy of 92%'
      ],
      image: '/images/case-studies/ml-predictive-analytics.jpg',
      duration: '5 months',
      team: '6 specialists'});;)
},
    {
      id: '5',
      title: 'Digital Transformation for Manufacturing',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      challenge: 'Manual processes and lack of real-time visibility into production efficiency.',
      solution: 'IoT integration with AI-powered analytics dashboard and automated quality control.',
      results: [
        '30% increase in production efficiency',
        '50% reduction in quality defects',
        'Real-time production monitoring',
        'Predictive maintenance implementation'
      ],
      image: '/images/case-studies/digital-transformation.jpg',
      duration: '8 months',
      team: '15 specialists'});;)
},
    {
      id: '6',
      title: 'Blockchain Integration for Supply Chain',
      client: 'GlobalLogistics',
      industry: 'Logistics',
      challenge: 'Lack of transparency and traceability in complex supply chain operations.',
      solution: 'Blockchain-based supply chain tracking system with smart contracts and real-time verification.',
      results: [
        'Complete supply chain transparency',
        '60% reduction in disputes',
        'Real-time shipment tracking',
        'Automated compliance verification'
      ],
      image: '/images/case-studies/blockchain-supply-chain.jpg',
      duration: '7 months',
      team: '11 specialists'});;)
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
      <Helmet></Helmet>
        <titl></titl>Case Studies | Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions. Real results from real clients." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, client results" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Success stories and client results from our AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div></div>
        {/* Hero Section */}
        <section></section>
          <div></div>
            <h1></h1>
              Success <spa></spa>Stories</span>
            </h1>
            <p></p>
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>

            {/* Stats */}
            <div></div>
              {stats.map((stat, index) => (
                <div></div>
                  <div></div>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <di></di>{stat.value}</div>
                  <di></di>{stat.label}</div>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section></section>
          <div></div>
            <div></div>
              {caseStudies.map((study) => (
                <div></div>
                  <div></div>
                    <div></div>
                    <div></div>
                      <div></div>
                        <spa></spa>{study.industry}</span>
                        <spa></spa>{study.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div></div>
                    <h3></h3>
                      {study.title}
                    </h3>
                    
                    <div></div>
                      <h></h>Client: {study.client}</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.team}</p>
                    </div>

                    <div></div>
                      <h></h>Challenge</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    </div>

                    <div></div>
                      <h></h>Solution</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                    </div>

                    <div></div>
                      <h></h>Results</h4>
                      <ul></ul>
                        {study.results.map((result, index) => (
                          <li></li>
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ));
                      </ul>
                    </div>

                    <div></div>
                      <Link></Link>
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button></button>
                        <ExternalLink className="w-4 h-4" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section></section>
          <div></div>
            <div></div>
              <h2></h2>
                Ready to Write Your Success Story?
              </h2>
              <p></p>
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div></div>
                <Link></Link>
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link></Link>
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  ));)
};

export default CaseStudiesPage;