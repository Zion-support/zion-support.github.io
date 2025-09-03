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
  icon: React.ReactNode;
  status: "active" | "beta" | "coming-soon";
  usage: number;
  accuracy: number;
}

const AdvancedAIAssistant: React.FC = () => {
  const [selectedView, setSelectedView] = useState<"overview" | "conversations" | "insights" | "features">("overview");
  const [searchQuery, setSearchQuery] = useState("");

  const aiFeatures: AIFeature[] = [
    {
      id: "1",
      name: "Natural Language Processing",
      description: "Advanced text analysis and understanding",
      icon: <Brain className="w-6 h-6" />,
      status: "active",
      usage: 95,
      accuracy: 98
    },
    {
      id: "2",
      name: "Predictive Analytics",
      description: "Data-driven insights and forecasting",
      icon: <TrendingUp className="w-6 h-6" />,
      status: "active",
      usage: 87,
      accuracy: 94
    },
    {
      id: "3",
      name: "Automated Workflows",
      description: "Intelligent process automation",
      icon: <Zap className="w-6 h-6" />,
      status: "beta",
      usage: 72,
      accuracy: 91
    }
  ];

  const conversations: AIConversation[] = [
    {
      id: "1",
      type: "chat",
      title: "Customer Support Analysis",
      description: "Analyzing customer feedback patterns",
      status: "active",
      priority: "high",
      createdAt: "2024-01-15T10:30:00Z",
      lastUpdated: "2024-01-15T11:45:00Z"
    },
    {
      id: "2",
      type: "analysis",
      title: "Market Trend Report",
      description: "Generating quarterly market insights",
      status: "completed",
      priority: "medium",
      createdAt: "2024-01-14T09:15:00Z",
      lastUpdated: "2024-01-14T16:20:00Z"
    }
  ];

  const insights: AIInsight[] = [
    {
      id: "1",
      title: "Performance Optimization Opportunity",
      description: "System performance can be improved by 23%",
      type: "positive",
      impact: "high",
      confidence: 87,
      data: { improvement: "23%", timeframe: "2 weeks" },
      createdAt: "2024-01-15T12:00:00Z"
    },
    {
      id: "2",
      title: "Security Alert",
      description: "Unusual access pattern detected",
      type: "warning",
      impact: "medium",
      confidence: 92,
      data: { severity: "medium", affected: "3 users" },
      createdAt: "2024-01-15T11:30:00Z"
    }
  ];

  return (
    <div className="advanced-ai-assistant bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Bot className="w-8 h-8 text-blue-600" />
          Advanced AI Assistant
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedView("overview")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedView === "overview" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setSelectedView("conversations")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedView === "conversations" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Conversations
          </button>
          <button
            onClick={() => setSelectedView("insights")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedView === "insights" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Insights
          </button>
          <button
            onClick={() => setSelectedView("features")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedView === "features" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Features
          </button>
        </div>
      </div>

      {selectedView === "overview" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900">Active Conversations</h3>
            </div>
            <p className="text-2xl font-bold text-blue-600">{conversations.filter(c => c.status === "active").length}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-gray-900">Completed Tasks</h3>
            </div>
            <p className="text-2xl font-bold text-green-600">{conversations.filter(c => c.status === "completed").length}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold text-gray-900">AI Features</h3>
            </div>
            <p className="text-2xl font-bold text-purple-600">{aiFeatures.length}</p>
          </div>
        </div>
      )}

      {selectedView === "conversations" && (
        <div className="space-y-4">
          {conversations.map((conversation) => (
            <div key={conversation.id} className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{conversation.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  conversation.status === "active" ? "bg-green-100 text-green-800" :
                  conversation.status === "completed" ? "bg-blue-100 text-blue-800" :
                  "bg-gray-100 text-gray-800"
                }`}>
                  {conversation.status}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{conversation.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>Type: {conversation.type}</span>
                <span>Priority: {conversation.priority}</span>
                <span>Updated: {new Date(conversation.lastUpdated).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedView === "insights" && (
        <div className="space-y-4">
          {insights.map((insight) => (
            <div key={insight.id} className={`border-l-4 p-4 rounded-lg ${
              insight.type === "positive" ? "border-green-500 bg-green-50" :
              insight.type === "warning" ? "border-yellow-500 bg-yellow-50" :
              insight.type === "critical" ? "border-red-500 bg-red-50" :
              "border-blue-500 bg-blue-50"
            }`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                <span className="text-sm text-gray-600">{insight.confidence}% confidence</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{insight.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>Impact: {insight.impact}</span>
                <span>Created: {new Date(insight.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedView === "features" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {aiFeatures.map((feature) => (
            <div key={feature.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-blue-600">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    feature.status === "active" ? "bg-green-100 text-green-800" :
                    feature.status === "beta" ? "bg-yellow-100 text-yellow-800" :
                    "bg-gray-100 text-gray-800"
                  }`}>
                    {feature.status}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Usage</span>
                  <span>{feature.usage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${feature.usage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Accuracy</span>
                  <span>{feature.accuracy}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ width: `${feature.accuracy}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdvancedAIAssistant;