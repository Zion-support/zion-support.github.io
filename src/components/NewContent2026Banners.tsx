import React from 'react';
import { Link } from 'react-router-dom';

// Latest Content 2026 Banner
export function LatestContent2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="text-sm opacity-90">Latest AI Content</span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-sm">
              <Link to="/blog/ai-autonomous-cloud-operations-2026" className="hover:text-yellow-200 transition-colors">
                AI Autonomous Cloud Operations
              </Link>
              <span className="opacity-50">•</span>
              <Link to="/blog/ai-fintech-transformation-2026" className="hover:text-yellow-200 transition-colors">
                AI FinTech Transformation
              </Link>
            </div>
          </div>
          <Link
            to="/blog"
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Explore All Content →
          </Link>
        </div>
      </div>
    </div>
  );
}

// AI Security Enterprise 2026 Banner
export function AISecurityEnterprise2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              NEW 2026
            </span>
            <span className="text-sm opacity-90">Enterprise Security</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            AI-Powered Enterprise Security 2026
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
            Revolutionary threat detection with 99.7% accuracy. Autonomous incident response and zero-trust architecture for enterprise-grade security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services/ai-cybersecurity-consulting"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Security Solutions
            </Link>
            <Link
              to="/blog/ai-cybersecurity-2026"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Read Security Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Multimodal Enterprise 2026 Banner
export function AIMultimodalEnterprise2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              NEW 2026
            </span>
            <span className="text-sm opacity-90">Multimodal AI</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            AI Multimodal Enterprise Solutions 2026
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
            Harness the power of text, image, audio, and video processing with unified AI models that deliver 95% accuracy across all modalities.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">📝</div>
              <div className="font-semibold">Text Processing</div>
              <div className="text-sm opacity-90">NLP & Document AI</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">🖼️</div>
              <div className="font-semibold">Computer Vision</div>
              <div className="text-sm opacity-90">Image & Video Analysis</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">🎵</div>
              <div className="font-semibold">Audio Processing</div>
              <div className="text-sm opacity-90">Speech & Sound AI</div>
            </div>
          </div>
          <Link
            to="/services/ai-multimodal-enterprise"
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Multimodal AI →
          </Link>
        </div>
      </div>
    </div>
  );
}

// AI Sustainability Transformation Banner
export function AISustainabilityTransformationBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              NEW 2026
            </span>
            
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            AI Sustainability & Green Tech 2026
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
            Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology and green computing.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-300">80%</div>
              <div className="font-semibold">Energy Reduction</div>
              <div className="text-sm opacity-90">Through AI optimization</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-300">$2M+</div>
              <div className="font-semibold">Annual Savings</div>
              <div className="text-sm opacity-90">From green tech</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-300">100%</div>
              <div className="font-semibold">Carbon Neutral</div>
              <div className="text-sm opacity-90">AI operations</div>
            </div>
          </div>
          <Link
            to="/blog/ai-sustainability-green-tech-2026"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Read Sustainability Guide →
          </Link>
        </div>
      </div>
    </div>
  );
}

// New Latest 2026 Content Banner
export function NewLatest2026ContentBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              NEW 2026
            </span>
            <span className="text-sm opacity-90">Latest Content</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Revolutionary AI Content 2026
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
            Discover cutting-edge AI insights, case studies, and implementation guides that are transforming industries worldwide.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Link to="/blog/ai-autonomous-cloud-operations-2026" className="group">
              <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-yellow-200">AI Autonomous Cloud Operations</h3>
                <p className="text-sm opacity-90">Self-healing infrastructure with 99.9% uptime</p>
              </div>
            </Link>
            <Link to="/case-studies/ai-retail-automation-2026" className="group">
              <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-yellow-200">AI Retail Automation Case Study</h3>
                <p className="text-sm opacity-90">$8M ROI with 98% automation</p>
              </div>
            </Link>
          </div>
          <Link
            to="/blog"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View All Latest Content →
          </Link>
        </div>
      </div>
    </div>
  );
}

// AI Autonomous Cloud Ops Banner
export function AIAutonomousCloudOpsBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              NEW 2026
            </span>
            <span className="text-sm opacity-90">Cloud Operations</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            AI Autonomous Cloud Operations 2026
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
            Transform your cloud infrastructure with AI-powered self-healing systems, predictive maintenance, and zero-touch operations.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-cyan-300">99.9%</div>
              
              <div className="text-sm opacity-90">Self-healing infrastructure</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-cyan-300">90%</div>
              <div className="font-semibold">Cost Reduction</div>
              <div className="text-sm opacity-90">Intelligent optimization</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              
              <div className="font-semibold">Touch Operations</div>
              <div className="text-sm opacity-90">Fully automated</div>
            </div>
          </div>
          <Link
            to="/blog/ai-autonomous-cloud-operations-2026"
            className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Read Complete Guide →
          </Link>
        </div>
      </div>
    </div>
  );
}

// AI FinTech Transformation Banner
export function AIFinTechTransformationBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              NEW 2026
            </span>
            <span className="text-sm opacity-90">FinTech Revolution</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            AI FinTech Transformation 2026
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
            Revolutionize your financial services with AI-powered automation, achieving 95% process efficiency and $5M+ annual savings.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-300">95%</div>
              
              <div className="text-sm opacity-90">Process efficiency</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-300">$5M+</div>
              <div className="font-semibold">Annual Savings</div>
              <div className="text-sm opacity-90">Cost reduction</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-300">99.9%</div>
              
              <div className="text-sm opacity-90">Transaction processing</div>
            </div>
          </div>
          <Link
            to="/blog/ai-fintech-transformation-2026"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Read FinTech Guide →
          </Link>
        </div>
      </div>
    </div>
  );
}

// AI Retail Automation Banner
export function AIRetailAutomationBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              NEW Case Study
            </span>
            <span className="text-sm opacity-90">Fortune 500</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            AI Retail Automation Success Story
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
            See how a Fortune 500 retailer achieved 98% automation, 300% productivity gains, and $8M annual ROI with AI retail automation.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-300">98%</div>
              <div className="font-semibold">Automation Rate</div>
              <div className="text-sm opacity-90">Process automation</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-300">300%</div>
              
              <div className="text-sm opacity-90">Performance gains</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-300">$8M</div>
              <div className="font-semibold">Annual ROI</div>
              <div className="text-sm opacity-90">Return on investment</div>
            </div>
          </div>
          <Link
            to="/case-studies/ai-retail-automation-2026"
            className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View Case Study →
          </Link>
        </div>
      </div>
    </div>
  );
}

// Latest 2026 Content Banner
export function Latest2026ContentBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              NEW 2026
            </span>
            <span className="text-sm opacity-90">Latest Content</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Cutting-Edge AI Content 2026
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
            Explore the latest AI innovations, case studies, and implementation guides that are revolutionizing industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link to="/blog/ai-autonomous-cloud-operations-2026" className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Cloud Operations
            </Link>
            <Link to="/blog/ai-fintech-transformation-2026" className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              FinTech Revolution
            </Link>
            <Link to="/case-studies/ai-retail-automation-2026" className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Retail Automation
            </Link>
            <Link to="/blog/ai-sustainability-green-tech-2026" className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Sustainability
            </Link>
          </div>
          <Link
            to="/blog"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore All Content →
          </Link>
        </div>
      </div>
    </div>
  );
}