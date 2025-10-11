'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

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
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system.',
      results: [
        'Reduced response time by 80%',
        'Cut customer service costs by 60%',
        'Improved customer satisfaction by 45%',
        'Handled 10x more inquiries with same team size'
      ],
=======
      image: '/images/case-studies/ai-customer-service.jpg',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '60% reduction in response time',
        '40% cost savings',
        '95% customer satisfaction rate'
      ],
      duration: '3 months',
      team: '5 specialists'
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
=======
      image: '/images/case-studies/ecommerce-ai.jpg'
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
>>>>>>> main
>>>>>>> origin/main
    },
=======
      team: '8 specialists'});;)
},
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      company: 'FinanceFlow Ltd.',
      industry: 'Financial Services',
>>>>>>> main
>>>>>>> origin/main
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Complete cloud migration to AWS with microservices architecture and automated scaling.',
=======
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Complete cloud migration with enhanced security measures',
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
      results: [
        '50% improvement in system performance',
        '99.9% uptime achieved',
        '30% reduction in operational costs'
      ],
>>>>>>> origin/main
    },
=======
      team: '12 specialists'});;)
},
>>>>>>> main
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
      industry: 'Manufacturing',
      challenge: 'Legacy systems causing operational inefficiencies and high maintenance costs.',
      solution: 'Complete cloud migration with microservices architecture and AI optimization.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster application deployment',
        'Scalable infrastructure for future growth'
      ],
    }
  ];

  const stats = [
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies. See how we've helped businesses transform their operations and achieve remarkable results." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT transformation, business results, client testimonials" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Success stories from our AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                >
                  Get Started Today
                  <ExternalLink className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
=======
  ));)
>>>>>>> main
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
};

export default CaseStudiesPage;