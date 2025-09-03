import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Bot, 
  MessageCircle, 
  Brain, 
  TrendingUp, 
  Zap, 
  Users, 
  Shield,
  CheckCircle,
  AlertCircle,
  Clock,
  Activity
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

interface AIMessage {
  id: string;
  type: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
  confidence?: number;
  suggestions?: string[];
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

interface AIAction {
  id: string;
  name: string;
  description: string;
  type: "automation" | "recommendation" | "alert" | "optimization";
  status: "pending" | "executing" | "completed" | "failed";
  priority: number;
  estimatedTime: number;
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

const aiConversations: AIConversation[] = [
  {
    id: "1",
    type: "chat",
    title: "Project Optimization Analysis",
    description: "AI-powered analysis of project performance and optimization recommendations",
    status: "active",
    priority: "high",
    createdAt: "2025-01-27 10:00",
    lastUpdated: "2025-01-27 15:30"
  },
  {
    id: "2",
    type: "task",
    title: "Client Communication Automation",
    description: "Intelligent automation of client communication and status updates",
    status: "active",
    priority: "medium",
    createdAt: "2025-01-27 09:00",
    lastUpdated: "2025-01-27 14:00"
  }
];

const aiFeatures: AIFeature[] = [
  {
    id: "1",
    name: "Natural Language Processing",
    description: "Advanced NLP for understanding complex queries and context",
    icon: <Brain className="w-6 h-6" />,
    status: "active",
    usage: 95,
    accuracy: 94
  },
  {
    id: "2",
    name: "Predictive Analytics",
    description: "AI-powered predictions for project outcomes and resource needs",
    icon: <TrendingUp className="w-6 h-6" />,
    status: "active",
    usage: 87,
    accuracy: 89
  },
  {
    id: "3",
    name: "Intelligent Automation",
    description: "Smart automation of repetitive tasks and workflows",
    icon: <Zap className="w-6 h-6" />,
    status: "active",
    usage: 92,
    accuracy: 91
  }
];

const aiInsights: AIInsight[] = [
  {
    id: "1",
    title: "Project Timeline Optimization",
    description: "AI analysis suggests 15% timeline compression is possible for the E-commerce project",
    type: "positive",
    impact: "high",
    confidence: 0.91,
    data: { compression: 15, savings: "2 weeks", risk: "low" },
    createdAt: "2025-01-27 16:00"
  },
  {
    id: "2",
    title: "Resource Allocation Warning",
    description: "Current resource allocation shows 23% underutilization in the Mobile App project",
    type: "warning",
    impact: "medium",
    confidence: 0.87,
    data: { underutilization: 23, potentialSavings: "$8,500", timeframe: "2 weeks" },
    createdAt: "2025-01-27 15:45"
  }
];

const AdvancedAIAssistant: React.FC = () => {
  const [selectedView, setSelectedView] = useState<"overview" | "conversations" | "insights" | "features">("overview");
  const [selectedConversation, setSelectedConversation] = useState<AIConversation | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredConversations = aiConversations.filter(conversation => {
    const matchesSearch = conversation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         conversation.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "all" || conversation.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const filteredInsights = aiInsights.filter(insight => {
    return insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           insight.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case "completed":
        return <CheckCircle className="w-4 h-4 text-blue-400" />;
      case "archived":
        return <Clock className="w-4 h-4 text-gray-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "positive":
        return <CheckCircle className="w-6 h-6 text-white" />;
      case "warning":
        return <AlertCircle className="w-6 h-6 text-white" />;
      case "critical":
        return <AlertCircle className="w-6 h-6 text-white" />;
      default:
        return <Activity className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advanced AI Assistant
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent automation and insights powered by cutting-edge AI technology
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: "overview", label: "Overview", icon: <Bot className="w-5 h-5" /> },
            { id: "conversations", label: "Conversations", icon: <MessageCircle className="w-5 h-5" /> },
            { id: "insights", label: "Insights", icon: <Brain className="w-5 h-5" /> },
            { id: "features", label: "Features", icon: <Zap className="w-5 h-5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedView(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                selectedView === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content based on selected view */}
        {selectedView === "overview" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white">{feature.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    feature.status === "active" ? "bg-green-600" : "bg-yellow-600"
                  }`}>
                    {feature.status}
                  </span>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Usage: {feature.usage}%</div>
                    <div className="text-sm text-gray-400">Accuracy: {feature.accuracy}%</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {selectedView === "conversations" && (
          <div className="space-y-6">
            {filteredConversations.map((conversation) => (
              <motion.div
                key={conversation.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{conversation.title}</h3>
                  {getStatusIcon(conversation.status)}
                </div>
                <p className="text-gray-300 mb-4">{conversation.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>Priority: {conversation.priority}</span>
                  <span>Updated: {conversation.lastUpdated}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {selectedView === "insights" && (
          <div className="space-y-6">
            {filteredInsights.map((insight) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  {getInsightIcon(insight.type)}
                  <h3 className="text-xl font-semibold text-white">{insight.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{insight.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>Impact: {insight.impact}</span>
                  <span>Confidence: {(insight.confidence * 100).toFixed(0)}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {selectedView === "features" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white">{feature.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
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
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdvancedAIAssistant;