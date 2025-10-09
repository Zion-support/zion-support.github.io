'use client';
import React from 'react';
import { Calendar, Users, BarChart, CheckCircle, Clock, Target, Zap, Star, Shield, ArrowRight, Phone, Mail } from 'lucide-react';

const ProjectManagementToolsPage: React.FC = () => {
  const tools = [
    {
      name: 'AI Task Scheduler',
      description: 'Intelligent task scheduling that optimizes team workload and project timelines automatically.',
      features: ['Smart scheduling', 'Resource optimization', 'Deadline tracking', 'Dependency management', 'Auto-adjustments'],
      price: '$69/month',
      icon: Calendar,
      color: 'text-blue-500'
    },
    {
      name: 'Team Collaboration Hub',
      description: 'Centralized workspace for team communication, file sharing, and real-time collaboration.',
      features: ['Real-time chat', 'File sharing', 'Video calls', 'Screen sharing', 'Document collaboration'],
      price: '$49/month',
      icon: Users,
      color: 'text-green-500'
    },
    {
      name: 'Progress Analytics',
      description: 'Advanced project analytics with predictive insights and performance tracking.',
      features: ['Progress tracking', 'Predictive analytics', 'Performance metrics', 'Custom dashboards', 'Automated reports'],
      price: '$79/month',
      icon: BarChart,
      color: 'text-purple-500'
    },
    {
      name: 'Resource Manager',
      description: 'Smart resource allocation and capacity planning with workload balancing.',
      features: ['Resource allocation', 'Capacity planning', 'Workload balancing', 'Skill matching', 'Availability tracking'],
      price: '$89/month',
      icon: Target,
      color: 'text-orange-500'
    },
    {
      name: 'Time Tracker Pro',
      description: 'Automated time tracking with project billing and productivity insights.',
      features: ['Auto time tracking', 'Project billing', 'Productivity insights', 'Timesheet generation', 'Invoice creation'],
      price: '$39/month',
      icon: Clock,
      color: 'text-cyan-500'
    },
    {
      name: 'Risk Assessment Tool',
      description: 'AI-powered risk identification and mitigation planning for project success.',
      features: ['Risk identification', 'Impact analysis', 'Mitigation planning', 'Early warnings', 'Risk reporting'],
      price: '$59/month',
      icon: Shield,
      color: 'text-red-500'
    }
  ];

  const benefits = [
    {
      title: 'Complete Projects 40% Faster',
      description: 'AI optimization and automation help teams deliver projects ahead of schedule',
      icon: Zap
    },
    {
      title: 'Improve Team Productivity',
      description: 'Better collaboration tools and resource management boost overall efficiency',
      icon: Star
    },
    {
      title: 'Reduce Project Risks',
      description: 'Proactive risk management and early warning systems prevent costly delays',
      icon: Shield
    },
    {
      title: 'Save 15+ Hours Weekly',
      description: 'Automation handles routine tasks, giving teams more time for strategic work',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Project Management Tools
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Streamline your project workflow with AI-powered management tools. 
            Plan better, execute faster, and deliver exceptional results every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <tool.icon className={`w-8 h-8 ${tool.color} mr-3`} />
                <h3 className="text-xl font-bold text-white">{tool.name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{tool.description}</p>
              <ul className="space-y-2 mb-4">
                {tool.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-cyan-400">{tool.price}</span>
                <a
                  href="/contact"
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Project Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Master Project Management?
          </h2>
          <p className="text-xl text-cyan-100 mb-6">
            Join 2,000+ teams already using our tools to deliver projects faster and more efficiently.
          </p>
          <a
            href="tel:+13024640950"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call (302) 464-0950
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectManagementToolsPage;
