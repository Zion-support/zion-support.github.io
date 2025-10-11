import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PagePage: React.FC = () => {
  const features = [
    {
      title: 'Page',
      description: 'Professional page services for modern businesses.',
      benefits: ['Expert Solutions', 'Advanced Technology', 'Proven Results', '24/7 Support']
    },
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge tools and technologies to deliver superior results.',
      benefits: ['Latest Tools', 'Modern Methods', 'Scalable Solutions', 'Future-Ready']
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients.',
      benefits: ['High Success Rate', 'Client Satisfaction', 'Ongoing Support', 'Continuous Improvement']
    }
  ];

=======
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Clock, CheckCircle, Star, TrendingUp, Shield, Zap, Globe } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Award } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-c587

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  industry: string;
<<<<<<< HEAD
=======
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  featured: boolean;
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
  duration: string;
  results: string[];
  technologies: string[];
  image: string;
  featured: boolean;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'ai-customer-service',
      title: 'AI-Powered Customer Service Transformation',
<<<<<<< HEAD
      description: 'Revolutionized customer support with intelligent chatbots and automated workflows, reducing response time by 80%.',
      industry: 'E-commerce',
      duration: '6 months',
      results: [
        '80% reduction in response time',
        '95% customer satisfaction rate',
        '60% cost reduction in support operations',
        '24/7 automated customer assistance'
=======
      client: 'Global Retail Chain',
      industry: 'Retail',
      challenge: 'The client was struggling with high customer service costs and inconsistent response times across their 500+ stores worldwide.',
      solution: 'We implemented an AI-powered chatbot system integrated with their existing CRM, providing 24/7 customer support with intelligent routing and automated responses.',
      results: [
        '60% reduction in customer service costs',
        '85% improvement in response time',
        '40% increase in customer satisfaction',
        '90% of queries resolved automatically'
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
      ],
      technologies: ['AI/ML', 'Natural Language Processing', 'Cloud Computing', 'API Integration'],
      image: '/images/case-studies/ai-customer-service.jpg',
<<<<<<< HEAD
      featured: true
    },
    {
      id: 'cloud-migration',
      title: 'Enterprise Cloud Migration',
      description: 'Successfully migrated legacy infrastructure to cloud, improving scalability and reducing operational costs.',
      industry: 'Financial Services',
      duration: '8 months',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster deployment cycles',
        'Enhanced security and compliance'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'DevOps'],
      image: '/images/case-studies/cloud-migration.jpg',
      featured: true
    },
    {
      id: 'cybersecurity-healthcare',
      title: 'Healthcare Cybersecurity Overhaul',
      description: 'Implemented comprehensive security measures to protect sensitive patient data and ensure HIPAA compliance.',
      industry: 'Healthcare',
      duration: '4 months',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security breaches',
        'Automated threat detection',
        'Reduced security incidents by 90%'
=======
      featured: true,
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'Regional Bank',
      industry: 'Financial Services',
      challenge: 'Legacy on-premises infrastructure was limiting scalability and increasing operational costs while failing to meet compliance requirements.',
      solution: 'We designed and executed a comprehensive cloud migration strategy using AWS, implementing microservices architecture and automated compliance monitoring.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster application deployment',
        'Full compliance with financial regulations'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      featured: true,
      duration: '8 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Overhaul for Healthcare Provider',
      client: 'Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Multiple security breaches and non-compliance with HIPAA regulations were putting patient data at risk.',
      solution: 'We implemented a comprehensive cybersecurity framework including zero-trust architecture, advanced threat detection, and staff training programs.',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security incidents in 18 months',
        '95% reduction in security vulnerabilities',
        'Complete data encryption implementation'
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
      ],
      technologies: ['Cybersecurity', 'HIPAA Compliance', 'SIEM', 'Penetration Testing'],
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
<<<<<<< HEAD
      featured: false
    },
    {
      id: 'ml-predictive-analytics',
      title: 'Machine Learning Predictive Analytics',
      description: 'Developed ML models to predict customer behavior and optimize business processes for better decision making.',
      industry: 'Retail',
      duration: '5 months',
      results: [
        '25% increase in sales',
        '30% improvement in inventory management',
        '85% accuracy in demand forecasting',
        'Reduced waste by 40%'
      ],
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'Data Analytics'],
      image: '/images/case-studies/ml-predictive-analytics.jpg',
      featured: false
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation Initiative',
      description: 'Complete digital overhaul of business processes, modernizing operations and improving efficiency.',
      industry: 'Manufacturing',
      duration: '12 months',
      results: [
        '40% increase in operational efficiency',
        'Digital-first customer experience',
        'Real-time data analytics',
        'Streamlined business processes'
      ],
      technologies: ['Digital Transformation', 'IoT', 'Cloud Computing', 'Data Analytics'],
      image: '/images/case-studies/digital-transformation.jpg',
      featured: true
    },
    {
      id: 'blockchain-supply-chain',
      title: 'Blockchain Supply Chain Solution',
      description: 'Implemented blockchain technology to create transparent and secure supply chain tracking system.',
      industry: 'Logistics',
      duration: '7 months',
      results: [
        '100% supply chain transparency',
        'Reduced fraud by 95%',
        'Real-time tracking capabilities',
        'Improved supplier relationships'
      ],
      technologies: ['Blockchain', 'Smart Contracts', 'Supply Chain', 'Cryptography'],
      image: '/images/case-studies/blockchain-supply-chain.jpg',
      featured: false
=======
      featured: false,
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'IoT Platform for Smart Manufacturing',
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Manual production monitoring was leading to inefficiencies and quality issues in their manufacturing processes.',
      solution: 'We developed a comprehensive IoT platform with real-time monitoring, predictive maintenance, and automated quality control systems.',
      results: [
        '25% increase in production efficiency',
        '30% reduction in equipment downtime',
        '20% improvement in product quality',
        'Real-time production insights'
      ],
      image: '/images/case-studies/iot-manufacturing.jpg',
      featured: false,
      duration: '10 months',
      team: '15 specialists'
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
    }
  ];

  const industries = ['All', 'Retail', 'Financial Services', 'Healthcare', 'Manufacturing', 'Technology', 'Education'];

  const stats = [
<<<<<<< HEAD
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Industry Awards', value: '25+', icon: Award }
=======
    { number: '200+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industries Served' },
    { number: '5+', label: 'Years Experience' }
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-ace5
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services and solutions." />
        <meta name="keywords" content="page, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Page
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional page services to help your business succeed and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our page services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
=======
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
=======
        <title>Case Studies - Success Stories | Zion Tech Group</title>
        <meta name="description" content="Explore our successful technology implementations across various industries. See how we've helped clients achieve their digital transformation goals." />
        <meta name="keywords" content="case studies, success stories, technology implementations, digital transformation, AI solutions, cloud migration" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Discover how we've helped businesses transform their operations with cutting-edge technology solutions.
              </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                  <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white">{study.duration}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-purple-500/80 px-3 py-1 rounded-full text-sm text-white">{study.industry}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {study.title}
                      </h3>
                      {study.featured && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-yellow-400 text-sm font-semibold">Featured</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {study.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
=======
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
<<<<<<< HEAD
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Success Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.filter(study => study.featured).map((study, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white/60 text-sm">Case Study Image</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{study.industry} • {study.duration}</span>
                    <button className="flex items-center text-purple-400 hover:text-purple-300 font-semibold group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
=======
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                Featured Case Studies
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies.filter(study => study.featured).map((study) => (
                  <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                        <span className="ml-2 text-sm text-gray-500">
                          {study.duration} • {study.team}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        <strong>Client:</strong> {study.client}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                All Case Studies
              </h2>
              <div className="space-y-8">
                {caseStudies.map((study) => (
                  <div key={study.id} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {study.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {study.industry}
                          </span>
                          <span className="text-sm">
                            <strong>Client:</strong> {study.client}
                          </span>
                          <span className="text-sm">
                            <strong>Duration:</strong> {study.duration}
                          </span>
                          <span className="text-sm">
                            <strong>Team:</strong> {study.team}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {study.results.map((result, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let us help you transform your business with our proven AI and IT solutions.
=======
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Let's discuss how we can help transform your business with our technology solutions.
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  <Zap className="w-5 h-5" />
                  Start Your Project
                </button>
                <Link
                  to="/contact"
<<<<<<< HEAD
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Contact Us
=======
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Our Services
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
                </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-ace5
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PagePage;