import React from 'react';
import { Helmet } from 'react-helmet-async';
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
  Rocket
} from 'lucide-react';

const AIAutonomousResearchAssistant = () => {
  return (
    <>
      <Helmet>
        <title>AI Autonomous Research Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered research assistant that autonomously conducts research, analyzes data, and generates insights." />
        <meta name="keywords" content="AI research, autonomous research, data analysis, research assistant, AI insights" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-6 py-3 mb-6">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-medium">AI Research Assistant</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Autonomous <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">Research Intelligence</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Advanced AI-powered research assistant that autonomously conducts research, analyzes data, and generates actionable insights for your business.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Research Capabilities</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Comprehensive research tools powered by advanced AI algorithms
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Search,
                  title: "Intelligent Research",
                  description: "AI-powered research that automatically finds and analyzes relevant information from multiple sources."
                },
                {
                  icon: Database,
                  title: "Data Analysis",
                  description: "Advanced data processing and analysis capabilities to extract meaningful insights."
                },
                {
                  icon: Brain,
                  title: "Pattern Recognition",
                  description: "Identify patterns and trends in complex datasets to predict future outcomes."
                },
                {
                  icon: FileText,
                  title: "Report Generation",
                  description: "Automatically generate comprehensive research reports with actionable recommendations."
                },
                {
                  icon: Globe,
                  title: "Global Research",
                  description: "Access and analyze research from global sources and databases."
                },
                {
                  icon: Zap,
                  title: "Real-time Insights",
                  description: "Get instant research insights and updates as new information becomes available."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-colors">
                  <feature.icon className="w-12 h-12 text-purple-400 mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Research Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI Autonomous Research Assistant and accelerate your research capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutonomousResearchAssistant;