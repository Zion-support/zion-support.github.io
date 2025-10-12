'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Brain, Target } from 'lucide-react'

export default function AIServicesPage() {
  const services = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'AI Business Intelligence',
      description: 'Transform your data into actionable insights with AI-powered analytics and reporting.',
      benefits: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Data visualization']
    },
    {
      icon: <Brain className="w-6 h-6 text-green-500" />,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our advanced AI content generation tools.',
      benefits: ['Blog posts', 'Marketing copy', 'Technical documentation', 'Social media content']
    },
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      title: 'AI Process Automation',
      description: 'Automate complex business processes with intelligent AI solutions.',
      benefits: ['Workflow automation', 'Task optimization', 'Error reduction', 'Cost savings']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including business intelligence, content generation, process automation, and more. Transform your business with our AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, business intelligence, content generation, process automation, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive artificial intelligence solutions to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              {service.icon}
              <h3 className="text-xl font-semibold text-white mb-3 mt-4">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI services help you automate processes, gain insights, and drive innovation.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}