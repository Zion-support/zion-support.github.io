'use client'
import React from 'react'
import { ArrowRight, CheckCircle, Users, Award, Globe } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

interface CaseStudy {
  id: string
  title: string
  description: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  image: string
  client: string
  team: string
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered E-commerce Optimization',
      description: 'Transformed a major e-commerce platform with AI-driven personalization and recommendation engine.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor user engagement due to generic product recommendations.',
      solution: 'Implemented advanced AI algorithms for personalized product recommendations and dynamic pricing.',
      results: [
        'Increased conversion rates by 45%',
        'Improved user engagement by 60%',
        'Reduced bounce rate by 35%',
        'Generated $2M additional revenue'
      ],
      image: '/case-study-1.jpg',
      client: 'TechRetail Inc.',
      team: 'AI Engineering Team'
    },
    {
      id: '2',
      title: 'Healthcare AI Diagnostic System',
      description: 'Developed an AI-powered diagnostic system for early disease detection in medical imaging.',
      industry: 'Healthcare',
      challenge: 'Manual image analysis was time-consuming and prone to human error.',
      solution: 'Created a deep learning model trained on thousands of medical images for accurate diagnosis.',
      results: [
        'Reduced diagnosis time by 70%',
        'Achieved 95% accuracy rate',
        'Processed 10,000+ images daily',
        'Saved 500+ hours monthly'
      ],
      image: '/case-study-2.jpg',
      client: 'MedTech Solutions',
      team: 'AI Research Team'
    },
    {
      id: '3',
      title: 'Financial Fraud Detection System',
      description: 'Built a real-time fraud detection system using machine learning for a major bank.',
      industry: 'Fintech',
      challenge: 'High false positive rates in existing fraud detection systems.',
      solution: 'Developed an ensemble learning model with real-time processing capabilities.',
      results: [
        'Reduced false positives by 80%',
        'Detected 99.5% of fraudulent transactions',
        'Processed 1M+ transactions daily',
        'Saved $50M in prevented fraud'
      ],
      image: '/case-study-3.jpg',
      client: 'GlobalBank Corp.',
      team: 'Data Science Team'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="neon-text">Case Studies</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their operations with our AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="cyber-card p-6 group hover:scale-105 transition-transform">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                  <Globe className="h-16 w-16 text-cyan-400" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-700 pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {study.team}
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-2" />
                      {study.client}
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
          <div className="cyber-card hologram-card p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CaseStudiesPage
