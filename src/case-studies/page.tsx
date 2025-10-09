import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, CheckCircle, Star, BarChart, Shield, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 'fortune-500-ai-transformation',
      title: 'Fortune 500 AI Transformation',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Manual processes causing 40% efficiency loss and $2M annual waste',
      solution: 'Comprehensive AI automation and analytics platform',
      results: {
        roi: '300%',
        costSavings: '$2.5M',
        efficiency: '95%',
        timeframe: '6 months'
      },
      description: 'Transformed a Fortune 500 manufacturing company through comprehensive AI implementation, achieving unprecedented efficiency gains and cost savings.',
      technologies: ['Machine Learning', 'Computer Vision', 'Process Automation', 'Predictive Analytics'],
      testimonial: {
        quote: 'Zion Tech Group transformed our operations completely. The ROI exceeded our expectations by 200%.',
        author: 'Sarah Johnson',
        role: 'CTO',
        company: 'Global Manufacturing Corp'
      },
      featured: true
    },
    {
      id: 'healthcare-ai-diagnosis',
      title: 'AI-Powered Medical Diagnosis System',
      company: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Manual diagnosis processes leading to 30% misdiagnosis rate and delayed treatments',
      solution: 'AI-powered diagnostic system with computer vision and NLP',
      results: {
        roi: '250%',
        costSavings: '$1.8M',
        efficiency: '90%',
        timeframe: '8 months'
      },
      description: 'Developed an AI-powered medical diagnosis system that reduced misdiagnosis rates by 85% and improved patient outcomes significantly.',
      technologies: ['Computer Vision', 'Natural Language Processing', 'Deep Learning', 'Medical AI'],
      testimonial: {
        quote: 'The AI system has revolutionized our diagnostic accuracy. Patient outcomes have improved dramatically.',
        author: 'Dr. Michael Chen',
        role: 'Chief Medical Officer',
        company: 'MedTech Solutions'
      },
      featured: true
    },
    {
      id: 'fintech-fraud-detection',
      title: 'Advanced Fraud Detection System',
      company: 'SecureBank Financial',
      industry: 'Financial Services',
      challenge: 'Traditional fraud detection missing 25% of fraudulent transactions',
      solution: 'Real-time AI fraud detection with machine learning algorithms',
      results: {
        roi: '400%',
        costSavings: '$3.2M',
        efficiency: '98%',
        timeframe: '4 months'
      },
      description: 'Implemented a cutting-edge fraud detection system that reduced false positives by 60% while catching 99.5% of fraudulent transactions.',
      technologies: ['Machine Learning', 'Real-time Analytics', 'Anomaly Detection', 'Risk Assessment'],
      testimonial: {
        quote: 'Our fraud detection accuracy improved from 75% to 99.5%. The system pays for itself every month.',
        author: 'David Wilson',
        role: 'VP of Security',
        company: 'SecureBank Financial'
      },
      featured: false
    },
    {
      id: 'retail-inventory-optimization',
      title: 'AI Inventory Optimization',
      company: 'RetailMax Chain',
      industry: 'Retail',
      challenge: 'Inventory management issues causing $1.5M in lost sales and overstock costs',
      solution: 'AI-powered inventory optimization and demand forecasting',
      results: {
        roi: '280%',
        costSavings: '$1.2M',
        efficiency: '88%',
        timeframe: '5 months'
      },
      description: 'Optimized inventory management across 200+ retail locations using AI-driven demand forecasting and automated restocking.',
      technologies: ['Predictive Analytics', 'Demand Forecasting', 'Supply Chain AI', 'Inventory Management'],
      testimonial: {
        quote: 'Inventory accuracy improved from 70% to 95%. We reduced stockouts by 80% and overstock by 60%.',
        author: 'Lisa Martinez',
        role: 'VP of Operations',
        company: 'RetailMax Chain'
      },
      featured: false
    },
    {
      id: 'logistics-route-optimization',
      title: 'Smart Logistics Route Optimization',
      company: 'LogiFlow Transport',
      industry: 'Logistics',
      challenge: 'Inefficient routing causing 35% fuel waste and delivery delays',
      solution: 'AI-powered route optimization and fleet management system',
      results: {
        roi: '350%',
        costSavings: '$2.8M',
        efficiency: '92%',
        timeframe: '7 months'
      },
      description: 'Revolutionized logistics operations with AI-driven route optimization, reducing fuel costs and improving delivery times.',
      technologies: ['Route Optimization', 'Fleet Management', 'Predictive Analytics', 'IoT Integration'],
      testimonial: {
        quote: 'Fuel costs reduced by 35% and delivery times improved by 40%. Our drivers love the new system.',
        author: 'Robert Kim',
        role: 'Operations Director',
        company: 'LogiFlow Transport'
      },
      featured: false
    },
    {
      id: 'customer-service-automation',
      title: 'AI Customer Service Automation',
      company: 'ServicePro Inc',
      industry: 'Customer Service',
      challenge: 'High customer service costs and 24-hour response times',
      solution: 'AI-powered chatbot and automated customer service system',
      results: {
        roi: '220%',
        costSavings: '$1.5M',
        efficiency: '85%',
        timeframe: '3 months'
      },
      description: 'Automated 80% of customer inquiries with AI chatbots while maintaining 95% customer satisfaction rates.',
      technologies: ['Natural Language Processing', 'Chatbot Development', 'Sentiment Analysis', 'Customer Service AI'],
      testimonial: {
        quote: 'Response times dropped from 24 hours to 2 minutes. Customer satisfaction increased by 40%.',
        author: 'Emily Rodriguez',
        role: 'Customer Success Manager',
        company: 'ServicePro Inc'
      },
      featured: false
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Average ROI', value: '300%', icon: TrendingUp },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'Cost Savings', value: '$50M+', icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Case <span className="text-cyan-400">Studies</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Real results from real businesses. Discover how we've helped companies transform their operations with AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Success stories that showcase our expertise and results
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.filter(study => study.featured).map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                  <div className="text-6xl font-bold text-cyan-600">{study.industry.charAt(0)}</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-cyan-100 text-cyan-800 text-sm font-medium px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-sm text-gray-500">{study.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{study.results.roi}</div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{study.results.costSavings}</div>
                      <div className="text-sm text-gray-600">Cost Savings</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{study.results.efficiency}</div>
                      <div className="text-sm text-gray-600">Efficiency</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">{study.results.timeframe}</div>
                      <div className="text-sm text-gray-600">Timeframe</div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 italic mb-2">"{study.testimonial.quote}"</p>
                    <p className="text-sm font-medium text-gray-900">
                      {study.testimonial.author}, {study.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive portfolio of successful implementations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-4xl font-bold text-gray-400">{study.industry.charAt(0)}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-sm text-gray-500">{study.company}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{study.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-lg font-bold text-green-600">{study.results.roi}</div>
                      <div className="text-xs text-gray-600">ROI</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-lg font-bold text-blue-600">{study.results.costSavings}</div>
                      <div className="text-xs text-gray-600">Savings</div>
                    </div>
                  </div>

                  <div className="border-t pt-3">
                    <p className="text-xs text-gray-600 italic mb-2">"{study.testimonial.quote}"</p>
                    <p className="text-xs font-medium text-gray-900">
                      {study.testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve similar results with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;