'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, DollarSign, CheckCircle, Clock, Building, Target, Award } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

=======
import { ArrowRight, CheckCircle, Star, Building, Target, Award, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CaseStudiesPage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      category: 'ai',
      challenge: 'Inefficient supply chain management leading to 30% inventory waste and delayed deliveries',
      solution: 'Implemented AI-driven demand forecasting and automated inventory management system',
      results: [
        'Reduced inventory waste by 45%',
        'Improved delivery times by 60%',
        'Saved $2.3M annually in operational costs',
        'Increased customer satisfaction by 35%'
      ],
      technologies: ['Machine Learning', 'Predictive Analytics', 'IoT Sensors', 'Cloud Computing'],
      duration: '6 months',
      teamSize: '8 developers',
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Cloud Migration & Digital Transformation',
      client: 'Regional Bank',
      industry: 'Financial Services',
      category: 'cloud',
      challenge: 'Legacy on-premise systems causing security vulnerabilities and scalability issues',
      solution: 'Complete cloud migration with modern microservices architecture and enhanced security',
      results: [
        '99.9% system uptime achieved',
        '50% reduction in infrastructure costs',
        'Enhanced security compliance',
        '3x faster application deployment'
      ],
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Microservices', 'DevOps'],
      duration: '8 months',
      teamSize: '12 developers',
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Mobile Healthcare App Development',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      category: 'mobile',
      challenge: 'Need for a comprehensive mobile platform connecting patients, doctors, and healthcare providers',
      solution: 'Developed cross-platform mobile app with telemedicine capabilities and health monitoring',
      results: [
        '50,000+ active users in first year',
        '95% user satisfaction rating',
        '40% reduction in hospital visits',
        'Streamlined patient-doctor communication'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'WebRTC', 'Health APIs'],
      duration: '10 months',
      teamSize: '10 developers',
      image: '/api/placeholder/600/400'
    }
  ];

<<<<<<< HEAD
  const categories = [
    { id: 'all', name: 'All Projects', icon: Building },
    { id: 'ai', name: 'AI Solutions', icon: Target },
    { id: 'cloud', name: 'Cloud Services', icon: TrendingUp },
    { id: 'mobile', name: 'Mobile Apps', icon: Users }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '$10M+', label: 'Cost Savings', icon: DollarSign },
    { number: '24/7', label: 'Support Available', icon: Clock }
=======
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'all', label: 'All', count: caseStudies.length },
    { name: 'ai', label: 'AI Solutions', count: caseStudies.filter(s => s.category === 'ai').length },
    { name: 'cloud', label: 'Cloud', count: caseStudies.filter(s => s.category === 'cloud').length },
    { name: 'mobile', label: 'Mobile', count: caseStudies.filter(s => s.category === 'mobile').length }
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
  ];

  const filteredStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, business transformation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Success
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Real results from real clients. Discover how we've helped businesses transform with cutting-edge technology.
              </p>
=======
        <Navigation />
        
        {/* Header */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Success <span className="text-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses transform with cutting-edge AI and technology solutions. 
              Real results from real clients.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl text-cyan-400/50">📊</div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Client:</h4>
                      <p className="text-gray-300 mb-4">{study.client}</p>
                      
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                      <p className="text-gray-300 mb-4">{study.challenge}</p>
                      
                      <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                      <p className="text-gray-300 mb-4">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
=======
        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        {study.client}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {study.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{study.challenge}</p>
                      
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
<<<<<<< HEAD
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full"
                          >
=======
                      <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

<<<<<<< HEAD
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Team: {study.teamSize}</span>
                      <button className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
                        Read Full Case Study
                        <ExternalLink className="w-4 h-4" />
=======
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <span className="block">Team: {study.teamSize}</span>
                        <span className="block">Duration: {study.duration}</span>
                      </div>
                      <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors">
                        View Details
                        <ArrowRight className="w-4 h-4" />
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
<<<<<<< HEAD
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  View Our Services
                </button>
=======

            {/* CTA Section */}
            <div className="mt-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 text-center backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/consultation"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Contact Us
                </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
=======

        <Footer />
        <SEOOptimizer />
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
      </div>
    </>
  );
};

<<<<<<< HEAD
export default CaseStudiesPage;
=======
export default CaseStudiesPage;

>>>>>>> cursor/fix-errors-and-merge-to-main-b629
