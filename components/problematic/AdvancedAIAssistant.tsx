import React, { useState } from "react";
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  MessageCircle, 
  Users, 
  Shield,
  CheckCircle,
  AlertCircle,
  Clock,
  Activity,
  Bot
} from "lucide-react";

interface AIConversation {
  id: string;
  type: "chat" | "task" | "analysis" | "recommendation";
  title: string;
  description: string;
  status: "active" | "completed" | "archived";
  priority: "low" | "medium" | "high" | "critical";
  createdAt: string;
  lastUpdated: string;
}

interface AIInsight {
  id: string;
  title: string;
  description: string;
  type: "positive" | "warning" | "critical" | "info";
  impact: "high" | "medium" | "low";
  confidence: number;
  data: Record<string, string | number | boolean>;
  createdAt: string;
}

interface AIFeature {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  enabled: boolean;
  category: string;
}

const AdvancedAIAssistant: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'conversations' | 'insights' | 'features'>('conversations');
  const [conversations] = useState<AIConversation[]>([
    {
      id: '1',
      type: 'analysis',
      title: 'Website Performance Analysis',
      description: 'Comprehensive analysis of website performance metrics and optimization recommendations',
      status: 'active',
      priority: 'high',
      createdAt: '2025-01-26T10:00:00Z',
      lastUpdated: '2025-01-26T10:30:00Z'
    },
    {
      id: '2',
      type: 'recommendation',
      title: 'Security Enhancement Suggestions',
      description: 'AI-powered security recommendations based on current threat landscape',
      status: 'completed',
      priority: 'critical',
      createdAt: '2025-01-25T14:00:00Z',
      lastUpdated: '2025-01-25T16:00:00Z'
    }
  ]);

  const [insights] = useState<AIInsight[]>([
    {
      id: '1',
      title: 'Traffic Growth Detected',
      description: 'Website traffic has increased by 25% over the past week',
      type: 'positive',
      impact: 'high',
      confidence: 95,
      data: { growth: 25, period: '7 days' },
      createdAt: '2025-01-26T09:00:00Z'
    },
    {
      id: '2',
      title: 'Security Alert',
      description: 'Unusual login attempts detected from multiple IP addresses',
      type: 'warning',
      impact: 'medium',
      confidence: 87,
      data: { attempts: 15, ips: 8 },
      createdAt: '2025-01-26T08:30:00Z'
    }
  ]);

  const [features] = useState<AIFeature[]>([
    {
      id: '1',
      name: 'Smart Analytics',
      description: 'AI-powered analytics and insights',
      icon: TrendingUp,
      enabled: true,
      category: 'Analytics'
    },
    {
      id: '2',
      name: 'Security Monitor',
      description: 'Real-time security threat detection',
      icon: Shield,
      enabled: true,
      category: 'Security'
    },
    {
      id: '3',
      name: 'Performance Optimizer',
      description: 'Automatic performance optimization',
      icon: Zap,
      enabled: false,
      category: 'Performance'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'completed': return 'text-blue-600 bg-blue-100';
      case 'archived': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'positive': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning': return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'critical': return <AlertCircle className="w-5 h-5 text-red-500" />;
      default: return <Activity className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AI Assistant</h1>
              <p className="text-gray-600">Advanced AI-powered insights and automation</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'conversations', label: 'Conversations', icon: MessageCircle },
              { id: 'insights', label: 'Insights', icon: TrendingUp },
              { id: 'features', label: 'Features', icon: Bot }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'conversations' && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Conversations</h2>
              {conversations.map((conversation) => (
                <div key={conversation.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{conversation.title}</h3>
                      <p className="text-gray-600 mt-1">{conversation.description}</p>
                      <div className="flex items-center space-x-4 mt-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(conversation.status)}`}>
                          {conversation.status}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(conversation.priority)}`}>
                          {conversation.priority}
                        </span>
                        <span className="text-xs text-gray-500">
                          <Clock className="w-3 h-3 inline mr-1" />
                          {new Date(conversation.lastUpdated).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">AI Insights</h2>
              {insights.map((insight) => (
                <div key={insight.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    {getInsightIcon(insight.type)}
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{insight.title}</h3>
                      <p className="text-gray-600 mt-1">{insight.description}</p>
                      <div className="flex items-center space-x-4 mt-3">
                        <span className="text-sm text-gray-500">
                          Confidence: {insight.confidence}%
                        </span>
                        <span className="text-sm text-gray-500">
                          Impact: {insight.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">AI Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature) => (
                  <div key={feature.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <feature.icon className="w-6 h-6 text-blue-500" />
                      <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{feature.category}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        feature.enabled 
                          ? 'text-green-600 bg-green-100' 
                          : 'text-gray-600 bg-gray-100'
                      }`}>
                        {feature.enabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedAIAssistant;