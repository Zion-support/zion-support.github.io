import React from "react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Leading provider of AI-powered solutions, micro SaaS platforms, and comprehensive IT services. Transform your business with cutting-edge technology.',
  keywords: 'AI services, micro SaaS, IT services, automation, technology solutions, business transformation',
  openGraph: {
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Leading provider of AI-powered solutions, micro SaaS platforms, and comprehensive IT services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Leading provider of AI-powered solutions, micro SaaS platforms, and comprehensive IT services.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://ziontechgroup.com',
  },
};

<<<<<<< HEAD
interface CardProps {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
=======
function Card({ title, href, description, bullets, icon }: CardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {bullets && (
        <ul className="space-y-2 mb-6">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600 text-sm">{bullet}</span>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
            </li>
          ))}
        </ul>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
    </Link>
=======
      <Link
        href={href}
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Learn More
      </Link>
    </div>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
      <div className="mt-4 text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300">
        Learn more →
      </div>
    </Link>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  );
}

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export default function HomePage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg" role="banner">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Leading provider of AI-powered solutions, micro SaaS platforms, and comprehensive IT services. 
          Transform your business with cutting-edge technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
          <Link
            href="/services"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Explore our comprehensive service offerings"
=======
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Build and scale with{' '}
          <span className="text-blue-600">AI</span>,{' '}
          <span className="text-green-600">Micro SaaS</span>{' '}
          and{' '}
          <span className="text-purple-600">Enterprise IT</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          We design, build and operate production-grade platforms: AI copilots, data/ML pipelines, 
          automation, cloud infrastructure, and secure micro SaaS products. Trusted by 500+ companies worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
          >
            Explore Services
          </Link>
<<<<<<< HEAD
          <a
            href="https://ziontechgroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            aria-label="Visit our main website (opens in new tab)"
=======
          <Link
            href="/services"
            className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
          <Link 
            href="/services" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore Services
          </Link>
          <Link 
            href="/contact" 
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          >
            Get Started
          </Link>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      {/* Featured Services */}
      <section className="py-12" role="main" aria-labelledby="services-heading">
        <div className="text-center mb-12">
          <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for modern businesses, from AI-powered tools
            to complete IT infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Core service offerings">
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
            title="Blockchain"
            href="/services/blockchain"
            description="Smart contracts, DeFi protocols, NFT platforms and Web3 solutions."
            icon="⛓️"
          />
          <ServiceCard
            title="Cybersecurity"
            href="/services/cybersecurity"
            description="Penetration testing, security audits, compliance and incident response."
            icon="🔒"
          />
          <ServiceCard
            title="Cloud Services"
            href="/services/cloud-services"
            description="Cloud migration, architecture, and optimization across AWS, Azure, and GCP."
            icon="☁️"
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
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Key advantages and benefits">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Rapid development and deployment with agile methodologies
=======
      {/* Services Overview */}
      <section className="py-16" role="region" aria-labelledby="services-heading">
        <h2 id="services-heading" className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
            <p className="text-gray-600 mb-4">
              Harness the power of artificial intelligence to automate processes, 
              gain insights, and drive innovation.
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            </p>
            <Link href="/services/ai" className="text-blue-600 hover:underline">
              Learn More →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Micro SaaS</h3>
            <p className="text-gray-600 mb-4">
              Scalable software-as-a-service solutions tailored to your specific 
              business needs and requirements.
            </p>
            <Link href="/services/micro-saas" className="text-blue-600 hover:underline">
              Learn More →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">IT Services</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive IT support, infrastructure management, and technology 
              consulting services.
            </p>
<<<<<<< HEAD
=======
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
=======
        
        <div className="relative z-10">
          <div className="text-center mb-20">
            <h2 id="why-choose-heading" className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-8 animate-fade-in">
              Why Choose Zion Tech Group?
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto animate-slide-up font-medium">
              We combine technical expertise with business acumen to deliver
              solutions that drive real results.
            </p>
          </div>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="AI Solutions"
              href="/services/ai-services"
              description="Transform your business with cutting-edge artificial intelligence solutions"
              icon="🤖"
              bullets={[
                "Machine Learning Models",
                "Natural Language Processing",
                "Computer Vision",
                "Predictive Analytics",
                "AI Consulting"
              ]}
            />
            
            <Card
              title="Cybersecurity"
              href="/services/cybersecurity"
              description="Protect your digital assets with advanced security solutions"
              icon="🔒"
              bullets={[
                "Security Assessment",
                "Penetration Testing",
                "Incident Response",
                "Compliance Management",
                "24/7 Monitoring"
              ]}
            />
            
            <Card
              title="Cloud Infrastructure"
              href="/services/cloud-infrastructure"
              description="Scale your operations with robust cloud solutions"
              icon="☁️"
              bullets={[
                "Cloud Migration",
                "Infrastructure as Code",
                "Auto-scaling",
                "Disaster Recovery",
                "Cost Optimization"
              ]}
            />
            
            <Card
              title="Micro SaaS Development"
              href="/services/micro-saas"
              description="Build and launch your next micro SaaS product"
              icon="🚀"
              bullets={[
                "MVP Development",
                "API Integration",
                "Payment Processing",
                "User Management",
                "Analytics Dashboard"
              ]}
            />
            
            <Card
              title="Blockchain Solutions"
              href="/services/blockchain"
              description="Leverage blockchain technology for secure transactions"
              icon="⛓️"
              bullets={[
                "Smart Contracts",
                "DeFi Applications",
                "NFT Marketplaces",
                "Token Development",
                "Blockchain Consulting"
              ]}
            />
            
            <Card
              title="IT Services"
              href="/services/it-services"
              description="Comprehensive IT support and infrastructure management"
              icon="💻"
              bullets={[
                "System Administration",
                "Network Security",
                "Data Backup",
                "Technical Support",
                "IT Consulting"
              ]}
            />
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
            <Link href="/services/it" className="text-blue-600 hover:underline">
              Learn More →
            </Link>
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="text-center py-16" role="complementary" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let&apos;s discuss your project and create a custom solution that drives
          real business value. Our team has delivered 1000+ successful
          projects across various industries.
=======
      <section className="bg-gray-900 text-white py-16 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how our AI, micro SaaS, and IT services can help you achieve your goals.
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        </p>
        <Link 
          href="/contact" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
        >
          Contact Us Today
        </Link>
=======
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
            Ready to Transform Your Business?
          </h2>
          <p className="text-2xl text-blue-100 mb-4 max-w-4xl mx-auto animate-slide-up font-medium">
            Let&apos;s discuss your project and create a custom solution that drives
            real business value.
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      </section>
=======
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ businesses already using our AI and IT solutions. 
            Get a free consultation and see how we can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">🕒 Available 24/7 for Enterprise Support</p>
          </div>
        </div>
      </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    </div>
  );
}