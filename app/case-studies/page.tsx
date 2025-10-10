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
  Settings,
  Database,
  Lock,
  Eye,
  MessageSquare,
  Calendar,
  Building,
  Briefcase,
  DollarSign,
  Percent,
  Activity
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'all', label: 'All Case Studies', count: 12 },
    { name: 'ai', label: 'AI Solutions', count: 5 },
    { name: 'cloud', label: 'Cloud Migration', count: 4 },
    { name: 'security', label: 'Cybersecurity', count: 3 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 Retailer: AI-Powered Inventory Optimization',
      client: 'Global Retail Corp',
      industry: 'Retail',
      category: 'ai',
      challenge: 'Managing inventory across 500+ stores with 20% waste and stockouts',
      solution: 'Implemented AI-powered demand forecasting and automated replenishment system',
      results: [
        'Reduced inventory waste by 35%',
        'Eliminated stockouts by 90%',
        'Saved $50M annually',
        'Improved customer satisfaction by 25%'
      ],
      duration: '6 months',
      teamSize: '12 experts',
      technologies: ['Machine Learning', 'Python', 'AWS', 'TensorFlow'],
      image: '/images/case-studies/retail-ai-optimization.webp',
      testimonial: {
        quote: 'Zion Tech Group transformed our inventory management with AI. The results exceeded our expectations.',
        author: 'Sarah Johnson',
        role: 'VP of Operations',
        company: 'Global Retail Corp'
      }
    },
    {
      id: 2,
      title: 'Healthcare Provider: Secure Cloud Migration',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      category: 'cloud',
      challenge: 'Migrating sensitive patient data to cloud while maintaining HIPAA compliance',
      solution: 'Designed and executed secure cloud migration with zero downtime',
      results: [
        'Zero downtime migration',
        '100% HIPAA compliance',
        '40% cost reduction',
        '99.9% uptime achieved'
      ],
      duration: '4 months',
      teamSize: '8 experts',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      image: '/images/case-studies/healthcare-cloud-migration.webp',
      testimonial: {
        quote: 'The migration was seamless and our security posture improved significantly.',
        author: 'Dr. Michael Chen',
        role: 'CTO',
        company: 'MediCare Systems'
      }
    },
    {
      id: 3,
      title: 'Financial Services: Advanced Fraud Detection',
      client: 'SecureBank International',
      industry: 'Financial Services',
      category: 'security',
      challenge: 'Detecting sophisticated fraud patterns in real-time across millions of transactions',
      solution: 'Implemented AI-powered fraud detection system with real-time monitoring',
      results: [
        '99.7% fraud detection accuracy',
        'Reduced false positives by 60%',
        'Prevented $25M in fraud losses',
        'Real-time processing of 1M+ transactions'
      ],
      duration: '8 months',
      teamSize: '15 experts',
      technologies: ['Machine Learning', 'Apache Kafka', 'Redis', 'Python'],
      image: '/images/case-studies/financial-fraud-detection.webp',
      testimonial: {
        quote: 'Their fraud detection system is the most advanced we\'ve seen. It saved us millions.',
        author: 'Jennifer Martinez',
        role: 'Head of Security',
        company: 'SecureBank International'
      }
    }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Case <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Studies</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their operations with cutting-edge AI and technology solutions.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {study.category.toUpperCase()}
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-300 mb-6">{study.client}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {study.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {study.teamSize}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <blockquote className="text-gray-300 italic mb-4">
                      "{study.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div>
                        <p className="text-white font-semibold">{study.testimonial.author}</p>
                        <p className="text-gray-400 text-sm">{study.testimonial.role}, {study.testimonial.company}</p>
                      </div>
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
            Let's discuss your project and create a customized solution that delivers exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Start Your Project
            </button>
            <button className="border border-white/20 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;