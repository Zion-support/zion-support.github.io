import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Users, 
  Target, 
  BarChart3, 
  Zap, 
  Brain, 
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  ArrowRight,
  Star,
  Shield,
  Settings,
  FileText,
  MessageSquare,
  Bell
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAiProjectManagerPro = () => {
  const features = [
    {
      title: "AI-Powered Task Management",
      description: "Intelligent task prioritization, automatic scheduling, and smart resource allocation based on team capacity and project requirements",
      icon: <Target className="w-8 h-8" />,
      stats: "40% faster delivery"
    },
    {
      title: "Predictive Analytics",
      description: "Advanced AI algorithms predict project risks, delays, and resource needs to keep projects on track",
      icon: <Brain className="w-8 h-8" />,
      stats: "95% accuracy"
    },
    {
      title: "Smart Resource Allocation",
      description: "Automatically assign tasks to the right team members based on skills, availability, and workload",
      icon: <Users className="w-8 h-8" />,
      stats: "60% efficiency boost"
    },
    {
      title: "Real-Time Collaboration",
      description: "Seamless team collaboration with instant messaging, file sharing, and live updates across all devices",
      icon: <MessageSquare className="w-8 h-8" />,
      stats: "Real-time sync"
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive project reports, analytics, and insights automatically with AI-powered recommendations",
      icon: <BarChart3 className="w-8 h-8" />,
      stats: "100% automated"
    },
    {
      title: "Risk Management",
      description: "Proactive risk identification and mitigation strategies to prevent project failures and delays",
      icon: <Shield className="w-8 h-8" />,
      stats: "85% risk reduction"
    }
  ];

  const capabilities = [
    {
      title: "Project Planning",
      description: "AI-assisted project planning with timeline optimization and resource forecasting",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Team Management",
      description: "Smart team organization, workload balancing, and performance tracking",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Budget Tracking",
      description: "Real-time budget monitoring with cost predictions and financial insights",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Quality Assurance",
      description: "Automated quality checks and compliance monitoring throughout the project lifecycle",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Communication Hub",
      description: "Centralized communication with stakeholders, clients, and team members",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Documentation",
      description: "Automated documentation generation and knowledge management",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams and freelancers",
      features: [
        "5 projects",
        "10 team members",
        "Basic AI features",
        "Email support",
        "Standard templates",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Unlimited projects",
        "50 team members",
        "Advanced AI features",
        "Priority support",
        "Custom templates",
        "API access",
        "Advanced analytics",
        "Integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations and enterprises",
      features: [
        "Unlimited everything",
        "Unlimited team members",
        "Full AI capabilities",
        "24/7 support",
        "Custom development",
        "White-label option",
        "Advanced security",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: "Slack", icon: "💬" },
    { name: "Microsoft Teams", icon: "🔷" },
    { name: "Google Workspace", icon: "🔍" },
    { name: "Jira", icon: "🎯" },
    { name: "Trello", icon: "📋" },
    { name: "Asana", icon: "📊" },
    { name: "GitHub", icon: "🐙" },
    { name: "GitLab", icon: "🦊" },
    { name: "Figma", icon: "🎨" },
    { name: "Notion", icon: "📝" },
    { name: "Confluence", icon: "📚" },
    { name: "Salesforce", icon: "☁️" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Project Manager Pro - Intelligent Project Management Platform"
        description="AI-powered project management with predictive analytics, smart resource allocation, and automated reporting. Boost team productivity by 40% with intelligent task management."
        keywords="project management, AI project manager, task management, team collaboration, project planning, resource allocation, project analytics"
        canonical="https://ziontechgroup.com/zion-ai-project-manager-pro"
      />
      
      <ResponsiveContainer className="py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 mb-6">
            <Target className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">#1 AI Project Management Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion AI Project Manager Pro
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Intelligent project management powered by AI. Boost team productivity by 40% with 
            predictive analytics, smart resource allocation, and automated project insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={Target}
              iconPosition="left"
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={BarChart3}
              iconPosition="left"
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">40%</div>
              <div className="text-gray-300 text-sm">Productivity Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300 text-sm">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">85%</div>
              <div className="text-gray-300 text-sm">Risk Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-sm">AI Monitoring</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Powerful AI-Driven Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                glowColor={index % 2 === 0 ? 'green' : 'cyan'}
                hoverEffect={true}
                className="h-full"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-green-400">
                    {feature.stats}
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Comprehensive Project Management Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Connect with your favorite tools and platforms for a unified project management experience
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <div className="text-2xl mb-2">{integration.icon}</div>
                <div className="text-white font-medium text-sm">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-green-500/50 ring-2 ring-green-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of teams using Zion AI Project Manager Pro to 
            deliver projects faster, smarter, and more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={Target}
              iconPosition="left"
            >
              View Demo
            </FuturisticButton>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default ZionAiProjectManagerPro;