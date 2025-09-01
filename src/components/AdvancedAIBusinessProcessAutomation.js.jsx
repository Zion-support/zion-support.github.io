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
  },
  {
    id: 'bp-003',
    name: 'Customer Support Ticket Routing',
    description: 'Intelligent ticket routing based on AI analysis of customer issues and agent expertise',
    category: 'operations',
    status: 'active',
    priority: 'high',
    automationLevel: 'fully-automated',
    aiInsights: [
      'Response time improved by 60% with AI routing',
      'Customer satisfaction increased by 25%',
      'Agent workload balanced automatically'
    ],
    efficiency: 95,
    costSavings: 15000,
    timeReduction: 70,
    stakeholders: ['Support Team', 'Customers', 'Management'],
    lastExecuted: new Date('2024-01-15T08:45:00Z'),
    nextExecution: new Date('2024-01-15T09:00:00Z'),
    executionHistory: [
      {
        id: 'exec-003',
        timestamp: new Date('2024-01-15T08:45:00Z'),
        status: 'success',
        duration: 30,
        aiDecisions: ['Routed 150 tickets to optimal agents', 'Escalated 5 urgent cases'],
        manualInterventions: 0,
        cost: 75,
        efficiency: 97
      }
    ],
    rules: [
      {
        id: 'rule-003',
        name: 'Route by expertise',
        condition: 'ticket_category = agent_expertise AND agent_available = true',
        action: 'route_ticket',
        priority: 1,
        isActive: true,
        aiOptimized: true,
        lastTriggered: new Date('2024-01-15T08:45:00Z'),
        triggerCount: 150
      }
    ],
    dependencies: ['agent_availability', 'ticket_classification']
  }
];

export const AdvancedAIBusinessProcessAutomation = () => {
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('efficiency');

  const filteredProcesses = mockBusinessProcesses.filter(process => {
    const matchesSearch = process.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         process.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || process.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProcesses = [...filteredProcesses].sort((a, b) => {
    switch (sortBy) {
      case 'efficiency':
        return b.efficiency - a.efficiency;
      case 'costSavings':
        return b.costSavings - a.costSavings;
      case 'timeReduction':
        return b.timeReduction - a.timeReduction;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const categories = ['all', 'finance', 'hr', 'operations'];
  const sortOptions = [
    { value: 'efficiency', label: 'Efficiency' },
    { value: 'costSavings', label: 'Cost Savings' },
    { value: 'timeReduction', label: 'Time Reduction' },
    { value: 'name', label: 'Name' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Workflow className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">AI Business Process Automation</h2>
              <p className="text-blue-100">Intelligent automation powered by advanced AI</p>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            {isExpanded ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search processes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="sm:w-48">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="sm:w-48">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  Sort by {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Process List */}
      <div className="p-6">
        <div className="grid gap-6">
          {sortedProcesses.map((process) => (
            <div
              key={process.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-colors cursor-pointer"
              onClick={() => setSelectedProcess(process)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {process.name}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      process.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                      process.status === 'inactive' ? 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }`}>
                      {process.status}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      process.priority === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                      process.priority === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                      'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    }`}>
                      {process.priority}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {process.description}
                  </p>
                </div>
                <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {process.efficiency}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Efficiency</div>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    ${process.costSavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Cost Savings</div>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {process.timeReduction}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Time Reduction</div>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {process.automationLevel}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Automation</div>
                </div>
              </div>

              {/* AI Insights */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-blue-500" />
                  AI Insights
                </h4>
                <div className="space-y-1">
                  {process.aiInsights.slice(0, 2).map((insight, index) => (
                    <div key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <Lightbulb className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                      {insight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Last Execution */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Last executed: {process.lastExecuted.toLocaleDateString()}</span>
                <span>Next: {process.nextExecution.toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
