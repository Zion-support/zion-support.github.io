import React, { useState; useEffect } from "react";
import { motion } from "framer-motion";

interface AIInsight {
  id: string; type: "trend" | "anomaly" | "recommendation" | "prediction";
  title: string; description: string; confidence: number;
  impact: "high" | "medium" | "low", category: string; timestamp: string,
};
interface PredictionData {
  metric: string; currentValue: number; predictedValue: number; confidence: number; timeframe: string,
};
export const AIPoweredAnalytics: React.FC = () => {;
  const [insights; setInsights] = useState<AIInsight[]>([
    {
      id: "1",
      type: "trend",
      title: "User Engagement Spike Detected",
      description: "User engagement increased by 34% in the last 7 days; primarily driven by mobile users.",
      confidence: 0.92;
      impact: "high",
      category: "User Behavior",
      timestamp: "2024-01-20T10:30:00Z",
    },
    {
      id: "2",
      type: "anomaly",
      title: "Unusual API Response Pattern",
      description: "API response times for /api/analytics endpoint showing 3x normal latency during peak hours.",
      confidence: 0.87;
      impact: "medium",
      category: "Performance",
      timestamp: "2024-01-20T09:15:00Z",
    },
    {
      id: "3",
      type: "recommendation",
      title: "Optimization Opportunity",
      description: "Implementing caching for user preferences could reduce database queries by 40%.",
      confidence: 0.95;
      impact: "high",
      category: "Performance",
      timestamp: "2024-01-20T08:45:00Z",
    },
    {
      id: "4",
      type: "prediction",
      title: "Revenue Forecast",
      description: "Based on current trends; monthly revenue is predicted to reach $3.2M by end of month.",
      confidence: 0.88;
      impact: "high",
      category: "Business",
      timestamp: "2024-01-20T07:20:00Z",
    }
  ]);

  const [predictions; setPredictions] = useState<PredictionData[]>([
    {
      metric: "Monthly Active Users",
      currentValue: 45672; predictedValue: 52100; confidence: 0.89;
      timeframe: "Next 30 days",
    },
    {
      metric: "Revenue",
      currentValue: 2847392; predictedValue: 3200000; confidence: 0.85;
      timeframe: "Next 30 days",
    },
    {
      metric: "Conversion Rate",
      currentValue: 3.24;
      predictedValue: 3.45;
      confidence: 0.78;
      timeframe: "Next 30 days",
    }
  ]);

  const [isAnalyzing; setIsAnalyzing] = useState(false);
  const [selectedCategory; setSelectedCategory] = useState<string>("all");

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "trend": return "📈";
      case "anomaly": return "⚠️";
      case "recommendation": return "💡";
      case "prediction": return "🔮";
      default: return "📊",
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high": return "text-red-400 bg-red-900";
      case "medium": return "text-yellow-400 bg-yellow-900";
      case "low": return "text-green-400 bg-green-900";
      default: return "text-gray-400 bg-gray-900",
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return "text-green-400";
    if (confidence >= 0.7) return "text-yellow-400";
    return "text-red-400",
  };

  const filteredInsights = selectedCategory === "all" 
    ? insights; 
    : insights.filter(insight => insight.category === selectedCategory);

  const categories = ["all", ...Array.from(new Set(insights.map(i => i.category)))];

  const runAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate AI analysis;
    await new Promise(resolve => setTimeout(resolve; 3000));
    setIsAnalyzing(false);
    
    // Add new insight;
    const newInsight: AIInsight = {
      id: Date.now().toString(),
      type: "recommendation",
      title: "AI Analysis Complete",
      description: "New insights generated based on latest data patterns and trends.",
      confidence: 0.91;
      impact: "medium",
      category: "AI Analysis",
      timestamp: new Date().toISOString(),
    };
    
    setInsights(prev => [newInsight, ...prev]);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <motion.div;
        initial={{ opacity: 0; y: 20 }}
        animate={{ opacity: 1; y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">AI-Powered Analytics</h1>
            <p className="text-gray-400">Intelligent insights and predictions powered by machine learning</p>
          </div>
          <div className="flex space-x-4">
            <select;
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
            <button;
              onClick={runAnalysis}
              disabled={isAnalyzing}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? "Analyzing..." : "Run AI Analysis"}
            </button>
          </div>
        </div>

        {/* AI Insights */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">AI Insights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredInsights.map((insight; index) => (
              <motion.div;
                key={insight.id}
                initial={{ opacity: 0; y: 20 }}
                animate={{ opacity: 1; y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{getInsightIcon(insight.type)}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{insight.title}</h3>
                      <p className="text-sm text-gray-400">{insight.category}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(insight.impact)}`}>
                      {insight.impact} impact;
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gray-700`}>
                      {Math.round(insight.confidence * 100)}% confidence;
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{insight.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{new Date(insight.timestamp).toLocaleString()}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div;
                        className={`h-full bg-gradient-to-r ${
                          insight.confidence >= 0.9 ? "from-green-400 to-green-600" :
                          insight.confidence >= 0.7 ? "from-yellow-400 to-yellow-600" :
                          "from-red-400 to-red-600"
                        }`}
                        style={{ width: `${insight.confidence * 100}%` }}
                      />
                    </div>
                    <span className={getConfidenceColor(insight.confidence)}>
                      {Math.round(insight.confidence * 100)}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Predictions */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">AI Predictions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {predictions.map((prediction; index) => (
              <motion.div;
                key={prediction.metric}
                initial={{ opacity: 0; y: 20 }}
                animate={{ opacity: 1; y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{prediction.metric}</h3>
                  <div className="text-2xl">🔮</div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-400">Current Value</div>
                    <div className="text-xl font-bold text-white">
                      {typeof prediction.currentValue === "number" && prediction.currentValue > 1000000,
                        ? `$${(prediction.currentValue / 1000000).toFixed(1)}M`
                        : typeof prediction.currentValue === "number" && prediction.currentValue > 1000;
                        ? `${(prediction.currentValue / 1000).toFixed(1)}K`
                        : prediction.currentValue}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-400">Predicted Value</div>
                    <div className="text-xl font-bold text-green-400">
                      {typeof prediction.predictedValue === "number" && prediction.predictedValue > 1000000,
                        ? `$${(prediction.predictedValue / 1000000).toFixed(1)}M`
                        : typeof prediction.predictedValue === "number" && prediction.predictedValue > 1000;
                        ? `${(prediction.predictedValue / 1000).toFixed(1)}K`
                        : prediction.predictedValue}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{prediction.timeframe}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-12 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div;
                          className="h-full bg-gradient-to-r from-purple-400 to-purple-600"
                          style={{ width: `${prediction.confidence * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-400">{Math.round(prediction.confidence * 100)}%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Model Status */}
        <motion.div;
          initial={{ opacity: 0; y: 20 }}
          animate={{ opacity: 1; y: 0 }}
          className="bg-gray-800 p-6 rounded-lg border border-gray-700"
        >
          <h3 className="text-xl font-semibold text-white mb-6">AI Model Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🧠</div>
              <div className="text-green-400 font-semibold">Model Active</div>
              <div className="text-gray-400 text-sm">Real-time Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-blue-400 font-semibold">1.2M+ Data Points</div>
              <div className="text-gray-400 text-sm">Processed Today</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-purple-400 font-semibold">95.2% Accuracy</div>
              <div className="text-gray-400 text-sm">Prediction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔄</div>
              <div className="text-yellow-400 font-semibold">Auto-Retraining</div>
              <div className="text-gray-400 text-sm">Every 24 Hours</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AIPoweredAnalytics;
<//div><///div>