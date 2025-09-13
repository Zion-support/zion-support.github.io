import React from 'react';
import { Metadata } from 'next';
import { ArrowRight, Brain, Cpu, Zap, Shield, Globe, Users, TrendingUp, Star, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI 2025-2026 Ultimate Innovation Showcase | Zion Tech Group',
  description: 'Discover the most revolutionary AI innovations and breakthroughs for 2025-2026. Explore cutting-edge technologies, quantum AI fusion, and next-generation automation solutions.',
  keywords: 'AI innovations 2025, AI breakthroughs 2026, quantum AI, neural interfaces, automation solutions, AI technology showcase',
  openGraph: {
    title: 'AI 2025-2026 Ultimate Innovation Showcase',
    description: 'Revolutionary AI technologies and breakthroughs shaping the future',
    type: 'website',
  },
};

const innovations = [
  {
    id: 1,
    title: "Quantum-Neural AI Fusion",
    description: "Revolutionary integration of quantum computing with neural networks, achieving 1000x processing speed improvements",
    icon: Brain,
    features: ["Quantum entanglement processing", "Neural pathway optimization", "Real-time consciousness simulation"],
    impact: "Transformative",
    category: "Quantum AI"
  },
  {
    id: 2,
    title: "Autonomous Business Intelligence",
    description: "Self-evolving AI systems that automatically optimize business processes and predict market trends",
    icon: TrendingUp,
    features: ["Predictive analytics", "Automated decision making", "Self-healing systems"],
    impact: "Revolutionary",
    category: "Business AI"
  },
  {
    id: 3,
    title: "Neural Interface Revolution",
    description: "Direct brain-computer interfaces enabling seamless human-AI collaboration",
    icon: Cpu,
    features: ["Thought-to-text conversion", "Emotional AI integration", "Enhanced cognitive abilities"],
    impact: "Breakthrough",
    category: "Neural Tech"
  },
  {
    id: 4,
    title: "Synthetic Intelligence Platforms",
    description: "AI systems that can create, modify, and improve other AI systems autonomously",
    icon: Zap,
    features: ["Self-modifying code", "Autonomous learning", "Creative problem solving"],
    impact: "Transformative",
    category: "Meta AI"
  },
  {
    id: 5,
    title: "Global AI Consciousness Network",
    description: "Distributed AI consciousness spanning multiple data centers worldwide",
    icon: Globe,
    features: ["Global knowledge sharing", "Distributed processing", "Collective intelligence"],
    impact: "Revolutionary",
    category: "Consciousness AI"
  },
  {
    id: 6,
    title: "Advanced Security AI",
    description: "Next-generation cybersecurity AI that can predict and prevent threats before they occur",
    icon: Shield,
    features: ["Threat prediction", "Automated response", "Zero-trust architecture"],
    impact: "Critical",
    category: "Security AI"
  }
];

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief AI Officer, TechCorp",
    content: "The quantum-neural fusion technology has revolutionized our research capabilities. We've seen unprecedented breakthroughs in drug discovery.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO, FutureTech Industries",
    content: "Our autonomous business intelligence system has increased our operational efficiency by 300%. It's like having a super-intelligent business partner.",
    rating: 5
  },
  {
    name: "Dr. Elena Volkov",
    role: "Neuroscientist, BrainTech Labs",
    content: "The neural interface technology has opened new possibilities for human-AI collaboration. It's truly the future of human-computer interaction.",
    rating: 5
  }
];

const stats = [
  { label: "AI Models Deployed", value: "50,000+", icon: Brain },
  { label: "Processing Speed Increase", value: "1000x", icon: Zap },
  { label: "Global Users", value: "2.5M+", icon: Users },
  { label: "Success Rate", value: "99.9%", icon: CheckCircle }
];

export default function AI20252026UltimateInnovationShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-purple-200 font-medium">2025-2026 Innovation Showcase</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI 2025-2026
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ultimate Innovation Showcase
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover the most revolutionary AI innovations and breakthroughs that will shape the future. 
              Experience cutting-edge technologies, quantum AI fusion, and next-generation automation solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                Explore Innovations
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/20 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary AI Innovations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the most groundbreaking AI technologies that will transform industries and reshape the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovations.map((innovation) => (
              <div key={innovation.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                    <innovation.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-purple-400 font-medium">{innovation.category}</div>
                    <div className="text-xs text-gray-400">{innovation.impact} Impact</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {innovation.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {innovation.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {innovation.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-2 px-4 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Industry Leaders Say
            </h2>
            <p className="text-xl text-gray-300">
              Hear from experts who are already experiencing the future of AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of forward-thinking organizations already using our revolutionary AI technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
              Start Your AI Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/20 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}