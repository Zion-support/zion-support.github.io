import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, Heart, Coins, Factory, Truck, Globe, 
  Users, TrendingUp, Award, Zap, Brain, Shield, Cloud,
  ArrowRight, CheckCircle, Star, Target, Rocket, ChartBar,
  Clock, DollarSign, Percent, ArrowUp, ArrowDown
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const CaseStudies = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'MedTech Solutions Inc.',
      industry: 'healthcare',
      service: 'ai-analytics',
      description: 'Developed a comprehensive AI-powered analytics platform that revolutionized patient care and operational efficiency.',
      challenge: 'MedTech Solutions faced challenges with manual data analysis, limited predictive capabilities, and inefficient resource allocation across their network of 50+ hospitals.',
      solution: 'Implemented an AI-powered analytics platform with machine learning algorithms for patient outcome prediction, resource optimization, and real-time monitoring.',
      results: [
        { metric: '35%', label: 'Reduction in patient readmission rates', icon: ArrowDown, color: 'text-green-400' },
        { metric: '40%', label: 'Improvement in resource utilization', icon: ArrowUp, color: 'text-blue-400' },
        { metric: '2.5x', label: 'Faster diagnosis accuracy', icon: TrendingUp, color: 'text-purple-400' },
        { metric: '$2.8M', label: 'Annual cost savings', icon: DollarSign, color: 'text-yellow-400' }
      ],
      technologies: ['Machine Learning', 'Predictive Analytics', 'Real-time Processing', 'Cloud Infrastructure'],
      duration: '6 months',
      team: '8 engineers',
      image: '/images/case-studies/healthcare-analytics.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Financial Trading Platform',
      client: 'Quantum Capital Partners',
      industry: 'finance',
      service: 'quantum-computing',
      description: 'Built a revolutionary quantum computing platform for high-frequency trading and risk management.',
      challenge: 'Quantum Capital needed to process complex financial models in real-time while maintaining millisecond response times for trading decisions.',
      solution: 'Developed a hybrid quantum-classical computing platform with quantum algorithms for portfolio optimization and risk assessment.',
      results: [
        { metric: '1000x', label: 'Faster portfolio optimization', icon: Zap, color: 'text-blue-400' },
        { metric: '45%', label: 'Improved risk-adjusted returns', icon: TrendingUp, color: 'text-green-400' },
        { metric: '99.9%', label: 'System uptime', icon: Shield, color: 'text-purple-400' },
        { metric: '$15M+', label: 'Additional annual revenue', icon: DollarSign, color: 'text-yellow-400' }
      ],
      technologies: ['Quantum Computing', 'Hybrid Algorithms', 'Real-time Processing', 'Advanced Security'],
      duration: '12 months',
      team: '12 engineers',
      image: '/images/case-studies/quantum-trading.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Smart Manufacturing IoT Platform',
      client: 'Global Manufacturing Corp',
      industry: 'manufacturing',
      service: 'iot-platform',
      description: 'Transformed traditional manufacturing operations with IoT sensors and AI-driven predictive maintenance.',
      challenge: 'Global Manufacturing struggled with unplanned downtime, inefficient maintenance schedules, and lack of real-time production insights.',
      solution: 'Deployed a comprehensive IoT platform with 10,000+ sensors, AI-powered predictive maintenance, and real-time production monitoring.',
      results: [
        { metric: '60%', label: 'Reduction in unplanned downtime', icon: ArrowDown, color: 'text-green-400' },
        { metric: '25%', label: 'Increase in production efficiency', icon: ArrowUp, color: 'text-blue-400' },
        { metric: '30%', label: 'Lower maintenance costs', icon: ArrowDown, color: 'text-green-400' },
        { metric: '3.2x', label: 'ROI within first year', icon: TrendingUp, color: 'text-purple-400' }
      ],
      technologies: ['IoT Sensors', 'Predictive Analytics', 'Edge Computing', 'Cloud Platform'],
      duration: '8 months',
      team: '10 engineers',
      image: '/images/case-studies/smart-manufacturing.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'AI-Powered Customer Support Automation',
      client: 'TechRetail Solutions',
      industry: 'retail',
      service: 'ai-automation',
      description: 'Implemented intelligent customer support automation that improved response times and customer satisfaction.',
      challenge: 'TechRetail faced overwhelming customer support volume, long response times, and inconsistent service quality across channels.',
      solution: 'Built an AI-powered customer support platform with natural language processing, automated ticket routing, and intelligent response generation.',
      results: [
        { metric: '80%', label: 'Faster response times', icon: Zap, color: 'text-blue-400' },
        { metric: '95%', label: 'Customer satisfaction rate', icon: Star, color: 'text-yellow-400' },
        { metric: '70%', label: 'Reduction in support costs', icon: ArrowDown, color: 'text-green-400' },
        { metric: '24/7', label: 'Support availability', icon: Clock, color: 'text-purple-400' }
      ],
      technologies: ['Natural Language Processing', 'Machine Learning', 'Automation', 'Multi-channel Integration'],
      duration: '4 months',
      team: '6 engineers',
      image: '/images/case-studies/customer-support.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Cybersecurity Threat Detection System',
      client: 'SecureBank International',
      industry: 'finance',
      service: 'cybersecurity',
      description: 'Developed an advanced AI-powered cybersecurity platform for real-time threat detection and response.',
      challenge: 'SecureBank needed to protect against sophisticated cyber threats while maintaining compliance with strict financial regulations.',
      solution: 'Built a comprehensive cybersecurity platform with AI-powered threat detection, automated response systems, and compliance monitoring.',
      results: [
        { metric: '99.9%', label: 'Threat detection accuracy', icon: Shield, color: 'text-green-400' },
        { metric: '90%', label: 'Faster threat response', icon: Zap, color: 'text-blue-400' },
        { metric: '100%', label: 'Regulatory compliance', icon: CheckCircle, color: 'text-purple-400' },
        { metric: 'Zero', label: 'Security breaches', icon: Shield, color: 'text-green-400' }
      ],
      technologies: ['AI Security', 'Threat Intelligence', 'Automated Response', 'Compliance Monitoring'],
      duration: '10 months',
      team: '15 engineers',
      image: '/images/case-studies/cybersecurity.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Cloud Migration & DevOps Automation',
      client: 'Enterprise Solutions Ltd',
      industry: 'technology',
      service: 'cloud-devops',
      description: 'Migrated legacy systems to cloud infrastructure with automated DevOps processes.',
      challenge: 'Enterprise Solutions struggled with slow deployment cycles, infrastructure scaling issues, and high operational costs.',
      solution: 'Executed a comprehensive cloud migration with automated CI/CD pipelines, infrastructure as code, and monitoring systems.',
      results: [
        { metric: '10x', label: 'Faster deployment cycles', icon: Zap, color: 'text-blue-400' },
        { metric: '60%', label: 'Reduction in infrastructure costs', icon: ArrowDown, color: 'text-green-400' },
        { metric: '99.9%', label: 'System availability', icon: Shield, color: 'text-purple-400' },
        { metric: 'Auto-scaling', label: 'Infrastructure capability', icon: TrendingUp, color: 'text-yellow-400' }
      ],
      technologies: ['Cloud Migration', 'DevOps Automation', 'CI/CD Pipelines', 'Infrastructure as Code'],
      duration: '9 months',
      team: '12 engineers',
      image: '/images/case-studies/cloud-migration.jpg',
      featured: false
    }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building, count: caseStudies.length },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, count: caseStudies.filter(cs => cs.industry === 'healthcare').length },
    { id: 'finance', name: 'Finance', icon: Coins, count: caseStudies.filter(cs => cs.industry === 'finance').length },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory, count: caseStudies.filter(cs => cs.industry === 'manufacturing').length },
    { id: 'retail', name: 'Retail', icon: Users, count: caseStudies.filter(cs => cs.industry === 'retail').length },
    { id: 'technology', name: 'Technology', icon: Globe, count: caseStudies.filter(cs => cs.industry === 'technology').length }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Brain, count: caseStudies.length },
    { id: 'ai-analytics', name: 'AI Analytics', icon: ChartBar, count: caseStudies.filter(cs => cs.service === 'ai-analytics').length },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, count: caseStudies.filter(cs => cs.service === 'quantum-computing').length },
    { id: 'iot-platform', name: 'IoT Platform', icon: Wifi, count: caseStudies.filter(cs => cs.service === 'iot-platform').length },
    { id: 'ai-automation', name: 'AI Automation', icon: Bot, count: caseStudies.filter(cs => cs.service === 'ai-automation').length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: caseStudies.filter(cs => cs.service === 'cybersecurity').length },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: caseStudies.filter(cs => cs.service === 'cloud-devops').length }
  ];

  const filteredCaseStudies = caseStudies.filter(cs => {
    const industryMatch = selectedIndustry === 'all' || cs.industry === selectedIndustry;
    const serviceMatch = selectedService === 'all' || cs.service === selectedService;
    return industryMatch && serviceMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories from Zion Tech Group's AI, cloud, and technology implementations. See how we've transformed businesses across industries."
        keywords="case studies, success stories, AI implementation, cloud migration, technology transformation, client results"
        canonicalUrl="https://ziontechgroup.com/case-studies"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Success
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Stories
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Discover how Zion Tech Group has transformed businesses across industries with our 
            innovative AI, cloud, and technology solutions. Real results, measurable impact.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Industry Filter */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Filter by Industry</h3>
                <div className="flex flex-wrap gap-3">
                  {industries.map((industry) => (
                    <button
                      key={industry.id}
                      onClick={() => setSelectedIndustry(industry.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                        selectedIndustry === industry.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      <industry.icon className="w-4 h-4" />
                      <span>{industry.name}</span>
                      <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                        {industry.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Filter */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Filter by Service</h3>
                <div className="flex flex-wrap gap-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                        selectedService === service.id
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                      <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                        {service.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${
                  caseStudy.featured 
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/25' 
                    : 'border-gray-700'
                } hover:border-blue-400 transition-all duration-300`}
              >
                {caseStudy.featured && (
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured Case Study
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.title}</h3>
                  <p className="text-blue-400 font-semibold mb-1">{caseStudy.client}</p>
                  <p className="text-gray-300">{caseStudy.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">The Challenge</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Our Solution</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center p-3 bg-white/5 rounded-lg">
                        <div className={`text-2xl font-bold ${result.color} mb-1`}>
                          {result.metric}
                        </div>
                        <div className="text-xs text-gray-300">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Duration: {caseStudy.duration}</span>
                  <span>Team: {caseStudy.team}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quantified results from our successful implementations across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'AI Models Deployed', icon: Brain, color: 'text-blue-400' },
              { number: '98%', label: 'Client Satisfaction', icon: Star, color: 'text-yellow-400' },
              { number: '40%', label: 'Average Cost Reduction', icon: TrendingUp, color: 'text-green-400' },
              { number: '3.2x', label: 'Average ROI', icon: ChartBar, color: 'text-purple-400' }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.number}</div>
                <div className="text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let Zion Tech Group help you achieve similar results. Our team of experts 
              is ready to transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
