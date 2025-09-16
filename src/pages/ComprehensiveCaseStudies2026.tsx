import React, { useState } from 'react';

const ComprehensiveCaseStudies2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCase, setSelectedCase] = useState(0);

  const categories = [
    { id: 'all', name: 'All Cases', icon: '🌟' },
    { id: 'ai', name: 'AI Solutions', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚡' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬' },
    { id: 'space', name: 'Space Technology', icon: '🚀' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 AI Consciousness Implementation",
      category: 'ai',
      company: "GlobalTech Corp",
      industry: "Technology",
      challenge: "Implementing AI consciousness in enterprise operations while maintaining human oversight",
      solution: "Deployed our AI Consciousness Lab with self-learning capabilities and emotional intelligence integration",
      results: {
        efficiency: "+400%",
        costSavings: "$50M",
        timeReduction: "75%",
        satisfaction: "98%"
      },
      description: "Transformed enterprise operations with the first commercially viable AI consciousness system, enabling autonomous decision-making while maintaining human oversight.",
      technologies: ["AI Consciousness", "Emotional Intelligence", "Autonomous Learning", "Human-AI Collaboration"],
      timeline: "6 months",
      team: "15 experts",
      image: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Reality Engine for Pharmaceutical Research",
      category: 'quantum',
      company: "BioPharma Solutions",
      industry: "Pharmaceuticals",
      challenge: "Accelerating drug discovery through quantum computing and molecular simulation",
      solution: "Implemented our Quantum Reality Engine with 1000+ qubit processing power for molecular modeling",
      results: {
        efficiency: "+1000%",
        costSavings: "$200M",
        timeReduction: "90%",
        satisfaction: "99%"
      },
      description: "Revolutionized drug discovery by simulating molecular interactions at quantum scale, reducing development time from years to months.",
      technologies: ["Quantum Computing", "Molecular Simulation", "Reality Manipulation", "Parallel Processing"],
      timeline: "8 months",
      team: "25 experts",
      image: "⚡",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Neural Interface Medical Rehabilitation",
      category: 'neural',
      company: "MedTech Innovations",
      industry: "Healthcare",
      challenge: "Restoring motor function in patients with spinal cord injuries through neural interfaces",
      solution: "Deployed our Neural Interface Hub with non-invasive BCI technology for thought-controlled prosthetics",
      results: {
        efficiency: "+300%",
        costSavings: "$30M",
        timeReduction: "60%",
        satisfaction: "95%"
      },
      description: "Enabled patients with spinal cord injuries to control prosthetics and regain mobility through direct brain-computer communication.",
      technologies: ["Neural Interfaces", "BCI Technology", "Thought Control", "Medical AI"],
      timeline: "12 months",
      team: "20 experts",
      image: "🧬",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Interdimensional Space Exploration Mission",
      category: 'space',
      company: "SpaceX Advanced",
      industry: "Aerospace",
      challenge: "Exploring beyond our dimension with advanced propulsion and communication systems",
      solution: "Implemented our Interdimensional Space Port technology for dimensional travel and interstellar communication",
      results: {
        efficiency: "+500%",
        costSavings: "$500M",
        timeReduction: "80%",
        satisfaction: "100%"
      },
      description: "Successfully launched the first interdimensional exploration mission, opening new frontiers in space exploration.",
      technologies: ["Dimensional Travel", "Advanced Propulsion", "Interstellar Communication", "Space-Time Manipulation"],
      timeline: "18 months",
      team: "50 experts",
      image: "🚀",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 5,
      title: "Synthetic Intelligence Autonomous Operations",
      category: 'ai',
      company: "Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Implementing fully autonomous manufacturing with synthetic intelligence agents",
      solution: "Deployed our Synthetic Intelligence Core with autonomous agents and collective intelligence",
      results: {
        efficiency: "+600%",
        costSavings: "$100M",
        timeReduction: "85%",
        satisfaction: "97%"
      },
      description: "Created the world's first fully autonomous manufacturing facility using synthetic intelligence agents that learn and adapt continuously.",
      technologies: ["Synthetic Intelligence", "Autonomous Agents", "Collective Intelligence", "Creative Synthesis"],
      timeline: "10 months",
      team: "30 experts",
      image: "🤖",
      color: "from-rose-600 to-orange-600"
    }
  ];

  const filteredCases = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(case => case.category === selectedCategory);

  const currentCase = filteredCases[selectedCase] || filteredCases[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            📊 COMPREHENSIVE CASE STUDIES 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Success Stories & Case Studies
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover how our revolutionary technologies have transformed businesses across industries
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-2xl scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Case Study List */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
            <div className="space-y-4">
              {filteredCases.map((caseStudy, index) => (
                <div
                  key={caseStudy.id}
                  onClick={() => setSelectedCase(index)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    index === selectedCase
                      ? `bg-gradient-to-r ${caseStudy.color} text-white shadow-2xl scale-105`
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{caseStudy.image}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                      <p className="text-sm opacity-80">{caseStudy.company} • {caseStudy.industry}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Details */}
          <div className="lg:col-span-2">
            {currentCase && (
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
                {/* Header */}
                <div className="flex items-center space-x-6 mb-8">
                  <div className="text-8xl">{currentCase.image}</div>
                  <div>
                    <h2 className="text-4xl font-bold mb-2">{currentCase.title}</h2>
                    <p className="text-xl opacity-80">{currentCase.company} • {currentCase.industry}</p>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-cyan-400">{currentCase.results.efficiency}</div>
                    <div className="text-sm opacity-80">Efficiency Gain</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-green-400">{currentCase.results.costSavings}</div>
                    <div className="text-sm opacity-80">Cost Savings</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-purple-400">{currentCase.results.timeReduction}</div>
                    <div className="text-sm opacity-80">Time Reduction</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-pink-400">{currentCase.results.satisfaction}</div>
                    <div className="text-sm opacity-80">Satisfaction</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                  <p className="text-lg opacity-90 leading-relaxed">{currentCase.description}</p>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-red-400">Challenge</h3>
                    <p className="opacity-90">{currentCase.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-green-400">Solution</h3>
                    <p className="opacity-90">{currentCase.solution}</p>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {currentCase.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 bg-gradient-to-r ${currentCase.color} text-white rounded-full text-sm font-semibold`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Timeline</h4>
                    <p className="text-cyan-400">{currentCase.timeline}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Team Size</h4>
                    <p className="text-green-400">{currentCase.team}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Category</h4>
                    <p className="text-purple-400 capitalize">{currentCase.category}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-400/30">
            <h3 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the companies that have already transformed their operations with our revolutionary technologies
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
                Start Your Project →
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-12 py-4 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-bold text-xl">
                Download Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveCaseStudies2026;