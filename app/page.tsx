import React from 'react';
import Link from 'next/link';
import NewContent2026MegaBanner from '../components/NewContent2026MegaBanner';
import LatestAIInnovations2026Banner from '../components/LatestAIInnovations2026Banner';
import ContentShowcase from '../components/ContentShowcase';
import FeaturedServiceCard from '../components/FeaturedServiceCard';
import SuccessStory from '../components/SuccessStory';
import InteractivePromotionalSection from '../components/InteractivePromotionalSection';

export const metadata = {
  title: 'Zion Tech Group — AI Enterprise Transformation & IT Services | 300% ROI Guaranteed',
  description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains. Expert AI consulting, autonomous systems, and digital transformation services. Latest 2026 AI innovations and Fortune 500 success stories.',
  keywords: 'AI enterprise transformation, AI consulting, autonomous AI systems, enterprise AI services, digital transformation, AI implementation, AI ROI calculator, manufacturing AI, AI automation, AI strategy, AI cost optimization, Fortune 500 AI transformation, AI 2026 innovations',
  openGraph: {
    title: 'Zion Tech Group — AI Enterprise Transformation & IT Services',
    description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    type: 'website',
    url: 'https://ziontechgroup.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group AI Enterprise Transformation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI Enterprise Transformation & IT Services',
    description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    images: ['/og-image.jpg'],
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
  alternates: {
    canonical: 'https://ziontechgroup.com',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              AI Enterprise
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                Transformation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains with our proven AI solutions. 
              Trusted by Fortune 500 companies worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                href="/services"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Our Services
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">70%</div>
                <div className="text-sm text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">90%</div>
                <div className="text-sm text-gray-300">Efficiency Gains</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">500+</div>
                <div className="text-sm text-gray-300">Clients Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Content 2026 Mega Banner */}
      <NewContent2026MegaBanner />

      {/* Latest AI Innovations 2026 Banner */}
      <LatestAIInnovations2026Banner />

      {/* Content Showcase */}
      <ContentShowcase />

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Services That Deliver Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive AI solutions are designed to transform your business operations 
              and deliver measurable value from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedServiceCard
              title="AI Enterprise Transformation"
              description="Complete AI transformation services that deliver 300% ROI and 70% cost reduction across your entire organization."
              icon="🚀"
              features={[
                "Strategic AI Roadmap",
                "Implementation & Integration",
                "Change Management",
                "Performance Optimization"
              ]}
              href="/services/ai-enterprise-transformation"
            />
            
            <FeaturedServiceCard
              title="Autonomous AI Systems"
              description="Self-managing AI systems that achieve 90% efficiency gains with minimal human intervention."
              icon="🤖"
              features={[
                "Self-Healing Infrastructure",
                "Predictive Maintenance",
                "Autonomous Decision Making",
                "Continuous Learning"
              ]}
              href="/services/autonomous-ai-systems"
            />
            
            <FeaturedServiceCard
              title="AI Cost Optimization"
              description="Proven strategies that deliver 70% cost reduction and 300% ROI through intelligent AI optimization."
              icon="💰"
              features={[
                "Resource Optimization",
                "Model Efficiency",
                "Pipeline Optimization",
                "Cost Monitoring"
              ]}
              href="/services/ai-cost-optimization"
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proven Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading organizations have achieved extraordinary results with our AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SuccessStory
              company="Fortune 500 Manufacturing"
              industry="Manufacturing"
              challenge="Manual processes consuming 60% of operational time"
              solution="Autonomous AI systems and predictive maintenance"
              results={{
                savings: "$12M",
                roi: "450%",
                efficiency: "95%",
                timeline: "18 months"
              }}
              href="/case-studies/fortune-500-ai-transformation-2026"
            />
            
            <SuccessStory
              company="Global Financial Services"
              industry="Financial Services"
              challenge="High fraud detection costs and slow response times"
              solution="AI-powered fraud detection and real-time analytics"
              results={{
                savings: "$8.5M",
                roi: "320%",
                efficiency: "88%",
                timeline: "12 months"
              }}
              href="/case-studies"
            />
            
            <SuccessStory
              company="Healthcare Technology Leader"
              industry="Healthcare"
              challenge="Inefficient diagnostic processes and high operational costs"
              solution="AI diagnostic systems and workflow automation"
              results={{
                savings: "$6.2M",
                roi: "280%",
                efficiency: "92%",
                timeline: "15 months"
              }}
              href="/case-studies"
            />
          </div>
        </div>
      </section>

      {/* Interactive Promotional Section */}
      <InteractivePromotionalSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Join hundreds of organizations that have achieved extraordinary results with our AI solutions. 
            Let's discuss how we can help you achieve similar success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}