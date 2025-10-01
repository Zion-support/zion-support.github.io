import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, TrendingUp, Zap, Package } from 'lucide-react';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, automation',
};

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* BREAKING: NEW OCTOBER 2025 CONTENT ANNOUNCEMENT */}
      <div className="w-full bg-gradient-to-r from-purple-700 via-blue-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-3 animate-pulse">
              🚀 JUST PUBLISHED: OCTOBER 2025
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Revolutionary AI Transformation Guides
            </h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto opacity-95">
              New case studies and implementation guides showing how companies achieved $12M+ ROI through AI transformation
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/blog/ai-powered-devops-revolution-2025"
                className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                DevOps Revolution Guide →
              </Link>
              <Link
                href="/blog/ai-retail-personalization-2025"
                className="bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Retail AI Personalization →
              </Link>
              <Link
                href="/case-studies/manufacturing-ai-transformation-12m-roi"
                className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors"
              >
                View $12M ROI Case Study →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* NEW CONTENT SHOWCASE CARDS */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest AI Implementation Guides
            </h2>
            <p className="text-xl text-gray-600">
              Proven strategies and real-world results from successful AI transformations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* DevOps Guide */}
            <Link href="/blog/ai-powered-devops-revolution-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-blue-200 hover:border-blue-400 transform hover:scale-105">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <Zap className="w-12 h-12" />
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                      NEW 2025
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">AI-Powered DevOps Revolution</h3>
                  <p className="text-blue-100">10x faster deployments, 95% fewer incidents</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      DevOps & CI/CD
                    </span>
                    <span className="text-sm text-gray-500">28 min read</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Transform your software delivery pipeline with intelligent automation. Achieve 10x faster deployments, 
                    eliminate 95% of incidents, and save $2M+ annually through AI-powered DevOps.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">10x</div>
                      <div className="text-xs text-gray-500">Faster Deploys</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-xs text-gray-500">Fewer Incidents</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">$2M+</div>
                      <div className="text-xs text-gray-500">Annual Savings</div>
                    </div>
                  </div>
                  <div className="flex items-center text-blue-600 font-bold group-hover:text-blue-700">
                    Read Complete Guide
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Retail Personalization */}
            <Link href="/blog/ai-retail-personalization-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-purple-200 hover:border-purple-400 transform hover:scale-105">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="w-12 h-12" />
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                      NEW 2025
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">AI Retail Personalization</h3>
                  <p className="text-purple-100">3x revenue through hyper-personalization</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Retail & E-Commerce
                    </span>
                    <span className="text-sm text-gray-500">35 min read</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Discover how leading retailers use AI to deliver hyper-personalized shopping experiences 
                    that drive 3x revenue increases, 150% conversion improvements, and unmatched customer loyalty.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">3x</div>
                      <div className="text-xs text-gray-500">Revenue Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">150%</div>
                      <div className="text-xs text-gray-500">Conversions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">91%</div>
                      <div className="text-xs text-gray-500">Retention</div>
                    </div>
                  </div>
                  <div className="flex items-center text-purple-600 font-bold group-hover:text-purple-700">
                    Read Complete Guide
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Manufacturing Case Study */}
            <Link href="/case-studies/manufacturing-ai-transformation-12m-roi" className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-green-200 hover:border-green-400 transform hover:scale-105">
                <div className="bg-gradient-to-br from-green-600 to-teal-600 p-8 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <Package className="w-12 h-12" />
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                      CASE STUDY
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Manufacturing Excellence</h3>
                  <p className="text-green-100">$12M ROI and 99.4% uptime achieved</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Manufacturing
                    </span>
                    <span className="text-sm text-gray-500">$2.4B Company</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    See how a global manufacturer achieved $12M annual savings, 99.4% equipment uptime, 
                    and 47% productivity increase through comprehensive AI transformation.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$12M</div>
                      <div className="text-xs text-gray-500">Annual Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">99.4%</div>
                      <div className="text-xs text-gray-500">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">450%</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                  </div>
                  <div className="flex items-center text-green-600 font-bold group-hover:text-green-700">
                    View Full Case Study
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
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

      {/* Latest Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest AI Insights & Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with our latest content, case studies, and AI innovations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/ai-powered-devops-revolution-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    🚀 NEW: October 2025
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI-Powered DevOps Revolution: 10x Faster Deployments
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete guide to transforming software delivery with AI. Achieve 10x faster deployments and eliminate 95% of incidents.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-retail-personalization-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    🛍️ NEW: October 2025
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Retail Personalization: Driving 3X Revenue Growth
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how leading retailers use AI hyper-personalization to achieve 3x revenue increases and 150% conversion improvements.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/case-studies/manufacturing-ai-transformation-12m-roi" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    📊 NEW Case Study
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Manufacturing Excellence: $12M ROI & 99.4% Uptime
                </h3>
                <p className="text-gray-600 mb-4">
                  How a $2.4B manufacturer achieved $12M annual savings, 99.4% equipment uptime, and 450% ROI through AI transformation.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All Content
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how our AI and IT solutions can drive your success—just like the companies in our case studies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
          <div className="mt-8 text-sm opacity-90">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </section>
    </div>
  );
}
