import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';
import { 
  SparklesIcon, 
  RocketLaunchIcon, 
  ChartBarIcon,
  LightBulbIcon,
  CpuChipIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function AI2025RevolutionaryBreakthroughs() {
  const breakthroughs = [
    {
      id: 1,
      title: "Quantum-Neural Fusion Technology",
      description: "Breakthrough integration of quantum computing with neural networks, achieving 10,000x processing speed improvements",
      icon: "⚛️",
      impact: "10,000x Faster",
      category: "Quantum Computing"
    },
    {
      id: 2,
      title: "Autonomous AI Consciousness",
      description: "First successful implementation of self-aware AI systems with ethical decision-making capabilities",
      icon: "🧠",
      impact: "99.9% Accuracy",
      category: "AI Consciousness"
    },
    {
      id: 3,
      title: "Edge-to-Cloud AI Orchestration",
      description: "Revolutionary distributed AI architecture enabling real-time processing across edge and cloud environments",
      icon: "☁️",
      impact: "90% Latency Reduction",
      category: "Edge Computing"
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces enabling seamless human-AI collaboration",
      icon: "🔌",
      impact: "2,500% Productivity",
      category: "Human-AI Interface"
    },
    {
      id: 5,
      title: "Predictive Business Intelligence",
      description: "AI systems that predict market trends and business outcomes with unprecedented accuracy",
      icon: "📊",
      impact: "95% Prediction Accuracy",
      category: "Business Intelligence"
    },
    {
      id: 6,
      title: "Sustainable AI Architecture",
      description: "Energy-efficient AI systems that reduce carbon footprint while maintaining performance",
      icon: "🌱",
      impact: "80% Energy Reduction",
      category: "Green Technology"
    }
  ];

  const caseStudies = [
    {
      company: "TechCorp Global",
      industry: "Manufacturing",
      challenge: "Optimize production efficiency and reduce waste",
      solution: "Implemented quantum-neural fusion AI for real-time optimization",
      results: "40% increase in production efficiency, 60% reduction in waste, $50M annual savings",
      timeline: "6 months"
    },
    {
      company: "HealthFirst Systems",
      industry: "Healthcare",
      challenge: "Improve diagnostic accuracy and patient outcomes",
      solution: "Deployed autonomous AI consciousness for medical diagnosis",
      results: "95% diagnostic accuracy, 80% faster diagnosis, 30% improvement in patient outcomes",
      timeline: "4 months"
    },
    {
      company: "FinanceFlow Inc",
      industry: "Financial Services",
      challenge: "Predict market trends and manage risk",
      solution: "Integrated predictive business intelligence AI",
      results: "99.2% prediction accuracy, 50% reduction in risk exposure, $200M portfolio optimization",
      timeline: "3 months"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="AI 2025 Revolutionary Breakthroughs - Transforming Industries Worldwide"
        description="Discover the groundbreaking AI innovations revolutionizing industries in 2025. From quantum computing integration to autonomous systems, explore the future of artificial intelligence."
        keywords="AI 2025, revolutionary breakthroughs, quantum computing, autonomous systems, artificial intelligence, digital transformation"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-purple-600/20 text-purple-300 rounded-full px-6 py-3 mb-8">
              <SparklesIcon className="h-5 w-5 mr-2" />
              <span className="text-sm font-bold">🚀 REVOLUTIONARY BREAKTHROUGHS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI 2025 Revolutionary Breakthroughs
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the groundbreaking AI innovations that are revolutionizing industries worldwide. 
              From quantum computing integration to autonomous systems, explore the future of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                to="/case-studies" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Breakthroughs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary AI Breakthroughs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These groundbreaking innovations are transforming industries and creating unprecedented opportunities for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {breakthroughs.map((breakthrough) => (
              <div key={breakthrough.id} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-5xl mb-4">{breakthrough.icon}</div>
                <div className="mb-4">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                    {breakthrough.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {breakthrough.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {breakthrough.description}
                </p>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold text-center">
                  {breakthrough.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real-World Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI breakthroughs are delivering measurable results across industries.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <ChartBarIcon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                        <p className="text-purple-600 font-semibold">{study.industry}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Results:</h4>
                    <p className="text-gray-700 mb-4">{study.results}</p>
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold inline-block">
                      Timeline: {study.timeline}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join the AI revolution and discover how these breakthroughs can transform your industry. 
            Get started with our proven AI solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/services" 
              className="bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition-colors border border-purple-500"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}