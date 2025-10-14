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
        <div className="containermx-auto px-4 py-2 0">
          <div className="text-center mb-1 6">
            <h1 className="text-6 xlfont-bold mb-6 bg-gradient-to-r from-purple-4 0 0 to-cyan-4 0 0 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2 xltext-gray-3 0 0 max-w-4xl mx-auto mb-8">
              Advanced AI and IT Solutions for the Digital Future
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
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xlfont-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
  )
          </div>
        </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our technology solutions can drive your success.
          </p>
          <Link 
            to="/contact" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20bg-slate-900 particles">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xlmd:text-5xl font-bold text-white mb-6 gradient-text">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Solutions */}
            <div className="groupneon-card p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow">
              <div className="w-16h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating cyber-glow">
                <CpuChipIcon className="w-8h-8 text-white" />
              </div>
              <h3 className="text-2xlfont-bold text-white mb-4 holographic-text">AI Solutions</h3>
              <p className="text-gray-300mb-6">
                Advanced artificial intelligence services including machine learning, 
                natural language processing, and predictive analytics.
              </p>
              <Link to="/ai-solutions" className="text-purple-400hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                Learn More <ArrowRightIcon className="w-4h-4" />
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className="groupneon-card p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform cyber-glow">
                <ShieldCheckIcon className="w-8h-8 text-white" />
              </div>
              <h3 className="text-2xlfont-bold text-white mb-4 holographic-text">Cybersecurity</h3>
              <p className="text-gray-300mb-6">
                Comprehensive security solutions to protect your digital assets, 
                data, and infrastructure from evolving threats.
              </p>
              <Link to="/cybersecurity" className="text-cyan-400hover:text-cyan-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                Learn More <ArrowRightIcon className="w-4h-4" />
              </Link>
            </div>

            {/* Cloud Infrastructure */}
            <div className="groupneon-card p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform cyber-glow">
                <CloudIcon className="w-8h-8 text-white" />
              </div>
              <h3 className="text-2xlfont-bold text-white mb-4 holographic-text">Cloud Infrastructure</h3>
              <p className="text-gray-300mb-6">
                Scalable cloud solutions and infrastructure management to optimize 
                performance and reduce operational costs.
              </p>
              <Link to="/cloud-solutions" className="text-green-400hover:text-green-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                Learn More <ArrowRightIcon className="w-4h-4" />
              </Link>
            </div>

            {/* Digital Transformation */}
            <div className="groupneon-card p-8 rounded-xl border border-slate-600 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform cyber-glow">
                <ChartBarIcon className="w-8h-8 text-white" />
              </div>
              <h3 className="text-2xlfont-bold text-white mb-4 holographic-text">Digital Transformation</h3>
              <p className="text-gray-300mb-6">
                Strategic digital transformation services to modernize your business 
                processes and enhance customer experiences.
              </p>
              <Link to="/digital-transformation" className="text-yellow-400hover:text-yellow-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                Learn More <ArrowRightIcon className="w-4h-4" />
              </Link>
            </div>

            {/* Micro SaaS */}
            <div className="groupneon-card p-8 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform cyber-glow">
                <GlobeAltIcon className="w-8h-8 text-white" />
              </div>
              <h3 className="text-2xlfont-bold text-white mb-4 holographic-text">Micro SaaS</h3>
              <p className="text-gray-300mb-6">
                Custom micro SaaS solutions designed to solve specific business 
                challenges with scalable, cost-effective applications.
              </p>
              <Link to="/micro-saas" className="text-pink-400hover:text-pink-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                Learn More <ArrowRightIcon className="w-4h-4" />
              </Link>
            </div>

            {/* 5G Solutions */}
            <div className="groupneon-card p-8 rounded-xl border border-slate-600 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform cyber-glow">
                <GlobeAltIcon className="w-8h-8 text-white" />
              </div>
              <h3 className="text-2xlfont-bold text-white mb-4 holographic-text">5G Solutions</h3>
              <p className="text-gray-300mb-6">
                Next-generation 5G technology solutions for enhanced connectivity, 
                IoT applications, and ultra-low latency services.
              </p>
              <Link to="/5g-solutions" className="text-indigo-400hover:text-indigo-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                Learn More <ArrowRightIcon className="w-4h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xlmx-auto text-center">
            <h2 className="text-4xlmd:text-5xl font-bold text-white mb-8">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              With over 4 years of experience in cutting-edge technology solutions, 
              we've helped businesses across various industries transform their operations 
              and achieve unprecedented growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
</>
  );
};

export default HomePage;
