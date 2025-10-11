'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock, DollarSign, Brain, Cloud, Shield, BarChart3, Eye, Zap, Target, Heart, FileText, Cpu, Globe, Database, Settings, Smartphone, MessageSquare, Mic, Package, Monitor, Wifi, Code, Lock, Star, Award, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Customer Service for E-commerce',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'High customer service costs and inconsistent response times during peak hours',
      solution: 'Implemented AI chatbot with natural language processing and sentiment analysis',
      results: [
        'Reduced customer service costs by 65%',
        'Improved response time from 2 hours to 30 seconds',
        'Increased customer satisfaction by 40%',
        'Handled 80% of inquiries without human intervention'
      ],
      technologies: ['AI Chatbots', 'Natural Language Processing', 'Sentiment Analysis', 'CRM Integration'],
      duration: '3 months',
      investment: '$50,000',
      roi: '340%',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Predictive Analytics for Manufacturing',
      client: 'ManufacturingCorp',
      industry: 'Manufacturing',
      challenge: 'Unplanned equipment downtime causing production delays and increased costs',
      solution: 'Deployed AI-powered predictive maintenance system with IoT sensors',
      results: [
        'Reduced unplanned downtime by 70%',
        'Increased equipment efficiency by 25%',
        'Saved $2.3M in maintenance costs annually',
        'Improved production output by 18%'
      ],
      technologies: ['Predictive Analytics', 'IoT Sensors', 'Machine Learning', 'Real-time Monitoring'],
      duration: '4 months',
      investment: '$120,000',
      roi: '420%',
      icon: Settings,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Cloud Migration and Security Enhancement',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing security vulnerabilities and compliance issues',
      solution: 'Complete cloud migration with enhanced cybersecurity measures',
      results: [
        'Improved system security by 95%',
        'Reduced infrastructure costs by 40%',
        'Achieved 99.9% uptime',
        'Complied with all regulatory requirements'
      ],
      technologies: ['Cloud Infrastructure', 'Cybersecurity', 'Compliance', 'Data Encryption'],
      duration: '6 months',
      investment: '$200,000',
      roi: '280%',
      icon: Shield,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'AI-Driven Supply Chain Optimization',
      client: 'GlobalLogistics Ltd.',
      industry: 'Logistics',
      challenge: 'Inefficient supply chain operations leading to delays and increased costs',
      solution: 'Implemented AI-powered supply chain optimization with real-time tracking',
      results: [
        'Reduced delivery times by 35%',
        'Decreased operational costs by 28%',
        'Improved inventory accuracy to 99.2%',
        'Enhanced customer satisfaction by 45%'
      ],
      technologies: ['Supply Chain AI', 'Real-time Tracking', 'Predictive Analytics', 'Route Optimization'],
      duration: '5 months',
      investment: '$150,000',
      roi: '380%',
      icon: Package,
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Healthcare AI Diagnostic Assistant',
      client: 'MedCenter Hospital',
      industry: 'Healthcare',
      challenge: 'Long diagnostic times and need for improved accuracy in medical imaging',
      solution: 'Deployed AI-powered diagnostic assistant for medical image analysis',
      results: [
        'Reduced diagnostic time by 60%',
        'Improved diagnostic accuracy by 25%',
        'Enabled early detection of diseases',
        'Reduced false positive rates by 30%'
      ],
      technologies: ['Computer Vision', 'Medical AI', 'Image Analysis', 'Machine Learning'],
      duration: '8 months',
      investment: '$300,000',
      roi: '250%',
      icon: Heart,
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Smart City IoT Implementation',
      client: 'SmartCity Municipal',
      industry: 'Government',
      challenge: 'Need for efficient city management and citizen services',
      solution: 'Comprehensive IoT platform for smart city operations',
      results: [
        'Improved traffic flow by 30%',
        'Reduced energy consumption by 22%',
        'Enhanced citizen satisfaction by 50%',
        'Optimized resource allocation'
      ],
      technologies: ['IoT Platform', 'Smart Sensors', 'Data Analytics', 'Real-time Monitoring'],
      duration: '12 months',
      investment: '$500,000',
      roi: '320%',
      icon: Globe,
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Average ROI', value: '340%', icon: TrendingUp },
    { label: 'Industries Served', value: '25+', icon: Globe }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Results</title>
        <meta name="description" content="Explore our successful AI and IT implementation case studies. See real results, ROI, and transformations we've achieved for our clients." />
        <meta name="keywords" content="case studies, success stories, AI implementation, IT solutions, client results, ROI, project outcomes" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Success <span className="text-cyan-400">Stories</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Real results from real clients. Discover how we've transformed businesses 
                across industries with our AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 bg-gradient-to-r ${study.color} rounded-lg flex items-center justify-center mr-4`}>
                          <study.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{study.title}</h3>
                          <p className="text-cyan-400">{study.client} • {study.industry}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">{study.roi}</div>
                        <div className="text-sm text-gray-400">ROI</div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-white">{study.duration}</div>
                        <div className="text-xs text-gray-400">Duration</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-white">{study.investment}</div>
                        <div className="text-xs text-gray-400">Investment</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-green-400">{study.roi}</div>
                        <div className="text-xs text-gray-400">ROI</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let us help you achieve similar results for your business. 
                Contact us for a free consultation and discover how we can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Start Your Project
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CaseStudiesPage;