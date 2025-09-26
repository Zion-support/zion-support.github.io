import React, { useState, useEffect, useRef } from 'react';
import './App.css';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  price: string;
  features: string[];
}

const features: Feature[] = [
  {
    id: '1',
    title: 'AI-Powered Solutions',
    description: 'Advanced artificial intelligence and machine learning services for modern businesses',
    icon: '🤖',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: '2',
    title: 'Blockchain Technology',
    description: 'Secure, decentralized solutions using cutting-edge blockchain technology',
    icon: '⛓️',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: '3',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions with enterprise-grade security and performance',
    icon: '☁️',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    id: '4',
    title: 'Quantum Computing',
    description: 'Next-generation quantum computing solutions for complex problem solving',
    icon: '⚛️',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: '5',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets',
    icon: '🔒',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: '6',
    title: 'Data Analytics',
    description: 'Advanced data analytics and business intelligence solutions',
    icon: '📊',
    gradient: 'from-pink-500 to-rose-500'
  }
];

const services: Service[] = [
  {
    id: '1',
    name: 'AI Development',
    description: 'Custom AI solutions tailored to your business needs',
    icon: '🤖',
    price: 'Starting at $5,000',
    features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  },
  {
    id: '2',
    name: 'Blockchain Solutions',
    description: 'Secure and scalable blockchain implementations',
    icon: '⛓️',
    price: 'Starting at $10,000',
    features: ['Smart Contracts', 'DeFi Platforms', 'NFT Marketplaces', 'Token Development']
  },
  {
    id: '3',
    name: 'Cloud Migration',
    description: 'Seamless migration to cloud infrastructure',
    icon: '☁️',
    price: 'Starting at $3,000',
    features: ['AWS/Azure/GCP Setup', 'Data Migration', 'Security Implementation', '24/7 Monitoring']
  }
];

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Enhanced Header with Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Zion Tech Group
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['home', 'services', 'features', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
                {currentTime.toLocaleTimeString()}
              </span>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-2 space-y-2">
              {['home', 'services', 'features', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left capitalize py-2 px-3 rounded-md transition-colors ${
                    activeSection === section
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Enhanced Hero Section */}
        <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Building the future with cutting-edge technology solutions. 
                We specialize in AI, blockchain, quantum computing, and enterprise software development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section id="features" className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Core Technologies
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Cutting-edge solutions powered by the latest technologies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="group bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                    {service.price}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Delivering exceptional results for businesses worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-blue-100 text-lg">Projects Completed</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  200+
                </div>
                <div className="text-blue-100 text-lg">Happy Clients</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-blue-100 text-lg">Support Available</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  99%
                </div>
                <div className="text-blue-100 text-lg">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Let&apos;s discuss how we can help transform your business with cutting-edge technology
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Get in Touch
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <span className="text-blue-600 dark:text-blue-400 mr-3">📧</span>
                        <span className="text-gray-600 dark:text-gray-300">hello@ziontechgroup.com</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-blue-600 dark:text-blue-400 mr-3">📞</span>
                        <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-blue-600 dark:text-blue-400 mr-3">📍</span>
                        <span className="text-gray-600 dark:text-gray-300">San Francisco, CA</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Schedule a Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">
                Building the future with cutting-edge technology solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blockchain Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud Migration</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Zion Tech Group. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Built with React, Next.js, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

