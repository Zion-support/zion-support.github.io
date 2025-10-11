'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Clock } from 'lucide-react'

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'TechCorp AI Transformation',
      description: 'How we helped TechCorp implement AI solutions that increased efficiency by 300%',
      industry: 'Technology',
      duration: '6 months',
      results: [
        '300% increase in operational efficiency',
        '50% reduction in manual processes',
        '$2M in cost savings annually',
        '95% customer satisfaction rate'
      ],
      challenge: 'TechCorp was struggling with manual processes and needed to scale their operations while maintaining quality.',
      solution: 'We implemented a comprehensive AI solution including automated workflows, predictive analytics, and intelligent customer support.',
      testimonial: {
        quote: 'Zion Tech Group transformed our entire operation. The AI solutions they implemented exceeded our expectations.',
        author: 'Sarah Johnson',
        role: 'CTO, TechCorp'
      }
    },
    {
      title: 'FinanceFlow Cloud Migration',
      description: 'Seamless migration to cloud infrastructure resulting in 99.9% uptime and 60% cost reduction',
      industry: 'Finance',
      duration: '4 months',
      results: [
        '99.9% uptime achieved',
        '60% reduction in infrastructure costs',
        '3x faster application performance',
        'Zero downtime during migration'
      ],
      challenge: 'FinanceFlow needed to migrate their legacy systems to the cloud while maintaining compliance and security.',
      solution: 'We designed and executed a comprehensive cloud migration strategy using AWS, ensuring zero downtime and full compliance.',
      testimonial: {
        quote: 'The migration was flawless. We achieved better performance at a fraction of the cost.',
        author: 'Michael Chen',
        role: 'VP Engineering, FinanceFlow'
      }
    },
    {
      title: 'RetailMax Data Analytics',
      description: 'Advanced analytics implementation that improved decision-making and increased revenue by 40%',
      industry: 'Retail',
      duration: '3 months',
      results: [
        '40% increase in revenue',
        '85% improvement in decision-making speed',
        'Real-time analytics dashboard',
        'Predictive inventory management'
      ],
      challenge: 'RetailMax needed better insights into customer behavior and inventory management to optimize their operations.',
      solution: 'We built a comprehensive data analytics platform with real-time dashboards and predictive analytics capabilities.',
      testimonial: {
        quote: 'The analytics platform gave us insights we never had before. Revenue increased significantly.',
        author: 'Emily Rodriguez',
        role: 'CEO, RetailMax'
      }
    }
  ]

  const stats = [
    { value: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-8 h-8 text-green-400" /> },
    { value: '99.9%', label: 'Client Satisfaction', icon: <Star className="w-8 h-8 text-yellow-400" /> },
    { value: '300%', label: 'Average ROI', icon: <TrendingUp className="w-8 h-8 text-blue-400" /> },
    { value: '24/7', label: 'Support Available', icon: <Clock className="w-8 h-8 text-purple-400" /> }
  ]

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
              Discover how we've helped businesses transform their operations with AI and IT solutions.
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
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
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
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="cyber-card">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{study.title}</h2>
                    <p className="text-gray-300 mb-6">{study.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-2">Challenge</h3>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-2">Solution</h3>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Results</h3>
                    <ul className="space-y-3 mb-8">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-white/5 rounded-lg p-6">
                      <blockquote className="text-gray-300 italic mb-4">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-white">{study.testimonial.author}</div>
                        <div className="text-cyan-400 text-sm">{study.testimonial.role}</div>
                      </div>
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your Project
            </button>
            <button className="cyber-button-secondary">
              <Users className="w-5 h-5 mr-2" />
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CaseStudiesPage