import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Building, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Zap, 
  Target,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
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
  MapPin,
  TrendingUp,
  Settings,
  Monitor,
  Cloud,
  Server,
  Workflow,
  Analytics,
  Automation,
  Intelligence
} from 'lucide-react';

const AIAutonomousBusinessPlatform: React.FC = () => {
  const platformFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms that continuously learn and optimize business operations"
    },
    {
      icon: Building,
      title: "Enterprise Integration",
      description: "Seamless integration with existing enterprise systems and workflows"
    },
    {
      icon: Cpu,
      title: "Scalable Architecture",
      description: "Cloud-native platform that scales with your business growth"
    },
    {
      icon: Database,
      title: "Real-time Analytics",
      description: "Live business intelligence and performance monitoring"
    },
    {
      icon: Network,
      title: "Connected Ecosystem",
      description: "Unified platform connecting all business processes and systems"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC2 compliance and advanced threat protection"
    }
  ];

  const coreModules = [
    {
      title: "Business Intelligence",
      description: "Advanced analytics and reporting with AI-driven insights",
      icon: Analytics,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports", "Data Visualization"]
    },
    {
      title: "Process Automation",
      description: "Intelligent workflow automation and optimization",
      icon: Automation,
      features: ["Workflow Design", "Rule Engine", "Process Monitoring", "Performance Optimization"]
    },
    {
      title: "Resource Management",
      description: "AI-powered resource allocation and optimization",
      icon: Settings,
      features: ["Resource Planning", "Capacity Management", "Cost Optimization", "Efficiency Tracking"]
    },
    {
      title: "Customer Intelligence",
      description: "360-degree customer view with predictive behavior analysis",
      icon: Intelligence,
      features: ["Customer Profiling", "Behavior Prediction", "Personalization", "Engagement Optimization"]
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 50%",
    "Improve business efficiency by 70%",
    "Accelerate decision-making by 15x",
    "Automate 90% of routine business tasks",
    "Real-time performance monitoring and alerts",
    "Predictive analytics for strategic planning"
  ];

  const useCases = [
    {
      title: "Large Enterprises",
      description: "Comprehensive business platform for Fortune 500 companies",
      icon: Building,
      benefits: ["Multi-department integration", "Global operations support", "Advanced compliance features"]
    },
    {
      title: "Growing Companies",
      description: "Scalable platform that grows with your business",
      icon: TrendingUp,
      benefits: ["Modular architecture", "Pay-as-you-grow pricing", "Easy customization"]
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation platform",
      icon: Rocket,
      benefits: ["Legacy system integration", "Modern cloud architecture", "AI-first approach"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <Helmet>
        <title>AI Autonomous Business Platform - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI Autonomous Business Platform. Enterprise-grade automation, intelligence, and optimization in one unified solution." />
        <meta name="keywords" content="AI business platform, autonomous business platform, enterprise AI, business automation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-business-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-indigo-500/20 rounded-full">
                <Building className="h-12 w-12 text-indigo-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              AI Autonomous Business Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-4xl mx-auto">
              The complete enterprise platform that autonomously manages, optimizes, and grows your business with AI-powered intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-indigo-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-6 h-6 bg-purple-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float">
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Business Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI Autonomous Business Platform provides everything you need to run your business intelligently and efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Platform Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive modules that work together to create a unified business management experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreModules.map((module, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-indigo-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                    <module.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{module.description}</p>
                <div className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
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
              Transform Your Business Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented growth and efficiency with our AI-powered business platform
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
      <section className="py-20 bg-gradient-to-r from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to enterprises, our platform adapts to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="h-8 w-8 text-indigo-600" />
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

      {/* Technology Architecture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Technology Architecture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on cutting-edge technologies for reliability, scalability, and performance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Cloud-Native</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Server className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Microservices</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Workflow className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">API-First</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Real-time</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join the future of autonomous business management with Zion Tech Group
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
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
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (302) 464-0950</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-indigo-600" />
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

export default AIAutonomousBusinessPlatform;