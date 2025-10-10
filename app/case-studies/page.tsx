'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  Calendar, 
  User, 
  Building2,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  Star,
  Award,
  Target,
  Zap,
  Shield,
  Cloud,
  BarChart3,
  Brain,
  Smartphone,
  Database,
  Settings
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  duration: string;
  team: string;
  technologies: string[];
  image: string;
  category: string;
  featured: boolean;
}

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: [
        'Reduced customer service costs by 60%',
        'Improved response time by 80%',
        'Increased customer satisfaction by 45%',
        'Handled 90% of queries automatically'
      ],
      duration: '3 months',
      team: '5 developers',
      technologies: ['AI/ML', 'Natural Language Processing', 'AWS', 'Python'],
      image: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=AI+Customer+Service',
      category: 'AI Solutions',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration & Infrastructure Optimization',
      client: 'Global Manufacturing Inc.',
      industry: 'Manufacturing',
      challenge: 'Outdated on-premises infrastructure causing scalability issues and high maintenance costs.',
      solution: 'Migrated entire infrastructure to AWS with auto-scaling, load balancing, and disaster recovery.',
      results: [
        'Reduced infrastructure costs by 40%',
        'Improved system uptime to 99.9%',
        'Enabled 300% faster scaling',
        'Reduced maintenance overhead by 70%'
      ],
      duration: '6 months',
      team: '8 engineers',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      image: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=Cloud+Migration',
      category: 'Cloud Services',
      featured: true
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'Financial Services Group',
      industry: 'Finance',
      challenge: 'Security vulnerabilities and compliance requirements for financial data protection.',
      solution: 'Comprehensive security audit, implementation of zero-trust architecture, and compliance framework.',
      results: [
        'Achieved 100% compliance with financial regulations',
        'Reduced security incidents by 95%',
        'Implemented real-time threat detection',
        'Passed all security audits'
      ],
      duration: '4 months',
      team: '6 security experts',
      technologies: ['Cybersecurity', 'Compliance', 'SIEM', 'Zero Trust'],
      image: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=Cybersecurity',
      category: 'Security',
      featured: false
    },
    {
      id: 4,
      title: 'Data Analytics & Business Intelligence Platform',
      client: 'Retail Chain Corp',
      industry: 'Retail',
      challenge: 'Lack of data insights affecting business decisions and inventory management.',
      solution: 'Built comprehensive data warehouse with real-time analytics and predictive modeling.',
      results: [
        'Improved inventory accuracy by 85%',
        'Increased sales by 25% through better insights',
        'Reduced waste by 40%',
        'Enabled data-driven decision making'
      ],
      duration: '5 months',
      team: '7 data engineers',
      technologies: ['Data Analytics', 'Machine Learning', 'Tableau', 'SQL Server'],
      image: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=Data+Analytics',
      category: 'Data Analytics',
      featured: false
    },
    {
      id: 5,
      title: 'Mobile App Development & Digital Transformation',
      client: 'Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Outdated patient management system and need for mobile accessibility.',
      solution: 'Developed cross-platform mobile app with patient portal and appointment scheduling.',
      results: [
        'Increased patient engagement by 60%',
        'Reduced appointment no-shows by 35%',
        'Improved patient satisfaction by 50%',
        'Streamlined administrative processes'
      ],
      duration: '8 months',
      team: '10 developers',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      image: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=Mobile+App',
      category: 'Mobile Development',
      featured: true
    },
    {
      id: 6,
      title: 'DevOps Implementation & CI/CD Pipeline',
      client: 'Software Development Company',
      industry: 'Software',
      challenge: 'Manual deployment processes causing delays and errors in software delivery.',
      solution: 'Implemented complete DevOps pipeline with automated testing, deployment, and monitoring.',
      results: [
        'Reduced deployment time by 90%',
        'Eliminated deployment errors by 95%',
        'Increased development velocity by 200%',
        'Improved code quality and reliability'
      ],
      duration: '3 months',
      team: '4 DevOps engineers',
      technologies: ['Docker', 'Jenkins', 'Kubernetes', 'Monitoring'],
      image: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=DevOps',
      category: 'DevOps',
      featured: false
    }
  ];

  const categories = ['all', 'AI Solutions', 'Cloud Services', 'Security', 'Data Analytics', 'Mobile Development', 'DevOps'];

  const filteredCaseStudies = caseStudies.filter(study => 
    selectedCategory === 'all' || study.category === selectedCategory
  );

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Solutions':
        return <Brain className="w-6 h-6 text-blue-500" />;
      case 'Cloud Services':
        return <Cloud className="w-6 h-6 text-green-500" />;
      case 'Security':
        return <Shield className="w-6 h-6 text-red-500" />;
      case 'Data Analytics':
        return <BarChart3 className="w-6 h-6 text-purple-500" />;
      case 'Mobile Development':
        return <Smartphone className="w-6 h-6 text-orange-500" />;
      case 'DevOps':
        return <Settings className="w-6 h-6 text-cyan-500" />;
      default:
        return <Zap className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful projects and client case studies. See how we've helped businesses transform with AI, cloud, cybersecurity, and IT solutions." />
        <meta name="keywords" content="case studies, success stories, client results, AI projects, cloud migration, cybersecurity, data analytics, mobile development" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-cyan-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations and achieve 
              remarkable results with our technology solutions.
            </p>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Case Studies</h2>
              <p className="text-xl text-gray-300">Our most impactful projects</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredCaseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      {getCategoryIcon(study.category)}
                      <span className="text-cyan-400 text-sm font-medium">{study.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Building2 className="w-4 h-4" />
                        <span>{study.client}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{study.challenge}</p>
                    <div className="space-y-2 mb-6">
                      {study.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">All Case Studies</h2>
              <p className="text-xl text-gray-300">Complete portfolio of our projects</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      {getCategoryIcon(study.category)}
                      <span className="text-cyan-400 text-xs font-medium">{study.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{study.title}</h3>
                    <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Building2 className="w-3 h-3" />
                        <span>{study.client}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{study.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{study.challenge}</p>
                    <div className="space-y-1 mb-4">
                      {study.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="text-xs text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center">
              <Award className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's work together to transform your business with our proven technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;