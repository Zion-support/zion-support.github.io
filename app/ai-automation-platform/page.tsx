import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  BarChart3, 
  Cloud, 
  Users, 
  ArrowRight,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Settings,
  Workflow,
  Target,
  Zap
} from 'lucide-react';

const AIAutomationPlatformPage = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intelligent Workflow Automation",
      description: "Automate complex business processes with AI that learns and adapts to your specific needs",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Make data-driven decisions with AI-powered insights and forecasting capabilities",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance with industry standards",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Integration",
      description: "Seamlessly integrate with your existing cloud infrastructure and third-party services",
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Reduce manual work by 80%",
    "Increase productivity by 300%",
    "Eliminate human errors",
    "24/7 automated operations",
    "Real-time monitoring",
    "Scalable solutions"
  ];

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "Automate ticket routing, response generation, and escalation processes",
      icon: <Users className="w-6 h-6" />,
      industry: "Customer Service"
    },
    {
      title: "Financial Process Automation",
      description: "Automate invoice processing, expense management, and financial reporting",
      icon: <Database className="w-6 h-6" />,
      industry: "Finance"
    },
    {
      title: "HR & Recruitment",
      description: "Streamline candidate screening, onboarding, and employee management",
      icon: <Code className="w-6 h-6" />,
      industry: "Human Resources"
    },
    {
      title: "Marketing Automation",
      description: "Automate campaign management, lead scoring, and customer segmentation",
      icon: <Target className="w-6 h-6" />,
      industry: "Marketing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>AI Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Advanced AI automation platform with intelligent workflow automation and predictive analytics." />
        <meta name="keywords" content="AI automation, workflow automation, business process automation, AI platform" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-automation-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Automation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Automation Platform
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Automate complex business processes with AI that learns and adapts. 
            Transform your operations with intelligent workflow automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <Zap className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Demo
              <Target className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI automation platform provides everything you need to streamline your business processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start your automation journey today and transform your business processes with AI
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Free Trial
            <Zap className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationPlatformPage;
