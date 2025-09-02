import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Clock, Award, Building } from 'lucide-react';

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Healthcare AI Platform Transformation',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Legacy system modernization and AI integration for patient data management',
      solution: 'Implemented cloud-native AI platform with real-time analytics and predictive modeling',
      results: [
        '40% reduction in patient data processing time',
        '60% improvement in diagnostic accuracy',
        '99.9% system uptime achieved',
        '$2M annual cost savings'
      ],
      technologies: ['AI/ML', 'Cloud Computing', 'Data Analytics', 'Security'],
      duration: '6 months',
      teamSize: '12 developers',
      image: '/case-studies/healthcare-ai.jpg'
    },
    {
      id: 2,
      title: 'Financial Services Digital Transformation',
      client: 'FinSecure Bank',
      industry: 'Financial Services',
      challenge: 'Digital banking platform modernization and fraud detection enhancement',
      solution: 'Built comprehensive digital banking platform with advanced AI-powered fraud detection',
      results: [
        '50% increase in mobile banking adoption',
        '85% reduction in fraudulent transactions',
        '3x faster loan processing',
        '99.95% system reliability'
      ],
      technologies: ['Blockchain', 'AI/ML', 'Mobile Development', 'Security'],
      duration: '8 months',
      teamSize: '15 developers',
      image: '/case-studies/financial-services.jpg'
    },
    {
      id: 3,
      title: 'Manufacturing IoT Integration',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Smart factory implementation with IoT sensors and predictive maintenance',
      solution: 'Deployed comprehensive IoT platform with real-time monitoring and predictive analytics',
      results: [
        '30% reduction in equipment downtime',
        '25% increase in production efficiency',
        '50% decrease in maintenance costs',
        'Real-time quality monitoring'
      ],
      technologies: ['IoT', 'Data Analytics', 'Cloud Computing', 'AI/ML'],
      duration: '10 months',
      teamSize: '18 developers',
      image: '/case-studies/manufacturing-iot.jpg'
    },
    {
      id: 4,
      title: 'E-commerce Platform Scaling',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'High-traffic e-commerce platform scaling and performance optimization',
      solution: 'Implemented microservices architecture with auto-scaling and CDN optimization',
      results: [
        '10x increase in concurrent users',
        '90% reduction in page load times',
        '99.9% uptime during peak seasons',
        '300% increase in conversion rates'
      ],
      technologies: ['Microservices', 'Cloud Computing', 'CDN', 'Performance Optimization'],
      duration: '4 months',
      teamSize: '10 developers',
      image: '/case-studies/ecommerce-scaling.jpg'
    },
    {
      id: 5,
      title: 'Government Data Analytics Platform',
      client: 'CitySmart Government',
      industry: 'Government',
      challenge: 'Citizen data management and analytics for smart city initiatives',
      solution: 'Built secure data analytics platform with citizen engagement features',
      results: [
        '70% improvement in data processing speed',
        '95% citizen satisfaction rating',
        '40% reduction in service response time',
        'Complete data security compliance'
      ],
      technologies: ['Data Analytics', 'Security', 'Cloud Computing', 'AI/ML'],
      duration: '12 months',
      teamSize: '20 developers',
      image: '/case-studies/government-analytics.jpg'
    },
    {
      id: 6,
      title: 'EdTech Learning Platform',
      client: 'EduTech Innovations',
      industry: 'Education',
      challenge: 'Scalable online learning platform with AI-powered personalization',
      solution: 'Developed comprehensive learning management system with AI tutoring and analytics',
      results: [
        '80% improvement in student engagement',
        '45% increase in course completion rates',
        '60% reduction in administrative overhead',
        'Personalized learning paths for 50K+ students'
      ],
      technologies: ['AI/ML', 'Cloud Computing', 'Mobile Development', 'Analytics'],
      duration: '9 months',
      teamSize: '14 developers',
      image: '/case-studies/edtech-platform.jpg'
    }
  ];

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'Healthcare':
        return '🏥';
      case 'Financial Services':
        return '🏦';
      case 'Manufacturing':
        return '🏭';
      case 'Retail':
        return '🛒';
      case 'Government':
        return '🏛️';
      case 'Education':
        return '🎓';
      default:
        return '🏢';
    }
  };

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore real-world success stories and case studies of Zion Tech Group's technology solutions across various industries."
      keywords="case studies, success stories, client projects, technology solutions, digital transformation, AI implementation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Award className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
              <p className="text-xl text-gray-200 mb-8">
                Discover how we've helped businesses across industries transform their operations 
                with cutting-edge technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {caseStudies.map((study) => (
                  <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    {/* Header */}
                    <div className="p-8 border-b border-gray-200">
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">{getIndustryIcon(study.industry)}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Building className="w-4 h-4 mr-1" />
                              {study.client}
                            </div>
                            <span>•</span>
                            <span>{study.industry}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Challenge & Solution */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600 mb-4">{study.challenge}</p>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>

                      {/* Results */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {study.results.map((result, index) => (
                            <div key={index} className="flex items-center">
                              <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {study.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {study.teamSize}
                        </div>
                      </div>

                      {/* Read More Button */}
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Success Story?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default CaseStudies;