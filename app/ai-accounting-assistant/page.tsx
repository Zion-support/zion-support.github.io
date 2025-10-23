'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Calculator, BarChart, FileText, Shield, Zap, CheckCircle } from 'lucide-react'

const AIAccountingAssistantPage: React.FC = () => {
  const features = [
    
    { icon: Calculator, title: 'Automated Bookkeeping', description: 'Streamline your accounting with AI-powered automation.' },
    { icon: BarChart, title: 'Financial Analytics', description: 'Get insights from your financial data with advanced analytics.' },
    { icon: FileText, title: 'Document Processing', description: 'Automatically process invoices, receipts, and financial documents.' },
    { icon: Shield, title: 'Compliance', description: 'Ensure compliance with accounting standards and regulations.' }
  
  ];

  return (
    <>
      <Helmet>
        <title>AI Accounting Assistant | Zion Tech Group - Intelligent Financial Management</title>
        <meta name="description" content="Streamline your accounting with AI-powered financial management tools. Automated bookkeeping, tax preparation, and financial analytics." />
        <meta name="keywords" content="AI accounting, financial management, bookkeeping automation, tax preparation, accounting software" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Accounting Assistant
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Streamline your accounting with AI-powered financial management tools. Automated bookkeeping, tax preparation, and financial analytics.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default AIAccountingAssistantPage