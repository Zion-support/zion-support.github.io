'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  TrendingUp,
  BarChart,
  Shield,
  Brain,
  Cloud,
  Code,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  Eye,
  ExternalLink,
  Filter,
  Search,
  Calendar,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  PieChart,
  TrendingDown,
  Globe2,
  Map,
  Navigation,
  Compass,
  Clock3
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { name: 'all', label: 'All Industries', count: 24 },
    { name: 'healthcare', label: 'Healthcare', count: 6 },
    { name: 'finance', label: 'Finance', count: 5 },
    { name: 'manufacturing', label: 'Manufacturing', count: 4 },
    { name: 'retail', label: 'Retail', count: 3 },
    { name: 'education', label: 'Education', count: 3 },
    { name: 'logistics', label: 'Logistics', count: 3 }
  ];

  const services = [
    { name: 'all', label: 'All Services', count: 24 },
    { name: 'ai-solutions', label: 'AI Solutions', count: 8 },
    { name: 'cloud-migration', label: 'Cloud Migration', count: 6 },
    { name: 'cybersecurity', label: 'Cybersecurity', count: 5 },
    { name: 'data-analytics', label: 'Data Analytics', count: 3 },
    { name: 'it-services', label: 'IT Services', count: 2 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Healthcare AI Revolution: 90% Faster Diagnosis',
      company: 'MedTech Solutions',
      industry: 'healthcare',
      service: 'ai-solutions',
      challenge: 'Manual diagnosis processes were taking 2-3 days, causing delays in patient care and increasing costs.',
      solution: 'Implemented AI-powered diagnostic system with machine learning algorithms trained on millions of medical images.',
      results: [
        '90% reduction in diagnosis time',
        '95% accuracy in early disease detection',
        '60% cost savings in diagnostic processes',
        '40% improvement in patient satisfaction'
      ],
      metrics: {
        timeSaved: '90%',
        accuracy: '95%',
        costReduction: '60%',
        satisfaction: '40%'
      },
      duration: '6 months',
      teamSize: '12 experts',
      technologies: ['Machine Learning', 'Computer Vision', 'Python', 'TensorFlow'],
      image: '/images/case-studies/healthcare-ai.webp',
      featured: true
    },
    {
      id: 2,
      title: 'Financial Services: Real-time Fraud Detection',
      company: 'SecureBank Corp',
      industry: 'finance',
      service: 'ai-solutions',
      challenge: 'Traditional fraud detection systems were missing 15% of fraudulent transactions, resulting in significant losses.',
      solution: 'Deployed advanced AI algorithms with real-time processing capabilities and behavioral analysis.',
      results: [
        '99.8% fraud detection accuracy',
        '85% reduction in false positives',
        'Real-time transaction monitoring',
        '50% decrease in fraud-related losses'
      ],
      metrics: {
        accuracy: '99.8%',
        falsePositives: '85%',
        realTime: '100%',
        lossReduction: '50%'
      },
      duration: '4 months',
      teamSize: '8 experts',
      technologies: ['AI/ML', 'Real-time Processing', 'Behavioral Analytics', 'Cloud Computing'],
      image: '/images/case-studies/finance-fraud.webp',
      featured: false
    },
    {
      id: 3,
      title: 'Manufacturing: Smart Factory Transformation',
      company: 'AutoParts Inc',
      industry: 'manufacturing',
      service: 'ai-solutions',
      challenge: 'Inefficient production processes and quality control issues were impacting productivity and customer satisfaction.',
      solution: 'Implemented IoT sensors, AI-powered predictive maintenance, and automated quality control systems.',
      results: [
        '35% increase in production efficiency',
        '80% reduction in equipment downtime',
        '25% improvement in product quality',
        '30% reduction in maintenance costs'
      ],
      metrics: {
        efficiency: '35%',
        downtime: '80%',
        quality: '25%',
        costReduction: '30%'
      },
      duration: '8 months',
      teamSize: '15 experts',
      technologies: ['IoT', 'Predictive Analytics', 'Computer Vision', 'Edge Computing'],
      image: '/images/case-studies/manufacturing-iot.webp',
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const serviceMatch = selectedService === 'all' || study.service === selectedService;
    return industryMatch && serviceMatch;
  });

  return (
    <>
      <SEOOptimizer 
        title="Case Studies - Success Stories | Zion Tech Group"
        description="Explore our successful AI and IT implementation case studies across various industries. See real results and transformations."
        keywords="case studies, success stories, AI implementation, IT solutions, industry solutions, client results"
        canonicalUrl="https://ziontechgroup.com/case-studies"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Case Studies
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Real success stories from our AI and IT implementations across various industries.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-4">Filter by Industry</h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <button
                      key={industry.name}
                      onClick={() => setSelectedIndustry(industry.name)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedIndustry === industry.name
                          ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                          : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                      }`}
                    >
                      <span>{industry.label}</span>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {industry.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-4">Filter by Service</h3>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service.name}
                      onClick={() => setSelectedService(service.name)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedService === service.name
                          ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                          : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                      }`}
                    >
                      <span>{service.label}</span>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {service.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="group">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl overflow-hidden border border-slate-700/50 group-hover:border-purple-500/50 transition-all duration-300 h-full">
                    <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Building className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-gray-300">{study.company}</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                            {study.industry.toUpperCase()}
                          </span>
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                            {study.service.replace('-', ' ').toUpperCase()}
                          </span>
                        </div>
                        {study.featured && (
                          <div className="flex items-center space-x-1 text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">Featured</span>
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                        {study.title}
                      </h3>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{study.solution}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">{study.metrics.timeSaved || study.metrics.accuracy}</div>
                          <div className="text-xs text-gray-400">Key Metric</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-400">{study.duration}</div>
                          <div className="text-xs text-gray-400">Duration</div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <h4 className="text-sm font-semibold text-gray-300">Key Results</h4>
                        <ul className="space-y-2">
                          {study.results.slice(0, 3).map((result, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.slice(0, 2).map((tech, index) => (
                            <span key={index} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">
                          <span className="text-sm">Read Full Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}