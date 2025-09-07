import React, { JSX } from 'react';
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

export default function App(): JSX.Element {
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
      description: 'Scalable cloud infrastructure and migration services. Move your business to the cloud with confidence.',
      icon: '☁️',
      features: ['AWS Migration', 'Azure Solutions', 'Google Cloud', 'Hybrid Cloud'],
    },
    {
      title: 'Blockchain',
      description: 'Revolutionary blockchain technology solutions. Build secure, transparent, and decentralized applications.',
      icon: '⛓️',
      features: ['Smart Contracts', 'DeFi', 'NFTs', 'Web3 Development'],
    },
  ];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ParticleBackground />
      <ScrollToTop />
      <Header />
      
      <main className="relative z-10">
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Welcome to <span className="text-cyan-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-slide-up">
              Transforming businesses through innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <BenefitsSection />
        <HowItWorksSection />
        
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                />
              ))}
            </div>
          </div>
        </section>

        <TestimonialCarousel />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
      <ChatAssistant />
    </div>
  );
}
