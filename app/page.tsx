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

      {/* Content Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Discover Our Latest AI Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with cutting-edge AI research, practical implementations, and proven business results.
            </p>
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

      {/* Dynamic Content Showcase */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium mb-6">
              <span className="w-4 h-4 mr-2">🚀</span>
              Latest Innovations
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cutting-Edge AI Solutions for 2026
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest research, case studies, and technical insights that are shaping the future of AI and technology.
            </p>
          </div>

          {/* Interactive Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Featured Article */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div className="relative h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">AI Agent Orchestration</h3>
                    <p className="text-blue-100">Multi-Agent Systems</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW 2026
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                  <span className="text-gray-500 text-sm">22 min read</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Agent Orchestration 2026: Multi-Agent System Architecture
                </h4>
                <p className="text-gray-600 mb-6">
                  Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns. Learn enterprise-grade AI agent coordination strategies.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">95%</div>
                      <div className="text-xs text-gray-500">Automation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$5M+</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                  </div>
                  <Link
                    href="/blog/ai-future-workforce-2026"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Featured Case Study */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div className="relative h-64 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">AI Sustainability</h3>
                    <p className="text-green-100">Green Technology</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW 2026
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Case Study</span>
                  <span className="text-gray-500 text-sm">15 min read</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  AI Sustainability Transformation 2026: $10M ROI Case Study
                </h4>
                <p className="text-gray-600 mb-6">
                  See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation and green technology.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$10M</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-600">100%</div>
                      <div className="text-xs text-gray-500">Carbon Neutral</div>
                    </div>
                  </div>
                  <Link
                    href="/case-studies/ai-finance-automation-success-2026"
                    className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/ai-sustainability-green-tech-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    NEW 2026
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-green-600 font-medium">📝 Article</span>
                  <span className="text-sm text-gray-500">Sustainability</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  AI Sustainability & Green Tech 2026
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.
                </p>
                <div className="flex gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">80%</div>
                    <div className="text-xs text-gray-500">Energy Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">$2M+</div>
                    <div className="text-xs text-gray-500">Savings</div>
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

            <Link href="/case-studies/ai-quantum-optimization-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    NEW 2026
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-purple-600 font-medium">📊 Case Study</span>
                  <span className="text-sm text-gray-500">Quantum Computing</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  AI Quantum Optimization 2026
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  See how a financial services company achieved 1000x optimization speed and $12M additional returns.
                </p>
                <div className="flex gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">1000x</div>
                    <div className="text-xs text-gray-500">Faster</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">$12M</div>
                    <div className="text-xs text-gray-500">Returns</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    12 min read
                  </div>
                  <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-quantum-computing-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    NEW 2026
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-indigo-600 font-medium">📝 Article</span>
                  <span className="text-sm text-gray-500">Quantum Computing</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  AI Quantum Computing 2026
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.
                </p>
                <div className="flex gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-indigo-600">1000x</div>
                    <div className="text-xs text-gray-500">Faster</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-indigo-600">95%</div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    25 min read
                  </div>
                  <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/blog"
              className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="w-5 h-5 mr-2">🚀</span>
              Explore All Innovations
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

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
            <Link href="/blog/ai-agentic-crm-automation-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New 2026
                  </span>
                  <span className="text-sm text-gray-500">14 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Agentic CRM Automation: From Leads to Revenue Autopilot
                </h3>
                <p className="text-gray-600 mb-4">
                  Build an agentic CRM that enriches leads, drafts outreach, and books meetings with approval gates.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">Read Article →</div>
              </div>
            </Link>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Edge Computing AI</h3>
                  <p className="text-sm text-gray-500">Real-time intelligence</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Achieve sub-50ms response times with AI processing at the edge of networks. 
                Perfect for autonomous vehicles, IoT devices, and real-time applications.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Published Jan 20, 2025</div>
                <Link
                  href="/blog/ai-edge-computing-2025"
                  className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI Cybersecurity</h3>
                  <p className="text-sm text-gray-500">Next-gen protection</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Revolutionary threat detection with 99.7% accuracy. Autonomous incident response 
                and zero-trust architecture for enterprise-grade security.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Published Jan 20, 2025</div>
                <Link
                  href="/blog/ai-cybersecurity-2025"
                  className="text-red-600 font-semibold hover:text-red-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Finance Automation</h3>
                  <p className="text-sm text-gray-500">$3M+ savings achieved</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                See how AI automation achieved 95% process reduction and $3M annual savings 
                for a leading financial services company.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Published Jan 20, 2025</div>
                <Link
                  href="/case-studies/ai-finance-automation"
                  className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
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
      
      {/* Latest Content Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest AI Insights & Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with our latest content, case studies, and AI innovations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Link href="/blog/ai-agent-orchestration-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New 2026
                  </span>
                  <span className="text-sm text-gray-500">22 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Agent Orchestration 2026: Multi-Agent System Architecture
                </h3>
                <p className="text-gray-600 mb-4">
                  Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>
            <Link href="/blog/ai-sustainability-green-tech-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New 2026
                  </span>
                  <span className="text-sm text-gray-500">18 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Sustainability & Green Tech 2026: Carbon-Neutral Operations
                </h3>
                <p className="text-gray-600 mb-4">
                  Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>
            <Link href="/blog/ai-quantum-computing-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New 2026
                  </span>
                  <span className="text-sm text-gray-500">25 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Quantum Computing 2026: Next-Generation Intelligence
                </h3>
                <p className="text-gray-600 mb-4">
                  Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>
            <Link href="/blog/ai-enterprise-automation-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New 2026
                  </span>
                  <span className="text-sm text-gray-500">18 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Enterprise Automation 2026: Complete Business Process Transformation
                </h3>
                <p className="text-gray-600 mb-4">
                  Transform your enterprise with AI automation. 95% process efficiency, $5M+ savings, and zero-touch operations.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>
            <Link href="/case-studies/ai-sustainability-transformation-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Case Study
                  </span>
                  <span className="text-sm text-gray-500">Fortune 500</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Sustainability Transformation 2026: $10M ROI Case Study
                </h3>
                <p className="text-gray-600 mb-4">
                  See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>
            <Link href="/case-studies/ai-quantum-optimization-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Case Study
                  </span>
                  <span className="text-sm text-gray-500">Financial Services</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Quantum Optimization 2026: 1000x Speed Improvement Case Study
                </h3>
                <p className="text-gray-600 mb-4">
                  See how a financial services company achieved 1000x optimization speed and $12M additional returns with quantum-enhanced AI.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>
            <Link href="/case-studies/fintech-ai-risk-compliance-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">FinTech</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  FinTech AI Risk Compliance: 70% Risk Reduction & $2.5M Savings
                </h3>
                <p className="text-gray-600 mb-4">
                  See how a leading fintech achieved 70% risk reduction with automated governance frameworks.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>
            <Link href="/blog/llm-cost-optimization-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Popular Article
                  </span>
                  <span className="text-sm text-gray-500">9 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  LLM Cost Optimization in 2025: Practical Strategies
                </h3>
                <p className="text-gray-600 mb-4">
                  Cut LLM spend by 30–70% with routing, caching, and quantization patterns.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>
            <Link href="/blog/edge-llm-latency-patterns" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">7 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Edge LLM Latency Patterns: Sub-200ms Interactions
                </h3>
                <p className="text-gray-600 mb-4">
                  Streaming, prefetch, and edge compute patterns for instant-feel AI UX.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>
            <Link href="/blog/genai-guardrails-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">11 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  GenAI Guardrails 2025: Practical Playbook for Reliable AI
                </h3>
                <p className="text-gray-600 mb-4">
                  Practical patterns to ship safe, reliable, and auditable GenAI systems in production.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>
            <Link href="/blog/ai-revolution-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">12 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Revolution 2025: Complete Business Transformation Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how AI is reshaping industries and creating unprecedented opportunities for growth in 2025.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-agents-in-the-enterprise-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">10 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Agents in the Enterprise: 2025 Adoption Playbook
                </h3>
                <p className="text-gray-600 mb-4">
                  Practical guide to rolling out autonomous AI agents across enterprise workflows with ROI.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/case-studies/techcorp-ai-transformation" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">E-commerce</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  TechCorp: 90% Efficiency Gain with AI
                </h3>
                <p className="text-gray-600 mb-4">
                  See how TechCorp achieved $500K annual savings and 90% efficiency improvement with AI transformation.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>

            <Link href="/case-studies/finserve-genai-risk-mitigation" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">Fintech</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  FinServe: GenAI Risk Mitigation & Compliance
                </h3>
                <p className="text-gray-600 mb-4">
                  How a fintech leader cut AI risk by 70% and achieved audit-ready compliance.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-customer-service-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">15 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI-Powered Customer Service Revolution
                </h3>
                <p className="text-gray-600 mb-4">
                  80% faster response times, 90% cost reduction - discover how AI is transforming customer support.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-healthcare-transformation-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Featured Article
                  </span>
                  <span className="text-sm text-gray-500">18 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Healthcare Transformation Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  40% better diagnostics, 60% improved outcomes - how AI is revolutionizing patient care.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/case-studies/retail-ai-transformation" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">Retail</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  RetailAI Corp: 150% Revenue Growth
                </h3>
                <p className="text-gray-600 mb-4">
                  See how RetailAI Corp achieved 150% revenue growth and 80% cost reduction with AI transformation.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-enterprise-implementation-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Guide
                  </span>
                  <span className="text-sm text-gray-500">18 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Enterprise AI Implementation 2025: Complete Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Master enterprise AI implementation with proven strategies, best practices, and real-world case studies.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Complete Guide →
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-mlops-best-practices-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Technical Guide
                  </span>
                  <span className="text-sm text-gray-500">16 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  MLOps Best Practices 2025: Production-Ready ML Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  Master MLOps with proven strategies for building, deploying, and maintaining production-ready ML systems.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read MLOps Guide →
                </div>
              </div>
            </Link>

            <Link href="/case-studies/enterprise-ai-transformation-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Featured Case Study
                  </span>
                  <span className="text-sm text-gray-500">12 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Enterprise AI Transformation: $5.2M ROI in 18 Months
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how a Fortune 500 company achieved $5.2M ROI with comprehensive AI transformation.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Content
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
                    <h4 className="font-semibold mb-1">AI Revolution 2025 Guide</h4>
                    <p className="text-sm opacity-90">Complete business transformation strategy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">⚙️</div>
                  <div>
                    <h4 className="font-semibold mb-1">Workflow Automation Guide</h4>
                    <p className="text-sm opacity-90">Reduce manual work by 80%</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h4 className="font-semibold mb-1">AI Analytics Implementation</h4>
                    <p className="text-sm opacity-90">Transform data into insights</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🏥</div>
                  <div>
                    <h4 className="font-semibold mb-1">HealthTech Success Story</h4>
                    <p className="text-sm opacity-90">80% efficiency gain with AI</p>
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

      {/* Additional Content Sections */}

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
