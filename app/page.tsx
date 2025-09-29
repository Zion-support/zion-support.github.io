import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import NewBlogContentBanner2026 from '../components/NewBlogContentBanner2026';
import ContentShowcase from '../components/ContentShowcase';
import FeaturedServiceCard from '../components/FeaturedServiceCard';
import SuccessStory from '../components/SuccessStory';
import InteractiveContentShowcase from '../components/InteractiveContentShowcase';
import ContentRecommendationSystem from '../components/ContentRecommendationSystem';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full border border-cyan-400/30">
                <span className="text-cyan-400 font-semibold text-sm">AI-POWERED INNOVATION</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-purple-400/20 to-fuchsia-400/20 rounded-full border border-purple-400/30">
                <span className="text-purple-400 font-semibold text-sm">ENTERPRISE SOLUTIONS</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              The Future of AI is Here
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From autonomous systems to quantum computing, we're pioneering the next generation of enterprise AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Explore Our Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Clock className="w-5 h-5" />
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Blog Content Banner */}
      <section className="container mx-auto px-6 py-16">
        <NewBlogContentBanner2026 />
      </section>

      {/* Featured Services */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our AI Solutions
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive AI services designed to accelerate your digital transformation and drive unprecedented business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeaturedServiceCard
            title="Enterprise AI Automation"
            description="Transform your operations with intelligent automation systems that learn, adapt, and optimize continuously."
            icon="🤖"
            features={["Autonomous decision making", "Self-healing infrastructure", "Predictive analytics"]}
            href="/services/enterprise-ai"
          />
          <FeaturedServiceCard
            title="Quantum AI Computing"
            description="Leverage quantum computing power for complex problem-solving and exponential performance gains."
            icon="⚛️"
            features={["Quantum optimization", "Advanced cryptography", "Machine learning acceleration"]}
            href="/services/quantum-ai"
          />
          <FeaturedServiceCard
            title="Sustainable AI Solutions"
            description="Build environmentally conscious AI systems that reduce carbon footprint while maximizing efficiency."
            icon="🌱"
            features={["Green computing", "Carbon optimization", "Renewable energy integration"]}
            href="/services/sustainable-ai"
          />
        </div>
      </section>

      {/* Success Stories */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            See how leading organizations are transforming their operations with our AI solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SuccessStory
            company="TechCorp Global"
            industry="Manufacturing"
            challenge="Optimizing production efficiency and reducing waste"
            solution="Implemented AI-powered predictive maintenance and quality control systems"
            results={["40% reduction in downtime", "25% increase in production", "$2.3M annual savings"]}
          />
          <SuccessStory
            company="HealthTech Solutions"
            industry="Healthcare"
            challenge="Improving patient outcomes and diagnostic accuracy"
            solution="Deployed AI diagnostic assistants and treatment optimization systems"
            results={["30% improvement in outcomes", "50% faster diagnostics", "95% accuracy rate"]}
          />
          <SuccessStory
            company="FinanceFirst Bank"
            industry="Financial Services"
            challenge="Enhancing fraud detection and risk assessment"
            solution="Implemented advanced AI fraud detection and risk modeling systems"
            results={["99.9% fraud detection", "80% fewer false positives", "$15M prevented losses"]}
          />
        </div>
      </section>

      {/* Content Showcase */}
      <section className="container mx-auto px-6 py-16">
        <ContentShowcase />
      </section>

      {/* Interactive Content Recommendation */}
      <section className="container mx-auto px-6 py-16">
        <ContentRecommendationSystem />
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-fuchsia-500/10 rounded-3xl p-12 text-center border border-cyan-400/20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join the AI revolution and unlock unprecedented growth opportunities. 
            Our expert team is ready to help you implement cutting-edge AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/case-studies" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}