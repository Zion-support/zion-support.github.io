import React from 'react';
import Link from 'next/link';
import NewContent2026MegaBanner from './components/NewContent2026MegaBanner';
import InteractiveAI2026Calculator from './components/InteractiveAI2026Calculator';
import ContentShowcase from './components/ContentShowcase';
import FeaturedServiceCard from './components/FeaturedServiceCard';
import SuccessStory from './components/SuccessStory';

export const metadata = {
  title: 'Zion Tech Group — AI Enterprise Transformation & IT Services | 300% ROI Guaranteed',
  description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains. Expert AI consulting, autonomous systems, and digital transformation services.',
  keywords: 'AI enterprise transformation, AI consulting, autonomous AI systems, enterprise AI services, digital transformation, AI implementation, AI ROI calculator, manufacturing AI, AI automation, AI strategy',
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
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI-powered enterprise solutions and digital transformation services",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ],
    "offers": {
      "@type": "Offer",
      "name": "AI Enterprise Transformation Services",
      "description": "Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains",
      "price": "50000",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="animate-fade-in">
        {/* New 2026 Mega Content Banner - Featured Promotional Banner */}
        <NewContent2026MegaBanner />
        
        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                {' '}AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
              and enterprise IT solutions that drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/services"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Our Services
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Expert Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">$2M+</div>
                <div className="text-gray-600">Cost Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Featured AI & IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our most popular services that are transforming businesses worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-200 relative">
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW 2026
                </div>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Quantum Solutions</h3>
                <p className="text-gray-600 mb-6">
                  1000x performance gains with revolutionary quantum AI algorithms and optimization
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Quantum optimization algorithms</li>
                  <li>• Quantum machine learning</li>
                  <li>• Quantum cryptography</li>
                  <li>• $50M+ annual savings</li>
                </ul>
                <div className="flex justify-between items-center">
                  <div className="text-purple-600 font-bold">Starting at $5,000/month</div>
                  <Link href="/services/ai-2026-quantum-solutions" className="text-purple-600 font-semibold hover:text-purple-700">
                    Learn More →
                  </Link>
                </div>
              </div>
              
              <FeaturedServiceCard
                title="AI Enterprise Automation"
                description="400% ROI with autonomous workflows and intelligent process optimization"
                price="$2,999/month"
                features={['Autonomous Workflows', '400% ROI', 'Process Mining', 'Intelligent Optimization']}
                href="/services/ai-enterprise-automation"
                popular={true}
              />
              <FeaturedServiceCard
                title="AI Data Analytics"
                description="Transform data into actionable insights with predictive modeling and real-time dashboards"
                price="$199/month"
                features={['Predictive Analytics', 'Real-time Dashboards', 'Data Integration']}
                href="/services/ai-data-analytics"
                popular={true}
              />
              <FeaturedServiceCard
                title="AI Workflow Automation"
                description="Automate business processes with intelligent workflow design and smart triggers"
                price="$149/month"
                features={['Process Automation', 'Smart Triggers', 'Performance Monitoring']}
                href="/services/ai-workflow-automation"
                popular={false}
              />
              <FeaturedServiceCard
                title="AI Virtual Assistant"
                description="24/7 intelligent customer support with natural language processing"
                price="$99/month"
                features={['24/7 Support', 'Multi-channel', 'Personalized Responses']}
                href="/services/ai-virtual-assistant"
                popular={false}
              />
              <FeaturedServiceCard
                title="Cloud Migration"
                description="Seamless migration to cloud infrastructure with zero downtime"
                price="$2,999"
                features={['Zero Downtime', 'Security Compliance', 'Cost Optimization']}
                href="/services/cloud-migration"
                popular={false}
              />
            </div>
          </div>
        </section>

        {/* Interactive AI 2026 Calculator */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                AI 2026 ROI Calculator
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Calculate your potential returns from AI 2026 transformation with our advanced interactive calculator
              </p>
            </div>
            <InteractiveAI2026Calculator />
          </div>
        </section>

        {/* NEW SEPT 2025 Content Banner */}
        <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="bg-white text-green-600 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide animate-pulse">
                🎉 New Content Alert — September 2025
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Fresh Insights: Enterprise AI Revolution
            </h2>
            <p className="text-xl text-center text-green-50 max-w-3xl mx-auto mb-10">
              Explore our latest in-depth guides on AI transformation — featuring real-world results, 
              implementation strategies, and proven ROI frameworks from 500+ successful deployments.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/blog/ai-agents-revolution-sept-2025" className="group">
                <div className="bg-white text-gray-900 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">🤖</span>
                    </div>
                    <div>
                      <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                        FEATURED
                      </span>
                      <h3 className="text-2xl font-bold group-hover:text-purple-600 transition-colors">
                        The AI Agents Revolution
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover how autonomous AI agents are achieving 85% automation rates, $5M+ cost savings, 
                    and 10x productivity gains. Complete implementation roadmap included.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>📅 Sept 30, 2025</span>
                      <span>⏱️ 12 min read</span>
                    </div>
                    <div className="text-purple-600 font-bold group-hover:text-purple-700">
                      Read Now →
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-purple-600">85%</div>
                        <div className="text-xs text-gray-600">Automation Rate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">$5M+</div>
                        <div className="text-xs text-gray-600">Cost Savings</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">10x</div>
                        <div className="text-xs text-gray-600">Productivity</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/blog/generative-ai-enterprise-sept-2025" className="group">
                <div className="bg-white text-gray-900 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">⚡</span>
                    </div>
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                        COMPREHENSIVE GUIDE
                      </span>
                      <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                        Generative AI in Enterprise
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The complete 2025 implementation guide achieving 400% ROI and 65% cost reduction. 
                    Step-by-step roadmap with proven strategies from 500+ deployments.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>📅 Sept 30, 2025</span>
                      <span>⏱️ 15 min read</span>
                    </div>
                    <div className="text-blue-600 font-bold group-hover:text-blue-700">
                      Read Now →
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">400%</div>
                        <div className="text-xs text-gray-600">Average ROI</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">65%</div>
                        <div className="text-xs text-gray-600">Cost Reduction</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">6-12</div>
                        <div className="text-xs text-gray-600">Months to ROI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="inline-block bg-white text-green-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-xl"
              >
                Explore All Latest Insights →
              </Link>
            </div>
          </div>
        </section>

        {/* Dynamic Content Showcase */}
        <ContentShowcase />
        
        {/* Latest Innovations Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Latest AI Innovations & Breakthroughs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead with cutting-edge AI technologies and revolutionary solutions that are transforming industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Link href="/blog/ai-2026-neural-superintelligence" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200 hover:border-indigo-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">AI 2026 Neural Superintelligence</h3>
                      <p className="text-sm text-gray-500">Breakthrough Technology</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Explore revolutionary AI systems that surpass human intelligence, delivering 1000x performance gains 
                    and transforming enterprise operations with unprecedented capabilities.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Published Jan 20, 2026</div>
                    <div className="text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/blog/quantum-ai-breakthrough-2026" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200 hover:border-purple-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">⚛️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Quantum AI Breakthrough</h3>
                      <p className="text-sm text-gray-500">Computational Revolution</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Explore how quantum-enhanced AI is solving impossible optimization problems in seconds, 
                    delivering 500x faster results and transforming computational capabilities.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Published Jan 20, 2026</div>
                    <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/neural-superintelligence-mega-success-2026" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200 hover:border-green-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">$500M Revenue Success</h3>
                      <p className="text-sm text-gray-500">Neural Superintelligence Case Study</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    See how a Fortune 500 company achieved $500M additional revenue and 1000x performance gains 
                    through neural superintelligence implementation in just 6 months.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Published Jan 20, 2026</div>
                    <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Explore All Innovations
              </Link>
            </div>
          </div>
        </section>
        
        {/* Success Stories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how we've helped businesses achieve remarkable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SuccessStory
                company="TechCorp Inc."
                industry="E-commerce"
                challenge="Manual data processing taking 40 hours/week"
                solution="AI Data Analytics automation"
                result="90% time reduction, 60% cost savings"
                metric="$500K saved annually"
              />
              <SuccessStory
                company="HealthTech Solutions"
                industry="Healthcare"
                challenge="Customer support overwhelmed with queries"
                solution="AI Virtual Assistant implementation"
                result="80% faster response time, 24/7 support"
                metric="95% customer satisfaction"
              />
              <SuccessStory
                company="FinanceFlow Ltd."
                industry="Fintech"
                challenge="Complex workflow bottlenecks"
                solution="AI Workflow Automation platform"
                result="75% process efficiency improvement"
                metric="300% ROI in 6 months"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our AI and IT solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}