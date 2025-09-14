import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Globe, Users, TrendingUp, Star, CheckCircle, DollarSign, Clock, Building2 } from 'lucide-react';
import NewContent2025PromotionBanner from './components/NewContent2025PromotionBanner';
import NewContent2025ShowcaseSection from './components/NewContent2025ShowcaseSection';

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions | 750% ROI Guaranteed',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services delivering 750% average ROI.',
  keywords: ['AI automation', 'cloud computing', 'micro SaaS', 'technology consulting', 'enterprise solutions', 'digital transformation', '750% ROI', 'AI implementation'],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* New Content 2025 Promotion Banner */}
      <NewContent2025PromotionBanner />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🚀 AI & TECHNOLOGY SOLUTIONS</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Revolutionary AI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Cutting-edge AI, cloud infrastructure, and micro SaaS solutions delivering 
              <span className="font-bold text-yellow-300"> 750% average ROI</span> and 
              <span className="font-bold text-green-300"> $200M+ in savings</span> for enterprises worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">750%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">$200M+</div>
                <div className="text-sm text-gray-300">Total Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">500+</div>
                <div className="text-sm text-gray-300">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">99.7%</div>
                <div className="text-sm text-gray-300">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Content 2025 Showcase Section */}
      <NewContent2025ShowcaseSection />

      {/* Key Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions have delivered extraordinary results for companies of all sizes, 
              from startups to Fortune 500 enterprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">750%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Revolutionary Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI and technology solutions designed to transform your business 
              and deliver unprecedented results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Automation</h3>
              <p className="text-gray-600 mb-4">
                Revolutionary AI systems that operate independently, making intelligent decisions 
                and optimizing processes in real-time for maximum efficiency.
              </p>
              <div className="flex items-center text-sm text-green-600 font-semibold mb-4">
                <TrendingUp className="h-4 w-4 mr-2" />
                750% Average ROI
              </div>
              <Link href="/services/ai-automation" className="text-purple-600 font-semibold hover:text-purple-800">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Scalable, secure cloud solutions designed to support your business growth 
                and digital transformation with enterprise-grade reliability.
              </p>
              <div className="flex items-center text-sm text-green-600 font-semibold mb-4">
                <Shield className="h-4 w-4 mr-2" />
                99.9% Uptime Guarantee
              </div>
              <Link href="/services/cloud-infrastructure" className="text-purple-600 font-semibold hover:text-purple-800">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
              <p className="text-gray-600 mb-4">
                Custom micro SaaS applications that solve specific business challenges 
                with modern, scalable solutions tailored to your needs.
              </p>
              <div className="flex items-center text-sm text-green-600 font-semibold mb-4">
                <DollarSign className="h-4 w-4 mr-2" />
                $200M+ in Savings
              </div>
              <Link href="/services/micro-saas" className="text-purple-600 font-semibold hover:text-purple-800">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how companies like yours have achieved extraordinary results with our AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="font-bold text-gray-900">Manufacturing Giant</h3>
                  <p className="text-sm text-gray-600">$3.2B Company</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-green-600 mb-2">900% ROI</div>
              <p className="text-gray-600 text-sm mb-4">
                Achieved in 20 months through comprehensive AI transformation, saving $28.7M annually.
              </p>
              <Link href="/case-studies/ai-2025-manufacturing-transformation-900-roi-success" className="text-blue-600 font-semibold text-sm">
                Read Full Story →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <h3 className="font-bold text-gray-900">Financial Services</h3>
                  <p className="text-sm text-gray-600">$1.8B Bank</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-green-600 mb-2">1,200% ROI</div>
              <p className="text-gray-600 text-sm mb-4">
                Generated $67.2M additional revenue while reducing costs by $23.8M annually.
              </p>
              <Link href="/case-studies/ai-2025-financial-services-transformation-1200-roi-success" className="text-blue-600 font-semibold text-sm">
                Read Full Story →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <h3 className="font-bold text-gray-900">Advanced Analytics</h3>
                  <p className="text-sm text-gray-600">Fortune 500</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-green-600 mb-2">750% ROI</div>
              <p className="text-gray-600 text-sm mb-4">
                Transformed data into competitive advantage with $8.2M annual savings.
              </p>
              <Link href="/blog/ai-2025-advanced-analytics-revolution-ultimate-guide" className="text-blue-600 font-semibold text-sm">
                Read Full Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ companies already experiencing unprecedented growth with our 
            revolutionary AI and automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              View All Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}