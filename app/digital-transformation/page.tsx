import React from 'react'
import { Helmet } from 'react-helmet-async'
import { RefreshCw, Target, Users, Zap } from 'lucide-react'

export default function DigitalTransformationPage() {
  const services = [
    {
      icon: <RefreshCw className="w-8 h-8 text-blue-500" />,
      title: 'Process Automation',
      description: 'Automate business processes to improve efficiency and reduce costs.',
      pricing: 'Starting at $5,000'
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: 'Digital Strategy',
      description: 'Develop comprehensive digital transformation strategies.',
      pricing: 'Starting at $10,000'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Change Management',
      description: 'Support your team through digital transformation initiatives.',
      pricing: 'Starting at $3,000/month'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Technology Integration',
      description: 'Integrate new technologies into your existing systems.',
      pricing: 'Starting at $7,500'
    }
  ]

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our digital transformation services. Process automation, strategy development, and technology integration." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Transformation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive digital transformation services.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Digital Transformation Services</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="text-lg font-semibold text-blue-600">
                    {service.pricing}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}