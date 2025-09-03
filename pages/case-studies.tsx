import React from 'react'
import type { NextPage } from 'next';
import Head from 'next/head'
import Layout from '../components/Layout';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Award,
  Globe,
  Zap} from 'lucide-react';
  Zap
} from 'lucide-react';
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-53eb

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      client: 'TechStart Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor user experience',
      solution: 'Developed AI-driven recommendation engine and personalized shopping experience',
      results: [
        '45% increase in conversion rates',
        '60% improvement in user engagement',
        '35% reduction in cart abandonment',
        '80% customer satisfaction score'
      ],
      duration: '4 months',
      teamSize: '8 experts',
      technologies: ['React', 'Node.js', 'Machine Learning', 'AWS'],
      image: '/api/placeholder/600/400',
      featured: true},
    {
      id: 2,
      title: 'Enterprise Cloud Migration',
      client: 'Fortune 500 Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Legacy system migration and digital transformation',
      solution: 'Complete cloud migration with AI-powered automation',
      results: [
        '60% reduction in operational costs',
        '40% improvement in system performance',
        '99.9% uptime achieved',
        '50% faster deployment cycles'
      ],
      duration: '6 months',
      teamSize: '12 experts',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      image: '/api/placeholder/600/400',
      featured: true},
    {
      id: 3,
      title: 'Educational AI Platform',
      client: 'EduTech Solutions',
      industry: 'Education',
      challenge: 'One-size-fits-all learning approach limiting student success',
      solution: 'Created personalized AI learning platform with adaptive content delivery',
      results: [
        '40% improvement in student performance',
        '60% increase in course completion rates',
        '50% reduction in learning time',
        '95% student satisfaction rate'
      ],
      duration: '9 months',
      teamSize: '16 experts',
      technologies: ['Adaptive Learning', 'Educational AI', 'Content Personalization', 'Learning Analytics'],
      image: '/api/placeholder/600/400',
      featured: false}
  ]

  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description content=Explore our successful projects and case studies showcasing our expertise in AI, cloud solutions, and digital transformation." />
        <meta name="viewport content=width=device-width, initial-scale=1" />
      </Head>
      
      <Layout
        title="Case Studies
        description=Real-world success stories from our technology solutions"
      >
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>
          <div className=container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6>
              <span className=text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Case Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8>
              Discover how we've helped businesses transform their operations with cutting-edge technology solutions
            </p>
            <div className=flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300>
                View All Projects
                <ArrowRight className=ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300>
                Start Your Project
              </button>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className=py-20 bg-white">
          <div className="container mx-auto px-4>
            <div className=text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4>Featured Success Stories</h2>
              <p className=text-xl text-gray-600 max-w-2xl mx-auto">
                Real results from real projects across various industries
              </p>
            </div>
            <div className="space-y-12>
              {caseStudies.filter(study => study.featured).map((study) => (
                <div key={study.id} className=bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex>
                    <div className=md:w-1/2">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-64 md:h-full object-cover
                      />
                    </div>
                    <div className=md:w-1/2 p-8">
                      <div className="flex items-center mb-4>
                        <span className=px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {study.industry}
                        </span>
                        <span className="ml-2 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full>
                          Featured
                        </span>
                      </div>
                      <h3 className=text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                      <p className="text-gray-600 mb-4><strong>Client:</strong> {study.client}</p>
                      
                      <div className=mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2>Challenge:</h4>
                        <p className=text-gray-600 mb-4">{study.challenge}</p>
                        
                        <h4 className="font-semibold text-gray-900 mb-2>Solution:</h4>
                        <p className=text-gray-600 mb-4">{study.solution}</p>
                      </div>

                      <div className="mb-6>
                        <h4 className=font-semibold text-gray-900 mb-3">Results: </h4>
                        <ul className="space-y-2>
                          {study.results.map((result, index) => (
                            <li key={index} className=flex items-center text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className=flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                        <div className="flex items-center>
                          <Clock className=w-4 h-4 mr-1" />
                          {study.duration}
                        </div>
                        <div className="flex items-center>
                          <Users className=w-4 h-4 mr-1" />
                          {study.teamSize}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2>
                        {study.technologies.map((tech, index) => (
                          <span key={index} className=px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies Grid */}
        <section className="py-20 bg-gray-50>
          <div className=container mx-auto px-4">
            <div className="text-center mb-16>
              <h2 className=text-4xl font-bold text-gray-900 mb-4">All Case Studies</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto>
                Comprehensive portfolio of our technology solutions
              </p>
            </div>
            <div className=grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300>
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className=w-full h-48 object-cover"
                  />
                  <div className="p-6>
                    <div className=flex items-center mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full>
                        {study.industry}
                      </span>
                      {study.featured && (
                        <span className=ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2>{study.title}</h3>
                    <p className=text-gray-600 mb-4">{study.client}</p>
                    <p className="text-gray-600 text-sm mb-4>{study.solution}</p>
                    
                    <div className=flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center>
                        <Clock className=w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center>
                        <Users className=w-4 h-4 mr-1" />
                        {study.teamSize}
                      </div>
                    </div>

                    <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300>
                      View Details
                      <ArrowRight className=ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white>
          <div className=container mx-auto px-4">
            <div className="text-center mb-16>
              <h2 className=text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto>
                Numbers that speak to our success and client satisfaction
              </p>
            </div>
            <div className=grid md:grid-cols-4 gap-8">
              <div className="text-center>
                <div className=w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600 />
                </div>
                <h3 className=text-3xl font-bold text-gray-900 mb-2">150+</h3>
                <p className="text-gray-600>Projects Completed</p>
              </div>
              <div className=text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4>
                  <Award className=w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2>98%</h3>
                <p className=text-gray-600">Client Satisfaction</p>
              </div>
              <div className="text-center>
                <div className=w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-600 />
                </div>
                <h3 className=text-3xl font-bold text-gray-900 mb-2">25+</h3>
                <p className="text-gray-600>Countries Served</p>
              </div>
              <div className=text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4>
                  <Zap className=w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2>50%</h3>
                <p className=text-gray-600">Average Cost Reduction</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white>
          <div className=container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6>Ready to Start Your Success Story?</h2>
            <p className=text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a solution that delivers real results
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover: bg-gray-100 transition-all duration-300>
              Start Your Project
              <ArrowRight className=ml-2 w-5 h-5" />
            </button>
          </div>
        </section>
      </Layout>
    </>
  )};

export default CaseStudies;