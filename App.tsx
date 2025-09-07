import React from 'react';
import ServiceCard from './src/components/ServiceCard';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import ScrollToTop from './src/components/ScrollToTop';
import ParticleBackground from './src/components/ParticleBackground';
import BenefitsSection from './src/components/BenefitsSection';
import HowItWorksSection from './src/components/HowItWorksSection';
import TestimonialCarousel from './src/components/TestimonialCarousel';
import FaqSection from './src/components/FaqSection';
import ContactSection from './src/components/ContactSection';
import ChatAssistant from './src/components/ChatAssistant';

const services = [
  {
    title: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence solutions for your business needs. From machine learning to natural language processing.',
    icon: '🤖',
    features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
    pricing: 'Starting at $5,000/month',
    link: '/ai-solutions'
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT services and infrastructure management. Keep your systems running smoothly and securely.',
    icon: '💻',
    features: ['System Administration', 'Network Security', 'Cloud Migration', '24/7 Support'],
    pricing: 'Starting at $2,500/month',
    link: '/it-services'
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive web applications built with the latest technologies. From concept to deployment.',
    icon: '🌐',
    features: ['React/Next.js', 'Node.js', 'Database Design', 'API Development']
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android. Delivering exceptional user experiences.',
    icon: '📱',
    features: ['React Native', 'Flutter', 'iOS Development', 'Android Development']
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services. Optimize your business with cloud technology.',
    icon: '☁️',
    features: ['AWS', 'Azure', 'Google Cloud', 'DevOps']
  },
  {
    title: 'Consulting',
    description: 'Strategic technology consulting to help your business grow and innovate in the digital age.',
    icon: '💡',
    features: ['Digital Strategy', 'Technology Assessment', 'Process Optimization', 'Training']
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">Zion Tech Group</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-500 hover:text-gray-900">Services</a>
              <a href="#about" className="text-gray-500 hover:text-gray-900">About</a>
              <a href="#contact" className="text-gray-500 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business
            thrive in the digital age. From AI and machine learning to web
            development and cloud solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading technology solutions for the modern world
            </p>
            <p className="text-gray-400">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}