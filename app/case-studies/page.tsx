'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { ArrowRight, TrendingUp, DollarSign, Clock, Users, CheckCircle, Star, Award, Target, Zap } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing 15% defect rate and production delays',
      solution: 'AI-powered computer vision system for real-time quality inspection',
      results: [
        '85% reduction in defect rate',
        '60% faster inspection process',
        '$2.3M annual cost savings',
        '99.7% accuracy in defect detection'
      ],
      technologies: ['Computer Vision', 'Machine Learning', 'IoT Sensors', 'Real-time Analytics'],
      duration: '6 months',
      teamSize: '8 experts',
      image: '/images/case-studies/manufacturing.jpg'
    },
    {
      id: 2,
      title: 'Global Financial Services Firm',
      industry: 'Financial Services',
      challenge: 'Manual fraud detection leading to $50M+ annual losses and regulatory compliance issues',
      solution: 'Advanced AI fraud detection system with real-time risk assessment',
      results: [
        '95% reduction in false positives',
        '78% faster fraud detection',
        '$45M annual savings',
        '100% regulatory compliance'
      ],
      technologies: ['Deep Learning', 'Real-time Processing', 'Risk Analytics', 'Blockchain'],
      duration: '8 months',
      teamSize: '12 experts',
      image: '/images/case-studies/finance.jpg'
    },
    {
      id: 3,
      title: 'Healthcare Provider Network',
      industry: 'Healthcare',
      challenge: 'Patient data scattered across systems, leading to delayed diagnoses and treatment',
      solution: 'AI-powered patient data integration and predictive analytics platform',
      results: [
        '40% faster diagnosis time',
        '30% improvement in patient outcomes',
        '50% reduction in administrative costs',
        '99.9% data accuracy'
      ],
      technologies: ['NLP', 'Predictive Analytics', 'Data Integration', 'HIPAA Compliance'],
      duration: '10 months',
      teamSize: '15 experts',
      image: '/images/case-studies/healthcare.jpg'
    },
    {
      id: 4,
      title: 'E-commerce Retail Chain',
      industry: 'Retail',
      challenge: 'Inventory management inefficiencies causing stockouts and overstock issues',
      solution: 'AI-driven demand forecasting and inventory optimization system',
      results: [
        '35% reduction in inventory costs',
        '90% reduction in stockouts',
        '25% increase in sales',
        '60% improvement in forecast accuracy'
      ],
      technologies: ['Time Series Analysis', 'Demand Forecasting', 'Supply Chain AI', 'Real-time Analytics'],
      duration: '5 months',
      teamSize: '6 experts',
      image: '/images/case-studies/retail.jpg'
    },
    {
      id: 5,
      title: 'Telecommunications Provider',
      industry: 'Telecommunications',
      challenge: 'Network optimization and predictive maintenance for 5G infrastructure',
      solution: 'AI-powered network optimization and predictive maintenance platform',
      results: [
        '50% reduction in network downtime',
        '40% improvement in network performance',
        '30% reduction in maintenance costs',
        '99.9% network reliability'
      ],
      technologies: ['5G Optimization', 'Predictive Maintenance', 'Network Analytics', 'Edge Computing'],
      duration: '12 months',
      teamSize: '20 experts',
      image: '/images/case-studies/telecom.jpg'
    },
    {
      id: 6,
      title: 'Logistics & Transportation Company',
      industry: 'Logistics',
      challenge: 'Route optimization and fuel efficiency for fleet management',
      solution: 'AI-powered route optimization and fuel efficiency management system',
      results: [
        '25% reduction in fuel costs',
        '30% improvement in delivery times',
        '20% increase in fleet utilization',
        '35% reduction in carbon emissions'
      ],
      technologies: ['Route Optimization', 'Fuel Analytics', 'IoT Sensors', 'Environmental AI'],
      duration: '7 months',
      teamSize: '10 experts',
      image: '/images/case-studies/logistics.jpg'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '100+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Client Satisfaction', icon: Star },
    { number: '$500M+', label: 'Cost Savings Delivered', icon: DollarSign }
  ];

  return (
    <>
      <SEOOptimizer
        title="Case Studies - Zion Tech Group"
        description="Explore our successful AI and IT implementation case studies. See how we've helped Fortune 500 companies achieve remarkable results with our cutting-edge solutions."
        keywords={['case studies', 'AI implementation', 'success stories', 'enterprise solutions', 'client results', 'AI projects']}
        canonicalUrl="https://ziontechgroup.com/case-studies"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Real Results from Real Clients
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Discover how we've helped Fortune 500 companies and growing businesses achieve 
                unprecedented results through our AI and IT solutions. Each case study represents 
                a unique challenge and our innovative approach to solving it.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Our Track Record
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Featured Case Studies
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                  <div key={study.id} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white neon-text">{study.title}</h3>
                          <p className="text-cyan-400 font-semibold">{study.industry}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Duration</div>
                        <div className="text-white font-semibold">{study.duration}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-slate-800 text-cyan-400 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <div className="text-sm text-gray-400">
                        Team: {study.teamSize}
                      </div>
                      <a
                        href="/contact"
                        className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="cyber-card p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
                  Ready to Create Your Success Story?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Join the companies that have transformed their operations with our AI and IT solutions. 
                  Let's discuss how we can help you achieve similar results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="cyber-button flex items-center justify-center space-x-2"
                  >
                    <Zap className="w-5 h-5" />
                    <span>Start Your Project</span>
                  </a>
                  <a
                    href="/consultation"
                    className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;
