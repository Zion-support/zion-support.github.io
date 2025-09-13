import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Brain, Rocket, Star, CheckCircle } from 'lucide-react';

const AINextGenSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "Neural-Synthetic Intelligence",
      description: "Advanced AI systems that combine neural networks with synthetic data generation for unprecedented accuracy and speed.",
      features: ["99.97% accuracy rate", "Real-time processing", "Self-learning algorithms", "Scalable architecture"],
      icon: <Brain className="w-8 h-8" />,
      category: "AI Processing"
    },
    {
      title: "Quantum-AI Fusion Computing",
      description: "Revolutionary computing that merges quantum mechanics with artificial intelligence for exponential processing power.",
      features: ["50,000x faster processing", "Quantum error correction", "Hybrid classical-quantum systems", "Enterprise-ready"],
      icon: <Zap className="w-8 h-8" />,
      category: "Quantum Computing"
    },
    {
      title: "Autonomous Business Systems",
      description: "Self-managing enterprise solutions that adapt and optimize operations without human intervention.",
      features: ["Zero downtime operations", "Predictive maintenance", "Auto-scaling capabilities", "Cost optimization"],
      icon: <Rocket className="w-8 h-8" />,
      category: "Automation"
    }
  ];

  const benefits = [
    "Increased operational efficiency by up to 300%",
    "Reduced operational costs by 60-80%",
    "99.97% accuracy in decision-making processes",
    "50,000x faster data processing capabilities",
    "Zero downtime with autonomous systems",
    "Real-time predictive analytics and insights"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <SEO 
        title="AI 2025 Next-Gen Solutions - Revolutionary Technology"
        description="Discover breakthrough AI solutions including Neural-Synthetic Intelligence, Quantum-AI Fusion, and Autonomous Business Systems that are reshaping industries worldwide."
        keywords="AI 2025, next-gen solutions, neural networks, quantum computing, autonomous systems, breakthrough technology"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-black" />
              <span className="text-black font-bold">NEXT-GEN AI 2025</span>
              <Star className="w-5 h-5 text-black" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Experience the future of artificial intelligence with our breakthrough solutions that combine neural networks, quantum computing, and autonomous systems.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {solution.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {solution.title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-center">
                {solution.description}
              </p>
              
              <div className="space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Transform Your Business with Next-Gen AI
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-green-400 mb-2">300%</div>
                <div className="text-white font-semibold">Efficiency Increase</div>
              </div>
              <p className="text-gray-400 text-sm text-center">
                Global manufacturing company achieved 300% operational efficiency improvement using our Neural-Synthetic Intelligence platform.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-blue-400 mb-2">$2.5M</div>
                <div className="text-white font-semibold">Cost Savings</div>
              </div>
              <p className="text-gray-400 text-sm text-center">
                Fortune 500 enterprise reduced operational costs by $2.5M annually through our Autonomous Business Systems implementation.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.97%</div>
                <div className="text-white font-semibold">Accuracy Rate</div>
              </div>
              <p className="text-gray-400 text-sm text-center">
                Leading financial institution achieved 99.97% accuracy in fraud detection using our Quantum-AI Fusion technology.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our next-generation AI solutions to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/case-studies" 
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all border border-white/30"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AINextGenSolutionsPage;