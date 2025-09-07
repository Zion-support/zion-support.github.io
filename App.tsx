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

export default function App() {
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
      title: 'Digital Transformation',
      description: 'Transform your business with modern digital solutions and automation.',
      icon: '🚀',
      features: ['Process Automation', 'Digital Strategy', 'Change Management', 'ROI Optimization'],
    },
    {
      title: 'Consulting',
      description: 'Expert consulting services to help you make informed technology decisions.',
      icon: '💡',
      features: ['Technology Strategy', 'Architecture Review', 'Best Practices', 'Training'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ParticleBackground />
      <ScrollToTop />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}AI & Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We deliver cutting-edge AI solutions, cloud infrastructure, and cybersecurity services 
              to help your business thrive in the digital age.


function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <main className="relative">
        <section className="relative py-20 px-4 text-center">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leading the future of technology with innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
ursor/automate-test-improve-and-merge-code-a45b

function App() {
  return (
    <div className="min-h-screen bg-gray-50">"
</div>"
      <h1 className="text-4xl font-bold text-center py-20">"
</h1>
      </h1>"
      <p className="text-center text-gray-600">"
</p>
    </div>
    <main>
</main>
      <h1>Hello App</h1>

    </main>"
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">"
      <ParticleBackground />

      <Header />

"
      <main className="relative">"
        <section className="relative py-20 px-4 text-center">"
</section>"
          <div className="container mx-auto max-w-6xl">"
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">"
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">"
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">"
</button>
              </button>"
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">"
        <section className="py-16 px-4 bg-white">"
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
                <ServiceCard;
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                />

        </section>
        <BenefitsSection />

        <HowItWorksSection />

        {/* Testimonials Section */}
        <TestimonialCarousel />
        <section className="py-16 px-4 bg-gray-50">"
            <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>"
            <TestimonialCarousel />

        <FaqSection />

        <ContactSection />


      <Footer />

      <ChatAssistant />
    </div>
  );
}

      <ScrollToTop />

    </div>)"
pr-12325


export default App;

