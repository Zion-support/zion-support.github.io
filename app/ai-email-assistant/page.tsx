import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react'
=======
import { ArrowRight, Mail, Brain, Zap, Users, BarChart3, Shield } from 'lucide-react'

export default function AIEmailAssistantPage() {
  const features = [
    {
      icon: <Mail className="w-8 h-8 text-blue-500" />,
      title: 'Smart Email Management',
      description: 'Automatically organize, prioritize, and respond to emails with AI-powered intelligence.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Responses',
      description: 'Generate contextual, professional email responses that match your communication style.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Instant Processing',
      description: 'Process and respond to emails in real-time, never miss an important message again.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Team Collaboration',
      description: 'Share email insights and collaborate with your team on important communications.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Email Analytics',
      description: 'Track email performance, response times, and engagement metrics.'
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security with end-to-end encryption and privacy protection.'
    }
  ]
>>>>>>> cursor/fix-errors-and-merge-to-main-33db

export default function AiemailassistantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Ai Email Assistant - Zion Tech Group</title>
        <meta name="description" content="Professional ai email assistant services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Ai Email Assistant</h1>
        <p className="text-lg text-gray-300 mb-8">Professional ai email assistant services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}