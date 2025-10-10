'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

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
      client: 'Global E-commerce Giant',
      industry: 'E-commerce',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system.',
      results: [
        'Reduced response time by 80%',
        'Cut customer service costs by 60%',
        'Improved customer satisfaction by 45%',
        'Handled 10x more inquiries with same team size'
      ],
<<<<<<< HEAD
      image: '/images/case-studies/customer-service.jpg',
      duration: '6 months',
      team: 'AI & Customer Experience Team'
    },
    {
      id: '2',
      title: 'Cybersecurity Infrastructure Overhaul',
      client: 'Financial Services Company',
      industry: 'Finance',
      challenge: 'Outdated security systems vulnerable to modern cyber threats.',
      solution: 'Complete security infrastructure redesign with AI-powered threat detection.',
      results: [
        'Zero security breaches in 12 months',
        '99.9% threat detection accuracy',
        'Reduced false positives by 70%',
        'Compliance with all regulatory requirements'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '8 months',
      team: 'Cybersecurity & Compliance Team'
    },
    {
      id: '3',
      title: 'Cloud Migration & Optimization',
      client: 'Manufacturing Corporation',
=======
<<<<<<< HEAD
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
<<<<<<< HEAD
      team: '8 specialists'
=======
<<<<<<< HEAD
      imag,
    e: '/api/placeholder/600
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
>>>>>>> main
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
<<<<<<< HEAD
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
<<<<<<< HEAD
      team: '12 specialists'
=======
      image: '/api/placeholder/600
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3
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
<<<<<<< HEAD
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
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '10 months',
      team: 'Cloud & Infrastructure Team'
    },
    {
      id: '4',
      title: 'AI-Driven Supply Chain Optimization',
      client: 'Retail Chain',
      industry: 'Retail',
      challenge: 'Inefficient supply chain leading to stockouts and excess inventory.',
      solution: 'AI-powered demand forecasting and automated inventory management.',
      results: [
        '30% reduction in inventory costs',
        '95% reduction in stockouts',
        '25% improvement in delivery times',
        'Real-time supply chain visibility'
      ],
      image: '/images/case-studies/supply-chain.jpg',
      duration: '7 months',
      team: 'AI & Supply Chain Team'
    },
    {
      id: '5',
      title: 'Data Analytics & Business Intelligence Platform',
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'Fragmented data systems preventing data-driven decision making.',
      solution: 'Unified data platform with AI-powered analytics and real-time dashboards.',
      results: [
        '40% improvement in patient outcomes',
        '60% faster diagnosis times',
        'Real-time operational insights',
        'Predictive analytics for resource planning'
      ],
      image: '/images/case-studies/healthcare-analytics.jpg',
      duration: '9 months',
      team: 'Data Science & Healthcare Team'
    },
    {
      id: '6',
      title: 'Mobile App Development & Digital Transformation',
      client: 'Banking Institution',
      industry: 'Banking',
      challenge: 'Outdated mobile banking experience affecting customer engagement.',
      solution: 'Complete mobile app redesign with AI features and modern UX.',
      results: [
        '4.8/5 app store rating',
        '200% increase in mobile transactions',
        '50% reduction in support tickets',
        'Seamless omnichannel experience'
      ],
      image: '/images/case-studies/mobile-banking.jpg',
      duration: '5 months',
      team: 'Mobile & UX Team'
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Average ROI'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Projects Completed'
    },
    {
      icon: Award,
      value: '99%',
      label: 'Client Satisfaction'
    },
    {
      icon: CheckCircle,
      value: '24/7',
      label: 'Support Available'
    }
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
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
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-4xl opacity-50">📊</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 mb-4 font-medium">{study.client}</p>
                    <p className="text-gray-300 mb-4 text-sm line-clamp-3">{study.challenge}</p>
                    <div className="space-y-2 mb-4">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
                    >
                      Read Full Case Study
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our proven AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
                >
                  Get Started Today
                  <ExternalLink className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300"
                >
                  Explore Services
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
  );
=======
<<<<<<< HEAD
=======
      image: '/api/placeholder/600
    }
  ];

  return (<div>
        <title>Case Studies | Zion Tech Group<
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." 
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" 
      <

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <
          <
        <)
              ))}
            <
          <
        <
      <
    <
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3
  );
=======
  ));)
>>>>>>> main
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
};

export default CaseStudiesPage;