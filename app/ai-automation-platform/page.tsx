import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, CheckCircle, TrendingUp, Settings, Target, Workflow } from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIAutomationPlatform = () => {
  const features = [
    {
      title: "Workflow Automation",
      description: "Automate complex business processes with AI-powered workflows",
      icon: <Workflow className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Analytics",
      description: "Get insights and predictions from your data automatically",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into existing systems",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Custom Solutions",
      description: "Tailored automation solutions for your specific needs",
      icon: <Settings className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Reduce manual work by up to 80%",
    "Improve accuracy and consistency",
    "Scale operations without scaling costs",
    "Get real-time insights and reporting",
    "24/7 automated monitoring",
    "Easy integration with existing tools"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our AI-powered automation platform. Streamline workflows, boost efficiency, and scale operations." />
      </Helmet>
      <EnhancedSEO />

      <ResponsiveContainer>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Automation Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business operations with our intelligent automation platform. 
            Streamline workflows, reduce costs, and scale efficiently with AI-powered solutions.
          </p>
          <FuturisticButton className="text-lg px-8 py-4">
            Start Your Automation Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </FuturisticButton>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Powerful Automation Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Platform?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our AI automation platform is designed to help businesses of all sizes 
                streamline their operations and achieve unprecedented efficiency.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center">
                <Target className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Efficiency Increase</span>
                    <span className="text-2xl font-bold text-green-400">80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cost Reduction</span>
                    <span className="text-2xl font-bold text-blue-400">60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Time Savings</span>
                    <span className="text-2xl font-bold text-purple-400">70%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have transformed their operations with our AI automation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton className="text-lg px-8 py-4">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </FuturisticButton>
            <button className="px-8 py-4 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>
        </section>
      </ResponsiveContainer>
    </div>
  );
};

export default AIAutomationPlatform;