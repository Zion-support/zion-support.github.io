'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Clock, 
  DollarSign,
  BarChart,
  Shield,
  Zap,
  Brain,
  Cloud,
  Star,
  ExternalLink,
  Filter,
  Search
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Finance' },
    { id: 'retail', name: 'Retail' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'technology', name: 'Technology' }
  ];

  const services = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'cloud', name: 'Cloud Infrastructure' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'automation', name: 'Automation' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'healthcare',
      service: 'ai',
      duration: '6 months',
      teamSize: '8 developers',
      challenge: 'MedTech Solutions needed to process and analyze large volumes of patient data to identify patterns and improve treatment outcomes. Their existing system was slow and couldn\'t handle the increasing data volume.',
      solution: 'We developed a comprehensive AI-powered analytics platform using machine learning algorithms to process patient data, identify patterns, and provide actionable insights for healthcare providers.',
      results: [
        '300% increase in data processing speed',
        '95% accuracy in pattern recognition',
        '40% reduction in diagnosis time',
        '$2M annual cost savings'
      ],
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'AWS', 'Docker'],
      image: '🏥',
      featured: true,
      testimonial: {
        quote: 'Zion Tech Group transformed our data analytics capabilities. The AI platform has revolutionized how we process patient information and make treatment decisions.',
        author: 'Dr. Sarah Johnson',
        role: 'Chief Medical Officer',
        company: 'MedTech Solutions'
      }
    },
    {
      id: 2,
      title: 'Financial Fraud Detection System',
      client: 'SecureBank',
      industry: 'finance',
      service: 'ai',
      duration: '4 months',
      teamSize: '6 developers',
      challenge: 'SecureBank was experiencing increasing fraud attempts and needed a real-time detection system to protect their customers and reduce financial losses.',
      solution: 'We implemented an advanced AI fraud detection system using machine learning algorithms that analyzes transaction patterns in real-time and flags suspicious activities.',
      results: [
        '99.5% fraud detection accuracy',
        '60% reduction in false positives',
        'Real-time transaction monitoring',
        '$5M prevented fraud losses'
      ],
      technologies: ['Machine Learning', 'Real-time Processing', 'Python', 'Kafka', 'Redis'],
      image: '🏦',
      featured: true,
      testimonial: {
        quote: 'The fraud detection system has been a game-changer for our security operations. We\'ve significantly reduced fraud while improving customer experience.',
        author: 'Michael Chen',
        role: 'Chief Security Officer',
        company: 'SecureBank'
      }
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Migration',
      client: 'RetailMax',
      industry: 'retail',
      service: 'cloud',
      duration: '8 months',
      teamSize: '12 developers',
      challenge: 'RetailMax needed to migrate their entire e-commerce platform to the cloud to improve scalability and reduce infrastructure costs.',
      solution: 'We designed and implemented a comprehensive cloud migration strategy using AWS, including database migration, application modernization, and security implementation.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        'Auto-scaling capabilities',
        '3x faster deployment times'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
      image: '🛒',
      featured: false,
      testimonial: {
        quote: 'The cloud migration was seamless and exceeded our expectations. Our platform is now more reliable and cost-effective than ever.',
        author: 'Lisa Rodriguez',
        role: 'CTO',
        company: 'RetailMax'
      }
    },
    {
      id: 4,
      title: 'Manufacturing Process Automation',
      client: 'AutoParts Inc',
      industry: 'manufacturing',
      service: 'automation',
      duration: '5 months',
      teamSize: '10 developers',
      challenge: 'AutoParts Inc needed to automate their manufacturing processes to increase efficiency and reduce human error in their production line.',
      solution: 'We developed an intelligent automation system using IoT sensors, AI algorithms, and robotic process automation to optimize manufacturing workflows.',
      results: [
        '35% increase in production efficiency',
        '90% reduction in human errors',
        '24/7 automated monitoring',
        '25% cost reduction'
      ],
      technologies: ['IoT', 'RPA', 'Machine Learning', 'Python', 'PLC Integration'],
      image: '🏭',
      featured: false,
      testimonial: {
        quote: 'The automation system has transformed our manufacturing process. We\'ve seen significant improvements in efficiency and quality.',
        author: 'Robert Kim',
        role: 'Production Manager',
        company: 'AutoParts Inc'
      }
    },
    {
      id: 5,
      title: 'Cybersecurity Enhancement',
      client: 'TechCorp',
      industry: 'technology',
      service: 'cybersecurity',
      duration: '3 months',
      teamSize: '5 developers',
      challenge: 'TechCorp needed to enhance their cybersecurity posture to protect against advanced persistent threats and ensure compliance with industry standards.',
      solution: 'We implemented a comprehensive cybersecurity solution including threat detection, incident response automation, and security monitoring systems.',
      results: [
        '99.8% threat detection rate',
        '50% faster incident response',
        'Zero security breaches',
        'Full compliance achieved'
      ],
      technologies: ['SIEM', 'Machine Learning', 'Python', 'Splunk', 'Threat Intelligence'],
      image: '🔒',
      featured: false,
      testimonial: {
        quote: 'Our security posture has been significantly strengthened. The automated threat detection has been incredibly effective.',
        author: 'Jennifer Wang',
        role: 'CISO',
        company: 'TechCorp'
      }
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesService && matchesSearch;
  });

  const featuredStudies = caseStudies.filter(study => study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, client results, business transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="cyber-scan-line mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch">
              Case Studies
            </h1>
            <p className="text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Real Results, Real Impact
            </p>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries transform their operations 
            with cutting-edge AI and IT solutions. See the measurable results we've delivered.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2 neon-text">50+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2 neon-text">99%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2 neon-text">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              >
                {industries.map((industry) => (
                  <option key={industry.id} value={industry.id}>
                    {industry.name}
                  </option>
                ))}
              </select>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              >
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {selectedIndustry === 'all' && selectedService === 'all' && searchTerm === '' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">Featured Success Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredStudies.map((study) => (
                <div key={study.id} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{study.image}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-cyan-400 font-semibold">{study.client}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                      {study.duration}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 mr-2 text-cyan-400" />
                      {study.teamSize}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <blockquote className="text-gray-300 italic mb-4">
                      "{study.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{study.testimonial.author}</div>
                        <div className="text-gray-400 text-sm">{study.testimonial.role}, {study.testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            {selectedIndustry === 'all' && selectedService === 'all' ? 'All Case Studies' : 'Filtered Results'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="holographic-stream p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{study.image}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{study.title}</h3>
                    <p className="text-cyan-400 text-sm">{study.client}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-400">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {study.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {study.teamSize}
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{study.challenge}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 2).map((result, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {study.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    {study.industry} • {study.service}
                  </div>
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center"
                  >
                    View Details
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">No case studies found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="quantum-tunnel p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="cyber-button w-full sm:w-auto text-center"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;