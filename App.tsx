import React from 'react';
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
import PromotionalBanner from './src/components/PromotionalBanner';
import ServicesShowcase from './src/components/ServicesShowcase';
import ContentSpotlight from './src/components/ContentSpotlight';

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

  // Enhanced services data for showcase
  const enhancedServices = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for your business needs. From machine learning to natural language processing.',
      icon: '🤖',
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics', 'AI Strategy Consulting'],
      pricing: 'Starting at $5K/mo',
      popular: true
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration',
      description: 'Seamless migration to the cloud with zero downtime. We handle everything from planning to execution.',
      icon: '☁️',
      features: ['AWS/Azure/GCP', 'Zero Downtime Migration', 'Cost Optimization', 'Security Implementation'],
      pricing: 'Custom Quote',
      popular: false
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from evolving threats and ensure compliance.',
      icon: '🔒',
      features: ['Threat Detection', 'Compliance', 'Penetration Testing', 'Security Audits', '24/7 Monitoring'],
      pricing: 'Starting at $3K/mo',
      popular: true
    }
  ];

  // Sample content for spotlight
  const spotlightContent = [
    {
      id: 'genai-transformation',
      title: 'The Generative AI Transformation: How Businesses Are Reinventing Themselves',
      description: 'Discover how leading companies are leveraging generative AI to transform their operations, create new revenue streams, and gain competitive advantages.',
      category: 'AI Innovation',
      publishedAt: '2025-01-22',
      readTime: '12 min read',
      featured: true,
      type: 'blog' as const
    },
    {
      id: 'zero-trust-guide',
      title: 'Zero Trust Implementation Guide: A Practical Approach for 2025',
      description: 'Step-by-step guide to implementing Zero Trust security architecture without disrupting existing workflows or compromising productivity.',
      category: 'Security',
      publishedAt: '2025-01-22',
      readTime: '8 min read',
      featured: true,
      type: 'insight' as const
    },
    {
      id: 'enterprise-ai-automation',
      title: 'Enterprise AI Automation Platform Case Study',
      description: 'How we helped a Fortune 500 manufacturing company save $1.8M annually through AI-powered automation.',
      category: 'Case Study',
      publishedAt: '2025-01-21',
      readTime: '6 min read',
      featured: true,
      type: 'case-study' as const
    },
    {
      id: 'cloud-native-patterns',
      title: 'Cloud-Native Architecture Patterns: Building for Scale and Resilience',
      description: 'Explore essential cloud-native patterns and practices that enable organizations to build scalable, resilient, and maintainable applications.',
      category: 'Cloud Architecture',
      publishedAt: '2025-01-21',
      readTime: '11 min read',
      featured: true,
      type: 'blog' as const
    },
    {
      id: 'ai-workforce-transformation',
      title: 'AI and Workforce Transformation: Preparing for the Future of Work',
      description: 'How AI is reshaping the workplace and what organizations need to do to prepare their workforce for the AI-driven economy.',
      category: 'Business Strategy',
      publishedAt: '2025-01-22',
      readTime: '10 min read',
      featured: true,
      type: 'insight' as const
    },
    {
      id: 'micro-saas-platform',
      title: 'Micro SaaS Platform Development Success Story',
      description: 'How we built a scalable microservices-based SaaS platform that supports 50,000+ concurrent users.',
      category: 'Case Study',
      publishedAt: '2025-01-20',
      readTime: '5 min read',
      featured: true,
      type: 'case-study' as const
    }
  ];

  return (
    <main>
      <ParticleBackground />
      <Header />
      
      {/* Promotional Banner */}
      <PromotionalBanner
        title="🚀 New: AI Automation Platform Launch"
        description="Transform your business operations with our cutting-edge AI automation platform. Limited-time 30% discount for early adopters!"
        ctaText="Get Early Access"
        ctaLink="/services/ai-automation"
        autoHide={false}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Transform Your Business with 
            <span className="text-blue-600"> AI & Technology</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Zion Tech Group delivers cutting-edge AI solutions, micro SaaS platforms, and enterprise IT services to accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Services Showcase */}
      <ServicesShowcase
        services={enhancedServices}
        title="Our Premium Services"
        subtitle="Choose from our comprehensive suite of technology solutions designed to drive your business forward"
      />

      {/* Content Spotlight */}
      <ContentSpotlight
        content={spotlightContent}
        title="Latest Insights & Resources"
        subtitle="Stay ahead with our latest thought leadership, case studies, and practical guides"
        maxItems={6}
      />

      {/* Original Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialCarousel />
      <FaqSection />
      <ContactSection />
      <Footer />
      <ChatAssistant />
      <ScrollToTop />
    </main>
  );
}
