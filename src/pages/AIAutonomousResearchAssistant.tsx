import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Search, 
  BookOpen, 
  Zap, 
  Shield, 
  Users, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Network,
  Lock,
  Eye,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Settings,
  Monitor,
  AlertTriangle,
  Clock,
  Calendar,
  FileText,
  PieChart,
  LineChart,
  Activity,
  Gauge,
  Lightbulb,
  Rocket,
  Award,
  Microscope,
  TestTube,

  Database,
  BarChart3,
  TrendingUp as TrendingUpIcon,
  BookOpen as BookOpenIcon,
  Search as SearchIcon,
  Brain as BrainIcon
} from 'lucide-react';

const AIAutonomousResearchAssistant: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Research",
      description: "AI-powered autonomous research with deep learning and natural language processing"
    },
    {
      icon: Search,
      title: "Advanced Discovery",
      description: "Comprehensive research across multiple databases and knowledge sources"
    },
    {
      icon: BookOpen,
      title: "Literature Analysis",
      description: "Automated literature review and citation management"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Instant research results and continuous learning capabilities"
    },
    {
      icon: Shield,
      title: "Data Validation",
      description: "Automated fact-checking and source credibility assessment"
    },
    {
      icon: Users,
      title: "Collaborative Research",
      description: "Team-based research coordination and knowledge sharing"
    }
  ];

  const capabilities = [
    "Autonomous literature search and discovery",
    "Real-time data analysis and pattern recognition",
    "Automated citation management and formatting",
    "Multi-language research support",
    "Source credibility assessment and validation",
    "Research trend analysis and prediction",
    "Automated research report generation",
    "Collaborative research coordination",
    "Integration with academic databases",
    "Custom research framework development"
  ];

  const useCases = [
    {
      title: "Academic Research",
      description: "Automated literature reviews and research synthesis"
    },
    {
      title: "Market Research",
      description: "Competitive analysis and market trend identification"
    },
    {
      title: "Scientific Discovery",
      description: "Hypothesis generation and experimental design"
    },
    {
      title: "Legal Research",
      description: "Case law analysis and precedent identification"
    },
    {
      title: "Medical Research",
      description: "Clinical trial analysis and drug discovery"
    },
    {
      title: "Business Intelligence",
      description: "Industry analysis and strategic planning support"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "10x Faster Research",
      description: "Complete research tasks in minutes, not days"
    },
    {
      icon: Brain,
      title: "Deeper Insights",
      description: "AI-powered analysis reveals hidden patterns"
    },
    {
      icon: Search,
      title: "Comprehensive Coverage",
      description: "Access to millions of research sources"
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "Improves research quality over time"
    }
  ];

  const researchAreas = [
    {
      title: "Scientific Research",
      description: "Physics, chemistry, biology, and engineering",
      icon: Microscope
    },
    {
      title: "Medical Research",
      description: "Clinical trials, drug discovery, and healthcare",
      icon: TestTube
    },
    {
      title: "Business Research",
      description: "Market analysis, strategy, and innovation",
      icon: BarChart3
    },
    {
      title: "Academic Research",
      description: "Literature review, citation analysis, and synthesis",
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Autonomous Research Assistant
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-green-100">
              Revolutionize your research with intelligent, autonomous AI that discovers, 
              analyzes, and synthesizes information across all domains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Autonomous Research Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered research assistant autonomously discovers, analyzes, and 
              synthesizes information with unprecedented speed and accuracy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl border border-green-100 hover:shadow-lg transition-shadow">
                <div className="p-3 bg-green-600 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Research Assistant?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the transformative benefits of AI-powered autonomous research.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-600 rounded-full">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research Domains
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research support across all major domains and disciplines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-600 rounded-lg mr-4">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {area.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research capabilities that adapt and learn from your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {capabilities.slice(0, 5).map((capability, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {capabilities.slice(5).map((capability, index) => (
                <div key={index + 5} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI Autonomous Research Assistant transforms research across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Research?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join the future of autonomous research with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousResearchAssistant;