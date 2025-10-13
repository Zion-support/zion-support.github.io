'use client';
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import {Helmet}}from 'react-helmet-async';
import {FileText, Search, Shield, Zap, BarChart, CheckCircle}}from 'lucide-react';
const LegalDocumentManagerPage: React.FC = () => {,
=======
import { Helmet } from 'react-helmet-async';
import { FileText, Search, Shield, Zap, BarChart, CheckCircle } from 'lucide-react';
=======
import { Helmet } from 'react-helmet-async'
import { FileText, Search, Shield, Zap, BarChart, CheckCircle } from 'lucide-react'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
const LegalDocumentManagerPage: React.FC = () => {
  const features = [
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
    { icon: FileText, title: 'Document Management', description: 'Organized storage and management of legal documents with smart categorization.' ,},
    {icon: Search, title: 'AI Document Search', description: 'Powerful AI-powered search across all legal documents and contracts.' ,},
    {icon: Shield, title: 'Compliance Tracking', description: 'Automated compliance monitoring and regulatory requirement tracking.' ,},
    {icon: Zap, title: 'Contract Analysis', description: 'AI-powered contract analysis and risk assessment.' ,},
    {icon: BarChart, title: 'Legal Analytics', description: 'Comprehensive analytics on legal matters and case outcomes.' ,},
    {icon: CheckCircle, title: 'Version Control', description: 'Complete version control and audit trail for all legal documents.' ,}]
  return(<React.Fragment>)</React.Fragment>
      <Helmet />
    <>
      <Helmet>
        <title>Legal Document Manager | Zion Tech Group - Intelligent Legal Document Management</title>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">Legal Document Manager</h1>,
                <div key={index}className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover: border-cyan-400/50 transition-all duration-300">,</div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
<<<<<<< HEAD
=======
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}
export default LegalDocumentManagerPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
