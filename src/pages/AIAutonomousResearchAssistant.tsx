import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Zap, 
  Target, 
  Shield, 
  Rocket, 
  Globe,
  BarChart3,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Lightbulb,
  Code,
  Database,
  Network,
  Cloud,
  Lock,
  Eye,
  Sparkles,
  TrendingUp,
  Settings,
  Cpu,
  Search,
  BookOpen,
  FileText,
  Microscope,
  TestTube,
  Beaker
} from 'lucide-react';

const AIAutonomousResearchAssistant: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Autonomous Research",
      description: "AI-powered research that independently discovers, analyzes, and synthesizes information across multiple domains."
    },
    {
      icon: Zap,
      title: "Real-time Analysis",
      description: "Instant processing and analysis of research data with continuous learning and adaptation capabilities."
    },
    {
      icon: Target,
      title: "Intelligent Discovery",
      description: "Advanced algorithms that identify patterns, connections, and insights hidden in complex datasets."
    },
    {
      icon: Shield,
      title: "Data Validation",
      description: "Automated verification and validation of research sources, methodologies, and findings."
    },
    {
      icon: Rocket,
      title: "Scalable Research",
      description: "Handle massive research projects across multiple disciplines with unprecedented efficiency."
    },
    {
      icon: Globe,
      title: "Multi-Domain Expertise",
      description: "Comprehensive research capabilities across scientific, academic, business, and technical domains."
    }
  ];

  const researchAreas = [
    {
      icon: Microscope,
      title: "Scientific Research",
      description: "Laboratory research, experimental design, data analysis, and scientific literature review."
    },
    {
      icon: BookOpen,
      title: "Academic Research",
      description: "Literature reviews, citation analysis, research methodology, and academic writing support."
    },
    {
      icon: TestTube,
      title: "Medical Research",
      description: "Clinical studies, drug discovery, medical literature analysis, and healthcare innovation."
    },
    {
      icon: Beaker,
      title: "Technology Research",
      description: "Emerging technology trends, patent analysis, competitive intelligence, and innovation research."
    },
    {
      icon: BarChart3,
      title: "Market Research",
      description: "Industry analysis, competitive landscape, market trends, and business intelligence."
    },
    {
      icon: Database,
      title: "Data Research",
      description: "Big data analysis, statistical research, predictive modeling, and data-driven insights."
    }
  ];

  const benefits = [
    "Accelerated research timelines by 10x",
    "Comprehensive coverage of research domains",
    "Automated data validation and verification",
    "Real-time insights and trend analysis",
    "Scalable research across multiple projects",
    "Continuous learning and improvement"
  ];

  const capabilities = [
    {
      icon: Search,
      title: "Intelligent Search",
      description: "AI-powered search across multiple databases, journals, and research repositories."
    },
    {
      icon: FileText,
      title: "Document Analysis",
      description: "Automated reading, comprehension, and analysis of research papers and documents."
    },
    {
      icon: Brain,
      title: "Pattern Recognition",
      description: "Machine learning algorithms that identify patterns and connections in research data."
    },
    {
      icon: Eye,
      title: "Trend Analysis",
      description: "Real-time monitoring and analysis of emerging trends and developments."
    },
    {
      icon: Lock,
      title: "Quality Assurance",
      description: "Automated validation of research quality, methodology, and credibility."
    },
    {
      icon: TrendingUp,
      title: "Insight Generation",
      description: "AI-generated insights and recommendations based on comprehensive research analysis."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Autonomous Research Assistant - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI autonomous research assistant that independently conducts research, analyzes data, and generates insights across multiple domains. Transform your research capabilities with AI-powered intelligence." />
        <meta name="keywords" content="AI research assistant, autonomous research, research automation, AI research, research intelligence, automated research" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-research-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Autonomous
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Research Assistant
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of research with our revolutionary AI autonomous research assistant. 
              Conduct comprehensive research across multiple domains with unprecedented speed, accuracy, 
              and intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 font-semibold rounded-xl transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI autonomous research assistant delivers unprecedented capabilities 
                that redefine how research is conducted and insights are generated.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-indigo-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Research Areas Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Research Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform excels across all major research domains, providing 
                specialized expertise and comprehensive analysis capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI technology with comprehensive research capabilities 
                to deliver unprecedented research excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose AI Autonomous Research?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the competitive advantage that autonomous research provides 
                for your organization's knowledge discovery and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl p-8">
                <div className="text-center">
                  <Star className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Research Pioneer</h3>
                  <p className="text-gray-300 mb-6">
                    Be among the first to experience truly autonomous research 
                    and gain a significant competitive advantage in your field.
                  </p>
                  <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-3xl p-12">
              <Lightbulb className="w-20 h-20 text-indigo-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Revolutionize Your Research?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your journey toward autonomous research today 
                and discover the unlimited potential of AI-powered knowledge discovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border-2 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 font-semibold rounded-xl transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutonomousResearchAssistant;