'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Calendar, Target, BarChart } from 'lucide-react';

const AiProjectManagementProPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Task Management',
      description: 'Intelligently prioritize and assign tasks based on team capacity and project requirements.'
    },
    {
      icon: <BarChart className="w-8 h-8 text-purple-400" />,
      title: 'Advanced Analytics',
      description: 'Get real-time insights into project performance, team productivity, and resource utilization.'
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: 'Smart Resource Allocation',
      description: 'Optimize team assignments and resource distribution for maximum efficiency.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Automated Workflows',
      description: 'Streamline project processes with intelligent automation and workflow optimization.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Team Collaboration',
      description: 'Enhance team communication and collaboration with AI-powered tools.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Risk Management',
      description: 'Identify and mitigate project risks with predictive analytics and early warning systems.'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Increase Productivity',
      description: 'Boost team productivity by up to 40% with intelligent task management'
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-400" />,
      title: 'Better Planning',
      description: 'Improve project planning accuracy with AI-powered predictions and insights'
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: 'On-Time Delivery',
      description: 'Reduce project delays by 30% with better resource management and scheduling'
    },
    {
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing project management tools and workflows'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Project Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pro</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your project management with AI-powered tools that optimize workflows, enhance team collaboration, and ensure project success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Advanced AI Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI project management platform includes everything you need to manage complex projects efficiently.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our AI Platform?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading organizations using our AI-powered project management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiProjectManagementProPage;