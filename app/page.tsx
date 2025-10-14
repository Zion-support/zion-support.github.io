import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Shield, Zap, Users, Target, ArrowRight } from 'lucide-react';
import PerformanceMonitor from './components/Performance Monitor';

function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions for modern businesses",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Streamline operations with intelligent automation systems",
    },
    {
      icon: Users,
      title: "IT Services",
      description: "Comprehensive IT support and infrastructure management",
    },
    {
      icon: Target,
      title: "Digital Transformation",
      description: "Transform your business with innovative digital solutions",
    }
  ];

  return (
    <>
      <PerformanceMoni tor />
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leadingprovider of AI solutions, cybersecurity, and IT services for modern businesses" />
        <meta name="keywords" content="AIsolutions, cybersecurity, IT services, digital transformation, automation" />
        <metaproperty="og:title" content="ZionTech Group - Advanced AI and IT Solutions" />
        <metaproperty="og:description" content="Leadingprovider of AI solutions, cybersecurity, and IT services for modern businesses" />
        <metaproperty="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ZionTech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leadingprovider of AI solutions, cybersecurity, and IT services for modern businesses" />
        <linkrel="canonical" href="https://zion.app" />
      </Helmet>
      <div className="min-h-screenbg-slate-900 text-white">
        {/* Hero Section */}
        <div className="container mx-autopx-4 py-2 0">
          <div className="text-centermb-16">
            <h1 className="text-6 xlfont-boldmb-6 bg-gradient-to-r from-purple-4 0 0 to-cyan-4 0 0 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2 xltext-gray-30 0 max-w-4 xl mx-auto mb-8">
              Advanced AI and IT Solutions for the Digital Future
            </p>
            <div className="flexflex-colsm:flex-rowgap-4 justify-center">
              <Link to="/services" 
                className="inline-flexitems-centerbg-gradient-to-rfrom-purple-6 00 to-cyan-6 00 hover:from-purple-7 00 hover:to-cyan-7 0 0 text-white font-bold py-4 px-8 rounded-lg transition-all duration-3 0 0"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5h-5" />
              </Link>
              <Link to="/contact" 
                className="inline-flexitems-centerborder-2 border-purple-5 00 hover:bg-purple-5 0 0 text-white font-bold py-4 px-8 rounded-lg transition-all duration-3 0 0"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3gap-8 mb-1 6">
            {features.map((feature, index) => (
              <divkey={index} 
                className="bg-slate-800 p-6rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                style={{ animation Delay: `${index * 100}ms` }}
              >
                <feature.icon className="w-12 h-12text-purple-400 mb-4" />
                <h3 className="text-xlfont-semiboldmb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-centerbg-gradient-to-rfrom-purple-900/50 to-cyan-900/50 p-12 rounded-lg">
            <h2 className="text-3 xlfont-boldmb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you implement cutting-edge solutions
            </p>
            <Link to="/contact" 
              className="inline-flexitems-centerbg-gradient-to-rfrom-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
  }

export default HomePage;