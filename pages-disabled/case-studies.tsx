import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ArrowRight, TrendingUp, Users, Clock, Award, Target, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Healthcare AI Platform Transformation',
      client: 'Regional Medical Center',
      industry: 'Healthcare',
      challenge: 'Manual patient data processing and delayed diagnosis workflows',
      solution: 'AI-powered diagnostic platform with automated data processing',
      results: [
        { metric: '85%', description: 'Reduction in diagnosis time' },
        { metric: '60%', description: 'Improvement in accuracy' },
        { metric: '40%', description: 'Cost savings' }
      ],
      technologies: ['AI/ML', 'Cloud Computing', 'Data Analytics'],
      duration: '6 months',
      team: '12 specialists',
      image: '/case-studies/healthcare-ai.jpg',
      featured: true;
},
    {
      id: 2,
      title: 'E-commerce Platform Modernization',
      client: 'Retail Chain',
      industry: 'Retail',
      challenge: 'Legacy system limitations and poor customer experience',
      solution: 'Modern e-commerce platform with AI recommendations',
      results: [
        { metric: '150%', description: 'Increase in online sales' },
        { metric: '70%', description: 'Faster page load times' },
        { metric: '90%', description: 'Customer satisfaction improvement' }
      ],
      technologies: ['React', 'Node.js', 'AI/ML', 'Cloud'],
      duration: '8 months',
      team: '15 specialists',
      image: '/case-studies/ecommerce.jpg',
      featured: false;
},
    {
      id: 3,
      title: 'Financial Services Digital Transformation',
      client: 'Regional Bank',
      industry: 'Finance',
      challenge: 'Outdated banking systems and compliance requirements',
      solution: 'Digital banking platform with advanced security',
      results: [
        { metric: '200%', description: 'Increase in digital transactions' },
        { metric: '50%', description: 'Reduction in operational costs' },
        { metric: '100%', description: 'Compliance achievement' }
      ],
      technologies: ['Blockchain', 'Security', 'Cloud', 'Mobile'],
      duration: '10 months',
      team: '20 specialists',
      image: '/case-studies/finance.jpg',
      featured: false;
},
    {
      id: 4,
      title: 'Manufacturing IoT Integration',
      client: 'Industrial Manufacturer',
      industry: 'Manufacturing',
      challenge: 'Manual production monitoring and inefficiencies',
      solution: 'IoT-enabled smart manufacturing system',
      results: [
        { metric: '75%', description: 'Improvement in production efficiency' },
        { metric: '80%', description: 'Reduction in downtime' },
        { metric: '30%', description: 'Energy savings' }
      ],
      technologies: ['IoT', 'AI/ML', 'Cloud', 'Analytics'],
      duration: '7 months',
      team: '18 specialists',
      image: '/case-studies/manufacturing.jpg',
      featured: false;
},
    {
      id: 5,
      title: 'Education Platform Development',
      client: 'University System',
      industry: 'Education',
      challenge: 'Fragmented learning management systems',
      solution: 'Unified AI-powered learning platform',
      results: [
        { metric: '120%', description: 'Increase in student engagement' },
        { metric: '65%', description: 'Improvement in learning outcomes' },
        { metric: '45%', description: 'Reduction in administrative workload' }
      ],
      technologies: ['AI/ML', 'Cloud', 'Mobile', 'Analytics'],
      duration: '9 months',
      team: '14 specialists',
      image: '/case-studies/education.jpg',
      featured: false;
},
    {
      id: 6,
      title: 'Government Services Digitalization',
      client: 'City Government',
      industry: 'Government',
      challenge: 'Paper-based processes and citizen service delays',
      solution: 'Digital citizen services platform',
      results: [
        { metric: '90%', description: 'Reduction in processing time' },
        { metric: '85%', description: 'Citizen satisfaction improvement' },
        { metric: '60%', description: 'Cost reduction' }
      ],
      technologies: ['Cloud', 'Security', 'Mobile', 'Analytics'],
      duration: '12 months',
      team: '25 specialists',
      image: '/case-studies/government.jpg',
      featured: false;
}
  ]

  const featuredCase = caseStudies.find(study => study.featured);
  const regularCases = caseStudies.filter(study => !study.featured);

  const stats = [
    { number: '200+', label: 'Projects Completed', icon: TrendingUp },
    { number: '95%', label: 'Client Satisfaction', icon: Award },
    { number: '50+', label: 'Industries Served', icon: Target },
    { number: '24/7', label: 'Support Available', icon: Clock },
  ]

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful digital transformation projects and technology solutions. See how we've helped businesses across industries achieve their goals."
      keywords="case studies, success stories, digital transformation, technology solutions, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations, 
              improve efficiency, and achieve remarkable results through innovative technology solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {featuredCase && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Case Study</h2>
                <div className="w-20 h-1 bg-blue-600"></div>
              </div>
              
              <motion.div
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Award className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-lg font-semibold">Featured Project</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredCase.industry}
                      </span>
                      <span className="text-gray-500 text-sm">Featured</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {featuredCase.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      <strong>Client:</strong> {featuredCase.client}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 mb-4">{featuredCase.challenge}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 mb-4">{featuredCase.solution}</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {featuredCase.results.map((result, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{result.metric}</div>
                          <div className="text-sm text-gray-600">{result.description}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={`/case-studies/${featuredCase.id}`} className="group">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                        View Full Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Case Studies Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">All Case Studies</h2>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularCases.map((study, index) => (
                <motion.div
                  key={study.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Award className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">{study.industry}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {study.challenge}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-lg font-bold text-blue-600">{result.metric}</div>
                          <div className="text-xs text-gray-600">{result.description}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{study.team}</span>
                      </div>
                    </div>
                    
                    <Link href={`/case-studies/${study.id}`} className="group">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                        View Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="group">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/services" className="group">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-medium transition-colors flex items-center gap-2">
                  View Our Services
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default CaseStudies;