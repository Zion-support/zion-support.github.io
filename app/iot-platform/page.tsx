'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Zap, Wifi, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of IoT devices and systems with intelligent alerting.',
      benefits: ['Continuous monitoring', 'Smart alerts', 'Predictive maintenance']
    },
    {
    }
  ]
  return (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IoT platform provides everything you need to build, deploy, and scale 
              Internet of Things solutions for any industry or use case.
                  ))}
            ))}
      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">IoT Use Cases
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IoT platform supports a wide range of industries and applications, 
              from smart manufacturing to connected cities.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}
                <p className="text-gray-300">{useCase.description}
            ))}
      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our IoT Platform?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of a comprehensive IoT platform designed for scale, 
              security, and performance.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                <h3 className="text-lg font-semibold text-white">{benefit}
            ))}
      {/* CTA Section */}
          <p className="text-xl text-gray-300 mb-8">
            Start building your IoT platform today. Get started with a free consultation 
            and discover how we can help you succeed.
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Schedule Demo
      <Footer />
  )
}
export default PagePage</div></div></div></div></div></div></div></div></div></div></button></p></p></p></p></p></h2></h2></h3></h3></section></section>