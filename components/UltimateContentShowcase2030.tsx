import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Brain, Atom, Bot, Zap, Globe, Rocket, Shield, Cpu, Database, Target, TrendingUp, Users } from 'lucide-react';

const UltimateContentShowcase2030: React.FC = () => {
  const contentCategories = [
    {
      title: "AI 2029-2035 Predictions",
      description: "Comprehensive predictions for the next decade of AI development",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      items: [
        "Neural-Synthetic Intelligence (2029)",
        "Quantum-Neural Fusion (2030)",
        "Omniversal Consciousness (2032)",
        "Transcendent Intelligence (2035)"
      ],
      link: "/ai-2029-2035-future-predictions",
      stats: { accuracy: "99.99%", speed: "∞", roi: "50,000%" }
    },
    {
      title: "Quantum Computing 2030",
      description: "Revolutionary quantum computing breakthroughs and applications",
      icon: Atom,
      color: "from-cyan-500 to-blue-500",
      items: [
        "1 Million Qubit Processors",
        "Room Temperature Operation",
        "Quantum Supremacy Achieved",
        "Unbreakable Security Protocols"
      ],
      link: "/quantum-computing-breakthroughs-2030",
      stats: { qubits: "1M", operations: "10^18", error: "0.1%" }
    },
    {
      title: "Advanced Automation 2030",
      description: "Fully autonomous business operations and self-healing systems",
      icon: Bot,
      color: "from-emerald-500 to-teal-500",
      items: [
        "100% Autonomous Operations",
        "Self-Healing Systems",
        "Intelligent Decision Making",
        "Predictive Security"
      ],
      link: "/advanced-automation-solutions-2030",
      stats: { automation: "100%", uptime: "99.9%", efficiency: "1000%" }
    },
    {
      title: "Neural Interface 2035",
      description: "Direct brain-computer interfaces and neural enhancement",
      icon: Cpu,
      color: "from-yellow-500 to-orange-500",
      items: [
        "Direct Neural Interfaces",
        "Enhanced Cognitive Abilities",
        "Memory Augmentation",
        "Thought-Controlled Systems"
      ],
      link: "/neural-interface-solutions-2035",
      stats: { speed: "1000x", capacity: "∞", latency: "0ms" }
    }
  ];

  const featuredContent = [
    {
      title: "The Future of AI: 2035 Vision",
      description: "A comprehensive look at how AI will transform every aspect of human life by 2035",
      category: "AI Predictions",
      readTime: "15 min",
      difficulty: "Advanced",
      rating: 5.0,
      image: "/images/ai-2035-vision.jpg"
    },
    {
      title: "Quantum Computing Revolution",
      description: "Understanding the quantum leap in computing power and its implications",
      category: "Quantum Computing",
      readTime: "12 min",
      difficulty: "Expert",
      rating: 4.9,
      image: "/images/quantum-revolution.jpg"
    },
    {
      title: "Autonomous Business Operations",
      description: "How to build fully autonomous business systems that run without human intervention",
      category: "Automation",
      readTime: "20 min",
      difficulty: "Advanced",
      rating: 4.8,
      image: "/images/autonomous-business.jpg"
    },
    {
      title: "Neural Enhancement Technologies",
      description: "The future of human-AI integration through neural interfaces",
      category: "Neural Interface",
      readTime: "18 min",
      difficulty: "Expert",
      rating: 4.9,
      image: "/images/neural-enhancement.jpg"
    }
  ];

  const successStories = [
    {
      company: "TechCorp Global",
      industry: "Technology",
      result: "5000% ROI in 6 months",
      description: "Implemented AI 2030 solutions and achieved unprecedented growth",
      icon: TrendingUp
    },
    {
      company: "Quantum Dynamics",
      industry: "Research",
      result: "Breakthrough Discovery",
      description: "Used quantum computing to solve previously impossible problems",
      icon: Atom
    },
    {
      company: "AutoFlow Systems",
      industry: "Manufacturing",
      result: "100% Automation",
      description: "Achieved complete autonomous operations across all facilities",
      icon: Bot
    },
    {
      company: "NeuralTech Labs",
      industry: "Healthcare",
      result: "Revolutionary Treatment",
      description: "Developed neural interfaces that restore lost functions",
      icon: Brain
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            Ultimate Content Showcase 2030
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Complete Future Technology Hub
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore our comprehensive collection of future technology content, 
            from AI predictions to quantum computing breakthroughs and autonomous operations.
          </p>
        </div>

        {/* Content Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contentCategories.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all group">
              <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
              <p className="text-gray-300 mb-6">{category.description}</p>
              
              <ul className="space-y-2 mb-6">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="grid grid-cols-3 gap-4 text-center mb-6">
                {Object.entries(category.stats).map(([key, value], statIndex) => (
                  <div key={statIndex}>
                    <div className="text-lg font-bold text-yellow-400">{value}</div>
                    <div className="text-gray-400 text-sm capitalize">{key}</div>
                  </div>
                ))}
              </div>
              
              <Link 
                to={category.link}
                className="inline-flex items-center w-full justify-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all"
              >
                Explore {category.title}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Featured Content
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all group">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <content.icon className="w-16 h-16 text-white" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-yellow-400 font-semibold">{content.category}</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm">{content.rating}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-300 mb-4">{content.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{content.readTime} read</span>
                    <span>{content.difficulty}</span>
                  </div>
                  
                  <Link 
                    to={`/content/${content.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Success Stories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                <story.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">{story.company}</h4>
                <p className="text-gray-400 text-sm mb-3">{story.industry}</p>
                <div className="text-2xl font-bold text-yellow-400 mb-3">{story.result}</div>
                <p className="text-gray-300 text-sm">{story.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Explore the Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already using our future technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/ai-2029-2035-future-predictions" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:from-yellow-500 hover:to-orange-600 hover:scale-105 flex items-center justify-center"
            >
              Start Exploring
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center"
            >
              Get Custom Solutions
              <Users className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2030;