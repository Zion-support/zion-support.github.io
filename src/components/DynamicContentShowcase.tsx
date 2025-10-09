import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Database, Cloud, Shield, Zap, TrendingUp, Users, Award, Target } from 'lucide-react';

interface DynamicContentShowcaseProps {
  className?: string;
}

interface ShowcaseItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  metrics: {
    value: string;
    label: string;
    change: string;
  }[];
  color: string;
  category: string;
}

export default function DynamicContentShowcase({ className = '' }: DynamicContentShowcaseProps) {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const showcaseItems: ShowcaseItem[] = [
    {
      id: 1,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms that provide real-time insights and predictive analytics for your business operations.",
      icon: <Brain className="w-8 h-8" />,
      metrics: [
        { value: "95%", label: "Accuracy", change: "+12%" },
        { value: "2.3s", label: "Response Time", change: "-45%" },
        { value: "10M+", label: "Data Points", change: "+200%" }
      ],
      color: "from-blue-500 to-cyan-500",
      category: "ai-solutions"
    },
    {
      id: 2,
      title: "Quantum Computing Platform",
      description: "Next-generation quantum computing capabilities for solving complex optimization problems and advanced simulations.",
      icon: <Cpu className="w-8 h-8" />,
      metrics: [
        { value: "1000x", label: "Speed Increase", change: "+500%" },
        { value: "99.9%", label: "Reliability", change: "+5%" },
        { value: "50+", label: "Qubits", change: "+25%" }
      ],
      color: "from-purple-500 to-pink-500",
      category: "quantum"
    },
    {
      id: 3,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure with 99.9% uptime guarantee and global edge computing capabilities.",
      icon: <Cloud className="w-8 h-8" />,
      metrics: [
        { value: "99.9%", label: "Uptime", change: "+0.1%" },
        { value: "50ms", label: "Latency", change: "-30%" },
        { value: "100+", label: "Regions", change: "+20%" }
      ],
      color: "from-green-500 to-emerald-500",
      category: "infrastructure"
    },
    {
      id: 4,
      title: "Security & Compliance",
      description: "Enterprise-grade security with end-to-end encryption, zero-trust architecture, and compliance with industry standards.",
      icon: <Shield className="w-8 h-8" />,
      metrics: [
        { value: "256-bit", label: "Encryption", change: "Latest" },
        { value: "0", label: "Breaches", change: "Perfect" },
        { value: "SOC 2", label: "Compliance", change: "Certified" }
      ],
      color: "from-red-500 to-orange-500",
      category: "security"
    }
  ];

  const tabs = [
    { id: 'ai-solutions', label: 'AI Solutions', count: 12 },
    { id: 'quantum', label: 'Quantum Computing', count: 4 },
    { id: 'infrastructure', label: 'Infrastructure', count: 8 },
    { id: 'security', label: 'Security', count: 6 }
  ];

  const filteredItems = showcaseItems.filter(item => item.category === activeTab);

  return (
    <div className={`bg-slate-800 rounded-lg p-8 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Dynamic Technology Showcase
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Explore our cutting-edge technologies and see real-time performance metrics
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-cyan-500 text-white shadow-lg'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            {tab.label}
            <span className="ml-2 px-2 py-1 bg-slate-600 text-xs rounded-full">
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className={`bg-gradient-to-br ${item.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-white">
                {item.icon}
              </div>
              <div className="text-white/80 text-sm">
                {item.category.toUpperCase()}
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              {item.title}
            </h3>

            <p className="text-white/90 mb-6 leading-relaxed">
              {item.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4">
              {item.metrics.map((metric, metricIndex) => (
                <div key={metricIndex} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-white/80 text-sm mb-1">
                    {metric.label}
                  </div>
                  <div className="text-white/60 text-xs">
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="mt-6">
              <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg transition-all duration-200 font-medium">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Real-time Status */}
      <div className="mt-8 bg-slate-700 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">Live Status</span>
          </div>
          <div className="text-gray-300 text-sm">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">99.9%</div>
            <div className="text-gray-300 text-sm">System Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">2.1s</div>
            <div className="text-gray-300 text-sm">Avg Response</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">1.2M</div>
            <div className="text-gray-300 text-sm">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">24/7</div>
            <div className="text-gray-300 text-sm">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}