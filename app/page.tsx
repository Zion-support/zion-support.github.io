import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Star, TrendingUp, Users, Zap } from 'lucide-react';
import Revolutionary2026ContentBanner from '../components/Revolutionary2026ContentBanner';
import { NewContent2026PromotionalBanners } from '../components/NewContent2026PromotionalBanners';
import ContentShowcase from '../components/ContentShowcase';
import FeaturedServiceCard from '../components/FeaturedServiceCard';
import SuccessStory from '../components/SuccessStory';
import InteractiveContentShowcase from '../components/InteractiveContentShowcase';
import ContentRecommendationSystem from '../components/ContentRecommendationSystem';
import InteractiveContentRecommendation from '../components/InteractiveContentRecommendation';
import EnhancedContentShowcase2026 from '../components/EnhancedContentShowcase2026';
import LatestContent2026Banner from '../components/LatestContent2026Banner';
import UltimateContent2026Banner from '../components/UltimateContent2026Banner';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, automation',
};

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* New Content Promo Strip */}
      <div className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-between">
          <div className="flex items-center gap-2 text-sm md:text-base">
            <span>🚀 BREAKTHROUGH 2026:</span>
            <Link href="/blog/ai-autonomous-enterprise-2026" className="underline hover:text-yellow-200 font-semibold">Autonomous Enterprise</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/blog/ai-quantum-optimization-2026" className="underline hover:text-yellow-200 font-semibold">Quantum AI (1000x Faster)</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/case-studies/ai-autonomous-enterprise-success-2026" className="underline hover:text-yellow-200 font-semibold">$25M ROI Success Story</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/blog/ai-agent-orchestration-2026" className="underline hover:text-yellow-200">Agent Orchestration</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/blog/ai-platform-architecture-2026" className="underline hover:text-yellow-200">Platform Architecture</Link>
          </div>
          <Link
            href="/blog"
            className="bg-white text-green-700 hover:bg-gray-100 px-4 py-1.5 rounded-md text-sm font-semibold"
          >
            Explore All Content →
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI & Automation</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Enterprise-grade AI solutions, micro SaaS platforms, and cutting-edge IT services. 
            Join 500+ companies already transforming with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Ultimate 2026 Content Banner */}
      <UltimateContent2026Banner />
      
      {/* Revolutionary 2026 Content Banner */}
      <Revolutionary2026ContentBanner />
      
      {/* Latest 2026 Content Banner */}
      <LatestContent2026Banner />
      
      {/* New Content Promotional Banners */}
      <NewContent2026PromotionalBanners />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Companies Transformed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">$2.5B+</div>
              <div className="text-gray-600">ROI Generated</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Content Showcase 2026 */}
      <EnhancedContentShowcase2026 />

      {/* Interactive Content Showcase */}
      <InteractiveContentShowcase />

      {/* Content Recommendation System */}
      <ContentRecommendationSystem />

      {/* Interactive Content Recommendation */}
      <InteractiveContentRecommendation />

      {/* Content Showcase */}
      <ContentShowcase />

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for modern businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedServiceCard
              icon={<Zap className="w-8 h-8 text-blue-600" />}
              title="AI Autonomous Cloud Ops"
              description="Self-healing infrastructure with 99.9% uptime and automated scaling"
              features={["Auto-scaling", "Predictive maintenance", "Cost optimization", "Security automation"]}
              href="/services/ai-autonomous-cloud-ops"
            />
            <FeaturedServiceCard
              icon={<TrendingUp className="w-8 h-8 text-green-600" />}
              title="AI FinTech Transformation"
              description="Revolutionary financial services with AI-powered risk management"
              features={["Risk assessment", "Fraud detection", "Algorithmic trading", "Compliance automation"]}
              href="/services/ai-fintech-transformation"
            />
            <FeaturedServiceCard
              icon={<Users className="w-8 h-8 text-purple-600" />}
              title="AI Retail Automation"
              description="Personalized customer experiences with intelligent automation"
              features={["Personalization", "Inventory optimization", "Customer service AI", "Predictive analytics"]}
              href="/services/ai-retail-automation"
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from real companies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SuccessStory
              company="TechCorp"
              industry="Technology"
              challenge="Legacy system migration and AI integration"
              solution="Complete digital transformation with AI-powered automation"
              results={["$25M cost savings", "300% efficiency increase", "99.9% uptime"]}
              href="/case-studies/techcorp-transformation"
            />
            <SuccessStory
              company="FinanceFlow"
              industry="FinTech"
              challenge="Risk management and compliance automation"
              solution="AI-powered risk assessment and regulatory compliance"
              results={["$50M risk reduction", "95% faster compliance", "Zero violations"]}
              href="/case-studies/financeflow-ai-transformation"
            />
            <SuccessStory
              company="RetailMax"
              industry="Retail"
              challenge="Customer personalization and inventory optimization"
              solution="AI-driven personalization and predictive inventory management"
              results={["40% sales increase", "60% inventory reduction", "85% customer satisfaction"]}
              href="/case-studies/retailmax-ai-automation"
            />
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600">Stay ahead with our expert analysis and industry trends</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">NEW 2026</span>
                  <span className="text-sm text-gray-500">Jan 15, 2026</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <Link href="/blog/ai-autonomous-enterprise-2026" className="hover:text-blue-600">
                    The Future of Autonomous Enterprise: AI That Runs Itself
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how autonomous AI systems are revolutionizing enterprise operations, 
                  reducing costs by 60% while increasing efficiency by 300%.
                </p>
                <Link 
                  href="/blog/ai-autonomous-enterprise-2026"
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">QUANTUM</span>
                  <span className="text-sm text-gray-500">Jan 12, 2026</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <Link href="/blog/ai-quantum-optimization-2026" className="hover:text-blue-600">
                    Quantum AI: 1000x Faster Processing Revolution
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore how quantum computing is accelerating AI processing, 
                  enabling real-time decision making for complex enterprise problems.
                </p>
                <Link 
                  href="/blog/ai-quantum-optimization-2026"
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">CASE STUDY</span>
                  <span className="text-sm text-gray-500">Jan 10, 2026</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <Link href="/case-studies/ai-autonomous-enterprise-success-2026" className="hover:text-blue-600">
                    $25M ROI: How We Transformed Enterprise Operations
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Real case study showing how our AI solutions generated $25M in ROI 
                  for a Fortune 500 company in just 6 months.
                </p>
                <Link 
                  href="/case-studies/ai-autonomous-enterprise-success-2026"
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ companies already using our AI solutions to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              See Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}