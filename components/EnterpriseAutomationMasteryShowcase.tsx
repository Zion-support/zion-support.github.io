import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cog, Zap, Target, TrendingUp, Users, Building, Shield, Brain, Globe } from 'lucide-react';

const EnterpriseAutomationMasteryShowcase = () => {
  const automationContent = [
    {
      id: 'enterprise-ai-automation-2027',
      title: '🏢 Enterprise AI Automation Mastery 2027',
      description: 'Complete framework for automating 90% of enterprise processes with AI, achieving 5000% ROI',
      category: 'AI Automation',
      readTime: '25 min read',
      difficulty: 'Advanced',
      roi: '5000%',
      tags: ['Enterprise AI', 'Process Automation', 'ROI'],
      featured: true,
      new: true
    },
    {
      id: 'intelligent-workflow-automation',
      title: '🔄 Intelligent Workflow Automation',
      description: 'Self-learning workflows that adapt and optimize themselves based on business patterns',
      category: 'Workflow AI',
      readTime: '20 min read',
      difficulty: 'Advanced',
      roi: '3500%',
      tags: ['Workflow AI', 'Self-Learning', 'Optimization'],
      featured: true,
      new: true
    },
    {
      id: 'enterprise-ai-governance',
      title: '🛡️ Enterprise AI Governance Framework',
      description: 'Comprehensive governance system ensuring AI compliance, ethics, and risk management',
      category: 'AI Governance',
      readTime: '22 min read',
      difficulty: 'Expert',
      roi: '4000%',
      tags: ['AI Governance', 'Compliance', 'Risk Management'],
      featured: true,
      new: true
    },
    {
      id: 'automated-decision-making',
      title: '🎯 Automated Decision-Making Systems',
      description: 'AI-powered decision engines that make complex business decisions with 99.5% accuracy',
      category: 'Decision AI',
      readTime: '18 min read',
      difficulty: 'Advanced',
      roi: '6000%',
      tags: ['Decision AI', 'Business Intelligence', 'Accuracy'],
      featured: true,
      new: true
    },
    {
      id: 'enterprise-ai-integration',
      title: '🔗 Enterprise AI Integration Mastery',
      description: 'Seamless integration of AI across all enterprise systems and departments',
      category: 'AI Integration',
      readTime: '24 min read',
      difficulty: 'Expert',
      roi: '4500%',
      tags: ['AI Integration', 'Enterprise Systems', 'Seamless'],
      featured: false,
      new: true
    },
    {
      id: 'ai-powered-customer-service',
      title: '💬 AI-Powered Customer Service Revolution',
      description: 'Revolutionary customer service automation achieving 95% satisfaction rates',
      category: 'Customer AI',
      readTime: '16 min read',
      difficulty: 'Intermediate',
      roi: '3000%',
      tags: ['Customer AI', 'Service Automation', 'Satisfaction'],
      featured: false,
      new: true
    }
  ];

  const automationStats = [
    { label: 'Processes Automated', value: '90%', icon: Cog },
    { label: 'Average ROI', value: '4500%', icon: TrendingUp },
    { label: 'Enterprise Clients', value: '1000+', icon: Building },
    { label: 'Global Deployment', value: '60+ Countries', icon: Globe }
  ];

  const automationFeatures = [
    {
      icon: Brain,
      title: 'Intelligent Process Discovery',
      description: 'AI automatically identifies automation opportunities across your enterprise'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security and compliance for all automated processes'
    },
    {
      icon: Zap,
      title: 'Real-Time Optimization',
      description: 'Continuous optimization of automated processes for maximum efficiency'
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless collaboration between human workers and AI systems'
    }
  ];

  const successStories = [
    {
      company: 'Fortune 500 Manufacturing',
      industry: 'Manufacturing',
      roi: '7500%',
      processes: '85%',
      timeframe: '6 months',
      description: 'Automated entire production line with AI, reducing costs by 60%'
    },
    {
      company: 'Global Financial Services',
      industry: 'Finance',
      roi: '6200%',
      processes: '92%',
      timeframe: '4 months',
      description: 'Automated risk assessment and compliance processes'
    },
    {
      company: 'Healthcare Enterprise',
      industry: 'Healthcare',
      roi: '4800%',
      processes: '78%',
      timeframe: '8 months',
      description: 'Automated patient care workflows and administrative tasks'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-900 text-sm font-bold mb-6">
            <Cog className="w-5 h-5 mr-2" />
            ENTERPRISE AUTOMATION MASTERY 2027
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Enterprise AI
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Automation Mastery
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Transform your enterprise with comprehensive AI automation solutions. 
            Automate 90% of business processes, achieve unprecedented ROI, and 
            revolutionize your operational efficiency.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {automationStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <stat.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Enterprise Automation Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-blue-200 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Enterprise Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">{story.roi}</div>
                  <div className="text-sm text-blue-200">ROI Achievement</div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{story.company}</h4>
                <div className="text-blue-300 text-sm mb-4">{story.industry}</div>
                <p className="text-blue-200 text-sm mb-4">{story.description}</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-white">{story.processes}</div>
                    <div className="text-xs text-blue-300">Processes Automated</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{story.timeframe}</div>
                    <div className="text-xs text-blue-300">Implementation</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Featured Automation Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationContent.filter(item => item.featured).map((content) => (
              <div key={content.id} className="group bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-sm font-semibold rounded-full border border-blue-400/30">
                      {content.category}
                    </span>
                    {content.new && (
                      <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-slate-900 text-xs font-bold rounded-full animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-blue-200">
                      <span>{content.readTime}</span>
                      <span>•</span>
                      <span className="font-bold text-green-400">{content.roi} ROI</span>
                    </div>
                    <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                      {content.difficulty}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {content.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 text-blue-200 text-xs rounded-full border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/enterprise-automation/${content.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    Master Enterprise Automation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">
            More Automation Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationContent.filter(item => !item.featured).map((content) => (
              <div key={content.id} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-white/20 text-blue-200 text-xs font-medium rounded-full">
                      {content.category}
                    </span>
                    {content.new && (
                      <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-blue-200 mb-4 text-sm line-clamp-2">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-blue-300">
                      <span>{content.readTime}</span>
                      <span>•</span>
                      <span className="font-bold text-green-400">{content.roi} ROI</span>
                    </div>
                    <Link
                      to={`/enterprise-automation/${content.id}`}
                      className="text-blue-400 hover:text-blue-300 font-medium text-sm"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Automate Your Enterprise?
          </h3>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg">
            Join thousands of enterprises already transforming their operations with our 
            comprehensive AI automation solutions. Start your automation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/enterprise-automation-mastery"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Cog className="w-6 h-6 mr-3" />
              Start Automation Journey
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <Link
              to="/enterprise-automation-consultation"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-300 font-bold rounded-xl hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
            >
              <Target className="w-6 h-6 mr-3" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseAutomationMasteryShowcase;