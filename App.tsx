import React, { JSX } from "react";
import LatestContentBanner2025 from "./src/components/LatestContentBanner2025";
import FeaturedContentBanner2025 from "./src/components/FeaturedContentBanner2025";
import Revolutionary2026ContentMegaBanner from "./src/components/Revolutionary2026ContentMegaBanner";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8">
              <span className="text-blue-400 font-bold text-sm tracking-wider uppercase">
                ⚡ Leading Enterprise AI & Technology Solutions
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Zion Tech Group
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold">
              Revolutionary AI Breakthroughs: Meta-Cognitive, Quantum-Neural & Autonomous Operations
            </p>
            
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the future of AI with our breakthrough technologies: Meta-Cognitive AI that thinks about thinking, 
              Quantum-Neural Networks with 1000x processing speed, and Autonomous Operations achieving 98% automation rates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Get Started Today
              </a>
              <a 
                href="#revolutionary-breakthroughs" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Explore Revolutionary AI
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '1000x', label: 'Quantum Processing Speed', icon: '⚛️' },
              { value: '98%', label: 'Autonomous Operations Rate', icon: '🤖' },
              { value: '95%', label: 'Meta-Cognitive Decision Accuracy', icon: '🧠' },
              { value: '$500M+', label: 'Enterprise Cost Savings', icon: '💰' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary 2026 Content Section */}
      <section id="revolutionary-breakthroughs">
        <Revolutionary2026ContentMegaBanner />
      </section>

      {/* Latest Content Section */}
      <section id="latest-insights">
        <LatestContentBanner2025 />
      </section>

      {/* Featured Content Section */}
      <section className="py-20">
        <FeaturedContentBanner2025 />
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end AI and technology solutions designed for enterprise scale and mission-critical operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'AI & Machine Learning',
                description: 'Custom LLMs, computer vision, predictive analytics, and autonomous AI agents for enterprise automation.',
                features: ['Custom Model Development', 'MLOps & Deployment', 'AI Strategy Consulting']
              },
              {
                icon: '🛡️',
                title: 'AI Security & Governance',
                description: 'Comprehensive security frameworks for safe LLM deployment, protecting against emerging AI threats.',
                features: ['Threat Detection', 'Compliance Management', 'Security Operations']
              },
              {
                icon: '☁️',
                title: 'Cloud & Infrastructure',
                description: 'Multi-cloud architecture, Kubernetes orchestration, and infrastructure automation at scale.',
                features: ['Cloud Migration', 'DevOps Automation', 'Cost Optimization']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <span className="text-blue-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/services" 
                  className="inline-block text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-white">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join 500+ leading organizations that trust Zion Tech Group to deliver breakthrough AI and technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p className="mb-4">© 2025 Zion Tech Group. All rights reserved.</p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
