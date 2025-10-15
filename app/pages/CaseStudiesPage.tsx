import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search,
  Filter,
  Star,
  Users,
  TrendingUp,
  Clock,
  Tag,
  ExternalLink,
  Play,
  Download,
  CheckCircle,
  Award,
  Target,
  BarChart3,
  Brain,
  Cloud,
  Shield,
  Smartphone,
  Database,
  Globe,
  Zap
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', count: 24 },
    { id: 'healthcare', name: 'Healthcare', count: 6 },
    { id: 'finance', name: 'Finance', count: 5 },
    { id: 'ecommerce', name: 'E-commerce', count: 4 },
    { id: 'manufacturing', name: 'Manufacturing', count: 3 },
    { id: 'education', name: 'Education', count: 3 },
    { id: 'real-estate', name: 'Real Estate', count: 3 }
  ];

  const services = [
    { id: 'all', name: 'All Services', count: 24 },
    { id: 'ai-solutions', name: 'AI Solutions', count: 8 },
    { id: 'cloud-infrastructure', name: 'Cloud Infrastructure', count: 6 },
    { id: 'mobile-development', name: 'Mobile Development', count: 4 },
    { id: 'data-analytics', name: 'Data Analytics', count: 3 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 3 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Medical Diagnosis System',
      client: 'MedTech Solutions',
      industry: 'healthcare',
      service: 'ai-solutions',
      challenge: 'Reduce diagnostic time and improve accuracy for medical imaging analysis',
      solution: 'Developed an AI-powered medical imaging analysis system using deep learning algorithms',
      results: [
        '40% reduction in diagnostic time',
        '95% accuracy in image analysis',
        '60% improvement in patient satisfaction',
        '30% increase in diagnostic throughput'
      ],
      technologies: ['Machine Learning', 'Computer Vision', 'Deep Learning', 'Cloud Computing'],
      duration: '6 months',
      teamSize: '8 developers',
      budget: '$500K',
      image: '/api/placeholder/600/400',
      featured: true,
      rating: 4.9,
      views: 1250
    },
    {
      id: 2,
      title: 'E-commerce Personalization Platform',
      client: 'RetailMax',
      industry: 'ecommerce',
      service: 'ai-solutions',
      challenge: 'Increase conversion rates and customer engagement through personalized experiences',
      solution: 'Built an AI-driven recommendation engine with real-time personalization',
      results: [
        '35% increase in conversion rates',
        '50% improvement in customer engagement',
        '25% boost in average order value',
        '40% increase in customer retention'
      ],
      technologies: ['AI/ML', 'Real-time Analytics', 'Microservices', 'API Integration'],
      duration: '4 months',
      teamSize: '6 developers',
      budget: '$300K',
      image: '/api/placeholder/600/400',
      featured: false,
      rating: 4.8,
      views: 980
    },
    {
      id: 3,
      title: 'Manufacturing IoT Optimization',
      client: 'AutoParts Inc',
      industry: 'manufacturing',
      service: 'cloud-infrastructure',
      challenge: 'Optimize production efficiency and reduce downtime through predictive maintenance',
      solution: 'Implemented IoT sensors and AI-powered predictive maintenance system',
      results: [
        '30% reduction in downtime',
        '20% increase in production efficiency',
        '15% decrease in maintenance costs',
        '25% improvement in equipment lifespan'
      ],
      technologies: ['IoT', 'Cloud Computing', 'Predictive Analytics', 'Edge Computing'],
      duration: '8 months',
      teamSize: '10 developers',
      budget: '$750K',
      image: '/api/placeholder/600/400',
      featured: false,
      rating: 4.9,
      views: 850
    },
    {
      id: 4,
      title: 'Financial Risk Assessment Platform',
      client: 'SecureBank',
      industry: 'finance',
      service: 'ai-solutions',
      challenge: 'Improve fraud detection and risk assessment accuracy',
      solution: 'Developed an AI-powered risk assessment and fraud detection system',
      results: [
        '45% improvement in fraud detection accuracy',
        '60% reduction in false positives',
        '35% decrease in financial losses',
        '50% faster risk assessment processing'
      ],
      technologies: ['Machine Learning', 'Big Data', 'Real-time Processing', 'Security'],
      duration: '5 months',
      teamSize: '7 developers',
      budget: '$400K',
      image: '/api/placeholder/600/400',
      featured: true,
      rating: 4.8,
      views: 1100
    },
    {
      id: 5,
      title: 'Mobile Learning Platform',
      client: 'EduTech Academy',
      industry: 'education',
      service: 'mobile-development',
      challenge: 'Create an engaging mobile learning experience for students',
      solution: 'Built a cross-platform mobile app with AI-powered personalized learning',
      results: [
        '80% increase in student engagement',
        '45% improvement in learning outcomes',
        '60% increase in course completion rates',
        '90% user satisfaction score'
      ],
      technologies: ['React Native', 'AI/ML', 'Cloud Backend', 'Analytics'],
      duration: '6 months',
      teamSize: '5 developers',
      budget: '$250K',
      image: '/api/placeholder/600/400',
      featured: false,
      rating: 4.7,
      views: 720
    },
    {
      id: 6,
      title: 'Real Estate Analytics Dashboard',
      client: 'PropertyMax',
      industry: 'real-estate',
      service: 'data-analytics',
      challenge: 'Provide comprehensive market insights and property valuation',
      solution: 'Developed a data analytics platform with AI-powered property valuation',
      results: [
        '50% improvement in valuation accuracy',
        '35% increase in sales conversion',
        '40% reduction in time to market',
        '25% increase in agent productivity'
      ],
      technologies: ['Data Analytics', 'Machine Learning', 'Visualization', 'API Integration'],
      duration: '4 months',
      teamSize: '6 developers',
      budget: '$200K',
      image: '/api/placeholder/600/400',
      featured: false,
      rating: 4.6,
      views: 650
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

  const featuredCaseStudies = filteredCaseStudies.filter(study => study.featured);
  const regularCaseStudies = filteredCaseStudies.filter(study => !study.featured);

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'healthcare': return <Users className="w-5 h-5" />;
      case 'finance': return <TrendingUp className="w-5 h-5" />;
      case 'ecommerce': return <Globe className="w-5 h-5" />;
      case 'manufacturing': return <Zap className="w-5 h-5" />;
      case 'education': return <Brain className="w-5 h-5" />;
      case 'real-estate': return <Target className="w-5 h-5" />;
      default: return <BarChart3 className="w-5 h-5" />;
    }
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'ai-solutions': return <Brain className="w-5 h-5" />;
      case 'cloud-infrastructure': return <Cloud className="w-5 h-5" />;
      case 'mobile-development': return <Smartphone className="w-5 h-5" />;
      case 'data-analytics': return <BarChart3 className="w-5 h-5" />;
      case 'cybersecurity': return <Shield className="w-5 h-5" />;
      default: return <Database className="w-5 h-5" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Results</title>
        <meta name="description" content="Explore our case studies and success stories. See how Zion Tech Group has helped businesses across industries achieve their goals with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, client results, AI solutions, IT solutions, business transformation" />
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
              achieve their goals with innovative AI and IT solutions.
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

      {/* Search and Filters */}
      <section className="py-12 bg-slate-800">
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
                  {getIndustryIcon(industry.id)}
                  <span className="ml-2">{industry.name}</span>
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {industry.count}
                  </span>
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
                  {getServiceIcon(service.id)}
                  <span className="ml-2">{service.name}</span>
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {service.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Case Studies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most impactful projects that showcase the power of our solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCaseStudies.map((study) => (
                <div key={study.id} className="group bg-slate-800/50 hover:bg-slate-800/70 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                  {/* Study Image */}
                  <div className="relative h-64 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <Award className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Study Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        {getIndustryIcon(study.industry)}
                        <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                          {industries.find(ind => ind.id === study.industry)?.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium text-sm">{study.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-4">{study.client}</p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                      <h4 className="text-white font-semibold mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {study.results.slice(0, 3).map((result, index) => (
                          <li key={index} className="flex items-center text-green-400 text-sm">
                            <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{study.views} views</span>
                      </div>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
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
              Explore our complete portfolio of successful projects across different industries and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCaseStudies.map((study) => (
              <div key={study.id} className="group bg-slate-700/50 hover:bg-slate-700/70 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                {/* Study Image */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-center">
                    {getServiceIcon(study.service)}
                    <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs font-medium mt-2">
                      {services.find(svc => svc.id === study.service)?.name}
                    </span>
                  </div>
                </div>

                {/* Study Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {getIndustryIcon(study.industry)}
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs font-medium">
                        {industries.find(ind => ind.id === study.industry)?.name}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium text-sm">{study.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-4 text-sm">{study.client}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{study.challenge}</p>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center text-green-400 text-xs">
                          <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-xs">
                      <Users className="w-3 h-3 mr-1" />
                      <span>{study.views} views</span>
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors text-sm"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {regularCaseStudies.length === 0 && (
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
            Let's work together to achieve similar results for your business. 
            Contact us to discuss your project and get started.
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
              <Play className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesPage;