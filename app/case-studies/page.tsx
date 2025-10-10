'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, DollarSign, CheckCircle, BarChart, Clock, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Giant Achieves 300% ROI with AI-Powered Personalization',
      company: 'TechRetail Corp',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer engagement',
      solution: 'Implemented AI-powered recommendation engine and dynamic pricing',
      results: {
        roi: '300%',
        conversion: '+85%',
        revenue: '+$2.5M',
        customers: '+40%'
      },
      duration: '6 months',
      team: '8 experts',
      image: '/images/case-studies/ecommerce-ai.jpg'
    },
    {
      id: 2,
      title: 'Healthcare Provider Reduces Costs by 60% with AI Automation',
      company: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'High operational costs and manual processes',
      solution: 'Deployed AI-powered automation for patient scheduling and resource optimization',
      results: {
        roi: '250%',
        costs: '-60%',
        efficiency: '+90%',
        patients: '+35%'
      },
      duration: '4 months',
      team: '12 experts',
      image: '/images/case-studies/healthcare-ai.jpg'
    },
    {
      id: 3,
      title: 'Manufacturing Company Increases Production by 150% with IoT and AI',
      company: 'Industrial Dynamics',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes and equipment downtime',
      solution: 'Integrated IoT sensors with AI-powered predictive maintenance and optimization',
      results: {
        roi: '400%',
        production: '+150%',
        downtime: '-80%',
        quality: '+95%'
      },
      duration: '8 months',
      team: '15 experts',
      image: '/images/case-studies/manufacturing-iot.jpg'
    },
    {
      id: 4,
      title: 'Financial Services Firm Enhances Security with AI-Powered Fraud Detection',
      company: 'SecureBank Ltd',
      industry: 'Financial Services',
      challenge: 'Increasing fraud incidents and security threats',
      solution: 'Implemented advanced AI algorithms for real-time fraud detection and prevention',
      results: {
        roi: '200%',
        fraud: '-95%',
        accuracy: '+99.5%',
        savings: '+$10M'
      },
      duration: '3 months',
      team: '6 experts',
      image: '/images/case-studies/finance-security.jpg'
    },
    {
      id: 5,
      title: 'Education Platform Improves Learning Outcomes with AI Tutoring',
      company: 'EduTech Academy',
      industry: 'Education',
      challenge: 'Low student engagement and poor learning outcomes',
      solution: 'Developed personalized AI tutoring system with adaptive learning algorithms',
      results: {
        roi: '180%',
        engagement: '+120%',
        outcomes: '+75%',
        retention: '+60%'
      },
      duration: '5 months',
      team: '10 experts',
      image: '/images/case-studies/education-ai.jpg'
    },
    {
      id: 6,
      title: 'Logistics Company Optimizes Operations with AI-Powered Route Planning',
      company: 'FastTrack Logistics',
      industry: 'Logistics',
      challenge: 'Inefficient route planning and high fuel costs',
      solution: 'Deployed AI-powered route optimization and real-time tracking system',
      results: {
        roi: '320%',
        fuel: '-45%',
        delivery: '+65%',
        costs: '-30%'
      },
      duration: '4 months',
      team: '8 experts',
      image: '/images/case-studies/logistics-ai.jpg'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '$50M+', label: 'Client Savings', icon: DollarSign },
    { number: '99.9%', label: 'Success Rate', icon: CheckCircle }
  ];

  const industries = [
    'E-commerce',
    'Healthcare',
    'Manufacturing',
    'Financial Services',
    'Education',
    'Logistics',
    'Technology',
    'Government'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore real-world success stories of businesses transformed by our AI and technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI implementation, business transformation, ROI" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Real results from real businesses
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Discover how companies across industries have transformed their operations and achieved remarkable results with our AI and technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Featured Case Studies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore detailed case studies showcasing the transformative impact of our solutions.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {study.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {study.team}
                      </div>
                    </div>
                    <button className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                      Read Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                  <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-6 text-center">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">
                          {study.results.roi}
                        </div>
                        <div className="text-sm text-gray-300">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">
                          {study.results.conversion || study.results.costs || study.results.production || study.results.fraud || study.results.engagement || study.results.fuel}
                        </div>
                        <div className="text-sm text-gray-300">
                          {Object.keys(study.results).find(key => key !== 'roi' && key !== 'savings' && key !== 'accuracy' && key !== 'quality' && key !== 'outcomes' && key !== 'retention' && key !== 'delivery' && key !== 'customers' && key !== 'efficiency' && key !== 'patients' && key !== 'downtime')}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">
                          {study.results.revenue || study.results.savings || study.results.quality || study.results.accuracy || study.results.outcomes || study.results.costs}
                        </div>
                        <div className="text-sm text-gray-300">
                          {Object.keys(study.results).find(key => key === 'revenue' || key === 'savings' || key === 'quality' || key === 'accuracy' || key === 'outcomes' || key === 'costs')}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-400 mb-1">
                          {study.results.customers || study.results.efficiency || study.results.patients || study.results.downtime || study.results.retention || study.results.delivery}
                        </div>
                        <div className="text-sm text-gray-300">
                          {Object.keys(study.results).find(key => key === 'customers' || key === 'efficiency' || key === 'patients' || key === 'downtime' || key === 'retention' || key === 'delivery')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions have delivered results across diverse industries and business sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-white">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have transformed their business with our AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Contact Us
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;