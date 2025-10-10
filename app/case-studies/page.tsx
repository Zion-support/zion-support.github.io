'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Star, Clock, Users, TrendingUp, BarChart, Shield, Brain, Cloud, Code, Target, Award, Eye, ExternalLink, Filter, Search, Calendar, Building } from 'lucide-react';

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', count: 12 },
    { id: 'healthcare', name: 'Healthcare', count: 3 },
    { id: 'finance', name: 'Finance', count: 2 },
    { id: 'manufacturing', name: 'Manufacturing', count: 2 },
    { id: 'retail', name: 'Retail', count: 2 },
    { id: 'education', name: 'Education', count: 2 },
    { id: 'technology', name: 'Technology', count: 1 }
  ];

  const services = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'cloud', name: 'Cloud Migration' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'automation', name: 'Process Automation' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'healthcare',
      service: 'ai',
      challenge: 'MedTech Solutions needed to analyze large volumes of patient data to identify patterns and improve treatment outcomes.',
      solution: 'We developed a comprehensive AI analytics platform that processes patient data in real-time, providing actionable insights for healthcare providers.',
      results: [
        '40% improvement in diagnostic accuracy',
        '60% reduction in data processing time',
        '25% increase in patient satisfaction',
        '30% cost savings in operations'
      ],
      duration: '6 months',
      teamSize: 8,
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'AWS', 'React'],
      image: '/images/case-studies/healthcare-ai.webp',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'Global Finance Corp',
      industry: 'finance',
      service: 'cloud',
      challenge: 'Global Finance Corp needed to migrate their legacy systems to the cloud while maintaining security and compliance.',
      solution: 'We designed and implemented a secure cloud migration strategy using AWS, ensuring zero downtime and full compliance with financial regulations.',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '3x faster application deployment',
        '100% compliance maintained'
      ],
      duration: '4 months',
      teamSize: 6,
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Python'],
      image: '/images/case-studies/finance-cloud.webp',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Manufacturing',
      client: 'Industrial Manufacturing Ltd',
      industry: 'manufacturing',
      service: 'security',
      challenge: 'Industrial Manufacturing Ltd faced increasing cyber threats targeting their production systems and needed comprehensive security solutions.',
      solution: 'We implemented a multi-layered cybersecurity framework including network monitoring, endpoint protection, and employee training programs.',
      results: [
        '95% reduction in security incidents',
        '24/7 threat monitoring established',
        '100% employee security training completion',
        'Zero data breaches since implementation'
      ],
      duration: '3 months',
      teamSize: 5,
      technologies: ['SIEM', 'Firewall', 'EDR', 'Security Awareness Training'],
      image: '/images/case-studies/manufacturing-security.webp',
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    return matchesSearch && matchesIndustry && matchesService;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Case
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Studies
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across various industries achieve their goals through innovative AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
                {industries.map((industry) => (
                  <option key={industry.id} value={industry.id}>
                    {industry.name} ({industry.count})
                  </option>
                ))}
              </select>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
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

      {/* Featured Case Study */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredCaseStudies.filter(study => study.featured).map((study) => (
            <div key={study.id} className="card-futuristic glass-dark p-8 mb-12">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold">Featured Case Study</span>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      {study.industry.toUpperCase()}
                    </span>
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {study.service.toUpperCase()}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{study.title}</h2>
                  <p className="text-cyan-400 text-lg font-semibold mb-4">{study.client}</p>
                  <p className="text-gray-300 mb-6">{study.challenge}</p>
                  <div className="flex items-center space-x-6 text-gray-400 text-sm mb-6">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {study.teamSize} team members
                    </span>
                  </div>
                  <button className="btn-futuristic text-lg px-6 py-3 float-animation">
                    View Full Case Study
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
                <div className="bg-gray-600 rounded-lg h-64 flex items-center justify-center">
                  <Building className="w-24 h-24 text-gray-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <article key={study.id} className="card-futuristic glass-dark p-6 hover:shadow-2xl transition-all duration-500">
                <div className="bg-gray-600 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <Building className="w-16 h-16 text-gray-400" />
                </div>
                <div className="flex items-center mb-3">
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold mr-2">
                    {study.industry.toUpperCase()}
                  </span>
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {study.service.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                <p className="text-cyan-400 font-semibold mb-3">{study.client}</p>
                <p className="text-gray-300 mb-4 text-sm">{study.challenge}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {study.teamSize}
                    </span>
                  </div>
                </div>
                <button className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  View Details
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Success Story?</h2>
          <p className="text-gray-300 mb-8">
            Let's discuss how we can help your business achieve similar results with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic text-lg px-8 py-4 float-animation">
              Start Your Project
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}