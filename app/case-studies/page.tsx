'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Building2, Shield, Zap, ExternalLink } from 'lucide-react'

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
      title: 'Cloud Infrastructure Migration & Optimization',
      client: 'Global Finance Inc.',
      industry: 'Financial Services',
      challenge: 'Legacy on-premises infrastructure causing scalability issues and high maintenance costs.',
      solution: 'Migrated to AWS cloud with microservices architecture and implemented automated scaling.',
      results: [
        '40% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '50% faster application deployment',
        'Improved security compliance'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Predictive Analytics for E-commerce',
      client: 'RetailMax',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment affecting revenue growth.',
      solution: 'Developed AI-powered recommendation engine and personalized shopping experience.',
      results: [
        '35% increase in conversion rates',
        '25% reduction in cart abandonment',
        '40% boost in average order value',
        'Improved customer retention'
      ],
      image: '/images/case-studies/ecommerce-ai.jpg',
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      challenge: 'Security vulnerabilities and HIPAA compliance requirements.',
      solution: 'Implemented comprehensive security framework with threat detection and compliance monitoring.',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security breaches',
        'Automated threat detection',
        'Reduced security incidents by 95%'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '5 months',
      team: '10 specialists'
    },
    {
      id: '5',
      title: 'Data Analytics & Business Intelligence',
      client: 'Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Lack of data-driven insights affecting operational efficiency and decision making.',
      solution: 'Built comprehensive data analytics platform with real-time dashboards and predictive models.',
      results: [
        '30% improvement in operational efficiency',
        'Real-time data visualization',
        'Predictive maintenance capabilities',
        'Data-driven decision making'
      ],
      image: '/images/case-studies/data-analytics.jpg',
      duration: '4 months',
      team: '7 specialists'
    },
    {
      id: '6',
      title: 'Mobile App Development & Integration',
      client: 'Logistics Pro',
      industry: 'Logistics',
      challenge: 'Outdated mobile application affecting driver productivity and customer experience.',
      solution: 'Developed modern cross-platform mobile app with real-time tracking and AI optimization.',
      results: [
        '50% improvement in driver productivity',
        'Enhanced customer experience',
        'Real-time tracking capabilities',
        'Reduced delivery time by 20%'
      ],
      image: '/images/case-studies/mobile-app.jpg',
      duration: '3 months',
      team: '5 specialists'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent neon-text-advanced" data-text="Studies">Studies</span>
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
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text-enhanced">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text-enhanced">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              Real results from real clients across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="holographic-card-advanced cyber-card-enhanced rounded-2xl p-8 hover-quantum">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-cyan-400 font-medium">{study.industry}</span>
                    <span className="text-sm text-gray-400">{study.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{study.client}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {study.team}
                  </span>
                  <span className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    {study.industry}
                  </span>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center quantum-button">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text-enhanced">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center quantum-button">
              <Zap className="w-5 h-5 mr-2" />
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
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