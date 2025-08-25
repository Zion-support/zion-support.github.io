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
  PieChart
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AutonomousBusinessOperationsPlatform: React.FC = () => {
  const features = [
    {
      title: "Intelligent Process Automation",
      description: "AI-powered automation that learns and adapts to your business processes",
      icon: Workflow,
      benefits: ["Smart workflows", "Adaptive learning", "Process optimization"]
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Comprehensive business intelligence with live data visualization",
      icon: BarChart,
      benefits: ["Live insights", "Custom dashboards", "Predictive analytics"]
    },
    {
      title: "Autonomous Decision Engine",
      description: "AI-driven decision making for operational efficiency",
      icon: Brain,
      benefits: ["Data-driven decisions", "Risk assessment", "Performance optimization"]
    },
    {
      title: "Enterprise Security & Compliance",
      description: "Bank-grade security with automated compliance monitoring",
      icon: Shield,
      benefits: ["SOC2 compliance", "GDPR ready", "24/7 monitoring"]
    }
  ];

  const useCases = [
    {
      title: "Supply Chain Optimization",
      description: "Automated inventory management and demand forecasting",
      icon: Network,
      impact: "30% cost reduction"
    },
    {
      title: "Customer Service Automation",
      description: "AI-powered customer support with human-like interactions",
      icon: Users,
      impact: "80% faster resolution"
    },
    {
      title: "Financial Operations",
      description: "Automated accounting, invoicing, and financial reporting",
      icon: BarChart3,
      impact: "95% accuracy improvement"
    },
    {
      title: "HR Process Automation",
      description: "Streamlined recruitment, onboarding, and performance management",
      icon: Settings,
      impact: "50% time savings"
    }
  ];

  const stats = [
    { icon: Users, value: "1000+", label: "Businesses Automated", description: "Trusted by companies worldwide" },
    { icon: TrendingUp, value: "40%", label: "Efficiency Gain", description: "Average improvement across clients" },
    { icon: Award, value: "99.9%", label: "Uptime", description: "Enterprise-grade reliability" },
    { icon: Globe, value: "45+", label: "Countries", description: "Global deployment network" }
  ];

  return (
    <>
      <SEOHead 
        customData={{
          title: "Autonomous Business Operations Platform - Zion Tech Group",
          description: "Revolutionary AI-powered platform that automates and optimizes your entire business operations. Streamline processes, reduce costs, and boost efficiency with intelligent automation.",
          keywords: ["business automation", "AI operations", "process automation", "business intelligence", "autonomous systems", "enterprise automation", "workflow automation"],
          type: "website",
          url: "https://ziontechgroup.com/autonomous-business-operations-platform"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Autonomous Business Operations Platform
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
                Transform your business with AI-powered automation that works 24/7. Streamline operations, reduce costs, and boost efficiency across your entire organization.
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
                Our autonomous platform combines cutting-edge AI with business process automation to deliver unprecedented operational efficiency.
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
                Discover how our autonomous platform is revolutionizing business operations across industries.
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have transformed their operations with our autonomous platform.
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

export default AutonomousBusinessOperationsPlatform;