<<<<<<< HEAD
import { Right, Circle, Workflow, Brain, Settings, Zap, Play } from 'lucide-react'
import EnhancedSEO from '../components/EnhancedSEO'
import ResponsiveContainer from '../components/ResponsiveContainer'
import FuturisticCard from '../components/FuturisticCard'
import FuturisticButton from '../components/FuturisticButton'
const AIAutomationPlatform = () => {
  const features = [
    {
      title: "Workflow Automation",
      description: "Automate complex business processes with AI-powered workflows",
      icon: <Workflow className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Decision Making",
      description: "AI-driven decision making for automated business processes",
      icon: <Brain className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Process Optimization",
      description: "Continuously optimize processes using machine learning",
      icon: <Settings className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Integration Hub",
      description: "Connect and automate across all your business systems",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "70% process efficiency gain",
    "Automated decision making",
    "Seamless integrations",
    "Real-time optimization",
    "Scalable workflows",
    "Cost reduction"
  ];
  return (
    <>
      <EnhancedSEO
        title="AI Automation Platform - Intelligent Process Automation | Zion Tech Group"
        description="Transform your business with AI-powered automation. Workflow automation, smart decision making, and process optimization for modern enterprises."
        keywords="AI automation, workflow automation, process optimization, business automation, intelligent automation, RPA"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <ResponsiveContainer>
            <div className="relative z-10 text-center py-20">
              <div className="flex items-center justify-center mb-6">
                <Brain className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">Intelligent Automation</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Automation Platform
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Transform your business with AI-powered automation. 
                Automate workflows, optimize processes, and make intelligent decisions at scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  icon={<Right className="w-5 h-5" />}
                >
                  Get Started Today
                </FuturisticButton>
                <FuturisticButton
                  variant="outline"
                  icon={<Play className="w-5 h-5" />}
                >
                  View Demo
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Automation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to automate and optimize your business processes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Automation Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience intelligent automation that transforms your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                  <Circle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using AI automation to streamline their operations.
              </p>
              <FuturisticButton
                size="lg"
                icon={<Zap className="w-6 h-6" />}
              >
                Start Your Automation Journey
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>
=======
import React from "react";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Home - Zion Tech Group</title>
        <meta name="description" content="Home - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
>>>>>>> origin/main
      </div>
    </div>
  );
<<<<<<< HEAD
}
export default FiveGSolutionsPage;
=======
};

export default HomePage;
>>>>>>> origin/main
