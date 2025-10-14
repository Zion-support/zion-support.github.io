import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Shield, Zap, Users, Target, ArrowRight } from 'lucide-react';
import PerformanceMonitor from './components/PerformanceMonitor';

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
      <div className="min-h-screen bg-slate-900text-white">
        {/* Hero Section */}
        <div className="container mx-autopx-4py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-boldmb-6bg-gradient-to-rfrom-purple-400to-cyan-400bg-clip-texttext-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-gray-300max-w-4xlmx-automb-8">
              Advanced AI and IT Solutions for the Digital Future
            </p>
            <div className="flex flex-colsm:flex-rowgap-4justify-center">
              <Link 
                to="/services" 
                className="inline-flex items-centerbg-gradient-to-rfrom-purple-600to-cyan-600hover:from-purple-700hover:to-cyan-700text-whitefont-boldpy-4px-8rounded-lgtransition-allduration-300"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-centerborder-2border-purple-500hover:bg-purple-500text-whitefont-boldpy-4px-8rounded-lgtransition-allduration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2lg:grid-cols-3gap-8mb-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-slate-800 p-6rounded-lgborderborder-slate-700hover:border-purple-500transition-allduration-300transformhover:scale-105hover:shadow-lghover:shadow-purple-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-12 h-12text-purple-400mb-4" />
                <h3 className="text-xl font-semiboldmb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-rfrom-purple-900/50to-cyan-900/50p-12rounded-lg">
            <h2 className="text-3xl font-boldmb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300mb-8">
              Let our experts help you implement cutting-edge solutions
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-centerbg-gradient-to-rfrom-purple-600to-cyan-600hover:from-purple-700hover:to-cyan-700text-whitefont-boldpy-4px-8rounded-lgtransition-allduration-300"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;