'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award, Building2, Shield, Zap, BarChart3, Clock, DollarSign } from 'lucide-react'

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
  technologies: string[];
  metrics: {
    improvement: string;
    savings: string;
    efficiency: string;
  };
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'ai-ecommerce-optimization',
      title: 'AI-Powered E-commerce Optimization',
      client: 'TechRetail Corp',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment due to poor product recommendations and user experience.',
      solution: 'Implemented AI-powered recommendation engine, personalized shopping experience, and automated customer service chatbot.',
      results: [
        'Increased conversion rate by 45%',
        'Reduced cart abandonment by 60%',
        'Improved customer satisfaction by 80%',
        'Generated $2.5M additional revenue'
      ],
      image: '/images/case-studies/ecommerce-ai.jpg',
      duration: '6 months',
      team: '8 specialists',
      technologies: ['Machine Learning', 'NLP', 'Computer Vision', 'React', 'Node.js'],
      metrics: {
        improvement: '45%',
        savings: '$500K',
        efficiency: '60%'
      }
    },
    {
      id: 'healthcare-data-analytics',
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data across multiple systems leading to inefficient care coordination and delayed diagnoses.',
      solution: 'Developed comprehensive data analytics platform with AI-powered insights, predictive modeling, and real-time monitoring.',
      results: [
        'Reduced diagnosis time by 40%',
        'Improved patient outcomes by 35%',
        'Saved 200+ hours per month',
        'Achieved 99.9% data accuracy'
      ],
      image: '/images/case-studies/healthcare-analytics.jpg',
      duration: '8 months',
      team: '12 specialists',
      technologies: ['Data Analytics', 'Machine Learning', 'Python', 'AWS', 'PostgreSQL'],
      metrics: {
        improvement: '40%',
        savings: '$1.2M',
        efficiency: '35%'
      }
    },
    {
      id: 'manufacturing-automation',
      title: 'Smart Manufacturing Automation',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing production delays and inconsistent product quality.',
      solution: 'Implemented AI-powered computer vision system for automated quality control, predictive maintenance, and process optimization.',
      results: [
        'Reduced defects by 70%',
        'Increased production efficiency by 50%',
        'Saved $800K in maintenance costs',
        'Achieved 99.5% quality accuracy'
      ],
      image: '/images/case-studies/manufacturing-ai.jpg',
      duration: '10 months',
      team: '15 specialists',
      technologies: ['Computer Vision', 'IoT', 'Edge Computing', 'Python', 'TensorFlow'],
      metrics: {
        improvement: '70%',
        savings: '$800K',
        efficiency: '50%'
      }
    },
    {
      id: 'financial-fraud-detection',
      title: 'AI Fraud Detection System',
      client: 'SecureBank Financial',
      industry: 'Financial Services',
      challenge: 'Increasing fraud incidents and false positives in existing detection systems affecting customer experience.',
      solution: 'Developed advanced AI fraud detection system with real-time monitoring, behavioral analysis, and automated response.',
      results: [
        'Reduced false positives by 85%',
        'Detected 95% of fraud attempts',
        'Saved $2M in prevented losses',
        'Improved customer satisfaction by 60%'
      ],
      image: '/images/case-studies/fraud-detection.jpg',
      duration: '7 months',
      team: '10 specialists',
      technologies: ['Machine Learning', 'Real-time Analytics', 'Kafka', 'Python', 'Apache Spark'],
      metrics: {
        improvement: '95%',
        savings: '$2M',
        efficiency: '85%'
      }
    },
    {
      id: 'retail-inventory-optimization',
      title: 'Retail Inventory Optimization',
      client: 'Fashion Forward Retail',
      industry: 'Retail',
      challenge: 'Overstock and stockout issues leading to lost sales and increased carrying costs.',
      solution: 'Implemented AI-powered demand forecasting and inventory optimization system with real-time analytics.',
      results: [
        'Reduced inventory costs by 30%',
        'Eliminated stockouts by 90%',
        'Increased sales by 25%',
        'Improved cash flow by $1.5M'
      ],
      image: '/images/case-studies/retail-inventory.jpg',
      duration: '5 months',
      team: '6 specialists',
      technologies: ['Predictive Analytics', 'Machine Learning', 'Python', 'AWS', 'Tableau'],
      metrics: {
        improvement: '30%',
        savings: '$1.5M',
        efficiency: '90%'
      }
    },
    {
      id: 'customer-service-automation',
      title: 'AI Customer Service Automation',
      client: 'GlobalTech Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Deployed AI-powered chatbot system with natural language processing and seamless human handoff.',
      results: [
        'Reduced response time by 80%',
        'Decreased support costs by 60%',
        'Improved customer satisfaction by 70%',
        'Handled 10x more inquiries'
      ],
      image: '/images/case-studies/customer-service.jpg',
      duration: '4 months',
      team: '8 specialists',
      technologies: ['NLP', 'Chatbot Development', 'Python', 'React', 'Node.js'],
      metrics: {
        improvement: '80%',
        savings: '$400K',
        efficiency: '60%'
      }
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '$10M+', label: 'Cost Savings Generated' },
    { number: '200%', label: 'Average ROI' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{study.title}</h3>
                      <p className="text-gray-300">{study.client} • {study.industry}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Duration</div>
                    <div className="text-white font-semibold">{study.duration}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{study.metrics.improvement}</div>
                      <div className="text-xs text-gray-400">Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{study.metrics.savings}</div>
                      <div className="text-xs text-gray-400">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{study.metrics.efficiency}</div>
                      <div className="text-xs text-gray-400">Efficiency</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Team: {study.team}
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and IT solutions can transform your business operations and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Your Project
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;