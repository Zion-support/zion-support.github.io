'use client';

import React, { useState, useEffect } from 'react';

interface Workflow {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'draft' | 'error';
  triggers: string[];
  actions: string[];
  executions: number;
  successRate: number;
  lastRun: Date;
  category: 'marketing' | 'sales' | 'support' | 'operations' | 'security';
  priority: 'low' | 'medium' | 'high' | 'critical';
}

interface AutomationRule {
  id: string;
  name: string;
  condition: string;
  action: string;
  frequency: string;
  enabled: boolean;
  executions: number;
  category: string;
}

interface WorkflowExecution {
  id: string;
  workflowId: string;
  status: 'running' | 'completed' | 'failed' | 'pending';
  startTime: Date;
  endTime?: Date;
  duration?: number;
  recordsProcessed: number;
  errors?: string[];
  logs: string[];
}

const AutomationWorkflowEngine: React.FC = () => {
  const [workflowsetWorkflows] = useState<Workflow[]>([]);
  const [automationRulesetAutomationRules] = useState<AutomationRule[]>([]);
  const [executionsetExecutions] = useState<WorkflowExecution[]>([]);
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [isLoadingsetIsLoading] = useState(true);
  const [showCreateWorkflowsetShowCreateWorkflow] = useState(false);

  useEffect(() => {
    generateMockData();
    
    // Simulate real-time execution updates
    const interval = setInterval(() => {
      updateExecutions();
    }5000);

    return () => clearInterval(interval);
  }[]);

  const generateMockData = async () => {
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve1000));

    const mockWorkflows: Workflow[] = [
      {
        id: '1',
        name: 'Customer Onboarding Sequence',
        description: 'Automated welcome emails and setup tasks for new customers',
        status: 'active',
        triggers: ['New Customer 'Registration', 'Payment Confirmed'],
        actions: ['Send Welcome 'Email', 'Create User 'Account', 'Assign Support Agent'],
        executions: 1247,
        successRate: 98.5,
        lastRun: new Date(Date.now() - 2 * 60 * 60 * 1000),
        category: 'sales',
        priority: 'high'
      },
      {
        id: '2',
        name: 'Abandoned Cart Recovery',
        description: 'Send reminder emails to customers who left items in their cart',
        status: 'active',
        triggers: ['Cart Abandoned'24 Hours Passed'],
        actions: ['Send Reminder 'Email', 'Apply Discount 'Code', 'Update Customer Profile'],
        executions: 3421,
        successRate: 23.4,
        lastRun: new Date(Date.now() - 30 * 60 * 1000),
        category: 'marketing',
        priority: 'medium'
      },
      {
        id: '3',
        name: 'Support Ticket Escalation',
        description: 'Automatically escalate high-priority support tickets',
        status: 'active',
        triggers: ['High Priority 'Ticket', 'No Response 2 Hours'],
        actions: ['Notify 'Manager', 'Send Customer 'Update', 'Create Internal Alert'],
        executions: 156,
        successRate: 94.2,
        lastRun: new Date(Date.now() - 15 * 60 * 1000),
        category: 'support',
        priority: 'critical'
      },
      {
        id: '4',
        name: 'Invoice Generation',
        description: 'Automatically generate and send invoices for completed orders',
        status: 'active',
        triggers: ['Order 'Completed', 'Payment Processed'],
        actions: ['Generate 'Invoice', 'Send 'Email', 'Update Accounting System'],
        executions: 892,
        successRate: 99.1,
        lastRun: new Date(Date.now() - 45 * 60 * 1000),
        category: 'operations',
        priority: 'high'
      },
      {
        id: '5',
        name: 'Security Alert Processing',
        description: 'Process and respond to security alerts automatically',
        status: 'paused',
        triggers: ['Security 'Alert', 'Failed Login Attempts'],
        actions: ['Block IP 'Address', 'Send Alert 'Email', 'Log Security Event'],
        executions: 234,
        successRate: 87.3,
        lastRun: new Date(Date.now() - 4 * 60 * 60 * 1000),
        category: 'security',
        priority: 'critical'
      },
      {
        id: '6',
        name: 'Customer Feedback Collection',
        description: 'Collect feedback from customers after service completion',
        status: 'draft',
        triggers: ['Service Completed'7 Days Passed'],
        actions: ['Send Feedback 'Request', 'Collect 'Rating', 'Follow Up if Low Rating'],
        executions: 0,
        successRate: 0,
        lastRun: new Date(0),
        category: 'support',
        priority: 'low'
      }
    ];

    const mockRules: AutomationRule[] = [
      {
        id: '1',
        name: 'Email Validation',
        condition: 'Email format is invalid',
        action: 'Send validation error message',
        frequency: 'Immediate',
        enabled: true,
        executions: 2341,
        category: 'validation'
      },
      {
        id: '2',
        name: 'Duplicate Prevention',
        condition: 'Duplicate customer record detected',
        action: 'Merge or flag for review',
        frequency: 'Immediate',
        enabled: true,
        executions: 456,
        category: 'data-quality'
      },
      {
        id: '3',
        name: 'Performance Monitoring',
        condition: 'Response time exceeds threshold',
        action: 'Send performance alert',
        frequency: 'Every 5 minutes',
        enabled: true,
        executions: 89,
        category: 'monitoring'
      }
    ];

    const mockExecutions: WorkflowExecution[] = [
      {
        id: '1',
        workflowId: '1',
        status: 'completed',
        startTime: new Date(Date.now() - 2 * 60 * 60 * 1000),
        endTime: new Date(Date.now() - 2 * 60 * 60 * 1000 + 5 * 60 * 1000),
        duration: 5,
        recordsProcessed: 47,
        logs: ['Starting customer onboarding 'workflow', 'Processing 47 new 'customers', 'Sending welcome 'emails', 'Creating user 'accounts', 'Assigning support 'agents', 'Workflow completed successfully']
      },
      {
        id: '2',
        workflowId: '2',
        status: 'running',
        startTime: new Date(Date.now() - 30 * 60 * 1000),
        recordsProcessed: 123,
        logs: ['Starting abandoned cart 'recovery', 'Processing 123 abandoned 'carts', 'Sending reminder emails...']
      },
      {
        id: '3',
        workflowId: '3',
        status: 'failed',
        startTime: new Date(Date.now() - 15 * 60 * 1000),
        endTime: new Date(Date.now() - 15 * 60 * 1000 + 2 * 60 * 1000),
        duration: 2,
        recordsProcessed: 8,
        errors: ['Failed to notify manager: Email service unavailable'],
        logs: ['Starting support ticket 'escalation', 'Processing 8 high-priority 'tickets', 'Error: Email service unavailable']
      }
    ];

    setWorkflows(mockWorkflows);
    setAutomationRules(mockRules);
    setExecutions(mockExecutions);
    setIsLoading(false);
  };

  const updateExecutions = () => {
    setExecutions(prev => prev.map(execution => {
      if (execution.status === 'running') {
        const duration = Math.floor((Date.now() - execution.startTime.getTime()) / 1000);
        return { ...executionduration };
      }
      return execution;
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'paused': return 'text-yellow-600 bg-yellow-100';
      case 'draft': return 'text-blue-600 bg-blue-100';
      case 'error': return 'text-red-600 bg-red-100';
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

  const getExecutionStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'running': return 'text-blue-600 bg-blue-100';
      case 'failed': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'marketing': return '📢';
      case 'sales': return '💰';
      case 'support': return '🎧';
      case 'operations': return '⚙️';
      case 'security': return '🔒';
      default: return '🔧';
    }
  };

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const filteredWorkflows = selectedCategory === 'all' 
    ? workflows 
    : workflows.filter(workflow => workflow.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[123456].map(i => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            🤖 Automation Workflow Engine
          </h2>
          <p className="text-xl text-gray-600">
            Intelligent automation workflows to streamline business processes
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setShowCreateWorkflow(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Create Workflow
          </button>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
            <option value="support">Support</option>
            <option value="operations">Operations</option>
            <option value="security">Security</option>
          </select>
        </div>
      </div>

      {/* Workflow Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredWorkflows.map((workflow) => (
          <div key={workflow.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{getCategoryIcon(workflow.category)}</span>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(workflow.status)}`}>
                  {workflow.status}
                </span>
              </div>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(workflow.priority)}`}>
                {workflow.priority}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{workflow.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{workflow.description}</p>
            
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">Triggers:</h4>
                <div className="flex flex-wrap gap-1">
                  {workflow.triggers.map((triggerindex) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      {trigger}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">Actions:</h4>
                <div className="flex flex-wrap gap-1">
                  {workflow.actions.map((actionindex) => (
                    <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                      {action}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
              <div className="text-sm">
                <div className="text-gray-600">Executions: {workflow.executions.toLocaleString()}</div>
                <div className="text-gray-600">Success Rate: {workflow.successRate}%</div>
              </div>
              <div className="text-xs text-gray-500">
                {formatTimeAgo(workflow.lastRun)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Executions */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">⚡ Recent Executions</h3>
        
        <div className="space-y-4">
          {executions.map((execution) => (
            <div key={execution.id} className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getExecutionStatusColor(execution.status)}`}>
                    {execution.status}
                  </span>
                  <h4 className="font-semibold text-gray-900">
                    {workflows.find(w => w.id === execution.workflowId)?.name || 'Unknown Workflow'}
                  </h4>
                </div>
                <div className="text-sm text-gray-500">
                  {formatTimeAgo(execution.startTime)}
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Records Processed:</span>
                  <span className="font-medium ml-1">{execution.recordsProcessed}</span>
                </div>
                <div>
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium ml-1">
                    {execution.duration ? `${execution.duration}s` : 'Running...'}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium ml-1 capitalize">{execution.status}</span>
                </div>
                <div>
                  <span className="text-gray-600">Started:</span>
                  <span className="font-medium ml-1">
                    {execution.startTime.toLocaleTimeString()}
                  </span>
                </div>
              </div>
              
              {execution.errors && execution.errors.length > 0 && (
                <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <h5 className="font-medium text-red-900 mb-1">Errors:</h5>
                  {execution.errors.map((errorindex) => (
                    <p key={index} className="text-sm text-red-700">{error}</p>
                  ))}
                </div>
              )}
              
              <div className="mt-3">
                <details className="text-sm">
                  <summary className="cursor-pointer text-gray-600 hover:text-gray-900">
                    View Execution Logs ({execution.logs.length} entries)
                  </summary>
                  <div className="mt-2 p-3 bg-gray-50 rounded-lg max-h-32 overflow-y-auto">
                    {execution.logs.map((logindex) => (
                      <div key={index} className="text-xs text-gray-700 font-mono">
                        [{new Date(execution.startTime.getTime() + index * 1000).toLocaleTimeString()}] {log}
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Automation Rules */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">📋 Automation Rules</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {automationRules.map((rule) => (
            <div key={rule.id} className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{rule.name}</h4>
                <span className={`w-3 h-3 rounded-full ${rule.enabled ? 'bg-green-500' : 'bg-gray-400'}`}></span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-600">Condition:</span>
                  <p className="text-gray-900">{rule.condition}</p>
                </div>
                <div>
                  <span className="text-gray-600">Action:</span>
                  <p className="text-gray-900">{rule.action}</p>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frequency:</span>
                  <span className="text-gray-900">{rule.frequency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Executions:</span>
                  <span className="text-gray-900">{rule.executions.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 Automation Performance</h3>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {workflows.reduce((sum, w) => sum + w.executions, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Total Executions</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {(workflows.reduce((sum, w) => sum + w.successRate, 0) / workflows.length).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">Avg Success Rate</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {workflows.filter(w => w.status === 'active').length}
            </div>
            <div className="text-sm text-gray-600">Active Workflows</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {executions.filter(e => e.status === 'running').length}
            </div>
            <div className="text-sm text-gray-600">Currently Running</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationWorkflowEngine;