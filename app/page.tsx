'use client';

<<<<<<< HEAD
import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
=======
import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Shield, Code, BarChart, Zap, CheckCircle } from 'lucide-react';

const ServiceCardSkeleton = () => (
  <div className="cyber-card hologram-card p-4 sm:p-6 animate-pulse">
    <div className="h-12 bg-gray-700 rounded mb-4"></div>
    <div className="h-6 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded mb-4"></div>
    <div className="h-4 bg-gray-700 rounded"></div>
  </div>
);

export default function AppPage() {
  const services = [
    {
      title: "AI-Powered Applications",
      description: "Intelligent mobile and web apps with machine learning capabilities",
      icon: Brain,
      features: ["Machine Learning Integration", "Natural Language Processing", "Predictive Analytics", "Automated Decision Making"],
      href: "/ai-services"
    },
    {
      title: "Cloud-Native Solutions",
      description: "Scalable applications built for modern cloud infrastructure",
      icon: Cloud,
      features: ["Microservices Architecture", "Auto-scaling", "Container Orchestration", "Multi-cloud Deployment"],
      href: "/cloud-solutions"
    },
    {
      title: "Security-First Development",
      description: "Applications with enterprise-grade security built-in",
      icon: Shield,
      features: ["End-to-end Encryption", "Zero-trust Architecture", "Compliance Ready", "Threat Detection"],
      href: "/security-solutions"
    },
    {
      title: "Custom Development",
      description: "Tailored solutions for your specific business needs",
      icon: Code,
      features: ["Full-stack Development", "API Integration", "Database Design", "Performance Optimization"],
      href: "/custom-development"
    },
    {
      title: "Analytics & Insights",
      description: "Data-driven applications with real-time analytics",
      icon: BarChart,
      features: ["Real-time Dashboards", "Business Intelligence", "Data Visualization", "Custom Reporting"],
      href: "/analytics-solutions"
    },
    {
      title: "Mobile Excellence",
      description: "Native and cross-platform mobile applications",
      icon: Zap,
      features: ["iOS & Android Native", "React Native", "Progressive Web Apps", "Offline Capabilities"],
      href: "/mobile-solutions"
    }
  ];

>>>>>>> c49a5866b96df712989fea82cf9d4d13cbfac255
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">

        <div className="container mx-auto px-4 py-20">

          <div className="text-center mb-16">

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl text-emerald-400 max-w-3xl mx-auto mb-8">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
<<<<<<< HEAD
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Leading provider of enterprise AI solutions, cloud services, and digital transformation services.
              Transform your business with our cutting-edge technology and achieve unprecedented growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

              <a
                href="/contact"
                className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>📞</span>
                +1 302 464 0950
              </a>
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Demo
              </Link>
>>>>>>> c49a5866b96df712989fea82cf9d4d13cbfac255
            </div>
          </div>

<<<<<<< HEAD
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

            <div className="bg-slate-800 p-6 rounded-lg">

              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">

                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Services</h3>
              <p className="text-gray-300 mb-4">Advanced artificial intelligence solutions for enterprise applications</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Machine Learning
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Natural Language Processing
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Computer Vision
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  AI Automation
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">

              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">

                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Services</h3>
              <p className="text-gray-300 mb-4">Comprehensive cloud solutions for modern enterprise infrastructure</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Cloud Migration
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Infrastructure Setup
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Cost Optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Security Configuration
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">

              <div className="w-12 h-12 text-emerald-400 mb-4 flex items-center justify-center bg-emerald-500/20 rounded-lg">

                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">Advanced security solutions with threat detection and prevention</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Threat Detection
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Vulnerability Assessment
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Security Monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-4 h-4 text-emerald-400 mr-2">✓</span>
                  Incident Response
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">

            <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

              <div className="bg-slate-800 p-6 rounded-lg">

                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg">

                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg">

                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                <a
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
=======
      {/* Services Section */}
      <section className="mb-16" aria-labelledby="services-heading">
        <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
          Our Services
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-4 sm:p-6 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/services"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-300">Optimized performance and rapid deployment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Secure & Reliable</h3>
                <p className="text-gray-300">Enterprise-grade security and 99.9% uptime</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI-Powered</h3>
                <p className="text-gray-300">Cutting-edge AI and machine learning integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="cyber-card hologram-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's build the next generation of applications together. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
>>>>>>> c49a5866b96df712989fea82cf9d4d13cbfac255
  );
};

export default HomePage;