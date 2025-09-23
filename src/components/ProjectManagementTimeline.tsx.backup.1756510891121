import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  Circle, 
  AlertCircle, 
  Play,
  Pause,
  StopCircle,
  Users,
  Target,
  TrendingUp,
  FileText,
  MessageSquare,
  Link,
  Download,
  Share2,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Settings
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: string;
  endDate: string;
  progress: number;
  team: string[];
  client: string;
  budget: number;
  tags: string[];
  milestones: Milestone[];
}

interface Milestone {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
  assignee: string;
  priority: 'low' | 'medium' | 'high';
}

interface ProjectManagementTimelineProps {
  showFilters?: boolean;
  showStats?: boolean;
  maxProjects?: number;
}

export const ProjectManagementTimeline: React.FC<ProjectManagementTimelineProps> = ({
  showFilters = true,
  showStats = true,
  maxProjects = 10
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'timeline' | 'grid' | 'list'>('timeline');
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  // Sample project data
  useEffect(() => {
    const sampleProjects: Project[] = [
      {
        id: '1',
        name: 'AI-Powered Customer Analytics Platform',
        description: 'Develop a comprehensive customer analytics platform using machine learning and AI to provide real-time insights and predictive analytics.',
        status: 'active',
        priority: 'high',
        startDate: '2024-01-01',
        endDate: '2024-06-30',
        progress: 65,
        team: ['Sarah Johnson', 'Michael Chen', 'Emily Rodriguez'],
        client: 'TechCorp Inc.',
        budget: 250000,
        tags: ['AI', 'Machine Learning', 'Analytics', 'Platform'],
        milestones: [
          {
            id: 'm1',
            title: 'Requirements Analysis',
            description: 'Complete stakeholder interviews and document requirements',
            dueDate: '2024-01-15',
            status: 'completed',
            assignee: 'Sarah Johnson',
            priority: 'high'
          },
          {
            id: 'm2',
            title: 'System Architecture Design',
            description: 'Design system architecture and database schema',
            dueDate: '2024-02-15',
            status: 'completed',
            assignee: 'Michael Chen',
            priority: 'high'
          },
          {
            id: 'm3',
            title: 'Core Development',
            description: 'Develop core platform features and API endpoints',
            dueDate: '2024-04-15',
            status: 'in-progress',
            assignee: 'Emily Rodriguez',
            priority: 'high'
          },
          {
            id: 'm4',
            title: 'Testing & QA',
            description: 'Comprehensive testing and quality assurance',
            dueDate: '2024-05-15',
            status: 'pending',
            assignee: 'Sarah Johnson',
            priority: 'medium'
          }
        ]
      },
      {
        id: '2',
        name: 'Cloud Migration & Infrastructure Modernization',
        description: 'Migrate legacy systems to cloud infrastructure and modernize the technology stack for improved scalability and performance.',
        status: 'active',
        priority: 'critical',
        startDate: '2024-02-01',
        endDate: '2024-08-31',
        progress: 35,
        team: ['David Kim', 'Lisa Thompson', 'Alex Wong'],
        client: 'Global Enterprises Ltd.',
        budget: 500000,
        tags: ['Cloud', 'Migration', 'Infrastructure', 'DevOps'],
        milestones: [
          {
            id: 'm5',
            title: 'Infrastructure Assessment',
            description: 'Assess current infrastructure and plan migration strategy',
            dueDate: '2024-02-28',
            status: 'completed',
            assignee: 'David Kim',
            priority: 'critical'
          },
          {
            id: 'm6',
            title: 'Cloud Setup',
            description: 'Set up cloud infrastructure and security configurations',
            dueDate: '2024-04-15',
            status: 'in-progress',
            assignee: 'Lisa Thompson',
            priority: 'critical'
          }
        ]
      },
      {
        id: '3',
        name: 'Cybersecurity Enhancement Program',
        description: 'Implement comprehensive cybersecurity measures including threat detection, incident response, and security awareness training.',
        status: 'planning',
        priority: 'high',
        startDate: '2024-03-01',
        endDate: '2024-09-30',
        progress: 15,
        team: ['James Wilson', 'Maria Garcia'],
        client: 'SecureBank Corp.',
        budget: 300000,
        tags: ['Cybersecurity', 'Threat Detection', 'Training', 'Compliance'],
        milestones: [
          {
            id: 'm7',
            title: 'Security Assessment',
            description: 'Conduct comprehensive security audit and vulnerability assessment',
            dueDate: '2024-03-31',
            status: 'in-progress',
            assignee: 'James Wilson',
            priority: 'high'
          }
        ]
      }
    ];

    setProjects(sampleProjects);
    setFilteredProjects(sampleProjects);
  }, []);

  // Filter projects
  useEffect(() => {
    let filtered = projects;

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(p => p.status === selectedStatus);
    }

    if (selectedPriority !== 'all') {
      filtered = filtered.filter(p => p.priority === selectedPriority);
    }

    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredProjects(filtered.slice(0, maxProjects));
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
      case 'low': return 'text-green-400 bg-green-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'high': return 'text-orange-400 bg-orange-400/20';
      case 'critical': return 'text-red-400 bg-red-400/20';
      default: return 'text-zinc-400 bg-zinc-400/20';
    }
  };

  // Get milestone status color
  const getMilestoneStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-zinc-400 bg-zinc-400/20';
      case 'in-progress': return 'text-blue-400 bg-blue-400/20';
      case 'completed': return 'text-green-400 bg-green-400/20';
      case 'overdue': return 'text-red-400 bg-red-400/20';
      default: return 'text-zinc-400 bg-zinc-400/20';
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
                onClick={() => setViewMode(mode.id as any)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  viewMode === mode.id
                    ? 'bg-zion-cyan text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {mode.icon}
                {mode.label}
              </button>
            ))}
          </div>

          {/* Add Project Button */}
          <button
            onClick={() => setShowProjectForm(true)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Project
          </button>
        </div>
      </div>

      {/* Stats Section */}
      {showStats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-white mb-1">{projectStats.total}</div>
            <div className="text-zinc-400 text-sm">Total Projects</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-green-400 mb-1">{projectStats.active}</div>
            <div className="text-zinc-400 text-sm">Active</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-purple-400 mb-1">{projectStats.completed}</div>
            <div className="text-zinc-400 text-sm">Completed</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-yellow-400 mb-1">{projectStats.onHold}</div>
            <div className="text-zinc-400 text-sm">On Hold</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-zion-cyan mb-1">{formatCurrency(projectStats.totalBudget)}</div>
            <div className="text-zinc-400 text-sm">Total Budget</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-white mb-1">{projectStats.averageProgress.toFixed(0)}%</div>
            <div className="text-zinc-400 text-sm">Avg Progress</div>
          </motion.div>
        </div>
      )}

      {/* Filters and Search */}
      {showFilters && (
        <div className="flex flex-wrap items-center gap-4 mb-6">
          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
          >
            <option value="all">All Statuses</option>
            <option value="planning">Planning</option>
            <option value="active">Active</option>
            <option value="on-hold">On Hold</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>

          {/* Priority Filter */}
          <select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
          >
            <option value="all">All Priorities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>

          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
          </div>
        </div>
      )}

      {/* Projects Display */}
      <div className="space-y-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl hover:bg-zinc-900/50 transition-all duration-300"
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusDisplay(project.status).color}`}>
                    <div className="flex items-center gap-1">
                      {getStatusDisplay(project.status).icon}
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </div>
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                    {project.priority.charAt(0).toUpperCase() + project.priority.slice(1)}
                  </span>
                </div>
                
                <p className="text-zinc-300 mb-3">{project.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {getDaysRemaining(project.endDate)} days remaining
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {project.team.length} team members
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    {project.client}
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {formatCurrency(project.budget)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 ml-4">
                <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-400/20 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-zinc-300">Progress</span>
                <span className="text-sm text-zinc-400">{project.progress}%</span>
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${project.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-2 bg-gradient-to-r from-zion-cyan to-blue-500 rounded-full"
                />
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Milestones */}
            <div className="border-t border-zinc-700/50 pt-4">
              <h4 className="text-sm font-medium text-white mb-3">Milestones</h4>
              <div className="space-y-2">
                {project.milestones.map((milestone) => (
                  <div
                    key={milestone.id}
                    className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="text-sm font-medium text-white">{milestone.title}</h5>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMilestoneStatusColor(milestone.status)}`}>
                          {milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(milestone.priority)}`}>
                          {milestone.priority.charAt(0).toUpperCase() + milestone.priority.slice(1)}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400">{milestone.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-zinc-400 mb-1">{milestone.assignee}</div>
                      <div className="text-xs text-zinc-500">{new Date(milestone.dueDate).toLocaleDateString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Target className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-zinc-300 mb-2">No projects found</h3>
          <p className="text-zinc-400 mb-4">
            Try adjusting your filters or create a new project to get started!
          </p>
          <button
            onClick={() => setShowProjectForm(true)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors"
          >
            Create Project
          </button>
        </motion.div>
      )}
    </div>
  );
};