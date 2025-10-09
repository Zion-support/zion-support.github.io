'use client';
import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react';

const IndustriesPage: React.FC = () => {
  const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'Revolutionizing healthcare with AI-powered diagnostics, treatment optimization, and patient care',
      challenges: [
        'Complex regulatory compliance requirements',
        'High operational costs and inefficiencies',
        'Data silos and interoperability issues',
        'Staff shortages and burnout'
      ],
      solutions: [
        'AI-powered medical imaging and diagnostics',
        'Predictive analytics for patient outcomes',
        'Automated administrative processes',
        'Telemedicine and remote monitoring platforms'
      ],
      results: [
        '40% reduction in diagnostic errors',
        '60% faster patient processing',
        '$2M+ annual cost savings',
        '95% staff satisfaction improvement'
      ],
      caseStudy: {
        title: 'Regional Medical Center Transformation',
        description: 'Implemented AI diagnostic tools and automated workflows',
        impact: 'Reduced patient wait times by 50% and improved diagnostic accuracy by 40%'
      }
    },
    {
      name: 'Financial Services',
      icon: '💰',
      description: 'Transforming banking and finance with advanced AI, blockchain, and automation solutions',
      challenges: [
        'Increasing fraud and security threats',
        'Regulatory compliance complexity',
        'Customer experience expectations',
        'Legacy system modernization'
      ],
      solutions: [
        'AI-powered fraud detection and prevention',
        'Automated compliance monitoring',
        'Personalized financial advisory services',
        'Blockchain-based secure transactions'
      ],
      results: [
        '99.9% fraud detection accuracy',
        '80% reduction in false positives',
        '$5M+ prevented fraud losses',
        '50% faster loan processing'
      ],
      caseStudy: {
        title: 'Major Bank Digital Transformation',
        description: 'Deployed AI fraud detection and automated loan processing',
        impact: 'Prevented $5M+ in fraud and reduced loan processing time by 50%'
      }
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Smart manufacturing solutions with IoT, AI, and automation for Industry 4.0',
      challenges: [
        'Supply chain disruptions and complexity',
        'Quality control and defect detection',
        'Predictive maintenance needs',
        'Workforce safety and efficiency'
      ],
      solutions: [
        'IoT-enabled smart factory systems',
        'AI-powered quality control and inspection',
        'Predictive maintenance algorithms',
        'Autonomous robotic systems'
      ],
      results: [
        '30% increase in production efficiency',
        '25% reduction in maintenance costs',
        '90% reduction in quality defects',
        '50% improvement in safety metrics'
      ],
      caseStudy: {
        title: 'Automotive Manufacturing Optimization',
        description: 'Implemented smart factory solutions and AI quality control',
        impact: 'Increased production efficiency by 30% and reduced defects by 90%'
      }
    },
    {
      name: 'Retail & E-commerce',
      icon: '🛒',
      description: 'Enhancing customer experience with AI personalization, inventory optimization, and omnichannel solutions',
      challenges: [
        'Changing customer expectations',
        'Inventory management complexity',
        'Omnichannel integration',
        'Competitive pricing pressure'
      ],
      solutions: [
        'AI-powered personalization engines',
        'Dynamic pricing and inventory optimization',
        'Omnichannel customer experience platforms',
        'Automated customer service chatbots'
      ],
      results: [
        '35% increase in conversion rates',
        '40% reduction in inventory costs',
        '60% improvement in customer satisfaction',
        '25% increase in average order value'
      ],
      caseStudy: {
        title: 'Fashion Retail Chain Transformation',
        description: 'Deployed AI personalization and inventory optimization',
        impact: 'Increased conversion rates by 35% and reduced inventory costs by 40%'
      }
    },
    {
      name: 'Education',
      icon: '🎓',
      description: 'Revolutionizing learning with AI-powered educational technology and personalized learning experiences',
      challenges: [
        'Personalized learning at scale',
        'Student engagement and retention',
        'Assessment and evaluation efficiency',
        'Remote learning infrastructure'
      ],
      solutions: [
        'AI-powered adaptive learning platforms',
        'Intelligent tutoring systems',
        'Automated assessment and grading',
        'Virtual and augmented reality learning'
      ],
      results: [
        '45% improvement in learning outcomes',
        '60% increase in student engagement',
        '70% reduction in grading time',
        '85% student satisfaction rating'
      ],
      caseStudy: {
        title: 'University Learning Platform',
        description: 'Implemented AI adaptive learning and automated assessment',
        impact: 'Improved learning outcomes by 45% and increased engagement by 60%'
      }
    },
    {
      name: 'Government & Public Sector',
      icon: '🏛️',
      description: 'Modernizing government services with digital transformation, AI, and citizen-centric solutions',
      challenges: [
        'Citizen service delivery efficiency',
        'Data security and privacy concerns',
        'Legacy system modernization',
        'Budget constraints and resource optimization'
      ],
      solutions: [
        'Digital citizen service portals',
        'AI-powered document processing',
        'Predictive analytics for resource allocation',
        'Cybersecurity and compliance solutions'
      ],
      results: [
        '50% reduction in service processing time',
        '80% improvement in citizen satisfaction',
        '30% reduction in operational costs',
        '99.9% system uptime achievement'
      ],
      caseStudy: {
        title: 'City Government Digital Services',
        description: 'Deployed citizen service portal and AI document processing',
        impact: 'Reduced service processing time by 50% and improved citizen satisfaction by 80%'
      }
    }
  ];

  const technologies = [
    { name: 'Artificial Intelligence', description: 'Machine learning, deep learning, and neural networks' },
    { name: 'Cloud Computing', description: 'Scalable, secure, and cost-effective cloud infrastructure' },
    { name: 'IoT & Edge Computing', description: 'Connected devices and real-time data processing' },
    { name: 'Blockchain', description: 'Secure, transparent, and decentralized solutions' },
    { name: 'Robotics & Automation', description: 'Intelligent automation and robotic process automation' },
    { name: 'Data Analytics', description: 'Advanced analytics and business intelligence' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Industry Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            We specialize in delivering cutting-edge technology solutions across diverse industries. 
            Our industry-specific expertise ensures maximum impact and ROI for your business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get Industry Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              View Industry Case Studies
            </Link>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Industries We Serve
          </h2>
          
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="text-6xl mb-4">{industry.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{industry.name}</h3>
                    <p className="text-gray-300 mb-6">{industry.description}</p>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-red-400 mb-3">Challenges</h4>
                        <ul className="space-y-2">
                          {industry.challenges.map((challenge, challengeIndex) => (
                            <li key={challengeIndex} className="flex items-start text-sm text-gray-300">
                              <span className="text-red-400 mr-2">•</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-3">Our Solutions</h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, solutionIndex) => (
                            <li key={solutionIndex} className="flex items-start text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-3">Results</h4>
                        <ul className="space-y-2">
                          {industry.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start text-sm text-gray-300">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                      <h5 className="text-lg font-semibold text-cyan-400 mb-2">Case Study: {industry.caseStudy.title}</h5>
                      <p className="text-gray-300 mb-2">{industry.caseStudy.description}</p>
                      <p className="text-sm text-cyan-400 font-medium">{industry.caseStudy.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Technologies We Use
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us for Your Industry */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Us for Your Industry?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="cyber-card p-6 text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Industry Expertise</h3>
              <p className="text-gray-300">Deep understanding of industry-specific challenges and regulations</p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Compliance Ready</h3>
              <p className="text-gray-300">Solutions designed to meet industry standards and regulations</p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">Track record of delivering measurable business impact</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our industry experts help you identify the best technology solutions for your specific needs. 
              Get a free industry assessment and discover your transformation opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center"
              >
                Get Free Industry Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default IndustriesPage;