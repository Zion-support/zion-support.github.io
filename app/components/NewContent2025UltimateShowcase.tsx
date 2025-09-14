import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-60fa
<<<<<<< HEAD
<<<<<<< HEAD
import { ArrowRight, Star, TrendingUp, Users, Award, Zap } from 'lucide-react';

const NewContent2025UltimateShowcase = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Ultimate AI & Technology Showcase
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI, quantum computing, and enterprise transformation. 
            Comprehensive guides, real-world case studies, and cutting-edge insights.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Blog Post */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-sm text-yellow-400 font-medium">FEATURED</span>
                <h3 className="text-lg font-bold">AI Enterprise Transformation</h3>
              </div>
=======
=======
>>>>>>> origin/main

const NewContent2025UltimateShowcase = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge insights, case studies, and resources that will transform your understanding of AI in 2025. 
            From enterprise transformation to autonomous systems, explore the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Blog Posts */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Generative AI Enterprise Transformation</h3>
            <p className="text-gray-300 mb-6">
              Discover how generative AI is revolutionizing enterprise operations in 2025, delivering unprecedented productivity gains and cost savings.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">10 min read</span>
              <Link 
                href="/blog/ai-2025-generative-ai-enterprise-transformation"
                className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold mb-4">MLOps Breakthrough Revolution</h3>
            <p className="text-gray-300 mb-6">
              Learn how MLOps is transforming enterprise AI deployment, delivering 99.9% model reliability and 10x faster deployment cycles.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">12 min read</span>
              <Link 
                href="/blog/ai-2025-machine-learning-operations-mlops-breakthrough"
                className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Next-Gen Autonomous Systems</h3>
            <p className="text-gray-300 mb-6">
              Explore how next-generation autonomous systems are transforming industries, delivering unprecedented efficiency and intelligence.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">11 min read</span>
              <Link 
                href="/blog/ai-2025-next-generation-autonomous-systems-revolution"
                className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="text-2xl font-bold mb-4">Fortune 500 Manufacturing Transformation</h4>
              <p className="text-gray-300 mb-6">
                How a global manufacturing leader achieved 99.2% uptime and $34.7M in annual savings through AI transformation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">8 min read</span>
                <Link 
                  href="/case-studies/fortune-500-manufacturing-ai-transformation"
                  className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Case Study
                </Link>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🏥</div>
              <h4 className="text-2xl font-bold mb-4">Healthcare Network AI Revolution</h4>
              <p className="text-gray-300 mb-6">
                A major healthcare network serving 5.2M patients achieved 89% diagnostic accuracy and $28.3M in savings.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">9 min read</span>
                <Link 
                  href="/case-studies/healthcare-network-ai-diagnostic-revolution"
                  className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Downloadable Resources</h3>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">📚</div>
            <h4 className="text-2xl font-bold mb-4">Complete AI Transformation Guide 2025</h4>
            <p className="text-gray-300 mb-6">
              A comprehensive guide to successful AI transformation, covering strategy, implementation, and best practices. 
              Download our free 50-page guide with actionable insights and real-world examples.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">15 min read • PDF Download</span>
              <Link 
                href="/resources/ai-transformation-guide-2025"
                className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Download Guide
              </Link>
<<<<<<< HEAD
>>>>>>> origin/main
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Complete guide to AI transformation in 2025. Learn implementation strategies, 
              real-world success stories, and achieve 340% ROI increase.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-2025-enterprise-transformation-complete-guide"
                className="text-yellow-400 hover:text-yellow-300 font-semibold group-hover:translate-x-1 transition-transform duration-300"
              >
                Read Guide →
              </Link>
              <div className="flex items-center text-sm text-gray-400">
                <Star className="w-4 h-4 mr-1 text-yellow-400" />
                4.9/5
              </div>
            </div>
          </div>

          {/* Quantum Computing Guide */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-sm text-cyan-400 font-medium">BREAKTHROUGH</span>
                <h3 className="text-lg font-bold">Quantum Computing</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Explore quantum computing business applications. Discover how quantum 
              technology is revolutionizing industries and creating competitive advantages.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/quantum-computing-business-applications-2025"
                className="text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-transform duration-300"
              >
                Explore Quantum →
              </Link>
              <div className="flex items-center text-sm text-gray-400">
                <Users className="w-4 h-4 mr-1 text-cyan-400" />
                2.3K views
              </div>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-sm text-emerald-400 font-medium">SUCCESS STORY</span>
                <h3 className="text-lg font-bold">Manufacturing AI</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Real-world case study: How a Fortune 500 manufacturer achieved 340% ROI 
              through comprehensive AI transformation and strategic implementation.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/case-studies/ai-transformation-manufacturing-success"
                className="text-emerald-400 hover:text-emerald-300 font-semibold group-hover:translate-x-1 transition-transform duration-300"
              >
                View Case Study →
              </Link>
              <div className="flex items-center text-sm text-gray-400">
                <TrendingUp className="w-4 h-4 mr-1 text-emerald-400" />
                340% ROI
              </div>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">340%</div>
            <div className="text-gray-300">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
=======
            </div>
>>>>>>> origin/main
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already leveraging our AI and technology solutions. 
              Get started with our comprehensive guides and expert consulting services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Content Links */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">More Content Coming Soon:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full text-sm">AI 2026 Predictions</span>
            <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full text-sm">Quantum Security Guide</span>
            <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full text-sm">Edge Computing Solutions</span>
            <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full text-sm">Digital Transformation</span>
            <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full text-sm">Cloud Migration</span>
            <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full text-sm">AI Ethics Framework</span>
=======
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already benefiting from our AI solutions. 
            Get started with a free consultation and discover your transformation potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-lg"
            >
              Explore Services
            </Link>
>>>>>>> origin/main
          </div>
=======
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already benefiting from our AI solutions. 
            Get started with a free consultation and discover your transformation potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-lg"
            >
              Explore Services
            </Link>
          </div>
>>>>>>> origin/main
        </div>
      </div>
    </section>
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-040d
>>>>>>> 786cfaaf0d2bc00b11a733dfcf6fcdeaa815440e
=======

  return (
>>>>>>> cursor/create-and-deploy-new-content-510b
>>>>>>> cursor/create-and-deploy-new-content-60fa
  );
};

export default NewContent2025UltimateShowcase;