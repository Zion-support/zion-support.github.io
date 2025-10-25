'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'

const TutorialsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Tutorials - Zion Tech Group"
        description="Learn how to use our AI and IT solutions with comprehensive tutorials and guides."
        keywords="tutorials, guides, learning, AI tutorials, IT tutorials, how-to"
        canonicalUrl="https://ziontechgroup.com/tutorials"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tutorials & Learning Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master our AI and IT solutions with step-by-step tutorials, guides, and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">AI Solutions Tutorials</h3>
              <p className="text-gray-400 mb-4">
                Learn how to implement and use our AI-powered solutions effectively.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Getting Started with AI Chatbot Builder</li>
                <li>• AI Document Processing Best Practices</li>
                <li>• Voice Assistant Integration Guide</li>
                <li>• Fraud Detection Setup Tutorial</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">IT Solutions Guides</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive guides for our IT infrastructure and development services.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Cloud Infrastructure Setup</li>
                <li>• Web Development Best Practices</li>
                <li>• Database Management Tutorials</li>
                <li>• Security Implementation Guide</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Micro SaaS Tutorials</h3>
              <p className="text-gray-400 mb-4">
                Step-by-step guides for using our micro SaaS applications.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Task Manager Pro Setup</li>
                <li>• Analytics Dashboard Configuration</li>
                <li>• Customer Support Hub Tutorial</li>
                <li>• Inventory Manager Guide</li>
              </ul>
            </div>
          </div>
export default function Page() {
  return (
    <div>
      <Head>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Professional tutorials services and solutions by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Tutorials
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional tutorials services and solutions by Zion Tech Group.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              Our tutorials services are currently under development. Contact us to learn more about our upcoming services.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}