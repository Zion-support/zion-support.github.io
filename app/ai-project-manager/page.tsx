import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Users, 
  Target, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Star,
  ArrowRight,
  Clock,
  TrendingUp,
  AlertTriangle,
  MessageSquare,
  FileText,
  PieChart,
  Settings
} from 'lucide-react';

const AiProjectManagerPage: React.FC = () => {
  const features = [
    "AI-powered project planning and scheduling",
    "Automated resource allocation and optimization",
    "Real-time progress tracking and analytics",
    "Intelligent risk assessment and mitigation",
    "Smart task prioritization and assignment",
    "Automated status reporting and updates",
    "Team collaboration and communication tools",
    "Budget tracking and cost optimization",
    "Integration with 50+ popular tools",
    "Predictive project completion forecasting"
  ];

  const integrations = [
    { name: "Slack", icon: <MessageSquare className="w-6 h-6" />, color: "text-purple-600" },
    { name: "Microsoft Teams", icon: <Users className="w-6 h-6" />, color: "text-blue-600" },
    { name: "Jira", icon: <Target className="w-6 h-6" />, color: "text-blue-500" },
    { name: "Asana", icon: <CheckCircle className="w-6 h-6" />, color: "text-red-600" },
    { name: "Trello", icon: <FileText className="w-6 h-6" />, color: "text-blue-400" },
    { name: "GitHub", icon: <Settings className="w-6 h-6" />, color: "text-gray-600" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "month",
      description: "Perfect for small teams and freelancers",
      features: [
        "Up to 5 projects",
        "10 team members",
        "Basic AI insights",
        "Email support",
        "Mobile app access",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited projects",
        "50 team members",
        "Advanced AI analytics",
        "Priority support",
        "Custom integrations",
        "Advanced reporting",
        "Time tracking",
        "Resource management"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited everything",
        "Unlimited team members",
        "Full AI suite",
        "24/7 phone support",
        "Custom AI training",
        "White-label options",
        "API access",
        "Advanced security",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "10K+", label: "Projects Managed", icon: <Target className="w-6 h-6" /> },
    { number: "50K+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
    { number: "40%", label: "Time Saved", icon: <Clock className="w-6 h-6" /> },
    { number: "95%", label: "On-Time Delivery", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "40% Faster Project Delivery",
      description: "AI-powered optimization reduces project timelines and improves efficiency"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Proactive Risk Management",
      description: "Predict and prevent project risks before they impact your timeline"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data-Driven Insights",
      description: "Make informed decisions with comprehensive analytics and reporting"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enhanced Team Collaboration",
      description: "Streamline communication and improve team productivity"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Project Manager - Zion Tech Group | Intelligent Project Management Platform</title>
        <meta name="description" content="Revolutionary AI-powered project management platform. Automate planning, optimize resources, track progress, and deliver projects 40% faster. Start your free trial today!" />
        <meta name="keywords" content="AI project management, project planning, team collaboration, project analytics, resource optimization, project automation" />
        <meta property="og:title" content="AI Project Manager - Zion Tech Group" />
        <meta property="og:description" content="Transform your project management with AI-powered automation and insights." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-6xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                #1 AI Project Management Platform
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Project
                </span>
                <br />
                <span className="text-white">Manager</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Revolutionize your project management with AI-powered automation. 
                Plan smarter, execute faster, and deliver projects 40% more efficiently 
                with intelligent insights and automated workflows.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-cyan-400">{stat.icon}</div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Why Choose AI Project Manager?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Transform your project management with AI-powered automation and intelligent insights
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage projects efficiently with AI assistance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Seamless Integrations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and streamline your workflow
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/20 group-hover:border-cyan-400/40">
                    <div className={integration.color}>{integration.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size and project needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-cyan-500/20 hover:border-cyan-400/40'
                } transition-all duration-300 hover:transform hover:scale-105`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Project Management?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of teams already using our AI-powered project management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Target className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiProjectManagerPage;