import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Users,
  Star,
  CheckCircle,
  TrendingUp,
  Settings,
  Sparkles,
  Target,
  BarChart3,
  Cloud,
  Workflow
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

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

  const benefits = [
    "Reduce manual work by 80%",
    "Improve process efficiency by 300%",
    "Eliminate human errors completely",
    "Scale operations without additional staff",
    "24/7 automated monitoring",
    "Real-time process optimization",
    "Seamless system integration",
    "Predictive maintenance alerts",
    "Compliance automation",
    "Cost reduction up to 60%"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI analytics platform with real-time insights and predictive modeling." />
        <meta name="keywords" content="AI analytics, data analysis, business intelligence, machine learning" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-analytics" />
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
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Analytics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Analytics Platform
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your data into actionable insights with our advanced AI analytics platform. 
            Get real-time predictions, automated reporting, and intelligent recommendations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;