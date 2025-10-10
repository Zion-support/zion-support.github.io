'use client';
import React, { useState } from 'react';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle,
  Filter,
  Search,
  ExternalLink,
  BarChart,
  Shield,
  Zap,
  Globe,
  Target
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', count: 12 },
    { id: 'healthcare', name: 'Healthcare', count: 3 },
    { id: 'finance', name: 'Finance', count: 2 },
    { id: 'retail', name: 'Retail', count: 2 },
    { id: 'manufacturing', name: 'Manufacturing', count: 2 },
    { id: 'education', name: 'Education', count: 3 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Patient Diagnosis System',
      client: 'MedTech Solutions',
      industry: 'healthcare',
      challenge: 'Reduce diagnosis time and improve accuracy in medical imaging analysis',
      solution: 'Implemented AI-powered computer vision system for radiology',
      results: [
        '95% accuracy in diagnosis',
        '60% reduction in diagnosis time',
        '$2M annual cost savings',
        '50% improvement in patient outcomes'
      ],
      technologies: ['Computer Vision', 'Machine Learning', 'Cloud Computing', 'API Integration'],
      duration: '6 months',
      teamSize: '8 developers',
      image: '/case-studies/healthcare-ai.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Automated Trading Platform',
      client: 'FinanceFlow Inc.',
      industry: 'finance',
      challenge: 'Create high-frequency trading system with real-time risk management',
      solution: 'Built AI-driven trading algorithms with microsecond execution',
      results: [
        '300% increase in trading volume',
        '99.9% system uptime',
        '$50M additional revenue',
        '40% reduction in manual errors'
      ],
      technologies: ['AI Algorithms', 'Real-time Processing', 'Blockchain', 'Security'],
      duration: '8 months',
      teamSize: '12 developers',
      image: '/case-studies/finance-trading.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Smart Inventory Management',
      client: 'RetailMax',
      industry: 'retail',
      challenge: 'Optimize inventory levels and reduce stockouts across 500+ stores',
      solution: 'AI-powered demand forecasting and automated restocking system',
      results: [
        '30% reduction in stockouts',
        '25% decrease in excess inventory',
        '$15M cost savings',
        '98% forecast accuracy'
      ],
      technologies: ['Predictive Analytics', 'IoT Integration', 'Cloud Computing', 'Mobile Apps'],
      duration: '4 months',
      teamSize: '6 developers',
      image: '/case-studies/retail-inventory.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Predictive Maintenance System',
      client: 'ManufacturingCorp',
      industry: 'manufacturing',
      challenge: 'Prevent equipment failures and reduce maintenance costs',
      solution: 'IoT sensors with AI analytics for predictive maintenance',
      results: [
        '70% reduction in unplanned downtime',
        '40% decrease in maintenance costs',
        '$8M annual savings',
        '90% prediction accuracy'
      ],
      technologies: ['IoT Sensors', 'Machine Learning', 'Edge Computing', 'Data Analytics'],
      duration: '5 months',
      teamSize: '10 developers',
      image: '/case-studies/manufacturing-iot.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Personalized Learning Platform',
      client: 'EduTech University',
      industry: 'education',
      challenge: 'Create adaptive learning system for 50,000+ students',
      solution: 'AI-powered personalized curriculum and progress tracking',
      results: [
        '35% improvement in student performance',
        '60% increase in course completion',
        '45% reduction in dropout rate',
        '90% student satisfaction'
      ],
      technologies: ['AI Personalization', 'Learning Analytics', 'Mobile Learning', 'Cloud Platform'],
      duration: '7 months',
      teamSize: '15 developers',
      image: '/case-studies/education-learning.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Fraud Detection System',
      client: 'SecureBank',
      industry: 'finance',
      challenge: 'Detect and prevent fraudulent transactions in real-time',
      solution: 'Advanced AI algorithms for anomaly detection and risk scoring',
      results: [
        '99.5% fraud detection accuracy',
        '80% reduction in false positives',
        '$25M prevented losses',
        'Real-time processing'
      ],
      technologies: ['Machine Learning', 'Real-time Analytics', 'Security', 'API Integration'],
      duration: '3 months',
      teamSize: '5 developers',
      image: '/case-studies/finance-fraud.jpg',
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  const featuredStudy = caseStudies.find(study => study.featured);
  const regularStudies = filteredCaseStudies.filter(study => !study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Case Studies</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Real-world success stories showcasing how we've helped businesses 
            transform their operations with cutting-edge AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <span>{industry.name}</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {industry.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredStudy && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Featured Case Study</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">{featuredStudy.title}</h2>
                  <div className="text-cyan-400 font-semibold mb-4">{featuredStudy.client}</div>
                  <p className="text-gray-300 mb-6 text-lg">{featuredStudy.challenge}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{featuredStudy.duration}</div>
                      <div className="text-sm text-gray-300">Duration</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{featuredStudy.teamSize}</div>
                      <div className="text-sm text-gray-300">Team Size</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredStudy.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/case-studies/${featuredStudy.id}`}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Key Results</h3>
                  <div className="space-y-4">
                    {featuredStudy.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-6 text-center mb-6">
                  <BarChart className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Case Study</p>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {study.title}
                </h3>
                <div className="text-cyan-400 font-semibold mb-2">{study.client}</div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{study.challenge}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {study.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{study.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{study.teamSize}</span>
                  </div>
                </div>
                <a
                  href={`/case-studies/${study.id}`}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Success Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that speak to our commitment to delivering exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">$2B+</div>
              <div className="text-gray-300">Client Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss how we can help transform your business with our proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Call (302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;