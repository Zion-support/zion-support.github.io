import React from 'react';
import Layout from '../components/layout/MainLayout';
import {
  RefreshCw,
  Zap,
  Bot,
  Workflow,
  ArrowRight,
  Check,
  BarChart3
} from 'lucide-react';

export default function AutomationPage() {
  const automationFeatures = [
    {
      icon: Bot,
      title: "AI-Powered Automation",
      description: "Intelligent automation solutions powered by artificial intelligence"
    },
    {
      icon: Workflow,
      title: "Process Optimization",
      description: "Streamline and optimize your business processes"
    },
    {
      icon: BarChart3,
      title: "Analytics & Monitoring",
      description: "Real-time analytics and monitoring of automated processes"
    }
  ];

  return (
    <Layout
      title="Automation Services - Zion Tech Group"
      description="Advanced automation solutions to streamline your business processes."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Automation Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced automation solutions to streamline your business processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-blue-600">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}