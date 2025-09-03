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
  Bot,
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
      description: "Advanced NLP for understanding complex queries and context",
      icon: <Brain className="w-6 h-6" />,
      status: "active",
      usage: 95,
      accuracy: 94,
    },
    {
      id: "2",
      name: "Predictive Analytics",
      description: "AI-powered predictions for project outcomes and resource needs",
      icon: <TrendingUp className="w-6 h-6" />,
      status: "active",
      usage: 87,
      accuracy: 89,
    },
    {
      id: "3",
      name: "Intelligent Automation",
      description: "Smart automation of repetitive tasks and workflows",
      icon: <Zap className="w-6 h-6" />,
      status: "active",
      usage: 92,
      accuracy: 91,
    },
    {
      id: "4",
      name: "Sentiment Analysis",
      description: "Real-time analysis of client and team sentiment",
      icon: <MessageCircle className="w-6 h-6" />,
      status: "beta",
      usage: 73,
      accuracy: 87,
    },
    {
      id: "5",
      name: "Resource Optimization",
      description: "AI-driven resource allocation and optimization",
      icon: <Users className="w-6 h-6" />,
      status: "active",
      usage: 89,
      accuracy: 93,
    },
    {
      id: "6",
      name: "Risk Assessment",
      description: "Intelligent risk identification and mitigation strategies",
      icon: <Shield className="w-6 h-6" />,
      status: "beta",
      usage: 68,
      accuracy: 85,
    }
  ];

  const aiInsights: AIInsight[] = [
    {
      id: "1",
      title: "Project Timeline Optimization",
      description: "AI analysis suggests 15% timeline compression is possible for the E-commerce project through parallel development and resource optimization.",
      type: "positive",
      impact: "high",
      confidence: 0.91,
      data: { compression: 15, savings: "2 weeks", risk: "low" },
      createdAt: "2025-01-27 16:00",
    },
    {
      id: "2",
      title: "Resource Allocation Warning",
      description: "Current resource allocation shows 23% underutilization in the Mobile App project, indicating potential efficiency improvements.",
      type: "warning",
      impact: "medium",
      confidence: 0.87,
      data: { underutilization: 23, potentialSavings: "$8,500", timeframe: "2 weeks" },
      createdAt: "2025-01-27 15:45",
    },
    {
      id: "3",
      title: "Client Satisfaction Trend",
      description: "Client satisfaction scores have increased by 12% over the last quarter, with AI-powered communication contributing to 8% of this improvement.",
      type: "positive",
      impact: "high",
      confidence: 0.94,
      data: { improvement: 12, aiContribution: 8, trend: "positive" },
      createdAt: "2025-01-27 15:30",
    }
  ];

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "positive":
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case "warning":
        return <AlertCircle className="w-6 h-6 text-yellow-400" />;
      case "critical":
        return <AlertCircle className="w-6 h-6 text-red-400" />;
      default:
        return <Activity className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Advanced AI Assistant
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leverage cutting-edge AI technology to optimize your business operations,
            predict outcomes, and automate complex workflows.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          {[
            { id: "overview", label: "Overview" },
            { id: "conversations", label: "Conversations" },
            { id: "insights", label: "Insights" },
            { id: "features", label: "Features" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedView(tab.id as any)}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-colors ${
                selectedView === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content based on selected view */}
        {selectedView === "overview" && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Bot className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">AI Performance</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Features</span>
                  <span className="text-white font-semibold">6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Average Accuracy</span>
                  <span className="text-white font-semibold">89.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Processing Speed</span>
                  <span className="text-white font-semibold">2.3s</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Recent Insights</h3>
              </div>
              <div className="space-y-3">
                {aiInsights.slice(0, 3).map((insight) => (
                  <div key={insight.id} className="text-sm">
                    <div className="text-white font-medium">{insight.title}</div>
                    <div className="text-gray-400 text-xs">{insight.createdAt}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Activity className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">System Status</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">All Systems Operational</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">2 Features in Beta</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Regular Updates</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedView === "features" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature) => (
              <div key={feature.id} className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-3">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      feature.status === "active" ? "bg-green-600 text-white" :
                      feature.status === "beta" ? "bg-yellow-600 text-white" :
                      "bg-gray-600 text-gray-300"
                    }`}>
                      {feature.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Usage</span>
                    <span className="text-white">{feature.usage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${feature.usage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Accuracy</span>
                    <span className="text-white">{feature.accuracy}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
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

        {selectedView === "insights" && (
          <div className="space-y-6">
            {aiInsights.map((insight) => (
              <div key={insight.id} className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{getInsightIcon(insight.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">{insight.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs ${
                          insight.impact === "high" ? "bg-red-600 text-white" :
                          insight.impact === "medium" ? "bg-yellow-600 text-white" :
                          "bg-green-600 text-white"
                        }`}>
                          {insight.impact} impact
                        </span>
                        <span className="text-gray-400 text-sm">{Math.round(insight.confidence * 100)}% confidence</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{insight.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {insight.createdAt}
                      </div>
                      <button className="text-blue-400 hover:text-blue-300">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdvancedAIAssistant;