import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AIBusinessSolutions2025: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutions = [
    {
      id: 1,
      title: "AI-Powered Sales Automation",
      description: "Revolutionary sales automation that increases conversion rates by 300%",
      features: [
        "Intelligent lead scoring",
        "Automated follow-up sequences",
        "Predictive sales analytics",
        "Real-time customer insights"
      ],
      metrics: {
        conversion: "+300%",
        efficiency: "+250%",
        revenue: "+400%"
      },
      icon: "🎯",
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "Autonomous Business Operations",
      description: "Self-managing business processes that optimize themselves continuously",
      features: [
        "Self-healing workflows",
        "Automatic resource allocation",
        "Predictive maintenance",
        "Dynamic process optimization"
      ],
      metrics: {
        efficiency: "+500%",
        cost: "-60%",
        uptime: "99.9%"
      },
      icon: "🤖",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Quantum Business Intelligence",
      description: "Quantum-powered analytics that provide insights beyond current limitations",
      features: [
        "Quantum data processing",
        "Multi-dimensional analysis",
        "Predictive modeling",
        "Real-time optimization"
      ],
      metrics: {
        speed: "1000x",
        accuracy: "99.99%",
        insights: "Unlimited"
      },
      icon: "⚡",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Neural Customer Experience",
      description: "Direct neural interface for unparalleled customer understanding",
      features: [
        "Emotional AI analysis",
        "Predictive customer behavior",
        "Personalized experiences",
        "Real-time sentiment analysis"
      ],
      metrics: {
        satisfaction: "+400%",
        retention: "+350%",
        engagement: "+500%"
      },
      icon: "🧠",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Synthetic Workforce",
      description: "AI employees that work 24/7 with superhuman capabilities",
      features: [
        "Autonomous task execution",
        "Continuous learning",
        "Perfect accuracy",
        "Infinite scalability"
      ],
      metrics: {
        productivity: "+1000%",
        cost: "-80%",
        availability: "24/7"
      },
      icon: "👥",
      color: "from-violet-600 to-purple-600"
    },
    {
      id: 6,
      title: "Transcendent Analytics",
      description: "Analytics that transcend traditional data limitations",
      features: [
        "Multi-reality insights",
        "Temporal analysis",
        "Dimensional forecasting",
        "Universal pattern recognition"
      ],
      metrics: {
        accuracy: "99.999%",
        scope: "Universal",
        speed: "Instant"
      },
      icon: "🌟",
      color: "from-indigo-600 to-blue-600"
    }
  ];

  const caseStudies = [
    {
      company: "Fortune 500 Tech Giant",
      challenge: "Manual processes causing 40% efficiency loss",
      solution: "Autonomous Business Operations",
      results: "500% efficiency increase, 60% cost reduction",
      timeline: "3 months"
    },
    {
      company: "Global E-commerce Leader",
      challenge: "Low conversion rates and poor customer experience",
      solution: "Neural Customer Experience + AI Sales Automation",
      results: "300% conversion increase, 400% satisfaction boost",
      timeline: "6 months"
    },
    {
      company: "Financial Services Corporation",
      challenge: "Complex data analysis taking weeks",
      solution: "Quantum Business Intelligence",
      results: "1000x faster analysis, 99.99% accuracy",
      timeline: "2 months"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 AI BUSINESS REVOLUTION • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              AI Business Solutions 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Transform your business with revolutionary AI solutions that deliver unprecedented results
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${solution.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
            >
              <div className="text-6xl mb-4 text-center">{solution.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{solution.title}</h3>
              <p className="text-white/80 mb-6 text-center">{solution.description}</p>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(solution.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-xs text-white/60 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full bg-gradient-to-r ${solution.color} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Learn More →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Case Studies Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            See how leading companies have transformed their business with our AI solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4">{study.company}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Challenge:</h4>
                  <p className="text-sm text-white/80">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-300 mb-2">Solution:</h4>
                  <p className="text-sm text-white/80">{study.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">Results:</h4>
                  <p className="text-sm text-white/80">{study.results}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-300 mb-2">Timeline:</h4>
                  <p className="text-sm text-white/80">{study.timeline}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Try Our AI Solutions</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Experience the power of our AI solutions with interactive demos
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold mb-2">Interactive Demo</h3>
              <p className="text-sm opacity-80 mb-4">Try our AI solutions hands-on</p>
              <button className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
                Start Demo
              </button>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">ROI Calculator</h3>
              <p className="text-sm opacity-80 mb-4">Calculate your potential savings</p>
              <button className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
                Calculate ROI
              </button>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">AI Consultant</h3>
              <p className="text-sm opacity-80 mb-4">Get personalized recommendations</p>
              <button className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
                Chat Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our AI solutions to achieve unprecedented growth
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIBusinessSolutions2025;