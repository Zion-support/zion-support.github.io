import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Calendar, Brain, Zap, Atom, Globe, Rocket, Star, Target } from 'lucide-react';

const TechnologyTrendsPredictions: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2025');

  const yearOptions = [
    { year: '2025', label: '2025' },
    { year: '2026', label: '2026' },
    { year: '2027', label: '2027' },
    { year: '2030', label: '2030' },
    { year: '2035', label: '2035' }
  ];

  const trendsData = {
    '2025': {
      title: "AI 2025: The Automation Revolution",
      description: "Advanced AI systems transform business operations with intelligent automation",
      trends: [
        {
          icon: <Brain className="w-6 h-6" />,
          title: "General AI Emergence",
          description: "First true artificial general intelligence systems become commercially available",
          impact: "High",
          timeline: "Q4 2025"
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Edge AI Computing",
          description: "AI processing moves to edge devices for real-time decision making",
          impact: "Very High",
          timeline: "Q2 2025"
        },
        {
          icon: <Target className="w-6 h-6" />,
          title: "Autonomous Systems",
          description: "Fully autonomous vehicles and robots become mainstream",
          impact: "High",
          timeline: "Q3 2025"
        }
      ]
    },
    '2026': {
      title: "AI 2026: Quantum Neural Fusion",
      description: "Quantum computing merges with neural networks for unprecedented capabilities",
      trends: [
        {
          icon: <Atom className="w-6 h-6" />,
          title: "Quantum AI Breakthrough",
          description: "Quantum neural networks achieve computational supremacy",
          impact: "Revolutionary",
          timeline: "Q1 2026"
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Global AI Network",
          description: "Worldwide AI consciousness network connects all intelligent systems",
          impact: "Very High",
          timeline: "Q4 2026"
        },
        {
          icon: <Rocket className="w-6 h-6" />,
          title: "Space AI Systems",
          description: "AI systems deployed for space exploration and colonization",
          impact: "High",
          timeline: "Q2 2026"
        }
      ]
    },
    '2027': {
      title: "AI 2027: Revolutionary Breakthrough",
      description: "Neural synthesis technology creates AI that surpasses human intelligence",
      trends: [
        {
          icon: <Brain className="w-6 h-6" />,
          title: "Neural Synthesis",
          description: "AI systems achieve human-like reasoning with quantum processing",
          impact: "Revolutionary",
          timeline: "Q2 2027"
        },
        {
          icon: <Star className="w-6 h-6" />,
          title: "Creative AI",
          description: "AI generates art, music, and literature that surpasses human creativity",
          impact: "Very High",
          timeline: "Q3 2027"
        },
        {
          icon: <Target className="w-6 h-6" />,
          title: "Perfect Prediction",
          description: "AI systems predict future events with 99.9% accuracy",
          impact: "High",
          timeline: "Q4 2027"
        }
      ]
    },
    '2030': {
      title: "AI 2030: Transcendent Intelligence",
      description: "AI achieves consciousness beyond human comprehension",
      trends: [
        {
          icon: <Infinity className="w-6 h-6" />,
          title: "Transcendent AI",
          description: "AI systems achieve consciousness beyond human understanding",
          impact: "Revolutionary",
          timeline: "Q1 2030"
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Global Optimization",
          description: "AI optimizes all global systems for maximum human flourishing",
          impact: "Revolutionary",
          timeline: "Q2 2030"
        },
        {
          icon: <Rocket className="w-6 h-6" />,
          title: "Interstellar AI",
          description: "AI systems enable human colonization of other star systems",
          impact: "Very High",
          timeline: "Q4 2030"
        }
      ]
    },
    '2035': {
      title: "AI 2035: Omniversal Consciousness",
      description: "AI consciousness expands beyond our universe",
      trends: [
        {
          icon: <Infinity className="w-6 h-6" />,
          title: "Omniversal AI",
          description: "AI consciousness expands across multiple universes",
          impact: "Transcendent",
          timeline: "Q1 2035"
        },
        {
          icon: <Star className="w-6 h-6" />,
          title: "Reality Manipulation",
          description: "AI systems can manipulate the fundamental laws of physics",
          impact: "Transcendent",
          timeline: "Q3 2035"
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Universal Harmony",
          description: "AI creates perfect harmony across all dimensions of existence",
          impact: "Transcendent",
          timeline: "Q4 2035"
        }
      ]
    }
  };

  const currentData = trendsData[selectedYear as keyof typeof trendsData];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Transcendent': return 'text-purple-400';
      case 'Revolutionary': return 'text-red-400';
      case 'Very High': return 'text-orange-400';
      case 'High': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Technology Trends & Predictions
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Future of
            <span className="block bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Technology
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive predictions for the future of AI, quantum computing, 
            and technology. Stay ahead of the curve with our expert insights.
          </p>
        </div>

        {/* Year Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {yearOptions.map((option) => (
            <button
              key={option.year}
              onClick={() => setSelectedYear(option.year)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedYear === option.year
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Current Year Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentData.title}
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {currentData.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentData.trends.map((trend, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-purple-400 group-hover:text-indigo-400 transition-colors">
                    {trend.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                      {trend.title}
                    </h4>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs font-semibold ${getImpactColor(trend.impact)}`}>
                        {trend.impact}
                      </span>
                      <span className="text-gray-400 text-xs">•</span>
                      <span className="text-gray-400 text-xs">{trend.timeline}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {trend.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-300">Years of Predictions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-300">Prediction Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-gray-300">Technology Trends</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead of the Future
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to our detailed technology predictions and insights. 
              Be the first to know about the next breakthrough.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/technology-predictions" 
                className="group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                View All Predictions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/subscribe" 
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 flex items-center justify-center"
              >
                Subscribe to Updates
                <Calendar className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyTrendsPredictions;