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

<<<<<<< HEAD
<<<<<<< HEAD
export default function App() {
  const services = [
    {
      title: 'AI-Powered Chatbots',
      description: 'Intelligent chatbots that understand context, learn from interactions, and provide 24/7 customer support. Reduce response time by 90%.',
      icon: '🤖',
      features: ['Natural Language Processing', 'Real-time Learning', 'Multi-channel Support', 'CRM Integration'],
      pricing: 'Starting at $299/month',
      link: '/services/ai-chatbot'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with real-time dashboards, predictive analytics, and automated reporting.',
      icon: '📊',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'AI Insights Engine', 'Custom Reporting'],
      pricing: 'Starting at $499/month',
      link: '/services/ai-analytics-dashboard'
    },
    {
      title: 'AI Content Generation',
      description: 'Revolutionary AI platform that creates high-quality articles, marketing copy, social media posts, and more. 10x faster than traditional writing.',
      icon: '✍️',
      features: ['Multi-format Content', 'Brand Voice Consistency', 'SEO Optimization', 'Team Collaboration'],
      pricing: 'Starting at $199/month',
      link: '/services/ai-content-generation'
    },
    {
      title: 'Comprehensive IT Services',
      description: 'End-to-end IT solutions including cloud migration, cybersecurity, DevOps, and 24/7 support. Trusted by 500+ businesses.',
      icon: '💻',
      features: ['Cloud Migration', 'Cybersecurity', 'DevOps & Automation', '24/7 Support'],
      pricing: 'Starting at $3,500/month',
      link: '/services/it-services'
    },
    {
      title: 'Micro SaaS Development',
      description: 'Complete micro SaaS solutions from MVP to scale. We handle everything so you can focus on growing your business.',
      icon: '💼',
      features: ['Product Engineering', 'Growth & Marketing', 'Operations & Reliability', 'Ready-to-Deploy Solutions'],
      pricing: 'Starting at $8,000',
      link: '/services/micro-saas'
    },
    {
      title: 'Cloud Migration & Management',
      description: 'Seamless migration to AWS, Azure, or GCP with ongoing optimization and management. Reduce costs by up to 40%.',
      icon: '☁️',
      features: ['Multi-cloud Strategies', 'Cost Optimization', 'Disaster Recovery', 'Security Implementation'],
      pricing: 'Starting at $2,500/month',
      link: '/services/cloud-services'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your business from evolving threats. SOC2 and HIPAA compliance included.',
      icon: '🔒',
      features: ['Security Assessments', 'Penetration Testing', 'Compliance Management', 'Incident Response'],
      pricing: 'Starting at $1,800/month',
      link: '/services/cybersecurity-consulting'
    },
    {
      title: 'DevOps & Automation',
      description: 'Streamline development and deployment with modern DevOps practices. CI/CD pipelines, monitoring, and performance optimization.',
      icon: '⚙️',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Performance Optimization'],
      pricing: 'Starting at $3,200/month',
      link: '/services/devops-automation'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes and improve efficiency by 50%.',
      icon: '🚀',
      features: ['Process Automation', 'Workflow Optimization', 'Digital Strategy', 'Change Management'],
      pricing: 'Custom pricing',
      link: '/services/digital-transformation'
=======
export default function App(): React.JSX.Element {
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
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
    },
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <ParticleBackground />
      <Header />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to Zion Tech
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your trusted partner for AI and IT solutions. We help businesses transform through
              cutting-edge technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                  pricing={service.pricing}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <BenefitsSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
      <ChatAssistant />
      <ScrollToTop />
    </div>
=======
export default function App(): React.JSX.Element {
  return (
    <main>
      <h1>Hello App</h1>
    </main>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
=======
    <main>
      <h1>Hello App</h1>
    </main>
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
  );
}
