import React from 'react';
import Link from 'next/link';
import Revolutionary2026ContentBanner from '../components/Revolutionary2026ContentBanner';
import ContentShowcase from '../components/ContentShowcase';
import FeaturedServiceCard from '../components/FeaturedServiceCard';
import SuccessStory from '../components/SuccessStory';
import InteractiveContentShowcase from '../components/InteractiveContentShowcase';
import ContentRecommendationSystem from '../components/ContentRecommendationSystem';
import InteractiveContentRecommendation from '../components/InteractiveContentRecommendation';

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
            <span>✨ NEW 2026:</span>
            <Link href="/blog/ai-2026-revolutionary-breakthroughs" className="underline hover:text-yellow-200">Revolutionary Breakthroughs</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/blog/ai-autonomous-enterprise-transformation-2026" className="underline hover:text-yellow-200">Autonomous Enterprise</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/blog/ai-quantum-computing-enterprise-2026" className="underline hover:text-yellow-200">Quantum AI</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/case-studies/ai-autonomous-enterprise-success-2026" className="underline hover:text-yellow-200">$25M ROI Case Study</Link>
          </div>
          <Link
            href="/blog"
            className="bg-white text-indigo-700 hover:bg-gray-100 px-4 py-1.5 rounded-md text-sm font-semibold"
          >
            Read the latest
          </Link>
        </div>
      </div>

      {/* Revolutionary 2026 Content Banner */}
      <Revolutionary2026ContentBanner />
      
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
              href="/blog/ai-2026-revolutionary-breakthroughs"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              🚀 Read Latest AI Guide
            </Link>
            <Link
              href="/case-studies/ai-autonomous-enterprise-success-2026"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              📈 View $25M Success Story
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
              <div className="text-3xl font-bold text-blue-600">$25M+</div>
              <div className="text-gray-600">ROI Achieved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured New Content Showcase */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                ✨ NEW 2026 CONTENT
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Revolutionary AI Content & Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the latest AI innovations, transformation guides, and real-world success stories 
              that are reshaping businesses in 2026
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔮</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI 2026 Revolutionary Breakthroughs</h3>
                  <p className="text-sm text-gray-500">Complete Enterprise Guide</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Discover the 15 revolutionary AI breakthroughs reshaping enterprise technology. 
                From quantum AI to autonomous operations, learn how to capitalize on $50B+ market opportunities.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">45 min read</div>
                <Link
                  href="/blog/ai-2026-revolutionary-breakthroughs"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI Autonomous Enterprise</h3>
                  <p className="text-sm text-gray-500">Self-Managing Operations</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Master autonomous AI enterprise operations with zero-touch business management, 
                predictive analytics, and self-optimizing systems. Achieve 99.9% uptime and 90% cost reduction.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">30 min read</div>
                <Link
                  href="/blog/ai-autonomous-enterprise-transformation-2026"
                  className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI Quantum Computing</h3>
                  <p className="text-sm text-gray-500">Revolutionary Intelligence</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Harness quantum computing for AI breakthroughs with 1000x faster optimization 
                and revolutionary capabilities. Complete enterprise implementation guide.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">25 min read</div>
                <Link
                  href="/blog/ai-quantum-computing-enterprise-2026"
                  className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Explore All AI Content
            </Link>
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
            <FeaturedServiceCard
              title="AI Data Analytics"
              description="Transform data into actionable insights with predictive modeling and real-time dashboards"
              price="$199/month"
              features={['Predictive Analytics', 'Real-time Dashboards', 'Data Integration']}
              to="/services/ai-data-analytics"
              popular={true}
            />
            <FeaturedServiceCard
              title="AI Workflow Automation"
              description="Automate business processes with intelligent workflow design and smart triggers"
              price="$149/month"
              features={['Process Automation', 'Smart Triggers', 'Performance Monitoring']}
              to="/services/ai-workflow-automation"
              popular={false}
            />
            <FeaturedServiceCard
              title="AI Virtual Assistant"
              description="24/7 intelligent customer support with natural language processing"
              price="$99/month"
              features={['24/7 Support', 'Multi-channel', 'Personalized Responses']}
              to="/services/ai-virtual-assistant"
              popular={false}
            />
            <FeaturedServiceCard
              title="Cloud Migration"
              description="Seamless migration to cloud infrastructure with zero downtime"
              price="$2,999"
              features={['Zero Downtime', 'Security Compliance', 'Cost Optimization']}
              to="/services/cloud-migration"
              popular={false}
            />
            <FeaturedServiceCard
              title="DevOps Automation"
              description="Automate CI/CD pipelines and infrastructure management"
              price="$399/month"
              features={['CI/CD Pipelines', 'Infrastructure as Code', 'Auto-scaling']}
              to="/services/devops-automation"
              popular={false}
            />
            <FeaturedServiceCard
              title="Cybersecurity Consulting"
              description="Advanced threat detection and zero-trust security architecture"
              price="$599/month"
              features={['Threat Detection', 'Zero-trust Architecture', 'Compliance']}
              to="/services/cybersecurity-consulting"
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* Dynamic Content Showcase */}
      <ContentShowcase />
      
      {/* Interactive Content Hub */}
      <InteractiveContentShowcase />
      
      {/* Interactive Content Recommendations */}
      <InteractiveContentRecommendation />

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

      {/* Enhanced Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-6">
                Stay Ahead with AI & Tech Insights
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get weekly updates on AI trends, tech innovations, and exclusive service offers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start max-w-md mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm mt-4 opacity-75">
                Join 10,000+ professionals. Unsubscribe anytime.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Latest Content Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🔮</div>
                  <div>
                    <h4 className="font-semibold mb-1">AI 2026 Revolutionary Breakthroughs</h4>
                    <p className="text-sm opacity-90">The future of enterprise AI</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🏢</div>
                  <div>
                    <h4 className="font-semibold mb-1">AI Autonomous Enterprise</h4>
                    <p className="text-sm opacity-90">Self-managing operations with 99.9% uptime</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">⚛️</div>
                  <div>
                    <h4 className="font-semibold mb-1">AI Quantum Computing</h4>
                    <p className="text-sm opacity-90">1000x faster optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <h4 className="font-semibold mb-1">$25M Success Story</h4>
                    <p className="text-sm opacity-90">Fortune 500 transformation case study</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <Link
                  href="/blog"
                  className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  View All Content →
                </Link>
              </div>
            </div>
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
  );
}