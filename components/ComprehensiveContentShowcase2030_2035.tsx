import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Atom, Bot, Zap, Globe, Shield, Rocket, Star, TrendingUp, Cpu, Database } from 'lucide-react';

const ComprehensiveContentShowcase2030_2035: React.FC = () => {
  const contentCategories = [
    {
      title: "AI 2029-2035 Predictions",
      description: "Comprehensive roadmap of AI development milestones and breakthrough predictions",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      content: [
        "Neural-Synthetic Consciousness (2032)",
        "Quantum-AI Fusion (2031)",
        "Omniversal Intelligence (2035)",
        "Transcendent AI Systems (2034)"
      ],
      link: "/ai-2029-2035-future-predictions"
    },
    {
      title: "Quantum Computing Breakthroughs",
      description: "Revolutionary quantum computing advancements and applications",
      icon: Atom,
      color: "from-cyan-500 to-blue-500",
      content: [
        "1,000,000 Qubit Systems (2032)",
        "Quantum-AI Integration (2031)",
        "Reality Simulation (2033)",
        "Quantum Teleportation (2034)"
      ],
      link: "/quantum-computing-2030-2035-breakthroughs"
    },
    {
      title: "Advanced Automation Solutions",
      description: "Next-generation autonomous systems and automation technologies",
      icon: Bot,
      color: "from-emerald-500 to-teal-500",
      content: [
        "Self-Evolving AI (2030)",
        "Neural Automation (2031)",
        "Universal Automation (2033)",
        "Omniversal AI (2035)"
      ],
      link: "/advanced-automation-2030-2035"
    },
    {
      title: "Transcendent Technology",
      description: "Reality-bending technologies and transcendent capabilities",
      icon: Globe,
      color: "from-orange-500 to-red-500",
      content: [
        "Dimensional Processing (2031)",
        "Reality Manipulation (2033)",
        "Universal Control (2034)",
        "Singularity Achievement (2035)"
      ],
      link: "/transcendent-technology-2030-2035"
    }
  ];

  const featuredContent = [
    {
      title: "The Complete AI Evolution Guide 2029-2035",
      description: "Comprehensive guide covering every aspect of AI development from 2029 to 2035",
      type: "Implementation Guide",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      stats: "50,000+ words",
      link: "/ai-evolution-guide-2029-2035"
    },
    {
      title: "Quantum Computing Implementation Manual",
      description: "Step-by-step manual for implementing quantum computing solutions",
      type: "Technical Manual",
      icon: Atom,
      color: "from-cyan-500 to-blue-500",
      stats: "100+ pages",
      link: "/quantum-computing-implementation-manual"
    },
    {
      title: "Autonomous Systems Architecture",
      description: "Complete architecture guide for building self-evolving autonomous systems",
      type: "Architecture Guide",
      icon: Bot,
      color: "from-emerald-500 to-teal-500",
      stats: "75+ diagrams",
      link: "/autonomous-systems-architecture"
    },
    {
      title: "Transcendent Technology Blueprint",
      description: "Blueprint for developing reality-bending transcendent technologies",
      type: "Blueprint",
      icon: Globe,
      color: "from-orange-500 to-red-500",
      stats: "200+ concepts",
      link: "/transcendent-technology-blueprint"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Content
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Showcase 2030-2035</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the complete collection of revolutionary content covering AI predictions, 
            quantum computing breakthroughs, and transcendent technologies
          </p>
        </div>

        {/* Content Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contentCategories.map((category, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{category.description}</p>
              
              <div className="space-y-2 mb-6">
                {category.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center text-sm text-gray-400">
                    <Star className="w-3 h-3 mr-2 text-yellow-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                to={category.link}
                className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-semibold"
              >
                Explore Content
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Featured Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${content.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <content.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20">
                      {content.type}
                    </span>
                    <div className="text-sm text-gray-400 mt-1">{content.stats}</div>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3">{content.title}</h4>
                <p className="text-gray-300 mb-4">{content.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>Premium</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Featured</span>
                    </div>
                  </div>
                  <Link 
                    to={content.link}
                    className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors font-semibold"
                  >
                    Access Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Content Statistics
            </h3>
            <p className="text-gray-300">
              Comprehensive collection of revolutionary content and resources
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Articles</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-gray-300">Implementation Guides</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Case Studies</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">1M+</div>
              <div className="text-gray-300">Words</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Explore the Future?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get exclusive access to all revolutionary content, implementation guides, 
            and breakthrough insights for the next decade of AI evolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/comprehensive-content-access" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold transition-all hover:from-yellow-500 hover:to-orange-600 flex items-center justify-center"
            >
              Get Full Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/content-newsletter-2030-2035" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              Subscribe for Updates
              <Rocket className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveContentShowcase2030_2035;