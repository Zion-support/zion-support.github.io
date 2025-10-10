'use client';

import React from 'react';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Smartphone, 
  Globe, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';

const ServicesPage = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions for automation, prediction, and intelligent decision-making.",
      features: ["Custom AI Models", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      price: "Starting at $5,000/month"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "Serverless Architecture"],
      price: "Starting at $3,000/month"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      features: ["Threat Detection", "Security Audits", "Compliance Management", "Incident Response"],
      price: "Starting at $2,500/month"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our analytics solutions.",
      features: ["Business Intelligence", "Real-time Analytics", "Data Visualization", "Predictive Modeling"],
      price: "Starting at $4,000/month"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Native Apps", "Cross-platform", "UI/UX Design", "App Store Optimization"],
      price: "Starting at $8,000/project"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications with cutting-edge technologies.",
      features: ["React/Next.js", "E-commerce", "Progressive Web Apps", "Performance Optimization"],
      price: "Starting at $6,000/project"
    }
  ];

  return (
    <ErrorBoundary>
      <SEOHead 
        title="Services - Zion Tech Group - AI-Powered Enterprise Solutions"
        description="Comprehensive technology services including AI & Machine Learning, Cloud Solutions, Cybersecurity, Data Analytics, Mobile Development, and Web Development."
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-cyan-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth 
                and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white ml-4">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:transform group-hover:scale-105">
                    Get Started
                    <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help you achieve your business goals. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default ServicesPage;