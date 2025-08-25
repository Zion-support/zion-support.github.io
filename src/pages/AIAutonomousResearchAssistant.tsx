import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Search, 
  BookOpen, 
  FileText, 
  Database, 
  Globe, 
  Zap, 
  Target,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
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
  Rocket,
  Cpu,
  Network
} from 'lucide-react';

const AIAutonomousResearchAssistant: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Research",
      description: "Advanced artificial intelligence that autonomously conducts comprehensive research"
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description: "Smart search algorithms that find relevant information across multiple sources"
    },
    {
      icon: BookOpen,
      title: "Literature Review",
      description: "Automated literature review and analysis of academic and industry sources"
    },
    {
      icon: FileText,
      title: "Report Generation",
      description: "Automatic generation of comprehensive research reports and summaries"
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Advanced data analysis and pattern recognition capabilities"
    },
    {
      icon: Globe,
      title: "Multi-Source Research",
      description: "Research across academic databases, industry reports, and web sources"
    }
  ];

  const capabilities = [
    {
      title: "Academic Research",
      description: "Comprehensive academic research with citation management",
      icon: BookOpen,
      features: ["Peer-reviewed papers", "Citation tracking", "Literature synthesis", "Research gaps identification"]
    },
    {
      title: "Market Research",
      description: "Industry and market analysis with competitive intelligence",
      icon: BarChart3,
      features: ["Market trends", "Competitor analysis", "Industry reports", "Market sizing"]
    },
    {
      title: "Technical Research",
      description: "Deep technical research and technology assessment",
      icon: Code,
      features: ["Technology evaluation", "Patent research", "Technical specifications", "Innovation tracking"]
    },
    {
      title: "Business Intelligence",
      description: "Business research and strategic intelligence gathering",
      icon: Building,
      features: ["Company research", "Financial analysis", "Strategic insights", "Risk assessment"]
    }
  ];

  const benefits = [
    "Reduce research time by up to 80%",
    "Access to millions of research sources",
    "Automated citation and reference management",
    "Real-time research updates and alerts",
    "Multi-language research capabilities",
    "24/7 autonomous research operation"
  ];

  const useCases = [
    {
      title: "Academic Institutions",
      description: "Support researchers and students with comprehensive research assistance",
      icon: Building,
      benefits: ["Literature reviews", "Research methodology", "Citation management", "Publication support"]
    },
    {
      title: "Research Organizations",
      description: "Accelerate research projects with AI-powered assistance",
      icon: Rocket,
      benefits: ["Project research", "Data collection", "Analysis support", "Report generation"]
    },
    {
      title: "Business Intelligence",
      description: "Market research and competitive intelligence for businesses",
      icon: BarChart3,
      benefits: ["Market analysis", "Competitor research", "Industry trends", "Strategic insights"]
    },
    {
      title: "Legal Research",
      description: "Comprehensive legal research and case law analysis",
      icon: BookOpen,
      benefits: ["Case law research", "Legal precedent", "Regulatory analysis", "Document review"]
    }
  ];

  const researchAreas = [
    {
      title: "Technology",
      icon: Cpu,
      description: "AI, blockchain, IoT, and emerging technologies"
    },
    {
      title: "Healthcare",
      icon: Heart,
      description: "Medical research, pharmaceuticals, and healthcare innovation"
    },
    {
      title: "Finance",
      icon: DollarSign,
      description: "Financial markets, fintech, and economic research"
    },
    {
      title: "Manufacturing",
      icon: Building,
      description: "Industry 4.0, automation, and manufacturing innovation"
    },
    {
      title: "Energy",
      icon: Zap,
      description: "Renewable energy, sustainability, and energy innovation"
    },
    {
      title: "Education",
      icon: Users,
      description: "Educational technology, pedagogy, and learning innovation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Helmet>
        <title>AI Autonomous Research Assistant - Zion Tech Group</title>
        <meta name="description" content="Transform your research with our AI Autonomous Research Assistant. Intelligent research automation, comprehensive analysis, and automated report generation powered by advanced AI." />
        <meta name="keywords" content="AI research assistant, autonomous research, research automation, AI research, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-research-assistant" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-purple-500/20 rounded-full">
                <Brain className="h-12 w-12 text-purple-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              AI Autonomous Research Assistant
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-4xl mx-auto">
              Revolutionize your research with intelligent AI that autonomously conducts comprehensive research, analysis, and report generation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Start Research
              </button>
              <button className="border-2 border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-purple-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-6 h-6 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float">
          <div className="w-3 h-3 bg-indigo-400 rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Intelligent Research Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI Autonomous Research Assistant combines cutting-edge artificial intelligence with comprehensive research methodologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Research Specializations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research capabilities across multiple domains and industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                    <capability.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{capability.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Research Assistant?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented research efficiency and comprehensive analysis capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Research Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From academic research to business intelligence, our AI assistant adapts to your research requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{useCase.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Research Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research coverage across all major industries and domains
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <area.icon className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{area.title}</h3>
                <p className="text-gray-600 text-xs">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on cutting-edge AI and machine learning technologies for optimal research performance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Machine Learning</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Natural Language Processing</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Network className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Knowledge Graphs</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Deep Learning</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Research?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join the future of intelligent research with Zion Tech Group
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to revolutionize your research? Contact our AI experts today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (302) 464-0950</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AIAutonomousResearchAssistant;