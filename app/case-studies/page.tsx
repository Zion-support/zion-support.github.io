<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function CaseStudiesPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Case Studies solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive case studies solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
=======

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, ExternalLink, Building, Users, TrendingUp, CheckCircle, Star, Clock, Zap } from 'lucide-react'

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Customer Service for E-commerce',
      client: 'ShopTech Solutions',
      industry: 'E-commerce',
      challenge: 'High customer service volume with long response times',
      solution: 'Implemented AI chatbot with natural language processing',
      results: [
        '75% reduction in response time',
        '90% customer satisfaction rate',
        '60% cost savings on support staff',
        '24/7 availability'
      ],
      image: '/images/case-study-1.jpg',
      duration: '3 months',
      team: '5 developers'
    },
    {
      title: 'Cloud Infrastructure Migration',
      client: 'FinanceFlow Inc.',
      industry: 'Fintech',
      challenge: 'Legacy on-premise infrastructure limiting scalability',
      solution: 'Migrated to AWS with microservices architecture',
      results: [
        '300% increase in processing capacity',
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        'Real-time data processing'
      ],
      image: '/images/case-study-2.jpg',
      duration: '6 months',
      team: '8 developers'
    },
    {
      title: 'AI Data Analytics Platform',
      client: 'HealthTech Innovations',
      industry: 'Healthcare',
      challenge: 'Complex data analysis requiring manual processing',
      solution: 'Built AI-powered analytics platform with machine learning',
      results: [
        '80% faster data processing',
        '95% accuracy in predictions',
        'Real-time insights dashboard',
        'Automated reporting system'
      ],
      image: '/images/case-study-3.jpg',
      duration: '4 months',
      team: '6 developers'
    }
  ]

  const stats = [
    { label: 'Projects Completed', value: '200+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Average Project Time', value: '4 months', icon: Clock },
    { label: 'Success Rate', value: '100%', icon: Zap }
  ]

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT projects. Real case studies showcasing our expertise and client results." />
        <meta name="keywords" content="case studies, AI projects, IT solutions, client success, project examples" />
      </Helmet>
<<<<<<< HEAD
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses transform their operations with 
              cutting-edge AI and IT solutions. Real projects, real results.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
                </div>
              ))}
            </div>
=======

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
          </p>
        </div></div></div></div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Building className="w-16 h-16 mx-auto mb-4" />
                    <div className="text-sm opacity-80">{study.industry}</div></div></div></div></div></div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                    <Users className="w-4 h-4" />
                    <span>{study.client}</span>
                  </div></div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {study.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2">
                          <TrendingUp className="w-3 h-3 text-green-400" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
          </div>
        </section>

<<<<<<< HEAD
        {/* Case Studies Grid */}
        <section className="py-16 px-4">
<<<<<<< HEAD
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white text-sm">
                        <span className="bg-purple-500 px-3 py-1 rounded-full">{study.industry}</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full">{study.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Client: {study.client}</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.team}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
=======
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {study.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Building className="w-4 h-4" />
                            <span>{study.client}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{study.team}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{study.duration}</span>
                          </div>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                        {study.industry}
                      </span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                      <ul className="space-y-2">
<<<<<<< HEAD
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {result}
=======
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center space-x-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{result}</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
<<<<<<< HEAD
                        to={`/case-studies/${study.id}`}
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Share
                      </button>
=======
                        to="/contact"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <TrendingUp className="w-4 h-4" />
                        <span>Success Story</span>
                      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
                    </div>
                  </div>
                </div>
              ))}
            </div>
<<<<<<< HEAD
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our AI and IT solutions.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0234
              </p>
            </div>
          </div>
=======
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you achieve similar results with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              View Our Services
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients. Let us help you achieve 
              similar results with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default CaseStudiesPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
