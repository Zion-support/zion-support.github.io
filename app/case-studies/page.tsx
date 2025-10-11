import React from 'react';
import { CheckCircle, ArrowRight, Users, Award, Clock, Star, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  industry: string;
  duration: string;
  results: string[];
  technologies: string[];
  image: string;
  featured: boolean;
  client: string;
  challenge: string;
  solution: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'ai-customer-service',
      title: 'AI-Powered Customer Service Transformation',
      description: 'Implemented advanced AI chatbot and automation solutions for a leading e-commerce platform.',
      industry: 'E-commerce',
      duration: '6 months',
      client: 'TechRetail Inc.',
      challenge: 'High customer service costs and long response times during peak hours.',
      solution: 'Deployed AI chatbot with natural language processing and automated ticket routing system.',
      results: [
        '75% reduction in response time',
        '60% decrease in customer service costs',
        '95% customer satisfaction rate',
        '40% increase in first-call resolution'
      ],
      technologies: ['AI/ML', 'Natural Language Processing', 'Cloud Computing', 'API Integration'],
      image: '/images/case-studies/ai-customer-service.jpg',
      featured: true
    },
    {
      id: 'cloud-migration',
      title: 'Enterprise Cloud Migration',
      description: 'Successfully migrated legacy systems to cloud infrastructure for improved scalability and performance.',
      industry: 'Financial Services',
      duration: '8 months',
      results: ['50% cost reduction', '99.9% uptime', '3x faster deployment'],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
<<<<<<< HEAD
      id: 'data-analytics',
      title: 'Advanced Data Analytics Platform',
description: 'Built a comprehensive data analytics platform that provided real-time insights and predictive analytics.',
      industry: 'Healthcare',
      duration: '4 months',
      results: ['Real-time insights', '40% better decision making', 'Automated reporting'],
      technologies: ['Python', 'Apache Spark', 'React', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 'mobile-app',
      title: 'Cross-Platform Mobile Application',
description: 'Developed a feature-rich mobile application for both iOS and Android platforms with seamless user experience.',
      industry: 'Retail',
      duration: '5 months',
      results: ['50k+ downloads', '4.8 app store rating', '30% increase in sales'],
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 'blockchain-solution',
      title: 'Blockchain Supply Chain Solution',
      description: 'Implemented a transparent and secure supply chain tracking system using blockchain technology.',
=======
      client: 'FinanceCorp',
      challenge: 'Outdated on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Comprehensive cloud migration strategy with AWS, including data migration and security implementation.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster deployment times',
        'Enhanced security compliance'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Monitoring'],
      image: '/images/case-studies/cloud-migration.jpg',
      featured: false
    },
    {
      id: 'cybersecurity-audit',
      title: 'Comprehensive Cybersecurity Overhaul',
      description: 'Conducted security audit and implemented robust cybersecurity measures for a healthcare organization.',
      industry: 'Healthcare',
      duration: '4 months',
      client: 'HealthTech Solutions',
      challenge: 'Vulnerable security infrastructure and compliance requirements for healthcare data.',
      solution: 'Complete security assessment, implementation of zero-trust architecture, and staff training.',
      results: [
        '100% compliance with HIPAA regulations',
        'Zero security incidents post-implementation',
        '90% improvement in security posture',
        'Comprehensive staff training completed'
      ],
      technologies: ['Zero Trust Architecture', 'SIEM', 'Endpoint Protection', 'Compliance Tools'],
      image: '/images/case-studies/cybersecurity.jpg',
      featured: false
    },
    {
      id: 'data-analytics-platform',
      title: 'Advanced Data Analytics Platform',
      description: 'Built a comprehensive data analytics platform for real-time business intelligence and reporting.',
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
      industry: 'Manufacturing',
      duration: '10 months',
      client: 'ManufacturingPro',
      challenge: 'Lack of real-time insights and data-driven decision making capabilities.',
      solution: 'Developed end-to-end data pipeline with real-time analytics and interactive dashboards.',
      results: [
        'Real-time data processing capabilities',
        '50% improvement in operational efficiency',
        'Predictive maintenance implementation',
        '30% reduction in downtime'
      ],
      technologies: ['Big Data', 'Machine Learning', 'Real-time Processing', 'Data Visualization'],
      image: '/images/case-studies/data-analytics.jpg',
      featured: true
<<<<<<< HEAD
    },
    {
      id: 'ai-automation',
      title: 'Process Automation with AI',
      description: 'Automated complex business processes using AI and machine learning, improving efficiency and accuracy.',
      industry: 'Insurance',
      duration: '3 months',
      results: ['70% process automation', '90% accuracy improvement', '60% time savings'],
      technologies: ['Python', 'TensorFlow', 'RPA', 'APIs'],
      image: '/api/placeholder/600/400',
=======

      featured: false
    }
  ];

const stats = [

const stats = [
    { label: 'Projects Completed', value: '150+', icon: <Award className="w-8 h-8 text-blue-400" /> },
    { label: 'Happy Clients', value: '200+', icon: <Users className="w-8 h-8 text-green-400" /> },
    { label: 'Years Experience', value: '10+', icon: <Clock className="w-8 h-8 text-purple-400" /> },
    { label: 'Success Rate', value: '98%', icon: <TrendingUp className="w-8 h-8 text-orange-400" /> }
  ];
  return (
    <>
      <Helmet>
<title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies. See how Zion Tech Group delivers innovative AI and IT solutions." />
        <meta name="keywords" content="case studies, projects, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
=======
    { label: 'Projects Completed', value: '500+', icon: Award },
    { label: 'Happy Clients', value: '200+', icon: Users },
    { label: 'Years Experience', value: '10+', icon: Clock },
    { label: 'Success Rate', value: '99%', icon: Star }
=======
    }
  ];

  const stats = [
    {
      number: '150+',
      label: 'Projects Completed',
      icon: <Award className="w-8 h-8 text-blue-400" />
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      icon: <Star className="w-8 h-8 text-yellow-400" />
    },
    {
      number: '50+',
      label: 'Industries Served',
      icon: <Users className="w-8 h-8 text-green-400" />
    },
    {
      number: '5+',
      label: 'Years Experience',
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
  ];

=======
      id: 'cybersecurity-audit',
      title: 'Comprehensive Security Audit',
      description: 'Conducted thorough security assessment and implemented robust cybersecurity measures for a healthcare organization.',
      industry: 'Healthcare',
      duration: '4 months',
      results: ['100% compliance', 'Zero security incidents', '50% faster threat detection'],
      technologies: ['SIEM', 'Penetration Testing', 'Compliance Tools'],
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-529a
  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Explore our successful projects and case studies showcasing our expertise in AI, cloud computing, and cybersecurity." />
        <meta name="keywords" content="case studies, projects, AI solutions, cloud migration, cybersecurity, success stories" />
      </Helmet>
      
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, cloud migration, cybersecurity, Zion Tech Group" />
      </Helmet>
      
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
<<<<<<< HEAD
<<<<<<< HEAD
Success
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
              Success
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
<<<<<<< HEAD
<<<<<<< HEAD
              Discover how we've helped businesses transform with innovative AI and IT solutions.
=======
              Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                  <div className="mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
=======
              Discover how we've helped businesses transform their operations with cutting-edge technology solutions.
            </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="text-center mb-16">
<h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've helped businesses achieve their goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
{caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 ${caseStudy.featured ? 'ring-2 ring-blue-400' : ''}`}>
                  {caseStudy.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        <Star className="w-4 h-4 mr-1" />
                        Featured
                      </div>
                    </div>
                  )}
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-50">
                      {caseStudy.title.charAt(0)}
=======
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our most successful projects and the impact we've made for our clients.
              </p>
            </div>
            
            <div className="space-y-16">
              {caseStudies.filter(study => study.featured).map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg h-64 flex items-center justify-center mb-6">
                        <span className="text-white text-lg font-semibold">Case Study Image</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                        <span className="text-gray-300">{study.industry}</span>
                        <span className="flex items-center text-gray-300">
                          <Clock className="w-4 h-4 mr-2" />
                          {study.duration}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                      <p className="text-gray-300 mb-6">{study.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Client: {study.client}</h4>
                        <p className="text-gray-300 mb-4"><strong>Challenge:</strong> {study.challenge}</p>
                        <p className="text-gray-300 mb-4"><strong>Solution:</strong> {study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, index) => (
                            <span key={index} className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                        Read Full Case Study
                        <ArrowRight className="inline-block ml-2 w-4 h-4" />
                      </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
                    </div>
                  </div>
<<<<<<< HEAD
<div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-blue-400 font-semibold">{caseStudy.industry}</span>
                      <span className="text-gray-400 text-sm">{caseStudy.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h3>
                    <p className="text-gray-300 mb-6">{caseStudy.description}</p>
                    
<div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
{caseStudy.technologies.map((tech, index) => (
                          <span key={index} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
=======
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={study.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  <div className="flex-1">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <Building className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-semibold">{study.industry}</span>
                      <span className="text-gray-400">•</span>
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-400">{study.duration}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-lg text-gray-300 mb-6">{study.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-green-400" />
                          Results
                        </h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="text-gray-300">
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Code className="w-5 h-5 text-purple-400" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
                      Read Full Case Study
                      <ArrowRight className="inline-block ml-2 w-5 h-5" />
                    </button>
                  </div>
=======
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                All Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse through our complete portfolio of successful projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg h-48 flex items-center justify-center mb-6">
                    <span className="text-white text-lg font-semibold">Case Study Image</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    {study.featured && (
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    )}
                    <span className="flex items-center text-gray-300 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-white/10 px-2 py-1 rounded-full text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    View Details
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
<<<<<<< HEAD
<<<<<<< HEAD
<div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
=======
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let us help you achieve similar results with our proven technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our proven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Us
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
                </button>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD

=======
        
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
        <Footer />
      </div>
=======
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our successful projects and case studies.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">Case studies coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudiesPage;
