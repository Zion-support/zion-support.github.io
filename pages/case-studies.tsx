import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import Navigation from '../components/layout/EnhancedNavigation';
import Footer from '../components/layout/Footer';
import { ArrowRight, BarChart3, Brain, CheckCircle, Clock, DollarSign, Globe, Shield, TrendingUp, Users } from 'lucide-react';
=======
import { ArrowRight, TrendingUp, Users, Clock, Award, CheckCircle, Star, Building, Target, Lightbulb, Shield, Cloud } from 'lucide-react';
>>>>>>> main

export default function CaseStudies() {
  const caseStudies = [
<<<<<<< HEAD
    {
      title: 'Enterprise Cloud Migration Success', client: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing', challenge: 'Legacy system migration and digital transformation',
      solution: 'Complete cloud migration with AI-powered automation', results: [
        '60% reduction in operational costs',
        '40% improvement in system performance', '99.9% uptime achieved',
        '50% faster deployment cycles'
      ], duration: '6 months',
      team: '12 specialists', icon: Cloud,
=======
  {
      title: 'Enterprise Cloud Migration Success',
      client: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Legacy system migration and digital transformation',
      solution: 'Complete cloud migration with AI-powered automation',
      results: [
        '60% reduction in operational costs,40% improvement in system performance,99.9% uptime achieved,50% faster deployment cycles'
      ],
      duration: '6 months',
      team: '12 specialists',
      icon: Cloud,
>>>>>>> main
      image: '/api/placeholder/600/400'
    }, {
      title: 'AI-Powered Customer Service Revolution',
      client: 'Leading E-commerce Platform', industry: 'E-commerce',
      challenge: 'High customer service volume and response times', solution: 'AI chatbot implementation with natural language processing',
      results: [
<<<<<<< HEAD
        '80% reduction in response time', '90% customer satisfaction rate',
        '24/7 automated support', '70% cost savings on support staff'
      ], duration: '4 months',
      team: '8 specialists', icon: Target,
=======
        '80% reduction in response time,90% customer satisfaction rate,24/7 automated support,70% cost savings on support staff'
      ],
      duration: '4 months',
      team: '8 specialists',
      icon: Target,
>>>>>>> main
      image: '/api/placeholder/600/400'
    }, {
      title: 'Cybersecurity Transformation',
      client: 'Financial Services Firm', industry: 'Financial Services',
      challenge: 'Advanced threat protection and compliance', solution: 'Comprehensive security framework with AI monitoring',
      results: [
<<<<<<< HEAD
        '99.8% threat detection accuracy', 'Zero security breaches',
        'SOC 2 Type II compliance', '50% reduction in security incidents'
      ], duration: '8 months',
      team: '15 specialists', icon: Shield,
=======
        '99.8% threat detection accuracy,Zero security breaches,SOC 2 Type II compliance,50% reduction in security incidents'
      ],
      duration: '8 months',
      team: '15 specialists',
      icon: Shield,
>>>>>>> main
      image: '/api/placeholder/600/400'
    }, {
      title: 'Data Analytics Platform Development',
      client: 'Healthcare Provider Network', industry: 'Healthcare',
      challenge: 'Patient data analysis and predictive insights', solution: 'Custom analytics platform with machine learning',
      results: [
<<<<<<< HEAD
        '30% improvement in patient outcomes', '25% reduction in readmission rates',
        'Real-time data insights', 'HIPAA compliance maintained'
      ], duration: '10 months',
      team: '10 specialists', icon: TrendingUp,
=======
        '30% improvement in patient outcomes,25% reduction in readmission rates,Real-time data insights,HIPAA compliance maintained'
      ],
      duration: '10 months',
      team: '10 specialists',
      icon: TrendingUp,
>>>>>>> main
      image: '/api/placeholder/600/400'
    }, {
      title: 'Micro SaaS Development',
      client: 'Startup Technology Company', industry: 'Technology',
      challenge: 'Rapid product development and market entry', solution: 'Custom micro SaaS platform with scalable architecture',
      results: [
<<<<<<< HEAD
        '3x faster time to market', '500% user growth in 6 months',
        '99.5% platform reliability', 'Seamless scalability achieved'
      ], duration: '5 months',
      team: '6 specialists', icon: Lightbulb,
=======
        '3x faster time to market,500% user growth in 6 months,99.5% platform reliability,Seamless scalability achieved'
      ],
      duration: '5 months',
      team: '6 specialists',
      icon: Lightbulb,
>>>>>>> main
      image: '/api/placeholder/600/400'
    }, {
      title: 'Digital Transformation Initiative',
      client: 'Traditional Retail Chain', industry: 'Retail',
      challenge: 'Digital modernization and omnichannel experience', solution: 'End-to-end digital transformation with AI integration',
      results: [
<<<<<<< HEAD
        '45% increase in online sales', '60% improvement in customer engagement',
        'Unified omnichannel experience', '40% reduction in operational costs'
      ], duration: '12 months',
      team: '20 specialists', icon: Building,
=======
        '45% increase in online sales,60% improvement in customer engagement,Unified omnichannel experience,40% reduction in operational costs'
      ],
      duration: '12 months',
      team: '20 specialists',
      icon: Building,
>>>>>>> main
      image: '/api/placeholder/600/400'
    }
  ];

  const industries = [
<<<<<<< HEAD
    { name: 'Manufacturing', count: 15, icon: Building }, { name: 'Healthcare', count: 12, icon: Shield },
    { name: 'Financial Services', count: 18, icon: TrendingUp }, { name: 'E-commerce', count: 22, icon: Target },
    { name: 'Technology', count: 25, icon: Lightbulb }, { name: 'Retail', count: 14, icon: Users }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations, and we&apos;ve seen significant improvements in efficiency and cost savings.",
=======
  { name: 'Manufacturing', count: 15, icon: Building },
    { name: 'Healthcare', count: 12, icon: Shield },
    { name: 'Financial Services', count: 18, icon: TrendingUp },
    { name: 'E-commerce', count: 22, icon: Target },
    { name: 'Technology', count: 25, icon: Lightbulb },
    { name: 'Retail', count: 14, icon: Users }
  ];

  const testimonials = [
  {
      quote: "Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations, and we've seen significant improvements in efficiency and cost savings.",
>>>>>>> main
      author: "Sarah Johnson",
      title: "CTO", company: "Manufacturing Corp",
      rating: 5
    }, {
      quote: "Their AI solutions revolutionized our customer service operations. We now provide 24/7 support with higher satisfaction rates than ever before.",
      author: "Michael Chen", title: "VP of Operations",
      company: "E-commerce Platform", rating: 5
    },
    {
      quote: "The cybersecurity implementation was flawless. We feel confident knowing our data is protected by the most advanced security measures available.", author: "Dr. Emily Rodriguez",
      title: "Chief Information Officer", company: "Healthcare Network",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful client projects and case studies. See how Zion Tech Group delivers results across industries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Success Stories
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Discover how we&apos;ve helped businesses across industries achieve their goals through innovative technology solutions.'
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <Link href="#case-studies">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    View Case Studies
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Proven expertise across diverse industries
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-blue-600 font-semibold">{industry.count} Projects</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Featured Case Studies
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real clients
              </p>
            </div>
            
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={index} className={`flex flex-col lg: flex-row gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
                      <study.icon className="w-24 h-24 text-gray-400" />
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <study.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    <p className="text-lg text-gray-600 mb-6 font-semibold">{study.client}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 mb-4">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.team}
                      </div>
                    </div>
                    
                    <Link href="/contact">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300">
                        Start Similar Project
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Client Testimonials
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                What our clients say about working with us
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.title}</p>
                      <p className="text-blue-600 font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results for your business.'
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
              <Link href="/services">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  View Our Services
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
</>
  );


