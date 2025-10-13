import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  CheckCircle, 
  Star, 
  Zap, 
  Globe, 
  Mail, 
  Phone, 
  Database,
  Settings,
  Monitor,
  Sparkles,
  Lightbulb,
  TrendingDown
} from "lucide-react";

const AIAutomationPlatformPage: React.FC = () => {
  const features = [
    {
      title: "Smart Process Discovery",
      description: "Automatically discover and map your business processes using AI analysis",
      icon: <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Predictive Automation",
      description: "Anticipate needs and trigger automated actions before issues arise",
      icon: <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Intelligent Workflow Design",
      description: "Create complex workflows with drag-and-drop simplicity and AI assistance",
      icon: <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Monitoring",
      description: "Track automation performance and get insights for continuous improvement",
      icon: <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Reduce manual work by up to 80%",
    "Improve process accuracy by 95%",
    "Cut operational costs by 60%",
    "Scale automation across departments",
    "24/7 automated operations",
    "Seamless integration with existing systems"
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our advanced AI automation platform. Streamline processes, reduce costs, and boost efficiency with intelligent automation solutions." />
        <meta name="keywords" content="AI automation, business process automation, workflow automation, intelligent automation, process optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Automation Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business processes with intelligent automation. Our AI-powered platform 
                streamlines workflows, reduces costs, and boosts efficiency across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
                >
                  View Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Automation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with intuitive design to deliver 
                automation solutions that work for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of intelligent automation that adapts to your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
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
              Join thousands of businesses already using our AI automation platform 
              to streamline their operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutomationPlatformPage;
