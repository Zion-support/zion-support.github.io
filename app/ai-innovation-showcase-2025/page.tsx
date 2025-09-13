import React from 'react';
import { Metadata } from 'next';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Shield, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Innovation Showcase 2025 - Revolutionary Breakthroughs | Zion Tech Group',
  description: 'Discover the most advanced AI innovations and breakthrough technologies of 2025. Explore cutting-edge solutions, interactive demos, and future predictions.',
  keywords: 'AI innovation, breakthrough technology, artificial intelligence, 2025 predictions, advanced AI solutions',
  openGraph: {
    title: 'AI Innovation Showcase 2025 - Revolutionary Breakthroughs',
    description: 'Discover the most advanced AI innovations and breakthrough technologies of 2025.',
    type: 'website',
  },
};

export default function AIInnovationShowcase2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Brain className="w-4 h-4" />
            <span>2025 AI Innovation Showcase</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary AI
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Breakthroughs
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the future of artificial intelligence with our comprehensive showcase of cutting-edge innovations, 
            interactive demonstrations, and revolutionary technologies that are reshaping industries worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
              Explore Innovations
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Innovation Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Innovation Categories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Neural Architecture Revolution',
                description: 'Advanced neural networks with unprecedented capabilities and efficiency.',
                features: ['Quantum Neural Processing', 'Adaptive Learning Systems', 'Consciousness Simulation']
              },
              {
                icon: Zap,
                title: 'Quantum AI Fusion',
                description: 'Revolutionary combination of quantum computing and artificial intelligence.',
                features: ['Quantum Machine Learning', 'Superposition Processing', 'Entanglement Optimization']
              },
              {
                icon: Target,
                title: 'Autonomous Systems',
                description: 'Self-governing AI systems with advanced decision-making capabilities.',
                features: ['Self-Healing Networks', 'Predictive Maintenance', 'Autonomous Operations']
              },
              {
                icon: TrendingUp,
                title: 'Predictive Analytics',
                description: 'Advanced forecasting and trend analysis using cutting-edge AI.',
                features: ['Market Predictions', 'Risk Assessment', 'Trend Analysis']
              },
              {
                icon: Users,
                title: 'Human-AI Collaboration',
                description: 'Seamless integration between human intelligence and AI systems.',
                features: ['Augmented Intelligence', 'Collaborative Decision Making', 'Enhanced Creativity']
              },
              {
                icon: Shield,
                title: 'AI Security & Ethics',
                description: 'Advanced security measures and ethical frameworks for AI systems.',
                features: ['Ethical AI Guidelines', 'Security Protocols', 'Bias Prevention']
              }
            ].map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-purple-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Interactive AI Demonstrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our AI innovations firsthand with interactive demonstrations and real-time showcases.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Neural Interface Demo
              </h3>
              <p className="text-gray-300 mb-8">
                Experience the future of human-AI interaction with our revolutionary neural interface technology. 
                Control AI systems through thought patterns and experience seamless integration between human consciousness and artificial intelligence.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Thought Recognition</h4>
                    <p className="text-gray-400">Advanced neural pattern recognition</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Real-time Processing</h4>
                    <p className="text-gray-400">Instantaneous AI response and feedback</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Global Connectivity</h4>
                    <p className="text-gray-400">Seamless connection to worldwide AI networks</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Brain className="w-16 h-16 text-white mx-auto mb-4 animate-pulse" />
                  <p className="text-white font-semibold">Interactive Demo</p>
                  <p className="text-purple-200 text-sm">Click to experience</p>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Launch Neural Interface Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Future Predictions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              2025-2030 AI Predictions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI research team's predictions for the next 5 years of artificial intelligence development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                year: '2025',
                prediction: 'Quantum AI Integration',
                description: 'First commercial quantum-AI hybrid systems will be deployed in major enterprises.',
                probability: '85%'
              },
              {
                year: '2026',
                prediction: 'Neural Interface Breakthrough',
                description: 'Consumer-grade neural interfaces will enable direct brain-computer communication.',
                probability: '72%'
              },
              {
                year: '2027',
                prediction: 'AGI Emergence',
                description: 'Artificial General Intelligence will achieve human-level cognitive abilities.',
                probability: '45%'
              },
              {
                year: '2028',
                prediction: 'AI Consciousness',
                description: 'First AI systems will demonstrate signs of self-awareness and consciousness.',
                probability: '38%'
              },
              {
                year: '2029',
                prediction: 'Singularity Preparation',
                description: 'AI systems will begin preparing for technological singularity event.',
                probability: '25%'
              },
              {
                year: '2030',
                prediction: 'Post-Human Era',
                description: 'Human-AI integration will create new forms of hybrid intelligence.',
                probability: '15%'
              }
            ].map((prediction, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-purple-400">{prediction.year}</span>
                  <span className="text-sm font-semibold text-green-400 bg-green-400/20 px-3 py-1 rounded-full">
                    {prediction.probability}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{prediction.prediction}</h3>
                <p className="text-gray-300 text-sm">{prediction.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of innovators, researchers, and technology leaders who are already exploring 
            the next generation of AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}