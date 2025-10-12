'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function HomePage() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance standards, and advanced threat protection.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses with 24/7 technical assistance.'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Advanced data processing and analytics to drive informed business decisions.'
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." />
      </Helmet>
      
      <Navigation />
      
      <main>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          </div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                Advanced <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">AI & IT Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up">
                Transform your business with cutting-edge artificial intelligence, cloud computing, and digital transformation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                <a
                  href="https://ziontechgroup.com/contact"
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://ziontechgroup.com/services"
                  className="group border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver innovative technology solutions that drive growth and efficiency for businesses worldwide.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border border-white/20 relative overflow-hidden">
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 ml-3 group-hover:text-purple-600 transition-colors duration-300">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                  </div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
