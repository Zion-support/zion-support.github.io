import React, { useState } from 'react';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import ServiceCard from './src/components/ServiceCard';
import TestimonialCarousel from './src/components/TestimonialCarousel';
import ContactSection from './src/components/ContactSection';
import BenefitsSection from './src/components/BenefitsSection';
import HowItWorksSection from './src/components/HowItWorksSection';
import FaqSection from './src/components/FaqSection';
import ChatAssistant from './src/components/ChatAssistant';
import ScrollToTop from './src/components/ScrollToTop';
import ParticleBackground from './src/components/ParticleBackground';

export default function App(): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for your business needs. From machine learning to natural language processing.',
      icon: '🤖',
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT services and infrastructure management. Keep your systems running smoothly and securely.',
      icon: '💻',
      features: ['System Administration', 'Network Security', 'Cloud Migration', '24/7 Support'],
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services. Modernize your infrastructure with our cloud expertise.',
      icon: '☁️',
      features: ['AWS/Azure/GCP', 'DevOps', 'Containerization', 'Auto-scaling'],
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from evolving threats and ensure compliance.',
      icon: '🔒',
      features: ['Threat Detection', 'Compliance', 'Penetration Testing', 'Security Audits'],
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
      icon: '📊',
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Custom Dashboards'],
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes and improve efficiency.',
      icon: '🚀',
      features: ['Process Automation', 'Workflow Optimization', 'Digital Strategy', 'Change Management'],
    },
  ];

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <ParticleBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}AI-Powered Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Zion Tech Group delivers enterprise-grade AI, micro SaaS, and IT services that accelerate your digital transformation. 
            Build faster, scale smarter, and innovate with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              View Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact Section */}
      <ContactSection />

      <Footer />
      <ChatAssistant />
      <ScrollToTop />
    </div>
  );
}
