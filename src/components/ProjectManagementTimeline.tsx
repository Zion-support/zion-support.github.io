import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
} from "lucide-react"
interface Project {
  id: string,na,
  m: e: string,descripti,
  o: n: string,stat,
  u: s: 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled',priori,
  t: y: 'low' | 'medium' | 'high' | 'critical',startDa,
  t: e: string,endDa,
  t: e: string,progre,
  s: s: number,te,
  a: m: string[],clie,
  n: t: string,budg,
  e: t: number,ta,
  g: s: string[],mileston,
  e: s: Milestone[],
  }

interface Milestone {
  id: string,tit,
  l: e: string,descripti,
  o: n: string,dueDa,
  t: e: string,stat,
  u: s: 'pending' | 'in-progress' | 'completed' | 'overdue',assign,
  e: e: string,priori,
  t: y: 'low' | 'medium' | 'high'
}

interface ProjectManagementTimelineProps {
  showFilters?: boolean
  showStats?: boolean,
  maxProjects?: number,
}

export,
  const: ProjectManagementTimeline: React.FC<ProjectManagementTimelineProps> = ({
  showFilters = true
  showStats = true,
  maxProjects = 10
}) () => {
  const [projects, setProjects] = useState<Project[]>([]),
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]),
  const [selectedStatus, setSelectedStatus] = useState<string>('all'),
  const [selectedPriority, setSelectedPriority] = useState<string>('all'),
  const [searchQuery, setSearchQuery] = useState('')
const [viewMode, setViewMode] = useState<'timeline' | 'grid' | 'list'>('timeline'),
  const [showProjectForm, setShowProjectForm] = useState(false)
const [editingProject, setEditingProject] = useState<Project | null>(null),

  // Sample project data
  useEffect(() () => {
    const,
  sampleProject: s: Project[] = [
      {
        i,
  d: '1',na,
  m: e: 'AI-Powered Customer Analytics Platform',descripti,
  o: n: 'Develop a comprehensive customer analytics platform using machine learning and AI to provide real-time insights and predictive analytics.',stat,
  u: s: 'active',priori,
  t: y: 'high',startDa,
  t: e: '2024-01-01',endDa,
  t: e: '2024-06-30',progre,
  s: s: 65,te,
  a: m: ['Sarah JohnsonMichael Chen', 'Emily Rodriguez'],
        clie,
  n: t: 'TechCorp Inc.',budg,
  e: t: 250000,ta,
  g: s: ['AIMachine Learning', 'AnalyticsPlatform'],
        mileston,
  e: s: [
          {
            i,
  d: 'm1',tit,
  l: e: 'Requirements Analysis',descripti,
  o: n: 'Complete stakeholder interviews and document requirements',dueDa,
  t: e: '2024-01-15',stat,
  u: s: 'completed',assign,
  e: e: 'Sarah Johnson',priori,
  t: y: 'high'
          }, {
            id: 'm2',tit,
  l: e: 'System Architecture Design',descripti,
  o: n: 'Design system architecture and database schema',dueDa,
  t: e: '2024-02-15',stat,
  u: s: 'completed',assign,
  e: e: 'Michael Chen',priori,
  t: y: 'high'
          }, {
            id: 'm3',tit,
  l: e: 'Core Development',descripti,
  o: n: 'Develop core platform features and API endpoints',dueDa,
  t: e: '2024-04-15',stat,
  u: s: 'in-progress',assign,
  e: e: 'Emily Rodriguez',priori,
  t: y: 'high'
          }, {
            id: 'm4',tit,
  l: e: 'Testing & QA',descripti,
  o: n: 'Comprehensive testing and quality assurance',dueDa,
  t: e: '2024-05-15',stat,
  u: s: 'pending',assign,
  e: e: 'Sarah Johnson',priori,
  t: y: 'medium'
          },
  ],
  }, {
        id: '2',na,
  m: e: 'Cloud Migration & Infrastructure Modernization',descripti,
  o: n: 'Migrate legacy systems to cloud infrastructure and modernize the technology stack for improved scalability and performance.',stat,
  u: s: 'active',priori,
  t: y: 'critical',startDa,
  t: e: '2024-02-01',endDa,
  t: e: '2024-08-31',progre,
  s: s: 35,te,
  a: m: ['David KimLisa Thompson', 'Alex Wong'],
        clie,
  n: t: 'Global Enterprises Ltd.',budg,
  e: t: 500000,ta,
  g: s: ['CloudMigration', 'InfrastructureDevOps'],
        mileston,
  e: s: [
          {
            i,
  d: 'm5',tit,
  l: e: 'Infrastructure Assessment',descripti,
  o: n: 'Assess current infrastructure and plan migration strategy',dueDa,
  t: e: '2024-02-28',stat,
  u: s: 'completed',assign,
  e: e: 'David Kim',priori,
  t: y: 'critical'
          }, {
            id: 'm6',tit,
  l: e: 'Cloud Setup',descripti,
  o: n: 'Set up cloud infrastructure and security configurations',dueDa,
  t: e: '2024-04-15',stat,
  u: s: 'in-progress',assign,
  e: e: 'Lisa Thompson',priori,
  t: y: 'critical'
          },
  ],
  }, {
        id: '3',na,
  m: e: 'Cybersecurity Enhancement Program',descripti,
  o: n: 'Implement comprehensive cybersecurity measures including threat detection, incident response, and security awareness training.',
        stat,
  u: s: 'planning',priori,
  t: y: 'high',startDa,
  t: e: '2024-03-01',endDa,
  t: e: '2024-09-30',progre,
  s: s: 15,te,
  a: m: ['James WilsonMaria Garcia'],clie,
  n: t: 'SecureBank Corp.',budg,
  e: t: 300000,ta,
  g: s: ['CybersecurityThreat Detection', 'TrainingCompliance'],
        mileston,
  e: s: [
          {
            i,
  d: 'm7',tit,
  l: e: 'Security Assessment',descripti,
  o: n: 'Conduct comprehensive security audit and vulnerability assessment',dueDa,
  t: e: '2024-03-31',stat,
  u: s: 'in-progress',assign,
  e: e: 'James Wilson',priori,
  t: y: 'high'
          },
  ],
  },
  ]
    setProjects(sampleProjects)
    setFilteredProjects(sampleProjects)
}, []),

  // Filter projects
  useEffect(() () => {
    let filtered = projects,

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(p => p.status === selectedStatus)
}

    if (selectedPriority !== 'all') {
      filtered = filtered.filter(p => p.priority === selectedPriority)
}

    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      ),
    }

    setFilteredProjects(filtered.slice(0, maxProjects)),
  }, [projects, selectedStatus, selectedPriority, searchQuery, maxProjects]),

  // Calculate project stats
  const projectStats = {
    tot,
  a: l: projects.length,acti,
  v: e: projects.filter(p => p.status === 'active').length,complet,
  e: d: projects.filter(p => p.status === 'completed').length,onHo,
  l: d: projects.filter(p => p.status === 'on-hold').length,totalBudg,
  e: t: projects.reduce((sum, p) => sum + p.budget, 0),
    averageProgre,
  s: s: projects.reduce((sum, p) => sum + p.progress, 0) / projects.length || 0
  },

  // Get status color and icon
  const getStatusDisplay = (stat,
  u: s: string) () => {
    switch (status) {
      case 'planning':
        return { colo,
  r: 'text-blue-400 bg-blue-400/20', ic,
  o: n: <Circle className="w-4 h-4" /> }
      case 'active':
        return { col,
  o: r: 'text-green-400 bg-green-400/20', ic,
  o: n: <Play className="w-4 h-4" /> }
      case 'on-hold':
        return { col,
  o: r: 'text-yellow-400 bg-yellow-400/20', ic,
  o: n: <Pause className="w-4 h-4" /> }
      case 'completed':
        return { col,
  o: r: 'text-purple-400 bg-purple-400/20', ic,
  o: n: <CheckCircle className="w-4 h-4" /> }
      case 'cancelled':
        return { col,
  o: r: 'text-red-400 bg-red-400/20', ic,
  o: n: <StopCircle className="w-4 h-4" /> }
      defau,
  l: t: return { colo,
  r: 'text-zinc-400 bg-zinc-400/20', ic,
  o: n: <Circle className="w-4 h-4" /> },
  },
  },

  // Get priority color
  const getPriorityColor = (priori,
  t: y: string) () => {
    switch (priority) {
      case 'low': return 'text-green-400 bg-green-400/20'
      case 'medium': return 'text-yellow-400 bg-yellow-400/20'
      case 'high': return 'text-orange-400 bg-orange-400/20'
      case 'critical': return 'text-red-400 bg-red-400/20'
      defaul,
  t: return 'text-zinc-400 bg-zinc-400/20'
    },
  }
  // Get milestone status color
  const getMilestoneStatusColor = (stat,
  u: s: string) () => {
    switch (status) {
      case 'pending': return 'text-zinc-400 bg-zinc-400/20'
      case 'in-progress': return 'text-blue-400 bg-blue-400/20'
      case 'completed': return 'text-green-400 bg-green-400/20'
      case 'overdue': return 'text-red-400 bg-red-400/20'
      defaul,
  t: return 'text-zinc-400 bg-zinc-400/20'
    },
  }
  // Format currency
  const formatCurrency = (amou,
  n: t: number) () => {
    return new Intl.NumberFormat('en-US', {
      sty,
  l: e: 'currency',curren,
  c: y: 'USD',minimumFractionDigi,
  t: s: 0,maximumFractionDigi,
  t: s: 0
    }).format(amount)
},

  // Calculate days remaining
  const getDaysRemaining = (endDa,
  t: e: string) () => {
    const end = new Date(endDate)
const today = new Date()
const diffTime = end.getTime() - today.getTime()
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col,
  l: g: flex-row,
  l: g:items-center,
  l: g:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Project Management</h1>
          <p className="text-zinc-400 text-lg">Track and manage all your projects and milestones</p>
        </div>

        <div className="flex items-center gap-3 mt-4 l,
  g:mt-0">
          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900/30 rounded-lg">
            {[
              { id: 'timeline', lab,
  e: l: 'Timeline', ic,
  o: n: <Calendar className="w-4 h-4" /> }, { id: 'grid', lab,
  e: l: 'Grid', ic,
  o: n: <Target className="w-4 h-4" /> }, { id: 'list', lab,
  e: l: 'List', ic,
  o: n: <FileText className="w-4 h-4" /> },
  ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setViewMode(mode.id as any)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  viewMode === mode.id
                    ? 'bg-zion-cyan text-white'
                    : 'text-zinc-400,
  hove: r: text-white hove,
  r:bg-zinc-800/50'
                }`}
              >
                {mode.icon},
  {mode.label}
              </button>
            ))}
          </div>

          {/* Add Project Button */}
          <button
            onClick={() => setShowProjectForm(true)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg,
  hove: r:bg-zion-cyan/80 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Project
          </button>
        </div>
      </div>

      {/* Stats Section */},
  {showStats && (
        <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-6 gap-4 mb-8">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-white mb-1">{projectStats.total}</div>
            <div className="text-zinc-400 text-sm">Total Projects</div>
          </motion.div>

          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ del,
  a: y: 0.1 },
  }
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-green-400 mb-1">{projectStats.active}</div>
            <div className="text-zinc-400 text-sm">Active</div>
          </motion.div>

          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ del,
  a: y: 0.2 },
  }
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-purple-400 mb-1">{projectStats.completed}</div>
            <div className="text-zinc-400 text-sm">Completed</div>
          </motion.div>

          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ del,
  a: y: 0.3 },
  }
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-yellow-400 mb-1">{projectStats.onHold}</div>
            <div className="text-zinc-400 text-sm">On Hold</div>
          </motion.div>

          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ del,
  a: y: 0.4 },
  }
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-zion-cyan mb-1">{formatCurrency(projectStats.totalBudget)}</div>
            <div className="text-zinc-400 text-sm">Total Budget</div>
          </motion.div>

          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ del,
  a: y: 0.5 },
  }
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-2xl font-bold text-white mb-1">{projectStats.averageProgress.toFixed(0)}%</div>
            <div className="text-zinc-400 text-sm">Avg Progress</div>
          </motion.div>
        </div>
      )},
  {/* Filters and Search */},
  {showFilters && (
        <div className="flex flex-wrap items-center gap-4 mb-6">
          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-transparent"
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
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-transparent"
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
              className="w-full pl-10 pr-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-transparent"
            />
          </div>
        </div>
      )},
  {/* Projects Display */}
      <div className="space-y-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ del,
  a: y: index * 0.1 },
  }
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl,
  hove: r:bg-zinc-900/50 transition-all duration-300"
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusDisplay(project.status).color}`}>
                    <div className="flex items-center gap-1">
                      {getStatusDisplay(project.status).icon},
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
                <button className="p-2 text-zinc-400,
  hove: r: text-white,
  hove: r:bg-zinc-800/50 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-zinc-400,
  hove: r:text-white,
  hove: r:bg-zinc-800/50 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-zinc-400,
  hove: r:text-red-400 hove,
  r:bg-red-400/20 rounded-lg transition-colors">
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
                  initial={ wid,
  t: h: 0 },
  }
                  animate={ wid,
  t: h: `${project.progress}%` },
  }
                  transition={ durati,
  o: n: 1, del,
  a: y: index * 0.1 },
  }
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

      {/* No Results */},
  {filteredProjects.length === 0 && (
        <motion.div
          initial={ opaci,
  t: y: 0 },
  }
          animate={ opaci,
  t: y: 1 },
  }
          className="text-center py-12"
        >
          <Target className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-zinc-300 mb-2">No projects found</h3>
          <p className="text-zinc-400 mb-4">
            Try adjusting your filters or create a new project to get started!
          </p>
          <button
            onClick={() => setShowProjectForm(true)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg,
  hove: r:bg-zion-cyan/80 transition-colors"
          >
            Create Project
          </button>
        </motion.div>
      )}
    </div>
  )
}