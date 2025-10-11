'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Building2, Shield, Zap } from 'lucide-react'

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration: string;
  team: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: [
        '75% reduction in response time',
        '60% decrease in support costs',
        '90% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'Global Finance Inc.',
      industry: 'Financial Services',
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing operational costs.',
      solution: 'Migrated entire infrastructure to AWS with microservices architecture and automated scaling.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster deployment cycles',
        'Enhanced security compliance'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Overhaul for Healthcare',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Vulnerable legacy systems and compliance requirements for patient data protection.',
      solution: 'Comprehensive security assessment and implementation of zero-trust architecture with advanced threat detection.',
      results: [
        '100% compliance with HIPAA regulations',
        'Zero security incidents in 12 months',
        '40% improvement in threat detection',
        'Streamlined compliance reporting'
      ],
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      duration: '4 months',
      team: '10 specialists'
    },
    {
      id: '4',
      title: 'IoT Platform for Smart Manufacturing',
      client: 'Industrial Dynamics',
      industry: 'Manufacturing',
      challenge: 'Manual monitoring processes and lack of real-time insights into production efficiency.',
      solution: 'Developed comprehensive IoT platform with real-time monitoring, predictive analytics, and automated alerts.',
      results: [
        '30% increase in production efficiency',
        '25% reduction in equipment downtime',
        'Real-time production insights',
        'Predictive maintenance capabilities'
      ],
      image: '/images/case-studies/iot-manufacturing.jpg',
      duration: '5 months',
      team: '15 specialists'
    },
    {
      id: '5',
      title: 'Data Analytics Dashboard for E-commerce',
      client: 'RetailMax',
      industry: 'E-commerce',
      challenge: 'Lack of actionable insights from customer data and poor inventory management.',
      solution: 'Built comprehensive analytics platform with real-time dashboards and machine learning-powered recommendations.',
      results: [
        '35% increase in conversion rates',
        '20% improvement in inventory turnover',
        'Real-time business insights',
        'Personalized customer experiences'
      ],
      image: '/images/case-studies/data-analytics-ecommerce.jpg',
      duration: '4 months',
      team: '9 specialists'
    },
    {
      id: '6',
      title: 'DevOps Transformation for Software Company',
      client: 'CodeCraft Solutions',
      industry: 'Software Development',
      challenge: 'Slow deployment cycles and frequent production issues affecting customer satisfaction.',
      solution: 'Implemented CI/CD pipelines, containerization, and automated testing with monitoring and alerting.',
      results: [
        '80% faster deployment cycles',
        '90% reduction in production incidents',
        'Automated testing coverage',
        'Improved team collaboration'
      ],
      image: '/images/case-studies/devops-transformation.jpg',
      duration: '3 months',
      team: '7 specialists'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: Award },
    { label: 'Cost Savings', value: '$2M+', icon: TrendingUp },
    { label: 'Team Members', value: '50+', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <div className="flex items-center text-sm text-gray-400">
                      <Building2 className="w-4 h-4 mr-1" />
                      <span>{study.client}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-600">
                    <div className="flex items-center text-sm text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{study.team}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Zap className="w-4 h-4 mr-2" />
                      <span>{study.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our proven AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Shield className="w-5 h-5 mr-2" />
              Start Your Project
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              View All Services
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CaseStudiesPage