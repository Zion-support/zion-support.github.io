import React from 'react';
import { Metadata } from 'next';
import {
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Target,
  BarChart3,
  Brain,
  Bot,
  Settings,
  Play,
  Pause,
  RefreshCw
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Automation Platform - Zion Tech Group',
  description: 'Transform your business processes with our comprehensive AI automation platform. Reduce costs, increase efficiency, and scale operations with intelligent automation solutions.',
  keywords: 'AI automation, business process automation, intelligent automation, workflow automation, AI platform',
  openGraph: {
    title: 'AI Automation Platform - Zion Tech Group',
    description: 'Transform your business processes with intelligent automation',
    url: 'https://ziontechgroup.com/services/ai-automation-platform',
  },
};

const features = [
  {
    icon: Brain,
    title: 'Intelligent Process Discovery',
    description: 'AI automatically maps and analyzes your business processes to identify automation opportunities.',
    benefits: ['Process mining', 'Automated workflow detection', 'Optimization recommendations']
  },
  {
    icon: Bot,
    title: 'Smart Automation Bots',
    description: 'Deploy intelligent bots that can handle complex tasks with human-like decision making.',
    benefits: ['Natural language processing', 'Decision trees', 'Context awareness']
  },
  {
    icon: Settings,
    title: 'Low-Code Automation Builder',
    description: 'Build and deploy automation workflows with our intuitive drag-and-drop interface.',
    benefits: ['Visual workflow designer', 'Pre-built templates', 'Custom integrations']
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics & Monitoring',
    description: 'Track performance, identify bottlenecks, and optimize your automation processes.',
    benefits: ['Real-time dashboards', 'Performance metrics', 'Predictive analytics']
  }
];

const useCases = [
  {
    title: 'Customer Service Automation',
    description: 'Automate ticket routing, response generation, and escalation processes.',
    metrics: '85% faster response times',
    icon: Users
  },
  {
    title: 'Document Processing',
    description: 'Extract data, classify documents, and route them to appropriate departments.',
    metrics: '95% accuracy rate',
    icon: Shield
  },
  {
    title: 'Financial Operations',
    description: 'Automate invoice processing, expense management, and financial reporting.',
    metrics: '70% cost reduction',
    icon: TrendingUp
  },
  {
    title: 'HR & Recruitment',
    description: 'Streamline candidate screening, interview scheduling, and onboarding.',
    metrics: '60% faster hiring',
    icon: Target
  }
];

const stats = [
  { value: '500+', label: 'Processes Automated', icon: RefreshCw },
  { value: '99.9%', label: 'Uptime SLA', icon: Clock },
  { value: '75%', label: 'Cost Reduction', icon: TrendingUp },
  { value: '10x', label: 'Faster Processing', icon: Zap }
];

export default function AIAutomationPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Automation Platform
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Intelligent Automation
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Reduce operational costs by 75%, increase efficiency by 10x, and scale your business 
              with our comprehensive AI automation platform designed for modern enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Automation Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with intuitive design to deliver 
              automation solutions that work seamlessly with your existing systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading organizations are using our AI automation platform 
              to transform their operations and achieve remarkable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <useCase.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {useCase.description}
                </p>
                <div className="text-sm font-semibold text-green-600">
                  {useCase.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have transformed their operations 
            with our AI automation platform. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Get Started Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}