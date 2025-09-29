import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
// Promotional banners will be imported individually as needed
// Import only the components that exist
import NewContent2026ShowcaseBanner from '../components/NewContent2026ShowcaseBanner';
import AIFutureWorkforceBanner2026 from '../components/AIFutureWorkforceBanner2026';

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
            <span>🚀 NEW 2026 Content:</span>
            <Link href="/blog/ai-future-workforce-2026" className="underline hover:text-yellow-200">AI Future Workforce</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/blog/ai-cybersecurity-2026" className="underline hover:text-yellow-200">AI Cybersecurity</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/blog/ai-sustainability-green-tech-2026" className="underline hover:text-yellow-200">AI Sustainability</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/case-studies/ai-finance-automation-success-2026" className="underline hover:text-yellow-200">$15M ROI Case Study</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/case-studies/ai-quantum-optimization-2026" className="underline hover:text-yellow-200">1000x Speed Improvement</Link>
          </div>
          <Link
            href="/blog"
            className="bg-white text-green-700 hover:bg-gray-100 px-4 py-1.5 rounded-md text-sm font-semibold"
          >
            Read the latest
          </Link>
        </div>
      </div>
      {/* Promotional Banners */}
      <NewContent2026ShowcaseBanner />
      <AIFutureWorkforceBanner2026 />
      
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
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Data Analytics</h3>
              <p className="text-gray-600 mb-4">Transform data into actionable insights with predictive modeling and real-time dashboards</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">$199/month</div>
              <Link href="/services" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Workflow Automation</h3>
              <p className="text-gray-600 mb-4">Automate business processes with intelligent workflow design and smart triggers</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">$149/month</div>
              <Link href="/services" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Virtual Assistant</h3>
              <p className="text-gray-600 mb-4">24/7 intelligent customer support with natural language processing</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">$99/month</div>
              <Link href="/services" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Content Recommendations */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
              <span className="w-4 h-4 mr-2">✨</span>
              AI-Powered Recommendations
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Personalized Content Recommendations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover content tailored to your interests and industry. Our AI analyzes your preferences to suggest the most relevant articles and case studies.
            </p>
          </div>

          {/* Featured Recommendations */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Link href="/blog/ai-future-workforce-2026" className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    NEW 2026
                  </span>
                  <span className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    FUTURE OF WORK
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-medium">📝 Article</span>
                  <span className="text-sm text-gray-500">Workforce</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Future Workforce 2026: Human-AI Collaboration Revolution
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover how AI is reshaping the workforce with 85% job transformation and 60% productivity gains through human-AI collaboration.
                </p>
                <div className="flex gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">85%</div>
                    <div className="text-xs text-gray-500">Jobs Transformed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">60%</div>
                    <div className="text-xs text-gray-500">Productivity Gain</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    22 min read
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-cybersecurity-2026" className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-red-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    NEW 2026
                  </span>
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    CYBERSECURITY
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-red-600 font-medium">📝 Article</span>
                  <span className="text-sm text-gray-500">Security</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  AI Cybersecurity 2026: Next-Generation Threat Protection
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Advanced AI security with 99.7% threat detection accuracy, autonomous incident response, and zero-trust architecture.
                </p>
                <div className="flex gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">99.7%</div>
                    <div className="text-xs text-gray-500">Detection Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">80%</div>
                    <div className="text-xs text-gray-500">Cost Reduction</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    28 min read
                  </div>
                  <div className="flex items-center text-red-600 font-semibold text-sm group-hover:text-red-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-finance-automation-success-2026" className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    NEW 2026
                  </span>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    FEATURED
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-green-600 font-medium">📊 Case Study</span>
                  <span className="text-sm text-gray-500">Finance</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  AI Finance Automation Success 2026: $15M ROI Case Study
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Fortune 500 company achieves 95% process automation and $15M annual ROI with AI finance solutions.
                </p>
                <div className="flex gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">$15M</div>
                    <div className="text-xs text-gray-500">Annual ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">95%</div>
                    <div className="text-xs text-gray-500">Automation</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    18 min read
                  </div>
                  <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="w-5 h-5 mr-2">✨</span>
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2" />
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
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">TechCorp Inc.</h3>
              <p className="text-gray-600 mb-4"><strong>Industry:</strong> E-commerce</p>
              <p className="text-gray-600 mb-4"><strong>Challenge:</strong> Manual data processing taking 40 hours/week</p>
              <p className="text-gray-600 mb-4"><strong>Solution:</strong> AI Data Analytics automation</p>
              <p className="text-gray-600 mb-4"><strong>Result:</strong> 90% time reduction, 60% cost savings</p>
              <div className="text-2xl font-bold text-green-600">$500K saved annually</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">HealthTech Solutions</h3>
              <p className="text-gray-600 mb-4"><strong>Industry:</strong> Healthcare</p>
              <p className="text-gray-600 mb-4"><strong>Challenge:</strong> Customer support overwhelmed with queries</p>
              <p className="text-gray-600 mb-4"><strong>Solution:</strong> AI Virtual Assistant implementation</p>
              <p className="text-gray-600 mb-4"><strong>Result:</strong> 80% faster response time, 24/7 support</p>
              <div className="text-2xl font-bold text-green-600">95% customer satisfaction</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">FinanceFlow Ltd.</h3>
              <p className="text-gray-600 mb-4"><strong>Industry:</strong> Fintech</p>
              <p className="text-gray-600 mb-4"><strong>Challenge:</strong> Complex workflow bottlenecks</p>
              <p className="text-gray-600 mb-4"><strong>Solution:</strong> AI Workflow Automation platform</p>
              <p className="text-gray-600 mb-4"><strong>Result:</strong> 75% process efficiency improvement</p>
              <div className="text-2xl font-bold text-green-600">300% ROI in 6 months</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Newsletter Signup */}
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

            {/* Content Highlights */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Latest Content Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <h4 className="font-semibold mb-1">AI Future Workforce 2026</h4>
                    <p className="text-sm opacity-90">Human-AI collaboration revolution</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🛡️</div>
                  <div>
                    <h4 className="font-semibold mb-1">AI Cybersecurity 2026</h4>
                    <p className="text-sm opacity-90">Next-generation threat protection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💰</div>
                  <div>
                    <h4 className="font-semibold mb-1">$15M Finance ROI</h4>
                    <p className="text-sm opacity-90">Fortune 500 success story</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">⚛️</div>
                  <div>
                    <h4 className="font-semibold mb-1">Quantum AI Optimization</h4>
                    <p className="text-sm opacity-90">1000x speed improvement</p>
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