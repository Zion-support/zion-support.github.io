import React from 'react';
import { Metadata } from 'next';
import { Bot, Zap, Settings, BarChart3, Users, Shield, Globe, ArrowRight, CheckCircle, Play, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Advanced Automation Solutions 2026 - Intelligent Business Automation | Zion Tech Group',
  description: 'Transform your business with cutting-edge automation solutions for 2026. AI-powered workflows, intelligent process automation, and autonomous business operations.',
  keywords: 'automation solutions 2026, business automation, AI automation, process automation, intelligent automation, Zion Tech Group',
  openGraph: {
    title: 'Advanced Automation Solutions 2026 - Intelligent Business Automation',
    description: 'Revolutionize your business with intelligent automation',
    type: 'website',
  },
};

const automationSolutions = [
  {
    id: 1,
    title: "Intelligent Process Automation (IPA)",
    description: "AI-powered automation that combines RPA with machine learning to handle complex, decision-based processes.",
    features: [
      "Cognitive decision making",
      "Natural language processing",
      "Document understanding",
      "Exception handling"
    ],
    icon: Bot,
    color: "from-purple-500 to-pink-500",
    benefits: ["90% process accuracy", "70% time reduction", "24/7 operation", "Self-learning"],
    category: "Core Automation"
  },
  {
    id: 2,
    title: "Autonomous Business Operations",
    description: "End-to-end business process automation that runs independently with minimal human intervention.",
    features: [
      "End-to-end workflow automation",
      "Cross-system integration",
      "Real-time monitoring",
      "Predictive maintenance"
    ],
    icon: Settings,
    color: "from-blue-500 to-cyan-500",
    benefits: ["95% automation rate", "60% cost savings", "Zero downtime", "Scalable operations"],
    category: "Enterprise"
  },
  {
    id: 3,
    title: "AI-Powered Customer Service",
    description: "Intelligent customer service automation with natural language understanding and emotional intelligence.",
    features: [
      "Multi-channel support",
      "Sentiment analysis",
      "Contextual responses",
      "Human handoff when needed"
    ],
    icon: Users,
    color: "from-green-500 to-emerald-500",
    benefits: ["80% query resolution", "50% response time", "24/7 availability", "Customer satisfaction"],
    category: "Customer Experience"
  },
  {
    id: 4,
    title: "Smart Data Processing",
    description: "Automated data ingestion, processing, and analysis with real-time insights and reporting.",
    features: [
      "Real-time data processing",
      "Automated reporting",
      "Anomaly detection",
      "Predictive analytics"
    ],
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
    benefits: ["99.9% accuracy", "Real-time insights", "Automated reports", "Data quality"],
    category: "Analytics"
  },
  {
    id: 5,
    title: "Cybersecurity Automation",
    description: "Automated security monitoring, threat detection, and response to protect your business 24/7.",
    features: [
      "Threat detection",
      "Automated response",
      "Vulnerability scanning",
      "Incident management"
    ],
    icon: Shield,
    color: "from-red-500 to-pink-500",
    benefits: ["99.9% threat detection", "Instant response", "Zero false positives", "Compliance"],
    category: "Security"
  },
  {
    id: 6,
    title: "Global Deployment Platform",
    description: "Cloud-native automation platform that scales across multiple regions and environments.",
    features: [
      "Multi-cloud deployment",
      "Global scaling",
      "Edge computing",
      "Disaster recovery"
    ],
    icon: Globe,
    color: "from-teal-500 to-blue-500",
    benefits: ["Global reach", "99.99% uptime", "Edge performance", "Disaster recovery"],
    category: "Infrastructure"
  }
];

const automationStats = [
  { metric: "Processes Automated", value: "10,000+", icon: Bot },
  { metric: "Time Saved", value: "2M+ hours", icon: Zap },
  { metric: "Cost Reduction", value: "60%", icon: BarChart3 },
  { metric: "Global Clients", value: "500+", icon: Globe }
];

const industrySolutions = [
  {
    industry: "Manufacturing",
    solutions: [
      "Production line automation",
      "Quality control automation",
      "Supply chain optimization",
      "Predictive maintenance"
    ],
    results: "40% efficiency increase, 30% cost reduction"
  },
  {
    industry: "Financial Services",
    solutions: [
      "Loan processing automation",
      "Fraud detection",
      "Compliance reporting",
      "Customer onboarding"
    ],
    results: "80% faster processing, 95% accuracy"
  },
  {
    industry: "Healthcare",
    solutions: [
      "Patient data management",
      "Appointment scheduling",
      "Insurance processing",
      "Medical record automation"
    ],
    results: "50% admin time saved, 99% accuracy"
  },
  {
    industry: "Retail & E-commerce",
    solutions: [
      "Inventory management",
      "Order processing",
      "Customer service",
      "Price optimization"
    ],
    results: "35% operational efficiency, 25% cost savings"
  }
];

const implementationSteps = [
  {
    step: 1,
    title: "Assessment & Planning",
    description: "Analyze current processes and identify automation opportunities",
    duration: "2-4 weeks"
  },
  {
    step: 2,
    title: "Solution Design",
    description: "Design custom automation workflows tailored to your business needs",
    duration: "3-6 weeks"
  },
  {
    step: 3,
    title: "Development & Testing",
    description: "Build and thoroughly test automation solutions in controlled environments",
    duration: "4-8 weeks"
  },
  {
    step: 4,
    title: "Deployment & Training",
    description: "Deploy solutions and train your team on new automated processes",
    duration: "2-4 weeks"
  },
  {
    step: 5,
    title: "Monitoring & Optimization",
    description: "Continuously monitor performance and optimize for better results",
    duration: "Ongoing"
  }
];

export default function AdvancedAutomationSolutions2026() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Bot className="w-4 h-4" />
              Advanced Automation Solutions 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Automate Everything,
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Achieve Anything
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with intelligent automation solutions that work 24/7, learn continuously, and deliver unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
                Start Automation Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {automationStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Automation Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive automation solutions designed to transform every aspect of your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationSolutions.map((solution) => (
              <div key={solution.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-semibold">
                    {solution.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {solution.description}
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                  {solution.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.benefits.map((benefit, index) => (
                      <div key={index} className="text-sm text-gray-300 bg-white/5 p-2 rounded">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored automation solutions for different industries and use cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">{industry.industry}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Automation Solutions:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {industry.solutions.map((solution, solIndex) => (
                      <div key={solIndex} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-sm">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-purple-500/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-400 mb-2">Measured Results:</h4>
                  <p className="text-purple-100 text-sm">{industry.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven 5-step process ensures successful automation deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                <div className="text-purple-400 text-xs font-semibold">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of companies already using our automation solutions to transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}