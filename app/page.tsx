import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Users } from 'lucide-react';
import { Target } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PerformanceMonitor from './components/PerformanceMonitor';

function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions for modern businesses"
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
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Advanced AI and IT Solutions for the Digital Future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center border-2 border-purple-500 hover:bg-purple-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
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
      </div>
    </>
  );
}

const page = React.lazy(() => import('./page'));
export default page;
