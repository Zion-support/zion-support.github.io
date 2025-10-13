import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Users, 
  CheckCircle, 
  Clock, 
  BarChart3, 
  Settings, 
  Zap, 
  ArrowRight, 
  Star, 
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Database
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ProjectManagementToolPage = () => {
  const features = [
    {
      title: "Task Management",
      description: "Create, assign, and track tasks with intuitive drag-and-drop interface",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Team Collaboration",
      description: "Real-time collaboration with team members and stakeholders",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Project Timeline",
      description: "Visual Gantt charts and timeline views for project planning",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Progress Tracking",
      description: "Real-time progress monitoring and milestone tracking",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Resource Management",
      description: "Allocate and manage team resources efficiently",
      icon: <Settings className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Automation",
      description: "Automated workflows and notifications for better efficiency",
      icon: <Zap className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      title: "Increased Productivity",
      description: "Streamline project workflows and boost team efficiency",
      icon: <Zap className="w-6 h-6" />,
      stat: "40% faster"
    },
    {
      title: "Better Visibility",
      description: "Real-time insights into project status and team performance",
      icon: <BarChart3 className="w-6 h-6" />,
      stat: "100% visibility"
    },
    {
      title: "Improved Collaboration",
      description: "Enhanced team communication and coordination",
      icon: <Users className="w-6 h-6" />,
      stat: "60% better"
    },
    {
      title: "Risk Reduction",
      description: "Proactive risk management and issue tracking",
      icon: <Shield className="w-6 h-6" />,
      stat: "50% fewer risks"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small teams and simple projects",
      features: [
        "Up to 5 projects",
        "10 team members",
        "Basic task management",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing teams and complex projects",
      features: [
        "Unlimited projects",
        "50 team members",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large organizations with advanced needs",
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "Advanced security",
        "Dedicated support",
        "Custom workflows",
        "White-label options"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Project Management Tool - Zion Tech Group | Task Management & Team Collaboration</title>
        <meta name="description" content="Powerful project management tool with task management, team collaboration, timeline tracking, and resource management. Boost productivity with our comprehensive solution." />
        <meta name="keywords" content="project management, task management, team collaboration, project tracking, Gantt charts, team productivity" />
        <link rel="canonical" href="https://ziontechgroup.com/project-management-tool" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Project Management Tool
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Streamline your projects with our comprehensive project management solution. 
            Manage tasks, collaborate with teams, and track progress with powerful tools designed for modern teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Project Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Everything you need to manage projects effectively, from planning to completion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Project Management Tool?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Transform your project management with measurable improvements in productivity and collaboration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.stat}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Flexible pricing options to fit your team size and project needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
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
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of teams already using our project management tool to boost productivity and collaboration. 
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/micro-saas-services"
              variant="outline"
              size="lg"
              icon={<Settings className="w-5 h-5" />}
            >
              View All Tools
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ProjectManagementToolPage;