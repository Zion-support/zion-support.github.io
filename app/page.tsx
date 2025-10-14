import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Brain, Shield, Zap, Users, Target, ArrowRight } from 'lucide-react'
import Performance Monitor from './components/Performance Monitor'






function Home Page() {
  const features = [
    {
      title: "Service 1"
      description: "Description 1"
    }
    {
      title: "Service 2"
      description: "Description 2"
    }
  ]
  return (
    <>
      <div>
      <Performance Monitor />
      <Helmet>
        <title>Zion Tech Group - Advanced A I and I T Solutions</title>
        <meta name="description" content="Leading provider of A I solutions, cybersecurity, and I T services for modern businesses" />
        <meta name="keywords" content="A I solutions, cybersecurity, I T services, digital transformation, automation" />
        <meta property="og:title" content="Zion Tech Group - Advanced A I and I T Solutions" />
        <meta property="og:description" content="Leading provider of A I solutions, cybersecurity, and I T services for modern businesses" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced A I and I T Solutions" />
        <meta name="twitter:description" content="Leading provider of A I solutions, cybersecurity, and I T services for modern businesses" />
        <link rel="canonical" href="https://zion.app" />
      </Helmet>
      <div className="min-h-screen bg-slate-9 0 0 text-white">
        
        {/* Hero Section */}
  )
        <div className="containermx-auto px-4 py-20">
        
          <div className="text-center mb-1 6">
        
            <h1>
          
              Zion Tech Group
            </h1>
            <p>
          
              Advanced A I and I T Solutions for the Digital Future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
              <Link 
                to="/services" 
                className="inline-flex items-center bg-gradient-to-r from-purple-6 00 to-cyan-6 00 hover:from-purple-7 00 hover:to-cyan-7 0 0 text-white font-bold py-4 px-8 rounded-lg transition-all duration-3 0 0"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center border-2 border-purple-5 00 hover:bg-purple-5 0 0 text-white font-bold py-4 px-8 rounded-lg transition-all duration-3 0 0"
              >
                Get Started
              </Link>
            </div>

          {/* Features Grid */}
  )
          <div className="gridmd:grid-cols-2 lg:grid-cols-3 gap-8 mb-1 6">
        
            {features.map((feature, index) => (
              <div 
                key={index}
  )
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                style={{ animation Delay: `${index * 100}ms` }}
  )
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
  )
          </div>

          {/* CT A Section */}
  )
          <div className="text-centerbg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-12 rounded-lg">
        
            <h2 className="text-3xlfont-bold mb-4">Ready to Transform Your Business?</h2>
            <p>
          
              Let our experts help you implement cutting-edge solutions
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
      </div>
    </>
  )
  }
  )
export default Home;; Page