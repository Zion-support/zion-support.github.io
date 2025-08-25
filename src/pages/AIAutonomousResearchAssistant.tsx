import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Cloud,
  Lock,
  Database,
  Network,
  Code,
  BarChart3,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Eye,
  Heart,
  Settings,
  Workflow,
  BarChart,
  PieChart,
  Monitor,
  HardDrive,
  Server,
  FileCheck,
  AlertTriangle,
  Search,
  BookOpen,
  Microscope,
  TestTube
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AIAutonomousResearchAssistant: React.FC = () => {
  const features = [
    {
      title: "Intelligent Literature Review",
      description: "AI-powered analysis of research papers, journals, and scientific literature",
      icon: BookOpen,
      benefits: ["Auto-summarization", "Trend analysis", "Citation mapping"]
    },
    {
      title: "Automated Data Analysis",
      description: "Advanced algorithms for processing and analyzing research data",
      icon: BarChart,
      benefits: ["Statistical analysis", "Pattern recognition", "Visualization"]
    },
    {
      title: "Hypothesis Generation",
      description: "AI-driven hypothesis formulation based on data patterns and trends",
      icon: Lightbulb,
      benefits: ["Pattern discovery", "Trend prediction", "Innovation insights"]
    },
    {
      title: "Research Collaboration",
      description: "Seamless collaboration tools for research teams and institutions",
      icon: Users,
      benefits: ["Team coordination", "Knowledge sharing", "Progress tracking"]
    }
  ];

  const useCases = [
    {
      title: "Scientific Research",
      description: "Accelerate breakthrough discoveries in physics, chemistry, and biology",
      icon: Microscope,
      impact: "10x faster discovery"
    },
    {
      title: "Medical Research",
      description: "AI-powered drug discovery and medical breakthrough research",
      icon: TestTube,
      impact: "50% faster trials"
    },
    {
      title: "Academic Research",
      description: "Streamline academic research processes and publication workflows",
      icon: BookOpen,
      impact: "3x productivity boost"
    },
    {
      title: "Market Research",
      description: "Automated market analysis and competitive intelligence gathering",
      icon: Search,
      impact: "90% time savings"
    }
  ];

  const stats = [
    { icon: Users, value: "1000+", label: "Researchers", description: "Trusted by leading institutions" },
    { icon: TrendingUp, value: "85%", label: "Efficiency Gain", description: "Average improvement across users" },
    { icon: Award, value: "50+", label: "Publications", description: "Research papers published" },
    { icon: Globe, value: "40+", label: "Countries", description: "Global research network" }
  ];

  return (
    <>
      <SEOHead 
        customData={{
          title: "AI Autonomous Research Assistant - Zion Tech Group",
          description: "Revolutionary AI-powered research assistant that automates literature review, data analysis, and hypothesis generation. Accelerate your research with intelligent automation and insights.",
          keywords: ["AI research assistant", "research automation", "scientific research", "literature review", "data analysis", "hypothesis generation", "research collaboration"],
          type: "website",
          url: "https://ziontechgroup.com/ai-autonomous-research-assistant"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Autonomous Research Assistant
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
                Transform your research process with AI-powered automation. Accelerate discoveries, streamline analysis, and unlock insights with our intelligent research assistant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services/ai-autonomous-systems"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-cyan-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered research assistant combines cutting-edge technology with deep research expertise to deliver unprecedented research capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-12 w-12 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 text-center mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transformative Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI research assistant is revolutionizing research across disciplines.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0">
                      <useCase.icon className="h-12 w-12 text-cyan-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-semibold text-white mb-2">{useCase.title}</h3>
                      <p className="text-gray-300 mb-4">{useCase.description}</p>
                      <div className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {useCase.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Accelerate Your Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of researchers who have transformed their research process with our AI-powered assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services/ai-autonomous-systems"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutonomousResearchAssistant;