import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Target, 
  FileText, 
  Plus, 
  Search, 
  Filter, 
  Circle, 
  Play, 
  Pause, 
  CheckCircle, 
  StopCircle, 
  Clock, 
  DollarSign, 
  Users, 
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Edit,
  Trash2,
  Eye,
  Download,
  RefreshCw
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  progress: number;
  budget: number;
  startDate: string;
  endDate: string;
  client: string;
  team: string[];
  tags: string[];
  milestones: Milestone[];
}

interface Milestone {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
  progress: number;
}

export default function ProjectManagementTimeline() {
  const [viewMode, setViewMode] = useState<'timeline' | 'grid' | 'list'>('timeline');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxProjects, setMaxProjects] = useState(10);
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  // Sample project data
  const projects: Project[] = [
    {
      id: '1',
      name: 'AI-Powered Analytics Platform',
      description: 'Develop a comprehensive analytics platform using machine learning algorithms',
      status: 'active',
      priority: 'high',
      progress: 65,
      budget: 150000,
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      client: 'TechCorp Inc.',
      team: ['John Doe', 'Jane Smith', 'Mike Johnson'],
      tags: ['AI', 'Analytics', 'Machine Learning'],
      milestones: [
        {
          id: 'm1',
          name: 'Data Pipeline Setup',
          description: 'Establish data collection and processing pipeline',
          dueDate: '2024-02-15',
          status: 'completed',
          progress: 100
        },
        {
          id: 'm2',
          name: 'ML Model Development',
          description: 'Build and train machine learning models',
          dueDate: '2024-04-15',
          status: 'in-progress',
          progress: 75
        },
        {
          id: 'm3',
          name: 'UI/UX Implementation',
          description: 'Create user interface and user experience',
          dueDate: '2024-05-15',
          status: 'pending',
          progress: 0
        }
      ]
    },
    {
      id: '2',
      name: 'Cloud Migration Project',
      description: 'Migrate legacy systems to cloud infrastructure',
      status: 'planning',
      priority: 'medium',
      progress: 25,
      budget: 80000,
      startDate: '2024-03-01',
      endDate: '2024-08-31',
      client: 'Global Enterprises',
      team: ['Sarah Wilson', 'David Brown'],
      tags: ['Cloud', 'Migration', 'DevOps'],
      milestones: [
        {
          id: 'm4',
          name: 'Infrastructure Assessment',
          description: 'Evaluate current infrastructure and plan migration',
          dueDate: '2024-03-31',
          status: 'completed',
          progress: 100
        },
        {
          id: 'm5',
          name: 'Pilot Migration',
          description: 'Execute pilot migration for one system',
          dueDate: '2024-05-31',
          status: 'pending',
          progress: 0
        }
      ]
    },
    {
      id: '3',
      name: 'Cybersecurity Enhancement',
      description: 'Implement advanced security measures and threat detection',
      status: 'active',
      priority: 'critical',
      progress: 40,
      budget: 120000,
      startDate: '2024-02-01',
      endDate: '2024-07-31',
      client: 'SecureBank Ltd.',
      team: ['Alex Chen', 'Lisa Park', 'Tom Davis'],
      tags: ['Security', 'Cybersecurity', 'Threat Detection'],
      milestones: [
        {
          id: 'm6',
          name: 'Security Audit',
          description: 'Conduct comprehensive security assessment',
          dueDate: '2024-03-15',
          status: 'completed',
          progress: 100
        },
        {
          id: 'm7',
          name: 'Implementation',
          description: 'Deploy security enhancements',
          dueDate: '2024-06-30',
          status: 'in-progress',
          progress: 40
        }
      ]
    }
  ];

  // Filter projects based on search and filters
  const filteredProjects = useMemo(() => {
    let filtered = projects.filter(p => {
      const statusMatch = selectedStatus === 'all' || p.status === selectedStatus;
      const priorityMatch = selectedPriority === 'all' || p.priority === selectedPriority;
      const searchMatch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return statusMatch && priorityMatch && searchMatch;
    });
    return filtered.slice(0, maxProjects);
  }, [projects, selectedStatus, selectedPriority, searchQuery, maxProjects]);

  // Calculate project stats
  const projectStats = {
    total: projects.length,
    active: projects.filter(p => p.status === 'active').length,
    completed: projects.filter(p => p.status === 'completed').length,
    onHold: projects.filter(p => p.status === 'on-hold').length,
    totalBudget: projects.reduce((sum, p) => sum + p.budget, 0),
    averageProgress: projects.reduce((sum, p) => sum + p.progress, 0) / projects.length || 0
  };

  // Get status color and icon
  const getStatusDisplay = (status: string) => {
    switch (status) {
      case 'planning':
        return { color: 'text-blue-400 bg-blue-400/20', icon: <Circle className="w-4 h-4" /> };
      case 'active':
        return { color: 'text-green-400 bg-green-400/20', icon: <Play className="w-4 h-4" /> };
      case 'on-hold':
        return { color: 'text-yellow-400 bg-yellow-400/20', icon: <Pause className="w-4 h-4" /> };
      case 'completed':
        return { color: 'text-purple-400 bg-purple-400/20', icon: <CheckCircle className="w-4 h-4" /> };
      case 'cancelled':
        return { color: 'text-red-400 bg-red-400/20', icon: <StopCircle className="w-4 h-4" /> };
      default:
        return { color: 'text-zinc-400 bg-zinc-400/20', icon: <Circle className="w-4 h-4" /> };
    }
  };

  // Get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low':
        return 'text-green-400 bg-green-400/20';
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'high':
        return 'text-orange-400 bg-orange-400/20';
      case 'critical':
        return 'text-red-400 bg-red-400/20';
      default:
        return 'text-zinc-400 bg-zinc-400/20';
    }
  };

  // Get milestone status color
  const getMilestoneStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-400/20';
      case 'in-progress':
        return 'text-blue-400 bg-blue-400/20';
      case 'overdue':
        return 'text-red-400 bg-red-400/20';
      default:
        return 'text-zinc-400 bg-zinc-400/20';
    }
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Calculate days remaining
  const getDaysRemaining = (endDate: string) => {
    const end = new Date(endDate);
    const today = new Date();
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Toggle project expansion
  const toggleProjectExpansion = (projectId: string) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Project Management</h1>
          <p className="text-zinc-400 text-lg">Track and manage all your projects and milestones</p>
        </div>
        <div className="flex items-center gap-3 mt-4 lg:mt-0">
          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900/30 rounded-lg">
            {[
              { id: 'timeline', label: 'Timeline', icon: <Calendar className="w-4 h-4" /> },
              { id: 'grid', label: 'Grid', icon: <Target className="w-4 h-4" /> },
              { id: 'list', label: 'List', icon: <FileText className="w-4 h-4" /> }
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setViewMode(mode.id as 'timeline' | 'grid' | 'list')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  viewMode === mode.id
                    ? 'bg-cyan-500 text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {mode.icon}
                {mode.label}
              </button>
            ))}
          </div>

          {/* Add Project Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all duration-300">
            <Plus className="w-4 h-4" />
            Add Project
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-zinc-900/30 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white">{projectStats.total}</div>
          <div className="text-zinc-400 text-sm">Total Projects</div>
        </div>
        <div className="bg-zinc-900/30 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-400">{projectStats.active}</div>
          <div className="text-zinc-400 text-sm">Active</div>
        </div>
        <div className="bg-zinc-900/30 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-purple-400">{projectStats.completed}</div>
          <div className="text-zinc-400 text-sm">Completed</div>
        </div>
        <div className="bg-zinc-900/30 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-yellow-400">{projectStats.onHold}</div>
          <div className="text-zinc-400 text-sm">On Hold</div>
        </div>
        <div className="bg-zinc-900/30 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-400">{formatCurrency(projectStats.totalBudget)}</div>
          <div className="text-zinc-400 text-sm">Total Budget</div>
        </div>
        <div className="bg-zinc-900/30 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-cyan-400">{Math.round(projectStats.averageProgress)}%</div>
          <div className="text-zinc-400 text-sm">Avg Progress</div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-zinc-900/30 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
          />
        </div>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="px-4 py-2 bg-zinc-900/30 border border-zinc-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-500"
        >
          <option value="all">All Statuses</option>
          <option value="planning">Planning</option>
          <option value="active">Active</option>
          <option value="on-hold">On Hold</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <select
          value={selectedPriority}
          onChange={(e) => setSelectedPriority(e.target.value)}
          className="px-4 py-2 bg-zinc-900/30 border border-zinc-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-500"
        >
          <option value="all">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>

        <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors duration-200">
          <Filter className="w-4 h-4 inline mr-2" />
          More Filters
        </button>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-900/30 rounded-lg border border-zinc-700/50 overflow-hidden"
          >
            {/* Project Header */}
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusDisplay(project.status).color}`}>
                      {getStatusDisplay(project.status).icon}
                      <span className="ml-1">{project.status}</span>
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                      {project.priority}
                    </span>
                  </div>
                  
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {getDaysRemaining(project.endDate)} days remaining
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {formatCurrency(project.budget)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {project.team.length} team members
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {project.progress}% complete
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-zinc-400">Progress</span>
                      <span className="text-white font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-zinc-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={() => toggleProjectExpansion(project.id)}
                    className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-200"
                  >
                    {expandedProjects.has(project.id) ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-200">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-200">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Expanded Milestones Section */}
            <AnimatePresence>
              {expandedProjects.has(project.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-zinc-700/50 bg-zinc-800/20"
                >
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Milestones</h4>
                    <div className="space-y-3">
                      {project.milestones.map((milestone) => (
                        <div key={milestone.id} className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h5 className="font-medium text-white">{milestone.name}</h5>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMilestoneStatusColor(milestone.status)}`}>
                                {milestone.status}
                              </span>
                            </div>
                            <p className="text-zinc-400 text-sm">{milestone.description}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-zinc-500">
                              <span>Due: {new Date(milestone.dueDate).toLocaleDateString()}</span>
                              <span>Progress: {milestone.progress}%</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="p-1 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {filteredProjects.length < projects.length && (
        <div className="text-center mt-8">
          <button
            onClick={() => setMaxProjects(prev => prev + 5)}
            className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Load More Projects
          </button>
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <Target className="w-16 h-16 text-zinc-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
          <p className="text-zinc-400 mb-4">
            Try adjusting your search or filters to find relevant projects.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedStatus('all');
              setSelectedPriority('all');
            }}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
