import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Building, 
  Zap, 
  Target, 
  BarChart3, 
  Users, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Cpu,
  Database,
  Network,
  Code,
  Lock,
  Eye,
  Heart,
  Rocket,
  Calendar,
  Globe,
  Lightbulb,
  Layers
} from 'lucide-react';

export default function AIAutonomousBusinessPlatform2026() {
  const features = [
    {
      icon: Brain,
      title: "AI Decision Engine",
      description: "Advanced AI algorithms for intelligent business decision making"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamlined business processes with intelligent automation"
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "AI-powered strategic planning and goal optimization"
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Comprehensive business intelligence and performance insights"
    },
    {
      icon: Users,
      title: "Team Coordination",
      description: "AI-driven team management and resource allocation"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with compliance monitoring"
    }
  ];

  const benefits = [
    "24/7 autonomous operation",
    "Intelligent decision making",
    "Cost reduction through automation",
    "Improved efficiency and productivity",
    "Data-driven insights",
    "Scalable business operations"
  ];

  const useCases = [
    {
      title: "Small Business Automation",
      description: "Automate routine tasks and decision-making for small businesses"
    },
    {
      title: "Enterprise Operations",
      description: "Large-scale business process automation and optimization"
    },
    {
      title: "Startup Growth",
      description: "Accelerate startup growth with intelligent business management"
    },
    {
      title: "Multi-location Management",
      description: "Centralized management of multiple business locations"
    }
  ];

  const roadmap = [
    {
      year: "2026",
      title: "Platform Launch",
      description: "Full platform release with core AI capabilities"
    },
    {
      year: "2025",
      title: "Beta Testing",
      description: "Comprehensive beta testing with select customers"
    },
    {
      year: "2024",
      title: "Development",
      description: "Core platform development and AI training"
    },
    {
      year: "2023",
      title: "Research",
      description: "AI research and technology foundation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Brain className="w-20 h-20 text-cyan-400" />
              <Calendar className="w-16 h-16 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Autonomous Business Platform 2026
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The future of business management arrives in 2026. Experience intelligent automation, 
              AI-powered decision making, and seamless scalability with our next-generation platform.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Pre-Order Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              Watch Preview
              <Eye className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              2026 Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI capabilities that will revolutionize business management by 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Development Roadmap
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our journey to launch the AI Autonomous Business Platform in 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmap.map((milestone, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-400 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-3">{milestone.year}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{milestone.title}</h3>
                <p className="text-gray-300">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why Wait for 2026?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start building your autonomous business foundation today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Future Business Scenarios
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Prepare for the business landscape of 2026 and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Be Ready for 2026
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait for the future. Start building it today with our AI Autonomous Business Platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Pre-Order Now
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}