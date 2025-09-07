import React from "react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Enterprise AI & IT Solutions | Micro SaaS Development',
  description: 'Leading provider of enterprise-grade AI solutions, micro SaaS development, and IT services. 500+ services including AI automation, blockchain solutions, and cloud infrastructure.',
  keywords: 'AI solutions, micro SaaS, IT services, enterprise software, blockchain, cloud computing, automation, machine learning, software development',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of enterprise-grade AI solutions, micro SaaS development, and IT services.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of enterprise-grade AI solutions, micro SaaS development, and IT services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

interface CardProps {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
}

function ServiceCard({
  title,
  href,
  description,
  bullets = [],
  icon,
}: CardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-2 hover:scale-105"
      aria-label={`Learn more about ${title} services`}
    >
      <div className="flex items-center mb-4">
        {icon && <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
      {bullets.length > 0 && (
        <ul className="space-y-2" role="list">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center group-hover:text-gray-700 transition-colors duration-300">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300" aria-hidden="true"></span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300">
        Learn more →
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl relative overflow-hidden" role="banner">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-8 -left-8 w-80 h-80 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"></div>
          <div className="absolute -bottom-12 -right-8 w-80 h-80 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-200 to-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-cyan-200 to-cyan-300 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-200 to-pink-300 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10">
          <div className="inline-block mb-6 animate-bounce-in">
            <span className="text-6xl animate-wiggle">🚀</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Zion Tech Group
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 max-w-5xl mx-auto animate-slide-up font-medium">
            Enterprise AI solutions, micro SaaS development, and comprehensive IT services
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            that drive business transformation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/services"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 shadow-2xl hover:shadow-3xl animate-glow"
              aria-label="Explore our comprehensive service offerings"
            >
              <span className="flex items-center justify-center gap-2">
                Explore Services
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </Link>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-xl font-bold text-lg hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
              aria-label="Visit our main website (opens in new tab)"
            >
              <span className="flex items-center justify-center gap-2">
                Visit Main Site
                <span className="group-hover:translate-x-1 transition-transform duration-300">↗</span>
              </span>
            </a>
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm md:text-base text-gray-600">Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-sm md:text-base text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">99.9%</div>
              <div className="text-sm md:text-base text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">24/7</div>
              <div className="text-sm md:text-base text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-12" role="main" aria-labelledby="services-heading">
        <div className="text-center mb-12">
          <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From AI-powered automation to complete IT infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Core service offerings">
          <ServiceCard
            title="Micro SaaS Solutions"
            href="/services/micro-saas"
            description="Scalable, secure micro SaaS products that solve specific business challenges with modern architecture."
            bullets={[
              "Custom web applications",
              "API development",
              "Database design",
              "User authentication",
              "Payment integration"
            ]}
            icon="🚀"
          />
          <ServiceCard
            title="AI & Machine Learning"
            href="/services/ai-ml"
            description="Intelligent automation, predictive analytics, and custom AI models tailored to your business needs."
            bullets={[
              "Custom AI models",
              "Predictive analytics",
              "Natural language processing",
              "Computer vision",
              "Process automation"
            ]}
            icon="🤖"
          />
          <ServiceCard
            title="Cloud Infrastructure"
            href="/services/cloud"
            description="Scalable cloud solutions, DevOps, and infrastructure management for enterprise applications."
            bullets={[
              "AWS/Azure/GCP migration",
              "Container orchestration",
              "CI/CD pipelines",
              "Monitoring & logging",
              "Cost optimization"
            ]}
            icon="☁️"
          />
          <ServiceCard
            title="Blockchain Solutions"
            href="/services/blockchain"
            description="Smart contracts, DeFi platforms, and blockchain integration for secure, transparent operations."
            bullets={[
              "Smart contract development",
              "DeFi protocols",
              "NFT marketplaces",
              "Token economics",
              "Security auditing"
            ]}
            icon="⛓️"
          />
          <ServiceCard
            title="Data Analytics"
            href="/services/analytics"
            description="Transform raw data into actionable insights with advanced analytics and visualization tools."
            bullets={[
              "Data warehousing",
              "Business intelligence",
              "Real-time dashboards",
              "Predictive modeling",
              "Data visualization"
            ]}
            icon="📊"
          />
          <ServiceCard
            title="Cybersecurity"
            href="/services/security"
            description="Comprehensive security solutions to protect your digital assets and ensure compliance."
            bullets={[
              "Security audits",
              "Penetration testing",
              "Compliance consulting",
              "Incident response",
              "Security training"
            ]}
            icon="🔒"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 rounded-2xl relative overflow-hidden" aria-labelledby="why-choose-heading">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-blue-100 to-transparent rounded-full filter blur-2xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-100 to-transparent rounded-full filter blur-2xl opacity-30"></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-20">
            <h2 id="why-choose-heading" className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-8 animate-fade-in">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto animate-slide-up font-medium">
              We combine technical expertise with business acumen to deliver
              solutions that drive real results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="Key advantages and benefits">
            <div className="text-center p-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group border border-white/20">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-float">
                <span className="text-4xl animate-pulse-slow">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                Fast Delivery
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-lg leading-relaxed">
                Rapid development and deployment with agile methodologies and modern tools
              </p>
            </div>

            <div className="text-center p-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group border border-white/20">
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-4xl animate-pulse-slow">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-green-600 transition-colors duration-300">
                Secure & Reliable
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-lg leading-relaxed">
                Enterprise-grade security and 99.9% uptime guarantee with 24/7 monitoring
              </p>
            </div>

            <div className="text-center p-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group border border-white/20">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-4xl animate-pulse-slow">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-300">
                Custom Solutions
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-lg leading-relaxed">
                Tailored solutions that perfectly fit your specific business needs and goals
              </p>
            </div>

            <div className="text-center p-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group border border-white/20">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="text-4xl animate-pulse-slow">📞</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-orange-600 transition-colors duration-300">
                24/7 Support
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-lg leading-relaxed">
                Round-the-clock technical support and maintenance from our expert team
              </p>
            </div>
          </div>
        </div>
      </section>

          {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 rounded-2xl relative overflow-hidden" aria-labelledby="contact-heading">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-blue-100 to-transparent rounded-full filter blur-2xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-100 to-transparent rounded-full filter blur-2xl opacity-30"></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 id="contact-heading" className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-8 animate-fade-in">
              Get In Touch With Us
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto animate-slide-up font-medium">
              Ready to transform your business? Contact our expert team today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Phone
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-lg font-medium">
                +1 302 464 0950
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Available 24/7 for urgent matters
              </p>
            </div>

            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" style={{ animationDelay: '0.5s' }}>
                <span className="text-3xl">✉️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                Email
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-lg font-medium">
                kleber@ziontechgroup.com
              </p>
              <p className="text-gray-500 text-sm mt-2">
                We respond within 2 hours
              </p>
            </div>

            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" style={{ animationDelay: '1s' }}>
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                Address
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-lg font-medium">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Visit us for consultations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl relative overflow-hidden" role="complementary" aria-labelledby="cta-heading">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute -top-8 -left-8 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float"></div>
          <div className="absolute -bottom-12 -right-8 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-cyan-300/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-300/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10">
          <div className="inline-block mb-8 animate-bounce-in">
            <span className="text-6xl animate-wiggle">💼</span>
          </div>
          <h2 id="cta-heading" className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in">
            Ready to Transform Your Business?
          </h2>
          <p className="text-2xl text-blue-100 mb-4 max-w-4xl mx-auto animate-slide-up font-medium">
            Let&apos;s discuss your project and create a custom solution that drives
<<<<<<< HEAD
            real business value. Our team has delivered 1000+ successful
            projects across various industries. Contact us today for a free consultation.
=======
            real business value.
>>>>>>> 66636f0649a4af9daff867918bf1282f740567c2
          </p>
          <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Our team has delivered 1000+ successful projects across various industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/contact"
              className="group bg-white text-blue-600 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 shadow-2xl hover:shadow-3xl animate-glow"
              aria-label="Contact us to get started with your project"
            >
              <span className="flex items-center justify-center gap-3">
                Get Started Today
                <span className="group-hover:translate-x-1 transition-transform duration-300">🚀</span>
              </span>
            </Link>
            <Link
              href="/services"
              className="group border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 shadow-xl hover:shadow-2xl"
              aria-label="Explore our services"
            >
              <span className="flex items-center justify-center gap-3">
                View Our Services
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-sm md:text-base text-blue-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-sm md:text-base text-blue-200">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-sm md:text-base text-blue-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm md:text-base text-blue-200">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50 rounded-lg" aria-labelledby="contact-heading">
        <div className="text-center mb-12">
          <h2 id="contact-heading" className="text-3xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Contact our team of experts for a free consultation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <ContactCard
            icon="📞"
            title="Phone"
            content="+1 302 464 0950"
            description="Call us for immediate assistance"
            href="tel:+13024640950"
          />
          <ContactCard
            icon="📧"
            title="Email"
            content="kleber@ziontechgroup.com"
            description="Send us your project details"
            href="mailto:kleber@ziontechgroup.com"
          />
          <ContactCard
            icon="📍"
            title="Address"
            content="364 E Main St STE 1008"
            description="Middletown, DE 19709"
            href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
          />
        </div>
      </section>
    </div>
  );
}

function ContactCard({ icon, title, content, description, href }: {
  icon: string;
  title: string;
  content: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 text-center"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      <p className="text-lg font-medium text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300">{content}</p>
      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
    </a>
  );
}