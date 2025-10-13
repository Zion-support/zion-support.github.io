import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, ArrowRight, CheckCircle, Star, Users, Award, BarChart3 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIAutomationPlatformPage = () => {
  const features = [
    {
      title: "Intelligent Process Automation",
      description: "Automate complex business processes with AI-powered decision making and workflow optimization",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Reduce manual work by 80%", "Increase process accuracy", "24/7 automated operations"]
    },
    {
      title: "Smart Workflow Designer",
      description: "Drag-and-drop interface to create sophisticated automation workflows without coding",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Visual workflow builder", "Pre-built templates", "Custom automation rules"]
    },
    {
      title: "AI-Powered Analytics",
      description: "Real-time insights and performance metrics for all automated processes",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Performance monitoring", "Predictive analytics", "Optimization recommendations"]
    }
  ];

  const stats = [
    { number: "95%", label: "Process Efficiency", icon: <Zap className="w-6 h-6" /> },
    { number: "80%", label: "Cost Reduction", icon: <Award className="w-6 h-6" /> },
    { number: "500+", label: "Automation Templates", icon: <Brain className="w-6 h-6" /> },
    { number: "24/7", label: "Automated Operations", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="AI Automation Platform - Zion Tech Group | Intelligent Process Automation"
        description="Transform your business with our AI-powered automation platform. Automate complex processes, reduce costs, and increase efficiency with intelligent workflow automation."
        keywords="AI automation, process automation, workflow automation, business automation, intelligent automation, AI platform"
        canonical="https://ziontechgroup.com/ai-automation-platform"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Automation Platform
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business operations with intelligent automation. Our AI-powered platform 
            automates complex processes, reduces costs, and increases efficiency across your entire organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton href="/contact" variant="primary" size="lg">
              Get Started Today
            </FuturisticButton>
            <FuturisticButton href="/demo" variant="outline" size="lg">
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI automation platform provides everything you need to transform your business processes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-8">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI automation platform to streamline operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton href="/contact" variant="primary" size="lg">
              Start Your Automation Journey
            </FuturisticButton>
            <FuturisticButton href="/pricing" variant="outline" size="lg">
              View Pricing
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIAutomationPlatformPage;