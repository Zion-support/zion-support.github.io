import React from "react";
import Link from "next/link";
import ServiceCard from "./components/ServiceCard";

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
            Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with
            our comprehensive suite of intelligent services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link
              href="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus-visible:focus shadow-lg hover:shadow-xl"
            >
              Explore Services
            </Link>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 focus-visible:focus"
            >
              Visit Main Site
            </a>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for modern businesses, from AI-powered tools
              to complete IT infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Micro SaaS Solutions"
              href="/services/micro-saas"
              description="End-to-end product development with billing, auth, analytics and growth optimization"
              bullets={[
                "Custom SaaS development",
                "Payment integration",
                "User authentication",
                "Analytics dashboard",
                "API development",
              ]}
              icon="🚀"
            />
            <ServiceCard
              title="AI Services"
              href="/services/ai-services"
              description="Cutting-edge AI solutions for automation, analytics, and intelligent decision making"
              bullets={[
                "AI chatbots & assistants",
                "Machine learning models",
                "Natural language processing",
                "Computer vision",
                "Predictive analytics",
              ]}
              icon="🤖"
            />
            <ServiceCard
              title="IT Services"
              href="/services/it-services"
              description="Complete IT infrastructure, cloud migration, and digital transformation solutions"
              bullets={[
                "Cloud migration",
                "DevOps & CI/CD",
                "Infrastructure management",
                "Security solutions",
                "24/7 support",
              ]}
              icon="💻"
            />
            <ServiceCard
              title="Blockchain Solutions"
              href="/services/blockchain-solutions"
              description="Smart contracts, DeFi protocols, NFT platforms and Web3 solutions"
              bullets={[
                "Smart contract development",
                "DeFi protocol design",
                "NFT marketplace creation",
                "Web3 integration",
                "Blockchain consulting",
              ]}
              icon="⛓️"
            />
            <ServiceCard
              title="DevOps Automation"
              href="/services/devops-automation"
              description="Streamline your development workflow with automated CI/CD pipelines"
              bullets={[
                "CI/CD pipeline setup",
                "Infrastructure as Code",
                "Container orchestration",
                "Monitoring & logging",
                "Performance optimization",
              ]}
              icon="🔧"
            />
            <ServiceCard
              title="Smart Invoice Generator"
              href="/services/smart-invoice-generator"
              description="Automated invoice generation with AI-powered data extraction and processing"
              bullets={[
                "AI-powered data extraction",
                "Automated invoice creation",
                "Payment tracking",
                "Multi-currency support",
                "Integration capabilities",
              ]}
              icon="📄"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver
              solutions that drive real results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Rapid development and deployment with agile methodologies and modern tools
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors duration-300 group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Secure & Reliable
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security and 99.9% uptime guarantee with comprehensive monitoring
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors duration-300 group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Custom Solutions
              </h3>
              <p className="text-gray-600">
                Tailored solutions that fit your specific business needs and growth objectives
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-300 group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock technical support and maintenance from our expert team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and create a custom solution that drives
            real business value. Our team has delivered 1000+ successful
            projects across various industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}