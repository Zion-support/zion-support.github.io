import React from 'react';
import Layout from '../components/layout/MainLayout';
import { 
  Star,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Target,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function AIServices() {
  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Comprehensive AI services including machine learning, automation, and intelligent solutions."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI services including machine learning, automation, and intelligent solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Machine Learning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced machine learning solutions for data analysis and predictive modeling.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Predictive Analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Data Processing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Model Training</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-yellow-600 mr-3" />
                <h3 className="text-xl font-semibold">Automation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Intelligent automation solutions to streamline business processes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Process Automation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Workflow Optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Task Automation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold">AI Security</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced AI-powered security solutions for threat detection and prevention.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Threat Detection</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Anomaly Detection</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Security Analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}