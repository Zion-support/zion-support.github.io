'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Target,
  Award,
  BarChart,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
<<<<<<< HEAD
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Giant Reduces Support Costs by 70% with AI Chatbots',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'High customer support costs and long response times during peak shopping seasons',
      solution: 'Implemented AI-powered chatbots with natural language processing and sentiment analysis',
      results: [
        '70% reduction in support costs',
        '50% faster response times',
        '95% customer satisfaction rate',
        '24/7 multilingual support'
      ],
      metrics: {
        costSavings: '$2.5M',
        responseTime: '2.3s',
        satisfaction: '95%',
        uptime: '99.9%'
      },
      duration: '6 months',
      teamSize: '8 members',
      technologies: ['AI Chatbots', 'NLP', 'Machine Learning', 'Cloud Computing'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Manufacturing Company Achieves 40% Efficiency Gain with AI Automation',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing delays and inconsistencies',
      solution: 'Deployed computer vision AI for automated quality control and predictive maintenance',
      results: [
        '40% increase in production efficiency',
        '60% reduction in quality defects',
        '30% decrease in maintenance costs',
        'Real-time quality monitoring'
      ],
      metrics: {
        efficiency: '40%',
        defects: '-60%',
        maintenance: '-30%',
        roi: '300%'
      },
      duration: '8 months',
      teamSize: '12 members',
      technologies: ['Computer Vision', 'IoT', 'Predictive Analytics', 'Edge Computing'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 3,
      title: 'Financial Services Firm Prevents $50M in Fraud with AI Detection',
      company: 'SecureBank Financial',
      industry: 'Financial Services',
      challenge: 'Increasing sophisticated fraud attempts and false positive rates',
      solution: 'Implemented advanced AI fraud detection system with real-time monitoring',
      results: [
        'Prevented $50M in fraudulent transactions',
        '90% reduction in false positives',
        'Real-time fraud detection',
        'Compliance with financial regulations'
      ],
      metrics: {
        fraudPrevented: '$50M',
        falsePositives: '-90%',
        detectionTime: '0.1s',
        accuracy: '99.8%'
      },
      duration: '4 months',
      teamSize: '6 members',
      technologies: ['Machine Learning', 'Real-time Analytics', 'Blockchain', 'Security AI'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Healthcare Provider Improves Diagnosis Accuracy by 35%',
      company: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Need for faster and more accurate medical image analysis',
      solution: 'Deployed AI-powered medical imaging analysis with deep learning models',
      results: [
        '35% improvement in diagnosis accuracy',
        '50% faster image analysis',
        'Early detection of critical conditions',
        'Reduced diagnostic errors'
      ],
      metrics: {
        accuracy: '+35%',
        speed: '+50%',
        errors: '-45%',
        lives: '500+'
      },
      duration: '10 months',
      teamSize: '15 members',
      technologies: ['Deep Learning', 'Medical Imaging', 'Computer Vision', 'HIPAA Compliance'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'Retail Chain Increases Sales by 25% with AI Personalization',
      company: 'Fashion Forward Retail',
      industry: 'Retail',
      challenge: 'Low customer engagement and declining sales in online channels',
      solution: 'Implemented AI-powered recommendation engine and personalized marketing',
      results: [
        '25% increase in online sales',
        '40% improvement in customer engagement',
        'Personalized shopping experience',
        'Higher customer lifetime value'
      ],
      metrics: {
        sales: '+25%',
        engagement: '+40%',
        conversion: '+30%',
        retention: '+20%'
      },
      duration: '5 months',
      teamSize: '10 members',
      technologies: ['Recommendation Engine', 'Personalization AI', 'Marketing Automation', 'Analytics'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'Logistics Company Optimizes Routes and Saves $3M Annually',
      company: 'FastTrack Logistics',
      industry: 'Logistics',
      challenge: 'Inefficient route planning and high fuel costs',
      solution: 'AI-powered route optimization and predictive analytics for demand forecasting',
      results: [
        '$3M annual cost savings',
        '30% reduction in fuel consumption',
        '20% improvement in delivery times',
        'Real-time route optimization'
      ],
      metrics: {
        savings: '$3M',
        fuel: '-30%',
        delivery: '+20%',
        efficiency: '+35%'
      },
      duration: '7 months',
      teamSize: '9 members',
      technologies: ['Route Optimization', 'Predictive Analytics', 'IoT', 'Real-time Processing'],
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', count: caseStudies.length },
    { id: 'E-commerce', name: 'E-commerce', count: caseStudies.filter(cs => cs.industry === 'E-commerce').length },
    { id: 'Manufacturing', name: 'Manufacturing', count: caseStudies.filter(cs => cs.industry === 'Manufacturing').length },
    { id: 'Financial Services', name: 'Financial Services', count: caseStudies.filter(cs => cs.industry === 'Financial Services').length },
    { id: 'Healthcare', name: 'Healthcare', count: caseStudies.filter(cs => cs.industry === 'Healthcare').length },
    { id: 'Retail', name: 'Retail', count: caseStudies.filter(cs => cs.industry === 'Retail').length },
    { id: 'Logistics', name: 'Logistics', count: caseStudies.filter(cs => cs.industry === 'Logistics').length }
  ];

  const filteredCaseStudies = caseStudies.filter(cs => {
    const matchesSearch = cs.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cs.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cs.challenge.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cs.solution.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || cs.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  const featuredCaseStudies = caseStudies.filter(cs => cs.featured);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI implementation, business transformation, client results" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real success stories from our AI and IT implementations" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Real Results from Real Businesses
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries transform their operations, 
              reduce costs, and achieve unprecedented growth with our AI and IT solutions.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search case studies..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {industries.map((industry) => (
                      <option key={industry.id} value={industry.id}>
                        {industry.name} ({industry.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Case Studies */}
          {selectedIndustry === 'all' && searchTerm === '' && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <TrendingUp className="w-8 h-8 text-cyan-400 mr-3" />
                Featured Success Stories
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredCaseStudies.map((caseStudy) => (
                  <article
                    key={caseStudy.id}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 mb-6">
                      <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">
                        Featured
                      </span>
                      <span className="bg-slate-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">
                        {caseStudy.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                      {caseStudy.title}
                    </h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm mb-4">{caseStudy.challenge}</p>
                      
                      <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{caseStudy.solution}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-cyan-400">{caseStudy.metrics.costSavings || caseStudy.metrics.efficiency || caseStudy.metrics.accuracy}</div>
                        <div className="text-gray-300 text-xs">Key Metric</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-green-400">{caseStudy.duration}</div>
                        <div className="text-gray-300 text-xs">Duration</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="bg-slate-700 text-gray-300 text-xs px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/case-studies/${caseStudy.id}`}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Read Full Story
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* All Case Studies */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Award className="w-8 h-8 text-cyan-400 mr-3" />
              {selectedIndustry === 'all' ? 'All Case Studies' : `${selectedIndustry} Case Studies`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((caseStudy) => (
                <article
                  key={caseStudy.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-slate-700 text-gray-300 text-xs font-medium px-2 py-1 rounded-full">
                      {caseStudy.industry}
                    </span>
                    {caseStudy.featured && (
                      <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {caseStudy.title}
                  </h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-1">Challenge:</h4>
                    <p className="text-gray-300 text-sm mb-3">{caseStudy.challenge}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-slate-800/50 rounded-lg p-2 text-center">
                      <div className="text-lg font-bold text-cyan-400">
                        {caseStudy.metrics.costSavings || caseStudy.metrics.efficiency || caseStudy.metrics.accuracy || caseStudy.metrics.sales}
                      </div>
                      <div className="text-gray-300 text-xs">Key Result</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-2 text-center">
                      <div className="text-lg font-bold text-green-400">{caseStudy.duration}</div>
                      <div className="text-gray-300 text-xs">Duration</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {caseStudy.technologies.slice(0, 2).map((tech, index) => (
                        <span
                          key={index}
                          className="bg-slate-700 text-gray-300 text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/case-studies/${caseStudy.id}`}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join hundreds of successful businesses that have transformed their operations with our AI and IT solutions. 
                Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
=======
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT implementations." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Case Studies</h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Explore our successful AI and IT implementations
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    </>
  );
};

export default CaseStudiesPage;