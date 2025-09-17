import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Search, 
  BookOpen, 
  Cpu, 
  Zap, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  FileText, 
  Database, 
  Globe, 
  BarChart3,
  Users,
  Clock,
  Building,
  Cloud,
  Server,
  Workflow,
  BarChart,
  Settings as SettingsIcon,
  BarChart3 as Intelligence,
  Monitor,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Settings,
  Eye,
  Heart,
  DollarSign,
  ShoppingCart,
  Palette,
  Users2,
  Briefcase,
  Lightbulb,
  Code,
  Lock,
  Shield,
  Award,
  ChevronRight,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AIAutonomousResearchAssistant: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="AI Autonomous Research Assistant - Zion Tech Group"
        description="Revolutionary AI-powered research assistant that automates literature review, data analysis, and hypothesis generation. Accelerate your research with intelligent automation and insights."
        keywords={["AI research assistant", "research automation", "scientific research", "literature review", "data analysis", "hypothesis generation", "research collaboration"]}
        type="website"
        url="https://ziontechgroup.com/ai-autonomous-research-assistant"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Autonomous Research Assistant
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
                Transform your research capabilities with our cutting-edge AI platform that autonomously discovers, 
                analyzes, and synthesizes information across multiple domains and data sources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  to="/demo"
                  className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Research Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI research assistant combines advanced machine learning with domain expertise to deliver unprecedented research automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Intelligent Literature Review</h3>
                <p className="text-gray-300">
                  Automatically discover, analyze, and synthesize relevant research papers across multiple databases and sources.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Advanced Data Analysis</h3>
                <p className="text-gray-300">
                  Process complex datasets with machine learning algorithms to uncover hidden patterns and insights.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Hypothesis Generation</h3>
                <p className="text-gray-300">
                  Generate testable hypotheses based on existing research and data patterns using advanced AI reasoning.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Automated Report Generation</h3>
                <p className="text-gray-300">
                  Create comprehensive research reports with citations, methodology, and findings automatically.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Collaborative Research</h3>
                <p className="text-gray-300">
                  Enable seamless collaboration between researchers with shared workspaces and real-time updates.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Multi-Domain Expertise</h3>
                <p className="text-gray-300">
                  Access specialized knowledge across scientific, medical, engineering, and business domains.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading researchers and organizations who are already using our AI research assistant to accelerate their discoveries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Research Journey
              </Link>
              <Link
                to="/demo"
                className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutonomousResearchAssistant;