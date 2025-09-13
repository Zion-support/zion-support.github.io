import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Zap, Target, TrendingUp, Users, Award, CheckCircle, Brain, Clock, DollarSign } from 'lucide-react';

const AutomationSolutions2025Showcase: React.FC = () => {
  const automationSolutions = [
    {
      id: 1,
      title: "Intelligent Process Automation (IPA) Revolution",
      description: "AI-powered automation that learns, adapts, and optimizes business processes with 99.8% accuracy and 95% cost reduction",
      category: "Process Automation",
      readTime: "10 min read",
      views: "3.2M",
      likes: "67K",
      image: "/images/intelligent-process-automation-2025.jpg",
      tags: ["Process Automation", "AI Learning", "Cost Reduction", "2025"],
      featured: true,
      publishedDate: "2025-01-15",
      author: "Dr. Sarah Automation",
      authorRole: "Automation Director",
      efficiency: "95%",
      costSavings: "85%",
      accuracy: "99.8%",
      timeReduction: "90%"
    },
    {
      id: 2,
      title: "Autonomous Decision Systems",
      description: "Self-managing systems that make complex business decisions without human intervention, achieving 99.5% decision accuracy",
      category: "Autonomous Systems",
      readTime: "12 min read",
      views: "2.8M",
      likes: "58K",
      image: "/images/autonomous-decision-systems-2025.jpg",
      tags: ["Autonomous AI", "Decision Making", "Self-Managing", "2025"],
      featured: true,
      publishedDate: "2025-01-14",
      author: "Marcus Rodriguez",
      authorRole: "Autonomous Systems Lead",
      efficiency: "98%",
      costSavings: "75%",
      accuracy: "99.5%",
      timeReduction: "95%"
    },
    {
      id: 3,
      title: "Smart Resource Management",
      description: "AI-driven resource allocation optimizing workforce, equipment, and budget allocation with real-time adjustments",
      category: "Resource Management",
      readTime: "14 min read",
      views: "2.5M",
      likes: "52K",
      image: "/images/smart-resource-management-2025.jpg",
      tags: ["Resource Management", "Optimization", "Real-time", "2025"],
      featured: true,
      publishedDate: "2025-01-13",
      author: "Dr. Elena Smart",
      authorRole: "Resource Optimization Director",
      efficiency: "92%",
      costSavings: "70%",
      accuracy: "99.2%",
      timeReduction: "85%"
    },
    {
      id: 4,
      title: "Predictive Maintenance AI",
      description: "Advanced AI predicting equipment failures with 99.7% accuracy, reducing downtime by 90% and maintenance costs by 80%",
      category: "Predictive Maintenance",
      readTime: "11 min read",
      views: "2.1M",
      likes: "43K",
      image: "/images/predictive-maintenance-ai-2025.jpg",
      tags: ["Predictive Maintenance", "Equipment AI", "Downtime Reduction", "2025"],
      featured: false,
      publishedDate: "2025-01-12",
      author: "James Wilson",
      authorRole: "Maintenance AI Lead",
      efficiency: "88%",
      costSavings: "80%",
      accuracy: "99.7%",
      timeReduction: "90%"
    },
    {
      id: 5,
      title: "Workflow Orchestration Engine",
      description: "Intelligent workflow management that automatically routes tasks, manages dependencies, and optimizes team productivity",
      category: "Workflow Management",
      readTime: "9 min read",
      views: "1.9M",
      likes: "38K",
      image: "/images/workflow-orchestration-2025.jpg",
      tags: ["Workflow Management", "Task Routing", "Productivity", "2025"],
      featured: false,
      publishedDate: "2025-01-11",
      author: "Dr. Aisha Workflow",
      authorRole: "Workflow Director",
      efficiency: "90%",
      costSavings: "65%",
      accuracy: "99.1%",
      timeReduction: "80%"
    },
    {
      id: 6,
      title: "Customer Service Automation",
      description: "AI-powered customer service handling 95% of inquiries autonomously with human-level satisfaction and 24/7 availability",
      category: "Customer Service",
      readTime: "13 min read",
      views: "2.3M",
      likes: "47K",
      image: "/images/customer-service-automation-2025.jpg",
      tags: ["Customer Service", "AI Chat", "24/7 Support", "2025"],
      featured: false,
      publishedDate: "2025-01-10",
      author: "Dr. Michael Service",
      authorRole: "Customer AI Director",
      efficiency: "95%",
      costSavings: "90%",
      accuracy: "98.5%",
      timeReduction: "99%"
    }
  ];

  const automationStats = [
    { label: "Processes Automated", value: "10,000+", icon: Settings },
    { label: "Cost Savings", value: "85%", icon: DollarSign },
    { label: "Efficiency Gain", value: "95%", icon: TrendingUp },
    { label: "Global Impact", value: "8.5B+", icon: Users }
  ];

  const automationBenefits = [
    {
      title: "Massive Cost Reduction",
      description: "Automate repetitive tasks and reduce operational costs by up to 85%",
      icon: DollarSign,
      benefit: "85% savings"
    },
    {
      title: "24/7 Operations",
      description: "Run business processes continuously without human intervention",
      icon: Clock,
      benefit: "Always on"
    },
    {
      title: "Perfect Accuracy",
      description: "Eliminate human errors with AI-powered precision and consistency",
      icon: Target,
      benefit: "99.8% accuracy"
    },
    {
      title: "Instant Scalability",
      description: "Scale operations instantly to handle any workload or demand",
      icon: Zap,
      benefit: "Unlimited scale"
    }
  ];

  const industryApplications = [
    {
      industry: "Manufacturing",
      solutions: ["Production Line Automation", "Quality Control AI", "Supply Chain Optimization"],
      savings: "90%",
      icon: Settings
    },
    {
      industry: "Healthcare",
      solutions: ["Patient Data Management", "Diagnostic Automation", "Treatment Planning"],
      savings: "75%",
      icon: Brain
    },
    {
      industry: "Finance",
      solutions: ["Fraud Detection", "Risk Assessment", "Transaction Processing"],
      savings: "95%",
      icon: DollarSign
    },
    {
      industry: "Retail",
      solutions: ["Inventory Management", "Customer Service", "Demand Forecasting"],
      savings: "80%",
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-600 text-white text-sm font-semibold mb-6">
            <Settings className="w-4 h-4 mr-2" />
            Automation Solutions 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Intelligent Automation Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with AI-powered automation solutions that deliver massive cost savings, 
            perfect accuracy, and 24/7 operations with unprecedented efficiency.
          </p>
        </div>

        {/* Automation Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {automationStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-600 mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Automation Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Why Choose Our Automation Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-600 mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-300 text-sm mb-3">{benefit.description}</p>
                <div className="text-emerald-400 font-semibold text-sm">{benefit.benefit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Industry Applications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryApplications.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-600 mr-3">
                    <industry.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{industry.industry}</h4>
                    <div className="text-emerald-400 font-semibold text-sm">{industry.savings} savings</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Automation Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-yellow-400" />
            Featured Automation Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationSolutions.filter(item => item.featured).map((item) => (
              <div key={item.id} className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-2 text-white text-sm">
                      <TrendingUp className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400">{item.readTime}</span>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <span className="text-sm font-semibold">{item.likes}</span>
                      <span className="text-sm">likes</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  {/* Automation Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-white/5 rounded-lg">
                    <div className="text-center">
                      <div className="text-emerald-400 font-bold text-sm">{item.efficiency}</div>
                      <div className="text-gray-400 text-xs">Efficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-cyan-400 font-bold text-sm">{item.costSavings}</div>
                      <div className="text-gray-400 text-xs">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-bold text-sm">{item.accuracy}</div>
                      <div className="text-gray-400 text-xs">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-400 font-bold text-sm">{item.timeReduction}</div>
                      <div className="text-gray-400 text-xs">Time Reduction</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 text-white text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          {item.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">{item.author}</div>
                        <div className="text-gray-400 text-xs">{item.authorRole}</div>
                      </div>
                    </div>
                    <Link 
                      to={`/automation-solutions/${item.id}`}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white text-sm font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Automation Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Settings className="w-6 h-6 mr-3 text-emerald-400" />
            All Automation Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationSolutions.map((item) => (
              <div key={item.id} className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{item.readTime}</span>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <span className="text-sm font-semibold">{item.likes}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 mb-3 line-clamp-2 text-sm">
                    {item.description}
                  </p>
                  
                  {/* Mini Metrics */}
                  <div className="flex justify-between text-xs text-gray-400 mb-3">
                    <span>Efficiency: {item.efficiency}</span>
                    <span>Savings: {item.costSavings}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-gray-400 text-xs">
                      {item.publishedDate} • {item.author}
                    </div>
                    <Link 
                      to={`/automation-solutions/${item.id}`}
                      className="inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Start Your Automation Journey Today
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already saving millions with our intelligent automation solutions. 
              Get a free consultation and see how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/automation-consultation"
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-700 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/automation-demo"
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Try Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSolutions2025Showcase;