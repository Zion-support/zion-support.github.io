'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, DollarSign, Users, BarChart3, Download, Mail, Calendar, FileText, ExternalLink } from 'lucide-react'
import Layout from '../layout'

const InvestorsPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2024')

  const years = ['2024', '2023', '2022', '2021']

  const keyMetrics = [
    {
      title: 'Revenue Growth',
      value: '150%',
      description: 'Year-over-year revenue growth',
      icon: <TrendingUp className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Customer Base',
      value: '10,000+',
      description: 'Active customers worldwide',
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'ARR',
      value: '$50M',
      description: 'Annual Recurring Revenue',
      icon: <DollarSign className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Market Share',
      value: '15%',
      description: 'AI services market share',
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />
    }
  ]

  const financialHighlights = [
    {
      quarter: 'Q4 2024',
      revenue: '$15.2M',
      growth: '+25%',
      customers: '2,500',
      highlights: [
        'Record quarterly revenue',
        'Expanded enterprise client base',
        'Launched new AI platform',
        'International expansion'
      ]
    },
    {
      quarter: 'Q3 2024',
      revenue: '$12.1M',
      growth: '+18%',
      customers: '2,200',
      highlights: [
        'Strong enterprise adoption',
        'Product innovation milestones',
        'Strategic partnerships',
        'Operational efficiency gains'
      ]
    },
    {
      quarter: 'Q2 2024',
      revenue: '$10.3M',
      growth: '+22%',
      customers: '1,900',
      highlights: [
        'AI services expansion',
        'Customer retention improvement',
        'Team growth',
        'Technology investments'
      ]
    }
  ]

  const documents = [
    {
      title: 'Q4 2024 Earnings Report',
      type: 'PDF',
      size: '2.4 MB',
      date: '2024-01-15',
      icon: <FileText className="w-6 h-6 text-red-500" />
    },
    {
      title: 'Annual Report 2023',
      type: 'PDF',
      size: '8.7 MB',
      date: '2024-01-01',
      icon: <FileText className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Investor Presentation',
      type: 'PDF',
      size: '5.2 MB',
      date: '2024-01-10',
      icon: <FileText className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Financial Statements',
      type: 'Excel',
      size: '1.8 MB',
      date: '2024-01-12',
      icon: <FileText className="w-6 h-6 text-purple-500" />
    }
  ]

  const upcomingEvents = [
    {
      title: 'Q1 2025 Earnings Call',
      date: '2025-04-15',
      time: '2:00 PM EST',
      type: 'Earnings Call',
      description: 'First quarter 2025 financial results and business update'
    },
    {
      title: 'AI Innovation Summit',
      date: '2025-03-20',
      time: '9:00 AM PST',
      type: 'Conference',
      description: 'Showcasing our latest AI technologies and market opportunities'
    },
    {
      title: 'Investor Day 2025',
      date: '2025-05-10',
      time: '10:00 AM EST',
      type: 'Investor Event',
      description: 'Comprehensive business strategy and growth outlook presentation'
    }
  ]

  return (
    <Layout 
      title="Investors - Zion Tech Group"
      description="Investor relations, financial information, and corporate updates for Zion Tech Group shareholders and potential investors."
      keywords="investors, financial results, earnings, shareholder, investment, corporate governance"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Investor <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Relations</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay informed about our financial performance, strategic initiatives, and growth opportunities 
            as we continue to lead the AI and technology revolution.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Performance Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our strong financial performance and market position drive continued growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="flex justify-center mb-4">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.title}</h3>
                <p className="text-gray-300 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Financial Highlights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recent quarterly performance and key business metrics.
            </p>
          </div>

          {/* Year Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 rounded-lg p-1">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    selectedYear === year
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {financialHighlights.map((quarter, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{quarter.quarter}</h3>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {quarter.growth}
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Revenue</span>
                    <span className="text-white font-semibold">{quarter.revenue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Customers</span>
                    <span className="text-white font-semibold">{quarter.customers}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {quarter.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Investor Documents
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our latest financial reports, presentations, and regulatory filings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {doc.icon}
                  <div className="ml-3">
                    <div className="text-sm text-gray-400">{doc.type}</div>
                    <div className="text-sm text-gray-400">{doc.size}</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{doc.title}</h3>
                <div className="text-sm text-gray-400 mb-4">{doc.date}</div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join us for upcoming investor events and earnings calls.
            </p>
          </div>
          
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        {event.type}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Investor Inquiries
            </h2>
            <p className="text-xl text-white/90 mb-6">
              Have questions about our financial performance or investment opportunities? 
              Our investor relations team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Contact IR Team
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default InvestorsPage