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
  Globe,
  Zap,
  Database,
  Settings,
  Lock,
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
  Calendar,
  Clock3,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  Globe2,
  Map
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
    { name: 'technology', label: 'Technology', count: 3 }
  ];

  const services = [
    { name: 'all', label: 'All Services', count: 24 },
    { name: 'ai-analytics', label: 'AI Analytics', count: 8 },
    { name: 'cloud-migration', label: 'Cloud Migration', count: 6 },
    { name: 'cybersecurity', label: 'Cybersecurity', count: 5 },
    { name: 'automation', label: 'Process Automation', count: 5 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Healthcare AI Revolution: 90% Faster Diagnosis',
      client: 'MedTech Solutions',
      industry: 'healthcare',
      service: 'ai-analytics',
      challenge: 'Manual diagnosis processes were taking 3-4 hours per patient, causing delays in treatment and reducing patient satisfaction.',
      solution: 'Implemented AI-powered diagnostic platform with machine learning algorithms trained on millions of medical images and patient data.',
      results: [
        '90% reduction in diagnosis time',
        '95% accuracy in preliminary diagnoses',
        '40% increase in patient throughput',
        '$2.3M annual cost savings'
      ],
      image: '/images/case-studies/healthcare-ai.webp',
      duration: '6 months',
      team: '12 experts',
      technologies: ['AI/ML', 'Computer Vision', 'Cloud Computing', 'Data Analytics']
    },
    {
      id: 2,
      title: 'Financial Services: Real-time Fraud Detection',
      client: 'SecureBank Corp',
      industry: 'finance',
      service: 'cybersecurity',
      challenge: 'Traditional fraud detection systems were missing 15% of fraudulent transactions, resulting in significant financial losses.',
      solution: 'Deployed advanced AI-powered fraud detection system with real-time analysis of transaction patterns and behavioral analytics.',
      results: [
        '99.7% fraud detection accuracy',
        '60% reduction in false positives',
        'Real-time transaction monitoring',
        '$5.1M prevented fraud losses'
      ],
      image: '/images/case-studies/fraud-detection.webp',
      duration: '4 months',
      team: '8 experts',
      technologies: ['AI/ML', 'Real-time Analytics', 'Blockchain', 'Security']
    },
    {
      id: 3,
      title: 'Manufacturing: Smart Factory Transformation',
      client: 'AutoParts Manufacturing',
      industry: 'manufacturing',
      service: 'automation',
      challenge: 'Manual quality control processes were inconsistent and time-consuming, leading to 8% defect rate and production delays.',
      solution: 'Implemented IoT sensors, AI-powered quality control, and automated production line optimization.',
      results: [
        '75% reduction in defect rate',
        '30% increase in production efficiency',
        '50% reduction in quality control time',
        '$3.8M annual cost savings'
      ],
      image: '/images/case-studies/smart-factory.webp',
      duration: '8 months',
      team: '15 experts',
      technologies: ['IoT', 'AI/ML', 'Automation', 'Data Analytics']
    },
    {
      id: 4,
      title: 'Retail: Personalized Customer Experience',
      client: 'Fashion Forward',
      industry: 'retail',
      service: 'ai-analytics',
      challenge: 'Generic marketing campaigns were only achieving 2% conversion rates, leading to poor customer engagement and sales.',
      solution: 'Developed AI-powered recommendation engine and personalized marketing platform using customer behavior data.',
      results: [
        '340% increase in conversion rates',
        '45% improvement in customer retention',
        '25% increase in average order value',
        '$4.2M additional revenue'
      ],
      image: '/images/case-studies/retail-personalization.webp',
      duration: '5 months',
      team: '10 experts',
      technologies: ['AI/ML', 'Recommendation Engine', 'Data Analytics', 'Marketing Automation']
    },
    {
      id: 5,
      title: 'Education: AI-Powered Learning Platform',
      client: 'EduTech University',
      industry: 'education',
      service: 'ai-analytics',
      challenge: 'Traditional learning methods were not adapting to individual student needs, resulting in 30% dropout rates.',
      solution: 'Created adaptive learning platform with AI tutors, personalized curriculum, and real-time progress tracking.',
      results: [
        '60% reduction in dropout rates',
        '35% improvement in test scores',
        '80% increase in student engagement',
        '50% reduction in learning time'
      ],
      image: '/images/case-studies/education-ai.webp',
      duration: '7 months',
      team: '14 experts',
      technologies: ['AI/ML', 'Natural Language Processing', 'Learning Analytics', 'Mobile Development']
    },
    {
      id: 6,
      title: 'Cloud Migration: Zero-Downtime Transition',
      client: 'TechStart Inc',
      industry: 'technology',
      service: 'cloud-migration',
      challenge: 'Legacy on-premise infrastructure was limiting scalability and causing frequent downtime, affecting business operations.',
      solution: 'Executed comprehensive cloud migration strategy with microservices architecture and automated deployment pipelines.',
      results: [
        '99.9% uptime achieved',
        '300% improvement in scalability',
        '50% reduction in infrastructure costs',
        'Zero-downtime migration'
      ],
      image: '/images/case-studies/cloud-migration.webp',
      duration: '3 months',
      team: '9 experts',
      technologies: ['Cloud Computing', 'Microservices', 'DevOps', 'Containerization']
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    return matchesIndustry && matchesService;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Case Studies - Zion Tech Group"
        description="Explore our successful AI and IT transformation projects. See how we've helped businesses achieve remarkable results with cutting-edge technology solutions."
        keywords={['case studies', 'AI projects', 'IT transformation', 'success stories', 'client results', 'Zion Tech Group']}
        canonicalUrl="https://ziontechgroup.com/case-studies"
      />
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Success <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've transformed businesses across industries with innovative AI and IT solutions. 
              Real projects, real results, real impact.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Industry Filter */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-4">Filter by Industry</h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <button
                      key={industry.name}
                      onClick={() => setSelectedIndustry(industry.name)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        selectedIndustry === industry.name
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <span>{industry.label}</span>
                      <span className="text-xs opacity-75">({industry.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Filter */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-4">Filter by Service</h3>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service.name}
                      onClick={() => setSelectedService(service.name)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        selectedService === service.name
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <span>{service.label}</span>
                      <span className="text-xs opacity-75">({service.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className="cyber-card p-8 hover:scale-105 transition-all duration-300"
                >
                  <div className="mb-6">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry.toUpperCase()}
                      </span>
                      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
                        {study.service.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-4">{study.client}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{study.team}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    View Full Case Study
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with innovative AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View All Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}