import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search,
  Filter,
  Star,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Target,
  Award,
  ExternalLink,
  BarChart3,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Finance' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'education', name: 'Education' }
  ];

  const services = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'cloud', name: 'Cloud Infrastructure' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'web', name: 'Web Development' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Medical Diagnosis System',
      client: 'MedTech Solutions',
      industry: 'healthcare',
      service: 'ai',
      challenge: 'Reduce diagnostic time and improve accuracy for medical imaging analysis',
      solution: 'Developed an AI-powered medical imaging system using deep learning algorithms',
      results: [
        '40% reduction in diagnostic time',
        '95% accuracy in image analysis',
        '60% improvement in patient satisfaction',
        '30% increase in diagnostic throughput'
      ],
      technologies: ['Machine Learning', 'Computer Vision', 'Python', 'TensorFlow'],
      duration: '6 months',
      teamSize: '8 developers',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      featured: true,
      testimonial: {
        quote: 'Zion Tech Group transformed our diagnostic capabilities. The AI system has revolutionized how we analyze medical images.',
        author: 'Dr. Sarah Johnson',
        role: 'Chief Medical Officer',
        company: 'MedTech Solutions'
      }
    },
    {
      id: 2,
      title: 'E-commerce Personalization Platform',
      client: 'RetailMax',
      industry: 'ecommerce',
      service: 'ai',
      challenge: 'Increase conversion rates and improve customer engagement through personalization',
      solution: 'Built an AI-driven recommendation engine with real-time personalization',
      results: [
        '35% increase in conversion rates',
        '50% improvement in customer engagement',
        '25% boost in average order value',
        '40% increase in customer retention'
      ],
      technologies: ['Machine Learning', 'Real-time Analytics', 'React', 'Node.js'],
      duration: '4 months',
      teamSize: '6 developers',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      featured: true,
      testimonial: {
        quote: 'The personalization platform has been a game-changer for our business. Our customers love the tailored experience.',
        author: 'Michael Chen',
        role: 'VP of Technology',
        company: 'RetailMax'
      }
    },
    {
      id: 3,
      title: 'Manufacturing IoT and Predictive Maintenance',
      client: 'AutoParts Inc',
      industry: 'manufacturing',
      service: 'ai',
      challenge: 'Optimize production efficiency and reduce downtime through predictive maintenance',
      solution: 'Implemented IoT sensors and AI-powered predictive maintenance system',
      results: [
        '30% reduction in downtime',
        '20% increase in production efficiency',
        '15% decrease in maintenance costs',
        '50% improvement in equipment reliability'
      ],
      technologies: ['IoT', 'Machine Learning', 'Cloud Computing', 'Python'],
      duration: '8 months',
      teamSize: '10 developers',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
      featured: false,
      testimonial: {
        quote: 'The predictive maintenance system has saved us millions in unexpected downtime costs.',
        author: 'Emily Rodriguez',
        role: 'Operations Director',
        company: 'AutoParts Inc'
      }
    },
    {
      id: 4,
      title: 'Financial Fraud Detection System',
      client: 'SecureBank',
      industry: 'finance',
      service: 'ai',
      challenge: 'Detect and prevent fraudulent transactions in real-time',
      solution: 'Developed an AI-powered fraud detection system with real-time monitoring',
      results: [
        '90% reduction in false positives',
        '85% improvement in fraud detection accuracy',
        '60% faster transaction processing',
        '99.9% system uptime'
      ],
      technologies: ['Machine Learning', 'Real-time Processing', 'Kafka', 'Python'],
      duration: '5 months',
      teamSize: '7 developers',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      featured: false,
      testimonial: {
        quote: 'The fraud detection system has significantly improved our security posture and customer trust.',
        author: 'David Kim',
        role: 'Chief Security Officer',
        company: 'SecureBank'
      }
    },
    {
      id: 5,
      title: 'Educational Learning Management Platform',
      client: 'EduTech Solutions',
      industry: 'education',
      service: 'web',
      challenge: 'Create an intuitive platform for online learning with AI-powered personalization',
      solution: 'Built a comprehensive LMS with AI-driven content recommendations and progress tracking',
      results: [
        '45% increase in student engagement',
        '35% improvement in learning outcomes',
        '50% reduction in administrative overhead',
        '90% user satisfaction rate'
      ],
      technologies: ['React', 'Node.js', 'Machine Learning', 'MongoDB'],
      duration: '7 months',
      teamSize: '9 developers',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      featured: false,
      testimonial: {
        quote: 'The platform has revolutionized how we deliver education. Students are more engaged than ever.',
        author: 'Lisa Wang',
        role: 'Director of Technology',
        company: 'EduTech Solutions'
      }
    },
    {
      id: 6,
      title: 'Cloud Migration and Infrastructure Optimization',
      client: 'TechCorp',
      industry: 'manufacturing',
      service: 'cloud',
      challenge: 'Migrate legacy systems to cloud and optimize infrastructure costs',
      solution: 'Comprehensive cloud migration with infrastructure optimization and monitoring',
      results: [
        '40% reduction in infrastructure costs',
        '99.9% system availability',
        '50% improvement in scalability',
        '60% faster deployment times'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      duration: '6 months',
      teamSize: '8 developers',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      featured: false,
      testimonial: {
        quote: 'The cloud migration was seamless and the cost savings exceeded our expectations.',
        author: 'Robert Smith',
        role: 'CTO',
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
  const regularStudies = filteredCaseStudies.filter(study => !study.featured);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Success Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Success Stories | Zion Tech Group</title>
        <meta name="description" content="Explore our success stories and case studies. See how Zion Tech Group has helped businesses transform with AI and technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI projects, technology solutions, client results, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Success
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Real results from real clients. Discover how we've helped businesses across industries 
              transform their operations with cutting-edge AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/solutions"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Target className="w-5 h-5 mr-2" />
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Industry Filter */}
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {industry.name}
                </button>
              ))}
            </div>

            {/* Service Filter */}
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedService === service.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {featuredStudies.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Case Studies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most impactful projects that showcase the power of AI and technology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="relative h-64 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <Award className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                        {industries.find(i => i.id === study.industry)?.name}
                      </span>
                      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                        {services.find(s => s.id === study.service)?.name}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-cyan-400 font-medium mb-4">{study.client}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">{study.challenge}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {study.results.slice(0, 4).map((result, index) => (
                          <div key={index} className="flex items-center text-green-400 text-sm">
                            <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
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
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">All Case Studies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive collection of our successful projects across different industries and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStudies.map((study) => (
              <div key={study.id} className="group bg-slate-700/50 hover:bg-slate-700/70 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                    <div className="flex gap-2">
                      <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs font-medium">
                        {industries.find(i => i.id === study.industry)?.name}
                      </span>
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs font-medium">
                        {services.find(s => s.id === study.service)?.name}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-2">{study.client}</p>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{study.challenge}</p>

                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2 text-sm">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center text-green-400 text-xs">
                          <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                      {study.results.length > 2 && (
                        <li className="text-cyan-400 text-xs font-medium">
                          +{study.results.length - 2} more results
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {study.duration}
                    </div>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Users className="w-3 h-3 mr-1" />
                      {study.teamSize}
                    </div>
                  </div>

                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors text-sm"
                  >
                    Read Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {regularStudies.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No case studies found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Target className="w-5 h-5 mr-2" />
              Start Your Project
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesPage;