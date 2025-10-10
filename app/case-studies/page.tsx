'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 'ecommerce-ai',
      title: 'E-commerce AI Transformation',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'AI-powered recommendation engine and chatbot',
      results: [
        '40% increase in conversion rates',
        '60% reduction in cart abandonment',
        '35% improvement in customer satisfaction',
        '$2.5M additional revenue in 6 months'
      ],
      technologies: ['Machine Learning', 'NLP', 'React', 'Node.js', 'AWS'],
      duration: '4 months',
      team: '8 developers',
      image: '/case-studies/ecommerce-ai.jpg',
      featured: true
    },
    {
      id: 'healthcare-cloud',
      title: 'Healthcare Cloud Migration',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Legacy system migration and compliance requirements',
      solution: 'Secure cloud infrastructure with HIPAA compliance',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '100% HIPAA compliance',
        '3x faster data processing'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'PostgreSQL'],
      duration: '6 months',
      team: '12 developers',
      image: '/case-studies/healthcare-cloud.jpg',
      featured: false
    },
    {
      id: 'fintech-analytics',
      title: 'FinTech Analytics Platform',
      client: 'PayFlow Solutions',
      industry: 'Financial Technology',
      challenge: 'Real-time fraud detection and risk assessment',
      solution: 'AI-powered analytics platform with real-time processing',
      results: [
        '95% accuracy in fraud detection',
        '80% reduction in false positives',
        'Real-time processing capabilities',
        '$10M in prevented fraud losses'
      ],
      technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'Redis', 'MongoDB'],
      duration: '5 months',
      team: '10 developers',
      image: '/case-studies/fintech-analytics.jpg',
      featured: false
    },
    {
      id: 'manufacturing-iot',
      title: 'Manufacturing IoT Integration',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Production line optimization and predictive maintenance',
      solution: 'IoT sensors with AI-powered predictive analytics',
      results: [
        '25% increase in production efficiency',
        '40% reduction in downtime',
        '30% decrease in maintenance costs',
        'Real-time production monitoring'
      ],
      technologies: ['IoT', 'Machine Learning', 'Python', 'InfluxDB', 'Grafana'],
      duration: '7 months',
      team: '15 developers',
      image: '/case-studies/manufacturing-iot.jpg',
      featured: false
    },
    {
      id: 'saas-platform',
      title: 'SaaS Platform Development',
      client: 'ProjectFlow',
      industry: 'Project Management',
      challenge: 'Scalable project management platform',
      solution: 'Microservices architecture with AI-powered features',
      results: [
        '10x user growth in 12 months',
        '99.95% uptime',
        '50% faster project completion',
        '$5M ARR achieved'
      ],
      technologies: ['React', 'Node.js', 'Microservices', 'Docker', 'AWS'],
      duration: '8 months',
      team: '20 developers',
      image: '/case-studies/saas-platform.jpg',
      featured: false
    },
    {
      id: 'retail-automation',
      title: 'Retail Automation System',
      client: 'MegaStore Chain',
      industry: 'Retail',
      challenge: 'Inventory management and customer experience',
      solution: 'AI-powered inventory optimization and customer analytics',
      results: [
        '30% reduction in inventory costs',
        '45% improvement in stock accuracy',
        '25% increase in customer satisfaction',
        'Automated reordering system'
      ],
      technologies: ['AI/ML', 'React', 'Python', 'PostgreSQL', 'Redis'],
      duration: '6 months',
      team: '12 developers',
      image: '/case-studies/retail-automation.jpg',
      featured: false
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '50+', label: 'Projects Completed' },</Users className="w-8 h-8 text-blue-500" />
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '95%', label: 'Client Satisfaction' },</TrendingUp className="w-8 h-8 text-green-500" />
    { icon: <Award className="w-8 h-8 text-purple-500" />, value: '15+', label: 'Industry Awards' },</Award className="w-8 h-8 text-purple-500" />
    { icon: <CheckCircle className="w-8 h-8 text-orange-500" />, value: '100%', label: 'On-Time Delivery' }</CheckCircle className="w-8 h-8 text-orange-500" />
  ]</CheckCircle className="w-8 h-8 text-orange-500" />return (<//CheckCircle className="w-8 h-8 text-orange-500" />
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses transform with AI and IT solutions." />
      </Helmet>   <//Helmet>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">{/* Header */}</div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Case Studies</h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover how we've helped businesses transform with our AI and IT solutions. Real projects, real results.</p className="text-xl text-gray-300 max-w-3xl mx-auto">
              </p>
            </div>{/* Stats */}<//div>
            <div className="mb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map((stat, index) => (</div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">{stat.icon}</div className="flex justify-center mb-4">
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>))} {/* Featured Case Study */}<//div>
            {caseStudies.find(cs => cs.featured) && (<//div>
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-8">Featured Project</h2>{(() => {<//h2>
                  const featured = caseStudies.find(cs => cs.featured)<//h2>return featured ? (<///h2>
                    <div className="bg-slate-800/50 rounded-lg overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/2">
                          <div className="h-64 md:h-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                            <div className="text-center text-white">
                              <div className="text-6xl mb-4">🚀</div>
                              <p className="text-lg">Featured Project</p>
                            </div>
                        <div className="md:w-1/2 p-8">
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{featured.industry}</span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            </span>
                            <span className="text-gray-400 text-sm">{featured.duration}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-4">{featured.title}</h3>
                          <p className="text-gray-300 mb-6 leading-relaxed">{featured.solution}</p>
                          <div className="grid grid-cols-2 gap-4 mb-6">{featured.results.slice(0, 2).map((result, index) => (</div className="grid grid-cols-2 gap-4 mb-6">
                              <div key={index} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span className="text-sm text-gray-300">{result}</span>
                              </div>))}<//div>
                          </div>
                          <Link
                            to={`/case-studies/${featured.id}`}
                            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                          >Read Full Case Study</Link
                            to={`/case-studies/${featured.id}`}
                            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>) : null<//div>})()} )}
<///div>
            {/* Case Studies Grid */}<///div>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8">All Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{caseStudies.filter(cs => !cs.featured).map((caseStudy) => (</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div key={caseStudy.id} className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-800/70 transition-all duration-300">
                    <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-4xl mb-2">📊</div>
                        <p className="text-sm">Case Study</p>
                      </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-cyan-500 text-white px-2 py-1 rounded text-xs font-semibold">{caseStudy.industry}</span className="bg-cyan-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        </span>
                        <span className="text-gray-400 text-xs">{caseStudy.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{caseStudy.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{caseStudy.solution}</p>
                      <div className="space-y-2 mb-4">{caseStudy.results.slice(0, 2).map((result, index) => (</div className="space-y-2 mb-4">
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span className="text-xs text-gray-300">{result}</span>
                          </div>))}<//div>
                      </div>
                      <Link
                        to={`/case-studies/${caseStudy.id}`}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                      >Read More</Link
                        to={`/case-studies/${caseStudy.id}`}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                      >
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>))} {/* CTA Section */}<//div>
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h2 className="text-2xl font-bold text-white mb-4">
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Let's discuss how we can help transform your business with our AI and IT solutions.</p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >Start Your Project</Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >Call: (302) 464-0950</a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                  </a>
                </div>
        </div>
      </main> <//main>
      <Footer />
    </>);<//>
}<//>
export default CaseStudiesPage<//>