import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Database, 
  Shield, 
  Zap, 
  Target, 
  Rocket, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  TrendingUp
} from 'lucide-react';

const AI2025UltimateContentRevolutionShowcase: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced Neural Networks",
      description: "Next-generation AI with 99.9% accuracy and self-learning capabilities",
      benefits: ["Real-time learning", "Adaptive algorithms", "Predictive analytics"]
    },
    {
      icon: Cpu,
      title: "Quantum Computing Integration",
      description: "Breakthrough quantum solutions for complex problem-solving",
      benefits: ["Exponential speed", "Parallel processing", "Optimization mastery"]
    },
    {
      icon: Database,
      title: "Autonomous Data Processing",
      description: "Intelligent data management with 10,000x faster processing",
      benefits: ["Real-time insights", "Automated analysis", "Smart categorization"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security with zero-trust architecture",
      benefits: ["End-to-end encryption", "Access control", "Threat detection"]
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Ultra-fast response times with 99.99% uptime guarantee",
      benefits: ["Sub-second response", "High availability", "Scalable infrastructure"]
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI-powered targeting with 95% accuracy in predictions",
      benefits: ["Smart targeting", "Behavioral analysis", "ROI optimization"]
    }
  ];

  const successStories = [
    {
      company: "TechCorp Solutions",
      industry: "Manufacturing",
      improvement: "3,200% ROI",
      description: "Automated production line optimization",
      icon: TrendingUp
    },
    {
      company: "DataFlow Inc",
      industry: "Finance",
      improvement: "4,800% ROI",
      description: "AI-powered fraud detection system",
      icon: Shield
    },
    {
      company: "CloudScale Systems",
      industry: "Healthcare",
      improvement: "2,900% ROI",
      description: "Predictive patient care analytics",
      icon: Brain
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Ultimate Content Revolution Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the comprehensive suite of AI-powered solutions that are transforming 
            industries and delivering unprecedented results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Success Stories
            </h3>
            <p className="text-xl text-gray-300">
              Real results from companies using our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-6">
                  <story.icon className="w-10 h-10 text-black" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{story.company}</h4>
                <p className="text-gray-400 mb-3">{story.industry}</p>
                <div className="text-3xl font-bold text-yellow-400 mb-2">{story.improvement}</div>
                <p className="text-gray-300 text-sm">{story.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator Preview */}
        <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Calculate Your Potential ROI
            </h3>
            <p className="text-xl text-gray-300">
              See how much you could save and earn with our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">2,500%</div>
              <div className="text-gray-300">Minimum ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">5,000%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">10,000%</div>
              <div className="text-gray-300">Maximum ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">6 Months</div>
              <div className="text-gray-300">Payback Period</div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/roi-calculator"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Try ROI Calculator
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the Revolution?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with the most advanced AI solutions available. 
            Join thousands of companies already experiencing unprecedented growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Get Started Today
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/case-studies"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center gap-2"
            >
              View Case Studies
              <BarChart3 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateContentRevolutionShowcase;