'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { TrendingUp, DollarSign, BarChart3, Users, ArrowRight, Download } from 'lucide-react'

const InvestorsPage: React.FC = () => {
  const financialHighlights = [
    {
      metric: 'Revenue Growth',
      value: '150%',
      description: 'Year-over-year revenue growth'
    },
    {
      metric: 'Client Retention',
      value: '95%',
      description: 'Client satisfaction and retention rate'
    },
    {
      metric: 'Market Expansion',
      value: '25+',
      description: 'Countries served globally'
    },
    {
      metric: 'Team Growth',
      value: '200%',
      description: 'Team expansion in the last year'
    }
  ]

  const milestones = [
    {
      year: '2024',
      title: 'Series A Funding',
      description: 'Successfully raised $10M in Series A funding to accelerate AI product development'
    },
    {
      year: '2023',
      title: 'Market Expansion',
      description: 'Expanded services to 15 new countries and launched 5 new AI products'
    },
    {
      year: '2022',
      title: 'Product Launch',
      description: 'Launched our flagship AI analytics platform with 1000+ enterprise clients'
    },
    {
      year: '2021',
      title: 'Company Founded',
      description: 'Zion Tech Group was founded with a vision to democratize AI technology'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Investors - Zion Tech Group | Investor Relations</title>
        <meta name="description" content="Learn about Zion Tech Group's financial performance, growth strategy, and investment opportunities." />
        <meta name="keywords" content="investors, financial performance, investment, growth, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Investor Relations
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Discover our financial performance, growth strategy, and investment opportunities 
              as we continue to lead the AI and IT solutions market.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Financial Highlights</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Key metrics demonstrating our strong performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financialHighlights.map((highlight, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{highlight.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{highlight.metric}</div>
                <div className="text-gray-300 text-sm">{highlight.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Company Milestones</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Our journey of growth and innovation
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Investment Opportunities</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Join us in shaping the future of AI and IT solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <TrendingUp className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Growth Potential</h3>
              <p className="text-gray-300">The AI market is projected to reach $1.8 trillion by 2030, presenting significant growth opportunities.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <BarChart3 className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Proven Track Record</h3>
              <p className="text-gray-300">Consistent revenue growth and strong client retention demonstrate our market position.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Our experienced team of AI and IT professionals drives innovation and excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Interested in Investing?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Contact our investor relations team to learn more about investment opportunities 
                and access our latest financial reports.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Reports
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
                  Contact IR Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InvestorsPage