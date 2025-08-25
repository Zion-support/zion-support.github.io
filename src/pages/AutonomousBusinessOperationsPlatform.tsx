import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Zap, 
  Cpu, 
  Database, 
  BarChart3, 
  Globe, 
  Network, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Lightbulb,
  Target,
  Settings,
  Workflow
} from 'lucide-react';

const AutonomousBusinessOperationsPlatform = () => {
  const features = [
    {
      icon: Bot,
      title: "Autonomous Operations",
      description: "AI-powered systems that operate independently and make intelligent decisions"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant processing and decision-making for critical business operations"
    },
    {
      icon: Cpu,
      title: "Intelligent Automation",
      description: "Smart automation that learns and adapts to business needs"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless integration across all business systems and data sources"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Advanced analytics that predict trends and optimize operations"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Built-in security and compliance monitoring for all operations"
    }
  ];

  const operations = [
    {
      title: "Supply Chain Management",
      description: "Autonomous supply chain optimization and inventory management",
      benefits: ["Demand forecasting", "Inventory optimization", "Supplier management"]
    },
    {
      title: "Customer Service",
      description: "AI-powered customer support and relationship management",
      benefits: ["24/7 support", "Personalized interactions", "Issue resolution"]
    },
    {
      title: "Financial Operations",
      description: "Automated financial processing and risk management",
      benefits: ["Invoice processing", "Risk assessment", "Financial reporting"]
    },
    {
      title: "HR & Recruitment",
      description: "Intelligent HR processes and talent acquisition",
      benefits: ["Candidate screening", "Performance monitoring", "Training optimization"]
    }
  ];

  const benefits = [
    "24/7 autonomous operation",
    "Reduced operational costs",
    "Improved efficiency and accuracy",
    "Real-time decision making",
    "Scalable operations",
    "Enhanced customer experience"
  ];

  const useCases = [
    {
      title: "Manufacturing Companies",
      description: "Automate production lines and quality control processes"
    },
    {
      title: "Retail & E-commerce",
      description: "Optimize inventory and customer service operations"
    },
    {
      title: "Financial Services",
      description: "Automate trading, risk management, and compliance"
    },
    {
      title: "Healthcare Organizations",
      description: "Streamline patient care and administrative processes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Bot className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Autonomous Business Operations Platform
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with fully autonomous operations. Our AI-powered platform 
              handles complex business processes independently, optimizing efficiency and 
              driving growth while you focus on strategic decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
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
              Revolutionary Autonomous Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with business process automation to create 
              truly autonomous operations that work around the clock.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Autonomous Business Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how autonomous systems are revolutionizing key business operations 
              across all industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {operations.map((operation, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{operation.title}</h3>
                <p className="text-gray-300 mb-6">{operation.description}</p>
                <ul className="space-y-2">
                  {operation.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transformative Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the revolutionary benefits of autonomous business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
              >
                <Star className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our autonomous operations platform is designed for forward-thinking organizations 
              across all industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Autonomous Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the autonomous revolution and transform your business operations. 
            Our expert team is ready to help you implement cutting-edge autonomous solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutonomousBusinessOperationsPlatform;