'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign, Clock, Award, Target } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '60% reduction in response time',
        '40% cost savings on customer service',
        '95% customer satisfaction rate',
        '24/7 automated support'
      ],
      metrics: {
        costSavings: '40%',
        responseTime: '60%',
        satisfaction: '95%',
        uptime: '99.9%'
      },
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: '5 developers'
    },
    {
      id: 2,
      title: 'Cloud Migration & Infrastructure Optimization',
      client: 'Global Manufacturing Inc.',
      industry: 'Manufacturing',
      challenge: 'Outdated on-premise infrastructure causing downtime',
      solution: 'Complete cloud migration with auto-scaling and monitoring',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '3x faster deployment times',
        'Global accessibility improved'
      ],
      metrics: {
        costSavings: '50%',
        uptime: '99.9%',
        deploymentSpeed: '3x',
        globalReach: '100%'
      },
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '8 developers'
    },
    {
      id: 3,
      title: 'Data Analytics & Business Intelligence Platform',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      challenge: 'Lack of data insights for business decisions',
      solution: 'Built comprehensive analytics dashboard with real-time reporting',
      results: [
        '35% increase in sales',
        '25% improvement in inventory management',
        'Real-time business insights',
        'Data-driven decision making'
      ],
      metrics: {
        salesIncrease: '35%',
        inventoryImprovement: '25%',
        realTimeInsights: '100%',
        dataAccuracy: '99.5%'
      },
      image: '/images/case-studies/data-analytics.jpg',
      duration: '4 months',
      team: '6 developers'
    },
    {
      id: 4,
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'Financial Services Group',
      industry: 'Finance',
      challenge: 'Security vulnerabilities and compliance requirements',
      solution: 'Comprehensive security audit and implementation',
      results: [
        'Zero security breaches',
        '100% compliance achieved',
        '50% reduction in security incidents',
        'Enhanced customer trust'
      ],
      metrics: {
        securityBreaches: '0',
        complianceRate: '100%',
        incidentReduction: '50%',
        customerTrust: '98%'
      },
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '5 months',
      team: '7 developers'
    },
    {
      id: 5,
      title: 'Mobile App Development & Digital Transformation',
      client: 'Healthcare Plus',
      industry: 'Healthcare',
      challenge: 'Outdated patient management system',
      solution: 'Modern mobile app with patient portal and telemedicine',
      results: [
        '80% patient satisfaction increase',
        '45% reduction in administrative costs',
        'Telemedicine capabilities added',
        'Mobile-first patient experience'
      ],
      metrics: {
        patientSatisfaction: '80%',
        costReduction: '45%',
        telemedicineAdoption: '90%',
        mobileUsage: '85%'
      },
      image: '/images/case-studies/mobile-healthcare.jpg',
      duration: '7 months',
      team: '10 developers'
    },
    {
      id: 6,
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Logistics Pro',
      industry: 'Logistics',
      challenge: 'Inefficient supply chain and inventory management',
      solution: 'AI-driven optimization with predictive analytics',
      results: [
        '30% reduction in inventory costs',
        '25% improvement in delivery times',
        'Predictive maintenance implemented',
        'Real-time tracking capabilities'
      ],
      metrics: {
        inventoryReduction: '30%',
        deliveryImprovement: '25%',
        predictiveAccuracy: '92%',
        trackingRealTime: '100%'
      },
      image: '/images/case-studies/supply-chain.jpg',
      duration: '6 months',
      team: '9 developers'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '$50M+', label: 'Client Savings', icon: DollarSign },
    { number: '15+', label: 'Years Experience', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, technology transformation, business results" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>
      
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Success <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Stories</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover how we've helped businesses transform with cutting-edge AI and technology solutions.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Case Studies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've transformed businesses across industries.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Client: {study.client}</h4>
                      <p className="text-gray-300 mb-4">{study.challenge}</p>
                      <p className="text-gray-300 mb-4">{study.solution}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-400">{study.metrics.costSavings || study.metrics.salesIncrease || study.metrics.securityBreaches || study.metrics.patientSatisfaction || study.metrics.inventoryReduction}</div>
                        <div className="text-sm text-gray-300">Key Metric</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-purple-400">{study.duration}</div>
                        <div className="text-sm text-gray-300">Duration</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <div className="flex items-center mb-1">
                          <Users className="w-4 h-4 mr-2" />
                          {study.team}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {study.duration}
                        </div>
                      </div>
                      <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold">
                        Read Full Case Study
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Let's discuss how we can help transform your business with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/consultation"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
