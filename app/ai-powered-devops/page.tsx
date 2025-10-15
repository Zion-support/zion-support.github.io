import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, Shield, CheckCircle, ArrowRight, Code, Monitor } from 'lucide-react';

const AiPoweredDevopsPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Automation",
      description: "Intelligent automation that learns from your deployment patterns and optimizes processes."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart CI/CD",
      description: "Automated testing, building, and deployment with AI-driven quality assurance."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Integration",
      description: "Built-in security scanning and vulnerability detection in your deployment pipeline."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Real-time Monitoring",
      description: "AI-powered monitoring and alerting for proactive issue detection and resolution."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered DevOps - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered DevOps solutions for automated deployment, monitoring, and infrastructure management." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Code className="w-16 h-16 text-cyan-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI-Powered <span className="text-cyan-400">DevOps</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your development workflow with AI-powered DevOps solutions that automate, optimize, and secure your entire deployment pipeline.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Automated Deployments
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Intelligent Monitoring
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Security First
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-cyan-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our DevOps experts to learn how AI can revolutionize your development and deployment processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiPoweredDevopsPage;