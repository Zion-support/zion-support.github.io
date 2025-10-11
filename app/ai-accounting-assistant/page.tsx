<<<<<<< HEAD
'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import {Calculator, BarChart, FileText, Shield, Zap, CheckCircle}}from 'lucide-react';
const AIAccountingAssistantPage: React.FC = () => {,
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Calculator, BarChart, FileText, Shield, Zap, CheckCircle } from 'lucide-react'
const AIAccountingAssistantPage: React.FC = () => {
>>>>>>> origin/main
  const features = [
<<<<<<< HEAD
    { icon: Calculator, title: 'Automated Bookkeeping', description: 'AI-powered automated bookkeeping and transaction categorization.' ,},
    {icon: BarChart, title: 'Financial Analytics', description: 'Advanced financial reporting and analytics with AI insights.' ,},
    {icon: FileText, title: 'Tax Preparation', description: 'Automated tax preparation and compliance management.' ,},
    {icon: Shield, title: 'Audit Trail', description: 'Complete audit trail and compliance tracking for financial records.' ,},
    {icon: Zap, title: 'Invoice Processing', description: 'Automated invoice processing and payment tracking.' ,},
    {icon: CheckCircle, title: 'Compliance', description: 'Ensure compliance with accounting standards and regulations.' ,}]
  return(<React.Fragment>)</React.Fragment>
      <Helmet />
=======
    { icon: Calculator, title: 'Automated Bookkeeping', description: 'AI-powered automated bookkeeping and transaction categorization.' },
    { icon: BarChart, title: 'Financial Analytics', description: 'Advanced financial reporting and analytics with AI insights.' },
    { icon: FileText, title: 'Tax Preparation', description: 'Automated tax preparation and compliance management.' },
    { icon: Shield, title: 'Audit Trail', description: 'Complete audit trail and compliance tracking for financial records.' },
    { icon: Zap, title: 'Invoice Processing', description: 'Automated invoice processing and payment tracking.' },
    { icon: CheckCircle, title: 'Compliance', description: 'Ensure compliance with accounting standards and regulations.' }
  ]
  return (
<<<<<<< HEAD
    <>
      <Helmet>
>>>>>>> origin/main
        <title>AI Accounting Assistant | Zion Tech Group - Intelligent Financial Management</title>
=======
    <React.Fragment>
      </React><Helmet>
        </Helmet><title>AI Accounting Assistant | Zion Tech Group - Intelligent Financial Management</title>
>>>>>>> origin/main
        <meta name="description" content="Streamline your accounting with AI-powered financial management tools. Automated bookkeeping, tax preparation, and financial analytics." />
        <meta name="keywords" content="AI accounting, financial management, bookkeeping automation, tax preparation, accounting software" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">AI Accounting Assistant</h1>,
=======
        </div><section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Accounting Assistant</h1>
>>>>>>> origin/main
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Streamline your accounting with AI-powered financial management tools.</p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
              {features.map((feature, index) => (
<<<<<<< HEAD
                <div key={index}className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover: border-cyan-400/50 transition-all duration-300">,</div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
=======
                </div><div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  </div><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    </div><feature.icon className="w-8 h-8 text-white" />
>>>>>>> origin/main
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description</p>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default AIAccountingAssistantPage
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Accounting Assistant
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Streamline your accounting with AI-powered financial management tools.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}
                  <p className="text-gray-300">{feature.description}
              ))}
  )
}
export default AIAccountingAssistantPage</div></div></div></div></div></div></p></p></h1></h3></section>
