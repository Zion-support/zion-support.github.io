import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Users, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Clock, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  Cpu,
  Database,
  Network,
  Globe,
  Rocket,
  Lightbulb,
  Code,
  Lock,
  Eye,
  Heart,
  DollarSign,
  ShoppingCart,
  Palette,
  Users2,
  Briefcase,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIAutonomousBusinessManager: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Decision Making",
      description: "AI-powered business decisions based on real-time data analysis and predictive modeling"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive business intelligence with automated reporting and insights"
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Automated strategic planning with scenario modeling and optimization"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "End-to-end business process automation with intelligent workflows"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Proactive risk assessment and mitigation strategies"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Continuous business monitoring and autonomous decision-making"
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Improve decision-making speed by 10x",
    "Increase business efficiency by 60%",
    "Automate 80% of routine business tasks",
    "Real-time performance monitoring",
    "Predictive analytics for business growth"
  ];

  const useCases = [
    {
      title: "Enterprise Management",
      description: "Automated enterprise resource planning and management",
      icon: Building
    },
    {
      title: "Financial Operations",
      description: "Intelligent financial planning and budget optimization",
      icon: DollarSign
    },
    {
      title: "Human Resources",
      description: "AI-powered HR management and talent optimization",
      icon: Users2
    },
    {
      title: "Supply Chain",
      description: "Intelligent supply chain optimization and management",
      icon: ShoppingCart
    },
    {
      title: "Customer Relations",
      description: "Automated customer service and relationship management",
      icon: Heart
    },
    {
      title: "Marketing Operations",
      description: "Intelligent marketing automation and optimization",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>AI Autonomous Business Manager - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our AI Autonomous Business Manager. Intelligent decision-making, process automation, and strategic planning powered by advanced AI technology." />
        <meta name="keywords" content="AI business manager, autonomous business, AI decision making, business automation, strategic planning, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-business-manager" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Brain className="h-12 w-12 text-blue-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              AI Autonomous Business Manager
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Transform your business operations with intelligent AI that manages, optimizes, and grows your business autonomously
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-6 h-6 bg-purple-400 rounded-full opacity-60"></div>
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
              Intelligent Business Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI Autonomous Business Manager combines cutting-edge artificial intelligence with deep business expertise to revolutionize how you run your company
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Business Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented growth and efficiency with AI-powered business management
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From enterprise management to customer relations, our AI handles every aspect of your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <useCase.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powered by Advanced AI Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on cutting-edge AI and machine learning technologies for optimal performance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Machine Learning</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Big Data Analytics</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Network className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Neural Networks</h3>
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
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the future of autonomous business management with Zion Tech Group
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
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
              Ready to revolutionize your business? Contact our AI experts today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (302) 464-0950</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
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

export default AIAutonomousBusinessManager;