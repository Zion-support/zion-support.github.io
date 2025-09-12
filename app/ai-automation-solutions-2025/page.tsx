import React from 'react';
import SEO from '../../components/SEO';
import { Brain, Bot, Cpu, Database, Globe, Lock, Settings, Zap } from 'lucide-react';

export default function AIAutomationSolutionsPage() {
  const automationSolutions = [
    {
      icon: Bot,
      title: "Intelligent Process Automation",
      description: "Automate complex business processes with AI-powered decision making and workflow optimization.",
      features: ["Workflow Automation", "Decision Trees", "Exception Handling", "Performance Monitoring"],
      benefits: ["80% reduction in manual tasks", "99.9% accuracy rate", "24/7 operation"]
    },
    {
      icon: Brain,
      title: "Machine Learning Integration",
      description: "Leverage advanced ML algorithms to predict trends, optimize operations, and make data-driven decisions.",
      features: ["Predictive Analytics", "Pattern Recognition", "Anomaly Detection", "Continuous Learning"],
      benefits: ["40% improvement in predictions", "Real-time insights", "Adaptive algorithms"]
    },
    {
      icon: Database,
      title: "Data Processing Automation",
      description: "Automatically process, clean, and analyze large datasets with intelligent data pipelines.",
      features: ["ETL Automation", "Data Quality Checks", "Real-time Processing", "Data Governance"],
      benefits: ["90% faster data processing", "Zero data errors", "Automated reporting"]
    },
    {
      icon: Globe,
      title: "Customer Service Automation",
      description: "Deploy AI chatbots and virtual assistants to provide 24/7 customer support and engagement.",
      features: ["Natural Language Processing", "Multi-channel Support", "Sentiment Analysis", "Escalation Management"],
      benefits: ["95% customer satisfaction", "60% cost reduction", "Instant responses"]
    },
    {
      icon: Settings,
      title: "IT Operations Automation",
      description: "Streamline IT operations with automated monitoring, maintenance, and incident response.",
      features: ["Infrastructure Monitoring", "Auto-healing Systems", "Deployment Automation", "Security Scanning"],
      benefits: ["99.9% uptime", "50% faster deployments", "Proactive maintenance"]
    },
    {
      icon: Lock,
      title: "Security Automation",
      description: "Protect your organization with AI-powered security monitoring and threat response systems.",
      features: ["Threat Detection", "Incident Response", "Vulnerability Scanning", "Compliance Monitoring"],
      benefits: ["Real-time threat response", "Zero-day protection", "Automated compliance"]
    }
  ];

  const successStories = [
    {
      company: "TechCorp Global",
      industry: "Manufacturing",
      challenge: "Manual quality control processes were slow and error-prone",
      solution: "Implemented AI-powered visual inspection systems",
      results: "95% accuracy improvement, 70% faster processing"
    },
    {
      company: "FinanceFirst",
      industry: "Financial Services",
      challenge: "Manual loan approval processes took weeks",
      solution: "Deployed ML-based credit scoring and automated workflows",
      results: "80% faster approvals, 60% cost reduction"
    },
    {
      company: "HealthCare Plus",
      industry: "Healthcare",
      challenge: "Patient scheduling and resource management inefficiencies",
      solution: "AI-driven optimization algorithms for resource allocation",
      results: "40% improvement in resource utilization, 90% patient satisfaction"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Automation Solutions 2025 - Zion Tech Group"
        description="Transform your business with cutting-edge AI automation solutions. Intelligent process automation, machine learning, and workflow optimization for maximum efficiency."
        keywords="AI automation, process automation, machine learning, workflow optimization, intelligent automation, business automation"
        url="/ai-automation-solutions-2025"
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">AI AUTOMATION SOLUTIONS 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Intelligent Automation for
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Modern Business
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Leverage the power of AI to automate complex business processes, 
              reduce costs, and accelerate growth with our cutting-edge automation solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Solutions Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive AI Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intelligent process automation to advanced machine learning integration, 
              we provide end-to-end automation solutions that transform your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Success Stories */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading companies have transformed their operations with our AI automation solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {story.industry}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{story.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <p className="text-green-600 text-sm font-medium">{story.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies that have already transformed their operations 
            with our AI automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Start Your Automation Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}