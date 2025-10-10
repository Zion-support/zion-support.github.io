'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award, Building2, Shield, Zap } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    icon: React.ComponentType<any>;
  }[];
  image: string;
  duration: string;
  team: string;
}

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const caseStudies: CaseStudy[] = [
    {
      id: 'healthcare-ai-diagnosis',
      title: 'AI-Powered Medical Diagnosis System',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'MedTech Solutions needed to improve diagnostic accuracy and reduce time-to-diagnosis for critical medical conditions. Their existing system had a 15% error rate and took an average of 3 days to process complex cases.',
      solution: 'We developed an AI-powered diagnostic system using advanced machine learning algorithms and computer vision. The system analyzes medical images, patient data, and symptoms to provide accurate diagnoses in real-time.',
      results: [
        'Reduced diagnostic error rate from 15% to 2%',
        'Decreased average diagnosis time from 3 days to 2 hours',
        'Improved patient satisfaction by 40%',
        'Enabled early detection of 95% of critical conditions'
      ],
      metrics: [
        { label: 'Error Rate Reduction', value: '87%', icon: TrendingUp },
        { label: 'Time Savings', value: '95%', icon: Zap },
        { label: 'Patient Satisfaction', value: '+40%', icon: Users },
        { label: 'Early Detection Rate', value: '95%', icon: Shield }
      ],
      image: '/images/case-studies/healthcare-ai.jpg',
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: 'fintech-fraud-detection',
      title: 'Real-time Fraud Detection Platform',
      client: 'SecurePay Financial',
      industry: 'Fintech',
      challenge: 'SecurePay Financial was experiencing increasing fraud attempts, with losses of $2M annually. Their existing fraud detection system had a 20% false positive rate and was unable to detect sophisticated attacks.',
      solution: 'We implemented a comprehensive AI-powered fraud detection system that analyzes transaction patterns, user behavior, and risk factors in real-time. The system uses machine learning to continuously improve its detection accuracy.',
      results: [
        'Reduced fraud losses by 85%',
        'Decreased false positive rate from 20% to 3%',
        'Improved detection speed by 90%',
        'Saved $1.7M annually in fraud prevention'
      ],
      metrics: [
        { label: 'Fraud Loss Reduction', value: '85%', icon: Shield },
        { label: 'False Positive Rate', value: '3%', icon: TrendingUp },
        { label: 'Detection Speed', value: '+90%', icon: Zap },
        { label: 'Annual Savings', value: '$1.7M', icon: Award }
      ],
      image: '/images/case-studies/fintech-fraud.jpg',
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: 'retail-inventory-optimization',
      title: 'Smart Inventory Management System',
      client: 'Global Retail Corp',
      industry: 'Retail',
      challenge: 'Global Retail Corp was struggling with inventory management across 500+ stores, leading to $5M in lost sales due to stockouts and $3M in excess inventory costs.',
      solution: 'We developed an AI-powered inventory optimization system that predicts demand, optimizes stock levels, and automates reordering. The system integrates with existing ERP systems and provides real-time insights.',
      results: [
        'Reduced stockouts by 70%',
        'Decreased excess inventory by 45%',
        'Increased sales by 15%',
        'Reduced inventory costs by $2.1M annually'
      ],
      metrics: [
        { label: 'Stockout Reduction', value: '70%', icon: TrendingUp },
        { label: 'Excess Inventory', value: '-45%', icon: Zap },
        { label: 'Sales Increase', value: '+15%', icon: Users },
        { label: 'Cost Savings', value: '$2.1M', icon: Award }
      ],
      image: '/images/case-studies/retail-inventory.jpg',
      duration: '5 months',
      team: '7 specialists'
    },
    {
      id: 'manufacturing-predictive-maintenance',
      title: 'Predictive Maintenance for Manufacturing',
      client: 'Industrial Manufacturing Ltd',
      industry: 'Manufacturing',
      challenge: 'Industrial Manufacturing Ltd was experiencing unexpected equipment failures, causing $8M in annual downtime costs. Their reactive maintenance approach was inefficient and costly.',
      solution: 'We implemented an IoT-based predictive maintenance system that monitors equipment health in real-time and predicts failures before they occur. The system uses AI to analyze sensor data and maintenance history.',
      results: [
        'Reduced unplanned downtime by 60%',
        'Decreased maintenance costs by 35%',
        'Improved equipment lifespan by 25%',
        'Saved $4.8M annually in downtime costs'
      ],
      metrics: [
        { label: 'Downtime Reduction', value: '60%', icon: TrendingUp },
        { label: 'Maintenance Cost', value: '-35%', icon: Zap },
        { label: 'Equipment Lifespan', value: '+25%', icon: Shield },
        { label: 'Annual Savings', value: '$4.8M', icon: Award }
      ],
      image: '/images/case-studies/manufacturing-maintenance.jpg',
      duration: '7 months',
      team: '10 specialists'
    },
    {
      id: 'ecommerce-personalization',
      title: 'AI-Powered E-commerce Personalization',
      client: 'ShopSmart Online',
      industry: 'E-commerce',
      challenge: 'ShopSmart Online wanted to improve customer experience and increase sales through personalized recommendations. Their generic recommendation system had low engagement rates.',
      solution: 'We developed a sophisticated AI recommendation engine that analyzes customer behavior, purchase history, and preferences to deliver personalized product recommendations and marketing campaigns.',
      results: [
        'Increased conversion rate by 45%',
        'Improved average order value by 30%',
        'Enhanced customer engagement by 60%',
        'Reduced cart abandonment by 25%'
      ],
      metrics: [
        { label: 'Conversion Rate', value: '+45%', icon: TrendingUp },
        { label: 'Order Value', value: '+30%', icon: Users },
        { label: 'Engagement', value: '+60%', icon: Zap },
        { label: 'Cart Abandonment', value: '-25%', icon: Shield }
      ],
      image: '/images/case-studies/ecommerce-personalization.jpg',
      duration: '3 months',
      team: '5 specialists'
    },
    {
      id: 'logistics-route-optimization',
      title: 'Smart Logistics Route Optimization',
      client: 'FastTrack Logistics',
      industry: 'Logistics',
      challenge: 'FastTrack Logistics needed to optimize delivery routes to reduce fuel costs and improve delivery times. Their manual route planning was inefficient and costly.',
      solution: 'We created an AI-powered route optimization system that considers traffic patterns, weather conditions, vehicle capacity, and delivery windows to generate optimal routes in real-time.',
      results: [
        'Reduced fuel costs by 30%',
        'Improved delivery times by 40%',
        'Increased delivery capacity by 25%',
        'Enhanced customer satisfaction by 50%'
      ],
      metrics: [
        { label: 'Fuel Cost Reduction', value: '30%', icon: TrendingUp },
        { label: 'Delivery Time', value: '+40%', icon: Zap },
        { label: 'Delivery Capacity', value: '+25%', icon: Users },
        { label: 'Customer Satisfaction', value: '+50%', icon: Award }
      ],
      image: '/images/case-studies/logistics-optimization.jpg',
      duration: '4 months',
      team: '6 specialists'
    }
  ];

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'Healthcare', name: 'Healthcare' },
    { id: 'Fintech', name: 'Fintech' },
    { id: 'Retail', name: 'Retail' },
    { id: 'Manufacturing', name: 'Manufacturing' },
    { id: 'E-commerce', name: 'E-commerce' },
    { id: 'Logistics', name: 'Logistics' }
  ];

  const filteredCaseStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and technology implementations across various industries and see the measurable results we've delivered." />
        <meta name="keywords" content="case studies, AI success stories, technology implementations, business results" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses across various industries transform their operations 
              with cutting-edge AI and technology solutions.
            </p>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    selectedIndustry === industry.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {industry.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {filteredCaseStudies.map((study, index) => (
                <div key={study.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                          <p className="text-cyan-400">{study.client} • {study.industry}</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                          <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                          <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {study.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="text-center">
                              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-2">
                                <metric.icon className="w-6 h-6 text-cyan-400" />
                              </div>
                              <div className="text-2xl font-bold text-white">{metric.value}</div>
                              <div className="text-sm text-gray-400">{metric.label}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                          <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <div className="flex items-center">
                              <Zap className="w-4 h-4 mr-1" />
                              {study.duration}
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {study.team}
                            </div>
                          </div>
                          <Link
                            to={`/case-studies/${study.id}`}
                            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                          >
                            Read Full Case Study
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl h-96 flex items-center justify-center">
                      <div className="text-center">
                        <Building2 className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                        <p className="text-gray-300">Case Study Image</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our AI and technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/consultation"
                  className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

CaseStudiesPage.displayName = 'CaseStudiesPage';

export default CaseStudiesPage;