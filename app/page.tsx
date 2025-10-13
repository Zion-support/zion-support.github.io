'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './components/SEOHead';
import { 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  SparklesIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  CogIcon,
  BeakerIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Zion Tech Group - Advanced AI and IT Solutions",
    "description": "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide.",
    "url": "https://ziontechgroup.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo192.png",
      "description": "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "sameAs": [
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup",
        "https://github.com/ziontechgroup"
      ]
    }
  };

  const services = [
    {
      name: "AI-Powered Solutions",
      description: "Advanced artificial intelligence services including machine learning, natural language processing, computer vision, and predictive analytics.",
      icon: CpuChipIcon,
      link: "/ai-solutions",
      features: ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics"],
      price: "Starting at $299/month"
    },
    {
      name: "Micro SAAS Services",
      description: "Specialized software-as-a-service solutions designed for specific business needs with rapid deployment and scalability.",
      icon: RocketLaunchIcon,
      link: "/micro-saas-solutions",
      features: ["Rapid Deployment", "Scalable Architecture", "Custom Solutions", "24/7 Support"],
      price: "Starting at $99/month"
    },
    {
      name: "IT Infrastructure",
      description: "Comprehensive IT services including cloud migration, network security, system administration, and digital transformation.",
      icon: CloudIcon,
      link: "/it-solutions",
      features: ["Cloud Migration", "Network Security", "System Admin", "Digital Transformation"],
      price: "Starting at $199/month"
    },
    {
      name: "5G Technology",
      description: "Next-generation 5G solutions including network infrastructure, IoT integration, and smart city implementations.",
      icon: GlobeAltIcon,
      link: "/5g-solutions",
      features: ["Network Infrastructure", "IoT Integration", "Smart Cities", "Edge Computing"],
      price: "Starting at $499/month"
    },
    {
      name: "Cybersecurity Suite",
      description: "Advanced security solutions including threat detection, vulnerability assessment, and compliance management.",
      icon: ShieldCheckIcon,
      link: "/ai-cybersecurity-suite",
      features: ["Threat Detection", "Vulnerability Assessment", "Compliance", "24/7 Monitoring"],
      price: "Starting at $399/month"
    },
    {
      name: "Data Analytics",
      description: "Comprehensive data analysis services with real-time insights, business intelligence, and predictive modeling.",
      icon: ChartBarIcon,
      link: "/ai-data-analytics",
      features: ["Real-time Insights", "Business Intelligence", "Predictive Modeling", "Custom Dashboards"],
      price: "Starting at $249/month"
    }
  ];

  const newInnovativeServices = [
    {
      name: "AI Quantum Computing Simulator",
      description: "Revolutionary quantum computing simulation platform for complex problem solving and optimization.",
      icon: BeakerIcon,
      link: "/ai-quantum-computing-simulator",
      price: "$1,999/month",
      category: "AI Innovation"
    },
    {
      name: "Neural Interface Development",
      description: "Cutting-edge brain-computer interface solutions for medical and research applications.",
      icon: CommandLineIcon,
      link: "/ai-neural-interface",
      price: "$2,499/month",
      category: "AI Innovation"
    },
    {
      name: "Space Mission Optimizer",
      description: "AI-powered space mission planning and optimization for aerospace companies.",
      icon: RocketLaunchIcon,
      link: "/ai-space-mission-optimizer",
      price: "$3,999/month",
      category: "AI Innovation"
    },
    {
      name: "Telepathic Interface Pro",
      description: "Advanced thought-to-text and mind-controlled computing interfaces.",
      icon: LightBulbIcon,
      link: "/ai-telepathic-interface",
      price: "$1,799/month",
      category: "AI Innovation"
    },
    {
      name: "Holographic Workspace",
      description: "3D holographic collaboration and workspace solutions for remote teams.",
      icon: SparklesIcon,
      link: "/ai-holographic-workspace",
      price: "$2,299/month",
      category: "AI Innovation"
    },
    {
      name: "Climate Prediction Engine",
      description: "Advanced AI climate modeling and weather prediction for environmental planning.",
      icon: GlobeAltIcon,
      link: "/ai-climate-prediction-engine",
      price: "$1,599/month",
      category: "AI Innovation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide."
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced AI & IT Solutions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                for the Future
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence, micro SAAS solutions, 
              and comprehensive IT services. We deliver innovation that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/solutions"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Explore Solutions
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{service.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                  <Link
                    to={service.link}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    Learn More
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Services Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary AI Innovations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI solutions that push the boundaries of what's possible in technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newInnovativeServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <service.icon className="h-8 w-8 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <span className="text-sm text-purple-300">{service.category}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-purple-300">{service.price}</span>
                  <Link
                    to={service.link}
                    className="text-purple-300 hover:text-white font-medium flex items-center"
                  >
                    Explore
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our experts to discuss your specific needs and discover how our solutions can drive your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <PhoneIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <EnvelopeIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPinIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Start Your Project Today
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}