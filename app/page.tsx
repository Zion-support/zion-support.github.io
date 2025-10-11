'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Globe, Code, BarChart, Target, Cpu, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Phone, Mail, MapPin } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const aiServices = [
    { name: 'AI Analytics', description: 'Advanced data insights and business intelligence', icon: BarChart },
    { name: 'AI Automation', description: 'Streamline workflows with intelligent automation', icon: Zap },
    { name: 'AI Chatbot', description: 'Intelligent conversational AI solutions', icon: MessageCircle },
    { name: 'AI CRM', description: 'Customer relationship management powered by AI', icon: Users },
    { name: 'AI Cybersecurity', description: 'Advanced threat protection and security', icon: Shield },
    { name: 'AI Healthcare', description: 'Medical AI solutions and diagnostics', icon: Heart }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', description: 'Scalable cloud solutions and migration', icon: Cloud },
    { name: 'Web Development', description: 'Modern web applications and platforms', icon: Globe },
    { name: 'Mobile Development', description: 'iOS and Android app development', icon: Smartphone },
    { name: 'API Development', description: 'RESTful and GraphQL API solutions', icon: Code },
    { name: 'Database Management', description: 'Optimized database solutions', icon: Database },
    { name: 'Cybersecurity', description: 'Comprehensive security solutions', icon: Lock }
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-8 h-8 text-cyan-400" /> },
    { value: '99.9%', label: 'Uptime Guarantee', icon: <TrendingUp className="w-8 h-8 text-green-400" /> },
    { value: '24/7', label: 'Support Available', icon: <Settings className="w-8 h-8 text-purple-400" /> },
    { value: '50+', label: 'Expert Team Members', icon: <Users className="w-8 h-8 text-orange-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, digital transformation, enterprise software, cloud computing, cybersecurity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Transform Your Business with
                  <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI & IT Solutions
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
                  and digital transformation services. Transform your business with cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Get Started Today
                  </button>
                  <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Services Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  AI Services
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Comprehensive AI solutions designed to transform your business operations
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiServices.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                    <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-300">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IT Services Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  IT Services
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Complete IT solutions to modernize your infrastructure and drive business growth
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {itServices.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                    <service.icon className="w-12 h-12 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-300">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss how our AI and IT solutions can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
                <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Our Work
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
