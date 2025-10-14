import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Brain, Shield, Zap, Users, Target, ArrowRight } from 'lucide-react'
import PerformanceMonitor from './components/PerformanceMonitor'
function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Cutting edge artificial intelligence solutions for modern businesses"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets"
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Streamline operations with intelligent automation systems"
    },
    {
      icon: Users,
      title: "IT Services",
      description: "Comprehensive IT support and infrastructure management"
    },
    {
      icon: Target,
      title: "Digital Transformation",
      description: "Transform your business with innovative digital solutions"
    }
  ]
  return (
    <>
      <Helmet>
        <title>Zion Tech Group Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI solutions, cybersecurity, and IT services for modern businesses" />
        <meta name="keywords" content="AI solutions, cybersecurity, IT services, digital transformation, automation" />
        <meta property="og:title" content="Zion Tech Group Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI solutions, cybersecurity, and IT services for modern businesses" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI solutions, cybersecurity, and IT services for modern businesses" />
        <link rel="canonical" href="https://zion.app" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Advanced AI and IT Solutions
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  for Modern Businesses
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Leading provider of cutting-edge AI solutions, cybersecurity, and IT services 
                to help your business thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  We deliver exceptional results with cutting-edge technology and expert knowledge.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI and IT solutions can help your business succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage
