<<<<<<< HEAD

import Link from 'next/link';'
import React from "react";"
import Link from "next/link";"
import { Metadata } from 'next';'
export const "metadata": Metadata = {
  }
  "title": 'Zion Tech Group - Enterprise AI & IT Solutions | Micro SaaS Development','
  "description": 'Leading provider of enterprise-grade AI solutions, micro SaaS development, and IT services. 500+ services including AI automation, blockchain solutions, and cloud infrastructure.','
  "keywords": 'AI solutions, micro SaaS, IT services, enterprise software, blockchain, cloud computing, automation, machine learning, software development','
  "authors": [{ "name": 'Zion Tech Group' }],'
  "openGraph": {
    }
    "title": 'Zion Tech Group - Enterprise AI & IT Solutions','
    "description": 'Leading provider of enterprise-grade AI solutions, micro SaaS development, and IT services.','
    "type": 'website','
    "locale": 'en_US','
    "siteName": 'Zion Tech Group'},'
  "twitter": {
    }
    "card": 'summary_large_image','
    "title": 'Zion Tech Group - Enterprise AI & IT Solutions','
    "description": 'Leading provider of enterprise-grade AI solutions, micro SaaS development, and IT services.'},'
  "robots": {
    }
    "index": true,
    "follow": true,
    "googleBot": {
      }
      "index": true,
      "follow": true,
      'max-video-preview': -1,'
      'max-image-preview': 'large','
      'max-snippet': -1}}};'
import React from 'react';'
import Link from 'next/link';'
interface CardProps {
  }
  "title": string;
  "href": string;
  "description": string;
  bullets?: string[];
  icon?: string;
}
function Card() {
}
return (;
    <Link,
href={href}
      className="block p-6 bg-white rounded-lg shadow-md "hover":shadow-lg transition-shadow border border-gray-200 "hover":border-blue-300""
    >
      <div className="flex items-center mb-4">"
        {icon && <span className="text-2xl mr-3">{icon}</span>}"
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>"
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>"
      {bullets.length > 0 && (
        <ul className="space-y-2">"
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">"
              <span className="text-green-500 mr-2">✓</span>"
              <span className="text-sm text-gray-700">{bullet}</span>"
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}
export default function Home() {
}
const services = [;
    {
      }
      "title": "AI Services","
      "href": "/services/ai-services","
      "description": "Revolutionary AI solutions that transform your business operations and drive unprecedented growth.","
      "icon": "🤖","
      "bullets": [
        "AI-powered automation","
        "Machine learning solutions","
        "Natural language processing","
        "Computer vision applications""
      ]
    },
    {
      }
      "title": "IT Services","
      "href": "/services/it-services","
      "description": "Comprehensive IT solutions designed to modernize your infrastructure and optimize performance.","
      "icon": "💻","
      "bullets": [
        "Cloud migration","
        "System integration","
        "Network security","
        "24/7 technical support""
      ]
    },
    {
      }
      "title": "Micro SaaS","
      "href": "/services/micro-saas","
      "description": "Custom micro SaaS applications that solve specific business problems with elegant simplicity.","
      "icon": "🚀","
      "bullets": [
        "Rapid development","
        "Scalable architecture","
        "User-friendly interfaces","
        "Cost-effective solutions""
      ]
    }
  ];
return (;
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg relative overflow-hidden" role="banner">"
        {/* Animated background elements */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg relative overflow-hidden" role="banner">"
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">"
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>"
          <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ "animationDelay": '2s' }}></div>'
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ "animationDelay": '4s' }}></div>'
        </div>
        <div className="relative z-10">"
          <h1 className="text-5xl "md":text-7xl font-bold text-gray-900 mb-6 animate-fade-in">"
            Zion Tech Group
          </h1>
          <p className="text-xl "md":text-2xl text-gray-600 mb-8 max-w-4xl mx-auto animate-slide-up">"
            Enterprise AI solutions, micro SaaS development, and comprehensive IT services,
that drive business transformation and growth.
          </p>
          <div className="flex flex-col "sm":flex-row gap-4 justify-center animate-slide-up" style={{ "animationDelay": '0.2s' }}>'
            <Link,
href="/services""
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold "hover":bg-blue-700 transition-all duration-300 transform "hover":scale-105 "focus":outline-none "focus":ring-2 "focus":ring-blue-500 "focus":ring-offset-2 shadow-lg "hover":shadow-xl""
              aria-label="Explore our comprehensive service offerings""
            >
              Explore Services
            </Link>
            <a,
href=""https"://ziontechgroup.com""
              target="_blank""
              rel="noopener noreferrer""
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold "hover":border-blue-400 "hover":text-blue-600 transition-all duration-300 transform "hover":scale-105 "focus":outline-none "focus":ring-2 "focus":ring-gray-500 "focus":ring-offset-2""
              aria-label="Visit our main website (opens in new tab)""
            >
              Visit Main Site
            </a>
          </div>
        </div>
      </section>
      {/* Featured Services */}
      <section className="py-12" role="main" aria-labelledby="services-heading">"
        <div className="text-center mb-12">"
          <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">"
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">"
            From AI-powered automation to complete IT infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8" role="list" aria-label="Core service offerings">"
          <ServiceCard,
title="Micro SaaS Solutions""
            href="/services/micro-saas""
            description="Scalable, secure micro SaaS products that solve specific business challenges with modern architecture.""
            bullets={[
              "Custom web applications","
              "API development","
              "Database design","
              "User authentication","
              "Payment integration""
            ]}
            icon="🚀"" />
          <ServiceCard,
title="AI & Machine Learning""
            href="/services/ai-ml""
            description="Intelligent automation, predictive analytics, and custom AI models tailored to your business needs.""
            bullets={[
              "Custom AI models","
              "Predictive analytics","
              "Natural language processing","
              "Computer vision","
              "Process automation""
            ]}
            icon="🤖"" />
          <ServiceCard,
title="Cloud Infrastructure""
            href="/services/cloud""
            description="Scalable cloud solutions, DevOps, and infrastructure management for enterprise applications.""
            bullets={[
              "AWS/Azure/GCP migration","
              "Container orchestration","
              "CI/CD pipelines","
              "Monitoring & logging","
              "Cost optimization""
            ]}
            icon="☁️"" />
          <ServiceCard,
title="Blockchain Solutions""
            href="/services/blockchain""
            description="Smart contracts, DeFi platforms, and blockchain integration for secure, transparent operations.""
            bullets={[
              "Smart contract development","
              "DeFi protocols","
              "NFT marketplaces","
              "Token economics","
              "Security auditing""
            ]}
            icon="⛓️"" />
          <ServiceCard,
title="Data Analytics""
            href="/services/analytics""
            description="Transform raw data into actionable insights with advanced analytics and visualization tools.""
            bullets={[
              "Data warehousing","
              "Business intelligence","
              "Real-time dashboards","
              "Predictive modeling","
              "Data visualization""
            ]}
            icon="📊"" />
          <ServiceCard,
title="Cybersecurity""
            href="/services/security""
            description="Comprehensive security solutions to protect your digital assets and ensure compliance.""
            bullets={[
              "Security audits","
              "Penetration testing","
              "Compliance consulting","
              "Incident response","
              "Security training""
            ]}
            icon="🔒"" />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">"
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-16">"
          <h1 className="text-5xl font-bold text-gray-900 mb-6">"
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">"
            We deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.
            Transform your operations with cutting-edge technology and expert implementation.
          </p>
        </div>
        <div className="grid "md":grid-cols-2 "lg":grid-cols-3 gap-8 mb-16">"
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg relative overflow-hidden" role="banner">"
        {/* Animated background elements */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg relative overflow-hidden" role="banner">"
        {/* Animated background elements */}
        </div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">"
            We combine technical expertise with business acumen to deliver,
solutions that drive real results.
          </p>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">"
            From AI-powered automation to complete IT infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-4 gap-8" role="list" aria-label="Key advantages and benefits">"
          <div className="text-center p-8 bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 transform "hover":-translate-y-2 group">"
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-"hover":scale-110 transition-transform duration-300">"
              <span className="text-3xl">⚡</span>"
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-"hover":text-blue-600 transition-colors duration-300">"
              Fast Delivery
            </h3>
            <p className="text-gray-600 group-"hover":text-gray-700 transition-colors duration-300">"
              Rapid development and deployment with agile methodologies
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 transform "hover":-translate-y-2 group">"
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-"hover":scale-110 transition-transform duration-300">"
              <span className="text-3xl">🔒</span>"
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-"hover":text-green-600 transition-colors duration-300">"
              Secure & Reliable
            </h3>
            <p className="text-gray-600 group-"hover":text-gray-700 transition-colors duration-300">"
              Enterprise-grade security and 99.9% uptime guarantee
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 transform "hover":-translate-y-2 group">"
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 group-"hover":scale-110 transition-transform duration-300">"
              <span className="text-3xl">🎯</span>"
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-"hover":text-purple-600 transition-colors duration-300">"
              Custom Solutions
            </h3>
            <p className="text-gray-600 group-"hover":text-gray-700 transition-colors duration-300">"
              Tailored solutions that fit your specific business needs
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 transform "hover":-translate-y-2 group">"
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 group-"hover":scale-110 transition-transform duration-300">"
              <span className="text-3xl">📞</span>"
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-"hover":text-orange-600 transition-colors duration-300">"
              24/7 Support
            </h3>
            <p className="text-gray-600 group-"hover":text-gray-700 transition-colors duration-300">"
              Round-the-clock technical support and maintenance
            </p>
          </div>
        </div>
      </section>
          {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 rounded-2xl relative overflow-hidden" aria-labelledby="contact-heading">"
        <div className="absolute inset-0 overflow-hidden">"
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-blue-100 to-transparent rounded-full filter blur-2xl opacity-30"></div>"
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-100 to-transparent rounded-full filter blur-2xl opacity-30"></div>"
        </div>
        <div className="relative z-10">"
          <div className="text-center mb-16">"
            <h2 id="contact-heading" className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-8 animate-fade-in">"
              Get In Touch With Us
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto animate-slide-up font-medium">"
              Ready to transform your business? Contact our expert team today.
            </p>
          </div>
          <div className="grid grid-cols-1 "md":grid-cols-3 gap-8 max-w-6xl mx-auto">"
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl "hover":shadow-2xl transition-all duration-500 transform "hover":-translate-y-2 group border border-white/20">"
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-"hover":scale-110 group-"hover":rotate-3 transition-all duration-500">"
                <span className="text-3xl">📞</span>"
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-"hover":text-blue-600 transition-colors duration-300">"
                Phone
              </h3>
              <p className="text-gray-600 group-"hover":text-gray-700 transition-colors duration-300 text-lg font-medium">"
                +1 302 464 0950
              </p>
              <p className="text-gray-500 text-sm mt-2">"
                Available 24/7 for urgent matters
              </p>
            </div>
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl "hover":shadow-2xl transition-all duration-500 transform "hover":-translate-y-2 group border border-white/20">"
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-"hover":scale-110 group-"hover":rotate-3 transition-all duration-500" style={{ "animationDelay": '0.5s' }}>'
                <span className="text-3xl">✉️</span>"
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-"hover":text-green-600 transition-colors duration-300">"
                Email
              </h3>
              <p className="text-gray-600 group-"hover":text-gray-700 transition-colors duration-300 text-lg font-medium">"
                kleber@ziontechgroup.com
              </p>
              <p className="text-gray-500 text-sm mt-2">"
                We respond within 2 hours
              </p>
            </div>
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl "hover":shadow-2xl transition-all duration-500 transform "hover":-translate-y-2 group border border-white/20">"
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-"hover":scale-110 group-"hover":rotate-3 transition-all duration-500" style={{ "animationDelay": '1s' }}>'
                <span className="text-3xl">📍</span>"
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-"hover":text-purple-600 transition-colors duration-300">"
                Address
              </h3>
              <p className="text-gray-600 group-"hover":text-gray-700 transition-colors duration-300 text-lg font-medium">"
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
              <p className="text-gray-500 text-sm mt-2">"
                Visit us for consultations
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-lg relative overflow-hidden" role="complementary" aria-labelledby="cta-heading">"
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">"
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-blue-100 to-transparent rounded-full filter blur-2xl opacity-30"></div>"
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-100 to-transparent rounded-full filter blur-2xl opacity-30"></div>"
        </div>
        <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-4 gap-8" role="list" aria-label="Key advantages and benefits">"
          <div className="text-center p-8 bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 transform "hover":-translate-y-2 group">"
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-"hover":scale-110 transition-transform duration-300">"
              <span className="text-3xl">⚡</span>"
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-"hover":text-blue-600 transition-colors duration-300">"
              Fast Delivery
            </h3>
            <p className="text-gray-600 group-"hover":text-gray-700 transition-colors duration-300">"
              Rapid development and deployment with agile methodologies
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 transform "hover":-translate-y-2 group">"
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-"hover":scale-110 transition-transform duration-300">"
              <span className="text-3xl">🔒</span>"
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-"hover":text-green-600 transition-colors duration-300">"
              Secure & Reliable
            </h3>
            <p className="text-gray-600 group-"hover":text-gray-700 transition-colors duration-300">"
              Enterprise-grade security and 99.9% uptime guarantee
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 transform "hover":-translate-y-2 group">"
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 group-"hover":scale-110 transition-transform duration-300">"
              <span className="text-3xl">🎯</span>"
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-"hover":text-purple-600 transition-colors duration-300">"
              Custom Solutions
            </h3>
            <p className="text-gray-600 group-"hover":text-gray-700 transition-colors duration-300">"
              Tailored solutions that fit your specific business needs
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 transform "hover":-translate-y-2 group">"
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 group-"hover":scale-110 transition-transform duration-300">"
              <span className="text-3xl">📞</span>"
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-"hover":text-orange-600 transition-colors duration-300">"
              24/7 Support
            </h3>
            <p className="text-gray-600 group-"hover":text-gray-700 transition-colors duration-300">"
              Round-the-clock technical support and maintenance
            </p>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-lg relative overflow-hidden" role="complementary" aria-labelledby="cta-heading">"
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">"
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>"
          <div className="absolute -top-4 -left-4 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>"
          <div className="absolute -bottom-8 -right-4 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ "animationDelay": '2s' }}></div>'
        </div>
        <div className="relative z-10">"
          <h2 id="cta-heading" className="text-4xl "md":text-5xl font-bold text-white mb-6 animate-fade-in">"
        <div className="text-center">"
          <h2 className="text-3xl font-bold text-gray-900 mb-6">"
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8">"
            Let's discuss how our solutions can drive your success.'
            Let&apos;s discuss your project and create a custom solution that drives real business value.
            Our team has delivered 1000+ successful projects across various industries.
          </p>
      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50 rounded-lg" aria-labelledby="contact-heading">"
        <div className="text-center mb-12">"
          <h2 id="contact-heading" className="text-3xl font-bold text-gray-900 mb-4">"
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">"
            Ready to start your next project? Contact our team of experts for a free consultation.
          </p>
        </div>
        <div className="grid grid-cols-1 "md":grid-cols-3 gap-8 max-w-4xl mx-auto">"
          <ContactCard,
icon="📞""
            title="Phone""
            content="+1 302 464 0950""
            description="Call us for immediate assistance""
            href=""tel":+13024640950"" />
          <ContactCard,
icon="📧""
            title="Email""
            content="kleber@ziontechgroup.com""
            description="Send us your project details""
            href=""mailto":kleber@ziontechgroup.com"" />
          <ContactCard,
icon="📍""
            title="Address""
            content="364 E Main St STE 1008""
            description="Middletown, DE 19709""
            href=""https"://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"" />
        </div>
      </section>
          <Link,
href="/contact""
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold "hover":bg-blue-700 transition-colors""
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
function FeatureCard() {
}
return (;
    <div className="text-center p-6">"
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
=======
import React, { Suspense } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Leading the future of AI, autonomous systems, and innovative technology solutions. We empower businesses with cutting-edge technology to drive growth and transformation.',
  keywords: ['AI', 'artificial intelligence', 'blockchain', 'technology', 'innovation', 'automation'],
  openGraph: {
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Leading the future of AI, autonomous systems, and innovative technology solutions.',
    type: 'website',
  },
};

// Lazy load components for better performance
const ServicesGrid = React.lazy(() => import('./components/ServicesGrid'));
const HeroSection = React.lazy(() => import('./components/HeroSection'));

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <Suspense fallback={<div className="animate-pulse bg-white/10 h-64 rounded-lg" />}>
          <HeroSection />
        </Suspense>

        {/* Services Grid */}
        <Suspense fallback={<div className="animate-pulse bg-white/10 h-48 rounded-lg" />}>
          <ServicesGrid />
        </Suspense>

        {/* Research Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Research & Innovation</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Stay ahead with our cutting-edge research in AI, quantum computing, and emerging technologies.
          </p>
          <Link 
            href="/research" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Explore Research
          </Link>
        </div>
      </div>
    </main>
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  );
}