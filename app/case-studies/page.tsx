'use client';
import React from 'react';
import { Award, TrendingUp, Users, Clock, CheckCircle, ArrowRight, Star, Target, Zap, Brain } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 Manufacturing: AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Inefficient supply chain management leading to 30% waste and delayed deliveries',
      solution: 'Implemented AI-driven demand forecasting and automated inventory management',
      results: [
        '40% reduction in inventory costs',
        '25% improvement in delivery times',
        '60% decrease in supply chain waste',
        '$2.5M annual savings'
      ],
      duration: '6 months',
      teamSize: '8 specialists',
      technologies: ['Machine Learning', 'Predictive Analytics', 'IoT Integration', 'Cloud Computing'],
      image: '/case-studies/manufacturing-ai.jpg',
      testimonial: {
        quote: "Zion Tech Group's AI solution transformed our entire supply chain. The results exceeded our expectations.",
        author: "Sarah Johnson",
        role: "VP of Operations"
      }
    },
    {
      id: 2,
      title: 'Healthcare Provider: AI-Driven Patient Care Optimization',
      client: 'Metro Health Systems',
      industry: 'Healthcare',
      challenge: 'High patient readmission rates and inefficient resource allocation',
      solution: 'Deployed AI-powered patient risk assessment and resource optimization system',
      results: [
        '35% reduction in readmission rates',
        '20% improvement in patient satisfaction',
        '45% better resource utilization',
        '15% cost savings on operations'
      ],
      duration: '8 months',
      teamSize: '12 specialists',
      technologies: ['Deep Learning', 'Natural Language Processing', 'Predictive Modeling', 'Data Analytics'],
      image: '/case-studies/healthcare-ai.jpg',
      testimonial: {
        quote: "The AI system helps us provide better care while reducing costs. It's a game-changer for healthcare.",
        author: "Dr. Michael Chen",
        role: "Chief Medical Officer"
      }
    },
    {
      id: 3,
      title: 'Financial Services: Automated Risk Assessment & Fraud Detection',
      client: 'Premier Financial Group',
      industry: 'Financial Services',
      challenge: 'Manual risk assessment processes and increasing fraud incidents',
      solution: 'Implemented real-time AI fraud detection and automated risk scoring system',
      results: [
        '90% reduction in false positives',
        '70% faster loan processing',
        '85% improvement in fraud detection accuracy',
        '$5M prevented in fraudulent transactions'
      ],
      duration: '4 months',
      teamSize: '6 specialists',
      technologies: ['Machine Learning', 'Real-time Analytics', 'Blockchain', 'API Integration'],
      image: '/case-studies/finance-ai.jpg',
      testimonial: {
        quote: "Our fraud detection capabilities have never been stronger. The ROI was immediate and substantial.",
        author: "Jennifer Martinez",
        role: "Chief Risk Officer"
      }
    },
    {
      id: 4,
      title: 'E-commerce Platform: Personalized Customer Experience',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer engagement',
      solution: 'Built AI-powered recommendation engine and personalized marketing automation',
      results: [
        '55% increase in conversion rates',
        '40% improvement in customer engagement',
        '30% boost in average order value',
        '25% increase in customer lifetime value'
      ],
      duration: '5 months',
      teamSize: '10 specialists',
      technologies: ['Recommendation Systems', 'Customer Analytics', 'Marketing Automation', 'A/B Testing'],
      image: '/case-studies/ecommerce-ai.jpg',
      testimonial: {
        quote: "The personalized experience our customers now get is incredible. Sales have never been better.",
        author: "David Thompson",
        role: "VP of Marketing"
      }
    },
    {
      id: 5,
      title: 'Energy Sector: Predictive Maintenance & Optimization',
      client: 'Green Energy Solutions',
      industry: 'Energy',
      challenge: 'Unexpected equipment failures and inefficient energy production',
      solution: 'Deployed IoT sensors with AI predictive maintenance and energy optimization',
      results: [
        '50% reduction in unplanned downtime',
        '25% improvement in energy efficiency',
        '35% decrease in maintenance costs',
        '20% increase in overall production'
      ],
      duration: '7 months',
      teamSize: '9 specialists',
      technologies: ['IoT Integration', 'Predictive Maintenance', 'Energy Analytics', 'Edge Computing'],
      image: '/case-studies/energy-ai.jpg',
      testimonial: {
        quote: "Predictive maintenance has revolutionized our operations. We're more efficient than ever.",
        author: "Robert Kim",
        role: "Operations Director"
      }
    },
    {
      id: 6,
      title: 'Retail Chain: Inventory & Demand Forecasting',
      client: 'MegaMart Retail',
      industry: 'Retail',
      challenge: 'Overstocking and stockouts leading to revenue loss',
      solution: 'Implemented AI-driven demand forecasting and automated inventory management',
      results: [
        '45% reduction in stockouts',
        '30% decrease in overstock',
        '20% improvement in inventory turnover',
        '$3.2M increase in revenue'
      ],
      duration: '6 months',
      teamSize: '7 specialists',
      technologies: ['Time Series Analysis', 'Demand Forecasting', 'Inventory Optimization', 'Real-time Analytics'],
      image: '/case-studies/retail-ai.jpg',
      testimonial: {
        quote: "Our inventory management is now perfectly aligned with customer demand. Revenue is up significantly.",
        author: "Lisa Anderson",
        role: "Supply Chain Manager"
      }
    }
  ];

  const stats = [
    { number: '50+', label: 'Successful Projects', icon: Award },
    { number: '100+', label: 'Happy Clients', icon: Users },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '99.9%', label: 'Success Rate', icon: CheckCircle }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge AI solutions and achieve remarkable results.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {caseStudies.map((study) => (
                <div key={study.id} className="cyber-card p-8 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-cyan-400 font-semibold">{study.client}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                      <Clock className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Duration</div>
                      <div className="text-white font-semibold">{study.duration}</div>
                    </div>
                    <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                      <Users className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Team Size</div>
                      <div className="text-white font-semibold">{study.teamSize}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-6">
                    <blockquote className="text-gray-300 italic mb-4">
                      "{study.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{study.testimonial.author}</div>
                        <div className="text-gray-400 text-sm">{study.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the growing list of companies that have transformed their business with our AI solutions. 
                Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudiesPage;