import React from 'react';
import ContentShowcase from '../components/ContentShowcase';
import FeaturedServiceCard from '../components/FeaturedServiceCard';
import SuccessStory from '../components/SuccessStory';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Zion Tech Group
          </h1>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Leading AI, Micro SaaS, and IT Solutions for Modern Enterprises
          </p>
          <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
            Transform your business with cutting-edge technology, intelligent automation, 
            and scalable solutions that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/services" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Services
            </a>
            <a 
              href="/contact" 
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeaturedServiceCard
              title="AI Services"
              description="Advanced artificial intelligence solutions including machine learning, NLP, computer vision, and autonomous systems."
              icon="🧠"
              href="/services/ai-services"
              features={[
                'Machine Learning Model Development',
                'Natural Language Processing',
                'Computer Vision & Image Recognition',
                'Autonomous Systems Development',
                'AI Consulting & Strategy'
              ]}
            />
            <FeaturedServiceCard
              title="Micro SaaS Development"
              description="Custom micro SaaS platforms designed to solve specific business challenges with scalable, cloud-native solutions."
              icon="🚀"
              href="/services/micro-saas"
              features={[
                'Custom SaaS Platform Development',
                'API Integration & Development',
                'Cloud Infrastructure Setup',
                'User Management & Authentication',
                'Analytics & Performance Monitoring'
              ]}
            />
            <FeaturedServiceCard
              title="IT Services"
              description="Comprehensive IT solutions including cloud migration, DevOps, cybersecurity, and digital transformation."
              icon="💻"
              href="/services/it-services"
              features={[
                'Cloud Migration & Management',
                'DevOps & CI/CD Implementation',
                'Cybersecurity Solutions',
                'Infrastructure Management',
                'Digital Transformation Consulting'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our client implementations across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SuccessStory
              title="Manufacturing Automation"
              description="Implemented AI-powered predictive maintenance system reducing downtime by 60% and saving $2.3M annually."
              metrics={[
                { label: 'Downtime Reduction', value: '60%' },
                { label: 'Cost Savings', value: '$2.3M' },
                { label: 'ROI', value: '340%' }
              ]}
              industry="Manufacturing"
            />
            <SuccessStory
              title="Healthcare AI Platform"
              description="Developed comprehensive AI platform for patient care optimization, improving outcomes by 45%."
              metrics={[
                { label: 'Outcome Improvement', value: '45%' },
                { label: 'Process Efficiency', value: '70%' },
                { label: 'Patient Satisfaction', value: '92%' }
              ]}
              industry="Healthcare"
            />
            <SuccessStory
              title="Financial Services SaaS"
              description="Built micro SaaS platform for financial analytics, serving 500+ clients with 99.9% uptime."
              metrics={[
                { label: 'Active Clients', value: '500+' },
                { label: 'Uptime', value: '99.9%' },
                { label: 'Revenue Growth', value: '280%' }
              ]}
              industry="FinTech"
            />
          </div>
        </div>
      </section>

      {/* Content Showcase */}
      <ContentShowcase />

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver solutions that drive real results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">10+</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Years Experience</h3>
              <p className="text-gray-600">Proven track record in AI, SaaS, and enterprise IT solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">500+</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Projects Delivered</h3>
              <p className="text-gray-600">Successful implementations across various industries</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">24/7</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">99%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Client Satisfaction</h3>
              <p className="text-gray-600">Consistently high client satisfaction and retention rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and technology solutions can accelerate your growth and drive innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </a>
            <a 
              href="/case-studies" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}