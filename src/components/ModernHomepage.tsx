import React from 'react';
import { UnifiedBanner } from './UnifiedBanner';

const ModernHomepage: React.FC = () => {
  const featuredContent = [
    {
      title: "AI Autonomous Operations 2026",
      subtitle: "Revolutionary 99.99% Automation",
      description: "Transform your business with cutting-edge autonomous AI systems",
      href: "/services/ai-autonomous-operations-2026",
      badge: { text: "REVOLUTIONARY", color: "purple", animated: true },
      icon: "🚀"
    },
    {
      title: "Quantum AI Breakthrough",
      subtitle: "1Mx Performance Enhancement",
      description: "Next-generation quantum computing solutions for enterprise",
      href: "/blog/ai-2026-november-quantum-superintelligence-breakthrough",
      badge: { text: "$500B ROI", color: "blue", animated: true },
      icon: "⚛️"
    },
    {
      title: "Edge-Native Intelligence",
      subtitle: "50x Performance Boost",
      description: "Ultra-fast AI processing at the edge of your network",
      href: "/blog/ai-2026-edge-native-intelligence-breakthrough",
      badge: { text: "BREAKTHROUGH", color: "cyan", animated: true },
      icon: "⚡"
    },
    {
      title: "Autonomous Business Intelligence",
      subtitle: "Self-Optimizing Analytics",
      description: "AI-powered business intelligence that evolves with your needs",
      href: "/blog/ai-2026-autonomous-business-intelligence-breakthrough",
      badge: { text: "BREAKTHROUGH", color: "green", animated: true },
      icon: "🧠"
    },
    {
      title: "Synthetic Data Revolution",
      subtitle: "1000x Training Speed",
      description: "Privacy-first synthetic data generation for AI training",
      href: "/blog/ai-2026-synthetic-data-revolution",
      badge: { text: "REVOLUTION", color: "purple", animated: true },
      icon: "🔮"
    },
    {
      title: "Federated Learning Enterprise",
      subtitle: "Zero Data Sharing",
      description: "Collaborative AI training without compromising data privacy",
      href: "/blog/ai-2026-federated-learning-enterprise-breakthrough",
      badge: { text: "1000x TRAINING", color: "green", animated: true },
      icon: "🔒"
    }
  ];

  const services = [
    {
      title: "AI Autonomous Cloud Operations",
      description: "Fully automated cloud infrastructure management",
      href: "/services/ai-autonomous-cloud-ops",
      badge: { text: "AUTOMATED", color: "blue" },
      icon: "☁️"
    },
    {
      title: "AI FinTech Transformation",
      description: "Revolutionary financial technology solutions",
      href: "/services/ai-fintech-transformation",
      badge: { text: "FINANCIAL", color: "green" },
      icon: "💰"
    },
    {
      title: "AI Retail Automation",
      description: "Complete retail process automation",
      href: "/services/ai-retail-automation",
      badge: { text: "RETAIL", color: "yellow" },
      icon: "🛒"
    },
    {
      title: "Micro SaaS Solutions",
      description: "Scalable software-as-a-service platforms",
      href: "/services/micro-saas",
      badge: { text: "SAAS", color: "purple" },
      icon: "📱"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Advanced AI, Micro SaaS, and IT Solutions
            </p>
            <p className="text-lg mb-12 text-blue-200 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence, 
              autonomous operations, and revolutionary technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
              >
                Explore Services
              </a>
              <a
                href="/case-studies"
                className="px-8 py-3 border-2 border-white hover:bg-white hover:text-blue-900 rounded-lg font-semibold transition-colors"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revolutionary AI Breakthroughs 2026
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the latest innovations in artificial intelligence and autonomous systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.map((content, index) => (
              <UnifiedBanner key={index} {...content} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI and IT solutions for modern enterprises
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <UnifiedBanner key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">$1T+</div>
              <div className="text-blue-200">Total ROI Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.99%</div>
              <div className="text-blue-200">Automation Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to learn how our AI solutions can revolutionize your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              Get Started
            </a>
            <a
              href="tel:+13024640950"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-colors"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernHomepage;