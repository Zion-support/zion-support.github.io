import React, { useState, useRef } from 'react';
import { 
  Workflow, 
  Brain, 
  Settings, 
  X, 
  Maximize2, 
  Minimize2, 
  Search, 
  CheckCircle, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Activity, 
  Users, 
  FileText, 
  AlertTriangle, 
  Lightbulb, 
  DollarSign, 
  PieChart, 
  MoreVertical, 
  Edit3, 
  Server, 
  Play, 
  Loader 
} from 'lucide-react';

const mockBusinessProcesses = [
  {
    id: 'bp-001',
    name: 'Invoice Processing & Approval',
    description: 'Automated invoice processing with AI-powered validation and approval workflows',
    category: 'finance',
    status: 'active',
    priority: 'high',
    automationLevel: 'fully-automated',
    aiInsights: [
      'Pattern detected: 15% of invoices require manual review',
      'Optimization opportunity: Reduce approval time by 40%',
      'Cost savings potential: $12,000/month through automation'
    ],
    efficiency: 92,
    costSavings: 12000,
    timeReduction: 65,
    stakeholders: ['Finance Team', 'AP Department', 'Vendors'],
    lastExecuted: new Date('2024-01-15T10:30:00Z'),
    nextExecution: new Date('2024-01-16T09:00:00Z'),
    executionHistory: [
      {
        id: 'exec-001',
        timestamp: new Date('2024-01-15T10:30:00Z'),
        status: 'success',
        duration: 45,
        aiDecisions: ['Auto-approved 85% of invoices', 'Flagged 3 suspicious entries'],
        manualInterventions: 2,
        cost: 150,
        efficiency: 94
      }
    ],
    rules: [
      {
        id: 'rule-001',
        name: 'Auto-approve under $1000',
        condition: 'amount < 1000 AND vendor_verified = true',
        action: 'auto_approve',
        priority: 1,
        isActive: true,
        aiOptimized: true,
        lastTriggered: new Date('2024-01-15T10:30:00Z'),
        triggerCount: 156
      }
    ],
    dependencies: ['vendor_verification', 'budget_approval']
  },
  {
    id: 'bp-002',
    name: 'Employee Onboarding',
    description: 'Streamlined employee onboarding with automated document processing and task assignment',
    category: 'hr',
    status: 'active',
    priority: 'medium',
    automationLevel: 'semi-automated',
    aiInsights: [
      'Bottleneck identified: IT setup takes 3 days on average',
      'Recommendation: Implement parallel processing for faster onboarding',
      'Success rate: 98% completion within SLA'
    ],
    efficiency: 87,
    costSavings: 8000,
    timeReduction: 55,
    stakeholders: ['HR Team', 'IT Department', 'New Employees'],
    lastExecuted: new Date('2024-01-14T14:15:00Z'),
    nextExecution: new Date('2024-01-17T09:00:00Z'),
    executionHistory: [
      {
        id: 'exec-002',
        timestamp: new Date('2024-01-14T14:15:00Z'),
        status: 'success',
        duration: 120,
        aiDecisions: ['Optimized task sequence', 'Identified resource conflicts'],
        manualInterventions: 1,
        cost: 200,
        efficiency: 89
      }
    ],
    rules: [
      {
        id: 'rule-002',
        name: 'Auto-assign IT tasks',
        condition: 'employee_type = "full_time" AND department != "contractor"',
        action: 'assign_it_tasks',
        priority: 2,
        isActive: true,
        aiOptimized: true,
        lastTriggered: new Date('2024-01-14T14:15:00Z'),
        triggerCount: 23
      }
    ],
    dependencies: ['background_check', 'document_verification']
  }
];

export const AdvancedAIBusinessProcessAutomation = () => {
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredProcesses = mockBusinessProcesses.filter(process => {
    const matchesSearch = process.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         process.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || process.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'finance', 'hr', 'operations', 'marketing', 'sales'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced AI Business Process Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business operations with intelligent automation powered by AI.
            Streamline workflows, reduce costs, and improve efficiency across all departments.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search business processes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(category => (
              <option key={category} value={category} className="bg-gray-800">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProcesses.map((process) => (
            <div
              key={process.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProcess(process)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Workflow className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{process.name}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      process.status === 'active' ? 'bg-green-500/20 text-green-400' :
                      process.status === 'paused' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {process.status}
                    </span>
                  </div>
                </div>
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </div>

              <p className="text-gray-300 mb-4">{process.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{process.efficiency}%</div>
                  <div className="text-xs text-gray-400">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">${process.costSavings.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Monthly Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{process.timeReduction}%</div>
                  <div className="text-xs text-gray-400">Time Reduction</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">{process.automationLevel}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">
                    {process.executionHistory.length} executions
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Insights Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            AI-Powered Insights & Analytics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white">Performance Analytics</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Real-time monitoring and analysis of process performance with predictive insights.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Average Efficiency</span>
                  <span className="text-white">89.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Cost Reduction</span>
                  <span className="text-green-400">$45,000/month</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Time Savings</span>
                  <span className="text-blue-400">60%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">AI Recommendations</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Intelligent suggestions for process optimization and automation opportunities.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-300">
                  • Optimize approval workflows
                </div>
                <div className="text-sm text-gray-300">
                  • Reduce manual interventions
                </div>
                <div className="text-sm text-gray-300">
                  • Enhance decision accuracy
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Predictive Analytics</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Forecast process bottlenecks and resource requirements using machine learning.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-300">
                  • Bottleneck prediction
                </div>
                <div className="text-sm text-gray-300">
                  • Resource optimization
                </div>
                <div className="text-sm text-gray-300">
                  • Risk assessment
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Start your AI automation journey today and unlock unprecedented efficiency gains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAIBusinessProcessAutomation;
