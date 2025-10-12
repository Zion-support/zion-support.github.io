import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Wifi, Smartphone, Cpu, Zap } from 'lucide-react'

export default function FiveGImplementationPage() {
  const services = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: '5G Network Design',
      description: 'Design and implement 5G network infrastructure for optimal performance.',
      pricing: 'Starting at $50,000'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: 'Mobile App Optimization',
      description: 'Optimize mobile applications for 5G network capabilities.',
      pricing: 'Starting at $15,000'
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      title: 'Edge Computing',
      description: 'Implement edge computing solutions for 5G networks.',
      pricing: 'Starting at $25,000'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'IoT Integration',
      description: 'Integrate IoT devices with 5G networks for enhanced connectivity.',
      pricing: 'Starting at $20,000'
    }
  ]

  return (
    <>
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Professional 5G implementation services including network design, mobile optimization, edge computing, and IoT integration." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Implementation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Implement cutting-edge 5G technology to transform your business operations.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our 5G Implementation Services</h2>
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