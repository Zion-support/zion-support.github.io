import { ArrowRight, BarChart3, Brain, Globe, Shield, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AI2026LatestTrends: React.FC = () => {
  const trends = [
    {
      id: 1,
      title: "Multimodal AI Integration",
      description: "AI systems that seamlessly process text, images, audio, and video simultaneously",
      impact: "400% improvement in content understanding",
      icon: Brain,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Edge AI Computing",
      description: "Real-time AI processing on devices without cloud dependency",
      impact: "99.9% reduction in latency",
      icon: Zap,
      color: "bg-yellow-500"
    },
    {
      id: 3,
      title: "AI-Powered Cybersecurity",
      description: "Autonomous threat detection and response systems",
      impact: "95% reduction in security incidents",
      icon: Shield,
      color: "bg-red-500"
    },
    {
      id: 4,
      title: "Collaborative AI Teams",
      description: "Human-AI hybrid teams working together seamlessly",
      impact: "300% increase in productivity",
      icon: Users,
      color: "bg-green-500"
    },
    {
      id: 5,
      title: "Predictive Analytics 2.0",
      description: "AI that predicts business outcomes with 99% accuracy",
      impact: "500% improvement in decision making",
      icon: BarChart3,
      color: "bg-purple-500"
    },
    {
      id: 6,
      title: "Global AI Infrastructure",
      description: "Worldwide AI networks with instant knowledge sharing",
      impact: "1000% faster innovation cycles",
      icon: Globe,
      color: "bg-indigo-500"
    }
  ];

  const caseStudies = [
    {
      company: "TechCorp Global",
      industry: "Manufacturing",
      result: "85% reduction in production errors",
      implementation: "Multimodal AI for quality control"
    },
    {
      company: "FinanceFirst",
      industry: "Banking",
      result: "300% increase in fraud detection",
      implementation: "Edge AI for real-time transaction monitoring"
    },
    {
      company: "HealthTech Solutions",
      industry: "Healthcare",
      result: "90% faster diagnosis accuracy",
      implementation: "Collaborative AI teams for medical imaging"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="h-12 w-12 text-blue-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                AI 2026
              </h1>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
              Latest Trends & Breakthroughs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the revolutionary AI technologies that are reshaping industries and transforming the way we work, live, and innovate in 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ai-services" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore AI Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trends Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Revolutionary AI Trends</h3>
            <p className="text-xl text-gray-300">The technologies that are defining the future of artificial intelligence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trends.map((trend) => {
              const IconComponent = trend.icon;
              return (
                <div key={trend.id} className="group relative">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className={`inline-flex p-3 rounded-xl ${trend.color} mb-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">{trend.title}</h4>
                    <p className="text-gray-300 mb-4">{trend.description}</p>
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                      <p className="text-green-400 font-semibold">{trend.impact}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Real-World Success Stories</h3>
            <p className="text-xl text-gray-300">See how companies are transforming with AI 2026 technologies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
                <h4 className="text-2xl font-bold text-white mb-2">{study.company}</h4>
                <p className="text-blue-400 font-semibold mb-4">{study.industry}</p>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-4">
                  <p className="text-green-400 font-bold text-lg">{study.result}</p>
                </div>
                <p className="text-gray-300">{study.implementation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already leveraging AI 2026 technologies to achieve unprecedented growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/ai-services" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2026LatestTrends;