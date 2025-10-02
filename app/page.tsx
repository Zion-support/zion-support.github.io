import React from 'react';
import Link from 'next/link';
import ContentShowcase from '../components/ContentShowcase';
import FeaturedServiceCard from '../components/FeaturedServiceCard';
import SuccessStory from '../components/SuccessStory';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Leading AI & Technology Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI, micro SaaS, and enterprise IT solutions. 
              Build faster, scale smarter, and achieve unprecedented results with our proven solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
                <span className="text-green-400 font-semibold">✓</span> 50+ Production-Ready Solutions
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
                <span className="text-green-400 font-semibold">✓</span> Fast 1-8 Week Delivery
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
                <span className="text-green-400 font-semibold">✓</span> Proven ROI & Results
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
                <span className="text-green-400 font-semibold">✓</span> Expert Support & Training
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/additional-services" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View All Services
              </Link>
              <Link 
                href="/contact" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Free Consultation
              </Link>
              <a 
                href="tel:+13024640950"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Statistics */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We offer over 50 production-ready solutions across AI, micro SaaS, and IT services with proven ROI and fast delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-blue-100">Production-Ready Solutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">1-8</div>
              <div className="text-blue-100">Weeks Delivery Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-blue-100">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-blue-100">Expert Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedServiceCard
              title="AI Services & Solutions"
              description="Advanced artificial intelligence solutions including machine learning, deep learning, and AI automation."
              icon="🤖"
              href="/additional-services"
              features={[
                "Machine Learning Models",
                "Deep Learning Systems", 
                "AI Automation",
                "Predictive Analytics"
              ]}
            />
            
            <FeaturedServiceCard
              title="Micro SaaS Solutions"
              description="Scalable software-as-a-service applications designed for rapid deployment and growth."
              icon="⚡"
              href="/additional-services"
              features={[
                "Rapid Development",
                "Scalable Architecture",
                "Cloud-Native Design",
                "API-First Approach"
              ]}
            />
            
            <FeaturedServiceCard
              title="IT Services & Solutions"
              description="Comprehensive IT infrastructure, cloud migration, and DevOps services."
              icon="☁️"
              href="/additional-services"
              features={[
                "Cloud Migration",
                "DevOps & SRE",
                "Infrastructure Management",
                "Security & Compliance"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from our enterprise clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SuccessStory
              title="Fortune 500 Manufacturing Transformation"
              description="Implemented AI-powered predictive maintenance reducing downtime by 40% and saving $25M annually."
              metrics={[
                { label: "Downtime Reduction", value: "40%" },
                { label: "Annual Savings", value: "$25M" },
                { label: "ROI", value: "350%" }
              ]}
              industry="Manufacturing"
            />
            
            <SuccessStory
              title="Healthcare AI Platform Deployment"
              description="Deployed comprehensive AI platform improving patient outcomes and operational efficiency."
              metrics={[
                { label: "Patient Satisfaction", value: "95%" },
                { label: "Processing Speed", value: "3x Faster" },
                { label: "Cost Reduction", value: "30%" }
              ]}
              industry="Healthcare"
            />
          </div>
        </div>
      </section>

      {/* Content Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContentShowcase />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises already leveraging our AI and technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              href="/case-studies" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}