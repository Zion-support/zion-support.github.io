import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  BarChart3, 
  Users, 
  Target, 
  Clock, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain, 
  Star,
  ArrowRight,
  DollarSign,
  Globe,
  Monitor,
  Award,
  Sparkles,
  FileText,
  MessageSquare,
  Bell,
  Settings
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAiProjectManagerProPage = () => {
  const features = [
    {
      title: "AI-Powered Task Prioritization",
      description: "Automatically prioritize tasks based on deadlines, dependencies, team capacity, and project goals using advanced machine learning algorithms.",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      benefits: ["40% faster project completion", "Smart task scheduling", "Resource optimization"]
    },
    {
      title: "Intelligent Resource Allocation",
      description: "AI-driven resource management that analyzes team skills, availability, and workload to assign tasks optimally and prevent bottlenecks.",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      benefits: ["Optimal team utilization", "Skill-based matching", "Workload balancing"]
    },
    {
      title: "Predictive Project Analytics",
      description: "Advanced analytics with AI-powered predictions for project timelines, budget overruns, and potential risks to help you stay on track.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      benefits: ["Timeline predictions", "Budget forecasting", "Risk identification"]
    },
    {
      title: "Automated Progress Tracking",
      description: "Real-time project monitoring with automated status updates, milestone tracking, and intelligent alerts for project health and progress.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      benefits: ["Real-time monitoring", "Automated updates", "Smart alerts"]
    },
    {
      title: "Smart Collaboration Tools",
      description: "AI-enhanced collaboration features including intelligent meeting scheduling, automated documentation, and context-aware communication.",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      benefits: ["Smart scheduling", "Auto documentation", "Context-aware chat"]
    },
    {
      title: "Advanced Reporting Suite",
      description: "Comprehensive reporting with custom dashboards, KPI tracking, and AI-generated insights for project performance and team productivity.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      benefits: ["Custom dashboards", "KPI tracking", "Productivity insights"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small teams and simple projects",
      features: [
        "Up to 10 projects",
        "Basic AI features",
        "Up to 10 team members",
        "Standard reporting",
        "Email support",
        "Mobile app access",
        "Basic integrations"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$199",
      period: "per month",
      description: "Advanced features for growing teams",
      features: [
        "Up to 50 projects",
        "Advanced AI analytics",
        "Up to 50 team members",
        "Advanced reporting",
        "Phone & email support",
        "API access",
        "Advanced integrations",
        "Custom workflows",
        "Time tracking"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited projects",
        "Full AI suite",
        "Unlimited team members",
        "Custom reporting",
        "Dedicated support",
        "Custom integrations",
        "White-label options",
        "Priority support",
        "Advanced security"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Robert Kim",
      company: "TechFlow Solutions",
      role: "Project Director",
      content: "Zion AI Project Manager Pro reduced our project delivery time by 35% and improved team productivity by 50%. The AI prioritization is game-changing!",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Maria Garcia",
      company: "Innovation Labs",
      role: "VP of Operations",
      content: "The predictive analytics helped us identify potential delays before they happened. We've never been more on track with our projects.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "James Wilson",
      company: "Digital Dynamics",
      role: "Head of Project Management",
      content: "The resource allocation AI is incredible. It perfectly matches team members to tasks based on their skills and availability.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const stats = [
    { number: "35%", label: "Faster Delivery", icon: <Clock className="w-6 h-6" /> },
    { number: "50%", label: "Productivity Boost", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "90%", label: "On-Time Delivery", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "5,000+", label: "Active Projects", icon: <Target className="w-6 h-6" /> }
  ];

  const projectTemplates = [
    {
      title: "Software Development",
      description: "Complete workflow for agile software development projects",
      phases: ["Planning", "Development", "Testing", "Deployment", "Maintenance"],
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Marketing Campaign",
      description: "End-to-end marketing campaign management",
      phases: ["Strategy", "Content Creation", "Execution", "Analysis", "Optimization"],
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Product Launch",
      description: "Comprehensive product launch project template",
      phases: ["Research", "Development", "Testing", "Marketing", "Launch"],
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Event Planning",
      description: "Complete event planning and execution workflow",
      phases: ["Planning", "Vendor Management", "Promotion", "Execution", "Follow-up"],
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Project Manager Pro - AI-Powered Project Management | Zion Tech Group"
        description="Transform your project management with Zion AI Project Manager Pro. AI-powered task prioritization, intelligent resource allocation, predictive analytics, and automated progress tracking. Start your free trial today!"
        keywords="project management, AI project management, task management, resource allocation, project analytics, team collaboration, project tracking, project software, AI-powered PM"
        canonical="https://ziontechgroup.com/zion-ai-project-manager-pro"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 AI Project Management Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Zion AI Project Manager Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Revolutionize your project management with AI-powered automation. 
            Optimize resources, predict risks, and deliver projects faster with intelligent project management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Intelligent Project Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Leverage artificial intelligence to optimize your project workflows and maximize team productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Project Templates Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pre-Built Project Templates
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started quickly with our library of proven project templates designed for different industries and project types.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTemplates.map((template, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  {template.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center">
                  {template.title}
                </h3>
                <p className="text-gray-300 text-sm text-center mb-4">
                  {template.description}
                </p>
                <ul className="space-y-1">
                  {template.phases.map((phase, phaseIndex) => (
                    <li key={phaseIndex} className="text-xs text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {phase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your team size and project needs. All plans include 14-day free trial with no credit card required.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
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
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Project Teams Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how teams are transforming their project management with Zion AI Project Manager Pro
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of project teams already using Zion AI Project Manager Pro to 
              deliver projects faster, optimize resources, and improve team productivity.
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
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAiProjectManagerProPage;