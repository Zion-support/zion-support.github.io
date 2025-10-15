import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ZionAIWorkflowAutomatorPage() {
  const features = [
    {
      title: "Visual Workflow Builder",
      description: "Drag-and-drop interface to create complex workflows without coding. Design, test, and deploy automation in minutes.",
      icon: "🎨"
    },
    {
      title: "AI-Powered Optimization",
      description: "Machine learning algorithms analyze your workflows and suggest optimizations to improve efficiency and reduce bottlenecks.",
      icon: "🤖"
    },
    {
      title: "Multi-Platform Integration",
      description: "Connect with 500+ apps and services including CRM, ERP, marketing tools, and custom APIs for seamless automation.",
      icon: "🔗"
    },
    {
      title: "Smart Triggers",
      description: "Intelligent trigger system that responds to events, schedules, data changes, and user actions across your entire tech stack.",
      icon: "⚡"
    },
    {
      title: "Real-time Monitoring",
      description: "Comprehensive dashboard showing workflow performance, success rates, and detailed execution logs for complete visibility.",
      icon: "📊"
    },
    {
      title: "Error Handling",
      description: "Advanced error detection and recovery mechanisms ensure your workflows continue running even when issues arise.",
      icon: "🛡️"
    }
  ];

  const useCases = [
    "Lead Management",
    "Customer Onboarding",
    "Invoice Processing",
    "Data Synchronization",
    "Email Marketing",
    "Report Generation",
    "Order Fulfillment",
    "Support Ticket Routing"
  ];

  return (
    <>
      <Helmet>
        <title>AI Workflow Automator - Zion Tech Group</title>
        <meta name="description" content="Automate complex business processes with our AI-powered workflow automation platform. Connect apps, optimize processes, and boost productivity." />
        <meta name="keywords" content="workflow automation, business process automation, AI automation, workflow optimization, process management, business intelligence" />
        <meta property="og:title" content="AI Workflow Automator - Zion Tech Group" />
        <meta property="og:description" content="Automate complex business processes with AI-powered workflow automation and optimization." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-workflow-automator" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-workflow-automator" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Workflow Automator
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
                Automate complex business processes with AI-powered workflow optimization. Connect apps, streamline operations, and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Automation Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Build, optimize, and manage complex workflows with our comprehensive automation platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Automate Any Business Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From simple tasks to complex multi-step processes, our platform handles it all
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-purple-50 p-4 rounded-lg text-center hover:bg-purple-100 transition-colors">
                  <p className="font-medium text-gray-900">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Business Operations</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Save 40+ Hours Per Week</h3>
                      <p className="text-gray-600">Automate repetitive tasks and free up your team to focus on strategic work</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Reduce Errors by 95%</h3>
                      <p className="text-gray-600">Eliminate human error with automated processes that run consistently every time</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Scale Without Limits</h3>
                      <p className="text-gray-600">Handle increasing workloads without adding more staff or resources</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Automate?</h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of businesses already using our AI Workflow Automator to streamline operations and boost productivity.
                </p>
                <div className="space-y-4">
                  <Link 
                    to="/contact" 
                    className="block w-full bg-purple-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="block w-full border border-purple-600 text-purple-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                  >
                    View Pricing Plans
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Automating Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the power of AI-driven workflow automation and transform your business operations.
            </p>
            <Link 
              to="/contact" 
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
