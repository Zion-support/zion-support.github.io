import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Sparkles, Phone, Mail, MapPin } from 'lucide-react'
import { NeonText, NeonCard, NeonButton } from '../components/NeonEffects'
import { allServices } from '../data/services'

export default function AIServicesPage() {
  const aiServices = allServices.filter(service => service.category === 'ai')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Advanced AI services by Zion Tech Group. Machine learning, natural language processing, computer vision, and more." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <NeonText intensity="high">AI Services</NeonText>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced artificial intelligence solutions to automate processes, gain insights, and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <NeonCard key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 text-sm font-semibold bg-cyan-400/10 px-2 py-1 rounded-full">
                    AI SERVICES
                  </span>
                  <span className="text-green-400 text-sm font-semibold">
                    {service.price}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <Link 
                    to={service.path}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center text-sm"
                  >
                    Learn More 
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                  <a 
                    href={`tel:${service.contactInfo.phone}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </NeonCard>
          ))}
        </div>
      </div>
    </div>
  )
}