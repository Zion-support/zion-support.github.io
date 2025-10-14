import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Shield, Zap, Users, Target, ArrowRight } from 'lucide-react';
import PerformanceMonitor from './components/PerformanceMonitor';

function HomePage() => {
  const features = []
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
      <PerformanceMonitor />
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI solutions, cybersecurity, and IT services for modern businesses" />
        <meta name="keywords" content="AI solutions, cybersecurity, IT services, digital transformation, automation" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI solutions, cybersecurity, and IT services for modern businesses" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI solutions, cybersecurity, and IT services for modern businesses" />
        <link rel="canonical" href="https://zion.app" />
      </Helmet>
      <div className="min-h-screen bg-slate-9 0 0 text-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-2 0">
          <div className="text-center mb-1 6">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-4 0 0 to-cyan-4 0 0 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-gray-3 0 0 max-w-4xl mx-auto mb-8">
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
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-1 6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-slate-8 00 p-6 rounded-lg border border-slate-7 00 hover:border-purple-5 00 transition-all duration-3 00 transform hover:scale-1 0 5 hover:shadow-lg hover:shadow-purple-5 0 0/2 0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-1 2 h-1 2 text-purple-4 0 0 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-3 0 0">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-9 0 0/5 0 to-cyan-9 0 0/5 0 p-1 2 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-3 0 0 mb-8">
              Let our experts help you implement cutting-edge solutions
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-purple-6 00 to-cyan-6 00 hover:from-purple-7 00 hover:to-cyan-7 0 0 text-white font-bold py-4 px-8 rounded-lg transition-all duration-3 0 0"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;